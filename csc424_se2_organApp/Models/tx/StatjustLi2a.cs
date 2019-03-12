using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class StatjustLi2a
    {
        public string CanhxAgeGroup { get; set; }
        public int? CanhxAlbumin { get; set; }
        public int? CanhxAlbuminDt { get; set; }
        public int? CanhxAscites { get; set; }
        public int? CanhxAscitesDt { get; set; }
        public int? CanhxBili { get; set; }
        public int? CanhxBiliDt { get; set; }
        public int? CanhxChgDt { get; set; }
        public int? CanhxCritNotMet { get; set; }
        public int? CanhxCtpScore { get; set; }
        public string CanhxDgn { get; set; }
        public int? CanhxEnceph { get; set; }
        public int? CanhxEncephDt { get; set; }
        public int? CanhxEncephUnrespon { get; set; }
        public int? CanhxFormStat { get; set; }
        public int? CanhxHepren { get; set; }
        public string CanhxHospLocUnit { get; set; }
        public int? CanhxInitForm { get; set; }
        public int? CanhxInr { get; set; }
        public int? CanhxInrDt { get; set; }
        public int? CanhxLifeExpectLt7days { get; set; }
        public int? CanhxOtherDisease { get; set; }
        public int? CanhxOtherDiseaseDt { get; set; }
        public int? CanhxProthrom { get; set; }
        public int? CanhxProthromDt { get; set; }
        public int? CanhxPxTxCtr { get; set; }
        public int? CanhxRahh { get; set; }
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
