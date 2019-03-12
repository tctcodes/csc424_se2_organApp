/**
 *
 * DonorInfoForm
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
import makeSelectDonorInfoForm from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

/* eslint-disable react/prefer-stateless-function */
export class DonorInfoForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DonorInfoForm</title>
          <meta name="description" content="Description of DonorInfoForm" />
        </Helmet>
      </div>
    );
  }
}

DonorInfoForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  donorInfoForm: makeSelectDonorInfoForm()
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

const withReducer = injectReducer({ key: "donorInfoForm", reducer });
const withSaga = injectSaga({ key: "donorInfoForm", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DonorInfoForm);
