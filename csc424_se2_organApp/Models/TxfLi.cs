﻿using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    /// <summary>TxfLi Model.</summary>
    /// <remarks>96 attributes for liver transplant follow up records.</remarks>
    public partial class TxfLi
    {
        public string OrgAr { get; set; }
        public string OrgTy { get; set; }
        public decimal? PersId { get; set; }
        public decimal? PxId { get; set; }
        public decimal? RecCtrId { get; set; }
        public decimal? RecOpoId { get; set; }
        public DateTime? RecTxDt { get; set; }
        public string RecTxOrgTy { get; set; }
        public decimal? RecTxTy { get; set; }
        public decimal? TflAcademicLevel { get; set; }
        public decimal? TflAcademicProgress { get; set; }
        public decimal? TflAcuteRejBiopsyConfirmed { get; set; }
        public decimal? TflAcuteRejEpisode { get; set; }
        public double? TflAlbumin { get; set; }
        public double? TflAlkphos { get; set; }
        public string TflAntivrlTherapy { get; set; }
        public decimal? TflAntivrlTherapyTy { get; set; }
        public decimal? TflAntivrlTherapyTyAcyclovir { get; set; }
        public decimal? TflAntivrlTherapyTyCytogam { get; set; }
        public decimal? TflAntivrlTherapyTyCytovene { get; set; }
        public decimal? TflAntivrlTherapyTyEpivir { get; set; }
        public decimal? TflAntivrlTherapyTyFluVac { get; set; }
        public decimal? TflAntivrlTherapyTyGamimune { get; set; }
        public decimal? TflAntivrlTherapyTyGammagard { get; set; }
        public decimal? TflAntivrlTherapyTyHbig { get; set; }
        public decimal? TflAntivrlTherapyTyOther { get; set; }
        public decimal? TflAntivrlTherapyTyValcyte { get; set; }
        public decimal? TflAntivrlTherapyTyValtrex { get; set; }
        public double? TflBmi { get; set; }
        public string TflCad { get; set; }
        public decimal? TflCareProvBy { get; set; }
        public string TflCmvIgg { get; set; }
        public string TflCmvIgm { get; set; }
        public decimal? TflCod { get; set; }
        public decimal? TflCod2 { get; set; }
        public decimal? TflCod3 { get; set; }
        public decimal? TflCognitiveDevelop { get; set; }
        public double? TflCreat { get; set; }
        public string TflDiabDuringFol { get; set; }
        public decimal? TflEmplStatPre04 { get; set; }
        public string TflFailBiliary { get; set; }
        public DateTime? TflFailDt { get; set; }
        public string TflFailHepDenovo { get; set; }
        public string TflFailHepRecur { get; set; }
        public string TflFailInfect { get; set; }
        public string TflFailPrimeGraftFail { get; set; }
        public string TflFailPxNoncomp { get; set; }
        public string TflFailRecurDisease { get; set; }
        public string TflFailRejAcute { get; set; }
        public string TflFailRejChronic { get; set; }
        public string TflFailVascThromb { get; set; }
        public decimal? TflFolCd { get; set; }
        public decimal? TflFunctnStat { get; set; }
        public string TflGraftStat { get; set; }
        public string TflHepaticArterThromb { get; set; }
        public string TflHepaticOutflowObstruct { get; set; }
        public double? TflHgtCm { get; set; }
        public DateTime? TflHgtWgtDt { get; set; }
        public string TflHosp { get; set; }
        public double? TflHospNum { get; set; }
        public string TflImmunoDiscont { get; set; }
        public decimal? TflImmunoMaintMeds { get; set; }
        public double? TflInr { get; set; }
        public string TflInsulinDepnd { get; set; }
        public DateTime? TflLabDt { get; set; }
        public string TflMalig { get; set; }
        public string TflMaligDonRelated { get; set; }
        public string TflMaligLymph { get; set; }
        public string TflMaligRecurTumor { get; set; }
        public string TflMaligTumor { get; set; }
        public decimal? TflMotorDevelop { get; set; }
        public string TflOtherTherapy { get; set; }
        public decimal? TflOtherTherapyTy { get; set; }
        public decimal? TflOtherTherapyTyPhotoph { get; set; }
        public decimal? TflOtherTherapyTyPlasmaph { get; set; }
        public decimal? TflOtherTherapyTyTli { get; set; }
        public string TflPermState { get; set; }
        public decimal? TflPhyscCapacity { get; set; }
        public string TflPortalVeinThromb { get; set; }
        public decimal? TflPrimaryPay { get; set; }
        public string TflPxNoncomp { get; set; }
        public string TflPxResearch { get; set; }
        public string TflPxStat { get; set; }
        public DateTime? TflPxStatDt { get; set; }
        public double? TflRejEventNum { get; set; }
        public string TflRejTreat { get; set; }
        public double? TflSgot { get; set; }
        public double? TflSgpt { get; set; }
        public double? TflTotBili { get; set; }
        public DateTime? TflTxferDt { get; set; }
        public double? TflWgtKg { get; set; }
        public string TflWorkIncome { get; set; }
        public decimal? TflWorkNoStat { get; set; }
        public decimal? TflWorkYesStat { get; set; }
        public decimal TrrFolId { get; set; }
        public decimal? TrrId { get; set; }
        public decimal? TxId { get; set; }
    }
}
