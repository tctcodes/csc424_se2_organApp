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

/* eslint-disable react/prefer-stateless-function */
export class ClientHome extends React.PureComponent {
  componentDidMount(){
    this.props.checkInfo();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>ClientHome</title>
          <meta name="description" content="Description of ClientHome" />
        </Helmet>
        WELCOME!
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
