import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectDonDecFormDomain = state => state.get("DonDecForm", initialState);

export const makeSelectRecord = () =>
createSelector(selectDonDecFormDomain, substate => substate.toJS());

export const makeSelectDonorId = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donorId"));

export const makeSelectDonA1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donA1"));

export const makeSelectDonA2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donA2"));

export const makeSelectDonAbnormCongen = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAbnormCongen"));

export const makeSelectDonAbnormLvh = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAbnormLvh"));

export const makeSelectDonAbnormValves = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAbnormValves"));

export const makeSelectDonAbo = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAbo"));

export const makeSelectDonAge = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAge"));

export const makeSelectDonAgeInMonths = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAgeInMonths"));

export const makeSelectDonAllocEcdCva = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAllocEcdCva"));

export const makeSelectDonAllocEcdHyperten = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAllocEcdHyperten"));

export const makeSelectDonAllocEcdSerumCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAllocEcdSerumCreat"));

export const makeSelectDonAllocEcdSerumCreatDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAllocEcdSerumCreatDt"));

export const makeSelectDonAllocRemainLiSeg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAllocRemainLiSeg"));

export const makeSelectDonAntiCmv = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiCmv"));

export const makeSelectDonAntiConvuls = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiConvuls"));

export const makeSelectDonAntiHbc = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiHbc"));

export const makeSelectDonAntiHcv = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiHcv"));

export const makeSelectDonAntiHiv = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiHiv"));

export const makeSelectDonAntiHtlv = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiHtlv"));

export const makeSelectDonAntiHyperten = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donAntiHyperten"));

export const makeSelectDonArginine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donArginine"));

export const makeSelectDonB1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donB1"));

export const makeSelectDonB2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donB2"));

export const makeSelectDonBiopsyDgn = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donBiopsyDgn"));

export const makeSelectDonBrainDeathTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donBrainDeathTm"));

export const makeSelectDonBun = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donBun"));

export const makeSelectDonBw4 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donBw4"));

export const makeSelectDonBw6 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donBw6"));

export const makeSelectDonC1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donC1"));

export const makeSelectDonC2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donC2"));

export const makeSelectDonCadDonCod = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCadDonCod"));

export const makeSelectDonCancerFreeInterval = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCancerFreeInterval"));

export const makeSelectDonCancerOtherOstxt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCancerOtherOstxt"));

export const makeSelectDonCardiacArrestAfterDeath = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCardiacArrestAfterDeath"));

export const makeSelectDonChagasNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donChagasNat"));

export const makeSelectDonChestXray = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donChestXray"));

export const makeSelectDonCitizenship = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCitizenship"));

export const makeSelectDonCiFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCiFinal"));

export const makeSelectDonCiInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCiInit"));

export const makeSelectDonClampDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donClampDt"));

export const makeSelectDonClampTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donClampTm"));

export const makeSelectDonClampTmZone = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donClampTmZone"));

export const makeSelectDonClinicalInfect = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donClinicalInfect"));

export const makeSelectDonCodDonStroke = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCodDonStroke"));

export const makeSelectDonColdIschTmArrivKi = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donColdIschTmArrivKi"));

export const makeSelectDonConsentAttorney = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentAttorney"));

export const makeSelectDonConsentDonCard = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentDonCard"));

export const makeSelectDonConsentDonRegis = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentDonRegis"));

export const makeSelectDonConsentDriverLicense = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentDriverLicense"));

export const makeSelectDonConsentPxWritDoc = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentPxWritDoc"));

export const makeSelectDonConsentTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentTm"));

export const makeSelectDonConsentWritDocIntent = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donConsentWritDocIntent"));

export const makeSelectDonContAlcohol = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donContAlcohol"));

export const makeSelectDonContCigarette = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donContCigarette"));

export const makeSelectDonContCocaine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donContCocaine"));

export const makeSelectDonContIvDrug = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donContIvDrug"));

export const makeSelectDonContOtherDrug = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donContOtherDrug"));

export const makeSelectDonCoronaryAngio = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCoronaryAngio"));

export const makeSelectDonCoFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCoFinal"));

export const makeSelectDonCoInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCoInit"));

export const makeSelectDonCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCreat"));

export const makeSelectDonCregDonFlg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCregDonFlg"));

export const makeSelectDonCvpFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCvpFinal"));

export const makeSelectDonCvpInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donCvpInit"));

export const makeSelectDonDcdAbdomAortaCannulDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdAbdomAortaCannulDt"));

export const makeSelectDonDcdAbdomAortaCannulTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdAbdomAortaCannulTm"));

export const makeSelectDonDcdAgonalBeginDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdAgonalBeginDt"));

export const makeSelectDonDcdAgonalBeginTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdAgonalBeginTm"));

export const makeSelectDonDcdPortalVeinCannulDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdPortalVeinCannulDt"));

export const makeSelectDonDcdPortalVeinCannulTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdPortalVeinCannulTm"));

export const makeSelectDonDcdProgressToBrainDeath = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdProgressToBrainDeath"));

export const makeSelectDonDcdPulmArtCannulDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdPulmArtCannulDt"));

export const makeSelectDonDcdPulmArtCannulTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdPulmArtCannulTm"));

export const makeSelectDonDcdSupportWithdrawDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdSupportWithdrawDt"));

export const makeSelectDonDcdSupportWithdrawTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdSupportWithdrawTm"));

export const makeSelectDonDcdThorAortaCannulDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdThorAortaCannulDt"));

export const makeSelectDonDcdThorAortaCannulTm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdThorAortaCannulTm"));

export const makeSelectDonDcdTotUrineOutput = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDcdTotUrineOutput"));

export const makeSelectDonDdavp = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDdavp"));

export const makeSelectDonDeathCircum = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDeathCircum"));

export const makeSelectDonDeathMech = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDeathMech"));

export const makeSelectDonDobutamine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDobutamine"));

export const makeSelectDonDopamine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDopamine"));

export const makeSelectDonDp1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDp1"));

export const makeSelectDonDp2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDp2"));

export const makeSelectDonDq1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDq1"));

export const makeSelectDonDq2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDq2"));

export const makeSelectDonDr1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDr1"));

export const makeSelectDonDr2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDr2"));

export const makeSelectDonDr51 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDr51"));

export const makeSelectDonDr52 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDr52"));

export const makeSelectDonDr53 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donDr53"));

export const makeSelectDonEbna = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEbna"));

export const makeSelectDonEbvIgg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEbvIgg"));

export const makeSelectDonEbvIgm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEbvIgm"));

export const makeSelectDonEjectFract = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEjectFract"));

export const makeSelectDonEjectFractMeth = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEjectFractMeth"));

export const makeSelectDonEthnicitySrtr = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donEthnicitySrtr"));

export const makeSelectDonExpandDonFlgOptn = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donExpandDonFlgOptn"));

export const makeSelectDonExpandDonKi = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donExpandDonKi"));

export const makeSelectDonExpressFamily = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donExpressFamily"));

export const makeSelectDonExtracranialCancer = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donExtracranialCancer"));

export const makeSelectDonFeedbackDone = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donFeedbackDone"));

export const makeSelectDonFinalSerumCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donFinalSerumCreat"));

export const makeSelectDonGender = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donGender"));

export const makeSelectDonHbcStat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHbcStat"));

export const makeSelectDonHbvNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHbvNat"));

export const makeSelectDonHbvSurfAntibody = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHbvSurfAntibody"));

export const makeSelectDonHbvSurfAntigen = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHbvSurfAntigen"));

export const makeSelectDonHcvNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHcvNat"));

export const makeSelectDonHcvStat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHcvStat"));

export const makeSelectDonHeavyAlcohol = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHeavyAlcohol"));

export const makeSelectDonHematocrit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHematocrit"));

export const makeSelectDonHeparin = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHeparin"));

export const makeSelectDonHgtCm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHgtCm"));

export const makeSelectDonHighCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHighCreat"));

export const makeSelectDonHistAlcohol = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistAlcohol"));

export const makeSelectDonHistCancer = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistCancer"));

export const makeSelectDonHistCigaretteGt20Pkyr = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistCigaretteGt20Pkyr"));

export const makeSelectDonHistCocaine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistCocaine"));

export const makeSelectDonHistDiab = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistDiab"));

export const makeSelectDonHistHyperten = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistHyperten"));

export const makeSelectDonHistInsulinDepnd = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistInsulinDepnd"));

export const makeSelectDonHistIvDrug = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistIvDrug"));

export const makeSelectDonHistOtherDrug = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistOtherDrug"));

export const makeSelectDonHistPrevMi = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHistPrevMi"));

export const makeSelectDonHivNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHivNat"));

export const makeSelectDonHlaTyp = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHlaTyp"));

export const makeSelectDonHlaTypNotDone = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHlaTypNotDone"));

export const makeSelectDonHomeState = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHomeState"));

export const makeSelectDonHtlvNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHtlvNat"));

export const makeSelectDonHtn = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHtn"));

export const makeSelectDonHypertenDiet = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHypertenDiet"));

export const makeSelectDonHypertenDiuretics = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHypertenDiuretics"));

export const makeSelectDonHypertenOtherMeds = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donHypertenOtherMeds"));

export const makeSelectDonInfectBlood = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectBlood"));

export const makeSelectDonInfectBloodConfirm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectBloodConfirm"));

export const makeSelectDonInfectLu = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectLu"));

export const makeSelectDonInfectLuConfirm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectLuConfirm"));

export const makeSelectDonInfectOther = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectOther"));

export const makeSelectDonInfectOtherConfirm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectOtherConfirm"));

export const makeSelectDonInfectUrine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectUrine"));

export const makeSelectDonInfectUrineConfirm = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInfectUrineConfirm"));

export const makeSelectDonInotropAgentGe3 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInotropAgentGe3"));

export const makeSelectDonInotropSupport = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInotropSupport"));

export const makeSelectDonInr = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInr"));

export const makeSelectDonInsulin = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donInsulin"));

export const makeSelectDonIntracranialCancer = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donIntracranialCancer"));

export const makeSelectDonKiGlomerObserved = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donKiGlomerObserved"));

export const makeSelectDonKiGlomerSclerPct = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donKiGlomerSclerPct"));

export const makeSelectDonLfKiBiopsy = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfKiBiopsy"));

export const makeSelectDonLfKiGlomerSclerPct = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfKiGlomerSclerPct"));

export const makeSelectDonLfKiPump = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfKiPump"));

export const makeSelectDonLfKiResistPriorShip = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfKiResistPriorShip"));

export const makeSelectDonLfKiTxferPump = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfKiTxferPump"));

export const makeSelectDonLfLuBroncho = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLfLuBroncho"));

export const makeSelectDonLipase = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLipase"));

export const makeSelectDonLiBiopsy = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiBiopsy"));

export const makeSelectDonLiBiopsyMacroFat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiBiopsyMacroFat"));

export const makeSelectDonLiBiopsyMicroFat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiBiopsyMicroFat"));

export const makeSelectDonLiOthHistologyGranulomas = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiOthHistologyGranulomas"));

export const makeSelectDonLiOthHistologyHemosidera = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiOthHistologyHemosidera"));

export const makeSelectDonLiOthHistologyOther = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donLiOthHistologyOther"));

export const makeSelectDonMapFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMapFinal"));

export const makeSelectDonMapInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMapInit"));

export const makeSelectDonMaxCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMaxCreat"));

export const makeSelectDonMedExaminer = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMedExaminer"));

export const makeSelectDonMeetCdcHighRisk = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMeetCdcHighRisk"));

export const makeSelectDonMeetDoubleKiCrit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donMeetDoubleKiCrit"));

export const makeSelectDonNonHrBeat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donNonHrBeat"));

export const makeSelectDonNonHrBeatCntl = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donNonHrBeatCntl"));

export const makeSelectDonNonHrBeatCoreCool = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donNonHrBeatCoreCool"));

export const makeSelectDonOpoCtrId = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donOpoCtrId"));

export const makeSelectDonPaDiastFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPaDiastFinal"));

export const makeSelectDonPaDiastInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPaDiastInit"));

export const makeSelectDonPaSystFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPaSystFinal"));

export const makeSelectDonPaSystInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPaSystInit"));

export const makeSelectDonPco2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPco2"));

export const makeSelectDonPcwpFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPcwpFinal"));

export const makeSelectDonPcwpInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPcwpInit"));

export const makeSelectDonPeakSerumCreat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPeakSerumCreat"));

export const makeSelectDonPh = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPh"));

export const makeSelectDonPo2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPo2"));

export const makeSelectDonPo2Done = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPo2Done"));

export const makeSelectDonPo2Fio2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPo2Fio2"));

export const makeSelectDonPrerecovDiuretics = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrerecovDiuretics"));

export const makeSelectDonPrerecovMeds = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrerecovMeds"));

export const makeSelectDonPrerecovSteroids = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrerecovSteroids"));

export const makeSelectDonPrerecovT3 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrerecovT3"));

export const makeSelectDonPrerecovT4 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrerecovT4"));

export const makeSelectDonPrevGastroDisease = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPrevGastroDisease"));

export const makeSelectDonProteinUrine = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donProteinUrine"));

export const makeSelectDonPulmCath = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donPulmCath"));

export const makeSelectDonRace = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRace"));

export const makeSelectDonRaceSrtr = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRaceSrtr"));

export const makeSelectDonRecovDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRecovDt"));

export const makeSelectDonRecovOutUs = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRecovOutUs"));

export const makeSelectDonRefDt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRefDt"));

export const makeSelectDonRefFlg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRefFlg"));

export const makeSelectDonResuscitDuration = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donResuscitDuration"));

export const makeSelectDonRprVdrl = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRprVdrl"));

export const makeSelectDonRtKiBiopsy = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtKiBiopsy"));

export const makeSelectDonRtKiGlomerSclerPct = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtKiGlomerSclerPct"));

export const makeSelectDonRtKiPump = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtKiPump"));

export const makeSelectDonRtKiResistPriorShip = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtKiResistPriorShip"));

export const makeSelectDonRtKiTxferPump = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtKiTxferPump"));

export const makeSelectDonRtLuBroncho = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donRtLuBroncho"));

export const makeSelectDonSerumAmylase = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSerumAmylase"));

export const makeSelectDonSgot = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSgot"));

export const makeSelectDonSgpt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSgpt"));

export const makeSelectDonSkinCancer = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSkinCancer"));

export const makeSelectDonSodium = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSodium"));

export const makeSelectDonSvrFinal = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSvrFinal"));

export const makeSelectDonSvrInit = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donSvrInit"));

export const makeSelectDonTargetSource1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTargetSource1"));

export const makeSelectDonTargetSource2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTargetSource2"));

export const makeSelectDonTattoos = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTattoos"));

export const makeSelectDonTmForXmatch = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTmForXmatch"));

export const makeSelectDonTotBili = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTotBili"));

export const makeSelectDonTx = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTx"));

export const makeSelectDonTxfusTerminalHospNum = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTxfusTerminalHospNum"));

export const makeSelectDonTy = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTy"));

export const makeSelectDonTypMethclass1 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTypMethclass1"));

export const makeSelectDonTypMethclass1Dt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTypMethclass1Dt"));

export const makeSelectDonTypMethclass2 = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTypMethclass2"));

export const makeSelectDonTypMethclass2Dt = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donTypMethclass2Dt"));

export const makeSelectDonUseDoubleKi = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donUseDoubleKi"));

export const makeSelectDonVasodil = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donVasodil"));

export const makeSelectDonVesselsGt50Stenosis = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donVesselsGt50Stenosis"));

export const makeSelectDonWallAbnormGlob = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donWallAbnormGlob"));

export const makeSelectDonWallAbnormSeg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donWallAbnormSeg"));

export const makeSelectDonWarmIschTmMins = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donWarmIschTmMins"));

export const makeSelectDonWestNileNat = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donWestNileNat"));

export const makeSelectDonWgtKg = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("donWgtKg"));

export const makeSelectPersId = () =>
createSelector(selectDonDecFormDomain, substate => substate.get("persId"));

