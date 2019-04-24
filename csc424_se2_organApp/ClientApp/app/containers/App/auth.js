import decode from "jwt-decode";
import React from 'react';
import {Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
export const setAuthToken = token =>{
  if(token){
      //apply to every request
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  }
  else{
      delete axios.defaults.headers.common['Authorization'];
  }
}

export const decodeToken =(token)=>{
  const decoded = decode(token);
  const {exp} = decoded; 
  let role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  const name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  if(role !== 'staff')
    role='client';
  return {
    exp,
    role,
    name
  };
}

export const signOut = () => {
    localStorage.removeItem("token");
  }
  
export const checkAuth = () => {
    const token = localStorage.getItem("token");
    let decoded;
    if (token != null){
      decoded = decodeToken(token);
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
    setAuthToken(token);
    return { success: true, role: decoded.role };
  };

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
      const {path} =rest;
      const {success,role} = checkAuth();
      let newRole = role;
      if(newRole !== 'staff')
        newRole = 'client';
      if (path.includes(`${newRole}`))
        return (
          success == true
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
