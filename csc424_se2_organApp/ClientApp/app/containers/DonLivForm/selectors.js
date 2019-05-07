import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectDonLivFormDomain = state => state.get("DonLivForm", initialState);

export const makeSelectRecord = () =>
createSelector(selectDonLivFormDomain, substate => substate.toJS());

export const makeSelectDonorId = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donorId"));

export const makeSelectDonA1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donA1"));

export const makeSelectDonA2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donA2"));

export const makeSelectDonAbo = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAbo"));

export const makeSelectDonAge = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAge"));

export const makeSelectDonAgeInMonths = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAgeInMonths"));

export const makeSelectDonAlbuminPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAlbuminPostop"));

export const makeSelectDonAlbuminPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAlbuminPreop"));

export const makeSelectDonAlkphosPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAlkphosPostop"));

export const makeSelectDonAlkphosPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAlkphosPreop"));

export const makeSelectDonAnasthCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donAnasthCompl"));

export const makeSelectDonArrhythm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donArrhythm"));

export const makeSelectDonB1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donB1"));

export const makeSelectDonB2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donB2"));

export const makeSelectDonBiliPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBiliPostop"));

export const makeSelectDonBiliPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBiliPreop"));

export const makeSelectDonBpDischrgDiast = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpDischrgDiast"));

export const makeSelectDonBpDischrgSyst = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpDischrgSyst"));

export const makeSelectDonBpPostopDiast = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpPostopDiast"));

export const makeSelectDonBpPostopSyst = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpPostopSyst"));

export const makeSelectDonBpPreopDiast = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpPreopDiast"));

export const makeSelectDonBpPreopSyst = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBpPreopSyst"));

export const makeSelectDonBw4 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBw4"));

export const makeSelectDonBw6 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donBw6"));

export const makeSelectDonC1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donC1"));

export const makeSelectDonC2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donC2"));

export const makeSelectDonCancerFreeInterval = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCancerFreeInterval"));

export const makeSelectDonCitizenship = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCitizenship"));

export const makeSelectDonCmv = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmv"));

export const makeSelectDonCmvClinical = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvClinical"));

export const makeSelectDonCmvCult = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvCult"));

export const makeSelectDonCmvIgg = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvIgg"));

export const makeSelectDonCmvIgm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvIgm"));

export const makeSelectDonCmvNucleic = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvNucleic"));

export const makeSelectDonCmvTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donCmvTested"));

export const makeSelectDonDiab = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDiab"));

export const makeSelectDonDiabTreat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDiabTreat"));

export const makeSelectDonDonation = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDonation"));

export const makeSelectDonDp1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDp1"));

export const makeSelectDonDp2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDp2"));

export const makeSelectDonDq1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDq1"));

export const makeSelectDonDq2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDq2"));

export const makeSelectDonDr1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDr1"));

export const makeSelectDonDr2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDr2"));

export const makeSelectDonDr51 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDr51"));

export const makeSelectDonDr52 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDr52"));

export const makeSelectDonDr53 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDr53"));

export const makeSelectDonDurationAbstinence = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donDurationAbstinence"));

export const makeSelectDonEbvClinical = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEbvClinical"));

export const makeSelectDonEbvDna = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEbvDna"));

export const makeSelectDonEbvIgg = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEbvIgg"));

export const makeSelectDonEbvIgm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEbvIgm"));

export const makeSelectDonEbvTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEbvTested"));

export const makeSelectDonEducation = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEducation"));

export const makeSelectDonEthnicitySrtr = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donEthnicitySrtr"));

export const makeSelectDonFefAfterPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFefAfterPreop"));

export const makeSelectDonFefBeforePreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFefBeforePreop"));

export const makeSelectDonFev1AfterPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFev1AfterPreop"));

export const makeSelectDonFev1BeforePreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFev1BeforePreop"));

export const makeSelectDonFfpUnits = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFfpUnits"));

export const makeSelectDonFree = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFree"));

export const makeSelectDonFunctnStat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFunctnStat"));

export const makeSelectDonFvcAfterPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFvcAfterPreop"));

export const makeSelectDonFvcBeforePreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donFvcBeforePreop"));

export const makeSelectDonGender = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donGender"));

export const makeSelectDonHaploTyMatch = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHaploTyMatch"));

export const makeSelectDonHbvAntibody = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvAntibody"));

export const makeSelectDonHbvClinical = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvClinical"));

export const makeSelectDonHbvDna = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvDna"));

export const makeSelectDonHbvHdv = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvHdv"));

export const makeSelectDonHbvLiHistology = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvLiHistology"));

export const makeSelectDonHbvSurfAntigen = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvSurfAntigen"));

export const makeSelectDonHbvTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHbvTested"));

export const makeSelectDonHcvAntibody = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvAntibody"));

export const makeSelectDonHcvClinical = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvClinical"));

export const makeSelectDonHcvLiHistology = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvLiHistology"));

export const makeSelectDonHcvRiba = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvRiba"));

export const makeSelectDonHcvRna = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvRna"));

export const makeSelectDonHcvTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHcvTested"));

export const makeSelectDonHealthInsur = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHealthInsur"));

export const makeSelectDonHgtCm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHgtCm"));

export const makeSelectDonHistCancer = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHistCancer"));

export const makeSelectDonHistCigarette = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHistCigarette"));

export const makeSelectDonHistHyperten = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHistHyperten"));

export const makeSelectDonHivAntibody = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivAntibody"));

export const makeSelectDonHivClinical = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivClinical"));

export const makeSelectDonHivConfirm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivConfirm"));

export const makeSelectDonHivRna = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivRna"));

export const makeSelectDonHivScreen = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivScreen"));

export const makeSelectDonHivTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHivTested"));

export const makeSelectDonHlaTyp = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHlaTyp"));

export const makeSelectDonHlaTypNotDone = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHlaTypNotDone"));

export const makeSelectDonHmoPpo = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHmoPpo"));

export const makeSelectDonHomeState = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHomeState"));

export const makeSelectDonHypertenDiet = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHypertenDiet"));

export const makeSelectDonHypertenDiuretics = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHypertenDiuretics"));

export const makeSelectDonHypertenOtherMeds = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHypertenOtherMeds"));

export const makeSelectDonHypertenPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donHypertenPostop"));

export const makeSelectDonInitDischrgDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donInitDischrgDt"));

export const makeSelectDonInrPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donInrPostop"));

export const makeSelectDonInrPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donInrPreop"));

export const makeSelectDonIntraopCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donIntraopCompl"));

export const makeSelectDonIntraopComplReason = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donIntraopComplReason"));

export const makeSelectDonKiBiopsy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiBiopsy"));

export const makeSelectDonKiCreatDischrg = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiCreatDischrg"));

export const makeSelectDonKiCreatPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiCreatPostop"));

export const makeSelectDonKiCreatPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiCreatPreop"));

export const makeSelectDonKiOtherCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiOtherCompl"));

export const makeSelectDonKiOtherComplIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiOtherComplIntervention"));

export const makeSelectDonKiOtherIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiOtherIntervention"));

export const makeSelectDonKiOtherInterventionDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiOtherInterventionDt"));

export const makeSelectDonKiPctGs = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiPctGs"));

export const makeSelectDonKiProcedureConvert = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiProcedureConvert"));

export const makeSelectDonKiProcedureTy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiProcedureTy"));

export const makeSelectDonKiReadmit = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReadmit"));

export const makeSelectDonKiReadmitDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReadmitDt"));

export const makeSelectDonKiReadmitReason = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReadmitReason"));

export const makeSelectDonKiReop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReop"));

export const makeSelectDonKiReopBleen = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopBleen"));

export const makeSelectDonKiReopBleenDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopBleenDt"));

export const makeSelectDonKiReopBowel = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopBowel"));

export const makeSelectDonKiReopBowelDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopBowelDt"));

export const makeSelectDonKiReopHernia = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopHernia"));

export const makeSelectDonKiReopHerniaDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopHerniaDt"));

export const makeSelectDonKiReopOther = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopOther"));

export const makeSelectDonKiReopOtherDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopOtherDt"));

export const makeSelectDonKiReopVasc = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopVasc"));

export const makeSelectDonKiReopVascDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiReopVascDt"));

export const makeSelectDonKiVascCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiVascCompl"));

export const makeSelectDonKiVascComplIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donKiVascComplIntervention"));

export const makeSelectDonLengthHospStay = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLengthHospStay"));

export const makeSelectDonLivingDonCod = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLivingDonCod"));

export const makeSelectDonLiBiliaryCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiBiliaryCompl"));

export const makeSelectDonLiBiliaryComplGrade = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiBiliaryComplGrade"));

export const makeSelectDonLiBiopsy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiBiopsy"));

export const makeSelectDonLiBiopsyMacroFat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiBiopsyMacroFat"));

export const makeSelectDonLiBiopsyMicroFat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiBiopsyMicroFat"));

export const makeSelectDonLiCreatPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiCreatPostop"));

export const makeSelectDonLiCreatPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiCreatPreop"));

export const makeSelectDonLiOtherCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiOtherCompl"));

export const makeSelectDonLiOtherComplIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiOtherComplIntervention"));

export const makeSelectDonLiOtherIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiOtherIntervention"));

export const makeSelectDonLiOtherInterventionDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiOtherInterventionDt"));

export const makeSelectDonLiProcedureTy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiProcedureTy"));

export const makeSelectDonLiReadmit = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReadmit"));

export const makeSelectDonLiReadmitDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReadmitDt"));

export const makeSelectDonLiReadmitReason = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReadmitReason"));

export const makeSelectDonLiReop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReop"));

export const makeSelectDonLiReopBiliary = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBiliary"));

export const makeSelectDonLiReopBiliaryDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBiliaryDt"));

export const makeSelectDonLiReopBleed = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBleed"));

export const makeSelectDonLiReopBleedDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBleedDt"));

export const makeSelectDonLiReopBowel = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBowel"));

export const makeSelectDonLiReopBowelDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopBowelDt"));

export const makeSelectDonLiReopFail = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopFail"));

export const makeSelectDonLiReopFailDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopFailDt"));

export const makeSelectDonLiReopHernia = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopHernia"));

export const makeSelectDonLiReopHerniaDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopHerniaDt"));

export const makeSelectDonLiReopOther = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopOther"));

export const makeSelectDonLiReopOtherDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopOtherDt"));

export const makeSelectDonLiReopVasc = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopVasc"));

export const makeSelectDonLiReopVascDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiReopVascDt"));

export const makeSelectDonLiVascCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiVascCompl"));

export const makeSelectDonLiVascComplIntervention = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLiVascComplIntervention"));

export const makeSelectDonLuArrhythm = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuArrhythm"));

export const makeSelectDonLuCapacityPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuCapacityPreop"));

export const makeSelectDonLuCompl = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuCompl"));

export const makeSelectDonLuComplReason = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuComplReason"));

export const makeSelectDonLuProcedureConvert = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuProcedureConvert"));

export const makeSelectDonLuProcedureTy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuProcedureTy"));

export const makeSelectDonLuReadmit = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuReadmit"));

export const makeSelectDonLuReadmitDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuReadmitDt"));

export const makeSelectDonLuReadmitReason = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuReadmitReason"));

export const makeSelectDonLuThoracTubes = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donLuThoracTubes"));

export const makeSelectDonMaritalStat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donMaritalStat"));

export const makeSelectDonMedicaid = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donMedicaid"));

export const makeSelectDonMedicare = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donMedicare"));

export const makeSelectDonNonAutoBlood = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donNonAutoBlood"));

export const makeSelectDonOpoRunMatch = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donOpoRunMatch"));

export const makeSelectDonOrg1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donOrg1"));

export const makeSelectDonOrg2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donOrg2"));

export const makeSelectDonOtherGovt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donOtherGovt"));

export const makeSelectDonOtherTobaccoUse = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donOtherTobaccoUse"));

export const makeSelectDonPackYears = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPackYears"));

export const makeSelectDonPao2Preop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPao2Preop"));

export const makeSelectDonPhyscCapacity = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPhyscCapacity"));

export const makeSelectDonPltUnits = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPltUnits"));

export const makeSelectDonPostopTestDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPostopTestDt"));

export const makeSelectDonPrbcUnits = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPrbcUnits"));

export const makeSelectDonPrimaryPay = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPrimaryPay"));

export const makeSelectDonPrivInsur = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donPrivInsur"));

export const makeSelectDonRace = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donRace"));

export const makeSelectDonRaceSrtr = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donRaceSrtr"));

export const makeSelectDonRecovDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donRecovDt"));

export const makeSelectDonRecovTxSameCtr = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donRecovTxSameCtr"));

export const makeSelectDonRelationshipTy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donRelationshipTy"));

export const makeSelectDonSacrificeLobe = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSacrificeLobe"));

export const makeSelectDonSelf = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSelf"));

export const makeSelectDonSgotPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSgotPostop"));

export const makeSelectDonSgotPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSgotPreop"));

export const makeSelectDonSgptPostop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSgptPostop"));

export const makeSelectDonSgptPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donSgptPreop"));

export const makeSelectDonStat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donStat"));

export const makeSelectDonStatDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donStatDt"));

export const makeSelectDonTargetSource1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTargetSource1"));

export const makeSelectDonTargetSource2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTargetSource2"));

export const makeSelectDonTlcAfterPreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTlcAfterPreop"));

export const makeSelectDonTlcBeforePreop = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTlcBeforePreop"));

export const makeSelectDonTy = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTy"));

export const makeSelectDonTypMethclass1 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTypMethclass1"));

export const makeSelectDonTypMethclass1Dt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTypMethclass1Dt"));

export const makeSelectDonTypMethclass2 = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTypMethclass2"));

export const makeSelectDonTypMethclass2Dt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donTypMethclass2Dt"));

export const makeSelectDonUrinePostopProtein = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donUrinePostopProtein"));

export const makeSelectDonUrinePostopRatio = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donUrinePostopRatio"));

export const makeSelectDonUrinePreopProtein = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donUrinePreopProtein"));

export const makeSelectDonUrinePreopRatio = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donUrinePreopRatio"));

export const makeSelectDonVirusesTested = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donVirusesTested"));

export const makeSelectDonWgtKg = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donWgtKg"));

export const makeSelectDonWorkIncome = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donWorkIncome"));

export const makeSelectDonWorkNoStat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donWorkNoStat"));

export const makeSelectDonWorkYesStat = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donWorkYesStat"));

export const makeSelectDonYearEntryUs = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("donYearEntryUs"));

export const makeSelectPersId = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("persId"));

export const makeSelectPersSsaDeathDt = () =>
createSelector(selectDonLivFormDomain, substate => substate.get("persSsaDeathDt"));

