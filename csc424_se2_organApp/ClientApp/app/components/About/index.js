/**
 *
 * About
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Jumbotron, Container, Row } from "react-bootstrap";

function About() {
  return <div>
    <Jumbotron style={{ height: 'calc(100vh - 56px', margin: '0', backgroundColor: 'white'}}>
      <h1 style={{ textAlign: 'center' }}>About OrganApp</h1>
      <p style={{textIndent: '30px'}}>
        Hattiesburg Clinic has expressed the need for an application to aid in selection of recipients for liver transplants.
        This project will require a data management and analysis system to handle the data. This management and analysis system 
        will be used in the future as a training model for machine learning algorithms. The aspiration of applying machine 
        learning to this data set would be to deduce the best match for available liver transplants. This project would remove 
        a large burden from healthcare providers by predicting suitable matches.
      </p>
      <p style={{ textIndent: '30px' }}>
        Our teams part in this project will be the creation of the data management and analysis system. This data management and analysis
        system will be used for the collection, storage, and access of candidate and donor data. The application will be web based 
        and designed for use by candidates and donors as well as healthcare professionals. Candidates and donors will be able to 
        create accounts and input personal health related data. Healthcare professionals will be able to access candidate and donor 
        data as well as search through this data for specific fields. Lastly, this system will be designed in such a way to be used 
        for the future use of training the machine learning algorithms.
      </p>
      <Container>
        <Row>
          <img style={{ margin: 'auto' }} src="https://www.hattiesburgclinic.com/wp-content/uploads/2017/06/HattClinicLogo-1-line-w4Hs-TEALsmall.jpg"></img>
          <img style={{ margin: 'auto' }} src="https://home.usm.edu/themes/custom/scaffold/images/logo@1x.jpg"></img>
        </Row>
      </Container>
    </Jumbotron>
  </div>;
}

About.propTypes = {};

export default About;
