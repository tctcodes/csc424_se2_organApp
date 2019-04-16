import decode from "jwt-decode";
import React from 'react';
import {Route, Redirect } from 'react-router-dom';

export const signOut = () => {
    localStorage.removeItem("token");
  }
  
export const checkAuth = () => {
    const token = localStorage.getItem("token");
    const ext = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    let decoded;
    if (token != null){
      decoded = decode(token);
      try {
        if (decoded.exp < new Date().getTime() / 1000) {
          return { success: false};
        }
      } catch (e) {
        console.log(e);
        return { success: false};
      }
    } else {
      return { success: false };
    }
    console.log(decoded);
    return { success: true, role: decoded[ext] };
  };

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      checkAuth().success == true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  )
 export default PrivateRoute;

// Test Routes

//   const Nurse = () => (
//     <Route render= { () => (
//       checkAuth().role == "Nurse" || checkAuth().role == "Admin"
//         ? <NurseMessage /> 
//         : <Unauthorized />
//     )} />
//   )
//   const Physician = () => (
//     <Route render={() => (
//       checkAuth().role == "Physician" || checkAuth().role == "Admin"
//         ? <PhysicianMessage />
//         : <Unauthorized />
//     )} />
//   )
//   const Admin = () => (
//     <Route render={() => (
//       checkAuth().role == "Admin"
//         ? <AdminMessage />
//         : <Unauthorized />
//     )} />
//   )

// const Protected = () => <h3>Protected</h3>;
// const Unauthorized = () => <h1 style={{textAlign: 'center'}}>You role is not authorized to view this page.</h1>;
// const NurseMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Nurse or Admin</h1>;
// const PhysicianMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Physician or Admin</h1>;
// const AdminMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Admin</h1>;
