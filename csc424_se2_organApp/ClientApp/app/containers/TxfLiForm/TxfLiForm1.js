import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxfLiForm1 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >ORG AR</label>
					<label className="text-secondary" >Organ type with pancreas expanded to PTA and PAK:</label>
					<input className="form-control" type="text" maxLength="3" value={this.props.orgAr} onChange={this.props.onChangeOrgAr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >ORG TY</label>
					<label className="text-secondary" >Organ Type:</label>
					<select  className="form-control" value={this.props.orgTy} onChange={this.props.onChangeOrgTy}>
						<option value="" hidden disabled />
						<option value="HL">HL: Heart/Lung</option>
						<option value="HR">HR: Heart</option>
						<option value="IN">IN: Intestine</option>
						<option value="KI">KI: Kidney</option>
						<option value="KP">KP: Kidney-Pancreas</option>
						<option value="LI">LI: Liver</option>
						<option value="LU">LU: Lung</option>
						<option value="PA">PA: Pancreas</option>
						<option value="PI">PI: Pancreas Islets</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS ID</label>
					<label className="text-secondary" >Unique person ID to replace SSN:</label>
					<input className="form-control" type="text" readOnly value={this.props.persId} onChange={this.props.onChangePersId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PX ID</label>
					<label className="text-secondary" >Patient Identifier (includes WL patients and living don TX):</label>
					<input className="form-control" type="text" readOnly value={this.props.pxId} onChange={this.props.onChangePxId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC CTR ID</label>
					<label className="text-secondary" >REC_ Center ID:</label>
					<input className="form-control" type="text" readOnly value={this.props.recCtrId} onChange={this.props.onChangeRecCtrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC OPO ID</label>
					<label className="text-secondary" >OPO Serving Transplant Center:</label>
					<input className="form-control" type="text" readOnly value={this.props.recOpoId} onChange={this.props.onChangeRecOpoId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TX DT</label>
					<label className="text-secondary" >Transplant Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.recTxDt} onChange={this.props.onChangeRecTxDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TX ORG TY</label>
					<label className="text-secondary" >Transplant Organ Type(s), text contains list of organ types involved in TX:</label>
					<select className="form-control" value={this.props.recTxOrgTy} onChange={this.props.onChangeRecTxOrgTy}>
						<option value="" hidden disabled />
						<option value="HL">HL: Heart-Lung </option>
						<option value="HR">HR: Heart </option>
						<option value="IN">IN: Intestine </option>
						<option value="KI">KI: Kidney </option>
						<option value="KI HL">KI HL: Kidney-Heart-Lung </option>
						<option value="KI HR">KI HR: Kidney-Heart </option>
						<option value="KI IN">KI IN: Kidney-Intestine </option>
						<option value="KI LI">KI LI: Kidney-Liver </option>
						<option value="KI LI 2LD">KI LI 2LD: Two Living Donors, Kidney-Liver TX </option>
						<option value="KI LI HR">KI LI HR: Kidney-Liver-Heart </option>
						<option value="KI LI IN">KI LI IN: Kidney-Liver-Intestine </option>
						<option value="KI LU">KI LU: Kidney-Lung </option>
						<option value="KI PA LD/DD">KI PA LD/DD: Living Donor Kidney, Deceased Donor Pancreas TX </option>
						<option value="KP">KP: Kidney-Pancreas </option>
						<option value="KP HR">KP HR: Kidney-Pancreas-Heart </option>
						<option value="KP IN">KP IN: Kidney-Pancreas-Intestine </option>
						<option value="KP LI">KP LI: Kidney-Pancreas-Liver </option>
						<option value="KP LI IN">KP LI IN: Kidney-Pancreas-Liver-Intestine </option>
						<option value="LI">LI: Liver </option>
						<option value="LI HL">LI HL: Liver-Heart-Lung </option>
						<option value="LI HR">LI HR: Liver-Heart </option>
						<option value="LI IN">LI IN: Liver-Intestine </option>
						<option value="LI LU">LI LU: Liver-Lung </option>
						<option value="LU">LU: Lung </option>
						<option value="LU LU 2LD">LU LU 2LD: Two Living Donors, Double Lung Lobe TX </option>
						<option value="PA">PA: Pancreas </option>
						<option value="PA HR">PA HR: Pancreas-Heart </option>
						<option value="PA IN">PA IN: Pancreas-Intestine </option>
						<option value="PA LI">PA LI: Pancreas-Liver </option>
						<option value="PA LI IN">PA LI IN: Pancreas-Liver-Intestine </option>
						<option value="PA LI LU">PA LI LU: Pancreas-Liver-Lung </option>
						<option value="PA LU">PA LU: Pancreas-Lung </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TX TY</label>
					<label className="text-secondary" >Transplant Type, number of donors & organ types involved in TX:</label>
					<select className="form-control" value={this.props.recTxTy} onChange={this.props.onChangeRecTxTy}>
						<option value="" hidden disabled />
						<option value="1">1: Single donor, single organ type TX </option>
						<option value="2">2: Single donor, multiple organ types TX </option>
						<option value="3">3: Multiple donors, single organ type TX </option>
						<option value="4">4: Multiple donors, multiple organ types TX </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ACADEMIC LEVEL</label>
					<label className="text-secondary" >Academic Activity Level::</label>
					<select className="form-control" value={this.props.tflAcademicLevel} onChange={this.props.onChangeTflAcademicLevel}>
						<option value="" hidden disabled />
						<option value="1">1: Full academic load</option>
						<option value="2">2: Reduced academic load</option>
						<option value="3">3: Unable to participate in academics due to disease or condition</option>
						<option value="4">4: Unable to participate regularly in academics due to dialysis</option>
						<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
						<option value="998">998: Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ACADEMIC PROGRESS</label>
					<label className="text-secondary" >Academic Progress::</label>
					<select className="form-control" value={this.props.tflAcademicProgress} onChange={this.props.onChangeTflAcademicProgress}>
						<option value="" hidden disabled />
						<option value="1">1: Within One Grade Level of Peers</option>
						<option value="2">2: Delayed Grade Level</option>
						<option value="3">3: Special Education</option>
						<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
						<option value="998">998: Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ACUTE REJ BIOPSY CONFIRMED</label>
					<label className="text-secondary" >Was biopsy done to confirm acute rejection::</label>
					<select className="form-control" value={this.props.tflAcuteRejBiopsyConfirmed} onChange={this.props.onChangeTflAcuteRejBiopsyConfirmed}>
						<option value="" hidden disabled />
						<option value="1">1: Biopsy not done </option>
						<option value="2">2: Yes, rejection confirmed </option>
						<option value="3">3: Yes, rejection not confirmed </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ACUTE REJ EPISODE</label>
					<label className="text-secondary" >Did patient have any acute rejection episodes during the follow-up period::</label>
					<select className="form-control" value={this.props.tflAcuteRejEpisode} onChange={this.props.onChangeTflAcuteRejEpisode}>
						<option value="" hidden disabled />
						<option value="1">1: Yes, at least one episode treated with anti-rejection agent </option>
						<option value="2">2: Yes, none treated with additional anti-rejection agent </option>
						<option value="3">3: No </option>
						<option value="998">998: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ALBUMIN</label>
					<label className="text-secondary" >Serum Albumin:</label>
					<input className="form-control" type="number" value={this.props.tflAlbumin} onChange={this.props.onChangeTflAlbumin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ALKPHOS</label>
					<label className="text-secondary" >Alkaline Phosphate:</label>
					<input className="form-control" type="number" value={this.props.tflAlkphos} onChange={this.props.onChangeTflAlkphos} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY</label>
					<label className="text-secondary" >Biological or Anti-viral therapy::</label>
					<select className="form-control" value={this.props.tflAntivrlTherapy} onChange={this.props.onChangeTflAntivrlTherapy}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY</label>
					<label className="text-secondary" >If Anti-viral therapies, check all that apply:</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTy} onChange={this.props.onChangeTflAntivrlTherapyTy}>
						<option value="" hidden disabled />
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
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY ACYCLOVIR</label>
					<label className="text-secondary" >Anti-viral Therapy - Acyclovir (Zovirax) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyAcyclovir} onChange={this.props.onChangeTflAntivrlTherapyTyAcyclovir}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY CYTOGAM</label>
					<label className="text-secondary" >Anti-viral Therapy - Cytogam (CMV) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyCytogam} onChange={this.props.onChangeTflAntivrlTherapyTyCytogam}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY CYTOVENE</label>
					<label className="text-secondary" >Anti-viral Therapy - Ganciclovir (Cytovene) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyCytovene} onChange={this.props.onChangeTflAntivrlTherapyTyCytovene}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY EPIVIR</label>
					<label className="text-secondary" >Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyEpivir} onChange={this.props.onChangeTflAntivrlTherapyTyEpivir}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY FLU VAC</label>
					<label className="text-secondary" >Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyFluVac} onChange={this.props.onChangeTflAntivrlTherapyTyFluVac}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY GAMIMUNE</label>
					<label className="text-secondary" >Anti-viral Therapy - Gamimune (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyGamimune} onChange={this.props.onChangeTflAntivrlTherapyTyGamimune}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY GAMMAGARD</label>
					<label className="text-secondary" >Anti-viral Therapy - Gammagard (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyGammagard} onChange={this.props.onChangeTflAntivrlTherapyTyGammagard}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	orgAr: select.makeSelectOrgAr(),
	orgTy: select.makeSelectOrgTy(),
	persId: select.makeSelectPersId(),
	pxId: select.makeSelectPxId(),
	recCtrId: select.makeSelectRecCtrId(),
	recOpoId: select.makeSelectRecOpoId(),
	recTxDt: select.makeSelectRecTxDt(),
	recTxOrgTy: select.makeSelectRecTxOrgTy(),
	recTxTy: select.makeSelectRecTxTy(),
	tflAcademicLevel: select.makeSelectTflAcademicLevel(),
	tflAcademicProgress: select.makeSelectTflAcademicProgress(),
	tflAcuteRejBiopsyConfirmed: select.makeSelectTflAcuteRejBiopsyConfirmed(),
	tflAcuteRejEpisode: select.makeSelectTflAcuteRejEpisode(),
	tflAlbumin: select.makeSelectTflAlbumin(),
	tflAlkphos: select.makeSelectTflAlkphos(),
	tflAntivrlTherapy: select.makeSelectTflAntivrlTherapy(),
	tflAntivrlTherapyTy: select.makeSelectTflAntivrlTherapyTy(),
	tflAntivrlTherapyTyAcyclovir: select.makeSelectTflAntivrlTherapyTyAcyclovir(),
	tflAntivrlTherapyTyCytogam: select.makeSelectTflAntivrlTherapyTyCytogam(),
	tflAntivrlTherapyTyCytovene: select.makeSelectTflAntivrlTherapyTyCytovene(),
	tflAntivrlTherapyTyEpivir: select.makeSelectTflAntivrlTherapyTyEpivir(),
	tflAntivrlTherapyTyFluVac: select.makeSelectTflAntivrlTherapyTyFluVac(),
	tflAntivrlTherapyTyGamimune: select.makeSelectTflAntivrlTherapyTyGamimune(),
	tflAntivrlTherapyTyGammagard: select.makeSelectTflAntivrlTherapyTyGammagard(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeOrgAr: evt => dispatch(action.changeOrgAr(evt.target.value)),
		onChangeOrgTy: evt => dispatch(action.changeOrgTy(evt.target.value)),
		onChangePersId: evt => dispatch(action.changePersId(evt.target.value)),
		onChangePxId: evt => dispatch(action.changePxId(evt.target.value)),
		onChangeRecCtrId: evt => dispatch(action.changeRecCtrId(evt.target.value)),
		onChangeRecOpoId: evt => dispatch(action.changeRecOpoId(evt.target.value)),
		onChangeRecTxDt: evt => dispatch(action.changeRecTxDt(evt.target.value)),
		onChangeRecTxOrgTy: evt => dispatch(action.changeRecTxOrgTy(evt.target.value)),
		onChangeRecTxTy: evt => dispatch(action.changeRecTxTy(evt.target.value)),
		onChangeTflAcademicLevel: evt => dispatch(action.changeTflAcademicLevel(evt.target.value)),
		onChangeTflAcademicProgress: evt => dispatch(action.changeTflAcademicProgress(evt.target.value)),
		onChangeTflAcuteRejBiopsyConfirmed: evt => dispatch(action.changeTflAcuteRejBiopsyConfirmed(evt.target.value)),
		onChangeTflAcuteRejEpisode: evt => dispatch(action.changeTflAcuteRejEpisode(evt.target.value)),
		onChangeTflAlbumin: evt => dispatch(action.changeTflAlbumin(evt.target.value)),
		onChangeTflAlkphos: evt => dispatch(action.changeTflAlkphos(evt.target.value)),
		onChangeTflAntivrlTherapy: evt => dispatch(action.changeTflAntivrlTherapy(evt.target.value)),
		onChangeTflAntivrlTherapyTy: evt => dispatch(action.changeTflAntivrlTherapyTy(evt.target.value)),
		onChangeTflAntivrlTherapyTyAcyclovir: evt => dispatch(action.changeTflAntivrlTherapyTyAcyclovir(evt.target.value)),
		onChangeTflAntivrlTherapyTyCytogam: evt => dispatch(action.changeTflAntivrlTherapyTyCytogam(evt.target.value)),
		onChangeTflAntivrlTherapyTyCytovene: evt => dispatch(action.changeTflAntivrlTherapyTyCytovene(evt.target.value)),
		onChangeTflAntivrlTherapyTyEpivir: evt => dispatch(action.changeTflAntivrlTherapyTyEpivir(evt.target.value)),
		onChangeTflAntivrlTherapyTyFluVac: evt => dispatch(action.changeTflAntivrlTherapyTyFluVac(evt.target.value)),
		onChangeTflAntivrlTherapyTyGamimune: evt => dispatch(action.changeTflAntivrlTherapyTyGamimune(evt.target.value)),
		onChangeTflAntivrlTherapyTyGammagard: evt => dispatch(action.changeTflAntivrlTherapyTyGammagard(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxfLiForm1 );
