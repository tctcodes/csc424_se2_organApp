import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class CandFormPersonal extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACADEMIC LEVEL</label>
					<label className="text-secondary" >Academic Activity Level::</label>
					<select className="form-control" value={this.props.canAcademicLevel} onChange={this.props.onChangeCanAcademicLevel}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Full academic load</option>
						<option value="2">2: Reduced academic load</option>
						<option value="3">3: Unable to participate in academics due to disease or condition</option>
						<option value="4">4: Unable to participate regularly in academics due to dialysis</option>
						<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
						<option value="998">998: Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACADEMIC PROGRESS</label>
					<label className="text-secondary" >Academic Progress::</label>
					<select className="form-control" value={this.props.canAcademicProgress} onChange={this.props.onChangeCanAcademicProgress}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Within One Grade Level of Peers</option>
						<option value="2">2: Delayed Grade Level</option>
						<option value="3">3: Special Education</option>
						<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
						<option value="998">998: Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN CITIZENSHIP</label>
					<label className="text-secondary" >Patient/s Citizenship:</label>
					<select className="form-control" value={this.props.canCitizenship} onChange={this.props.onChangeCanCitizenship}>
						<option value="" hidden disabled selected/>
						<option value="1">1: US Citizen</option>
						<option value="2">2: RESIDENT ALIEN</option>
						<option value="3">3: NON-RESIDENT ALIEN, Year Entered US</option>
						<option value="4">4: Non-US Citizen/US Resident</option>
						<option value="5">5: Non-US Citizen/Non-US Resident, Traveled to US for Reason Other Than Transplant</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN EDUCATION</label>
					<label className="text-secondary" >Patient/s Educational Status:</label>
					<select className="form-control" value={this.props.canEducation} onChange={this.props.onChangeCanEducation}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NONE</option>
						<option value="2">2: GRADE SCHOOL (0-8)</option>
						<option value="3">3: HIGH SCHOOL (9-12) or GED</option>
						<option value="4">4: ATTENDED COLLEGE/TECHNICAL SCHOOL</option>
						<option value="5">5: ASSOCIATE/BACHELOR DEGREE</option>
						<option value="6">6: POST-COLLEGE GRADUATE DEGREE</option>
						<option value="996">996: N/A ({"<"} 5 YRS OLD)</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN EMPL STAT</label>
					<label className="text-secondary" >Patient/s Employment Status - Pre-6/30/2004:</label>
					<select className="form-control" value={this.props.canEmplStat} onChange={this.props.onChangeCanEmplStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: WORKING FULL TIME</option>
						<option value="2">2: WORKING PART TIME BY CHOICE</option>
						<option value="3">3: WORKING PART TIME DUE TO DISEASE</option>
						<option value="4">4: WORKING PART TIME REASON UNKNOWN</option>
						<option value="5">5: NOT WORKING BY CHOICE</option>
						<option value="6">6: NOT WORKING DUE TO DISEASE</option>
						<option value="7">7: NOT WORKING UNABLE TO FIND EMPLOYMENT</option>
						<option value="8">8: NOT WORKING REASON UNKNOWN</option>
						<option value="9">9: RETIRED</option>
						<option value="996">996: PATIENT {"<"} 5 YEARS OLD</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ETHNICITY SRTR</label>
					<label className="text-secondary" >SRTR Patient Ethnicity:</label>
					<select className="form-control" value={this.props.canEthnicitySrtr} onChange={this.props.onChangeCanEthnicitySrtr}>
						<option value="" hidden disabled selected/>
						<option value="LATINO">LATINO: Latino</option>
						<option value="NLATIN">NLATIN: Non-Latino or unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN GENDER</label>
					<label className="text-secondary" >Patient/s Gender:</label>
					<select className="form-control" value={this.props.canGender} onChange={this.props.onChangeCanGender}>
						<option value="" hidden disabled selected/>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PERM STATE</label>
					<label className="text-secondary" >Patient/s Permanent State:</label>
					<select className="form-control" value={this.props.canPermState} onChange={this.props.onChangeCanPermState}>
						<option value="" hidden disabled selected/>
						<option value="AK">AK: ALASKA</option>
						<option value="AL">AL: ALABAMA</option>
						<option value="AR">AR: ARKANSAS</option>
						<option value="AS">AS: PAGO PAGO</option>
						<option value="AZ">AZ: ARIZONA</option>
						<option value="CA">CA: CALIFORNIA</option>
						<option value="CO">CO: COLORADO</option>
						<option value="CT">CT: CONNECTICUT</option>
						<option value="DC">DC: DISTRICT OF COLUMBIA</option>
						<option value="DE">DE: DELAWARE</option>
						<option value="FL">FL: FLORIDA</option>
						<option value="GA">GA: GEORGIA</option>
						<option value="GU">GU: GUAM</option>
						<option value="HI">HI: HAWAII</option>
						<option value="IA">IA: IOWA</option>
						<option value="ID">ID: IDAHO</option>
						<option value="IL">IL: ILLINOIS</option>
						<option value="IN">IN: INDIANA</option>
						<option value="KS">KS: KANSAS</option>
						<option value="KY">KY: KENTUCKY</option>
						<option value="LA">LA: LOUISIANA</option>
						<option value="MA">MA: MASSACHUSETTS</option>
						<option value="MD">MD: MARYLAND</option>
						<option value="ME">ME: MAINE</option>
						<option value="MI">MI: MICHIGAN</option>
						<option value="MN">MN: MINNESOTA</option>
						<option value="MO">MO: MISSOURI</option>
						<option value="MP">MP: SAIPAN MARIANA ISLANDS</option>
						<option value="MS">MS: MISSISSIPPI</option>
						<option value="MT">MT: MONTANA</option>
						<option value="NA">NA: FOREIGN COUNTRY</option>
						<option value="NC">NC: NORTH CAROLINA</option>
						<option value="ND">ND: NORTH DAKOTA</option>
						<option value="NE">NE: NEBRASKA</option>
						<option value="NH">NH: NEW HAMPSHIRE</option>
						<option value="NJ">NJ: NEW JERSEY</option>
						<option value="NM">NM: NEW MEXICO</option>
						<option value="NV">NV: NEVADA</option>
						<option value="NY">NY: NEW YORK</option>
						<option value="OH">OH: OHIO</option>
						<option value="OK">OK: OKLAHOMA</option>
						<option value="OR">OR: OREGON</option>
						<option value="PA">PA: PENNSYLVANIA</option>
						<option value="PR">PR: PUERTO RICO</option>
						<option value="RI">RI: RHODE ISLAND</option>
						<option value="SC">SC: SOUTH CAROLINA</option>
						<option value="SD">SD: SOUTH DAKOTA</option>
						<option value="TN">TN: TENNESSEE</option>
						<option value="TX">TX: TEXAS</option>
						<option value="UT">UT: UTAH</option>
						<option value="VA">VA: VIRGINIA</option>
						<option value="VI">VI: VIRGIN ISLANDS</option>
						<option value="VT">VT: VERMONT</option>
						<option value="WA">WA: WASHINGTON</option>
						<option value="WI">WI: WISCONSIN</option>
						<option value="WV">WV: WEST VIRGINIA</option>
						<option value="WY">WY: WYOMING</option>
						<option value="ZZ">ZZ: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PRIMARY PAY</label>
					<label className="text-secondary" >Source of Payment//Primary::</label>
					<select className="form-control" value={this.props.canPrimaryPay} onChange={this.props.onChangeCanPrimaryPay}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Private insurance</option>
						<option value="2">2: Public insurance - Medicaid</option>
						<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
						<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
						<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
						<option value="6">6: Public insurance - Department of VA</option>
						<option value="7">7: Public insurance - Other government</option>
						<option value="8">8: Self</option>
						<option value="9">9: Donation</option>
						<option value="10">10: Free Care</option>
						<option value="11">11: Pending</option>
						<option value="12">12: Foreign Government Specify</option>
						<option value="13">13: Public insurance - Medicare Unspecified</option>
						<option value="14">14: US/State Govt Agency</option>
						<option value="15">15: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN RACE</label>
					<label className="text-secondary" >Patient/s Race:</label>
					<select className="form-control" value={this.props.canRace} onChange={this.props.onChangeCanRace}>
						<option value="" hidden disabled selected/>
						<option value="">Missing</option>
						<option value="8">8: White</option>
						<option value="16">16: Black or African American</option>
						<option value="32">32: American Indian or Alaska Native</option>
						<option value="64">64: Asian</option>
						<option value="128">128: Native Hawaiian or Other Pacific Islander</option>
						<option value="256">256: Arab or Middle Eastern</option>
						<option value="512">512: Indian Sub-continent</option>
						<option value="1024">1024: Unknown (for Donor Referral only)</option>
						<option value="2000">2000: Hispanic/Latino</option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN RACE SRTR</label>
					<label className="text-secondary" >SRTR Patient Race:</label>
					<select className="form-control" value={this.props.canRaceSrtr} onChange={this.props.onChangeCanRaceSrtr}>
						<option value="" hidden disabled selected/>
						<option value="ASIAN">ASIAN: Asian</option>
						<option value="BLACK">BLACK: Black</option>
						<option value="MULTI">MULTI: Multiracial</option>
						<option value="NATIVE">NATIVE: Native American</option>
						<option value="PACIFIC">PACIFIC: Pacific Islander</option>
						<option value="WHITE">WHITE: White</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN SECONDARY PAY</label>
					<label className="text-secondary" >Source of Payment//Secondary::</label>
					<select className="form-control" value={this.props.canSecondaryPay} onChange={this.props.onChangeCanSecondaryPay}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Private insurance</option>
						<option value="2">2: Public insurance - Medicaid</option>
						<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
						<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
						<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
						<option value="6">6: Public insurance - Other government</option>
						<option value="7">7: Self</option>
						<option value="8">8: Donation</option>
						<option value="9">9: Free Care</option>
						<option value="10">10: None</option>
						<option value="11">11: Public insurance - Medicare Unspecified</option>
						<option value="12">12: US/State Govt Agency</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN WORK INCOME</label>
					<label className="text-secondary" >Working for income::</label>
					<select className="form-control" value={this.props.canWorkIncome} onChange={this.props.onChangeCanWorkIncome}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN WORK NO STAT</label>
					<label className="text-secondary" >Working for income//If No, Not Working Due To::</label>
					<select className="form-control" value={this.props.canWorkNoStat} onChange={this.props.onChangeCanWorkNoStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Disability</option>
						<option value="2">2: Demands of Treatment</option>
						<option value="3">3: Insurance Conflict</option>
						<option value="4">4: Inability to Find Work</option>
						<option value="5">5: Patient Choice - Homemaker</option>
						<option value="6">6: Patient Choice - Student Full Time/Part Time</option>
						<option value="7">7: Patient Choice - Retired</option>
						<option value="8">8: Patient Choice - Other</option>
						<option value="996">996: Not Applicable - Hospitalized</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN WORK YES STAT</label>
					<label className="text-secondary" >Working for income//If Yes::</label>
					<select className="form-control" value={this.props.canWorkYesStat} onChange={this.props.onChangeCanWorkYesStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Working Full Time</option>
						<option value="2">2: Working Part Time due to Demands of Treatment</option>
						<option value="3">3: Working Part Time due to Disability</option>
						<option value="4">4: Working Part Time due to Insurance Conflict</option>
						<option value="5">5: Working Part Time due to Inability to Find Full Time Work</option>
						<option value="6">6: Working Part Time due to Patient Choice</option>
						<option value="7">7: Working Part Time Reason Unknown</option>
						<option value="998">998: Working, Part Time vs. Full Time Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN YEAR ENTRY US</label>
					<label className="text-secondary" >Year of Entry to the U.S.:</label>
					<input className="form-control" type="number" value={this.props.canYearEntryUs} onChange={this.props.onChangeCanYearEntryUs} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS ID</label>
					<label className="text-secondary" >Unique Person ID for Recipient:</label>
					<input className="form-control" type="text" readOnly value={this.props.persId} onChange={this.props.onChangePersId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PX ID</label>
					<label className="text-secondary" >Patient Identifier:</label>
					<input className="form-control" type="text" readOnly value={this.props.pxId} onChange={this.props.onChangePxId} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	canAcademicLevel: select.makeSelectCanAcademicLevel(),
	canAcademicProgress: select.makeSelectCanAcademicProgress(),
	canCitizenship: select.makeSelectCanCitizenship(),
	canEducation: select.makeSelectCanEducation(),
	canEmplStat: select.makeSelectCanEmplStat(),
	canEthnicitySrtr: select.makeSelectCanEthnicitySrtr(),
	canGender: select.makeSelectCanGender(),
	canPermState: select.makeSelectCanPermState(),
	canPrimaryPay: select.makeSelectCanPrimaryPay(),
	canRace: select.makeSelectCanRace(),
	canRaceSrtr: select.makeSelectCanRaceSrtr(),
	canSecondaryPay: select.makeSelectCanSecondaryPay(),
	canWorkIncome: select.makeSelectCanWorkIncome(),
	canWorkNoStat: select.makeSelectCanWorkNoStat(),
	canWorkYesStat: select.makeSelectCanWorkYesStat(),
	canYearEntryUs: select.makeSelectCanYearEntryUs(),
	persId: select.makeSelectPersId(),
	pxId: select.makeSelectPxId(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanAcademicLevel: evt => dispatch(action.changeCanAcademicLevel(evt.target.value)),
		onChangeCanAcademicProgress: evt => dispatch(action.changeCanAcademicProgress(evt.target.value)),
		onChangeCanCitizenship: evt => dispatch(action.changeCanCitizenship(evt.target.value)),
		onChangeCanEducation: evt => dispatch(action.changeCanEducation(evt.target.value)),
		onChangeCanEmplStat: evt => dispatch(action.changeCanEmplStat(evt.target.value)),
		onChangeCanEthnicitySrtr: evt => dispatch(action.changeCanEthnicitySrtr(evt.target.value)),
		onChangeCanGender: evt => dispatch(action.changeCanGender(evt.target.value)),
		onChangeCanPermState: evt => dispatch(action.changeCanPermState(evt.target.value)),
		onChangeCanPrimaryPay: evt => dispatch(action.changeCanPrimaryPay(evt.target.value)),
		onChangeCanRace: evt => dispatch(action.changeCanRace(evt.target.value)),
		onChangeCanRaceSrtr: evt => dispatch(action.changeCanRaceSrtr(evt.target.value)),
		onChangeCanSecondaryPay: evt => dispatch(action.changeCanSecondaryPay(evt.target.value)),
		onChangeCanWorkIncome: evt => dispatch(action.changeCanWorkIncome(evt.target.value)),
		onChangeCanWorkNoStat: evt => dispatch(action.changeCanWorkNoStat(evt.target.value)),
		onChangeCanWorkYesStat: evt => dispatch(action.changeCanWorkYesStat(evt.target.value)),
		onChangeCanYearEntryUs: evt => dispatch(action.changeCanYearEntryUs(evt.target.value)),
		onChangePersId: evt => dispatch(action.changePersId(evt.target.value)),
		onChangePxId: evt => dispatch(action.changePxId(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( CandFormPersonal );
