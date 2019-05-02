import { fromJS } from "immutable";
import * as constant from "./constants";

export const initialState = fromJS({
	canhxMpxcptHccApplyInd:       "",
	canhxMpxcptHccApproveInd:     "",
	canAbo:                       "",
	canAgeAtListing:              "",
	canAgeInMonthsAtListing:      "",
	canAngina:                    "",
	canAnginaCad:                 "",
	canBacteriaPerit:             "",
	canCerebVasc:                 "",
	canCitizenship:               "",
	canDgn:                       "",
	canDgn2:                      "",
	canDiab:                      "",
	canDiabTy:                    "",
	canDrugTreatCopd:             "",
	canDrugTreatHyperten:         "",
	canEducation:                 "",
	canEthnicitySrtr:             "",
	canGender:                    "",
	canHgtCm:                     "",
	canInitActStatCd:             "",
	canInitActStatDt:             "",
	canInitInactStatDt:           "",
	canInitSrtrLabMeld:           "",
	canInitSrtrLabMeldTy:         "",
	canInitStat:                  "",
	canLastActStatDt:             "",
	canLastAlbumin:               "",
	canLastAscites:               "",
	canLastBili:                  "",
	canLastDialPriorWeek:         "",
	canLastEnceph:                "",
	canLastInactStatDt:           "",
	canLastInr:                   "",
	canLastSerumCreat:            "",
	canLastSerumSodium:           "",
	canLastSrtrLabMeld:           "",
	canLastSrtrLabMeldTy:         "",
	canLastStat:                  "",
	canListingDt:                 "",
	canMalig:                     "",
	canPepticUlcer:               "",
	canPeriphVasc:                "",
	canPortalVein:                "",
	canPrevAbdomSurg:             "",
	canPrevHl:                    "",
	canPrevHr:                    "",
	canPrevIn:                    "",
	canPrevKi:                    "",
	canPrevKp:                    "",
	canPrevLi:                    "",
	canPrevLu:                    "",
	canPrevPa:                    "",
	canPrevTx:                    "",
	canPrevTxfus:                 "",
	canPulmEmbol:                 "",
	canRace:                      "",
	canRaceSrtr:                  "",
	canRemCd:                     "",
	canSource:                    "",
	canTipss:                     "",
	canTotAlbumin:                "",
	canWgtKg:                     "",
	donorId:                      "",
	donorIdVessel:                "",
	donA1:                        "",
	donA2:                        "",
	donAbo:                       "",
	donAge:                       "",
	donAgeInMonths:               "",
	donAntiCmv:                   "",
	donAntiHcv:                   "",
	donB1:                        "",
	donB2:                        "",
	donCadDonCod:                 "",
	donCardiacArrestAfterDeath:   "",
	donCitizenship:               "",
	donCmvIgg:                    "",
	donCodDonStroke:              "",
	donContCigarette:             "",
	donContCocaine:               "",
	donContIvDrug:                "",
	donContOtherDrug:             "",
	donCreat:                     "",
	donDdavp:                     "",
	donDeathCircum:               "",
	donDeathMech:                 "",
	donDobutamine:                "",
	donDopamine:                  "",
	donDr1:                       "",
	donDr2:                       "",
	donEthnicitySrtr:             "",
	donExpandDonKi:               "",
	donGender:                    "",
	donHaploTyMatch:              "",
	donHgtCm:                     "",
	donHighCreat:                 "",
	donHistCancer:                "",
	donHistCigaretteGt20Pkyr:     "",
	donHistCocaine:               "",
	donHistDiab:                  "",
	donHistHyperten:              "",
	donHistIvDrug:                "",
	donHistOtherDrug:             "",
	donHtn:                       "",
	donInotropAgentGe3:           "",
	donInotropSupport:            "",
	donInsulin:                   "",
	donLivingDonCod:              "",
	donLiBiopsy:                  "",
	donMeetCdcHighRisk:           "",
	donNonHrBeat:                 "",
	donOpoCtrId:                  "",
	donOrgShared:                 "",
	donPh:                        "",
	donPrerecovDiuretics:         "",
	donRace:                      "",
	donRaceSrtr:                  "",
	donRecovDt:                   "",
	donRelationshipTy:            "",
	donSgot:                      "",
	donSgotPreop:                 "",
	donSgptPreop:                 "",
	donTy:                        "",
	donWarmIschTmMins:            "",
	donWgtKg:                     "",
	orgAr:                        "",
	orgTy:                        "",
	persId:                       "",
	persOptnCod:                  "",
	persOptnDeathDt:              "",
	persRelist:                   "",
	persRestrictDeathDt:          "",
	persRestrictDeathVrfy:        "",
	persRetx:                     "",
	persRetxTrrId:                "",
	persSsaDeathDt:               "",
	pxId:                         "",
	recA1:                        "",
	recA2:                        "",
	recAcademicLevel:             "",
	recAcademicProgress:          "",
	recAcuteRejBiopsyConfirmed:   "",
	recAcuteRejEpisode:           "",
	recAdmissionDt:               "",
	recAgeAtTx:                   "",
	recAgeInMonthsAtTx:           "",
	recAntivrlTherapy:            "",
	recAntivrlTherapyTy:          "",
	recAntivrlTherapyTyAcyclovir: "",
	recAntivrlTherapyTyCytogam:   "",
	recAntivrlTherapyTyCytovene:  "",
	recAntivrlTherapyTyEpivir:    "",
	recAntivrlTherapyTyFluVac:    "",
	recAntivrlTherapyTyGamimune:  "",
	recAntivrlTherapyTyGammagard: "",
	recAntivrlTherapyTyHbig:      "",
	recAntivrlTherapyTyOther:     "",
	recAntivrlTherapyTyValcyte:   "",
	recAntivrlTherapyTyValtrex:   "",
	recArtificialLi:              "",
	recAscites:                   "",
	recAMmEquivCur:               "",
	recAMmEquivTx:                "",
	recB1:                        "",
	recB2:                        "",
	recBacteriaPerit:             "",
	recBmi:                       "",
	recBMmEquivCur:               "",
	recBMmEquivTx:                "",
	recCmvIgg:                    "",
	recCmvIgm:                    "",
	recCmvStat:                   "",
	recCod:                       "",
	recCod2:                      "",
	recCod3:                      "",
	recCognitiveDevelop:          "",
	recColdIschTm:                "",
	recCtrId:                     "",
	recCurCtrId:                  "",
	recCurPxStat:                 "",
	recDgn:                       "",
	recDgn2:                      "",
	recDgnOstxt:                  "",
	recDischrgAlbumin:            "",
	recDischrgAlkphos:            "",
	recDischrgCreat:              "",
	recDischrgDt:                 "",
	recDischrgInr:                "",
	recDischrgLabDt:              "",
	recDischrgSgot:               "",
	recDischrgSgpt:               "",
	recDr1:                       "",
	recDr2:                       "",
	recDrMmEquivCur:              "",
	recDrMmEquivTx:               "",
	recEbvStat:                   "",
	recEmplStatPre04:             "",
	recFailBiliary:               "",
	recFailDt:                    "",
	recFailHepDenovo:             "",
	recFailHepRecur:              "",
	recFailInfect:                "",
	recFailPrimeGraftFail:        "",
	recFailRecurDisease:          "",
	recFailRejAcute:              "",
	recFailVascThromb:            "",
	recFunctnStat:                "",
	recGraftStat:                 "",
	recHbvAntibody:               "",
	recHbvSurfAntigen:            "",
	recHcvStat:                   "",
	recHepaticArterThromb:        "",
	recHepaticOutflowObstruct:    "",
	recHgtCm:                     "",
	recHgtWgtDt:                  "",
	recHistoTxId:                 "",
	recHivStat:                   "",
	recHosp90Days:                "",
	recImmunoMaintMeds:           "",
	recInotropBpSupport:          "",
	recLifeSupport:               "",
	recLifeSupportOther:          "",
	recLiTy:                      "",
	recMalig:                     "",
	recMaligTy:                   "",
	recMaligTyBreast:             "",
	recMaligTyCnsTumor:           "",
	recMaligTyGenitourinary:      "",
	recMaligTyHepblast:           "",
	recMaligTyHepcarcinoma:       "",
	recMaligTyLeukLymph:          "",
	recMaligTyLiver:              "",
	recMaligTyLu:                 "",
	recMaligTyOther:              "",
	recMaligTySkinMel:            "",
	recMaligTySkinNonMel:         "",
	recMaligTyThroat:             "",
	recMaligTyThyroid:            "",
	recMaligTyUnk:                "",
	recMedCond:                   "",
	recMmEquivCur:                "",
	recMmEquivTx:                 "",
	recMotorDevelop:              "",
	recOnVentilator:              "",
	recOpoId:                     "",
	recOtherTherapy:              "",
	recOtherTherapyTy:            "",
	recOtherTherapyTyPhotoph:     "",
	recOtherTherapyTyPlasmaph:    "",
	recOtherTherapyTyTli:         "",
	recPbCredit:                  "",
	recPbDebt:                    "",
	recPbShareTy:                 "",
	recPermState:                 "",
	recPhyscCapacity:             "",
	recPortalHypertenBleed:       "",
	recPortalVein:                "",
	recPortalVeinThromb:          "",
	recPostxLos:                  "",
	recPretxAlbumin:              "",
	recPretxCreat:                "",
	recPretxInr:                  "",
	recPretxLabDt:                "",
	recPretxTotBili:              "",
	recPrevAbdomSurg:             "",
	recPrevHl:                    "",
	recPrevHr:                    "",
	recPrevIn:                    "",
	recPrevKi:                    "",
	recPrevKp:                    "",
	recPrevLi:                    "",
	recPrevLu:                    "",
	recPrevNonfunctnTx:           "",
	recPrevPa:                    "",
	recPrimaryPay:                "",
	recProcedureTyLi:             "",
	recPxResearch:                "",
	recPxStat:                    "",
	recPxStatDt:                  "",
	recSecondaryPay:              "",
	recSgpt:                      "",
	recTipss:                     "",
	recToleranceInductionTech:    "",
	recTumor:                     "",
	recTumorTy:                   "",
	recTxferCtrId:                "",
	recTxferDt:                   "",
	recTxDt:                      "",
	recTxExtraVessel:             "",
	recTxOrgTy:                   "",
	recTxProcedureTy:             "",
	recTxTy:                      "",
	recValcyte:                   "",
	recVaricealBleeding:          "",
	recVentilator:                "",
	recWarmIschTm:                "",
	recWgtKg:                     "",
	recWorkIncome:                "",
	recWorkNoStat:                "",
	recWorkYesStat:               "",
	tflCod:                       "",
	tflDeathDt:                   "",
	tflEndtxfu:                   "",
	tflGraftDt:                   "",
	tflLafudate:                  "",
	tflLastatus:                  "",
	trrId:                        "",
	txId:                         "",
});

function TxLiFormReducer(state = initialState, action) {
	switch (action.type) {
		case constant.CHANGE_CANHXMPXCPTHCCAPPLYIND:
			return state.set('canhxMpxcptHccApplyInd', action.canhxMpxcptHccApplyInd);
		case constant.CHANGE_CANHXMPXCPTHCCAPPROVEIND:
			return state.set('canhxMpxcptHccApproveInd', action.canhxMpxcptHccApproveInd);
		case constant.CHANGE_CANABO:
			return state.set('canAbo', action.canAbo);
		case constant.CHANGE_CANAGEATLISTING:
			return state.set('canAgeAtListing', action.canAgeAtListing);
		case constant.CHANGE_CANAGEINMONTHSATLISTING:
			return state.set('canAgeInMonthsAtListing', action.canAgeInMonthsAtListing);
		case constant.CHANGE_CANANGINA:
			return state.set('canAngina', action.canAngina);
		case constant.CHANGE_CANANGINACAD:
			return state.set('canAnginaCad', action.canAnginaCad);
		case constant.CHANGE_CANBACTERIAPERIT:
			return state.set('canBacteriaPerit', action.canBacteriaPerit);
		case constant.CHANGE_CANCEREBVASC:
			return state.set('canCerebVasc', action.canCerebVasc);
		case constant.CHANGE_CANCITIZENSHIP:
			return state.set('canCitizenship', action.canCitizenship);
		case constant.CHANGE_CANDGN:
			return state.set('canDgn', action.canDgn);
		case constant.CHANGE_CANDGN2:
			return state.set('canDgn2', action.canDgn2);
		case constant.CHANGE_CANDIAB:
			return state.set('canDiab', action.canDiab);
		case constant.CHANGE_CANDIABTY:
			return state.set('canDiabTy', action.canDiabTy);
		case constant.CHANGE_CANDRUGTREATCOPD:
			return state.set('canDrugTreatCopd', action.canDrugTreatCopd);
		case constant.CHANGE_CANDRUGTREATHYPERTEN:
			return state.set('canDrugTreatHyperten', action.canDrugTreatHyperten);
		case constant.CHANGE_CANEDUCATION:
			return state.set('canEducation', action.canEducation);
		case constant.CHANGE_CANETHNICITYSRTR:
			return state.set('canEthnicitySrtr', action.canEthnicitySrtr);
		case constant.CHANGE_CANGENDER:
			return state.set('canGender', action.canGender);
		case constant.CHANGE_CANHGTCM:
			return state.set('canHgtCm', action.canHgtCm);
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
		case constant.CHANGE_CANLISTINGDT:
			return state.set('canListingDt', action.canListingDt);
		case constant.CHANGE_CANMALIG:
			return state.set('canMalig', action.canMalig);
		case constant.CHANGE_CANPEPTICULCER:
			return state.set('canPepticUlcer', action.canPepticUlcer);
		case constant.CHANGE_CANPERIPHVASC:
			return state.set('canPeriphVasc', action.canPeriphVasc);
		case constant.CHANGE_CANPORTALVEIN:
			return state.set('canPortalVein', action.canPortalVein);
		case constant.CHANGE_CANPREVABDOMSURG:
			return state.set('canPrevAbdomSurg', action.canPrevAbdomSurg);
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
		case constant.CHANGE_CANPULMEMBOL:
			return state.set('canPulmEmbol', action.canPulmEmbol);
		case constant.CHANGE_CANRACE:
			return state.set('canRace', action.canRace);
		case constant.CHANGE_CANRACESRTR:
			return state.set('canRaceSrtr', action.canRaceSrtr);
		case constant.CHANGE_CANREMCD:
			return state.set('canRemCd', action.canRemCd);
		case constant.CHANGE_CANSOURCE:
			return state.set('canSource', action.canSource);
		case constant.CHANGE_CANTIPSS:
			return state.set('canTipss', action.canTipss);
		case constant.CHANGE_CANTOTALBUMIN:
			return state.set('canTotAlbumin', action.canTotAlbumin);
		case constant.CHANGE_CANWGTKG:
			return state.set('canWgtKg', action.canWgtKg);
		case constant.CHANGE_DONORID:
			return state.set('donorId', action.donorId);
		case constant.CHANGE_DONORIDVESSEL:
			return state.set('donorIdVessel', action.donorIdVessel);
		case constant.CHANGE_DONA1:
			return state.set('donA1', action.donA1);
		case constant.CHANGE_DONA2:
			return state.set('donA2', action.donA2);
		case constant.CHANGE_DONABO:
			return state.set('donAbo', action.donAbo);
		case constant.CHANGE_DONAGE:
			return state.set('donAge', action.donAge);
		case constant.CHANGE_DONAGEINMONTHS:
			return state.set('donAgeInMonths', action.donAgeInMonths);
		case constant.CHANGE_DONANTICMV:
			return state.set('donAntiCmv', action.donAntiCmv);
		case constant.CHANGE_DONANTIHCV:
			return state.set('donAntiHcv', action.donAntiHcv);
		case constant.CHANGE_DONB1:
			return state.set('donB1', action.donB1);
		case constant.CHANGE_DONB2:
			return state.set('donB2', action.donB2);
		case constant.CHANGE_DONCADDONCOD:
			return state.set('donCadDonCod', action.donCadDonCod);
		case constant.CHANGE_DONCARDIACARRESTAFTERDEATH:
			return state.set('donCardiacArrestAfterDeath', action.donCardiacArrestAfterDeath);
		case constant.CHANGE_DONCITIZENSHIP:
			return state.set('donCitizenship', action.donCitizenship);
		case constant.CHANGE_DONCMVIGG:
			return state.set('donCmvIgg', action.donCmvIgg);
		case constant.CHANGE_DONCODDONSTROKE:
			return state.set('donCodDonStroke', action.donCodDonStroke);
		case constant.CHANGE_DONCONTCIGARETTE:
			return state.set('donContCigarette', action.donContCigarette);
		case constant.CHANGE_DONCONTCOCAINE:
			return state.set('donContCocaine', action.donContCocaine);
		case constant.CHANGE_DONCONTIVDRUG:
			return state.set('donContIvDrug', action.donContIvDrug);
		case constant.CHANGE_DONCONTOTHERDRUG:
			return state.set('donContOtherDrug', action.donContOtherDrug);
		case constant.CHANGE_DONCREAT:
			return state.set('donCreat', action.donCreat);
		case constant.CHANGE_DONDDAVP:
			return state.set('donDdavp', action.donDdavp);
		case constant.CHANGE_DONDEATHCIRCUM:
			return state.set('donDeathCircum', action.donDeathCircum);
		case constant.CHANGE_DONDEATHMECH:
			return state.set('donDeathMech', action.donDeathMech);
		case constant.CHANGE_DONDOBUTAMINE:
			return state.set('donDobutamine', action.donDobutamine);
		case constant.CHANGE_DONDOPAMINE:
			return state.set('donDopamine', action.donDopamine);
		case constant.CHANGE_DONDR1:
			return state.set('donDr1', action.donDr1);
		case constant.CHANGE_DONDR2:
			return state.set('donDr2', action.donDr2);
		case constant.CHANGE_DONETHNICITYSRTR:
			return state.set('donEthnicitySrtr', action.donEthnicitySrtr);
		case constant.CHANGE_DONEXPANDDONKI:
			return state.set('donExpandDonKi', action.donExpandDonKi);
		case constant.CHANGE_DONGENDER:
			return state.set('donGender', action.donGender);
		case constant.CHANGE_DONHAPLOTYMATCH:
			return state.set('donHaploTyMatch', action.donHaploTyMatch);
		case constant.CHANGE_DONHGTCM:
			return state.set('donHgtCm', action.donHgtCm);
		case constant.CHANGE_DONHIGHCREAT:
			return state.set('donHighCreat', action.donHighCreat);
		case constant.CHANGE_DONHISTCANCER:
			return state.set('donHistCancer', action.donHistCancer);
		case constant.CHANGE_DONHISTCIGARETTEGT20PKYR:
			return state.set('donHistCigaretteGt20Pkyr', action.donHistCigaretteGt20Pkyr);
		case constant.CHANGE_DONHISTCOCAINE:
			return state.set('donHistCocaine', action.donHistCocaine);
		case constant.CHANGE_DONHISTDIAB:
			return state.set('donHistDiab', action.donHistDiab);
		case constant.CHANGE_DONHISTHYPERTEN:
			return state.set('donHistHyperten', action.donHistHyperten);
		case constant.CHANGE_DONHISTIVDRUG:
			return state.set('donHistIvDrug', action.donHistIvDrug);
		case constant.CHANGE_DONHISTOTHERDRUG:
			return state.set('donHistOtherDrug', action.donHistOtherDrug);
		case constant.CHANGE_DONHTN:
			return state.set('donHtn', action.donHtn);
		case constant.CHANGE_DONINOTROPAGENTGE3:
			return state.set('donInotropAgentGe3', action.donInotropAgentGe3);
		case constant.CHANGE_DONINOTROPSUPPORT:
			return state.set('donInotropSupport', action.donInotropSupport);
		case constant.CHANGE_DONINSULIN:
			return state.set('donInsulin', action.donInsulin);
		case constant.CHANGE_DONLIVINGDONCOD:
			return state.set('donLivingDonCod', action.donLivingDonCod);
		case constant.CHANGE_DONLIBIOPSY:
			return state.set('donLiBiopsy', action.donLiBiopsy);
		case constant.CHANGE_DONMEETCDCHIGHRISK:
			return state.set('donMeetCdcHighRisk', action.donMeetCdcHighRisk);
		case constant.CHANGE_DONNONHRBEAT:
			return state.set('donNonHrBeat', action.donNonHrBeat);
		case constant.CHANGE_DONOPOCTRID:
			return state.set('donOpoCtrId', action.donOpoCtrId);
		case constant.CHANGE_DONORGSHARED:
			return state.set('donOrgShared', action.donOrgShared);
		case constant.CHANGE_DONPH:
			return state.set('donPh', action.donPh);
		case constant.CHANGE_DONPRERECOVDIURETICS:
			return state.set('donPrerecovDiuretics', action.donPrerecovDiuretics);
		case constant.CHANGE_DONRACE:
			return state.set('donRace', action.donRace);
		case constant.CHANGE_DONRACESRTR:
			return state.set('donRaceSrtr', action.donRaceSrtr);
		case constant.CHANGE_DONRECOVDT:
			return state.set('donRecovDt', action.donRecovDt);
		case constant.CHANGE_DONRELATIONSHIPTY:
			return state.set('donRelationshipTy', action.donRelationshipTy);
		case constant.CHANGE_DONSGOT:
			return state.set('donSgot', action.donSgot);
		case constant.CHANGE_DONSGOTPREOP:
			return state.set('donSgotPreop', action.donSgotPreop);
		case constant.CHANGE_DONSGPTPREOP:
			return state.set('donSgptPreop', action.donSgptPreop);
		case constant.CHANGE_DONTY:
			return state.set('donTy', action.donTy);
		case constant.CHANGE_DONWARMISCHTMMINS:
			return state.set('donWarmIschTmMins', action.donWarmIschTmMins);
		case constant.CHANGE_DONWGTKG:
			return state.set('donWgtKg', action.donWgtKg);
		case constant.CHANGE_ORGAR:
			return state.set('orgAr', action.orgAr);
		case constant.CHANGE_ORGTY:
			return state.set('orgTy', action.orgTy);
		case constant.CHANGE_PERSID:
			return state.set('persId', action.persId);
		case constant.CHANGE_PERSOPTNCOD:
			return state.set('persOptnCod', action.persOptnCod);
		case constant.CHANGE_PERSOPTNDEATHDT:
			return state.set('persOptnDeathDt', action.persOptnDeathDt);
		case constant.CHANGE_PERSRELIST:
			return state.set('persRelist', action.persRelist);
		case constant.CHANGE_PERSRESTRICTDEATHDT:
			return state.set('persRestrictDeathDt', action.persRestrictDeathDt);
		case constant.CHANGE_PERSRESTRICTDEATHVRFY:
			return state.set('persRestrictDeathVrfy', action.persRestrictDeathVrfy);
		case constant.CHANGE_PERSRETX:
			return state.set('persRetx', action.persRetx);
		case constant.CHANGE_PERSRETXTRRID:
			return state.set('persRetxTrrId', action.persRetxTrrId);
		case constant.CHANGE_PERSSSADEATHDT:
			return state.set('persSsaDeathDt', action.persSsaDeathDt);
		case constant.CHANGE_PXID:
			return state.set('pxId', action.pxId);
		case constant.CHANGE_RECA1:
			return state.set('recA1', action.recA1);
		case constant.CHANGE_RECA2:
			return state.set('recA2', action.recA2);
		case constant.CHANGE_RECACADEMICLEVEL:
			return state.set('recAcademicLevel', action.recAcademicLevel);
		case constant.CHANGE_RECACADEMICPROGRESS:
			return state.set('recAcademicProgress', action.recAcademicProgress);
		case constant.CHANGE_RECACUTEREJBIOPSYCONFIRMED:
			return state.set('recAcuteRejBiopsyConfirmed', action.recAcuteRejBiopsyConfirmed);
		case constant.CHANGE_RECACUTEREJEPISODE:
			return state.set('recAcuteRejEpisode', action.recAcuteRejEpisode);
		case constant.CHANGE_RECADMISSIONDT:
			return state.set('recAdmissionDt', action.recAdmissionDt);
		case constant.CHANGE_RECAGEATTX:
			return state.set('recAgeAtTx', action.recAgeAtTx);
		case constant.CHANGE_RECAGEINMONTHSATTX:
			return state.set('recAgeInMonthsAtTx', action.recAgeInMonthsAtTx);
		case constant.CHANGE_RECANTIVRLTHERAPY:
			return state.set('recAntivrlTherapy', action.recAntivrlTherapy);
		case constant.CHANGE_RECANTIVRLTHERAPYTY:
			return state.set('recAntivrlTherapyTy', action.recAntivrlTherapyTy);
		case constant.CHANGE_RECANTIVRLTHERAPYTYACYCLOVIR:
			return state.set('recAntivrlTherapyTyAcyclovir', action.recAntivrlTherapyTyAcyclovir);
		case constant.CHANGE_RECANTIVRLTHERAPYTYCYTOGAM:
			return state.set('recAntivrlTherapyTyCytogam', action.recAntivrlTherapyTyCytogam);
		case constant.CHANGE_RECANTIVRLTHERAPYTYCYTOVENE:
			return state.set('recAntivrlTherapyTyCytovene', action.recAntivrlTherapyTyCytovene);
		case constant.CHANGE_RECANTIVRLTHERAPYTYEPIVIR:
			return state.set('recAntivrlTherapyTyEpivir', action.recAntivrlTherapyTyEpivir);
		case constant.CHANGE_RECANTIVRLTHERAPYTYFLUVAC:
			return state.set('recAntivrlTherapyTyFluVac', action.recAntivrlTherapyTyFluVac);
		case constant.CHANGE_RECANTIVRLTHERAPYTYGAMIMUNE:
			return state.set('recAntivrlTherapyTyGamimune', action.recAntivrlTherapyTyGamimune);
		case constant.CHANGE_RECANTIVRLTHERAPYTYGAMMAGARD:
			return state.set('recAntivrlTherapyTyGammagard', action.recAntivrlTherapyTyGammagard);
		case constant.CHANGE_RECANTIVRLTHERAPYTYHBIG:
			return state.set('recAntivrlTherapyTyHbig', action.recAntivrlTherapyTyHbig);
		case constant.CHANGE_RECANTIVRLTHERAPYTYOTHER:
			return state.set('recAntivrlTherapyTyOther', action.recAntivrlTherapyTyOther);
		case constant.CHANGE_RECANTIVRLTHERAPYTYVALCYTE:
			return state.set('recAntivrlTherapyTyValcyte', action.recAntivrlTherapyTyValcyte);
		case constant.CHANGE_RECANTIVRLTHERAPYTYVALTREX:
			return state.set('recAntivrlTherapyTyValtrex', action.recAntivrlTherapyTyValtrex);
		case constant.CHANGE_RECARTIFICIALLI:
			return state.set('recArtificialLi', action.recArtificialLi);
		case constant.CHANGE_RECASCITES:
			return state.set('recAscites', action.recAscites);
		case constant.CHANGE_RECAMMEQUIVCUR:
			return state.set('recAMmEquivCur', action.recAMmEquivCur);
		case constant.CHANGE_RECAMMEQUIVTX:
			return state.set('recAMmEquivTx', action.recAMmEquivTx);
		case constant.CHANGE_RECB1:
			return state.set('recB1', action.recB1);
		case constant.CHANGE_RECB2:
			return state.set('recB2', action.recB2);
		case constant.CHANGE_RECBACTERIAPERIT:
			return state.set('recBacteriaPerit', action.recBacteriaPerit);
		case constant.CHANGE_RECBMI:
			return state.set('recBmi', action.recBmi);
		case constant.CHANGE_RECBMMEQUIVCUR:
			return state.set('recBMmEquivCur', action.recBMmEquivCur);
		case constant.CHANGE_RECBMMEQUIVTX:
			return state.set('recBMmEquivTx', action.recBMmEquivTx);
		case constant.CHANGE_RECCMVIGG:
			return state.set('recCmvIgg', action.recCmvIgg);
		case constant.CHANGE_RECCMVIGM:
			return state.set('recCmvIgm', action.recCmvIgm);
		case constant.CHANGE_RECCMVSTAT:
			return state.set('recCmvStat', action.recCmvStat);
		case constant.CHANGE_RECCOD:
			return state.set('recCod', action.recCod);
		case constant.CHANGE_RECCOD2:
			return state.set('recCod2', action.recCod2);
		case constant.CHANGE_RECCOD3:
			return state.set('recCod3', action.recCod3);
		case constant.CHANGE_RECCOGNITIVEDEVELOP:
			return state.set('recCognitiveDevelop', action.recCognitiveDevelop);
		case constant.CHANGE_RECCOLDISCHTM:
			return state.set('recColdIschTm', action.recColdIschTm);
		case constant.CHANGE_RECCTRID:
			return state.set('recCtrId', action.recCtrId);
		case constant.CHANGE_RECCURCTRID:
			return state.set('recCurCtrId', action.recCurCtrId);
		case constant.CHANGE_RECCURPXSTAT:
			return state.set('recCurPxStat', action.recCurPxStat);
		case constant.CHANGE_RECDGN:
			return state.set('recDgn', action.recDgn);
		case constant.CHANGE_RECDGN2:
			return state.set('recDgn2', action.recDgn2);
		case constant.CHANGE_RECDGNOSTXT:
			return state.set('recDgnOstxt', action.recDgnOstxt);
		case constant.CHANGE_RECDISCHRGALBUMIN:
			return state.set('recDischrgAlbumin', action.recDischrgAlbumin);
		case constant.CHANGE_RECDISCHRGALKPHOS:
			return state.set('recDischrgAlkphos', action.recDischrgAlkphos);
		case constant.CHANGE_RECDISCHRGCREAT:
			return state.set('recDischrgCreat', action.recDischrgCreat);
		case constant.CHANGE_RECDISCHRGDT:
			return state.set('recDischrgDt', action.recDischrgDt);
		case constant.CHANGE_RECDISCHRGINR:
			return state.set('recDischrgInr', action.recDischrgInr);
		case constant.CHANGE_RECDISCHRGLABDT:
			return state.set('recDischrgLabDt', action.recDischrgLabDt);
		case constant.CHANGE_RECDISCHRGSGOT:
			return state.set('recDischrgSgot', action.recDischrgSgot);
		case constant.CHANGE_RECDISCHRGSGPT:
			return state.set('recDischrgSgpt', action.recDischrgSgpt);
		case constant.CHANGE_RECDR1:
			return state.set('recDr1', action.recDr1);
		case constant.CHANGE_RECDR2:
			return state.set('recDr2', action.recDr2);
		case constant.CHANGE_RECDRMMEQUIVCUR:
			return state.set('recDrMmEquivCur', action.recDrMmEquivCur);
		case constant.CHANGE_RECDRMMEQUIVTX:
			return state.set('recDrMmEquivTx', action.recDrMmEquivTx);
		case constant.CHANGE_RECEBVSTAT:
			return state.set('recEbvStat', action.recEbvStat);
		case constant.CHANGE_RECEMPLSTATPRE04:
			return state.set('recEmplStatPre04', action.recEmplStatPre04);
		case constant.CHANGE_RECFAILBILIARY:
			return state.set('recFailBiliary', action.recFailBiliary);
		case constant.CHANGE_RECFAILDT:
			return state.set('recFailDt', action.recFailDt);
		case constant.CHANGE_RECFAILHEPDENOVO:
			return state.set('recFailHepDenovo', action.recFailHepDenovo);
		case constant.CHANGE_RECFAILHEPRECUR:
			return state.set('recFailHepRecur', action.recFailHepRecur);
		case constant.CHANGE_RECFAILINFECT:
			return state.set('recFailInfect', action.recFailInfect);
		case constant.CHANGE_RECFAILPRIMEGRAFTFAIL:
			return state.set('recFailPrimeGraftFail', action.recFailPrimeGraftFail);
		case constant.CHANGE_RECFAILRECURDISEASE:
			return state.set('recFailRecurDisease', action.recFailRecurDisease);
		case constant.CHANGE_RECFAILREJACUTE:
			return state.set('recFailRejAcute', action.recFailRejAcute);
		case constant.CHANGE_RECFAILVASCTHROMB:
			return state.set('recFailVascThromb', action.recFailVascThromb);
		case constant.CHANGE_RECFUNCTNSTAT:
			return state.set('recFunctnStat', action.recFunctnStat);
		case constant.CHANGE_RECGRAFTSTAT:
			return state.set('recGraftStat', action.recGraftStat);
		case constant.CHANGE_RECHBVANTIBODY:
			return state.set('recHbvAntibody', action.recHbvAntibody);
		case constant.CHANGE_RECHBVSURFANTIGEN:
			return state.set('recHbvSurfAntigen', action.recHbvSurfAntigen);
		case constant.CHANGE_RECHCVSTAT:
			return state.set('recHcvStat', action.recHcvStat);
		case constant.CHANGE_RECHEPATICARTERTHROMB:
			return state.set('recHepaticArterThromb', action.recHepaticArterThromb);
		case constant.CHANGE_RECHEPATICOUTFLOWOBSTRUCT:
			return state.set('recHepaticOutflowObstruct', action.recHepaticOutflowObstruct);
		case constant.CHANGE_RECHGTCM:
			return state.set('recHgtCm', action.recHgtCm);
		case constant.CHANGE_RECHGTWGTDT:
			return state.set('recHgtWgtDt', action.recHgtWgtDt);
		case constant.CHANGE_RECHISTOTXID:
			return state.set('recHistoTxId', action.recHistoTxId);
		case constant.CHANGE_RECHIVSTAT:
			return state.set('recHivStat', action.recHivStat);
		case constant.CHANGE_RECHOSP90DAYS:
			return state.set('recHosp90Days', action.recHosp90Days);
		case constant.CHANGE_RECIMMUNOMAINTMEDS:
			return state.set('recImmunoMaintMeds', action.recImmunoMaintMeds);
		case constant.CHANGE_RECINOTROPBPSUPPORT:
			return state.set('recInotropBpSupport', action.recInotropBpSupport);
		case constant.CHANGE_RECLIFESUPPORT:
			return state.set('recLifeSupport', action.recLifeSupport);
		case constant.CHANGE_RECLIFESUPPORTOTHER:
			return state.set('recLifeSupportOther', action.recLifeSupportOther);
		case constant.CHANGE_RECLITY:
			return state.set('recLiTy', action.recLiTy);
		case constant.CHANGE_RECMALIG:
			return state.set('recMalig', action.recMalig);
		case constant.CHANGE_RECMALIGTY:
			return state.set('recMaligTy', action.recMaligTy);
		case constant.CHANGE_RECMALIGTYBREAST:
			return state.set('recMaligTyBreast', action.recMaligTyBreast);
		case constant.CHANGE_RECMALIGTYCNSTUMOR:
			return state.set('recMaligTyCnsTumor', action.recMaligTyCnsTumor);
		case constant.CHANGE_RECMALIGTYGENITOURINARY:
			return state.set('recMaligTyGenitourinary', action.recMaligTyGenitourinary);
		case constant.CHANGE_RECMALIGTYHEPBLAST:
			return state.set('recMaligTyHepblast', action.recMaligTyHepblast);
		case constant.CHANGE_RECMALIGTYHEPCARCINOMA:
			return state.set('recMaligTyHepcarcinoma', action.recMaligTyHepcarcinoma);
		case constant.CHANGE_RECMALIGTYLEUKLYMPH:
			return state.set('recMaligTyLeukLymph', action.recMaligTyLeukLymph);
		case constant.CHANGE_RECMALIGTYLIVER:
			return state.set('recMaligTyLiver', action.recMaligTyLiver);
		case constant.CHANGE_RECMALIGTYLU:
			return state.set('recMaligTyLu', action.recMaligTyLu);
		case constant.CHANGE_RECMALIGTYOTHER:
			return state.set('recMaligTyOther', action.recMaligTyOther);
		case constant.CHANGE_RECMALIGTYSKINMEL:
			return state.set('recMaligTySkinMel', action.recMaligTySkinMel);
		case constant.CHANGE_RECMALIGTYSKINNONMEL:
			return state.set('recMaligTySkinNonMel', action.recMaligTySkinNonMel);
		case constant.CHANGE_RECMALIGTYTHROAT:
			return state.set('recMaligTyThroat', action.recMaligTyThroat);
		case constant.CHANGE_RECMALIGTYTHYROID:
			return state.set('recMaligTyThyroid', action.recMaligTyThyroid);
		case constant.CHANGE_RECMALIGTYUNK:
			return state.set('recMaligTyUnk', action.recMaligTyUnk);
		case constant.CHANGE_RECMEDCOND:
			return state.set('recMedCond', action.recMedCond);
		case constant.CHANGE_RECMMEQUIVCUR:
			return state.set('recMmEquivCur', action.recMmEquivCur);
		case constant.CHANGE_RECMMEQUIVTX:
			return state.set('recMmEquivTx', action.recMmEquivTx);
		case constant.CHANGE_RECMOTORDEVELOP:
			return state.set('recMotorDevelop', action.recMotorDevelop);
		case constant.CHANGE_RECONVENTILATOR:
			return state.set('recOnVentilator', action.recOnVentilator);
		case constant.CHANGE_RECOPOID:
			return state.set('recOpoId', action.recOpoId);
		case constant.CHANGE_RECOTHERTHERAPY:
			return state.set('recOtherTherapy', action.recOtherTherapy);
		case constant.CHANGE_RECOTHERTHERAPYTY:
			return state.set('recOtherTherapyTy', action.recOtherTherapyTy);
		case constant.CHANGE_RECOTHERTHERAPYTYPHOTOPH:
			return state.set('recOtherTherapyTyPhotoph', action.recOtherTherapyTyPhotoph);
		case constant.CHANGE_RECOTHERTHERAPYTYPLASMAPH:
			return state.set('recOtherTherapyTyPlasmaph', action.recOtherTherapyTyPlasmaph);
		case constant.CHANGE_RECOTHERTHERAPYTYTLI:
			return state.set('recOtherTherapyTyTli', action.recOtherTherapyTyTli);
		case constant.CHANGE_RECPBCREDIT:
			return state.set('recPbCredit', action.recPbCredit);
		case constant.CHANGE_RECPBDEBT:
			return state.set('recPbDebt', action.recPbDebt);
		case constant.CHANGE_RECPBSHARETY:
			return state.set('recPbShareTy', action.recPbShareTy);
		case constant.CHANGE_RECPERMSTATE:
			return state.set('recPermState', action.recPermState);
		case constant.CHANGE_RECPHYSCCAPACITY:
			return state.set('recPhyscCapacity', action.recPhyscCapacity);
		case constant.CHANGE_RECPORTALHYPERTENBLEED:
			return state.set('recPortalHypertenBleed', action.recPortalHypertenBleed);
		case constant.CHANGE_RECPORTALVEIN:
			return state.set('recPortalVein', action.recPortalVein);
		case constant.CHANGE_RECPORTALVEINTHROMB:
			return state.set('recPortalVeinThromb', action.recPortalVeinThromb);
		case constant.CHANGE_RECPOSTXLOS:
			return state.set('recPostxLos', action.recPostxLos);
		case constant.CHANGE_RECPRETXALBUMIN:
			return state.set('recPretxAlbumin', action.recPretxAlbumin);
		case constant.CHANGE_RECPRETXCREAT:
			return state.set('recPretxCreat', action.recPretxCreat);
		case constant.CHANGE_RECPRETXINR:
			return state.set('recPretxInr', action.recPretxInr);
		case constant.CHANGE_RECPRETXLABDT:
			return state.set('recPretxLabDt', action.recPretxLabDt);
		case constant.CHANGE_RECPRETXTOTBILI:
			return state.set('recPretxTotBili', action.recPretxTotBili);
		case constant.CHANGE_RECPREVABDOMSURG:
			return state.set('recPrevAbdomSurg', action.recPrevAbdomSurg);
		case constant.CHANGE_RECPREVHL:
			return state.set('recPrevHl', action.recPrevHl);
		case constant.CHANGE_RECPREVHR:
			return state.set('recPrevHr', action.recPrevHr);
		case constant.CHANGE_RECPREVIN:
			return state.set('recPrevIn', action.recPrevIn);
		case constant.CHANGE_RECPREVKI:
			return state.set('recPrevKi', action.recPrevKi);
		case constant.CHANGE_RECPREVKP:
			return state.set('recPrevKp', action.recPrevKp);
		case constant.CHANGE_RECPREVLI:
			return state.set('recPrevLi', action.recPrevLi);
		case constant.CHANGE_RECPREVLU:
			return state.set('recPrevLu', action.recPrevLu);
		case constant.CHANGE_RECPREVNONFUNCTNTX:
			return state.set('recPrevNonfunctnTx', action.recPrevNonfunctnTx);
		case constant.CHANGE_RECPREVPA:
			return state.set('recPrevPa', action.recPrevPa);
		case constant.CHANGE_RECPRIMARYPAY:
			return state.set('recPrimaryPay', action.recPrimaryPay);
		case constant.CHANGE_RECPROCEDURETYLI:
			return state.set('recProcedureTyLi', action.recProcedureTyLi);
		case constant.CHANGE_RECPXRESEARCH:
			return state.set('recPxResearch', action.recPxResearch);
		case constant.CHANGE_RECPXSTAT:
			return state.set('recPxStat', action.recPxStat);
		case constant.CHANGE_RECPXSTATDT:
			return state.set('recPxStatDt', action.recPxStatDt);
		case constant.CHANGE_RECSECONDARYPAY:
			return state.set('recSecondaryPay', action.recSecondaryPay);
		case constant.CHANGE_RECSGPT:
			return state.set('recSgpt', action.recSgpt);
		case constant.CHANGE_RECTIPSS:
			return state.set('recTipss', action.recTipss);
		case constant.CHANGE_RECTOLERANCEINDUCTIONTECH:
			return state.set('recToleranceInductionTech', action.recToleranceInductionTech);
		case constant.CHANGE_RECTUMOR:
			return state.set('recTumor', action.recTumor);
		case constant.CHANGE_RECTUMORTY:
			return state.set('recTumorTy', action.recTumorTy);
		case constant.CHANGE_RECTXFERCTRID:
			return state.set('recTxferCtrId', action.recTxferCtrId);
		case constant.CHANGE_RECTXFERDT:
			return state.set('recTxferDt', action.recTxferDt);
		case constant.CHANGE_RECTXDT:
			return state.set('recTxDt', action.recTxDt);
		case constant.CHANGE_RECTXEXTRAVESSEL:
			return state.set('recTxExtraVessel', action.recTxExtraVessel);
		case constant.CHANGE_RECTXORGTY:
			return state.set('recTxOrgTy', action.recTxOrgTy);
		case constant.CHANGE_RECTXPROCEDURETY:
			return state.set('recTxProcedureTy', action.recTxProcedureTy);
		case constant.CHANGE_RECTXTY:
			return state.set('recTxTy', action.recTxTy);
		case constant.CHANGE_RECVALCYTE:
			return state.set('recValcyte', action.recValcyte);
		case constant.CHANGE_RECVARICEALBLEEDING:
			return state.set('recVaricealBleeding', action.recVaricealBleeding);
		case constant.CHANGE_RECVENTILATOR:
			return state.set('recVentilator', action.recVentilator);
		case constant.CHANGE_RECWARMISCHTM:
			return state.set('recWarmIschTm', action.recWarmIschTm);
		case constant.CHANGE_RECWGTKG:
			return state.set('recWgtKg', action.recWgtKg);
		case constant.CHANGE_RECWORKINCOME:
			return state.set('recWorkIncome', action.recWorkIncome);
		case constant.CHANGE_RECWORKNOSTAT:
			return state.set('recWorkNoStat', action.recWorkNoStat);
		case constant.CHANGE_RECWORKYESSTAT:
			return state.set('recWorkYesStat', action.recWorkYesStat);
		case constant.CHANGE_TFLCOD:
			return state.set('tflCod', action.tflCod);
		case constant.CHANGE_TFLDEATHDT:
			return state.set('tflDeathDt', action.tflDeathDt);
		case constant.CHANGE_TFLENDTXFU:
			return state.set('tflEndtxfu', action.tflEndtxfu);
		case constant.CHANGE_TFLGRAFTDT:
			return state.set('tflGraftDt', action.tflGraftDt);
		case constant.CHANGE_TFLLAFUDATE:
			return state.set('tflLafudate', action.tflLafudate);
		case constant.CHANGE_TFLLASTATUS:
			return state.set('tflLastatus', action.tflLastatus);
		case constant.CHANGE_TRRID:
			return state.set('trrId', action.trrId);
		case constant.CHANGE_TXID:
			return state.set('txId', action.txId);
		default:
			 return state;
	}
}

export default TxLiFormReducer;
