import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm3 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EBV CLINICAL</label>
					<label className="text-secondary" >EBV//Was there clinical disease::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donEbvClinical} onChange={this.props.onChangeDonEbvClinical} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EBV DNA</label>
					<label className="text-secondary" >EBV//EBV DNA::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donEbvDna} onChange={this.props.onChangeDonEbvDna} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EBV IGG</label>
					<label className="text-secondary" >EBV//IgG::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donEbvIgg} onChange={this.props.onChangeDonEbvIgg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EBV IGM</label>
					<label className="text-secondary" >EBV//IgM::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donEbvIgm} onChange={this.props.onChangeDonEbvIgm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EBV TESTED</label>
					<label className="text-secondary" >EBV:</label>
					<select className="form-control" value={this.props.donEbvTested} onChange={this.props.onChangeDonEbvTested}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EDUCATION</label>
					<label className="text-secondary" >Highest Education Level:</label>
					<select className="form-control" value={this.props.donEducation} onChange={this.props.onChangeDonEducation}>
						<option value="" hidden disabled />
						<option value="1">1: NONE</option>
						<option value="2">2: GRADE SCHOOL (0-8)</option>
						<option value="3">3: HIGH SCHOOL (9-12) or GED</option>
						<option value="4">4: ATTENDED COLLEGE/TECHNICAL SCHOOL</option>
						<option value="5">5: ASSOCIATE/BACHELOR DEGREE</option>
						<option value="6">6: POST-COLLEGE GRADUATE DEGREE</option>
						<option value="996">996: N/A ({"<"} 5 YRS OLD)</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ETHNICITY SRTR</label>
					<label className="text-secondary" >SRTR Donor Ethnicity:</label>
					<select className="form-control" value={this.props.donEthnicitySrtr} onChange={this.props.onChangeDonEthnicitySrtr}>
						<option value="" hidden disabled />
						<option value="LATINO">LATINO: Latino</option>
						<option value="NLATIN">NLATIN: Non-Latino or unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FEF AFTER PREOP</label>
					<label className="text-secondary" >FEF (25-75%) % predicted after//FEF (25-75%) % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFefAfterPreop} onChange={this.props.onChangeDonFefAfterPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FEF BEFORE PREOP</label>
					<label className="text-secondary" >FEF (25-75%) % predicted before//FEF (25-75%) % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFefBeforePreop} onChange={this.props.onChangeDonFefBeforePreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FEV1 AFTER PREOP</label>
					<label className="text-secondary" >FEV1 % predicted after//FEV1 % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFev1AfterPreop} onChange={this.props.onChangeDonFev1AfterPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FEV1 BEFORE PREOP</label>
					<label className="text-secondary" >FEV1 % predicted before//FEV1 % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFev1BeforePreop} onChange={this.props.onChangeDonFev1BeforePreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FFP UNITS</label>
					<label className="text-secondary" >FF Units//If Yes, Number of Units::</label>
					<input className="form-control" type="number" value={this.props.donFfpUnits} onChange={this.props.onChangeDonFfpUnits} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FREE</label>
					<label className="text-secondary" >Secondary source of payment: Free:</label>
					<select className="form-control" value={this.props.donFree} onChange={this.props.onChangeDonFree}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FUNCTN STAT</label>
					<label className="text-secondary" >Functional Status::</label>
					<select className="form-control" value={this.props.donFunctnStat} onChange={this.props.onChangeDonFunctnStat}>
						<option value="" hidden disabled />
						<option value="1">1: Performs activities of daily living with NO assistance.</option>
						<option value="2">2: Performs activities of daily living with SOME assistance.</option>
						<option value="3">3: Performs activities of daily living with TOTAL assistance.</option>
						<option value="996">996: Not Applicable (patient {"<"} 1 year old)</option>
						<option value="998">998: Unknown</option>
						<option value="2010">2010: 10% - Moribund, fatal processes progressing rapidly</option>
						<option value="2020">2020: 20% - Very sick, hospitalization necessary: active treatment necessary</option>
						<option value="2030">2030: 30% - Severely disabled: hospitalization is indicated, death not imminent</option>
						<option value="2040">2040: 40% - Disabled: requires special care and assistance</option>
						<option value="2050">2050: 50% - Requires considerable assistance and frequent medical care</option>
						<option value="2060">2060: 60% - Requires occasional assistance but is able to care for needs</option>
						<option value="2070">2070: 70% - Cares for self: unable to carry on normal activity or active work</option>
						<option value="2080">2080: 80% - Normal activity with effort: some symptoms of disease</option>
						<option value="2090">2090: 90% - Able to carry on normal activity: minor symptoms of disease</option>
						<option value="2100">2100: 100% - Normal, no complaints, no evidence of disease</option>
						<option value="4010">4010: 10% - No play; does not get out of bed</option>
						<option value="4020">4020: 20% - Often sleeping; play entirely limited to very passive activities</option>
						<option value="4030">4030: 30% - In bed; needs assistance even for quiet play</option>
						<option value="4040">4040: 40% - Mostly in bed; participates in quiet activities</option>
						<option value="4050">4050: 50% - Can dress but lies around much of day; no active play; can take part in quiet play/activities</option>
						<option value="4060">4060: 60% - Up and around, but minimal active play; keeps busy with quieter activities</option>
						<option value="4070">4070: 70% - Both greater restriction of and less time spent in play activity</option>
						<option value="4080">4080: 80% - Active, but tires more quickly</option>
						<option value="4090">4090: 90% - Minor restrictions in physically strenuous activity</option>
						<option value="4100">4100: 100% - Fully active, normal</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FVC AFTER PREOP</label>
					<label className="text-secondary" >FVC % predicted after//FVC % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFvcAfterPreop} onChange={this.props.onChangeDonFvcAfterPreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON FVC BEFORE PREOP</label>
					<label className="text-secondary" >FVC % predicted before//FVC % predicted::</label>
					<input className="form-control" type="number" value={this.props.donFvcBeforePreop} onChange={this.props.onChangeDonFvcBeforePreop} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON GENDER</label>
					<label className="text-secondary" >Donor/s Gender:</label>
					<select className="form-control" value={this.props.donGender} onChange={this.props.onChangeDonGender}>
						<option value="" hidden disabled />
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HAPLO TY MATCH</label>
					<label className="text-secondary" >Haplotype Match Between Live Donor & Recipient:</label>
					<select className="form-control" value={this.props.donHaploTyMatch} onChange={this.props.onChangeDonHaploTyMatch}>
						<option value="" hidden disabled />
						<option value="1">1: 0 </option>
						<option value="2">2: .5 </option>
						<option value="3">3: 1 </option>
						<option value="4">4: 1.5 </option>
						<option value="5">5: 2 </option>
						<option value="6">6: N/A Living Donor - Not Typed </option>
						<option value="7">7: N/A Unrelated Donor </option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV ANTIBODY</label>
					<label className="text-secondary" >HBV//Core Antibody::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvAntibody} onChange={this.props.onChangeDonHbvAntibody} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV CLINICAL</label>
					<label className="text-secondary" >HBV//Was there clinical disease::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvClinical} onChange={this.props.onChangeDonHbvClinical} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV DNA</label>
					<label className="text-secondary" >HBV//HBV DNA::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvDna} onChange={this.props.onChangeDonHbvDna} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV HDV</label>
					<label className="text-secondary" >HBV//HDV (Delta Virus)::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvHdv} onChange={this.props.onChangeDonHbvHdv} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV LI HISTOLOGY</label>
					<label className="text-secondary" >HBV//Liver Histology::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvLiHistology} onChange={this.props.onChangeDonHbvLiHistology} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV SURF ANTIGEN</label>
					<label className="text-secondary" >HBV//Surface Antigen::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHbvSurfAntigen} onChange={this.props.onChangeDonHbvSurfAntigen} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donEbvClinical: select.makeSelectDonEbvClinical(),
	donEbvDna: select.makeSelectDonEbvDna(),
	donEbvIgg: select.makeSelectDonEbvIgg(),
	donEbvIgm: select.makeSelectDonEbvIgm(),
	donEbvTested: select.makeSelectDonEbvTested(),
	donEducation: select.makeSelectDonEducation(),
	donEthnicitySrtr: select.makeSelectDonEthnicitySrtr(),
	donFefAfterPreop: select.makeSelectDonFefAfterPreop(),
	donFefBeforePreop: select.makeSelectDonFefBeforePreop(),
	donFev1AfterPreop: select.makeSelectDonFev1AfterPreop(),
	donFev1BeforePreop: select.makeSelectDonFev1BeforePreop(),
	donFfpUnits: select.makeSelectDonFfpUnits(),
	donFree: select.makeSelectDonFree(),
	donFunctnStat: select.makeSelectDonFunctnStat(),
	donFvcAfterPreop: select.makeSelectDonFvcAfterPreop(),
	donFvcBeforePreop: select.makeSelectDonFvcBeforePreop(),
	donGender: select.makeSelectDonGender(),
	donHaploTyMatch: select.makeSelectDonHaploTyMatch(),
	donHbvAntibody: select.makeSelectDonHbvAntibody(),
	donHbvClinical: select.makeSelectDonHbvClinical(),
	donHbvDna: select.makeSelectDonHbvDna(),
	donHbvHdv: select.makeSelectDonHbvHdv(),
	donHbvLiHistology: select.makeSelectDonHbvLiHistology(),
	donHbvSurfAntigen: select.makeSelectDonHbvSurfAntigen(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonEbvClinical: evt => dispatch(action.changeDonEbvClinical(evt.target.value)),
		onChangeDonEbvDna: evt => dispatch(action.changeDonEbvDna(evt.target.value)),
		onChangeDonEbvIgg: evt => dispatch(action.changeDonEbvIgg(evt.target.value)),
		onChangeDonEbvIgm: evt => dispatch(action.changeDonEbvIgm(evt.target.value)),
		onChangeDonEbvTested: evt => dispatch(action.changeDonEbvTested(evt.target.value)),
		onChangeDonEducation: evt => dispatch(action.changeDonEducation(evt.target.value)),
		onChangeDonEthnicitySrtr: evt => dispatch(action.changeDonEthnicitySrtr(evt.target.value)),
		onChangeDonFefAfterPreop: evt => dispatch(action.changeDonFefAfterPreop(evt.target.value)),
		onChangeDonFefBeforePreop: evt => dispatch(action.changeDonFefBeforePreop(evt.target.value)),
		onChangeDonFev1AfterPreop: evt => dispatch(action.changeDonFev1AfterPreop(evt.target.value)),
		onChangeDonFev1BeforePreop: evt => dispatch(action.changeDonFev1BeforePreop(evt.target.value)),
		onChangeDonFfpUnits: evt => dispatch(action.changeDonFfpUnits(evt.target.value)),
		onChangeDonFree: evt => dispatch(action.changeDonFree(evt.target.value)),
		onChangeDonFunctnStat: evt => dispatch(action.changeDonFunctnStat(evt.target.value)),
		onChangeDonFvcAfterPreop: evt => dispatch(action.changeDonFvcAfterPreop(evt.target.value)),
		onChangeDonFvcBeforePreop: evt => dispatch(action.changeDonFvcBeforePreop(evt.target.value)),
		onChangeDonGender: evt => dispatch(action.changeDonGender(evt.target.value)),
		onChangeDonHaploTyMatch: evt => dispatch(action.changeDonHaploTyMatch(evt.target.value)),
		onChangeDonHbvAntibody: evt => dispatch(action.changeDonHbvAntibody(evt.target.value)),
		onChangeDonHbvClinical: evt => dispatch(action.changeDonHbvClinical(evt.target.value)),
		onChangeDonHbvDna: evt => dispatch(action.changeDonHbvDna(evt.target.value)),
		onChangeDonHbvHdv: evt => dispatch(action.changeDonHbvHdv(evt.target.value)),
		onChangeDonHbvLiHistology: evt => dispatch(action.changeDonHbvLiHistology(evt.target.value)),
		onChangeDonHbvSurfAntigen: evt => dispatch(action.changeDonHbvSurfAntigen(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm3 );
