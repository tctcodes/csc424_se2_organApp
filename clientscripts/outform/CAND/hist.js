<div className="d-flex flex-wrap bg-light">
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ANGINA</label>
		<label className="text-secondary" >Angina/Coronary Artery Disease:</label>
		<input className="form-control"type="text" value={this.props.canAngina} onChange={this.props.onChangeCanAngina} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ANGINA CAD</label>
		<label className="text-secondary" >Angina::</label>
		<input className="form-control"type="text" value={this.props.canAnginaCad} onChange={this.props.onChangeCanAnginaCad} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ASCITES</label>
		<label className="text-secondary" >Ascites (from liver disease ):</label>
		<input className="form-control"type="text" value={this.props.canAscites} onChange={this.props.onChangeCanAscites} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN BACTERIA PERIT</label>
		<label className="text-secondary" >Spontaneous Bacterial Peritonitis (ascitis infection):</label>
		<input className="form-control"type="text" value={this.props.canBacteriaPerit} onChange={this.props.onChangeCanBacteriaPerit} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN CEREB VASC</label>
		<label className="text-secondary" >Symptomatic Cerebrovascular Disease:</label>
		<input className="form-control"type="text" value={this.props.canCerebVasc} onChange={this.props.onChangeCanCerebVasc} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN COGNITIVE DEVELOP</label>
		<label className="text-secondary" >Cognitive Development (Ped Only):</label>
		<input className="form-control"type="text" value={this.props.canCognitiveDevelop} onChange={this.props.onChangeCanCognitiveDevelop} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DIAB</label>
		<label className="text-secondary" >Diabetes:</label>
		<input className="form-control"type="text" value={this.props.canDiab} onChange={this.props.onChangeCanDiab} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DIAB TY</label>
		<label className="text-secondary" >Diabetes:</label>
		<input className="form-control"type="text" value={this.props.canDiabTy} onChange={this.props.onChangeCanDiabTy} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DIAL</label>
		<label className="text-secondary" >Dialysis:</label>
		<input className="form-control"type="text" value={this.props.canDial} onChange={this.props.onChangeCanDial} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DRUG TREAT COPD</label>
		<label className="text-secondary" >Drug Treated COPD:</label>
		<input className="form-control"type="text" value={this.props.canDrugTreatCopd} onChange={this.props.onChangeCanDrugTreatCopd} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DRUG TREAT HYPERTEN</label>
		<label className="text-secondary" >Drug Treated Systemic Hypertension:</label>
		<input className="form-control"type="text" value={this.props.canDrugTreatHyperten} onChange={this.props.onChangeCanDrugTreatHyperten} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ENCEPH</label>
		<label className="text-secondary" >Encephalopathy:</label>
		<input className="form-control"type="text" value={this.props.canEnceph} onChange={this.props.onChangeCanEnceph} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN FUNGAL SEPSIS</label>
		<label className="text-secondary" >Fungal sepsis (IN Pediatric Only):</label>
		<input className="form-control"type="text" value={this.props.canFungalSepsis} onChange={this.props.onChangeCanFungalSepsis} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LIVING DON TX</label>
		<label className="text-secondary" >Has Candidate received a Living Donor transplant? (used for Liver Candidates):</label>
		<input className="form-control"type="text" value={this.props.canLivingDonTx} onChange={this.props.onChangeCanLivingDonTx} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LI DYSFUNCTN</label>
		<label className="text-secondary" >Liver Dysfunction:</label>
		<input className="form-control"type="text" value={this.props.canLiDysfunctn} onChange={this.props.onChangeCanLiDysfunctn} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LOSS VASC ACCESS</label>
		<label className="text-secondary" >Loss of two or more vascular access sites (IN Pediatric Only):</label>
		<input className="form-control"type="text" value={this.props.canLossVascAccess} onChange={this.props.onChangeCanLossVascAccess} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN NEW PREV PI TX</label>
		<label className="text-secondary" >Previous Pancreas Islet Transplantation::</label>
		<input className="form-control"type="text" value={this.props.canNewPrevPiTx} onChange={this.props.onChangeCanNewPrevPiTx} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN NON RECON GI</label>
		<label className="text-secondary" >Non-Reconstructible GI tract (IN Pediatric Only):</label>
		<input className="form-control"type="text" value={this.props.canNonReconGi} onChange={this.props.onChangeCanNonReconGi} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PEPTIC ULCER</label>
		<label className="text-secondary" >Peptic Ulcer Disease:</label>
		<input className="form-control"type="text" value={this.props.canPepticUlcer} onChange={this.props.onChangeCanPepticUlcer} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PERIPH VASC</label>
		<label className="text-secondary" >Symptomatic Peripheral Vascular Disease:</label>
		<input className="form-control"type="text" value={this.props.canPeriphVasc} onChange={this.props.onChangeCanPeriphVasc} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PORTAL VEIN</label>
		<label className="text-secondary" >History of Portal Vein Thrombosis:</label>
		<input className="form-control"type="text" value={this.props.canPortalVein} onChange={this.props.onChangeCanPortalVein} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV ABDOM SURG</label>
		<label className="text-secondary" >Previous Upper Abdominal Surgery:</label>
		<input className="form-control"type="text" value={this.props.canPrevAbdomSurg} onChange={this.props.onChangeCanPrevAbdomSurg} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV BONE MARROW DT</label>
		<label className="text-secondary" >Date of Latest Bone Marrow Transplant:</label>
		<input className="form-control"type="datetime-local" value={this.props.canPrevBoneMarrowDt} onChange={this.props.onChangeCanPrevBoneMarrowDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV BONE MARROW TX</label>
		<label className="text-secondary" >Number Bone Marrow Transplants:</label>
		<input className="form-control"type="number" value={this.props.canPrevBoneMarrowTx} onChange={this.props.onChangeCanPrevBoneMarrowTx} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV HL</label>
		<label className="text-secondary" >Prev Heart-Lung Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevHl} onChange={this.props.onChangeCanPrevHl} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV HR</label>
		<label className="text-secondary" >Prev Heart Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevHr} onChange={this.props.onChangeCanPrevHr} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV IN</label>
		<label className="text-secondary" >Prev Intestine Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevIn} onChange={this.props.onChangeCanPrevIn} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV KI</label>
		<label className="text-secondary" >Prev Kidney Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevKi} onChange={this.props.onChangeCanPrevKi} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV KP</label>
		<label className="text-secondary" >Prev Kidney-Pancreas Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevKp} onChange={this.props.onChangeCanPrevKp} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV LI</label>
		<label className="text-secondary" >Prev Liver Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevLi} onChange={this.props.onChangeCanPrevLi} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV LU</label>
		<label className="text-secondary" >Prev Lung Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevLu} onChange={this.props.onChangeCanPrevLu} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV PA</label>
		<label className="text-secondary" >Prev Pancreas Tx:</label>
		<input className="form-control"type="number" value={this.props.canPrevPa} onChange={this.props.onChangeCanPrevPa} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV TX</label>
		<label className="text-secondary" >Previous Transplants:</label>
		<input className="form-control"type="number" value={this.props.canPrevTx} onChange={this.props.onChangeCanPrevTx} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PREV TXFUS</label>
		<label className="text-secondary" >Any Previous Transfusions:</label>
		<input className="form-control"type="text" value={this.props.canPrevTxfus} onChange={this.props.onChangeCanPrevTxfus} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PULM EMBOL</label>
		<label className="text-secondary" >Pulmonary Embolism:</label>
		<input className="form-control"type="text" value={this.props.canPulmEmbol} onChange={this.props.onChangeCanPulmEmbol} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN RECUR SEPSIS</label>
		<label className="text-secondary" >Recurrent sepsis (IN Pediatric Only):</label>
		<input className="form-control"type="text" value={this.props.canRecurSepsis} onChange={this.props.onChangeCanRecurSepsis} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN TIPSS</label>
		<label className="text-secondary" >History of TIPSS:</label>
		<input className="form-control"type="text" value={this.props.canTipss} onChange={this.props.onChangeCanTipss} />
	</div>
</div>
