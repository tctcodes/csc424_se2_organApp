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
import { Form, Button, Dropdown} from "react-bootstrap";
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
          <h1>SearchBox</h1>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <Dropdown>
            <Dropdown.Toggle>
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
