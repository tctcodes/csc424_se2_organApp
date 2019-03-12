using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class StatjustLi1
    {
        public string CanhxAgeGroup { get; set; }
        public int? CanhxAlbumin { get; set; }
        public int? CanhxAlbuminDt { get; set; }
        public int? CanhxAscites { get; set; }
        public int? CanhxAscitesDt { get; set; }
        public int? CanhxBili { get; set; }
        public int? CanhxBiliarySepsis { get; set; }
        public int? CanhxBiliDt { get; set; }
        public int? CanhxBiliPpc { get; set; }
        public int? CanhxBiliPpcDt { get; set; }
        public int? CanhxChgDt { get; set; }
        public int? CanhxCritNotMet { get; set; }
        public string CanhxDgn { get; set; }
        public string CanhxDialPriorWeek { get; set; }
        public int? CanhxEnceph { get; set; }
        public int? CanhxEncephDt { get; set; }
        public int? CanhxEncephOnset { get; set; }
        public int? CanhxFormStat { get; set; }
        public int? CanhxFulminantFail { get; set; }
        public int? CanhxGiBleeding { get; set; }
        public int? CanhxHepren { get; set; }
        public int? CanhxHgtCm { get; set; }
        public string CanhxHospName { get; set; }
        public int? CanhxIcu { get; set; }
        public int? CanhxInitForm { get; set; }
        public int? CanhxInr { get; set; }
        public int? CanhxInrDt { get; set; }
        public int? CanhxNonMetastHepblast { get; set; }
        public int? CanhxOtc { get; set; }
        public int? CanhxOtcNohosp { get; set; }
        public int? CanhxPeldHgtDt { get; set; }
        public int? CanhxPeldWgtDt { get; set; }
        public int? CanhxPrimeNonfunctn { get; set; }
        public int? CanhxProthrom { get; set; }
        public int? CanhxProthromDt { get; set; }
        public int? CanhxPxTxCtr { get; set; }
        public int? CanhxRahh { get; set; }
        public int? CanhxRahhParacent { get; set; }
        public int? CanhxRahhParNutr { get; set; }
        public int? CanhxRahhSuplO2 { get; set; }
        public int? CanhxRahhTubeFeed { get; set; }
        public int? CanhxRahhUnresponDiuretics { get; set; }
        public int? CanhxSerumCreat { get; set; }
        public int? CanhxSerumCreatDt { get; set; }
        public int? CanhxStatCd { get; set; }
        public int? CanhxStatTy { get; set; }
        public int? CanhxUrineOsmol { get; set; }
        public int? CanhxUrineSodium { get; set; }
        public int? CanhxUrineVol { get; set; }
        public int? CanhxVentilator { get; set; }
        public int? CanhxWgtKg { get; set; }
        public int? CanhxWilsons { get; set; }
        public int? CanListingCtrId { get; set; }
        public int? CanReg2LastTxDt { get; set; }
        public int PxId { get; set; }
        public int? RecTxDt { get; set; }
        public string WlOrg { get; set; }

        public virtual Institution CanListingCtr { get; set; }
        public virtual CandLiin Px { get; set; }
    }
}
