<Form>
	<Form.Group controlId="num3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canAnastomosis} onChange={this.props.onChangeCanAnastomosis} />
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canSource} onChange={this.props.onChangeCanSource} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canTrrExists} onChange={this.props.onChangeCanTrrExists} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CTRYID</Form.Label>
		<Form.Control type="text" value={this.props.canTxCountry} onChange={this.props.onChangeCanTxCountry} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
	</Form.Group>
	<Form.Group controlId="char3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
	</Form.Group>
	<Form.Group controlId="char3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.orgAr} onChange={this.props.onChangeOrgAr} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.persNexttx} onChange={this.props.onChangePersNexttx} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.persNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.persOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.persRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} />
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label>$DTHVRFY</Form.Label>
		<Form.Control type="text" value={this.props.persRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.persSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.recTxDt} onChange={this.props.onChangeRecTxDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>TXPROC</Form.Label>
		<Form.Control type="text" value={this.props.recTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy} />
	</Form.Group>
</Form>
