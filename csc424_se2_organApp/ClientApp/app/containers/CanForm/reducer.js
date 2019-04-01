import { fromJS } from "immutable";
import * as constants from "./constants";

export const initialState = 
fromJS({
	CanAbo:                       '',
	CanAcademicLevel:             '',
	CanAcademicProgress:          '',
	CanAcptA2Don:                 '',
	CanAcptAboIncomp:             '',
	CanAcptExtracorpLi:           '',
	CanAcptHbcPos:                '',
	CanAcptHcvPos:                '',
	CanAcptLiSeg:                 '',
	CanAcptOrgOtherTeam:          '',
	CanAcptProcurKi:              '',
	CanAcptProcurLi:              '',
	CanAcptProcurPa:              '',
	CanActivateDt:                '',
	CanAgeAtListing:              '',
	CanAgeInMonthsAtListing:      '',
	CanAnastomosis:               '',
	CanAnesthPriorDeath:          '',
	CanAngina:                    '',
	CanAnginaCad:                 '',
	CanArtificialLi:              '',
	CanAscites:                   '',
	CanBacteriaPerit:             '',
	CanBmi:                       '',
	CanCerebVasc:                 '',
	CanCitizenship:               '',
	CanCognitiveDevelop:          '',
	CanCtpScore:                  '',
	CanDeathDt:                   '',
	CanDgn:                       '',
	CanDgn2:                      '',
	CanDgnOstxt:                  '',
	CanDiab:                      '',
	CanDiabTy:                    '',
	CanDial:                      '',
	CanDrugTreatCopd:             '',
	CanDrugTreatHyperten:         '',
	CanEcmo:                      '',
	CanEducation:                 '',
	CanElectrolyte:               '',
	CanEmplStat:                  '',
	CanEnceph:                    '',
	CanEndwlfu:                   '',
	CanEthnicitySrtr:             '',
	CanExhaustVascAccess:         '',
	CanFollowsOpoAlloc:           '',
	CanFunctnStat:                '',
	CanFungalSepsis:              '',
	CanGender:                    '',
	CanHgtCm:                     '',
	CanHgtWgtDt:                  '',
	CanIabp:                      '',
	CanInitActStatCd:             '',
	CanInitActStatDt:             '',
	CanInitInactStatDt:           '',
	CanInitSrtrLabMeld:           '',
	CanInitSrtrLabMeldTy:         '',
	CanInitStat:                  '',
	CanIvInotrop:                 '',
	CanLastActStatDt:             '',
	CanLastAlbumin:               '',
	CanLastAscites:               '',
	CanLastBili:                  '',
	CanLastDialPriorWeek:         '',
	CanLastEnceph:                '',
	CanLastInactStatDt:           '',
	CanLastInr:                   '',
	CanLastSerumCreat:            '',
	CanLastSerumSodium:           '',
	CanLastSrtrLabMeld:           '',
	CanLastSrtrLabMeldTy:         '',
	CanLastStat:                  '',
	CanLifeSupport:               '',
	CanLifeSupportOther:          '',
	CanListingCtrId:              '',
	CanListingDt:                 '',
	CanListingOpoId:              '',
	CanLivingDonTx:               '',
	CanLiDysfunctn:               '',
	CanLossVascAccess:            '',
	CanMalig:                     '',
	CanMaligTy:                   '',
	CanMaligTyBreast:             '',
	CanMaligTyCnsTumor:           '',
	CanMaligTyGenitourinary:      '',
	CanMaligTyHepblast:           '',
	CanMaligTyHepcarcinoma:       '',
	CanMaligTyLeukLymph:          '',
	CanMaligTyLiver:              '',
	CanMaligTyLu:                 '',
	CanMaligTyOther:              '',
	CanMaligTySkinMel:            '',
	CanMaligTySkinNonMel:         '',
	CanMaligTyThroat:             '',
	CanMaligTyThyroid:            '',
	CanMaligTyUnk:                '',
	CanMaxAge:                    '',
	CanMaxMile:                   '',
	CanMaxWgt:                    '',
	CanMedCond:                   '',
	CanMinAge:                    '',
	CanMinWgt:                    '',
	CanMostRecentCreat:           '',
	CanMostRecentHgtCm:           '',
	CanMostRecentWgtKg:           '',
	CanMotorDevelop:              '',
	CanMuscleWasting:             '',
	CanNeoplasm:                  '',
	CanNewPrevPiTx:               '',
	CanNonReconGi:                '',
	CanPepticUlcer:               '',
	CanPeriphVasc:                '',
	CanPermState:                 '',
	CanPge:                       '',
	CanPhyscCapacity:             '',
	CanPortalVein:                '',
	CanPrelimXmatchRequest:       '',
	CanPrevAbdomSurg:             '',
	CanPrevBoneMarrowDt:          '',
	CanPrevBoneMarrowTx:          '',
	CanPrevHl:                    '',
	CanPrevHr:                    '',
	CanPrevIn:                    '',
	CanPrevKi:                    '',
	CanPrevKp:                    '',
	CanPrevLi:                    '',
	CanPrevLu:                    '',
	CanPrevPa:                    '',
	CanPrevTx:                    '',
	CanPrevTxfus:                 '',
	CanPrimaryPay:                '',
	CanPulmEmbol:                 '',
	CanRace:                      '',
	CanRaceSrtr:                  '',
	CanRecurSepsis:               '',
	CanRemCd:                     '',
	CanRemCod:                    '',
	CanRemDt:                     '',
	CanSecondaryPay:              '',
	CanSource:                    '',
	CanStatExtendFlg:             '',
	CanTiebreakerDt:              '',
	CanTipss:                     '',
	CanTotAlbumin:                '',
	CanTotBili:                   '',
	CanTrrExists:                 '',
	CanTxCountry:                 '',
	CanVadTah:                    '',
	CanVaricealBleeding:          '',
	CanVentilator:                '',
	CanWgtKg:                     '',
	CanWorkIncome:                '',
	CanWorkNoStat:                '',
	CanWorkYesStat:               '',
	CanYearEntryUs:               '',
	DonorId:                      '',
	DonTy:                        '',
	OrgAr:                        '',
	PersId:                       '',
	PersNexttx:                   '',
	PersNexttxTrrId:              '',
	PersOptnDeathDt:              '',
	PersRestrictDeathDt:          '',
	PersRestrictDeathVrfy:        '',
	PersSsaDeathDt:               '',
	PxId:                         '',
	RecTxDt:                      '',
	RecTxProcedureTy:             '',
	WlOrg:                        '',
});

function CanFormReducer(state = initialState, action) {
	switch (action.type) {
		case constants.CHANGE_CANABO:
			return state.set('CanAbo', action.CanAbo);
		case constants.CHANGE_CANACADEMICLEVEL:
			return state.set('CanAcademicLevel', action.CanAcademicLevel);
		case constants.CHANGE_CANACADEMICPROGRESS:
			return state.set('CanAcademicProgress', action.CanAcademicProgress);
		case constants.CHANGE_CANACPTA2DON:
			return state.set('CanAcptA2Don', action.CanAcptA2Don);
		case constants.CHANGE_CANACPTABOINCOMP:
			return state.set('CanAcptAboIncomp', action.CanAcptAboIncomp);
		case constants.CHANGE_CANACPTEXTRACORPLI:
			return state.set('CanAcptExtracorpLi', action.CanAcptExtracorpLi);
		case constants.CHANGE_CANACPTHBCPOS:
			return state.set('CanAcptHbcPos', action.CanAcptHbcPos);
		case constants.CHANGE_CANACPTHCVPOS:
			return state.set('CanAcptHcvPos', action.CanAcptHcvPos);
		case constants.CHANGE_CANACPTLISEG:
			return state.set('CanAcptLiSeg', action.CanAcptLiSeg);
		case constants.CHANGE_CANACPTORGOTHERTEAM:
			return state.set('CanAcptOrgOtherTeam', action.CanAcptOrgOtherTeam);
		case constants.CHANGE_CANACPTPROCURKI:
			return state.set('CanAcptProcurKi', action.CanAcptProcurKi);
		case constants.CHANGE_CANACPTPROCURLI:
			return state.set('CanAcptProcurLi', action.CanAcptProcurLi);
		case constants.CHANGE_CANACPTPROCURPA:
			return state.set('CanAcptProcurPa', action.CanAcptProcurPa);
		case constants.CHANGE_CANACTIVATEDT:
			return state.set('CanActivateDt', action.CanActivateDt);
		case constants.CHANGE_CANAGEATLISTING:
			return state.set('CanAgeAtListing', action.CanAgeAtListing);
		case constants.CHANGE_CANAGEINMONTHSATLISTING:
			return state.set('CanAgeInMonthsAtListing', action.CanAgeInMonthsAtListing);
		case constants.CHANGE_CANANASTOMOSIS:
			return state.set('CanAnastomosis', action.CanAnastomosis);
		case constants.CHANGE_CANANESTHPRIORDEATH:
			return state.set('CanAnesthPriorDeath', action.CanAnesthPriorDeath);
		case constants.CHANGE_CANANGINA:
			return state.set('CanAngina', action.CanAngina);
		case constants.CHANGE_CANANGINACAD:
			return state.set('CanAnginaCad', action.CanAnginaCad);
		case constants.CHANGE_CANARTIFICIALLI:
			return state.set('CanArtificialLi', action.CanArtificialLi);
		case constants.CHANGE_CANASCITES:
			return state.set('CanAscites', action.CanAscites);
		case constants.CHANGE_CANBACTERIAPERIT:
			return state.set('CanBacteriaPerit', action.CanBacteriaPerit);
		case constants.CHANGE_CANBMI:
			return state.set('CanBmi', action.CanBmi);
		case constants.CHANGE_CANCEREBVASC:
			return state.set('CanCerebVasc', action.CanCerebVasc);
		case constants.CHANGE_CANCITIZENSHIP:
			return state.set('CanCitizenship', action.CanCitizenship);
		case constants.CHANGE_CANCOGNITIVEDEVELOP:
			return state.set('CanCognitiveDevelop', action.CanCognitiveDevelop);
		case constants.CHANGE_CANCTPSCORE:
			return state.set('CanCtpScore', action.CanCtpScore);
		case constants.CHANGE_CANDEATHDT:
			return state.set('CanDeathDt', action.CanDeathDt);
		case constants.CHANGE_CANDGN:
			return state.set('CanDgn', action.CanDgn);
		case constants.CHANGE_CANDGN2:
			return state.set('CanDgn2', action.CanDgn2);
		case constants.CHANGE_CANDGNOSTXT:
			return state.set('CanDgnOstxt', action.CanDgnOstxt);
		case constants.CHANGE_CANDIAB:
			return state.set('CanDiab', action.CanDiab);
		case constants.CHANGE_CANDIABTY:
			return state.set('CanDiabTy', action.CanDiabTy);
		case constants.CHANGE_CANDIAL:
			return state.set('CanDial', action.CanDial);
		case constants.CHANGE_CANDRUGTREATCOPD:
			return state.set('CanDrugTreatCopd', action.CanDrugTreatCopd);
		case constants.CHANGE_CANDRUGTREATHYPERTEN:
			return state.set('CanDrugTreatHyperten', action.CanDrugTreatHyperten);
		case constants.CHANGE_CANECMO:
			return state.set('CanEcmo', action.CanEcmo);
		case constants.CHANGE_CANEDUCATION:
			return state.set('CanEducation', action.CanEducation);
		case constants.CHANGE_CANELECTROLYTE:
			return state.set('CanElectrolyte', action.CanElectrolyte);
		case constants.CHANGE_CANEMPLSTAT:
			return state.set('CanEmplStat', action.CanEmplStat);
		case constants.CHANGE_CANENCEPH:
			return state.set('CanEnceph', action.CanEnceph);
		case constants.CHANGE_CANENDWLFU:
			return state.set('CanEndwlfu', action.CanEndwlfu);
		case constants.CHANGE_CANETHNICITYSRTR:
			return state.set('CanEthnicitySrtr', action.CanEthnicitySrtr);
		case constants.CHANGE_CANEXHAUSTVASCACCESS:
			return state.set('CanExhaustVascAccess', action.CanExhaustVascAccess);
		case constants.CHANGE_CANFOLLOWSOPOALLOC:
			return state.set('CanFollowsOpoAlloc', action.CanFollowsOpoAlloc);
		case constants.CHANGE_CANFUNCTNSTAT:
			return state.set('CanFunctnStat', action.CanFunctnStat);
		case constants.CHANGE_CANFUNGALSEPSIS:
			return state.set('CanFungalSepsis', action.CanFungalSepsis);
		case constants.CHANGE_CANGENDER:
			return state.set('CanGender', action.CanGender);
		case constants.CHANGE_CANHGTCM:
			return state.set('CanHgtCm', action.CanHgtCm);
		case constants.CHANGE_CANHGTWGTDT:
			return state.set('CanHgtWgtDt', action.CanHgtWgtDt);
		case constants.CHANGE_CANIABP:
			return state.set('CanIabp', action.CanIabp);
		case constants.CHANGE_CANINITACTSTATCD:
			return state.set('CanInitActStatCd', action.CanInitActStatCd);
		case constants.CHANGE_CANINITACTSTATDT:
			return state.set('CanInitActStatDt', action.CanInitActStatDt);
		case constants.CHANGE_CANINITINACTSTATDT:
			return state.set('CanInitInactStatDt', action.CanInitInactStatDt);
		case constants.CHANGE_CANINITSRTRLABMELD:
			return state.set('CanInitSrtrLabMeld', action.CanInitSrtrLabMeld);
		case constants.CHANGE_CANINITSRTRLABMELDTY:
			return state.set('CanInitSrtrLabMeldTy', action.CanInitSrtrLabMeldTy);
		case constants.CHANGE_CANINITSTAT:
			return state.set('CanInitStat', action.CanInitStat);
		case constants.CHANGE_CANIVINOTROP:
			return state.set('CanIvInotrop', action.CanIvInotrop);
		case constants.CHANGE_CANLASTACTSTATDT:
			return state.set('CanLastActStatDt', action.CanLastActStatDt);
		case constants.CHANGE_CANLASTALBUMIN:
			return state.set('CanLastAlbumin', action.CanLastAlbumin);
		case constants.CHANGE_CANLASTASCITES:
			return state.set('CanLastAscites', action.CanLastAscites);
		case constants.CHANGE_CANLASTBILI:
			return state.set('CanLastBili', action.CanLastBili);
		case constants.CHANGE_CANLASTDIALPRIORWEEK:
			return state.set('CanLastDialPriorWeek', action.CanLastDialPriorWeek);
		case constants.CHANGE_CANLASTENCEPH:
			return state.set('CanLastEnceph', action.CanLastEnceph);
		case constants.CHANGE_CANLASTINACTSTATDT:
			return state.set('CanLastInactStatDt', action.CanLastInactStatDt);
		case constants.CHANGE_CANLASTINR:
			return state.set('CanLastInr', action.CanLastInr);
		case constants.CHANGE_CANLASTSERUMCREAT:
			return state.set('CanLastSerumCreat', action.CanLastSerumCreat);
		case constants.CHANGE_CANLASTSERUMSODIUM:
			return state.set('CanLastSerumSodium', action.CanLastSerumSodium);
		case constants.CHANGE_CANLASTSRTRLABMELD:
			return state.set('CanLastSrtrLabMeld', action.CanLastSrtrLabMeld);
		case constants.CHANGE_CANLASTSRTRLABMELDTY:
			return state.set('CanLastSrtrLabMeldTy', action.CanLastSrtrLabMeldTy);
		case constants.CHANGE_CANLASTSTAT:
			return state.set('CanLastStat', action.CanLastStat);
		case constants.CHANGE_CANLIFESUPPORT:
			return state.set('CanLifeSupport', action.CanLifeSupport);
		case constants.CHANGE_CANLIFESUPPORTOTHER:
			return state.set('CanLifeSupportOther', action.CanLifeSupportOther);
		case constants.CHANGE_CANLISTINGCTRID:
			return state.set('CanListingCtrId', action.CanListingCtrId);
		case constants.CHANGE_CANLISTINGDT:
			return state.set('CanListingDt', action.CanListingDt);
		case constants.CHANGE_CANLISTINGOPOID:
			return state.set('CanListingOpoId', action.CanListingOpoId);
		case constants.CHANGE_CANLIVINGDONTX:
			return state.set('CanLivingDonTx', action.CanLivingDonTx);
		case constants.CHANGE_CANLIDYSFUNCTN:
			return state.set('CanLiDysfunctn', action.CanLiDysfunctn);
		case constants.CHANGE_CANLOSSVASCACCESS:
			return state.set('CanLossVascAccess', action.CanLossVascAccess);
		case constants.CHANGE_CANMALIG:
			return state.set('CanMalig', action.CanMalig);
		case constants.CHANGE_CANMALIGTY:
			return state.set('CanMaligTy', action.CanMaligTy);
		case constants.CHANGE_CANMALIGTYBREAST:
			return state.set('CanMaligTyBreast', action.CanMaligTyBreast);
		case constants.CHANGE_CANMALIGTYCNSTUMOR:
			return state.set('CanMaligTyCnsTumor', action.CanMaligTyCnsTumor);
		case constants.CHANGE_CANMALIGTYGENITOURINARY:
			return state.set('CanMaligTyGenitourinary', action.CanMaligTyGenitourinary);
		case constants.CHANGE_CANMALIGTYHEPBLAST:
			return state.set('CanMaligTyHepblast', action.CanMaligTyHepblast);
		case constants.CHANGE_CANMALIGTYHEPCARCINOMA:
			return state.set('CanMaligTyHepcarcinoma', action.CanMaligTyHepcarcinoma);
		case constants.CHANGE_CANMALIGTYLEUKLYMPH:
			return state.set('CanMaligTyLeukLymph', action.CanMaligTyLeukLymph);
		case constants.CHANGE_CANMALIGTYLIVER:
			return state.set('CanMaligTyLiver', action.CanMaligTyLiver);
		case constants.CHANGE_CANMALIGTYLU:
			return state.set('CanMaligTyLu', action.CanMaligTyLu);
		case constants.CHANGE_CANMALIGTYOTHER:
			return state.set('CanMaligTyOther', action.CanMaligTyOther);
		case constants.CHANGE_CANMALIGTYSKINMEL:
			return state.set('CanMaligTySkinMel', action.CanMaligTySkinMel);
		case constants.CHANGE_CANMALIGTYSKINNONMEL:
			return state.set('CanMaligTySkinNonMel', action.CanMaligTySkinNonMel);
		case constants.CHANGE_CANMALIGTYTHROAT:
			return state.set('CanMaligTyThroat', action.CanMaligTyThroat);
		case constants.CHANGE_CANMALIGTYTHYROID:
			return state.set('CanMaligTyThyroid', action.CanMaligTyThyroid);
		case constants.CHANGE_CANMALIGTYUNK:
			return state.set('CanMaligTyUnk', action.CanMaligTyUnk);
		case constants.CHANGE_CANMAXAGE:
			return state.set('CanMaxAge', action.CanMaxAge);
		case constants.CHANGE_CANMAXMILE:
			return state.set('CanMaxMile', action.CanMaxMile);
		case constants.CHANGE_CANMAXWGT:
			return state.set('CanMaxWgt', action.CanMaxWgt);
		case constants.CHANGE_CANMEDCOND:
			return state.set('CanMedCond', action.CanMedCond);
		case constants.CHANGE_CANMINAGE:
			return state.set('CanMinAge', action.CanMinAge);
		case constants.CHANGE_CANMINWGT:
			return state.set('CanMinWgt', action.CanMinWgt);
		case constants.CHANGE_CANMOSTRECENTCREAT:
			return state.set('CanMostRecentCreat', action.CanMostRecentCreat);
		case constants.CHANGE_CANMOSTRECENTHGTCM:
			return state.set('CanMostRecentHgtCm', action.CanMostRecentHgtCm);
		case constants.CHANGE_CANMOSTRECENTWGTKG:
			return state.set('CanMostRecentWgtKg', action.CanMostRecentWgtKg);
		case constants.CHANGE_CANMOTORDEVELOP:
			return state.set('CanMotorDevelop', action.CanMotorDevelop);
		case constants.CHANGE_CANMUSCLEWASTING:
			return state.set('CanMuscleWasting', action.CanMuscleWasting);
		case constants.CHANGE_CANNEOPLASM:
			return state.set('CanNeoplasm', action.CanNeoplasm);
		case constants.CHANGE_CANNEWPREVPITX:
			return state.set('CanNewPrevPiTx', action.CanNewPrevPiTx);
		case constants.CHANGE_CANNONRECONGI:
			return state.set('CanNonReconGi', action.CanNonReconGi);
		case constants.CHANGE_CANPEPTICULCER:
			return state.set('CanPepticUlcer', action.CanPepticUlcer);
		case constants.CHANGE_CANPERIPHVASC:
			return state.set('CanPeriphVasc', action.CanPeriphVasc);
		case constants.CHANGE_CANPERMSTATE:
			return state.set('CanPermState', action.CanPermState);
		case constants.CHANGE_CANPGE:
			return state.set('CanPge', action.CanPge);
		case constants.CHANGE_CANPHYSCCAPACITY:
			return state.set('CanPhyscCapacity', action.CanPhyscCapacity);
		case constants.CHANGE_CANPORTALVEIN:
			return state.set('CanPortalVein', action.CanPortalVein);
		case constants.CHANGE_CANPRELIMXMATCHREQUEST:
			return state.set('CanPrelimXmatchRequest', action.CanPrelimXmatchRequest);
		case constants.CHANGE_CANPREVABDOMSURG:
			return state.set('CanPrevAbdomSurg', action.CanPrevAbdomSurg);
		case constants.CHANGE_CANPREVBONEMARROWDT:
			return state.set('CanPrevBoneMarrowDt', action.CanPrevBoneMarrowDt);
		case constants.CHANGE_CANPREVBONEMARROWTX:
			return state.set('CanPrevBoneMarrowTx', action.CanPrevBoneMarrowTx);
		case constants.CHANGE_CANPREVHL:
			return state.set('CanPrevHl', action.CanPrevHl);
		case constants.CHANGE_CANPREVHR:
			return state.set('CanPrevHr', action.CanPrevHr);
		case constants.CHANGE_CANPREVIN:
			return state.set('CanPrevIn', action.CanPrevIn);
		case constants.CHANGE_CANPREVKI:
			return state.set('CanPrevKi', action.CanPrevKi);
		case constants.CHANGE_CANPREVKP:
			return state.set('CanPrevKp', action.CanPrevKp);
		case constants.CHANGE_CANPREVLI:
			return state.set('CanPrevLi', action.CanPrevLi);
		case constants.CHANGE_CANPREVLU:
			return state.set('CanPrevLu', action.CanPrevLu);
		case constants.CHANGE_CANPREVPA:
			return state.set('CanPrevPa', action.CanPrevPa);
		case constants.CHANGE_CANPREVTX:
			return state.set('CanPrevTx', action.CanPrevTx);
		case constants.CHANGE_CANPREVTXFUS:
			return state.set('CanPrevTxfus', action.CanPrevTxfus);
		case constants.CHANGE_CANPRIMARYPAY:
			return state.set('CanPrimaryPay', action.CanPrimaryPay);
		case constants.CHANGE_CANPULMEMBOL:
			return state.set('CanPulmEmbol', action.CanPulmEmbol);
		case constants.CHANGE_CANRACE:
			return state.set('CanRace', action.CanRace);
		case constants.CHANGE_CANRACESRTR:
			return state.set('CanRaceSrtr', action.CanRaceSrtr);
		case constants.CHANGE_CANRECURSEPSIS:
			return state.set('CanRecurSepsis', action.CanRecurSepsis);
		case constants.CHANGE_CANREMCD:
			return state.set('CanRemCd', action.CanRemCd);
		case constants.CHANGE_CANREMCOD:
			return state.set('CanRemCod', action.CanRemCod);
		case constants.CHANGE_CANREMDT:
			return state.set('CanRemDt', action.CanRemDt);
		case constants.CHANGE_CANSECONDARYPAY:
			return state.set('CanSecondaryPay', action.CanSecondaryPay);
		case constants.CHANGE_CANSOURCE:
			return state.set('CanSource', action.CanSource);
		case constants.CHANGE_CANSTATEXTENDFLG:
			return state.set('CanStatExtendFlg', action.CanStatExtendFlg);
		case constants.CHANGE_CANTIEBREAKERDT:
			return state.set('CanTiebreakerDt', action.CanTiebreakerDt);
		case constants.CHANGE_CANTIPSS:
			return state.set('CanTipss', action.CanTipss);
		case constants.CHANGE_CANTOTALBUMIN:
			return state.set('CanTotAlbumin', action.CanTotAlbumin);
		case constants.CHANGE_CANTOTBILI:
			return state.set('CanTotBili', action.CanTotBili);
		case constants.CHANGE_CANTRREXISTS:
			return state.set('CanTrrExists', action.CanTrrExists);
		case constants.CHANGE_CANTXCOUNTRY:
			return state.set('CanTxCountry', action.CanTxCountry);
		case constants.CHANGE_CANVADTAH:
			return state.set('CanVadTah', action.CanVadTah);
		case constants.CHANGE_CANVARICEALBLEEDING:
			return state.set('CanVaricealBleeding', action.CanVaricealBleeding);
		case constants.CHANGE_CANVENTILATOR:
			return state.set('CanVentilator', action.CanVentilator);
		case constants.CHANGE_CANWGTKG:
			return state.set('CanWgtKg', action.CanWgtKg);
		case constants.CHANGE_CANWORKINCOME:
			return state.set('CanWorkIncome', action.CanWorkIncome);
		case constants.CHANGE_CANWORKNOSTAT:
			return state.set('CanWorkNoStat', action.CanWorkNoStat);
		case constants.CHANGE_CANWORKYESSTAT:
			return state.set('CanWorkYesStat', action.CanWorkYesStat);
		case constants.CHANGE_CANYEARENTRYUS:
			return state.set('CanYearEntryUs', action.CanYearEntryUs);
		case constants.CHANGE_DONORID:
			return state.set('DonorId', action.DonorId);
		case constants.CHANGE_DONTY:
			return state.set('DonTy', action.DonTy);
		case constants.CHANGE_ORGAR:
			return state.set('OrgAr', action.OrgAr);
		case constants.CHANGE_PERSID:
			return state.set('PersId', action.PersId);
		case constants.CHANGE_PERSNEXTTX:
			return state.set('PersNexttx', action.PersNexttx);
		case constants.CHANGE_PERSNEXTTXTRRID:
			return state.set('PersNexttxTrrId', action.PersNexttxTrrId);
		case constants.CHANGE_PERSOPTNDEATHDT:
			return state.set('PersOptnDeathDt', action.PersOptnDeathDt);
		case constants.CHANGE_PERSRESTRICTDEATHDT:
			return state.set('PersRestrictDeathDt', action.PersRestrictDeathDt);
		case constants.CHANGE_PERSRESTRICTDEATHVRFY:
			return state.set('PersRestrictDeathVrfy', action.PersRestrictDeathVrfy);
		case constants.CHANGE_PERSSSADEATHDT:
			return state.set('PersSsaDeathDt', action.PersSsaDeathDt);
		case constants.CHANGE_PXID:
			return state.set('PxId', action.PxId);
		case constants.CHANGE_RECTXDT:
			return state.set('RecTxDt', action.RecTxDt);
		case constants.CHANGE_RECTXPROCEDURETY:
			return state.set('RecTxProcedureTy', action.RecTxProcedureTy);
		case constants.CHANGE_WLORG:
			return state.set('WlOrg', action.WlOrg);
		default:
			return state;
	}
}

export default CanFormReducer;