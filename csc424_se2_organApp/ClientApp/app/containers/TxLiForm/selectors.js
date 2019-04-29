import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectTxLiFormDomain = state => state.get("TxLiForm", initialState);

export const makeSelectCanhxMpxcptHccApplyInd = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canhxMpxcptHccApplyInd"));

export const makeSelectCanhxMpxcptHccApproveInd = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canhxMpxcptHccApproveInd"));

export const makeSelectCanAbo = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canAbo"));

export const makeSelectCanAgeAtListing = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canAgeAtListing"));

export const makeSelectCanAgeInMonthsAtListing = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canAgeInMonthsAtListing"));

export const makeSelectCanAngina = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canAngina"));

export const makeSelectCanAnginaCad = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canAnginaCad"));

export const makeSelectCanBacteriaPerit = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canBacteriaPerit"));

export const makeSelectCanCerebVasc = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canCerebVasc"));

export const makeSelectCanCitizenship = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canCitizenship"));

export const makeSelectCanDgn = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDgn"));

export const makeSelectCanDgn2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDgn2"));

export const makeSelectCanDiab = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDiab"));

export const makeSelectCanDiabTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDiabTy"));

export const makeSelectCanDrugTreatCopd = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDrugTreatCopd"));

export const makeSelectCanDrugTreatHyperten = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canDrugTreatHyperten"));

export const makeSelectCanEducation = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canEducation"));

export const makeSelectCanEthnicitySrtr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canEthnicitySrtr"));

export const makeSelectCanGender = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canGender"));

export const makeSelectCanHgtCm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canHgtCm"));

export const makeSelectCanInitActStatCd = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitActStatCd"));

export const makeSelectCanInitActStatDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitActStatDt"));

export const makeSelectCanInitInactStatDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitInactStatDt"));

export const makeSelectCanInitSrtrLabMeld = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitSrtrLabMeld"));

export const makeSelectCanInitSrtrLabMeldTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitSrtrLabMeldTy"));

export const makeSelectCanInitStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canInitStat"));

export const makeSelectCanLastActStatDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastActStatDt"));

export const makeSelectCanLastAlbumin = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastAlbumin"));

export const makeSelectCanLastAscites = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastAscites"));

export const makeSelectCanLastBili = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastBili"));

export const makeSelectCanLastDialPriorWeek = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastDialPriorWeek"));

export const makeSelectCanLastEnceph = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastEnceph"));

export const makeSelectCanLastInactStatDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastInactStatDt"));

export const makeSelectCanLastInr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastInr"));

export const makeSelectCanLastSerumCreat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastSerumCreat"));

export const makeSelectCanLastSerumSodium = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastSerumSodium"));

export const makeSelectCanLastSrtrLabMeld = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastSrtrLabMeld"));

export const makeSelectCanLastSrtrLabMeldTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastSrtrLabMeldTy"));

export const makeSelectCanLastStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canLastStat"));

export const makeSelectCanListingDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canListingDt"));

export const makeSelectCanMalig = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canMalig"));

export const makeSelectCanPepticUlcer = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPepticUlcer"));

export const makeSelectCanPeriphVasc = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPeriphVasc"));

export const makeSelectCanPortalVein = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPortalVein"));

export const makeSelectCanPrevAbdomSurg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevAbdomSurg"));

export const makeSelectCanPrevHl = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevHl"));

export const makeSelectCanPrevHr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevHr"));

export const makeSelectCanPrevIn = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevIn"));

export const makeSelectCanPrevKi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevKi"));

export const makeSelectCanPrevKp = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevKp"));

export const makeSelectCanPrevLi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevLi"));

export const makeSelectCanPrevLu = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevLu"));

export const makeSelectCanPrevPa = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevPa"));

export const makeSelectCanPrevTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevTx"));

export const makeSelectCanPrevTxfus = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPrevTxfus"));

export const makeSelectCanPulmEmbol = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canPulmEmbol"));

export const makeSelectCanRace = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canRace"));

export const makeSelectCanRaceSrtr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canRaceSrtr"));

export const makeSelectCanRemCd = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canRemCd"));

export const makeSelectCanSource = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canSource"));

export const makeSelectCanTipss = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canTipss"));

export const makeSelectCanTotAlbumin = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canTotAlbumin"));

export const makeSelectCanWgtKg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("canWgtKg"));

export const makeSelectDonorId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donorId"));

export const makeSelectDonorIdVessel = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donorIdVessel"));

export const makeSelectDonA1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donA1"));

export const makeSelectDonA2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donA2"));

export const makeSelectDonAbo = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donAbo"));

export const makeSelectDonAge = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donAge"));

export const makeSelectDonAgeInMonths = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donAgeInMonths"));

export const makeSelectDonAntiCmv = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donAntiCmv"));

export const makeSelectDonAntiHcv = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donAntiHcv"));

export const makeSelectDonB1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donB1"));

export const makeSelectDonB2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donB2"));

export const makeSelectDonCadDonCod = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCadDonCod"));

export const makeSelectDonCardiacArrestAfterDeath = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCardiacArrestAfterDeath"));

export const makeSelectDonCitizenship = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCitizenship"));

export const makeSelectDonCmvIgg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCmvIgg"));

export const makeSelectDonCodDonStroke = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCodDonStroke"));

export const makeSelectDonContCigarette = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donContCigarette"));

export const makeSelectDonContCocaine = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donContCocaine"));

export const makeSelectDonContIvDrug = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donContIvDrug"));

export const makeSelectDonContOtherDrug = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donContOtherDrug"));

export const makeSelectDonCreat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donCreat"));

export const makeSelectDonDdavp = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDdavp"));

export const makeSelectDonDeathCircum = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDeathCircum"));

export const makeSelectDonDeathMech = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDeathMech"));

export const makeSelectDonDobutamine = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDobutamine"));

export const makeSelectDonDopamine = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDopamine"));

export const makeSelectDonDr1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDr1"));

export const makeSelectDonDr2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donDr2"));

export const makeSelectDonEthnicitySrtr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donEthnicitySrtr"));

export const makeSelectDonExpandDonKi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donExpandDonKi"));

export const makeSelectDonGender = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donGender"));

export const makeSelectDonHaploTyMatch = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHaploTyMatch"));

export const makeSelectDonHgtCm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHgtCm"));

export const makeSelectDonHighCreat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHighCreat"));

export const makeSelectDonHistCancer = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistCancer"));

export const makeSelectDonHistCigaretteGt20Pkyr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistCigaretteGt20Pkyr"));

export const makeSelectDonHistCocaine = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistCocaine"));

export const makeSelectDonHistDiab = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistDiab"));

export const makeSelectDonHistHyperten = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistHyperten"));

export const makeSelectDonHistIvDrug = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistIvDrug"));

export const makeSelectDonHistOtherDrug = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHistOtherDrug"));

export const makeSelectDonHtn = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donHtn"));

export const makeSelectDonInotropAgentGe3 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donInotropAgentGe3"));

export const makeSelectDonInotropSupport = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donInotropSupport"));

export const makeSelectDonInsulin = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donInsulin"));

export const makeSelectDonLivingDonCod = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donLivingDonCod"));

export const makeSelectDonLiBiopsy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donLiBiopsy"));

export const makeSelectDonMeetCdcHighRisk = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donMeetCdcHighRisk"));

export const makeSelectDonNonHrBeat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donNonHrBeat"));

export const makeSelectDonOpoCtrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donOpoCtrId"));

export const makeSelectDonOrgShared = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donOrgShared"));

export const makeSelectDonPh = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donPh"));

export const makeSelectDonPrerecovDiuretics = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donPrerecovDiuretics"));

export const makeSelectDonRace = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donRace"));

export const makeSelectDonRaceSrtr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donRaceSrtr"));

export const makeSelectDonRecovDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donRecovDt"));

export const makeSelectDonRelationshipTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donRelationshipTy"));

export const makeSelectDonSgot = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donSgot"));

export const makeSelectDonSgotPreop = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donSgotPreop"));

export const makeSelectDonSgptPreop = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donSgptPreop"));

export const makeSelectDonTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donTy"));

export const makeSelectDonWarmIschTmMins = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donWarmIschTmMins"));

export const makeSelectDonWgtKg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("donWgtKg"));

export const makeSelectOrgAr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("orgAr"));

export const makeSelectOrgTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("orgTy"));

export const makeSelectPersId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persId"));

export const makeSelectPersOptnCod = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persOptnCod"));

export const makeSelectPersOptnDeathDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persOptnDeathDt"));

export const makeSelectPersRelist = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persRelist"));

export const makeSelectPersRestrictDeathDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persRestrictDeathDt"));

export const makeSelectPersRestrictDeathVrfy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persRestrictDeathVrfy"));

export const makeSelectPersRetx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persRetx"));

export const makeSelectPersRetxTrrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persRetxTrrId"));

export const makeSelectPersSsaDeathDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("persSsaDeathDt"));

export const makeSelectPxId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("pxId"));

export const makeSelectRecA1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recA1"));

export const makeSelectRecA2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recA2"));

export const makeSelectRecAcademicLevel = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAcademicLevel"));

export const makeSelectRecAcademicProgress = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAcademicProgress"));

export const makeSelectRecAcuteRejBiopsyConfirmed = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAcuteRejBiopsyConfirmed"));

export const makeSelectRecAcuteRejEpisode = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAcuteRejEpisode"));

export const makeSelectRecAdmissionDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAdmissionDt"));

export const makeSelectRecAgeAtTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAgeAtTx"));

export const makeSelectRecAgeInMonthsAtTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAgeInMonthsAtTx"));

export const makeSelectRecAntivrlTherapy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapy"));

export const makeSelectRecAntivrlTherapyTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTy"));

export const makeSelectRecAntivrlTherapyTyAcyclovir = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyAcyclovir"));

export const makeSelectRecAntivrlTherapyTyCytogam = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyCytogam"));

export const makeSelectRecAntivrlTherapyTyCytovene = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyCytovene"));

export const makeSelectRecAntivrlTherapyTyEpivir = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyEpivir"));

export const makeSelectRecAntivrlTherapyTyFluVac = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyFluVac"));

export const makeSelectRecAntivrlTherapyTyGamimune = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyGamimune"));

export const makeSelectRecAntivrlTherapyTyGammagard = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyGammagard"));

export const makeSelectRecAntivrlTherapyTyHbig = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyHbig"));

export const makeSelectRecAntivrlTherapyTyOther = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyOther"));

export const makeSelectRecAntivrlTherapyTyValcyte = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyValcyte"));

export const makeSelectRecAntivrlTherapyTyValtrex = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAntivrlTherapyTyValtrex"));

export const makeSelectRecArtificialLi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recArtificialLi"));

export const makeSelectRecAscites = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAscites"));

export const makeSelectRecAMmEquivCur = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAMmEquivCur"));

export const makeSelectRecAMmEquivTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recAMmEquivTx"));

export const makeSelectRecB1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recB1"));

export const makeSelectRecB2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recB2"));

export const makeSelectRecBacteriaPerit = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recBacteriaPerit"));

export const makeSelectRecBmi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recBmi"));

export const makeSelectRecBMmEquivCur = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recBMmEquivCur"));

export const makeSelectRecBMmEquivTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recBMmEquivTx"));

export const makeSelectRecCmvIgg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCmvIgg"));

export const makeSelectRecCmvIgm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCmvIgm"));

export const makeSelectRecCmvStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCmvStat"));

export const makeSelectRecCod = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCod"));

export const makeSelectRecCod2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCod2"));

export const makeSelectRecCod3 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCod3"));

export const makeSelectRecCognitiveDevelop = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCognitiveDevelop"));

export const makeSelectRecColdIschTm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recColdIschTm"));

export const makeSelectRecCtrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCtrId"));

export const makeSelectRecCurCtrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCurCtrId"));

export const makeSelectRecCurPxStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recCurPxStat"));

export const makeSelectRecDgn = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDgn"));

export const makeSelectRecDgn2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDgn2"));

export const makeSelectRecDgnOstxt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDgnOstxt"));

export const makeSelectRecDischrgAlbumin = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgAlbumin"));

export const makeSelectRecDischrgAlkphos = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgAlkphos"));

export const makeSelectRecDischrgCreat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgCreat"));

export const makeSelectRecDischrgDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgDt"));

export const makeSelectRecDischrgInr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgInr"));

export const makeSelectRecDischrgLabDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgLabDt"));

export const makeSelectRecDischrgSgot = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgSgot"));

export const makeSelectRecDischrgSgpt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDischrgSgpt"));

export const makeSelectRecDr1 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDr1"));

export const makeSelectRecDr2 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDr2"));

export const makeSelectRecDrMmEquivCur = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDrMmEquivCur"));

export const makeSelectRecDrMmEquivTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recDrMmEquivTx"));

export const makeSelectRecEbvStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recEbvStat"));

export const makeSelectRecEmplStatPre04 = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recEmplStatPre04"));

export const makeSelectRecFailBiliary = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailBiliary"));

export const makeSelectRecFailDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailDt"));

export const makeSelectRecFailHepDenovo = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailHepDenovo"));

export const makeSelectRecFailHepRecur = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailHepRecur"));

export const makeSelectRecFailInfect = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailInfect"));

export const makeSelectRecFailPrimeGraftFail = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailPrimeGraftFail"));

export const makeSelectRecFailRecurDisease = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailRecurDisease"));

export const makeSelectRecFailRejAcute = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailRejAcute"));

export const makeSelectRecFailVascThromb = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFailVascThromb"));

export const makeSelectRecFunctnStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recFunctnStat"));

export const makeSelectRecGraftStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recGraftStat"));

export const makeSelectRecHbvAntibody = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHbvAntibody"));

export const makeSelectRecHbvSurfAntigen = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHbvSurfAntigen"));

export const makeSelectRecHcvStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHcvStat"));

export const makeSelectRecHepaticArterThromb = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHepaticArterThromb"));

export const makeSelectRecHepaticOutflowObstruct = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHepaticOutflowObstruct"));

export const makeSelectRecHgtCm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHgtCm"));

export const makeSelectRecHgtWgtDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHgtWgtDt"));

export const makeSelectRecHistoTxId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHistoTxId"));

export const makeSelectRecHivStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHivStat"));

export const makeSelectRecHosp90Days = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recHosp90Days"));

export const makeSelectRecImmunoMaintMeds = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recImmunoMaintMeds"));

export const makeSelectRecInotropBpSupport = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recInotropBpSupport"));

export const makeSelectRecLifeSupport = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recLifeSupport"));

export const makeSelectRecLifeSupportOther = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recLifeSupportOther"));

export const makeSelectRecLiTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recLiTy"));

export const makeSelectRecMalig = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMalig"));

export const makeSelectRecMaligTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTy"));

export const makeSelectRecMaligTyBreast = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyBreast"));

export const makeSelectRecMaligTyCnsTumor = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyCnsTumor"));

export const makeSelectRecMaligTyGenitourinary = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyGenitourinary"));

export const makeSelectRecMaligTyHepblast = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyHepblast"));

export const makeSelectRecMaligTyHepcarcinoma = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyHepcarcinoma"));

export const makeSelectRecMaligTyLeukLymph = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyLeukLymph"));

export const makeSelectRecMaligTyLiver = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyLiver"));

export const makeSelectRecMaligTyLu = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyLu"));

export const makeSelectRecMaligTyOther = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyOther"));

export const makeSelectRecMaligTySkinMel = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTySkinMel"));

export const makeSelectRecMaligTySkinNonMel = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTySkinNonMel"));

export const makeSelectRecMaligTyThroat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyThroat"));

export const makeSelectRecMaligTyThyroid = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyThyroid"));

export const makeSelectRecMaligTyUnk = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMaligTyUnk"));

export const makeSelectRecMedCond = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMedCond"));

export const makeSelectRecMmEquivCur = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMmEquivCur"));

export const makeSelectRecMmEquivTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMmEquivTx"));

export const makeSelectRecMotorDevelop = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recMotorDevelop"));

export const makeSelectRecOnVentilator = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOnVentilator"));

export const makeSelectRecOpoId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOpoId"));

export const makeSelectRecOtherTherapy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOtherTherapy"));

export const makeSelectRecOtherTherapyTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOtherTherapyTy"));

export const makeSelectRecOtherTherapyTyPhotoph = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOtherTherapyTyPhotoph"));

export const makeSelectRecOtherTherapyTyPlasmaph = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOtherTherapyTyPlasmaph"));

export const makeSelectRecOtherTherapyTyTli = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recOtherTherapyTyTli"));

export const makeSelectRecPbCredit = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPbCredit"));

export const makeSelectRecPbDebt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPbDebt"));

export const makeSelectRecPbShareTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPbShareTy"));

export const makeSelectRecPermState = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPermState"));

export const makeSelectRecPhyscCapacity = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPhyscCapacity"));

export const makeSelectRecPortalHypertenBleed = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPortalHypertenBleed"));

export const makeSelectRecPortalVein = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPortalVein"));

export const makeSelectRecPortalVeinThromb = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPortalVeinThromb"));

export const makeSelectRecPostxLos = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPostxLos"));

export const makeSelectRecPretxAlbumin = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPretxAlbumin"));

export const makeSelectRecPretxCreat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPretxCreat"));

export const makeSelectRecPretxInr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPretxInr"));

export const makeSelectRecPretxLabDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPretxLabDt"));

export const makeSelectRecPretxTotBili = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPretxTotBili"));

export const makeSelectRecPrevAbdomSurg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevAbdomSurg"));

export const makeSelectRecPrevHl = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevHl"));

export const makeSelectRecPrevHr = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevHr"));

export const makeSelectRecPrevIn = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevIn"));

export const makeSelectRecPrevKi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevKi"));

export const makeSelectRecPrevKp = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevKp"));

export const makeSelectRecPrevLi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevLi"));

export const makeSelectRecPrevLu = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevLu"));

export const makeSelectRecPrevNonfunctnTx = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevNonfunctnTx"));

export const makeSelectRecPrevPa = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrevPa"));

export const makeSelectRecPrimaryPay = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPrimaryPay"));

export const makeSelectRecProcedureTyLi = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recProcedureTyLi"));

export const makeSelectRecPxResearch = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPxResearch"));

export const makeSelectRecPxStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPxStat"));

export const makeSelectRecPxStatDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recPxStatDt"));

export const makeSelectRecSecondaryPay = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recSecondaryPay"));

export const makeSelectRecSgpt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recSgpt"));

export const makeSelectRecTipss = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTipss"));

export const makeSelectRecToleranceInductionTech = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recToleranceInductionTech"));

export const makeSelectRecTumor = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTumor"));

export const makeSelectRecTumorTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTumorTy"));

export const makeSelectRecTxferCtrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxferCtrId"));

export const makeSelectRecTxferDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxferDt"));

export const makeSelectRecTxDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxDt"));

export const makeSelectRecTxExtraVessel = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxExtraVessel"));

export const makeSelectRecTxOrgTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxOrgTy"));

export const makeSelectRecTxProcedureTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxProcedureTy"));

export const makeSelectRecTxTy = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recTxTy"));

export const makeSelectRecValcyte = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recValcyte"));

export const makeSelectRecVaricealBleeding = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recVaricealBleeding"));

export const makeSelectRecVentilator = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recVentilator"));

export const makeSelectRecWarmIschTm = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recWarmIschTm"));

export const makeSelectRecWgtKg = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recWgtKg"));

export const makeSelectRecWorkIncome = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recWorkIncome"));

export const makeSelectRecWorkNoStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recWorkNoStat"));

export const makeSelectRecWorkYesStat = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("recWorkYesStat"));

export const makeSelectTflCod = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflCod"));

export const makeSelectTflDeathDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflDeathDt"));

export const makeSelectTflEndtxfu = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflEndtxfu"));

export const makeSelectTflGraftDt = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflGraftDt"));

export const makeSelectTflLafudate = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflLafudate"));

export const makeSelectTflLastatus = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("tflLastatus"));

export const makeSelectTrrId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("trrId"));

export const makeSelectTxId = () =>
createSelector(selectTxLiFormDomain, substate => substate.get("txId"));

