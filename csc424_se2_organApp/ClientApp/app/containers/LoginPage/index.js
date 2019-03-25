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

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import { makeSelectPassword, makeSelectEmail } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { changeEmail, changePassword, login } from "./actions";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  render() {
    return <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        </Helmet>
        <Form style={{ margin: "3rem" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Email Address
            </Form.Label>
            <Form.Control value={this.props.email} type="email" placeholder="Email..." onChange={this.props.onChangeEmail} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              Password
            </Form.Label>
          <Form.Control value={this.props.password} type="password" placeholder="Password..." onChange={this.props.onChangePassword} />
          </Form.Group>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button variant="primary" type="button" onClick={this.props.onLogin}>
              Login
            </Button>
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
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
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
