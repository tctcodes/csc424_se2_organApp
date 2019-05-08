using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    /// <summary>Info Model</summary>
    /// <remarks>Basic data for clients.</remarks>
    public partial class Info
    {
        public int PersId { get; set; }
        public string Ssn { get; set; }
        public string Address { get; set; }
        public string FullName { get; set; }
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
        public string CanRaceSrtr { get; set; }
        public decimal? CanSecondaryPay { get; set; }
        public char? CanWorkIncome { get; set; }
        public string Email { get; set; }
        public decimal? CanYearEntryUs { get; set; }
        public decimal? CanWorkNoStat { get; set; }
        public decimal? CanWorkYesStat { get; set; }
        public string RacesSelected { get; set; }

        public virtual Users EmailNavigation { get; set; }
    }
}
