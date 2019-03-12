using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class StathistLiin
    {
        public int? CanhxAlbumin { get; set; }
        public int? CanhxAlbuminBound { get; set; }
        public int? CanhxAscites { get; set; }
        public int? CanhxBeginDt { get; set; }
        public int? CanhxBeginDtTm { get; set; }
        public int? CanhxBili { get; set; }
        public int? CanhxBiliBound { get; set; }
        public int? CanhxBiliPpc { get; set; }
        public int? CanhxCreatBound { get; set; }
        public string CanhxDialPriorWeek { get; set; }
        public int? CanhxEnceph { get; set; }
        public int? CanhxEndDt { get; set; }
        public int? CanhxEndDtTm { get; set; }
        public int? CanhxExcDiagHcc1 { get; set; }
        public int? CanhxExcDiagHcc2 { get; set; }
        public int? CanhxExcDiagHccNopolicy { get; set; }
        public int? CanhxExcDiagOther { get; set; }
        public int? CanhxExcFlg { get; set; }
        public int? CanhxExcScore { get; set; }
        public int? CanhxGrowthFail { get; set; }
        public int? CanhxHgtCm { get; set; }
        public int? CanhxInr { get; set; }
        public int? CanhxInrBound { get; set; }
        public int? CanhxKeepPedStatFlg { get; set; }
        public int? CanhxMeldDiffReasonCd { get; set; }
        public int? CanhxOptnLabMeld { get; set; }
        public string CanhxOptnLabMeldTy { get; set; }
        public int? CanhxPrevLowerMeldScore { get; set; }
        public int? CanhxReasonStatInact { get; set; }
        public int? CanhxScoreMissing { get; set; }
        public int? CanhxSerumCreat { get; set; }
        public int? CanhxSerumSodium { get; set; }
        public int? CanhxSrtrLabMeld { get; set; }
        public string CanhxSrtrLabMeldTy { get; set; }
        public int? CanhxStatCd { get; set; }
        public int? CanhxWgtKg { get; set; }
        public string CanGender { get; set; }
        public int? CanInitActStatCd { get; set; }
        public int? CanInitActStatDt { get; set; }
        public int? CanInitInactStatDt { get; set; }
        public int? CanInitSrtrLabMeld { get; set; }
        public string CanInitSrtrLabMeldTy { get; set; }
        public int? CanInitStat { get; set; }
        public int? CanLastActStatDt { get; set; }
        public int? CanLastAlbumin { get; set; }
        public int? CanLastAscites { get; set; }
        public int? CanLastBili { get; set; }
        public string CanLastDialPriorWeek { get; set; }
        public int? CanLastEnceph { get; set; }
        public int? CanLastInactStatDt { get; set; }
        public int? CanLastInr { get; set; }
        public int? CanLastSerumCreat { get; set; }
        public int? CanLastSerumSodium { get; set; }
        public int? CanLastSrtrLabMeld { get; set; }
        public string CanLastSrtrLabMeldTy { get; set; }
        public int? CanLastStat { get; set; }
        public int? CanListingDt { get; set; }
        public int? CanRemCd { get; set; }
        public int? CanRemDt { get; set; }
        public string CanSource { get; set; }
        public int PxId { get; set; }
        public string WlOrg { get; set; }

        public virtual CandLiin Px { get; set; }
    }
}
