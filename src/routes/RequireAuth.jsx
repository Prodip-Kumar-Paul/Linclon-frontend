import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const RequireAuth = ({ allowedRoles }) => {
   const location = useLocation();
   const authCtx = useContext(AuthContext);
   console.log(allowedRoles, authCtx);

   return allowedRoles.includes(authCtx.userType) ? (
      <Outlet />
   ) : authCtx?.isLoggedIn ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
   ) : (
      <Navigate to="/login" state={{ from: location }} replace />
   );
};

export default RequireAuth;
