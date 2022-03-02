import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currrentTime = new Date().getMilliseconds();
  // const adjExpiration = new Date(expirationTime).getTime();
  // console.log(currrentTime, adjExpiration);
  const remainingDuration = expirationTime - currrentTime;

  return remainingDuration;
};

let logoutTimer;

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  if (!storedToken) {
    return null;
  }
  const storeExpirationDate = localStorage.getItem("expirationTime");

  const remainingtime = calculateRemainingTime(storeExpirationDate);

  console.log("time remains ", remainingtime);

  if (remainingtime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingtime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    console.log("Call");
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (data) => {
    const { token, expirationTime } = data;

    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    logoutTimer = setTimeout(logoutHandler, 604800000);
  };

  useEffect(() => {
    if (tokenData) {
      console.log("Token expired after ", tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
