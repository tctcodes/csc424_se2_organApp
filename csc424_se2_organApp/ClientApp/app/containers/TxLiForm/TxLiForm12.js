import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm12 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRETX TOT BILI</label>
					<label className="text-secondary" >PreTx : Total Bilirubin:</label>
					<input className="form-control" type="number" value={this.props.recPretxTotBili} onChange={this.props.onChangeRecPretxTotBili} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV ABDOM SURG</label>
					<label className="text-secondary" >Risk Factors: Previous Abdominal Surgery:</label>
					<input className="form-control" type="text" value={this.props.recPrevAbdomSurg} onChange={this.props.onChangeRecPrevAbdomSurg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV HL</label>
					<label className="text-secondary" >Prev Heart-Lung Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevHl} onChange={this.props.onChangeRecPrevHl} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV HR</label>
					<label className="text-secondary" >Prev Heart Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevHr} onChange={this.props.onChangeRecPrevHr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV IN</label>
					<label className="text-secondary" >Prev Intestine Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevIn} onChange={this.props.onChangeRecPrevIn} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV KI</label>
					<label className="text-secondary" >Prev Kidney Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevKi} onChange={this.props.onChangeRecPrevKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV KP</label>
					<label className="text-secondary" >Prev Kidney-Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevKp} onChange={this.props.onChangeRecPrevKp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV LI</label>
					<label className="text-secondary" >Prev Liver Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevLi} onChange={this.props.onChangeRecPrevLi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV LU</label>
					<label className="text-secondary" >Prev Lung Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevLu} onChange={this.props.onChangeRecPrevLu} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV NONFUNCTN TX</label>
					<label className="text-secondary" >Risk Factors: Previous Primary Non-function Post-Tx:</label>
					<input className="form-control" type="text" value={this.props.recPrevNonfunctnTx} onChange={this.props.onChangeRecPrevNonfunctnTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PREV PA</label>
					<label className="text-secondary" >Prev Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.recPrevPa} onChange={this.props.onChangeRecPrevPa} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRIMARY PAY</label>
					<label className="text-secondary" >Primary Source of Payment//Primary::</label>
					<select className="form-control" value={this.props.recPrimaryPay} onChange={this.props.onChangeRecPrimaryPay}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Private insurance</option>
						<option value="2">2: Public insurance - Medicaid</option>
						<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
						<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
						<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
						<option value="6">6: Public insurance - Department of VA</option>
						<option value="7">7: Public insurance - Other government</option>
						<option value="8">8: Self</option>
						<option value="9">9: Donation</option>
						<option value="10">10: Free Care</option>
						<option value="11">11: Pending</option>
						<option value="12">12: Foreign Government Specify</option>
						<option value="13">13: Public insurance - Medicare Unspecified</option>
						<option value="14">14: US/State Govt Agency</option>
						<option value="15">15: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PROCEDURE TY LI</label>
					<label className="text-secondary" >Surgical Procedure Type:</label>
					<select className="form-control" value={this.props.recProcedureTyLi} onChange={this.props.onChangeRecProcedureTyLi}>
						<option value="" hidden disabled selected/>
						<option value="1">1: ORTHOTOPIC </option>
						<option value="2">2: HETEROTOPIC </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PX RESEARCH</label>
					<label className="text-secondary" >Px Part. in Research Protocol for Immuno. Meds:</label>
					<input className="form-control" type="text" value={this.props.recPxResearch} onChange={this.props.onChangeRecPxResearch} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PX STAT</label>
					<label className="text-secondary" >Patient Status:</label>
					<select className="form-control" value={this.props.recPxStat} onChange={this.props.onChangeRecPxStat}>
						<option value="" hidden disabled selected/>
						<option value="A">A: LIVING </option>
						<option value="D">D: DEAD </option>
						<option value="L">L: LOST </option>
						<option value="R">R: RETRANSPLANTED </option>
						<option value="U">U: UNKNOWN </option>
						<option value="X">X: NATURAL DISASTER </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PX STAT DT</label>
					<label className="text-secondary" >Patient Status/Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.recPxStatDt} onChange={this.props.onChangeRecPxStatDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC SECONDARY PAY</label>
					<label className="text-secondary" >Secondary Source of Payment//Secondary::</label>
					<select className="form-control" value={this.props.recSecondaryPay} onChange={this.props.onChangeRecSecondaryPay}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Private insurance</option>
						<option value="2">2: Public insurance - Medicaid</option>
						<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
						<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
						<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
						<option value="6">6: Public insurance - Other government</option>
						<option value="7">7: Self</option>
						<option value="8">8: Donation</option>
						<option value="9">9: Free Care</option>
						<option value="10">10: None</option>
						<option value="11">11: Public insurance - Medicare Unspecified</option>
						<option value="12">12: US/State Govt Agency</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC SGPT</label>
					<label className="text-secondary" >PreTx : SGPT/ALT:</label>
					<input className="form-control" type="number" value={this.props.recSgpt} onChange={this.props.onChangeRecSgpt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TIPSS</label>
					<label className="text-secondary" >Risk Factors: Transjugular Intrahepatic Portacaval Stent Shunt (TIPSS):</label>
					<input className="form-control" type="text" value={this.props.recTipss} onChange={this.props.onChangeRecTipss} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TOLERANCE INDUCTION TECH</label>
					<label className="text-secondary" >Any tolerance induction technique used::</label>
					<input className="form-control" type="text" value={this.props.recToleranceInductionTech} onChange={this.props.onChangeRecToleranceInductionTech} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TUMOR</label>
					<label className="text-secondary" >Incidental Tumor found at time of Transplant:</label>
					<input className="form-control" type="text" value={this.props.recTumor} onChange={this.props.onChangeRecTumor} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TUMOR TY</label>
					<label className="text-secondary" >If yes, specify tumor type:</label>
					<select className="form-control" value={this.props.recTumorTy} onChange={this.props.onChangeRecTumorTy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Adenoma </option>
						<option value="2">2: Carcinoma </option>
						<option value="3">3: Carcinoid </option>
						<option value="4">4: Lymphoma </option>
						<option value="5">5: Harmartoma </option>
						<option value="999">999: Other Primary Lung Tumor, Specify </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TXFER CTR ID</label>
					<label className="text-secondary" >REC_TXFER_ Center ID:</label>
					<input className="form-control" type="number" readOnly value={this.props.recTxferCtrId} onChange={this.props.onChangeRecTxferCtrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TXFER DT</label>
					<label className="text-secondary" >Transfer Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.recTxferDt} onChange={this.props.onChangeRecTxferDt} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	recPretxTotBili: select.makeSelectRecPretxTotBili(),
	recPrevAbdomSurg: select.makeSelectRecPrevAbdomSurg(),
	recPrevHl: select.makeSelectRecPrevHl(),
	recPrevHr: select.makeSelectRecPrevHr(),
	recPrevIn: select.makeSelectRecPrevIn(),
	recPrevKi: select.makeSelectRecPrevKi(),
	recPrevKp: select.makeSelectRecPrevKp(),
	recPrevLi: select.makeSelectRecPrevLi(),
	recPrevLu: select.makeSelectRecPrevLu(),
	recPrevNonfunctnTx: select.makeSelectRecPrevNonfunctnTx(),
	recPrevPa: select.makeSelectRecPrevPa(),
	recPrimaryPay: select.makeSelectRecPrimaryPay(),
	recProcedureTyLi: select.makeSelectRecProcedureTyLi(),
	recPxResearch: select.makeSelectRecPxResearch(),
	recPxStat: select.makeSelectRecPxStat(),
	recPxStatDt: select.makeSelectRecPxStatDt(),
	recSecondaryPay: select.makeSelectRecSecondaryPay(),
	recSgpt: select.makeSelectRecSgpt(),
	recTipss: select.makeSelectRecTipss(),
	recToleranceInductionTech: select.makeSelectRecToleranceInductionTech(),
	recTumor: select.makeSelectRecTumor(),
	recTumorTy: select.makeSelectRecTumorTy(),
	recTxferCtrId: select.makeSelectRecTxferCtrId(),
	recTxferDt: select.makeSelectRecTxferDt(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeRecPretxTotBili: evt => dispatch(action.changeRecPretxTotBili(evt.target.value)),
		onChangeRecPrevAbdomSurg: evt => dispatch(action.changeRecPrevAbdomSurg(evt.target.value)),
		onChangeRecPrevHl: evt => dispatch(action.changeRecPrevHl(evt.target.value)),
		onChangeRecPrevHr: evt => dispatch(action.changeRecPrevHr(evt.target.value)),
		onChangeRecPrevIn: evt => dispatch(action.changeRecPrevIn(evt.target.value)),
		onChangeRecPrevKi: evt => dispatch(action.changeRecPrevKi(evt.target.value)),
		onChangeRecPrevKp: evt => dispatch(action.changeRecPrevKp(evt.target.value)),
		onChangeRecPrevLi: evt => dispatch(action.changeRecPrevLi(evt.target.value)),
		onChangeRecPrevLu: evt => dispatch(action.changeRecPrevLu(evt.target.value)),
		onChangeRecPrevNonfunctnTx: evt => dispatch(action.changeRecPrevNonfunctnTx(evt.target.value)),
		onChangeRecPrevPa: evt => dispatch(action.changeRecPrevPa(evt.target.value)),
		onChangeRecPrimaryPay: evt => dispatch(action.changeRecPrimaryPay(evt.target.value)),
		onChangeRecProcedureTyLi: evt => dispatch(action.changeRecProcedureTyLi(evt.target.value)),
		onChangeRecPxResearch: evt => dispatch(action.changeRecPxResearch(evt.target.value)),
		onChangeRecPxStat: evt => dispatch(action.changeRecPxStat(evt.target.value)),
		onChangeRecPxStatDt: evt => dispatch(action.changeRecPxStatDt(evt.target.value)),
		onChangeRecSecondaryPay: evt => dispatch(action.changeRecSecondaryPay(evt.target.value)),
		onChangeRecSgpt: evt => dispatch(action.changeRecSgpt(evt.target.value)),
		onChangeRecTipss: evt => dispatch(action.changeRecTipss(evt.target.value)),
		onChangeRecToleranceInductionTech: evt => dispatch(action.changeRecToleranceInductionTech(evt.target.value)),
		onChangeRecTumor: evt => dispatch(action.changeRecTumor(evt.target.value)),
		onChangeRecTumorTy: evt => dispatch(action.changeRecTumorTy(evt.target.value)),
		onChangeRecTxferCtrId: evt => dispatch(action.changeRecTxferCtrId(evt.target.value)),
		onChangeRecTxferDt: evt => dispatch(action.changeRecTxferDt(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm12 );
