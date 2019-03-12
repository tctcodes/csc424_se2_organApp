using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class StatjustLi2b
    {
        public int? Canhx3CritMet { get; set; }
        public string CanhxAgeGroup { get; set; }
        public int? CanhxAlbumin { get; set; }
        public int? CanhxAlbuminDt { get; set; }
        public int? CanhxAlbuminLt3 { get; set; }
        public int? CanhxAscites { get; set; }
        public int? CanhxAscitesDt { get; set; }
        public int? CanhxAscitesRequireDiuretics { get; set; }
        public int? CanhxBili { get; set; }
        public int? CanhxBiliDt { get; set; }
        public int? CanhxBiliGt4 { get; set; }
        public int? CanhxChgDt { get; set; }
        public int? CanhxCritNotMet { get; set; }
        public int? CanhxCtpScore { get; set; }
        public string CanhxDgn { get; set; }
        public int? CanhxEnceph { get; set; }
        public int? CanhxEncephDt { get; set; }
        public int? CanhxFormStat { get; set; }
        public int? CanhxGrowthFail { get; set; }
        public string CanhxHccDgn { get; set; }
        public int? CanhxHccMedCrit1 { get; set; }
        public int? CanhxHccMedCrit2 { get; set; }
        public int? CanhxHccMedCrit3 { get; set; }
        public int? CanhxHepren { get; set; }
        public int? CanhxInitForm { get; set; }
        public int? CanhxInr { get; set; }
        public int? CanhxInrDt { get; set; }
        public int? CanhxInrGt1 { get; set; }
        public int? CanhxMalnutr { get; set; }
        public int? CanhxOtc { get; set; }
        public int? CanhxOtherDisease { get; set; }
        public int? CanhxOtherDiseaseDt { get; set; }
        public int? CanhxProthrom { get; set; }
        public int? CanhxProthromDt { get; set; }
        public int? CanhxRahh { get; set; }
        public int? CanhxRahhParacent { get; set; }
        public int? CanhxRahhParNutr { get; set; }
        public int? CanhxRahhUnresponDiuretics { get; set; }
        public int? CanhxRecurCholangitis { get; set; }
        public int? CanhxSbp { get; set; }
        public int? CanhxSbpPosBacteria { get; set; }
        public int? CanhxSbpPosCult { get; set; }
        public int? CanhxSbpWhiteBlood { get; set; }
        public int? CanhxStatCd { get; set; }
        public int? CanhxStatTy { get; set; }
        public int? CanhxUnrespon { get; set; }
        public int? CanhxUrineOsmol { get; set; }
        public int? CanhxUrineSodium { get; set; }
        public int? CanhxUrineVol { get; set; }
        public int? CanListingCtrId { get; set; }
        public int PxId { get; set; }
        public string WlOrg { get; set; }

        public virtual Institution CanListingCtr { get; set; }
        public virtual CandLiin Px { get; set; }
    }
}
