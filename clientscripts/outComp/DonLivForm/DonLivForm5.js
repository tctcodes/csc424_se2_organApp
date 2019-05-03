import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm5 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN OTHER MEDS</label>
					<label className="text-secondary" >History of Hypertension Other Hypertensive Medication//Other Hypertensive Medication::</label>
					<select className="form-control" value={this.props.donHypertenOtherMeds} onChange={this.props.onChangeDonHypertenOtherMeds}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN POSTOP</label>
					<label className="text-secondary" >Donor Developed Hypertension Requiring Medication::</label>
					<select className="form-control" value={this.props.donHypertenPostop} onChange={this.props.onChangeDonHypertenPostop}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INIT DISCHRG DT</label>
					<label className="text-secondary" >Date of Initial Discharge::</label>
					<input className="form-control" type="datetime-local" value={this.props.donInitDischrgDt} onChange={this.props.onChangeDonInitDischrgDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INR POSTOP</label>
					<label className="text-secondary" >INR::</label>
					<input className="form-control" type="number" value={this.props.donInrPostop} onChange={this.props.onChangeDonInrPostop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INR PREOP</label>
					<label className="text-secondary" >INR::</label>
					<input className="form-control" type="number" value={this.props.donInrPreop} onChange={this.props.onChangeDonInrPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INTRAOP COMPL</label>
					<label className="text-secondary" >Intra-operative Complications::</label>
					<select className="form-control" value={this.props.donIntraopCompl} onChange={this.props.onChangeDonIntraopCompl}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INTRAOP COMPL REASON</label>
					<label className="text-secondary" >Intra-operative Complications Specify//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donIntraopComplReason} onChange={this.props.onChangeDonIntraopComplReason}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Sacrifice of Second Lobe Specify </option>
						<option value="2">2: Anesthetic Complication Specify </option>
						<option value="4">4: Arrhythmia Requiring Therapy </option>
						<option value="8">8: Cerebrovasular Accident </option>
						<option value="16">16: Phrenic Nerve Injury </option>
						<option value="32">32: Brachial Plexus Injury </option>
						<option value="64">64: Breast Implant Rupture </option>
						<option value="128">128: Other Specify </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI BIOPSY</label>
					<label className="text-secondary" >Kidney Biopsy::</label>
					<select className="form-control" value={this.props.donKiBiopsy} onChange={this.props.onChangeDonKiBiopsy}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI CREAT DISCHRG</label>
					<label className="text-secondary" >Kidney Creatinine At Discharge:</label>
					<input className="form-control" type="number" value={this.props.donKiCreatDischrg} onChange={this.props.onChangeDonKiCreatDischrg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI CREAT POSTOP</label>
					<label className="text-secondary" >Kidney Serum Creatinine//Serum Creatinine::</label>
					<input className="form-control" type="number" value={this.props.donKiCreatPostop} onChange={this.props.onChangeDonKiCreatPostop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI CREAT PREOP</label>
					<label className="text-secondary" >Kidney Preoperative Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donKiCreatPreop} onChange={this.props.onChangeDonKiCreatPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI OTHER COMPL</label>
					<label className="text-secondary" >Kidney Other Complications Requiring Intervention//Other Complications Requiring Intervention::</label>
					<select className="form-control" value={this.props.donKiOtherCompl} onChange={this.props.onChangeDonKiOtherCompl}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI OTHER COMPL INTERVENTION</label>
					<label className="text-secondary" >Kidney Other Complications//If Yes, Specify::</label>
					<select className="form-control" value={this.props.donKiOtherComplIntervention} onChange={this.props.onChangeDonKiOtherComplIntervention}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON KI OTHER INTERVENTION</label>
					<label className="text-secondary" >Kidney Other Interventional Procedures//Other Interventional Procedures::</label>
					<select className="form-control" value={this.props.donKiOtherIntervention} onChange={this.props.onChangeDonKiOtherIntervention}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI OTHER INTERVENTION DT</label>
					<label className="text-secondary" >Kidney Other Interventional Procedures Date//Date of Procedure::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiOtherInterventionDt} onChange={this.props.onChangeDonKiOtherInterventionDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI PCT GS</label>
					<label className="text-secondary" >Glomerulosclerosis::</label>
					<select className="form-control" value={this.props.donKiPctGs} onChange={this.props.onChangeDonKiPctGs}>
						<option value="" hidden disabled selected/>
						<option value="1">1: 0-5 </option>
						<option value="2">2: 6-10 </option>
						<option value="3">3: 11-15 </option>
						<option value="4">4: 16-20 </option>
						<option value="5">5: 20+ </option>
						<option value="6">6: Indeterminate </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI PROCEDURE CONVERT</label>
					<label className="text-secondary" >Conversion from Laparoscopic to Open::</label>
					<select className="form-control" value={this.props.donKiProcedureConvert} onChange={this.props.onChangeDonKiProcedureConvert}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI PROCEDURE TY</label>
					<label className="text-secondary" >Kidney Procedure Type:</label>
					<select className="form-control" value={this.props.donKiProcedureTy} onChange={this.props.onChangeDonKiProcedureTy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Transabdominal </option>
						<option value="2">2: Flank(retroperitoneal) </option>
						<option value="3">3: Laparoscopic Not Hand-assisted </option>
						<option value="4">4: Laparoscopic Hand-assisted </option>
						<option value="5">5: Laparoscopic Unknown (inactive) </option>
						<option value="6">6: Natural Orifice </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI READMIT</label>
					<label className="text-secondary" >Kidney Readmission//Any Readmission After Initial Discharge::</label>
					<select className="form-control" value={this.props.donKiReadmit} onChange={this.props.onChangeDonKiReadmit}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI READMIT DT</label>
					<label className="text-secondary" >Kidney Readmission Date//If Yes, Date of First Readmission::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReadmitDt} onChange={this.props.onChangeDonKiReadmitDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI READMIT REASON</label>
					<label className="text-secondary" >Kidney Readmission Reason//If yes, specify reason for readmission (during first six weeks)::</label>
					<select className="form-control" value={this.props.donKiReadmitReason} onChange={this.props.onChangeDonKiReadmitReason}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON KI REOP</label>
					<label className="text-secondary" >Kidney Reoperation//Reoperation::</label>
					<select className="form-control" value={this.props.donKiReop} onChange={this.props.onChangeDonKiReop}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP BLEEN</label>
					<label className="text-secondary" >Kidney Reoperation Bleeding//Bleeding:</label>
					<select className="form-control" value={this.props.donKiReopBleen} onChange={this.props.onChangeDonKiReopBleen}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI REOP BLEEN DT</label>
					<label className="text-secondary" >Kidney Reoperation Bleeding Date//Date::</label>
					<input className="form-control" type="datetime-local" value={this.props.donKiReopBleenDt} onChange={this.props.onChangeDonKiReopBleenDt} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donHypertenOtherMeds: select.makeSelectDonHypertenOtherMeds(),
	donHypertenPostop: select.makeSelectDonHypertenPostop(),
	donInitDischrgDt: select.makeSelectDonInitDischrgDt(),
	donInrPostop: select.makeSelectDonInrPostop(),
	donInrPreop: select.makeSelectDonInrPreop(),
	donIntraopCompl: select.makeSelectDonIntraopCompl(),
	donIntraopComplReason: select.makeSelectDonIntraopComplReason(),
	donKiBiopsy: select.makeSelectDonKiBiopsy(),
	donKiCreatDischrg: select.makeSelectDonKiCreatDischrg(),
	donKiCreatPostop: select.makeSelectDonKiCreatPostop(),
	donKiCreatPreop: select.makeSelectDonKiCreatPreop(),
	donKiOtherCompl: select.makeSelectDonKiOtherCompl(),
	donKiOtherComplIntervention: select.makeSelectDonKiOtherComplIntervention(),
	donKiOtherIntervention: select.makeSelectDonKiOtherIntervention(),
	donKiOtherInterventionDt: select.makeSelectDonKiOtherInterventionDt(),
	donKiPctGs: select.makeSelectDonKiPctGs(),
	donKiProcedureConvert: select.makeSelectDonKiProcedureConvert(),
	donKiProcedureTy: select.makeSelectDonKiProcedureTy(),
	donKiReadmit: select.makeSelectDonKiReadmit(),
	donKiReadmitDt: select.makeSelectDonKiReadmitDt(),
	donKiReadmitReason: select.makeSelectDonKiReadmitReason(),
	donKiReop: select.makeSelectDonKiReop(),
	donKiReopBleen: select.makeSelectDonKiReopBleen(),
	donKiReopBleenDt: select.makeSelectDonKiReopBleenDt(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonHypertenOtherMeds: evt => dispatch(action.changeDonHypertenOtherMeds(evt.target.value)),
		onChangeDonHypertenPostop: evt => dispatch(action.changeDonHypertenPostop(evt.target.value)),
		onChangeDonInitDischrgDt: evt => dispatch(action.changeDonInitDischrgDt(evt.target.value)),
		onChangeDonInrPostop: evt => dispatch(action.changeDonInrPostop(evt.target.value)),
		onChangeDonInrPreop: evt => dispatch(action.changeDonInrPreop(evt.target.value)),
		onChangeDonIntraopCompl: evt => dispatch(action.changeDonIntraopCompl(evt.target.value)),
		onChangeDonIntraopComplReason: evt => dispatch(action.changeDonIntraopComplReason(evt.target.value)),
		onChangeDonKiBiopsy: evt => dispatch(action.changeDonKiBiopsy(evt.target.value)),
		onChangeDonKiCreatDischrg: evt => dispatch(action.changeDonKiCreatDischrg(evt.target.value)),
		onChangeDonKiCreatPostop: evt => dispatch(action.changeDonKiCreatPostop(evt.target.value)),
		onChangeDonKiCreatPreop: evt => dispatch(action.changeDonKiCreatPreop(evt.target.value)),
		onChangeDonKiOtherCompl: evt => dispatch(action.changeDonKiOtherCompl(evt.target.value)),
		onChangeDonKiOtherComplIntervention: evt => dispatch(action.changeDonKiOtherComplIntervention(evt.target.value)),
		onChangeDonKiOtherIntervention: evt => dispatch(action.changeDonKiOtherIntervention(evt.target.value)),
		onChangeDonKiOtherInterventionDt: evt => dispatch(action.changeDonKiOtherInterventionDt(evt.target.value)),
		onChangeDonKiPctGs: evt => dispatch(action.changeDonKiPctGs(evt.target.value)),
		onChangeDonKiProcedureConvert: evt => dispatch(action.changeDonKiProcedureConvert(evt.target.value)),
		onChangeDonKiProcedureTy: evt => dispatch(action.changeDonKiProcedureTy(evt.target.value)),
		onChangeDonKiReadmit: evt => dispatch(action.changeDonKiReadmit(evt.target.value)),
		onChangeDonKiReadmitDt: evt => dispatch(action.changeDonKiReadmitDt(evt.target.value)),
		onChangeDonKiReadmitReason: evt => dispatch(action.changeDonKiReadmitReason(evt.target.value)),
		onChangeDonKiReop: evt => dispatch(action.changeDonKiReop(evt.target.value)),
		onChangeDonKiReopBleen: evt => dispatch(action.changeDonKiReopBleen(evt.target.value)),
		onChangeDonKiReopBleenDt: evt => dispatch(action.changeDonKiReopBleenDt(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm5 );
