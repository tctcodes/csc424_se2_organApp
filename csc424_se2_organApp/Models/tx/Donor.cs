using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class Donor
    {
        public Donor()
        {
            CandLiin = new HashSet<CandLiin>();
            TxLi = new HashSet<TxLi>();
        }

        public int DonorId { get; set; }

        public virtual DonLivFol DonLivFol { get; set; }
        public virtual DonorDeceased DonorDeceased { get; set; }
        public virtual DonorDisposition DonorDisposition { get; set; }
        public virtual DonorLive DonorLive { get; set; }
        public virtual ICollection<CandLiin> CandLiin { get; set; }
        public virtual ICollection<TxLi> TxLi { get; set; }
    }
}
