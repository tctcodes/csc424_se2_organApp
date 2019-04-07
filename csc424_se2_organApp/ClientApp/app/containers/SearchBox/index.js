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
import { makeSelectToken } from './selectors';

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";

/* eslint-disable react/prefer-stateless-function */
export class SearchBox extends React.Component {
  render() {
    console.log(`searchbox token ${this.props.token}`);
    return (
      <div>
        <Helmet>
          <title>SearchBox</title>
          <meta name="description" content="Description of SearchBox" />
        </Helmet>
        <div>
          <Navbar className="bg-dark" fixed="top">
            {/* Text entry for patient-id */}
            <Form inline>
              <Form.Group controlId="formBasicSearch">
                <Form.Control type="text" placeholder="Patient ID" />
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
                    <option>1. A+</option>
                    <option>2. A-</option>
                    <option>3. B+</option>
                    <option>4. B-</option>
                    <option>5. AB+</option>
                    <option>6. AB-</option>
                    <option>7. O+</option>
                    <option>8. O-</option>
                  </Form.Control>
                </Form.Group>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary" type="button">
              Search
            </Button>
          </Navbar>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
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

const withReducer = injectReducer({ key: "searchBox", reducer });
const withSaga = injectSaga({ key: "searchBox", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchBox);
