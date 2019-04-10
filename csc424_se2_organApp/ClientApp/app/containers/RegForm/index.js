/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button,Form, DropdownButton,FormControl,InputGroup,Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

/* eslint-disable react/prefer-stateless-function */
export default class RegForm extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        </Helmet>
        <Form className="container mt-5" >
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group>
            <select className="form-control">
              <option value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </Form.Group>
          <label style={{fontFamily:"sans-serif"}}>Race</label>
          <ul style={{listStyleType: "none"}}>
            <li><input type="checkbox" value="8"></input> White</li>
            <li><input type="checkbox" value="16"></input> Black or African American</li>
            <li><input type="checkbox" value="32"></input> American Indian or Alaska Native</li>
            <li><input type="checkbox" value="64"></input> Asian</li>
            <li><input type="checkbox" value="128"></input> Native Hawaiian or Other Pacific Islander</li>
            <li><input type="checkbox" value="256"></input> Arab or Middle Eastern</li>
            <li><input type="checkbox" value="512"></input> Indian Sub-continent</li>
            <li><input type="checkbox" value="2000"></input> Hispanic/Latino</li>
          </ul>
          <label style={{fontFamily:"sans-serif"}}>Education</label>
          <Form.Group>
            <select className="form-control">
              <option value="">Select Education</option>
              <option value="1">None</option>
              <option value="2">GRADE SCHOOL (0-8)</option>
              <option value="3">HIGH SCHOOL (9-12) or GED</option>
              <option value="4">ATTENDED COLLEGE/TECHNICAL SCHOOL</option>
              <option value="5">ASSOCIATE/BACHELOR DEGREE</option>
              <option value="6">POST-COLLEGE GRADUATE DEGREE</option>
              <option value="996">N/A ({"<"} 5 YRS OLD)</option>
            </select>
          </Form.Group>
          <Form.Group>
            <select className="form-control">
              <option value="">Select Academic Progress</option>
              <option value="1">Within One Grade Level of Peers</option>
              <option value="2">Delayed Grade Level</option>
              <option value="3">Special Education</option>
              <option value="996">Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
            </select>
          </Form.Group>
          <Form.Group>
            <select className="form-control" >
              <option value="">Select Academic Activity</option>
              <option value="1">Full academic load</option>
              <option value="2">Reduced academic load</option>
              <option value="3">Unable to participate in academics due to disease or condition</option>
              <option value="4">Unable to participate regularly in academics due to dialysis</option>
              <option value="996">Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
            </select>
          </Form.Group>

          
      </Form>;
      </div>
    );
  }
}
