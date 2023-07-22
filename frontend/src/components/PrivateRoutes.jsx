import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("ch-token")) || {}
  const isLogged=token.token;


  return isLogged ? children : <Navigate to="/login" />; // If user is logged in, render the protected route (children), else navigate to the login page.
}

export default PrivateRoutes;
