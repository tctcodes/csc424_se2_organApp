/**
 *
 * ClientHome
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectClientHome from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import {checkInfo} from "./actions"
import makeSelectAuth from "../../authSelector";
import { Button, Jumbotron } from "react-bootstrap";

/* eslint-disable react/prefer-stateless-function */
export class ClientHome extends React.PureComponent {
  componentDidMount(){
    this.props.checkInfo();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Client Home</title>
          <meta name="description" content="Description of Client Home Page" />
        </Helmet>
        <Jumbotron style={{
          height: 'calc(100vh - 56px', margin: '0', backgroundColor: 'white', textAlign: 'center'
        }}>
          <h1>Thank you for participating!</h1>
          <p>
            OrganApp is a collaborative effort between The University of Southern Mississippi and Hattiesburg Clinic.
            The purpose of this project is to automate the process of matching liver donors to candidates. This would
            greatly reduce the burden of manual selection on healtcare proffesionals.
            <Button variant="link" href="/about" style={{ paddingTop: '0' }}>Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

ClientHome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  clientHome: makeSelectClientHome(),
  auth: makeSelectAuth()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    checkInfo: ()=>dispatch(checkInfo())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "clientHome", reducer });
const withSaga = injectSaga({ key: "clientHome", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ClientHome);
