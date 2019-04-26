import { createSelector } from "reselect";
import { initialState } from "./reducer";
export const selectTxfLiFormDomain = state => state.get("TxfLiForm", initialState);

export const makeSelectOrgAr = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("orgAr"));

export const makeSelectOrgTy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("orgTy"));

export const makeSelectPersId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("persId"));

export const makeSelectPxId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("pxId"));

export const makeSelectRecCtrId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("recCtrId"));

export const makeSelectRecOpoId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("recOpoId"));

export const makeSelectRecTxDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("recTxDt"));

export const makeSelectRecTxOrgTy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("recTxOrgTy"));

export const makeSelectRecTxTy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("recTxTy"));

export const makeSelectTflAcademicLevel = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAcademicLevel"));

export const makeSelectTflAcademicProgress = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAcademicProgress"));

export const makeSelectTflAcuteRejBiopsyConfirmed = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAcuteRejBiopsyConfirmed"));

export const makeSelectTflAcuteRejEpisode = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAcuteRejEpisode"));

export const makeSelectTflAlbumin = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAlbumin"));

export const makeSelectTflAlkphos = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAlkphos"));

export const makeSelectTflAntivrlTherapy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapy"));

export const makeSelectTflAntivrlTherapyTy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTy"));

export const makeSelectTflAntivrlTherapyTyAcyclovir = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyAcyclovir"));

export const makeSelectTflAntivrlTherapyTyCytogam = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyCytogam"));

export const makeSelectTflAntivrlTherapyTyCytovene = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyCytovene"));

export const makeSelectTflAntivrlTherapyTyEpivir = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyEpivir"));

export const makeSelectTflAntivrlTherapyTyFluVac = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyFluVac"));

export const makeSelectTflAntivrlTherapyTyGamimune = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyGamimune"));

export const makeSelectTflAntivrlTherapyTyGammagard = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyGammagard"));

export const makeSelectTflAntivrlTherapyTyHbig = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyHbig"));

export const makeSelectTflAntivrlTherapyTyOther = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyOther"));

export const makeSelectTflAntivrlTherapyTyValcyte = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyValcyte"));

export const makeSelectTflAntivrlTherapyTyValtrex = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflAntivrlTherapyTyValtrex"));

export const makeSelectTflBmi = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflBmi"));

export const makeSelectTflCad = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCad"));

export const makeSelectTflCareProvBy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCareProvBy"));

export const makeSelectTflCmvIgg = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCmvIgg"));

export const makeSelectTflCmvIgm = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCmvIgm"));

export const makeSelectTflCod = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCod"));

export const makeSelectTflCod2 = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCod2"));

export const makeSelectTflCod3 = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCod3"));

export const makeSelectTflCognitiveDevelop = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCognitiveDevelop"));

export const makeSelectTflCreat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflCreat"));

export const makeSelectTflDiabDuringFol = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflDiabDuringFol"));

export const makeSelectTflEmplStatPre04 = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflEmplStatPre04"));

export const makeSelectTflFailBiliary = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailBiliary"));

export const makeSelectTflFailDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailDt"));

export const makeSelectTflFailHepDenovo = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailHepDenovo"));

export const makeSelectTflFailHepRecur = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailHepRecur"));

export const makeSelectTflFailInfect = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailInfect"));

export const makeSelectTflFailPrimeGraftFail = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailPrimeGraftFail"));

export const makeSelectTflFailPxNoncomp = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailPxNoncomp"));

export const makeSelectTflFailRecurDisease = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailRecurDisease"));

export const makeSelectTflFailRejAcute = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailRejAcute"));

export const makeSelectTflFailRejChronic = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailRejChronic"));

export const makeSelectTflFailVascThromb = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFailVascThromb"));

export const makeSelectTflFolCd = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFolCd"));

export const makeSelectTflFunctnStat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflFunctnStat"));

export const makeSelectTflGraftStat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflGraftStat"));

export const makeSelectTflHepaticArterThromb = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHepaticArterThromb"));

export const makeSelectTflHepaticOutflowObstruct = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHepaticOutflowObstruct"));

export const makeSelectTflHgtCm = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHgtCm"));

export const makeSelectTflHgtWgtDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHgtWgtDt"));

export const makeSelectTflHosp = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHosp"));

export const makeSelectTflHospNum = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflHospNum"));

export const makeSelectTflImmunoDiscont = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflImmunoDiscont"));

export const makeSelectTflImmunoMaintMeds = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflImmunoMaintMeds"));

export const makeSelectTflInr = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflInr"));

export const makeSelectTflInsulinDepnd = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflInsulinDepnd"));

export const makeSelectTflLabDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflLabDt"));

export const makeSelectTflMalig = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMalig"));

export const makeSelectTflMaligDonRelated = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMaligDonRelated"));

export const makeSelectTflMaligLymph = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMaligLymph"));

export const makeSelectTflMaligRecurTumor = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMaligRecurTumor"));

export const makeSelectTflMaligTumor = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMaligTumor"));

export const makeSelectTflMotorDevelop = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflMotorDevelop"));

export const makeSelectTflOtherTherapy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflOtherTherapy"));

export const makeSelectTflOtherTherapyTy = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflOtherTherapyTy"));

export const makeSelectTflOtherTherapyTyPhotoph = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflOtherTherapyTyPhotoph"));

export const makeSelectTflOtherTherapyTyPlasmaph = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflOtherTherapyTyPlasmaph"));

export const makeSelectTflOtherTherapyTyTli = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflOtherTherapyTyTli"));

export const makeSelectTflPermState = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPermState"));

export const makeSelectTflPhyscCapacity = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPhyscCapacity"));

export const makeSelectTflPortalVeinThromb = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPortalVeinThromb"));

export const makeSelectTflPrimaryPay = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPrimaryPay"));

export const makeSelectTflPxNoncomp = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPxNoncomp"));

export const makeSelectTflPxResearch = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPxResearch"));

export const makeSelectTflPxStat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPxStat"));

export const makeSelectTflPxStatDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflPxStatDt"));

export const makeSelectTflRejEventNum = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflRejEventNum"));

export const makeSelectTflRejTreat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflRejTreat"));

export const makeSelectTflSgot = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflSgot"));

export const makeSelectTflSgpt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflSgpt"));

export const makeSelectTflTotBili = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflTotBili"));

export const makeSelectTflTxferDt = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflTxferDt"));

export const makeSelectTflWgtKg = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflWgtKg"));

export const makeSelectTflWorkIncome = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflWorkIncome"));

export const makeSelectTflWorkNoStat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflWorkNoStat"));

export const makeSelectTflWorkYesStat = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("tflWorkYesStat"));

export const makeSelectTrrFolId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("trrFolId"));

export const makeSelectTrrId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("trrId"));

export const makeSelectTxId = () =>
createSelector(selectTxfLiFormDomain, substate => substate.get("txId"));

