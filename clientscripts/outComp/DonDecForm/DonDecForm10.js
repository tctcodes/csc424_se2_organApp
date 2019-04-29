import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm10 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TARGET SOURCE2</label>
					<label className="text-secondary" >Target Source for Class II::</label>
					<select className="form-control" value={this.props.donTargetSource2} onChange={this.props.onChangeDonTargetSource2}>
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
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TATTOOS</label>
					<label className="text-secondary" >Lifestyle Factors: Tattoos:</label>
					<input className="form-control" type="text" value={this.props.donTattoos} onChange={this.props.onChangeDonTattoos} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TM FOR XMATCH</label>
					<label className="text-secondary" >Is there time for crossmatch?:</label>
					<input className="form-control" type="text" value={this.props.donTmForXmatch} onChange={this.props.onChangeDonTmForXmatch} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TOT BILI</label>
					<label className="text-secondary" >Total Bilirubin:</label>
					<input className="form-control" type="number" value={this.props.donTotBili} onChange={this.props.onChangeDonTotBili} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TX</label>
					<label className="text-secondary" >Max disposition for Donor, 5(recovered only) or 6(transplanted):</label>
					<input className="form-control" type="number" value={this.props.donTx} onChange={this.props.onChangeDonTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TXFUS TERMINAL HOSP NUM</label>
					<label className="text-secondary" >Number of transfusions during this (terminal) hospitalization::</label>
					<select className="form-control" value={this.props.donTxfusTerminalHospNum} onChange={this.props.onChangeDonTxfusTerminalHospNum}>
						<option value="" hidden disabled selected/>
						<option value="0">0: NONE </option>
						<option value="1">1: 1 - 5 </option>
						<option value="2">2: 6 - 10 </option>
						<option value="3">3: GREATER THAN 10 </option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TY</label>
					<label className="text-secondary" >Donor Type (C-deceased, L-living):</label>
					<input className="form-control" type="text" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TYP METHCLASS1</label>
					<label className="text-secondary" >Donor/s HLA - Typing Method Class I:</label>
					<select className="form-control" value={this.props.donTypMethclass1} onChange={this.props.onChangeDonTypMethclass1}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Serology </option>
						<option value="2">2: DNA </option>
						<option value="4">4: Other,Specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TYP METHCLASS1 DT</label>
					<label className="text-secondary" >Date Typing Complete Class I::</label>
					<input className="form-control" type="datetime-local" value={this.props.donTypMethclass1Dt} onChange={this.props.onChangeDonTypMethclass1Dt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TYP METHCLASS2</label>
					<label className="text-secondary" >Donor/s HLA - Typing Method Class II:</label>
					<select className="form-control" value={this.props.donTypMethclass2} onChange={this.props.onChangeDonTypMethclass2}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Serology </option>
						<option value="2">2: DNA </option>
						<option value="4">4: Other,Specify </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TYP METHCLASS2 DT</label>
					<label className="text-secondary" >Date Typing Complete Class II::</label>
					<input className="form-control" type="datetime-local" value={this.props.donTypMethclass2Dt} onChange={this.props.onChangeDonTypMethclass2Dt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON USE DOUBLE KI</label>
					<label className="text-secondary" >Use Double KI allocation, not Expanded Donor:</label>
					<input className="form-control" type="text" value={this.props.donUseDoubleKi} onChange={this.props.onChangeDonUseDoubleKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON VASODIL</label>
					<label className="text-secondary" >Vasodilators:</label>
					<input className="form-control" type="text" value={this.props.donVasodil} onChange={this.props.onChangeDonVasodil} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON VESSELS GT50 STENOSIS</label>
					<label className="text-secondary" >If Abnormal, # of Vessels with > 50% Stenosis:</label>
					<input className="form-control" type="number" value={this.props.donVesselsGt50Stenosis} onChange={this.props.onChangeDonVesselsGt50Stenosis} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WALL ABNORM GLOB</label>
					<label className="text-secondary" >Wall Abnormalities //Global::</label>
					<input className="form-control" type="text" value={this.props.donWallAbnormGlob} onChange={this.props.onChangeDonWallAbnormGlob} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WALL ABNORM SEG</label>
					<label className="text-secondary" >Wall Abnormalities //Segmental::</label>
					<input className="form-control" type="text" value={this.props.donWallAbnormSeg} onChange={this.props.onChangeDonWallAbnormSeg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WARM ISCH TM MINS</label>
					<label className="text-secondary" >Estimated Warm Ischemic Time in minutes:</label>
					<input className="form-control" type="number" value={this.props.donWarmIschTmMins} onChange={this.props.onChangeDonWarmIschTmMins} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WEST NILE NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for West Nile test:</label>
					<input className="form-control" type="text" value={this.props.donWestNileNat} onChange={this.props.onChangeDonWestNileNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WGT KG</label>
					<label className="text-secondary" >Donor/s Weight in kilograms:</label>
					<input className="form-control" type="number" value={this.props.donWgtKg} onChange={this.props.onChangeDonWgtKg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS ID</label>
					<label className="text-secondary" >Unique Person ID for patient. Based on matches in similarity of SSN, DOB, Names and Nicknames, Gender, etc.:</label>
					<input className="form-control" type="number" readOnly value={this.props.persId} onChange={this.props.onChangePersId} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donTargetSource2: select.makeSelectDonTargetSource2(),
	donTattoos: select.makeSelectDonTattoos(),
	donTmForXmatch: select.makeSelectDonTmForXmatch(),
	donTotBili: select.makeSelectDonTotBili(),
	donTx: select.makeSelectDonTx(),
	donTxfusTerminalHospNum: select.makeSelectDonTxfusTerminalHospNum(),
	donTy: select.makeSelectDonTy(),
	donTypMethclass1: select.makeSelectDonTypMethclass1(),
	donTypMethclass1Dt: select.makeSelectDonTypMethclass1Dt(),
	donTypMethclass2: select.makeSelectDonTypMethclass2(),
	donTypMethclass2Dt: select.makeSelectDonTypMethclass2Dt(),
	donUseDoubleKi: select.makeSelectDonUseDoubleKi(),
	donVasodil: select.makeSelectDonVasodil(),
	donVesselsGt50Stenosis: select.makeSelectDonVesselsGt50Stenosis(),
	donWallAbnormGlob: select.makeSelectDonWallAbnormGlob(),
	donWallAbnormSeg: select.makeSelectDonWallAbnormSeg(),
	donWarmIschTmMins: select.makeSelectDonWarmIschTmMins(),
	donWestNileNat: select.makeSelectDonWestNileNat(),
	donWgtKg: select.makeSelectDonWgtKg(),
	persId: select.makeSelectPersId(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonTargetSource2: evt => dispatch(action.changeDonTargetSource2(evt.target.value)),
		onChangeDonTattoos: evt => dispatch(action.changeDonTattoos(evt.target.value)),
		onChangeDonTmForXmatch: evt => dispatch(action.changeDonTmForXmatch(evt.target.value)),
		onChangeDonTotBili: evt => dispatch(action.changeDonTotBili(evt.target.value)),
		onChangeDonTx: evt => dispatch(action.changeDonTx(evt.target.value)),
		onChangeDonTxfusTerminalHospNum: evt => dispatch(action.changeDonTxfusTerminalHospNum(evt.target.value)),
		onChangeDonTy: evt => dispatch(action.changeDonTy(evt.target.value)),
		onChangeDonTypMethclass1: evt => dispatch(action.changeDonTypMethclass1(evt.target.value)),
		onChangeDonTypMethclass1Dt: evt => dispatch(action.changeDonTypMethclass1Dt(evt.target.value)),
		onChangeDonTypMethclass2: evt => dispatch(action.changeDonTypMethclass2(evt.target.value)),
		onChangeDonTypMethclass2Dt: evt => dispatch(action.changeDonTypMethclass2Dt(evt.target.value)),
		onChangeDonUseDoubleKi: evt => dispatch(action.changeDonUseDoubleKi(evt.target.value)),
		onChangeDonVasodil: evt => dispatch(action.changeDonVasodil(evt.target.value)),
		onChangeDonVesselsGt50Stenosis: evt => dispatch(action.changeDonVesselsGt50Stenosis(evt.target.value)),
		onChangeDonWallAbnormGlob: evt => dispatch(action.changeDonWallAbnormGlob(evt.target.value)),
		onChangeDonWallAbnormSeg: evt => dispatch(action.changeDonWallAbnormSeg(evt.target.value)),
		onChangeDonWarmIschTmMins: evt => dispatch(action.changeDonWarmIschTmMins(evt.target.value)),
		onChangeDonWestNileNat: evt => dispatch(action.changeDonWestNileNat(evt.target.value)),
		onChangeDonWgtKg: evt => dispatch(action.changeDonWgtKg(evt.target.value)),
		onChangePersId: evt => dispatch(action.changePersId(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm10 );
