using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class RecHistoXmat
    {
        public int? RecCellSourceXmatch { get; set; }
        public int? RecCellTyXmatch { get; set; }
        public int RecHistoTxId { get; set; }
        public int? RecMeasureXmatch { get; set; }
        public int? RecResultAutoXmatch { get; set; }
        public int? RecResultXmatch { get; set; }
        public int? RecRowNumXmatch { get; set; }
        public int? RecTechXmatch { get; set; }

        public virtual TxLi RecHistoTx { get; set; }
    }
}
