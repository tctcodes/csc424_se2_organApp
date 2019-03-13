using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class DonorDisposition
    {
        public int DonorId { get; set; }
        public int? DonDcdRecovDt { get; set; }
        public int? DonDcdRecovTm { get; set; }
        public int? DonDiscardCd { get; set; }
        public int? DonDisposition { get; set; }
        public int? DonFlushBackTable { get; set; }
        public int? DonFlushFinal { get; set; }
        public int? DonFlushInit { get; set; }
        public string DonOrg { get; set; }
        public int? DonOrgShared { get; set; }
        public int? DonReasonCd { get; set; }
        public int? DonRecovDt { get; set; }
        public int? DonShareTy { get; set; }
        public int? DonStorage { get; set; }
        public int? DonTxCtrId { get; set; }
        public int? DonVesselSent { get; set; }
        public int? MatchId { get; set; }
        public int? PxId { get; set; }

        public virtual Institution DonTxCtr { get; set; }
        public virtual Donor Donor { get; set; }
    }
}
