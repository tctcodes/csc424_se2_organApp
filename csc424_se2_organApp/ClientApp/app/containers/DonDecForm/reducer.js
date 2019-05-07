import { fromJS } from "immutable";
import * as constant from "./constants";

export const initialState = fromJS({
	donorId:                      "",
	donA1:                        "",
	donA2:                        "",
	donAbnormCongen:              "",
	donAbnormLvh:                 "",
	donAbnormValves:              "",
	donAbo:                       "",
	donAge:                       "",
	donAgeInMonths:               "",
	donAllocEcdCva:               "",
	donAllocEcdHyperten:          "",
	donAllocEcdSerumCreat:        "",
	donAllocEcdSerumCreatDt:      "",
	donAllocRemainLiSeg:          "",
	donAntiCmv:                   "",
	donAntiConvuls:               "",
	donAntiHbc:                   "",
	donAntiHcv:                   "",
	donAntiHiv:                   "",
	donAntiHtlv:                  "",
	donAntiHyperten:              "",
	donArginine:                  "",
	donB1:                        "",
	donB2:                        "",
	donBiopsyDgn:                 "",
	donBrainDeathTm:              "",
	donBun:                       "",
	donBw4:                       "",
	donBw6:                       "",
	donC1:                        "",
	donC2:                        "",
	donCadDonCod:                 "",
	donCancerFreeInterval:        "",
	donCancerOtherOstxt:          "",
	donCardiacArrestAfterDeath:   "",
	donChagasNat:                 "",
	donChestXray:                 "",
	donCitizenship:               "",
	donCiFinal:                   "",
	donCiInit:                    "",
	donClampDt:                   "",
	donClampTm:                   "",
	donClampTmZone:               "",
	donClinicalInfect:            "",
	donCodDonStroke:              "",
	donColdIschTmArrivKi:         "",
	donConsentAttorney:           "",
	donConsentDonCard:            "",
	donConsentDonRegis:           "",
	donConsentDriverLicense:      "",
	donConsentPxWritDoc:          "",
	donConsentTm:                 "",
	donConsentWritDocIntent:      "",
	donContAlcohol:               "",
	donContCigarette:             "",
	donContCocaine:               "",
	donContIvDrug:                "",
	donContOtherDrug:             "",
	donCoronaryAngio:             "",
	donCoFinal:                   "",
	donCoInit:                    "",
	donCreat:                     "",
	donCregDonFlg:                "",
	donCvpFinal:                  "",
	donCvpInit:                   "",
	donDcdAbdomAortaCannulDt:     "",
	donDcdAbdomAortaCannulTm:     "",
	donDcdAgonalBeginDt:          "",
	donDcdAgonalBeginTm:          "",
	donDcdPortalVeinCannulDt:     "",
	donDcdPortalVeinCannulTm:     "",
	donDcdProgressToBrainDeath:   "",
	donDcdPulmArtCannulDt:        "",
	donDcdPulmArtCannulTm:        "",
	donDcdSupportWithdrawDt:      "",
	donDcdSupportWithdrawTm:      "",
	donDcdThorAortaCannulDt:      "",
	donDcdThorAortaCannulTm:      "",
	donDcdTotUrineOutput:         "",
	donDdavp:                     "",
	donDeathCircum:               "",
	donDeathMech:                 "",
	donDobutamine:                "",
	donDopamine:                  "",
	donDp1:                       "",
	donDp2:                       "",
	donDq1:                       "",
	donDq2:                       "",
	donDr1:                       "",
	donDr2:                       "",
	donDr51:                      "",
	donDr52:                      "",
	donDr53:                      "",
	donEbna:                      "",
	donEbvIgg:                    "",
	donEbvIgm:                    "",
	donEjectFract:                "",
	donEjectFractMeth:            "",
	donEthnicitySrtr:             "",
	donExpandDonFlgOptn:          "",
	donExpandDonKi:               "",
	donExpressFamily:             "",
	donExtracranialCancer:        "",
	donFeedbackDone:              "",
	donFinalSerumCreat:           "",
	donGender:                    "",
	donHbcStat:                   "",
	donHbvNat:                    "",
	donHbvSurfAntibody:           "",
	donHbvSurfAntigen:            "",
	donHcvNat:                    "",
	donHcvStat:                   "",
	donHeavyAlcohol:              "",
	donHematocrit:                "",
	donHeparin:                   "",
	donHgtCm:                     "",
	donHighCreat:                 "",
	donHistAlcohol:               "",
	donHistCancer:                "",
	donHistCigaretteGt20Pkyr:     "",
	donHistCocaine:               "",
	donHistDiab:                  "",
	donHistHyperten:              "",
	donHistInsulinDepnd:          "",
	donHistIvDrug:                "",
	donHistOtherDrug:             "",
	donHistPrevMi:                "",
	donHivNat:                    "",
	donHlaTyp:                    "",
	donHlaTypNotDone:             "",
	donHomeState:                 "",
	donHtlvNat:                   "",
	donHtn:                       "",
	donHypertenDiet:              "",
	donHypertenDiuretics:         "",
	donHypertenOtherMeds:         "",
	donInfectBlood:               "",
	donInfectBloodConfirm:        "",
	donInfectLu:                  "",
	donInfectLuConfirm:           "",
	donInfectOther:               "",
	donInfectOtherConfirm:        "",
	donInfectUrine:               "",
	donInfectUrineConfirm:        "",
	donInotropAgentGe3:           "",
	donInotropSupport:            "",
	donInr:                       "",
	donInsulin:                   "",
	donIntracranialCancer:        "",
	donKiGlomerObserved:          "",
	donKiGlomerSclerPct:          "",
	donLfKiBiopsy:                "",
	donLfKiGlomerSclerPct:        "",
	donLfKiPump:                  "",
	donLfKiResistPriorShip:       "",
	donLfKiTxferPump:             "",
	donLfLuBroncho:               "",
	donLipase:                    "",
	donLiBiopsy:                  "",
	donLiBiopsyMacroFat:          "",
	donLiBiopsyMicroFat:          "",
	donLiOthHistologyGranulomas:  "",
	donLiOthHistologyHemosidera:  "",
	donLiOthHistologyOther:       "",
	donMapFinal:                  "",
	donMapInit:                   "",
	donMaxCreat:                  "",
	donMedExaminer:               "",
	donMeetCdcHighRisk:           "",
	donMeetDoubleKiCrit:          "",
	donNonHrBeat:                 "",
	donNonHrBeatCntl:             "",
	donNonHrBeatCoreCool:         "",
	donOpoCtrId:                  "",
	donPaDiastFinal:              "",
	donPaDiastInit:               "",
	donPaSystFinal:               "",
	donPaSystInit:                "",
	donPco2:                      "",
	donPcwpFinal:                 "",
	donPcwpInit:                  "",
	donPeakSerumCreat:            "",
	donPh:                        "",
	donPo2:                       "",
	donPo2Done:                   "",
	donPo2Fio2:                   "",
	donPrerecovDiuretics:         "",
	donPrerecovMeds:              "",
	donPrerecovSteroids:          "",
	donPrerecovT3:                "",
	donPrerecovT4:                "",
	donPrevGastroDisease:         "",
	donProteinUrine:              "",
	donPulmCath:                  "",
	donRace:                      "",
	donRaceSrtr:                  "",
	donRecovDt:                   "",
	donRecovOutUs:                "",
	donRefDt:                     "",
	donRefFlg:                    "",
	donResuscitDuration:          "",
	donRprVdrl:                   "",
	donRtKiBiopsy:                "",
	donRtKiGlomerSclerPct:        "",
	donRtKiPump:                  "",
	donRtKiResistPriorShip:       "",
	donRtKiTxferPump:             "",
	donRtLuBroncho:               "",
	donSerumAmylase:              "",
	donSgot:                      "",
	donSgpt:                      "",
	donSkinCancer:                "",
	donSodium:                    "",
	donSvrFinal:                  "",
	donSvrInit:                   "",
	donTargetSource1:             "",
	donTargetSource2:             "",
	donTattoos:                   "",
	donTmForXmatch:               "",
	donTotBili:                   "",
	donTx:                        "",
	donTxfusTerminalHospNum:      "",
	donTy:                        "",
	donTypMethclass1:             "",
	donTypMethclass1Dt:           "",
	donTypMethclass2:             "",
	donTypMethclass2Dt:           "",
	donUseDoubleKi:               "",
	donVasodil:                   "",
	donVesselsGt50Stenosis:       "",
	donWallAbnormGlob:            "",
	donWallAbnormSeg:             "",
	donWarmIschTmMins:            "",
	donWestNileNat:               "",
	donWgtKg:                     "",
	persId:                       "",
});

function DonDecFormReducer(state = initialState, action) {
	switch (action.type) {
		case constant.SET_RECORD_DON_DEC:
			return state.mergeWith((o, m, i) => {return m===null?'':m},action.record);
		case constant.CHANGE_DONORID:
			return state.set('donorId', action.donorId);
		case constant.CHANGE_DONA1:
			return state.set('donA1', action.donA1);
		case constant.CHANGE_DONA2:
			return state.set('donA2', action.donA2);
		case constant.CHANGE_DONABNORMCONGEN:
			return state.set('donAbnormCongen', action.donAbnormCongen);
		case constant.CHANGE_DONABNORMLVH:
			return state.set('donAbnormLvh', action.donAbnormLvh);
		case constant.CHANGE_DONABNORMVALVES:
			return state.set('donAbnormValves', action.donAbnormValves);
		case constant.CHANGE_DONABO:
			return state.set('donAbo', action.donAbo);
		case constant.CHANGE_DONAGE:
			return state.set('donAge', action.donAge);
		case constant.CHANGE_DONAGEINMONTHS:
			return state.set('donAgeInMonths', action.donAgeInMonths);
		case constant.CHANGE_DONALLOCECDCVA:
			return state.set('donAllocEcdCva', action.donAllocEcdCva);
		case constant.CHANGE_DONALLOCECDHYPERTEN:
			return state.set('donAllocEcdHyperten', action.donAllocEcdHyperten);
		case constant.CHANGE_DONALLOCECDSERUMCREAT:
			return state.set('donAllocEcdSerumCreat', action.donAllocEcdSerumCreat);
		case constant.CHANGE_DONALLOCECDSERUMCREATDT:
			return state.set('donAllocEcdSerumCreatDt', action.donAllocEcdSerumCreatDt);
		case constant.CHANGE_DONALLOCREMAINLISEG:
			return state.set('donAllocRemainLiSeg', action.donAllocRemainLiSeg);
		case constant.CHANGE_DONANTICMV:
			return state.set('donAntiCmv', action.donAntiCmv);
		case constant.CHANGE_DONANTICONVULS:
			return state.set('donAntiConvuls', action.donAntiConvuls);
		case constant.CHANGE_DONANTIHBC:
			return state.set('donAntiHbc', action.donAntiHbc);
		case constant.CHANGE_DONANTIHCV:
			return state.set('donAntiHcv', action.donAntiHcv);
		case constant.CHANGE_DONANTIHIV:
			return state.set('donAntiHiv', action.donAntiHiv);
		case constant.CHANGE_DONANTIHTLV:
			return state.set('donAntiHtlv', action.donAntiHtlv);
		case constant.CHANGE_DONANTIHYPERTEN:
			return state.set('donAntiHyperten', action.donAntiHyperten);
		case constant.CHANGE_DONARGININE:
			return state.set('donArginine', action.donArginine);
		case constant.CHANGE_DONB1:
			return state.set('donB1', action.donB1);
		case constant.CHANGE_DONB2:
			return state.set('donB2', action.donB2);
		case constant.CHANGE_DONBIOPSYDGN:
			return state.set('donBiopsyDgn', action.donBiopsyDgn);
		case constant.CHANGE_DONBRAINDEATHTM:
			return state.set('donBrainDeathTm', action.donBrainDeathTm);
		case constant.CHANGE_DONBUN:
			return state.set('donBun', action.donBun);
		case constant.CHANGE_DONBW4:
			return state.set('donBw4', action.donBw4);
		case constant.CHANGE_DONBW6:
			return state.set('donBw6', action.donBw6);
		case constant.CHANGE_DONC1:
			return state.set('donC1', action.donC1);
		case constant.CHANGE_DONC2:
			return state.set('donC2', action.donC2);
		case constant.CHANGE_DONCADDONCOD:
			return state.set('donCadDonCod', action.donCadDonCod);
		case constant.CHANGE_DONCANCERFREEINTERVAL:
			return state.set('donCancerFreeInterval', action.donCancerFreeInterval);
		case constant.CHANGE_DONCANCEROTHEROSTXT:
			return state.set('donCancerOtherOstxt', action.donCancerOtherOstxt);
		case constant.CHANGE_DONCARDIACARRESTAFTERDEATH:
			return state.set('donCardiacArrestAfterDeath', action.donCardiacArrestAfterDeath);
		case constant.CHANGE_DONCHAGASNAT:
			return state.set('donChagasNat', action.donChagasNat);
		case constant.CHANGE_DONCHESTXRAY:
			return state.set('donChestXray', action.donChestXray);
		case constant.CHANGE_DONCITIZENSHIP:
			return state.set('donCitizenship', action.donCitizenship);
		case constant.CHANGE_DONCIFINAL:
			return state.set('donCiFinal', action.donCiFinal);
		case constant.CHANGE_DONCIINIT:
			return state.set('donCiInit', action.donCiInit);
		case constant.CHANGE_DONCLAMPDT:
			return state.set('donClampDt', action.donClampDt);
		case constant.CHANGE_DONCLAMPTM:
			return state.set('donClampTm', action.donClampTm);
		case constant.CHANGE_DONCLAMPTMZONE:
			return state.set('donClampTmZone', action.donClampTmZone);
		case constant.CHANGE_DONCLINICALINFECT:
			return state.set('donClinicalInfect', action.donClinicalInfect);
		case constant.CHANGE_DONCODDONSTROKE:
			return state.set('donCodDonStroke', action.donCodDonStroke);
		case constant.CHANGE_DONCOLDISCHTMARRIVKI:
			return state.set('donColdIschTmArrivKi', action.donColdIschTmArrivKi);
		case constant.CHANGE_DONCONSENTATTORNEY:
			return state.set('donConsentAttorney', action.donConsentAttorney);
		case constant.CHANGE_DONCONSENTDONCARD:
			return state.set('donConsentDonCard', action.donConsentDonCard);
		case constant.CHANGE_DONCONSENTDONREGIS:
			return state.set('donConsentDonRegis', action.donConsentDonRegis);
		case constant.CHANGE_DONCONSENTDRIVERLICENSE:
			return state.set('donConsentDriverLicense', action.donConsentDriverLicense);
		case constant.CHANGE_DONCONSENTPXWRITDOC:
			return state.set('donConsentPxWritDoc', action.donConsentPxWritDoc);
		case constant.CHANGE_DONCONSENTTM:
			return state.set('donConsentTm', action.donConsentTm);
		case constant.CHANGE_DONCONSENTWRITDOCINTENT:
			return state.set('donConsentWritDocIntent', action.donConsentWritDocIntent);
		case constant.CHANGE_DONCONTALCOHOL:
			return state.set('donContAlcohol', action.donContAlcohol);
		case constant.CHANGE_DONCONTCIGARETTE:
			return state.set('donContCigarette', action.donContCigarette);
		case constant.CHANGE_DONCONTCOCAINE:
			return state.set('donContCocaine', action.donContCocaine);
		case constant.CHANGE_DONCONTIVDRUG:
			return state.set('donContIvDrug', action.donContIvDrug);
		case constant.CHANGE_DONCONTOTHERDRUG:
			return state.set('donContOtherDrug', action.donContOtherDrug);
		case constant.CHANGE_DONCORONARYANGIO:
			return state.set('donCoronaryAngio', action.donCoronaryAngio);
		case constant.CHANGE_DONCOFINAL:
			return state.set('donCoFinal', action.donCoFinal);
		case constant.CHANGE_DONCOINIT:
			return state.set('donCoInit', action.donCoInit);
		case constant.CHANGE_DONCREAT:
			return state.set('donCreat', action.donCreat);
		case constant.CHANGE_DONCREGDONFLG:
			return state.set('donCregDonFlg', action.donCregDonFlg);
		case constant.CHANGE_DONCVPFINAL:
			return state.set('donCvpFinal', action.donCvpFinal);
		case constant.CHANGE_DONCVPINIT:
			return state.set('donCvpInit', action.donCvpInit);
		case constant.CHANGE_DONDCDABDOMAORTACANNULDT:
			return state.set('donDcdAbdomAortaCannulDt', action.donDcdAbdomAortaCannulDt);
		case constant.CHANGE_DONDCDABDOMAORTACANNULTM:
			return state.set('donDcdAbdomAortaCannulTm', action.donDcdAbdomAortaCannulTm);
		case constant.CHANGE_DONDCDAGONALBEGINDT:
			return state.set('donDcdAgonalBeginDt', action.donDcdAgonalBeginDt);
		case constant.CHANGE_DONDCDAGONALBEGINTM:
			return state.set('donDcdAgonalBeginTm', action.donDcdAgonalBeginTm);
		case constant.CHANGE_DONDCDPORTALVEINCANNULDT:
			return state.set('donDcdPortalVeinCannulDt', action.donDcdPortalVeinCannulDt);
		case constant.CHANGE_DONDCDPORTALVEINCANNULTM:
			return state.set('donDcdPortalVeinCannulTm', action.donDcdPortalVeinCannulTm);
		case constant.CHANGE_DONDCDPROGRESSTOBRAINDEATH:
			return state.set('donDcdProgressToBrainDeath', action.donDcdProgressToBrainDeath);
		case constant.CHANGE_DONDCDPULMARTCANNULDT:
			return state.set('donDcdPulmArtCannulDt', action.donDcdPulmArtCannulDt);
		case constant.CHANGE_DONDCDPULMARTCANNULTM:
			return state.set('donDcdPulmArtCannulTm', action.donDcdPulmArtCannulTm);
		case constant.CHANGE_DONDCDSUPPORTWITHDRAWDT:
			return state.set('donDcdSupportWithdrawDt', action.donDcdSupportWithdrawDt);
		case constant.CHANGE_DONDCDSUPPORTWITHDRAWTM:
			return state.set('donDcdSupportWithdrawTm', action.donDcdSupportWithdrawTm);
		case constant.CHANGE_DONDCDTHORAORTACANNULDT:
			return state.set('donDcdThorAortaCannulDt', action.donDcdThorAortaCannulDt);
		case constant.CHANGE_DONDCDTHORAORTACANNULTM:
			return state.set('donDcdThorAortaCannulTm', action.donDcdThorAortaCannulTm);
		case constant.CHANGE_DONDCDTOTURINEOUTPUT:
			return state.set('donDcdTotUrineOutput', action.donDcdTotUrineOutput);
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
		case constant.CHANGE_DONDP1:
			return state.set('donDp1', action.donDp1);
		case constant.CHANGE_DONDP2:
			return state.set('donDp2', action.donDp2);
		case constant.CHANGE_DONDQ1:
			return state.set('donDq1', action.donDq1);
		case constant.CHANGE_DONDQ2:
			return state.set('donDq2', action.donDq2);
		case constant.CHANGE_DONDR1:
			return state.set('donDr1', action.donDr1);
		case constant.CHANGE_DONDR2:
			return state.set('donDr2', action.donDr2);
		case constant.CHANGE_DONDR51:
			return state.set('donDr51', action.donDr51);
		case constant.CHANGE_DONDR52:
			return state.set('donDr52', action.donDr52);
		case constant.CHANGE_DONDR53:
			return state.set('donDr53', action.donDr53);
		case constant.CHANGE_DONEBNA:
			return state.set('donEbna', action.donEbna);
		case constant.CHANGE_DONEBVIGG:
			return state.set('donEbvIgg', action.donEbvIgg);
		case constant.CHANGE_DONEBVIGM:
			return state.set('donEbvIgm', action.donEbvIgm);
		case constant.CHANGE_DONEJECTFRACT:
			return state.set('donEjectFract', action.donEjectFract);
		case constant.CHANGE_DONEJECTFRACTMETH:
			return state.set('donEjectFractMeth', action.donEjectFractMeth);
		case constant.CHANGE_DONETHNICITYSRTR:
			return state.set('donEthnicitySrtr', action.donEthnicitySrtr);
		case constant.CHANGE_DONEXPANDDONFLGOPTN:
			return state.set('donExpandDonFlgOptn', action.donExpandDonFlgOptn);
		case constant.CHANGE_DONEXPANDDONKI:
			return state.set('donExpandDonKi', action.donExpandDonKi);
		case constant.CHANGE_DONEXPRESSFAMILY:
			return state.set('donExpressFamily', action.donExpressFamily);
		case constant.CHANGE_DONEXTRACRANIALCANCER:
			return state.set('donExtracranialCancer', action.donExtracranialCancer);
		case constant.CHANGE_DONFEEDBACKDONE:
			return state.set('donFeedbackDone', action.donFeedbackDone);
		case constant.CHANGE_DONFINALSERUMCREAT:
			return state.set('donFinalSerumCreat', action.donFinalSerumCreat);
		case constant.CHANGE_DONGENDER:
			return state.set('donGender', action.donGender);
		case constant.CHANGE_DONHBCSTAT:
			return state.set('donHbcStat', action.donHbcStat);
		case constant.CHANGE_DONHBVNAT:
			return state.set('donHbvNat', action.donHbvNat);
		case constant.CHANGE_DONHBVSURFANTIBODY:
			return state.set('donHbvSurfAntibody', action.donHbvSurfAntibody);
		case constant.CHANGE_DONHBVSURFANTIGEN:
			return state.set('donHbvSurfAntigen', action.donHbvSurfAntigen);
		case constant.CHANGE_DONHCVNAT:
			return state.set('donHcvNat', action.donHcvNat);
		case constant.CHANGE_DONHCVSTAT:
			return state.set('donHcvStat', action.donHcvStat);
		case constant.CHANGE_DONHEAVYALCOHOL:
			return state.set('donHeavyAlcohol', action.donHeavyAlcohol);
		case constant.CHANGE_DONHEMATOCRIT:
			return state.set('donHematocrit', action.donHematocrit);
		case constant.CHANGE_DONHEPARIN:
			return state.set('donHeparin', action.donHeparin);
		case constant.CHANGE_DONHGTCM:
			return state.set('donHgtCm', action.donHgtCm);
		case constant.CHANGE_DONHIGHCREAT:
			return state.set('donHighCreat', action.donHighCreat);
		case constant.CHANGE_DONHISTALCOHOL:
			return state.set('donHistAlcohol', action.donHistAlcohol);
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
		case constant.CHANGE_DONHISTINSULINDEPND:
			return state.set('donHistInsulinDepnd', action.donHistInsulinDepnd);
		case constant.CHANGE_DONHISTIVDRUG:
			return state.set('donHistIvDrug', action.donHistIvDrug);
		case constant.CHANGE_DONHISTOTHERDRUG:
			return state.set('donHistOtherDrug', action.donHistOtherDrug);
		case constant.CHANGE_DONHISTPREVMI:
			return state.set('donHistPrevMi', action.donHistPrevMi);
		case constant.CHANGE_DONHIVNAT:
			return state.set('donHivNat', action.donHivNat);
		case constant.CHANGE_DONHLATYP:
			return state.set('donHlaTyp', action.donHlaTyp);
		case constant.CHANGE_DONHLATYPNOTDONE:
			return state.set('donHlaTypNotDone', action.donHlaTypNotDone);
		case constant.CHANGE_DONHOMESTATE:
			return state.set('donHomeState', action.donHomeState);
		case constant.CHANGE_DONHTLVNAT:
			return state.set('donHtlvNat', action.donHtlvNat);
		case constant.CHANGE_DONHTN:
			return state.set('donHtn', action.donHtn);
		case constant.CHANGE_DONHYPERTENDIET:
			return state.set('donHypertenDiet', action.donHypertenDiet);
		case constant.CHANGE_DONHYPERTENDIURETICS:
			return state.set('donHypertenDiuretics', action.donHypertenDiuretics);
		case constant.CHANGE_DONHYPERTENOTHERMEDS:
			return state.set('donHypertenOtherMeds', action.donHypertenOtherMeds);
		case constant.CHANGE_DONINFECTBLOOD:
			return state.set('donInfectBlood', action.donInfectBlood);
		case constant.CHANGE_DONINFECTBLOODCONFIRM:
			return state.set('donInfectBloodConfirm', action.donInfectBloodConfirm);
		case constant.CHANGE_DONINFECTLU:
			return state.set('donInfectLu', action.donInfectLu);
		case constant.CHANGE_DONINFECTLUCONFIRM:
			return state.set('donInfectLuConfirm', action.donInfectLuConfirm);
		case constant.CHANGE_DONINFECTOTHER:
			return state.set('donInfectOther', action.donInfectOther);
		case constant.CHANGE_DONINFECTOTHERCONFIRM:
			return state.set('donInfectOtherConfirm', action.donInfectOtherConfirm);
		case constant.CHANGE_DONINFECTURINE:
			return state.set('donInfectUrine', action.donInfectUrine);
		case constant.CHANGE_DONINFECTURINECONFIRM:
			return state.set('donInfectUrineConfirm', action.donInfectUrineConfirm);
		case constant.CHANGE_DONINOTROPAGENTGE3:
			return state.set('donInotropAgentGe3', action.donInotropAgentGe3);
		case constant.CHANGE_DONINOTROPSUPPORT:
			return state.set('donInotropSupport', action.donInotropSupport);
		case constant.CHANGE_DONINR:
			return state.set('donInr', action.donInr);
		case constant.CHANGE_DONINSULIN:
			return state.set('donInsulin', action.donInsulin);
		case constant.CHANGE_DONINTRACRANIALCANCER:
			return state.set('donIntracranialCancer', action.donIntracranialCancer);
		case constant.CHANGE_DONKIGLOMEROBSERVED:
			return state.set('donKiGlomerObserved', action.donKiGlomerObserved);
		case constant.CHANGE_DONKIGLOMERSCLERPCT:
			return state.set('donKiGlomerSclerPct', action.donKiGlomerSclerPct);
		case constant.CHANGE_DONLFKIBIOPSY:
			return state.set('donLfKiBiopsy', action.donLfKiBiopsy);
		case constant.CHANGE_DONLFKIGLOMERSCLERPCT:
			return state.set('donLfKiGlomerSclerPct', action.donLfKiGlomerSclerPct);
		case constant.CHANGE_DONLFKIPUMP:
			return state.set('donLfKiPump', action.donLfKiPump);
		case constant.CHANGE_DONLFKIRESISTPRIORSHIP:
			return state.set('donLfKiResistPriorShip', action.donLfKiResistPriorShip);
		case constant.CHANGE_DONLFKITXFERPUMP:
			return state.set('donLfKiTxferPump', action.donLfKiTxferPump);
		case constant.CHANGE_DONLFLUBRONCHO:
			return state.set('donLfLuBroncho', action.donLfLuBroncho);
		case constant.CHANGE_DONLIPASE:
			return state.set('donLipase', action.donLipase);
		case constant.CHANGE_DONLIBIOPSY:
			return state.set('donLiBiopsy', action.donLiBiopsy);
		case constant.CHANGE_DONLIBIOPSYMACROFAT:
			return state.set('donLiBiopsyMacroFat', action.donLiBiopsyMacroFat);
		case constant.CHANGE_DONLIBIOPSYMICROFAT:
			return state.set('donLiBiopsyMicroFat', action.donLiBiopsyMicroFat);
		case constant.CHANGE_DONLIOTHHISTOLOGYGRANULOMAS:
			return state.set('donLiOthHistologyGranulomas', action.donLiOthHistologyGranulomas);
		case constant.CHANGE_DONLIOTHHISTOLOGYHEMOSIDERA:
			return state.set('donLiOthHistologyHemosidera', action.donLiOthHistologyHemosidera);
		case constant.CHANGE_DONLIOTHHISTOLOGYOTHER:
			return state.set('donLiOthHistologyOther', action.donLiOthHistologyOther);
		case constant.CHANGE_DONMAPFINAL:
			return state.set('donMapFinal', action.donMapFinal);
		case constant.CHANGE_DONMAPINIT:
			return state.set('donMapInit', action.donMapInit);
		case constant.CHANGE_DONMAXCREAT:
			return state.set('donMaxCreat', action.donMaxCreat);
		case constant.CHANGE_DONMEDEXAMINER:
			return state.set('donMedExaminer', action.donMedExaminer);
		case constant.CHANGE_DONMEETCDCHIGHRISK:
			return state.set('donMeetCdcHighRisk', action.donMeetCdcHighRisk);
		case constant.CHANGE_DONMEETDOUBLEKICRIT:
			return state.set('donMeetDoubleKiCrit', action.donMeetDoubleKiCrit);
		case constant.CHANGE_DONNONHRBEAT:
			return state.set('donNonHrBeat', action.donNonHrBeat);
		case constant.CHANGE_DONNONHRBEATCNTL:
			return state.set('donNonHrBeatCntl', action.donNonHrBeatCntl);
		case constant.CHANGE_DONNONHRBEATCORECOOL:
			return state.set('donNonHrBeatCoreCool', action.donNonHrBeatCoreCool);
		case constant.CHANGE_DONOPOCTRID:
			return state.set('donOpoCtrId', action.donOpoCtrId);
		case constant.CHANGE_DONPADIASTFINAL:
			return state.set('donPaDiastFinal', action.donPaDiastFinal);
		case constant.CHANGE_DONPADIASTINIT:
			return state.set('donPaDiastInit', action.donPaDiastInit);
		case constant.CHANGE_DONPASYSTFINAL:
			return state.set('donPaSystFinal', action.donPaSystFinal);
		case constant.CHANGE_DONPASYSTINIT:
			return state.set('donPaSystInit', action.donPaSystInit);
		case constant.CHANGE_DONPCO2:
			return state.set('donPco2', action.donPco2);
		case constant.CHANGE_DONPCWPFINAL:
			return state.set('donPcwpFinal', action.donPcwpFinal);
		case constant.CHANGE_DONPCWPINIT:
			return state.set('donPcwpInit', action.donPcwpInit);
		case constant.CHANGE_DONPEAKSERUMCREAT:
			return state.set('donPeakSerumCreat', action.donPeakSerumCreat);
		case constant.CHANGE_DONPH:
			return state.set('donPh', action.donPh);
		case constant.CHANGE_DONPO2:
			return state.set('donPo2', action.donPo2);
		case constant.CHANGE_DONPO2DONE:
			return state.set('donPo2Done', action.donPo2Done);
		case constant.CHANGE_DONPO2FIO2:
			return state.set('donPo2Fio2', action.donPo2Fio2);
		case constant.CHANGE_DONPRERECOVDIURETICS:
			return state.set('donPrerecovDiuretics', action.donPrerecovDiuretics);
		case constant.CHANGE_DONPRERECOVMEDS:
			return state.set('donPrerecovMeds', action.donPrerecovMeds);
		case constant.CHANGE_DONPRERECOVSTEROIDS:
			return state.set('donPrerecovSteroids', action.donPrerecovSteroids);
		case constant.CHANGE_DONPRERECOVT3:
			return state.set('donPrerecovT3', action.donPrerecovT3);
		case constant.CHANGE_DONPRERECOVT4:
			return state.set('donPrerecovT4', action.donPrerecovT4);
		case constant.CHANGE_DONPREVGASTRODISEASE:
			return state.set('donPrevGastroDisease', action.donPrevGastroDisease);
		case constant.CHANGE_DONPROTEINURINE:
			return state.set('donProteinUrine', action.donProteinUrine);
		case constant.CHANGE_DONPULMCATH:
			return state.set('donPulmCath', action.donPulmCath);
		case constant.CHANGE_DONRACE:
			return state.set('donRace', action.donRace);
		case constant.CHANGE_DONRACESRTR:
			return state.set('donRaceSrtr', action.donRaceSrtr);
		case constant.CHANGE_DONRECOVDT:
			return state.set('donRecovDt', action.donRecovDt);
		case constant.CHANGE_DONRECOVOUTUS:
			return state.set('donRecovOutUs', action.donRecovOutUs);
		case constant.CHANGE_DONREFDT:
			return state.set('donRefDt', action.donRefDt);
		case constant.CHANGE_DONREFFLG:
			return state.set('donRefFlg', action.donRefFlg);
		case constant.CHANGE_DONRESUSCITDURATION:
			return state.set('donResuscitDuration', action.donResuscitDuration);
		case constant.CHANGE_DONRPRVDRL:
			return state.set('donRprVdrl', action.donRprVdrl);
		case constant.CHANGE_DONRTKIBIOPSY:
			return state.set('donRtKiBiopsy', action.donRtKiBiopsy);
		case constant.CHANGE_DONRTKIGLOMERSCLERPCT:
			return state.set('donRtKiGlomerSclerPct', action.donRtKiGlomerSclerPct);
		case constant.CHANGE_DONRTKIPUMP:
			return state.set('donRtKiPump', action.donRtKiPump);
		case constant.CHANGE_DONRTKIRESISTPRIORSHIP:
			return state.set('donRtKiResistPriorShip', action.donRtKiResistPriorShip);
		case constant.CHANGE_DONRTKITXFERPUMP:
			return state.set('donRtKiTxferPump', action.donRtKiTxferPump);
		case constant.CHANGE_DONRTLUBRONCHO:
			return state.set('donRtLuBroncho', action.donRtLuBroncho);
		case constant.CHANGE_DONSERUMAMYLASE:
			return state.set('donSerumAmylase', action.donSerumAmylase);
		case constant.CHANGE_DONSGOT:
			return state.set('donSgot', action.donSgot);
		case constant.CHANGE_DONSGPT:
			return state.set('donSgpt', action.donSgpt);
		case constant.CHANGE_DONSKINCANCER:
			return state.set('donSkinCancer', action.donSkinCancer);
		case constant.CHANGE_DONSODIUM:
			return state.set('donSodium', action.donSodium);
		case constant.CHANGE_DONSVRFINAL:
			return state.set('donSvrFinal', action.donSvrFinal);
		case constant.CHANGE_DONSVRINIT:
			return state.set('donSvrInit', action.donSvrInit);
		case constant.CHANGE_DONTARGETSOURCE1:
			return state.set('donTargetSource1', action.donTargetSource1);
		case constant.CHANGE_DONTARGETSOURCE2:
			return state.set('donTargetSource2', action.donTargetSource2);
		case constant.CHANGE_DONTATTOOS:
			return state.set('donTattoos', action.donTattoos);
		case constant.CHANGE_DONTMFORXMATCH:
			return state.set('donTmForXmatch', action.donTmForXmatch);
		case constant.CHANGE_DONTOTBILI:
			return state.set('donTotBili', action.donTotBili);
		case constant.CHANGE_DONTX:
			return state.set('donTx', action.donTx);
		case constant.CHANGE_DONTXFUSTERMINALHOSPNUM:
			return state.set('donTxfusTerminalHospNum', action.donTxfusTerminalHospNum);
		case constant.CHANGE_DONTY:
			return state.set('donTy', action.donTy);
		case constant.CHANGE_DONTYPMETHCLASS1:
			return state.set('donTypMethclass1', action.donTypMethclass1);
		case constant.CHANGE_DONTYPMETHCLASS1DT:
			return state.set('donTypMethclass1Dt', action.donTypMethclass1Dt);
		case constant.CHANGE_DONTYPMETHCLASS2:
			return state.set('donTypMethclass2', action.donTypMethclass2);
		case constant.CHANGE_DONTYPMETHCLASS2DT:
			return state.set('donTypMethclass2Dt', action.donTypMethclass2Dt);
		case constant.CHANGE_DONUSEDOUBLEKI:
			return state.set('donUseDoubleKi', action.donUseDoubleKi);
		case constant.CHANGE_DONVASODIL:
			return state.set('donVasodil', action.donVasodil);
		case constant.CHANGE_DONVESSELSGT50STENOSIS:
			return state.set('donVesselsGt50Stenosis', action.donVesselsGt50Stenosis);
		case constant.CHANGE_DONWALLABNORMGLOB:
			return state.set('donWallAbnormGlob', action.donWallAbnormGlob);
		case constant.CHANGE_DONWALLABNORMSEG:
			return state.set('donWallAbnormSeg', action.donWallAbnormSeg);
		case constant.CHANGE_DONWARMISCHTMMINS:
			return state.set('donWarmIschTmMins', action.donWarmIschTmMins);
		case constant.CHANGE_DONWESTNILENAT:
			return state.set('donWestNileNat', action.donWestNileNat);
		case constant.CHANGE_DONWGTKG:
			return state.set('donWgtKg', action.donWgtKg);
		case constant.CHANGE_PERSID:
			return state.set('persId', action.persId);
		default:
			 return state;
	}
}

export default DonDecFormReducer;
