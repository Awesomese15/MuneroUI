import React, {useState, useEffect} from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/authService'

// const PrivateRoute = ({ component: Component, ...rest }) => {

//     return(
//         <Route
//         {...rest}
//         render={(props) =>
//           authService.login() ? (
//             <Component {...props} />
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//     );

// };

// export default PrivateRoute;


const PrivateRoute = ({ Component }) => {
 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authenticateUser = async () => {
          const isAuthenticatedValue = await authService.isAuthenticated();
          setIsAuthenticated(isAuthenticatedValue);
        };
      
        authenticateUser();
      }, []); 

 console.log("isAuthenticated",isAuthenticated)
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;