/**
 *
 * CanForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Tabs, Tab, Form } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';


export class CanForm extends React.Component {
    
    render(){
        return (<div>
             <Helmet>
                <title>CanForm</title>
                <meta name="description" content="Description of CanForm" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
            </Helmet>
            <Tabs defaultActiveKey="Personal" id="uncontrolled-tab-example">
            <Tab eventKey="Personal" title="Personal">
                    <Form>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ACADEMIC LEVEL</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcademicLevel} onChange={this.props.onChangeCanAcademicLevel} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ACADEMIC PROGRESS</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcademicProgress} onChange={this.props.onChangeCanAcademicProgress} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN CITIZENSHIP</Form.Label>
                            <Form.Control type="text"value={this.props.CanCitizenship} onChange={this.props.onChangeCanCitizenship} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN EDUCATION</Form.Label>
                            <Form.Control type="text"value={this.props.CanEducation} onChange={this.props.onChangeCanEducation} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN EMPL STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanEmplStat} onChange={this.props.onChangeCanEmplStat} />
                        </Form.Group>
                        <Form.Group controlId="char10">
                            <Form.Label>CAN ETHNICITY SRTR</Form.Label>
                            <Form.Control type="text"value={this.props.CanEthnicitySrtr} onChange={this.props.onChangeCanEthnicitySrtr} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN GENDER</Form.Label>
                            <Form.Control type="text"value={this.props.CanGender} onChange={this.props.onChangeCanGender} />
                        </Form.Group>
                        <Form.Group controlId="char2">
                            <Form.Label>CAN PERM STATE</Form.Label>
                            <Form.Control type="text"value={this.props.CanPermState} onChange={this.props.onChangeCanPermState} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PRIMARY PAY</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrimaryPay} onChange={this.props.onChangeCanPrimaryPay} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN RACE</Form.Label>
                            <Form.Control type="text"value={this.props.CanRace} onChange={this.props.onChangeCanRace} />
                        </Form.Group>
                        <Form.Group controlId="char10">
                            <Form.Label>CAN RACE SRTR</Form.Label>
                            <Form.Control type="text"value={this.props.CanRaceSrtr} onChange={this.props.onChangeCanRaceSrtr} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN SECONDARY PAY</Form.Label>
                            <Form.Control type="text"value={this.props.CanSecondaryPay} onChange={this.props.onChangeCanSecondaryPay} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN WORK INCOME</Form.Label>
                            <Form.Control type="text"value={this.props.CanWorkIncome} onChange={this.props.onChangeCanWorkIncome} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN WORK NO STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanWorkNoStat} onChange={this.props.onChangeCanWorkNoStat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN WORK YES STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanWorkYesStat} onChange={this.props.onChangeCanWorkYesStat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN YEAR ENTRY US</Form.Label>
                            <Form.Control type="text"value={this.props.CanYearEntryUs} onChange={this.props.onChangeCanYearEntryUs} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.PersId} onChange={this.props.onChangePersId} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PX ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.PxId} onChange={this.props.onChangePxId} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="History" title="History">
                    <Form>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ANGINA</Form.Label>
                            <Form.Control type="text"value={this.props.CanAngina} onChange={this.props.onChangeCanAngina} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ANGINA CAD</Form.Label>
                            <Form.Control type="text"value={this.props.CanAnginaCad} onChange={this.props.onChangeCanAnginaCad} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ASCITES</Form.Label>
                            <Form.Control type="text"value={this.props.CanAscites} onChange={this.props.onChangeCanAscites} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN BACTERIA PERIT</Form.Label>
                            <Form.Control type="text"value={this.props.CanBacteriaPerit} onChange={this.props.onChangeCanBacteriaPerit} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN CEREB VASC</Form.Label>
                            <Form.Control type="text"value={this.props.CanCerebVasc} onChange={this.props.onChangeCanCerebVasc} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN COGNITIVE DEVELOP</Form.Label>
                            <Form.Control type="text"value={this.props.CanCognitiveDevelop} onChange={this.props.onChangeCanCognitiveDevelop} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DIAB</Form.Label>
                            <Form.Control type="text"value={this.props.CanDiab} onChange={this.props.onChangeCanDiab} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DIAB TY</Form.Label>
                            <Form.Control type="text"value={this.props.CanDiabTy} onChange={this.props.onChangeCanDiabTy} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DIAL</Form.Label>
                            <Form.Control type="text"value={this.props.CanDial} onChange={this.props.onChangeCanDial} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN DRUG TREAT COPD</Form.Label>
                            <Form.Control type="text"value={this.props.CanDrugTreatCopd} onChange={this.props.onChangeCanDrugTreatCopd} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN DRUG TREAT HYPERTEN</Form.Label>
                            <Form.Control type="text"value={this.props.CanDrugTreatHyperten} onChange={this.props.onChangeCanDrugTreatHyperten} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ENCEPH</Form.Label>
                            <Form.Control type="text"value={this.props.CanEnceph} onChange={this.props.onChangeCanEnceph} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN FUNGAL SEPSIS</Form.Label>
                            <Form.Control type="text"value={this.props.CanFungalSepsis} onChange={this.props.onChangeCanFungalSepsis} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN LIVING DON TX</Form.Label>
                            <Form.Control type="text"value={this.props.CanLivingDonTx} onChange={this.props.onChangeCanLivingDonTx} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN LI DYSFUNCTN</Form.Label>
                            <Form.Control type="text"value={this.props.CanLiDysfunctn} onChange={this.props.onChangeCanLiDysfunctn} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN LOSS VASC ACCESS</Form.Label>
                            <Form.Control type="text"value={this.props.CanLossVascAccess} onChange={this.props.onChangeCanLossVascAccess} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN NEW PREV PI TX</Form.Label>
                            <Form.Control type="text"value={this.props.CanNewPrevPiTx} onChange={this.props.onChangeCanNewPrevPiTx} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN NON RECON GI</Form.Label>
                            <Form.Control type="text"value={this.props.CanNonReconGi} onChange={this.props.onChangeCanNonReconGi} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PEPTIC ULCER</Form.Label>
                            <Form.Control type="text"value={this.props.CanPepticUlcer} onChange={this.props.onChangeCanPepticUlcer} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PERIPH VASC</Form.Label>
                            <Form.Control type="text"value={this.props.CanPeriphVasc} onChange={this.props.onChangeCanPeriphVasc} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PORTAL VEIN</Form.Label>
                            <Form.Control type="text"value={this.props.CanPortalVein} onChange={this.props.onChangeCanPortalVein} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PREV ABDOM SURG</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevAbdomSurg} onChange={this.props.onChangeCanPrevAbdomSurg} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV BONE MARROW DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanPrevBoneMarrowDt} onChange={this.props.onChangeCanPrevBoneMarrowDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV BONE MARROW TX</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevBoneMarrowTx} onChange={this.props.onChangeCanPrevBoneMarrowTx} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV HL</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevHl} onChange={this.props.onChangeCanPrevHl} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV HR</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevHr} onChange={this.props.onChangeCanPrevHr} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV IN</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevIn} onChange={this.props.onChangeCanPrevIn} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV KI</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevKi} onChange={this.props.onChangeCanPrevKi} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV KP</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevKp} onChange={this.props.onChangeCanPrevKp} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV LI</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevLi} onChange={this.props.onChangeCanPrevLi} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV LU</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevLu} onChange={this.props.onChangeCanPrevLu} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV PA</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevPa} onChange={this.props.onChangeCanPrevPa} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PREV TX</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevTx} onChange={this.props.onChangeCanPrevTx} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PREV TXFUS</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrevTxfus} onChange={this.props.onChangeCanPrevTxfus} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PULM EMBOL</Form.Label>
                            <Form.Control type="text"value={this.props.CanPulmEmbol} onChange={this.props.onChangeCanPulmEmbol} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN RECUR SEPSIS</Form.Label>
                            <Form.Control type="text"value={this.props.CanRecurSepsis} onChange={this.props.onChangeCanRecurSepsis} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN TIPSS</Form.Label>
                            <Form.Control type="text"value={this.props.CanTipss} onChange={this.props.onChangeCanTipss} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="Physiology" title="Physiology">
                    <Form>
                        <Form.Group controlId="char3">
                            <Form.Label>CAN ABO</Form.Label>
                            <Form.Control type="text"value={this.props.CanAbo} onChange={this.props.onChangeCanAbo} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN AGE AT LISTING</Form.Label>
                            <Form.Control type="text"value={this.props.CanAgeAtListing} onChange={this.props.onChangeCanAgeAtListing} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN AGE IN MONTHS AT LISTING</Form.Label>
                            <Form.Control type="text"value={this.props.CanAgeInMonthsAtListing} onChange={this.props.onChangeCanAgeInMonthsAtListing} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN ARTIFICIAL LI</Form.Label>
                            <Form.Control type="text"value={this.props.CanArtificialLi} onChange={this.props.onChangeCanArtificialLi} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN BMI</Form.Label>
                            <Form.Control type="text"value={this.props.CanBmi} onChange={this.props.onChangeCanBmi} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DGN</Form.Label>
                            <Form.Control type="text"value={this.props.CanDgn} onChange={this.props.onChangeCanDgn} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DGN2</Form.Label>
                            <Form.Control type="text"value={this.props.CanDgn2} onChange={this.props.onChangeCanDgn2} />
                        </Form.Group>
                        <Form.Group controlId="char50">
                            <Form.Label>CAN DGN OSTXT</Form.Label>
                            <Form.Control as="textarea" rows="3"value={this.props.CanDgnOstxt} onChange={this.props.onChangeCanDgnOstxt} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN ECMO</Form.Label>
                            <Form.Control type="text"value={this.props.CanEcmo} onChange={this.props.onChangeCanEcmo} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ELECTROLYTE</Form.Label>
                            <Form.Control type="text"value={this.props.CanElectrolyte} onChange={this.props.onChangeCanElectrolyte} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN EXHAUST VASC ACCESS</Form.Label>
                            <Form.Control type="text"value={this.props.CanExhaustVascAccess} onChange={this.props.onChangeCanExhaustVascAccess} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN FUNCTN STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanFunctnStat} onChange={this.props.onChangeCanFunctnStat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN HGT CM</Form.Label>
                            <Form.Control type="text"value={this.props.CanHgtCm} onChange={this.props.onChangeCanHgtCm} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN HGT WGT DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanHgtWgtDt} onChange={this.props.onChangeCanHgtWgtDt} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN IABP</Form.Label>
                            <Form.Control type="text"value={this.props.CanIabp} onChange={this.props.onChangeCanIabp} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN IV INOTROP</Form.Label>
                            <Form.Control type="text"value={this.props.CanIvInotrop} onChange={this.props.onChangeCanIvInotrop} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN LAST DIAL PRIOR WEEK</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastDialPriorWeek} onChange={this.props.onChangeCanLastDialPriorWeek} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN LIFE SUPPORT</Form.Label>
                            <Form.Control type="text"value={this.props.CanLifeSupport} onChange={this.props.onChangeCanLifeSupport} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN LIFE SUPPORT OTHER</Form.Label>
                            <Form.Control type="text"value={this.props.CanLifeSupportOther} onChange={this.props.onChangeCanLifeSupportOther} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MOST RECENT CREAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanMostRecentCreat} onChange={this.props.onChangeCanMostRecentCreat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MOST RECENT HGT CM</Form.Label>
                            <Form.Control type="text"value={this.props.CanMostRecentHgtCm} onChange={this.props.onChangeCanMostRecentHgtCm} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MOST RECENT WGT KG</Form.Label>
                            <Form.Control type="text"value={this.props.CanMostRecentWgtKg} onChange={this.props.onChangeCanMostRecentWgtKg} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MOTOR DEVELOP</Form.Label>
                            <Form.Control type="text"value={this.props.CanMotorDevelop} onChange={this.props.onChangeCanMotorDevelop} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN MUSCLE WASTING</Form.Label>
                            <Form.Control type="text"value={this.props.CanMuscleWasting} onChange={this.props.onChangeCanMuscleWasting} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN NEOPLASM</Form.Label>
                            <Form.Control type="text"value={this.props.CanNeoplasm} onChange={this.props.onChangeCanNeoplasm} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN PGE</Form.Label>
                            <Form.Control type="text"value={this.props.CanPge} onChange={this.props.onChangeCanPge} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN PHYSC CAPACITY</Form.Label>
                            <Form.Control type="text"value={this.props.CanPhyscCapacity} onChange={this.props.onChangeCanPhyscCapacity} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN TOT ALBUMIN</Form.Label>
                            <Form.Control type="text"value={this.props.CanTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN TOT BILI</Form.Label>
                            <Form.Control type="text"value={this.props.CanTotBili} onChange={this.props.onChangeCanTotBili} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN VAD TAH</Form.Label>
                            <Form.Control type="text"value={this.props.CanVadTah} onChange={this.props.onChangeCanVadTah} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN VARICEAL BLEEDING</Form.Label>
                            <Form.Control type="text"value={this.props.CanVaricealBleeding} onChange={this.props.onChangeCanVaricealBleeding} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN VENTILATOR</Form.Label>
                            <Form.Control type="text"value={this.props.CanVentilator} onChange={this.props.onChangeCanVentilator} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN WGT KG</Form.Label>
                            <Form.Control type="text"value={this.props.CanWgtKg} onChange={this.props.onChangeCanWgtKg} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="MELD/PLED" title="MELD/PLED">
                    <Form>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN INIT SRTR LAB MELD</Form.Label>
                            <Form.Control type="text"value={this.props.CanInitSrtrLabMeld} onChange={this.props.onChangeCanInitSrtrLabMeld} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN INIT SRTR LAB MELD TY</Form.Label>
                            <Form.Control type="text"value={this.props.CanInitSrtrLabMeldTy} onChange={this.props.onChangeCanInitSrtrLabMeldTy} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST ALBUMIN</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastAlbumin} onChange={this.props.onChangeCanLastAlbumin} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST ASCITES</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastAscites} onChange={this.props.onChangeCanLastAscites} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST BILI</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastBili} onChange={this.props.onChangeCanLastBili} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST ENCEPH</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastEnceph} onChange={this.props.onChangeCanLastEnceph} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST INR</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastInr} onChange={this.props.onChangeCanLastInr} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST SERUM CREAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastSerumCreat} onChange={this.props.onChangeCanLastSerumCreat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST SERUM SODIUM</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastSerumSodium} onChange={this.props.onChangeCanLastSerumSodium} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST SRTR LAB MELD</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastSrtrLabMeld} onChange={this.props.onChangeCanLastSrtrLabMeld} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN LAST SRTR LAB MELD TY</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastSrtrLabMeldTy} onChange={this.props.onChangeCanLastSrtrLabMeldTy} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="Match" title="Match">
                    <Form>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT A2 DON</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptA2Don} onChange={this.props.onChangeCanAcptA2Don} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT ABO INCOMP</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptAboIncomp} onChange={this.props.onChangeCanAcptAboIncomp} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT EXTRACORP LI</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptExtracorpLi} onChange={this.props.onChangeCanAcptExtracorpLi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT HBC POS</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptHbcPos} onChange={this.props.onChangeCanAcptHbcPos} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT HCV POS</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptHcvPos} onChange={this.props.onChangeCanAcptHcvPos} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT LI SEG</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptLiSeg} onChange={this.props.onChangeCanAcptLiSeg} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT ORG OTHER TEAM</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptOrgOtherTeam} onChange={this.props.onChangeCanAcptOrgOtherTeam} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT PROCUR KI</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptProcurKi} onChange={this.props.onChangeCanAcptProcurKi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT PROCUR LI</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptProcurLi} onChange={this.props.onChangeCanAcptProcurLi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN ACPT PROCUR PA</Form.Label>
                            <Form.Control type="text"value={this.props.CanAcptProcurPa} onChange={this.props.onChangeCanAcptProcurPa} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN CTP SCORE</Form.Label>
                            <Form.Control type="text"value={this.props.CanCtpScore} onChange={this.props.onChangeCanCtpScore} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MAX AGE</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaxAge} onChange={this.props.onChangeCanMaxAge} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MAX MILE</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaxMile} onChange={this.props.onChangeCanMaxMile} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MAX WGT</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaxWgt} onChange={this.props.onChangeCanMaxWgt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MED COND</Form.Label>
                            <Form.Control type="text"value={this.props.CanMedCond} onChange={this.props.onChangeCanMedCond} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MIN AGE</Form.Label>
                            <Form.Control type="text"value={this.props.CanMinAge} onChange={this.props.onChangeCanMinAge} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MIN WGT</Form.Label>
                            <Form.Control type="text"value={this.props.CanMinWgt} onChange={this.props.onChangeCanMinWgt} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN PRELIM XMATCH REQUEST</Form.Label>
                            <Form.Control type="text"value={this.props.CanPrelimXmatchRequest} onChange={this.props.onChangeCanPrelimXmatchRequest} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN TIEBREAKER DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanTiebreakerDt} onChange={this.props.onChangeCanTiebreakerDt} />
                        </Form.Group>
                        <Form.Group controlId="char4">
                            <Form.Label>WL ORG</Form.Label>
                            <Form.Control type="text"value={this.props.WlOrg} onChange={this.props.onChangeWlOrg} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="Status" title="Status">
                    <Form>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ACTIVATE DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanActivateDt} onChange={this.props.onChangeCanActivateDt} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN ANESTH PRIOR DEATH</Form.Label>
                            <Form.Control type="text"value={this.props.CanAnesthPriorDeath} onChange={this.props.onChangeCanAnesthPriorDeath} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN DEATH DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanDeathDt} onChange={this.props.onChangeCanDeathDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN ENDWLFU</Form.Label>
                            <Form.Control type="date"value={this.props.CanEndwlfu} onChange={this.props.onChangeCanEndwlfu} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN FOLLOWS OPO ALLOC</Form.Label>
                            <Form.Control type="text"value={this.props.CanFollowsOpoAlloc} onChange={this.props.onChangeCanFollowsOpoAlloc} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN INIT ACT STAT CD</Form.Label>
                            <Form.Control type="text"value={this.props.CanInitActStatCd} onChange={this.props.onChangeCanInitActStatCd} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN INIT ACT STAT DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanInitActStatDt} onChange={this.props.onChangeCanInitActStatDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN INIT INACT STAT DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanInitInactStatDt} onChange={this.props.onChangeCanInitInactStatDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN INIT STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanInitStat} onChange={this.props.onChangeCanInitStat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST ACT STAT DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanLastActStatDt} onChange={this.props.onChangeCanLastActStatDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST INACT STAT DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanLastInactStatDt} onChange={this.props.onChangeCanLastInactStatDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LAST STAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanLastStat} onChange={this.props.onChangeCanLastStat} />
                        </Form.Group>
                        <Form.Group controlId="num4">
                            <Form.Label>CAN LISTING CTR ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.CanListingCtrId} onChange={this.props.onChangeCanListingCtrId} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN LISTING DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanListingDt} onChange={this.props.onChangeCanListingDt} />
                        </Form.Group>
                        <Form.Group controlId="num4">
                            <Form.Label>CAN LISTING OPO ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.CanListingOpoId} onChange={this.props.onChangeCanListingOpoId} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN REM CD</Form.Label>
                            <Form.Control type="text"value={this.props.CanRemCd} onChange={this.props.onChangeCanRemCd} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN REM COD</Form.Label>
                            <Form.Control type="text"value={this.props.CanRemCod} onChange={this.props.onChangeCanRemCod} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN REM DT</Form.Label>
                            <Form.Control type="date"value={this.props.CanRemDt} onChange={this.props.onChangeCanRemDt} />
                        </Form.Group>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN STAT EXTEND FLG</Form.Label>
                            <Form.Control type="text"value={this.props.CanStatExtendFlg} onChange={this.props.onChangeCanStatExtendFlg} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="Transplant" title="Transplant">
                    <Form>
                        <Form.Group controlId="num3">
                            <Form.Label>CAN ANASTOMOSIS</Form.Label>
                            <Form.Control type="text"value={this.props.CanAnastomosis} onChange={this.props.onChangeCanAnastomosis} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN SOURCE</Form.Label>
                            <Form.Control type="text"value={this.props.CanSource} onChange={this.props.onChangeCanSource} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN TRR EXISTS</Form.Label>
                            <Form.Control type="text"value={this.props.CanTrrExists} onChange={this.props.onChangeCanTrrExists} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN TX COUNTRY</Form.Label>
                            <Form.Control type="text"value={this.props.CanTxCountry} onChange={this.props.onChangeCanTxCountry} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>DONOR ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.DonorId} onChange={this.props.onChangeDonorId} />
                        </Form.Group>
                        <Form.Group controlId="char3">
                            <Form.Label>DON TY</Form.Label>
                            <Form.Control type="text"value={this.props.DonTy} onChange={this.props.onChangeDonTy} />
                        </Form.Group>
                        <Form.Group controlId="char3">
                            <Form.Label>ORG AR</Form.Label>
                            <Form.Control type="text"value={this.props.OrgAr} onChange={this.props.onChangeOrgAr} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS NEXTTX</Form.Label>
                            <Form.Control type="date"value={this.props.PersNexttx} onChange={this.props.onChangePersNexttx} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS NEXTTX TRR ID</Form.Label>
                            <Form.Control type="text" readonlyvalue={this.props.PersNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS OPTN DEATH DT</Form.Label>
                            <Form.Control type="date"value={this.props.PersOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS RESTRICT DEATH DT</Form.Label>
                            <Form.Control type="date"value={this.props.PersRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label>PERS RESTRICT DEATH VRFY</Form.Label>
                            <Form.Control type="text"value={this.props.PersRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>PERS SSA DEATH DT</Form.Label>
                            <Form.Control type="date"value={this.props.PersSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>REC TX DT</Form.Label>
                            <Form.Control type="date"value={this.props.RecTxDt} onChange={this.props.onChangeRecTxDt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>REC TX PROCEDURE TY</Form.Label>
                            <Form.Control type="text"value={this.props.RecTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy} />
                        </Form.Group>
                    </Form>
                </Tab>
                <Tab eventKey="Malignant" title="Malignant">
                    <Form>
                        <Form.Group controlId="char1">
                            <Form.Label>CAN MALIG</Form.Label>
                            <Form.Control type="text"value={this.props.CanMalig} onChange={this.props.onChangeCanMalig} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTy} onChange={this.props.onChangeCanMaligTy} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY BREAST</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyBreast} onChange={this.props.onChangeCanMaligTyBreast} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY CNS TUMOR</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyCnsTumor} onChange={this.props.onChangeCanMaligTyCnsTumor} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY GENITOURINARY</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyGenitourinary} onChange={this.props.onChangeCanMaligTyGenitourinary} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY HEPBLAST</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyHepblast} onChange={this.props.onChangeCanMaligTyHepblast} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY HEPCARCINOMA</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyHepcarcinoma} onChange={this.props.onChangeCanMaligTyHepcarcinoma} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY LEUK LYMPH</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyLeukLymph} onChange={this.props.onChangeCanMaligTyLeukLymph} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY LIVER</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyLiver} onChange={this.props.onChangeCanMaligTyLiver} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY LU</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyLu} onChange={this.props.onChangeCanMaligTyLu} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY OTHER</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyOther} onChange={this.props.onChangeCanMaligTyOther} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY SKIN MEL</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTySkinMel} onChange={this.props.onChangeCanMaligTySkinMel} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY SKIN NON MEL</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTySkinNonMel} onChange={this.props.onChangeCanMaligTySkinNonMel} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY THROAT</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyThroat} onChange={this.props.onChangeCanMaligTyThroat} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY THYROID</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyThyroid} onChange={this.props.onChangeCanMaligTyThyroid} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>CAN MALIG TY UNK</Form.Label>
                            <Form.Control type="text"value={this.props.CanMaligTyUnk} onChange={this.props.onChangeCanMaligTyUnk} />
                        </Form.Group>
                    </Form>
                </Tab>
            </Tabs>
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	CanAbo: selectors.makeSelectCanAbo(),
	CanAcademicLevel: selectors.makeSelectCanAcademicLevel(),
	CanAcademicProgress: selectors.makeSelectCanAcademicProgress(),
	CanAcptA2Don: selectors.makeSelectCanAcptA2Don(),
	CanAcptAboIncomp: selectors.makeSelectCanAcptAboIncomp(),
	CanAcptExtracorpLi: selectors.makeSelectCanAcptExtracorpLi(),
	CanAcptHbcPos: selectors.makeSelectCanAcptHbcPos(),
	CanAcptHcvPos: selectors.makeSelectCanAcptHcvPos(),
	CanAcptLiSeg: selectors.makeSelectCanAcptLiSeg(),
	CanAcptOrgOtherTeam: selectors.makeSelectCanAcptOrgOtherTeam(),
	CanAcptProcurKi: selectors.makeSelectCanAcptProcurKi(),
	CanAcptProcurLi: selectors.makeSelectCanAcptProcurLi(),
	CanAcptProcurPa: selectors.makeSelectCanAcptProcurPa(),
	CanActivateDt: selectors.makeSelectCanActivateDt(),
	CanAgeAtListing: selectors.makeSelectCanAgeAtListing(),
	CanAgeInMonthsAtListing: selectors.makeSelectCanAgeInMonthsAtListing(),
	CanAnastomosis: selectors.makeSelectCanAnastomosis(),
	CanAnesthPriorDeath: selectors.makeSelectCanAnesthPriorDeath(),
	CanAngina: selectors.makeSelectCanAngina(),
	CanAnginaCad: selectors.makeSelectCanAnginaCad(),
	CanArtificialLi: selectors.makeSelectCanArtificialLi(),
	CanAscites: selectors.makeSelectCanAscites(),
	CanBacteriaPerit: selectors.makeSelectCanBacteriaPerit(),
	CanBmi: selectors.makeSelectCanBmi(),
	CanCerebVasc: selectors.makeSelectCanCerebVasc(),
	CanCitizenship: selectors.makeSelectCanCitizenship(),
	CanCognitiveDevelop: selectors.makeSelectCanCognitiveDevelop(),
	CanCtpScore: selectors.makeSelectCanCtpScore(),
	CanDeathDt: selectors.makeSelectCanDeathDt(),
	CanDgn: selectors.makeSelectCanDgn(),
	CanDgn2: selectors.makeSelectCanDgn2(),
	CanDgnOstxt: selectors.makeSelectCanDgnOstxt(),
	CanDiab: selectors.makeSelectCanDiab(),
	CanDiabTy: selectors.makeSelectCanDiabTy(),
	CanDial: selectors.makeSelectCanDial(),
	CanDrugTreatCopd: selectors.makeSelectCanDrugTreatCopd(),
	CanDrugTreatHyperten: selectors.makeSelectCanDrugTreatHyperten(),
	CanEcmo: selectors.makeSelectCanEcmo(),
	CanEducation: selectors.makeSelectCanEducation(),
	CanElectrolyte: selectors.makeSelectCanElectrolyte(),
	CanEmplStat: selectors.makeSelectCanEmplStat(),
	CanEnceph: selectors.makeSelectCanEnceph(),
	CanEndwlfu: selectors.makeSelectCanEndwlfu(),
	CanEthnicitySrtr: selectors.makeSelectCanEthnicitySrtr(),
	CanExhaustVascAccess: selectors.makeSelectCanExhaustVascAccess(),
	CanFollowsOpoAlloc: selectors.makeSelectCanFollowsOpoAlloc(),
	CanFunctnStat: selectors.makeSelectCanFunctnStat(),
	CanFungalSepsis: selectors.makeSelectCanFungalSepsis(),
	CanGender: selectors.makeSelectCanGender(),
	CanHgtCm: selectors.makeSelectCanHgtCm(),
	CanHgtWgtDt: selectors.makeSelectCanHgtWgtDt(),
	CanIabp: selectors.makeSelectCanIabp(),
	CanInitActStatCd: selectors.makeSelectCanInitActStatCd(),
	CanInitActStatDt: selectors.makeSelectCanInitActStatDt(),
	CanInitInactStatDt: selectors.makeSelectCanInitInactStatDt(),
	CanInitSrtrLabMeld: selectors.makeSelectCanInitSrtrLabMeld(),
	CanInitSrtrLabMeldTy: selectors.makeSelectCanInitSrtrLabMeldTy(),
	CanInitStat: selectors.makeSelectCanInitStat(),
	CanIvInotrop: selectors.makeSelectCanIvInotrop(),
	CanLastActStatDt: selectors.makeSelectCanLastActStatDt(),
	CanLastAlbumin: selectors.makeSelectCanLastAlbumin(),
	CanLastAscites: selectors.makeSelectCanLastAscites(),
	CanLastBili: selectors.makeSelectCanLastBili(),
	CanLastDialPriorWeek: selectors.makeSelectCanLastDialPriorWeek(),
	CanLastEnceph: selectors.makeSelectCanLastEnceph(),
	CanLastInactStatDt: selectors.makeSelectCanLastInactStatDt(),
	CanLastInr: selectors.makeSelectCanLastInr(),
	CanLastSerumCreat: selectors.makeSelectCanLastSerumCreat(),
	CanLastSerumSodium: selectors.makeSelectCanLastSerumSodium(),
	CanLastSrtrLabMeld: selectors.makeSelectCanLastSrtrLabMeld(),
	CanLastSrtrLabMeldTy: selectors.makeSelectCanLastSrtrLabMeldTy(),
	CanLastStat: selectors.makeSelectCanLastStat(),
	CanLifeSupport: selectors.makeSelectCanLifeSupport(),
	CanLifeSupportOther: selectors.makeSelectCanLifeSupportOther(),
	CanListingCtrId: selectors.makeSelectCanListingCtrId(),
	CanListingDt: selectors.makeSelectCanListingDt(),
	CanListingOpoId: selectors.makeSelectCanListingOpoId(),
	CanLivingDonTx: selectors.makeSelectCanLivingDonTx(),
	CanLiDysfunctn: selectors.makeSelectCanLiDysfunctn(),
	CanLossVascAccess: selectors.makeSelectCanLossVascAccess(),
	CanMalig: selectors.makeSelectCanMalig(),
	CanMaligTy: selectors.makeSelectCanMaligTy(),
	CanMaligTyBreast: selectors.makeSelectCanMaligTyBreast(),
	CanMaligTyCnsTumor: selectors.makeSelectCanMaligTyCnsTumor(),
	CanMaligTyGenitourinary: selectors.makeSelectCanMaligTyGenitourinary(),
	CanMaligTyHepblast: selectors.makeSelectCanMaligTyHepblast(),
	CanMaligTyHepcarcinoma: selectors.makeSelectCanMaligTyHepcarcinoma(),
	CanMaligTyLeukLymph: selectors.makeSelectCanMaligTyLeukLymph(),
	CanMaligTyLiver: selectors.makeSelectCanMaligTyLiver(),
	CanMaligTyLu: selectors.makeSelectCanMaligTyLu(),
	CanMaligTyOther: selectors.makeSelectCanMaligTyOther(),
	CanMaligTySkinMel: selectors.makeSelectCanMaligTySkinMel(),
	CanMaligTySkinNonMel: selectors.makeSelectCanMaligTySkinNonMel(),
	CanMaligTyThroat: selectors.makeSelectCanMaligTyThroat(),
	CanMaligTyThyroid: selectors.makeSelectCanMaligTyThyroid(),
	CanMaligTyUnk: selectors.makeSelectCanMaligTyUnk(),
	CanMaxAge: selectors.makeSelectCanMaxAge(),
	CanMaxMile: selectors.makeSelectCanMaxMile(),
	CanMaxWgt: selectors.makeSelectCanMaxWgt(),
	CanMedCond: selectors.makeSelectCanMedCond(),
	CanMinAge: selectors.makeSelectCanMinAge(),
	CanMinWgt: selectors.makeSelectCanMinWgt(),
	CanMostRecentCreat: selectors.makeSelectCanMostRecentCreat(),
	CanMostRecentHgtCm: selectors.makeSelectCanMostRecentHgtCm(),
	CanMostRecentWgtKg: selectors.makeSelectCanMostRecentWgtKg(),
	CanMotorDevelop: selectors.makeSelectCanMotorDevelop(),
	CanMuscleWasting: selectors.makeSelectCanMuscleWasting(),
	CanNeoplasm: selectors.makeSelectCanNeoplasm(),
	CanNewPrevPiTx: selectors.makeSelectCanNewPrevPiTx(),
	CanNonReconGi: selectors.makeSelectCanNonReconGi(),
	CanPepticUlcer: selectors.makeSelectCanPepticUlcer(),
	CanPeriphVasc: selectors.makeSelectCanPeriphVasc(),
	CanPermState: selectors.makeSelectCanPermState(),
	CanPge: selectors.makeSelectCanPge(),
	CanPhyscCapacity: selectors.makeSelectCanPhyscCapacity(),
	CanPortalVein: selectors.makeSelectCanPortalVein(),
	CanPrelimXmatchRequest: selectors.makeSelectCanPrelimXmatchRequest(),
	CanPrevAbdomSurg: selectors.makeSelectCanPrevAbdomSurg(),
	CanPrevBoneMarrowDt: selectors.makeSelectCanPrevBoneMarrowDt(),
	CanPrevBoneMarrowTx: selectors.makeSelectCanPrevBoneMarrowTx(),
	CanPrevHl: selectors.makeSelectCanPrevHl(),
	CanPrevHr: selectors.makeSelectCanPrevHr(),
	CanPrevIn: selectors.makeSelectCanPrevIn(),
	CanPrevKi: selectors.makeSelectCanPrevKi(),
	CanPrevKp: selectors.makeSelectCanPrevKp(),
	CanPrevLi: selectors.makeSelectCanPrevLi(),
	CanPrevLu: selectors.makeSelectCanPrevLu(),
	CanPrevPa: selectors.makeSelectCanPrevPa(),
	CanPrevTx: selectors.makeSelectCanPrevTx(),
	CanPrevTxfus: selectors.makeSelectCanPrevTxfus(),
	CanPrimaryPay: selectors.makeSelectCanPrimaryPay(),
	CanPulmEmbol: selectors.makeSelectCanPulmEmbol(),
	CanRace: selectors.makeSelectCanRace(),
	CanRaceSrtr: selectors.makeSelectCanRaceSrtr(),
	CanRecurSepsis: selectors.makeSelectCanRecurSepsis(),
	CanRemCd: selectors.makeSelectCanRemCd(),
	CanRemCod: selectors.makeSelectCanRemCod(),
	CanRemDt: selectors.makeSelectCanRemDt(),
	CanSecondaryPay: selectors.makeSelectCanSecondaryPay(),
	CanSource: selectors.makeSelectCanSource(),
	CanStatExtendFlg: selectors.makeSelectCanStatExtendFlg(),
	CanTiebreakerDt: selectors.makeSelectCanTiebreakerDt(),
	CanTipss: selectors.makeSelectCanTipss(),
	CanTotAlbumin: selectors.makeSelectCanTotAlbumin(),
	CanTotBili: selectors.makeSelectCanTotBili(),
	CanTrrExists: selectors.makeSelectCanTrrExists(),
	CanTxCountry: selectors.makeSelectCanTxCountry(),
	CanVadTah: selectors.makeSelectCanVadTah(),
	CanVaricealBleeding: selectors.makeSelectCanVaricealBleeding(),
	CanVentilator: selectors.makeSelectCanVentilator(),
	CanWgtKg: selectors.makeSelectCanWgtKg(),
	CanWorkIncome: selectors.makeSelectCanWorkIncome(),
	CanWorkNoStat: selectors.makeSelectCanWorkNoStat(),
	CanWorkYesStat: selectors.makeSelectCanWorkYesStat(),
	CanYearEntryUs: selectors.makeSelectCanYearEntryUs(),
	DonorId: selectors.makeSelectDonorId(),
	DonTy: selectors.makeSelectDonTy(),
	OrgAr: selectors.makeSelectOrgAr(),
	PersId: selectors.makeSelectPersId(),
	PersNexttx: selectors.makeSelectPersNexttx(),
	PersNexttxTrrId: selectors.makeSelectPersNexttxTrrId(),
	PersOptnDeathDt: selectors.makeSelectPersOptnDeathDt(),
	PersRestrictDeathDt: selectors.makeSelectPersRestrictDeathDt(),
	PersRestrictDeathVrfy: selectors.makeSelectPersRestrictDeathVrfy(),
	PersSsaDeathDt: selectors.makeSelectPersSsaDeathDt(),
	PxId: selectors.makeSelectPxId(),
	RecTxDt: selectors.makeSelectRecTxDt(),
	RecTxProcedureTy: selectors.makeSelectRecTxProcedureTy(),
	WlOrg: selectors.makeSelectWlOrg(),
});
  
function mapDispatchToProps(dispatch) {
    return {
        onChangeCanAbo: evt => dispatch(actions.changeCanAbo(evt.target.value)),
        onChangeCanAcademicLevel: evt => dispatch(actions.changeCanAcademicLevel(evt.target.value)),
        onChangeCanAcademicProgress: evt => dispatch(actions.changeCanAcademicProgress(evt.target.value)),
        onChangeCanAcptA2Don: evt => dispatch(actions.changeCanAcptA2Don(evt.target.value)),
        onChangeCanAcptAboIncomp: evt => dispatch(actions.changeCanAcptAboIncomp(evt.target.value)),
        onChangeCanAcptExtracorpLi: evt => dispatch(actions.changeCanAcptExtracorpLi(evt.target.value)),
        onChangeCanAcptHbcPos: evt => dispatch(actions.changeCanAcptHbcPos(evt.target.value)),
        onChangeCanAcptHcvPos: evt => dispatch(actions.changeCanAcptHcvPos(evt.target.value)),
        onChangeCanAcptLiSeg: evt => dispatch(actions.changeCanAcptLiSeg(evt.target.value)),
        onChangeCanAcptOrgOtherTeam: evt => dispatch(actions.changeCanAcptOrgOtherTeam(evt.target.value)),
        onChangeCanAcptProcurKi: evt => dispatch(actions.changeCanAcptProcurKi(evt.target.value)),
        onChangeCanAcptProcurLi: evt => dispatch(actions.changeCanAcptProcurLi(evt.target.value)),
        onChangeCanAcptProcurPa: evt => dispatch(actions.changeCanAcptProcurPa(evt.target.value)),
        onChangeCanActivateDt: evt => dispatch(actions.changeCanActivateDt(evt.target.value)),
        onChangeCanAgeAtListing: evt => dispatch(actions.changeCanAgeAtListing(evt.target.value)),
        onChangeCanAgeInMonthsAtListing: evt => dispatch(actions.changeCanAgeInMonthsAtListing(evt.target.value)),
        onChangeCanAnastomosis: evt => dispatch(actions.changeCanAnastomosis(evt.target.value)),
        onChangeCanAnesthPriorDeath: evt => dispatch(actions.changeCanAnesthPriorDeath(evt.target.value)),
        onChangeCanAngina: evt => dispatch(actions.changeCanAngina(evt.target.value)),
        onChangeCanAnginaCad: evt => dispatch(actions.changeCanAnginaCad(evt.target.value)),
        onChangeCanArtificialLi: evt => dispatch(actions.changeCanArtificialLi(evt.target.value)),
        onChangeCanAscites: evt => dispatch(actions.changeCanAscites(evt.target.value)),
        onChangeCanBacteriaPerit: evt => dispatch(actions.changeCanBacteriaPerit(evt.target.value)),
        onChangeCanBmi: evt => dispatch(actions.changeCanBmi(evt.target.value)),
        onChangeCanCerebVasc: evt => dispatch(actions.changeCanCerebVasc(evt.target.value)),
        onChangeCanCitizenship: evt => dispatch(actions.changeCanCitizenship(evt.target.value)),
        onChangeCanCognitiveDevelop: evt => dispatch(actions.changeCanCognitiveDevelop(evt.target.value)),
        onChangeCanCtpScore: evt => dispatch(actions.changeCanCtpScore(evt.target.value)),
        onChangeCanDeathDt: evt => dispatch(actions.changeCanDeathDt(evt.target.value)),
        onChangeCanDgn: evt => dispatch(actions.changeCanDgn(evt.target.value)),
        onChangeCanDgn2: evt => dispatch(actions.changeCanDgn2(evt.target.value)),
        onChangeCanDgnOstxt: evt => dispatch(actions.changeCanDgnOstxt(evt.target.value)),
        onChangeCanDiab: evt => dispatch(actions.changeCanDiab(evt.target.value)),
        onChangeCanDiabTy: evt => dispatch(actions.changeCanDiabTy(evt.target.value)),
        onChangeCanDial: evt => dispatch(actions.changeCanDial(evt.target.value)),
        onChangeCanDrugTreatCopd: evt => dispatch(actions.changeCanDrugTreatCopd(evt.target.value)),
        onChangeCanDrugTreatHyperten: evt => dispatch(actions.changeCanDrugTreatHyperten(evt.target.value)),
        onChangeCanEcmo: evt => dispatch(actions.changeCanEcmo(evt.target.value)),
        onChangeCanEducation: evt => dispatch(actions.changeCanEducation(evt.target.value)),
        onChangeCanElectrolyte: evt => dispatch(actions.changeCanElectrolyte(evt.target.value)),
        onChangeCanEmplStat: evt => dispatch(actions.changeCanEmplStat(evt.target.value)),
        onChangeCanEnceph: evt => dispatch(actions.changeCanEnceph(evt.target.value)),
        onChangeCanEndwlfu: evt => dispatch(actions.changeCanEndwlfu(evt.target.value)),
        onChangeCanEthnicitySrtr: evt => dispatch(actions.changeCanEthnicitySrtr(evt.target.value)),
        onChangeCanExhaustVascAccess: evt => dispatch(actions.changeCanExhaustVascAccess(evt.target.value)),
        onChangeCanFollowsOpoAlloc: evt => dispatch(actions.changeCanFollowsOpoAlloc(evt.target.value)),
        onChangeCanFunctnStat: evt => dispatch(actions.changeCanFunctnStat(evt.target.value)),
        onChangeCanFungalSepsis: evt => dispatch(actions.changeCanFungalSepsis(evt.target.value)),
        onChangeCanGender: evt => dispatch(actions.changeCanGender(evt.target.value)),
        onChangeCanHgtCm: evt => dispatch(actions.changeCanHgtCm(evt.target.value)),
        onChangeCanHgtWgtDt: evt => dispatch(actions.changeCanHgtWgtDt(evt.target.value)),
        onChangeCanIabp: evt => dispatch(actions.changeCanIabp(evt.target.value)),
        onChangeCanInitActStatCd: evt => dispatch(actions.changeCanInitActStatCd(evt.target.value)),
        onChangeCanInitActStatDt: evt => dispatch(actions.changeCanInitActStatDt(evt.target.value)),
        onChangeCanInitInactStatDt: evt => dispatch(actions.changeCanInitInactStatDt(evt.target.value)),
        onChangeCanInitSrtrLabMeld: evt => dispatch(actions.changeCanInitSrtrLabMeld(evt.target.value)),
        onChangeCanInitSrtrLabMeldTy: evt => dispatch(actions.changeCanInitSrtrLabMeldTy(evt.target.value)),
        onChangeCanInitStat: evt => dispatch(actions.changeCanInitStat(evt.target.value)),
        onChangeCanIvInotrop: evt => dispatch(actions.changeCanIvInotrop(evt.target.value)),
        onChangeCanLastActStatDt: evt => dispatch(actions.changeCanLastActStatDt(evt.target.value)),
        onChangeCanLastAlbumin: evt => dispatch(actions.changeCanLastAlbumin(evt.target.value)),
        onChangeCanLastAscites: evt => dispatch(actions.changeCanLastAscites(evt.target.value)),
        onChangeCanLastBili: evt => dispatch(actions.changeCanLastBili(evt.target.value)),
        onChangeCanLastDialPriorWeek: evt => dispatch(actions.changeCanLastDialPriorWeek(evt.target.value)),
        onChangeCanLastEnceph: evt => dispatch(actions.changeCanLastEnceph(evt.target.value)),
        onChangeCanLastInactStatDt: evt => dispatch(actions.changeCanLastInactStatDt(evt.target.value)),
        onChangeCanLastInr: evt => dispatch(actions.changeCanLastInr(evt.target.value)),
        onChangeCanLastSerumCreat: evt => dispatch(actions.changeCanLastSerumCreat(evt.target.value)),
        onChangeCanLastSerumSodium: evt => dispatch(actions.changeCanLastSerumSodium(evt.target.value)),
        onChangeCanLastSrtrLabMeld: evt => dispatch(actions.changeCanLastSrtrLabMeld(evt.target.value)),
        onChangeCanLastSrtrLabMeldTy: evt => dispatch(actions.changeCanLastSrtrLabMeldTy(evt.target.value)),
        onChangeCanLastStat: evt => dispatch(actions.changeCanLastStat(evt.target.value)),
        onChangeCanLifeSupport: evt => dispatch(actions.changeCanLifeSupport(evt.target.value)),
        onChangeCanLifeSupportOther: evt => dispatch(actions.changeCanLifeSupportOther(evt.target.value)),
        onChangeCanListingCtrId: evt => dispatch(actions.changeCanListingCtrId(evt.target.value)),
        onChangeCanListingDt: evt => dispatch(actions.changeCanListingDt(evt.target.value)),
        onChangeCanListingOpoId: evt => dispatch(actions.changeCanListingOpoId(evt.target.value)),
        onChangeCanLivingDonTx: evt => dispatch(actions.changeCanLivingDonTx(evt.target.value)),
        onChangeCanLiDysfunctn: evt => dispatch(actions.changeCanLiDysfunctn(evt.target.value)),
        onChangeCanLossVascAccess: evt => dispatch(actions.changeCanLossVascAccess(evt.target.value)),
        onChangeCanMalig: evt => dispatch(actions.changeCanMalig(evt.target.value)),
        onChangeCanMaligTy: evt => dispatch(actions.changeCanMaligTy(evt.target.value)),
        onChangeCanMaligTyBreast: evt => dispatch(actions.changeCanMaligTyBreast(evt.target.value)),
        onChangeCanMaligTyCnsTumor: evt => dispatch(actions.changeCanMaligTyCnsTumor(evt.target.value)),
        onChangeCanMaligTyGenitourinary: evt => dispatch(actions.changeCanMaligTyGenitourinary(evt.target.value)),
        onChangeCanMaligTyHepblast: evt => dispatch(actions.changeCanMaligTyHepblast(evt.target.value)),
        onChangeCanMaligTyHepcarcinoma: evt => dispatch(actions.changeCanMaligTyHepcarcinoma(evt.target.value)),
        onChangeCanMaligTyLeukLymph: evt => dispatch(actions.changeCanMaligTyLeukLymph(evt.target.value)),
        onChangeCanMaligTyLiver: evt => dispatch(actions.changeCanMaligTyLiver(evt.target.value)),
        onChangeCanMaligTyLu: evt => dispatch(actions.changeCanMaligTyLu(evt.target.value)),
        onChangeCanMaligTyOther: evt => dispatch(actions.changeCanMaligTyOther(evt.target.value)),
        onChangeCanMaligTySkinMel: evt => dispatch(actions.changeCanMaligTySkinMel(evt.target.value)),
        onChangeCanMaligTySkinNonMel: evt => dispatch(actions.changeCanMaligTySkinNonMel(evt.target.value)),
        onChangeCanMaligTyThroat: evt => dispatch(actions.changeCanMaligTyThroat(evt.target.value)),
        onChangeCanMaligTyThyroid: evt => dispatch(actions.changeCanMaligTyThyroid(evt.target.value)),
        onChangeCanMaligTyUnk: evt => dispatch(actions.changeCanMaligTyUnk(evt.target.value)),
        onChangeCanMaxAge: evt => dispatch(actions.changeCanMaxAge(evt.target.value)),
        onChangeCanMaxMile: evt => dispatch(actions.changeCanMaxMile(evt.target.value)),
        onChangeCanMaxWgt: evt => dispatch(actions.changeCanMaxWgt(evt.target.value)),
        onChangeCanMedCond: evt => dispatch(actions.changeCanMedCond(evt.target.value)),
        onChangeCanMinAge: evt => dispatch(actions.changeCanMinAge(evt.target.value)),
        onChangeCanMinWgt: evt => dispatch(actions.changeCanMinWgt(evt.target.value)),
        onChangeCanMostRecentCreat: evt => dispatch(actions.changeCanMostRecentCreat(evt.target.value)),
        onChangeCanMostRecentHgtCm: evt => dispatch(actions.changeCanMostRecentHgtCm(evt.target.value)),
        onChangeCanMostRecentWgtKg: evt => dispatch(actions.changeCanMostRecentWgtKg(evt.target.value)),
        onChangeCanMotorDevelop: evt => dispatch(actions.changeCanMotorDevelop(evt.target.value)),
        onChangeCanMuscleWasting: evt => dispatch(actions.changeCanMuscleWasting(evt.target.value)),
        onChangeCanNeoplasm: evt => dispatch(actions.changeCanNeoplasm(evt.target.value)),
        onChangeCanNewPrevPiTx: evt => dispatch(actions.changeCanNewPrevPiTx(evt.target.value)),
        onChangeCanNonReconGi: evt => dispatch(actions.changeCanNonReconGi(evt.target.value)),
        onChangeCanPepticUlcer: evt => dispatch(actions.changeCanPepticUlcer(evt.target.value)),
        onChangeCanPeriphVasc: evt => dispatch(actions.changeCanPeriphVasc(evt.target.value)),
        onChangeCanPermState: evt => dispatch(actions.changeCanPermState(evt.target.value)),
        onChangeCanPge: evt => dispatch(actions.changeCanPge(evt.target.value)),
        onChangeCanPhyscCapacity: evt => dispatch(actions.changeCanPhyscCapacity(evt.target.value)),
        onChangeCanPortalVein: evt => dispatch(actions.changeCanPortalVein(evt.target.value)),
        onChangeCanPrelimXmatchRequest: evt => dispatch(actions.changeCanPrelimXmatchRequest(evt.target.value)),
        onChangeCanPrevAbdomSurg: evt => dispatch(actions.changeCanPrevAbdomSurg(evt.target.value)),
        onChangeCanPrevBoneMarrowDt: evt => dispatch(actions.changeCanPrevBoneMarrowDt(evt.target.value)),
        onChangeCanPrevBoneMarrowTx: evt => dispatch(actions.changeCanPrevBoneMarrowTx(evt.target.value)),
        onChangeCanPrevHl: evt => dispatch(actions.changeCanPrevHl(evt.target.value)),
        onChangeCanPrevHr: evt => dispatch(actions.changeCanPrevHr(evt.target.value)),
        onChangeCanPrevIn: evt => dispatch(actions.changeCanPrevIn(evt.target.value)),
        onChangeCanPrevKi: evt => dispatch(actions.changeCanPrevKi(evt.target.value)),
        onChangeCanPrevKp: evt => dispatch(actions.changeCanPrevKp(evt.target.value)),
        onChangeCanPrevLi: evt => dispatch(actions.changeCanPrevLi(evt.target.value)),
        onChangeCanPrevLu: evt => dispatch(actions.changeCanPrevLu(evt.target.value)),
        onChangeCanPrevPa: evt => dispatch(actions.changeCanPrevPa(evt.target.value)),
        onChangeCanPrevTx: evt => dispatch(actions.changeCanPrevTx(evt.target.value)),
        onChangeCanPrevTxfus: evt => dispatch(actions.changeCanPrevTxfus(evt.target.value)),
        onChangeCanPrimaryPay: evt => dispatch(actions.changeCanPrimaryPay(evt.target.value)),
        onChangeCanPulmEmbol: evt => dispatch(actions.changeCanPulmEmbol(evt.target.value)),
        onChangeCanRace: evt => dispatch(actions.changeCanRace(evt.target.value)),
        onChangeCanRaceSrtr: evt => dispatch(actions.changeCanRaceSrtr(evt.target.value)),
        onChangeCanRecurSepsis: evt => dispatch(actions.changeCanRecurSepsis(evt.target.value)),
        onChangeCanRemCd: evt => dispatch(actions.changeCanRemCd(evt.target.value)),
        onChangeCanRemCod: evt => dispatch(actions.changeCanRemCod(evt.target.value)),
        onChangeCanRemDt: evt => dispatch(actions.changeCanRemDt(evt.target.value)),
        onChangeCanSecondaryPay: evt => dispatch(actions.changeCanSecondaryPay(evt.target.value)),
        onChangeCanSource: evt => dispatch(actions.changeCanSource(evt.target.value)),
        onChangeCanStatExtendFlg: evt => dispatch(actions.changeCanStatExtendFlg(evt.target.value)),
        onChangeCanTiebreakerDt: evt => dispatch(actions.changeCanTiebreakerDt(evt.target.value)),
        onChangeCanTipss: evt => dispatch(actions.changeCanTipss(evt.target.value)),
        onChangeCanTotAlbumin: evt => dispatch(actions.changeCanTotAlbumin(evt.target.value)),
        onChangeCanTotBili: evt => dispatch(actions.changeCanTotBili(evt.target.value)),
        onChangeCanTrrExists: evt => dispatch(actions.changeCanTrrExists(evt.target.value)),
        onChangeCanTxCountry: evt => dispatch(actions.changeCanTxCountry(evt.target.value)),
        onChangeCanVadTah: evt => dispatch(actions.changeCanVadTah(evt.target.value)),
        onChangeCanVaricealBleeding: evt => dispatch(actions.changeCanVaricealBleeding(evt.target.value)),
        onChangeCanVentilator: evt => dispatch(actions.changeCanVentilator(evt.target.value)),
        onChangeCanWgtKg: evt => dispatch(actions.changeCanWgtKg(evt.target.value)),
        onChangeCanWorkIncome: evt => dispatch(actions.changeCanWorkIncome(evt.target.value)),
        onChangeCanWorkNoStat: evt => dispatch(actions.changeCanWorkNoStat(evt.target.value)),
        onChangeCanWorkYesStat: evt => dispatch(actions.changeCanWorkYesStat(evt.target.value)),
        onChangeCanYearEntryUs: evt => dispatch(actions.changeCanYearEntryUs(evt.target.value)),
        onChangeDonorId: evt => dispatch(actions.changeDonorId(evt.target.value)),
        onChangeDonTy: evt => dispatch(actions.changeDonTy(evt.target.value)),
        onChangeOrgAr: evt => dispatch(actions.changeOrgAr(evt.target.value)),
        onChangePersId: evt => dispatch(actions.changePersId(evt.target.value)),
        onChangePersNexttx: evt => dispatch(actions.changePersNexttx(evt.target.value)),
        onChangePersNexttxTrrId: evt => dispatch(actions.changePersNexttxTrrId(evt.target.value)),
        onChangePersOptnDeathDt: evt => dispatch(actions.changePersOptnDeathDt(evt.target.value)),
        onChangePersRestrictDeathDt: evt => dispatch(actions.changePersRestrictDeathDt(evt.target.value)),
        onChangePersRestrictDeathVrfy: evt => dispatch(actions.changePersRestrictDeathVrfy(evt.target.value)),
        onChangePersSsaDeathDt: evt => dispatch(actions.changePersSsaDeathDt(evt.target.value)),
        onChangePxId: evt => dispatch(actions.changePxId(evt.target.value)),
        onChangeRecTxDt: evt => dispatch(actions.changeRecTxDt(evt.target.value)),
        onChangeRecTxProcedureTy: evt => dispatch(actions.changeRecTxProcedureTy(evt.target.value)),
        onChangeWlOrg: evt => dispatch(actions.changeWlOrg(evt.target.value)),
    };    
}
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'CanForm', reducer });
  const withSaga = injectSaga({ key: 'CanForm', saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(CanForm);