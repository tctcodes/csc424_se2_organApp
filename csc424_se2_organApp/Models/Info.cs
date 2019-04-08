using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Info
    {
        public decimal PersId { get; set; }
        public decimal? Ssn { get; set; }
        public string Address { get; set; }
        public string Fullname { get; set; }
        public decimal? CanAcademicLevel { get; set; }
        public decimal? CanAcademicProgress { get; set; }
        public decimal? CanCitizenship { get; set; }
        public decimal? CanEducation { get; set; }
        public decimal? CanEmplStat { get; set; }
        public string CanEthnicitySrtr { get; set; }
        public char? CanGender { get; set; }
        public string CanPermState { get; set; }
        public decimal? CanPrimaryPay { get; set; }
        public decimal? CanRace { get; set; }
        public decimal? CanRaceSrtr { get; set; }
        public decimal? CanSecondaryPay { get; set; }
        public char? CanWorkIncome { get; set; }
        public decimal? CanWorkNoStat { get; set; }
        public decimal? CanWorkYesStat { get; set; }
        public string Email { get; set; }
        public decimal? CanYearEntryUs { get; set; }

        public virtual Users EmailNavigation { get; set; }
    }
}
