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
import { makeSelectPassword, makeSelectEmail, makeSelectRole, makeSelectToken } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { changeEmail, changePassword, changeRole, login } from "./actions";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.token) {
      return <Redirect to={from} />
    }
    return <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <h1 style={{ textAlign: "center" }}>Login Page</h1>
        <Form style={{ margin: "3rem" }}>
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
          <Form.Group controlId="formGridState">
            <Form.Label>Role</Form.Label>
            <Form.Control value={this.props.role} onChange={this.props.onChangeRole} as="select">
              <option>Choose...</option>
              <option>Nurse</option>
              <option>Physician</option>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button variant="primary" type="button" onClick={this.props.onLogin}>
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
      </div>;
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
  role: makeSelectRole(),
  token: makeSelectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onChangeRole: evt => dispatch(changeRole(evt.target.value)),
    onLogin: () => dispatch(login()),
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
