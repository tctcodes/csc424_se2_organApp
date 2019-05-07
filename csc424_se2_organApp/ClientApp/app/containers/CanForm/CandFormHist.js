import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class CandFormHist extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ANGINA</label>
					<label className="text-secondary" >Angina/Coronary Artery Disease:</label>
					<select className="form-control" value={this.props.canAngina} onChange={this.props.onChangeCanAngina}>
						<option value="" hidden disabled />
						<option value="1">1: No angina</option>
						<option value="2">2: Stable angina - strenuous activity results in angina</option>
						<option value="3">3: Stable angina - ordinary physical activity results in angina</option>
						<option value="4">4: Stable angina - no rest angina; does have angina with less than ordinary activity</option>
						<option value="5">5: Stable angina - angina with any physical activity or at rest</option>
						<option value="6">6: Unstable angina</option>
						<option value="7">7: Angina, stability unknown</option>
						<option value="30">30: Stable angina - activity level resulting in angina is unspecified - old code 3</option>
						<option value="998">998: Unknown if angina present</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ANGINA CAD</label>
					<label className="text-secondary" >Angina::</label>
					<select className="form-control" value={this.props.canAnginaCad} onChange={this.props.onChangeCanAnginaCad}>
						<option value="" hidden disabled />
						<option value="1">1: No</option>
						<option value="2">2: Yes, and documented Coronary Artery Disease</option>
						<option value="3">3: Yes, with no documented Coronary Artery Disease</option>
						<option value="4">4: Yes, but Coronary Artery Disease unknown</option>
						<option value="998">998: Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ASCITES</label>
					<label className="text-secondary" >Ascites (from liver disease ):</label>
					<select className="form-control" value={this.props.canAscites} onChange={this.props.onChangeCanAscites}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN BACTERIA PERIT</label>
					<label className="text-secondary" >Spontaneous Bacterial Peritonitis (ascitis infection):</label>
					<select className="form-control" value={this.props.canBacteriaPerit} onChange={this.props.onChangeCanBacteriaPerit}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN CEREB VASC</label>
					<label className="text-secondary" >Symptomatic Cerebrovascular Disease:</label>
					<select className="form-control" value={this.props.canCerebVasc} onChange={this.props.onChangeCanCerebVasc}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN COGNITIVE DEVELOP</label>
					<label className="text-secondary" >Cognitive Development (Ped Only):</label>
					<select className="form-control" value={this.props.canCognitiveDevelop} onChange={this.props.onChangeCanCognitiveDevelop}>
						<option value="" hidden disabled />
						<option value="1">1: Definite Cognitive delay/impairment</option>
						<option value="2">2: Probable Cognitive delay/impairment</option>
						<option value="3">3: Questionable Cognitive delay/impairment</option>
						<option value="4">4: No Cognitive delay/impairment</option>
						<option value="998">998: Not Assessed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DIAB</label>
					<label className="text-secondary" >Diabetes:</label>
					<select className="form-control" value={this.props.canDiab} onChange={this.props.onChangeCanDiab}>
						<option value="" hidden disabled />
						<option value="1">1: NO</option>
						<option value="2">2: INSULIN DEPENDENT DIABETES</option>
						<option value="3">3: NON-INSULIN DEPENDENT DIABETES</option>
						<option value="4">4: DIABETES, DEPENDENCY UNKNOWN</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DIAB TY</label>
					<label className="text-secondary" >Diabetes:</label>
					<select className="form-control" value={this.props.canDiabTy} onChange={this.props.onChangeCanDiabTy}>
						<option value="" hidden disabled />
						<option value="1">1: No</option>
						<option value="2">2: Type I</option>
						<option value="3">3: Type II</option>
						<option value="4">4: Type Other</option>
						<option value="5">5: Type Unknown</option>
						<option value="998">998: Diabetes Status Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DIAL</label>
					<label className="text-secondary" >Dialysis:</label>
					<select className="form-control" value={this.props.canDial} onChange={this.props.onChangeCanDial}>
						<option value="" hidden disabled />
						<option value="1">1: No dialysis</option>
						<option value="2">2: Hemodialysis</option>
						<option value="3">3: Peritoneal Dialysis</option>
						<option value="4">4: CAVH: Continuous Arteriovenous Hemofiltration</option>
						<option value="5">5: CV VH: Continuous Venous/Venous Hemofiltration</option>
						<option value="998">998: Dialysis Status Unknown</option>
						<option value="999">999: Dialysis-Unknown Type was performed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DRUG TREAT COPD</label>
					<label className="text-secondary" >Drug Treated COPD:</label>
					<select className="form-control" value={this.props.canDrugTreatCopd} onChange={this.props.onChangeCanDrugTreatCopd}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DRUG TREAT HYPERTEN</label>
					<label className="text-secondary" >Drug Treated Systemic Hypertension:</label>
					<select className="form-control" value={this.props.canDrugTreatHyperten} onChange={this.props.onChangeCanDrugTreatHyperten}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ENCEPH</label>
					<label className="text-secondary" >Encephalopathy:</label>
					<select className="form-control" value={this.props.canEnceph} onChange={this.props.onChangeCanEnceph}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN FUNGAL SEPSIS</label>
					<label className="text-secondary" >Fungal sepsis (IN Pediatric Only):</label>
					<select className="form-control" value={this.props.canFungalSepsis} onChange={this.props.onChangeCanFungalSepsis}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LIVING DON TX</label>
					<label className="text-secondary" >Has Candidate received a Living Donor transplant? (used for Liver Candidates):</label>
					<select className="form-control" value={this.props.canLivingDonTx} onChange={this.props.onChangeCanLivingDonTx}>
						<option value="" hidden disabled />
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LI DYSFUNCTN</label>
					<label className="text-secondary" >Liver Dysfunction:</label>
					<select className="form-control" value={this.props.canLiDysfunctn} onChange={this.props.onChangeCanLiDysfunctn}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LOSS VASC ACCESS</label>
					<label className="text-secondary" >Loss of two or more vascular access sites (IN Pediatric Only):</label>
					<select className="form-control" value={this.props.canLossVascAccess} onChange={this.props.onChangeCanLossVascAccess}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN NEW PREV PI TX</label>
					<label className="text-secondary" >Previous Pancreas Islet Transplantation::</label>
					<select className="form-control" value={this.props.canNewPrevPiTx} onChange={this.props.onChangeCanNewPrevPiTx}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN NON RECON GI</label>
					<label className="text-secondary" >Non-Reconstructible GI tract (IN Pediatric Only):</label>
					<select className="form-control" value={this.props.canNonReconGi} onChange={this.props.onChangeCanNonReconGi}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PEPTIC ULCER</label>
					<label className="text-secondary" >Peptic Ulcer Disease:</label>
					<select className="form-control" value={this.props.canPepticUlcer} onChange={this.props.onChangeCanPepticUlcer}>
						<option value="" hidden disabled />
						<option value="1">1: No</option>
						<option value="2">2: Yes, active within the last year</option>
						<option value="3">3: Yes, not active within the last year</option>
						<option value="4">4: Yes, activity unknown</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PERIPH VASC</label>
					<label className="text-secondary" >Symptomatic Peripheral Vascular Disease:</label>
					<select className="form-control" value={this.props.canPeriphVasc} onChange={this.props.onChangeCanPeriphVasc}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PORTAL VEIN</label>
					<label className="text-secondary" >History of Portal Vein Thrombosis:</label>
					<select className="form-control" value={this.props.canPortalVein} onChange={this.props.onChangeCanPortalVein}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV ABDOM SURG</label>
					<label className="text-secondary" >Previous Upper Abdominal Surgery:</label>
					<select className="form-control" value={this.props.canPrevAbdomSurg} onChange={this.props.onChangeCanPrevAbdomSurg}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV BONE MARROW DT</label>
					<label className="text-secondary" >Date of Latest Bone Marrow Transplant:</label>
					<input className="form-control" type="datetime-local" value={this.props.canPrevBoneMarrowDt} onChange={this.props.onChangeCanPrevBoneMarrowDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV BONE MARROW TX</label>
					<label className="text-secondary" >Number Bone Marrow Transplants:</label>
					<input className="form-control" type="number" value={this.props.canPrevBoneMarrowTx} onChange={this.props.onChangeCanPrevBoneMarrowTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV HL</label>
					<label className="text-secondary" >Prev Heart-Lung Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevHl} onChange={this.props.onChangeCanPrevHl} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV HR</label>
					<label className="text-secondary" >Prev Heart Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevHr} onChange={this.props.onChangeCanPrevHr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV IN</label>
					<label className="text-secondary" >Prev Intestine Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevIn} onChange={this.props.onChangeCanPrevIn} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV KI</label>
					<label className="text-secondary" >Prev Kidney Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevKi} onChange={this.props.onChangeCanPrevKi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV KP</label>
					<label className="text-secondary" >Prev Kidney-Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevKp} onChange={this.props.onChangeCanPrevKp} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV LI</label>
					<label className="text-secondary" >Prev Liver Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevLi} onChange={this.props.onChangeCanPrevLi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV LU</label>
					<label className="text-secondary" >Prev Lung Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevLu} onChange={this.props.onChangeCanPrevLu} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV PA</label>
					<label className="text-secondary" >Prev Pancreas Tx:</label>
					<input className="form-control" type="number" value={this.props.canPrevPa} onChange={this.props.onChangeCanPrevPa} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV TX</label>
					<label className="text-secondary" >Previous Transplants:</label>
					<input className="form-control" type="number" value={this.props.canPrevTx} onChange={this.props.onChangeCanPrevTx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PREV TXFUS</label>
					<label className="text-secondary" >Any Previous Transfusions:</label>
					<select className="form-control" value={this.props.canPrevTxfus} onChange={this.props.onChangeCanPrevTxfus}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PULM EMBOL</label>
					<label className="text-secondary" >Pulmonary Embolism:</label>
					<select className="form-control" value={this.props.canPulmEmbol} onChange={this.props.onChangeCanPulmEmbol}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN RECUR SEPSIS</label>
					<label className="text-secondary" >Recurrent sepsis (IN Pediatric Only):</label>
					<select className="form-control" value={this.props.canRecurSepsis} onChange={this.props.onChangeCanRecurSepsis}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TIPSS</label>
					<label className="text-secondary" >History of TIPSS:</label>
					<select className="form-control" value={this.props.canTipss} onChange={this.props.onChangeCanTipss}>
						<option value="" hidden disabled />
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	canAngina: select.makeSelectCanAngina(),
	canAnginaCad: select.makeSelectCanAnginaCad(),
	canAscites: select.makeSelectCanAscites(),
	canBacteriaPerit: select.makeSelectCanBacteriaPerit(),
	canCerebVasc: select.makeSelectCanCerebVasc(),
	canCognitiveDevelop: select.makeSelectCanCognitiveDevelop(),
	canDiab: select.makeSelectCanDiab(),
	canDiabTy: select.makeSelectCanDiabTy(),
	canDial: select.makeSelectCanDial(),
	canDrugTreatCopd: select.makeSelectCanDrugTreatCopd(),
	canDrugTreatHyperten: select.makeSelectCanDrugTreatHyperten(),
	canEnceph: select.makeSelectCanEnceph(),
	canFungalSepsis: select.makeSelectCanFungalSepsis(),
	canLivingDonTx: select.makeSelectCanLivingDonTx(),
	canLiDysfunctn: select.makeSelectCanLiDysfunctn(),
	canLossVascAccess: select.makeSelectCanLossVascAccess(),
	canNewPrevPiTx: select.makeSelectCanNewPrevPiTx(),
	canNonReconGi: select.makeSelectCanNonReconGi(),
	canPepticUlcer: select.makeSelectCanPepticUlcer(),
	canPeriphVasc: select.makeSelectCanPeriphVasc(),
	canPortalVein: select.makeSelectCanPortalVein(),
	canPrevAbdomSurg: select.makeSelectCanPrevAbdomSurg(),
	canPrevBoneMarrowDt: select.makeSelectCanPrevBoneMarrowDt(),
	canPrevBoneMarrowTx: select.makeSelectCanPrevBoneMarrowTx(),
	canPrevHl: select.makeSelectCanPrevHl(),
	canPrevHr: select.makeSelectCanPrevHr(),
	canPrevIn: select.makeSelectCanPrevIn(),
	canPrevKi: select.makeSelectCanPrevKi(),
	canPrevKp: select.makeSelectCanPrevKp(),
	canPrevLi: select.makeSelectCanPrevLi(),
	canPrevLu: select.makeSelectCanPrevLu(),
	canPrevPa: select.makeSelectCanPrevPa(),
	canPrevTx: select.makeSelectCanPrevTx(),
	canPrevTxfus: select.makeSelectCanPrevTxfus(),
	canPulmEmbol: select.makeSelectCanPulmEmbol(),
	canRecurSepsis: select.makeSelectCanRecurSepsis(),
	canTipss: select.makeSelectCanTipss(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanAngina: evt => dispatch(action.changeCanAngina(evt.target.value)),
		onChangeCanAnginaCad: evt => dispatch(action.changeCanAnginaCad(evt.target.value)),
		onChangeCanAscites: evt => dispatch(action.changeCanAscites(evt.target.value)),
		onChangeCanBacteriaPerit: evt => dispatch(action.changeCanBacteriaPerit(evt.target.value)),
		onChangeCanCerebVasc: evt => dispatch(action.changeCanCerebVasc(evt.target.value)),
		onChangeCanCognitiveDevelop: evt => dispatch(action.changeCanCognitiveDevelop(evt.target.value)),
		onChangeCanDiab: evt => dispatch(action.changeCanDiab(evt.target.value)),
		onChangeCanDiabTy: evt => dispatch(action.changeCanDiabTy(evt.target.value)),
		onChangeCanDial: evt => dispatch(action.changeCanDial(evt.target.value)),
		onChangeCanDrugTreatCopd: evt => dispatch(action.changeCanDrugTreatCopd(evt.target.value)),
		onChangeCanDrugTreatHyperten: evt => dispatch(action.changeCanDrugTreatHyperten(evt.target.value)),
		onChangeCanEnceph: evt => dispatch(action.changeCanEnceph(evt.target.value)),
		onChangeCanFungalSepsis: evt => dispatch(action.changeCanFungalSepsis(evt.target.value)),
		onChangeCanLivingDonTx: evt => dispatch(action.changeCanLivingDonTx(evt.target.value)),
		onChangeCanLiDysfunctn: evt => dispatch(action.changeCanLiDysfunctn(evt.target.value)),
		onChangeCanLossVascAccess: evt => dispatch(action.changeCanLossVascAccess(evt.target.value)),
		onChangeCanNewPrevPiTx: evt => dispatch(action.changeCanNewPrevPiTx(evt.target.value)),
		onChangeCanNonReconGi: evt => dispatch(action.changeCanNonReconGi(evt.target.value)),
		onChangeCanPepticUlcer: evt => dispatch(action.changeCanPepticUlcer(evt.target.value)),
		onChangeCanPeriphVasc: evt => dispatch(action.changeCanPeriphVasc(evt.target.value)),
		onChangeCanPortalVein: evt => dispatch(action.changeCanPortalVein(evt.target.value)),
		onChangeCanPrevAbdomSurg: evt => dispatch(action.changeCanPrevAbdomSurg(evt.target.value)),
		onChangeCanPrevBoneMarrowDt: evt => dispatch(action.changeCanPrevBoneMarrowDt(evt.target.value)),
		onChangeCanPrevBoneMarrowTx: evt => dispatch(action.changeCanPrevBoneMarrowTx(evt.target.value)),
		onChangeCanPrevHl: evt => dispatch(action.changeCanPrevHl(evt.target.value)),
		onChangeCanPrevHr: evt => dispatch(action.changeCanPrevHr(evt.target.value)),
		onChangeCanPrevIn: evt => dispatch(action.changeCanPrevIn(evt.target.value)),
		onChangeCanPrevKi: evt => dispatch(action.changeCanPrevKi(evt.target.value)),
		onChangeCanPrevKp: evt => dispatch(action.changeCanPrevKp(evt.target.value)),
		onChangeCanPrevLi: evt => dispatch(action.changeCanPrevLi(evt.target.value)),
		onChangeCanPrevLu: evt => dispatch(action.changeCanPrevLu(evt.target.value)),
		onChangeCanPrevPa: evt => dispatch(action.changeCanPrevPa(evt.target.value)),
		onChangeCanPrevTx: evt => dispatch(action.changeCanPrevTx(evt.target.value)),
		onChangeCanPrevTxfus: evt => dispatch(action.changeCanPrevTxfus(evt.target.value)),
		onChangeCanPulmEmbol: evt => dispatch(action.changeCanPulmEmbol(evt.target.value)),
		onChangeCanRecurSepsis: evt => dispatch(action.changeCanRecurSepsis(evt.target.value)),
		onChangeCanTipss: evt => dispatch(action.changeCanTipss(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( CandFormHist );
