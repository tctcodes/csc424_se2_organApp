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
import { connect } from "react-redux";
import { compose } from "redux";
import { FormattedMessage } from 'react-intl';
import { Button,Form, DropdownButton,FormControl,InputGroup,Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";
import { dumpFormToState, uploadForm,retrieveData } from './actions';
import makeSelectRegForm from './selectors';
import { createStructuredSelector } from 'reselect';
import makeSelectAuth from '../../authSelector';
import { checkInfo } from '../ClientHome/actions';

function checkProperties(obj) {
  for (var key in obj) {
      if (obj[key] == null || obj[key] == "")
          return false;
  }
  return true;
}
function validateSSN (elementValue){
  var  ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
  return ssnPattern.test(elementValue);
}

function isState(string){
  let pattern = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/gm
  if(string === undefined)
    return;
  let state = string.search(pattern);
  if(state === -1)
    return false
  return true;
}

/* eslint-disable react/prefer-stateless-function */
export class RegForm extends React.PureComponent {
  constructor(){
    super()
    this.state ={
      email: '',
      fullName: "",
      address: {
        streetAddress: '',
        city:'',
        state: '',
        zipCode:''

      },
      racesSelected:{
        white:false,
        black:false,
        native:false,
        asian:false,
        hawaii:false,
        arab:false,
        indian:false,
        latino:false
      },
      ssn: '',
      canGender:'',
      canCitizenship: '',
      canYearEntryUs: '',
      canEmplStat: '',
      canEducation: '',
      canAcademicLevel: '',
      canAcademicProgress: '',
      canPrimaryPay: '',
      canSecondaryPay: '',
      canRace: 0,
    }
    this.raceArray =[]
    for (let i = 0; i< 8; i++){
      this.raceArray[i] = React.createRef();
    }
  }
  componentDidMount(){
    this.setState({email:this.props.auth.user.name});
    this.props.onRetrieveData();
    
  }
  static getDerivedStateFromProps(props,state){
  if (state !== props.state){
    return{
      ...props.state
    }
  }
 }
  
  onChangeEmail = (e) =>{
    this.setState({
      email: e.target.value
    });
  };
  
  onChangeName = (e) =>{
    this.setState({
      fullName: e.target.value
    });
  };
  onChangeAddress = (e) =>{
    e.persist()
    this.setState(prevState => ({
      address: {
          ...prevState.address,
          streetAddress: e.target.value
      }
  }))
  };
  onChangeCity = (e) =>{
    e.persist()
    this.setState(prevState => ({
      address: {
          ...prevState.address,
          city: e.target.value
      }
  }))
  };
  onChangeZip = (e) =>{
    e.persist()
    this.setState(prevState => ({
      address: {
          ...prevState.address,
          zipCode: e.target.value
      }
  }))
  };
  onChangeSt = (e) =>{
    e.persist()
    this.setState({
      canPermState: e.target.value.toUpperCase()
    });
    this.setState(prevState => ({
      address: {
          ...prevState.address,
          state: e.target.value.toUpperCase()
      }
  }))
  };
  onChangeSSN = (e) =>{
    this.setState({
      ssn: e.target.value
    });
  };
  
  onChangeGender = (e) =>{
    this.setState({
      canGender: e.target.value
    });
  };

  onChangeCitizen = e =>{
    this.setState({
      canCitizenship: parseInt(e.target.value)
    });
  };
  onChangeYear = e =>{
    this.setState({
      canYearEntryUs: e.target.value
    });
  };
  onChangeEmpl = e =>{
    this.setState({
      canEmplStat: parseInt(e.target.value)
    });
  };
  onChangeEdu = e =>{
    this.setState({
      canEducation: parseInt(e.target.value)
    });
  };

  onChangeAcademicProg = e =>{
    this.setState({
      canAcademicProgress: parseInt(e.target.value)
    });
  };

  onChangeAcademicLev = e =>{
    this.setState({
      canAcademicLevel: parseInt(e.target.value)
    });
  };
  
  onChangePrimaryPay = e =>{
    this.setState({
      canPrimaryPay: parseInt(e.target.value)
    });
  };

  onChangeSecondaryPay = e =>{
    this.setState({
      canSecondaryPay: parseInt(e.target.value)
    });
  };

  calculateRace = () =>{
    let value = 0;
    for(let i = 0; i< this.raceArray.length; i++){
      if(this.raceArray[i].current.checked == true){
        value += parseInt(this.raceArray[i].current.value)
      }
      
    }
    
    return value;
  }
  checkbox = (e) =>{
    e.persist();
    this.setState(prevState =>({
      racesSelected:{
        ...prevState.racesSelected,
        [e.target.name]:e.target.checked
      }
    }))
    
  }

  onSubmit = () =>{
    let raceValue = this.calculateRace();
    let complete = true;
    let isLatin;
    let srtrRace;
    let workForIncome;
    if(raceValue > 2000)
      isLatin = "LATINO"
    else
      isLatin = "NLATINO"

    switch(raceValue){
      case 8:
        srtrRace ="WHITE"
        break;
      case 16:
        srtrRace="BLACK"
        break;
      case 32:
        srtrRace="NATIVE"
        break;
      case 64:
        srtrRace ="ASIAN"
        break;
      case 128: 
        srtrRace ="PACIFIC"
        break;
      case 256: 
        srtrRace ="ASIAN"
        break;
      case 512:
        srtrRace ="ASIAN"
        break;
      default:
        srtrRace ="MULTI"
        break;
      
    }
    if(this.state.canEmplStat >=1 && this.state.canEmplStat <=4)
      workForIncome = "Y"
    else 
      workForIncome ="N"
    
    this.setState({
      //address: `${this.state.Address},${city}, ${this.state.CanPermState}, ${zipcode}`,
      canRaceSrtr: srtrRace,
      canRace: raceValue,
      canEthnicitySrtr:isLatin,
      canWorkIncome: workForIncome,

    },()=>{
      Object.keys(this.state).map(e=>{
        if(this.state[e]==='' || this.state[e]===0||!checkProperties(this.state.Address))
          complete = false
      })
      
      if(complete === false){
        alert("All fields must be filled");
        return;
      }
      if(isNaN(parseInt(this.state.address.zipCode)) || this.state.address.zipCode.length != 5){
        alert("Invalid Zip Code");
        return
      }
      if(!isState(this.state.canPermState)){
        alert("Not Valid State")
        return;
      }
      if(!validateSSN(this.state.ssn)){
        alert("Not Valid SSN")
        return;
      }
      if(this.state.canYearEntryUs.toUpperCase() !="N/A"){
        if(isNaN(this.state.CanYearEntryUs)){
          alert("Year must be a number");
          return;
        }
        let num = parseInt(this.state.canYearEntryUs)
        if(num > (new Date().getFullYear) || num < 1895 || num === NaN){
          alert("Year must be between 1895 to present");
          return
        }
        
      }
      this.props.onStateDump(this.state);
      this.props.onUpload();
      
    });
  }
  
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
            <Form.Control type="email" placeholder="Email" onChange = {this.onChangeEmail} value ={this.props.auth.user.name} readOnly/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Name" onChange ={this.onChangeName} value={this.state.fullName}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Street Address" onChange = {this.onChangeAddress} value={this.state.address.streetAddress}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="City" onChange = {this.onChangeCity}value={this.state.address.city}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Zip Code" maxLength="5" onChange = {this.onChangeZip}value={this.state.address.zipCode}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="State (MS,LA etc)" maxLength="2" onChange = {this.onChangeSt}value={this.state.address.state}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" maxLength ="11" placeholder="Social Security Number(format xxx-xx-xxxx)" onChange = {this.onChangeSSN} value={this.state.ssn}/>
          </Form.Group>
          <Form.Group>
            <select className="form-control" onChange = {this.onChangeGender}value={this.state.canGender}>
              <option value="0">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </Form.Group>
          <label style={{fontFamily:"sans-serif"}}>Race</label>
          <ul style={{listStyleType: "none"}}>
            <li><input type="checkbox" value="8" ref = {this.raceArray[0]} defaultChecked ={this.state.racesSelected["white"]}onChange ={this.checkbox} name ="white"></input> White</li>
            <li><input type="checkbox" value="16" ref = {this.raceArray[1]}defaultChecked ={this.state.racesSelected["black"]}onChange ={this.checkbox}name ="black"></input> Black or African American</li>
            <li><input type="checkbox" value="32" ref = {this.raceArray[2]}defaultChecked ={this.state.racesSelected["native"]}onChange ={this.checkbox}name ="native"></input> American Indian or Alaska Native</li>
            <li><input type="checkbox" value="64" ref = {this.raceArray[3]}defaultChecked ={this.state.racesSelected["asian"]}onChange ={this.checkbox}name ="asian"></input> Asian</li>
            <li><input type="checkbox" value="128"ref = {this.raceArray[4]}defaultChecked ={this.state.racesSelected["hawaii"]}onChange ={this.checkbox}name ="hawaii"></input> Native Hawaiian or Other Pacific Islander</li>
            <li><input type="checkbox" value="256"ref = {this.raceArray[5]}defaultChecked ={this.state.racesSelected["arab"]}onChange ={this.checkbox}name ="arab"></input> Arab or Middle Eastern</li>
            <li><input type="checkbox" value="512"ref = {this.raceArray[6]}defaultChecked ={this.state.racesSelected["indian"]}onChange ={this.checkbox}name ="indian"></input> Indian Sub-continent</li>
            <li><input type="checkbox" value="2000"ref = {this.raceArray[7]}defaultChecked ={this.state.racesSelected["latino"]}onChange ={this.checkbox}name ="latino"></input> Hispanic/Latino</li>
          </ul>
          <Form.Group>
            <select className="form-control" onChange = {this.onChangeCitizen} value={this.state.canCitizenship}>
              <option value="0">Select Citizenship Status</option>
              <option value="1">US Citizen</option>
              <option value="2">RESIDENT ALIEN</option>
              <option value="3">NON-RESIDENT ALIEN</option>
              <option value="4">Non-US Citizen/US Resident</option>
              <option value="5">Non-US Citizen/Non-US Resident, Traveled to US for Reason Other Than Transplant</option>
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Control type ="text" placeholder="Year entered US, Type N/A if US-born citizen"onChange ={this.onChangeYear} value={this.state.canYearEntryUs}></Form.Control>
          </Form.Group>
          <Form.Group>
            <select className="form-control"onChange ={this.onChangeEmpl}value={this.state.canEmplStat}>
              <option value="0">Select Employment Status</option>
              <option value="1">WORKING FULL TIME</option>
              <option value="2">WORKING PART TIME BY CHOICE</option>
              <option value="3">WORKING PART TIME DUE TO DISEASE</option>
              <option value="4">WORKING PART TIME REASON UNKNOWN</option>
              <option value="5">NOT WORKING BY CHOICE</option>
              <option value="6">NOT WORKING DUE TO DISEASE</option>
              <option value="7">NOT WORKING UNABLE TO FIND EMPLOYMENT</option>
              <option value="8">NOT WORKING REASON UNKNOWN</option>
              <option value="9">RETIRED</option>
              <option value="996">PATIENT {'<'} 5 YEARS OLD</option>
            </select>
          </Form.Group>
          <label style={{fontFamily:"sans-serif"}}>Education</label>
          <Form.Group>
            <select className="form-control" onChange ={this.onChangeEdu}value={this.state.canEducation}>
              <option value="0">Select Education</option>
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
            <select className="form-control" onChange ={this.onChangeAcademicProg} value={this.state.canAcademicProgress}>
              <option value="0">Select Academic Progress</option>
              <option value="1">Within One Grade Level of Peers</option>
              <option value="2">Delayed Grade Level</option>
              <option value="3">Special Education</option>
              <option value="996">Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
            </select>
          </Form.Group>
          <Form.Group>
            <select className="form-control" onChange ={this.onChangeAcademicLev} value={this.state.canAcademicLevel}>
              <option value="0">Select Academic Activity</option>
              <option value="1">Full academic load</option>
              <option value="2">Reduced academic load</option>
              <option value="3">Unable to participate in academics due to disease or condition</option>
              <option value="4">Unable to participate regularly in academics due to dialysis</option>
              <option value="996">Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
            </select>
          </Form.Group>
          <label style={{fontFamily:"sans-serif"}}>Payment</label>
          <Form.Group>
            <select className="form-control" onChange ={this.onChangePrimaryPay} value={this.state.canPrimaryPay}>
              <option value="0">Select Primary Payment</option>
              <option value="1">Private insurance</option>
              <option value="2">Public insurance - Medicaid</option>
              <option value="3">Public insurance - Medicare FFS (Fee for Service)</option>
              <option value="4">Public insurance - Medicare {'&'} Choice</option>
              <option value="5">Public insurance - CHIP (Children's Health Insurance Program)</option>
              <option value="6">Public insurance - Department of VA</option>
              <option value="7">Public insurance - Other government</option>
              <option value="8">Self</option>
              <option value="9">Donation</option>
              <option value="10">Free Care</option>
              <option value="11">Pending</option>
              <option value="12">Foreign Government Specify</option>
              <option value="13">Public insurance - Medicare Unspecified</option>
              <option value="14">US/State Govt Agency</option>
            </select>
          </Form.Group>
          <Form.Group>
            <select className="form-control" onChange={this.onChangeSecondaryPay} value={this.state.canSecondaryPay}>
              <option value="0">Select Secondary Payment</option>
              <option value="1">Private insurance</option>
              <option value="2">Public insurance - Medicaid</option>
              <option value="3">Public insurance - Medicare FFS (Fee for Service)</option>
              <option value="4">Public insurance - Medicare {'&'} Choice</option>
              <option value="5">Public insurance - CHIP (Children's Health Insurance Program)</option>
              <option value="6">Public insurance - Other government</option>
              <option value="7">Self</option>
              <option value="8">Donation</option>
              <option value="9">Free Care</option>
              <option value="10">None</option>
              <option value="11">Foreign Government Specify</option>
              <option value="12">US/State Govt Agency</option>
            </select>
          </Form.Group>
      </Form>;
      <Button variant="primary" type="button" onClick={this.onSubmit}>
              Submit
      </Button>
      </div>
    );
  }


}

const mapStateToProps = createStructuredSelector({
  state: makeSelectRegForm(),
  auth: makeSelectAuth()
});
function mapDispatchToProps(dispatch) {
  return {
    onStateDump: (state) => dispatch(dumpFormToState(state)),
    onUpload: () => dispatch(uploadForm()),
    onRetrieveData: ()=>dispatch(retrieveData())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "regForm", reducer });
const withSaga = injectSaga({ key: "regForm", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(RegForm);
