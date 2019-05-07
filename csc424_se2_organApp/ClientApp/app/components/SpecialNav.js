import React from 'react';
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import {clearUser} from '../authActions';
import {NavLink,withRouter} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import makeSelectAuth from '../authSelector';

const SpecialNav = (props) => {
    let {success,role} = props;
    if (success) {
      if (role == "staff") {
        return (
          < Navbar bg = "primary" variant = "dark" >
            {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
            <Navbar.Brand as={NavLink} to="/staff/home">OrganApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to='/staff/home'>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/staff/searchbox">Search</Nav.Link>
            </Nav>
            <LinkContainer to='/'>
                <Button variant="primary" type="button" onClick={()=>props.dispatch(clearUser())}><i className="fas fa-sign-out-alt"></i></Button>
            </LinkContainer>
          </Navbar >
        )
      } else if (role == "client"){
        return (
          < Navbar bg="primary" variant="dark" >
            {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
            <Navbar.Brand as={NavLink} to="/client/home">OrganApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/client/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/client/information">My Information</Nav.Link>
              </Nav.Item>
            </Nav>
            <LinkContainer to='/'>
                <Button variant="primary" type="button" onClick={()=>props.dispatch(clearUser())}><i className="fas fa-sign-out-alt"></i></Button>
            </LinkContainer>          
            </Navbar >
        )
      } 
    }
    else {
      return (
        < Navbar bg="primary" variant="dark" >
          {/* <i className="fab fa-accessible-icon fa-2x"></i> */}
          <Navbar.Brand as={NavLink} to="/">OrganApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink}to="/login" >Login</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar >
      )
    }
  }
const mapStateToProps = createStructuredSelector({
    auth: makeSelectAuth()
});
export default connect(mapStateToProps)(withRouter(SpecialNav));