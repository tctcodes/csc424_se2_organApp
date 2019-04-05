import { fromJS } from "immutable";
import * as constant from "./constants";

export const initialState = fromJS({
	canAbo:                       null,
	canAcademicLevel:             null,
	canAcademicProgress:          null,
	canAcptA2Don:                 null,
	canAcptAboIncomp:             null,
	canAcptExtracorpLi:           null,
	canAcptHbcPos:                null,
	canAcptHcvPos:                null,
	canAcptLiSeg:                 null,
	canAcptOrgOtherTeam:          null,
	canAcptProcurKi:              null,
	canAcptProcurLi:              null,
	canAcptProcurPa:              null,
	canActivateDt:                null,
	canAgeAtListing:              null,
	canAgeInMonthsAtListing:      null,
	canAnastomosis:               null,
	canAnesthPriorDeath:          null,
	canAngina:                    null,
	canAnginaCad:                 null,
	canArtificialLi:              null,
	canAscites:                   null,
	canBacteriaPerit:             null,
	canBmi:                       null,
	canCerebVasc:                 null,
	canCitizenship:               null,
	canCognitiveDevelop:          null,
	canCtpScore:                  null,
	canDeathDt:                   null,
	canDgn:                       null,
	canDgn2:                      null,
	canDgnOstxt:                  null,
	canDiab:                      null,
	canDiabTy:                    null,
	canDial:                      null,
	canDrugTreatCopd:             null,
	canDrugTreatHyperten:         null,
	canEcmo:                      null,
	canEducation:                 null,
	canElectrolyte:               null,
	canEmplStat:                  null,
	canEnceph:                    null,
	canEndwlfu:                   null,
	canEthnicitySrtr:             null,
	canExhaustVascAccess:         null,
	canFollowsOpoAlloc:           null,
	canFunctnStat:                null,
	canFungalSepsis:              null,
	canGender:                    null,
	canHgtCm:                     null,
	canHgtWgtDt:                  null,
	canIabp:                      null,
	canInitActStatCd:             null,
	canInitActStatDt:             null,
	canInitInactStatDt:           null,
	canInitSrtrLabMeld:           null,
	canInitSrtrLabMeldTy:         null,
	canInitStat:                  null,
	canIvInotrop:                 null,
	canLastActStatDt:             null,
	canLastAlbumin:               null,
	canLastAscites:               null,
	canLastBili:                  null,
	canLastDialPriorWeek:         null,
	canLastEnceph:                null,
	canLastInactStatDt:           null,
	canLastInr:                   null,
	canLastSerumCreat:            null,
	canLastSerumSodium:           null,
	canLastSrtrLabMeld:           null,
	canLastSrtrLabMeldTy:         null,
	canLastStat:                  null,
	canLifeSupport:               null,
	canLifeSupportOther:          null,
	canListingCtrId:              null,
	canListingDt:                 null,
	canListingOpoId:              null,
	canLivingDonTx:               null,
	canLiDysfunctn:               null,
	canLossVascAccess:            null,
	canMalig:                     null,
	canMaligTy:                   null,
	canMaligTyBreast:             null,
	canMaligTyCnsTumor:           null,
	canMaligTyGenitourinary:      null,
	canMaligTyHepblast:           null,
	canMaligTyHepcarcinoma:       null,
	canMaligTyLeukLymph:          null,
	canMaligTyLiver:              null,
	canMaligTyLu:                 null,
	canMaligTyOther:              null,
	canMaligTySkinMel:            null,
	canMaligTySkinNonMel:         null,
	canMaligTyThroat:             null,
	canMaligTyThyroid:            null,
	canMaligTyUnk:                null,
	canMaxAge:                    null,
	canMaxMile:                   null,
	canMaxWgt:                    null,
	canMedCond:                   null,
	canMinAge:                    null,
	canMinWgt:                    null,
	canMostRecentCreat:           null,
	canMostRecentHgtCm:           null,
	canMostRecentWgtKg:           null,
	canMotorDevelop:              null,
	canMuscleWasting:             null,
	canNeoplasm:                  null,
	canNewPrevPiTx:               null,
	canNonReconGi:                null,
	canPepticUlcer:               null,
	canPeriphVasc:                null,
	canPermState:                 null,
	canPge:                       null,
	canPhyscCapacity:             null,
	canPortalVein:                null,
	canPrelimXmatchRequest:       null,
	canPrevAbdomSurg:             null,
	canPrevBoneMarrowDt:          null,
	canPrevBoneMarrowTx:          null,
	canPrevHl:                    null,
	canPrevHr:                    null,
	canPrevIn:                    null,
	canPrevKi:                    null,
	canPrevKp:                    null,
	canPrevLi:                    null,
	canPrevLu:                    null,
	canPrevPa:                    null,
	canPrevTx:                    null,
	canPrevTxfus:                 null,
	canPrimaryPay:                null,
	canPulmEmbol:                 null,
	canRace:                      null,
	canRaceSrtr:                  null,
	canRecurSepsis:               null,
	canRemCd:                     null,
	canRemCod:                    null,
	canRemDt:                     null,
	canSecondaryPay:              null,
	canSource:                    null,
	canStatExtendFlg:             null,
	canTiebreakerDt:              null,
	canTipss:                     null,
	canTotAlbumin:                null,
	canTotBili:                   null,
	canTrrExists:                 null,
	canTxCountry:                 null,
	canVadTah:                    null,
	canVaricealBleeding:          null,
	canVentilator:                null,
	canWgtKg:                     null,
	canWorkIncome:                null,
	canWorkNoStat:                null,
	canWorkYesStat:               null,
	canYearEntryUs:               null,
	donorId:                      null,
	donTy:                        null,
	orgAr:                        null,
	persId:                       null,
	persNexttx:                   null,
	persNexttxTrrId:              null,
	persOptnDeathDt:              null,
	persRestrictDeathDt:          null,
	persRestrictDeathVrfy:        null,
	persSsaDeathDt:               null,
	pxId:                         null,
	recTxDt:                      null,
	recTxProcedureTy:             null,
	wlOrg:                        null,
});

function CanFormReducer(state = initialState, action) {
	switch (action.type) {
		case constant.SET_STATE:
			return state.merge({...action.state});
		case constant.CHANGE_CANABO:
			return state.set('canAbo', action.canAbo);
		case constant.CHANGE_CANACADEMICLEVEL:
			return state.set('canAcademicLevel', action.canAcademicLevel);
		case constant.CHANGE_CANACADEMICPROGRESS:
			return state.set('canAcademicProgress', action.canAcademicProgress);
		case constant.CHANGE_CANACPTA2DON:
			return state.set('canAcptA2Don', action.canAcptA2Don);
		case constant.CHANGE_CANACPTABOINCOMP:
			return state.set('canAcptAboIncomp', action.canAcptAboIncomp);
		case constant.CHANGE_CANACPTEXTRACORPLI:
			return state.set('canAcptExtracorpLi', action.canAcptExtracorpLi);
		case constant.CHANGE_CANACPTHBCPOS:
			return state.set('canAcptHbcPos', action.canAcptHbcPos);
		case constant.CHANGE_CANACPTHCVPOS:
			return state.set('canAcptHcvPos', action.canAcptHcvPos);
		case constant.CHANGE_CANACPTLISEG:
			return state.set('canAcptLiSeg', action.canAcptLiSeg);
		case constant.CHANGE_CANACPTORGOTHERTEAM:
			return state.set('canAcptOrgOtherTeam', action.canAcptOrgOtherTeam);
		case constant.CHANGE_CANACPTPROCURKI:
			return state.set('canAcptProcurKi', action.canAcptProcurKi);
		case constant.CHANGE_CANACPTPROCURLI:
			return state.set('canAcptProcurLi', action.canAcptProcurLi);
		case constant.CHANGE_CANACPTPROCURPA:
			return state.set('canAcptProcurPa', action.canAcptProcurPa);
		case constant.CHANGE_CANACTIVATEDT:
			return state.set('canActivateDt', action.canActivateDt);
		case constant.CHANGE_CANAGEATLISTING:
			return state.set('canAgeAtListing', action.canAgeAtListing);
		case constant.CHANGE_CANAGEINMONTHSATLISTING:
			return state.set('canAgeInMonthsAtListing', action.canAgeInMonthsAtListing);
		case constant.CHANGE_CANANASTOMOSIS:
			return state.set('canAnastomosis', action.canAnastomosis);
		case constant.CHANGE_CANANESTHPRIORDEATH:
			return state.set('canAnesthPriorDeath', action.canAnesthPriorDeath);
		case constant.CHANGE_CANANGINA:
			return state.set('canAngina', action.canAngina);
		case constant.CHANGE_CANANGINACAD:
			return state.set('canAnginaCad', action.canAnginaCad);
		case constant.CHANGE_CANARTIFICIALLI:
			return state.set('canArtificialLi', action.canArtificialLi);
		case constant.CHANGE_CANASCITES:
			return state.set('canAscites', action.canAscites);
		case constant.CHANGE_CANBACTERIAPERIT:
			return state.set('canBacteriaPerit', action.canBacteriaPerit);
		case constant.CHANGE_CANBMI:
			return state.set('canBmi', action.canBmi);
		case constant.CHANGE_CANCEREBVASC:
			return state.set('canCerebVasc', action.canCerebVasc);
		case constant.CHANGE_CANCITIZENSHIP:
			return state.set('canCitizenship', action.canCitizenship);
		case constant.CHANGE_CANCOGNITIVEDEVELOP:
			return state.set('canCognitiveDevelop', action.canCognitiveDevelop);
		case constant.CHANGE_CANCTPSCORE:
			return state.set('canCtpScore', action.canCtpScore);
		case constant.CHANGE_CANDEATHDT:
			return state.set('canDeathDt', action.canDeathDt);
		case constant.CHANGE_CANDGN:
			return state.set('canDgn', action.canDgn);
		case constant.CHANGE_CANDGN2:
			return state.set('canDgn2', action.canDgn2);
		case constant.CHANGE_CANDGNOSTXT:
			return state.set('canDgnOstxt', action.canDgnOstxt);
		case constant.CHANGE_CANDIAB:
			return state.set('canDiab', action.canDiab);
		case constant.CHANGE_CANDIABTY:
			return state.set('canDiabTy', action.canDiabTy);
		case constant.CHANGE_CANDIAL:
			return state.set('canDial', action.canDial);
		case constant.CHANGE_CANDRUGTREATCOPD:
			return state.set('canDrugTreatCopd', action.canDrugTreatCopd);
		case constant.CHANGE_CANDRUGTREATHYPERTEN:
			return state.set('canDrugTreatHyperten', action.canDrugTreatHyperten);
		case constant.CHANGE_CANECMO:
			return state.set('canEcmo', action.canEcmo);
		case constant.CHANGE_CANEDUCATION:
			return state.set('canEducation', action.canEducation);
		case constant.CHANGE_CANELECTROLYTE:
			return state.set('canElectrolyte', action.canElectrolyte);
		case constant.CHANGE_CANEMPLSTAT:
			return state.set('canEmplStat', action.canEmplStat);
		case constant.CHANGE_CANENCEPH:
			return state.set('canEnceph', action.canEnceph);
		case constant.CHANGE_CANENDWLFU:
			return state.set('canEndwlfu', action.canEndwlfu);
		case constant.CHANGE_CANETHNICITYSRTR:
			return state.set('canEthnicitySrtr', action.canEthnicitySrtr);
		case constant.CHANGE_CANEXHAUSTVASCACCESS:
			return state.set('canExhaustVascAccess', action.canExhaustVascAccess);
		case constant.CHANGE_CANFOLLOWSOPOALLOC:
			return state.set('canFollowsOpoAlloc', action.canFollowsOpoAlloc);
		case constant.CHANGE_CANFUNCTNSTAT:
			return state.set('canFunctnStat', action.canFunctnStat);
		case constant.CHANGE_CANFUNGALSEPSIS:
			return state.set('canFungalSepsis', action.canFungalSepsis);
		case constant.CHANGE_CANGENDER:
			return state.set('canGender', action.canGender);
		case constant.CHANGE_CANHGTCM:
			return state.set('canHgtCm', action.canHgtCm);
		case constant.CHANGE_CANHGTWGTDT:
			return state.set('canHgtWgtDt', action.canHgtWgtDt);
		case constant.CHANGE_CANIABP:
			return state.set('canIabp', action.canIabp);
		case constant.CHANGE_CANINITACTSTATCD:
			return state.set('canInitActStatCd', action.canInitActStatCd);
		case constant.CHANGE_CANINITACTSTATDT:
			return state.set('canInitActStatDt', action.canInitActStatDt);
		case constant.CHANGE_CANINITINACTSTATDT:
			return state.set('canInitInactStatDt', action.canInitInactStatDt);
		case constant.CHANGE_CANINITSRTRLABMELD:
			return state.set('canInitSrtrLabMeld', action.canInitSrtrLabMeld);
		case constant.CHANGE_CANINITSRTRLABMELDTY:
			return state.set('canInitSrtrLabMeldTy', action.canInitSrtrLabMeldTy);
		case constant.CHANGE_CANINITSTAT:
			return state.set('canInitStat', action.canInitStat);
		case constant.CHANGE_CANIVINOTROP:
			return state.set('canIvInotrop', action.canIvInotrop);
		case constant.CHANGE_CANLASTACTSTATDT:
			return state.set('canLastActStatDt', action.canLastActStatDt);
		case constant.CHANGE_CANLASTALBUMIN:
			return state.set('canLastAlbumin', action.canLastAlbumin);
		case constant.CHANGE_CANLASTASCITES:
			return state.set('canLastAscites', action.canLastAscites);
		case constant.CHANGE_CANLASTBILI:
			return state.set('canLastBili', action.canLastBili);
		case constant.CHANGE_CANLASTDIALPRIORWEEK:
			return state.set('canLastDialPriorWeek', action.canLastDialPriorWeek);
		case constant.CHANGE_CANLASTENCEPH:
			return state.set('canLastEnceph', action.canLastEnceph);
		case constant.CHANGE_CANLASTINACTSTATDT:
			return state.set('canLastInactStatDt', action.canLastInactStatDt);
		case constant.CHANGE_CANLASTINR:
			return state.set('canLastInr', action.canLastInr);
		case constant.CHANGE_CANLASTSERUMCREAT:
			return state.set('canLastSerumCreat', action.canLastSerumCreat);
		case constant.CHANGE_CANLASTSERUMSODIUM:
			return state.set('canLastSerumSodium', action.canLastSerumSodium);
		case constant.CHANGE_CANLASTSRTRLABMELD:
			return state.set('canLastSrtrLabMeld', action.canLastSrtrLabMeld);
		case constant.CHANGE_CANLASTSRTRLABMELDTY:
			return state.set('canLastSrtrLabMeldTy', action.canLastSrtrLabMeldTy);
		case constant.CHANGE_CANLASTSTAT:
			return state.set('canLastStat', action.canLastStat);
		case constant.CHANGE_CANLIFESUPPORT:
			return state.set('canLifeSupport', action.canLifeSupport);
		case constant.CHANGE_CANLIFESUPPORTOTHER:
			return state.set('canLifeSupportOther', action.canLifeSupportOther);
		case constant.CHANGE_CANLISTINGCTRID:
			return state.set('canListingCtrId', action.canListingCtrId);
		case constant.CHANGE_CANLISTINGDT:
			return state.set('canListingDt', action.canListingDt);
		case constant.CHANGE_CANLISTINGOPOID:
			return state.set('canListingOpoId', action.canListingOpoId);
		case constant.CHANGE_CANLIVINGDONTX:
			return state.set('canLivingDonTx', action.canLivingDonTx);
		case constant.CHANGE_CANLIDYSFUNCTN:
			return state.set('canLiDysfunctn', action.canLiDysfunctn);
		case constant.CHANGE_CANLOSSVASCACCESS:
			return state.set('canLossVascAccess', action.canLossVascAccess);
		case constant.CHANGE_CANMALIG:
			return state.set('canMalig', action.canMalig);
		case constant.CHANGE_CANMALIGTY:
			return state.set('canMaligTy', action.canMaligTy);
		case constant.CHANGE_CANMALIGTYBREAST:
			return state.set('canMaligTyBreast', action.canMaligTyBreast);
		case constant.CHANGE_CANMALIGTYCNSTUMOR:
			return state.set('canMaligTyCnsTumor', action.canMaligTyCnsTumor);
		case constant.CHANGE_CANMALIGTYGENITOURINARY:
			return state.set('canMaligTyGenitourinary', action.canMaligTyGenitourinary);
		case constant.CHANGE_CANMALIGTYHEPBLAST:
			return state.set('canMaligTyHepblast', action.canMaligTyHepblast);
		case constant.CHANGE_CANMALIGTYHEPCARCINOMA:
			return state.set('canMaligTyHepcarcinoma', action.canMaligTyHepcarcinoma);
		case constant.CHANGE_CANMALIGTYLEUKLYMPH:
			return state.set('canMaligTyLeukLymph', action.canMaligTyLeukLymph);
		case constant.CHANGE_CANMALIGTYLIVER:
			return state.set('canMaligTyLiver', action.canMaligTyLiver);
		case constant.CHANGE_CANMALIGTYLU:
			return state.set('canMaligTyLu', action.canMaligTyLu);
		case constant.CHANGE_CANMALIGTYOTHER:
			return state.set('canMaligTyOther', action.canMaligTyOther);
		case constant.CHANGE_CANMALIGTYSKINMEL:
			return state.set('canMaligTySkinMel', action.canMaligTySkinMel);
		case constant.CHANGE_CANMALIGTYSKINNONMEL:
			return state.set('canMaligTySkinNonMel', action.canMaligTySkinNonMel);
		case constant.CHANGE_CANMALIGTYTHROAT:
			return state.set('canMaligTyThroat', action.canMaligTyThroat);
		case constant.CHANGE_CANMALIGTYTHYROID:
			return state.set('canMaligTyThyroid', action.canMaligTyThyroid);
		case constant.CHANGE_CANMALIGTYUNK:
			return state.set('canMaligTyUnk', action.canMaligTyUnk);
		case constant.CHANGE_CANMAXAGE:
			return state.set('canMaxAge', action.canMaxAge);
		case constant.CHANGE_CANMAXMILE:
			return state.set('canMaxMile', action.canMaxMile);
		case constant.CHANGE_CANMAXWGT:
			return state.set('canMaxWgt', action.canMaxWgt);
		case constant.CHANGE_CANMEDCOND:
			return state.set('canMedCond', action.canMedCond);
		case constant.CHANGE_CANMINAGE:
			return state.set('canMinAge', action.canMinAge);
		case constant.CHANGE_CANMINWGT:
			return state.set('canMinWgt', action.canMinWgt);
		case constant.CHANGE_CANMOSTRECENTCREAT:
			return state.set('canMostRecentCreat', action.canMostRecentCreat);
		case constant.CHANGE_CANMOSTRECENTHGTCM:
			return state.set('canMostRecentHgtCm', action.canMostRecentHgtCm);
		case constant.CHANGE_CANMOSTRECENTWGTKG:
			return state.set('canMostRecentWgtKg', action.canMostRecentWgtKg);
		case constant.CHANGE_CANMOTORDEVELOP:
			return state.set('canMotorDevelop', action.canMotorDevelop);
		case constant.CHANGE_CANMUSCLEWASTING:
			return state.set('canMuscleWasting', action.canMuscleWasting);
		case constant.CHANGE_CANNEOPLASM:
			return state.set('canNeoplasm', action.canNeoplasm);
		case constant.CHANGE_CANNEWPREVPITX:
			return state.set('canNewPrevPiTx', action.canNewPrevPiTx);
		case constant.CHANGE_CANNONRECONGI:
			return state.set('canNonReconGi', action.canNonReconGi);
		case constant.CHANGE_CANPEPTICULCER:
			return state.set('canPepticUlcer', action.canPepticUlcer);
		case constant.CHANGE_CANPERIPHVASC:
			return state.set('canPeriphVasc', action.canPeriphVasc);
		case constant.CHANGE_CANPERMSTATE:
			return state.set('canPermState', action.canPermState);
		case constant.CHANGE_CANPGE:
			return state.set('canPge', action.canPge);
		case constant.CHANGE_CANPHYSCCAPACITY:
			return state.set('canPhyscCapacity', action.canPhyscCapacity);
		case constant.CHANGE_CANPORTALVEIN:
			return state.set('canPortalVein', action.canPortalVein);
		case constant.CHANGE_CANPRELIMXMATCHREQUEST:
			return state.set('canPrelimXmatchRequest', action.canPrelimXmatchRequest);
		case constant.CHANGE_CANPREVABDOMSURG:
			return state.set('canPrevAbdomSurg', action.canPrevAbdomSurg);
		case constant.CHANGE_CANPREVBONEMARROWDT:
			return state.set('canPrevBoneMarrowDt', action.canPrevBoneMarrowDt);
		case constant.CHANGE_CANPREVBONEMARROWTX:
			return state.set('canPrevBoneMarrowTx', action.canPrevBoneMarrowTx);
		case constant.CHANGE_CANPREVHL:
			return state.set('canPrevHl', action.canPrevHl);
		case constant.CHANGE_CANPREVHR:
			return state.set('canPrevHr', action.canPrevHr);
		case constant.CHANGE_CANPREVIN:
			return state.set('canPrevIn', action.canPrevIn);
		case constant.CHANGE_CANPREVKI:
			return state.set('canPrevKi', action.canPrevKi);
		case constant.CHANGE_CANPREVKP:
			return state.set('canPrevKp', action.canPrevKp);
		case constant.CHANGE_CANPREVLI:
			return state.set('canPrevLi', action.canPrevLi);
		case constant.CHANGE_CANPREVLU:
			return state.set('canPrevLu', action.canPrevLu);
		case constant.CHANGE_CANPREVPA:
			return state.set('canPrevPa', action.canPrevPa);
		case constant.CHANGE_CANPREVTX:
			return state.set('canPrevTx', action.canPrevTx);
		case constant.CHANGE_CANPREVTXFUS:
			return state.set('canPrevTxfus', action.canPrevTxfus);
		case constant.CHANGE_CANPRIMARYPAY:
			return state.set('canPrimaryPay', action.canPrimaryPay);
		case constant.CHANGE_CANPULMEMBOL:
			return state.set('canPulmEmbol', action.canPulmEmbol);
		case constant.CHANGE_CANRACE:
			return state.set('canRace', action.canRace);
		case constant.CHANGE_CANRACESRTR:
			return state.set('canRaceSrtr', action.canRaceSrtr);
		case constant.CHANGE_CANRECURSEPSIS:
			return state.set('canRecurSepsis', action.canRecurSepsis);
		case constant.CHANGE_CANREMCD:
			return state.set('canRemCd', action.canRemCd);
		case constant.CHANGE_CANREMCOD:
			return state.set('canRemCod', action.canRemCod);
		case constant.CHANGE_CANREMDT:
			return state.set('canRemDt', action.canRemDt);
		case constant.CHANGE_CANSECONDARYPAY:
			return state.set('canSecondaryPay', action.canSecondaryPay);
		case constant.CHANGE_CANSOURCE:
			return state.set('canSource', action.canSource);
		case constant.CHANGE_CANSTATEXTENDFLG:
			return state.set('canStatExtendFlg', action.canStatExtendFlg);
		case constant.CHANGE_CANTIEBREAKERDT:
			return state.set('canTiebreakerDt', action.canTiebreakerDt);
		case constant.CHANGE_CANTIPSS:
			return state.set('canTipss', action.canTipss);
		case constant.CHANGE_CANTOTALBUMIN:
			return state.set('canTotAlbumin', action.canTotAlbumin);
		case constant.CHANGE_CANTOTBILI:
			return state.set('canTotBili', action.canTotBili);
		case constant.CHANGE_CANTRREXISTS:
			return state.set('canTrrExists', action.canTrrExists);
		case constant.CHANGE_CANTXCOUNTRY:
			return state.set('canTxCountry', action.canTxCountry);
		case constant.CHANGE_CANVADTAH:
			return state.set('canVadTah', action.canVadTah);
		case constant.CHANGE_CANVARICEALBLEEDING:
			return state.set('canVaricealBleeding', action.canVaricealBleeding);
		case constant.CHANGE_CANVENTILATOR:
			return state.set('canVentilator', action.canVentilator);
		case constant.CHANGE_CANWGTKG:
			return state.set('canWgtKg', action.canWgtKg);
		case constant.CHANGE_CANWORKINCOME:
			return state.set('canWorkIncome', action.canWorkIncome);
		case constant.CHANGE_CANWORKNOSTAT:
			return state.set('canWorkNoStat', action.canWorkNoStat);
		case constant.CHANGE_CANWORKYESSTAT:
			return state.set('canWorkYesStat', action.canWorkYesStat);
		case constant.CHANGE_CANYEARENTRYUS:
			return state.set('canYearEntryUs', action.canYearEntryUs);
		case constant.CHANGE_DONORID:
			return state.set('donorId', action.donorId);
		case constant.CHANGE_DONTY:
			return state.set('donTy', action.donTy);
		case constant.CHANGE_ORGAR:
			return state.set('orgAr', action.orgAr);
		case constant.CHANGE_PERSID:
			return state.set('persId', action.persId);
		case constant.CHANGE_PERSNEXTTX:
			return state.set('persNexttx', action.persNexttx);
		case constant.CHANGE_PERSNEXTTXTRRID:
			return state.set('persNexttxTrrId', action.persNexttxTrrId);
		case constant.CHANGE_PERSOPTNDEATHDT:
			return state.set('persOptnDeathDt', action.persOptnDeathDt);
		case constant.CHANGE_PERSRESTRICTDEATHDT:
			return state.set('persRestrictDeathDt', action.persRestrictDeathDt);
		case constant.CHANGE_PERSRESTRICTDEATHVRFY:
			return state.set('persRestrictDeathVrfy', action.persRestrictDeathVrfy);
		case constant.CHANGE_PERSSSADEATHDT:
			return state.set('persSsaDeathDt', action.persSsaDeathDt);
		case constant.CHANGE_PXID:
			return state.set('pxId', action.pxId);
		case constant.CHANGE_RECTXDT:
			return state.set('recTxDt', action.recTxDt);
		case constant.CHANGE_RECTXPROCEDURETY:
			return state.set('recTxProcedureTy', action.recTxProcedureTy);
		case constant.CHANGE_WLORG:
			return state.set('wlOrg', action.wlOrg);
		default:
			 return state;
	}
}

export default CanFormReducer;