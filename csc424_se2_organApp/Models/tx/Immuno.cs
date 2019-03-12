using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class Immuno
    {
        public int? RecDrugAntiRej { get; set; }
        public int? RecDrugCd { get; set; }
        public int? RecDrugDays { get; set; }
        public int? RecDrugInduction { get; set; }
        public int? RecDrugMaint { get; set; }
        public int TrrId { get; set; }

        public virtual TxLi Trr { get; set; }
    }
}
