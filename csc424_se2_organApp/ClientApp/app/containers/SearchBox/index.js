/**
 *
 * SearchBox
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {
  Form,
  Button,
  Dropdown,
  Navbar,
} from "react-bootstrap";
import { setPXID, submitSearch, setBloodGroup, setDonorOrCandidate, setPXState } from './actions';
import { makeSelectPXID, makeSelectSearchResults, makeSelectPXState, makeSelectBloodGroup, makeSelectDonorOrCandidate } from './selectors';

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";

function PrintPxRecord(props) {
  console.log('hello!');
  console.log(props.pxidRecord.size);
  if(props.pxidRecord.size === 0) {
    console.log('True');
    return (
      <h1>Input search request for Patient Record</h1>
    );
  } else {
    console.log('False');
    const recordList = Object.keys(props.pxidRecord).map(key =>
      <p key={key}>{key}: {props.pxidRecord[key]} </p>
    )
    return (
      <div>{recordList}</div>
    );
  }
}

/* eslint-disable react/prefer-stateless-function */
export class SearchBox extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>SearchBox</title>
          <meta name="description" content="Description of SearchBox" />
        </Helmet>
        <div>
          <Navbar className="bg-dark" sticky="top">
            {/* Text entry for patient-id */}
            <Form inline>
              <Form.Group controlId="formBasicSearch">
                <Form.Control
                  type="text"
                  placeholder="Patient ID"
                  onChange={this.props.onSetPXID}
                />
              </Form.Group>
            </Form>
            {/* Donor/Candidate Selection */}
            <Form.Group className="mt-3">
              <Form.Control
                as="select"
                onChange={this.props.onSetDonorOrCandidate}
                >
                <option>Select Status</option>
                <option>Donor</option>
                <option>Candidate</option>
              </Form.Control>
            </Form.Group>
            {/* Dropdown filter for broad filter options */}
            <Dropdown>
              <Dropdown.Toggle>
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form.Group>
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.props.onSetBloodGroup}
                    >
                    <option>Select Blood Group</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                  </Form.Control>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.props.onSetPxState}
                    >
                    <option>Select State</option>
                    <option>AL</option>
                    <option>AK</option>
                    <option>AS</option>
                    <option>AZ</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>DC</option>
                    <option>FM</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>GU</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IL</option>
                    <option>IN</option>
                    <option>IA</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MH</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MI</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NV</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>MP</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>OR</option>
                    <option>PW</option>
                    <option>PA</option>
                    <option>PR</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>SD</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VI</option>
                    <option>VA</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                  </Form.Control>
                </Form.Group>
              </Dropdown.Menu>
            </Dropdown>
            {/* Button to submit query */}
            <Button
              variant="primary"
              type="button"
              onClick = {this.props.onSearchSubmit}
            >
              Search
            </Button>
          </Navbar>
        </div>
        {/* Display patient information */}
        <div>
          <PrintPxRecord pxidRecord={this.props.pxidRecord}/>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  pxid: PropTypes.string,
  onSetPXID: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  onSetBloodGroup: PropTypes.func,
  onSetDonorOrCandidate: PropTypes.func,
  onSetPxState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pid: makeSelectPXID(),
  pxidRecord: makeSelectSearchResults(),
  pxState: makeSelectPXState(),
  bloodGroup: makeSelectBloodGroup(),
  donorOrCandidate: makeSelectDonorOrCandidate(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetPXID: evt => dispatch(setPXID(evt.target.value)),
    onSetBloodGroup: evt => dispatch(setBloodGroup(evt.target.value)),
    onSetDonorOrCandidate: evt => dispatch(setDonorOrCandidate(evt.target.value)),
    onSetPxState: evt => dispatch(setPXState(evt.target.value)),
    onSearchSubmit: () => dispatch(submitSearch()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "searchBox", reducer });
const withSaga = injectSaga({ key: "searchBox", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchBox);
