<Form>
	<Form.Group controlId="num3">
		<Form.Label>CAN ANASTOMOSIS</Form.Label>
		<Form.Control type="text"value={this.props.CanAnastomosis} onChange={this.props.onChangeCanAnastomosis} >
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label>CAN SOURCE</Form.Label>
		<Form.Control type="text"value={this.props.CanSource} onChange={this.props.onChangeCanSource} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN TRR EXISTS</Form.Label>
		<Form.Control type="text"value={this.props.CanTrrExists} onChange={this.props.onChangeCanTrrExists} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN TX COUNTRY</Form.Label>
		<Form.Control type="text"value={this.props.CanTxCountry} onChange={this.props.onChangeCanTxCountry} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>DONOR ID</Form.Label>
		<Form.Control type="text" readonlyvalue={this.props.DonorId} onChange={this.props.onChangeDonorId} >
	</Form.Group>
	<Form.Group controlId="char3">
		<Form.Label>DON TY</Form.Label>
		<Form.Control type="text"value={this.props.DonTy} onChange={this.props.onChangeDonTy} >
	</Form.Group>
	<Form.Group controlId="char3">
		<Form.Label>ORG AR</Form.Label>
		<Form.Control type="text"value={this.props.OrgAr} onChange={this.props.onChangeOrgAr} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS NEXTTX</Form.Label>
		<Form.Control type="date"value={this.props.PersNexttx} onChange={this.props.onChangePersNexttx} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS NEXTTX TRR ID</Form.Label>
		<Form.Control type="text" readonlyvalue={this.props.PersNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS OPTN DEATH DT</Form.Label>
		<Form.Control type="date"value={this.props.PersOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS RESTRICT DEATH DT</Form.Label>
		<Form.Control type="date"value={this.props.PersRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} >
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label>PERS RESTRICT DEATH VRFY</Form.Label>
		<Form.Control type="text"value={this.props.PersRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS SSA DEATH DT</Form.Label>
		<Form.Control type="date"value={this.props.PersSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>REC TX DT</Form.Label>
		<Form.Control type="date"value={this.props.RecTxDt} onChange={this.props.onChangeRecTxDt} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>REC TX PROCEDURE TY</Form.Label>
		<Form.Control type="text"value={this.props.RecTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy} >
	</Form.Group>
</Form>
