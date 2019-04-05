<Form>
	<Form.Group controlId="num8">
		<Form.Label>ACDMACTV</Form.Label>
		<Form.Control type="text" value={this.props.canAcademicLevel} onChange={this.props.onChangeCanAcademicLevel} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>ACDMPRG</Form.Label>
		<Form.Control type="text" value={this.props.canAcademicProgress} onChange={this.props.onChangeCanAcademicProgress} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CTZNLDTC</Form.Label>
		<Form.Control type="text" value={this.props.canCitizenship} onChange={this.props.onChangeCanCitizenship} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>EDLEVEL</Form.Label>
		<Form.Control type="text" value={this.props.canEducation} onChange={this.props.onChangeCanEducation} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>EMPLSTAT</Form.Label>
		<Form.Control type="text" value={this.props.canEmplStat} onChange={this.props.onChangeCanEmplStat} />
	</Form.Group>
	<Form.Group controlId="char10">
		<Form.Label>$ETHSR</Form.Label>
		<Form.Control type="text" value={this.props.canEthnicitySrtr} onChange={this.props.onChangeCanEthnicitySrtr} />
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canGender} onChange={this.props.onChangeCanGender} />
	</Form.Group>
	<Form.Group controlId="char2">
		<Form.Label>$STATE</Form.Label>
		<Form.Control type="text" value={this.props.canPermState} onChange={this.props.onChangeCanPermState} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PRMSRCPY</Form.Label>
		<Form.Control type="text" value={this.props.canPrimaryPay} onChange={this.props.onChangeCanPrimaryPay} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>RACE</Form.Label>
		<Form.Control type="text" value={this.props.canRace} onChange={this.props.onChangeCanRace} />
	</Form.Group>
	<Form.Group controlId="char10">
		<Form.Label>$RACEBSR</Form.Label>
		<Form.Control type="text" value={this.props.canRaceSrtr} onChange={this.props.onChangeCanRaceSrtr} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>SNDSRCPY</Form.Label>
		<Form.Control type="text" value={this.props.canSecondaryPay} onChange={this.props.onChangeCanSecondaryPay} />
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canWorkIncome} onChange={this.props.onChangeCanWorkIncome} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>NOTWRK</Form.Label>
		<Form.Control type="text" value={this.props.canWorkNoStat} onChange={this.props.onChangeCanWorkNoStat} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>WRKNCM</Form.Label>
		<Form.Control type="text" value={this.props.canWorkYesStat} onChange={this.props.onChangeCanWorkYesStat} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" value={this.props.canYearEntryUs} onChange={this.props.onChangeCanYearEntryUs} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.persId} onChange={this.props.onChangePersId} />
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label></Form.Label>
		<Form.Control type="text" readonly value={this.props.pxId} onChange={this.props.onChangePxId} />
	</Form.Group>
</Form>
