import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm8 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MEET CDC HIGH RISK</label>
					<label className="text-secondary" >Does the Donor meet CDC guidelines for High Risk for an organ donor::</label>
					<select className="form-control" value={this.props.donMeetCdcHighRisk} onChange={this.props.onChangeDonMeetCdcHighRisk}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MEET DOUBLE KI CRIT</label>
					<label className="text-secondary" >Donor meets double KI allocation criteria:</label>
					<select className="form-control" value={this.props.donMeetDoubleKiCrit} onChange={this.props.onChangeDonMeetDoubleKiCrit}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON NON HR BEAT</label>
					<label className="text-secondary" >Non-Heart Beating Donor:</label>
					<select className="form-control" value={this.props.donNonHrBeat} onChange={this.props.onChangeDonNonHrBeat}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON NON HR BEAT CNTL</label>
					<label className="text-secondary" >Controlled:</label>
					<select className="form-control" value={this.props.donNonHrBeatCntl} onChange={this.props.onChangeDonNonHrBeatCntl}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON NON HR BEAT CORE COOL</label>
					<label className="text-secondary" >Core Cooling Used:</label>
					<select className="form-control" value={this.props.donNonHrBeatCoreCool} onChange={this.props.onChangeDonNonHrBeatCoreCool}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON OPO CTR ID</label>
					<label className="text-secondary" >DON_OPO_ Center ID:</label>
					<input className="form-control" type="text" readOnly value={this.props.donOpoCtrId} onChange={this.props.onChangeDonOpoCtrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PA DIAST FINAL</label>
					<label className="text-secondary" >PA Diastolic (final) //PA Diastolic::</label>
					<input className="form-control" type="number" value={this.props.donPaDiastFinal} onChange={this.props.onChangeDonPaDiastFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PA DIAST INIT</label>
					<label className="text-secondary" >PA Diastolic (initial) //PA Diastolic: (mm/Hg):</label>
					<input className="form-control" type="number" value={this.props.donPaDiastInit} onChange={this.props.onChangeDonPaDiastInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PA SYST FINAL</label>
					<label className="text-secondary" >PA Systolic (final) //PA Systolic::</label>
					<input className="form-control" type="number" value={this.props.donPaSystFinal} onChange={this.props.onChangeDonPaSystFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PA SYST INIT</label>
					<label className="text-secondary" >PA Systolic (initial) //PA Systolic: (mm/Hg):</label>
					<input className="form-control" type="number" value={this.props.donPaSystInit} onChange={this.props.onChangeDonPaSystInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PCO2</label>
					<label className="text-secondary" >pCO2::</label>
					<input className="form-control" type="number" value={this.props.donPco2} onChange={this.props.onChangeDonPco2} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PCWP FINAL</label>
					<label className="text-secondary" >PCWP (final) //PCWP::</label>
					<input className="form-control" type="number" value={this.props.donPcwpFinal} onChange={this.props.onChangeDonPcwpFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PCWP INIT</label>
					<label className="text-secondary" >PCWP (initial) //PCWP: (mm/Hg):</label>
					<input className="form-control" type="number" value={this.props.donPcwpInit} onChange={this.props.onChangeDonPcwpInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PEAK SERUM CREAT</label>
					<label className="text-secondary" >Peak Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donPeakSerumCreat} onChange={this.props.onChangeDonPeakSerumCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PH</label>
					<label className="text-secondary" >Blood PH::</label>
					<input className="form-control" type="number" value={this.props.donPh} onChange={this.props.onChangeDonPh} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PO2</label>
					<label className="text-secondary" >Lung pO2 on 100%:</label>
					<input className="form-control" type="number" value={this.props.donPo2} onChange={this.props.onChangeDonPo2} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PO2 DONE</label>
					<label className="text-secondary" >Lung - Was pO2 done::</label>
					<select className="form-control" value={this.props.donPo2Done} onChange={this.props.onChangeDonPo2Done}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PO2 FIO2</label>
					<label className="text-secondary" >Lung pO2 on Fio2 //If Yes, Lung pO2 on FiO2 of::</label>
					<input className="form-control" type="number" value={this.props.donPo2Fio2} onChange={this.props.onChangeDonPo2Fio2} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV DIURETICS</label>
					<label className="text-secondary" >Pre-Recov Meds given Donor: Diuretics:</label>
					<select className="form-control" value={this.props.donPrerecovDiuretics} onChange={this.props.onChangeDonPrerecovDiuretics}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV MEDS</label>
					<label className="text-secondary" >Prerecovery Medication:</label>
					<select className="form-control" value={this.props.donPrerecovMeds} onChange={this.props.onChangeDonPrerecovMeds}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV STEROIDS</label>
					<label className="text-secondary" >Pre-Recov Meds given Donor: Steroids:</label>
					<select className="form-control" value={this.props.donPrerecovSteroids} onChange={this.props.onChangeDonPrerecovSteroids}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV T3</label>
					<label className="text-secondary" >Pre-Recov Meds given Donor: T3:</label>
					<select className="form-control" value={this.props.donPrerecovT3} onChange={this.props.onChangeDonPrerecovT3}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PRERECOV T4</label>
					<label className="text-secondary" >Pre-Recov Meds given Donor: T4:</label>
					<select className="form-control" value={this.props.donPrerecovT4} onChange={this.props.onChangeDonPrerecovT4}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON PREV GASTRO DISEASE</label>
					<label className="text-secondary" >Previous Gastrointestinal Disease:</label>
					<select className="form-control" value={this.props.donPrevGastroDisease} onChange={this.props.onChangeDonPrevGastroDisease}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donMeetCdcHighRisk: select.makeSelectDonMeetCdcHighRisk(),
	donMeetDoubleKiCrit: select.makeSelectDonMeetDoubleKiCrit(),
	donNonHrBeat: select.makeSelectDonNonHrBeat(),
	donNonHrBeatCntl: select.makeSelectDonNonHrBeatCntl(),
	donNonHrBeatCoreCool: select.makeSelectDonNonHrBeatCoreCool(),
	donOpoCtrId: select.makeSelectDonOpoCtrId(),
	donPaDiastFinal: select.makeSelectDonPaDiastFinal(),
	donPaDiastInit: select.makeSelectDonPaDiastInit(),
	donPaSystFinal: select.makeSelectDonPaSystFinal(),
	donPaSystInit: select.makeSelectDonPaSystInit(),
	donPco2: select.makeSelectDonPco2(),
	donPcwpFinal: select.makeSelectDonPcwpFinal(),
	donPcwpInit: select.makeSelectDonPcwpInit(),
	donPeakSerumCreat: select.makeSelectDonPeakSerumCreat(),
	donPh: select.makeSelectDonPh(),
	donPo2: select.makeSelectDonPo2(),
	donPo2Done: select.makeSelectDonPo2Done(),
	donPo2Fio2: select.makeSelectDonPo2Fio2(),
	donPrerecovDiuretics: select.makeSelectDonPrerecovDiuretics(),
	donPrerecovMeds: select.makeSelectDonPrerecovMeds(),
	donPrerecovSteroids: select.makeSelectDonPrerecovSteroids(),
	donPrerecovT3: select.makeSelectDonPrerecovT3(),
	donPrerecovT4: select.makeSelectDonPrerecovT4(),
	donPrevGastroDisease: select.makeSelectDonPrevGastroDisease(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonMeetCdcHighRisk: evt => dispatch(action.changeDonMeetCdcHighRisk(evt.target.value)),
		onChangeDonMeetDoubleKiCrit: evt => dispatch(action.changeDonMeetDoubleKiCrit(evt.target.value)),
		onChangeDonNonHrBeat: evt => dispatch(action.changeDonNonHrBeat(evt.target.value)),
		onChangeDonNonHrBeatCntl: evt => dispatch(action.changeDonNonHrBeatCntl(evt.target.value)),
		onChangeDonNonHrBeatCoreCool: evt => dispatch(action.changeDonNonHrBeatCoreCool(evt.target.value)),
		onChangeDonOpoCtrId: evt => dispatch(action.changeDonOpoCtrId(evt.target.value)),
		onChangeDonPaDiastFinal: evt => dispatch(action.changeDonPaDiastFinal(evt.target.value)),
		onChangeDonPaDiastInit: evt => dispatch(action.changeDonPaDiastInit(evt.target.value)),
		onChangeDonPaSystFinal: evt => dispatch(action.changeDonPaSystFinal(evt.target.value)),
		onChangeDonPaSystInit: evt => dispatch(action.changeDonPaSystInit(evt.target.value)),
		onChangeDonPco2: evt => dispatch(action.changeDonPco2(evt.target.value)),
		onChangeDonPcwpFinal: evt => dispatch(action.changeDonPcwpFinal(evt.target.value)),
		onChangeDonPcwpInit: evt => dispatch(action.changeDonPcwpInit(evt.target.value)),
		onChangeDonPeakSerumCreat: evt => dispatch(action.changeDonPeakSerumCreat(evt.target.value)),
		onChangeDonPh: evt => dispatch(action.changeDonPh(evt.target.value)),
		onChangeDonPo2: evt => dispatch(action.changeDonPo2(evt.target.value)),
		onChangeDonPo2Done: evt => dispatch(action.changeDonPo2Done(evt.target.value)),
		onChangeDonPo2Fio2: evt => dispatch(action.changeDonPo2Fio2(evt.target.value)),
		onChangeDonPrerecovDiuretics: evt => dispatch(action.changeDonPrerecovDiuretics(evt.target.value)),
		onChangeDonPrerecovMeds: evt => dispatch(action.changeDonPrerecovMeds(evt.target.value)),
		onChangeDonPrerecovSteroids: evt => dispatch(action.changeDonPrerecovSteroids(evt.target.value)),
		onChangeDonPrerecovT3: evt => dispatch(action.changeDonPrerecovT3(evt.target.value)),
		onChangeDonPrerecovT4: evt => dispatch(action.changeDonPrerecovT4(evt.target.value)),
		onChangeDonPrevGastroDisease: evt => dispatch(action.changeDonPrevGastroDisease(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm8 );
