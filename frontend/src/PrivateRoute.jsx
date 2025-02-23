import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
