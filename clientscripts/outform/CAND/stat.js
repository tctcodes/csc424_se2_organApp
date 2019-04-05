<Form>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canActivateDt} onChange={this.props.onChangeCanActivateDt} />
	</Form.Group>
	<Form.Group controlId="num3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canAnesthPriorDeath} onChange={this.props.onChangeCanAnesthPriorDeath} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canDeathDt} onChange={this.props.onChangeCanDeathDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canEndwlfu} onChange={this.props.onChangeCanEndwlfu} />
	</Form.Group>
	<Form.Group controlId="num3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canFollowsOpoAlloc} onChange={this.props.onChangeCanFollowsOpoAlloc} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CANDSTAT</Form.Label>
		<Form.Control type="text" value={this.props.canInitActStatCd} onChange={this.props.onChangeCanInitActStatCd} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canInitActStatDt} onChange={this.props.onChangeCanInitActStatDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canInitInactStatDt} onChange={this.props.onChangeCanInitInactStatDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CANDSTAT</Form.Label>
		<Form.Control type="text" value={this.props.canInitStat} onChange={this.props.onChangeCanInitStat} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canLastActStatDt} onChange={this.props.onChangeCanLastActStatDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canLastInactStatDt} onChange={this.props.onChangeCanLastInactStatDt} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CANDSTAT</Form.Label>
		<Form.Control type="text" value={this.props.canLastStat} onChange={this.props.onChangeCanLastStat} />
	</Form.Group>
	<Form.Group controlId="num4">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.canListingCtrId} onChange={this.props.onChangeCanListingCtrId} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canListingDt} onChange={this.props.onChangeCanListingDt} />
	</Form.Group>
	<Form.Group controlId="num4">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.canListingOpoId} onChange={this.props.onChangeCanListingOpoId} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>REMCD</Form.Label>
		<Form.Control type="text" value={this.props.canRemCd} onChange={this.props.onChangeCanRemCd} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>COD</Form.Label>
		<Form.Control type="text" value={this.props.canRemCod} onChange={this.props.onChangeCanRemCod} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>MMDDYY</Form.Label>
		<Form.Control type="date" value={this.props.canRemDt} onChange={this.props.onChangeCanRemDt} />
	</Form.Group>
	<Form.Group controlId="num3">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canStatExtendFlg} onChange={this.props.onChangeCanStatExtendFlg} />
	</Form.Group>
</Form>
