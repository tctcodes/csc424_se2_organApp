<div className="d-flex flex-wrap bg-light">
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT SRTR LAB MELD</label>
		<label className="text-secondary" >First SRTR MELD/PELD given:</label>
		<input className="form-control"type="text" value={this.props.canInitSrtrLabMeld} onChange={this.props.onChangeCanInitSrtrLabMeld} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN INIT SRTR LAB MELD TY</label>
		<label className="text-secondary" >First SRTR MELD/PELD type given:</label>
		<input className="form-control"type="text" value={this.props.canInitSrtrLabMeldTy} onChange={this.props.onChangeCanInitSrtrLabMeldTy} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST ALBUMIN</label>
		<label className="text-secondary" >Candidate Last Albumin (used for MELD):</label>
		<input className="form-control"type="number" value={this.props.canLastAlbumin} onChange={this.props.onChangeCanLastAlbumin} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST ASCITES</label>
		<label className="text-secondary" >Candidate Last Ascites (used for MELD):</label>
		<input className="form-control"type="text" value={this.props.canLastAscites} onChange={this.props.onChangeCanLastAscites} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST BILI</label>
		<label className="text-secondary" >Candidate Last Bilirubin (used for MELD):</label>
		<input className="form-control"type="number" value={this.props.canLastBili} onChange={this.props.onChangeCanLastBili} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST ENCEPH</label>
		<label className="text-secondary" >Candidate Last Encephalopathy (used for MELD):</label>
		<input className="form-control"type="text" value={this.props.canLastEnceph} onChange={this.props.onChangeCanLastEnceph} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST INR</label>
		<label className="text-secondary" >Candidate Last INR (used for MELD):</label>
		<input className="form-control"type="number" value={this.props.canLastInr} onChange={this.props.onChangeCanLastInr} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST SERUM CREAT</label>
		<label className="text-secondary" >Candidate Last Serum Creatinine mg/dl (used for MELD):</label>
		<input className="form-control"type="number" value={this.props.canLastSerumCreat} onChange={this.props.onChangeCanLastSerumCreat} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST SERUM SODIUM</label>
		<label className="text-secondary" >Candidate Last Serum Sodium (used for MELD):</label>
		<input className="form-control"type="number" value={this.props.canLastSerumSodium} onChange={this.props.onChangeCanLastSerumSodium} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST SRTR LAB MELD</label>
		<label className="text-secondary" >Last SRTR MELD/PELD given:</label>
		<input className="form-control"type="text" value={this.props.canLastSrtrLabMeld} onChange={this.props.onChangeCanLastSrtrLabMeld} />
	</div>
	<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
		<label className="font-weight-bold" >CAN LAST SRTR LAB MELD TY</label>
		<label className="text-secondary" >Last SRTR MELD/PELD type given:</label>
		<input className="form-control"type="text" value={this.props.canLastSrtrLabMeldTy} onChange={this.props.onChangeCanLastSrtrLabMeldTy} />
	</div>
</div>
