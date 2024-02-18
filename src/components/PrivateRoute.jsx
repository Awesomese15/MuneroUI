import React, {useState, useEffect, useNa} from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const{Component} = props;
    const navigate = useNavigate()
    useEffect(()=>{
        let isTokenPresent = sessionStorage.getItem('Authorization');
        if(!isTokenPresent){
            navigate('/');
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )


}

//     return(
//         <Route
//         {...rest}
//         render={(props) =>
//           authService.isAuthenticated() ? (
//             <Component {...props} />
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//     );

// };

// export default PrivateRoute;


// const PrivateRoute = ({ Component }) => {
 
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const authenticateUser = async () => {
//           const isAuthenticatedValue = await authService.isAuthenticated();
//           setIsAuthenticated(isAuthenticatedValue);
//           return isAuthenticated ? <Component /> : <Navigate to="/login" />;
//         };
      
//         authenticateUser();
//       }, []); 

//  console.log("isAuthenticated",isAuthenticated)
  
// };
export default PrivateRoute;