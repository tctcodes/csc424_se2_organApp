import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxfLiForm4 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL OTHER THERAPY TY</label>
					<label className="text-secondary" >If Other therapies, check all that apply::</label>
					<select className="form-control" value={this.props.tflOtherTherapyTy} onChange={this.props.onChangeTflOtherTherapyTy}>
						<option value="" hidden disabled selected/>
						<option value="">Missing </option>
						<option value="1">1: Photopheresis </option>
						<option value="2">2: Plasmapheresis </option>
						<option value="4">4: Total Lymphoid Irradiation (TLI) </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL OTHER THERAPY TY PHOTOPH</label>
					<label className="text-secondary" >Other Therapy - Photopheresis (3):</label>
					<input className="form-control" type="text" value={this.props.tflOtherTherapyTyPhotoph} onChange={this.props.onChangeTflOtherTherapyTyPhotoph} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL OTHER THERAPY TY PLASMAPH</label>
					<label className="text-secondary" >Other Therapy - Plasmapheresis (3):</label>
					<input className="form-control" type="text" value={this.props.tflOtherTherapyTyPlasmaph} onChange={this.props.onChangeTflOtherTherapyTyPlasmaph} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL OTHER THERAPY TY TLI</label>
					<label className="text-secondary" >Other Therapy - Total Lymphoid Irradiation (3):</label>
					<input className="form-control" type="text" value={this.props.tflOtherTherapyTyTli} onChange={this.props.onChangeTflOtherTherapyTyTli} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PERM STATE</label>
					<label className="text-secondary" >State of Permanent Residence:</label>
					<select className="form-control" value={this.props.tflPermState} onChange={this.props.onChangeTflPermState}>
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
					<label className="font-weight-bold" >TFL PHYSC CAPACITY</label>
					<label className="text-secondary" >Physical Capacity::</label>
					<select className="form-control" value={this.props.tflPhyscCapacity} onChange={this.props.onChangeTflPhyscCapacity}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No Limitations</option>
						<option value="2">2: Limited Mobility</option>
						<option value="3">3: Wheelchair bound or more limited</option>
						<option value="996">996: Not Applicable ({"<"} 1 year old or hospitalized)</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PORTAL VEIN THROMB</label>
					<label className="text-secondary" >If Vascular Thrombosis, Portal vein thrombosis (Ped. Only):</label>
					<input className="form-control" type="text" value={this.props.tflPortalVeinThromb} onChange={this.props.onChangeTflPortalVeinThromb} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PRIMARY PAY</label>
					<label className="text-secondary" >Primary Insurance at Follow-up::</label>
					<select className="form-control" value={this.props.tflPrimaryPay} onChange={this.props.onChangeTflPrimaryPay}>
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
					<label className="font-weight-bold" >TFL PX NONCOMP</label>
					<label className="text-secondary" >Patient Noncompliant During this Follow-Up Period:</label>
					<input className="form-control" type="text" value={this.props.tflPxNoncomp} onChange={this.props.onChangeTflPxNoncomp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PX RESEARCH</label>
					<label className="text-secondary" >Did Px Participate in Research for Immuno Meds:</label>
					<input className="form-control" type="text" value={this.props.tflPxResearch} onChange={this.props.onChangeTflPxResearch} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PX STAT</label>
					<label className="text-secondary" >Patient Status:</label>
					<select className="form-control" value={this.props.tflPxStat} onChange={this.props.onChangeTflPxStat}>
						<option value="" hidden disabled selected/>
						<option value="A">A: LIVING </option>
						<option value="D">D: DEAD </option>
						<option value="L">L: LOST TO FOLLOW UP </option>
						<option value="N">N: NOT SEEN </option>
						<option value="R">R: RETRANSPLANTED</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL PX STAT DT</label>
					<label className="text-secondary" >Patient Status/Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.tflPxStatDt} onChange={this.props.onChangeTflPxStatDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL REJ EVENT NUM</label>
					<label className="text-secondary" >Number of Episodes:</label>
					<input className="form-control" type="number" value={this.props.tflRejEventNum} onChange={this.props.onChangeTflRejEventNum} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL REJ TREAT</label>
					<label className="text-secondary" >Patient Treated For Rejection:</label>
					<input className="form-control" type="text" value={this.props.tflRejTreat} onChange={this.props.onChangeTflRejTreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL SGOT</label>
					<label className="text-secondary" >SGOT/AST:</label>
					<input className="form-control" type="number" value={this.props.tflSgot} onChange={this.props.onChangeTflSgot} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL SGPT</label>
					<label className="text-secondary" >SGPT/ALT:</label>
					<input className="form-control" type="number" value={this.props.tflSgpt} onChange={this.props.onChangeTflSgpt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL TOT BILI</label>
					<label className="text-secondary" >Total Bilirubin:</label>
					<input className="form-control" type="number" value={this.props.tflTotBili} onChange={this.props.onChangeTflTotBili} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL TXFER DT</label>
					<label className="text-secondary" >Transfer Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.tflTxferDt} onChange={this.props.onChangeTflTxferDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL WGT KG</label>
					<label className="text-secondary" >Recipient/s Weight in kilograms:</label>
					<input className="form-control" type="number" value={this.props.tflWgtKg} onChange={this.props.onChangeTflWgtKg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL WORK INCOME</label>
					<label className="text-secondary" >Working for income::</label>
					<input className="form-control" type="text" value={this.props.tflWorkIncome} onChange={this.props.onChangeTflWorkIncome} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL WORK NO STAT</label>
					<label className="text-secondary" >If No, Working Due To:</label>
					<select className="form-control" value={this.props.tflWorkNoStat} onChange={this.props.onChangeTflWorkNoStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Disability</option>
						<option value="2">2: Demands of Treatment</option>
						<option value="3">3: Insurance Conflict</option>
						<option value="4">4: Inability to Find Work</option>
						<option value="5">5: Patient Choice - Homemaker</option>
						<option value="6">6: Patient Choice - Student Full Time/Part Time</option>
						<option value="7">7: Patient Choice - Retired</option>
						<option value="8">8: Patient Choice - Other</option>
						<option value="996">996: Not Applicable - Hospitalized</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL WORK YES STAT</label>
					<label className="text-secondary" >If Yes::</label>
					<select className="form-control" value={this.props.tflWorkYesStat} onChange={this.props.onChangeTflWorkYesStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Working Full Time</option>
						<option value="2">2: Working Part Time due to Demands of Treatment</option>
						<option value="3">3: Working Part Time due to Disability</option>
						<option value="4">4: Working Part Time due to Insurance Conflict</option>
						<option value="5">5: Working Part Time due to Inability to Find Full Time Work</option>
						<option value="6">6: Working Part Time due to Patient Choice</option>
						<option value="7">7: Working Part Time Reason Unknown</option>
						<option value="998">998: Working, Part Time vs. Full Time Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TRR FOL ID</label>
					<label className="text-secondary" >Unique identifier for TRR Follow-up - unique key:</label>
					<input className="form-control" type="number" readOnly value={this.props.trrFolId} onChange={this.props.onChangeTrrFolId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TRR ID</label>
					<label className="text-secondary" >Unique identifier for TRR - foreign key to TRR:</label>
					<input className="form-control" type="number" readOnly value={this.props.trrId} onChange={this.props.onChangeTrrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TX ID</label>
					<label className="text-secondary" >Unique identifier for Transplant - foreign key to rec_transplant:</label>
					<input className="form-control" type="number" readOnly value={this.props.txId} onChange={this.props.onChangeTxId} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	tflOtherTherapyTy: select.makeSelectTflOtherTherapyTy(),
	tflOtherTherapyTyPhotoph: select.makeSelectTflOtherTherapyTyPhotoph(),
	tflOtherTherapyTyPlasmaph: select.makeSelectTflOtherTherapyTyPlasmaph(),
	tflOtherTherapyTyTli: select.makeSelectTflOtherTherapyTyTli(),
	tflPermState: select.makeSelectTflPermState(),
	tflPhyscCapacity: select.makeSelectTflPhyscCapacity(),
	tflPortalVeinThromb: select.makeSelectTflPortalVeinThromb(),
	tflPrimaryPay: select.makeSelectTflPrimaryPay(),
	tflPxNoncomp: select.makeSelectTflPxNoncomp(),
	tflPxResearch: select.makeSelectTflPxResearch(),
	tflPxStat: select.makeSelectTflPxStat(),
	tflPxStatDt: select.makeSelectTflPxStatDt(),
	tflRejEventNum: select.makeSelectTflRejEventNum(),
	tflRejTreat: select.makeSelectTflRejTreat(),
	tflSgot: select.makeSelectTflSgot(),
	tflSgpt: select.makeSelectTflSgpt(),
	tflTotBili: select.makeSelectTflTotBili(),
	tflTxferDt: select.makeSelectTflTxferDt(),
	tflWgtKg: select.makeSelectTflWgtKg(),
	tflWorkIncome: select.makeSelectTflWorkIncome(),
	tflWorkNoStat: select.makeSelectTflWorkNoStat(),
	tflWorkYesStat: select.makeSelectTflWorkYesStat(),
	trrFolId: select.makeSelectTrrFolId(),
	trrId: select.makeSelectTrrId(),
	txId: select.makeSelectTxId(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeTflOtherTherapyTy: evt => dispatch(action.changeTflOtherTherapyTy(evt.target.value)),
		onChangeTflOtherTherapyTyPhotoph: evt => dispatch(action.changeTflOtherTherapyTyPhotoph(evt.target.value)),
		onChangeTflOtherTherapyTyPlasmaph: evt => dispatch(action.changeTflOtherTherapyTyPlasmaph(evt.target.value)),
		onChangeTflOtherTherapyTyTli: evt => dispatch(action.changeTflOtherTherapyTyTli(evt.target.value)),
		onChangeTflPermState: evt => dispatch(action.changeTflPermState(evt.target.value)),
		onChangeTflPhyscCapacity: evt => dispatch(action.changeTflPhyscCapacity(evt.target.value)),
		onChangeTflPortalVeinThromb: evt => dispatch(action.changeTflPortalVeinThromb(evt.target.value)),
		onChangeTflPrimaryPay: evt => dispatch(action.changeTflPrimaryPay(evt.target.value)),
		onChangeTflPxNoncomp: evt => dispatch(action.changeTflPxNoncomp(evt.target.value)),
		onChangeTflPxResearch: evt => dispatch(action.changeTflPxResearch(evt.target.value)),
		onChangeTflPxStat: evt => dispatch(action.changeTflPxStat(evt.target.value)),
		onChangeTflPxStatDt: evt => dispatch(action.changeTflPxStatDt(evt.target.value)),
		onChangeTflRejEventNum: evt => dispatch(action.changeTflRejEventNum(evt.target.value)),
		onChangeTflRejTreat: evt => dispatch(action.changeTflRejTreat(evt.target.value)),
		onChangeTflSgot: evt => dispatch(action.changeTflSgot(evt.target.value)),
		onChangeTflSgpt: evt => dispatch(action.changeTflSgpt(evt.target.value)),
		onChangeTflTotBili: evt => dispatch(action.changeTflTotBili(evt.target.value)),
		onChangeTflTxferDt: evt => dispatch(action.changeTflTxferDt(evt.target.value)),
		onChangeTflWgtKg: evt => dispatch(action.changeTflWgtKg(evt.target.value)),
		onChangeTflWorkIncome: evt => dispatch(action.changeTflWorkIncome(evt.target.value)),
		onChangeTflWorkNoStat: evt => dispatch(action.changeTflWorkNoStat(evt.target.value)),
		onChangeTflWorkYesStat: evt => dispatch(action.changeTflWorkYesStat(evt.target.value)),
		onChangeTrrFolId: evt => dispatch(action.changeTrrFolId(evt.target.value)),
		onChangeTrrId: evt => dispatch(action.changeTrrId(evt.target.value)),
		onChangeTxId: evt => dispatch(action.changeTxId(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxfLiForm4 );
