import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectCanFormDomain = state => state.get("CanForm", initialState);

export const makeSelectCanAbo = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAbo"));

export const makeSelectCanAcademicLevel = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcademicLevel"));

export const makeSelectCanAcademicProgress = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcademicProgress"));

export const makeSelectCanAcptA2Don = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptA2Don"));

export const makeSelectCanAcptAboIncomp = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptAboIncomp"));

export const makeSelectCanAcptExtracorpLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptExtracorpLi"));

export const makeSelectCanAcptHbcPos = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptHbcPos"));

export const makeSelectCanAcptHcvPos = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptHcvPos"));

export const makeSelectCanAcptLiSeg = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptLiSeg"));

export const makeSelectCanAcptOrgOtherTeam = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptOrgOtherTeam"));

export const makeSelectCanAcptProcurKi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptProcurKi"));

export const makeSelectCanAcptProcurLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptProcurLi"));

export const makeSelectCanAcptProcurPa = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAcptProcurPa"));

export const makeSelectCanActivateDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanActivateDt"));

export const makeSelectCanAgeAtListing = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAgeAtListing"));

export const makeSelectCanAgeInMonthsAtListing = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAgeInMonthsAtListing"));

export const makeSelectCanAnastomosis = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAnastomosis"));

export const makeSelectCanAnesthPriorDeath = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAnesthPriorDeath"));

export const makeSelectCanAngina = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAngina"));

export const makeSelectCanAnginaCad = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAnginaCad"));

export const makeSelectCanArtificialLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanArtificialLi"));

export const makeSelectCanAscites = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanAscites"));

export const makeSelectCanBacteriaPerit = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanBacteriaPerit"));

export const makeSelectCanBmi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanBmi"));

export const makeSelectCanCerebVasc = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanCerebVasc"));

export const makeSelectCanCitizenship = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanCitizenship"));

export const makeSelectCanCognitiveDevelop = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanCognitiveDevelop"));

export const makeSelectCanCtpScore = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanCtpScore"));

export const makeSelectCanDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDeathDt"));

export const makeSelectCanDgn = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDgn"));

export const makeSelectCanDgn2 = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDgn2"));

export const makeSelectCanDgnOstxt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDgnOstxt"));

export const makeSelectCanDiab = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDiab"));

export const makeSelectCanDiabTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDiabTy"));

export const makeSelectCanDial = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDial"));

export const makeSelectCanDrugTreatCopd = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDrugTreatCopd"));

export const makeSelectCanDrugTreatHyperten = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanDrugTreatHyperten"));

export const makeSelectCanEcmo = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEcmo"));

export const makeSelectCanEducation = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEducation"));

export const makeSelectCanElectrolyte = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanElectrolyte"));

export const makeSelectCanEmplStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEmplStat"));

export const makeSelectCanEnceph = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEnceph"));

export const makeSelectCanEndwlfu = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEndwlfu"));

export const makeSelectCanEthnicitySrtr = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanEthnicitySrtr"));

export const makeSelectCanExhaustVascAccess = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanExhaustVascAccess"));

export const makeSelectCanFollowsOpoAlloc = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanFollowsOpoAlloc"));

export const makeSelectCanFunctnStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanFunctnStat"));

export const makeSelectCanFungalSepsis = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanFungalSepsis"));

export const makeSelectCanGender = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanGender"));

export const makeSelectCanHgtCm = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanHgtCm"));

export const makeSelectCanHgtWgtDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanHgtWgtDt"));

export const makeSelectCanIabp = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanIabp"));

export const makeSelectCanInitActStatCd = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitActStatCd"));

export const makeSelectCanInitActStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitActStatDt"));

export const makeSelectCanInitInactStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitInactStatDt"));

export const makeSelectCanInitSrtrLabMeld = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitSrtrLabMeld"));

export const makeSelectCanInitSrtrLabMeldTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitSrtrLabMeldTy"));

export const makeSelectCanInitStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanInitStat"));

export const makeSelectCanIvInotrop = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanIvInotrop"));

export const makeSelectCanLastActStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastActStatDt"));

export const makeSelectCanLastAlbumin = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastAlbumin"));

export const makeSelectCanLastAscites = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastAscites"));

export const makeSelectCanLastBili = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastBili"));

export const makeSelectCanLastDialPriorWeek = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastDialPriorWeek"));

export const makeSelectCanLastEnceph = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastEnceph"));

export const makeSelectCanLastInactStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastInactStatDt"));

export const makeSelectCanLastInr = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastInr"));

export const makeSelectCanLastSerumCreat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastSerumCreat"));

export const makeSelectCanLastSerumSodium = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastSerumSodium"));

export const makeSelectCanLastSrtrLabMeld = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastSrtrLabMeld"));

export const makeSelectCanLastSrtrLabMeldTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastSrtrLabMeldTy"));

export const makeSelectCanLastStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLastStat"));

export const makeSelectCanLifeSupport = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLifeSupport"));

export const makeSelectCanLifeSupportOther = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLifeSupportOther"));

export const makeSelectCanListingCtrId = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanListingCtrId"));

export const makeSelectCanListingDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanListingDt"));

export const makeSelectCanListingOpoId = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanListingOpoId"));

export const makeSelectCanLivingDonTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLivingDonTx"));

export const makeSelectCanLiDysfunctn = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLiDysfunctn"));

export const makeSelectCanLossVascAccess = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanLossVascAccess"));

export const makeSelectCanMalig = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMalig"));

export const makeSelectCanMaligTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTy"));

export const makeSelectCanMaligTyBreast = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyBreast"));

export const makeSelectCanMaligTyCnsTumor = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyCnsTumor"));

export const makeSelectCanMaligTyGenitourinary = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyGenitourinary"));

export const makeSelectCanMaligTyHepblast = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyHepblast"));

export const makeSelectCanMaligTyHepcarcinoma = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyHepcarcinoma"));

export const makeSelectCanMaligTyLeukLymph = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyLeukLymph"));

export const makeSelectCanMaligTyLiver = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyLiver"));

export const makeSelectCanMaligTyLu = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyLu"));

export const makeSelectCanMaligTyOther = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyOther"));

export const makeSelectCanMaligTySkinMel = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTySkinMel"));

export const makeSelectCanMaligTySkinNonMel = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTySkinNonMel"));

export const makeSelectCanMaligTyThroat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyThroat"));

export const makeSelectCanMaligTyThyroid = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyThyroid"));

export const makeSelectCanMaligTyUnk = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaligTyUnk"));

export const makeSelectCanMaxAge = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaxAge"));

export const makeSelectCanMaxMile = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaxMile"));

export const makeSelectCanMaxWgt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMaxWgt"));

export const makeSelectCanMedCond = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMedCond"));

export const makeSelectCanMinAge = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMinAge"));

export const makeSelectCanMinWgt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMinWgt"));

export const makeSelectCanMostRecentCreat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMostRecentCreat"));

export const makeSelectCanMostRecentHgtCm = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMostRecentHgtCm"));

export const makeSelectCanMostRecentWgtKg = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMostRecentWgtKg"));

export const makeSelectCanMotorDevelop = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMotorDevelop"));

export const makeSelectCanMuscleWasting = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanMuscleWasting"));

export const makeSelectCanNeoplasm = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanNeoplasm"));

export const makeSelectCanNewPrevPiTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanNewPrevPiTx"));

export const makeSelectCanNonReconGi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanNonReconGi"));

export const makeSelectCanPepticUlcer = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPepticUlcer"));

export const makeSelectCanPeriphVasc = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPeriphVasc"));

export const makeSelectCanPermState = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPermState"));

export const makeSelectCanPge = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPge"));

export const makeSelectCanPhyscCapacity = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPhyscCapacity"));

export const makeSelectCanPortalVein = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPortalVein"));

export const makeSelectCanPrelimXmatchRequest = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrelimXmatchRequest"));

export const makeSelectCanPrevAbdomSurg = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevAbdomSurg"));

export const makeSelectCanPrevBoneMarrowDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevBoneMarrowDt"));

export const makeSelectCanPrevBoneMarrowTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevBoneMarrowTx"));

export const makeSelectCanPrevHl = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevHl"));

export const makeSelectCanPrevHr = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevHr"));

export const makeSelectCanPrevIn = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevIn"));

export const makeSelectCanPrevKi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevKi"));

export const makeSelectCanPrevKp = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevKp"));

export const makeSelectCanPrevLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevLi"));

export const makeSelectCanPrevLu = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevLu"));

export const makeSelectCanPrevPa = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevPa"));

export const makeSelectCanPrevTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevTx"));

export const makeSelectCanPrevTxfus = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrevTxfus"));

export const makeSelectCanPrimaryPay = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPrimaryPay"));

export const makeSelectCanPulmEmbol = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanPulmEmbol"));

export const makeSelectCanRace = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRace"));

export const makeSelectCanRaceSrtr = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRaceSrtr"));

export const makeSelectCanRecurSepsis = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRecurSepsis"));

export const makeSelectCanRemCd = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRemCd"));

export const makeSelectCanRemCod = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRemCod"));

export const makeSelectCanRemDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanRemDt"));

export const makeSelectCanSecondaryPay = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanSecondaryPay"));

export const makeSelectCanSource = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanSource"));

export const makeSelectCanStatExtendFlg = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanStatExtendFlg"));

export const makeSelectCanTiebreakerDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTiebreakerDt"));

export const makeSelectCanTipss = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTipss"));

export const makeSelectCanTotAlbumin = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTotAlbumin"));

export const makeSelectCanTotBili = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTotBili"));

export const makeSelectCanTrrExists = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTrrExists"));

export const makeSelectCanTxCountry = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanTxCountry"));

export const makeSelectCanVadTah = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanVadTah"));

export const makeSelectCanVaricealBleeding = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanVaricealBleeding"));

export const makeSelectCanVentilator = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanVentilator"));

export const makeSelectCanWgtKg = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanWgtKg"));

export const makeSelectCanWorkIncome = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanWorkIncome"));

export const makeSelectCanWorkNoStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanWorkNoStat"));

export const makeSelectCanWorkYesStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanWorkYesStat"));

export const makeSelectCanYearEntryUs = () =>
createSelector(selectCanFormDomain, substate => substate.get("CanYearEntryUs"));

export const makeSelectDonorId = () =>
createSelector(selectCanFormDomain, substate => substate.get("DonorId"));

export const makeSelectDonTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("DonTy"));

export const makeSelectOrgAr = () =>
createSelector(selectCanFormDomain, substate => substate.get("OrgAr"));

export const makeSelectPersId = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersId"));

export const makeSelectPersNexttx = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersNexttx"));

export const makeSelectPersNexttxTrrId = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersNexttxTrrId"));

export const makeSelectPersOptnDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersOptnDeathDt"));

export const makeSelectPersRestrictDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersRestrictDeathDt"));

export const makeSelectPersRestrictDeathVrfy = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersRestrictDeathVrfy"));

export const makeSelectPersSsaDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("PersSsaDeathDt"));

export const makeSelectPxId = () =>
createSelector(selectCanFormDomain, substate => substate.get("PxId"));

export const makeSelectRecTxDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("RecTxDt"));

export const makeSelectRecTxProcedureTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("RecTxProcedureTy"));

export const makeSelectWlOrg = () =>
createSelector(selectCanFormDomain, substate => substate.get("WlOrg"));

