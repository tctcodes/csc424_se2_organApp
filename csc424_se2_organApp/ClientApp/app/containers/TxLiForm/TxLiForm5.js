import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm5 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIGH CREAT</label>
					<label className="text-secondary" >Donor serum creatinine > 1.5 (1= yes, 0= no):</label>
					<input className="form-control" type="text" value={this.props.donHighCreat} onChange={this.props.onChangeDonHighCreat} />
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
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST COCAINE</label>
					<label className="text-secondary" >Cocaine Use:</label>
					<input className="form-control" type="text" value={this.props.donHistCocaine} onChange={this.props.onChangeDonHistCocaine} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST DIAB</label>
					<label className="text-secondary" >History of Diabetes:</label>
					<select className="form-control" value={this.props.donHistDiab} onChange={this.props.onChangeDonHistDiab}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, DURATION UNKNOWN </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST HYPERTEN</label>
					<label className="text-secondary" >History of Hypertension:</label>
					<select className="form-control" value={this.props.donHistHyperten} onChange={this.props.onChangeDonHistHyperten}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, UNKNOWN DURATION </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST IV DRUG</label>
					<label className="text-secondary" >IV Drug Use - Pre-6/30/2004:</label>
					<input className="form-control" type="text" value={this.props.donHistIvDrug} onChange={this.props.onChangeDonHistIvDrug} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST OTHER DRUG</label>
					<label className="text-secondary" >Other Drug Abuse:</label>
					<input className="form-control" type="text" value={this.props.donHistOtherDrug} onChange={this.props.onChangeDonHistOtherDrug} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HTN</label>
					<label className="text-secondary" >Donor history of hypertension (1= yes, 0= no):</label>
					<input className="form-control" type="text" value={this.props.donHtn} onChange={this.props.onChangeDonHtn} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INOTROP AGENT GE3</label>
					<label className="text-secondary" >Three or More Inotropic Agents at Time of Incision:</label>
					<input className="form-control" type="text" value={this.props.donInotropAgentGe3} onChange={this.props.onChangeDonInotropAgentGe3} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INOTROP SUPPORT</label>
					<label className="text-secondary" >Inotropic Support:</label>
					<input className="form-control" type="text" value={this.props.donInotropSupport} onChange={this.props.onChangeDonInotropSupport} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INSULIN</label>
					<label className="text-secondary" >Insulin::</label>
					<input className="form-control" type="text" value={this.props.donInsulin} onChange={this.props.onChangeDonInsulin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LIVING DON COD</label>
					<label className="text-secondary" >Donor/s Cause of Death:</label>
					<select className="form-control" value={this.props.donLivingDonCod} onChange={this.props.onChangeDonLivingDonCod}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Donation Related </option>
						<option value="2">2: Other Cause </option>
						<option value="3">3: Infection: Donation/Surgery Related </option>
						<option value="4">4: Infection: Not Donation/Surgery Related </option>
						<option value="5">5: Pulmonary Embolism </option>
						<option value="6">6: Malignancy </option>
						<option value="7">7: Domino Liver Donor-Transplant Related Death (Liver donors only) </option>
						<option value="8">8: Cardiovascular </option>
						<option value="9">9: CVA </option>
						<option value="10">10: Hemorrhage: Donation/Surgery Related </option>
						<option value="11">11: Hemorrhage: Not Donation/Surgery Related </option>
						<option value="12">12: Homicide </option>
						<option value="13">13: Suicide </option>
						<option value="14">14: Accidental </option>
						<option value="15">15: Other, specify </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY</label>
					<label className="text-secondary" >Liver Biopsy:</label>
					<input className="form-control" type="text" value={this.props.donLiBiopsy} onChange={this.props.onChangeDonLiBiopsy} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MEET CDC HIGH RISK</label>
					<label className="text-secondary" >Does the Donor meet CDC guidelines for High Risk for an organ donor::</label>
					<input className="form-control" type="text" value={this.props.donMeetCdcHighRisk} onChange={this.props.onChangeDonMeetCdcHighRisk} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON NON HR BEAT</label>
					<label className="text-secondary" >Non-Heart Beating Donor:</label>
					<input className="form-control" type="text" value={this.props.donNonHrBeat} onChange={this.props.onChangeDonNonHrBeat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON OPO CTR ID</label>
					<label className="text-secondary" >DON_OPO_ Center ID:</label>
					<input className="form-control" type="number" readOnly value={this.props.donOpoCtrId} onChange={this.props.onChangeDonOpoCtrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ORG SHARED</label>
					<label className="text-secondary" >Organ was used in a shared 1 (vs local 0) TX:</label>
					<input className="form-control" type="number" value={this.props.donOrgShared} onChange={this.props.onChangeDonOrgShared} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PH</label>
					<label className="text-secondary" >Blood PH::</label>
					<input className="form-control" type="number" value={this.props.donPh} onChange={this.props.onChangeDonPh} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV DIURETICS</label>
					<label className="text-secondary" >Pre-Recov Meds given Donor: Diuretics:</label>
					<input className="form-control" type="text" value={this.props.donPrerecovDiuretics} onChange={this.props.onChangeDonPrerecovDiuretics} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RACE</label>
					<label className="text-secondary" >Donor/s race:</label>
					<select className="form-control" value={this.props.donRace} onChange={this.props.onChangeDonRace}>
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
					<label className="font-weight-bold" >DON RACE SRTR</label>
					<label className="text-secondary" >SRTR Donor Race:</label>
					<select className="form-control" value={this.props.donRaceSrtr} onChange={this.props.onChangeDonRaceSrtr}>
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
					<label className="font-weight-bold" >DON RECOV DT</label>
					<label className="text-secondary" >Recovery Date (donor to OR):</label>
					<input className="form-control" type="datetime-local" value={this.props.donRecovDt} onChange={this.props.onChangeDonRecovDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RELATIONSHIP TY</label>
					<label className="text-secondary" >Living Donor/s Relationship to Recipient:</label>
					<select className="form-control" value={this.props.donRelationshipTy} onChange={this.props.onChangeDonRelationshipTy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Biological, blood related Parent </option>
						<option value="2">2: Biological, blood related Child </option>
						<option value="3">3: Biological, blood related Identical Twin </option>
						<option value="4">4: Biological, blood related Full Sibling </option>
						<option value="5">5: Biological, blood related Half Sibling </option>
						<option value="6">6: Biological, blood related Other Relative: Specify </option>
						<option value="7">7: Non-Biological, Spouse </option>
						<option value="8">8: Non-Biological, Life Partner </option>
						<option value="9">9: Non-Biological, Unrelated: Paired Donation </option>
						<option value="10">10: Non-Biological, Unrelated: Non-Directed Donation (Anonymous) </option>
						<option value="11">11: Non-Biological, Living/Deceased Donation (Inactive) </option>
						<option value="12">12: Non-Biological, Unrelated: Domino </option>
						<option value="13">13: Biological, blood related: Domino </option>
						<option value="14">14: Biological, blood related: Non-Domino Therapeutic donor </option>
						<option value="15">15: Non-Biological, Unrelated: Non-Domino Therapeutic donor </option>
						<option value="999">999: Non-Biological, Other Unrelated Directed Donation: Specify</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donHighCreat: select.makeSelectDonHighCreat(),
	donHistCancer: select.makeSelectDonHistCancer(),
	donHistCigaretteGt20Pkyr: select.makeSelectDonHistCigaretteGt20Pkyr(),
	donHistCocaine: select.makeSelectDonHistCocaine(),
	donHistDiab: select.makeSelectDonHistDiab(),
	donHistHyperten: select.makeSelectDonHistHyperten(),
	donHistIvDrug: select.makeSelectDonHistIvDrug(),
	donHistOtherDrug: select.makeSelectDonHistOtherDrug(),
	donHtn: select.makeSelectDonHtn(),
	donInotropAgentGe3: select.makeSelectDonInotropAgentGe3(),
	donInotropSupport: select.makeSelectDonInotropSupport(),
	donInsulin: select.makeSelectDonInsulin(),
	donLivingDonCod: select.makeSelectDonLivingDonCod(),
	donLiBiopsy: select.makeSelectDonLiBiopsy(),
	donMeetCdcHighRisk: select.makeSelectDonMeetCdcHighRisk(),
	donNonHrBeat: select.makeSelectDonNonHrBeat(),
	donOpoCtrId: select.makeSelectDonOpoCtrId(),
	donOrgShared: select.makeSelectDonOrgShared(),
	donPh: select.makeSelectDonPh(),
	donPrerecovDiuretics: select.makeSelectDonPrerecovDiuretics(),
	donRace: select.makeSelectDonRace(),
	donRaceSrtr: select.makeSelectDonRaceSrtr(),
	donRecovDt: select.makeSelectDonRecovDt(),
	donRelationshipTy: select.makeSelectDonRelationshipTy(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonHighCreat: evt => dispatch(action.changeDonHighCreat(evt.target.value)),
		onChangeDonHistCancer: evt => dispatch(action.changeDonHistCancer(evt.target.value)),
		onChangeDonHistCigaretteGt20Pkyr: evt => dispatch(action.changeDonHistCigaretteGt20Pkyr(evt.target.value)),
		onChangeDonHistCocaine: evt => dispatch(action.changeDonHistCocaine(evt.target.value)),
		onChangeDonHistDiab: evt => dispatch(action.changeDonHistDiab(evt.target.value)),
		onChangeDonHistHyperten: evt => dispatch(action.changeDonHistHyperten(evt.target.value)),
		onChangeDonHistIvDrug: evt => dispatch(action.changeDonHistIvDrug(evt.target.value)),
		onChangeDonHistOtherDrug: evt => dispatch(action.changeDonHistOtherDrug(evt.target.value)),
		onChangeDonHtn: evt => dispatch(action.changeDonHtn(evt.target.value)),
		onChangeDonInotropAgentGe3: evt => dispatch(action.changeDonInotropAgentGe3(evt.target.value)),
		onChangeDonInotropSupport: evt => dispatch(action.changeDonInotropSupport(evt.target.value)),
		onChangeDonInsulin: evt => dispatch(action.changeDonInsulin(evt.target.value)),
		onChangeDonLivingDonCod: evt => dispatch(action.changeDonLivingDonCod(evt.target.value)),
		onChangeDonLiBiopsy: evt => dispatch(action.changeDonLiBiopsy(evt.target.value)),
		onChangeDonMeetCdcHighRisk: evt => dispatch(action.changeDonMeetCdcHighRisk(evt.target.value)),
		onChangeDonNonHrBeat: evt => dispatch(action.changeDonNonHrBeat(evt.target.value)),
		onChangeDonOpoCtrId: evt => dispatch(action.changeDonOpoCtrId(evt.target.value)),
		onChangeDonOrgShared: evt => dispatch(action.changeDonOrgShared(evt.target.value)),
		onChangeDonPh: evt => dispatch(action.changeDonPh(evt.target.value)),
		onChangeDonPrerecovDiuretics: evt => dispatch(action.changeDonPrerecovDiuretics(evt.target.value)),
		onChangeDonRace: evt => dispatch(action.changeDonRace(evt.target.value)),
		onChangeDonRaceSrtr: evt => dispatch(action.changeDonRaceSrtr(evt.target.value)),
		onChangeDonRecovDt: evt => dispatch(action.changeDonRecovDt(evt.target.value)),
		onChangeDonRelationshipTy: evt => dispatch(action.changeDonRelationshipTy(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm5 );
