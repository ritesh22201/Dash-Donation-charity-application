import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isLogged = localStorage.getItem("ch-token") || '';

  return isLogged ? children : <Navigate to="/users/login" />; // If user is logged in, render the protected route (children), else navigate to the login page.
}

export default PrivateRoutes;
