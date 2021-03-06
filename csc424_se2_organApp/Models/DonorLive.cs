﻿using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    /// <summary>DonorLive Model</summary>
    /// <remarks>224 attributes for living organ donors.</remarks>
    public partial class DonorLive
    {
        public decimal DonorId { get; set; }
        public decimal? DonA1 { get; set; }
        public decimal? DonA2 { get; set; }
        public string DonAbo { get; set; }
        public double? DonAge { get; set; }
        public double? DonAgeInMonths { get; set; }
        public double? DonAlbuminPostop { get; set; }
        public double? DonAlbuminPreop { get; set; }
        public double? DonAlkphosPostop { get; set; }
        public double? DonAlkphosPreop { get; set; }
        public string DonAnasthCompl { get; set; }
        public decimal? DonArrhythm { get; set; }
        public decimal? DonB1 { get; set; }
        public decimal? DonB2 { get; set; }
        public double? DonBiliPostop { get; set; }
        public double? DonBiliPreop { get; set; }
        public double? DonBpDischrgDiast { get; set; }
        public double? DonBpDischrgSyst { get; set; }
        public double? DonBpPostopDiast { get; set; }
        public double? DonBpPostopSyst { get; set; }
        public double? DonBpPreopDiast { get; set; }
        public double? DonBpPreopSyst { get; set; }
        public decimal? DonBw4 { get; set; }
        public decimal? DonBw6 { get; set; }
        public decimal? DonC1 { get; set; }
        public decimal? DonC2 { get; set; }
        public decimal? DonCancerFreeInterval { get; set; }
        public decimal? DonCitizenship { get; set; }
        public string DonCmv { get; set; }
        public string DonCmvClinical { get; set; }
        public string DonCmvCult { get; set; }
        public string DonCmvIgg { get; set; }
        public string DonCmvIgm { get; set; }
        public string DonCmvNucleic { get; set; }
        public string DonCmvTested { get; set; }
        public string DonDiab { get; set; }
        public decimal? DonDiabTreat { get; set; }
        public string DonDonation { get; set; }
        public decimal? DonDp1 { get; set; }
        public decimal? DonDp2 { get; set; }
        public decimal? DonDq1 { get; set; }
        public decimal? DonDq2 { get; set; }
        public decimal? DonDr1 { get; set; }
        public decimal? DonDr2 { get; set; }
        public decimal? DonDr51 { get; set; }
        public decimal? DonDr52 { get; set; }
        public decimal? DonDr53 { get; set; }
        public decimal? DonDurationAbstinence { get; set; }
        public string DonEbvClinical { get; set; }
        public string DonEbvDna { get; set; }
        public string DonEbvIgg { get; set; }
        public string DonEbvIgm { get; set; }
        public string DonEbvTested { get; set; }
        public decimal? DonEducation { get; set; }
        public string DonEthnicitySrtr { get; set; }
        public double? DonFefAfterPreop { get; set; }
        public double? DonFefBeforePreop { get; set; }
        public double? DonFev1AfterPreop { get; set; }
        public double? DonFev1BeforePreop { get; set; }
        public double? DonFfpUnits { get; set; }
        public string DonFree { get; set; }
        public decimal? DonFunctnStat { get; set; }
        public double? DonFvcAfterPreop { get; set; }
        public double? DonFvcBeforePreop { get; set; }
        public string DonGender { get; set; }
        public decimal? DonHaploTyMatch { get; set; }
        public string DonHbvAntibody { get; set; }
        public string DonHbvClinical { get; set; }
        public string DonHbvDna { get; set; }
        public string DonHbvHdv { get; set; }
        public string DonHbvLiHistology { get; set; }
        public string DonHbvSurfAntigen { get; set; }
        public string DonHbvTested { get; set; }
        public string DonHcvAntibody { get; set; }
        public string DonHcvClinical { get; set; }
        public string DonHcvLiHistology { get; set; }
        public string DonHcvRiba { get; set; }
        public string DonHcvRna { get; set; }
        public string DonHcvTested { get; set; }
        public string DonHealthInsur { get; set; }
        public double? DonHgtCm { get; set; }
        public decimal? DonHistCancer { get; set; }
        public string DonHistCigarette { get; set; }
        public decimal? DonHistHyperten { get; set; }
        public string DonHivAntibody { get; set; }
        public string DonHivClinical { get; set; }
        public string DonHivConfirm { get; set; }
        public string DonHivRna { get; set; }
        public string DonHivScreen { get; set; }
        public string DonHivTested { get; set; }
        public string DonHlaTyp { get; set; }
        public decimal? DonHlaTypNotDone { get; set; }
        public string DonHmoPpo { get; set; }
        public string DonHomeState { get; set; }
        public string DonHypertenDiet { get; set; }
        public string DonHypertenDiuretics { get; set; }
        public string DonHypertenOtherMeds { get; set; }
        public string DonHypertenPostop { get; set; }
        public DateTime? DonInitDischrgDt { get; set; }
        public double? DonInrPostop { get; set; }
        public double? DonInrPreop { get; set; }
        public string DonIntraopCompl { get; set; }
        public decimal? DonIntraopComplReason { get; set; }
        public string DonKiBiopsy { get; set; }
        public double? DonKiCreatDischrg { get; set; }
        public double? DonKiCreatPostop { get; set; }
        public double? DonKiCreatPreop { get; set; }
        public string DonKiOtherCompl { get; set; }
        public decimal? DonKiOtherComplIntervention { get; set; }
        public string DonKiOtherIntervention { get; set; }
        public DateTime? DonKiOtherInterventionDt { get; set; }
        public decimal? DonKiPctGs { get; set; }
        public string DonKiProcedureConvert { get; set; }
        public decimal? DonKiProcedureTy { get; set; }
        public string DonKiReadmit { get; set; }
        public DateTime? DonKiReadmitDt { get; set; }
        public decimal? DonKiReadmitReason { get; set; }
        public string DonKiReop { get; set; }
        public decimal? DonKiReopBleen { get; set; }
        public DateTime? DonKiReopBleenDt { get; set; }
        public decimal? DonKiReopBowel { get; set; }
        public DateTime? DonKiReopBowelDt { get; set; }
        public decimal? DonKiReopHernia { get; set; }
        public DateTime? DonKiReopHerniaDt { get; set; }
        public decimal? DonKiReopOther { get; set; }
        public DateTime? DonKiReopOtherDt { get; set; }
        public decimal? DonKiReopVasc { get; set; }
        public DateTime? DonKiReopVascDt { get; set; }
        public string DonKiVascCompl { get; set; }
        public decimal? DonKiVascComplIntervention { get; set; }
        public double? DonLengthHospStay { get; set; }
        public decimal? DonLivingDonCod { get; set; }
        public string DonLiBiliaryCompl { get; set; }
        public decimal? DonLiBiliaryComplGrade { get; set; }
        public string DonLiBiopsy { get; set; }
        public double? DonLiBiopsyMacroFat { get; set; }
        public double? DonLiBiopsyMicroFat { get; set; }
        public double? DonLiCreatPostop { get; set; }
        public double? DonLiCreatPreop { get; set; }
        public string DonLiOtherCompl { get; set; }
        public decimal? DonLiOtherComplIntervention { get; set; }
        public string DonLiOtherIntervention { get; set; }
        public DateTime? DonLiOtherInterventionDt { get; set; }
        public decimal? DonLiProcedureTy { get; set; }
        public string DonLiReadmit { get; set; }
        public DateTime? DonLiReadmitDt { get; set; }
        public decimal? DonLiReadmitReason { get; set; }
        public string DonLiReop { get; set; }
        public decimal? DonLiReopBiliary { get; set; }
        public DateTime? DonLiReopBiliaryDt { get; set; }
        public decimal? DonLiReopBleed { get; set; }
        public DateTime? DonLiReopBleedDt { get; set; }
        public decimal? DonLiReopBowel { get; set; }
        public DateTime? DonLiReopBowelDt { get; set; }
        public decimal? DonLiReopFail { get; set; }
        public DateTime? DonLiReopFailDt { get; set; }
        public decimal? DonLiReopHernia { get; set; }
        public DateTime? DonLiReopHerniaDt { get; set; }
        public decimal? DonLiReopOther { get; set; }
        public DateTime? DonLiReopOtherDt { get; set; }
        public decimal? DonLiReopVasc { get; set; }
        public DateTime? DonLiReopVascDt { get; set; }
        public string DonLiVascCompl { get; set; }
        public decimal? DonLiVascComplIntervention { get; set; }
        public decimal? DonLuArrhythm { get; set; }
        public double? DonLuCapacityPreop { get; set; }
        public string DonLuCompl { get; set; }
        public decimal? DonLuComplReason { get; set; }
        public string DonLuProcedureConvert { get; set; }
        public decimal? DonLuProcedureTy { get; set; }
        public string DonLuReadmit { get; set; }
        public DateTime? DonLuReadmitDt { get; set; }
        public decimal? DonLuReadmitReason { get; set; }
        public decimal? DonLuThoracTubes { get; set; }
        public decimal? DonMaritalStat { get; set; }
        public string DonMedicaid { get; set; }
        public string DonMedicare { get; set; }
        public string DonNonAutoBlood { get; set; }
        public decimal? DonOpoRunMatch { get; set; }
        public string DonOrg1 { get; set; }
        public string DonOrg2 { get; set; }
        public string DonOtherGovt { get; set; }
        public string DonOtherTobaccoUse { get; set; }
        public decimal? DonPackYears { get; set; }
        public double? DonPao2Preop { get; set; }
        public decimal? DonPhyscCapacity { get; set; }
        public double? DonPltUnits { get; set; }
        public DateTime? DonPostopTestDt { get; set; }
        public double? DonPrbcUnits { get; set; }
        public decimal? DonPrimaryPay { get; set; }
        public string DonPrivInsur { get; set; }
        public decimal? DonRace { get; set; }
        public string DonRaceSrtr { get; set; }
        public DateTime? DonRecovDt { get; set; }
        public string DonRecovTxSameCtr { get; set; }
        public decimal? DonRelationshipTy { get; set; }
        public decimal? DonSacrificeLobe { get; set; }
        public string DonSelf { get; set; }
        public double? DonSgotPostop { get; set; }
        public double? DonSgotPreop { get; set; }
        public double? DonSgptPostop { get; set; }
        public double? DonSgptPreop { get; set; }
        public string DonStat { get; set; }
        public DateTime? DonStatDt { get; set; }
        public decimal? DonTargetSource1 { get; set; }
        public decimal? DonTargetSource2 { get; set; }
        public double? DonTlcAfterPreop { get; set; }
        public double? DonTlcBeforePreop { get; set; }
        public string DonTy { get; set; }
        public decimal? DonTypMethclass1 { get; set; }
        public DateTime? DonTypMethclass1Dt { get; set; }
        public decimal? DonTypMethclass2 { get; set; }
        public DateTime? DonTypMethclass2Dt { get; set; }
        public double? DonUrinePostopProtein { get; set; }
        public double? DonUrinePostopRatio { get; set; }
        public double? DonUrinePreopProtein { get; set; }
        public double? DonUrinePreopRatio { get; set; }
        public string DonVirusesTested { get; set; }
        public double? DonWgtKg { get; set; }
        public string DonWorkIncome { get; set; }
        public decimal? DonWorkNoStat { get; set; }
        public decimal? DonWorkYesStat { get; set; }
        public DateTime? DonYearEntryUs { get; set; }
        public decimal PersId { get; set; }
        public DateTime? PersSsaDeathDt { get; set; }
    }
}
