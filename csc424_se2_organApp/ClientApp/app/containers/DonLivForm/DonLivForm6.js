import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm6 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP BOWEL</label>
					<label className="text-secondary" >Kidney Reoperation Bowel Obstruction//Bowel Obstruction:</label>
					<select className="form-control" value={this.props.donKiReopBowel} onChange={this.props.onChangeDonKiReopBowel}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP BOWEL DT</label>
					<label className="text-secondary" >Kidney Reoperation Bowel Obstruction Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReopBowelDt} onChange={this.props.onChangeDonKiReopBowelDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP HERNIA</label>
					<label className="text-secondary" >Kidney Reoperation Hernia Repair//Hernia Repair:</label>
					<select className="form-control" value={this.props.donKiReopHernia} onChange={this.props.onChangeDonKiReopHernia}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP HERNIA DT</label>
					<label className="text-secondary" >Kidney Reoperation Hernia Repair Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReopHerniaDt} onChange={this.props.onChangeDonKiReopHerniaDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP OTHER</label>
					<label className="text-secondary" >Kidney Reoperation Other//Other Specify:</label>
					<select className="form-control" value={this.props.donKiReopOther} onChange={this.props.onChangeDonKiReopOther}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP OTHER DT</label>
					<label className="text-secondary" >Kidney Reoperation Other Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReopOtherDt} onChange={this.props.onChangeDonKiReopOtherDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP VASC</label>
					<label className="text-secondary" >Kidney Reoperation Vascular//Vascular:</label>
					<select className="form-control" value={this.props.donKiReopVasc} onChange={this.props.onChangeDonKiReopVasc}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP VASC DT</label>
					<label className="text-secondary" >Kidney Reoperation Vascular Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReopVascDt} onChange={this.props.onChangeDonKiReopVascDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI VASC COMPL</label>
					<label className="text-secondary" >Kidney Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention::</label>
					<select className="form-control" value={this.props.donKiVascCompl} onChange={this.props.onChangeDonKiVascCompl}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI VASC COMPL INTERVENTION</label>
					<label className="text-secondary" >Kidney Vascular Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donKiVascComplIntervention} onChange={this.props.onChangeDonKiVascComplIntervention}>
						<option value="" hidden disabled />
						<option value="">Missing </option>
						<option value="1">1: Renal Vein </option>
						<option value="2">2: Renal Artery </option>
						<option value="4">4: Aorta </option>
						<option value="8">8: Vena Cava </option>
						<option value="16">16: Pulmonary Embolus </option>
						<option value="32">32: Deep Vein Thrombosis </option>
						<option value="64">64: Other, specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LENGTH HOSP STAY</label>
					<label className="text-secondary" >Length of Hospital Stay:</label>
					<input className="form-control" type="number" value={this.props.donLengthHospStay} onChange={this.props.onChangeDonLengthHospStay} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LIVING DON COD</label>
					<label className="text-secondary" >Donor/s Cause of Death:</label>
					<select className="form-control" value={this.props.donLivingDonCod} onChange={this.props.onChangeDonLivingDonCod}>
						<option value="" hidden disabled />
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
					<label className="font-weight-bold" >DON LI BILIARY COMPL</label>
					<label className="text-secondary" >Biliary Complications::</label>
					<select className="form-control" value={this.props.donLiBiliaryCompl} onChange={this.props.onChangeDonLiBiliaryCompl}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BILIARY COMPL GRADE</label>
					<label className="text-secondary" >Biliary Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donLiBiliaryComplGrade} onChange={this.props.onChangeDonLiBiliaryComplGrade}>
						<option value="" hidden disabled />
						<option value="">Missing </option>
						<option value="1">1: Grade 1 - Bilious JP drainage more than 10 days </option>
						<option value="2">2: Grade 2 - Interventional procedure (ERCP, PTC, percutaneous drainage, etc.) </option>
						<option value="4">4: Grade 3 - Surgical Intervention </option>
						<option value="**OTHER**">Multiple Choices</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY</label>
					<label className="text-secondary" >Liver Biopsy::</label>
					<select className="form-control" value={this.props.donLiBiopsy} onChange={this.props.onChangeDonLiBiopsy}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY MACRO FAT</label>
					<label className="text-secondary" >% Macro vesicular fat::</label>
					<input className="form-control" type="number" value={this.props.donLiBiopsyMacroFat} onChange={this.props.onChangeDonLiBiopsyMacroFat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY MICRO FAT</label>
					<label className="text-secondary" >% Micro vesicular fat::</label>
					<input className="form-control" type="number" value={this.props.donLiBiopsyMicroFat} onChange={this.props.onChangeDonLiBiopsyMicroFat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI CREAT POSTOP</label>
					<label className="text-secondary" >Serum Creatinine::</label>
					<input className="form-control" type="number" value={this.props.donLiCreatPostop} onChange={this.props.onChangeDonLiCreatPostop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI CREAT PREOP</label>
					<label className="text-secondary" >Serum Creatinine::</label>
					<input className="form-control" type="number" value={this.props.donLiCreatPreop} onChange={this.props.onChangeDonLiCreatPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTHER COMPL</label>
					<label className="text-secondary" >Liver Other Complications Requiring Intervention//Other Complications Requiring Intervention::</label>
					<select className="form-control" value={this.props.donLiOtherCompl} onChange={this.props.onChangeDonLiOtherCompl}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTHER COMPL INTERVENTION</label>
					<label className="text-secondary" >Liver Other Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donLiOtherComplIntervention} onChange={this.props.onChangeDonLiOtherComplIntervention}>
						<option value="" hidden disabled />
						<option value="">Missing </option>
						<option value="1">1: Renal insufficiency requiring dialysis </option>
						<option value="2">2: Ascites </option>
						<option value="4">4: Line or IV complication </option>
						<option value="8">8: Pneumothorax </option>
						<option value="16">16: Pneumonia </option>
						<option value="32">32: Wound Complication </option>
						<option value="64">64: Brachial Nerve Injury </option>
						<option value="128">128: Other, specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTHER INTERVENTION</label>
					<label className="text-secondary" >Liver Other Interventional Procedures//Other Interventional Procedures::</label>
					<select className="form-control" value={this.props.donLiOtherIntervention} onChange={this.props.onChangeDonLiOtherIntervention}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTHER INTERVENTION DT</label>
					<label className="text-secondary" >Liver Other Interventional Procedures Date//Date of Procedure::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiOtherInterventionDt} onChange={this.props.onChangeDonLiOtherInterventionDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI PROCEDURE TY</label>
					<label className="text-secondary" >Type of Transplant Graft::</label>
					<select className="form-control" value={this.props.donLiProcedureTy} onChange={this.props.onChangeDonLiProcedureTy}>
						<option value="" hidden disabled />
						<option value="1">1: Left Lateral Segment </option>
						<option value="2">2: Left Lobe </option>
						<option value="3">3: Right Lobe </option>
						<option value="4">4: Domino Whole Liver </option>
						<option value="5">5: Left Lobe without MHV (Middle Hepatic Vein) </option>
						<option value="6">6: Left Lobe with MHV </option>
						<option value="7">7: Right Lobe without MHV </option>
						<option value="8">8: Right Lobe with MHV </option>
						<option value="9">9: Domino Partial Liver </option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donKiReopBowel: select.makeSelectDonKiReopBowel(),
	donKiReopBowelDt: select.makeSelectDonKiReopBowelDt(),
	donKiReopHernia: select.makeSelectDonKiReopHernia(),
	donKiReopHerniaDt: select.makeSelectDonKiReopHerniaDt(),
	donKiReopOther: select.makeSelectDonKiReopOther(),
	donKiReopOtherDt: select.makeSelectDonKiReopOtherDt(),
	donKiReopVasc: select.makeSelectDonKiReopVasc(),
	donKiReopVascDt: select.makeSelectDonKiReopVascDt(),
	donKiVascCompl: select.makeSelectDonKiVascCompl(),
	donKiVascComplIntervention: select.makeSelectDonKiVascComplIntervention(),
	donLengthHospStay: select.makeSelectDonLengthHospStay(),
	donLivingDonCod: select.makeSelectDonLivingDonCod(),
	donLiBiliaryCompl: select.makeSelectDonLiBiliaryCompl(),
	donLiBiliaryComplGrade: select.makeSelectDonLiBiliaryComplGrade(),
	donLiBiopsy: select.makeSelectDonLiBiopsy(),
	donLiBiopsyMacroFat: select.makeSelectDonLiBiopsyMacroFat(),
	donLiBiopsyMicroFat: select.makeSelectDonLiBiopsyMicroFat(),
	donLiCreatPostop: select.makeSelectDonLiCreatPostop(),
	donLiCreatPreop: select.makeSelectDonLiCreatPreop(),
	donLiOtherCompl: select.makeSelectDonLiOtherCompl(),
	donLiOtherComplIntervention: select.makeSelectDonLiOtherComplIntervention(),
	donLiOtherIntervention: select.makeSelectDonLiOtherIntervention(),
	donLiOtherInterventionDt: select.makeSelectDonLiOtherInterventionDt(),
	donLiProcedureTy: select.makeSelectDonLiProcedureTy(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonKiReopBowel: evt => dispatch(action.changeDonKiReopBowel(evt.target.value)),
		onChangeDonKiReopBowelDt: evt => dispatch(action.changeDonKiReopBowelDt(evt.target.value)),
		onChangeDonKiReopHernia: evt => dispatch(action.changeDonKiReopHernia(evt.target.value)),
		onChangeDonKiReopHerniaDt: evt => dispatch(action.changeDonKiReopHerniaDt(evt.target.value)),
		onChangeDonKiReopOther: evt => dispatch(action.changeDonKiReopOther(evt.target.value)),
		onChangeDonKiReopOtherDt: evt => dispatch(action.changeDonKiReopOtherDt(evt.target.value)),
		onChangeDonKiReopVasc: evt => dispatch(action.changeDonKiReopVasc(evt.target.value)),
		onChangeDonKiReopVascDt: evt => dispatch(action.changeDonKiReopVascDt(evt.target.value)),
		onChangeDonKiVascCompl: evt => dispatch(action.changeDonKiVascCompl(evt.target.value)),
		onChangeDonKiVascComplIntervention: evt => dispatch(action.changeDonKiVascComplIntervention(evt.target.value)),
		onChangeDonLengthHospStay: evt => dispatch(action.changeDonLengthHospStay(evt.target.value)),
		onChangeDonLivingDonCod: evt => dispatch(action.changeDonLivingDonCod(evt.target.value)),
		onChangeDonLiBiliaryCompl: evt => dispatch(action.changeDonLiBiliaryCompl(evt.target.value)),
		onChangeDonLiBiliaryComplGrade: evt => dispatch(action.changeDonLiBiliaryComplGrade(evt.target.value)),
		onChangeDonLiBiopsy: evt => dispatch(action.changeDonLiBiopsy(evt.target.value)),
		onChangeDonLiBiopsyMacroFat: evt => dispatch(action.changeDonLiBiopsyMacroFat(evt.target.value)),
		onChangeDonLiBiopsyMicroFat: evt => dispatch(action.changeDonLiBiopsyMicroFat(evt.target.value)),
		onChangeDonLiCreatPostop: evt => dispatch(action.changeDonLiCreatPostop(evt.target.value)),
		onChangeDonLiCreatPreop: evt => dispatch(action.changeDonLiCreatPreop(evt.target.value)),
		onChangeDonLiOtherCompl: evt => dispatch(action.changeDonLiOtherCompl(evt.target.value)),
		onChangeDonLiOtherComplIntervention: evt => dispatch(action.changeDonLiOtherComplIntervention(evt.target.value)),
		onChangeDonLiOtherIntervention: evt => dispatch(action.changeDonLiOtherIntervention(evt.target.value)),
		onChangeDonLiOtherInterventionDt: evt => dispatch(action.changeDonLiOtherInterventionDt(evt.target.value)),
		onChangeDonLiProcedureTy: evt => dispatch(action.changeDonLiProcedureTy(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm6 );
