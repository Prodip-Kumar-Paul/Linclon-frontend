import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
   token: "",
   isLoggedIn: false,
   userType: "User",
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
   const userType = localStorage.getItem("type");

   const remainingtime = calculateRemainingTime(storeExpirationDate);

   console.log("time remains ", remainingtime);

   if (remainingtime <= 60000) {
      localStorage.removeItem("token");
      localStorage.removeItem("type");
      localStorage.removeItem("expirationTime");
      return null;
   }

   return {
      token: storedToken,
      duration: remainingtime,
      userType,
   };
};

export const AuthContextProvider = (props) => {
   const tokenData = retriveStoredToken();
   let initialToken, type;
   if (tokenData) {
      initialToken = tokenData.token;
      type = tokenData.userType;
   }

   const [token, setToken] = useState(initialToken);

   const userIsLoggedIn = !!token;

   const logoutHandler = useCallback(() => {
      // console.log("Call");
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("type");
      localStorage.removeItem("expirationTime");

      if (logoutTimer) {
         clearTimeout(logoutTimer);
      }
   }, []);

   const loginHandler = (data) => {
      const { token, userType } = data;
      /**
       * TODO -> add expiration logic
       */
      const expirationTime = 604800000;
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("type", userType);
      localStorage.setItem("expirationTime", expirationTime);

      logoutTimer = setTimeout(logoutHandler, expirationTime);
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
      userType: type,
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
