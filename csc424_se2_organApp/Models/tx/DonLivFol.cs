using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class DonLivFol
    {
        public int? DflActivityLevel { get; set; }
        public int? DflAlbumin { get; set; }
        public int? DflAlkphos { get; set; }
        public int? DflAntiHypertenDrug { get; set; }
        public int? DflBili { get; set; }
        public int? DflBpDiast { get; set; }
        public int? DflBpSyst { get; set; }
        public int? DflCatScan { get; set; }
        public int? DflCod { get; set; }
        public string DflCodOstxt { get; set; }
        public string DflCompl { get; set; }
        public string DflDiab { get; set; }
        public int? DflDiabTreat { get; set; }
        public int? DflDialDt { get; set; }
        public int? DflFolCd { get; set; }
        public int? DflFolCtrId { get; set; }
        public int? DflFunctnStat { get; set; }
        public string DflHyperten { get; set; }
        public int? DflIncisionPain { get; set; }
        public int? DflInitDischrgDt { get; set; }
        public int? DflInr { get; set; }
        public string DflKiCompl { get; set; }
        public int? DflKiComplStat { get; set; }
        public int? DflKiCreat { get; set; }
        public string DflLiCompl { get; set; }
        public int? DflLiComplStat { get; set; }
        public int? DflLiCreat { get; set; }
        public string DflMaintDial { get; set; }
        public int? DflMri { get; set; }
        public int? DflPhyscCapacity { get; set; }
        public string DflPxStat { get; set; }
        public int? DflPxStatDt { get; set; }
        public string DflReadmit { get; set; }
        public int? DflReadmitDt { get; set; }
        public int? DflSgot { get; set; }
        public int? DflSgpt { get; set; }
        public int? DflUltrasound { get; set; }
        public int? DflUrineProtein { get; set; }
        public int? DflUrineRatio { get; set; }
        public int? DflWgtKg { get; set; }
        public string DflWorkIncome { get; set; }
        public int? DflWorkNoStat { get; set; }
        public int? DflWorkYesStat { get; set; }
        public int DonorId { get; set; }
        public int? PlateletCount { get; set; }

        public virtual Institution DflFolCtr { get; set; }
        public virtual Donor Donor { get; set; }
    }
}
