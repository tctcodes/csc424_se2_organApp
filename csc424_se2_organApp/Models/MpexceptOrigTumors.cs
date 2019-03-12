using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class MpexceptOrigTumors
    {
        public int CanhxMpxcptFormId { get; set; }
        public int? CanhxMpxcptOrigHccTumorId { get; set; }
        public int? CanhxMpxcptOrigHccTumorSize { get; set; }

        public virtual Mpexcept CanhxMpxcptForm { get; set; }
    }
}
