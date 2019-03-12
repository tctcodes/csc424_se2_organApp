using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class MpexceptTumors
    {
        public int? CanhxMpxcptChronicLiAfp500 { get; set; }
        public int CanhxMpxcptFormId { get; set; }
        public int? CanhxMpxcptHccCtAbdomenDt { get; set; }
        public int? CanhxMpxcptHccMriAbdomenDt { get; set; }
        public string CanhxMpxcptHccTumorBlush { get; set; }
        public int? CanhxMpxcptHccTumorId { get; set; }
        public int? CanhxMpxcptHccTumorSizeCm { get; set; }
        public int? CanhxMpxcptHccUltrasoundDt { get; set; }

        public virtual Mpexcept CanhxMpxcptForm { get; set; }
    }
}
