<div className="d-flex flex-wrap bg-light">
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ABO</label>
		<label className="text-secondary" >Patient/s Blood Type:</label>
		<input className="form-control"type="text" value={this.props.canAbo} onChange={this.props.onChangeCanAbo} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN AGE AT LISTING</label>
		<label className="text-secondary" >Calculated Candidate Age at Listing:</label>
		<input className="form-control"type="text" value={this.props.canAgeAtListing} onChange={this.props.onChangeCanAgeAtListing} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN AGE IN MONTHS AT LISTING</label>
		<label className="text-secondary" >Calculated Candidate Age in Months at Listing:</label>
		<input className="form-control"type="number" value={this.props.canAgeInMonthsAtListing} onChange={this.props.onChangeCanAgeInMonthsAtListing} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ARTIFICIAL LI</label>
		<label className="text-secondary" >Life Support://Artifical Liver:</label>
		<input className="form-control"type="text" value={this.props.canArtificialLi} onChange={this.props.onChangeCanArtificialLi} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN BMI</label>
		<label className="text-secondary" >BMI::</label>
		<input className="form-control"type="number" value={this.props.canBmi} onChange={this.props.onChangeCanBmi} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DGN</label>
		<label className="text-secondary" >Primary Diagnosis:</label>
		<input className="form-control"type="text" value={this.props.canDgn} onChange={this.props.onChangeCanDgn} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DGN2</label>
		<label className="text-secondary" >Secondary Diagnosis:</label>
		<input className="form-control"type="text" value={this.props.canDgn2} onChange={this.props.onChangeCanDgn2} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DGN OSTXT</label>
		<label className="text-secondary" >Primary Diagnosis/Specify:</label>
		<input className="form-control"as="textarea" rows="3" value={this.props.canDgnOstxt} onChange={this.props.onChangeCanDgnOstxt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ECMO</label>
		<label className="text-secondary" >Life Support: ECMO:</label>
		<input className="form-control"type="text" value={this.props.canEcmo} onChange={this.props.onChangeCanEcmo} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ELECTROLYTE</label>
		<label className="text-secondary" >Unmanageable fluid-electrolyte losses (IN Pediatric Only):</label>
		<input className="form-control"type="text" value={this.props.canElectrolyte} onChange={this.props.onChangeCanElectrolyte} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN EXHAUST VASC ACCESS</label>
		<label className="text-secondary" >Exhausted Vascular Access:</label>
		<input className="form-control"type="text" value={this.props.canExhaustVascAccess} onChange={this.props.onChangeCanExhaustVascAccess} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN FUNCTN STAT</label>
		<label className="text-secondary" >Patient/s Functional Status:</label>
		<input className="form-control"type="text" value={this.props.canFunctnStat} onChange={this.props.onChangeCanFunctnStat} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN HGT CM</label>
		<label className="text-secondary" >Candidate/s Height (stored in cm):</label>
		<input className="form-control"type="number" value={this.props.canHgtCm} onChange={this.props.onChangeCanHgtCm} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN HGT WGT DT</label>
		<label className="text-secondary" >Date of Height & Weight Measurement (Ped Only):</label>
		<input className="form-control"type="datetime-local" value={this.props.canHgtWgtDt} onChange={this.props.onChangeCanHgtWgtDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN IABP</label>
		<label className="text-secondary" >Life Support: IABP:</label>
		<input className="form-control"type="text" value={this.props.canIabp} onChange={this.props.onChangeCanIabp} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN IV INOTROP</label>
		<label className="text-secondary" >Life Support: IV Inotropes:</label>
		<input className="form-control"type="text" value={this.props.canIvInotrop} onChange={this.props.onChangeCanIvInotrop} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST DIAL PRIOR WEEK</label>
		<label className="text-secondary" >Last non-blank val. of dialysis within prior week:</label>
		<input className="form-control"type="text" value={this.props.canLastDialPriorWeek} onChange={this.props.onChangeCanLastDialPriorWeek} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LIFE SUPPORT</label>
		<label className="text-secondary" >Patient on Life Support:</label>
		<input className="form-control"type="text" value={this.props.canLifeSupport} onChange={this.props.onChangeCanLifeSupport} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LIFE SUPPORT OTHER</label>
		<label className="text-secondary" >Life Support: Other Mechanism:</label>
		<input className="form-control"type="text" value={this.props.canLifeSupportOther} onChange={this.props.onChangeCanLifeSupportOther} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN MOST RECENT CREAT</label>
		<label className="text-secondary" >Most Recent Absolute Creatinine:</label>
		<input className="form-control"type="number" value={this.props.canMostRecentCreat} onChange={this.props.onChangeCanMostRecentCreat} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN MOST RECENT HGT CM</label>
		<label className="text-secondary" >Candidate/s most recent Waitlist Height in centimeter:</label>
		<input className="form-control"type="number" value={this.props.canMostRecentHgtCm} onChange={this.props.onChangeCanMostRecentHgtCm} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN MOST RECENT WGT KG</label>
		<label className="text-secondary" >Candidate/s most recent Waitlist Weight in kilograms:</label>
		<input className="form-control"type="number" value={this.props.canMostRecentWgtKg} onChange={this.props.onChangeCanMostRecentWgtKg} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN MOTOR DEVELOP</label>
		<label className="text-secondary" >Motor Development (Ped Only):</label>
		<input className="form-control"type="text" value={this.props.canMotorDevelop} onChange={this.props.onChangeCanMotorDevelop} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN MUSCLE WASTING</label>
		<label className="text-secondary" >Marked Muscle Wasting:</label>
		<input className="form-control"type="text" value={this.props.canMuscleWasting} onChange={this.props.onChangeCanMuscleWasting} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN NEOPLASM</label>
		<label className="text-secondary" >Neoplasm:</label>
		<input className="form-control"type="text" value={this.props.canNeoplasm} onChange={this.props.onChangeCanNeoplasm} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PGE</label>
		<label className="text-secondary" >Life Support: PGE:</label>
		<input className="form-control"type="text" value={this.props.canPge} onChange={this.props.onChangeCanPge} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN PHYSC CAPACITY</label>
		<label className="text-secondary" >Physical Capacity::</label>
		<input className="form-control"type="text" value={this.props.canPhyscCapacity} onChange={this.props.onChangeCanPhyscCapacity} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN TOT ALBUMIN</label>
		<label className="text-secondary" >Total Serum Albumin:</label>
		<input className="form-control"type="number" value={this.props.canTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN TOT BILI</label>
		<label className="text-secondary" >Total Bilirubin (IN Pediatric Only):</label>
		<input className="form-control"type="number" value={this.props.canTotBili} onChange={this.props.onChangeCanTotBili} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN VAD TAH</label>
		<label className="text-secondary" >Life Support: VAD/TAH:</label>
		<input className="form-control"type="text" value={this.props.canVadTah} onChange={this.props.onChangeCanVadTah} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN VARICEAL BLEEDING</label>
		<label className="text-secondary" >Variceal Bleeding within Last Two Weeks:</label>
		<input className="form-control"type="text" value={this.props.canVaricealBleeding} onChange={this.props.onChangeCanVaricealBleeding} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN VENTILATOR</label>
		<label className="text-secondary" >Life Support: Ventilator:</label>
		<input className="form-control"type="text" value={this.props.canVentilator} onChange={this.props.onChangeCanVentilator} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN WGT KG</label>
		<label className="text-secondary" >Candidate/s Weight in kilograms:</label>
		<input className="form-control"type="number" value={this.props.canWgtKg} onChange={this.props.onChangeCanWgtKg} />
	</div>
</div>
