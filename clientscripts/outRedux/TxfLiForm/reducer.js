import { fromJS } from "immutable";
import * as constant from "./constants";

export const initialState = fromJS({
	orgAr:                        "",
	orgTy:                        "",
	persId:                       "",
	pxId:                         "",
	recCtrId:                     "",
	recOpoId:                     "",
	recTxDt:                      "",
	recTxOrgTy:                   "",
	recTxTy:                      "",
	tflAcademicLevel:             "",
	tflAcademicProgress:          "",
	tflAcuteRejBiopsyConfirmed:   "",
	tflAcuteRejEpisode:           "",
	tflAlbumin:                   "",
	tflAlkphos:                   "",
	tflAntivrlTherapy:            "",
	tflAntivrlTherapyTy:          "",
	tflAntivrlTherapyTyAcyclovir: "",
	tflAntivrlTherapyTyCytogam:   "",
	tflAntivrlTherapyTyCytovene:  "",
	tflAntivrlTherapyTyEpivir:    "",
	tflAntivrlTherapyTyFluVac:    "",
	tflAntivrlTherapyTyGamimune:  "",
	tflAntivrlTherapyTyGammagard: "",
	tflAntivrlTherapyTyHbig:      "",
	tflAntivrlTherapyTyOther:     "",
	tflAntivrlTherapyTyValcyte:   "",
	tflAntivrlTherapyTyValtrex:   "",
	tflBmi:                       "",
	tflCad:                       "",
	tflCareProvBy:                "",
	tflCmvIgg:                    "",
	tflCmvIgm:                    "",
	tflCod:                       "",
	tflCod2:                      "",
	tflCod3:                      "",
	tflCognitiveDevelop:          "",
	tflCreat:                     "",
	tflDiabDuringFol:             "",
	tflEmplStatPre04:             "",
	tflFailBiliary:               "",
	tflFailDt:                    "",
	tflFailHepDenovo:             "",
	tflFailHepRecur:              "",
	tflFailInfect:                "",
	tflFailPrimeGraftFail:        "",
	tflFailPxNoncomp:             "",
	tflFailRecurDisease:          "",
	tflFailRejAcute:              "",
	tflFailRejChronic:            "",
	tflFailVascThromb:            "",
	tflFolCd:                     "",
	tflFunctnStat:                "",
	tflGraftStat:                 "",
	tflHepaticArterThromb:        "",
	tflHepaticOutflowObstruct:    "",
	tflHgtCm:                     "",
	tflHgtWgtDt:                  "",
	tflHosp:                      "",
	tflHospNum:                   "",
	tflImmunoDiscont:             "",
	tflImmunoMaintMeds:           "",
	tflInr:                       "",
	tflInsulinDepnd:              "",
	tflLabDt:                     "",
	tflMalig:                     "",
	tflMaligDonRelated:           "",
	tflMaligLymph:                "",
	tflMaligRecurTumor:           "",
	tflMaligTumor:                "",
	tflMotorDevelop:              "",
	tflOtherTherapy:              "",
	tflOtherTherapyTy:            "",
	tflOtherTherapyTyPhotoph:     "",
	tflOtherTherapyTyPlasmaph:    "",
	tflOtherTherapyTyTli:         "",
	tflPermState:                 "",
	tflPhyscCapacity:             "",
	tflPortalVeinThromb:          "",
	tflPrimaryPay:                "",
	tflPxNoncomp:                 "",
	tflPxResearch:                "",
	tflPxStat:                    "",
	tflPxStatDt:                  "",
	tflRejEventNum:               "",
	tflRejTreat:                  "",
	tflSgot:                      "",
	tflSgpt:                      "",
	tflTotBili:                   "",
	tflTxferDt:                   "",
	tflWgtKg:                     "",
	tflWorkIncome:                "",
	tflWorkNoStat:                "",
	tflWorkYesStat:               "",
	trrFolId:                     "",
	trrId:                        "",
	txId:                         "",
});

function TxfLiFormReducer(state = initialState, action) {
	switch (action.type) {
		case constant.CHANGE_ORGAR:
			return state.set('orgAr', action.orgAr);
		case constant.CHANGE_ORGTY:
			return state.set('orgTy', action.orgTy);
		case constant.CHANGE_PERSID:
			return state.set('persId', action.persId);
		case constant.CHANGE_PXID:
			return state.set('pxId', action.pxId);
		case constant.CHANGE_RECCTRID:
			return state.set('recCtrId', action.recCtrId);
		case constant.CHANGE_RECOPOID:
			return state.set('recOpoId', action.recOpoId);
		case constant.CHANGE_RECTXDT:
			return state.set('recTxDt', action.recTxDt);
		case constant.CHANGE_RECTXORGTY:
			return state.set('recTxOrgTy', action.recTxOrgTy);
		case constant.CHANGE_RECTXTY:
			return state.set('recTxTy', action.recTxTy);
		case constant.CHANGE_TFLACADEMICLEVEL:
			return state.set('tflAcademicLevel', action.tflAcademicLevel);
		case constant.CHANGE_TFLACADEMICPROGRESS:
			return state.set('tflAcademicProgress', action.tflAcademicProgress);
		case constant.CHANGE_TFLACUTEREJBIOPSYCONFIRMED:
			return state.set('tflAcuteRejBiopsyConfirmed', action.tflAcuteRejBiopsyConfirmed);
		case constant.CHANGE_TFLACUTEREJEPISODE:
			return state.set('tflAcuteRejEpisode', action.tflAcuteRejEpisode);
		case constant.CHANGE_TFLALBUMIN:
			return state.set('tflAlbumin', action.tflAlbumin);
		case constant.CHANGE_TFLALKPHOS:
			return state.set('tflAlkphos', action.tflAlkphos);
		case constant.CHANGE_TFLANTIVRLTHERAPY:
			return state.set('tflAntivrlTherapy', action.tflAntivrlTherapy);
		case constant.CHANGE_TFLANTIVRLTHERAPYTY:
			return state.set('tflAntivrlTherapyTy', action.tflAntivrlTherapyTy);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYACYCLOVIR:
			return state.set('tflAntivrlTherapyTyAcyclovir', action.tflAntivrlTherapyTyAcyclovir);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYCYTOGAM:
			return state.set('tflAntivrlTherapyTyCytogam', action.tflAntivrlTherapyTyCytogam);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYCYTOVENE:
			return state.set('tflAntivrlTherapyTyCytovene', action.tflAntivrlTherapyTyCytovene);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYEPIVIR:
			return state.set('tflAntivrlTherapyTyEpivir', action.tflAntivrlTherapyTyEpivir);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYFLUVAC:
			return state.set('tflAntivrlTherapyTyFluVac', action.tflAntivrlTherapyTyFluVac);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYGAMIMUNE:
			return state.set('tflAntivrlTherapyTyGamimune', action.tflAntivrlTherapyTyGamimune);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYGAMMAGARD:
			return state.set('tflAntivrlTherapyTyGammagard', action.tflAntivrlTherapyTyGammagard);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYHBIG:
			return state.set('tflAntivrlTherapyTyHbig', action.tflAntivrlTherapyTyHbig);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYOTHER:
			return state.set('tflAntivrlTherapyTyOther', action.tflAntivrlTherapyTyOther);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYVALCYTE:
			return state.set('tflAntivrlTherapyTyValcyte', action.tflAntivrlTherapyTyValcyte);
		case constant.CHANGE_TFLANTIVRLTHERAPYTYVALTREX:
			return state.set('tflAntivrlTherapyTyValtrex', action.tflAntivrlTherapyTyValtrex);
		case constant.CHANGE_TFLBMI:
			return state.set('tflBmi', action.tflBmi);
		case constant.CHANGE_TFLCAD:
			return state.set('tflCad', action.tflCad);
		case constant.CHANGE_TFLCAREPROVBY:
			return state.set('tflCareProvBy', action.tflCareProvBy);
		case constant.CHANGE_TFLCMVIGG:
			return state.set('tflCmvIgg', action.tflCmvIgg);
		case constant.CHANGE_TFLCMVIGM:
			return state.set('tflCmvIgm', action.tflCmvIgm);
		case constant.CHANGE_TFLCOD:
			return state.set('tflCod', action.tflCod);
		case constant.CHANGE_TFLCOD2:
			return state.set('tflCod2', action.tflCod2);
		case constant.CHANGE_TFLCOD3:
			return state.set('tflCod3', action.tflCod3);
		case constant.CHANGE_TFLCOGNITIVEDEVELOP:
			return state.set('tflCognitiveDevelop', action.tflCognitiveDevelop);
		case constant.CHANGE_TFLCREAT:
			return state.set('tflCreat', action.tflCreat);
		case constant.CHANGE_TFLDIABDURINGFOL:
			return state.set('tflDiabDuringFol', action.tflDiabDuringFol);
		case constant.CHANGE_TFLEMPLSTATPRE04:
			return state.set('tflEmplStatPre04', action.tflEmplStatPre04);
		case constant.CHANGE_TFLFAILBILIARY:
			return state.set('tflFailBiliary', action.tflFailBiliary);
		case constant.CHANGE_TFLFAILDT:
			return state.set('tflFailDt', action.tflFailDt);
		case constant.CHANGE_TFLFAILHEPDENOVO:
			return state.set('tflFailHepDenovo', action.tflFailHepDenovo);
		case constant.CHANGE_TFLFAILHEPRECUR:
			return state.set('tflFailHepRecur', action.tflFailHepRecur);
		case constant.CHANGE_TFLFAILINFECT:
			return state.set('tflFailInfect', action.tflFailInfect);
		case constant.CHANGE_TFLFAILPRIMEGRAFTFAIL:
			return state.set('tflFailPrimeGraftFail', action.tflFailPrimeGraftFail);
		case constant.CHANGE_TFLFAILPXNONCOMP:
			return state.set('tflFailPxNoncomp', action.tflFailPxNoncomp);
		case constant.CHANGE_TFLFAILRECURDISEASE:
			return state.set('tflFailRecurDisease', action.tflFailRecurDisease);
		case constant.CHANGE_TFLFAILREJACUTE:
			return state.set('tflFailRejAcute', action.tflFailRejAcute);
		case constant.CHANGE_TFLFAILREJCHRONIC:
			return state.set('tflFailRejChronic', action.tflFailRejChronic);
		case constant.CHANGE_TFLFAILVASCTHROMB:
			return state.set('tflFailVascThromb', action.tflFailVascThromb);
		case constant.CHANGE_TFLFOLCD:
			return state.set('tflFolCd', action.tflFolCd);
		case constant.CHANGE_TFLFUNCTNSTAT:
			return state.set('tflFunctnStat', action.tflFunctnStat);
		case constant.CHANGE_TFLGRAFTSTAT:
			return state.set('tflGraftStat', action.tflGraftStat);
		case constant.CHANGE_TFLHEPATICARTERTHROMB:
			return state.set('tflHepaticArterThromb', action.tflHepaticArterThromb);
		case constant.CHANGE_TFLHEPATICOUTFLOWOBSTRUCT:
			return state.set('tflHepaticOutflowObstruct', action.tflHepaticOutflowObstruct);
		case constant.CHANGE_TFLHGTCM:
			return state.set('tflHgtCm', action.tflHgtCm);
		case constant.CHANGE_TFLHGTWGTDT:
			return state.set('tflHgtWgtDt', action.tflHgtWgtDt);
		case constant.CHANGE_TFLHOSP:
			return state.set('tflHosp', action.tflHosp);
		case constant.CHANGE_TFLHOSPNUM:
			return state.set('tflHospNum', action.tflHospNum);
		case constant.CHANGE_TFLIMMUNODISCONT:
			return state.set('tflImmunoDiscont', action.tflImmunoDiscont);
		case constant.CHANGE_TFLIMMUNOMAINTMEDS:
			return state.set('tflImmunoMaintMeds', action.tflImmunoMaintMeds);
		case constant.CHANGE_TFLINR:
			return state.set('tflInr', action.tflInr);
		case constant.CHANGE_TFLINSULINDEPND:
			return state.set('tflInsulinDepnd', action.tflInsulinDepnd);
		case constant.CHANGE_TFLLABDT:
			return state.set('tflLabDt', action.tflLabDt);
		case constant.CHANGE_TFLMALIG:
			return state.set('tflMalig', action.tflMalig);
		case constant.CHANGE_TFLMALIGDONRELATED:
			return state.set('tflMaligDonRelated', action.tflMaligDonRelated);
		case constant.CHANGE_TFLMALIGLYMPH:
			return state.set('tflMaligLymph', action.tflMaligLymph);
		case constant.CHANGE_TFLMALIGRECURTUMOR:
			return state.set('tflMaligRecurTumor', action.tflMaligRecurTumor);
		case constant.CHANGE_TFLMALIGTUMOR:
			return state.set('tflMaligTumor', action.tflMaligTumor);
		case constant.CHANGE_TFLMOTORDEVELOP:
			return state.set('tflMotorDevelop', action.tflMotorDevelop);
		case constant.CHANGE_TFLOTHERTHERAPY:
			return state.set('tflOtherTherapy', action.tflOtherTherapy);
		case constant.CHANGE_TFLOTHERTHERAPYTY:
			return state.set('tflOtherTherapyTy', action.tflOtherTherapyTy);
		case constant.CHANGE_TFLOTHERTHERAPYTYPHOTOPH:
			return state.set('tflOtherTherapyTyPhotoph', action.tflOtherTherapyTyPhotoph);
		case constant.CHANGE_TFLOTHERTHERAPYTYPLASMAPH:
			return state.set('tflOtherTherapyTyPlasmaph', action.tflOtherTherapyTyPlasmaph);
		case constant.CHANGE_TFLOTHERTHERAPYTYTLI:
			return state.set('tflOtherTherapyTyTli', action.tflOtherTherapyTyTli);
		case constant.CHANGE_TFLPERMSTATE:
			return state.set('tflPermState', action.tflPermState);
		case constant.CHANGE_TFLPHYSCCAPACITY:
			return state.set('tflPhyscCapacity', action.tflPhyscCapacity);
		case constant.CHANGE_TFLPORTALVEINTHROMB:
			return state.set('tflPortalVeinThromb', action.tflPortalVeinThromb);
		case constant.CHANGE_TFLPRIMARYPAY:
			return state.set('tflPrimaryPay', action.tflPrimaryPay);
		case constant.CHANGE_TFLPXNONCOMP:
			return state.set('tflPxNoncomp', action.tflPxNoncomp);
		case constant.CHANGE_TFLPXRESEARCH:
			return state.set('tflPxResearch', action.tflPxResearch);
		case constant.CHANGE_TFLPXSTAT:
			return state.set('tflPxStat', action.tflPxStat);
		case constant.CHANGE_TFLPXSTATDT:
			return state.set('tflPxStatDt', action.tflPxStatDt);
		case constant.CHANGE_TFLREJEVENTNUM:
			return state.set('tflRejEventNum', action.tflRejEventNum);
		case constant.CHANGE_TFLREJTREAT:
			return state.set('tflRejTreat', action.tflRejTreat);
		case constant.CHANGE_TFLSGOT:
			return state.set('tflSgot', action.tflSgot);
		case constant.CHANGE_TFLSGPT:
			return state.set('tflSgpt', action.tflSgpt);
		case constant.CHANGE_TFLTOTBILI:
			return state.set('tflTotBili', action.tflTotBili);
		case constant.CHANGE_TFLTXFERDT:
			return state.set('tflTxferDt', action.tflTxferDt);
		case constant.CHANGE_TFLWGTKG:
			return state.set('tflWgtKg', action.tflWgtKg);
		case constant.CHANGE_TFLWORKINCOME:
			return state.set('tflWorkIncome', action.tflWorkIncome);
		case constant.CHANGE_TFLWORKNOSTAT:
			return state.set('tflWorkNoStat', action.tflWorkNoStat);
		case constant.CHANGE_TFLWORKYESSTAT:
			return state.set('tflWorkYesStat', action.tflWorkYesStat);
		case constant.CHANGE_TRRFOLID:
			return state.set('trrFolId', action.trrFolId);
		case constant.CHANGE_TRRID:
			return state.set('trrId', action.trrId);
		case constant.CHANGE_TXID:
			return state.set('txId', action.txId);
		default:
			 return state;
	}
}

export default TxfLiFormReducer;
