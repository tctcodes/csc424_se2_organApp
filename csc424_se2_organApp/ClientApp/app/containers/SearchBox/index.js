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
import { setPXID, submitSearch,downloadResult } from './actions';
import { makeSelectPXID, makeSelectSearchResults } from './selectors';
import CanForm from '../CanForm';

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";

const BLOOD_GROUPS = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

const US_STATE = [
  'AL',
  'AK',
  'AZ',
  'AR',
];

function PrintPxRecord(props) {
  if(props.searchResults.size === 0) {
    return (
      <h1>Input search request for Patient Record</h1>
    );
  } else {
    
    const recordList = props.searchResults.map(record =>
      <tr id={record.pxId}>
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
              <Form.Control as="select">
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
                  <Form.Control as="select">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Form.Control>
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
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
};

const mapStateToProps = createStructuredSelector({
  pid: makeSelectPXID(),
  searchResults: makeSelectSearchResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetPXID: evt => dispatch(setPXID(evt.target.value)),
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
