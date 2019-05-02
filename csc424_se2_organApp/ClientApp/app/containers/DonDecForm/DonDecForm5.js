import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm5 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EJECT FRACT</label>
					<label className="text-secondary" >LV Ejection Fraction %:</label>
					<input className="form-control" type="number" value={this.props.donEjectFract} onChange={this.props.onChangeDonEjectFract} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EJECT FRACT METH</label>
					<label className="text-secondary" >Method:</label>
					<select className="form-control" value={this.props.donEjectFractMeth} onChange={this.props.onChangeDonEjectFractMeth}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Echo </option>
						<option value="2">2: MUGA </option>
						<option value="3">3: Angiogram </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ETHNICITY SRTR</label>
					<label className="text-secondary" >SRTR Donor Ethnicity:</label>
					<select className="form-control" value={this.props.donEthnicitySrtr} onChange={this.props.onChangeDonEthnicitySrtr}>
						<option value="" hidden disabled selected/>
						<option value="LATINO">LATINO: Latino</option>
						<option value="NLATIN">NLATIN: Non-Latino or unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EXPAND DON FLG OPTN</label>
					<label className="text-secondary" >Does donor meet criteria to be an Expanded Donor?:</label>
					<input className="form-control" type="text" value={this.props.donExpandDonFlgOptn} onChange={this.props.onChangeDonExpandDonFlgOptn} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EXPAND DON KI</label>
					<label className="text-secondary" >Meets expanded donor criteria for kidney (1= yes , 0= no):</label>
					<input className="form-control" type="text" value={this.props.donExpandDonKi} onChange={this.props.onChangeDonExpandDonKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EXPRESS FAMILY</label>
					<label className="text-secondary" >Did the patient express to family or others the intent to be a donor:</label>
					<input className="form-control" type="text" value={this.props.donExpressFamily} onChange={this.props.onChangeDonExpressFamily} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EXTRACRANIAL CANCER</label>
					<label className="text-secondary" >Extracranial:</label>
					<input className="form-control" type="text" value={this.props.donExtracranialCancer} onChange={this.props.onChangeDonExtracranialCancer} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FEEDBACK DONE</label>
					<label className="text-secondary" >Feedback Completed for Donor?:</label>
					<input className="form-control" type="text" value={this.props.donFeedbackDone} onChange={this.props.onChangeDonFeedbackDone} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FINAL SERUM CREAT</label>
					<label className="text-secondary" >Final Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donFinalSerumCreat} onChange={this.props.onChangeDonFinalSerumCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON GENDER</label>
					<label className="text-secondary" >Donor/s Gender:</label>
					<input className="form-control" type="text" value={this.props.donGender} onChange={this.props.onChangeDonGender} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBC STAT</label>
					<label className="text-secondary" >Hepatitis B Core Antibody Status:</label>
					<select className="form-control" value={this.props.donHbcStat} onChange={this.props.onChangeDonHbcStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Positive </option>
						<option value="2">2: Negative </option>
						<option value="3">3: Unknown </option>
						<option value="4">4: Cannot Disclose </option>
						<option value="5">5: Not Done </option>
						<option value="6">6: Indeterminate </option>
						<option value="7">7: Pending </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for hbv test:</label>
					<input className="form-control" type="text" value={this.props.donHbvNat} onChange={this.props.onChangeDonHbvNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV SURF ANTIBODY</label>
					<label className="text-secondary" >HBsAb (Hepatitis B Surface Antibody):</label>
					<select className="form-control" value={this.props.donHbvSurfAntibody} onChange={this.props.onChangeDonHbvSurfAntibody}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV SURF ANTIGEN</label>
					<label className="text-secondary" >HBsAg:</label>
					<select className="form-control" value={this.props.donHbvSurfAntigen} onChange={this.props.onChangeDonHbvSurfAntigen}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for hcv test:</label>
					<input className="form-control" type="text" value={this.props.donHcvNat} onChange={this.props.onChangeDonHcvNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV STAT</label>
					<label className="text-secondary" >HCV Antibody Status:</label>
					<select className="form-control" value={this.props.donHcvStat} onChange={this.props.onChangeDonHcvStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Positive </option>
						<option value="2">2: Negative </option>
						<option value="3">3: Unknown </option>
						<option value="4">4: Cannot Disclose </option>
						<option value="5">5: Not Done </option>
						<option value="6">6: Indeterminate </option>
						<option value="7">7: Pending </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HEAVY ALCOHOL</label>
					<label className="text-secondary" >Heavy Alcohol Use (heavy= 2+ drinks/day)::</label>
					<input className="form-control" type="text" value={this.props.donHeavyAlcohol} onChange={this.props.onChangeDonHeavyAlcohol} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HEMATOCRIT</label>
					<label className="text-secondary" >Hematocrit::</label>
					<input className="form-control" type="number" value={this.props.donHematocrit} onChange={this.props.onChangeDonHematocrit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HEPARIN</label>
					<label className="text-secondary" >Heparin:</label>
					<input className="form-control" type="text" value={this.props.donHeparin} onChange={this.props.onChangeDonHeparin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HGT CM</label>
					<label className="text-secondary" >Donor/s Height in centimeters:</label>
					<input className="form-control" type="number" value={this.props.donHgtCm} onChange={this.props.onChangeDonHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIGH CREAT</label>
					<label className="text-secondary" >Donor serum creatinine > 1.5 (1= yes, 0= no):</label>
					<input className="form-control" type="text" value={this.props.donHighCreat} onChange={this.props.onChangeDonHighCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST ALCOHOL</label>
					<label className="text-secondary" >Alcohol Dependency:</label>
					<input className="form-control" type="text" value={this.props.donHistAlcohol} onChange={this.props.onChangeDonHistAlcohol} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST CANCER</label>
					<label className="text-secondary" >History of Cancer:</label>
					<select className="form-control" value={this.props.donHistCancer} onChange={this.props.onChangeDonHistCancer}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: SKIN - SQUAMOUS, BASAL CELL </option>
						<option value="3">3: SKIN - MELANOMA </option>
						<option value="4">4: CNS TUMOR - ASTROCYTOMA </option>
						<option value="5">5: CNS TUMOR - GLIOBLASTOMA MULTIFORME </option>
						<option value="6">6: CNS TUMOR - MEDULLOBLASTOMA </option>
						<option value="7">7: CNS TUMOR - NEUROBLASTOMA </option>
						<option value="8">8: CNS TUMOR - ANGIOBLASTOMA </option>
						<option value="9">9: CNS TUMOR - MENINGIOMA </option>
						<option value="12">12: CNS TUMOR - OTHER </option>
						<option value="13">13: GENITOURINARY - BLADDER </option>
						<option value="14">14: GENITOURINARY - UTERINE CERVIX </option>
						<option value="15">15: GENITOURINARY - UTERINE BODY ENDOMETRIAL </option>
						<option value="16">16: GENITOURINARY - UTERINE BODY CHORIOCARCINOMA </option>
						<option value="17">17: GENITOURINARY - VULVA </option>
						<option value="18">18: GENITOURINARY - OVARIAN </option>
						<option value="19">19: GENITOURINARY - PENIS, TESTICULAR </option>
						<option value="20">20: GENITOURINARY - PROSTATE </option>
						<option value="21">21: GENITOURINARY - KIDNEY </option>
						<option value="22">22: GENITOURINARY - UNKNOWN </option>
						<option value="23">23: GASTROINTESTINAL - ESOPHAGEAL </option>
						<option value="24">24: GASTROINTESTINAL - STOMACH </option>
						<option value="25">25: GASTROINTESTINAL - SMALL INTESTINE </option>
						<option value="26">26: GASTROINTESTINAL - COLO-RECTAL </option>
						<option value="27">27: GASTROINTESTINAL - LIVER {"&"} BILIARY TRACT </option>
						<option value="28">28: GASTROINTESTINAL - PANCREAS </option>
						<option value="29">29: BREAST </option>
						<option value="30">30: THYROID </option>
						<option value="32">32: TONGUE/THROAT </option>
						<option value="33">33: LARYNX </option>
						<option value="34">34: LUNG (include bronchial) </option>
						<option value="35">35: LEUKEMIA/LYMPHOMA </option>
						<option value="998">998: UNKNOWN </option>
						<option value="999">999: OTHER, SPECIFY</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST CIGARETTE GT20 PKYR</label>
					<label className="text-secondary" >Cigarette Use > 20 Pack Years - Ever:</label>
					<input className="form-control" type="text" value={this.props.donHistCigaretteGt20Pkyr} onChange={this.props.onChangeDonHistCigaretteGt20Pkyr} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donEjectFract: select.makeSelectDonEjectFract(),
	donEjectFractMeth: select.makeSelectDonEjectFractMeth(),
	donEthnicitySrtr: select.makeSelectDonEthnicitySrtr(),
	donExpandDonFlgOptn: select.makeSelectDonExpandDonFlgOptn(),
	donExpandDonKi: select.makeSelectDonExpandDonKi(),
	donExpressFamily: select.makeSelectDonExpressFamily(),
	donExtracranialCancer: select.makeSelectDonExtracranialCancer(),
	donFeedbackDone: select.makeSelectDonFeedbackDone(),
	donFinalSerumCreat: select.makeSelectDonFinalSerumCreat(),
	donGender: select.makeSelectDonGender(),
	donHbcStat: select.makeSelectDonHbcStat(),
	donHbvNat: select.makeSelectDonHbvNat(),
	donHbvSurfAntibody: select.makeSelectDonHbvSurfAntibody(),
	donHbvSurfAntigen: select.makeSelectDonHbvSurfAntigen(),
	donHcvNat: select.makeSelectDonHcvNat(),
	donHcvStat: select.makeSelectDonHcvStat(),
	donHeavyAlcohol: select.makeSelectDonHeavyAlcohol(),
	donHematocrit: select.makeSelectDonHematocrit(),
	donHeparin: select.makeSelectDonHeparin(),
	donHgtCm: select.makeSelectDonHgtCm(),
	donHighCreat: select.makeSelectDonHighCreat(),
	donHistAlcohol: select.makeSelectDonHistAlcohol(),
	donHistCancer: select.makeSelectDonHistCancer(),
	donHistCigaretteGt20Pkyr: select.makeSelectDonHistCigaretteGt20Pkyr(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonEjectFract: evt => dispatch(action.changeDonEjectFract(evt.target.value)),
		onChangeDonEjectFractMeth: evt => dispatch(action.changeDonEjectFractMeth(evt.target.value)),
		onChangeDonEthnicitySrtr: evt => dispatch(action.changeDonEthnicitySrtr(evt.target.value)),
		onChangeDonExpandDonFlgOptn: evt => dispatch(action.changeDonExpandDonFlgOptn(evt.target.value)),
		onChangeDonExpandDonKi: evt => dispatch(action.changeDonExpandDonKi(evt.target.value)),
		onChangeDonExpressFamily: evt => dispatch(action.changeDonExpressFamily(evt.target.value)),
		onChangeDonExtracranialCancer: evt => dispatch(action.changeDonExtracranialCancer(evt.target.value)),
		onChangeDonFeedbackDone: evt => dispatch(action.changeDonFeedbackDone(evt.target.value)),
		onChangeDonFinalSerumCreat: evt => dispatch(action.changeDonFinalSerumCreat(evt.target.value)),
		onChangeDonGender: evt => dispatch(action.changeDonGender(evt.target.value)),
		onChangeDonHbcStat: evt => dispatch(action.changeDonHbcStat(evt.target.value)),
		onChangeDonHbvNat: evt => dispatch(action.changeDonHbvNat(evt.target.value)),
		onChangeDonHbvSurfAntibody: evt => dispatch(action.changeDonHbvSurfAntibody(evt.target.value)),
		onChangeDonHbvSurfAntigen: evt => dispatch(action.changeDonHbvSurfAntigen(evt.target.value)),
		onChangeDonHcvNat: evt => dispatch(action.changeDonHcvNat(evt.target.value)),
		onChangeDonHcvStat: evt => dispatch(action.changeDonHcvStat(evt.target.value)),
		onChangeDonHeavyAlcohol: evt => dispatch(action.changeDonHeavyAlcohol(evt.target.value)),
		onChangeDonHematocrit: evt => dispatch(action.changeDonHematocrit(evt.target.value)),
		onChangeDonHeparin: evt => dispatch(action.changeDonHeparin(evt.target.value)),
		onChangeDonHgtCm: evt => dispatch(action.changeDonHgtCm(evt.target.value)),
		onChangeDonHighCreat: evt => dispatch(action.changeDonHighCreat(evt.target.value)),
		onChangeDonHistAlcohol: evt => dispatch(action.changeDonHistAlcohol(evt.target.value)),
		onChangeDonHistCancer: evt => dispatch(action.changeDonHistCancer(evt.target.value)),
		onChangeDonHistCigaretteGt20Pkyr: evt => dispatch(action.changeDonHistCigaretteGt20Pkyr(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm5 );
