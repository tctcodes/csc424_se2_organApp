using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class TxfLi
    {
        public TxfLi()
        {
            Malig = new HashSet<Malig>();
            Treatment = new HashSet<Treatment>();
        }

        public string OrgAr { get; set; }
        public string OrgTy { get; set; }
        public int? PersId { get; set; }
        public int? PxId { get; set; }
        public int? RecCtrId { get; set; }
        public int? RecOpoId { get; set; }
        public int? RecTxDt { get; set; }
        public string RecTxOrgTy { get; set; }
        public int? RecTxTy { get; set; }
        public int? TflAcademicLevel { get; set; }
        public int? TflAcademicProgress { get; set; }
        public int? TflAcuteRejBiopsyConfirmed { get; set; }
        public int? TflAcuteRejEpisode { get; set; }
        public int? TflAlbumin { get; set; }
        public int? TflAlkphos { get; set; }
        public string TflAntivrlTherapy { get; set; }
        public int? TflAntivrlTherapyTy { get; set; }
        public int? TflAntivrlTherapyTyAcyclovir { get; set; }
        public int? TflAntivrlTherapyTyCytogam { get; set; }
        public int? TflAntivrlTherapyTyCytovene { get; set; }
        public int? TflAntivrlTherapyTyEpivir { get; set; }
        public int? TflAntivrlTherapyTyFluVac { get; set; }
        public int? TflAntivrlTherapyTyGamimune { get; set; }
        public int? TflAntivrlTherapyTyGammagard { get; set; }
        public int? TflAntivrlTherapyTyHbig { get; set; }
        public int? TflAntivrlTherapyTyOther { get; set; }
        public int? TflAntivrlTherapyTyValcyte { get; set; }
        public int? TflAntivrlTherapyTyValtrex { get; set; }
        public int? TflBmi { get; set; }
        public string TflCad { get; set; }
        public int? TflCareProvBy { get; set; }
        public string TflCmvIgg { get; set; }
        public string TflCmvIgm { get; set; }
        public int? TflCod { get; set; }
        public int? TflCod2 { get; set; }
        public int? TflCod3 { get; set; }
        public int? TflCognitiveDevelop { get; set; }
        public int? TflCreat { get; set; }
        public string TflDiabDuringFol { get; set; }
        public int? TflEmplStatPre04 { get; set; }
        public string TflFailBiliary { get; set; }
        public int? TflFailDt { get; set; }
        public string TflFailHepDenovo { get; set; }
        public string TflFailHepRecur { get; set; }
        public string TflFailInfect { get; set; }
        public string TflFailPrimeGraftFail { get; set; }
        public string TflFailPxNoncomp { get; set; }
        public string TflFailRecurDisease { get; set; }
        public string TflFailRejAcute { get; set; }
        public string TflFailRejChronic { get; set; }
        public string TflFailVascThromb { get; set; }
        public int? TflFolCd { get; set; }
        public int? TflFunctnStat { get; set; }
        public string TflGraftStat { get; set; }
        public string TflHepaticArterThromb { get; set; }
        public string TflHepaticOutflowObstruct { get; set; }
        public int? TflHgtCm { get; set; }
        public int? TflHgtWgtDt { get; set; }
        public string TflHosp { get; set; }
        public int? TflHospNum { get; set; }
        public string TflImmunoDiscont { get; set; }
        public int? TflImmunoMaintMeds { get; set; }
        public int? TflInr { get; set; }
        public string TflInsulinDepnd { get; set; }
        public int? TflLabDt { get; set; }
        public string TflMalig { get; set; }
        public string TflMaligDonRelated { get; set; }
        public string TflMaligLymph { get; set; }
        public string TflMaligRecurTumor { get; set; }
        public string TflMaligTumor { get; set; }
        public int? TflMotorDevelop { get; set; }
        public string TflOtherTherapy { get; set; }
        public int? TflOtherTherapyTy { get; set; }
        public int? TflOtherTherapyTyPhotoph { get; set; }
        public int? TflOtherTherapyTyPlasmaph { get; set; }
        public int? TflOtherTherapyTyTli { get; set; }
        public string TflPermState { get; set; }
        public int? TflPhyscCapacity { get; set; }
        public string TflPortalVeinThromb { get; set; }
        public int? TflPrimaryPay { get; set; }
        public string TflPxNoncomp { get; set; }
        public string TflPxResearch { get; set; }
        public string TflPxStat { get; set; }
        public int? TflPxStatDt { get; set; }
        public int? TflRejEventNum { get; set; }
        public string TflRejTreat { get; set; }
        public int? TflSgot { get; set; }
        public int? TflSgpt { get; set; }
        public int? TflTotBili { get; set; }
        public int? TflTxferDt { get; set; }
        public int? TflWgtKg { get; set; }
        public string TflWorkIncome { get; set; }
        public int? TflWorkNoStat { get; set; }
        public int? TflWorkYesStat { get; set; }
        public int TrrFolId { get; set; }
        public int? TrrId { get; set; }
        public int? TxId { get; set; }

        public virtual TxLi Trr { get; set; }
        public virtual TxLi Tx { get; set; }
        public virtual FolImmuno FolImmuno { get; set; }
        public virtual ICollection<Malig> Malig { get; set; }
        public virtual ICollection<Treatment> Treatment { get; set; }
    }
}
