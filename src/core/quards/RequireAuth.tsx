import React, { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token && location.pathname !== "/login") {
    // redirect to login and save the current path for return
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (token && location.pathname === "/login") {
    // if already logged in, redirect to products page
    return <Navigate to="/products" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
