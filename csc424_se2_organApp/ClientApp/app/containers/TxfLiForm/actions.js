import * as constant from "./constants";

export function setRecordTxfLi(record) { 
	return{
		type: constant.SET_RECORD_TXFLI,
		record,
	};
}

export function saveRecordTxfLi(record) { 
	return{
		type: constant.SAVE_RECORD_TXFLI,
		record
	};
}

export function getRecordTrrFolId(id) { 
	return{
		type: constant.GET_RECORD_TRR_FOL_ID,
		id
	};
}

export function changeOrgAr(orgAr) { 
	return{
		type: constant.CHANGE_ORGAR,
		orgAr,
	};
}

export function changeOrgTy(orgTy) { 
	return{
		type: constant.CHANGE_ORGTY,
		orgTy,
	};
}

export function changePersId(persId) { 
	return{
		type: constant.CHANGE_PERSID,
		persId,
	};
}

export function changePxId(pxId) { 
	return{
		type: constant.CHANGE_PXID,
		pxId,
	};
}

export function changeRecCtrId(recCtrId) { 
	return{
		type: constant.CHANGE_RECCTRID,
		recCtrId,
	};
}

export function changeRecOpoId(recOpoId) { 
	return{
		type: constant.CHANGE_RECOPOID,
		recOpoId,
	};
}

export function changeRecTxDt(recTxDt) { 
	return{
		type: constant.CHANGE_RECTXDT,
		recTxDt,
	};
}

export function changeRecTxOrgTy(recTxOrgTy) { 
	return{
		type: constant.CHANGE_RECTXORGTY,
		recTxOrgTy,
	};
}

export function changeRecTxTy(recTxTy) { 
	return{
		type: constant.CHANGE_RECTXTY,
		recTxTy,
	};
}

export function changeTflAcademicLevel(tflAcademicLevel) { 
	return{
		type: constant.CHANGE_TFLACADEMICLEVEL,
		tflAcademicLevel,
	};
}

export function changeTflAcademicProgress(tflAcademicProgress) { 
	return{
		type: constant.CHANGE_TFLACADEMICPROGRESS,
		tflAcademicProgress,
	};
}

export function changeTflAcuteRejBiopsyConfirmed(tflAcuteRejBiopsyConfirmed) { 
	return{
		type: constant.CHANGE_TFLACUTEREJBIOPSYCONFIRMED,
		tflAcuteRejBiopsyConfirmed,
	};
}

export function changeTflAcuteRejEpisode(tflAcuteRejEpisode) { 
	return{
		type: constant.CHANGE_TFLACUTEREJEPISODE,
		tflAcuteRejEpisode,
	};
}

export function changeTflAlbumin(tflAlbumin) { 
	return{
		type: constant.CHANGE_TFLALBUMIN,
		tflAlbumin,
	};
}

export function changeTflAlkphos(tflAlkphos) { 
	return{
		type: constant.CHANGE_TFLALKPHOS,
		tflAlkphos,
	};
}

export function changeTflAntivrlTherapy(tflAntivrlTherapy) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPY,
		tflAntivrlTherapy,
	};
}

export function changeTflAntivrlTherapyTy(tflAntivrlTherapyTy) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTY,
		tflAntivrlTherapyTy,
	};
}

export function changeTflAntivrlTherapyTyAcyclovir(tflAntivrlTherapyTyAcyclovir) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYACYCLOVIR,
		tflAntivrlTherapyTyAcyclovir,
	};
}

export function changeTflAntivrlTherapyTyCytogam(tflAntivrlTherapyTyCytogam) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYCYTOGAM,
		tflAntivrlTherapyTyCytogam,
	};
}

export function changeTflAntivrlTherapyTyCytovene(tflAntivrlTherapyTyCytovene) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYCYTOVENE,
		tflAntivrlTherapyTyCytovene,
	};
}

export function changeTflAntivrlTherapyTyEpivir(tflAntivrlTherapyTyEpivir) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYEPIVIR,
		tflAntivrlTherapyTyEpivir,
	};
}

export function changeTflAntivrlTherapyTyFluVac(tflAntivrlTherapyTyFluVac) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYFLUVAC,
		tflAntivrlTherapyTyFluVac,
	};
}

export function changeTflAntivrlTherapyTyGamimune(tflAntivrlTherapyTyGamimune) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYGAMIMUNE,
		tflAntivrlTherapyTyGamimune,
	};
}

export function changeTflAntivrlTherapyTyGammagard(tflAntivrlTherapyTyGammagard) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYGAMMAGARD,
		tflAntivrlTherapyTyGammagard,
	};
}

export function changeTflAntivrlTherapyTyHbig(tflAntivrlTherapyTyHbig) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYHBIG,
		tflAntivrlTherapyTyHbig,
	};
}

export function changeTflAntivrlTherapyTyOther(tflAntivrlTherapyTyOther) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYOTHER,
		tflAntivrlTherapyTyOther,
	};
}

export function changeTflAntivrlTherapyTyValcyte(tflAntivrlTherapyTyValcyte) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYVALCYTE,
		tflAntivrlTherapyTyValcyte,
	};
}

export function changeTflAntivrlTherapyTyValtrex(tflAntivrlTherapyTyValtrex) { 
	return{
		type: constant.CHANGE_TFLANTIVRLTHERAPYTYVALTREX,
		tflAntivrlTherapyTyValtrex,
	};
}

export function changeTflBmi(tflBmi) { 
	return{
		type: constant.CHANGE_TFLBMI,
		tflBmi,
	};
}

export function changeTflCad(tflCad) { 
	return{
		type: constant.CHANGE_TFLCAD,
		tflCad,
	};
}

export function changeTflCareProvBy(tflCareProvBy) { 
	return{
		type: constant.CHANGE_TFLCAREPROVBY,
		tflCareProvBy,
	};
}

export function changeTflCmvIgg(tflCmvIgg) { 
	return{
		type: constant.CHANGE_TFLCMVIGG,
		tflCmvIgg,
	};
}

export function changeTflCmvIgm(tflCmvIgm) { 
	return{
		type: constant.CHANGE_TFLCMVIGM,
		tflCmvIgm,
	};
}

export function changeTflCod(tflCod) { 
	return{
		type: constant.CHANGE_TFLCOD,
		tflCod,
	};
}

export function changeTflCod2(tflCod2) { 
	return{
		type: constant.CHANGE_TFLCOD2,
		tflCod2,
	};
}

export function changeTflCod3(tflCod3) { 
	return{
		type: constant.CHANGE_TFLCOD3,
		tflCod3,
	};
}

export function changeTflCognitiveDevelop(tflCognitiveDevelop) { 
	return{
		type: constant.CHANGE_TFLCOGNITIVEDEVELOP,
		tflCognitiveDevelop,
	};
}

export function changeTflCreat(tflCreat) { 
	return{
		type: constant.CHANGE_TFLCREAT,
		tflCreat,
	};
}

export function changeTflDiabDuringFol(tflDiabDuringFol) { 
	return{
		type: constant.CHANGE_TFLDIABDURINGFOL,
		tflDiabDuringFol,
	};
}

export function changeTflEmplStatPre04(tflEmplStatPre04) { 
	return{
		type: constant.CHANGE_TFLEMPLSTATPRE04,
		tflEmplStatPre04,
	};
}

export function changeTflFailBiliary(tflFailBiliary) { 
	return{
		type: constant.CHANGE_TFLFAILBILIARY,
		tflFailBiliary,
	};
}

export function changeTflFailDt(tflFailDt) { 
	return{
		type: constant.CHANGE_TFLFAILDT,
		tflFailDt,
	};
}

export function changeTflFailHepDenovo(tflFailHepDenovo) { 
	return{
		type: constant.CHANGE_TFLFAILHEPDENOVO,
		tflFailHepDenovo,
	};
}

export function changeTflFailHepRecur(tflFailHepRecur) { 
	return{
		type: constant.CHANGE_TFLFAILHEPRECUR,
		tflFailHepRecur,
	};
}

export function changeTflFailInfect(tflFailInfect) { 
	return{
		type: constant.CHANGE_TFLFAILINFECT,
		tflFailInfect,
	};
}

export function changeTflFailPrimeGraftFail(tflFailPrimeGraftFail) { 
	return{
		type: constant.CHANGE_TFLFAILPRIMEGRAFTFAIL,
		tflFailPrimeGraftFail,
	};
}

export function changeTflFailPxNoncomp(tflFailPxNoncomp) { 
	return{
		type: constant.CHANGE_TFLFAILPXNONCOMP,
		tflFailPxNoncomp,
	};
}

export function changeTflFailRecurDisease(tflFailRecurDisease) { 
	return{
		type: constant.CHANGE_TFLFAILRECURDISEASE,
		tflFailRecurDisease,
	};
}

export function changeTflFailRejAcute(tflFailRejAcute) { 
	return{
		type: constant.CHANGE_TFLFAILREJACUTE,
		tflFailRejAcute,
	};
}

export function changeTflFailRejChronic(tflFailRejChronic) { 
	return{
		type: constant.CHANGE_TFLFAILREJCHRONIC,
		tflFailRejChronic,
	};
}

export function changeTflFailVascThromb(tflFailVascThromb) { 
	return{
		type: constant.CHANGE_TFLFAILVASCTHROMB,
		tflFailVascThromb,
	};
}

export function changeTflFolCd(tflFolCd) { 
	return{
		type: constant.CHANGE_TFLFOLCD,
		tflFolCd,
	};
}

export function changeTflFunctnStat(tflFunctnStat) { 
	return{
		type: constant.CHANGE_TFLFUNCTNSTAT,
		tflFunctnStat,
	};
}

export function changeTflGraftStat(tflGraftStat) { 
	return{
		type: constant.CHANGE_TFLGRAFTSTAT,
		tflGraftStat,
	};
}

export function changeTflHepaticArterThromb(tflHepaticArterThromb) { 
	return{
		type: constant.CHANGE_TFLHEPATICARTERTHROMB,
		tflHepaticArterThromb,
	};
}

export function changeTflHepaticOutflowObstruct(tflHepaticOutflowObstruct) { 
	return{
		type: constant.CHANGE_TFLHEPATICOUTFLOWOBSTRUCT,
		tflHepaticOutflowObstruct,
	};
}

export function changeTflHgtCm(tflHgtCm) { 
	return{
		type: constant.CHANGE_TFLHGTCM,
		tflHgtCm,
	};
}

export function changeTflHgtWgtDt(tflHgtWgtDt) { 
	return{
		type: constant.CHANGE_TFLHGTWGTDT,
		tflHgtWgtDt,
	};
}

export function changeTflHosp(tflHosp) { 
	return{
		type: constant.CHANGE_TFLHOSP,
		tflHosp,
	};
}

export function changeTflHospNum(tflHospNum) { 
	return{
		type: constant.CHANGE_TFLHOSPNUM,
		tflHospNum,
	};
}

export function changeTflImmunoDiscont(tflImmunoDiscont) { 
	return{
		type: constant.CHANGE_TFLIMMUNODISCONT,
		tflImmunoDiscont,
	};
}

export function changeTflImmunoMaintMeds(tflImmunoMaintMeds) { 
	return{
		type: constant.CHANGE_TFLIMMUNOMAINTMEDS,
		tflImmunoMaintMeds,
	};
}

export function changeTflInr(tflInr) { 
	return{
		type: constant.CHANGE_TFLINR,
		tflInr,
	};
}

export function changeTflInsulinDepnd(tflInsulinDepnd) { 
	return{
		type: constant.CHANGE_TFLINSULINDEPND,
		tflInsulinDepnd,
	};
}

export function changeTflLabDt(tflLabDt) { 
	return{
		type: constant.CHANGE_TFLLABDT,
		tflLabDt,
	};
}

export function changeTflMalig(tflMalig) { 
	return{
		type: constant.CHANGE_TFLMALIG,
		tflMalig,
	};
}

export function changeTflMaligDonRelated(tflMaligDonRelated) { 
	return{
		type: constant.CHANGE_TFLMALIGDONRELATED,
		tflMaligDonRelated,
	};
}

export function changeTflMaligLymph(tflMaligLymph) { 
	return{
		type: constant.CHANGE_TFLMALIGLYMPH,
		tflMaligLymph,
	};
}

export function changeTflMaligRecurTumor(tflMaligRecurTumor) { 
	return{
		type: constant.CHANGE_TFLMALIGRECURTUMOR,
		tflMaligRecurTumor,
	};
}

export function changeTflMaligTumor(tflMaligTumor) { 
	return{
		type: constant.CHANGE_TFLMALIGTUMOR,
		tflMaligTumor,
	};
}

export function changeTflMotorDevelop(tflMotorDevelop) { 
	return{
		type: constant.CHANGE_TFLMOTORDEVELOP,
		tflMotorDevelop,
	};
}

export function changeTflOtherTherapy(tflOtherTherapy) { 
	return{
		type: constant.CHANGE_TFLOTHERTHERAPY,
		tflOtherTherapy,
	};
}

export function changeTflOtherTherapyTy(tflOtherTherapyTy) { 
	return{
		type: constant.CHANGE_TFLOTHERTHERAPYTY,
		tflOtherTherapyTy,
	};
}

export function changeTflOtherTherapyTyPhotoph(tflOtherTherapyTyPhotoph) { 
	return{
		type: constant.CHANGE_TFLOTHERTHERAPYTYPHOTOPH,
		tflOtherTherapyTyPhotoph,
	};
}

export function changeTflOtherTherapyTyPlasmaph(tflOtherTherapyTyPlasmaph) { 
	return{
		type: constant.CHANGE_TFLOTHERTHERAPYTYPLASMAPH,
		tflOtherTherapyTyPlasmaph,
	};
}

export function changeTflOtherTherapyTyTli(tflOtherTherapyTyTli) { 
	return{
		type: constant.CHANGE_TFLOTHERTHERAPYTYTLI,
		tflOtherTherapyTyTli,
	};
}

export function changeTflPermState(tflPermState) { 
	return{
		type: constant.CHANGE_TFLPERMSTATE,
		tflPermState,
	};
}

export function changeTflPhyscCapacity(tflPhyscCapacity) { 
	return{
		type: constant.CHANGE_TFLPHYSCCAPACITY,
		tflPhyscCapacity,
	};
}

export function changeTflPortalVeinThromb(tflPortalVeinThromb) { 
	return{
		type: constant.CHANGE_TFLPORTALVEINTHROMB,
		tflPortalVeinThromb,
	};
}

export function changeTflPrimaryPay(tflPrimaryPay) { 
	return{
		type: constant.CHANGE_TFLPRIMARYPAY,
		tflPrimaryPay,
	};
}

export function changeTflPxNoncomp(tflPxNoncomp) { 
	return{
		type: constant.CHANGE_TFLPXNONCOMP,
		tflPxNoncomp,
	};
}

export function changeTflPxResearch(tflPxResearch) { 
	return{
		type: constant.CHANGE_TFLPXRESEARCH,
		tflPxResearch,
	};
}

export function changeTflPxStat(tflPxStat) { 
	return{
		type: constant.CHANGE_TFLPXSTAT,
		tflPxStat,
	};
}

export function changeTflPxStatDt(tflPxStatDt) { 
	return{
		type: constant.CHANGE_TFLPXSTATDT,
		tflPxStatDt,
	};
}

export function changeTflRejEventNum(tflRejEventNum) { 
	return{
		type: constant.CHANGE_TFLREJEVENTNUM,
		tflRejEventNum,
	};
}

export function changeTflRejTreat(tflRejTreat) { 
	return{
		type: constant.CHANGE_TFLREJTREAT,
		tflRejTreat,
	};
}

export function changeTflSgot(tflSgot) { 
	return{
		type: constant.CHANGE_TFLSGOT,
		tflSgot,
	};
}

export function changeTflSgpt(tflSgpt) { 
	return{
		type: constant.CHANGE_TFLSGPT,
		tflSgpt,
	};
}

export function changeTflTotBili(tflTotBili) { 
	return{
		type: constant.CHANGE_TFLTOTBILI,
		tflTotBili,
	};
}

export function changeTflTxferDt(tflTxferDt) { 
	return{
		type: constant.CHANGE_TFLTXFERDT,
		tflTxferDt,
	};
}

export function changeTflWgtKg(tflWgtKg) { 
	return{
		type: constant.CHANGE_TFLWGTKG,
		tflWgtKg,
	};
}

export function changeTflWorkIncome(tflWorkIncome) { 
	return{
		type: constant.CHANGE_TFLWORKINCOME,
		tflWorkIncome,
	};
}

export function changeTflWorkNoStat(tflWorkNoStat) { 
	return{
		type: constant.CHANGE_TFLWORKNOSTAT,
		tflWorkNoStat,
	};
}

export function changeTflWorkYesStat(tflWorkYesStat) { 
	return{
		type: constant.CHANGE_TFLWORKYESSTAT,
		tflWorkYesStat,
	};
}

export function changeTrrFolId(trrFolId) { 
	return{
		type: constant.CHANGE_TRRFOLID,
		trrFolId,
	};
}

export function changeTrrId(trrId) { 
	return{
		type: constant.CHANGE_TRRID,
		trrId,
	};
}

export function changeTxId(txId) { 
	return{
		type: constant.CHANGE_TXID,
		txId,
	};
}

