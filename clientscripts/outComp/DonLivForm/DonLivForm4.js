import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonLivForm4 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HBV TESTED</label>
					<label className="text-secondary" >HBV:</label>
					<select className="form-control" value={this.props.donHbvTested} onChange={this.props.onChangeDonHbvTested}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV ANTIBODY</label>
					<label className="text-secondary" >HCV//Antibody::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHcvAntibody} onChange={this.props.onChangeDonHcvAntibody} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV CLINICAL</label>
					<label className="text-secondary" >HCV//Was there clinical disease::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHcvClinical} onChange={this.props.onChangeDonHcvClinical} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV LI HISTOLOGY</label>
					<label className="text-secondary" >HCV//Liver Histology::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHcvLiHistology} onChange={this.props.onChangeDonHcvLiHistology} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV RIBA</label>
					<label className="text-secondary" >HCV//RIBA::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHcvRiba} onChange={this.props.onChangeDonHcvRiba} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV RNA</label>
					<label className="text-secondary" >HCV//HCV RNA::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHcvRna} onChange={this.props.onChangeDonHcvRna} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HCV TESTED</label>
					<label className="text-secondary" >HCV:</label>
					<select className="form-control" value={this.props.donHcvTested} onChange={this.props.onChangeDonHcvTested}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HEALTH INSUR</label>
					<label className="text-secondary" >Did the donor have health insurance::</label>
					<select className="form-control" value={this.props.donHealthInsur} onChange={this.props.onChangeDonHealthInsur}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HGT CM</label>
					<label className="text-secondary" >Height::</label>
					<input className="form-control" type="number" value={this.props.donHgtCm} onChange={this.props.onChangeDonHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST CANCER</label>
					<label className="text-secondary" >History of Cancer::</label>
					<select className="form-control" value={this.props.donHistCancer} onChange={this.props.onChangeDonHistCancer}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: SKIN - SQUAMOUS, BASAL CELL </option>
						<option value="3">3: SKIN - MELANOMA </option>
						<option value="4">4: CNS TUMOR - ASTROCYTOMA </option>
						<option value="5">5: CNS TUMOR - GLIOBLASTOMA MULTIFORME </option>
						<option value="6">6: CNS TUMOR - MEDULLOBLASTOMA </option>
						<option value="7">7: CNS TUMOR - NEUROBLASTOMA </option>
						<option value="8">8: CNS TUMOR - ANGIOBLASTOMA </option>
						<option value="9">9: CNS TUMOR - MENINGIOMA </option>
						<option value="12">12: CNS TUMOR - OTHER </option>
						<option value="13">13: GENITOURINARY - BLADDER </option>
						<option value="14">14: GENITOURINARY - UTERINE CERVIX </option>
						<option value="15">15: GENITOURINARY - UTERINE BODY ENDOMETRIAL </option>
						<option value="16">16: GENITOURINARY - UTERINE BODY CHORIOCARCINOMA </option>
						<option value="17">17: GENITOURINARY - VULVA </option>
						<option value="18">18: GENITOURINARY - OVARIAN </option>
						<option value="19">19: GENITOURINARY - PENIS, TESTICULAR </option>
						<option value="20">20: GENITOURINARY - PROSTATE </option>
						<option value="21">21: GENITOURINARY - KIDNEY </option>
						<option value="22">22: GENITOURINARY - UNKNOWN </option>
						<option value="23">23: GASTROINTESTINAL - ESOPHAGEAL </option>
						<option value="24">24: GASTROINTESTINAL - STOMACH </option>
						<option value="25">25: GASTROINTESTINAL - SMALL INTESTINE </option>
						<option value="26">26: GASTROINTESTINAL - COLO-RECTAL </option>
						<option value="27">27: GASTROINTESTINAL - LIVER {"&"} BILIARY TRACT </option>
						<option value="28">28: GASTROINTESTINAL - PANCREAS </option>
						<option value="29">29: BREAST </option>
						<option value="30">30: THYROID </option>
						<option value="32">32: TONGUE/THROAT </option>
						<option value="33">33: LARYNX </option>
						<option value="34">34: LUNG (include bronchial) </option>
						<option value="35">35: LEUKEMIA/LYMPHOMA </option>
						<option value="998">998: UNKNOWN </option>
						<option value="999">999: OTHER, SPECIFY</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST CIGARETTE</label>
					<label className="text-secondary" >History of Cigarette Use::</label>
					<select className="form-control" value={this.props.donHistCigarette} onChange={this.props.onChangeDonHistCigarette}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIST HYPERTEN</label>
					<label className="text-secondary" >History of Hypertension::</label>
					<select className="form-control" value={this.props.donHistHyperten} onChange={this.props.onChangeDonHistHyperten}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: YES, 0-5 YEARS </option>
						<option value="3">3: YES, 6-10 YEARS </option>
						<option value="4">4: YES, >10 YEARS </option>
						<option value="5">5: YES, UNKNOWN DURATION </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV ANTIBODY</label>
					<label className="text-secondary" >HIV//Antibody::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivAntibody} onChange={this.props.onChangeDonHivAntibody} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV CLINICAL</label>
					<label className="text-secondary" >HIV//Was there clinical disease (ARC, AIDS)::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivClinical} onChange={this.props.onChangeDonHivClinical} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV CONFIRM</label>
					<label className="text-secondary" >HIV: Confirmation//Confirmation::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivConfirm} onChange={this.props.onChangeDonHivConfirm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV RNA</label>
					<label className="text-secondary" >HIV//RNA::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivRna} onChange={this.props.onChangeDonHivRna} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV SCREEN</label>
					<label className="text-secondary" >HIV: Screening//Screening::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donHivScreen} onChange={this.props.onChangeDonHivScreen} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HIV TESTED</label>
					<label className="text-secondary" >HIV:</label>
					<select className="form-control" value={this.props.donHivTested} onChange={this.props.onChangeDonHivTested}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HLA TYP</label>
					<label className="text-secondary" >Was Donor HLA Typed:</label>
					<select className="form-control" value={this.props.donHlaTyp} onChange={this.props.onChangeDonHlaTyp}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HLA TYP NOT DONE</label>
					<label className="text-secondary" >HLA Typing not done for donor:</label>
					<select className="form-control" value={this.props.donHlaTypNotDone} onChange={this.props.onChangeDonHlaTypNotDone}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HMO PPO</label>
					<label className="text-secondary" >Secondary source of payment: HMO/PPO:</label>
					<select className="form-control" value={this.props.donHmoPpo} onChange={this.props.onChangeDonHmoPpo}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HOME STATE</label>
					<label className="text-secondary" >Donor/s Home State:</label>
					<select className="form-control" value={this.props.donHomeState} onChange={this.props.onChangeDonHomeState}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON HYPERTEN DIET</label>
					<label className="text-secondary" >History of Hypertension Diet//Diet::</label>
					<select className="form-control" value={this.props.donHypertenDiet} onChange={this.props.onChangeDonHypertenDiet}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HYPERTEN DIURETICS</label>
					<label className="text-secondary" >History of Hypertension Diuretics//Diuretics::</label>
					<select className="form-control" value={this.props.donHypertenDiuretics} onChange={this.props.onChangeDonHypertenDiuretics}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donHbvTested: select.makeSelectDonHbvTested(),
	donHcvAntibody: select.makeSelectDonHcvAntibody(),
	donHcvClinical: select.makeSelectDonHcvClinical(),
	donHcvLiHistology: select.makeSelectDonHcvLiHistology(),
	donHcvRiba: select.makeSelectDonHcvRiba(),
	donHcvRna: select.makeSelectDonHcvRna(),
	donHcvTested: select.makeSelectDonHcvTested(),
	donHealthInsur: select.makeSelectDonHealthInsur(),
	donHgtCm: select.makeSelectDonHgtCm(),
	donHistCancer: select.makeSelectDonHistCancer(),
	donHistCigarette: select.makeSelectDonHistCigarette(),
	donHistHyperten: select.makeSelectDonHistHyperten(),
	donHivAntibody: select.makeSelectDonHivAntibody(),
	donHivClinical: select.makeSelectDonHivClinical(),
	donHivConfirm: select.makeSelectDonHivConfirm(),
	donHivRna: select.makeSelectDonHivRna(),
	donHivScreen: select.makeSelectDonHivScreen(),
	donHivTested: select.makeSelectDonHivTested(),
	donHlaTyp: select.makeSelectDonHlaTyp(),
	donHlaTypNotDone: select.makeSelectDonHlaTypNotDone(),
	donHmoPpo: select.makeSelectDonHmoPpo(),
	donHomeState: select.makeSelectDonHomeState(),
	donHypertenDiet: select.makeSelectDonHypertenDiet(),
	donHypertenDiuretics: select.makeSelectDonHypertenDiuretics(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonHbvTested: evt => dispatch(action.changeDonHbvTested(evt.target.value)),
		onChangeDonHcvAntibody: evt => dispatch(action.changeDonHcvAntibody(evt.target.value)),
		onChangeDonHcvClinical: evt => dispatch(action.changeDonHcvClinical(evt.target.value)),
		onChangeDonHcvLiHistology: evt => dispatch(action.changeDonHcvLiHistology(evt.target.value)),
		onChangeDonHcvRiba: evt => dispatch(action.changeDonHcvRiba(evt.target.value)),
		onChangeDonHcvRna: evt => dispatch(action.changeDonHcvRna(evt.target.value)),
		onChangeDonHcvTested: evt => dispatch(action.changeDonHcvTested(evt.target.value)),
		onChangeDonHealthInsur: evt => dispatch(action.changeDonHealthInsur(evt.target.value)),
		onChangeDonHgtCm: evt => dispatch(action.changeDonHgtCm(evt.target.value)),
		onChangeDonHistCancer: evt => dispatch(action.changeDonHistCancer(evt.target.value)),
		onChangeDonHistCigarette: evt => dispatch(action.changeDonHistCigarette(evt.target.value)),
		onChangeDonHistHyperten: evt => dispatch(action.changeDonHistHyperten(evt.target.value)),
		onChangeDonHivAntibody: evt => dispatch(action.changeDonHivAntibody(evt.target.value)),
		onChangeDonHivClinical: evt => dispatch(action.changeDonHivClinical(evt.target.value)),
		onChangeDonHivConfirm: evt => dispatch(action.changeDonHivConfirm(evt.target.value)),
		onChangeDonHivRna: evt => dispatch(action.changeDonHivRna(evt.target.value)),
		onChangeDonHivScreen: evt => dispatch(action.changeDonHivScreen(evt.target.value)),
		onChangeDonHivTested: evt => dispatch(action.changeDonHivTested(evt.target.value)),
		onChangeDonHlaTyp: evt => dispatch(action.changeDonHlaTyp(evt.target.value)),
		onChangeDonHlaTypNotDone: evt => dispatch(action.changeDonHlaTypNotDone(evt.target.value)),
		onChangeDonHmoPpo: evt => dispatch(action.changeDonHmoPpo(evt.target.value)),
		onChangeDonHomeState: evt => dispatch(action.changeDonHomeState(evt.target.value)),
		onChangeDonHypertenDiet: evt => dispatch(action.changeDonHypertenDiet(evt.target.value)),
		onChangeDonHypertenDiuretics: evt => dispatch(action.changeDonHypertenDiuretics(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonLivForm4 );
