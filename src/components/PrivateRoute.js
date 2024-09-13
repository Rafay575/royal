import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Check if user is authenticated (can be improved with actual token verification)
const isAuthenticated = () => {
  return localStorage.getItem("authToken"); // Assuming the JWT token is stored in localStorage
};

// Private Route component that will render the child components if authenticated
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
