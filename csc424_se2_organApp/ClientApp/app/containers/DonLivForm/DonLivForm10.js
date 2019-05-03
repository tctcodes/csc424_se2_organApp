import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm10 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON URINE PREOP RATIO</label>
					<label className="text-secondary" >Preoperative Urinalysis//Protein-Creatinine Ratio::</label>
					<input className="form-control" type="number" value={this.props.donUrinePreopRatio} onChange={this.props.onChangeDonUrinePreopRatio} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON VIRUSES TESTED</label>
					<label className="text-secondary" >Viral Detection://Have any of the following viruses ever been tested for: HIV, CMV, HBV, HCV, EBV:</label>
					<select className="form-control" value={this.props.donVirusesTested} onChange={this.props.onChangeDonVirusesTested}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WGT KG</label>
					<label className="text-secondary" >Weight::</label>
					<input className="form-control" type="number" value={this.props.donWgtKg} onChange={this.props.onChangeDonWgtKg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WORK INCOME</label>
					<label className="text-secondary" >Working for Income::</label>
					<select className="form-control" value={this.props.donWorkIncome} onChange={this.props.onChangeDonWorkIncome}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WORK NO STAT</label>
					<label className="text-secondary" >Working for Income//If No, Not Working Due To: (check one):</label>
					<select className="form-control" value={this.props.donWorkNoStat} onChange={this.props.onChangeDonWorkNoStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Disability </option>
						<option value="3">3: Insurance Conflict </option>
						<option value="4">4: Inability to Find Work </option>
						<option value="5">5: Donor Choice - Homemaker </option>
						<option value="6">6: Donor Choice - Student Full Time/Part Time </option>
						<option value="7">7: Donor Choice - Retired </option>
						<option value="8">8: Donor Choice - Other </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON WORK YES STAT</label>
					<label className="text-secondary" >Working for Income//If Yes::</label>
					<select className="form-control" value={this.props.donWorkYesStat} onChange={this.props.onChangeDonWorkYesStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Working Full Time </option>
						<option value="3">3: Working Part Time due to Disability </option>
						<option value="4">4: Working Part Time due to Insurance Conflict </option>
						<option value="5">5: Working Part Time due to Inability to Find Full Time Work </option>
						<option value="6">6: Working Part Time due to Donor Choice </option>
						<option value="7">7: Working Part Time Reason Unknown </option>
						<option value="998">998: Working, Part Time vs. Full Time Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON YEAR ENTRY US</label>
					<label className="text-secondary" >Year of Entry into U.S.::</label>
					<input className="form-control" type="datetime-local" value={this.props.donYearEntryUs} onChange={this.props.onChangeDonYearEntryUs} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS ID</label>
					<label className="text-secondary" >Unique person ID to replace SSN:</label>
					<input className="form-control" type="text" readOnly value={this.props.persId} onChange={this.props.onChangePersId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS SSA DEATH DT</label>
					<label className="text-secondary" >Death date determined from SSA database:</label>
					<input className="form-control" type="datetime-local" value={this.props.persSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donUrinePreopRatio: select.makeSelectDonUrinePreopRatio(),
	donVirusesTested: select.makeSelectDonVirusesTested(),
	donWgtKg: select.makeSelectDonWgtKg(),
	donWorkIncome: select.makeSelectDonWorkIncome(),
	donWorkNoStat: select.makeSelectDonWorkNoStat(),
	donWorkYesStat: select.makeSelectDonWorkYesStat(),
	donYearEntryUs: select.makeSelectDonYearEntryUs(),
	persId: select.makeSelectPersId(),
	persSsaDeathDt: select.makeSelectPersSsaDeathDt(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonUrinePreopRatio: evt => dispatch(action.changeDonUrinePreopRatio(evt.target.value)),
		onChangeDonVirusesTested: evt => dispatch(action.changeDonVirusesTested(evt.target.value)),
		onChangeDonWgtKg: evt => dispatch(action.changeDonWgtKg(evt.target.value)),
		onChangeDonWorkIncome: evt => dispatch(action.changeDonWorkIncome(evt.target.value)),
		onChangeDonWorkNoStat: evt => dispatch(action.changeDonWorkNoStat(evt.target.value)),
		onChangeDonWorkYesStat: evt => dispatch(action.changeDonWorkYesStat(evt.target.value)),
		onChangeDonYearEntryUs: evt => dispatch(action.changeDonYearEntryUs(evt.target.value)),
		onChangePersId: evt => dispatch(action.changePersId(evt.target.value)),
		onChangePersSsaDeathDt: evt => dispatch(action.changePersSsaDeathDt(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm10 );
