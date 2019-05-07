import * as constant from "./constants";

export function setRecordTxLi(record) { 
	return{
		type: constant.SET_RECORD_TXLI,
		record,
	};
}

export function saveRecordTxLi(record) { 
	return{
		type: constant.SAVE_RECORD_TXLI,
		record
	};
}

export function getRecordTrrId(id) { 
	return{
		type: constant.GET_RECORD_TRR_ID,
		id
	};
}

export function changeCanhxMpxcptHccApplyInd(canhxMpxcptHccApplyInd) { 
	return{
		type: constant.CHANGE_CANHXMPXCPTHCCAPPLYIND,
		canhxMpxcptHccApplyInd,
	};
}

export function changeCanhxMpxcptHccApproveInd(canhxMpxcptHccApproveInd) { 
	return{
		type: constant.CHANGE_CANHXMPXCPTHCCAPPROVEIND,
		canhxMpxcptHccApproveInd,
	};
}

export function changeCanAbo(canAbo) { 
	return{
		type: constant.CHANGE_CANABO,
		canAbo,
	};
}

export function changeCanAgeAtListing(canAgeAtListing) { 
	return{
		type: constant.CHANGE_CANAGEATLISTING,
		canAgeAtListing,
	};
}

export function changeCanAgeInMonthsAtListing(canAgeInMonthsAtListing) { 
	return{
		type: constant.CHANGE_CANAGEINMONTHSATLISTING,
		canAgeInMonthsAtListing,
	};
}

export function changeCanAngina(canAngina) { 
	return{
		type: constant.CHANGE_CANANGINA,
		canAngina,
	};
}

export function changeCanAnginaCad(canAnginaCad) { 
	return{
		type: constant.CHANGE_CANANGINACAD,
		canAnginaCad,
	};
}

export function changeCanBacteriaPerit(canBacteriaPerit) { 
	return{
		type: constant.CHANGE_CANBACTERIAPERIT,
		canBacteriaPerit,
	};
}

export function changeCanCerebVasc(canCerebVasc) { 
	return{
		type: constant.CHANGE_CANCEREBVASC,
		canCerebVasc,
	};
}

export function changeCanCitizenship(canCitizenship) { 
	return{
		type: constant.CHANGE_CANCITIZENSHIP,
		canCitizenship,
	};
}

export function changeCanDgn(canDgn) { 
	return{
		type: constant.CHANGE_CANDGN,
		canDgn,
	};
}

export function changeCanDgn2(canDgn2) { 
	return{
		type: constant.CHANGE_CANDGN2,
		canDgn2,
	};
}

export function changeCanDiab(canDiab) { 
	return{
		type: constant.CHANGE_CANDIAB,
		canDiab,
	};
}

export function changeCanDiabTy(canDiabTy) { 
	return{
		type: constant.CHANGE_CANDIABTY,
		canDiabTy,
	};
}

export function changeCanDrugTreatCopd(canDrugTreatCopd) { 
	return{
		type: constant.CHANGE_CANDRUGTREATCOPD,
		canDrugTreatCopd,
	};
}

export function changeCanDrugTreatHyperten(canDrugTreatHyperten) { 
	return{
		type: constant.CHANGE_CANDRUGTREATHYPERTEN,
		canDrugTreatHyperten,
	};
}

export function changeCanEducation(canEducation) { 
	return{
		type: constant.CHANGE_CANEDUCATION,
		canEducation,
	};
}

export function changeCanEthnicitySrtr(canEthnicitySrtr) { 
	return{
		type: constant.CHANGE_CANETHNICITYSRTR,
		canEthnicitySrtr,
	};
}

export function changeCanGender(canGender) { 
	return{
		type: constant.CHANGE_CANGENDER,
		canGender,
	};
}

export function changeCanHgtCm(canHgtCm) { 
	return{
		type: constant.CHANGE_CANHGTCM,
		canHgtCm,
	};
}

export function changeCanInitActStatCd(canInitActStatCd) { 
	return{
		type: constant.CHANGE_CANINITACTSTATCD,
		canInitActStatCd,
	};
}

export function changeCanInitActStatDt(canInitActStatDt) { 
	return{
		type: constant.CHANGE_CANINITACTSTATDT,
		canInitActStatDt,
	};
}

export function changeCanInitInactStatDt(canInitInactStatDt) { 
	return{
		type: constant.CHANGE_CANINITINACTSTATDT,
		canInitInactStatDt,
	};
}

export function changeCanInitSrtrLabMeld(canInitSrtrLabMeld) { 
	return{
		type: constant.CHANGE_CANINITSRTRLABMELD,
		canInitSrtrLabMeld,
	};
}

export function changeCanInitSrtrLabMeldTy(canInitSrtrLabMeldTy) { 
	return{
		type: constant.CHANGE_CANINITSRTRLABMELDTY,
		canInitSrtrLabMeldTy,
	};
}

export function changeCanInitStat(canInitStat) { 
	return{
		type: constant.CHANGE_CANINITSTAT,
		canInitStat,
	};
}

export function changeCanLastActStatDt(canLastActStatDt) { 
	return{
		type: constant.CHANGE_CANLASTACTSTATDT,
		canLastActStatDt,
	};
}

export function changeCanLastAlbumin(canLastAlbumin) { 
	return{
		type: constant.CHANGE_CANLASTALBUMIN,
		canLastAlbumin,
	};
}

export function changeCanLastAscites(canLastAscites) { 
	return{
		type: constant.CHANGE_CANLASTASCITES,
		canLastAscites,
	};
}

export function changeCanLastBili(canLastBili) { 
	return{
		type: constant.CHANGE_CANLASTBILI,
		canLastBili,
	};
}

export function changeCanLastDialPriorWeek(canLastDialPriorWeek) { 
	return{
		type: constant.CHANGE_CANLASTDIALPRIORWEEK,
		canLastDialPriorWeek,
	};
}

export function changeCanLastEnceph(canLastEnceph) { 
	return{
		type: constant.CHANGE_CANLASTENCEPH,
		canLastEnceph,
	};
}

export function changeCanLastInactStatDt(canLastInactStatDt) { 
	return{
		type: constant.CHANGE_CANLASTINACTSTATDT,
		canLastInactStatDt,
	};
}

export function changeCanLastInr(canLastInr) { 
	return{
		type: constant.CHANGE_CANLASTINR,
		canLastInr,
	};
}

export function changeCanLastSerumCreat(canLastSerumCreat) { 
	return{
		type: constant.CHANGE_CANLASTSERUMCREAT,
		canLastSerumCreat,
	};
}

export function changeCanLastSerumSodium(canLastSerumSodium) { 
	return{
		type: constant.CHANGE_CANLASTSERUMSODIUM,
		canLastSerumSodium,
	};
}

export function changeCanLastSrtrLabMeld(canLastSrtrLabMeld) { 
	return{
		type: constant.CHANGE_CANLASTSRTRLABMELD,
		canLastSrtrLabMeld,
	};
}

export function changeCanLastSrtrLabMeldTy(canLastSrtrLabMeldTy) { 
	return{
		type: constant.CHANGE_CANLASTSRTRLABMELDTY,
		canLastSrtrLabMeldTy,
	};
}

export function changeCanLastStat(canLastStat) { 
	return{
		type: constant.CHANGE_CANLASTSTAT,
		canLastStat,
	};
}

export function changeCanListingDt(canListingDt) { 
	return{
		type: constant.CHANGE_CANLISTINGDT,
		canListingDt,
	};
}

export function changeCanMalig(canMalig) { 
	return{
		type: constant.CHANGE_CANMALIG,
		canMalig,
	};
}

export function changeCanPepticUlcer(canPepticUlcer) { 
	return{
		type: constant.CHANGE_CANPEPTICULCER,
		canPepticUlcer,
	};
}

export function changeCanPeriphVasc(canPeriphVasc) { 
	return{
		type: constant.CHANGE_CANPERIPHVASC,
		canPeriphVasc,
	};
}

export function changeCanPortalVein(canPortalVein) { 
	return{
		type: constant.CHANGE_CANPORTALVEIN,
		canPortalVein,
	};
}

export function changeCanPrevAbdomSurg(canPrevAbdomSurg) { 
	return{
		type: constant.CHANGE_CANPREVABDOMSURG,
		canPrevAbdomSurg,
	};
}

export function changeCanPrevHl(canPrevHl) { 
	return{
		type: constant.CHANGE_CANPREVHL,
		canPrevHl,
	};
}

export function changeCanPrevHr(canPrevHr) { 
	return{
		type: constant.CHANGE_CANPREVHR,
		canPrevHr,
	};
}

export function changeCanPrevIn(canPrevIn) { 
	return{
		type: constant.CHANGE_CANPREVIN,
		canPrevIn,
	};
}

export function changeCanPrevKi(canPrevKi) { 
	return{
		type: constant.CHANGE_CANPREVKI,
		canPrevKi,
	};
}

export function changeCanPrevKp(canPrevKp) { 
	return{
		type: constant.CHANGE_CANPREVKP,
		canPrevKp,
	};
}

export function changeCanPrevLi(canPrevLi) { 
	return{
		type: constant.CHANGE_CANPREVLI,
		canPrevLi,
	};
}

export function changeCanPrevLu(canPrevLu) { 
	return{
		type: constant.CHANGE_CANPREVLU,
		canPrevLu,
	};
}

export function changeCanPrevPa(canPrevPa) { 
	return{
		type: constant.CHANGE_CANPREVPA,
		canPrevPa,
	};
}

export function changeCanPrevTx(canPrevTx) { 
	return{
		type: constant.CHANGE_CANPREVTX,
		canPrevTx,
	};
}

export function changeCanPrevTxfus(canPrevTxfus) { 
	return{
		type: constant.CHANGE_CANPREVTXFUS,
		canPrevTxfus,
	};
}

export function changeCanPulmEmbol(canPulmEmbol) { 
	return{
		type: constant.CHANGE_CANPULMEMBOL,
		canPulmEmbol,
	};
}

export function changeCanRace(canRace) { 
	return{
		type: constant.CHANGE_CANRACE,
		canRace,
	};
}

export function changeCanRaceSrtr(canRaceSrtr) { 
	return{
		type: constant.CHANGE_CANRACESRTR,
		canRaceSrtr,
	};
}

export function changeCanRemCd(canRemCd) { 
	return{
		type: constant.CHANGE_CANREMCD,
		canRemCd,
	};
}

export function changeCanSource(canSource) { 
	return{
		type: constant.CHANGE_CANSOURCE,
		canSource,
	};
}

export function changeCanTipss(canTipss) { 
	return{
		type: constant.CHANGE_CANTIPSS,
		canTipss,
	};
}

export function changeCanTotAlbumin(canTotAlbumin) { 
	return{
		type: constant.CHANGE_CANTOTALBUMIN,
		canTotAlbumin,
	};
}

export function changeCanWgtKg(canWgtKg) { 
	return{
		type: constant.CHANGE_CANWGTKG,
		canWgtKg,
	};
}

export function changeDonorId(donorId) { 
	return{
		type: constant.CHANGE_DONORID,
		donorId,
	};
}

export function changeDonorIdVessel(donorIdVessel) { 
	return{
		type: constant.CHANGE_DONORIDVESSEL,
		donorIdVessel,
	};
}

export function changeDonA1(donA1) { 
	return{
		type: constant.CHANGE_DONA1,
		donA1,
	};
}

export function changeDonA2(donA2) { 
	return{
		type: constant.CHANGE_DONA2,
		donA2,
	};
}

export function changeDonAbo(donAbo) { 
	return{
		type: constant.CHANGE_DONABO,
		donAbo,
	};
}

export function changeDonAge(donAge) { 
	return{
		type: constant.CHANGE_DONAGE,
		donAge,
	};
}

export function changeDonAgeInMonths(donAgeInMonths) { 
	return{
		type: constant.CHANGE_DONAGEINMONTHS,
		donAgeInMonths,
	};
}

export function changeDonAntiCmv(donAntiCmv) { 
	return{
		type: constant.CHANGE_DONANTICMV,
		donAntiCmv,
	};
}

export function changeDonAntiHcv(donAntiHcv) { 
	return{
		type: constant.CHANGE_DONANTIHCV,
		donAntiHcv,
	};
}

export function changeDonB1(donB1) { 
	return{
		type: constant.CHANGE_DONB1,
		donB1,
	};
}

export function changeDonB2(donB2) { 
	return{
		type: constant.CHANGE_DONB2,
		donB2,
	};
}

export function changeDonCadDonCod(donCadDonCod) { 
	return{
		type: constant.CHANGE_DONCADDONCOD,
		donCadDonCod,
	};
}

export function changeDonCardiacArrestAfterDeath(donCardiacArrestAfterDeath) { 
	return{
		type: constant.CHANGE_DONCARDIACARRESTAFTERDEATH,
		donCardiacArrestAfterDeath,
	};
}

export function changeDonCitizenship(donCitizenship) { 
	return{
		type: constant.CHANGE_DONCITIZENSHIP,
		donCitizenship,
	};
}

export function changeDonCmvIgg(donCmvIgg) { 
	return{
		type: constant.CHANGE_DONCMVIGG,
		donCmvIgg,
	};
}

export function changeDonCodDonStroke(donCodDonStroke) { 
	return{
		type: constant.CHANGE_DONCODDONSTROKE,
		donCodDonStroke,
	};
}

export function changeDonContCigarette(donContCigarette) { 
	return{
		type: constant.CHANGE_DONCONTCIGARETTE,
		donContCigarette,
	};
}

export function changeDonContCocaine(donContCocaine) { 
	return{
		type: constant.CHANGE_DONCONTCOCAINE,
		donContCocaine,
	};
}

export function changeDonContIvDrug(donContIvDrug) { 
	return{
		type: constant.CHANGE_DONCONTIVDRUG,
		donContIvDrug,
	};
}

export function changeDonContOtherDrug(donContOtherDrug) { 
	return{
		type: constant.CHANGE_DONCONTOTHERDRUG,
		donContOtherDrug,
	};
}

export function changeDonCreat(donCreat) { 
	return{
		type: constant.CHANGE_DONCREAT,
		donCreat,
	};
}

export function changeDonDdavp(donDdavp) { 
	return{
		type: constant.CHANGE_DONDDAVP,
		donDdavp,
	};
}

export function changeDonDeathCircum(donDeathCircum) { 
	return{
		type: constant.CHANGE_DONDEATHCIRCUM,
		donDeathCircum,
	};
}

export function changeDonDeathMech(donDeathMech) { 
	return{
		type: constant.CHANGE_DONDEATHMECH,
		donDeathMech,
	};
}

export function changeDonDobutamine(donDobutamine) { 
	return{
		type: constant.CHANGE_DONDOBUTAMINE,
		donDobutamine,
	};
}

export function changeDonDopamine(donDopamine) { 
	return{
		type: constant.CHANGE_DONDOPAMINE,
		donDopamine,
	};
}

export function changeDonDr1(donDr1) { 
	return{
		type: constant.CHANGE_DONDR1,
		donDr1,
	};
}

export function changeDonDr2(donDr2) { 
	return{
		type: constant.CHANGE_DONDR2,
		donDr2,
	};
}

export function changeDonEthnicitySrtr(donEthnicitySrtr) { 
	return{
		type: constant.CHANGE_DONETHNICITYSRTR,
		donEthnicitySrtr,
	};
}

export function changeDonExpandDonKi(donExpandDonKi) { 
	return{
		type: constant.CHANGE_DONEXPANDDONKI,
		donExpandDonKi,
	};
}

export function changeDonGender(donGender) { 
	return{
		type: constant.CHANGE_DONGENDER,
		donGender,
	};
}

export function changeDonHaploTyMatch(donHaploTyMatch) { 
	return{
		type: constant.CHANGE_DONHAPLOTYMATCH,
		donHaploTyMatch,
	};
}

export function changeDonHgtCm(donHgtCm) { 
	return{
		type: constant.CHANGE_DONHGTCM,
		donHgtCm,
	};
}

export function changeDonHighCreat(donHighCreat) { 
	return{
		type: constant.CHANGE_DONHIGHCREAT,
		donHighCreat,
	};
}

export function changeDonHistCancer(donHistCancer) { 
	return{
		type: constant.CHANGE_DONHISTCANCER,
		donHistCancer,
	};
}

export function changeDonHistCigaretteGt20Pkyr(donHistCigaretteGt20Pkyr) { 
	return{
		type: constant.CHANGE_DONHISTCIGARETTEGT20PKYR,
		donHistCigaretteGt20Pkyr,
	};
}

export function changeDonHistCocaine(donHistCocaine) { 
	return{
		type: constant.CHANGE_DONHISTCOCAINE,
		donHistCocaine,
	};
}

export function changeDonHistDiab(donHistDiab) { 
	return{
		type: constant.CHANGE_DONHISTDIAB,
		donHistDiab,
	};
}

export function changeDonHistHyperten(donHistHyperten) { 
	return{
		type: constant.CHANGE_DONHISTHYPERTEN,
		donHistHyperten,
	};
}

export function changeDonHistIvDrug(donHistIvDrug) { 
	return{
		type: constant.CHANGE_DONHISTIVDRUG,
		donHistIvDrug,
	};
}

export function changeDonHistOtherDrug(donHistOtherDrug) { 
	return{
		type: constant.CHANGE_DONHISTOTHERDRUG,
		donHistOtherDrug,
	};
}

export function changeDonHtn(donHtn) { 
	return{
		type: constant.CHANGE_DONHTN,
		donHtn,
	};
}

export function changeDonInotropAgentGe3(donInotropAgentGe3) { 
	return{
		type: constant.CHANGE_DONINOTROPAGENTGE3,
		donInotropAgentGe3,
	};
}

export function changeDonInotropSupport(donInotropSupport) { 
	return{
		type: constant.CHANGE_DONINOTROPSUPPORT,
		donInotropSupport,
	};
}

export function changeDonInsulin(donInsulin) { 
	return{
		type: constant.CHANGE_DONINSULIN,
		donInsulin,
	};
}

export function changeDonLivingDonCod(donLivingDonCod) { 
	return{
		type: constant.CHANGE_DONLIVINGDONCOD,
		donLivingDonCod,
	};
}

export function changeDonLiBiopsy(donLiBiopsy) { 
	return{
		type: constant.CHANGE_DONLIBIOPSY,
		donLiBiopsy,
	};
}

export function changeDonMeetCdcHighRisk(donMeetCdcHighRisk) { 
	return{
		type: constant.CHANGE_DONMEETCDCHIGHRISK,
		donMeetCdcHighRisk,
	};
}

export function changeDonNonHrBeat(donNonHrBeat) { 
	return{
		type: constant.CHANGE_DONNONHRBEAT,
		donNonHrBeat,
	};
}

export function changeDonOpoCtrId(donOpoCtrId) { 
	return{
		type: constant.CHANGE_DONOPOCTRID,
		donOpoCtrId,
	};
}

export function changeDonOrgShared(donOrgShared) { 
	return{
		type: constant.CHANGE_DONORGSHARED,
		donOrgShared,
	};
}

export function changeDonPh(donPh) { 
	return{
		type: constant.CHANGE_DONPH,
		donPh,
	};
}

export function changeDonPrerecovDiuretics(donPrerecovDiuretics) { 
	return{
		type: constant.CHANGE_DONPRERECOVDIURETICS,
		donPrerecovDiuretics,
	};
}

export function changeDonRace(donRace) { 
	return{
		type: constant.CHANGE_DONRACE,
		donRace,
	};
}

export function changeDonRaceSrtr(donRaceSrtr) { 
	return{
		type: constant.CHANGE_DONRACESRTR,
		donRaceSrtr,
	};
}

export function changeDonRecovDt(donRecovDt) { 
	return{
		type: constant.CHANGE_DONRECOVDT,
		donRecovDt,
	};
}

export function changeDonRelationshipTy(donRelationshipTy) { 
	return{
		type: constant.CHANGE_DONRELATIONSHIPTY,
		donRelationshipTy,
	};
}

export function changeDonSgot(donSgot) { 
	return{
		type: constant.CHANGE_DONSGOT,
		donSgot,
	};
}

export function changeDonSgotPreop(donSgotPreop) { 
	return{
		type: constant.CHANGE_DONSGOTPREOP,
		donSgotPreop,
	};
}

export function changeDonSgptPreop(donSgptPreop) { 
	return{
		type: constant.CHANGE_DONSGPTPREOP,
		donSgptPreop,
	};
}

export function changeDonTy(donTy) { 
	return{
		type: constant.CHANGE_DONTY,
		donTy,
	};
}

export function changeDonWarmIschTmMins(donWarmIschTmMins) { 
	return{
		type: constant.CHANGE_DONWARMISCHTMMINS,
		donWarmIschTmMins,
	};
}

export function changeDonWgtKg(donWgtKg) { 
	return{
		type: constant.CHANGE_DONWGTKG,
		donWgtKg,
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

export function changePersOptnCod(persOptnCod) { 
	return{
		type: constant.CHANGE_PERSOPTNCOD,
		persOptnCod,
	};
}

export function changePersOptnDeathDt(persOptnDeathDt) { 
	return{
		type: constant.CHANGE_PERSOPTNDEATHDT,
		persOptnDeathDt,
	};
}

export function changePersRelist(persRelist) { 
	return{
		type: constant.CHANGE_PERSRELIST,
		persRelist,
	};
}

export function changePersRestrictDeathDt(persRestrictDeathDt) { 
	return{
		type: constant.CHANGE_PERSRESTRICTDEATHDT,
		persRestrictDeathDt,
	};
}

export function changePersRestrictDeathVrfy(persRestrictDeathVrfy) { 
	return{
		type: constant.CHANGE_PERSRESTRICTDEATHVRFY,
		persRestrictDeathVrfy,
	};
}

export function changePersRetx(persRetx) { 
	return{
		type: constant.CHANGE_PERSRETX,
		persRetx,
	};
}

export function changePersRetxTrrId(persRetxTrrId) { 
	return{
		type: constant.CHANGE_PERSRETXTRRID,
		persRetxTrrId,
	};
}

export function changePersSsaDeathDt(persSsaDeathDt) { 
	return{
		type: constant.CHANGE_PERSSSADEATHDT,
		persSsaDeathDt,
	};
}

export function changePxId(pxId) { 
	return{
		type: constant.CHANGE_PXID,
		pxId,
	};
}

export function changeRecA1(recA1) { 
	return{
		type: constant.CHANGE_RECA1,
		recA1,
	};
}

export function changeRecA2(recA2) { 
	return{
		type: constant.CHANGE_RECA2,
		recA2,
	};
}

export function changeRecAcademicLevel(recAcademicLevel) { 
	return{
		type: constant.CHANGE_RECACADEMICLEVEL,
		recAcademicLevel,
	};
}

export function changeRecAcademicProgress(recAcademicProgress) { 
	return{
		type: constant.CHANGE_RECACADEMICPROGRESS,
		recAcademicProgress,
	};
}

export function changeRecAcuteRejBiopsyConfirmed(recAcuteRejBiopsyConfirmed) { 
	return{
		type: constant.CHANGE_RECACUTEREJBIOPSYCONFIRMED,
		recAcuteRejBiopsyConfirmed,
	};
}

export function changeRecAcuteRejEpisode(recAcuteRejEpisode) { 
	return{
		type: constant.CHANGE_RECACUTEREJEPISODE,
		recAcuteRejEpisode,
	};
}

export function changeRecAdmissionDt(recAdmissionDt) { 
	return{
		type: constant.CHANGE_RECADMISSIONDT,
		recAdmissionDt,
	};
}

export function changeRecAgeAtTx(recAgeAtTx) { 
	return{
		type: constant.CHANGE_RECAGEATTX,
		recAgeAtTx,
	};
}

export function changeRecAgeInMonthsAtTx(recAgeInMonthsAtTx) { 
	return{
		type: constant.CHANGE_RECAGEINMONTHSATTX,
		recAgeInMonthsAtTx,
	};
}

export function changeRecAntivrlTherapy(recAntivrlTherapy) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPY,
		recAntivrlTherapy,
	};
}

export function changeRecAntivrlTherapyTy(recAntivrlTherapyTy) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTY,
		recAntivrlTherapyTy,
	};
}

export function changeRecAntivrlTherapyTyAcyclovir(recAntivrlTherapyTyAcyclovir) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYACYCLOVIR,
		recAntivrlTherapyTyAcyclovir,
	};
}

export function changeRecAntivrlTherapyTyCytogam(recAntivrlTherapyTyCytogam) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYCYTOGAM,
		recAntivrlTherapyTyCytogam,
	};
}

export function changeRecAntivrlTherapyTyCytovene(recAntivrlTherapyTyCytovene) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYCYTOVENE,
		recAntivrlTherapyTyCytovene,
	};
}

export function changeRecAntivrlTherapyTyEpivir(recAntivrlTherapyTyEpivir) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYEPIVIR,
		recAntivrlTherapyTyEpivir,
	};
}

export function changeRecAntivrlTherapyTyFluVac(recAntivrlTherapyTyFluVac) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYFLUVAC,
		recAntivrlTherapyTyFluVac,
	};
}

export function changeRecAntivrlTherapyTyGamimune(recAntivrlTherapyTyGamimune) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYGAMIMUNE,
		recAntivrlTherapyTyGamimune,
	};
}

export function changeRecAntivrlTherapyTyGammagard(recAntivrlTherapyTyGammagard) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYGAMMAGARD,
		recAntivrlTherapyTyGammagard,
	};
}

export function changeRecAntivrlTherapyTyHbig(recAntivrlTherapyTyHbig) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYHBIG,
		recAntivrlTherapyTyHbig,
	};
}

export function changeRecAntivrlTherapyTyOther(recAntivrlTherapyTyOther) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYOTHER,
		recAntivrlTherapyTyOther,
	};
}

export function changeRecAntivrlTherapyTyValcyte(recAntivrlTherapyTyValcyte) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYVALCYTE,
		recAntivrlTherapyTyValcyte,
	};
}

export function changeRecAntivrlTherapyTyValtrex(recAntivrlTherapyTyValtrex) { 
	return{
		type: constant.CHANGE_RECANTIVRLTHERAPYTYVALTREX,
		recAntivrlTherapyTyValtrex,
	};
}

export function changeRecArtificialLi(recArtificialLi) { 
	return{
		type: constant.CHANGE_RECARTIFICIALLI,
		recArtificialLi,
	};
}

export function changeRecAscites(recAscites) { 
	return{
		type: constant.CHANGE_RECASCITES,
		recAscites,
	};
}

export function changeRecAMmEquivCur(recAMmEquivCur) { 
	return{
		type: constant.CHANGE_RECAMMEQUIVCUR,
		recAMmEquivCur,
	};
}

export function changeRecAMmEquivTx(recAMmEquivTx) { 
	return{
		type: constant.CHANGE_RECAMMEQUIVTX,
		recAMmEquivTx,
	};
}

export function changeRecB1(recB1) { 
	return{
		type: constant.CHANGE_RECB1,
		recB1,
	};
}

export function changeRecB2(recB2) { 
	return{
		type: constant.CHANGE_RECB2,
		recB2,
	};
}

export function changeRecBacteriaPerit(recBacteriaPerit) { 
	return{
		type: constant.CHANGE_RECBACTERIAPERIT,
		recBacteriaPerit,
	};
}

export function changeRecBmi(recBmi) { 
	return{
		type: constant.CHANGE_RECBMI,
		recBmi,
	};
}

export function changeRecBMmEquivCur(recBMmEquivCur) { 
	return{
		type: constant.CHANGE_RECBMMEQUIVCUR,
		recBMmEquivCur,
	};
}

export function changeRecBMmEquivTx(recBMmEquivTx) { 
	return{
		type: constant.CHANGE_RECBMMEQUIVTX,
		recBMmEquivTx,
	};
}

export function changeRecCmvIgg(recCmvIgg) { 
	return{
		type: constant.CHANGE_RECCMVIGG,
		recCmvIgg,
	};
}

export function changeRecCmvIgm(recCmvIgm) { 
	return{
		type: constant.CHANGE_RECCMVIGM,
		recCmvIgm,
	};
}

export function changeRecCmvStat(recCmvStat) { 
	return{
		type: constant.CHANGE_RECCMVSTAT,
		recCmvStat,
	};
}

export function changeRecCod(recCod) { 
	return{
		type: constant.CHANGE_RECCOD,
		recCod,
	};
}

export function changeRecCod2(recCod2) { 
	return{
		type: constant.CHANGE_RECCOD2,
		recCod2,
	};
}

export function changeRecCod3(recCod3) { 
	return{
		type: constant.CHANGE_RECCOD3,
		recCod3,
	};
}

export function changeRecCognitiveDevelop(recCognitiveDevelop) { 
	return{
		type: constant.CHANGE_RECCOGNITIVEDEVELOP,
		recCognitiveDevelop,
	};
}

export function changeRecColdIschTm(recColdIschTm) { 
	return{
		type: constant.CHANGE_RECCOLDISCHTM,
		recColdIschTm,
	};
}

export function changeRecCtrId(recCtrId) { 
	return{
		type: constant.CHANGE_RECCTRID,
		recCtrId,
	};
}

export function changeRecCurCtrId(recCurCtrId) { 
	return{
		type: constant.CHANGE_RECCURCTRID,
		recCurCtrId,
	};
}

export function changeRecCurPxStat(recCurPxStat) { 
	return{
		type: constant.CHANGE_RECCURPXSTAT,
		recCurPxStat,
	};
}

export function changeRecDgn(recDgn) { 
	return{
		type: constant.CHANGE_RECDGN,
		recDgn,
	};
}

export function changeRecDgn2(recDgn2) { 
	return{
		type: constant.CHANGE_RECDGN2,
		recDgn2,
	};
}

export function changeRecDgnOstxt(recDgnOstxt) { 
	return{
		type: constant.CHANGE_RECDGNOSTXT,
		recDgnOstxt,
	};
}

export function changeRecDischrgAlbumin(recDischrgAlbumin) { 
	return{
		type: constant.CHANGE_RECDISCHRGALBUMIN,
		recDischrgAlbumin,
	};
}

export function changeRecDischrgAlkphos(recDischrgAlkphos) { 
	return{
		type: constant.CHANGE_RECDISCHRGALKPHOS,
		recDischrgAlkphos,
	};
}

export function changeRecDischrgCreat(recDischrgCreat) { 
	return{
		type: constant.CHANGE_RECDISCHRGCREAT,
		recDischrgCreat,
	};
}

export function changeRecDischrgDt(recDischrgDt) { 
	return{
		type: constant.CHANGE_RECDISCHRGDT,
		recDischrgDt,
	};
}

export function changeRecDischrgInr(recDischrgInr) { 
	return{
		type: constant.CHANGE_RECDISCHRGINR,
		recDischrgInr,
	};
}

export function changeRecDischrgLabDt(recDischrgLabDt) { 
	return{
		type: constant.CHANGE_RECDISCHRGLABDT,
		recDischrgLabDt,
	};
}

export function changeRecDischrgSgot(recDischrgSgot) { 
	return{
		type: constant.CHANGE_RECDISCHRGSGOT,
		recDischrgSgot,
	};
}

export function changeRecDischrgSgpt(recDischrgSgpt) { 
	return{
		type: constant.CHANGE_RECDISCHRGSGPT,
		recDischrgSgpt,
	};
}

export function changeRecDr1(recDr1) { 
	return{
		type: constant.CHANGE_RECDR1,
		recDr1,
	};
}

export function changeRecDr2(recDr2) { 
	return{
		type: constant.CHANGE_RECDR2,
		recDr2,
	};
}

export function changeRecDrMmEquivCur(recDrMmEquivCur) { 
	return{
		type: constant.CHANGE_RECDRMMEQUIVCUR,
		recDrMmEquivCur,
	};
}

export function changeRecDrMmEquivTx(recDrMmEquivTx) { 
	return{
		type: constant.CHANGE_RECDRMMEQUIVTX,
		recDrMmEquivTx,
	};
}

export function changeRecEbvStat(recEbvStat) { 
	return{
		type: constant.CHANGE_RECEBVSTAT,
		recEbvStat,
	};
}

export function changeRecEmplStatPre04(recEmplStatPre04) { 
	return{
		type: constant.CHANGE_RECEMPLSTATPRE04,
		recEmplStatPre04,
	};
}

export function changeRecFailBiliary(recFailBiliary) { 
	return{
		type: constant.CHANGE_RECFAILBILIARY,
		recFailBiliary,
	};
}

export function changeRecFailDt(recFailDt) { 
	return{
		type: constant.CHANGE_RECFAILDT,
		recFailDt,
	};
}

export function changeRecFailHepDenovo(recFailHepDenovo) { 
	return{
		type: constant.CHANGE_RECFAILHEPDENOVO,
		recFailHepDenovo,
	};
}

export function changeRecFailHepRecur(recFailHepRecur) { 
	return{
		type: constant.CHANGE_RECFAILHEPRECUR,
		recFailHepRecur,
	};
}

export function changeRecFailInfect(recFailInfect) { 
	return{
		type: constant.CHANGE_RECFAILINFECT,
		recFailInfect,
	};
}

export function changeRecFailPrimeGraftFail(recFailPrimeGraftFail) { 
	return{
		type: constant.CHANGE_RECFAILPRIMEGRAFTFAIL,
		recFailPrimeGraftFail,
	};
}

export function changeRecFailRecurDisease(recFailRecurDisease) { 
	return{
		type: constant.CHANGE_RECFAILRECURDISEASE,
		recFailRecurDisease,
	};
}

export function changeRecFailRejAcute(recFailRejAcute) { 
	return{
		type: constant.CHANGE_RECFAILREJACUTE,
		recFailRejAcute,
	};
}

export function changeRecFailVascThromb(recFailVascThromb) { 
	return{
		type: constant.CHANGE_RECFAILVASCTHROMB,
		recFailVascThromb,
	};
}

export function changeRecFunctnStat(recFunctnStat) { 
	return{
		type: constant.CHANGE_RECFUNCTNSTAT,
		recFunctnStat,
	};
}

export function changeRecGraftStat(recGraftStat) { 
	return{
		type: constant.CHANGE_RECGRAFTSTAT,
		recGraftStat,
	};
}

export function changeRecHbvAntibody(recHbvAntibody) { 
	return{
		type: constant.CHANGE_RECHBVANTIBODY,
		recHbvAntibody,
	};
}

export function changeRecHbvSurfAntigen(recHbvSurfAntigen) { 
	return{
		type: constant.CHANGE_RECHBVSURFANTIGEN,
		recHbvSurfAntigen,
	};
}

export function changeRecHcvStat(recHcvStat) { 
	return{
		type: constant.CHANGE_RECHCVSTAT,
		recHcvStat,
	};
}

export function changeRecHepaticArterThromb(recHepaticArterThromb) { 
	return{
		type: constant.CHANGE_RECHEPATICARTERTHROMB,
		recHepaticArterThromb,
	};
}

export function changeRecHepaticOutflowObstruct(recHepaticOutflowObstruct) { 
	return{
		type: constant.CHANGE_RECHEPATICOUTFLOWOBSTRUCT,
		recHepaticOutflowObstruct,
	};
}

export function changeRecHgtCm(recHgtCm) { 
	return{
		type: constant.CHANGE_RECHGTCM,
		recHgtCm,
	};
}

export function changeRecHgtWgtDt(recHgtWgtDt) { 
	return{
		type: constant.CHANGE_RECHGTWGTDT,
		recHgtWgtDt,
	};
}

export function changeRecHistoTxId(recHistoTxId) { 
	return{
		type: constant.CHANGE_RECHISTOTXID,
		recHistoTxId,
	};
}

export function changeRecHivStat(recHivStat) { 
	return{
		type: constant.CHANGE_RECHIVSTAT,
		recHivStat,
	};
}

export function changeRecHosp90Days(recHosp90Days) { 
	return{
		type: constant.CHANGE_RECHOSP90DAYS,
		recHosp90Days,
	};
}

export function changeRecImmunoMaintMeds(recImmunoMaintMeds) { 
	return{
		type: constant.CHANGE_RECIMMUNOMAINTMEDS,
		recImmunoMaintMeds,
	};
}

export function changeRecInotropBpSupport(recInotropBpSupport) { 
	return{
		type: constant.CHANGE_RECINOTROPBPSUPPORT,
		recInotropBpSupport,
	};
}

export function changeRecLifeSupport(recLifeSupport) { 
	return{
		type: constant.CHANGE_RECLIFESUPPORT,
		recLifeSupport,
	};
}

export function changeRecLifeSupportOther(recLifeSupportOther) { 
	return{
		type: constant.CHANGE_RECLIFESUPPORTOTHER,
		recLifeSupportOther,
	};
}

export function changeRecLiTy(recLiTy) { 
	return{
		type: constant.CHANGE_RECLITY,
		recLiTy,
	};
}

export function changeRecMalig(recMalig) { 
	return{
		type: constant.CHANGE_RECMALIG,
		recMalig,
	};
}

export function changeRecMaligTy(recMaligTy) { 
	return{
		type: constant.CHANGE_RECMALIGTY,
		recMaligTy,
	};
}

export function changeRecMaligTyBreast(recMaligTyBreast) { 
	return{
		type: constant.CHANGE_RECMALIGTYBREAST,
		recMaligTyBreast,
	};
}

export function changeRecMaligTyCnsTumor(recMaligTyCnsTumor) { 
	return{
		type: constant.CHANGE_RECMALIGTYCNSTUMOR,
		recMaligTyCnsTumor,
	};
}

export function changeRecMaligTyGenitourinary(recMaligTyGenitourinary) { 
	return{
		type: constant.CHANGE_RECMALIGTYGENITOURINARY,
		recMaligTyGenitourinary,
	};
}

export function changeRecMaligTyHepblast(recMaligTyHepblast) { 
	return{
		type: constant.CHANGE_RECMALIGTYHEPBLAST,
		recMaligTyHepblast,
	};
}

export function changeRecMaligTyHepcarcinoma(recMaligTyHepcarcinoma) { 
	return{
		type: constant.CHANGE_RECMALIGTYHEPCARCINOMA,
		recMaligTyHepcarcinoma,
	};
}

export function changeRecMaligTyLeukLymph(recMaligTyLeukLymph) { 
	return{
		type: constant.CHANGE_RECMALIGTYLEUKLYMPH,
		recMaligTyLeukLymph,
	};
}

export function changeRecMaligTyLiver(recMaligTyLiver) { 
	return{
		type: constant.CHANGE_RECMALIGTYLIVER,
		recMaligTyLiver,
	};
}

export function changeRecMaligTyLu(recMaligTyLu) { 
	return{
		type: constant.CHANGE_RECMALIGTYLU,
		recMaligTyLu,
	};
}

export function changeRecMaligTyOther(recMaligTyOther) { 
	return{
		type: constant.CHANGE_RECMALIGTYOTHER,
		recMaligTyOther,
	};
}

export function changeRecMaligTySkinMel(recMaligTySkinMel) { 
	return{
		type: constant.CHANGE_RECMALIGTYSKINMEL,
		recMaligTySkinMel,
	};
}

export function changeRecMaligTySkinNonMel(recMaligTySkinNonMel) { 
	return{
		type: constant.CHANGE_RECMALIGTYSKINNONMEL,
		recMaligTySkinNonMel,
	};
}

export function changeRecMaligTyThroat(recMaligTyThroat) { 
	return{
		type: constant.CHANGE_RECMALIGTYTHROAT,
		recMaligTyThroat,
	};
}

export function changeRecMaligTyThyroid(recMaligTyThyroid) { 
	return{
		type: constant.CHANGE_RECMALIGTYTHYROID,
		recMaligTyThyroid,
	};
}

export function changeRecMaligTyUnk(recMaligTyUnk) { 
	return{
		type: constant.CHANGE_RECMALIGTYUNK,
		recMaligTyUnk,
	};
}

export function changeRecMedCond(recMedCond) { 
	return{
		type: constant.CHANGE_RECMEDCOND,
		recMedCond,
	};
}

export function changeRecMmEquivCur(recMmEquivCur) { 
	return{
		type: constant.CHANGE_RECMMEQUIVCUR,
		recMmEquivCur,
	};
}

export function changeRecMmEquivTx(recMmEquivTx) { 
	return{
		type: constant.CHANGE_RECMMEQUIVTX,
		recMmEquivTx,
	};
}

export function changeRecMotorDevelop(recMotorDevelop) { 
	return{
		type: constant.CHANGE_RECMOTORDEVELOP,
		recMotorDevelop,
	};
}

export function changeRecOnVentilator(recOnVentilator) { 
	return{
		type: constant.CHANGE_RECONVENTILATOR,
		recOnVentilator,
	};
}

export function changeRecOpoId(recOpoId) { 
	return{
		type: constant.CHANGE_RECOPOID,
		recOpoId,
	};
}

export function changeRecOtherTherapy(recOtherTherapy) { 
	return{
		type: constant.CHANGE_RECOTHERTHERAPY,
		recOtherTherapy,
	};
}

export function changeRecOtherTherapyTy(recOtherTherapyTy) { 
	return{
		type: constant.CHANGE_RECOTHERTHERAPYTY,
		recOtherTherapyTy,
	};
}

export function changeRecOtherTherapyTyPhotoph(recOtherTherapyTyPhotoph) { 
	return{
		type: constant.CHANGE_RECOTHERTHERAPYTYPHOTOPH,
		recOtherTherapyTyPhotoph,
	};
}

export function changeRecOtherTherapyTyPlasmaph(recOtherTherapyTyPlasmaph) { 
	return{
		type: constant.CHANGE_RECOTHERTHERAPYTYPLASMAPH,
		recOtherTherapyTyPlasmaph,
	};
}

export function changeRecOtherTherapyTyTli(recOtherTherapyTyTli) { 
	return{
		type: constant.CHANGE_RECOTHERTHERAPYTYTLI,
		recOtherTherapyTyTli,
	};
}

export function changeRecPbCredit(recPbCredit) { 
	return{
		type: constant.CHANGE_RECPBCREDIT,
		recPbCredit,
	};
}

export function changeRecPbDebt(recPbDebt) { 
	return{
		type: constant.CHANGE_RECPBDEBT,
		recPbDebt,
	};
}

export function changeRecPbShareTy(recPbShareTy) { 
	return{
		type: constant.CHANGE_RECPBSHARETY,
		recPbShareTy,
	};
}

export function changeRecPermState(recPermState) { 
	return{
		type: constant.CHANGE_RECPERMSTATE,
		recPermState,
	};
}

export function changeRecPhyscCapacity(recPhyscCapacity) { 
	return{
		type: constant.CHANGE_RECPHYSCCAPACITY,
		recPhyscCapacity,
	};
}

export function changeRecPortalHypertenBleed(recPortalHypertenBleed) { 
	return{
		type: constant.CHANGE_RECPORTALHYPERTENBLEED,
		recPortalHypertenBleed,
	};
}

export function changeRecPortalVein(recPortalVein) { 
	return{
		type: constant.CHANGE_RECPORTALVEIN,
		recPortalVein,
	};
}

export function changeRecPortalVeinThromb(recPortalVeinThromb) { 
	return{
		type: constant.CHANGE_RECPORTALVEINTHROMB,
		recPortalVeinThromb,
	};
}

export function changeRecPostxLos(recPostxLos) { 
	return{
		type: constant.CHANGE_RECPOSTXLOS,
		recPostxLos,
	};
}

export function changeRecPretxAlbumin(recPretxAlbumin) { 
	return{
		type: constant.CHANGE_RECPRETXALBUMIN,
		recPretxAlbumin,
	};
}

export function changeRecPretxCreat(recPretxCreat) { 
	return{
		type: constant.CHANGE_RECPRETXCREAT,
		recPretxCreat,
	};
}

export function changeRecPretxInr(recPretxInr) { 
	return{
		type: constant.CHANGE_RECPRETXINR,
		recPretxInr,
	};
}

export function changeRecPretxLabDt(recPretxLabDt) { 
	return{
		type: constant.CHANGE_RECPRETXLABDT,
		recPretxLabDt,
	};
}

export function changeRecPretxTotBili(recPretxTotBili) { 
	return{
		type: constant.CHANGE_RECPRETXTOTBILI,
		recPretxTotBili,
	};
}

export function changeRecPrevAbdomSurg(recPrevAbdomSurg) { 
	return{
		type: constant.CHANGE_RECPREVABDOMSURG,
		recPrevAbdomSurg,
	};
}

export function changeRecPrevHl(recPrevHl) { 
	return{
		type: constant.CHANGE_RECPREVHL,
		recPrevHl,
	};
}

export function changeRecPrevHr(recPrevHr) { 
	return{
		type: constant.CHANGE_RECPREVHR,
		recPrevHr,
	};
}

export function changeRecPrevIn(recPrevIn) { 
	return{
		type: constant.CHANGE_RECPREVIN,
		recPrevIn,
	};
}

export function changeRecPrevKi(recPrevKi) { 
	return{
		type: constant.CHANGE_RECPREVKI,
		recPrevKi,
	};
}

export function changeRecPrevKp(recPrevKp) { 
	return{
		type: constant.CHANGE_RECPREVKP,
		recPrevKp,
	};
}

export function changeRecPrevLi(recPrevLi) { 
	return{
		type: constant.CHANGE_RECPREVLI,
		recPrevLi,
	};
}

export function changeRecPrevLu(recPrevLu) { 
	return{
		type: constant.CHANGE_RECPREVLU,
		recPrevLu,
	};
}

export function changeRecPrevNonfunctnTx(recPrevNonfunctnTx) { 
	return{
		type: constant.CHANGE_RECPREVNONFUNCTNTX,
		recPrevNonfunctnTx,
	};
}

export function changeRecPrevPa(recPrevPa) { 
	return{
		type: constant.CHANGE_RECPREVPA,
		recPrevPa,
	};
}

export function changeRecPrimaryPay(recPrimaryPay) { 
	return{
		type: constant.CHANGE_RECPRIMARYPAY,
		recPrimaryPay,
	};
}

export function changeRecProcedureTyLi(recProcedureTyLi) { 
	return{
		type: constant.CHANGE_RECPROCEDURETYLI,
		recProcedureTyLi,
	};
}

export function changeRecPxResearch(recPxResearch) { 
	return{
		type: constant.CHANGE_RECPXRESEARCH,
		recPxResearch,
	};
}

export function changeRecPxStat(recPxStat) { 
	return{
		type: constant.CHANGE_RECPXSTAT,
		recPxStat,
	};
}

export function changeRecPxStatDt(recPxStatDt) { 
	return{
		type: constant.CHANGE_RECPXSTATDT,
		recPxStatDt,
	};
}

export function changeRecSecondaryPay(recSecondaryPay) { 
	return{
		type: constant.CHANGE_RECSECONDARYPAY,
		recSecondaryPay,
	};
}

export function changeRecSgpt(recSgpt) { 
	return{
		type: constant.CHANGE_RECSGPT,
		recSgpt,
	};
}

export function changeRecTipss(recTipss) { 
	return{
		type: constant.CHANGE_RECTIPSS,
		recTipss,
	};
}

export function changeRecToleranceInductionTech(recToleranceInductionTech) { 
	return{
		type: constant.CHANGE_RECTOLERANCEINDUCTIONTECH,
		recToleranceInductionTech,
	};
}

export function changeRecTumor(recTumor) { 
	return{
		type: constant.CHANGE_RECTUMOR,
		recTumor,
	};
}

export function changeRecTumorTy(recTumorTy) { 
	return{
		type: constant.CHANGE_RECTUMORTY,
		recTumorTy,
	};
}

export function changeRecTxferCtrId(recTxferCtrId) { 
	return{
		type: constant.CHANGE_RECTXFERCTRID,
		recTxferCtrId,
	};
}

export function changeRecTxferDt(recTxferDt) { 
	return{
		type: constant.CHANGE_RECTXFERDT,
		recTxferDt,
	};
}

export function changeRecTxDt(recTxDt) { 
	return{
		type: constant.CHANGE_RECTXDT,
		recTxDt,
	};
}

export function changeRecTxExtraVessel(recTxExtraVessel) { 
	return{
		type: constant.CHANGE_RECTXEXTRAVESSEL,
		recTxExtraVessel,
	};
}

export function changeRecTxOrgTy(recTxOrgTy) { 
	return{
		type: constant.CHANGE_RECTXORGTY,
		recTxOrgTy,
	};
}

export function changeRecTxProcedureTy(recTxProcedureTy) { 
	return{
		type: constant.CHANGE_RECTXPROCEDURETY,
		recTxProcedureTy,
	};
}

export function changeRecTxTy(recTxTy) { 
	return{
		type: constant.CHANGE_RECTXTY,
		recTxTy,
	};
}

export function changeRecValcyte(recValcyte) { 
	return{
		type: constant.CHANGE_RECVALCYTE,
		recValcyte,
	};
}

export function changeRecVaricealBleeding(recVaricealBleeding) { 
	return{
		type: constant.CHANGE_RECVARICEALBLEEDING,
		recVaricealBleeding,
	};
}

export function changeRecVentilator(recVentilator) { 
	return{
		type: constant.CHANGE_RECVENTILATOR,
		recVentilator,
	};
}

export function changeRecWarmIschTm(recWarmIschTm) { 
	return{
		type: constant.CHANGE_RECWARMISCHTM,
		recWarmIschTm,
	};
}

export function changeRecWgtKg(recWgtKg) { 
	return{
		type: constant.CHANGE_RECWGTKG,
		recWgtKg,
	};
}

export function changeRecWorkIncome(recWorkIncome) { 
	return{
		type: constant.CHANGE_RECWORKINCOME,
		recWorkIncome,
	};
}

export function changeRecWorkNoStat(recWorkNoStat) { 
	return{
		type: constant.CHANGE_RECWORKNOSTAT,
		recWorkNoStat,
	};
}

export function changeRecWorkYesStat(recWorkYesStat) { 
	return{
		type: constant.CHANGE_RECWORKYESSTAT,
		recWorkYesStat,
	};
}

export function changeTflCod(tflCod) { 
	return{
		type: constant.CHANGE_TFLCOD,
		tflCod,
	};
}

export function changeTflDeathDt(tflDeathDt) { 
	return{
		type: constant.CHANGE_TFLDEATHDT,
		tflDeathDt,
	};
}

export function changeTflEndtxfu(tflEndtxfu) { 
	return{
		type: constant.CHANGE_TFLENDTXFU,
		tflEndtxfu,
	};
}

export function changeTflGraftDt(tflGraftDt) { 
	return{
		type: constant.CHANGE_TFLGRAFTDT,
		tflGraftDt,
	};
}

export function changeTflLafudate(tflLafudate) { 
	return{
		type: constant.CHANGE_TFLLAFUDATE,
		tflLafudate,
	};
}

export function changeTflLastatus(tflLastatus) { 
	return{
		type: constant.CHANGE_TFLLASTATUS,
		tflLastatus,
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

