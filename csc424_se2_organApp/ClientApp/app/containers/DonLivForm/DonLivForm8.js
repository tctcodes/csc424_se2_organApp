import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm8 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU PROCEDURE CONVERT</label>
					<label className="text-secondary" >Conversion from Thoracoscopic to Open::</label>
					<select className="form-control" value={this.props.donLuProcedureConvert} onChange={this.props.onChangeDonLuProcedureConvert}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU PROCEDURE TY</label>
					<label className="text-secondary" >Lung//Procedure Type::</label>
					<select className="form-control" value={this.props.donLuProcedureTy} onChange={this.props.onChangeDonLuProcedureTy}>
						<option value="" hidden disabled />
						<option value="1">1: Open </option>
						<option value="2">2: Video Assisted Thoracoscopic</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU READMIT</label>
					<label className="text-secondary" >Lung Readmission//Any Readmission After Initial Discharge::</label>
					<select className="form-control" value={this.props.donLuReadmit} onChange={this.props.onChangeDonLuReadmit}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU READMIT DT</label>
					<label className="text-secondary" >Lung Readmission Date//If Yes, Date of First Readmission::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLuReadmitDt} onChange={this.props.onChangeDonLuReadmitDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU READMIT REASON</label>
					<label className="text-secondary" >Lung Readmission Reason//If yes, specify reason for readmission (during first six weeks)::</label>
					<select className="form-control" value={this.props.donLuReadmitReason} onChange={this.props.onChangeDonLuReadmitReason}>
						<option value="" hidden disabled />
						<option value="">Missing </option>
						<option value="1">1: Wound Infection </option>
						<option value="2">2: Fever </option>
						<option value="4">4: Bowel Obstruction </option>
						<option value="8">8: Pleural Effusion </option>
						<option value="16">16: Vascular Complications </option>
						<option value="32">32: Other, specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU THORAC TUBES</label>
					<label className="text-secondary" >Placement of Additional Thoracostomy Tube(s), Indication::</label>
					<select className="form-control" value={this.props.donLuThoracTubes} onChange={this.props.onChangeDonLuThoracTubes}>
						<option value="" hidden disabled />
						<option value="1">1: Pneumothorax </option>
						<option value="2">2: Pleural effusion </option>
						<option value="3">3: Empyema </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MARITAL STAT</label>
					<label className="text-secondary" >Marital Status at Time of Donation::</label>
					<select className="form-control" value={this.props.donMaritalStat} onChange={this.props.onChangeDonMaritalStat}>
						<option value="" hidden disabled />
						<option value="1">1: Single </option>
						<option value="2">2: Married </option>
						<option value="3">3: Divorced </option>
						<option value="4">4: Separated </option>
						<option value="5">5: Life Partner </option>
						<option value="6">6: Widowed </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MEDICAID</label>
					<label className="text-secondary" >Secondary source of payment: Medicaid:</label>
					<select className="form-control" value={this.props.donMedicaid} onChange={this.props.onChangeDonMedicaid}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MEDICARE</label>
					<label className="text-secondary" >Secondary source of payment: Medicare:</label>
					<select className="form-control" value={this.props.donMedicare} onChange={this.props.onChangeDonMedicare}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON NON AUTO BLOOD</label>
					<label className="text-secondary" >Non-Autologous Blood Administration::</label>
					<select className="form-control" value={this.props.donNonAutoBlood} onChange={this.props.onChangeDonNonAutoBlood}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON OPO RUN MATCH</label>
					<label className="text-secondary" >For Living Donors, can OPO run a match on this donor?:</label>
					<select className="form-control" value={this.props.donOpoRunMatch} onChange={this.props.onChangeDonOpoRunMatch}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ORG1</label>
					<label className="text-secondary" >Organ Recovered(1):</label>
					<select className="form-control" value={this.props.donOrg1} onChange={this.props.onChangeDonOrg1}>
						<option value="" hidden disabled />
						<option value="HR ">HR: Living Donor Heart Transplant </option>
						<option value="INS1 ">INS1: Intestine Segment </option>
						<option value="LIS1 ">LIS1: Liver Segment </option>
						<option value="LIWD ">LIWD: Domino Whole Liver </option>
						<option value="LKI ">LKI: Left Kidney </option>
						<option value="LLL ">LLL: Left Lung Lobe </option>
						<option value="LUL ">LUL: Left Single Lung </option>
						<option value="LUR ">LUR: Right Single Lung </option>
						<option value="PAS1 ">PAS1: Pancreas Segment </option>
						<option value="RKI ">RKI: Right Kidney </option>
						<option value="RLL ">RLL: Right Lung Lobe </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ORG2</label>
					<label className="text-secondary" >Organ Recovered(2):</label>
					<select className="form-control" value={this.props.donOrg2} onChange={this.props.onChangeDonOrg2}>
						<option value="" hidden disabled />
						<option value="HR ">HR: Living Donor Heart Transplant </option>
						<option value="INS1 ">INS1: Intestine Segment </option>
						<option value="LIS1 ">LIS1: Liver Segment </option>
						<option value="LIWD ">LIWD: Domino Whole Liver </option>
						<option value="LKI ">LKI: Left Kidney </option>
						<option value="LLL ">LLL: Left Lung Lobe </option>
						<option value="LUL ">LUL: Left Single Lung </option>
						<option value="LUR ">LUR: Right Single Lung </option>
						<option value="PAS1 ">PAS1: Pancreas Segment </option>
						<option value="RKI ">RKI: Right Kidney </option>
						<option value="RLL ">RLL: Right Lung Lobe </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON OTHER GOVT</label>
					<label className="text-secondary" >Secondary source of payment: US/State Government Agency:</label>
					<select className="form-control" value={this.props.donOtherGovt} onChange={this.props.onChangeDonOtherGovt}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON OTHER TOBACCO USE</label>
					<label className="text-secondary" >Other Tobacco Used::</label>
					<select className="form-control" value={this.props.donOtherTobaccoUse} onChange={this.props.onChangeDonOtherTobaccoUse}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PACK YEARS</label>
					<label className="text-secondary" >History of Cigarette Use Pack Years//If Yes, Check # pack years::</label>
					<select className="form-control" value={this.props.donPackYears} onChange={this.props.onChangeDonPackYears}>
						<option value="" hidden disabled />
						<option value="1">1: 0-10 </option>
						<option value="2">2: 11-20 </option>
						<option value="3">3: 21-30 </option>
						<option value="4">4: 31-40 </option>
						<option value="5">5: 41-50 </option>
						<option value="6">6: >50 </option>
						<option value="998">998: Unknown pack years </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PAO2 PREOP</label>
					<label className="text-secondary" >PaO2 on room air::</label>
					<input className="form-control" type="number" value={this.props.donPao2Preop} onChange={this.props.onChangeDonPao2Preop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PHYSC CAPACITY</label>
					<label className="text-secondary" >Physical Capacity: (check one):</label>
					<select className="form-control" value={this.props.donPhyscCapacity} onChange={this.props.onChangeDonPhyscCapacity}>
						<option value="" hidden disabled />
						<option value="1">1: No Limitations </option>
						<option value="2">2: Limited Mobility </option>
						<option value="3">3: Wheelchair bound or more limited </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PLT UNITS</label>
					<label className="text-secondary" >Platelets Units//If Yes, Number of Units::</label>
					<input className="form-control" type="number" value={this.props.donPltUnits} onChange={this.props.onChangeDonPltUnits} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON POSTOP TEST DT</label>
					<label className="text-secondary" >Most Recent Date of Tests::</label>
					<input className="form-control" type="datetime-local" value={this.props.donPostopTestDt} onChange={this.props.onChangeDonPostopTestDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRBC UNITS</label>
					<label className="text-secondary" >PRBC Units//If Yes, Number of Units::</label>
					<input className="form-control" type="number" value={this.props.donPrbcUnits} onChange={this.props.onChangeDonPrbcUnits} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRIMARY PAY</label>
					<label className="text-secondary" >Primary Source of Payment:</label>
					<select className="form-control" value={this.props.donPrimaryPay} onChange={this.props.onChangeDonPrimaryPay}>
						<option value="" hidden disabled />
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
					<label className="font-weight-bold" >DON PRIV INSUR</label>
					<label className="text-secondary" >Secondary source of payment: Private Insurance:</label>
					<select className="form-control" value={this.props.donPrivInsur} onChange={this.props.onChangeDonPrivInsur}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RACE</label>
					<label className="text-secondary" >Donor/s race:</label>
					<select className="form-control" value={this.props.donRace} onChange={this.props.onChangeDonRace}>
						<option value="" hidden disabled />
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
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donLuProcedureConvert: select.makeSelectDonLuProcedureConvert(),
	donLuProcedureTy: select.makeSelectDonLuProcedureTy(),
	donLuReadmit: select.makeSelectDonLuReadmit(),
	donLuReadmitDt: select.makeSelectDonLuReadmitDt(),
	donLuReadmitReason: select.makeSelectDonLuReadmitReason(),
	donLuThoracTubes: select.makeSelectDonLuThoracTubes(),
	donMaritalStat: select.makeSelectDonMaritalStat(),
	donMedicaid: select.makeSelectDonMedicaid(),
	donMedicare: select.makeSelectDonMedicare(),
	donNonAutoBlood: select.makeSelectDonNonAutoBlood(),
	donOpoRunMatch: select.makeSelectDonOpoRunMatch(),
	donOrg1: select.makeSelectDonOrg1(),
	donOrg2: select.makeSelectDonOrg2(),
	donOtherGovt: select.makeSelectDonOtherGovt(),
	donOtherTobaccoUse: select.makeSelectDonOtherTobaccoUse(),
	donPackYears: select.makeSelectDonPackYears(),
	donPao2Preop: select.makeSelectDonPao2Preop(),
	donPhyscCapacity: select.makeSelectDonPhyscCapacity(),
	donPltUnits: select.makeSelectDonPltUnits(),
	donPostopTestDt: select.makeSelectDonPostopTestDt(),
	donPrbcUnits: select.makeSelectDonPrbcUnits(),
	donPrimaryPay: select.makeSelectDonPrimaryPay(),
	donPrivInsur: select.makeSelectDonPrivInsur(),
	donRace: select.makeSelectDonRace(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonLuProcedureConvert: evt => dispatch(action.changeDonLuProcedureConvert(evt.target.value)),
		onChangeDonLuProcedureTy: evt => dispatch(action.changeDonLuProcedureTy(evt.target.value)),
		onChangeDonLuReadmit: evt => dispatch(action.changeDonLuReadmit(evt.target.value)),
		onChangeDonLuReadmitDt: evt => dispatch(action.changeDonLuReadmitDt(evt.target.value)),
		onChangeDonLuReadmitReason: evt => dispatch(action.changeDonLuReadmitReason(evt.target.value)),
		onChangeDonLuThoracTubes: evt => dispatch(action.changeDonLuThoracTubes(evt.target.value)),
		onChangeDonMaritalStat: evt => dispatch(action.changeDonMaritalStat(evt.target.value)),
		onChangeDonMedicaid: evt => dispatch(action.changeDonMedicaid(evt.target.value)),
		onChangeDonMedicare: evt => dispatch(action.changeDonMedicare(evt.target.value)),
		onChangeDonNonAutoBlood: evt => dispatch(action.changeDonNonAutoBlood(evt.target.value)),
		onChangeDonOpoRunMatch: evt => dispatch(action.changeDonOpoRunMatch(evt.target.value)),
		onChangeDonOrg1: evt => dispatch(action.changeDonOrg1(evt.target.value)),
		onChangeDonOrg2: evt => dispatch(action.changeDonOrg2(evt.target.value)),
		onChangeDonOtherGovt: evt => dispatch(action.changeDonOtherGovt(evt.target.value)),
		onChangeDonOtherTobaccoUse: evt => dispatch(action.changeDonOtherTobaccoUse(evt.target.value)),
		onChangeDonPackYears: evt => dispatch(action.changeDonPackYears(evt.target.value)),
		onChangeDonPao2Preop: evt => dispatch(action.changeDonPao2Preop(evt.target.value)),
		onChangeDonPhyscCapacity: evt => dispatch(action.changeDonPhyscCapacity(evt.target.value)),
		onChangeDonPltUnits: evt => dispatch(action.changeDonPltUnits(evt.target.value)),
		onChangeDonPostopTestDt: evt => dispatch(action.changeDonPostopTestDt(evt.target.value)),
		onChangeDonPrbcUnits: evt => dispatch(action.changeDonPrbcUnits(evt.target.value)),
		onChangeDonPrimaryPay: evt => dispatch(action.changeDonPrimaryPay(evt.target.value)),
		onChangeDonPrivInsur: evt => dispatch(action.changeDonPrivInsur(evt.target.value)),
		onChangeDonRace: evt => dispatch(action.changeDonRace(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm8 );
