/**
 *
 * LoginPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { Button, Form } from 'react-bootstrap';
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";



import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import { makeSelectPassword, makeSelectEmail,makeSelectLoading } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { changeEmail, changePassword, login, clearCredentials } from "./actions";
import makeSelectAuth from "../../authSelector";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {

  componentWillUnmount(){
    this.props.clearCredentials();
  }
  render() {
    if(this.props.loading)
      return(<div className="d-flex justify-content-center" style ={{height:"100vh"}}><div className ="spinner-border" style={{margin: 'auto'}}/></div>)

    if (this.props.auth.isAuthenticated) {
        const {role} = this.props.auth.user;
        return <Redirect to={`/${role}/home`} />
    }
    
    return( <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <h1 style={{ textAlign: "center" }}>Login Page</h1>
        <Form onSubmit={this.props.onLogin} style={{ margin: "3rem" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Email Address
            </Form.Label>
            <Form.Control required value={this.props.email} type="email" placeholder="Email..." onChange={this.props.onChangeEmail} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Password
            </Form.Label>
            <Form.Control required value={this.props.password} type="password" placeholder="Password..." onChange={this.props.onChangePassword} />
          </Form.Group>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link to="/signup">
              <Button variant="secondary" type="button">
                Sign Up
              </Button>
            </Link>
            <Button variant="link" type="button">
              Forgotten Password
            </Button>
          </div>
        </Form>
    </div>);
  }
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeRole: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  auth:makeSelectAuth(),
  loading:makeSelectLoading()
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onLogin: (e) => {e.preventDefault(); dispatch(login())},
    clearCredentials: () => dispatch(clearCredentials())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "loginPage", reducer });
const withSaga = injectSaga({ key: "loginPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LoginPage);
