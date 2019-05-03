import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm4 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
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
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CAD DON COD</label>
					<label className="text-secondary" >Donor/s Cause of Death:</label>
					<select className="form-control" value={this.props.donCadDonCod} onChange={this.props.onChangeDonCadDonCod}>
						<option value="" hidden disabled selected/>
						<option value="1">1: ANOXIA </option>
						<option value="2">2: CEREBROVASCULAR/STROKE </option>
						<option value="3">3: HEAD TRAUMA </option>
						<option value="4">4: CNS TUMOR </option>
						<option value="998">998: UNKNOWN </option>
						<option value="999">999: OTHER SPECIFY </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CARDIAC ARREST AFTER DEATH</label>
					<label className="text-secondary" >Cardiac Arr. Since Event that led to Decl of Death:</label>
					<input className="form-control" type="text" value={this.props.donCardiacArrestAfterDeath} onChange={this.props.onChangeDonCardiacArrestAfterDeath} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CITIZENSHIP</label>
					<label className="text-secondary" >Donor/s Citizenship:</label>
					<select className="form-control" value={this.props.donCitizenship} onChange={this.props.onChangeDonCitizenship}>
						<option value="" hidden disabled selected/>
						<option value="1">1: US Citizen </option>
						<option value="2">2: Resident Alien </option>
						<option value="3">3: Non-Resident Alien, Specify Country </option>
						<option value="4">4: Non-US Citizen/US Resident </option>
						<option value="5">5: Non-US Citizen/Non-US Resident </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CMV IGG</label>
					<label className="text-secondary" >CMV IgG:</label>
					<select className="form-control" value={this.props.donCmvIgg} onChange={this.props.onChangeDonCmvIgg}>
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
					<label className="font-weight-bold" >DON COD DON STROKE</label>
					<label className="text-secondary" >Donor cause of death is stroke (1= yes, 0= no):</label>
					<input className="form-control" type="text" value={this.props.donCodDonStroke} onChange={this.props.onChangeDonCodDonStroke} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT CIGARETTE</label>
					<label className="text-secondary" >Donor/s Continued Use in Last 6 Months:</label>
					<input className="form-control" type="text" value={this.props.donContCigarette} onChange={this.props.onChangeDonContCigarette} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT COCAINE</label>
					<label className="text-secondary" >Cocaine Use Last 6 Months:</label>
					<input className="form-control" type="text" value={this.props.donContCocaine} onChange={this.props.onChangeDonContCocaine} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT IV DRUG</label>
					<label className="text-secondary" >IV Drug Last 6 Months:</label>
					<input className="form-control" type="text" value={this.props.donContIvDrug} onChange={this.props.onChangeDonContIvDrug} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT OTHER DRUG</label>
					<label className="text-secondary" >Other Drug Abuse Last 6 Months:</label>
					<input className="form-control" type="text" value={this.props.donContOtherDrug} onChange={this.props.onChangeDonContOtherDrug} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CREAT</label>
					<label className="text-secondary" >Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donCreat} onChange={this.props.onChangeDonCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DDAVP</label>
					<label className="text-secondary" >Meds given Donor: DDAVP:</label>
					<input className="form-control" type="text" value={this.props.donDdavp} onChange={this.props.onChangeDonDdavp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DEATH CIRCUM</label>
					<label className="text-secondary" >Cirumstances of Death:</label>
					<select className="form-control" value={this.props.donDeathCircum} onChange={this.props.onChangeDonDeathCircum}>
						<option value="" hidden disabled selected/>
						<option value="1">1: MVA </option>
						<option value="2">2: SUICIDE </option>
						<option value="3">3: HOMICIDE </option>
						<option value="4">4: CHILD-ABUSE </option>
						<option value="5">5: NON-MVA </option>
						<option value="6">6: DEATH FROM NATURAL CAUSES </option>
						<option value="997">997: NONE OF THE ABOVE </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DEATH MECH</label>
					<label className="text-secondary" >Mechanism of Death:</label>
					<select className="form-control" value={this.props.donDeathMech} onChange={this.props.onChangeDonDeathMech}>
						<option value="" hidden disabled selected/>
						<option value="1">1: DROWNING </option>
						<option value="2">2: SEIZURE </option>
						<option value="3">3: DRUG INTOXICATION </option>
						<option value="4">4: ASPHYXIATION </option>
						<option value="5">5: CARDIOVASCULAR </option>
						<option value="6">6: ELECTRICAL </option>
						<option value="7">7: GUNSHOT WOUND </option>
						<option value="8">8: STAB </option>
						<option value="9">9: BLUNT INJURY </option>
						<option value="10">10: SIDS </option>
						<option value="11">11: INTRACRANIAL HEMORRHAGE/STROKE </option>
						<option value="12">12: DEATH FROM NATURAL CAUSES </option>
						<option value="995">995: 995-Gunshot/stab wound (Pre-OTIS) </option>
						<option value="997">997: NONE OF THE ABOVE </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DOBUTAMINE</label>
					<label className="text-secondary" >Meds given Donor: Dobutamine:</label>
					<input className="form-control" type="text" value={this.props.donDobutamine} onChange={this.props.onChangeDonDobutamine} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DOPAMINE</label>
					<label className="text-secondary" >Meds given Donor: Dopamine:</label>
					<input className="form-control" type="text" value={this.props.donDopamine} onChange={this.props.onChangeDonDopamine} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DR1</label>
					<label className="text-secondary" >Donor/s HLA - DR (1) antigen:</label>
					<select className="form-control" value={this.props.donDr1} onChange={this.props.onChangeDonDr1}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON DR2</label>
					<label className="text-secondary" >Donor/s HLA - DR (2) antigen:</label>
					<select className="form-control" value={this.props.donDr2} onChange={this.props.onChangeDonDr2}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON ETHNICITY SRTR</label>
					<label className="text-secondary" >SRTR Donor Ethnicity:</label>
					<select className="form-control" value={this.props.donEthnicitySrtr} onChange={this.props.onChangeDonEthnicitySrtr}>
						<option value="" hidden disabled selected/>
						<option value="LATINO">LATINO: Latino</option>
						<option value="NLATIN">NLATIN: Non-Latino or unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON EXPAND DON KI</label>
					<label className="text-secondary" >Meets expanded donor criteria for kidney (1= yes , 0= no):</label>
					<input className="form-control" type="text" value={this.props.donExpandDonKi} onChange={this.props.onChangeDonExpandDonKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON GENDER</label>
					<label className="text-secondary" >Donor/s Gender:</label>
					<input className="form-control" type="text" value={this.props.donGender} onChange={this.props.onChangeDonGender} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON HAPLO TY MATCH</label>
					<label className="text-secondary" >Haplotype Match Between Live Donor & Recipient:</label>
					<select className="form-control" value={this.props.donHaploTyMatch} onChange={this.props.onChangeDonHaploTyMatch}>
						<option value="" hidden disabled selected/>
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
					<label className="font-weight-bold" >DON HGT CM</label>
					<label className="text-secondary" >Donor/s Height in centimeters:</label>
					<input className="form-control" type="number" value={this.props.donHgtCm} onChange={this.props.onChangeDonHgtCm} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donB1: select.makeSelectDonB1(),
	donB2: select.makeSelectDonB2(),
	donCadDonCod: select.makeSelectDonCadDonCod(),
	donCardiacArrestAfterDeath: select.makeSelectDonCardiacArrestAfterDeath(),
	donCitizenship: select.makeSelectDonCitizenship(),
	donCmvIgg: select.makeSelectDonCmvIgg(),
	donCodDonStroke: select.makeSelectDonCodDonStroke(),
	donContCigarette: select.makeSelectDonContCigarette(),
	donContCocaine: select.makeSelectDonContCocaine(),
	donContIvDrug: select.makeSelectDonContIvDrug(),
	donContOtherDrug: select.makeSelectDonContOtherDrug(),
	donCreat: select.makeSelectDonCreat(),
	donDdavp: select.makeSelectDonDdavp(),
	donDeathCircum: select.makeSelectDonDeathCircum(),
	donDeathMech: select.makeSelectDonDeathMech(),
	donDobutamine: select.makeSelectDonDobutamine(),
	donDopamine: select.makeSelectDonDopamine(),
	donDr1: select.makeSelectDonDr1(),
	donDr2: select.makeSelectDonDr2(),
	donEthnicitySrtr: select.makeSelectDonEthnicitySrtr(),
	donExpandDonKi: select.makeSelectDonExpandDonKi(),
	donGender: select.makeSelectDonGender(),
	donHaploTyMatch: select.makeSelectDonHaploTyMatch(),
	donHgtCm: select.makeSelectDonHgtCm(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonB1: evt => dispatch(action.changeDonB1(evt.target.value)),
		onChangeDonB2: evt => dispatch(action.changeDonB2(evt.target.value)),
		onChangeDonCadDonCod: evt => dispatch(action.changeDonCadDonCod(evt.target.value)),
		onChangeDonCardiacArrestAfterDeath: evt => dispatch(action.changeDonCardiacArrestAfterDeath(evt.target.value)),
		onChangeDonCitizenship: evt => dispatch(action.changeDonCitizenship(evt.target.value)),
		onChangeDonCmvIgg: evt => dispatch(action.changeDonCmvIgg(evt.target.value)),
		onChangeDonCodDonStroke: evt => dispatch(action.changeDonCodDonStroke(evt.target.value)),
		onChangeDonContCigarette: evt => dispatch(action.changeDonContCigarette(evt.target.value)),
		onChangeDonContCocaine: evt => dispatch(action.changeDonContCocaine(evt.target.value)),
		onChangeDonContIvDrug: evt => dispatch(action.changeDonContIvDrug(evt.target.value)),
		onChangeDonContOtherDrug: evt => dispatch(action.changeDonContOtherDrug(evt.target.value)),
		onChangeDonCreat: evt => dispatch(action.changeDonCreat(evt.target.value)),
		onChangeDonDdavp: evt => dispatch(action.changeDonDdavp(evt.target.value)),
		onChangeDonDeathCircum: evt => dispatch(action.changeDonDeathCircum(evt.target.value)),
		onChangeDonDeathMech: evt => dispatch(action.changeDonDeathMech(evt.target.value)),
		onChangeDonDobutamine: evt => dispatch(action.changeDonDobutamine(evt.target.value)),
		onChangeDonDopamine: evt => dispatch(action.changeDonDopamine(evt.target.value)),
		onChangeDonDr1: evt => dispatch(action.changeDonDr1(evt.target.value)),
		onChangeDonDr2: evt => dispatch(action.changeDonDr2(evt.target.value)),
		onChangeDonEthnicitySrtr: evt => dispatch(action.changeDonEthnicitySrtr(evt.target.value)),
		onChangeDonExpandDonKi: evt => dispatch(action.changeDonExpandDonKi(evt.target.value)),
		onChangeDonGender: evt => dispatch(action.changeDonGender(evt.target.value)),
		onChangeDonHaploTyMatch: evt => dispatch(action.changeDonHaploTyMatch(evt.target.value)),
		onChangeDonHgtCm: evt => dispatch(action.changeDonHgtCm(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm4 );
