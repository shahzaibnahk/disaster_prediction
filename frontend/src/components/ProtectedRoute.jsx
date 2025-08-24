import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, redirect }) => {
  return isAuthenticated ? children : <Navigate to={redirect} replace />;
};

export default ProtectedRoute;
