import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ 
    children,
    anonymous = false, 
}) => {
   const location = useLocation();
   const from = location.state?.from || "/";

   const { isLoggedIn } = useContext(CurrentUserContext);

   if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
   }

   if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
   }
   return children;
}

export default ProtectedRoute;