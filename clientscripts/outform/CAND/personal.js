<Form>
	<Form.Group controlId="num8">
		<Form.Label>CAN ACADEMIC LEVEL</Form.Label>
		<Form.Control type="text"value={this.props.CanAcademicLevel} onChange={this.props.onChangeCanAcademicLevel} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN ACADEMIC PROGRESS</Form.Label>
		<Form.Control type="text"value={this.props.CanAcademicProgress} onChange={this.props.onChangeCanAcademicProgress} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN CITIZENSHIP</Form.Label>
		<Form.Control type="text"value={this.props.CanCitizenship} onChange={this.props.onChangeCanCitizenship} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN EDUCATION</Form.Label>
		<Form.Control type="text"value={this.props.CanEducation} onChange={this.props.onChangeCanEducation} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN EMPL STAT</Form.Label>
		<Form.Control type="text"value={this.props.CanEmplStat} onChange={this.props.onChangeCanEmplStat} >
	</Form.Group>
	<Form.Group controlId="char10">
		<Form.Label>CAN ETHNICITY SRTR</Form.Label>
		<Form.Control type="text"value={this.props.CanEthnicitySrtr} onChange={this.props.onChangeCanEthnicitySrtr} >
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label>CAN GENDER</Form.Label>
		<Form.Control type="text"value={this.props.CanGender} onChange={this.props.onChangeCanGender} >
	</Form.Group>
	<Form.Group controlId="char2">
		<Form.Label>CAN PERM STATE</Form.Label>
		<Form.Control type="text"value={this.props.CanPermState} onChange={this.props.onChangeCanPermState} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN PRIMARY PAY</Form.Label>
		<Form.Control type="text"value={this.props.CanPrimaryPay} onChange={this.props.onChangeCanPrimaryPay} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN RACE</Form.Label>
		<Form.Control type="text"value={this.props.CanRace} onChange={this.props.onChangeCanRace} >
	</Form.Group>
	<Form.Group controlId="char10">
		<Form.Label>CAN RACE SRTR</Form.Label>
		<Form.Control type="text"value={this.props.CanRaceSrtr} onChange={this.props.onChangeCanRaceSrtr} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN SECONDARY PAY</Form.Label>
		<Form.Control type="text"value={this.props.CanSecondaryPay} onChange={this.props.onChangeCanSecondaryPay} >
	</Form.Group>
	<Form.Group controlId="char1">
		<Form.Label>CAN WORK INCOME</Form.Label>
		<Form.Control type="text"value={this.props.CanWorkIncome} onChange={this.props.onChangeCanWorkIncome} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN WORK NO STAT</Form.Label>
		<Form.Control type="text"value={this.props.CanWorkNoStat} onChange={this.props.onChangeCanWorkNoStat} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN WORK YES STAT</Form.Label>
		<Form.Control type="text"value={this.props.CanWorkYesStat} onChange={this.props.onChangeCanWorkYesStat} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>CAN YEAR ENTRY US</Form.Label>
		<Form.Control type="text"value={this.props.CanYearEntryUs} onChange={this.props.onChangeCanYearEntryUs} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PERS ID</Form.Label>
		<Form.Control type="text" readonlyvalue={this.props.PersId} onChange={this.props.onChangePersId} >
	</Form.Group>
	<Form.Group controlId="num8">
		<Form.Label>PX ID</Form.Label>
		<Form.Control type="text" readonlyvalue={this.props.PxId} onChange={this.props.onChangePxId} >
	</Form.Group>
</Form>
