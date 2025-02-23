import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { authenticateUser } from './auth';

// const PrivateRoute = ({ element, ...rest }) => {
//   const isAuthenticated = authenticateUser();

//   if (isAuthenticated) {
//     return element;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { authenticateUser } from './auth';

// const PrivateRoute = ({ path, element }) => {
//     const isAuthenticated = authenticateUser();
  
//     if (!isAuthenticated) {
//         return <Route path={path} element={element} />;
//     } else{

//         return <Navigate to="/login" />;
//     }
  
//   };

//export default PrivateRoute;

// const PrivateRoute = ({ children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticateUser(rest.username, rest.password) ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/login',
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };


// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { authenticateUser } from './auth';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = authenticateUser(rest.username, rest.password);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to={{
//               pathname: '/login',
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
