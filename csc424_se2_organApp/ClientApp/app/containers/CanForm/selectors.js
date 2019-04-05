import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectCanFormDomain = state => state.get("CanForm", initialState);

export const makeSelectCanAbo = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAbo"));

export const makeSelectCanAcademicLevel = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcademicLevel"));

export const makeSelectCanAcademicProgress = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcademicProgress"));

export const makeSelectCanAcptA2Don = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptA2Don"));

export const makeSelectCanAcptAboIncomp = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptAboIncomp"));

export const makeSelectCanAcptExtracorpLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptExtracorpLi"));

export const makeSelectCanAcptHbcPos = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptHbcPos"));

export const makeSelectCanAcptHcvPos = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptHcvPos"));

export const makeSelectCanAcptLiSeg = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptLiSeg"));

export const makeSelectCanAcptOrgOtherTeam = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptOrgOtherTeam"));

export const makeSelectCanAcptProcurKi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptProcurKi"));

export const makeSelectCanAcptProcurLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptProcurLi"));

export const makeSelectCanAcptProcurPa = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAcptProcurPa"));

export const makeSelectCanActivateDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canActivateDt"));

export const makeSelectCanAgeAtListing = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAgeAtListing"));

export const makeSelectCanAgeInMonthsAtListing = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAgeInMonthsAtListing"));

export const makeSelectCanAnastomosis = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAnastomosis"));

export const makeSelectCanAnesthPriorDeath = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAnesthPriorDeath"));

export const makeSelectCanAngina = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAngina"));

export const makeSelectCanAnginaCad = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAnginaCad"));

export const makeSelectCanArtificialLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canArtificialLi"));

export const makeSelectCanAscites = () =>
createSelector(selectCanFormDomain, substate => substate.get("canAscites"));

export const makeSelectCanBacteriaPerit = () =>
createSelector(selectCanFormDomain, substate => substate.get("canBacteriaPerit"));

export const makeSelectCanBmi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canBmi"));

export const makeSelectCanCerebVasc = () =>
createSelector(selectCanFormDomain, substate => substate.get("canCerebVasc"));

export const makeSelectCanCitizenship = () =>
createSelector(selectCanFormDomain, substate => substate.get("canCitizenship"));

export const makeSelectCanCognitiveDevelop = () =>
createSelector(selectCanFormDomain, substate => substate.get("canCognitiveDevelop"));

export const makeSelectCanCtpScore = () =>
createSelector(selectCanFormDomain, substate => substate.get("canCtpScore"));

export const makeSelectCanDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDeathDt"));

export const makeSelectCanDgn = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDgn"));

export const makeSelectCanDgn2 = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDgn2"));

export const makeSelectCanDgnOstxt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDgnOstxt"));

export const makeSelectCanDiab = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDiab"));

export const makeSelectCanDiabTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDiabTy"));

export const makeSelectCanDial = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDial"));

export const makeSelectCanDrugTreatCopd = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDrugTreatCopd"));

export const makeSelectCanDrugTreatHyperten = () =>
createSelector(selectCanFormDomain, substate => substate.get("canDrugTreatHyperten"));

export const makeSelectCanEcmo = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEcmo"));

export const makeSelectCanEducation = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEducation"));

export const makeSelectCanElectrolyte = () =>
createSelector(selectCanFormDomain, substate => substate.get("canElectrolyte"));

export const makeSelectCanEmplStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEmplStat"));

export const makeSelectCanEnceph = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEnceph"));

export const makeSelectCanEndwlfu = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEndwlfu"));

export const makeSelectCanEthnicitySrtr = () =>
createSelector(selectCanFormDomain, substate => substate.get("canEthnicitySrtr"));

export const makeSelectCanExhaustVascAccess = () =>
createSelector(selectCanFormDomain, substate => substate.get("canExhaustVascAccess"));

export const makeSelectCanFollowsOpoAlloc = () =>
createSelector(selectCanFormDomain, substate => substate.get("canFollowsOpoAlloc"));

export const makeSelectCanFunctnStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canFunctnStat"));

export const makeSelectCanFungalSepsis = () =>
createSelector(selectCanFormDomain, substate => substate.get("canFungalSepsis"));

export const makeSelectCanGender = () =>
createSelector(selectCanFormDomain, substate => substate.get("canGender"));

export const makeSelectCanHgtCm = () =>
createSelector(selectCanFormDomain, substate => substate.get("canHgtCm"));

export const makeSelectCanHgtWgtDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canHgtWgtDt"));

export const makeSelectCanIabp = () =>
createSelector(selectCanFormDomain, substate => substate.get("canIabp"));

export const makeSelectCanInitActStatCd = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitActStatCd"));

export const makeSelectCanInitActStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitActStatDt"));

export const makeSelectCanInitInactStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitInactStatDt"));

export const makeSelectCanInitSrtrLabMeld = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitSrtrLabMeld"));

export const makeSelectCanInitSrtrLabMeldTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitSrtrLabMeldTy"));

export const makeSelectCanInitStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canInitStat"));

export const makeSelectCanIvInotrop = () =>
createSelector(selectCanFormDomain, substate => substate.get("canIvInotrop"));

export const makeSelectCanLastActStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastActStatDt"));

export const makeSelectCanLastAlbumin = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastAlbumin"));

export const makeSelectCanLastAscites = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastAscites"));

export const makeSelectCanLastBili = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastBili"));

export const makeSelectCanLastDialPriorWeek = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastDialPriorWeek"));

export const makeSelectCanLastEnceph = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastEnceph"));

export const makeSelectCanLastInactStatDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastInactStatDt"));

export const makeSelectCanLastInr = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastInr"));

export const makeSelectCanLastSerumCreat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastSerumCreat"));

export const makeSelectCanLastSerumSodium = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastSerumSodium"));

export const makeSelectCanLastSrtrLabMeld = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastSrtrLabMeld"));

export const makeSelectCanLastSrtrLabMeldTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastSrtrLabMeldTy"));

export const makeSelectCanLastStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLastStat"));

export const makeSelectCanLifeSupport = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLifeSupport"));

export const makeSelectCanLifeSupportOther = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLifeSupportOther"));

export const makeSelectCanListingCtrId = () =>
createSelector(selectCanFormDomain, substate => substate.get("canListingCtrId"));

export const makeSelectCanListingDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canListingDt"));

export const makeSelectCanListingOpoId = () =>
createSelector(selectCanFormDomain, substate => substate.get("canListingOpoId"));

export const makeSelectCanLivingDonTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLivingDonTx"));

export const makeSelectCanLiDysfunctn = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLiDysfunctn"));

export const makeSelectCanLossVascAccess = () =>
createSelector(selectCanFormDomain, substate => substate.get("canLossVascAccess"));

export const makeSelectCanMalig = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMalig"));

export const makeSelectCanMaligTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTy"));

export const makeSelectCanMaligTyBreast = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyBreast"));

export const makeSelectCanMaligTyCnsTumor = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyCnsTumor"));

export const makeSelectCanMaligTyGenitourinary = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyGenitourinary"));

export const makeSelectCanMaligTyHepblast = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyHepblast"));

export const makeSelectCanMaligTyHepcarcinoma = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyHepcarcinoma"));

export const makeSelectCanMaligTyLeukLymph = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyLeukLymph"));

export const makeSelectCanMaligTyLiver = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyLiver"));

export const makeSelectCanMaligTyLu = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyLu"));

export const makeSelectCanMaligTyOther = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyOther"));

export const makeSelectCanMaligTySkinMel = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTySkinMel"));

export const makeSelectCanMaligTySkinNonMel = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTySkinNonMel"));

export const makeSelectCanMaligTyThroat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyThroat"));

export const makeSelectCanMaligTyThyroid = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyThyroid"));

export const makeSelectCanMaligTyUnk = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaligTyUnk"));

export const makeSelectCanMaxAge = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaxAge"));

export const makeSelectCanMaxMile = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaxMile"));

export const makeSelectCanMaxWgt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMaxWgt"));

export const makeSelectCanMedCond = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMedCond"));

export const makeSelectCanMinAge = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMinAge"));

export const makeSelectCanMinWgt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMinWgt"));

export const makeSelectCanMostRecentCreat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMostRecentCreat"));

export const makeSelectCanMostRecentHgtCm = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMostRecentHgtCm"));

export const makeSelectCanMostRecentWgtKg = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMostRecentWgtKg"));

export const makeSelectCanMotorDevelop = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMotorDevelop"));

export const makeSelectCanMuscleWasting = () =>
createSelector(selectCanFormDomain, substate => substate.get("canMuscleWasting"));

export const makeSelectCanNeoplasm = () =>
createSelector(selectCanFormDomain, substate => substate.get("canNeoplasm"));

export const makeSelectCanNewPrevPiTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("canNewPrevPiTx"));

export const makeSelectCanNonReconGi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canNonReconGi"));

export const makeSelectCanPepticUlcer = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPepticUlcer"));

export const makeSelectCanPeriphVasc = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPeriphVasc"));

export const makeSelectCanPermState = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPermState"));

export const makeSelectCanPge = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPge"));

export const makeSelectCanPhyscCapacity = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPhyscCapacity"));

export const makeSelectCanPortalVein = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPortalVein"));

export const makeSelectCanPrelimXmatchRequest = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrelimXmatchRequest"));

export const makeSelectCanPrevAbdomSurg = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevAbdomSurg"));

export const makeSelectCanPrevBoneMarrowDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevBoneMarrowDt"));

export const makeSelectCanPrevBoneMarrowTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevBoneMarrowTx"));

export const makeSelectCanPrevHl = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevHl"));

export const makeSelectCanPrevHr = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevHr"));

export const makeSelectCanPrevIn = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevIn"));

export const makeSelectCanPrevKi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevKi"));

export const makeSelectCanPrevKp = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevKp"));

export const makeSelectCanPrevLi = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevLi"));

export const makeSelectCanPrevLu = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevLu"));

export const makeSelectCanPrevPa = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevPa"));

export const makeSelectCanPrevTx = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevTx"));

export const makeSelectCanPrevTxfus = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrevTxfus"));

export const makeSelectCanPrimaryPay = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPrimaryPay"));

export const makeSelectCanPulmEmbol = () =>
createSelector(selectCanFormDomain, substate => substate.get("canPulmEmbol"));

export const makeSelectCanRace = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRace"));

export const makeSelectCanRaceSrtr = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRaceSrtr"));

export const makeSelectCanRecurSepsis = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRecurSepsis"));

export const makeSelectCanRemCd = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRemCd"));

export const makeSelectCanRemCod = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRemCod"));

export const makeSelectCanRemDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canRemDt"));

export const makeSelectCanSecondaryPay = () =>
createSelector(selectCanFormDomain, substate => substate.get("canSecondaryPay"));

export const makeSelectCanSource = () =>
createSelector(selectCanFormDomain, substate => substate.get("canSource"));

export const makeSelectCanStatExtendFlg = () =>
createSelector(selectCanFormDomain, substate => substate.get("canStatExtendFlg"));

export const makeSelectCanTiebreakerDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTiebreakerDt"));

export const makeSelectCanTipss = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTipss"));

export const makeSelectCanTotAlbumin = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTotAlbumin"));

export const makeSelectCanTotBili = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTotBili"));

export const makeSelectCanTrrExists = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTrrExists"));

export const makeSelectCanTxCountry = () =>
createSelector(selectCanFormDomain, substate => substate.get("canTxCountry"));

export const makeSelectCanVadTah = () =>
createSelector(selectCanFormDomain, substate => substate.get("canVadTah"));

export const makeSelectCanVaricealBleeding = () =>
createSelector(selectCanFormDomain, substate => substate.get("canVaricealBleeding"));

export const makeSelectCanVentilator = () =>
createSelector(selectCanFormDomain, substate => substate.get("canVentilator"));

export const makeSelectCanWgtKg = () =>
createSelector(selectCanFormDomain, substate => substate.get("canWgtKg"));

export const makeSelectCanWorkIncome = () =>
createSelector(selectCanFormDomain, substate => substate.get("canWorkIncome"));

export const makeSelectCanWorkNoStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canWorkNoStat"));

export const makeSelectCanWorkYesStat = () =>
createSelector(selectCanFormDomain, substate => substate.get("canWorkYesStat"));

export const makeSelectCanYearEntryUs = () =>
createSelector(selectCanFormDomain, substate => substate.get("canYearEntryUs"));

export const makeSelectDonorId = () =>
createSelector(selectCanFormDomain, substate => substate.get("donorId"));

export const makeSelectDonTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("donTy"));

export const makeSelectOrgAr = () =>
createSelector(selectCanFormDomain, substate => substate.get("orgAr"));

export const makeSelectPersId = () =>
createSelector(selectCanFormDomain, substate => substate.get("persId"));

export const makeSelectPersNexttx = () =>
createSelector(selectCanFormDomain, substate => substate.get("persNexttx"));

export const makeSelectPersNexttxTrrId = () =>
createSelector(selectCanFormDomain, substate => substate.get("persNexttxTrrId"));

export const makeSelectPersOptnDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("persOptnDeathDt"));

export const makeSelectPersRestrictDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("persRestrictDeathDt"));

export const makeSelectPersRestrictDeathVrfy = () =>
createSelector(selectCanFormDomain, substate => substate.get("persRestrictDeathVrfy"));

export const makeSelectPersSsaDeathDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("persSsaDeathDt"));

export const makeSelectPxId = () =>
createSelector(selectCanFormDomain, substate => substate.get("pxId"));

export const makeSelectRecTxDt = () =>
createSelector(selectCanFormDomain, substate => substate.get("recTxDt"));

export const makeSelectRecTxProcedureTy = () =>
createSelector(selectCanFormDomain, substate => substate.get("recTxProcedureTy"));

export const makeSelectWlOrg = () =>
createSelector(selectCanFormDomain, substate => substate.get("wlOrg"));

