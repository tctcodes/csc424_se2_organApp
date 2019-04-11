/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>
          <FormattedMessage {...messages.header} />
        </h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <Link to='/login'>
            <Button variant="primary" type="button">
              Log In
            </Button>
          </Link>
          <Link to='/signup'>
            <Button variant="primary" type="button">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
