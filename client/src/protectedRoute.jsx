import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default ProtectedRoute;
