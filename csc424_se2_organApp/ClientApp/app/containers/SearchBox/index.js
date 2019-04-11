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
  ButtonGroup,
  ToggleButton,
  FormGroup,
  DropdownMenu,
  Navbar,
} from "react-bootstrap";
import { setPID } from './actions';
import { makeSelectPID } from './selectors';

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

/* eslint-disable react/prefer-stateless-function */
export class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePIDChange = this.handlePIDChange.bind(this);
  }

  handleSearchSubmit() {
    console.log('Clicked Search button!');
    console.log(this.props.pid);
  }

  handlePIDChange(e) {
    e.preventDefault();
    console.log('Something Changed!');
    console.log(e.target.value);
    this.props.setPID(e.target.value);
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
                  onChange={this.props.onSetPID}
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
              onClick = {this.handleSearchSubmit}
            >
              Search
            </Button>
          </Navbar>
        </div>
        {/* Display patient informatio */}
        <div>
          <h2>Search for a patient to display information</h2>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  pid: PropTypes.string,
  onSetPID: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pid: makeSelectPID(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetPID: evt => dispatch(setPID(evt.target.value)),
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
