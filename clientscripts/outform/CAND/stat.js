<div className="d-flex flex-wrap bg-light">
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ACTIVATE DT</label>
		<label className="text-secondary" >Activation Date - date/time waiting time clock started:</label>
		<input className="form-control"type="datetime-local" value={this.props.canActivateDt} onChange={this.props.onChangeCanActivateDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ANESTH PRIOR DEATH</label>
		<label className="text-secondary" >Did the patient go to the operating room and receive anesthesia for transplant prior to death?:</label>
		<input className="form-control"type="text" value={this.props.canAnesthPriorDeath} onChange={this.props.onChangeCanAnesthPriorDeath} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN DEATH DT</label>
		<label className="text-secondary" >If removed due to Death:</label>
		<input className="form-control"type="datetime-local" value={this.props.canDeathDt} onChange={this.props.onChangeCanDeathDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ENDWLFU</label>
		<label className="text-secondary" >Candidate cohort censoring date:</label>
		<input className="form-control"type="datetime-local" value={this.props.canEndwlfu} onChange={this.props.onChangeCanEndwlfu} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN FOLLOWS OPO ALLOC</label>
		<label className="text-secondary" >Does candidate follow the OPO/s current allocation:</label>
		<input className="form-control"type="text" value={this.props.canFollowsOpoAlloc} onChange={this.props.onChangeCanFollowsOpoAlloc} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT ACT STAT CD</label>
		<label className="text-secondary" >First Active Status:</label>
		<input className="form-control"type="text" value={this.props.canInitActStatCd} onChange={this.props.onChangeCanInitActStatCd} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT ACT STAT DT</label>
		<label className="text-secondary" >Date of First Active Status:</label>
		<input className="form-control"type="datetime-local" value={this.props.canInitActStatDt} onChange={this.props.onChangeCanInitActStatDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT INACT STAT DT</label>
		<label className="text-secondary" >Date of First Inactive Status:</label>
		<input className="form-control"type="datetime-local" value={this.props.canInitInactStatDt} onChange={this.props.onChangeCanInitInactStatDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT STAT</label>
		<label className="text-secondary" >Initial Status of Patient:</label>
		<input className="form-control"type="text" value={this.props.canInitStat} onChange={this.props.onChangeCanInitStat} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST ACT STAT DT</label>
		<label className="text-secondary" >Last Date of Active Status:</label>
		<input className="form-control"type="datetime-local" value={this.props.canLastActStatDt} onChange={this.props.onChangeCanLastActStatDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST INACT STAT DT</label>
		<label className="text-secondary" >Last Date of Inactive Status:</label>
		<input className="form-control"type="datetime-local" value={this.props.canLastInactStatDt} onChange={this.props.onChangeCanLastInactStatDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST STAT</label>
		<label className="text-secondary" >Last Status of Patient (with 2 day rule):</label>
		<input className="form-control"type="text" value={this.props.canLastStat} onChange={this.props.onChangeCanLastStat} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LISTING CTR ID</label>
		<label className="text-secondary" >CAN_LISTING_ Center ID:</label>
		<input className="form-control"type="number" readOnly value={this.props.canListingCtrId} onChange={this.props.onChangeCanListingCtrId} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LISTING DT</label>
		<label className="text-secondary" >Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers:</label>
		<input className="form-control"type="datetime-local" value={this.props.canListingDt} onChange={this.props.onChangeCanListingDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LISTING OPO ID</label>
		<label className="text-secondary" >OPO Serving Listing Center:</label>
		<input className="form-control"type="number" readOnly value={this.props.canListingOpoId} onChange={this.props.onChangeCanListingOpoId} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN REM CD</label>
		<label className="text-secondary" >Reason why candidate was removed (removal code):</label>
		<input className="form-control"type="text" value={this.props.canRemCd} onChange={this.props.onChangeCanRemCd} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN REM COD</label>
		<label className="text-secondary" >Cause of Death:</label>
		<input className="form-control"type="text" value={this.props.canRemCod} onChange={this.props.onChangeCanRemCod} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN REM DT</label>
		<label className="text-secondary" >rem_dt /remreg:</label>
		<input className="form-control"type="datetime-local" value={this.props.canRemDt} onChange={this.props.onChangeCanRemDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN STAT EXTEND FLG</label>
		<label className="text-secondary" >Status Extension granted for Liver candidate:</label>
		<input className="form-control"type="text" value={this.props.canStatExtendFlg} onChange={this.props.onChangeCanStatExtendFlg} />
	</div>
</div>
