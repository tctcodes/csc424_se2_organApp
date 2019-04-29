import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm3 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV KI</label>
					<label className="text-secondary" >Prev Kidney Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevKi} onChange={this.props.onChangeCanPrevKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV KP</label>
					<label className="text-secondary" >Prev Kidney-Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevKp} onChange={this.props.onChangeCanPrevKp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV LI</label>
					<label className="text-secondary" >Prev Liver Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevLi} onChange={this.props.onChangeCanPrevLi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV LU</label>
					<label className="text-secondary" >Prev Lung Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevLu} onChange={this.props.onChangeCanPrevLu} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV PA</label>
					<label className="text-secondary" >Prev Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevPa} onChange={this.props.onChangeCanPrevPa} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV TX</label>
					<label className="text-secondary" >Previous Transplants:</label>
					<input className="form-control" type="number" value={this.props.canPrevTx} onChange={this.props.onChangeCanPrevTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV TXFUS</label>
					<label className="text-secondary" >Any Previous Transfusions:</label>
					<input className="form-control" type="text" value={this.props.canPrevTxfus} onChange={this.props.onChangeCanPrevTxfus} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PULM EMBOL</label>
					<label className="text-secondary" >Pulmonary Embolism:</label>
					<input className="form-control" type="text" value={this.props.canPulmEmbol} onChange={this.props.onChangeCanPulmEmbol} />
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
					<label className="font-weight-bold" >CAN REM CD</label>
					<label className="text-secondary" >Reason why candidate was removed:</label>
					<select className="form-control" value={this.props.canRemCd} onChange={this.props.onChangeCanRemCd}>
						<option value="" hidden disabled selected/>
						<option value="4">4: Deceased Donor tx, removed by transplanting center</option>
						<option value="5">5: Medically Unsuitable</option>
						<option value="6">6: Refused transplant</option>
						<option value="7">7: Transferred to another center</option>
						<option value="8">8: Died</option>
						<option value="9">9: Other</option>
						<option value="10">10: Candidate listed in error</option>
						<option value="11">11: Candidate listed for unacceptable antigens only</option>
						<option value="12">12: Candidate condition improved, tx not needed</option>
						<option value="13">13: Candidate condition deteriorated , too sick for tx</option>
						<option value="14">14: Transplant at another center (multi-listed)</option>
						<option value="15">15: Living Donor tx, removed by transplanting center</option>
						<option value="16">16: Candidate Removed in Error</option>
						<option value="17">17: Changed to KP ( by system )</option>
						<option value="18">18: Deceased Donor Emergency Tx</option>
						<option value="19">19: Deceased Donor Multi-Organ Tx</option>
						<option value="20">20: Program inactive for 2+ years</option>
						<option value="21">21: Patient died during TX procedure</option>
						<option value="22">22: Transplanted in another country</option>
						<option value="23">23: Patient died during Living Donor TX procedure</option>
						<option value="24">24: Unable to contact candidate</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN SOURCE</label>
					<label className="text-secondary" >Source of Candidate Data A =Active WL,R= Removed,L=Living Don:</label>
					<input className="form-control" type="text" value={this.props.canSource} onChange={this.props.onChangeCanSource} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TIPSS</label>
					<label className="text-secondary" >History of TIPSS:</label>
					<input className="form-control" type="text" value={this.props.canTipss} onChange={this.props.onChangeCanTipss} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TOT ALBUMIN</label>
					<label className="text-secondary" >Total Serum Albumin:</label>
					<input className="form-control" type="number" value={this.props.canTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN WGT KG</label>
					<label className="text-secondary" >Candidate/s Weight in kilograms:</label>
					<input className="form-control" type="number" value={this.props.canWgtKg} onChange={this.props.onChangeCanWgtKg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DONOR ID</label>
					<label className="text-secondary" >Encrypted Unique Donor ID (all donors) - foreign key:</label>
					<input className="form-control" type="number" readOnly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DONOR ID VESSEL</label>
					<label className="text-secondary" >Encrypted Vessel Donor ID:</label>
					<input className="form-control" type="number" value={this.props.donorIdVessel} onChange={this.props.onChangeDonorIdVessel} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON A1</label>
					<label className="text-secondary" >Donor/s HLA - A (1) antigen:</label>
					<select className="form-control" value={this.props.donA1} onChange={this.props.onChangeDonA1}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="19">19: 19 </option>
						<option value="23">23: 23 </option>
						<option value="24">24: 24 </option>
						<option value="25">25: 25 </option>
						<option value="26">26: 26 </option>
						<option value="28">28: 28 </option>
						<option value="29">29: 29 </option>
						<option value="30">30: 30 </option>
						<option value="31">31: 31 </option>
						<option value="32">32: 32 </option>
						<option value="33">33: 33 </option>
						<option value="34">34: 34 </option>
						<option value="36">36: 36 </option>
						<option value="43">43: 43 </option>
						<option value="66">66: 66 </option>
						<option value="68">68: 68 </option>
						<option value="69">69: 69 </option>
						<option value="74">74: 74 </option>
						<option value="80">80: 80 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="201">201: 0201 </option>
						<option value="202">202: 0202 </option>
						<option value="203">203: 0203 </option>
						<option value="205">205: 0205 </option>
						<option value="206">206: 0206 </option>
						<option value="210">210: 210 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1102">1102: 1102 </option>
						<option value="2402">2402: 2402 </option>
						<option value="2403">2403: 2403 </option>
						<option value="2901">2901: 2901 </option>
						<option value="2902">2902: 2902 </option>
						<option value="3001">3001: 3001 </option>
						<option value="3002">3002: 3002 </option>
						<option value="3301">3301: 3301 </option>
						<option value="3303">3303: 3303 </option>
						<option value="3401">3401: 3401 </option>
						<option value="3402">3402: 3402 </option>
						<option value="6601">6601: 6601 </option>
						<option value="6602">6602: 6602 </option>
						<option value="6801">6801: 6801 </option>
						<option value="6802">6802: 6802 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON A2</label>
					<label className="text-secondary" >Donor/s HLA - A (2) antigen:</label>
					<select className="form-control" value={this.props.donA2} onChange={this.props.onChangeDonA2}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="19">19: 19 </option>
						<option value="23">23: 23 </option>
						<option value="24">24: 24 </option>
						<option value="25">25: 25 </option>
						<option value="26">26: 26 </option>
						<option value="28">28: 28 </option>
						<option value="29">29: 29 </option>
						<option value="30">30: 30 </option>
						<option value="31">31: 31 </option>
						<option value="32">32: 32 </option>
						<option value="33">33: 33 </option>
						<option value="34">34: 34 </option>
						<option value="36">36: 36 </option>
						<option value="43">43: 43 </option>
						<option value="66">66: 66 </option>
						<option value="68">68: 68 </option>
						<option value="69">69: 69 </option>
						<option value="74">74: 74 </option>
						<option value="80">80: 80 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="201">201: 0201 </option>
						<option value="202">202: 0202 </option>
						<option value="203">203: 0203 </option>
						<option value="205">205: 0205 </option>
						<option value="206">206: 0206 </option>
						<option value="210">210: 210 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1102">1102: 1102 </option>
						<option value="2402">2402: 2402 </option>
						<option value="2403">2403: 2403 </option>
						<option value="2901">2901: 2901 </option>
						<option value="2902">2902: 2902 </option>
						<option value="3001">3001: 3001 </option>
						<option value="3002">3002: 3002 </option>
						<option value="3301">3301: 3301 </option>
						<option value="3303">3303: 3303 </option>
						<option value="3401">3401: 3401 </option>
						<option value="3402">3402: 3402 </option>
						<option value="6601">6601: 6601 </option>
						<option value="6602">6602: 6602 </option>
						<option value="6801">6801: 6801 </option>
						<option value="6802">6802: 6802 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ABO</label>
					<label className="text-secondary" >Donor/s Blood Type:</label>
					<select className="form-control" value={this.props.donAbo} onChange={this.props.onChangeDonAbo}>
						<option value="" hidden disabled selected/>
						<option value="A">A: A</option>
						<option value="A1">A1: A1</option>
						<option value="A1B">A1B: A1B</option>
						<option value="A2">A2: A2</option>
						<option value="A2B">A2B: A2B</option>
						<option value="AB">AB: AB</option>
						<option value="B">B: B</option>
						<option value="O">O: O</option>
						<option value="Z">Z: Z (In Utero Only)</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON AGE</label>
					<label className="text-secondary" >Calculated Donor Age in Years at Organ Recovery or Referral Date:</label>
					<input className="form-control" type="number" value={this.props.donAge} onChange={this.props.onChangeDonAge} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON AGE IN MONTHS</label>
					<label className="text-secondary" >Donor/s Age in Months:</label>
					<input className="form-control" type="number" value={this.props.donAgeInMonths} onChange={this.props.onChangeDonAgeInMonths} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI CMV</label>
					<label className="text-secondary" >Anti-CMV:</label>
					<select className="form-control" value={this.props.donAntiCmv} onChange={this.props.onChangeDonAntiCmv}>
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
					<label className="font-weight-bold" >DON ANTI HCV</label>
					<label className="text-secondary" >Anti-HCV:</label>
					<select className="form-control" value={this.props.donAntiHcv} onChange={this.props.onChangeDonAntiHcv}>
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
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	canPrevKi: select.makeSelectCanPrevKi(),
	canPrevKp: select.makeSelectCanPrevKp(),
	canPrevLi: select.makeSelectCanPrevLi(),
	canPrevLu: select.makeSelectCanPrevLu(),
	canPrevPa: select.makeSelectCanPrevPa(),
	canPrevTx: select.makeSelectCanPrevTx(),
	canPrevTxfus: select.makeSelectCanPrevTxfus(),
	canPulmEmbol: select.makeSelectCanPulmEmbol(),
	canRace: select.makeSelectCanRace(),
	canRaceSrtr: select.makeSelectCanRaceSrtr(),
	canRemCd: select.makeSelectCanRemCd(),
	canSource: select.makeSelectCanSource(),
	canTipss: select.makeSelectCanTipss(),
	canTotAlbumin: select.makeSelectCanTotAlbumin(),
	canWgtKg: select.makeSelectCanWgtKg(),
	donorId: select.makeSelectDonorId(),
	donorIdVessel: select.makeSelectDonorIdVessel(),
	donA1: select.makeSelectDonA1(),
	donA2: select.makeSelectDonA2(),
	donAbo: select.makeSelectDonAbo(),
	donAge: select.makeSelectDonAge(),
	donAgeInMonths: select.makeSelectDonAgeInMonths(),
	donAntiCmv: select.makeSelectDonAntiCmv(),
	donAntiHcv: select.makeSelectDonAntiHcv(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanPrevKi: evt => dispatch(action.changeCanPrevKi(evt.target.value)),
		onChangeCanPrevKp: evt => dispatch(action.changeCanPrevKp(evt.target.value)),
		onChangeCanPrevLi: evt => dispatch(action.changeCanPrevLi(evt.target.value)),
		onChangeCanPrevLu: evt => dispatch(action.changeCanPrevLu(evt.target.value)),
		onChangeCanPrevPa: evt => dispatch(action.changeCanPrevPa(evt.target.value)),
		onChangeCanPrevTx: evt => dispatch(action.changeCanPrevTx(evt.target.value)),
		onChangeCanPrevTxfus: evt => dispatch(action.changeCanPrevTxfus(evt.target.value)),
		onChangeCanPulmEmbol: evt => dispatch(action.changeCanPulmEmbol(evt.target.value)),
		onChangeCanRace: evt => dispatch(action.changeCanRace(evt.target.value)),
		onChangeCanRaceSrtr: evt => dispatch(action.changeCanRaceSrtr(evt.target.value)),
		onChangeCanRemCd: evt => dispatch(action.changeCanRemCd(evt.target.value)),
		onChangeCanSource: evt => dispatch(action.changeCanSource(evt.target.value)),
		onChangeCanTipss: evt => dispatch(action.changeCanTipss(evt.target.value)),
		onChangeCanTotAlbumin: evt => dispatch(action.changeCanTotAlbumin(evt.target.value)),
		onChangeCanWgtKg: evt => dispatch(action.changeCanWgtKg(evt.target.value)),
		onChangeDonorId: evt => dispatch(action.changeDonorId(evt.target.value)),
		onChangeDonorIdVessel: evt => dispatch(action.changeDonorIdVessel(evt.target.value)),
		onChangeDonA1: evt => dispatch(action.changeDonA1(evt.target.value)),
		onChangeDonA2: evt => dispatch(action.changeDonA2(evt.target.value)),
		onChangeDonAbo: evt => dispatch(action.changeDonAbo(evt.target.value)),
		onChangeDonAge: evt => dispatch(action.changeDonAge(evt.target.value)),
		onChangeDonAgeInMonths: evt => dispatch(action.changeDonAgeInMonths(evt.target.value)),
		onChangeDonAntiCmv: evt => dispatch(action.changeDonAntiCmv(evt.target.value)),
		onChangeDonAntiHcv: evt => dispatch(action.changeDonAntiHcv(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm3 );
