import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../store/auth-context";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const authCtx = useContext(AuthContext);

   return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
         {...rest}
         render={(props) =>
            authCtx.isLoggedIn ? (
               <Component {...props} />
            ) : (
               <Redirect to="/linclonauth" />
            )
         }
      />
   );
};

export default PrivateRoute;
