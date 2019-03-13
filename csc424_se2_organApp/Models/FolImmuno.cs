using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class FolImmuno
    {
        public int? TflFolCd { get; set; }
        public int? TflImmunoDrugAntiRej { get; set; }
        public int? TflImmunoDrugCd { get; set; }
        public int? TflImmunoDrugMaintCur { get; set; }
        public int? TflImmunoDrugMaintPrev { get; set; }
        public int TrrFolId { get; set; }
        public int? TrrId { get; set; }

        public virtual TxLi Trr { get; set; }
        public virtual TxfLi TrrFol { get; set; }
    }
}
