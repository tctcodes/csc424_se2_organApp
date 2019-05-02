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
import { Button, Jumbotron } from "react-bootstrap";
import { Helmet } from 'react-helmet';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <Jumbotron style={{
          height: 'calc(100vh - 56px', margin: '0', backgroundColor: 'white', textAlign: 'center'}}>
          <h1>Welcome to OrganApp!</h1>
          <p>
            OrganApp is a collaborative effort between The University of Southern Mississippi and Hattiesburg Clinic.
            The purpose of this project is to automate the process of matching liver donors to candidates. This would
            greatly reduce the burden of manual selection on healtcare proffesionals.
            <Button variant="link" href="/about" style={{ paddingTop: '0' }}>Learn more</Button>
          </p>
          <h5>
            Want to participate in our project as a donor or candidate?
          </h5>
          <p>
            <Button variant="primary" href="/signup">Sign Up!</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
