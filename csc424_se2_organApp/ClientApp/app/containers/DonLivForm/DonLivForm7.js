import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm7 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI READMIT</label>
					<label className="text-secondary" >Liver Readmission//Any Readmission After Initial Discharge::</label>
					<input className="form-control" type="text" value={this.props.donLiReadmit} onChange={this.props.onChangeDonLiReadmit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI READMIT DT</label>
					<label className="text-secondary" >Liver Readmission Date//If Yes, Date of First Readmission::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReadmitDt} onChange={this.props.onChangeDonLiReadmitDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI READMIT REASON</label>
					<label className="text-secondary" >Liver Readmission Reason//If yes, specify reason for readmission (during first six weeks)::</label>
					<select className="form-control" value={this.props.donLiReadmitReason} onChange={this.props.onChangeDonLiReadmitReason}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Wound Infection </option>
						<option value="2">2: Fever </option>
						<option value="4">4: Bowel Obstruction </option>
						<option value="8">8: Pleural Effusion </option>
						<option value="16">16: Biliary Complications </option>
						<option value="32">32: Vascular Complications </option>
						<option value="64">64: Other, specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP</label>
					<label className="text-secondary" >Liver Reoperation//Reoperation::</label>
					<input className="form-control" type="text" value={this.props.donLiReop} onChange={this.props.onChangeDonLiReop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BILIARY</label>
					<label className="text-secondary" >Liver Reoperation Biliary//Biliary:</label>
					<input className="form-control" type="text" value={this.props.donLiReopBiliary} onChange={this.props.onChangeDonLiReopBiliary} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BILIARY DT</label>
					<label className="text-secondary" >Liver Reoperation Biliary Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopBiliaryDt} onChange={this.props.onChangeDonLiReopBiliaryDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BLEED</label>
					<label className="text-secondary" >Liver Reoperation Bleeding Complications//Bleeding Complications:</label>
					<input className="form-control" type="text" value={this.props.donLiReopBleed} onChange={this.props.onChangeDonLiReopBleed} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BLEED DT</label>
					<label className="text-secondary" >Liver Reoperation Bleeding Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopBleedDt} onChange={this.props.onChangeDonLiReopBleedDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BOWEL</label>
					<label className="text-secondary" >Liver Reoperation Bowel Obstruction//Bowel Obstruction:</label>
					<input className="form-control" type="text" value={this.props.donLiReopBowel} onChange={this.props.onChangeDonLiReopBowel} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP BOWEL DT</label>
					<label className="text-secondary" >Liver Reoperation Bowel Obstruction Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopBowelDt} onChange={this.props.onChangeDonLiReopBowelDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP FAIL</label>
					<label className="text-secondary" >Liver Reoperation Liver Failure///Liver Failure Requiring Transplant:</label>
					<input className="form-control" type="text" value={this.props.donLiReopFail} onChange={this.props.onChangeDonLiReopFail} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP FAIL DT</label>
					<label className="text-secondary" >Liver Reoperation Liver Failure Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopFailDt} onChange={this.props.onChangeDonLiReopFailDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP HERNIA</label>
					<label className="text-secondary" >Liver Reoperation Hernia Repair//Hernia Repair:</label>
					<input className="form-control" type="text" value={this.props.donLiReopHernia} onChange={this.props.onChangeDonLiReopHernia} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP HERNIA DT</label>
					<label className="text-secondary" >Liver Reoperation Hernia Repair Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopHerniaDt} onChange={this.props.onChangeDonLiReopHerniaDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP OTHER</label>
					<label className="text-secondary" >Liver Reoperation Other//Other Specify:</label>
					<input className="form-control" type="text" value={this.props.donLiReopOther} onChange={this.props.onChangeDonLiReopOther} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP OTHER DT</label>
					<label className="text-secondary" >Liver Reoperation Other Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopOtherDt} onChange={this.props.onChangeDonLiReopOtherDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP VASC</label>
					<label className="text-secondary" >Liver Reoperation Vascular Complications//Vascular Complications:</label>
					<input className="form-control" type="text" value={this.props.donLiReopVasc} onChange={this.props.onChangeDonLiReopVasc} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI REOP VASC DT</label>
					<label className="text-secondary" >Liver Reoperation Vascular Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donLiReopVascDt} onChange={this.props.onChangeDonLiReopVascDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI VASC COMPL</label>
					<label className="text-secondary" >Liver Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention::</label>
					<input className="form-control" type="text" value={this.props.donLiVascCompl} onChange={this.props.onChangeDonLiVascCompl} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI VASC COMPL INTERVENTION</label>
					<label className="text-secondary" >Liver Vascular Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donLiVascComplIntervention} onChange={this.props.onChangeDonLiVascComplIntervention}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Portal Vein </option>
						<option value="2">2: Hepatic Vein </option>
						<option value="4">4: Hepatic Artery </option>
						<option value="8">8: Pulmonary Embolus </option>
						<option value="16">16: Deep Vein Thrombosis </option>
						<option value="32">32: Other, Specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU ARRHYTHM</label>
					<label className="text-secondary" >Arrhythmia requiring therapy::</label>
					<select className="form-control" value={this.props.donLuArrhythm} onChange={this.props.onChangeDonLuArrhythm}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Medical therapy </option>
						<option value="2">2: Cardioversion </option>
						<option value="3">3: Electrophysiologic Ablation </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU CAPACITY PREOP</label>
					<label className="text-secondary" >Diffusing lung capacity corrected for alveolar volume % predicted::</label>
					<input className="form-control" type="number" value={this.props.donLuCapacityPreop} onChange={this.props.onChangeDonLuCapacityPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU COMPL</label>
					<label className="text-secondary" >Post-operative complications during the initial hospitalization::</label>
					<input className="form-control" type="text" value={this.props.donLuCompl} onChange={this.props.onChangeDonLuCompl} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LU COMPL REASON</label>
					<label className="text-secondary" >Post-operative Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donLuComplReason} onChange={this.props.onChangeDonLuComplReason}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Arrhythmia requiring therapy </option>
						<option value="2">2: Bleeding requiring surgical or therapeutic bronchoscopic intervention </option>
						<option value="4">4: Bowel obstruction or ileus not requiring surgical intervention </option>
						<option value="8">8: Bowel obstruction or ileus requiring surgical intervention </option>
						<option value="16">16: Bronchial Stenosis/Stricture not requiring surgical or therapeutic bronchoscopic intervention </option>
						<option value="32">32: Bronchial Stenosis/Stricture requiring surgical or therapeutic bronchoscopic intervention </option>
						<option value="64">64: Bronchopleural Fistula requiring surgical or therapeutic bronchoscopic intervention </option>
						<option value="128">128: Cerebrovascular Accident </option>
						<option value="256">256: Deep Vein Thrombosis </option>
						<option value="512">512: Empyema requiring therapeutic surgical intervention </option>
						<option value="1024">1024: Epidural-Related Complication </option>
						<option value="2048">2048: Line or IV Complication </option>
						<option value="4096">4096: Loculated pleural effusion requiring surgical intervention </option>
						<option value="8192">8192: Pericardial tamponade or pericarditis requiring surgical intervention </option>
						<option value="16384">16384: Pericarditis not requiring surgical intervention </option>
						<option value="32768">32768: Peripheral Nerve Injury </option>
						<option value="65536">65536: Phrenic Nerve Injury </option>
						<option value="131072">131072: Placement of Additional Thoracostomy Tube(s), Specify Indication </option>
						<option value="262144">262144: Pneumonia/Atelectasis </option>
						<option value="524288">524288: Prolonged (>14days) Thoracostomy Tube Requirement </option>
						<option value="1048576">1048576: Pulmonary Artery Embolus or Thrombosis </option>
						<option value="2097152">2097152: Pulmonary Vein or Left Atrial Thrombosis </option>
						<option value="4194304">4194304: Wound Complication </option>
						<option value="8388608">8388608: Wound infection requiring surgical intervention </option>
						<option value="16777216">16777216: Other Specify </option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donLiReadmit: select.makeSelectDonLiReadmit(),
	donLiReadmitDt: select.makeSelectDonLiReadmitDt(),
	donLiReadmitReason: select.makeSelectDonLiReadmitReason(),
	donLiReop: select.makeSelectDonLiReop(),
	donLiReopBiliary: select.makeSelectDonLiReopBiliary(),
	donLiReopBiliaryDt: select.makeSelectDonLiReopBiliaryDt(),
	donLiReopBleed: select.makeSelectDonLiReopBleed(),
	donLiReopBleedDt: select.makeSelectDonLiReopBleedDt(),
	donLiReopBowel: select.makeSelectDonLiReopBowel(),
	donLiReopBowelDt: select.makeSelectDonLiReopBowelDt(),
	donLiReopFail: select.makeSelectDonLiReopFail(),
	donLiReopFailDt: select.makeSelectDonLiReopFailDt(),
	donLiReopHernia: select.makeSelectDonLiReopHernia(),
	donLiReopHerniaDt: select.makeSelectDonLiReopHerniaDt(),
	donLiReopOther: select.makeSelectDonLiReopOther(),
	donLiReopOtherDt: select.makeSelectDonLiReopOtherDt(),
	donLiReopVasc: select.makeSelectDonLiReopVasc(),
	donLiReopVascDt: select.makeSelectDonLiReopVascDt(),
	donLiVascCompl: select.makeSelectDonLiVascCompl(),
	donLiVascComplIntervention: select.makeSelectDonLiVascComplIntervention(),
	donLuArrhythm: select.makeSelectDonLuArrhythm(),
	donLuCapacityPreop: select.makeSelectDonLuCapacityPreop(),
	donLuCompl: select.makeSelectDonLuCompl(),
	donLuComplReason: select.makeSelectDonLuComplReason(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonLiReadmit: evt => dispatch(action.changeDonLiReadmit(evt.target.value)),
		onChangeDonLiReadmitDt: evt => dispatch(action.changeDonLiReadmitDt(evt.target.value)),
		onChangeDonLiReadmitReason: evt => dispatch(action.changeDonLiReadmitReason(evt.target.value)),
		onChangeDonLiReop: evt => dispatch(action.changeDonLiReop(evt.target.value)),
		onChangeDonLiReopBiliary: evt => dispatch(action.changeDonLiReopBiliary(evt.target.value)),
		onChangeDonLiReopBiliaryDt: evt => dispatch(action.changeDonLiReopBiliaryDt(evt.target.value)),
		onChangeDonLiReopBleed: evt => dispatch(action.changeDonLiReopBleed(evt.target.value)),
		onChangeDonLiReopBleedDt: evt => dispatch(action.changeDonLiReopBleedDt(evt.target.value)),
		onChangeDonLiReopBowel: evt => dispatch(action.changeDonLiReopBowel(evt.target.value)),
		onChangeDonLiReopBowelDt: evt => dispatch(action.changeDonLiReopBowelDt(evt.target.value)),
		onChangeDonLiReopFail: evt => dispatch(action.changeDonLiReopFail(evt.target.value)),
		onChangeDonLiReopFailDt: evt => dispatch(action.changeDonLiReopFailDt(evt.target.value)),
		onChangeDonLiReopHernia: evt => dispatch(action.changeDonLiReopHernia(evt.target.value)),
		onChangeDonLiReopHerniaDt: evt => dispatch(action.changeDonLiReopHerniaDt(evt.target.value)),
		onChangeDonLiReopOther: evt => dispatch(action.changeDonLiReopOther(evt.target.value)),
		onChangeDonLiReopOtherDt: evt => dispatch(action.changeDonLiReopOtherDt(evt.target.value)),
		onChangeDonLiReopVasc: evt => dispatch(action.changeDonLiReopVasc(evt.target.value)),
		onChangeDonLiReopVascDt: evt => dispatch(action.changeDonLiReopVascDt(evt.target.value)),
		onChangeDonLiVascCompl: evt => dispatch(action.changeDonLiVascCompl(evt.target.value)),
		onChangeDonLiVascComplIntervention: evt => dispatch(action.changeDonLiVascComplIntervention(evt.target.value)),
		onChangeDonLuArrhythm: evt => dispatch(action.changeDonLuArrhythm(evt.target.value)),
		onChangeDonLuCapacityPreop: evt => dispatch(action.changeDonLuCapacityPreop(evt.target.value)),
		onChangeDonLuCompl: evt => dispatch(action.changeDonLuCompl(evt.target.value)),
		onChangeDonLuComplReason: evt => dispatch(action.changeDonLuComplReason(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm7 );
