import React from 'react';
import {Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import makeSelectAuth from "../../authSelector";





  
// export const checkAuth = () => {
//     const token = localStorage.getItem("token");
//     let decoded;
//     if (token != null){
//       decoded = decodeToken(token);
//       try {
//         if (decoded.exp < new Date().getTime() / 1000) {
//           return { success: false};
//         }
//       } catch (e) {
//         console.log(e);
//         return { success: false};
//       }
//     } else {
//       return { success: false };
//     }
//     setAuthToken(token);
//     return { success: true, role: decoded.role };
//   };

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      const { path } = rest;
      const { isAuthenticated } = auth;
      const { role } = auth.user;
      if (path.includes(`${role}`))
        return (
          isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
        )
      else {
        props.history.goBack();

      }
    }
    } />
  )
}
const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth()
});

 export default connect(mapStateToProps)(PrivateRoute);

