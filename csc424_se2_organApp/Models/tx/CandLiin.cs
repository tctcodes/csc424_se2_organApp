using System;
using System.Collections.Generic;

namespace csc424_se2_organApp
{
    public partial class CandLiin
    {
        public CandLiin()
        {
            Mpexcept = new HashSet<Mpexcept>();
            TxLi = new HashSet<TxLi>();
        }

        public string CanAbo { get; set; }
        public int? CanAcademicLevel { get; set; }
        public int? CanAcademicProgress { get; set; }
        public string CanAcptA2Don { get; set; }
        public string CanAcptAboIncomp { get; set; }
        public string CanAcptExtracorpLi { get; set; }
        public string CanAcptHbcPos { get; set; }
        public string CanAcptHcvPos { get; set; }
        public string CanAcptLiSeg { get; set; }
        public string CanAcptOrgOtherTeam { get; set; }
        public string CanAcptProcurKi { get; set; }
        public string CanAcptProcurLi { get; set; }
        public string CanAcptProcurPa { get; set; }
        public int? CanActivateDt { get; set; }
        public int? CanAgeAtListing { get; set; }
        public int? CanAgeInMonthsAtListing { get; set; }
        public int? CanAnastomosis { get; set; }
        public int? CanAnesthPriorDeath { get; set; }
        public int? CanAngina { get; set; }
        public int? CanAnginaCad { get; set; }
        public int? CanArtificialLi { get; set; }
        public string CanAscites { get; set; }
        public string CanBacteriaPerit { get; set; }
        public int? CanBmi { get; set; }
        public string CanCerebVasc { get; set; }
        public int? CanCitizenship { get; set; }
        public int? CanCognitiveDevelop { get; set; }
        public int? CanCtpScore { get; set; }
        public int? CanDeathDt { get; set; }
        public int? CanDgn { get; set; }
        public int? CanDgn2 { get; set; }
        public string CanDgnOstxt { get; set; }
        public int? CanDiab { get; set; }
        public int? CanDiabTy { get; set; }
        public int? CanDial { get; set; }
        public string CanDrugTreatCopd { get; set; }
        public string CanDrugTreatHyperten { get; set; }
        public int? CanEcmo { get; set; }
        public int? CanEducation { get; set; }
        public string CanElectrolyte { get; set; }
        public int? CanEmplStat { get; set; }
        public string CanEnceph { get; set; }
        public int? CanEndwlfu { get; set; }
        public string CanEthnicitySrtr { get; set; }
        public string CanExhaustVascAccess { get; set; }
        public int? CanFollowsOpoAlloc { get; set; }
        public int? CanFunctnStat { get; set; }
        public string CanFungalSepsis { get; set; }
        public string CanGender { get; set; }
        public int? CanHgtCm { get; set; }
        public int? CanHgtWgtDt { get; set; }
        public int? CanIabp { get; set; }
        public int? CanInitActStatCd { get; set; }
        public int? CanInitActStatDt { get; set; }
        public int? CanInitInactStatDt { get; set; }
        public int? CanInitSrtrLabMeld { get; set; }
        public string CanInitSrtrLabMeldTy { get; set; }
        public int? CanInitStat { get; set; }
        public int? CanIvInotrop { get; set; }
        public int? CanLastActStatDt { get; set; }
        public int? CanLastAlbumin { get; set; }
        public int? CanLastAscites { get; set; }
        public int? CanLastBili { get; set; }
        public string CanLastDialPriorWeek { get; set; }
        public int? CanLastEnceph { get; set; }
        public int? CanLastInactStatDt { get; set; }
        public int? CanLastInr { get; set; }
        public int? CanLastSerumCreat { get; set; }
        public int? CanLastSerumSodium { get; set; }
        public int? CanLastSrtrLabMeld { get; set; }
        public string CanLastSrtrLabMeldTy { get; set; }
        public int? CanLastStat { get; set; }
        public string CanLifeSupport { get; set; }
        public int? CanLifeSupportOther { get; set; }
        public int? CanListingCtrId { get; set; }
        public int? CanListingDt { get; set; }
        public int? CanListingOpoId { get; set; }
        public int? CanLivingDonTx { get; set; }
        public string CanLiDysfunctn { get; set; }
        public string CanLossVascAccess { get; set; }
        public string CanMalig { get; set; }
        public int? CanMaligTy { get; set; }
        public int? CanMaligTyBreast { get; set; }
        public int? CanMaligTyCnsTumor { get; set; }
        public int? CanMaligTyGenitourinary { get; set; }
        public int? CanMaligTyHepblast { get; set; }
        public int? CanMaligTyHepcarcinoma { get; set; }
        public int? CanMaligTyLeukLymph { get; set; }
        public int? CanMaligTyLiver { get; set; }
        public int? CanMaligTyLu { get; set; }
        public int? CanMaligTyOther { get; set; }
        public int? CanMaligTySkinMel { get; set; }
        public int? CanMaligTySkinNonMel { get; set; }
        public int? CanMaligTyThroat { get; set; }
        public int? CanMaligTyThyroid { get; set; }
        public int? CanMaligTyUnk { get; set; }
        public int? CanMaxAge { get; set; }
        public int? CanMaxMile { get; set; }
        public int? CanMaxWgt { get; set; }
        public int? CanMedCond { get; set; }
        public int? CanMinAge { get; set; }
        public int? CanMinWgt { get; set; }
        public int? CanMostRecentCreat { get; set; }
        public int? CanMostRecentHgtCm { get; set; }
        public int? CanMostRecentWgtKg { get; set; }
        public int? CanMotorDevelop { get; set; }
        public string CanMuscleWasting { get; set; }
        public string CanNeoplasm { get; set; }
        public string CanNewPrevPiTx { get; set; }
        public string CanNonReconGi { get; set; }
        public int? CanPepticUlcer { get; set; }
        public string CanPeriphVasc { get; set; }
        public string CanPermState { get; set; }
        public int? CanPge { get; set; }
        public int? CanPhyscCapacity { get; set; }
        public string CanPortalVein { get; set; }
        public string CanPrelimXmatchRequest { get; set; }
        public string CanPrevAbdomSurg { get; set; }
        public int? CanPrevBoneMarrowDt { get; set; }
        public int? CanPrevBoneMarrowTx { get; set; }
        public int? CanPrevHl { get; set; }
        public int? CanPrevHr { get; set; }
        public int? CanPrevIn { get; set; }
        public int? CanPrevKi { get; set; }
        public int? CanPrevKp { get; set; }
        public int? CanPrevLi { get; set; }
        public int? CanPrevLu { get; set; }
        public int? CanPrevPa { get; set; }
        public int? CanPrevTx { get; set; }
        public string CanPrevTxfus { get; set; }
        public int? CanPrimaryPay { get; set; }
        public string CanPulmEmbol { get; set; }
        public int? CanRace { get; set; }
        public string CanRaceSrtr { get; set; }
        public string CanRecurSepsis { get; set; }
        public int? CanRemCd { get; set; }
        public int? CanRemCod { get; set; }
        public int? CanRemDt { get; set; }
        public int? CanSecondaryPay { get; set; }
        public string CanSource { get; set; }
        public int? CanStatExtendFlg { get; set; }
        public int? CanTiebreakerDt { get; set; }
        public string CanTipss { get; set; }
        public int? CanTotAlbumin { get; set; }
        public int? CanTotBili { get; set; }
        public int? CanTrrExists { get; set; }
        public int? CanTxCountry { get; set; }
        public int? CanVadTah { get; set; }
        public string CanVaricealBleeding { get; set; }
        public int? CanVentilator { get; set; }
        public int? CanWgtKg { get; set; }
        public string CanWorkIncome { get; set; }
        public int? CanWorkNoStat { get; set; }
        public int? CanWorkYesStat { get; set; }
        public int? CanYearEntryUs { get; set; }
        public int? DonorId { get; set; }
        public string DonTy { get; set; }
        public string OrgAr { get; set; }
        public int? PersId { get; set; }
        public int? PersNexttx { get; set; }
        public int? PersNexttxTrrId { get; set; }
        public int? PersOptnDeathDt { get; set; }
        public int? PersRestrictDeathDt { get; set; }
        public string PersRestrictDeathVrfy { get; set; }
        public int? PersSsaDeathDt { get; set; }
        public int PxId { get; set; }
        public int? RecTxDt { get; set; }
        public int? RecTxProcedureTy { get; set; }
        public string WlOrg { get; set; }

        public virtual Institution CanListingCtr { get; set; }
        public virtual Donor Donor { get; set; }
        public virtual StathistLiin StathistLiin { get; set; }
        public virtual StatjustLi1 StatjustLi1 { get; set; }
        public virtual StatjustLi2a StatjustLi2a { get; set; }
        public virtual StatjustLi2b StatjustLi2b { get; set; }
        public virtual ICollection<Mpexcept> Mpexcept { get; set; }
        public virtual ICollection<TxLi> TxLi { get; set; }
    }
}
