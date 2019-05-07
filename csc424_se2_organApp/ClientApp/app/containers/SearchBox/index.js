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
  Nav
} from "react-bootstrap";

import { setPXID, submitSearch, setBloodGroup, setDonorOrCandidate, setPXState } from './actions';
import { makeSelectPXID, makeSelectSearchResults, makeSelectPXState, makeSelectBloodGroup, makeSelectDonorOrCandidate } from './selectors';
import CanForm from '../CanForm';

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";

function PrintPxRecord(props) {
  if(props.searchResults.size === 0) {
    return (
      <h1>Input search request for Patient Record</h1>
    );
  } else {

    const recordList = props.searchResults.map((record, index) =>
      <tr id={record.pxId} key={index}>
        <td>{record.pxId}</td>
        <td>{record.persId}</td>
        <td>{record.canPermState}</td>
        <td>{record.canAbo}</td>
        <td>{record.canAgeAtListing}</td>
      </tr>
    )
    return (
      <table onClick={props.selectRecord} className="table table-hover">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Personal ID</th>
            <th>State</th>
            <th>Blood Type</th>
            <th>Age at Listing</th>
          </tr>
        </thead>
        <tbody>{recordList}</tbody>
      </table>
    );
  }
}

/* eslint-disable react/prefer-stateless-function */
export class SearchBox extends React.Component {

  selectRecord = (e)=>{
    //pushes canform record
    this.props.history.push(`/staff/canform/:${e.target.parentNode.id}`)
  }

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
            <Button style={{marginLeft:"auto"}} onClick={this.props.onDownload}>Download Result</Button>
          </Navbar>
        </div>
        {/* Display patient information */}
        <PrintPxRecord selectRecord={this.selectRecord} searchResults={this.props.searchResults}/>
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
  pxState: makeSelectPXState(),
  bloodGroup: makeSelectBloodGroup(),
  donorOrCandidate: makeSelectDonorOrCandidate(),
  searchResults: makeSelectSearchResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetPXID: evt => dispatch(setPXID(evt.target.value)),
    onSetBloodGroup: evt => dispatch(setBloodGroup(evt.target.value)),
    onSetDonorOrCandidate: evt => dispatch(setDonorOrCandidate(evt.target.value)),
    onSetPxState: evt => dispatch(setPXState(evt.target.value)),
    onSearchSubmit: () => dispatch(submitSearch()),
    onDownload: () => dispatch(downloadResult())
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
