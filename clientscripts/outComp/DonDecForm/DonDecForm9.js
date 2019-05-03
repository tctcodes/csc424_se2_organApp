import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm9 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PROTEIN URINE</label>
					<label className="text-secondary" >Protein in Urine:</label>
					<select className="form-control" value={this.props.donProteinUrine} onChange={this.props.onChangeDonProteinUrine}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PULM CATH</label>
					<label className="text-secondary" >Was a pulmonary artery catheter placed::</label>
					<select className="form-control" value={this.props.donPulmCath} onChange={this.props.onChangeDonPulmCath}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
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
					<label className="font-weight-bold" >DON RECOV OUT US</label>
					<label className="text-secondary" >Recovered Outside the U.S.:</label>
					<select className="form-control" value={this.props.donRecovOutUs} onChange={this.props.onChangeDonRecovOutUs}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON REF DT</label>
					<label className="text-secondary" >Referral Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.donRefDt} onChange={this.props.onChangeDonRefDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON REF FLG</label>
					<label className="text-secondary" >Referral Flag:</label>
					<select className="form-control" value={this.props.donRefFlg} onChange={this.props.onChangeDonRefFlg}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RESUSCIT DURATION</label>
					<label className="text-secondary" >Duration of Resuscitation:</label>
					<input className="form-control" type="number" value={this.props.donResuscitDuration} onChange={this.props.onChangeDonResuscitDuration} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RPR VDRL</label>
					<label className="text-secondary" >RPR-VDRL:</label>
					<select className="form-control" value={this.props.donRprVdrl} onChange={this.props.onChangeDonRprVdrl}>
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
					<label className="font-weight-bold" >DON RT KI BIOPSY</label>
					<label className="text-secondary" >Kidney Biopsy (right):</label>
					<select className="form-control" value={this.props.donRtKiBiopsy} onChange={this.props.onChangeDonRtKiBiopsy}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RT KI GLOMER SCLER PCT</label>
					<label className="text-secondary" >% Glomerulosclerosis (Right Kidney):</label>
					<select className="form-control" value={this.props.donRtKiGlomerSclerPct} onChange={this.props.onChangeDonRtKiGlomerSclerPct}>
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
					<label className="font-weight-bold" >DON RT KI PUMP</label>
					<label className="text-secondary" >Pump (Right Kidney):</label>
					<select className="form-control" value={this.props.donRtKiPump} onChange={this.props.onChangeDonRtKiPump}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RT KI RESIST PRIOR SHIP</label>
					<label className="text-secondary" >Final Resistance Prior to Shipping (right) //Final Resistance Prior to Shipping::</label>
					<input className="form-control" type="number" value={this.props.donRtKiResistPriorShip} onChange={this.props.onChangeDonRtKiResistPriorShip} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RT KI TXFER PUMP</label>
					<label className="text-secondary" >Transferred on pump (right)://Transferred on pump::</label>
					<select className="form-control" value={this.props.donRtKiTxferPump} onChange={this.props.onChangeDonRtKiTxferPump}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON RT LU BRONCHO</label>
					<label className="text-secondary" >Right Lung Bronchoscopy::</label>
					<select className="form-control" value={this.props.donRtLuBroncho} onChange={this.props.onChangeDonRtLuBroncho}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No Bronchoscopy </option>
						<option value="2">2: Bronchoscopy Results normal </option>
						<option value="3">3: Bronchoscopy Results, Abnormal-purulent secretions </option>
						<option value="4">4: Bronchoscopy Results, Abnormal-aspiration of foreign body </option>
						<option value="5">5: Bronchoscopy Results, Abnormal-blood </option>
						<option value="6">6: Bronchoscopy Results, Abnormal-anatomy/other lesion </option>
						<option value="7">7: Bronchoscopy Results, Unknown </option>
						<option value="998">998: Unknown if bronchoscopy performed </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SERUM AMYLASE</label>
					<label className="text-secondary" >Serum Amylase:</label>
					<input className="form-control" type="number" value={this.props.donSerumAmylase} onChange={this.props.onChangeDonSerumAmylase} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGOT</label>
					<label className="text-secondary" >SGOT/AST:</label>
					<input className="form-control" type="number" value={this.props.donSgot} onChange={this.props.onChangeDonSgot} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGPT</label>
					<label className="text-secondary" >SGPT/ALT:</label>
					<input className="form-control" type="number" value={this.props.donSgpt} onChange={this.props.onChangeDonSgpt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SKIN CANCER</label>
					<label className="text-secondary" >Skin:</label>
					<select className="form-control" value={this.props.donSkinCancer} onChange={this.props.onChangeDonSkinCancer}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SODIUM</label>
					<label className="text-secondary" >Serum Sodium //Last Serum Sodium Prior to Procurement::</label>
					<input className="form-control" type="number" value={this.props.donSodium} onChange={this.props.onChangeDonSodium} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SVR FINAL</label>
					<label className="text-secondary" >SVR (final) //SVR::</label>
					<input className="form-control" type="number" value={this.props.donSvrFinal} onChange={this.props.onChangeDonSvrFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SVR INIT</label>
					<label className="text-secondary" >SVR (initial) //SVR: (dynes/sec/cm)^5):</label>
					<input className="form-control" type="number" value={this.props.donSvrInit} onChange={this.props.onChangeDonSvrInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TARGET SOURCE1</label>
					<label className="text-secondary" >Target Source for Class I::</label>
					<select className="form-control" value={this.props.donTargetSource1} onChange={this.props.onChangeDonTargetSource1}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Peripheral Blood </option>
						<option value="2">2: Lymph Nodes </option>
						<option value="4">4: Spleen </option>
						<option value="8">8: Thymocytes </option>
						<option value="16">16: Cell lines/clonal cells </option>
						<option value="32">32: Solid Matrix </option>
						<option value="64">64: Multiple </option>
						<option value="128">128: Buccal Swab or Other </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donProteinUrine: select.makeSelectDonProteinUrine(),
	donPulmCath: select.makeSelectDonPulmCath(),
	donRace: select.makeSelectDonRace(),
	donRaceSrtr: select.makeSelectDonRaceSrtr(),
	donRecovDt: select.makeSelectDonRecovDt(),
	donRecovOutUs: select.makeSelectDonRecovOutUs(),
	donRefDt: select.makeSelectDonRefDt(),
	donRefFlg: select.makeSelectDonRefFlg(),
	donResuscitDuration: select.makeSelectDonResuscitDuration(),
	donRprVdrl: select.makeSelectDonRprVdrl(),
	donRtKiBiopsy: select.makeSelectDonRtKiBiopsy(),
	donRtKiGlomerSclerPct: select.makeSelectDonRtKiGlomerSclerPct(),
	donRtKiPump: select.makeSelectDonRtKiPump(),
	donRtKiResistPriorShip: select.makeSelectDonRtKiResistPriorShip(),
	donRtKiTxferPump: select.makeSelectDonRtKiTxferPump(),
	donRtLuBroncho: select.makeSelectDonRtLuBroncho(),
	donSerumAmylase: select.makeSelectDonSerumAmylase(),
	donSgot: select.makeSelectDonSgot(),
	donSgpt: select.makeSelectDonSgpt(),
	donSkinCancer: select.makeSelectDonSkinCancer(),
	donSodium: select.makeSelectDonSodium(),
	donSvrFinal: select.makeSelectDonSvrFinal(),
	donSvrInit: select.makeSelectDonSvrInit(),
	donTargetSource1: select.makeSelectDonTargetSource1(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonProteinUrine: evt => dispatch(action.changeDonProteinUrine(evt.target.value)),
		onChangeDonPulmCath: evt => dispatch(action.changeDonPulmCath(evt.target.value)),
		onChangeDonRace: evt => dispatch(action.changeDonRace(evt.target.value)),
		onChangeDonRaceSrtr: evt => dispatch(action.changeDonRaceSrtr(evt.target.value)),
		onChangeDonRecovDt: evt => dispatch(action.changeDonRecovDt(evt.target.value)),
		onChangeDonRecovOutUs: evt => dispatch(action.changeDonRecovOutUs(evt.target.value)),
		onChangeDonRefDt: evt => dispatch(action.changeDonRefDt(evt.target.value)),
		onChangeDonRefFlg: evt => dispatch(action.changeDonRefFlg(evt.target.value)),
		onChangeDonResuscitDuration: evt => dispatch(action.changeDonResuscitDuration(evt.target.value)),
		onChangeDonRprVdrl: evt => dispatch(action.changeDonRprVdrl(evt.target.value)),
		onChangeDonRtKiBiopsy: evt => dispatch(action.changeDonRtKiBiopsy(evt.target.value)),
		onChangeDonRtKiGlomerSclerPct: evt => dispatch(action.changeDonRtKiGlomerSclerPct(evt.target.value)),
		onChangeDonRtKiPump: evt => dispatch(action.changeDonRtKiPump(evt.target.value)),
		onChangeDonRtKiResistPriorShip: evt => dispatch(action.changeDonRtKiResistPriorShip(evt.target.value)),
		onChangeDonRtKiTxferPump: evt => dispatch(action.changeDonRtKiTxferPump(evt.target.value)),
		onChangeDonRtLuBroncho: evt => dispatch(action.changeDonRtLuBroncho(evt.target.value)),
		onChangeDonSerumAmylase: evt => dispatch(action.changeDonSerumAmylase(evt.target.value)),
		onChangeDonSgot: evt => dispatch(action.changeDonSgot(evt.target.value)),
		onChangeDonSgpt: evt => dispatch(action.changeDonSgpt(evt.target.value)),
		onChangeDonSkinCancer: evt => dispatch(action.changeDonSkinCancer(evt.target.value)),
		onChangeDonSodium: evt => dispatch(action.changeDonSodium(evt.target.value)),
		onChangeDonSvrFinal: evt => dispatch(action.changeDonSvrFinal(evt.target.value)),
		onChangeDonSvrInit: evt => dispatch(action.changeDonSvrInit(evt.target.value)),
		onChangeDonTargetSource1: evt => dispatch(action.changeDonTargetSource1(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm9 );
