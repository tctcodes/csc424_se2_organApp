using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Treatment
    {
        public int MaligId { get; set; }
        public string MalPostxBestresp { get; set; }
        public int? MalPostxChemo { get; set; }
        public int? MalPostxChemoTy { get; set; }
        public int? MalPostxCryo { get; set; }
        public int? MalPostxDgnDt { get; set; }
        public int? MalPostxImmuno { get; set; }
        public int? MalPostxImmunoStat { get; set; }
        public int? MalPostxImmunoTy { get; set; }
        public int? MalPostxRadiat { get; set; }
        public int? MalPostxSiteAdjOrg { get; set; }
        public int? MalPostxSiteDistMetast { get; set; }
        public int? MalPostxSiteLymph { get; set; }
        public int? MalPostxSitePrimeOrg { get; set; }
        public int? MalPostxSurg { get; set; }
        public int? MalPostxSurgTy { get; set; }
        public int? MalPostxTumorTy { get; set; }
        public int? TrrFolId { get; set; }

        public virtual Malig Malig { get; set; }
        public virtual TxfLi TrrFol { get; set; }
    }
}
