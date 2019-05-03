import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm9 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
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
					<label className="font-weight-bold" >DON RECOV TX SAME CTR</label>
					<label className="text-secondary" >Did organ recovery and transplant occur at the same center:</label>
					<select className="form-control" value={this.props.donRecovTxSameCtr} onChange={this.props.onChangeDonRecovTxSameCtr}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
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
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SACRIFICE LOBE</label>
					<label className="text-secondary" >Sacrifice of Second Lobe, Specify::</label>
					<select className="form-control" value={this.props.donSacrificeLobe} onChange={this.props.onChangeDonSacrificeLobe}>
						<option value="" hidden disabled selected/>
						<option value="1">1: RML </option>
						<option value="2">2: RUL </option>
						<option value="3">3: LUL </option>
						<option value="4">4: Lingular </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SELF</label>
					<label className="text-secondary" >Secondary source of payment: Self:</label>
					<select className="form-control" value={this.props.donSelf} onChange={this.props.onChangeDonSelf}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGOT POSTOP</label>
					<label className="text-secondary" >SGOT/AST::</label>
					<input className="form-control" type="number" value={this.props.donSgotPostop} onChange={this.props.onChangeDonSgotPostop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGOT PREOP</label>
					<label className="text-secondary" >SGOT/AST::</label>
					<input className="form-control" type="number" value={this.props.donSgotPreop} onChange={this.props.onChangeDonSgotPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGPT POSTOP</label>
					<label className="text-secondary" >SGPT/ALT::</label>
					<input className="form-control" type="number" value={this.props.donSgptPostop} onChange={this.props.onChangeDonSgptPostop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON SGPT PREOP</label>
					<label className="text-secondary" >SGPT/ALT::</label>
					<input className="form-control" type="number" value={this.props.donSgptPreop} onChange={this.props.onChangeDonSgptPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON STAT</label>
					<label className="text-secondary" >Donor Status:</label>
					<select className="form-control" value={this.props.donStat} onChange={this.props.onChangeDonStat}>
						<option value="" hidden disabled selected/>
						<option value="A">A: Living </option>
						<option value="D">D: Dead </option>
						<option value="L">L: Lost </option>
						<option value="N">N: Not Seen </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON STAT DT</label>
					<label className="text-secondary" >Donor Status Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.donStatDt} onChange={this.props.onChangeDonStatDt} />
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
					<label className="font-weight-bold" >DON TLC AFTER PREOP</label>
					<label className="text-secondary" >TLC % predicted after//TLC % predicted::</label>
					<input className="form-control" type="number" value={this.props.donTlcAfterPreop} onChange={this.props.onChangeDonTlcAfterPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TLC BEFORE PREOP</label>
					<label className="text-secondary" >TLC % predicted before//TLC % predicted::</label>
					<input className="form-control" type="number" value={this.props.donTlcBeforePreop} onChange={this.props.onChangeDonTlcBeforePreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TY</label>
					<label className="text-secondary" >Donor Type (C-deceased, L-living):</label>
					<input className="form-control" type="text" maxLength="3" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
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
					<label className="font-weight-bold" >DON URINE POSTOP PROTEIN</label>
					<label className="text-secondary" >Post-Operative Urinalysis//Urine Protein::</label>
					<input className="form-control" type="number" value={this.props.donUrinePostopProtein} onChange={this.props.onChangeDonUrinePostopProtein} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON URINE POSTOP RATIO</label>
					<label className="text-secondary" >Post-Operative Urinalysis//Protein-Creatinine Ratio::</label>
					<input className="form-control" type="number" value={this.props.donUrinePostopRatio} onChange={this.props.onChangeDonUrinePostopRatio} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON URINE PREOP PROTEIN</label>
					<label className="text-secondary" >Preoperative Urinalysis//Urine Protein::</label>
					<input className="form-control" type="number" value={this.props.donUrinePreopProtein} onChange={this.props.onChangeDonUrinePreopProtein} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donRaceSrtr: select.makeSelectDonRaceSrtr(),
	donRecovDt: select.makeSelectDonRecovDt(),
	donRecovTxSameCtr: select.makeSelectDonRecovTxSameCtr(),
	donRelationshipTy: select.makeSelectDonRelationshipTy(),
	donSacrificeLobe: select.makeSelectDonSacrificeLobe(),
	donSelf: select.makeSelectDonSelf(),
	donSgotPostop: select.makeSelectDonSgotPostop(),
	donSgotPreop: select.makeSelectDonSgotPreop(),
	donSgptPostop: select.makeSelectDonSgptPostop(),
	donSgptPreop: select.makeSelectDonSgptPreop(),
	donStat: select.makeSelectDonStat(),
	donStatDt: select.makeSelectDonStatDt(),
	donTargetSource1: select.makeSelectDonTargetSource1(),
	donTargetSource2: select.makeSelectDonTargetSource2(),
	donTlcAfterPreop: select.makeSelectDonTlcAfterPreop(),
	donTlcBeforePreop: select.makeSelectDonTlcBeforePreop(),
	donTy: select.makeSelectDonTy(),
	donTypMethclass1: select.makeSelectDonTypMethclass1(),
	donTypMethclass1Dt: select.makeSelectDonTypMethclass1Dt(),
	donTypMethclass2: select.makeSelectDonTypMethclass2(),
	donTypMethclass2Dt: select.makeSelectDonTypMethclass2Dt(),
	donUrinePostopProtein: select.makeSelectDonUrinePostopProtein(),
	donUrinePostopRatio: select.makeSelectDonUrinePostopRatio(),
	donUrinePreopProtein: select.makeSelectDonUrinePreopProtein(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonRaceSrtr: evt => dispatch(action.changeDonRaceSrtr(evt.target.value)),
		onChangeDonRecovDt: evt => dispatch(action.changeDonRecovDt(evt.target.value)),
		onChangeDonRecovTxSameCtr: evt => dispatch(action.changeDonRecovTxSameCtr(evt.target.value)),
		onChangeDonRelationshipTy: evt => dispatch(action.changeDonRelationshipTy(evt.target.value)),
		onChangeDonSacrificeLobe: evt => dispatch(action.changeDonSacrificeLobe(evt.target.value)),
		onChangeDonSelf: evt => dispatch(action.changeDonSelf(evt.target.value)),
		onChangeDonSgotPostop: evt => dispatch(action.changeDonSgotPostop(evt.target.value)),
		onChangeDonSgotPreop: evt => dispatch(action.changeDonSgotPreop(evt.target.value)),
		onChangeDonSgptPostop: evt => dispatch(action.changeDonSgptPostop(evt.target.value)),
		onChangeDonSgptPreop: evt => dispatch(action.changeDonSgptPreop(evt.target.value)),
		onChangeDonStat: evt => dispatch(action.changeDonStat(evt.target.value)),
		onChangeDonStatDt: evt => dispatch(action.changeDonStatDt(evt.target.value)),
		onChangeDonTargetSource1: evt => dispatch(action.changeDonTargetSource1(evt.target.value)),
		onChangeDonTargetSource2: evt => dispatch(action.changeDonTargetSource2(evt.target.value)),
		onChangeDonTlcAfterPreop: evt => dispatch(action.changeDonTlcAfterPreop(evt.target.value)),
		onChangeDonTlcBeforePreop: evt => dispatch(action.changeDonTlcBeforePreop(evt.target.value)),
		onChangeDonTy: evt => dispatch(action.changeDonTy(evt.target.value)),
		onChangeDonTypMethclass1: evt => dispatch(action.changeDonTypMethclass1(evt.target.value)),
		onChangeDonTypMethclass1Dt: evt => dispatch(action.changeDonTypMethclass1Dt(evt.target.value)),
		onChangeDonTypMethclass2: evt => dispatch(action.changeDonTypMethclass2(evt.target.value)),
		onChangeDonTypMethclass2Dt: evt => dispatch(action.changeDonTypMethclass2Dt(evt.target.value)),
		onChangeDonUrinePostopProtein: evt => dispatch(action.changeDonUrinePostopProtein(evt.target.value)),
		onChangeDonUrinePostopRatio: evt => dispatch(action.changeDonUrinePostopRatio(evt.target.value)),
		onChangeDonUrinePreopProtein: evt => dispatch(action.changeDonUrinePreopProtein(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm9 );
