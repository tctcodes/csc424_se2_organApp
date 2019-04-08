import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as select from './selectors';
import * as action from './actions';
import reducer from './reducer';
import saga from './saga';

export class CandFormMatch extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT A2 DON</label>
					<label className="text-secondary" >Accept A2 donor?:</label>
					<input className="form-control" type="text" value={this.props.canAcptA2Don} onChange={this.props.onChangeCanAcptA2Don} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT ABO INCOMP</label>
					<label className="text-secondary" >Accept an incompatible blood type?:</label>
					<input className="form-control" type="text" value={this.props.canAcptAboIncomp} onChange={this.props.onChangeCanAcptAboIncomp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT EXTRACORP LI</label>
					<label className="text-secondary" >Accept an Extra-corporeal Liver?:</label>
					<input className="form-control" type="text" value={this.props.canAcptExtracorpLi} onChange={this.props.onChangeCanAcptExtracorpLi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT HBC POS</label>
					<label className="text-secondary" >Accept an Hepatitis B Core Antibody Positive Donor?:</label>
					<input className="form-control" type="text" value={this.props.canAcptHbcPos} onChange={this.props.onChangeCanAcptHbcPos} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT HCV POS</label>
					<label className="text-secondary" >Accept an HCV Antibody Positive Donor?:</label>
					<input className="form-control" type="text" value={this.props.canAcptHcvPos} onChange={this.props.onChangeCanAcptHcvPos} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT LI SEG</label>
					<label className="text-secondary" >Accept LI segment:</label>
					<input className="form-control" type="text" value={this.props.canAcptLiSeg} onChange={this.props.onChangeCanAcptLiSeg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT ORG OTHER TEAM</label>
					<label className="text-secondary" >Accept Intestine if Intestine removed by another procurement team?:</label>
					<input className="form-control" type="text" value={this.props.canAcptOrgOtherTeam} onChange={this.props.onChangeCanAcptOrgOtherTeam} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT PROCUR KI</label>
					<label className="text-secondary" >Accept Intestine if Kidney procured?:</label>
					<input className="form-control" type="text" value={this.props.canAcptProcurKi} onChange={this.props.onChangeCanAcptProcurKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT PROCUR LI</label>
					<label className="text-secondary" >Accept Intestine if Liver procured?:</label>
					<input className="form-control" type="text" value={this.props.canAcptProcurLi} onChange={this.props.onChangeCanAcptProcurLi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ACPT PROCUR PA</label>
					<label className="text-secondary" >Accept Intestine if Pancreas procured?:</label>
					<input className="form-control" type="text" value={this.props.canAcptProcurPa} onChange={this.props.onChangeCanAcptProcurPa} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN CTP SCORE</label>
					<label className="text-secondary" >Candidate/s CTP score (used for MAOB Liver Variance:</label>
					<input className="form-control" type="number" value={this.props.canCtpScore} onChange={this.props.onChangeCanCtpScore} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MAX AGE</label>
					<label className="text-secondary" >Maximum acceptable Donor age:</label>
					<input className="form-control" type="number" value={this.props.canMaxAge} onChange={this.props.onChangeCanMaxAge} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MAX MILE</label>
					<label className="text-secondary" >Maximum miles the implant team will travel:</label>
					<input className="form-control" type="number" value={this.props.canMaxMile} onChange={this.props.onChangeCanMaxMile} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MAX WGT</label>
					<label className="text-secondary" >Maximum acceptable Donor Weight:</label>
					<input className="form-control" type="number" value={this.props.canMaxWgt} onChange={this.props.onChangeCanMaxWgt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MED COND</label>
					<label className="text-secondary" >Medical Condition:</label>
					<select className="form-control" value={this.props.canMedCond} onChange={this.props.onChangeCanMedCond}>
						<option value="" hidden disabled selected/>
						<option value="1">1: IN INTENSIVE CARE UNIT</option>
						<option value="2">2: HOSPITALIZED NOT IN ICU</option>
						<option value="3">3: NOT HOSPITALIZED</option>
						<option value=""></option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MIN AGE</label>
					<label className="text-secondary" >Minimum acceptable Donor Age:</label>
					<input className="form-control" type="number" value={this.props.canMinAge} onChange={this.props.onChangeCanMinAge} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MIN WGT</label>
					<label className="text-secondary" >Minimum acceptable Donor Weight:</label>
					<input className="form-control" type="number" value={this.props.canMinWgt} onChange={this.props.onChangeCanMinWgt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PRELIM XMATCH REQUEST</label>
					<label className="text-secondary" >Preliminary Crossmatch Required:</label>
					<input className="form-control" type="text" value={this.props.canPrelimXmatchRequest} onChange={this.props.onChangeCanPrelimXmatchRequest} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TIEBREAKER DT</label>
					<label className="text-secondary" >Tiebreaker Date - used as the ultimate tiebreaker:</label>
					<input className="form-control" type="datetime-local" value={this.props.canTiebreakerDt} onChange={this.props.onChangeCanTiebreakerDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >WL ORG</label>
					<label className="text-secondary" >Organ of this waitlisted record:</label>
					<select className="form-control" value={this.props.wlOrg} onChange={this.props.onChangeWlOrg}>
						<option value="" hidden disabled selected/>
						<option value="HL">HL: Heart/Lung</option>
						<option value="HR">HR: Heart</option>
						<option value="IN">IN: Intestine</option>
						<option value="KI">KI: Kidney</option>
						<option value="KP">KP: Kidney-Pancreas</option>
						<option value="LI">LI: Liver</option>
						<option value="LU">LU: Lung</option>
						<option value="PA">PA: Pancreas</option>
						<option value="PI">PI: Pancreas Islets</option>
					</select>
				</div>
			</div>
		)
	}
}
const mapStateToProps = createStructuredSelector({
	canAcptA2Don: select.makeSelectCanAcptA2Don(),
	canAcptAboIncomp: select.makeSelectCanAcptAboIncomp(),
	canAcptExtracorpLi: select.makeSelectCanAcptExtracorpLi(),
	canAcptHbcPos: select.makeSelectCanAcptHbcPos(),
	canAcptHcvPos: select.makeSelectCanAcptHcvPos(),
	canAcptLiSeg: select.makeSelectCanAcptLiSeg(),
	canAcptOrgOtherTeam: select.makeSelectCanAcptOrgOtherTeam(),
	canAcptProcurKi: select.makeSelectCanAcptProcurKi(),
	canAcptProcurLi: select.makeSelectCanAcptProcurLi(),
	canAcptProcurPa: select.makeSelectCanAcptProcurPa(),
	canCtpScore: select.makeSelectCanCtpScore(),
	canMaxAge: select.makeSelectCanMaxAge(),
	canMaxMile: select.makeSelectCanMaxMile(),
	canMaxWgt: select.makeSelectCanMaxWgt(),
	canMedCond: select.makeSelectCanMedCond(),
	canMinAge: select.makeSelectCanMinAge(),
	canMinWgt: select.makeSelectCanMinWgt(),
	canPrelimXmatchRequest: select.makeSelectCanPrelimXmatchRequest(),
	canTiebreakerDt: select.makeSelectCanTiebreakerDt(),
	wlOrg: select.makeSelectWlOrg(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanAcptA2Don: evt => dispatch(action.changeCanAcptA2Don(evt.target.value)),
		onChangeCanAcptAboIncomp: evt => dispatch(action.changeCanAcptAboIncomp(evt.target.value)),
		onChangeCanAcptExtracorpLi: evt => dispatch(action.changeCanAcptExtracorpLi(evt.target.value)),
		onChangeCanAcptHbcPos: evt => dispatch(action.changeCanAcptHbcPos(evt.target.value)),
		onChangeCanAcptHcvPos: evt => dispatch(action.changeCanAcptHcvPos(evt.target.value)),
		onChangeCanAcptLiSeg: evt => dispatch(action.changeCanAcptLiSeg(evt.target.value)),
		onChangeCanAcptOrgOtherTeam: evt => dispatch(action.changeCanAcptOrgOtherTeam(evt.target.value)),
		onChangeCanAcptProcurKi: evt => dispatch(action.changeCanAcptProcurKi(evt.target.value)),
		onChangeCanAcptProcurLi: evt => dispatch(action.changeCanAcptProcurLi(evt.target.value)),
		onChangeCanAcptProcurPa: evt => dispatch(action.changeCanAcptProcurPa(evt.target.value)),
		onChangeCanCtpScore: evt => dispatch(action.changeCanCtpScore(evt.target.value)),
		onChangeCanMaxAge: evt => dispatch(action.changeCanMaxAge(evt.target.value)),
		onChangeCanMaxMile: evt => dispatch(action.changeCanMaxMile(evt.target.value)),
		onChangeCanMaxWgt: evt => dispatch(action.changeCanMaxWgt(evt.target.value)),
		onChangeCanMedCond: evt => dispatch(action.changeCanMedCond(evt.target.value)),
		onChangeCanMinAge: evt => dispatch(action.changeCanMinAge(evt.target.value)),
		onChangeCanMinWgt: evt => dispatch(action.changeCanMinWgt(evt.target.value)),
		onChangeCanPrelimXmatchRequest: evt => dispatch(action.changeCanPrelimXmatchRequest(evt.target.value)),
		onChangeCanTiebreakerDt: evt => dispatch(action.changeCanTiebreakerDt(evt.target.value)),
		onChangeWlOrg: evt => dispatch(action.changeWlOrg(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'CandFormMatch', reducer });
const withSaga = injectSaga({ key: 'CandFormMatch', saga });
export default compose( withReducer, withSaga, withConnect)(CandFormMatch);
