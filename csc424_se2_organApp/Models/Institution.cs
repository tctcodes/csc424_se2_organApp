using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Institution
    {
        public Institution()
        {
            CandLiin = new HashSet<CandLiin>();
            DonLivFol = new HashSet<DonLivFol>();
            DonorDeceased = new HashSet<DonorDeceased>();
            DonorDisposition = new HashSet<DonorDisposition>();
            StatjustLi1 = new HashSet<StatjustLi1>();
            StatjustLi2a = new HashSet<StatjustLi2a>();
            StatjustLi2b = new HashSet<StatjustLi2b>();
            TxLiDonOpoCtr = new HashSet<TxLi>();
            TxLiRecCtr = new HashSet<TxLi>();
            TxLiRecCurCtr = new HashSet<TxLi>();
            TxLiRecTxferCtr = new HashSet<TxLi>();
        }

        public string CtrCd { get; set; }
        public int CtrId { get; set; }
        public string CtrTy { get; set; }
        public string EntireName { get; set; }
        public int? EsrdRegion { get; set; }
        public string NamePart1 { get; set; }
        public string NamePart2 { get; set; }
        public int? OptnMbr { get; set; }
        public string PrimaryCity { get; set; }
        public string PrimaryCtry { get; set; }
        public string PrimaryProvince { get; set; }
        public string PrimaryState { get; set; }
        public string PrimaryZip { get; set; }
        public string ProviderNum { get; set; }
        public int? Region { get; set; }

        public virtual ICollection<CandLiin> CandLiin { get; set; }
        public virtual ICollection<DonLivFol> DonLivFol { get; set; }
        public virtual ICollection<DonorDeceased> DonorDeceased { get; set; }
        public virtual ICollection<DonorDisposition> DonorDisposition { get; set; }
        public virtual ICollection<StatjustLi1> StatjustLi1 { get; set; }
        public virtual ICollection<StatjustLi2a> StatjustLi2a { get; set; }
        public virtual ICollection<StatjustLi2b> StatjustLi2b { get; set; }
        public virtual ICollection<TxLi> TxLiDonOpoCtr { get; set; }
        public virtual ICollection<TxLi> TxLiRecCtr { get; set; }
        public virtual ICollection<TxLi> TxLiRecCurCtr { get; set; }
        public virtual ICollection<TxLi> TxLiRecTxferCtr { get; set; }
    }
}
