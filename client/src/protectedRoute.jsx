import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  const token = Cookies.get('jwtToken');
  //console.log(token);
  if(token === undefined || token === null) return false
  return token ? true : false;
};

const ProtectedRoute = () => {
  //console.log('Is Authenticated:');
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
