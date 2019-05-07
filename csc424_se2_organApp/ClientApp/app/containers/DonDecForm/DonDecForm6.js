import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm6 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST COCAINE</label>
					<label className="text-secondary" >Cocaine Use:</label>
					<select className="form-control" value={this.props.donHistCocaine} onChange={this.props.onChangeDonHistCocaine}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST DIAB</label>
					<label className="text-secondary" >History of Diabetes:</label>
					<select className="form-control" value={this.props.donHistDiab} onChange={this.props.onChangeDonHistDiab}>
						<option value="" hidden disabled />
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, DURATION UNKNOWN </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST HYPERTEN</label>
					<label className="text-secondary" >History of Hypertension:</label>
					<select className="form-control" value={this.props.donHistHyperten} onChange={this.props.onChangeDonHistHyperten}>
						<option value="" hidden disabled />
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, UNKNOWN DURATION </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST INSULIN DEPND</label>
					<label className="text-secondary" >Insulin Dependent:</label>
					<select className="form-control" value={this.props.donHistInsulinDepnd} onChange={this.props.onChangeDonHistInsulinDepnd}>
						<option value="" hidden disabled />
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, DURATION UNKNOWN </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST IV DRUG</label>
					<label className="text-secondary" >IV Drug Use - Pre-6/30/2004:</label>
					<select className="form-control" value={this.props.donHistIvDrug} onChange={this.props.onChangeDonHistIvDrug}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST OTHER DRUG</label>
					<label className="text-secondary" >Other Drug Abuse:</label>
					<select className="form-control" value={this.props.donHistOtherDrug} onChange={this.props.onChangeDonHistOtherDrug}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST PREV MI</label>
					<label className="text-secondary" >History of Previous MI:</label>
					<select className="form-control" value={this.props.donHistPrevMi} onChange={this.props.onChangeDonHistPrevMi}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for hiv test:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivNat} onChange={this.props.onChangeDonHivNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HLA TYP</label>
					<label className="text-secondary" >Was Donor HLA Typed:</label>
					<select className="form-control" value={this.props.donHlaTyp} onChange={this.props.onChangeDonHlaTyp}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HLA TYP NOT DONE</label>
					<label className="text-secondary" >HLA Typing not done for donor:</label>
					<select className="form-control" value={this.props.donHlaTypNotDone} onChange={this.props.onChangeDonHlaTypNotDone}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HOME STATE</label>
					<label className="text-secondary" >Donor/s Home State:</label>
					<select className="form-control" value={this.props.donHomeState} onChange={this.props.onChangeDonHomeState}>
						<option value="" hidden disabled />
						<option value="AK">AK: ALASKA</option>
						<option value="AL">AL: ALABAMA</option>
						<option value="AR">AR: ARKANSAS</option>
						<option value="AS">AS: PAGO PAGO</option>
						<option value="AZ">AZ: ARIZONA</option>
						<option value="CA">CA: CALIFORNIA</option>
						<option value="CO">CO: COLORADO</option>
						<option value="CT">CT: CONNECTICUT</option>
						<option value="DC">DC: DISTRICT OF COLUMBIA</option>
						<option value="DE">DE: DELAWARE</option>
						<option value="FL">FL: FLORIDA</option>
						<option value="GA">GA: GEORGIA</option>
						<option value="GU">GU: GUAM</option>
						<option value="HI">HI: HAWAII</option>
						<option value="IA">IA: IOWA</option>
						<option value="ID">ID: IDAHO</option>
						<option value="IL">IL: ILLINOIS</option>
						<option value="IN">IN: INDIANA</option>
						<option value="KS">KS: KANSAS</option>
						<option value="KY">KY: KENTUCKY</option>
						<option value="LA">LA: LOUISIANA</option>
						<option value="MA">MA: MASSACHUSETTS</option>
						<option value="MD">MD: MARYLAND</option>
						<option value="ME">ME: MAINE</option>
						<option value="MI">MI: MICHIGAN</option>
						<option value="MN">MN: MINNESOTA</option>
						<option value="MO">MO: MISSOURI</option>
						<option value="MP">MP: SAIPAN MARIANA ISLANDS</option>
						<option value="MS">MS: MISSISSIPPI</option>
						<option value="MT">MT: MONTANA</option>
						<option value="NA">NA: FOREIGN COUNTRY</option>
						<option value="NC">NC: NORTH CAROLINA</option>
						<option value="ND">ND: NORTH DAKOTA</option>
						<option value="NE">NE: NEBRASKA</option>
						<option value="NH">NH: NEW HAMPSHIRE</option>
						<option value="NJ">NJ: NEW JERSEY</option>
						<option value="NM">NM: NEW MEXICO</option>
						<option value="NV">NV: NEVADA</option>
						<option value="NY">NY: NEW YORK</option>
						<option value="OH">OH: OHIO</option>
						<option value="OK">OK: OKLAHOMA</option>
						<option value="OR">OR: OREGON</option>
						<option value="PA">PA: PENNSYLVANIA</option>
						<option value="PR">PR: PUERTO RICO</option>
						<option value="RI">RI: RHODE ISLAND</option>
						<option value="SC">SC: SOUTH CAROLINA</option>
						<option value="SD">SD: SOUTH DAKOTA</option>
						<option value="TN">TN: TENNESSEE</option>
						<option value="TX">TX: TEXAS</option>
						<option value="UT">UT: UTAH</option>
						<option value="VA">VA: VIRGINIA</option>
						<option value="VI">VI: VIRGIN ISLANDS</option>
						<option value="VT">VT: VERMONT</option>
						<option value="WA">WA: WASHINGTON</option>
						<option value="WI">WI: WISCONSIN</option>
						<option value="WV">WV: WEST VIRGINIA</option>
						<option value="WY">WY: WYOMING</option>
						<option value="ZZ">ZZ: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HTLV NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for htlv test:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHtlvNat} onChange={this.props.onChangeDonHtlvNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HTN</label>
					<label className="text-secondary" >Donor history of hypertension (1= yes, 0= no):</label>
					<select className="form-control" value={this.props.donHtn} onChange={this.props.onChangeDonHtn}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN DIET</label>
					<label className="text-secondary" >Diet:</label>
					<select className="form-control" value={this.props.donHypertenDiet} onChange={this.props.onChangeDonHypertenDiet}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN DIURETICS</label>
					<label className="text-secondary" >Diuretics:</label>
					<select className="form-control" value={this.props.donHypertenDiuretics} onChange={this.props.onChangeDonHypertenDiuretics}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN OTHER MEDS</label>
					<label className="text-secondary" >Other Medication:</label>
					<select className="form-control" value={this.props.donHypertenOtherMeds} onChange={this.props.onChangeDonHypertenOtherMeds}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT BLOOD</label>
					<label className="text-secondary" >Infection Source: Blood:</label>
					<select className="form-control" value={this.props.donInfectBlood} onChange={this.props.onChangeDonInfectBlood}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT BLOOD CONFIRM</label>
					<label className="text-secondary" >Infection Source: Blood/Confirmed by Culture:</label>
					<select className="form-control" value={this.props.donInfectBloodConfirm} onChange={this.props.onChangeDonInfectBloodConfirm}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT LU</label>
					<label className="text-secondary" >Infection Source: Lung:</label>
					<select className="form-control" value={this.props.donInfectLu} onChange={this.props.onChangeDonInfectLu}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT LU CONFIRM</label>
					<label className="text-secondary" >Infection Source: Lung/Confirmed by Culture:</label>
					<select className="form-control" value={this.props.donInfectLuConfirm} onChange={this.props.onChangeDonInfectLuConfirm}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT OTHER</label>
					<label className="text-secondary" >Infection Source: Other:</label>
					<select className="form-control" value={this.props.donInfectOther} onChange={this.props.onChangeDonInfectOther}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT OTHER CONFIRM</label>
					<label className="text-secondary" >Infection Source: Other/Confimed by Culture:</label>
					<select className="form-control" value={this.props.donInfectOtherConfirm} onChange={this.props.onChangeDonInfectOtherConfirm}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT URINE</label>
					<label className="text-secondary" >Infection Source: Urine:</label>
					<select className="form-control" value={this.props.donInfectUrine} onChange={this.props.onChangeDonInfectUrine}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INFECT URINE CONFIRM</label>
					<label className="text-secondary" >Infection Source: Urine/Confirmed by Culture:</label>
					<select className="form-control" value={this.props.donInfectUrineConfirm} onChange={this.props.onChangeDonInfectUrineConfirm}>
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
	donHistCocaine: select.makeSelectDonHistCocaine(),
	donHistDiab: select.makeSelectDonHistDiab(),
	donHistHyperten: select.makeSelectDonHistHyperten(),
	donHistInsulinDepnd: select.makeSelectDonHistInsulinDepnd(),
	donHistIvDrug: select.makeSelectDonHistIvDrug(),
	donHistOtherDrug: select.makeSelectDonHistOtherDrug(),
	donHistPrevMi: select.makeSelectDonHistPrevMi(),
	donHivNat: select.makeSelectDonHivNat(),
	donHlaTyp: select.makeSelectDonHlaTyp(),
	donHlaTypNotDone: select.makeSelectDonHlaTypNotDone(),
	donHomeState: select.makeSelectDonHomeState(),
	donHtlvNat: select.makeSelectDonHtlvNat(),
	donHtn: select.makeSelectDonHtn(),
	donHypertenDiet: select.makeSelectDonHypertenDiet(),
	donHypertenDiuretics: select.makeSelectDonHypertenDiuretics(),
	donHypertenOtherMeds: select.makeSelectDonHypertenOtherMeds(),
	donInfectBlood: select.makeSelectDonInfectBlood(),
	donInfectBloodConfirm: select.makeSelectDonInfectBloodConfirm(),
	donInfectLu: select.makeSelectDonInfectLu(),
	donInfectLuConfirm: select.makeSelectDonInfectLuConfirm(),
	donInfectOther: select.makeSelectDonInfectOther(),
	donInfectOtherConfirm: select.makeSelectDonInfectOtherConfirm(),
	donInfectUrine: select.makeSelectDonInfectUrine(),
	donInfectUrineConfirm: select.makeSelectDonInfectUrineConfirm(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonHistCocaine: evt => dispatch(action.changeDonHistCocaine(evt.target.value)),
		onChangeDonHistDiab: evt => dispatch(action.changeDonHistDiab(evt.target.value)),
		onChangeDonHistHyperten: evt => dispatch(action.changeDonHistHyperten(evt.target.value)),
		onChangeDonHistInsulinDepnd: evt => dispatch(action.changeDonHistInsulinDepnd(evt.target.value)),
		onChangeDonHistIvDrug: evt => dispatch(action.changeDonHistIvDrug(evt.target.value)),
		onChangeDonHistOtherDrug: evt => dispatch(action.changeDonHistOtherDrug(evt.target.value)),
		onChangeDonHistPrevMi: evt => dispatch(action.changeDonHistPrevMi(evt.target.value)),
		onChangeDonHivNat: evt => dispatch(action.changeDonHivNat(evt.target.value)),
		onChangeDonHlaTyp: evt => dispatch(action.changeDonHlaTyp(evt.target.value)),
		onChangeDonHlaTypNotDone: evt => dispatch(action.changeDonHlaTypNotDone(evt.target.value)),
		onChangeDonHomeState: evt => dispatch(action.changeDonHomeState(evt.target.value)),
		onChangeDonHtlvNat: evt => dispatch(action.changeDonHtlvNat(evt.target.value)),
		onChangeDonHtn: evt => dispatch(action.changeDonHtn(evt.target.value)),
		onChangeDonHypertenDiet: evt => dispatch(action.changeDonHypertenDiet(evt.target.value)),
		onChangeDonHypertenDiuretics: evt => dispatch(action.changeDonHypertenDiuretics(evt.target.value)),
		onChangeDonHypertenOtherMeds: evt => dispatch(action.changeDonHypertenOtherMeds(evt.target.value)),
		onChangeDonInfectBlood: evt => dispatch(action.changeDonInfectBlood(evt.target.value)),
		onChangeDonInfectBloodConfirm: evt => dispatch(action.changeDonInfectBloodConfirm(evt.target.value)),
		onChangeDonInfectLu: evt => dispatch(action.changeDonInfectLu(evt.target.value)),
		onChangeDonInfectLuConfirm: evt => dispatch(action.changeDonInfectLuConfirm(evt.target.value)),
		onChangeDonInfectOther: evt => dispatch(action.changeDonInfectOther(evt.target.value)),
		onChangeDonInfectOtherConfirm: evt => dispatch(action.changeDonInfectOtherConfirm(evt.target.value)),
		onChangeDonInfectUrine: evt => dispatch(action.changeDonInfectUrine(evt.target.value)),
		onChangeDonInfectUrineConfirm: evt => dispatch(action.changeDonInfectUrineConfirm(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm6 );
