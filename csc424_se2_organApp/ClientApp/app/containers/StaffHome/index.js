/**
 *
 * StaffHome
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
import makeSelectStaffHome from "./selectors";
import reducer from "./reducer";
import saga from "./saga";


/* eslint-disable react/prefer-stateless-function */
export class StaffHome extends React.PureComponent {
  constructor(){
    super();  
    this.state ={
    
    };
  }
 
  render() {
    return (
      <div>
        <Helmet>
          <title>StaffHome</title>
          <meta name="description" content="Description of StaffHome" />
        </Helmet>
      </div>
    );
  }
}

StaffHome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  staffHome: makeSelectStaffHome()
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

const withReducer = injectReducer({ key: "staffHome", reducer });
const withSaga = injectSaga({ key: "staffHome", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(StaffHome);
