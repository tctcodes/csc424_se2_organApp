using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Mpexcept
    {
        public int? CanhxMpxcptAfp { get; set; }
        public int? CanhxMpxcptAfpDt { get; set; }
        public int? CanhxMpxcptApplTy { get; set; }
        public int? CanhxMpxcptBeginDt { get; set; }
        public int? CanhxMpxcptBiopsyDt { get; set; }
        public int? CanhxMpxcptCaseCurForm { get; set; }
        public int? CanhxMpxcptCaseId { get; set; }
        public int? CanhxMpxcptDaysAfterTx { get; set; }
        public int? CanhxMpxcptDgn { get; set; }
        public int? CanhxMpxcptEndDt { get; set; }
        public int CanhxMpxcptFormId { get; set; }
        public int? CanhxMpxcptHccArteriogramDt { get; set; }
        public int? CanhxMpxcptHccBiopsyDt { get; set; }
        public int? CanhxMpxcptHccBoneScanDt { get; set; }
        public int? CanhxMpxcptHccChembolizatDt { get; set; }
        public int? CanhxMpxcptHccChemAblatDt { get; set; }
        public int? CanhxMpxcptHccCryoAblatDt { get; set; }
        public int? CanhxMpxcptHccCtChestDt { get; set; }
        public int? CanhxMpxcptHccFreqAblatDt { get; set; }
        public int? CanhxMpxcptHccMriChestDt { get; set; }
        public string CanhxMpxcptHccNoMacrovasc { get; set; }
        public string CanhxMpxcptHccNoXtrahepSprd { get; set; }
        public string CanhxMpxcptHccResectCand { get; set; }
        public string CanhxMpxcptHccResectInit { get; set; }
        public int? CanhxMpxcptHccSurgResectDt { get; set; }
        public string CanhxMpxcptMeldOrPeld { get; set; }
        public int? CanhxMpxcptMostRecentApprov { get; set; }
        public int? CanhxMpxcptNoOfOrigTumors { get; set; }
        public int? CanhxMpxcptNoOfTumors { get; set; }
        public int? CanhxMpxcptOrganicAcidemia { get; set; }
        public int? CanhxMpxcptOrigApplDt { get; set; }
        public string CanhxMpxcptOrigTumorFlg { get; set; }
        public int? CanhxMpxcptOrigTumorImageDt { get; set; }
        public int? CanhxMpxcptOtc { get; set; }
        public int? CanhxMpxcptPolicyEffectiveDt { get; set; }
        public int? CanhxMpxcptRegion { get; set; }
        public int? CanhxMpxcptRequestScore { get; set; }
        public int? CanhxMpxcptStat { get; set; }
        public int? CanhxMpxcptStatDt { get; set; }
        public int? CanhxMpxcptTxDt { get; set; }
        public int? CanhxMpxcptUreaCycleDefect { get; set; }
        public int? PxId { get; set; }

        public virtual CandLiin Px { get; set; }
        public virtual MpexceptOrigTumors MpexceptOrigTumors { get; set; }
        public virtual MpexceptTumors MpexceptTumors { get; set; }
    }
}
