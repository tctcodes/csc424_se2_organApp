import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm1 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DONOR ID</label>
					<label className="text-secondary" >Encrypted Unique Donor ID (all donors) - foreign key:</label>
					<input className="form-control" type="number" readOnly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON A1</label>
					<label className="text-secondary" >Donor/s HLA - A (1) antigen:</label>
					<select className="form-control" value={this.props.donA1} onChange={this.props.onChangeDonA1}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="19">19: 19 </option>
						<option value="23">23: 23 </option>
						<option value="24">24: 24 </option>
						<option value="25">25: 25 </option>
						<option value="26">26: 26 </option>
						<option value="28">28: 28 </option>
						<option value="29">29: 29 </option>
						<option value="30">30: 30 </option>
						<option value="31">31: 31 </option>
						<option value="32">32: 32 </option>
						<option value="33">33: 33 </option>
						<option value="34">34: 34 </option>
						<option value="36">36: 36 </option>
						<option value="43">43: 43 </option>
						<option value="66">66: 66 </option>
						<option value="68">68: 68 </option>
						<option value="69">69: 69 </option>
						<option value="74">74: 74 </option>
						<option value="80">80: 80 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="201">201: 0201 </option>
						<option value="202">202: 0202 </option>
						<option value="203">203: 0203 </option>
						<option value="205">205: 0205 </option>
						<option value="206">206: 0206 </option>
						<option value="210">210: 210 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1102">1102: 1102 </option>
						<option value="2402">2402: 2402 </option>
						<option value="2403">2403: 2403 </option>
						<option value="2901">2901: 2901 </option>
						<option value="2902">2902: 2902 </option>
						<option value="3001">3001: 3001 </option>
						<option value="3002">3002: 3002 </option>
						<option value="3301">3301: 3301 </option>
						<option value="3303">3303: 3303 </option>
						<option value="3401">3401: 3401 </option>
						<option value="3402">3402: 3402 </option>
						<option value="6601">6601: 6601 </option>
						<option value="6602">6602: 6602 </option>
						<option value="6801">6801: 6801 </option>
						<option value="6802">6802: 6802 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON A2</label>
					<label className="text-secondary" >Donor/s HLA - A (2) antigen:</label>
					<select className="form-control" value={this.props.donA2} onChange={this.props.onChangeDonA2}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 1 </option>
						<option value="2">2: 2 </option>
						<option value="3">3: 3 </option>
						<option value="9">9: 9 </option>
						<option value="10">10: 10 </option>
						<option value="11">11: 11 </option>
						<option value="19">19: 19 </option>
						<option value="23">23: 23 </option>
						<option value="24">24: 24 </option>
						<option value="25">25: 25 </option>
						<option value="26">26: 26 </option>
						<option value="28">28: 28 </option>
						<option value="29">29: 29 </option>
						<option value="30">30: 30 </option>
						<option value="31">31: 31 </option>
						<option value="32">32: 32 </option>
						<option value="33">33: 33 </option>
						<option value="34">34: 34 </option>
						<option value="36">36: 36 </option>
						<option value="43">43: 43 </option>
						<option value="66">66: 66 </option>
						<option value="68">68: 68 </option>
						<option value="69">69: 69 </option>
						<option value="74">74: 74 </option>
						<option value="80">80: 80 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="201">201: 0201 </option>
						<option value="202">202: 0202 </option>
						<option value="203">203: 0203 </option>
						<option value="205">205: 0205 </option>
						<option value="206">206: 0206 </option>
						<option value="210">210: 210 </option>
						<option value="1101">1101: 1101 </option>
						<option value="1102">1102: 1102 </option>
						<option value="2402">2402: 2402 </option>
						<option value="2403">2403: 2403 </option>
						<option value="2901">2901: 2901 </option>
						<option value="2902">2902: 2902 </option>
						<option value="3001">3001: 3001 </option>
						<option value="3002">3002: 3002 </option>
						<option value="3301">3301: 3301 </option>
						<option value="3303">3303: 3303 </option>
						<option value="3401">3401: 3401 </option>
						<option value="3402">3402: 3402 </option>
						<option value="6601">6601: 6601 </option>
						<option value="6602">6602: 6602 </option>
						<option value="6801">6801: 6801 </option>
						<option value="6802">6802: 6802 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ABNORM CONGEN</label>
					<label className="text-secondary" >Structural Abnormalities //Congenital::</label>
					<input className="form-control" type="text" value={this.props.donAbnormCongen} onChange={this.props.onChangeDonAbnormCongen} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ABNORM LVH</label>
					<label className="text-secondary" >Structural Abnormalities //LVH::</label>
					<input className="form-control" type="text" value={this.props.donAbnormLvh} onChange={this.props.onChangeDonAbnormLvh} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ABNORM VALVES</label>
					<label className="text-secondary" >Structural Abnormalities //Valves::</label>
					<input className="form-control" type="text" value={this.props.donAbnormValves} onChange={this.props.onChangeDonAbnormValves} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ABO</label>
					<label className="text-secondary" >Donor/s Blood Type:</label>
					<select className="form-control" value={this.props.donAbo} onChange={this.props.onChangeDonAbo}>
						<option value="" hidden disabled selected/>
						<option value="A">A: A</option>
						<option value="A1">A1: A1</option>
						<option value="A1B">A1B: A1B</option>
						<option value="A2">A2: A2</option>
						<option value="A2B">A2B: A2B</option>
						<option value="AB">AB: AB</option>
						<option value="B">B: B</option>
						<option value="O">O: O</option>
						<option value="Z">Z: Z (In Utero Only)</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON AGE</label>
					<label className="text-secondary" >Calculated Donor Age in Years at Organ Recovery or Referral Date:</label>
					<input className="form-control" type="number" value={this.props.donAge} onChange={this.props.onChangeDonAge} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON AGE IN MONTHS</label>
					<label className="text-secondary" >Donor/s Age in Months:</label>
					<input className="form-control" type="number" value={this.props.donAgeInMonths} onChange={this.props.onChangeDonAgeInMonths} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ALLOC ECD CVA</label>
					<label className="text-secondary" >CVA cause of death:</label>
					<input className="form-control" type="text" value={this.props.donAllocEcdCva} onChange={this.props.onChangeDonAllocEcdCva} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ALLOC ECD HYPERTEN</label>
					<label className="text-secondary" >history of hypertension:</label>
					<input className="form-control" type="text" value={this.props.donAllocEcdHyperten} onChange={this.props.onChangeDonAllocEcdHyperten} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ALLOC ECD SERUM CREAT</label>
					<label className="text-secondary" >most recent serum_creat:</label>
					<input className="form-control" type="number" value={this.props.donAllocEcdSerumCreat} onChange={this.props.onChangeDonAllocEcdSerumCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ALLOC ECD SERUM CREAT DT</label>
					<label className="text-secondary" >most recent serum_creat date:</label>
					<input className="form-control" type="datetime-local" value={this.props.donAllocEcdSerumCreatDt} onChange={this.props.onChangeDonAllocEcdSerumCreatDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ALLOC REMAIN LI SEG</label>
					<label className="text-secondary" >Allocate Remaining Liver Segment?:</label>
					<input className="form-control" type="text" value={this.props.donAllocRemainLiSeg} onChange={this.props.onChangeDonAllocRemainLiSeg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI CMV</label>
					<label className="text-secondary" >Anti-CMV:</label>
					<select className="form-control" value={this.props.donAntiCmv} onChange={this.props.onChangeDonAntiCmv}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI CONVULS</label>
					<label className="text-secondary" >Meds given Donor: Anticonvulsants:</label>
					<input className="form-control" type="text" value={this.props.donAntiConvuls} onChange={this.props.onChangeDonAntiConvuls} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI HBC</label>
					<label className="text-secondary" >Anti-HBC:</label>
					<select className="form-control" value={this.props.donAntiHbc} onChange={this.props.onChangeDonAntiHbc}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI HCV</label>
					<label className="text-secondary" >Anti-HCV:</label>
					<select className="form-control" value={this.props.donAntiHcv} onChange={this.props.onChangeDonAntiHcv}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI HIV</label>
					<label className="text-secondary" >Anti-HIV I/II::</label>
					<select className="form-control" value={this.props.donAntiHiv} onChange={this.props.onChangeDonAntiHiv}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI HTLV</label>
					<label className="text-secondary" >Anti-HTLV I/II::</label>
					<select className="form-control" value={this.props.donAntiHtlv} onChange={this.props.onChangeDonAntiHtlv}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ANTI HYPERTEN</label>
					<label className="text-secondary" >Meds given Donor: Antihypertensives:</label>
					<input className="form-control" type="text" value={this.props.donAntiHyperten} onChange={this.props.onChangeDonAntiHyperten} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON ARGININE</label>
					<label className="text-secondary" >Arginine Vasopressin::</label>
					<input className="form-control" type="text" value={this.props.donArginine} onChange={this.props.onChangeDonArginine} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON B1</label>
					<label className="text-secondary" >Donor/s HLA - B (1) antigen:</label>
					<select className="form-control" value={this.props.donB1} onChange={this.props.onChangeDonB1}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="5">5: 5 </option>
						<option value="7">7: 7 </option>
						<option value="8">8: 8 </option>
						<option value="12">12: 12 </option>
						<option value="13">13: 13 </option>
						<option value="14">14: 14 </option>
						<option value="15">15: 15 </option>
						<option value="16">16: 16 </option>
						<option value="17">17: 17 </option>
						<option value="18">18: 18 </option>
						<option value="21">21: 21 </option>
						<option value="22">22: 22 </option>
						<option value="27">27: 27 </option>
						<option value="35">35: 35 </option>
						<option value="37">37: 37 </option>
						<option value="38">38: 38 </option>
						<option value="39">39: 39 </option>
						<option value="40">40: 40 </option>
						<option value="41">41: 41 </option>
						<option value="42">42: 42 </option>
						<option value="44">44: 44 </option>
						<option value="45">45: 45 </option>
						<option value="46">46: 46 </option>
						<option value="47">47: 47 </option>
						<option value="48">48: 48 </option>
						<option value="49">49: 49 </option>
						<option value="50">50: 50 </option>
						<option value="51">51: 51 </option>
						<option value="52">52: 52 </option>
						<option value="53">53: 53 </option>
						<option value="54">54: 54 </option>
						<option value="55">55: 55 </option>
						<option value="56">56: 56 </option>
						<option value="57">57: 57 </option>
						<option value="58">58: 58 </option>
						<option value="59">59: 59 </option>
						<option value="60">60: 60 </option>
						<option value="61">61: 61 </option>
						<option value="62">62: 62 </option>
						<option value="63">63: 63 </option>
						<option value="64">64: 64 </option>
						<option value="65">65: 65 </option>
						<option value="67">67: 67 </option>
						<option value="70">70: 70 </option>
						<option value="71">71: 71 </option>
						<option value="72">72: 72 </option>
						<option value="73">73: 73 </option>
						<option value="75">75: 75 </option>
						<option value="76">76: 76 </option>
						<option value="77">77: 77 </option>
						<option value="78">78: 78 </option>
						<option value="81">81: 81 </option>
						<option value="82">82: 82 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="702">702: 0702 </option>
						<option value="703">703: 703 </option>
						<option value="801">801: 0801 </option>
						<option value="802">802: 0802 </option>
						<option value="803">803: 0803 </option>
						<option value="804">804: 0804 </option>
						<option value="1301">1301: 1301 </option>
						<option value="1302">1302: 1302 </option>
						<option value="1304">1304: 1304 </option>
						<option value="1401">1401: 1401 </option>
						<option value="1402">1402: 1402 </option>
						<option value="1501">1501: 1501 </option>
						<option value="1502">1502: 1502 </option>
						<option value="1503">1503: 1503 </option>
						<option value="1510">1510: 1510 </option>
						<option value="1511">1511: 1511 </option>
						<option value="1512">1512: 1512 </option>
						<option value="1513">1513: 1513 </option>
						<option value="1516">1516: 1516 </option>
						<option value="1517">1517: 1517 </option>
						<option value="1522">1522: 1522 </option>
						<option value="2705">2705: 2705 </option>
						<option value="2708">2708: 2708 </option>
						<option value="3901">3901: 3901 </option>
						<option value="3902">3902: 3902 </option>
						<option value="3905">3905: 3905 </option>
						<option value="3913">3913: 3913 </option>
						<option value="4001">4001: 4001 </option>
						<option value="4002">4002: 4002 </option>
						<option value="4005">4005: 4005 </option>
						<option value="4006">4006: 4006 </option>
						<option value="4402">4402: 4402 </option>
						<option value="4403">4403: 4403 </option>
						<option value="4415">4415: 4415 </option>
						<option value="5101">5101: 5101 </option>
						<option value="5102">5102: 5102 </option>
						<option value="5103">5103: 5103 </option>
						<option value="5701">5701: 5701 </option>
						<option value="5703">5703: 5703 </option>
						<option value="7801">7801: 7801 </option>
						<option value="8201">8201: 8201 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON B2</label>
					<label className="text-secondary" >Donor/s HLA - B (2) antigen:</label>
					<select className="form-control" value={this.props.donB2} onChange={this.props.onChangeDonB2}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="5">5: 5 </option>
						<option value="7">7: 7 </option>
						<option value="8">8: 8 </option>
						<option value="12">12: 12 </option>
						<option value="13">13: 13 </option>
						<option value="14">14: 14 </option>
						<option value="15">15: 15 </option>
						<option value="16">16: 16 </option>
						<option value="17">17: 17 </option>
						<option value="18">18: 18 </option>
						<option value="21">21: 21 </option>
						<option value="22">22: 22 </option>
						<option value="27">27: 27 </option>
						<option value="35">35: 35 </option>
						<option value="37">37: 37 </option>
						<option value="38">38: 38 </option>
						<option value="39">39: 39 </option>
						<option value="40">40: 40 </option>
						<option value="41">41: 41 </option>
						<option value="42">42: 42 </option>
						<option value="44">44: 44 </option>
						<option value="45">45: 45 </option>
						<option value="46">46: 46 </option>
						<option value="47">47: 47 </option>
						<option value="48">48: 48 </option>
						<option value="49">49: 49 </option>
						<option value="50">50: 50 </option>
						<option value="51">51: 51 </option>
						<option value="52">52: 52 </option>
						<option value="53">53: 53 </option>
						<option value="54">54: 54 </option>
						<option value="55">55: 55 </option>
						<option value="56">56: 56 </option>
						<option value="57">57: 57 </option>
						<option value="58">58: 58 </option>
						<option value="59">59: 59 </option>
						<option value="60">60: 60 </option>
						<option value="61">61: 61 </option>
						<option value="62">62: 62 </option>
						<option value="63">63: 63 </option>
						<option value="64">64: 64 </option>
						<option value="65">65: 65 </option>
						<option value="67">67: 67 </option>
						<option value="70">70: 70 </option>
						<option value="71">71: 71 </option>
						<option value="72">72: 72 </option>
						<option value="73">73: 73 </option>
						<option value="75">75: 75 </option>
						<option value="76">76: 76 </option>
						<option value="77">77: 77 </option>
						<option value="78">78: 78 </option>
						<option value="81">81: 81 </option>
						<option value="82">82: 82 </option>
						<option value="97">97: Unknown </option>
						<option value="98">98: No second antigen detected </option>
						<option value="99">99: Not Tested </option>
						<option value="702">702: 0702 </option>
						<option value="703">703: 703 </option>
						<option value="801">801: 0801 </option>
						<option value="802">802: 0802 </option>
						<option value="803">803: 0803 </option>
						<option value="804">804: 0804 </option>
						<option value="1301">1301: 1301 </option>
						<option value="1302">1302: 1302 </option>
						<option value="1304">1304: 1304 </option>
						<option value="1401">1401: 1401 </option>
						<option value="1402">1402: 1402 </option>
						<option value="1501">1501: 1501 </option>
						<option value="1502">1502: 1502 </option>
						<option value="1503">1503: 1503 </option>
						<option value="1510">1510: 1510 </option>
						<option value="1511">1511: 1511 </option>
						<option value="1512">1512: 1512 </option>
						<option value="1513">1513: 1513 </option>
						<option value="1516">1516: 1516 </option>
						<option value="1517">1517: 1517 </option>
						<option value="1522">1522: 1522 </option>
						<option value="2705">2705: 2705 </option>
						<option value="2708">2708: 2708 </option>
						<option value="3901">3901: 3901 </option>
						<option value="3902">3902: 3902 </option>
						<option value="3905">3905: 3905 </option>
						<option value="3913">3913: 3913 </option>
						<option value="4001">4001: 4001 </option>
						<option value="4002">4002: 4002 </option>
						<option value="4005">4005: 4005 </option>
						<option value="4006">4006: 4006 </option>
						<option value="4402">4402: 4402 </option>
						<option value="4403">4403: 4403 </option>
						<option value="4415">4415: 4415 </option>
						<option value="5101">5101: 5101 </option>
						<option value="5102">5102: 5102 </option>
						<option value="5103">5103: 5103 </option>
						<option value="5701">5701: 5701 </option>
						<option value="5703">5703: 5703 </option>
						<option value="7801">7801: 7801 </option>
						<option value="8201">8201: 8201 </option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donorId: select.makeSelectDonorId(),
	donA1: select.makeSelectDonA1(),
	donA2: select.makeSelectDonA2(),
	donAbnormCongen: select.makeSelectDonAbnormCongen(),
	donAbnormLvh: select.makeSelectDonAbnormLvh(),
	donAbnormValves: select.makeSelectDonAbnormValves(),
	donAbo: select.makeSelectDonAbo(),
	donAge: select.makeSelectDonAge(),
	donAgeInMonths: select.makeSelectDonAgeInMonths(),
	donAllocEcdCva: select.makeSelectDonAllocEcdCva(),
	donAllocEcdHyperten: select.makeSelectDonAllocEcdHyperten(),
	donAllocEcdSerumCreat: select.makeSelectDonAllocEcdSerumCreat(),
	donAllocEcdSerumCreatDt: select.makeSelectDonAllocEcdSerumCreatDt(),
	donAllocRemainLiSeg: select.makeSelectDonAllocRemainLiSeg(),
	donAntiCmv: select.makeSelectDonAntiCmv(),
	donAntiConvuls: select.makeSelectDonAntiConvuls(),
	donAntiHbc: select.makeSelectDonAntiHbc(),
	donAntiHcv: select.makeSelectDonAntiHcv(),
	donAntiHiv: select.makeSelectDonAntiHiv(),
	donAntiHtlv: select.makeSelectDonAntiHtlv(),
	donAntiHyperten: select.makeSelectDonAntiHyperten(),
	donArginine: select.makeSelectDonArginine(),
	donB1: select.makeSelectDonB1(),
	donB2: select.makeSelectDonB2(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonorId: evt => dispatch(action.changeDonorId(evt.target.value)),
		onChangeDonA1: evt => dispatch(action.changeDonA1(evt.target.value)),
		onChangeDonA2: evt => dispatch(action.changeDonA2(evt.target.value)),
		onChangeDonAbnormCongen: evt => dispatch(action.changeDonAbnormCongen(evt.target.value)),
		onChangeDonAbnormLvh: evt => dispatch(action.changeDonAbnormLvh(evt.target.value)),
		onChangeDonAbnormValves: evt => dispatch(action.changeDonAbnormValves(evt.target.value)),
		onChangeDonAbo: evt => dispatch(action.changeDonAbo(evt.target.value)),
		onChangeDonAge: evt => dispatch(action.changeDonAge(evt.target.value)),
		onChangeDonAgeInMonths: evt => dispatch(action.changeDonAgeInMonths(evt.target.value)),
		onChangeDonAllocEcdCva: evt => dispatch(action.changeDonAllocEcdCva(evt.target.value)),
		onChangeDonAllocEcdHyperten: evt => dispatch(action.changeDonAllocEcdHyperten(evt.target.value)),
		onChangeDonAllocEcdSerumCreat: evt => dispatch(action.changeDonAllocEcdSerumCreat(evt.target.value)),
		onChangeDonAllocEcdSerumCreatDt: evt => dispatch(action.changeDonAllocEcdSerumCreatDt(evt.target.value)),
		onChangeDonAllocRemainLiSeg: evt => dispatch(action.changeDonAllocRemainLiSeg(evt.target.value)),
		onChangeDonAntiCmv: evt => dispatch(action.changeDonAntiCmv(evt.target.value)),
		onChangeDonAntiConvuls: evt => dispatch(action.changeDonAntiConvuls(evt.target.value)),
		onChangeDonAntiHbc: evt => dispatch(action.changeDonAntiHbc(evt.target.value)),
		onChangeDonAntiHcv: evt => dispatch(action.changeDonAntiHcv(evt.target.value)),
		onChangeDonAntiHiv: evt => dispatch(action.changeDonAntiHiv(evt.target.value)),
		onChangeDonAntiHtlv: evt => dispatch(action.changeDonAntiHtlv(evt.target.value)),
		onChangeDonAntiHyperten: evt => dispatch(action.changeDonAntiHyperten(evt.target.value)),
		onChangeDonArginine: evt => dispatch(action.changeDonArginine(evt.target.value)),
		onChangeDonB1: evt => dispatch(action.changeDonB1(evt.target.value)),
		onChangeDonB2: evt => dispatch(action.changeDonB2(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm1 );
