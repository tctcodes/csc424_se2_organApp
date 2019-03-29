/**
 *
 * AuthWrapper
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
import makeSelectAuthWrapper from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

/* eslint-disable react/prefer-stateless-function */
export class AuthWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>AuthWrapper</title>
          <meta name="description" content="Description of AuthWrapper" />
        </Helmet>
      </div>
    );
  }
}

AuthWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  authWrapper: makeSelectAuthWrapper()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "authWrapper", reducer });
const withSaga = injectSaga({ key: "authWrapper", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AuthWrapper);
