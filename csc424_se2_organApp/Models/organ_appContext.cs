using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace csc424_se2_organApp.Models
{
    public partial class organ_appContext : DbContext
    {
        public organ_appContext()
        {
        }

        public organ_appContext(DbContextOptions<organ_appContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CandLiin> CandLiin { get; set; }
        public virtual DbSet<DonorDeceased> DonorDeceased { get; set; }
        public virtual DbSet<DonorLive> DonorLive { get; set; }
        public virtual DbSet<Info> Info { get; set; }
        public virtual DbSet<TxLi> TxLi { get; set; }
        public virtual DbSet<TxfLi> TxfLi { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=192.168.2.111;port=5432;Database=organ_app;Username=pi;Password=almost");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<CandLiin>(entity =>
            {
                entity.HasKey(e => new { e.PxId, e.PersId })
                    .HasName("cand_liin_pkey");

                entity.ToTable("cand_liin", "liver");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAbo)
                    .HasColumnName("can_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.CanAcademicLevel)
                    .HasColumnName("can_academic_level")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAcademicProgress)
                    .HasColumnName("can_academic_progress")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAcptA2Don)
                    .HasColumnName("can_acpt_a2_don")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptAboIncomp)
                    .HasColumnName("can_acpt_abo_incomp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptExtracorpLi)
                    .HasColumnName("can_acpt_extracorp_li")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptHbcPos)
                    .HasColumnName("can_acpt_hbc_pos")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptHcvPos)
                    .HasColumnName("can_acpt_hcv_pos")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptLiSeg)
                    .HasColumnName("can_acpt_li_seg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptOrgOtherTeam)
                    .HasColumnName("can_acpt_org_other_team")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptProcurKi)
                    .HasColumnName("can_acpt_procur_ki")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptProcurLi)
                    .HasColumnName("can_acpt_procur_li")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanAcptProcurPa)
                    .HasColumnName("can_acpt_procur_pa")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanActivateDt)
                    .HasColumnName("can_activate_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanAgeAtListing)
                    .HasColumnName("can_age_at_listing")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAgeInMonthsAtListing).HasColumnName("can_age_in_months_at_listing");

                entity.Property(e => e.CanAnastomosis)
                    .HasColumnName("can_anastomosis")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanAnesthPriorDeath)
                    .HasColumnName("can_anesth_prior_death")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanAngina)
                    .HasColumnName("can_angina")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAnginaCad)
                    .HasColumnName("can_angina_cad")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanArtificialLi)
                    .HasColumnName("can_artificial_li")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanAscites)
                    .HasColumnName("can_ascites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanBacteriaPerit)
                    .HasColumnName("can_bacteria_perit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanBmi).HasColumnName("can_bmi");

                entity.Property(e => e.CanCerebVasc)
                    .HasColumnName("can_cereb_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanCitizenship)
                    .HasColumnName("can_citizenship")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanCognitiveDevelop)
                    .HasColumnName("can_cognitive_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanCtpScore).HasColumnName("can_ctp_score");

                entity.Property(e => e.CanDeathDt)
                    .HasColumnName("can_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanDgn)
                    .HasColumnName("can_dgn")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDgn2)
                    .HasColumnName("can_dgn2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDgnOstxt)
                    .HasColumnName("can_dgn_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.CanDiab)
                    .HasColumnName("can_diab")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDiabTy)
                    .HasColumnName("can_diab_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDial)
                    .HasColumnName("can_dial")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDrugTreatCopd)
                    .HasColumnName("can_drug_treat_copd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanDrugTreatHyperten)
                    .HasColumnName("can_drug_treat_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEcmo)
                    .HasColumnName("can_ecmo")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanEducation)
                    .HasColumnName("can_education")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanElectrolyte)
                    .HasColumnName("can_electrolyte")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEmplStat)
                    .HasColumnName("can_empl_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanEnceph)
                    .HasColumnName("can_enceph")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEndwlfu)
                    .HasColumnName("can_endwlfu")
                    .HasColumnType("date");

                entity.Property(e => e.CanEthnicitySrtr)
                    .HasColumnName("can_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanExhaustVascAccess)
                    .HasColumnName("can_exhaust_vasc_access")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanFollowsOpoAlloc)
                    .HasColumnName("can_follows_opo_alloc")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanFunctnStat)
                    .HasColumnName("can_functn_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanFungalSepsis)
                    .HasColumnName("can_fungal_sepsis")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanGender)
                    .HasColumnName("can_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanHgtCm).HasColumnName("can_hgt_cm");

                entity.Property(e => e.CanHgtWgtDt)
                    .HasColumnName("can_hgt_wgt_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanIabp)
                    .HasColumnName("can_iabp")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanInitActStatCd)
                    .HasColumnName("can_init_act_stat_cd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanInitActStatDt)
                    .HasColumnName("can_init_act_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanInitInactStatDt)
                    .HasColumnName("can_init_inact_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanInitSrtrLabMeld)
                    .HasColumnName("can_init_srtr_lab_meld")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanInitSrtrLabMeldTy)
                    .HasColumnName("can_init_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitStat)
                    .HasColumnName("can_init_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanIvInotrop)
                    .HasColumnName("can_iv_inotrop")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanLastActStatDt)
                    .HasColumnName("can_last_act_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanLastAlbumin).HasColumnName("can_last_albumin");

                entity.Property(e => e.CanLastAscites)
                    .HasColumnName("can_last_ascites")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastBili).HasColumnName("can_last_bili");

                entity.Property(e => e.CanLastDialPriorWeek)
                    .HasColumnName("can_last_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastEnceph)
                    .HasColumnName("can_last_enceph")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastInactStatDt)
                    .HasColumnName("can_last_inact_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanLastInr).HasColumnName("can_last_inr");

                entity.Property(e => e.CanLastSerumCreat).HasColumnName("can_last_serum_creat");

                entity.Property(e => e.CanLastSerumSodium).HasColumnName("can_last_serum_sodium");

                entity.Property(e => e.CanLastSrtrLabMeld)
                    .HasColumnName("can_last_srtr_lab_meld")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastSrtrLabMeldTy)
                    .HasColumnName("can_last_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastStat)
                    .HasColumnName("can_last_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLiDysfunctn)
                    .HasColumnName("can_li_dysfunctn")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLifeSupport)
                    .HasColumnName("can_life_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLifeSupportOther)
                    .HasColumnName("can_life_support_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanListingCtrId)
                    .HasColumnName("can_listing_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.CanListingDt)
                    .HasColumnName("can_listing_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanListingOpoId)
                    .HasColumnName("can_listing_opo_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.CanLivingDonTx)
                    .HasColumnName("can_living_don_tx")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanLossVascAccess)
                    .HasColumnName("can_loss_vasc_access")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanMalig)
                    .HasColumnName("can_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanMaligTy)
                    .HasColumnName("can_malig_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanMaligTyBreast).HasColumnName("can_malig_ty_breast");

                entity.Property(e => e.CanMaligTyCnsTumor).HasColumnName("can_malig_ty_cns_tumor");

                entity.Property(e => e.CanMaligTyGenitourinary).HasColumnName("can_malig_ty_genitourinary");

                entity.Property(e => e.CanMaligTyHepblast).HasColumnName("can_malig_ty_hepblast");

                entity.Property(e => e.CanMaligTyHepcarcinoma).HasColumnName("can_malig_ty_hepcarcinoma");

                entity.Property(e => e.CanMaligTyLeukLymph).HasColumnName("can_malig_ty_leuk_lymph");

                entity.Property(e => e.CanMaligTyLiver).HasColumnName("can_malig_ty_liver");

                entity.Property(e => e.CanMaligTyLu).HasColumnName("can_malig_ty_lu");

                entity.Property(e => e.CanMaligTyOther).HasColumnName("can_malig_ty_other");

                entity.Property(e => e.CanMaligTySkinMel).HasColumnName("can_malig_ty_skin_mel");

                entity.Property(e => e.CanMaligTySkinNonMel).HasColumnName("can_malig_ty_skin_non_mel");

                entity.Property(e => e.CanMaligTyThroat).HasColumnName("can_malig_ty_throat");

                entity.Property(e => e.CanMaligTyThyroid).HasColumnName("can_malig_ty_thyroid");

                entity.Property(e => e.CanMaligTyUnk).HasColumnName("can_malig_ty_unk");

                entity.Property(e => e.CanMaxAge).HasColumnName("can_max_age");

                entity.Property(e => e.CanMaxMile).HasColumnName("can_max_mile");

                entity.Property(e => e.CanMaxWgt).HasColumnName("can_max_wgt");

                entity.Property(e => e.CanMedCond)
                    .HasColumnName("can_med_cond")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanMinAge).HasColumnName("can_min_age");

                entity.Property(e => e.CanMinWgt).HasColumnName("can_min_wgt");

                entity.Property(e => e.CanMostRecentCreat).HasColumnName("can_most_recent_creat");

                entity.Property(e => e.CanMostRecentHgtCm).HasColumnName("can_most_recent_hgt_cm");

                entity.Property(e => e.CanMostRecentWgtKg).HasColumnName("can_most_recent_wgt_kg");

                entity.Property(e => e.CanMotorDevelop)
                    .HasColumnName("can_motor_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanMuscleWasting)
                    .HasColumnName("can_muscle_wasting")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanNeoplasm)
                    .HasColumnName("can_neoplasm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanNewPrevPiTx)
                    .HasColumnName("can_new_prev_pi_tx")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanNonReconGi)
                    .HasColumnName("can_non_recon_gi")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPepticUlcer)
                    .HasColumnName("can_peptic_ulcer")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanPeriphVasc)
                    .HasColumnName("can_periph_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPermState)
                    .HasColumnName("can_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.CanPge)
                    .HasColumnName("can_pge")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanPhyscCapacity)
                    .HasColumnName("can_physc_capacity")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanPortalVein)
                    .HasColumnName("can_portal_vein")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrelimXmatchRequest)
                    .HasColumnName("can_prelim_xmatch_request")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevAbdomSurg)
                    .HasColumnName("can_prev_abdom_surg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevBoneMarrowDt)
                    .HasColumnName("can_prev_bone_marrow_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanPrevBoneMarrowTx).HasColumnName("can_prev_bone_marrow_tx");

                entity.Property(e => e.CanPrevHl).HasColumnName("can_prev_hl");

                entity.Property(e => e.CanPrevHr).HasColumnName("can_prev_hr");

                entity.Property(e => e.CanPrevIn).HasColumnName("can_prev_in");

                entity.Property(e => e.CanPrevKi).HasColumnName("can_prev_ki");

                entity.Property(e => e.CanPrevKp).HasColumnName("can_prev_kp");

                entity.Property(e => e.CanPrevLi).HasColumnName("can_prev_li");

                entity.Property(e => e.CanPrevLu).HasColumnName("can_prev_lu");

                entity.Property(e => e.CanPrevPa).HasColumnName("can_prev_pa");

                entity.Property(e => e.CanPrevTx).HasColumnName("can_prev_tx");

                entity.Property(e => e.CanPrevTxfus)
                    .HasColumnName("can_prev_txfus")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrimaryPay)
                    .HasColumnName("can_primary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanPulmEmbol)
                    .HasColumnName("can_pulm_embol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanRace)
                    .HasColumnName("can_race")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanRaceSrtr)
                    .HasColumnName("can_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanRecurSepsis)
                    .HasColumnName("can_recur_sepsis")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanRemCd)
                    .HasColumnName("can_rem_cd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanRemCod)
                    .HasColumnName("can_rem_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanRemDt)
                    .HasColumnName("can_rem_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanSecondaryPay)
                    .HasColumnName("can_secondary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanSource)
                    .HasColumnName("can_source")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanStatExtendFlg)
                    .HasColumnName("can_stat_extend_flg")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanTiebreakerDt)
                    .HasColumnName("can_tiebreaker_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanTipss)
                    .HasColumnName("can_tipss")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanTotAlbumin).HasColumnName("can_tot_albumin");

                entity.Property(e => e.CanTotBili).HasColumnName("can_tot_bili");

                entity.Property(e => e.CanTrrExists).HasColumnName("can_trr_exists");

                entity.Property(e => e.CanTxCountry)
                    .HasColumnName("can_tx_country")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanVadTah)
                    .HasColumnName("can_vad_tah")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanVaricealBleeding)
                    .HasColumnName("can_variceal_bleeding")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanVentilator)
                    .HasColumnName("can_ventilator")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.CanWgtKg).HasColumnName("can_wgt_kg");

                entity.Property(e => e.CanWorkIncome)
                    .HasColumnName("can_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanWorkNoStat)
                    .HasColumnName("can_work_no_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanWorkYesStat)
                    .HasColumnName("can_work_yes_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanYearEntryUs).HasColumnName("can_year_entry_us");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.PersNexttx)
                    .HasColumnName("pers_nexttx")
                    .HasColumnType("date");

                entity.Property(e => e.PersNexttxTrrId)
                    .HasColumnName("pers_nexttx_trr_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersOptnDeathDt)
                    .HasColumnName("pers_optn_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.PersRestrictDeathDt)
                    .HasColumnName("pers_restrict_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.PersRestrictDeathVrfy)
                    .HasColumnName("pers_restrict_death_vrfy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.PersSsaDeathDt)
                    .HasColumnName("pers_ssa_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecTxDt)
                    .HasColumnName("rec_tx_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecTxProcedureTy)
                    .HasColumnName("rec_tx_procedure_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");
            });

            modelBuilder.Entity<DonorDeceased>(entity =>
            {
                entity.HasKey(e => new { e.DonorId, e.PersId })
                    .HasName("donor_deceased_pkey");

                entity.ToTable("donor_deceased", "liver");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonA1)
                    .HasColumnName("don_a1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonA2)
                    .HasColumnName("don_a2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonAbnormCongen)
                    .HasColumnName("don_abnorm_congen")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonAbnormLvh)
                    .HasColumnName("don_abnorm_lvh")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonAbnormValves)
                    .HasColumnName("don_abnorm_valves")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonAbo)
                    .HasColumnName("don_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonAge).HasColumnName("don_age");

                entity.Property(e => e.DonAgeInMonths).HasColumnName("don_age_in_months");

                entity.Property(e => e.DonAllocEcdCva)
                    .HasColumnName("don_alloc_ecd_cva")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonAllocEcdHyperten)
                    .HasColumnName("don_alloc_ecd_hyperten")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonAllocEcdSerumCreat).HasColumnName("don_alloc_ecd_serum_creat");

                entity.Property(e => e.DonAllocEcdSerumCreatDt)
                    .HasColumnName("don_alloc_ecd_serum_creat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonAllocRemainLiSeg)
                    .HasColumnName("don_alloc_remain_li_seg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonAntiCmv)
                    .HasColumnName("don_anti_cmv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiConvuls)
                    .HasColumnName("don_anti_convuls")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonAntiHbc)
                    .HasColumnName("don_anti_hbc")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiHcv)
                    .HasColumnName("don_anti_hcv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiHiv)
                    .HasColumnName("don_anti_hiv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiHtlv)
                    .HasColumnName("don_anti_htlv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiHyperten)
                    .HasColumnName("don_anti_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonArginine)
                    .HasColumnName("don_arginine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonB1)
                    .HasColumnName("don_b1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonB2)
                    .HasColumnName("don_b2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonBiopsyDgn)
                    .HasColumnName("don_biopsy_dgn")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonBrainDeathTm)
                    .HasColumnName("don_brain_death_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonBun).HasColumnName("don_bun");

                entity.Property(e => e.DonBw4)
                    .HasColumnName("don_bw4")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonBw6)
                    .HasColumnName("don_bw6")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonC1)
                    .HasColumnName("don_c1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonC2)
                    .HasColumnName("don_c2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCadDonCod)
                    .HasColumnName("don_cad_don_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCancerFreeInterval).HasColumnName("don_cancer_free_interval");

                entity.Property(e => e.DonCancerOtherOstxt)
                    .HasColumnName("don_cancer_other_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.DonCardiacArrestAfterDeath)
                    .HasColumnName("don_cardiac_arrest_after_death")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonChagasNat)
                    .HasColumnName("don_chagas_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonChestXray)
                    .HasColumnName("don_chest_xray")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCiFinal).HasColumnName("don_ci_final");

                entity.Property(e => e.DonCiInit).HasColumnName("don_ci_init");

                entity.Property(e => e.DonCitizenship)
                    .HasColumnName("don_citizenship")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonClampDt)
                    .HasColumnName("don_clamp_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonClampTm)
                    .HasColumnName("don_clamp_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonClampTmZone)
                    .HasColumnName("don_clamp_tm_zone")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonClinicalInfect)
                    .HasColumnName("don_clinical_infect")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCoFinal).HasColumnName("don_co_final");

                entity.Property(e => e.DonCoInit).HasColumnName("don_co_init");

                entity.Property(e => e.DonCodDonStroke)
                    .HasColumnName("don_cod_don_stroke")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonColdIschTmArrivKi).HasColumnName("don_cold_isch_tm_arriv_ki");

                entity.Property(e => e.DonConsentAttorney)
                    .HasColumnName("don_consent_attorney")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonConsentDonCard)
                    .HasColumnName("don_consent_don_card")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonConsentDonRegis)
                    .HasColumnName("don_consent_don_regis")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonConsentDriverLicense)
                    .HasColumnName("don_consent_driver_license")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonConsentPxWritDoc)
                    .HasColumnName("don_consent_px_writ_doc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonConsentTm)
                    .HasColumnName("don_consent_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonConsentWritDocIntent)
                    .HasColumnName("don_consent_writ_doc_intent")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContAlcohol)
                    .HasColumnName("don_cont_alcohol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContCigarette)
                    .HasColumnName("don_cont_cigarette")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContCocaine)
                    .HasColumnName("don_cont_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContIvDrug)
                    .HasColumnName("don_cont_iv_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContOtherDrug)
                    .HasColumnName("don_cont_other_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCoronaryAngio)
                    .HasColumnName("don_coronary_angio")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCreat).HasColumnName("don_creat");

                entity.Property(e => e.DonCregDonFlg)
                    .HasColumnName("don_creg_don_flg")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonCvpFinal).HasColumnName("don_cvp_final");

                entity.Property(e => e.DonCvpInit).HasColumnName("don_cvp_init");

                entity.Property(e => e.DonDcdAbdomAortaCannulDt)
                    .HasColumnName("don_dcd_abdom_aorta_cannul_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdAbdomAortaCannulTm)
                    .HasColumnName("don_dcd_abdom_aorta_cannul_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdAgonalBeginDt)
                    .HasColumnName("don_dcd_agonal_begin_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdAgonalBeginTm)
                    .HasColumnName("don_dcd_agonal_begin_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdPortalVeinCannulDt)
                    .HasColumnName("don_dcd_portal_vein_cannul_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdPortalVeinCannulTm)
                    .HasColumnName("don_dcd_portal_vein_cannul_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdProgressToBrainDeath)
                    .HasColumnName("don_dcd_progress_to_brain_death")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDcdPulmArtCannulDt)
                    .HasColumnName("don_dcd_pulm_art_cannul_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdPulmArtCannulTm)
                    .HasColumnName("don_dcd_pulm_art_cannul_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdSupportWithdrawDt)
                    .HasColumnName("don_dcd_support_withdraw_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdSupportWithdrawTm)
                    .HasColumnName("don_dcd_support_withdraw_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdThorAortaCannulDt)
                    .HasColumnName("don_dcd_thor_aorta_cannul_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonDcdThorAortaCannulTm)
                    .HasColumnName("don_dcd_thor_aorta_cannul_tm")
                    .HasColumnType("time without time zone");

                entity.Property(e => e.DonDcdTotUrineOutput).HasColumnName("don_dcd_tot_urine_output");

                entity.Property(e => e.DonDdavp)
                    .HasColumnName("don_ddavp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDeathCircum)
                    .HasColumnName("don_death_circum")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDeathMech)
                    .HasColumnName("don_death_mech")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDobutamine)
                    .HasColumnName("don_dobutamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDopamine)
                    .HasColumnName("don_dopamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDp1)
                    .HasColumnName("don_dp1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDp2)
                    .HasColumnName("don_dp2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDq1)
                    .HasColumnName("don_dq1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDq2)
                    .HasColumnName("don_dq2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr1)
                    .HasColumnName("don_dr1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr2)
                    .HasColumnName("don_dr2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr51)
                    .HasColumnName("don_dr51")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr52)
                    .HasColumnName("don_dr52")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr53)
                    .HasColumnName("don_dr53")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonEbna)
                    .HasColumnName("don_ebna")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvIgg)
                    .HasColumnName("don_ebv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvIgm)
                    .HasColumnName("don_ebv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEjectFract).HasColumnName("don_eject_fract");

                entity.Property(e => e.DonEjectFractMeth)
                    .HasColumnName("don_eject_fract_meth")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonEthnicitySrtr)
                    .HasColumnName("don_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonExpandDonFlgOptn)
                    .HasColumnName("don_expand_don_flg_optn")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonExpandDonKi)
                    .HasColumnName("don_expand_don_ki")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonExpressFamily)
                    .HasColumnName("don_express_family")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonExtracranialCancer)
                    .HasColumnName("don_extracranial_cancer")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonFeedbackDone)
                    .HasColumnName("don_feedback_done")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonFinalSerumCreat).HasColumnName("don_final_serum_creat");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHbcStat)
                    .HasColumnName("don_hbc_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHbvNat)
                    .HasColumnName("don_hbv_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvSurfAntibody)
                    .HasColumnName("don_hbv_surf_antibody")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvSurfAntigen)
                    .HasColumnName("don_hbv_surf_antigen")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvNat)
                    .HasColumnName("don_hcv_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvStat)
                    .HasColumnName("don_hcv_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHeavyAlcohol)
                    .HasColumnName("don_heavy_alcohol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHematocrit).HasColumnName("don_hematocrit");

                entity.Property(e => e.DonHeparin)
                    .HasColumnName("don_heparin")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHgtCm).HasColumnName("don_hgt_cm");

                entity.Property(e => e.DonHighCreat)
                    .HasColumnName("don_high_creat")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonHistAlcohol)
                    .HasColumnName("don_hist_alcohol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCancer)
                    .HasColumnName("don_hist_cancer")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistCigaretteGt20Pkyr)
                    .HasColumnName("don_hist_cigarette_gt20_pkyr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCocaine)
                    .HasColumnName("don_hist_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistDiab)
                    .HasColumnName("don_hist_diab")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistHyperten)
                    .HasColumnName("don_hist_hyperten")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistInsulinDepnd)
                    .HasColumnName("don_hist_insulin_depnd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistIvDrug)
                    .HasColumnName("don_hist_iv_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistOtherDrug)
                    .HasColumnName("don_hist_other_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistPrevMi)
                    .HasColumnName("don_hist_prev_mi")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHivNat)
                    .HasColumnName("don_hiv_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHlaTyp)
                    .HasColumnName("don_hla_typ")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHlaTypNotDone)
                    .HasColumnName("don_hla_typ_not_done")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonHomeState)
                    .HasColumnName("don_home_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHtlvNat)
                    .HasColumnName("don_htlv_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHtn)
                    .HasColumnName("don_htn")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonHypertenDiet)
                    .HasColumnName("don_hyperten_diet")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenDiuretics)
                    .HasColumnName("don_hyperten_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenOtherMeds)
                    .HasColumnName("don_hyperten_other_meds")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectBlood)
                    .HasColumnName("don_infect_blood")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonInfectBloodConfirm)
                    .HasColumnName("don_infect_blood_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectLu)
                    .HasColumnName("don_infect_lu")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonInfectLuConfirm)
                    .HasColumnName("don_infect_lu_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectOther)
                    .HasColumnName("don_infect_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonInfectOtherConfirm)
                    .HasColumnName("don_infect_other_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectUrine)
                    .HasColumnName("don_infect_urine")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonInfectUrineConfirm)
                    .HasColumnName("don_infect_urine_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInotropAgentGe3)
                    .HasColumnName("don_inotrop_agent_ge3")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInotropSupport)
                    .HasColumnName("don_inotrop_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInr).HasColumnName("don_inr");

                entity.Property(e => e.DonInsulin)
                    .HasColumnName("don_insulin")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonIntracranialCancer)
                    .HasColumnName("don_intracranial_cancer")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiGlomerObserved).HasColumnName("don_ki_glomer_observed");

                entity.Property(e => e.DonKiGlomerSclerPct).HasColumnName("don_ki_glomer_scler_pct");

                entity.Property(e => e.DonLfKiBiopsy)
                    .HasColumnName("don_lf_ki_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLfKiGlomerSclerPct)
                    .HasColumnName("don_lf_ki_glomer_scler_pct")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLfKiPump)
                    .HasColumnName("don_lf_ki_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLfKiResistPriorShip).HasColumnName("don_lf_ki_resist_prior_ship");

                entity.Property(e => e.DonLfKiTxferPump)
                    .HasColumnName("don_lf_ki_txfer_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLfLuBroncho)
                    .HasColumnName("don_lf_lu_broncho")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLiBiopsy)
                    .HasColumnName("don_li_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiopsyMacroFat).HasColumnName("don_li_biopsy_macro_fat");

                entity.Property(e => e.DonLiBiopsyMicroFat).HasColumnName("don_li_biopsy_micro_fat");

                entity.Property(e => e.DonLiOthHistologyGranulomas)
                    .HasColumnName("don_li_oth_histology_granulomas")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiOthHistologyHemosidera)
                    .HasColumnName("don_li_oth_histology_hemosidera")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiOthHistologyOther)
                    .HasColumnName("don_li_oth_histology_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLipase).HasColumnName("don_lipase");

                entity.Property(e => e.DonMapFinal).HasColumnName("don_map_final");

                entity.Property(e => e.DonMapInit).HasColumnName("don_map_init");

                entity.Property(e => e.DonMaxCreat).HasColumnName("don_max_creat");

                entity.Property(e => e.DonMedExaminer)
                    .HasColumnName("don_med_examiner")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonMeetCdcHighRisk)
                    .HasColumnName("don_meet_cdc_high_risk")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonMeetDoubleKiCrit)
                    .HasColumnName("don_meet_double_ki_crit")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonNonHrBeat)
                    .HasColumnName("don_non_hr_beat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeatCntl)
                    .HasColumnName("don_non_hr_beat_cntl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeatCoreCool)
                    .HasColumnName("don_non_hr_beat_core_cool")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoCtrId)
                    .HasColumnName("don_opo_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.DonPaDiastFinal).HasColumnName("don_pa_diast_final");

                entity.Property(e => e.DonPaDiastInit).HasColumnName("don_pa_diast_init");

                entity.Property(e => e.DonPaSystFinal).HasColumnName("don_pa_syst_final");

                entity.Property(e => e.DonPaSystInit).HasColumnName("don_pa_syst_init");

                entity.Property(e => e.DonPco2).HasColumnName("don_pco2");

                entity.Property(e => e.DonPcwpFinal).HasColumnName("don_pcwp_final");

                entity.Property(e => e.DonPcwpInit).HasColumnName("don_pcwp_init");

                entity.Property(e => e.DonPeakSerumCreat).HasColumnName("don_peak_serum_creat");

                entity.Property(e => e.DonPh).HasColumnName("don_ph");

                entity.Property(e => e.DonPo2).HasColumnName("don_po2");

                entity.Property(e => e.DonPo2Done)
                    .HasColumnName("don_po2_done")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPo2Fio2).HasColumnName("don_po2_fio2");

                entity.Property(e => e.DonPrerecovDiuretics)
                    .HasColumnName("don_prerecov_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPrerecovMeds)
                    .HasColumnName("don_prerecov_meds")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPrerecovSteroids)
                    .HasColumnName("don_prerecov_steroids")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPrerecovT3)
                    .HasColumnName("don_prerecov_t3")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPrerecovT4)
                    .HasColumnName("don_prerecov_t4")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPrevGastroDisease)
                    .HasColumnName("don_prev_gastro_disease")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonProteinUrine)
                    .HasColumnName("don_protein_urine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPulmCath)
                    .HasColumnName("don_pulm_cath")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRace)
                    .HasColumnName("don_race")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt)
                    .HasColumnName("don_recov_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonRecovOutUs)
                    .HasColumnName("don_recov_out_us")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRefDt)
                    .HasColumnName("don_ref_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonRefFlg)
                    .HasColumnName("don_ref_flg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonResuscitDuration).HasColumnName("don_resuscit_duration");

                entity.Property(e => e.DonRprVdrl)
                    .HasColumnName("don_rpr_vdrl")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonRtKiBiopsy)
                    .HasColumnName("don_rt_ki_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRtKiGlomerSclerPct)
                    .HasColumnName("don_rt_ki_glomer_scler_pct")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonRtKiPump)
                    .HasColumnName("don_rt_ki_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRtKiResistPriorShip).HasColumnName("don_rt_ki_resist_prior_ship");

                entity.Property(e => e.DonRtKiTxferPump)
                    .HasColumnName("don_rt_ki_txfer_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRtLuBroncho)
                    .HasColumnName("don_rt_lu_broncho")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonSerumAmylase).HasColumnName("don_serum_amylase");

                entity.Property(e => e.DonSgot).HasColumnName("don_sgot");

                entity.Property(e => e.DonSgpt).HasColumnName("don_sgpt");

                entity.Property(e => e.DonSkinCancer)
                    .HasColumnName("don_skin_cancer")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonSodium).HasColumnName("don_sodium");

                entity.Property(e => e.DonSvrFinal).HasColumnName("don_svr_final");

                entity.Property(e => e.DonSvrInit).HasColumnName("don_svr_init");

                entity.Property(e => e.DonTargetSource1)
                    .HasColumnName("don_target_source1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTargetSource2)
                    .HasColumnName("don_target_source2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTattoos)
                    .HasColumnName("don_tattoos")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonTmForXmatch)
                    .HasColumnName("don_tm_for_xmatch")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonTotBili).HasColumnName("don_tot_bili");

                entity.Property(e => e.DonTx).HasColumnName("don_tx");

                entity.Property(e => e.DonTxfusTerminalHospNum)
                    .HasColumnName("don_txfus_terminal_hosp_num")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonTypMethclass1)
                    .HasColumnName("don_typ_methclass1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTypMethclass1Dt)
                    .HasColumnName("don_typ_methclass1_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonTypMethclass2)
                    .HasColumnName("don_typ_methclass2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTypMethclass2Dt)
                    .HasColumnName("don_typ_methclass2_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonUseDoubleKi)
                    .HasColumnName("don_use_double_ki")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonVasodil)
                    .HasColumnName("don_vasodil")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonVesselsGt50Stenosis).HasColumnName("don_vessels_gt50_stenosis");

                entity.Property(e => e.DonWallAbnormGlob)
                    .HasColumnName("don_wall_abnorm_glob")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonWallAbnormSeg)
                    .HasColumnName("don_wall_abnorm_seg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonWarmIschTmMins).HasColumnName("don_warm_isch_tm_mins");

                entity.Property(e => e.DonWestNileNat)
                    .HasColumnName("don_west_nile_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonWgtKg).HasColumnName("don_wgt_kg");
            });

            modelBuilder.Entity<DonorLive>(entity =>
            {
                entity.HasKey(e => new { e.DonorId, e.PersId })
                    .HasName("donor_live_pkey");

                entity.ToTable("donor_live", "liver");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonA1)
                    .HasColumnName("don_a1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonA2)
                    .HasColumnName("don_a2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonAbo)
                    .HasColumnName("don_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonAge).HasColumnName("don_age");

                entity.Property(e => e.DonAgeInMonths).HasColumnName("don_age_in_months");

                entity.Property(e => e.DonAlbuminPostop).HasColumnName("don_albumin_postop");

                entity.Property(e => e.DonAlbuminPreop).HasColumnName("don_albumin_preop");

                entity.Property(e => e.DonAlkphosPostop).HasColumnName("don_alkphos_postop");

                entity.Property(e => e.DonAlkphosPreop).HasColumnName("don_alkphos_preop");

                entity.Property(e => e.DonAnasthCompl)
                    .HasColumnName("don_anasth_compl")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.DonArrhythm)
                    .HasColumnName("don_arrhythm")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonB1)
                    .HasColumnName("don_b1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonB2)
                    .HasColumnName("don_b2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonBiliPostop).HasColumnName("don_bili_postop");

                entity.Property(e => e.DonBiliPreop).HasColumnName("don_bili_preop");

                entity.Property(e => e.DonBpDischrgDiast).HasColumnName("don_bp_dischrg_diast");

                entity.Property(e => e.DonBpDischrgSyst).HasColumnName("don_bp_dischrg_syst");

                entity.Property(e => e.DonBpPostopDiast).HasColumnName("don_bp_postop_diast");

                entity.Property(e => e.DonBpPostopSyst).HasColumnName("don_bp_postop_syst");

                entity.Property(e => e.DonBpPreopDiast).HasColumnName("don_bp_preop_diast");

                entity.Property(e => e.DonBpPreopSyst).HasColumnName("don_bp_preop_syst");

                entity.Property(e => e.DonBw4)
                    .HasColumnName("don_bw4")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonBw6)
                    .HasColumnName("don_bw6")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonC1)
                    .HasColumnName("don_c1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonC2)
                    .HasColumnName("don_c2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCancerFreeInterval)
                    .HasColumnName("don_cancer_free_interval")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonCitizenship)
                    .HasColumnName("don_citizenship")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCmv)
                    .HasColumnName("don_cmv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvClinical)
                    .HasColumnName("don_cmv_clinical")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvCult)
                    .HasColumnName("don_cmv_cult")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvIgg)
                    .HasColumnName("don_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvIgm)
                    .HasColumnName("don_cmv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvNucleic)
                    .HasColumnName("don_cmv_nucleic")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCmvTested)
                    .HasColumnName("don_cmv_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDiab)
                    .HasColumnName("don_diab")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDiabTreat)
                    .HasColumnName("don_diab_treat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDonation)
                    .HasColumnName("don_donation")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDp1)
                    .HasColumnName("don_dp1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDp2)
                    .HasColumnName("don_dp2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDq1)
                    .HasColumnName("don_dq1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDq2)
                    .HasColumnName("don_dq2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr1)
                    .HasColumnName("don_dr1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr2)
                    .HasColumnName("don_dr2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr51)
                    .HasColumnName("don_dr51")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr52)
                    .HasColumnName("don_dr52")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr53)
                    .HasColumnName("don_dr53")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDurationAbstinence)
                    .HasColumnName("don_duration_abstinence")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonEbvClinical)
                    .HasColumnName("don_ebv_clinical")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvDna)
                    .HasColumnName("don_ebv_dna")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvIgg)
                    .HasColumnName("don_ebv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvIgm)
                    .HasColumnName("don_ebv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonEbvTested)
                    .HasColumnName("don_ebv_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonEducation)
                    .HasColumnName("don_education")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonEthnicitySrtr)
                    .HasColumnName("don_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonFefAfterPreop).HasColumnName("don_fef_after_preop");

                entity.Property(e => e.DonFefBeforePreop).HasColumnName("don_fef_before_preop");

                entity.Property(e => e.DonFev1AfterPreop).HasColumnName("don_fev1_after_preop");

                entity.Property(e => e.DonFev1BeforePreop).HasColumnName("don_fev1_before_preop");

                entity.Property(e => e.DonFfpUnits).HasColumnName("don_ffp_units");

                entity.Property(e => e.DonFree)
                    .HasColumnName("don_free")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonFunctnStat)
                    .HasColumnName("don_functn_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonFvcAfterPreop).HasColumnName("don_fvc_after_preop");

                entity.Property(e => e.DonFvcBeforePreop).HasColumnName("don_fvc_before_preop");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHaploTyMatch)
                    .HasColumnName("don_haplo_ty_match")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHbvAntibody)
                    .HasColumnName("don_hbv_antibody")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvClinical)
                    .HasColumnName("don_hbv_clinical")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvDna)
                    .HasColumnName("don_hbv_dna")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvHdv)
                    .HasColumnName("don_hbv_hdv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvLiHistology)
                    .HasColumnName("don_hbv_li_histology")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvSurfAntigen)
                    .HasColumnName("don_hbv_surf_antigen")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHbvTested)
                    .HasColumnName("don_hbv_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHcvAntibody)
                    .HasColumnName("don_hcv_antibody")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvClinical)
                    .HasColumnName("don_hcv_clinical")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvLiHistology)
                    .HasColumnName("don_hcv_li_histology")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvRiba)
                    .HasColumnName("don_hcv_riba")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvRna)
                    .HasColumnName("don_hcv_rna")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHcvTested)
                    .HasColumnName("don_hcv_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHealthInsur)
                    .HasColumnName("don_health_insur")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHgtCm).HasColumnName("don_hgt_cm");

                entity.Property(e => e.DonHistCancer)
                    .HasColumnName("don_hist_cancer")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistCigarette)
                    .HasColumnName("don_hist_cigarette")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistHyperten)
                    .HasColumnName("don_hist_hyperten")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHivAntibody)
                    .HasColumnName("don_hiv_antibody")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHivClinical)
                    .HasColumnName("don_hiv_clinical")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHivConfirm)
                    .HasColumnName("don_hiv_confirm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHivRna)
                    .HasColumnName("don_hiv_rna")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHivScreen)
                    .HasColumnName("don_hiv_screen")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHivTested)
                    .HasColumnName("don_hiv_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHlaTyp)
                    .HasColumnName("don_hla_typ")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHlaTypNotDone)
                    .HasColumnName("don_hla_typ_not_done")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonHmoPpo)
                    .HasColumnName("don_hmo_ppo")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHomeState)
                    .HasColumnName("don_home_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHypertenDiet)
                    .HasColumnName("don_hyperten_diet")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenDiuretics)
                    .HasColumnName("don_hyperten_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenOtherMeds)
                    .HasColumnName("don_hyperten_other_meds")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenPostop)
                    .HasColumnName("don_hyperten_postop")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInitDischrgDt)
                    .HasColumnName("don_init_dischrg_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonInrPostop).HasColumnName("don_inr_postop");

                entity.Property(e => e.DonInrPreop).HasColumnName("don_inr_preop");

                entity.Property(e => e.DonIntraopCompl)
                    .HasColumnName("don_intraop_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonIntraopComplReason)
                    .HasColumnName("don_intraop_compl_reason")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonKiBiopsy)
                    .HasColumnName("don_ki_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiCreatDischrg).HasColumnName("don_ki_creat_dischrg");

                entity.Property(e => e.DonKiCreatPostop).HasColumnName("don_ki_creat_postop");

                entity.Property(e => e.DonKiCreatPreop).HasColumnName("don_ki_creat_preop");

                entity.Property(e => e.DonKiOtherCompl)
                    .HasColumnName("don_ki_other_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiOtherComplIntervention)
                    .HasColumnName("don_ki_other_compl_intervention")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonKiOtherIntervention)
                    .HasColumnName("don_ki_other_intervention")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiOtherInterventionDt)
                    .HasColumnName("don_ki_other_intervention_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiPctGs)
                    .HasColumnName("don_ki_pct_gs")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonKiProcedureConvert)
                    .HasColumnName("don_ki_procedure_convert")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiProcedureTy)
                    .HasColumnName("don_ki_procedure_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonKiReadmit)
                    .HasColumnName("don_ki_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiReadmitDt)
                    .HasColumnName("don_ki_readmit_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiReadmitReason)
                    .HasColumnName("don_ki_readmit_reason")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonKiReop)
                    .HasColumnName("don_ki_reop")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiReopBleen)
                    .HasColumnName("don_ki_reop_bleen")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonKiReopBleenDt)
                    .HasColumnName("don_ki_reop_bleen_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiReopBowel)
                    .HasColumnName("don_ki_reop_bowel")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonKiReopBowelDt)
                    .HasColumnName("don_ki_reop_bowel_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiReopHernia)
                    .HasColumnName("don_ki_reop_hernia")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonKiReopHerniaDt)
                    .HasColumnName("don_ki_reop_hernia_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiReopOther)
                    .HasColumnName("don_ki_reop_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonKiReopOtherDt)
                    .HasColumnName("don_ki_reop_other_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiReopVasc)
                    .HasColumnName("don_ki_reop_vasc")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonKiReopVascDt)
                    .HasColumnName("don_ki_reop_vasc_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonKiVascCompl)
                    .HasColumnName("don_ki_vasc_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiVascComplIntervention)
                    .HasColumnName("don_ki_vasc_compl_intervention")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLengthHospStay).HasColumnName("don_length_hosp_stay");

                entity.Property(e => e.DonLiBiliaryCompl)
                    .HasColumnName("don_li_biliary_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiliaryComplGrade)
                    .HasColumnName("don_li_biliary_compl_grade")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLiBiopsy)
                    .HasColumnName("don_li_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiopsyMacroFat).HasColumnName("don_li_biopsy_macro_fat");

                entity.Property(e => e.DonLiBiopsyMicroFat).HasColumnName("don_li_biopsy_micro_fat");

                entity.Property(e => e.DonLiCreatPostop).HasColumnName("don_li_creat_postop");

                entity.Property(e => e.DonLiCreatPreop).HasColumnName("don_li_creat_preop");

                entity.Property(e => e.DonLiOtherCompl)
                    .HasColumnName("don_li_other_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiOtherComplIntervention)
                    .HasColumnName("don_li_other_compl_intervention")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLiOtherIntervention)
                    .HasColumnName("don_li_other_intervention")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiOtherInterventionDt)
                    .HasColumnName("don_li_other_intervention_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiProcedureTy)
                    .HasColumnName("don_li_procedure_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLiReadmit)
                    .HasColumnName("don_li_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiReadmitDt)
                    .HasColumnName("don_li_readmit_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReadmitReason)
                    .HasColumnName("don_li_readmit_reason")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLiReop)
                    .HasColumnName("don_li_reop")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiReopBiliary)
                    .HasColumnName("don_li_reop_biliary")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopBiliaryDt)
                    .HasColumnName("don_li_reop_biliary_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopBleed)
                    .HasColumnName("don_li_reop_bleed")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopBleedDt)
                    .HasColumnName("don_li_reop_bleed_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopBowel)
                    .HasColumnName("don_li_reop_bowel")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopBowelDt)
                    .HasColumnName("don_li_reop_bowel_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopFail)
                    .HasColumnName("don_li_reop_fail")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopFailDt)
                    .HasColumnName("don_li_reop_fail_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopHernia)
                    .HasColumnName("don_li_reop_hernia")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopHerniaDt)
                    .HasColumnName("don_li_reop_hernia_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopOther)
                    .HasColumnName("don_li_reop_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopOtherDt)
                    .HasColumnName("don_li_reop_other_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiReopVasc)
                    .HasColumnName("don_li_reop_vasc")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonLiReopVascDt)
                    .HasColumnName("don_li_reop_vasc_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLiVascCompl)
                    .HasColumnName("don_li_vasc_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiVascComplIntervention)
                    .HasColumnName("don_li_vasc_compl_intervention")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLivingDonCod)
                    .HasColumnName("don_living_don_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLuArrhythm)
                    .HasColumnName("don_lu_arrhythm")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLuCapacityPreop).HasColumnName("don_lu_capacity_preop");

                entity.Property(e => e.DonLuCompl)
                    .HasColumnName("don_lu_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuComplReason)
                    .HasColumnName("don_lu_compl_reason")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLuProcedureConvert)
                    .HasColumnName("don_lu_procedure_convert")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuProcedureTy)
                    .HasColumnName("don_lu_procedure_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLuReadmit)
                    .HasColumnName("don_lu_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuReadmitDt)
                    .HasColumnName("don_lu_readmit_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonLuReadmitReason)
                    .HasColumnName("don_lu_readmit_reason")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonLuThoracTubes)
                    .HasColumnName("don_lu_thorac_tubes")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonMaritalStat)
                    .HasColumnName("don_marital_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonMedicaid)
                    .HasColumnName("don_medicaid")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonMedicare)
                    .HasColumnName("don_medicare")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonAutoBlood)
                    .HasColumnName("don_non_auto_blood")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoRunMatch)
                    .HasColumnName("don_opo_run_match")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonOrg1)
                    .HasColumnName("don_org1")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.DonOrg2)
                    .HasColumnName("don_org2")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.DonOtherGovt)
                    .HasColumnName("don_other_govt")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOtherTobaccoUse)
                    .HasColumnName("don_other_tobacco_use")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonPackYears)
                    .HasColumnName("don_pack_years")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonPao2Preop).HasColumnName("don_pao2_preop");

                entity.Property(e => e.DonPhyscCapacity)
                    .HasColumnName("don_physc_capacity")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonPltUnits).HasColumnName("don_plt_units");

                entity.Property(e => e.DonPostopTestDt)
                    .HasColumnName("don_postop_test_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonPrbcUnits).HasColumnName("don_prbc_units");

                entity.Property(e => e.DonPrimaryPay)
                    .HasColumnName("don_primary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonPrivInsur)
                    .HasColumnName("don_priv_insur")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRace)
                    .HasColumnName("don_race")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt)
                    .HasColumnName("don_recov_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonRecovTxSameCtr)
                    .HasColumnName("don_recov_tx_same_ctr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRelationshipTy)
                    .HasColumnName("don_relationship_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonSacrificeLobe)
                    .HasColumnName("don_sacrifice_lobe")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonSelf)
                    .HasColumnName("don_self")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonSgotPostop).HasColumnName("don_sgot_postop");

                entity.Property(e => e.DonSgotPreop).HasColumnName("don_sgot_preop");

                entity.Property(e => e.DonSgptPostop).HasColumnName("don_sgpt_postop");

                entity.Property(e => e.DonSgptPreop).HasColumnName("don_sgpt_preop");

                entity.Property(e => e.DonStat)
                    .HasColumnName("don_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonStatDt)
                    .HasColumnName("don_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonTargetSource1)
                    .HasColumnName("don_target_source1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTargetSource2)
                    .HasColumnName("don_target_source2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTlcAfterPreop).HasColumnName("don_tlc_after_preop");

                entity.Property(e => e.DonTlcBeforePreop).HasColumnName("don_tlc_before_preop");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonTypMethclass1)
                    .HasColumnName("don_typ_methclass1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTypMethclass1Dt)
                    .HasColumnName("don_typ_methclass1_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonTypMethclass2)
                    .HasColumnName("don_typ_methclass2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonTypMethclass2Dt)
                    .HasColumnName("don_typ_methclass2_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonUrinePostopProtein).HasColumnName("don_urine_postop_protein");

                entity.Property(e => e.DonUrinePostopRatio).HasColumnName("don_urine_postop_ratio");

                entity.Property(e => e.DonUrinePreopProtein).HasColumnName("don_urine_preop_protein");

                entity.Property(e => e.DonUrinePreopRatio).HasColumnName("don_urine_preop_ratio");

                entity.Property(e => e.DonVirusesTested)
                    .HasColumnName("don_viruses_tested")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonWgtKg).HasColumnName("don_wgt_kg");

                entity.Property(e => e.DonWorkIncome)
                    .HasColumnName("don_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonWorkNoStat)
                    .HasColumnName("don_work_no_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonWorkYesStat)
                    .HasColumnName("don_work_yes_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonYearEntryUs)
                    .HasColumnName("don_year_entry_us")
                    .HasColumnType("date");

                entity.Property(e => e.PersSsaDeathDt)
                    .HasColumnName("pers_ssa_death_dt")
                    .HasColumnType("date");
            });

            modelBuilder.Entity<Info>(entity =>
            {
                entity.HasKey(e => new { e.PersId, e.Email })
                    .HasName("info_pk");

                entity.ToTable("info", "users");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasColumnType("character varying(32)");

                entity.Property(e => e.Address).HasColumnName("address");

                entity.Property(e => e.CanAcademicLevel)
                    .HasColumnName("can_academic_level")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanAcademicProgress)
                    .HasColumnName("can_academic_progress")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanCitizenship)
                    .HasColumnName("can_citizenship")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanEducation)
                    .HasColumnName("can_education")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanEmplStat)
                    .HasColumnName("can_empl_stat")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanEthnicitySrtr)
                    .HasColumnName("can_ethnicity_srtr")
                    .HasColumnType("character(10)");

                entity.Property(e => e.CanGender).HasColumnName("can_gender");

                entity.Property(e => e.CanPermState)
                    .HasColumnName("can_perm_state")
                    .HasColumnType("character(2)");

                entity.Property(e => e.CanPrimaryPay)
                    .HasColumnName("can_primary_pay")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanRace)
                    .HasColumnName("can_race")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanRaceSrtr)
                    .HasColumnName("can_race_srtr")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanSecondaryPay)
                    .HasColumnName("can_secondary_pay")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanWorkIncome).HasColumnName("can_work_income");

                entity.Property(e => e.CanWorkNoStat)
                    .HasColumnName("can_work_no_stat")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanWorkYesStat)
                    .HasColumnName("can_work_yes_stat")
                    .HasColumnType("numeric");

                entity.Property(e => e.CanYearEntryUs)
                    .HasColumnName("can_year_entry_us")
                    .HasColumnType("numeric");

                entity.Property(e => e.Fullname)
                    .HasColumnName("fullname")
                    .HasColumnType("character varying");

                entity.Property(e => e.Ssn)
                    .HasColumnName("ssn")
                    .HasColumnType("numeric");

                entity.HasOne(d => d.EmailNavigation)
                    .WithMany(p => p.Info)
                    .HasForeignKey(d => d.Email)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("info_users_fk");
            });

            modelBuilder.Entity<TxLi>(entity =>
            {
                entity.HasKey(e => new { e.TxId, e.TrrId })
                    .HasName("tx_li_pkey");

                entity.ToTable("tx_li", "liver");

                entity.Property(e => e.TxId)
                    .HasColumnName("tx_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TrrId)
                    .HasColumnName("trr_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAbo)
                    .HasColumnName("can_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.CanAgeAtListing)
                    .HasColumnName("can_age_at_listing")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAgeInMonthsAtListing).HasColumnName("can_age_in_months_at_listing");

                entity.Property(e => e.CanAngina)
                    .HasColumnName("can_angina")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanAnginaCad)
                    .HasColumnName("can_angina_cad")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanBacteriaPerit)
                    .HasColumnName("can_bacteria_perit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanCerebVasc)
                    .HasColumnName("can_cereb_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanCitizenship)
                    .HasColumnName("can_citizenship")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDgn)
                    .HasColumnName("can_dgn")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDgn2)
                    .HasColumnName("can_dgn2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDiab)
                    .HasColumnName("can_diab")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDiabTy)
                    .HasColumnName("can_diab_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanDrugTreatCopd)
                    .HasColumnName("can_drug_treat_copd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanDrugTreatHyperten)
                    .HasColumnName("can_drug_treat_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEducation)
                    .HasColumnName("can_education")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanEthnicitySrtr)
                    .HasColumnName("can_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanGender)
                    .HasColumnName("can_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanHgtCm).HasColumnName("can_hgt_cm");

                entity.Property(e => e.CanInitActStatCd)
                    .HasColumnName("can_init_act_stat_cd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanInitActStatDt)
                    .HasColumnName("can_init_act_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanInitInactStatDt)
                    .HasColumnName("can_init_inact_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanInitSrtrLabMeld)
                    .HasColumnName("can_init_srtr_lab_meld")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanInitSrtrLabMeldTy)
                    .HasColumnName("can_init_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitStat)
                    .HasColumnName("can_init_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastActStatDt)
                    .HasColumnName("can_last_act_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanLastAlbumin).HasColumnName("can_last_albumin");

                entity.Property(e => e.CanLastAscites)
                    .HasColumnName("can_last_ascites")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastBili).HasColumnName("can_last_bili");

                entity.Property(e => e.CanLastDialPriorWeek)
                    .HasColumnName("can_last_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastEnceph)
                    .HasColumnName("can_last_enceph")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastInactStatDt)
                    .HasColumnName("can_last_inact_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanLastInr).HasColumnName("can_last_inr");

                entity.Property(e => e.CanLastSerumCreat).HasColumnName("can_last_serum_creat");

                entity.Property(e => e.CanLastSerumSodium).HasColumnName("can_last_serum_sodium");

                entity.Property(e => e.CanLastSrtrLabMeld)
                    .HasColumnName("can_last_srtr_lab_meld")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanLastSrtrLabMeldTy)
                    .HasColumnName("can_last_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastStat)
                    .HasColumnName("can_last_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanListingDt)
                    .HasColumnName("can_listing_dt")
                    .HasColumnType("date");

                entity.Property(e => e.CanMalig)
                    .HasColumnName("can_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPepticUlcer)
                    .HasColumnName("can_peptic_ulcer")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanPeriphVasc)
                    .HasColumnName("can_periph_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPortalVein)
                    .HasColumnName("can_portal_vein")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevAbdomSurg)
                    .HasColumnName("can_prev_abdom_surg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevHl).HasColumnName("can_prev_hl");

                entity.Property(e => e.CanPrevHr).HasColumnName("can_prev_hr");

                entity.Property(e => e.CanPrevIn).HasColumnName("can_prev_in");

                entity.Property(e => e.CanPrevKi).HasColumnName("can_prev_ki");

                entity.Property(e => e.CanPrevKp).HasColumnName("can_prev_kp");

                entity.Property(e => e.CanPrevLi).HasColumnName("can_prev_li");

                entity.Property(e => e.CanPrevLu).HasColumnName("can_prev_lu");

                entity.Property(e => e.CanPrevPa).HasColumnName("can_prev_pa");

                entity.Property(e => e.CanPrevTx).HasColumnName("can_prev_tx");

                entity.Property(e => e.CanPrevTxfus)
                    .HasColumnName("can_prev_txfus")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPulmEmbol)
                    .HasColumnName("can_pulm_embol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanRace)
                    .HasColumnName("can_race")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanRaceSrtr)
                    .HasColumnName("can_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanRemCd)
                    .HasColumnName("can_rem_cd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.CanSource)
                    .HasColumnName("can_source")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanTipss)
                    .HasColumnName("can_tipss")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanTotAlbumin).HasColumnName("can_tot_albumin");

                entity.Property(e => e.CanWgtKg).HasColumnName("can_wgt_kg");

                entity.Property(e => e.CanhxMpxcptHccApplyInd).HasColumnName("canhx_mpxcpt_hcc_apply_ind");

                entity.Property(e => e.CanhxMpxcptHccApproveInd).HasColumnName("canhx_mpxcpt_hcc_approve_ind");

                entity.Property(e => e.DonA1)
                    .HasColumnName("don_a1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonA2)
                    .HasColumnName("don_a2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonAbo)
                    .HasColumnName("don_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonAge).HasColumnName("don_age");

                entity.Property(e => e.DonAgeInMonths).HasColumnName("don_age_in_months");

                entity.Property(e => e.DonAntiCmv)
                    .HasColumnName("don_anti_cmv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonAntiHcv)
                    .HasColumnName("don_anti_hcv")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonB1)
                    .HasColumnName("don_b1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonB2)
                    .HasColumnName("don_b2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCadDonCod)
                    .HasColumnName("don_cad_don_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCardiacArrestAfterDeath)
                    .HasColumnName("don_cardiac_arrest_after_death")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCitizenship)
                    .HasColumnName("don_citizenship")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonCmvIgg)
                    .HasColumnName("don_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCodDonStroke)
                    .HasColumnName("don_cod_don_stroke")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonContCigarette)
                    .HasColumnName("don_cont_cigarette")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContCocaine)
                    .HasColumnName("don_cont_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContIvDrug)
                    .HasColumnName("don_cont_iv_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonContOtherDrug)
                    .HasColumnName("don_cont_other_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCreat).HasColumnName("don_creat");

                entity.Property(e => e.DonDdavp)
                    .HasColumnName("don_ddavp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDeathCircum)
                    .HasColumnName("don_death_circum")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDeathMech)
                    .HasColumnName("don_death_mech")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDobutamine)
                    .HasColumnName("don_dobutamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDopamine)
                    .HasColumnName("don_dopamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDr1)
                    .HasColumnName("don_dr1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonDr2)
                    .HasColumnName("don_dr2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonEthnicitySrtr)
                    .HasColumnName("don_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonExpandDonKi)
                    .HasColumnName("don_expand_don_ki")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHaploTyMatch)
                    .HasColumnName("don_haplo_ty_match")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHgtCm).HasColumnName("don_hgt_cm");

                entity.Property(e => e.DonHighCreat)
                    .HasColumnName("don_high_creat")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonHistCancer)
                    .HasColumnName("don_hist_cancer")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistCigaretteGt20Pkyr)
                    .HasColumnName("don_hist_cigarette_gt20_pkyr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCocaine)
                    .HasColumnName("don_hist_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistDiab)
                    .HasColumnName("don_hist_diab")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistHyperten)
                    .HasColumnName("don_hist_hyperten")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonHistIvDrug)
                    .HasColumnName("don_hist_iv_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistOtherDrug)
                    .HasColumnName("don_hist_other_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHtn)
                    .HasColumnName("don_htn")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.DonInotropAgentGe3)
                    .HasColumnName("don_inotrop_agent_ge3")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInotropSupport)
                    .HasColumnName("don_inotrop_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInsulin)
                    .HasColumnName("don_insulin")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiopsy)
                    .HasColumnName("don_li_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLivingDonCod)
                    .HasColumnName("don_living_don_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonMeetCdcHighRisk)
                    .HasColumnName("don_meet_cdc_high_risk")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeat)
                    .HasColumnName("don_non_hr_beat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoCtrId)
                    .HasColumnName("don_opo_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.DonOrgShared).HasColumnName("don_org_shared");

                entity.Property(e => e.DonPh).HasColumnName("don_ph");

                entity.Property(e => e.DonPrerecovDiuretics)
                    .HasColumnName("don_prerecov_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRace)
                    .HasColumnName("don_race")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt)
                    .HasColumnName("don_recov_dt")
                    .HasColumnType("date");

                entity.Property(e => e.DonRelationshipTy)
                    .HasColumnName("don_relationship_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonSgot).HasColumnName("don_sgot");

                entity.Property(e => e.DonSgotPreop).HasColumnName("don_sgot_preop");

                entity.Property(e => e.DonSgptPreop).HasColumnName("don_sgpt_preop");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonWarmIschTmMins).HasColumnName("don_warm_isch_tm_mins");

                entity.Property(e => e.DonWgtKg).HasColumnName("don_wgt_kg");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.DonorIdVessel).HasColumnName("donor_id_vessel");

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.OrgTy)
                    .HasColumnName("org_ty")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersOptnCod)
                    .HasColumnName("pers_optn_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersOptnDeathDt)
                    .HasColumnName("pers_optn_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.PersRelist)
                    .HasColumnName("pers_relist")
                    .HasColumnType("date");

                entity.Property(e => e.PersRestrictDeathDt)
                    .HasColumnName("pers_restrict_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.PersRestrictDeathVrfy)
                    .HasColumnName("pers_restrict_death_vrfy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.PersRetx)
                    .HasColumnName("pers_retx")
                    .HasColumnType("date");

                entity.Property(e => e.PersRetxTrrId)
                    .HasColumnName("pers_retx_trr_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PersSsaDeathDt)
                    .HasColumnName("pers_ssa_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecA1)
                    .HasColumnName("rec_a1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecA2)
                    .HasColumnName("rec_a2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAMmEquivCur).HasColumnName("rec_a_mm_equiv_cur");

                entity.Property(e => e.RecAMmEquivTx).HasColumnName("rec_a_mm_equiv_tx");

                entity.Property(e => e.RecAcademicLevel)
                    .HasColumnName("rec_academic_level")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAcademicProgress)
                    .HasColumnName("rec_academic_progress")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAcuteRejBiopsyConfirmed)
                    .HasColumnName("rec_acute_rej_biopsy_confirmed")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAcuteRejEpisode)
                    .HasColumnName("rec_acute_rej_episode")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAdmissionDt)
                    .HasColumnName("rec_admission_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecAgeAtTx)
                    .HasColumnName("rec_age_at_tx")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAgeInMonthsAtTx).HasColumnName("rec_age_in_months_at_tx");

                entity.Property(e => e.RecAntivrlTherapy)
                    .HasColumnName("rec_antivrl_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecAntivrlTherapyTy)
                    .HasColumnName("rec_antivrl_therapy_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecAntivrlTherapyTyAcyclovir)
                    .HasColumnName("rec_antivrl_therapy_ty_acyclovir")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyCytogam)
                    .HasColumnName("rec_antivrl_therapy_ty_cytogam")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyCytovene)
                    .HasColumnName("rec_antivrl_therapy_ty_cytovene")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyEpivir)
                    .HasColumnName("rec_antivrl_therapy_ty_epivir")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyFluVac)
                    .HasColumnName("rec_antivrl_therapy_ty_flu_vac")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyGamimune)
                    .HasColumnName("rec_antivrl_therapy_ty_gamimune")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyGammagard)
                    .HasColumnName("rec_antivrl_therapy_ty_gammagard")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyHbig)
                    .HasColumnName("rec_antivrl_therapy_ty_hbig")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyOther)
                    .HasColumnName("rec_antivrl_therapy_ty_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyValcyte)
                    .HasColumnName("rec_antivrl_therapy_ty_valcyte")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAntivrlTherapyTyValtrex)
                    .HasColumnName("rec_antivrl_therapy_ty_valtrex")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecArtificialLi)
                    .HasColumnName("rec_artificial_li")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecAscites)
                    .HasColumnName("rec_ascites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecB1)
                    .HasColumnName("rec_b1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecB2)
                    .HasColumnName("rec_b2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecBMmEquivCur).HasColumnName("rec_b_mm_equiv_cur");

                entity.Property(e => e.RecBMmEquivTx).HasColumnName("rec_b_mm_equiv_tx");

                entity.Property(e => e.RecBacteriaPerit)
                    .HasColumnName("rec_bacteria_perit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecBmi).HasColumnName("rec_bmi");

                entity.Property(e => e.RecCmvIgg)
                    .HasColumnName("rec_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecCmvIgm)
                    .HasColumnName("rec_cmv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecCmvStat)
                    .HasColumnName("rec_cmv_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecCod)
                    .HasColumnName("rec_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecCod2)
                    .HasColumnName("rec_cod2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecCod3)
                    .HasColumnName("rec_cod3")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecCognitiveDevelop)
                    .HasColumnName("rec_cognitive_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecColdIschTm).HasColumnName("rec_cold_isch_tm");

                entity.Property(e => e.RecCtrId)
                    .HasColumnName("rec_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecCurCtrId)
                    .HasColumnName("rec_cur_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecCurPxStat)
                    .HasColumnName("rec_cur_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecDgn)
                    .HasColumnName("rec_dgn")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecDgn2)
                    .HasColumnName("rec_dgn2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecDgnOstxt)
                    .HasColumnName("rec_dgn_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.RecDischrgAlbumin).HasColumnName("rec_dischrg_albumin");

                entity.Property(e => e.RecDischrgAlkphos).HasColumnName("rec_dischrg_alkphos");

                entity.Property(e => e.RecDischrgCreat).HasColumnName("rec_dischrg_creat");

                entity.Property(e => e.RecDischrgDt)
                    .HasColumnName("rec_dischrg_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecDischrgInr).HasColumnName("rec_dischrg_inr");

                entity.Property(e => e.RecDischrgLabDt)
                    .HasColumnName("rec_dischrg_lab_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecDischrgSgot).HasColumnName("rec_dischrg_sgot");

                entity.Property(e => e.RecDischrgSgpt).HasColumnName("rec_dischrg_sgpt");

                entity.Property(e => e.RecDr1)
                    .HasColumnName("rec_dr1")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecDr2)
                    .HasColumnName("rec_dr2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecDrMmEquivCur).HasColumnName("rec_dr_mm_equiv_cur");

                entity.Property(e => e.RecDrMmEquivTx).HasColumnName("rec_dr_mm_equiv_tx");

                entity.Property(e => e.RecEbvStat)
                    .HasColumnName("rec_ebv_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecEmplStatPre04)
                    .HasColumnName("rec_empl_stat_pre04")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecFailBiliary)
                    .HasColumnName("rec_fail_biliary")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailDt)
                    .HasColumnName("rec_fail_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecFailHepDenovo)
                    .HasColumnName("rec_fail_hep_denovo")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailHepRecur)
                    .HasColumnName("rec_fail_hep_recur")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailInfect)
                    .HasColumnName("rec_fail_infect")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailPrimeGraftFail)
                    .HasColumnName("rec_fail_prime_graft_fail")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailRecurDisease)
                    .HasColumnName("rec_fail_recur_disease")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailRejAcute)
                    .HasColumnName("rec_fail_rej_acute")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailVascThromb)
                    .HasColumnName("rec_fail_vasc_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFunctnStat)
                    .HasColumnName("rec_functn_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecGraftStat)
                    .HasColumnName("rec_graft_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecHbvAntibody)
                    .HasColumnName("rec_hbv_antibody")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecHbvSurfAntigen)
                    .HasColumnName("rec_hbv_surf_antigen")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecHcvStat)
                    .HasColumnName("rec_hcv_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecHepaticArterThromb)
                    .HasColumnName("rec_hepatic_arter_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecHepaticOutflowObstruct)
                    .HasColumnName("rec_hepatic_outflow_obstruct")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecHgtCm).HasColumnName("rec_hgt_cm");

                entity.Property(e => e.RecHgtWgtDt)
                    .HasColumnName("rec_hgt_wgt_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecHistoTxId)
                    .HasColumnName("rec_histo_tx_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecHivStat)
                    .HasColumnName("rec_hiv_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecHosp90Days)
                    .HasColumnName("rec_hosp_90_days")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecImmunoMaintMeds)
                    .HasColumnName("rec_immuno_maint_meds")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecInotropBpSupport)
                    .HasColumnName("rec_inotrop_bp_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecLiTy)
                    .HasColumnName("rec_li_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecLifeSupport)
                    .HasColumnName("rec_life_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecLifeSupportOther)
                    .HasColumnName("rec_life_support_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMalig)
                    .HasColumnName("rec_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecMaligTy)
                    .HasColumnName("rec_malig_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecMaligTyBreast)
                    .HasColumnName("rec_malig_ty_breast")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyCnsTumor)
                    .HasColumnName("rec_malig_ty_cns_tumor")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyGenitourinary)
                    .HasColumnName("rec_malig_ty_genitourinary")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyHepblast)
                    .HasColumnName("rec_malig_ty_hepblast")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyHepcarcinoma)
                    .HasColumnName("rec_malig_ty_hepcarcinoma")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyLeukLymph)
                    .HasColumnName("rec_malig_ty_leuk_lymph")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyLiver)
                    .HasColumnName("rec_malig_ty_liver")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyLu)
                    .HasColumnName("rec_malig_ty_lu")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyOther)
                    .HasColumnName("rec_malig_ty_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTySkinMel)
                    .HasColumnName("rec_malig_ty_skin_mel")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTySkinNonMel)
                    .HasColumnName("rec_malig_ty_skin_non_mel")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyThroat)
                    .HasColumnName("rec_malig_ty_throat")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyThyroid)
                    .HasColumnName("rec_malig_ty_thyroid")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMaligTyUnk)
                    .HasColumnName("rec_malig_ty_unk")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecMedCond)
                    .HasColumnName("rec_med_cond")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecMmEquivCur).HasColumnName("rec_mm_equiv_cur");

                entity.Property(e => e.RecMmEquivTx).HasColumnName("rec_mm_equiv_tx");

                entity.Property(e => e.RecMotorDevelop)
                    .HasColumnName("rec_motor_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecOnVentilator)
                    .HasColumnName("rec_on_ventilator")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecOpoId)
                    .HasColumnName("rec_opo_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecOtherTherapy)
                    .HasColumnName("rec_other_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecOtherTherapyTy)
                    .HasColumnName("rec_other_therapy_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecOtherTherapyTyPhotoph)
                    .HasColumnName("rec_other_therapy_ty_photoph")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecOtherTherapyTyPlasmaph)
                    .HasColumnName("rec_other_therapy_ty_plasmaph")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecOtherTherapyTyTli)
                    .HasColumnName("rec_other_therapy_ty_tli")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecPbCredit)
                    .HasColumnName("rec_pb_credit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPbDebt)
                    .HasColumnName("rec_pb_debt")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPbShareTy)
                    .HasColumnName("rec_pb_share_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecPermState)
                    .HasColumnName("rec_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecPhyscCapacity)
                    .HasColumnName("rec_physc_capacity")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecPortalHypertenBleed)
                    .HasColumnName("rec_portal_hyperten_bleed")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPortalVein)
                    .HasColumnName("rec_portal_vein")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPortalVeinThromb)
                    .HasColumnName("rec_portal_vein_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPostxLos).HasColumnName("rec_postx_los");

                entity.Property(e => e.RecPretxAlbumin).HasColumnName("rec_pretx_albumin");

                entity.Property(e => e.RecPretxCreat).HasColumnName("rec_pretx_creat");

                entity.Property(e => e.RecPretxInr).HasColumnName("rec_pretx_inr");

                entity.Property(e => e.RecPretxLabDt)
                    .HasColumnName("rec_pretx_lab_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecPretxTotBili).HasColumnName("rec_pretx_tot_bili");

                entity.Property(e => e.RecPrevAbdomSurg)
                    .HasColumnName("rec_prev_abdom_surg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPrevHl).HasColumnName("rec_prev_hl");

                entity.Property(e => e.RecPrevHr).HasColumnName("rec_prev_hr");

                entity.Property(e => e.RecPrevIn).HasColumnName("rec_prev_in");

                entity.Property(e => e.RecPrevKi).HasColumnName("rec_prev_ki");

                entity.Property(e => e.RecPrevKp).HasColumnName("rec_prev_kp");

                entity.Property(e => e.RecPrevLi).HasColumnName("rec_prev_li");

                entity.Property(e => e.RecPrevLu).HasColumnName("rec_prev_lu");

                entity.Property(e => e.RecPrevNonfunctnTx)
                    .HasColumnName("rec_prev_nonfunctn_tx")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPrevPa).HasColumnName("rec_prev_pa");

                entity.Property(e => e.RecPrimaryPay)
                    .HasColumnName("rec_primary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecProcedureTyLi)
                    .HasColumnName("rec_procedure_ty_li")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxResearch)
                    .HasColumnName("rec_px_research")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxStat)
                    .HasColumnName("rec_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxStatDt)
                    .HasColumnName("rec_px_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecSecondaryPay)
                    .HasColumnName("rec_secondary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecSgpt).HasColumnName("rec_sgpt");

                entity.Property(e => e.RecTipss)
                    .HasColumnName("rec_tipss")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecToleranceInductionTech)
                    .HasColumnName("rec_tolerance_induction_tech")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecTumor)
                    .HasColumnName("rec_tumor")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecTumorTy)
                    .HasColumnName("rec_tumor_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecTxDt)
                    .HasColumnName("rec_tx_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecTxExtraVessel)
                    .HasColumnName("rec_tx_extra_vessel")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecTxOrgTy)
                    .HasColumnName("rec_tx_org_ty")
                    .HasColumnType("character varying(15)");

                entity.Property(e => e.RecTxProcedureTy)
                    .HasColumnName("rec_tx_procedure_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecTxTy)
                    .HasColumnName("rec_tx_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecTxferCtrId)
                    .HasColumnName("rec_txfer_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecTxferDt)
                    .HasColumnName("rec_txfer_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecValcyte)
                    .HasColumnName("rec_valcyte")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecVaricealBleeding)
                    .HasColumnName("rec_variceal_bleeding")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecVentilator)
                    .HasColumnName("rec_ventilator")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.RecWarmIschTm).HasColumnName("rec_warm_isch_tm");

                entity.Property(e => e.RecWgtKg).HasColumnName("rec_wgt_kg");

                entity.Property(e => e.RecWorkIncome)
                    .HasColumnName("rec_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecWorkNoStat)
                    .HasColumnName("rec_work_no_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecWorkYesStat)
                    .HasColumnName("rec_work_yes_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCod)
                    .HasColumnName("tfl_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflDeathDt)
                    .HasColumnName("tfl_death_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflEndtxfu)
                    .HasColumnName("tfl_endtxfu")
                    .HasColumnType("date");

                entity.Property(e => e.TflGraftDt)
                    .HasColumnName("tfl_graft_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflLafudate)
                    .HasColumnName("tfl_lafudate")
                    .HasColumnType("date");

                entity.Property(e => e.TflLastatus)
                    .HasColumnName("tfl_lastatus")
                    .HasColumnType("character varying(1)");
            });

            modelBuilder.Entity<TxfLi>(entity =>
            {
                entity.HasKey(e => e.TrrFolId)
                    .HasName("txf_li_pkey");

                entity.ToTable("txf_li", "liver");

                entity.Property(e => e.TrrFolId)
                    .HasColumnName("trr_fol_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.OrgTy)
                    .HasColumnName("org_ty")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.PersId)
                    .HasColumnName("pers_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.RecCtrId)
                    .HasColumnName("rec_ctr_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecOpoId)
                    .HasColumnName("rec_opo_id")
                    .HasColumnType("numeric(4,0)");

                entity.Property(e => e.RecTxDt)
                    .HasColumnName("rec_tx_dt")
                    .HasColumnType("date");

                entity.Property(e => e.RecTxOrgTy)
                    .HasColumnName("rec_tx_org_ty")
                    .HasColumnType("character varying(15)");

                entity.Property(e => e.RecTxTy)
                    .HasColumnName("rec_tx_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAcademicLevel)
                    .HasColumnName("tfl_academic_level")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAcademicProgress)
                    .HasColumnName("tfl_academic_progress")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAcuteRejBiopsyConfirmed)
                    .HasColumnName("tfl_acute_rej_biopsy_confirmed")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAcuteRejEpisode)
                    .HasColumnName("tfl_acute_rej_episode")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAlbumin).HasColumnName("tfl_albumin");

                entity.Property(e => e.TflAlkphos).HasColumnName("tfl_alkphos");

                entity.Property(e => e.TflAntivrlTherapy)
                    .HasColumnName("tfl_antivrl_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflAntivrlTherapyTy)
                    .HasColumnName("tfl_antivrl_therapy_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflAntivrlTherapyTyAcyclovir)
                    .HasColumnName("tfl_antivrl_therapy_ty_acyclovir")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyCytogam)
                    .HasColumnName("tfl_antivrl_therapy_ty_cytogam")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyCytovene)
                    .HasColumnName("tfl_antivrl_therapy_ty_cytovene")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyEpivir)
                    .HasColumnName("tfl_antivrl_therapy_ty_epivir")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyFluVac)
                    .HasColumnName("tfl_antivrl_therapy_ty_flu_vac")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyGamimune)
                    .HasColumnName("tfl_antivrl_therapy_ty_gamimune")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyGammagard)
                    .HasColumnName("tfl_antivrl_therapy_ty_gammagard")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyHbig)
                    .HasColumnName("tfl_antivrl_therapy_ty_hbig")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyOther)
                    .HasColumnName("tfl_antivrl_therapy_ty_other")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyValcyte)
                    .HasColumnName("tfl_antivrl_therapy_ty_valcyte")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflAntivrlTherapyTyValtrex)
                    .HasColumnName("tfl_antivrl_therapy_ty_valtrex")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflBmi).HasColumnName("tfl_bmi");

                entity.Property(e => e.TflCad)
                    .HasColumnName("tfl_cad")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflCareProvBy)
                    .HasColumnName("tfl_care_prov_by")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCmvIgg)
                    .HasColumnName("tfl_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflCmvIgm)
                    .HasColumnName("tfl_cmv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflCod)
                    .HasColumnName("tfl_cod")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCod2)
                    .HasColumnName("tfl_cod2")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCod3)
                    .HasColumnName("tfl_cod3")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCognitiveDevelop)
                    .HasColumnName("tfl_cognitive_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflCreat).HasColumnName("tfl_creat");

                entity.Property(e => e.TflDiabDuringFol)
                    .HasColumnName("tfl_diab_during_fol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflEmplStatPre04)
                    .HasColumnName("tfl_empl_stat_pre04")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflFailBiliary)
                    .HasColumnName("tfl_fail_biliary")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailDt)
                    .HasColumnName("tfl_fail_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflFailHepDenovo)
                    .HasColumnName("tfl_fail_hep_denovo")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailHepRecur)
                    .HasColumnName("tfl_fail_hep_recur")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailInfect)
                    .HasColumnName("tfl_fail_infect")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailPrimeGraftFail)
                    .HasColumnName("tfl_fail_prime_graft_fail")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailPxNoncomp)
                    .HasColumnName("tfl_fail_px_noncomp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailRecurDisease)
                    .HasColumnName("tfl_fail_recur_disease")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailRejAcute)
                    .HasColumnName("tfl_fail_rej_acute")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailRejChronic)
                    .HasColumnName("tfl_fail_rej_chronic")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailVascThromb)
                    .HasColumnName("tfl_fail_vasc_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFolCd)
                    .HasColumnName("tfl_fol_cd")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflFunctnStat)
                    .HasColumnName("tfl_functn_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflGraftStat)
                    .HasColumnName("tfl_graft_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflHepaticArterThromb)
                    .HasColumnName("tfl_hepatic_arter_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflHepaticOutflowObstruct)
                    .HasColumnName("tfl_hepatic_outflow_obstruct")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflHgtCm).HasColumnName("tfl_hgt_cm");

                entity.Property(e => e.TflHgtWgtDt)
                    .HasColumnName("tfl_hgt_wgt_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflHosp)
                    .HasColumnName("tfl_hosp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflHospNum).HasColumnName("tfl_hosp_num");

                entity.Property(e => e.TflImmunoDiscont)
                    .HasColumnName("tfl_immuno_discont")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflImmunoMaintMeds)
                    .HasColumnName("tfl_immuno_maint_meds")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflInr).HasColumnName("tfl_inr");

                entity.Property(e => e.TflInsulinDepnd)
                    .HasColumnName("tfl_insulin_depnd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflLabDt)
                    .HasColumnName("tfl_lab_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflMalig)
                    .HasColumnName("tfl_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflMaligDonRelated)
                    .HasColumnName("tfl_malig_don_related")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflMaligLymph)
                    .HasColumnName("tfl_malig_lymph")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflMaligRecurTumor)
                    .HasColumnName("tfl_malig_recur_tumor")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflMaligTumor)
                    .HasColumnName("tfl_malig_tumor")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflMotorDevelop)
                    .HasColumnName("tfl_motor_develop")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflOtherTherapy)
                    .HasColumnName("tfl_other_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflOtherTherapyTy)
                    .HasColumnName("tfl_other_therapy_ty")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflOtherTherapyTyPhotoph)
                    .HasColumnName("tfl_other_therapy_ty_photoph")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflOtherTherapyTyPlasmaph)
                    .HasColumnName("tfl_other_therapy_ty_plasmaph")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflOtherTherapyTyTli)
                    .HasColumnName("tfl_other_therapy_ty_tli")
                    .HasColumnType("numeric(3,0)");

                entity.Property(e => e.TflPermState)
                    .HasColumnName("tfl_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflPhyscCapacity)
                    .HasColumnName("tfl_physc_capacity")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflPortalVeinThromb)
                    .HasColumnName("tfl_portal_vein_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPrimaryPay)
                    .HasColumnName("tfl_primary_pay")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflPxNoncomp)
                    .HasColumnName("tfl_px_noncomp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxResearch)
                    .HasColumnName("tfl_px_research")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxStat)
                    .HasColumnName("tfl_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxStatDt)
                    .HasColumnName("tfl_px_stat_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflRejEventNum).HasColumnName("tfl_rej_event_num");

                entity.Property(e => e.TflRejTreat)
                    .HasColumnName("tfl_rej_treat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflSgot).HasColumnName("tfl_sgot");

                entity.Property(e => e.TflSgpt).HasColumnName("tfl_sgpt");

                entity.Property(e => e.TflTotBili).HasColumnName("tfl_tot_bili");

                entity.Property(e => e.TflTxferDt)
                    .HasColumnName("tfl_txfer_dt")
                    .HasColumnType("date");

                entity.Property(e => e.TflWgtKg).HasColumnName("tfl_wgt_kg");

                entity.Property(e => e.TflWorkIncome)
                    .HasColumnName("tfl_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflWorkNoStat)
                    .HasColumnName("tfl_work_no_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TflWorkYesStat)
                    .HasColumnName("tfl_work_yes_stat")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TrrId)
                    .HasColumnName("trr_id")
                    .HasColumnType("numeric(8,0)");

                entity.Property(e => e.TxId)
                    .HasColumnName("tx_id")
                    .HasColumnType("numeric(8,0)");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("users_pkey");

                entity.ToTable("users", "users");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasColumnType("character varying(32)")
                    .ValueGeneratedNever();

                entity.Property(e => e.Password).HasColumnName("password");

                entity.Property(e => e.Role)
                    .HasColumnName("role")
                    .HasColumnType("character varying(16)");
            });
        }
    }
}
