import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm11 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MED COND</label>
					<label className="text-secondary" >Medical Condition:</label>
					<select className="form-control" value={this.props.recMedCond} onChange={this.props.onChangeRecMedCond}>
						<option value="" hidden disabled selected/>
						<option value="1">1: IN INTENSIVE CARE UNIT</option>
						<option value="2">2: HOSPITALIZED NOT IN ICU</option>
						<option value="3">3: NOT HOSPITALIZED</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MM EQUIV CUR</label>
					<label className="text-secondary" >Num of hla mismatches - current equivalent match:</label>
					<input className="form-control" type="number" value={this.props.recMmEquivCur} onChange={this.props.onChangeRecMmEquivCur} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MM EQUIV TX</label>
					<label className="text-secondary" >Num of hla mismatches - current match @ tx:</label>
					<input className="form-control" type="number" value={this.props.recMmEquivTx} onChange={this.props.onChangeRecMmEquivTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MOTOR DEVELOP</label>
					<label className="text-secondary" >Motor Development (Ped Only):</label>
					<select className="form-control" value={this.props.recMotorDevelop} onChange={this.props.onChangeRecMotorDevelop}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Definite Motor delay/impairment</option>
						<option value="2">2: Probable Motor delay/impairment</option>
						<option value="3">3: Questionable Motor delay/impairment</option>
						<option value="4">4: No Motor delay/impairment</option>
						<option value="998">998: Not Assessed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ON VENTILATOR</label>
					<label className="text-secondary" >Risk Factors: On Ventilator:</label>
					<input className="form-control" type="text" value={this.props.recOnVentilator} onChange={this.props.onChangeRecOnVentilator} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OPO ID</label>
					<label className="text-secondary" >OPO Serving Transplant Center:</label>
					<input className="form-control" type="number" readOnly value={this.props.recOpoId} onChange={this.props.onChangeRecOpoId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OTHER THERAPY</label>
					<label className="text-secondary" >Other Therapies::</label>
					<input className="form-control" type="text" value={this.props.recOtherTherapy} onChange={this.props.onChangeRecOtherTherapy} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OTHER THERAPY TY</label>
					<label className="text-secondary" >If Other Therapies, check all that apply:</label>
					<select className="form-control" value={this.props.recOtherTherapyTy} onChange={this.props.onChangeRecOtherTherapyTy}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Photopheresis </option>
						<option value="2">2: Plasmapheresis </option>
						<option value="4">4: Total Lymphoid Irradiation (TLI) </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OTHER THERAPY TY PHOTOPH</label>
					<label className="text-secondary" >Other Therapy - Photopheresis (3):</label>
					<input className="form-control" type="text" value={this.props.recOtherTherapyTyPhotoph} onChange={this.props.onChangeRecOtherTherapyTyPhotoph} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OTHER THERAPY TY PLASMAPH</label>
					<label className="text-secondary" >Other Therapy - Plasmapheresis (3):</label>
					<input className="form-control" type="text" value={this.props.recOtherTherapyTyPlasmaph} onChange={this.props.onChangeRecOtherTherapyTyPlasmaph} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OTHER THERAPY TY TLI</label>
					<label className="text-secondary" >Other Therapy - Total Lymphoid Irradiation (3):</label>
					<input className="form-control" type="text" value={this.props.recOtherTherapyTyTli} onChange={this.props.onChangeRecOtherTherapyTyTli} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PB CREDIT</label>
					<label className="text-secondary" >Payback credit issued to sending OPO:</label>
					<input className="form-control" type="text" value={this.props.recPbCredit} onChange={this.props.onChangeRecPbCredit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PB DEBT</label>
					<label className="text-secondary" >Payback debt issued to recipient OPO:</label>
					<input className="form-control" type="text" value={this.props.recPbDebt} onChange={this.props.onChangeRecPbDebt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PB SHARE TY</label>
					<label className="text-secondary" >Payback share type:</label>
					<select className="form-control" value={this.props.recPbShareTy} onChange={this.props.onChangeRecPbShareTy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Zero Mismatch </option>
						<option value="2">2: Payback (UNOS) </option>
						<option value="3">3: Other </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PERM STATE</label>
					<label className="text-secondary" >State of Permanent Residence::</label>
					<select className="form-control" value={this.props.recPermState} onChange={this.props.onChangeRecPermState}>
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
					<label className="font-weight-bold" >REC PHYSC CAPACITY</label>
					<label className="text-secondary" >Physical Capacity::</label>
					<select className="form-control" value={this.props.recPhyscCapacity} onChange={this.props.onChangeRecPhyscCapacity}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No Limitations</option>
						<option value="2">2: Limited Mobility</option>
						<option value="3">3: Wheelchair bound or more limited</option>
						<option value="996">996: Not Applicable ({"<"} 1 year old or hospitalized)</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PORTAL HYPERTEN BLEED</label>
					<label className="text-secondary" >Did Patient receive 5 or more units of packed red blood cells within 48 hours prior to transplantation due to spontaneous portal hypertensive bleeding::</label>
					<input className="form-control" type="text" value={this.props.recPortalHypertenBleed} onChange={this.props.onChangeRecPortalHypertenBleed} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PORTAL VEIN</label>
					<label className="text-secondary" >Risk Factors: Portal Vein Thrombosis:</label>
					<input className="form-control" type="text" value={this.props.recPortalVein} onChange={this.props.onChangeRecPortalVein} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PORTAL VEIN THROMB</label>
					<label className="text-secondary" >If Vascular Thrombosis, Portal vein thrombosis (Ped. Only):</label>
					<input className="form-control" type="text" value={this.props.recPortalVeinThromb} onChange={this.props.onChangeRecPortalVeinThromb} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC POSTX LOS</label>
					<label className="text-secondary" >Time after first Tx, same stay:</label>
					<input className="form-control" type="number" value={this.props.recPostxLos} onChange={this.props.onChangeRecPostxLos} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRETX ALBUMIN</label>
					<label className="text-secondary" >PreTx : Serum Albumin:</label>
					<input className="form-control" type="number" value={this.props.recPretxAlbumin} onChange={this.props.onChangeRecPretxAlbumin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRETX CREAT</label>
					<label className="text-secondary" >PreTx : Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.recPretxCreat} onChange={this.props.onChangeRecPretxCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRETX INR</label>
					<label className="text-secondary" >PreTx : Prothrombin INR:</label>
					<input className="form-control" type="number" value={this.props.recPretxInr} onChange={this.props.onChangeRecPretxInr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC PRETX LAB DT</label>
					<label className="text-secondary" >Pretransplant Lab Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.recPretxLabDt} onChange={this.props.onChangeRecPretxLabDt} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	recMedCond: select.makeSelectRecMedCond(),
	recMmEquivCur: select.makeSelectRecMmEquivCur(),
	recMmEquivTx: select.makeSelectRecMmEquivTx(),
	recMotorDevelop: select.makeSelectRecMotorDevelop(),
	recOnVentilator: select.makeSelectRecOnVentilator(),
	recOpoId: select.makeSelectRecOpoId(),
	recOtherTherapy: select.makeSelectRecOtherTherapy(),
	recOtherTherapyTy: select.makeSelectRecOtherTherapyTy(),
	recOtherTherapyTyPhotoph: select.makeSelectRecOtherTherapyTyPhotoph(),
	recOtherTherapyTyPlasmaph: select.makeSelectRecOtherTherapyTyPlasmaph(),
	recOtherTherapyTyTli: select.makeSelectRecOtherTherapyTyTli(),
	recPbCredit: select.makeSelectRecPbCredit(),
	recPbDebt: select.makeSelectRecPbDebt(),
	recPbShareTy: select.makeSelectRecPbShareTy(),
	recPermState: select.makeSelectRecPermState(),
	recPhyscCapacity: select.makeSelectRecPhyscCapacity(),
	recPortalHypertenBleed: select.makeSelectRecPortalHypertenBleed(),
	recPortalVein: select.makeSelectRecPortalVein(),
	recPortalVeinThromb: select.makeSelectRecPortalVeinThromb(),
	recPostxLos: select.makeSelectRecPostxLos(),
	recPretxAlbumin: select.makeSelectRecPretxAlbumin(),
	recPretxCreat: select.makeSelectRecPretxCreat(),
	recPretxInr: select.makeSelectRecPretxInr(),
	recPretxLabDt: select.makeSelectRecPretxLabDt(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeRecMedCond: evt => dispatch(action.changeRecMedCond(evt.target.value)),
		onChangeRecMmEquivCur: evt => dispatch(action.changeRecMmEquivCur(evt.target.value)),
		onChangeRecMmEquivTx: evt => dispatch(action.changeRecMmEquivTx(evt.target.value)),
		onChangeRecMotorDevelop: evt => dispatch(action.changeRecMotorDevelop(evt.target.value)),
		onChangeRecOnVentilator: evt => dispatch(action.changeRecOnVentilator(evt.target.value)),
		onChangeRecOpoId: evt => dispatch(action.changeRecOpoId(evt.target.value)),
		onChangeRecOtherTherapy: evt => dispatch(action.changeRecOtherTherapy(evt.target.value)),
		onChangeRecOtherTherapyTy: evt => dispatch(action.changeRecOtherTherapyTy(evt.target.value)),
		onChangeRecOtherTherapyTyPhotoph: evt => dispatch(action.changeRecOtherTherapyTyPhotoph(evt.target.value)),
		onChangeRecOtherTherapyTyPlasmaph: evt => dispatch(action.changeRecOtherTherapyTyPlasmaph(evt.target.value)),
		onChangeRecOtherTherapyTyTli: evt => dispatch(action.changeRecOtherTherapyTyTli(evt.target.value)),
		onChangeRecPbCredit: evt => dispatch(action.changeRecPbCredit(evt.target.value)),
		onChangeRecPbDebt: evt => dispatch(action.changeRecPbDebt(evt.target.value)),
		onChangeRecPbShareTy: evt => dispatch(action.changeRecPbShareTy(evt.target.value)),
		onChangeRecPermState: evt => dispatch(action.changeRecPermState(evt.target.value)),
		onChangeRecPhyscCapacity: evt => dispatch(action.changeRecPhyscCapacity(evt.target.value)),
		onChangeRecPortalHypertenBleed: evt => dispatch(action.changeRecPortalHypertenBleed(evt.target.value)),
		onChangeRecPortalVein: evt => dispatch(action.changeRecPortalVein(evt.target.value)),
		onChangeRecPortalVeinThromb: evt => dispatch(action.changeRecPortalVeinThromb(evt.target.value)),
		onChangeRecPostxLos: evt => dispatch(action.changeRecPostxLos(evt.target.value)),
		onChangeRecPretxAlbumin: evt => dispatch(action.changeRecPretxAlbumin(evt.target.value)),
		onChangeRecPretxCreat: evt => dispatch(action.changeRecPretxCreat(evt.target.value)),
		onChangeRecPretxInr: evt => dispatch(action.changeRecPretxInr(evt.target.value)),
		onChangeRecPretxLabDt: evt => dispatch(action.changeRecPretxLabDt(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm11 );
