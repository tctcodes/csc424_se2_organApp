import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm7 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ADMISSION DT</label>
					<label className="text-secondary" >Date of Admission to Tx Center:</label>
					<input className="form-control" type="datetime-local" value={this.props.recAdmissionDt} onChange={this.props.onChangeRecAdmissionDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC AGE AT TX</label>
					<label className="text-secondary" >Age at TX:</label>
					<select className="form-control" value={this.props.recAgeAtTx} onChange={this.props.onChangeRecAgeAtTx}>
						<option value="" hidden disabled />
						<option value="0">{"<"}1</option>
						<option value="1">5-Jan</option>
						<option value="6">11-Jun</option>
						<option value="12">17-Dec</option>
						<option value="18">18-34</option>
						<option value="35">35-49</option>
						<option value="50">50-64</option>
						<option value="65">65+</option>
						<option value="99">Unkown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC AGE IN MONTHS AT TX</label>
					<label className="text-secondary" >Calculated Recipient Age in Months at TX:</label>
					<input className="form-control" type="number" value={this.props.recAgeInMonthsAtTx} onChange={this.props.onChangeRecAgeInMonthsAtTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY</label>
					<label className="text-secondary" >Biological or Anti-viral Therapy::</label>
					<select className="form-control" value={this.props.recAntivrlTherapy} onChange={this.props.onChangeRecAntivrlTherapy}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY</label>
					<label className="text-secondary" >If Anti-viral Therapies, check all that apply:</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTy} onChange={this.props.onChangeRecAntivrlTherapyTy}>
						<option value="" hidden disabled />
						<option value="">Missing </option>
						<option value="1">1: Acyclovir (Zovirax) </option>
						<option value="2">2: Cytogam (CMV) </option>
						<option value="4">4: Gamimune </option>
						<option value="8">8: Gammagard </option>
						<option value="16">16: Ganciclovir (Cytovene) </option>
						<option value="32">32: Valgancyclovir (Valcyte) </option>
						<option value="64">64: HBIG (Hepatitis B Immune Globulin) </option>
						<option value="128">128: Flu Vaccine (Influenza Virus) </option>
						<option value="256">256: Lamivudine (Epivir) (for treatment of Hepatitis B) </option>
						<option value="512">512: Other, Specify </option>
						<option value="1024">1024: Valacyclovir (Valtrex) </option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY ACYCLOVIR</label>
					<label className="text-secondary" >Anti-viral Therapy - Acyclovir (Zovirax) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyAcyclovir} onChange={this.props.onChangeRecAntivrlTherapyTyAcyclovir}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY CYTOGAM</label>
					<label className="text-secondary" >Anti-viral Therapy - Cytogam (CMV) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyCytogam} onChange={this.props.onChangeRecAntivrlTherapyTyCytogam}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY CYTOVENE</label>
					<label className="text-secondary" >Anti-viral Therapy - Ganciclovir (Cytovene) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyCytovene} onChange={this.props.onChangeRecAntivrlTherapyTyCytovene}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY EPIVIR</label>
					<label className="text-secondary" >Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyEpivir} onChange={this.props.onChangeRecAntivrlTherapyTyEpivir}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY FLU VAC</label>
					<label className="text-secondary" >Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyFluVac} onChange={this.props.onChangeRecAntivrlTherapyTyFluVac}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY GAMIMUNE</label>
					<label className="text-secondary" >Anti-viral Therapy - Gamimune (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyGamimune} onChange={this.props.onChangeRecAntivrlTherapyTyGamimune}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY GAMMAGARD</label>
					<label className="text-secondary" >Anti-viral Therapy - Gammagard (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyGammagard} onChange={this.props.onChangeRecAntivrlTherapyTyGammagard}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY HBIG</label>
					<label className="text-secondary" >Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyHbig} onChange={this.props.onChangeRecAntivrlTherapyTyHbig}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY OTHER</label>
					<label className="text-secondary" >Anti-viral Therapy - Other, Specify (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyOther} onChange={this.props.onChangeRecAntivrlTherapyTyOther}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY VALCYTE</label>
					<label className="text-secondary" >Anti-viral Therapy - Valgancyclovir (Valcyte) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyValcyte} onChange={this.props.onChangeRecAntivrlTherapyTyValcyte}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ANTIVRL THERAPY TY VALTREX</label>
					<label className="text-secondary" >Anti-viral Therapy - Valacyclovir (Valtrex) (11):</label>
					<select className="form-control" value={this.props.recAntivrlTherapyTyValtrex} onChange={this.props.onChangeRecAntivrlTherapyTyValtrex}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ARTIFICIAL LI</label>
					<label className="text-secondary" >Artificial Liver:</label>
					<select className="form-control" value={this.props.recArtificialLi} onChange={this.props.onChangeRecArtificialLi}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC ASCITES</label>
					<label className="text-secondary" >Risk Factors: Ascites:</label>
					<select className="form-control" value={this.props.recAscites} onChange={this.props.onChangeRecAscites}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC A MM EQUIV CUR</label>
					<label className="text-secondary" >Num of A mismatches - current equivalent match:</label>
					<input className="form-control" type="number" value={this.props.recAMmEquivCur} onChange={this.props.onChangeRecAMmEquivCur} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC A MM EQUIV TX</label>
					<label className="text-secondary" >Num of A mismatches - equivalent match @ tx:</label>
					<input className="form-control" type="number" value={this.props.recAMmEquivTx} onChange={this.props.onChangeRecAMmEquivTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC B1</label>
					<label className="text-secondary" >Recipient/s HLA - B (1) antigen:</label>
					<select className="form-control" value={this.props.recB1} onChange={this.props.onChangeRecB1}>
						<option value="" hidden disabled />
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
					<label className="font-weight-bold" >REC B2</label>
					<label className="text-secondary" >Recipient/s HLA - B (2) antigen:</label>
					<select className="form-control" value={this.props.recB2} onChange={this.props.onChangeRecB2}>
						<option value="" hidden disabled />
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
					<label className="font-weight-bold" >REC BACTERIA PERIT</label>
					<label className="text-secondary" >Risk Factors: Spontaneous Bacterial Peritonitis:</label>
					<select className="form-control" value={this.props.recBacteriaPerit} onChange={this.props.onChangeRecBacteriaPerit}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC BMI</label>
					<label className="text-secondary" >BMI::</label>
					<input className="form-control" type="number" value={this.props.recBmi} onChange={this.props.onChangeRecBmi} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	recAdmissionDt: select.makeSelectRecAdmissionDt(),
	recAgeAtTx: select.makeSelectRecAgeAtTx(),
	recAgeInMonthsAtTx: select.makeSelectRecAgeInMonthsAtTx(),
	recAntivrlTherapy: select.makeSelectRecAntivrlTherapy(),
	recAntivrlTherapyTy: select.makeSelectRecAntivrlTherapyTy(),
	recAntivrlTherapyTyAcyclovir: select.makeSelectRecAntivrlTherapyTyAcyclovir(),
	recAntivrlTherapyTyCytogam: select.makeSelectRecAntivrlTherapyTyCytogam(),
	recAntivrlTherapyTyCytovene: select.makeSelectRecAntivrlTherapyTyCytovene(),
	recAntivrlTherapyTyEpivir: select.makeSelectRecAntivrlTherapyTyEpivir(),
	recAntivrlTherapyTyFluVac: select.makeSelectRecAntivrlTherapyTyFluVac(),
	recAntivrlTherapyTyGamimune: select.makeSelectRecAntivrlTherapyTyGamimune(),
	recAntivrlTherapyTyGammagard: select.makeSelectRecAntivrlTherapyTyGammagard(),
	recAntivrlTherapyTyHbig: select.makeSelectRecAntivrlTherapyTyHbig(),
	recAntivrlTherapyTyOther: select.makeSelectRecAntivrlTherapyTyOther(),
	recAntivrlTherapyTyValcyte: select.makeSelectRecAntivrlTherapyTyValcyte(),
	recAntivrlTherapyTyValtrex: select.makeSelectRecAntivrlTherapyTyValtrex(),
	recArtificialLi: select.makeSelectRecArtificialLi(),
	recAscites: select.makeSelectRecAscites(),
	recAMmEquivCur: select.makeSelectRecAMmEquivCur(),
	recAMmEquivTx: select.makeSelectRecAMmEquivTx(),
	recB1: select.makeSelectRecB1(),
	recB2: select.makeSelectRecB2(),
	recBacteriaPerit: select.makeSelectRecBacteriaPerit(),
	recBmi: select.makeSelectRecBmi(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeRecAdmissionDt: evt => dispatch(action.changeRecAdmissionDt(evt.target.value)),
		onChangeRecAgeAtTx: evt => dispatch(action.changeRecAgeAtTx(evt.target.value)),
		onChangeRecAgeInMonthsAtTx: evt => dispatch(action.changeRecAgeInMonthsAtTx(evt.target.value)),
		onChangeRecAntivrlTherapy: evt => dispatch(action.changeRecAntivrlTherapy(evt.target.value)),
		onChangeRecAntivrlTherapyTy: evt => dispatch(action.changeRecAntivrlTherapyTy(evt.target.value)),
		onChangeRecAntivrlTherapyTyAcyclovir: evt => dispatch(action.changeRecAntivrlTherapyTyAcyclovir(evt.target.value)),
		onChangeRecAntivrlTherapyTyCytogam: evt => dispatch(action.changeRecAntivrlTherapyTyCytogam(evt.target.value)),
		onChangeRecAntivrlTherapyTyCytovene: evt => dispatch(action.changeRecAntivrlTherapyTyCytovene(evt.target.value)),
		onChangeRecAntivrlTherapyTyEpivir: evt => dispatch(action.changeRecAntivrlTherapyTyEpivir(evt.target.value)),
		onChangeRecAntivrlTherapyTyFluVac: evt => dispatch(action.changeRecAntivrlTherapyTyFluVac(evt.target.value)),
		onChangeRecAntivrlTherapyTyGamimune: evt => dispatch(action.changeRecAntivrlTherapyTyGamimune(evt.target.value)),
		onChangeRecAntivrlTherapyTyGammagard: evt => dispatch(action.changeRecAntivrlTherapyTyGammagard(evt.target.value)),
		onChangeRecAntivrlTherapyTyHbig: evt => dispatch(action.changeRecAntivrlTherapyTyHbig(evt.target.value)),
		onChangeRecAntivrlTherapyTyOther: evt => dispatch(action.changeRecAntivrlTherapyTyOther(evt.target.value)),
		onChangeRecAntivrlTherapyTyValcyte: evt => dispatch(action.changeRecAntivrlTherapyTyValcyte(evt.target.value)),
		onChangeRecAntivrlTherapyTyValtrex: evt => dispatch(action.changeRecAntivrlTherapyTyValtrex(evt.target.value)),
		onChangeRecArtificialLi: evt => dispatch(action.changeRecArtificialLi(evt.target.value)),
		onChangeRecAscites: evt => dispatch(action.changeRecAscites(evt.target.value)),
		onChangeRecAMmEquivCur: evt => dispatch(action.changeRecAMmEquivCur(evt.target.value)),
		onChangeRecAMmEquivTx: evt => dispatch(action.changeRecAMmEquivTx(evt.target.value)),
		onChangeRecB1: evt => dispatch(action.changeRecB1(evt.target.value)),
		onChangeRecB2: evt => dispatch(action.changeRecB2(evt.target.value)),
		onChangeRecBacteriaPerit: evt => dispatch(action.changeRecBacteriaPerit(evt.target.value)),
		onChangeRecBmi: evt => dispatch(action.changeRecBmi(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm7 );
