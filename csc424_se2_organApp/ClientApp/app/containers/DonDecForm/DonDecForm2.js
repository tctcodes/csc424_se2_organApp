import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm2 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON BIOPSY DGN</label>
					<label className="text-secondary" >Biopsy:</label>
					<select className="form-control" value={this.props.donBiopsyDgn} onChange={this.props.onChangeDonBiopsyDgn}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: YES, MYOCARDITIS </option>
						<option value="3">3: YES, NEGATIVE BIOPSY RESULT </option>
						<option value="4">4: YES, OTHER DIAGNOSIS SPECIFY </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON BRAIN DEATH TM</label>
					<label className="text-secondary" >Time of pronouncement of death: (Complete for brain dead and DCD donors):</label>
					<input className="form-control" type="text" value={this.props.donBrainDeathTm} onChange={this.props.onChangeDonBrainDeathTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON BUN</label>
					<label className="text-secondary" >BUN:</label>
					<input className="form-control" type="number" value={this.props.donBun} onChange={this.props.onChangeDonBun} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON BW4</label>
					<label className="text-secondary" >Donor/s HLA - Bw4 locus:</label>
					<select className="form-control" value={this.props.donBw4} onChange={this.props.onChangeDonBw4}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="95">95: Positive </option>
						<option value="96">96: Negative </option>
						<option value="98">98: Confirmed Blank </option>
						<option value="99">99: Not Tested </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON BW6</label>
					<label className="text-secondary" >Donor/s HLA - Bw6 locus:</label>
					<select className="form-control" value={this.props.donBw6} onChange={this.props.onChangeDonBw6}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="95">95: Positive </option>
						<option value="96">96: Negative </option>
						<option value="98">98: Confirmed Blank </option>
						<option value="99">99: Not Tested </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON C1</label>
					<label className="text-secondary" >Donor/s HLA - Cw (1) locus:</label>
					<select className="form-control" value={this.props.donC1} onChange={this.props.onChangeDonC1}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 01 </option>
						<option value="2">2: 02 </option>
						<option value="3">3: 03 </option>
						<option value="4">4: 04 </option>
						<option value="5">5: 05 </option>
						<option value="6">6: 06 </option>
						<option value="7">7: 07 </option>
						<option value="8">8: 08 </option>
						<option value="9">9: 09 </option>
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
						<option value="100">100: No antigen detected </option>
						<option value="701">701: 0701 </option>
						<option value="702">702: 0702 </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON C2</label>
					<label className="text-secondary" >Donor/s HLA - Cw (2) locus:</label>
					<select className="form-control" value={this.props.donC2} onChange={this.props.onChangeDonC2}>
						<option value="" hidden disabled selected/>
						<option value="0">0: 0 </option>
						<option value="1">1: 01 </option>
						<option value="2">2: 02 </option>
						<option value="3">3: 03 </option>
						<option value="4">4: 04 </option>
						<option value="5">5: 05 </option>
						<option value="6">6: 06 </option>
						<option value="7">7: 07 </option>
						<option value="8">8: 08 </option>
						<option value="9">9: 09 </option>
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
						<option value="100">100: No antigen detected </option>
						<option value="701">701: 0701 </option>
						<option value="702">702: 0702 </option>
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
					<label className="font-weight-bold" >DON CANCER FREE INTERVAL</label>
					<label className="text-secondary" >Cancer Free Interval:</label>
					<input className="form-control" type="number" value={this.props.donCancerFreeInterval} onChange={this.props.onChangeDonCancerFreeInterval} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CANCER OTHER OSTXT</label>
					<label className="text-secondary" >History of Cancer/Specify:</label>
					<input className="form-control" as="textarea" rows="3" maxLength="50" value={this.props.donCancerOtherOstxt} onChange={this.props.onChangeDonCancerOtherOstxt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CARDIAC ARREST AFTER DEATH</label>
					<label className="text-secondary" >Cardiac Arr. Since Event that led to Decl of Death:</label>
					<select className="form-control" value={this.props.donCardiacArrestAfterDeath} onChange={this.props.onChangeDonCardiacArrestAfterDeath}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CHAGAS NAT</label>
					<label className="text-secondary" >Donor RNA Nat serology value for Chagas test:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.donChagasNat} onChange={this.props.onChangeDonChagasNat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CHEST XRAY</label>
					<label className="text-secondary" >Chest X-ray::</label>
					<select className="form-control" value={this.props.donChestXray} onChange={this.props.onChangeDonChestXray}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No chest x-ray </option>
						<option value="2">2: Normal </option>
						<option value="3">3: Abnormal-left </option>
						<option value="4">4: Abnormal-right </option>
						<option value="5">5: Abnormal-both </option>
						<option value="998">998: Results Unknown </option>
						<option value="999">999: Unknown if chest x-ray performed </option>
					</select>
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
					<label className="font-weight-bold" >DON CI FINAL</label>
					<label className="text-secondary" >Cardiac Index (final) //Cardiac Index::</label>
					<input className="form-control" type="number" value={this.props.donCiFinal} onChange={this.props.onChangeDonCiFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CI INIT</label>
					<label className="text-secondary" >Cardiac Index (initial) //Cardiac Index: (L/min/sq.m):</label>
					<input className="form-control" type="number" value={this.props.donCiInit} onChange={this.props.onChangeDonCiInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CLAMP DT</label>
					<label className="text-secondary" >Clamp Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.donClampDt} onChange={this.props.onChangeDonClampDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CLAMP TM</label>
					<label className="text-secondary" >Clamp Time:</label>
					<input className="form-control" type="text" value={this.props.donClampTm} onChange={this.props.onChangeDonClampTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CLAMP TM ZONE</label>
					<label className="text-secondary" >Clamp Time Zone:</label>
					<select className="form-control" value={this.props.donClampTmZone} onChange={this.props.onChangeDonClampTmZone}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Eastern </option>
						<option value="2">2: Central </option>
						<option value="3">3: Mountain </option>
						<option value="4">4: Pacific </option>
						<option value="5">5: Alaska </option>
						<option value="6">6: Hawaii </option>
						<option value="7">7: Atlantic </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CLINICAL INFECT</label>
					<label className="text-secondary" >Clinical Infection:</label>
					<select className="form-control" value={this.props.donClinicalInfect} onChange={this.props.onChangeDonClinicalInfect}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON COD DON STROKE</label>
					<label className="text-secondary" >Donor cause of death is stroke (1= yes, 0= no):</label>
					<select className="form-control" value={this.props.donCodDonStroke} onChange={this.props.onChangeDonCodDonStroke}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON COLD ISCH TM ARRIV KI</label>
					<label className="text-secondary" >Cold Ischemic Time upon arrival for Kidney in hours:</label>
					<input className="form-control" type="number" value={this.props.donColdIschTmArrivKi} onChange={this.props.onChangeDonColdIschTmArrivKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT ATTORNEY</label>
					<label className="text-secondary" >Consent Mechanism - Attorney in Fact:</label>
					<select className="form-control" value={this.props.donConsentAttorney} onChange={this.props.onChangeDonConsentAttorney}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT DON CARD</label>
					<label className="text-secondary" >Consent Mechanism - Donor Card:</label>
					<select className="form-control" value={this.props.donConsentDonCard} onChange={this.props.onChangeDonConsentDonCard}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donBiopsyDgn: select.makeSelectDonBiopsyDgn(),
	donBrainDeathTm: select.makeSelectDonBrainDeathTm(),
	donBun: select.makeSelectDonBun(),
	donBw4: select.makeSelectDonBw4(),
	donBw6: select.makeSelectDonBw6(),
	donC1: select.makeSelectDonC1(),
	donC2: select.makeSelectDonC2(),
	donCadDonCod: select.makeSelectDonCadDonCod(),
	donCancerFreeInterval: select.makeSelectDonCancerFreeInterval(),
	donCancerOtherOstxt: select.makeSelectDonCancerOtherOstxt(),
	donCardiacArrestAfterDeath: select.makeSelectDonCardiacArrestAfterDeath(),
	donChagasNat: select.makeSelectDonChagasNat(),
	donChestXray: select.makeSelectDonChestXray(),
	donCitizenship: select.makeSelectDonCitizenship(),
	donCiFinal: select.makeSelectDonCiFinal(),
	donCiInit: select.makeSelectDonCiInit(),
	donClampDt: select.makeSelectDonClampDt(),
	donClampTm: select.makeSelectDonClampTm(),
	donClampTmZone: select.makeSelectDonClampTmZone(),
	donClinicalInfect: select.makeSelectDonClinicalInfect(),
	donCodDonStroke: select.makeSelectDonCodDonStroke(),
	donColdIschTmArrivKi: select.makeSelectDonColdIschTmArrivKi(),
	donConsentAttorney: select.makeSelectDonConsentAttorney(),
	donConsentDonCard: select.makeSelectDonConsentDonCard(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonBiopsyDgn: evt => dispatch(action.changeDonBiopsyDgn(evt.target.value)),
		onChangeDonBrainDeathTm: evt => dispatch(action.changeDonBrainDeathTm(evt.target.value)),
		onChangeDonBun: evt => dispatch(action.changeDonBun(evt.target.value)),
		onChangeDonBw4: evt => dispatch(action.changeDonBw4(evt.target.value)),
		onChangeDonBw6: evt => dispatch(action.changeDonBw6(evt.target.value)),
		onChangeDonC1: evt => dispatch(action.changeDonC1(evt.target.value)),
		onChangeDonC2: evt => dispatch(action.changeDonC2(evt.target.value)),
		onChangeDonCadDonCod: evt => dispatch(action.changeDonCadDonCod(evt.target.value)),
		onChangeDonCancerFreeInterval: evt => dispatch(action.changeDonCancerFreeInterval(evt.target.value)),
		onChangeDonCancerOtherOstxt: evt => dispatch(action.changeDonCancerOtherOstxt(evt.target.value)),
		onChangeDonCardiacArrestAfterDeath: evt => dispatch(action.changeDonCardiacArrestAfterDeath(evt.target.value)),
		onChangeDonChagasNat: evt => dispatch(action.changeDonChagasNat(evt.target.value)),
		onChangeDonChestXray: evt => dispatch(action.changeDonChestXray(evt.target.value)),
		onChangeDonCitizenship: evt => dispatch(action.changeDonCitizenship(evt.target.value)),
		onChangeDonCiFinal: evt => dispatch(action.changeDonCiFinal(evt.target.value)),
		onChangeDonCiInit: evt => dispatch(action.changeDonCiInit(evt.target.value)),
		onChangeDonClampDt: evt => dispatch(action.changeDonClampDt(evt.target.value)),
		onChangeDonClampTm: evt => dispatch(action.changeDonClampTm(evt.target.value)),
		onChangeDonClampTmZone: evt => dispatch(action.changeDonClampTmZone(evt.target.value)),
		onChangeDonClinicalInfect: evt => dispatch(action.changeDonClinicalInfect(evt.target.value)),
		onChangeDonCodDonStroke: evt => dispatch(action.changeDonCodDonStroke(evt.target.value)),
		onChangeDonColdIschTmArrivKi: evt => dispatch(action.changeDonColdIschTmArrivKi(evt.target.value)),
		onChangeDonConsentAttorney: evt => dispatch(action.changeDonConsentAttorney(evt.target.value)),
		onChangeDonConsentDonCard: evt => dispatch(action.changeDonConsentDonCard(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm2 );
