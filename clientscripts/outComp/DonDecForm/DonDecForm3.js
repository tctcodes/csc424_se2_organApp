import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm3 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT DON REGIS</label>
					<label className="text-secondary" >Consent Mechanism - Donor Registry:</label>
					<select className="form-control" value={this.props.donConsentDonRegis} onChange={this.props.onChangeDonConsentDonRegis}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT DRIVER LICENSE</label>
					<label className="text-secondary" >Consent Mechanism - Driver/s License:</label>
					<select className="form-control" value={this.props.donConsentDriverLicense} onChange={this.props.onChangeDonConsentDriverLicense}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT PX WRIT DOC</label>
					<label className="text-secondary" >Patient Consented in Writing:</label>
					<select className="form-control" value={this.props.donConsentPxWritDoc} onChange={this.props.onChangeDonConsentPxWritDoc}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT TM</label>
					<label className="text-secondary" >Time consent obtained for first organ::</label>
					<input className="form-control" type="text" value={this.props.donConsentTm} onChange={this.props.onChangeDonConsentTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONSENT WRIT DOC INTENT</label>
					<label className="text-secondary" >Did the patient have written documentation of their intent to be a donor::</label>
					<select className="form-control" value={this.props.donConsentWritDocIntent} onChange={this.props.onChangeDonConsentWritDocIntent}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT ALCOHOL</label>
					<label className="text-secondary" >Alcohol Dependency Last 6 Months:</label>
					<select className="form-control" value={this.props.donContAlcohol} onChange={this.props.onChangeDonContAlcohol}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT CIGARETTE</label>
					<label className="text-secondary" >Donor/s Continued Use in Last 6 Months:</label>
					<select className="form-control" value={this.props.donContCigarette} onChange={this.props.onChangeDonContCigarette}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT COCAINE</label>
					<label className="text-secondary" >Cocaine Use Last 6 Months:</label>
					<select className="form-control" value={this.props.donContCocaine} onChange={this.props.onChangeDonContCocaine}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT IV DRUG</label>
					<label className="text-secondary" >IV Drug Last 6 Months:</label>
					<select className="form-control" value={this.props.donContIvDrug} onChange={this.props.onChangeDonContIvDrug}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CONT OTHER DRUG</label>
					<label className="text-secondary" >Other Drug Abuse Last 6 Months:</label>
					<select className="form-control" value={this.props.donContOtherDrug} onChange={this.props.onChangeDonContOtherDrug}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CORONARY ANGIO</label>
					<label className="text-secondary" >Coronary Angiogram:</label>
					<select className="form-control" value={this.props.donCoronaryAngio} onChange={this.props.onChangeDonCoronaryAngio}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No </option>
						<option value="2">2: Yes, normal </option>
						<option value="3">3: Yes, not normal</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CO FINAL</label>
					<label className="text-secondary" >CO (final) (L/min) //CO::</label>
					<input className="form-control" type="number" value={this.props.donCoFinal} onChange={this.props.onChangeDonCoFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CO INIT</label>
					<label className="text-secondary" >CO (initial) (L/min) //CO: (L/min):</label>
					<input className="form-control" type="number" value={this.props.donCoInit} onChange={this.props.onChangeDonCoInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CREAT</label>
					<label className="text-secondary" >Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donCreat} onChange={this.props.onChangeDonCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CREG DON FLG</label>
					<label className="text-secondary" >Is this a CREG Donor?:</label>
					<select className="form-control" value={this.props.donCregDonFlg} onChange={this.props.onChangeDonCregDonFlg}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CVP FINAL</label>
					<label className="text-secondary" >CVP (final) //CVP::</label>
					<input className="form-control" type="number" value={this.props.donCvpFinal} onChange={this.props.onChangeDonCvpFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON CVP INIT</label>
					<label className="text-secondary" >CVP (initial) //CVP: (mm/Hg):</label>
					<input className="form-control" type="number" value={this.props.donCvpInit} onChange={this.props.onChangeDonCvpInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD ABDOM AORTA CANNUL DT</label>
					<label className="text-secondary" >If DCD, Date of abdominal aorta cannulation::</label>
					<input className="form-control" type="datetime-local" value={this.props.donDcdAbdomAortaCannulDt} onChange={this.props.onChangeDonDcdAbdomAortaCannulDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD ABDOM AORTA CANNUL TM</label>
					<label className="text-secondary" >If DCD, Time of abdominal aorta cannulation::</label>
					<input className="form-control" type="text" value={this.props.donDcdAbdomAortaCannulTm} onChange={this.props.onChangeDonDcdAbdomAortaCannulTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD AGONAL BEGIN DT</label>
					<label className="text-secondary" >If DCD, Date agonal phase begins:</label>
					<input className="form-control" type="datetime-local" value={this.props.donDcdAgonalBeginDt} onChange={this.props.onChangeDonDcdAgonalBeginDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD AGONAL BEGIN TM</label>
					<label className="text-secondary" >If DCD, Time agonal phase begins:</label>
					<input className="form-control" type="text" value={this.props.donDcdAgonalBeginTm} onChange={this.props.onChangeDonDcdAgonalBeginTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD PORTAL VEIN CANNUL DT</label>
					<label className="text-secondary" >If DCD, Date of portal vein cannulation::</label>
					<input className="form-control" type="datetime-local" value={this.props.donDcdPortalVeinCannulDt} onChange={this.props.onChangeDonDcdPortalVeinCannulDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD PORTAL VEIN CANNUL TM</label>
					<label className="text-secondary" >If DCD, Time of portal vein cannulation::</label>
					<input className="form-control" type="text" value={this.props.donDcdPortalVeinCannulTm} onChange={this.props.onChangeDonDcdPortalVeinCannulTm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON DCD PROGRESS TO BRAIN DEATH</label>
					<label className="text-secondary" >If not DCD, Was this a consented DCD donor that progressed to brain death?:</label>
					<select className="form-control" value={this.props.donDcdProgressToBrainDeath} onChange={this.props.onChangeDonDcdProgressToBrainDeath}>
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
	donConsentDonRegis: select.makeSelectDonConsentDonRegis(),
	donConsentDriverLicense: select.makeSelectDonConsentDriverLicense(),
	donConsentPxWritDoc: select.makeSelectDonConsentPxWritDoc(),
	donConsentTm: select.makeSelectDonConsentTm(),
	donConsentWritDocIntent: select.makeSelectDonConsentWritDocIntent(),
	donContAlcohol: select.makeSelectDonContAlcohol(),
	donContCigarette: select.makeSelectDonContCigarette(),
	donContCocaine: select.makeSelectDonContCocaine(),
	donContIvDrug: select.makeSelectDonContIvDrug(),
	donContOtherDrug: select.makeSelectDonContOtherDrug(),
	donCoronaryAngio: select.makeSelectDonCoronaryAngio(),
	donCoFinal: select.makeSelectDonCoFinal(),
	donCoInit: select.makeSelectDonCoInit(),
	donCreat: select.makeSelectDonCreat(),
	donCregDonFlg: select.makeSelectDonCregDonFlg(),
	donCvpFinal: select.makeSelectDonCvpFinal(),
	donCvpInit: select.makeSelectDonCvpInit(),
	donDcdAbdomAortaCannulDt: select.makeSelectDonDcdAbdomAortaCannulDt(),
	donDcdAbdomAortaCannulTm: select.makeSelectDonDcdAbdomAortaCannulTm(),
	donDcdAgonalBeginDt: select.makeSelectDonDcdAgonalBeginDt(),
	donDcdAgonalBeginTm: select.makeSelectDonDcdAgonalBeginTm(),
	donDcdPortalVeinCannulDt: select.makeSelectDonDcdPortalVeinCannulDt(),
	donDcdPortalVeinCannulTm: select.makeSelectDonDcdPortalVeinCannulTm(),
	donDcdProgressToBrainDeath: select.makeSelectDonDcdProgressToBrainDeath(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonConsentDonRegis: evt => dispatch(action.changeDonConsentDonRegis(evt.target.value)),
		onChangeDonConsentDriverLicense: evt => dispatch(action.changeDonConsentDriverLicense(evt.target.value)),
		onChangeDonConsentPxWritDoc: evt => dispatch(action.changeDonConsentPxWritDoc(evt.target.value)),
		onChangeDonConsentTm: evt => dispatch(action.changeDonConsentTm(evt.target.value)),
		onChangeDonConsentWritDocIntent: evt => dispatch(action.changeDonConsentWritDocIntent(evt.target.value)),
		onChangeDonContAlcohol: evt => dispatch(action.changeDonContAlcohol(evt.target.value)),
		onChangeDonContCigarette: evt => dispatch(action.changeDonContCigarette(evt.target.value)),
		onChangeDonContCocaine: evt => dispatch(action.changeDonContCocaine(evt.target.value)),
		onChangeDonContIvDrug: evt => dispatch(action.changeDonContIvDrug(evt.target.value)),
		onChangeDonContOtherDrug: evt => dispatch(action.changeDonContOtherDrug(evt.target.value)),
		onChangeDonCoronaryAngio: evt => dispatch(action.changeDonCoronaryAngio(evt.target.value)),
		onChangeDonCoFinal: evt => dispatch(action.changeDonCoFinal(evt.target.value)),
		onChangeDonCoInit: evt => dispatch(action.changeDonCoInit(evt.target.value)),
		onChangeDonCreat: evt => dispatch(action.changeDonCreat(evt.target.value)),
		onChangeDonCregDonFlg: evt => dispatch(action.changeDonCregDonFlg(evt.target.value)),
		onChangeDonCvpFinal: evt => dispatch(action.changeDonCvpFinal(evt.target.value)),
		onChangeDonCvpInit: evt => dispatch(action.changeDonCvpInit(evt.target.value)),
		onChangeDonDcdAbdomAortaCannulDt: evt => dispatch(action.changeDonDcdAbdomAortaCannulDt(evt.target.value)),
		onChangeDonDcdAbdomAortaCannulTm: evt => dispatch(action.changeDonDcdAbdomAortaCannulTm(evt.target.value)),
		onChangeDonDcdAgonalBeginDt: evt => dispatch(action.changeDonDcdAgonalBeginDt(evt.target.value)),
		onChangeDonDcdAgonalBeginTm: evt => dispatch(action.changeDonDcdAgonalBeginTm(evt.target.value)),
		onChangeDonDcdPortalVeinCannulDt: evt => dispatch(action.changeDonDcdPortalVeinCannulDt(evt.target.value)),
		onChangeDonDcdPortalVeinCannulTm: evt => dispatch(action.changeDonDcdPortalVeinCannulTm(evt.target.value)),
		onChangeDonDcdProgressToBrainDeath: evt => dispatch(action.changeDonDcdProgressToBrainDeath(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm3 );
