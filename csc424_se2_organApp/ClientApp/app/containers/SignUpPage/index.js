/**
 *
 * SignUpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isEmail, normalizeEmail } from 'validator';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Form } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEmail, makeSelectPassword, makeSelectRole } from './selectors';
import { setEmail, setPassword, setRole, addUserToDB } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable */
export class SignUpPage extends React.Component {
  constructor(){
    super();
    this.email = null;
    this.pass = null;
    this.role = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
  }

  handleEmailChange(e){
    this.email = e.target.value;
  }

  handlePwChange(e){
    this.pass = e.target.value;
  }

  handleRoleChange(e){
    this.role = e.target.value;
  }

  handleClick() {
    if(this.email == "" || this.email == null){
      alert("Email field cannot be blank");
      return;
    }
    if(!isEmail(this.email)){
      alert("Email not valid");
      return;
    }
    if(this.pass == "" || this.pass == null){
      alert("Password field cannot be blank");
      return;
    }
    if(this.role == "" || this.pass == null || this.pass == 'Choose...'){
      alert("Must select a role");
      return;
    }
    
    this.email = normalizeEmail(this.email);
    this.props.onSetEmail(this.email);
    this.props.onSetPass(this.pass);
    this.props.onSetRole(this.role);
    this.props.onAddUserToDB();
  }

  render() {
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
          <title>Sign Up Page</title>
          <meta name="description" content="Description of SignUpPage" />
        </Helmet>
        <h1 style={{textAlign: 'center'}}>Sign Up Page</h1>
        <Form style={{ margin: "3rem" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder="Email..." onChange={this.handleEmailChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Password
            </Form.Label>
          <Form.Control  type="password" placeholder="Password..." onChange={this.handlePwChange} />
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label>Role</Form.Label>
            <Form.Control 
              onChange={this.handleRoleChange}
              as="select">
              <option value="">Choose...</option>
              <option value="candidate">Candidate</option>
              <option value="donor">Donor</option>
              <option value="staff">Staff</option>
            </Form.Control>
          </Form.Group>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button variant="primary" type="button" onClick={this.handleClick}>
              Sign Up
            </Button>
            <Button variant="link" type="button" onClick={()=>{}}>
              Forgotten Password
            </Button>
          </div>
        </Form>
        <br />
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  role: makeSelectRole(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetEmail: email => dispatch(setEmail(email)),
    onSetPass: pass => dispatch(setPassword(pass)),
    onSetRole: role => dispatch(setRole(role)),
    onAddUserToDB: () => dispatch(addUserToDB()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUpPage', reducer });
const withSaga = injectSaga({ key: 'signUpPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
