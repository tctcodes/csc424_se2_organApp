/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from "containers/SignUpPage/Loadable";
import CanForm from "containers/CanForm/Loadable";
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import LoginPage from 'containers/LoginPage/Loadable';
import decode from "jwt-decode";
import { Form, Navbar, Nav, FormControl, Button } from "react-bootstrap";

const signOut = () => {
  localStorage.removeItem("token");
}

const checkAuth = () => {
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
const Protected = () => <h3>Protected</h3>;
const Unauthorized = () => <h1 style={{textAlign: 'center'}}>You role is not authorized to view this page.</h1>;
const NurseMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Nurse or Admin</h1>;
const PhysicianMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Physician or Admin</h1>;
const AdminMessage = () => <h1 style={{ textAlign: 'center' }}>If you are seeing this your role is Admin</h1>;

const Nurse = () => (
  <Route render= { () => (
    checkAuth().role == "Nurse" || checkAuth().role == "Admin"
      ? <NurseMessage /> 
      : <Unauthorized />
  )} />
)
const Physician = () => (
  <Route render={() => (
    checkAuth().role == "Physician" || checkAuth().role == "Admin"
      ? <PhysicianMessage />
      : <Unauthorized />
  )} />
)
const Admin = () => (
  <Route render={() => (
    checkAuth().role == "Admin"
      ? <AdminMessage />
      : <Unauthorized />
  )} />
)

const SpecialNav = () => {
  if (checkAuth().success) {
    if (checkAuth().role == "Admin") {
      return (
        < Navbar bg = "primary" variant = "dark" >
          {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
          <Navbar.Brand href="/">OrganApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nurse">Nurse</Nav.Link>
            <Nav.Link href="/physician">Physician</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/protected">Protected</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Button variant="primary" type="button" href="/" onClick={signOut}><i className="fas fa-sign-out-alt"></i></Button>
        </Navbar >
      )
    } else if (checkAuth().role == "Nurse" || checkAuth().role == "Physician"){
      return (
        < Navbar bg="primary" variant="dark" >
          {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
          <Navbar.Brand href="/">OrganApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/nurse">Nurse</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/physician">Physician</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Button variant="primary" type="button" href="/" onClick={signOut}><i className="fas fa-sign-out-alt"></i></Button>
        </Navbar >
      )
    } 
  }
  else {
    return (
      < Navbar bg="primary" variant="dark" >
        {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
        <Navbar.Brand href="/">OrganApp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar >
    )
  }
}

export default function App() {
  return <div>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
      </Helmet>
      <SpecialNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path='/protected' component={Protected} />
        <PrivateRoute path="/nurse" component={Nurse} />
        <PrivateRoute path="/physician" component={Physician} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/canform" component={CanForm}/>
        <Route component={NotFoundPage} />
        {/* <Route path="/canform" render={props => <CanForm selectedPxId="1232752" />} /> */}
      </Switch>
      <GlobalStyle />
    </div>;
}
