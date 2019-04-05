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
import * as selects from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';


export class CanForm extends React.Component {
    componentDidMount(){
        this.props.onGetRecordPersId();
    }
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

                </Tab>
                <Tab eventKey="History" title="History">
                <Form>
                    <Form.Group controlId="num8">
                        <Form.Label>ANGINA</Form.Label>
                        <Form.Control type="text" value={this.props.canAngina} onChange={this.props.onChangeCanAngina} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>ANGNACAD</Form.Label>
                        <Form.Control type="text" value={this.props.canAnginaCad} onChange={this.props.onChangeCanAnginaCad} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canAscites} onChange={this.props.onChangeCanAscites} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canBacteriaPerit} onChange={this.props.onChangeCanBacteriaPerit} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canCerebVasc} onChange={this.props.onChangeCanCerebVasc} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>COGDEV</Form.Label>
                        <Form.Control type="text" value={this.props.canCognitiveDevelop} onChange={this.props.onChangeCanCognitiveDevelop} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>DBINSLDP</Form.Label>
                        <Form.Control type="text" value={this.props.canDiab} onChange={this.props.onChangeCanDiab} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>DIABTY</Form.Label>
                        <Form.Control type="text" value={this.props.canDiabTy} onChange={this.props.onChangeCanDiabTy} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>DIALTYLI</Form.Label>
                        <Form.Control type="text" value={this.props.canDial} onChange={this.props.onChangeCanDial} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canDrugTreatCopd} onChange={this.props.onChangeCanDrugTreatCopd} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canDrugTreatHyperten} onChange={this.props.onChangeCanDrugTreatHyperten} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canEnceph} onChange={this.props.onChangeCanEnceph} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canFungalSepsis} onChange={this.props.onChangeCanFungalSepsis} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLivingDonTx} onChange={this.props.onChangeCanLivingDonTx} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLiDysfunctn} onChange={this.props.onChangeCanLiDysfunctn} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLossVascAccess} onChange={this.props.onChangeCanLossVascAccess} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canNewPrevPiTx} onChange={this.props.onChangeCanNewPrevPiTx} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canNonReconGi} onChange={this.props.onChangeCanNonReconGi} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>PEPULCER</Form.Label>
                        <Form.Control type="text" value={this.props.canPepticUlcer} onChange={this.props.onChangeCanPepticUlcer} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPeriphVasc} onChange={this.props.onChangeCanPeriphVasc} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPortalVein} onChange={this.props.onChangeCanPortalVein} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevAbdomSurg} onChange={this.props.onChangeCanPrevAbdomSurg} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>MMDDYY</Form.Label>
                        <Form.Control type="date" value={this.props.canPrevBoneMarrowDt} onChange={this.props.onChangeCanPrevBoneMarrowDt} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevBoneMarrowTx} onChange={this.props.onChangeCanPrevBoneMarrowTx} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevHl} onChange={this.props.onChangeCanPrevHl} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevHr} onChange={this.props.onChangeCanPrevHr} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevIn} onChange={this.props.onChangeCanPrevIn} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevKi} onChange={this.props.onChangeCanPrevKi} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevKp} onChange={this.props.onChangeCanPrevKp} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevLi} onChange={this.props.onChangeCanPrevLi} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevLu} onChange={this.props.onChangeCanPrevLu} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevPa} onChange={this.props.onChangeCanPrevPa} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevTx} onChange={this.props.onChangeCanPrevTx} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPrevTxfus} onChange={this.props.onChangeCanPrevTxfus} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPulmEmbol} onChange={this.props.onChangeCanPulmEmbol} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canRecurSepsis} onChange={this.props.onChangeCanRecurSepsis} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canTipss} onChange={this.props.onChangeCanTipss} />
                    </Form.Group>
                </Form>

                </Tab>
                <Tab eventKey="Physiology" title="Physiology">
                <Form>
                    <Form.Group controlId="char3">
                        <Form.Label>$ABO</Form.Label>
                        <Form.Control type="text" value={this.props.canAbo} onChange={this.props.onChangeCanAbo} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>AGE9A</Form.Label>
                        <Form.Control type="text" value={this.props.canAgeAtListing} onChange={this.props.onChangeCanAgeAtListing} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canAgeInMonthsAtListing} onChange={this.props.onChangeCanAgeInMonthsAtListing} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canArtificialLi} onChange={this.props.onChangeCanArtificialLi} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canBmi} onChange={this.props.onChangeCanBmi} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>DGN</Form.Label>
                        <Form.Control type="text" value={this.props.canDgn} onChange={this.props.onChangeCanDgn} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>DGN</Form.Label>
                        <Form.Control type="text" value={this.props.canDgn2} onChange={this.props.onChangeCanDgn2} />
                    </Form.Group>
                    <Form.Group controlId="char50">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.props.canDgnOstxt} onChange={this.props.onChangeCanDgnOstxt} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canEcmo} onChange={this.props.onChangeCanEcmo} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canElectrolyte} onChange={this.props.onChangeCanElectrolyte} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canExhaustVascAccess} onChange={this.props.onChangeCanExhaustVascAccess} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>FUNCSTAT</Form.Label>
                        <Form.Control type="text" value={this.props.canFunctnStat} onChange={this.props.onChangeCanFunctnStat} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canHgtCm} onChange={this.props.onChangeCanHgtCm} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>MMDDYY</Form.Label>
                        <Form.Control type="date" value={this.props.canHgtWgtDt} onChange={this.props.onChangeCanHgtWgtDt} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canIabp} onChange={this.props.onChangeCanIabp} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canIvInotrop} onChange={this.props.onChangeCanIvInotrop} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastDialPriorWeek} onChange={this.props.onChangeCanLastDialPriorWeek} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLifeSupport} onChange={this.props.onChangeCanLifeSupport} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLifeSupportOther} onChange={this.props.onChangeCanLifeSupportOther} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMostRecentCreat} onChange={this.props.onChangeCanMostRecentCreat} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMostRecentHgtCm} onChange={this.props.onChangeCanMostRecentHgtCm} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMostRecentWgtKg} onChange={this.props.onChangeCanMostRecentWgtKg} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>MOTDEV</Form.Label>
                        <Form.Control type="text" value={this.props.canMotorDevelop} onChange={this.props.onChangeCanMotorDevelop} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMuscleWasting} onChange={this.props.onChangeCanMuscleWasting} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canNeoplasm} onChange={this.props.onChangeCanNeoplasm} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canPge} onChange={this.props.onChangeCanPge} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>PHYSCP</Form.Label>
                        <Form.Control type="text" value={this.props.canPhyscCapacity} onChange={this.props.onChangeCanPhyscCapacity} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canTotBili} onChange={this.props.onChangeCanTotBili} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>VADTAH</Form.Label>
                        <Form.Control type="text" value={this.props.canVadTah} onChange={this.props.onChangeCanVadTah} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canVaricealBleeding} onChange={this.props.onChangeCanVaricealBleeding} />
                    </Form.Group>
                    <Form.Group controlId="num3">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canVentilator} onChange={this.props.onChangeCanVentilator} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canWgtKg} onChange={this.props.onChangeCanWgtKg} />
                    </Form.Group>
                </Form>

                </Tab>
                <Tab eventKey="MELD/PLED" title="MELD/PLED">
                <Form>
                    <Form.Group controlId="num8">
                        <Form.Label>CANDSTAT</Form.Label>
                        <Form.Control type="text" value={this.props.canInitSrtrLabMeld} onChange={this.props.onChangeCanInitSrtrLabMeld} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canInitSrtrLabMeldTy} onChange={this.props.onChangeCanInitSrtrLabMeldTy} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastAlbumin} onChange={this.props.onChangeCanLastAlbumin} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>ASCITES</Form.Label>
                        <Form.Control type="text" value={this.props.canLastAscites} onChange={this.props.onChangeCanLastAscites} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastBili} onChange={this.props.onChangeCanLastBili} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>ENCEPH</Form.Label>
                        <Form.Control type="text" value={this.props.canLastEnceph} onChange={this.props.onChangeCanLastEnceph} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastInr} onChange={this.props.onChangeCanLastInr} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastSerumCreat} onChange={this.props.onChangeCanLastSerumCreat} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastSerumSodium} onChange={this.props.onChangeCanLastSerumSodium} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>CANDSTAT</Form.Label>
                        <Form.Control type="text" value={this.props.canLastSrtrLabMeld} onChange={this.props.onChangeCanLastSrtrLabMeld} />
                    </Form.Group>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canLastSrtrLabMeldTy} onChange={this.props.onChangeCanLastSrtrLabMeldTy} />
                    </Form.Group>
                </Form>

                </Tab>
                <Tab eventKey="Match" title="Match">
                    <Form>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptA2Don} onChange={this.props.onChangeCanAcptA2Don} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptAboIncomp} onChange={this.props.onChangeCanAcptAboIncomp} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptExtracorpLi} onChange={this.props.onChangeCanAcptExtracorpLi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptHbcPos} onChange={this.props.onChangeCanAcptHbcPos} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptHcvPos} onChange={this.props.onChangeCanAcptHcvPos} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptLiSeg} onChange={this.props.onChangeCanAcptLiSeg} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptOrgOtherTeam} onChange={this.props.onChangeCanAcptOrgOtherTeam} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptProcurKi} onChange={this.props.onChangeCanAcptProcurKi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptProcurLi} onChange={this.props.onChangeCanAcptProcurLi} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canAcptProcurPa} onChange={this.props.onChangeCanAcptProcurPa} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canCtpScore} onChange={this.props.onChangeCanCtpScore} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canMaxAge} onChange={this.props.onChangeCanMaxAge} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canMaxMile} onChange={this.props.onChangeCanMaxMile} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canMaxWgt} onChange={this.props.onChangeCanMaxWgt} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>MEDCOND</Form.Label>
                            <Form.Control type="text" value={this.props.canMedCond} onChange={this.props.onChangeCanMedCond} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canMinAge} onChange={this.props.onChangeCanMinAge} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canMinWgt} onChange={this.props.onChangeCanMinWgt} />
                        </Form.Group>
                        <Form.Group controlId="char1">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={this.props.canPrelimXmatchRequest} onChange={this.props.onChangeCanPrelimXmatchRequest} />
                        </Form.Group>
                        <Form.Group controlId="num8">
                            <Form.Label>MMDDYY</Form.Label>
                            <Form.Control type="date" value={this.props.canTiebreakerDt} onChange={this.props.onChangeCanTiebreakerDt} />
                        </Form.Group>
                        <Form.Group controlId="char4">
                            <Form.Label>$WLORG</Form.Label>
                            <Form.Control type="text" value={this.props.wlOrg} onChange={this.props.onChangeWlOrg} />
                        </Form.Group>
                    </Form>

                </Tab>
                <Tab eventKey="Status" title="Status">
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

                </Tab>
                <Tab eventKey="Transplant" title="Transplant">
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

                </Tab>
                <Tab eventKey="Malignant" title="Malignant">
                <Form>
                    <Form.Group controlId="char1">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMalig} onChange={this.props.onChangeCanMalig} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label>MALIG</Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTy} onChange={this.props.onChangeCanMaligTy} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyBreast} onChange={this.props.onChangeCanMaligTyBreast} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyCnsTumor} onChange={this.props.onChangeCanMaligTyCnsTumor} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyGenitourinary} onChange={this.props.onChangeCanMaligTyGenitourinary} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyHepblast} onChange={this.props.onChangeCanMaligTyHepblast} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyHepcarcinoma} onChange={this.props.onChangeCanMaligTyHepcarcinoma} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyLeukLymph} onChange={this.props.onChangeCanMaligTyLeukLymph} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyLiver} onChange={this.props.onChangeCanMaligTyLiver} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyLu} onChange={this.props.onChangeCanMaligTyLu} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyOther} onChange={this.props.onChangeCanMaligTyOther} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTySkinMel} onChange={this.props.onChangeCanMaligTySkinMel} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTySkinNonMel} onChange={this.props.onChangeCanMaligTySkinNonMel} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyThroat} onChange={this.props.onChangeCanMaligTyThroat} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyThyroid} onChange={this.props.onChangeCanMaligTyThyroid} />
                    </Form.Group>
                    <Form.Group controlId="num8">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={this.props.canMaligTyUnk} onChange={this.props.onChangeCanMaligTyUnk} />
                    </Form.Group>
                </Form>

                </Tab>
            </Tabs>
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	canAbo: selects.makeSelectCanAbo(),
	canAcademicLevel: selects.makeSelectCanAcademicLevel(),
	canAcademicProgress: selects.makeSelectCanAcademicProgress(),
	canAcptA2Don: selects.makeSelectCanAcptA2Don(),
	canAcptAboIncomp: selects.makeSelectCanAcptAboIncomp(),
	canAcptExtracorpLi: selects.makeSelectCanAcptExtracorpLi(),
	canAcptHbcPos: selects.makeSelectCanAcptHbcPos(),
	canAcptHcvPos: selects.makeSelectCanAcptHcvPos(),
	canAcptLiSeg: selects.makeSelectCanAcptLiSeg(),
	canAcptOrgOtherTeam: selects.makeSelectCanAcptOrgOtherTeam(),
	canAcptProcurKi: selects.makeSelectCanAcptProcurKi(),
	canAcptProcurLi: selects.makeSelectCanAcptProcurLi(),
	canAcptProcurPa: selects.makeSelectCanAcptProcurPa(),
	canActivateDt: selects.makeSelectCanActivateDt(),
	canAgeAtListing: selects.makeSelectCanAgeAtListing(),
	canAgeInMonthsAtListing: selects.makeSelectCanAgeInMonthsAtListing(),
	canAnastomosis: selects.makeSelectCanAnastomosis(),
	canAnesthPriorDeath: selects.makeSelectCanAnesthPriorDeath(),
	canAngina: selects.makeSelectCanAngina(),
	canAnginaCad: selects.makeSelectCanAnginaCad(),
	canArtificialLi: selects.makeSelectCanArtificialLi(),
	canAscites: selects.makeSelectCanAscites(),
	canBacteriaPerit: selects.makeSelectCanBacteriaPerit(),
	canBmi: selects.makeSelectCanBmi(),
	canCerebVasc: selects.makeSelectCanCerebVasc(),
	canCitizenship: selects.makeSelectCanCitizenship(),
	canCognitiveDevelop: selects.makeSelectCanCognitiveDevelop(),
	canCtpScore: selects.makeSelectCanCtpScore(),
	canDeathDt: selects.makeSelectCanDeathDt(),
	canDgn: selects.makeSelectCanDgn(),
	canDgn2: selects.makeSelectCanDgn2(),
	canDgnOstxt: selects.makeSelectCanDgnOstxt(),
	canDiab: selects.makeSelectCanDiab(),
	canDiabTy: selects.makeSelectCanDiabTy(),
	canDial: selects.makeSelectCanDial(),
	canDrugTreatCopd: selects.makeSelectCanDrugTreatCopd(),
	canDrugTreatHyperten: selects.makeSelectCanDrugTreatHyperten(),
	canEcmo: selects.makeSelectCanEcmo(),
	canEducation: selects.makeSelectCanEducation(),
	canElectrolyte: selects.makeSelectCanElectrolyte(),
	canEmplStat: selects.makeSelectCanEmplStat(),
	canEnceph: selects.makeSelectCanEnceph(),
	canEndwlfu: selects.makeSelectCanEndwlfu(),
	canEthnicitySrtr: selects.makeSelectCanEthnicitySrtr(),
	canExhaustVascAccess: selects.makeSelectCanExhaustVascAccess(),
	canFollowsOpoAlloc: selects.makeSelectCanFollowsOpoAlloc(),
	canFunctnStat: selects.makeSelectCanFunctnStat(),
	canFungalSepsis: selects.makeSelectCanFungalSepsis(),
	canGender: selects.makeSelectCanGender(),
	canHgtCm: selects.makeSelectCanHgtCm(),
	canHgtWgtDt: selects.makeSelectCanHgtWgtDt(),
	canIabp: selects.makeSelectCanIabp(),
	canInitActStatCd: selects.makeSelectCanInitActStatCd(),
	canInitActStatDt: selects.makeSelectCanInitActStatDt(),
	canInitInactStatDt: selects.makeSelectCanInitInactStatDt(),
	canInitSrtrLabMeld: selects.makeSelectCanInitSrtrLabMeld(),
	canInitSrtrLabMeldTy: selects.makeSelectCanInitSrtrLabMeldTy(),
	canInitStat: selects.makeSelectCanInitStat(),
	canIvInotrop: selects.makeSelectCanIvInotrop(),
	canLastActStatDt: selects.makeSelectCanLastActStatDt(),
	canLastAlbumin: selects.makeSelectCanLastAlbumin(),
	canLastAscites: selects.makeSelectCanLastAscites(),
	canLastBili: selects.makeSelectCanLastBili(),
	canLastDialPriorWeek: selects.makeSelectCanLastDialPriorWeek(),
	canLastEnceph: selects.makeSelectCanLastEnceph(),
	canLastInactStatDt: selects.makeSelectCanLastInactStatDt(),
	canLastInr: selects.makeSelectCanLastInr(),
	canLastSerumCreat: selects.makeSelectCanLastSerumCreat(),
	canLastSerumSodium: selects.makeSelectCanLastSerumSodium(),
	canLastSrtrLabMeld: selects.makeSelectCanLastSrtrLabMeld(),
	canLastSrtrLabMeldTy: selects.makeSelectCanLastSrtrLabMeldTy(),
	canLastStat: selects.makeSelectCanLastStat(),
	canLifeSupport: selects.makeSelectCanLifeSupport(),
	canLifeSupportOther: selects.makeSelectCanLifeSupportOther(),
	canListingCtrId: selects.makeSelectCanListingCtrId(),
	canListingDt: selects.makeSelectCanListingDt(),
	canListingOpoId: selects.makeSelectCanListingOpoId(),
	canLivingDonTx: selects.makeSelectCanLivingDonTx(),
	canLiDysfunctn: selects.makeSelectCanLiDysfunctn(),
	canLossVascAccess: selects.makeSelectCanLossVascAccess(),
	canMalig: selects.makeSelectCanMalig(),
	canMaligTy: selects.makeSelectCanMaligTy(),
	canMaligTyBreast: selects.makeSelectCanMaligTyBreast(),
	canMaligTyCnsTumor: selects.makeSelectCanMaligTyCnsTumor(),
	canMaligTyGenitourinary: selects.makeSelectCanMaligTyGenitourinary(),
	canMaligTyHepblast: selects.makeSelectCanMaligTyHepblast(),
	canMaligTyHepcarcinoma: selects.makeSelectCanMaligTyHepcarcinoma(),
	canMaligTyLeukLymph: selects.makeSelectCanMaligTyLeukLymph(),
	canMaligTyLiver: selects.makeSelectCanMaligTyLiver(),
	canMaligTyLu: selects.makeSelectCanMaligTyLu(),
	canMaligTyOther: selects.makeSelectCanMaligTyOther(),
	canMaligTySkinMel: selects.makeSelectCanMaligTySkinMel(),
	canMaligTySkinNonMel: selects.makeSelectCanMaligTySkinNonMel(),
	canMaligTyThroat: selects.makeSelectCanMaligTyThroat(),
	canMaligTyThyroid: selects.makeSelectCanMaligTyThyroid(),
	canMaligTyUnk: selects.makeSelectCanMaligTyUnk(),
	canMaxAge: selects.makeSelectCanMaxAge(),
	canMaxMile: selects.makeSelectCanMaxMile(),
	canMaxWgt: selects.makeSelectCanMaxWgt(),
	canMedCond: selects.makeSelectCanMedCond(),
	canMinAge: selects.makeSelectCanMinAge(),
	canMinWgt: selects.makeSelectCanMinWgt(),
	canMostRecentCreat: selects.makeSelectCanMostRecentCreat(),
	canMostRecentHgtCm: selects.makeSelectCanMostRecentHgtCm(),
	canMostRecentWgtKg: selects.makeSelectCanMostRecentWgtKg(),
	canMotorDevelop: selects.makeSelectCanMotorDevelop(),
	canMuscleWasting: selects.makeSelectCanMuscleWasting(),
	canNeoplasm: selects.makeSelectCanNeoplasm(),
	canNewPrevPiTx: selects.makeSelectCanNewPrevPiTx(),
	canNonReconGi: selects.makeSelectCanNonReconGi(),
	canPepticUlcer: selects.makeSelectCanPepticUlcer(),
	canPeriphVasc: selects.makeSelectCanPeriphVasc(),
	canPermState: selects.makeSelectCanPermState(),
	canPge: selects.makeSelectCanPge(),
	canPhyscCapacity: selects.makeSelectCanPhyscCapacity(),
	canPortalVein: selects.makeSelectCanPortalVein(),
	canPrelimXmatchRequest: selects.makeSelectCanPrelimXmatchRequest(),
	canPrevAbdomSurg: selects.makeSelectCanPrevAbdomSurg(),
	canPrevBoneMarrowDt: selects.makeSelectCanPrevBoneMarrowDt(),
	canPrevBoneMarrowTx: selects.makeSelectCanPrevBoneMarrowTx(),
	canPrevHl: selects.makeSelectCanPrevHl(),
	canPrevHr: selects.makeSelectCanPrevHr(),
	canPrevIn: selects.makeSelectCanPrevIn(),
	canPrevKi: selects.makeSelectCanPrevKi(),
	canPrevKp: selects.makeSelectCanPrevKp(),
	canPrevLi: selects.makeSelectCanPrevLi(),
	canPrevLu: selects.makeSelectCanPrevLu(),
	canPrevPa: selects.makeSelectCanPrevPa(),
	canPrevTx: selects.makeSelectCanPrevTx(),
	canPrevTxfus: selects.makeSelectCanPrevTxfus(),
	canPrimaryPay: selects.makeSelectCanPrimaryPay(),
	canPulmEmbol: selects.makeSelectCanPulmEmbol(),
	canRace: selects.makeSelectCanRace(),
	canRaceSrtr: selects.makeSelectCanRaceSrtr(),
	canRecurSepsis: selects.makeSelectCanRecurSepsis(),
	canRemCd: selects.makeSelectCanRemCd(),
	canRemCod: selects.makeSelectCanRemCod(),
	canRemDt: selects.makeSelectCanRemDt(),
	canSecondaryPay: selects.makeSelectCanSecondaryPay(),
	canSource: selects.makeSelectCanSource(),
	canStatExtendFlg: selects.makeSelectCanStatExtendFlg(),
	canTiebreakerDt: selects.makeSelectCanTiebreakerDt(),
	canTipss: selects.makeSelectCanTipss(),
	canTotAlbumin: selects.makeSelectCanTotAlbumin(),
	canTotBili: selects.makeSelectCanTotBili(),
	canTrrExists: selects.makeSelectCanTrrExists(),
	canTxCountry: selects.makeSelectCanTxCountry(),
	canVadTah: selects.makeSelectCanVadTah(),
	canVaricealBleeding: selects.makeSelectCanVaricealBleeding(),
	canVentilator: selects.makeSelectCanVentilator(),
	canWgtKg: selects.makeSelectCanWgtKg(),
	canWorkIncome: selects.makeSelectCanWorkIncome(),
	canWorkNoStat: selects.makeSelectCanWorkNoStat(),
	canWorkYesStat: selects.makeSelectCanWorkYesStat(),
	canYearEntryUs: selects.makeSelectCanYearEntryUs(),
	donorId: selects.makeSelectDonorId(),
	donTy: selects.makeSelectDonTy(),
	orgAr: selects.makeSelectOrgAr(),
	persId: selects.makeSelectPersId(),
	persNexttx: selects.makeSelectPersNexttx(),
	persNexttxTrrId: selects.makeSelectPersNexttxTrrId(),
	persOptnDeathDt: selects.makeSelectPersOptnDeathDt(),
	persRestrictDeathDt: selects.makeSelectPersRestrictDeathDt(),
	persRestrictDeathVrfy: selects.makeSelectPersRestrictDeathVrfy(),
	persSsaDeathDt: selects.makeSelectPersSsaDeathDt(),
	pxId: selects.makeSelectPxId(),
	recTxDt: selects.makeSelectRecTxDt(),
	recTxProcedureTy: selects.makeSelectRecTxProcedureTy(),
	wlOrg: selects.makeSelectWlOrg(),
});
  
function mapDispatchToProps(dispatch) {
    return {
        onGetRecordPersId: evt => dispatch(actions.getRecordPersId()),
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