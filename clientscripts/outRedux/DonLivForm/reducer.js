import { fromJS } from "immutable";
import * as constant from "./constants";

export const initialState = fromJS({
	donorId:                      "",
	donA1:                        "",
	donA2:                        "",
	donAbo:                       "",
	donAge:                       "",
	donAgeInMonths:               "",
	donAlbuminPostop:             "",
	donAlbuminPreop:              "",
	donAlkphosPostop:             "",
	donAlkphosPreop:              "",
	donAnasthCompl:               "",
	donArrhythm:                  "",
	donB1:                        "",
	donB2:                        "",
	donBiliPostop:                "",
	donBiliPreop:                 "",
	donBpDischrgDiast:            "",
	donBpDischrgSyst:             "",
	donBpPostopDiast:             "",
	donBpPostopSyst:              "",
	donBpPreopDiast:              "",
	donBpPreopSyst:               "",
	donBw4:                       "",
	donBw6:                       "",
	donC1:                        "",
	donC2:                        "",
	donCancerFreeInterval:        "",
	donCitizenship:               "",
	donCmv:                       "",
	donCmvClinical:               "",
	donCmvCult:                   "",
	donCmvIgg:                    "",
	donCmvIgm:                    "",
	donCmvNucleic:                "",
	donCmvTested:                 "",
	donDiab:                      "",
	donDiabTreat:                 "",
	donDonation:                  "",
	donDp1:                       "",
	donDp2:                       "",
	donDq1:                       "",
	donDq2:                       "",
	donDr1:                       "",
	donDr2:                       "",
	donDr51:                      "",
	donDr52:                      "",
	donDr53:                      "",
	donDurationAbstinence:        "",
	donEbvClinical:               "",
	donEbvDna:                    "",
	donEbvIgg:                    "",
	donEbvIgm:                    "",
	donEbvTested:                 "",
	donEducation:                 "",
	donEthnicitySrtr:             "",
	donFefAfterPreop:             "",
	donFefBeforePreop:            "",
	donFev1AfterPreop:            "",
	donFev1BeforePreop:           "",
	donFfpUnits:                  "",
	donFree:                      "",
	donFunctnStat:                "",
	donFvcAfterPreop:             "",
	donFvcBeforePreop:            "",
	donGender:                    "",
	donHaploTyMatch:              "",
	donHbvAntibody:               "",
	donHbvClinical:               "",
	donHbvDna:                    "",
	donHbvHdv:                    "",
	donHbvLiHistology:            "",
	donHbvSurfAntigen:            "",
	donHbvTested:                 "",
	donHcvAntibody:               "",
	donHcvClinical:               "",
	donHcvLiHistology:            "",
	donHcvRiba:                   "",
	donHcvRna:                    "",
	donHcvTested:                 "",
	donHealthInsur:               "",
	donHgtCm:                     "",
	donHistCancer:                "",
	donHistCigarette:             "",
	donHistHyperten:              "",
	donHivAntibody:               "",
	donHivClinical:               "",
	donHivConfirm:                "",
	donHivRna:                    "",
	donHivScreen:                 "",
	donHivTested:                 "",
	donHlaTyp:                    "",
	donHlaTypNotDone:             "",
	donHmoPpo:                    "",
	donHomeState:                 "",
	donHypertenDiet:              "",
	donHypertenDiuretics:         "",
	donHypertenOtherMeds:         "",
	donHypertenPostop:            "",
	donInitDischrgDt:             "",
	donInrPostop:                 "",
	donInrPreop:                  "",
	donIntraopCompl:              "",
	donIntraopComplReason:        "",
	donKiBiopsy:                  "",
	donKiCreatDischrg:            "",
	donKiCreatPostop:             "",
	donKiCreatPreop:              "",
	donKiOtherCompl:              "",
	donKiOtherComplIntervention:  "",
	donKiOtherIntervention:       "",
	donKiOtherInterventionDt:     "",
	donKiPctGs:                   "",
	donKiProcedureConvert:        "",
	donKiProcedureTy:             "",
	donKiReadmit:                 "",
	donKiReadmitDt:               "",
	donKiReadmitReason:           "",
	donKiReop:                    "",
	donKiReopBleen:               "",
	donKiReopBleenDt:             "",
	donKiReopBowel:               "",
	donKiReopBowelDt:             "",
	donKiReopHernia:              "",
	donKiReopHerniaDt:            "",
	donKiReopOther:               "",
	donKiReopOtherDt:             "",
	donKiReopVasc:                "",
	donKiReopVascDt:              "",
	donKiVascCompl:               "",
	donKiVascComplIntervention:   "",
	donLengthHospStay:            "",
	donLivingDonCod:              "",
	donLiBiliaryCompl:            "",
	donLiBiliaryComplGrade:       "",
	donLiBiopsy:                  "",
	donLiBiopsyMacroFat:          "",
	donLiBiopsyMicroFat:          "",
	donLiCreatPostop:             "",
	donLiCreatPreop:              "",
	donLiOtherCompl:              "",
	donLiOtherComplIntervention:  "",
	donLiOtherIntervention:       "",
	donLiOtherInterventionDt:     "",
	donLiProcedureTy:             "",
	donLiReadmit:                 "",
	donLiReadmitDt:               "",
	donLiReadmitReason:           "",
	donLiReop:                    "",
	donLiReopBiliary:             "",
	donLiReopBiliaryDt:           "",
	donLiReopBleed:               "",
	donLiReopBleedDt:             "",
	donLiReopBowel:               "",
	donLiReopBowelDt:             "",
	donLiReopFail:                "",
	donLiReopFailDt:              "",
	donLiReopHernia:              "",
	donLiReopHerniaDt:            "",
	donLiReopOther:               "",
	donLiReopOtherDt:             "",
	donLiReopVasc:                "",
	donLiReopVascDt:              "",
	donLiVascCompl:               "",
	donLiVascComplIntervention:   "",
	donLuArrhythm:                "",
	donLuCapacityPreop:           "",
	donLuCompl:                   "",
	donLuComplReason:             "",
	donLuProcedureConvert:        "",
	donLuProcedureTy:             "",
	donLuReadmit:                 "",
	donLuReadmitDt:               "",
	donLuReadmitReason:           "",
	donLuThoracTubes:             "",
	donMaritalStat:               "",
	donMedicaid:                  "",
	donMedicare:                  "",
	donNonAutoBlood:              "",
	donOpoRunMatch:               "",
	donOrg1:                      "",
	donOrg2:                      "",
	donOtherGovt:                 "",
	donOtherTobaccoUse:           "",
	donPackYears:                 "",
	donPao2Preop:                 "",
	donPhyscCapacity:             "",
	donPltUnits:                  "",
	donPostopTestDt:              "",
	donPrbcUnits:                 "",
	donPrimaryPay:                "",
	donPrivInsur:                 "",
	donRace:                      "",
	donRaceSrtr:                  "",
	donRecovDt:                   "",
	donRecovTxSameCtr:            "",
	donRelationshipTy:            "",
	donSacrificeLobe:             "",
	donSelf:                      "",
	donSgotPostop:                "",
	donSgotPreop:                 "",
	donSgptPostop:                "",
	donSgptPreop:                 "",
	donStat:                      "",
	donStatDt:                    "",
	donTargetSource1:             "",
	donTargetSource2:             "",
	donTlcAfterPreop:             "",
	donTlcBeforePreop:            "",
	donTy:                        "",
	donTypMethclass1:             "",
	donTypMethclass1Dt:           "",
	donTypMethclass2:             "",
	donTypMethclass2Dt:           "",
	donUrinePostopProtein:        "",
	donUrinePostopRatio:          "",
	donUrinePreopProtein:         "",
	donUrinePreopRatio:           "",
	donVirusesTested:             "",
	donWgtKg:                     "",
	donWorkIncome:                "",
	donWorkNoStat:                "",
	donWorkYesStat:               "",
	donYearEntryUs:               "",
	persId:                       "",
	persSsaDeathDt:               "",
});

function DonLivFormReducer(state = initialState, action) {
	switch (action.type) {
		case constant.CHANGE_DONORID:
			return state.set('donorId', action.donorId);
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
		case constant.CHANGE_DONALBUMINPOSTOP:
			return state.set('donAlbuminPostop', action.donAlbuminPostop);
		case constant.CHANGE_DONALBUMINPREOP:
			return state.set('donAlbuminPreop', action.donAlbuminPreop);
		case constant.CHANGE_DONALKPHOSPOSTOP:
			return state.set('donAlkphosPostop', action.donAlkphosPostop);
		case constant.CHANGE_DONALKPHOSPREOP:
			return state.set('donAlkphosPreop', action.donAlkphosPreop);
		case constant.CHANGE_DONANASTHCOMPL:
			return state.set('donAnasthCompl', action.donAnasthCompl);
		case constant.CHANGE_DONARRHYTHM:
			return state.set('donArrhythm', action.donArrhythm);
		case constant.CHANGE_DONB1:
			return state.set('donB1', action.donB1);
		case constant.CHANGE_DONB2:
			return state.set('donB2', action.donB2);
		case constant.CHANGE_DONBILIPOSTOP:
			return state.set('donBiliPostop', action.donBiliPostop);
		case constant.CHANGE_DONBILIPREOP:
			return state.set('donBiliPreop', action.donBiliPreop);
		case constant.CHANGE_DONBPDISCHRGDIAST:
			return state.set('donBpDischrgDiast', action.donBpDischrgDiast);
		case constant.CHANGE_DONBPDISCHRGSYST:
			return state.set('donBpDischrgSyst', action.donBpDischrgSyst);
		case constant.CHANGE_DONBPPOSTOPDIAST:
			return state.set('donBpPostopDiast', action.donBpPostopDiast);
		case constant.CHANGE_DONBPPOSTOPSYST:
			return state.set('donBpPostopSyst', action.donBpPostopSyst);
		case constant.CHANGE_DONBPPREOPDIAST:
			return state.set('donBpPreopDiast', action.donBpPreopDiast);
		case constant.CHANGE_DONBPPREOPSYST:
			return state.set('donBpPreopSyst', action.donBpPreopSyst);
		case constant.CHANGE_DONBW4:
			return state.set('donBw4', action.donBw4);
		case constant.CHANGE_DONBW6:
			return state.set('donBw6', action.donBw6);
		case constant.CHANGE_DONC1:
			return state.set('donC1', action.donC1);
		case constant.CHANGE_DONC2:
			return state.set('donC2', action.donC2);
		case constant.CHANGE_DONCANCERFREEINTERVAL:
			return state.set('donCancerFreeInterval', action.donCancerFreeInterval);
		case constant.CHANGE_DONCITIZENSHIP:
			return state.set('donCitizenship', action.donCitizenship);
		case constant.CHANGE_DONCMV:
			return state.set('donCmv', action.donCmv);
		case constant.CHANGE_DONCMVCLINICAL:
			return state.set('donCmvClinical', action.donCmvClinical);
		case constant.CHANGE_DONCMVCULT:
			return state.set('donCmvCult', action.donCmvCult);
		case constant.CHANGE_DONCMVIGG:
			return state.set('donCmvIgg', action.donCmvIgg);
		case constant.CHANGE_DONCMVIGM:
			return state.set('donCmvIgm', action.donCmvIgm);
		case constant.CHANGE_DONCMVNUCLEIC:
			return state.set('donCmvNucleic', action.donCmvNucleic);
		case constant.CHANGE_DONCMVTESTED:
			return state.set('donCmvTested', action.donCmvTested);
		case constant.CHANGE_DONDIAB:
			return state.set('donDiab', action.donDiab);
		case constant.CHANGE_DONDIABTREAT:
			return state.set('donDiabTreat', action.donDiabTreat);
		case constant.CHANGE_DONDONATION:
			return state.set('donDonation', action.donDonation);
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
		case constant.CHANGE_DONDURATIONABSTINENCE:
			return state.set('donDurationAbstinence', action.donDurationAbstinence);
		case constant.CHANGE_DONEBVCLINICAL:
			return state.set('donEbvClinical', action.donEbvClinical);
		case constant.CHANGE_DONEBVDNA:
			return state.set('donEbvDna', action.donEbvDna);
		case constant.CHANGE_DONEBVIGG:
			return state.set('donEbvIgg', action.donEbvIgg);
		case constant.CHANGE_DONEBVIGM:
			return state.set('donEbvIgm', action.donEbvIgm);
		case constant.CHANGE_DONEBVTESTED:
			return state.set('donEbvTested', action.donEbvTested);
		case constant.CHANGE_DONEDUCATION:
			return state.set('donEducation', action.donEducation);
		case constant.CHANGE_DONETHNICITYSRTR:
			return state.set('donEthnicitySrtr', action.donEthnicitySrtr);
		case constant.CHANGE_DONFEFAFTERPREOP:
			return state.set('donFefAfterPreop', action.donFefAfterPreop);
		case constant.CHANGE_DONFEFBEFOREPREOP:
			return state.set('donFefBeforePreop', action.donFefBeforePreop);
		case constant.CHANGE_DONFEV1AFTERPREOP:
			return state.set('donFev1AfterPreop', action.donFev1AfterPreop);
		case constant.CHANGE_DONFEV1BEFOREPREOP:
			return state.set('donFev1BeforePreop', action.donFev1BeforePreop);
		case constant.CHANGE_DONFFPUNITS:
			return state.set('donFfpUnits', action.donFfpUnits);
		case constant.CHANGE_DONFREE:
			return state.set('donFree', action.donFree);
		case constant.CHANGE_DONFUNCTNSTAT:
			return state.set('donFunctnStat', action.donFunctnStat);
		case constant.CHANGE_DONFVCAFTERPREOP:
			return state.set('donFvcAfterPreop', action.donFvcAfterPreop);
		case constant.CHANGE_DONFVCBEFOREPREOP:
			return state.set('donFvcBeforePreop', action.donFvcBeforePreop);
		case constant.CHANGE_DONGENDER:
			return state.set('donGender', action.donGender);
		case constant.CHANGE_DONHAPLOTYMATCH:
			return state.set('donHaploTyMatch', action.donHaploTyMatch);
		case constant.CHANGE_DONHBVANTIBODY:
			return state.set('donHbvAntibody', action.donHbvAntibody);
		case constant.CHANGE_DONHBVCLINICAL:
			return state.set('donHbvClinical', action.donHbvClinical);
		case constant.CHANGE_DONHBVDNA:
			return state.set('donHbvDna', action.donHbvDna);
		case constant.CHANGE_DONHBVHDV:
			return state.set('donHbvHdv', action.donHbvHdv);
		case constant.CHANGE_DONHBVLIHISTOLOGY:
			return state.set('donHbvLiHistology', action.donHbvLiHistology);
		case constant.CHANGE_DONHBVSURFANTIGEN:
			return state.set('donHbvSurfAntigen', action.donHbvSurfAntigen);
		case constant.CHANGE_DONHBVTESTED:
			return state.set('donHbvTested', action.donHbvTested);
		case constant.CHANGE_DONHCVANTIBODY:
			return state.set('donHcvAntibody', action.donHcvAntibody);
		case constant.CHANGE_DONHCVCLINICAL:
			return state.set('donHcvClinical', action.donHcvClinical);
		case constant.CHANGE_DONHCVLIHISTOLOGY:
			return state.set('donHcvLiHistology', action.donHcvLiHistology);
		case constant.CHANGE_DONHCVRIBA:
			return state.set('donHcvRiba', action.donHcvRiba);
		case constant.CHANGE_DONHCVRNA:
			return state.set('donHcvRna', action.donHcvRna);
		case constant.CHANGE_DONHCVTESTED:
			return state.set('donHcvTested', action.donHcvTested);
		case constant.CHANGE_DONHEALTHINSUR:
			return state.set('donHealthInsur', action.donHealthInsur);
		case constant.CHANGE_DONHGTCM:
			return state.set('donHgtCm', action.donHgtCm);
		case constant.CHANGE_DONHISTCANCER:
			return state.set('donHistCancer', action.donHistCancer);
		case constant.CHANGE_DONHISTCIGARETTE:
			return state.set('donHistCigarette', action.donHistCigarette);
		case constant.CHANGE_DONHISTHYPERTEN:
			return state.set('donHistHyperten', action.donHistHyperten);
		case constant.CHANGE_DONHIVANTIBODY:
			return state.set('donHivAntibody', action.donHivAntibody);
		case constant.CHANGE_DONHIVCLINICAL:
			return state.set('donHivClinical', action.donHivClinical);
		case constant.CHANGE_DONHIVCONFIRM:
			return state.set('donHivConfirm', action.donHivConfirm);
		case constant.CHANGE_DONHIVRNA:
			return state.set('donHivRna', action.donHivRna);
		case constant.CHANGE_DONHIVSCREEN:
			return state.set('donHivScreen', action.donHivScreen);
		case constant.CHANGE_DONHIVTESTED:
			return state.set('donHivTested', action.donHivTested);
		case constant.CHANGE_DONHLATYP:
			return state.set('donHlaTyp', action.donHlaTyp);
		case constant.CHANGE_DONHLATYPNOTDONE:
			return state.set('donHlaTypNotDone', action.donHlaTypNotDone);
		case constant.CHANGE_DONHMOPPO:
			return state.set('donHmoPpo', action.donHmoPpo);
		case constant.CHANGE_DONHOMESTATE:
			return state.set('donHomeState', action.donHomeState);
		case constant.CHANGE_DONHYPERTENDIET:
			return state.set('donHypertenDiet', action.donHypertenDiet);
		case constant.CHANGE_DONHYPERTENDIURETICS:
			return state.set('donHypertenDiuretics', action.donHypertenDiuretics);
		case constant.CHANGE_DONHYPERTENOTHERMEDS:
			return state.set('donHypertenOtherMeds', action.donHypertenOtherMeds);
		case constant.CHANGE_DONHYPERTENPOSTOP:
			return state.set('donHypertenPostop', action.donHypertenPostop);
		case constant.CHANGE_DONINITDISCHRGDT:
			return state.set('donInitDischrgDt', action.donInitDischrgDt);
		case constant.CHANGE_DONINRPOSTOP:
			return state.set('donInrPostop', action.donInrPostop);
		case constant.CHANGE_DONINRPREOP:
			return state.set('donInrPreop', action.donInrPreop);
		case constant.CHANGE_DONINTRAOPCOMPL:
			return state.set('donIntraopCompl', action.donIntraopCompl);
		case constant.CHANGE_DONINTRAOPCOMPLREASON:
			return state.set('donIntraopComplReason', action.donIntraopComplReason);
		case constant.CHANGE_DONKIBIOPSY:
			return state.set('donKiBiopsy', action.donKiBiopsy);
		case constant.CHANGE_DONKICREATDISCHRG:
			return state.set('donKiCreatDischrg', action.donKiCreatDischrg);
		case constant.CHANGE_DONKICREATPOSTOP:
			return state.set('donKiCreatPostop', action.donKiCreatPostop);
		case constant.CHANGE_DONKICREATPREOP:
			return state.set('donKiCreatPreop', action.donKiCreatPreop);
		case constant.CHANGE_DONKIOTHERCOMPL:
			return state.set('donKiOtherCompl', action.donKiOtherCompl);
		case constant.CHANGE_DONKIOTHERCOMPLINTERVENTION:
			return state.set('donKiOtherComplIntervention', action.donKiOtherComplIntervention);
		case constant.CHANGE_DONKIOTHERINTERVENTION:
			return state.set('donKiOtherIntervention', action.donKiOtherIntervention);
		case constant.CHANGE_DONKIOTHERINTERVENTIONDT:
			return state.set('donKiOtherInterventionDt', action.donKiOtherInterventionDt);
		case constant.CHANGE_DONKIPCTGS:
			return state.set('donKiPctGs', action.donKiPctGs);
		case constant.CHANGE_DONKIPROCEDURECONVERT:
			return state.set('donKiProcedureConvert', action.donKiProcedureConvert);
		case constant.CHANGE_DONKIPROCEDURETY:
			return state.set('donKiProcedureTy', action.donKiProcedureTy);
		case constant.CHANGE_DONKIREADMIT:
			return state.set('donKiReadmit', action.donKiReadmit);
		case constant.CHANGE_DONKIREADMITDT:
			return state.set('donKiReadmitDt', action.donKiReadmitDt);
		case constant.CHANGE_DONKIREADMITREASON:
			return state.set('donKiReadmitReason', action.donKiReadmitReason);
		case constant.CHANGE_DONKIREOP:
			return state.set('donKiReop', action.donKiReop);
		case constant.CHANGE_DONKIREOPBLEEN:
			return state.set('donKiReopBleen', action.donKiReopBleen);
		case constant.CHANGE_DONKIREOPBLEENDT:
			return state.set('donKiReopBleenDt', action.donKiReopBleenDt);
		case constant.CHANGE_DONKIREOPBOWEL:
			return state.set('donKiReopBowel', action.donKiReopBowel);
		case constant.CHANGE_DONKIREOPBOWELDT:
			return state.set('donKiReopBowelDt', action.donKiReopBowelDt);
		case constant.CHANGE_DONKIREOPHERNIA:
			return state.set('donKiReopHernia', action.donKiReopHernia);
		case constant.CHANGE_DONKIREOPHERNIADT:
			return state.set('donKiReopHerniaDt', action.donKiReopHerniaDt);
		case constant.CHANGE_DONKIREOPOTHER:
			return state.set('donKiReopOther', action.donKiReopOther);
		case constant.CHANGE_DONKIREOPOTHERDT:
			return state.set('donKiReopOtherDt', action.donKiReopOtherDt);
		case constant.CHANGE_DONKIREOPVASC:
			return state.set('donKiReopVasc', action.donKiReopVasc);
		case constant.CHANGE_DONKIREOPVASCDT:
			return state.set('donKiReopVascDt', action.donKiReopVascDt);
		case constant.CHANGE_DONKIVASCCOMPL:
			return state.set('donKiVascCompl', action.donKiVascCompl);
		case constant.CHANGE_DONKIVASCCOMPLINTERVENTION:
			return state.set('donKiVascComplIntervention', action.donKiVascComplIntervention);
		case constant.CHANGE_DONLENGTHHOSPSTAY:
			return state.set('donLengthHospStay', action.donLengthHospStay);
		case constant.CHANGE_DONLIVINGDONCOD:
			return state.set('donLivingDonCod', action.donLivingDonCod);
		case constant.CHANGE_DONLIBILIARYCOMPL:
			return state.set('donLiBiliaryCompl', action.donLiBiliaryCompl);
		case constant.CHANGE_DONLIBILIARYCOMPLGRADE:
			return state.set('donLiBiliaryComplGrade', action.donLiBiliaryComplGrade);
		case constant.CHANGE_DONLIBIOPSY:
			return state.set('donLiBiopsy', action.donLiBiopsy);
		case constant.CHANGE_DONLIBIOPSYMACROFAT:
			return state.set('donLiBiopsyMacroFat', action.donLiBiopsyMacroFat);
		case constant.CHANGE_DONLIBIOPSYMICROFAT:
			return state.set('donLiBiopsyMicroFat', action.donLiBiopsyMicroFat);
		case constant.CHANGE_DONLICREATPOSTOP:
			return state.set('donLiCreatPostop', action.donLiCreatPostop);
		case constant.CHANGE_DONLICREATPREOP:
			return state.set('donLiCreatPreop', action.donLiCreatPreop);
		case constant.CHANGE_DONLIOTHERCOMPL:
			return state.set('donLiOtherCompl', action.donLiOtherCompl);
		case constant.CHANGE_DONLIOTHERCOMPLINTERVENTION:
			return state.set('donLiOtherComplIntervention', action.donLiOtherComplIntervention);
		case constant.CHANGE_DONLIOTHERINTERVENTION:
			return state.set('donLiOtherIntervention', action.donLiOtherIntervention);
		case constant.CHANGE_DONLIOTHERINTERVENTIONDT:
			return state.set('donLiOtherInterventionDt', action.donLiOtherInterventionDt);
		case constant.CHANGE_DONLIPROCEDURETY:
			return state.set('donLiProcedureTy', action.donLiProcedureTy);
		case constant.CHANGE_DONLIREADMIT:
			return state.set('donLiReadmit', action.donLiReadmit);
		case constant.CHANGE_DONLIREADMITDT:
			return state.set('donLiReadmitDt', action.donLiReadmitDt);
		case constant.CHANGE_DONLIREADMITREASON:
			return state.set('donLiReadmitReason', action.donLiReadmitReason);
		case constant.CHANGE_DONLIREOP:
			return state.set('donLiReop', action.donLiReop);
		case constant.CHANGE_DONLIREOPBILIARY:
			return state.set('donLiReopBiliary', action.donLiReopBiliary);
		case constant.CHANGE_DONLIREOPBILIARYDT:
			return state.set('donLiReopBiliaryDt', action.donLiReopBiliaryDt);
		case constant.CHANGE_DONLIREOPBLEED:
			return state.set('donLiReopBleed', action.donLiReopBleed);
		case constant.CHANGE_DONLIREOPBLEEDDT:
			return state.set('donLiReopBleedDt', action.donLiReopBleedDt);
		case constant.CHANGE_DONLIREOPBOWEL:
			return state.set('donLiReopBowel', action.donLiReopBowel);
		case constant.CHANGE_DONLIREOPBOWELDT:
			return state.set('donLiReopBowelDt', action.donLiReopBowelDt);
		case constant.CHANGE_DONLIREOPFAIL:
			return state.set('donLiReopFail', action.donLiReopFail);
		case constant.CHANGE_DONLIREOPFAILDT:
			return state.set('donLiReopFailDt', action.donLiReopFailDt);
		case constant.CHANGE_DONLIREOPHERNIA:
			return state.set('donLiReopHernia', action.donLiReopHernia);
		case constant.CHANGE_DONLIREOPHERNIADT:
			return state.set('donLiReopHerniaDt', action.donLiReopHerniaDt);
		case constant.CHANGE_DONLIREOPOTHER:
			return state.set('donLiReopOther', action.donLiReopOther);
		case constant.CHANGE_DONLIREOPOTHERDT:
			return state.set('donLiReopOtherDt', action.donLiReopOtherDt);
		case constant.CHANGE_DONLIREOPVASC:
			return state.set('donLiReopVasc', action.donLiReopVasc);
		case constant.CHANGE_DONLIREOPVASCDT:
			return state.set('donLiReopVascDt', action.donLiReopVascDt);
		case constant.CHANGE_DONLIVASCCOMPL:
			return state.set('donLiVascCompl', action.donLiVascCompl);
		case constant.CHANGE_DONLIVASCCOMPLINTERVENTION:
			return state.set('donLiVascComplIntervention', action.donLiVascComplIntervention);
		case constant.CHANGE_DONLUARRHYTHM:
			return state.set('donLuArrhythm', action.donLuArrhythm);
		case constant.CHANGE_DONLUCAPACITYPREOP:
			return state.set('donLuCapacityPreop', action.donLuCapacityPreop);
		case constant.CHANGE_DONLUCOMPL:
			return state.set('donLuCompl', action.donLuCompl);
		case constant.CHANGE_DONLUCOMPLREASON:
			return state.set('donLuComplReason', action.donLuComplReason);
		case constant.CHANGE_DONLUPROCEDURECONVERT:
			return state.set('donLuProcedureConvert', action.donLuProcedureConvert);
		case constant.CHANGE_DONLUPROCEDURETY:
			return state.set('donLuProcedureTy', action.donLuProcedureTy);
		case constant.CHANGE_DONLUREADMIT:
			return state.set('donLuReadmit', action.donLuReadmit);
		case constant.CHANGE_DONLUREADMITDT:
			return state.set('donLuReadmitDt', action.donLuReadmitDt);
		case constant.CHANGE_DONLUREADMITREASON:
			return state.set('donLuReadmitReason', action.donLuReadmitReason);
		case constant.CHANGE_DONLUTHORACTUBES:
			return state.set('donLuThoracTubes', action.donLuThoracTubes);
		case constant.CHANGE_DONMARITALSTAT:
			return state.set('donMaritalStat', action.donMaritalStat);
		case constant.CHANGE_DONMEDICAID:
			return state.set('donMedicaid', action.donMedicaid);
		case constant.CHANGE_DONMEDICARE:
			return state.set('donMedicare', action.donMedicare);
		case constant.CHANGE_DONNONAUTOBLOOD:
			return state.set('donNonAutoBlood', action.donNonAutoBlood);
		case constant.CHANGE_DONOPORUNMATCH:
			return state.set('donOpoRunMatch', action.donOpoRunMatch);
		case constant.CHANGE_DONORG1:
			return state.set('donOrg1', action.donOrg1);
		case constant.CHANGE_DONORG2:
			return state.set('donOrg2', action.donOrg2);
		case constant.CHANGE_DONOTHERGOVT:
			return state.set('donOtherGovt', action.donOtherGovt);
		case constant.CHANGE_DONOTHERTOBACCOUSE:
			return state.set('donOtherTobaccoUse', action.donOtherTobaccoUse);
		case constant.CHANGE_DONPACKYEARS:
			return state.set('donPackYears', action.donPackYears);
		case constant.CHANGE_DONPAO2PREOP:
			return state.set('donPao2Preop', action.donPao2Preop);
		case constant.CHANGE_DONPHYSCCAPACITY:
			return state.set('donPhyscCapacity', action.donPhyscCapacity);
		case constant.CHANGE_DONPLTUNITS:
			return state.set('donPltUnits', action.donPltUnits);
		case constant.CHANGE_DONPOSTOPTESTDT:
			return state.set('donPostopTestDt', action.donPostopTestDt);
		case constant.CHANGE_DONPRBCUNITS:
			return state.set('donPrbcUnits', action.donPrbcUnits);
		case constant.CHANGE_DONPRIMARYPAY:
			return state.set('donPrimaryPay', action.donPrimaryPay);
		case constant.CHANGE_DONPRIVINSUR:
			return state.set('donPrivInsur', action.donPrivInsur);
		case constant.CHANGE_DONRACE:
			return state.set('donRace', action.donRace);
		case constant.CHANGE_DONRACESRTR:
			return state.set('donRaceSrtr', action.donRaceSrtr);
		case constant.CHANGE_DONRECOVDT:
			return state.set('donRecovDt', action.donRecovDt);
		case constant.CHANGE_DONRECOVTXSAMECTR:
			return state.set('donRecovTxSameCtr', action.donRecovTxSameCtr);
		case constant.CHANGE_DONRELATIONSHIPTY:
			return state.set('donRelationshipTy', action.donRelationshipTy);
		case constant.CHANGE_DONSACRIFICELOBE:
			return state.set('donSacrificeLobe', action.donSacrificeLobe);
		case constant.CHANGE_DONSELF:
			return state.set('donSelf', action.donSelf);
		case constant.CHANGE_DONSGOTPOSTOP:
			return state.set('donSgotPostop', action.donSgotPostop);
		case constant.CHANGE_DONSGOTPREOP:
			return state.set('donSgotPreop', action.donSgotPreop);
		case constant.CHANGE_DONSGPTPOSTOP:
			return state.set('donSgptPostop', action.donSgptPostop);
		case constant.CHANGE_DONSGPTPREOP:
			return state.set('donSgptPreop', action.donSgptPreop);
		case constant.CHANGE_DONSTAT:
			return state.set('donStat', action.donStat);
		case constant.CHANGE_DONSTATDT:
			return state.set('donStatDt', action.donStatDt);
		case constant.CHANGE_DONTARGETSOURCE1:
			return state.set('donTargetSource1', action.donTargetSource1);
		case constant.CHANGE_DONTARGETSOURCE2:
			return state.set('donTargetSource2', action.donTargetSource2);
		case constant.CHANGE_DONTLCAFTERPREOP:
			return state.set('donTlcAfterPreop', action.donTlcAfterPreop);
		case constant.CHANGE_DONTLCBEFOREPREOP:
			return state.set('donTlcBeforePreop', action.donTlcBeforePreop);
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
		case constant.CHANGE_DONURINEPOSTOPPROTEIN:
			return state.set('donUrinePostopProtein', action.donUrinePostopProtein);
		case constant.CHANGE_DONURINEPOSTOPRATIO:
			return state.set('donUrinePostopRatio', action.donUrinePostopRatio);
		case constant.CHANGE_DONURINEPREOPPROTEIN:
			return state.set('donUrinePreopProtein', action.donUrinePreopProtein);
		case constant.CHANGE_DONURINEPREOPRATIO:
			return state.set('donUrinePreopRatio', action.donUrinePreopRatio);
		case constant.CHANGE_DONVIRUSESTESTED:
			return state.set('donVirusesTested', action.donVirusesTested);
		case constant.CHANGE_DONWGTKG:
			return state.set('donWgtKg', action.donWgtKg);
		case constant.CHANGE_DONWORKINCOME:
			return state.set('donWorkIncome', action.donWorkIncome);
		case constant.CHANGE_DONWORKNOSTAT:
			return state.set('donWorkNoStat', action.donWorkNoStat);
		case constant.CHANGE_DONWORKYESSTAT:
			return state.set('donWorkYesStat', action.donWorkYesStat);
		case constant.CHANGE_DONYEARENTRYUS:
			return state.set('donYearEntryUs', action.donYearEntryUs);
		case constant.CHANGE_PERSID:
			return state.set('persId', action.persId);
		case constant.CHANGE_PERSSSADEATHDT:
			return state.set('persSsaDeathDt', action.persSsaDeathDt);
		default:
			 return state;
	}
}

export default DonLivFormReducer;
