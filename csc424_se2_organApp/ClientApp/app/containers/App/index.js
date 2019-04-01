/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from "containers/SignUpPage/Loadable";
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import LoginPage from 'containers/LoginPage/Loadable';
import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  const ext = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
  const decoded = decode(token);
  try {
    if (decoded.exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
  console.log(decoded[ext]);
  return { success: true, role: decoded[ext] };
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkAuth().success
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
const Protected = () => <h3>Protected</h3>;
const Unauthorized = () => <h1 style={{textAlign: 'center'}}>You role is not authorized to view this page.</h1>;
const NurseMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Nurse or Admin</h1>;
const PhysicianMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Physician or Admin</h1>;
const AdminMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Admin</h1>;

const Nurse = () => (
  <Route render= { () => (
    checkAuth().role == "Nurse" || checkAuth().role == "Admin"
      ? <NurseMessage></NurseMessage> 
      : <Unauthorized></Unauthorized>
  )} />
)
const Physician = () => (
  <Route render={() => (
    checkAuth().role == "Physician" || checkAuth().role == "Admin"
      ? <PhysicianMessage></PhysicianMessage>
      : <Unauthorized></Unauthorized>
  )} />
)
const Admin = () => (
  <Route render={() => (
    checkAuth().role == "Admin"
      ? <AdminMessage></AdminMessage>
      : <Unauthorized></Unauthorized>
  )} />
)


export default function App() {
  return <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path='/protected' component={Protected} />
          <PrivateRoute path="/nurse" component={Nurse} />
          <PrivateRoute path="/physician" component={Physician} />
         <PrivateRoute path="/admin" component={Admin} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>;
}
