<div className="d-flex flex-wrap bg-light">
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN ANASTOMOSIS</label>
		<label className="text-secondary" >Was anastomosis initiated?:</label>
		<input className="form-control"type="text" value={this.props.canAnastomosis} onChange={this.props.onChangeCanAnastomosis} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN SOURCE</label>
		<label className="text-secondary" >Source of Candidate Data: A =Active Waitlist:</label>
		<input className="form-control"type="text" value={this.props.canSource} onChange={this.props.onChangeCanSource} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN TRR EXISTS</label>
		<label className="text-secondary" >TRR found for this PX_ID-org_ty:</label>
		<input className="form-control"type="number" value={this.props.canTrrExists} onChange={this.props.onChangeCanTrrExists} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN TX COUNTRY</label>
		<label className="text-secondary" >Country of transplant:</label>
		<input className="form-control"type="text" value={this.props.canTxCountry} onChange={this.props.onChangeCanTxCountry} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >DONOR ID</label>
		<label className="text-secondary" >Encrypted Unique Donor ID (all donors) - foreign key:</label>
		<input className="form-control"type="number" readOnly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >DON TY</label>
		<label className="text-secondary" >Donor Type (C-deceased:</label>
		<input className="form-control"type="text" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >ORG AR</label>
		<label className="text-secondary" >Organ type with pancreas expanded to PTA and PAK:</label>
		<input className="form-control"type="text" value={this.props.orgAr} onChange={this.props.onChangeOrgAr} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS NEXTTX</label>
		<label className="text-secondary" >Transplant Date:</label>
		<input className="form-control"type="datetime-local" value={this.props.persNexttx} onChange={this.props.onChangePersNexttx} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS NEXTTX TRR ID</label>
		<label className="text-secondary" >Unique identifier for TRR - unique key:</label>
		<input className="form-control"type="number" readOnly value={this.props.persNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS OPTN DEATH DT</label>
		<label className="text-secondary" >OPTN Death date by unique person:</label>
		<input className="form-control"type="datetime-local" value={this.props.persOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS RESTRICT DEATH DT</label>
		<label className="text-secondary" >Restricted death date:</label>
		<input className="form-control"type="datetime-local" value={this.props.persRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS RESTRICT DEATH VRFY</label>
		<label className="text-secondary" >Restricted death verification level:</label>
		<input className="form-control"type="text" value={this.props.persRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >PERS SSA DEATH DT</label>
		<label className="text-secondary" >Death date determined from SSA database:</label>
		<input className="form-control"type="datetime-local" value={this.props.persSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >REC TX DT</label>
		<label className="text-secondary" >Transplant Date:</label>
		<input className="form-control"type="datetime-local" value={this.props.recTxDt} onChange={this.props.onChangeRecTxDt} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >REC TX PROCEDURE TY</label>
		<label className="text-secondary" >Transplant Procedure Type:</label>
		<input className="form-control"type="text" value={this.props.recTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy} />
	</div>
</div>
