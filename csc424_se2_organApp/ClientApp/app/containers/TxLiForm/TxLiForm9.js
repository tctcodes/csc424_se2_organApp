import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm9 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC DR1</label>
					<label className="text-secondary" >Recipient/s HLA - DR (1) antigen:</label>
					<select className="form-control" value={this.props.recDr1} onChange={this.props.onChangeRecDr1}>
						<option value="" hidden disabled />
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="4">4: 4 </option>
						<option value="5">5: 5 </option>
						<option value="6">6: 6 </option>
						<option value="7">7: 7 </option>
						<option value="8">8: 8 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="12">12: 12 </option>
						<option value="13">13: 13 </option>
						<option value="14">14: 14 </option>
						<option value="15">15: 15 </option>
						<option value="16">16: 16 </option>
						<option value="17">17: 17 </option>
						<option value="18">18: 18 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="101">101: 0101 </option>
						<option value="102">102: 0102 </option>
						<option value="103">103: 103 </option>
						<option value="301">301: 0301 </option>
						<option value="302">302: 0302 </option>
						<option value="401">401: 0401 </option>
						<option value="402">402: 0402 </option>
						<option value="403">403: 0403 </option>
						<option value="404">404: 0404 </option>
						<option value="405">405: 0405 </option>
						<option value="407">407: 0407 </option>
						<option value="901">901: 0901 </option>
						<option value="902">902: 0902 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1104">1104: 1104 </option>
						<option value="1201">1201: 1201 </option>
						<option value="1202">1202: 1202 </option>
						<option value="1301">1301: 1301 </option>
						<option value="1303">1303: 1303 </option>
						<option value="1401">1401: 1401 </option>
						<option value="1402">1402: 1402 </option>
						<option value="1403">1403: 1403 </option>
						<option value="1404">1404: 1404 </option>
						<option value="1454">1454: 1454 </option>
						<option value="1501">1501: 1501 </option>
						<option value="1502">1502: 1502 </option>
						<option value="1503">1503: 1503 </option>
						<option value="1601">1601: 1601 </option>
						<option value="1602">1602: 1602 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC DR2</label>
					<label className="text-secondary" >Recipient/s HLA - DR (2) antigen:</label>
					<select className="form-control" value={this.props.recDr2} onChange={this.props.onChangeRecDr2}>
						<option value="" hidden disabled />
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="4">4: 4 </option>
						<option value="5">5: 5 </option>
						<option value="6">6: 6 </option>
						<option value="7">7: 7 </option>
						<option value="8">8: 8 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="12">12: 12 </option>
						<option value="13">13: 13 </option>
						<option value="14">14: 14 </option>
						<option value="15">15: 15 </option>
						<option value="16">16: 16 </option>
						<option value="17">17: 17 </option>
						<option value="18">18: 18 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="101">101: 0101 </option>
						<option value="102">102: 0102 </option>
						<option value="103">103: 103 </option>
						<option value="301">301: 0301 </option>
						<option value="302">302: 0302 </option>
						<option value="401">401: 0401 </option>
						<option value="402">402: 0402 </option>
						<option value="403">403: 0403 </option>
						<option value="404">404: 0404 </option>
						<option value="405">405: 0405 </option>
						<option value="407">407: 0407 </option>
						<option value="901">901: 0901 </option>
						<option value="902">902: 0902 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1104">1104: 1104 </option>
						<option value="1201">1201: 1201 </option>
						<option value="1202">1202: 1202 </option>
						<option value="1301">1301: 1301 </option>
						<option value="1303">1303: 1303 </option>
						<option value="1401">1401: 1401 </option>
						<option value="1402">1402: 1402 </option>
						<option value="1403">1403: 1403 </option>
						<option value="1404">1404: 1404 </option>
						<option value="1454">1454: 1454 </option>
						<option value="1501">1501: 1501 </option>
						<option value="1502">1502: 1502 </option>
						<option value="1503">1503: 1503 </option>
						<option value="1601">1601: 1601 </option>
						<option value="1602">1602: 1602 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC DR MM EQUIV CUR</label>
					<label className="text-secondary" >Num of DR mismatches - current equivalent match:</label>
					<input className="form-control" type="number" value={this.props.recDrMmEquivCur} onChange={this.props.onChangeRecDrMmEquivCur} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC DR MM EQUIV TX</label>
					<label className="text-secondary" >Num of DR mismatches - current match @ tx:</label>
					<input className="form-control" type="number" value={this.props.recDrMmEquivTx} onChange={this.props.onChangeRecDrMmEquivTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC EBV STAT</label>
					<label className="text-secondary" >EBV serology status:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.recEbvStat} onChange={this.props.onChangeRecEbvStat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC EMPL STAT PRE04</label>
					<label className="text-secondary" >Recipient/s Employment Status - Pre-6/30/2004:</label>
					<select className="form-control" value={this.props.recEmplStatPre04} onChange={this.props.onChangeRecEmplStatPre04}>
						<option value="" hidden disabled />
						<option value="1">1: WORKING FULL TIME</option>
						<option value="2">2: WORKING PART TIME BY CHOICE</option>
						<option value="3">3: WORKING PART TIME DUE TO DISEASE</option>
						<option value="4">4: WORKING PART TIME REASON UNKNOWN</option>
						<option value="5">5: NOT WORKING BY CHOICE</option>
						<option value="6">6: NOT WORKING DUE TO DISEASE</option>
						<option value="7">7: NOT WORKING UNABLE TO FIND EMPLOYMENT</option>
						<option value="8">8: NOT WORKING REASON UNKNOWN</option>
						<option value="9">9: RETIRED</option>
						<option value="996">996: PATIENT {"<"} 5 YEARS OLD</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL BILIARY</label>
					<label className="text-secondary" >Cause of Graft Failure: Biliary Tract Complication:</label>
					<select className="form-control" value={this.props.recFailBiliary} onChange={this.props.onChangeRecFailBiliary}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL DT</label>
					<label className="text-secondary" >Date of Graft Failure:</label>
					<input className="form-control" type="datetime-local" value={this.props.recFailDt} onChange={this.props.onChangeRecFailDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL HEP DENOVO</label>
					<label className="text-secondary" >Cause of Graft Failure: Hepatitis: DeNovo:</label>
					<select className="form-control" value={this.props.recFailHepDenovo} onChange={this.props.onChangeRecFailHepDenovo}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL HEP RECUR</label>
					<label className="text-secondary" >Cause of Graft Failure: Hepatitis: Recurrent:</label>
					<select className="form-control" value={this.props.recFailHepRecur} onChange={this.props.onChangeRecFailHepRecur}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL INFECT</label>
					<label className="text-secondary" >Cause of Graft Failure: Infection:</label>
					<select className="form-control" value={this.props.recFailInfect} onChange={this.props.onChangeRecFailInfect}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL PRIME GRAFT FAIL</label>
					<label className="text-secondary" >Cause of Graft Failure: Primary Graft Failure:</label>
					<select className="form-control" value={this.props.recFailPrimeGraftFail} onChange={this.props.onChangeRecFailPrimeGraftFail}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL RECUR DISEASE</label>
					<label className="text-secondary" >Cause of Graft Failure: Recurrent Disease:</label>
					<select className="form-control" value={this.props.recFailRecurDisease} onChange={this.props.onChangeRecFailRecurDisease}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL REJ ACUTE</label>
					<label className="text-secondary" >Cause of Graft Failure: Acute Rejection:</label>
					<select className="form-control" value={this.props.recFailRejAcute} onChange={this.props.onChangeRecFailRejAcute}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FAIL VASC THROMB</label>
					<label className="text-secondary" >Cause of Graft Failure: Vascular Thrombosis:</label>
					<select className="form-control" value={this.props.recFailVascThromb} onChange={this.props.onChangeRecFailVascThromb}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC FUNCTN STAT</label>
					<label className="text-secondary" >Functional Status:</label>
					<select className="form-control" value={this.props.recFunctnStat} onChange={this.props.onChangeRecFunctnStat}>
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
					<label className="font-weight-bold" >REC GRAFT STAT</label>
					<label className="text-secondary" >Graft Status:</label>
					<select className="form-control" value={this.props.recGraftStat} onChange={this.props.onChangeRecGraftStat}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HBV ANTIBODY</label>
					<label className="text-secondary" >HBV: Core Antibody//Core Antibody::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.recHbvAntibody} onChange={this.props.onChangeRecHbvAntibody} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HBV SURF ANTIGEN</label>
					<label className="text-secondary" >HBV: Surface Antigen//Surface Antigen::</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.recHbvSurfAntigen} onChange={this.props.onChangeRecHbvSurfAntigen} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HCV STAT</label>
					<label className="text-secondary" >HCV serology status:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.recHcvStat} onChange={this.props.onChangeRecHcvStat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HEPATIC ARTER THROMB</label>
					<label className="text-secondary" >If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only):</label>
					<select className="form-control" value={this.props.recHepaticArterThromb} onChange={this.props.onChangeRecHepaticArterThromb}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HEPATIC OUTFLOW OBSTRUCT</label>
					<label className="text-secondary" >If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only):</label>
					<select className="form-control" value={this.props.recHepaticOutflowObstruct} onChange={this.props.onChangeRecHepaticOutflowObstruct}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HGT CM</label>
					<label className="text-secondary" >Recipient/s Height in Centimeters:</label>
					<input className="form-control" type="number" value={this.props.recHgtCm} onChange={this.props.onChangeRecHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HGT WGT DT</label>
					<label className="text-secondary" >Date of Height & Weight Measurement (Ped Only):</label>
					<input className="form-control" type="datetime-local" value={this.props.recHgtWgtDt} onChange={this.props.onChangeRecHgtWgtDt} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	recDr1: select.makeSelectRecDr1(),
	recDr2: select.makeSelectRecDr2(),
	recDrMmEquivCur: select.makeSelectRecDrMmEquivCur(),
	recDrMmEquivTx: select.makeSelectRecDrMmEquivTx(),
	recEbvStat: select.makeSelectRecEbvStat(),
	recEmplStatPre04: select.makeSelectRecEmplStatPre04(),
	recFailBiliary: select.makeSelectRecFailBiliary(),
	recFailDt: select.makeSelectRecFailDt(),
	recFailHepDenovo: select.makeSelectRecFailHepDenovo(),
	recFailHepRecur: select.makeSelectRecFailHepRecur(),
	recFailInfect: select.makeSelectRecFailInfect(),
	recFailPrimeGraftFail: select.makeSelectRecFailPrimeGraftFail(),
	recFailRecurDisease: select.makeSelectRecFailRecurDisease(),
	recFailRejAcute: select.makeSelectRecFailRejAcute(),
	recFailVascThromb: select.makeSelectRecFailVascThromb(),
	recFunctnStat: select.makeSelectRecFunctnStat(),
	recGraftStat: select.makeSelectRecGraftStat(),
	recHbvAntibody: select.makeSelectRecHbvAntibody(),
	recHbvSurfAntigen: select.makeSelectRecHbvSurfAntigen(),
	recHcvStat: select.makeSelectRecHcvStat(),
	recHepaticArterThromb: select.makeSelectRecHepaticArterThromb(),
	recHepaticOutflowObstruct: select.makeSelectRecHepaticOutflowObstruct(),
	recHgtCm: select.makeSelectRecHgtCm(),
	recHgtWgtDt: select.makeSelectRecHgtWgtDt(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeRecDr1: evt => dispatch(action.changeRecDr1(evt.target.value)),
		onChangeRecDr2: evt => dispatch(action.changeRecDr2(evt.target.value)),
		onChangeRecDrMmEquivCur: evt => dispatch(action.changeRecDrMmEquivCur(evt.target.value)),
		onChangeRecDrMmEquivTx: evt => dispatch(action.changeRecDrMmEquivTx(evt.target.value)),
		onChangeRecEbvStat: evt => dispatch(action.changeRecEbvStat(evt.target.value)),
		onChangeRecEmplStatPre04: evt => dispatch(action.changeRecEmplStatPre04(evt.target.value)),
		onChangeRecFailBiliary: evt => dispatch(action.changeRecFailBiliary(evt.target.value)),
		onChangeRecFailDt: evt => dispatch(action.changeRecFailDt(evt.target.value)),
		onChangeRecFailHepDenovo: evt => dispatch(action.changeRecFailHepDenovo(evt.target.value)),
		onChangeRecFailHepRecur: evt => dispatch(action.changeRecFailHepRecur(evt.target.value)),
		onChangeRecFailInfect: evt => dispatch(action.changeRecFailInfect(evt.target.value)),
		onChangeRecFailPrimeGraftFail: evt => dispatch(action.changeRecFailPrimeGraftFail(evt.target.value)),
		onChangeRecFailRecurDisease: evt => dispatch(action.changeRecFailRecurDisease(evt.target.value)),
		onChangeRecFailRejAcute: evt => dispatch(action.changeRecFailRejAcute(evt.target.value)),
		onChangeRecFailVascThromb: evt => dispatch(action.changeRecFailVascThromb(evt.target.value)),
		onChangeRecFunctnStat: evt => dispatch(action.changeRecFunctnStat(evt.target.value)),
		onChangeRecGraftStat: evt => dispatch(action.changeRecGraftStat(evt.target.value)),
		onChangeRecHbvAntibody: evt => dispatch(action.changeRecHbvAntibody(evt.target.value)),
		onChangeRecHbvSurfAntigen: evt => dispatch(action.changeRecHbvSurfAntigen(evt.target.value)),
		onChangeRecHcvStat: evt => dispatch(action.changeRecHcvStat(evt.target.value)),
		onChangeRecHepaticArterThromb: evt => dispatch(action.changeRecHepaticArterThromb(evt.target.value)),
		onChangeRecHepaticOutflowObstruct: evt => dispatch(action.changeRecHepaticOutflowObstruct(evt.target.value)),
		onChangeRecHgtCm: evt => dispatch(action.changeRecHgtCm(evt.target.value)),
		onChangeRecHgtWgtDt: evt => dispatch(action.changeRecHgtWgtDt(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm9 );
