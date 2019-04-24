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
import SearchBox from 'containers/SearchBox/Loadable';
import SignUpPage from "containers/SignUpPage/Loadable";
import CanForm from "containers/CanForm/Loadable";
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RegForm from 'containers/RegForm/Loadable';
import ClientHome from 'containers/ClientHome/Loadable';

import GlobalStyle from '../../global-styles';
import LoginPage from 'containers/LoginPage/Loadable';

import { Form, Navbar, Nav, FormControl, Button } from "react-bootstrap";
import {checkAuth,signOut} from "./auth";
import PrivateRoute from "./auth"

const SpecialNav = () => {
  let {success,role} = checkAuth();
  console.log(role);
  if (success) {
    if (role == "staff") {
      return (
        < Navbar bg = "primary" variant = "dark" >
          {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
          <Navbar.Brand href="/">OrganApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/staff/searchbox">Search</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
          <Button variant="primary" type="button" href="/" onClick={signOut}><i className="fas fa-sign-out-alt"></i></Button>
        </Navbar >
      )
    } else if (role == "client"){
      return (
        < Navbar bg="primary" variant="dark" >
          {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
          <Navbar.Brand href="/client/home">OrganApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/client/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/client/information">My Information</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
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
        
        {/* <Route path="/canform" component={CanForm}/> */}
        <PrivateRoute path="/client/home" component={ClientHome}/>
        <PrivateRoute path="/client/information" component={RegForm} />
        <PrivateRoute path="/staff/searchbox" component={SearchBox} />
        <PrivateRoute path="/staff/canform" component={CanForm} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>;
}
