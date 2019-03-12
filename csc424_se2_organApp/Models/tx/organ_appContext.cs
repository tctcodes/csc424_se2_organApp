using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace csc424_se2_organApp
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
        public virtual DbSet<DonLivFol> DonLivFol { get; set; }
        public virtual DbSet<Donor> Donor { get; set; }
        public virtual DbSet<DonorDeceased> DonorDeceased { get; set; }
        public virtual DbSet<DonorDisposition> DonorDisposition { get; set; }
        public virtual DbSet<DonorLive> DonorLive { get; set; }
        public virtual DbSet<FolImmuno> FolImmuno { get; set; }
        public virtual DbSet<Immuno> Immuno { get; set; }
        public virtual DbSet<Institution> Institution { get; set; }
        public virtual DbSet<Malig> Malig { get; set; }
        public virtual DbSet<Mpexcept> Mpexcept { get; set; }
        public virtual DbSet<MpexceptOrigTumors> MpexceptOrigTumors { get; set; }
        public virtual DbSet<MpexceptTumors> MpexceptTumors { get; set; }
        public virtual DbSet<RecHisto> RecHisto { get; set; }
        public virtual DbSet<RecHistoXmat> RecHistoXmat { get; set; }
        public virtual DbSet<StathistLiin> StathistLiin { get; set; }
        public virtual DbSet<StatjustLi1> StatjustLi1 { get; set; }
        public virtual DbSet<StatjustLi2a> StatjustLi2a { get; set; }
        public virtual DbSet<StatjustLi2b> StatjustLi2b { get; set; }
        public virtual DbSet<Treatment> Treatment { get; set; }
        public virtual DbSet<TxLi> TxLi { get; set; }
        public virtual DbSet<TxfLi> TxfLi { get; set; }

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
                entity.HasKey(e => e.PxId)
                    .HasName("cand_liin_pkey");

                entity.ToTable("cand_liin", "tx");

                entity.HasIndex(e => e.PersId)
                    .HasName("cand_liin_pers_id_key")
                    .IsUnique();

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanAbo)
                    .HasColumnName("can_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.CanAcademicLevel).HasColumnName("can_academic_level");

                entity.Property(e => e.CanAcademicProgress).HasColumnName("can_academic_progress");

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

                entity.Property(e => e.CanActivateDt).HasColumnName("can_activate_dt");

                entity.Property(e => e.CanAgeAtListing).HasColumnName("can_age_at_listing");

                entity.Property(e => e.CanAgeInMonthsAtListing).HasColumnName("can_age_in_months_at_listing");

                entity.Property(e => e.CanAnastomosis).HasColumnName("can_anastomosis");

                entity.Property(e => e.CanAnesthPriorDeath).HasColumnName("can_anesth_prior_death");

                entity.Property(e => e.CanAngina).HasColumnName("can_angina");

                entity.Property(e => e.CanAnginaCad).HasColumnName("can_angina_cad");

                entity.Property(e => e.CanArtificialLi).HasColumnName("can_artificial_li");

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

                entity.Property(e => e.CanCitizenship).HasColumnName("can_citizenship");

                entity.Property(e => e.CanCognitiveDevelop).HasColumnName("can_cognitive_develop");

                entity.Property(e => e.CanCtpScore).HasColumnName("can_ctp_score");

                entity.Property(e => e.CanDeathDt).HasColumnName("can_death_dt");

                entity.Property(e => e.CanDgn).HasColumnName("can_dgn");

                entity.Property(e => e.CanDgn2).HasColumnName("can_dgn2");

                entity.Property(e => e.CanDgnOstxt)
                    .HasColumnName("can_dgn_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.CanDiab).HasColumnName("can_diab");

                entity.Property(e => e.CanDiabTy).HasColumnName("can_diab_ty");

                entity.Property(e => e.CanDial).HasColumnName("can_dial");

                entity.Property(e => e.CanDrugTreatCopd)
                    .HasColumnName("can_drug_treat_copd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanDrugTreatHyperten)
                    .HasColumnName("can_drug_treat_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEcmo).HasColumnName("can_ecmo");

                entity.Property(e => e.CanEducation).HasColumnName("can_education");

                entity.Property(e => e.CanElectrolyte)
                    .HasColumnName("can_electrolyte")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEmplStat).HasColumnName("can_empl_stat");

                entity.Property(e => e.CanEnceph)
                    .HasColumnName("can_enceph")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEndwlfu).HasColumnName("can_endwlfu");

                entity.Property(e => e.CanEthnicitySrtr)
                    .HasColumnName("can_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanExhaustVascAccess)
                    .HasColumnName("can_exhaust_vasc_access")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanFollowsOpoAlloc).HasColumnName("can_follows_opo_alloc");

                entity.Property(e => e.CanFunctnStat).HasColumnName("can_functn_stat");

                entity.Property(e => e.CanFungalSepsis)
                    .HasColumnName("can_fungal_sepsis")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanGender)
                    .HasColumnName("can_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanHgtCm).HasColumnName("can_hgt_cm");

                entity.Property(e => e.CanHgtWgtDt).HasColumnName("can_hgt_wgt_dt");

                entity.Property(e => e.CanIabp).HasColumnName("can_iabp");

                entity.Property(e => e.CanInitActStatCd).HasColumnName("can_init_act_stat_cd");

                entity.Property(e => e.CanInitActStatDt).HasColumnName("can_init_act_stat_dt");

                entity.Property(e => e.CanInitInactStatDt).HasColumnName("can_init_inact_stat_dt");

                entity.Property(e => e.CanInitSrtrLabMeld).HasColumnName("can_init_srtr_lab_meld");

                entity.Property(e => e.CanInitSrtrLabMeldTy)
                    .HasColumnName("can_init_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitStat).HasColumnName("can_init_stat");

                entity.Property(e => e.CanIvInotrop).HasColumnName("can_iv_inotrop");

                entity.Property(e => e.CanLastActStatDt).HasColumnName("can_last_act_stat_dt");

                entity.Property(e => e.CanLastAlbumin).HasColumnName("can_last_albumin");

                entity.Property(e => e.CanLastAscites).HasColumnName("can_last_ascites");

                entity.Property(e => e.CanLastBili).HasColumnName("can_last_bili");

                entity.Property(e => e.CanLastDialPriorWeek)
                    .HasColumnName("can_last_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastEnceph).HasColumnName("can_last_enceph");

                entity.Property(e => e.CanLastInactStatDt).HasColumnName("can_last_inact_stat_dt");

                entity.Property(e => e.CanLastInr).HasColumnName("can_last_inr");

                entity.Property(e => e.CanLastSerumCreat).HasColumnName("can_last_serum_creat");

                entity.Property(e => e.CanLastSerumSodium).HasColumnName("can_last_serum_sodium");

                entity.Property(e => e.CanLastSrtrLabMeld).HasColumnName("can_last_srtr_lab_meld");

                entity.Property(e => e.CanLastSrtrLabMeldTy)
                    .HasColumnName("can_last_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastStat).HasColumnName("can_last_stat");

                entity.Property(e => e.CanLiDysfunctn)
                    .HasColumnName("can_li_dysfunctn")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLifeSupport)
                    .HasColumnName("can_life_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLifeSupportOther).HasColumnName("can_life_support_other");

                entity.Property(e => e.CanListingCtrId).HasColumnName("can_listing_ctr_id");

                entity.Property(e => e.CanListingDt).HasColumnName("can_listing_dt");

                entity.Property(e => e.CanListingOpoId).HasColumnName("can_listing_opo_id");

                entity.Property(e => e.CanLivingDonTx).HasColumnName("can_living_don_tx");

                entity.Property(e => e.CanLossVascAccess)
                    .HasColumnName("can_loss_vasc_access")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanMalig)
                    .HasColumnName("can_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanMaligTy).HasColumnName("can_malig_ty");

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

                entity.Property(e => e.CanMedCond).HasColumnName("can_med_cond");

                entity.Property(e => e.CanMinAge).HasColumnName("can_min_age");

                entity.Property(e => e.CanMinWgt).HasColumnName("can_min_wgt");

                entity.Property(e => e.CanMostRecentCreat).HasColumnName("can_most_recent_creat");

                entity.Property(e => e.CanMostRecentHgtCm).HasColumnName("can_most_recent_hgt_cm");

                entity.Property(e => e.CanMostRecentWgtKg).HasColumnName("can_most_recent_wgt_kg");

                entity.Property(e => e.CanMotorDevelop).HasColumnName("can_motor_develop");

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

                entity.Property(e => e.CanPepticUlcer).HasColumnName("can_peptic_ulcer");

                entity.Property(e => e.CanPeriphVasc)
                    .HasColumnName("can_periph_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPermState)
                    .HasColumnName("can_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.CanPge).HasColumnName("can_pge");

                entity.Property(e => e.CanPhyscCapacity).HasColumnName("can_physc_capacity");

                entity.Property(e => e.CanPortalVein)
                    .HasColumnName("can_portal_vein")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrelimXmatchRequest)
                    .HasColumnName("can_prelim_xmatch_request")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevAbdomSurg)
                    .HasColumnName("can_prev_abdom_surg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPrevBoneMarrowDt).HasColumnName("can_prev_bone_marrow_dt");

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

                entity.Property(e => e.CanPrimaryPay).HasColumnName("can_primary_pay");

                entity.Property(e => e.CanPulmEmbol)
                    .HasColumnName("can_pulm_embol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanRace).HasColumnName("can_race");

                entity.Property(e => e.CanRaceSrtr)
                    .HasColumnName("can_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanRecurSepsis)
                    .HasColumnName("can_recur_sepsis")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanRemCd).HasColumnName("can_rem_cd");

                entity.Property(e => e.CanRemCod).HasColumnName("can_rem_cod");

                entity.Property(e => e.CanRemDt).HasColumnName("can_rem_dt");

                entity.Property(e => e.CanSecondaryPay).HasColumnName("can_secondary_pay");

                entity.Property(e => e.CanSource)
                    .HasColumnName("can_source")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanStatExtendFlg).HasColumnName("can_stat_extend_flg");

                entity.Property(e => e.CanTiebreakerDt).HasColumnName("can_tiebreaker_dt");

                entity.Property(e => e.CanTipss)
                    .HasColumnName("can_tipss")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanTotAlbumin).HasColumnName("can_tot_albumin");

                entity.Property(e => e.CanTotBili).HasColumnName("can_tot_bili");

                entity.Property(e => e.CanTrrExists).HasColumnName("can_trr_exists");

                entity.Property(e => e.CanTxCountry).HasColumnName("can_tx_country");

                entity.Property(e => e.CanVadTah).HasColumnName("can_vad_tah");

                entity.Property(e => e.CanVaricealBleeding)
                    .HasColumnName("can_variceal_bleeding")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanVentilator).HasColumnName("can_ventilator");

                entity.Property(e => e.CanWgtKg).HasColumnName("can_wgt_kg");

                entity.Property(e => e.CanWorkIncome)
                    .HasColumnName("can_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanWorkNoStat).HasColumnName("can_work_no_stat");

                entity.Property(e => e.CanWorkYesStat).HasColumnName("can_work_yes_stat");

                entity.Property(e => e.CanYearEntryUs).HasColumnName("can_year_entry_us");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonorId).HasColumnName("donor_id");

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.PersId).HasColumnName("pers_id");

                entity.Property(e => e.PersNexttx).HasColumnName("pers_nexttx");

                entity.Property(e => e.PersNexttxTrrId).HasColumnName("pers_nexttx_trr_id");

                entity.Property(e => e.PersOptnDeathDt).HasColumnName("pers_optn_death_dt");

                entity.Property(e => e.PersRestrictDeathDt).HasColumnName("pers_restrict_death_dt");

                entity.Property(e => e.PersRestrictDeathVrfy)
                    .HasColumnName("pers_restrict_death_vrfy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.PersSsaDeathDt).HasColumnName("pers_ssa_death_dt");

                entity.Property(e => e.RecTxDt).HasColumnName("rec_tx_dt");

                entity.Property(e => e.RecTxProcedureTy).HasColumnName("rec_tx_procedure_ty");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");

                entity.HasOne(d => d.CanListingCtr)
                    .WithMany(p => p.CandLiin)
                    .HasForeignKey(d => d.CanListingCtrId)
                    .HasConstraintName("cand_liin_can_listing_ctr_id_fkey");

                entity.HasOne(d => d.Donor)
                    .WithMany(p => p.CandLiin)
                    .HasForeignKey(d => d.DonorId)
                    .HasConstraintName("cand_liin_donor_id_fkey");
            });

            modelBuilder.Entity<DonLivFol>(entity =>
            {
                entity.HasKey(e => e.DonorId)
                    .HasName("don_liv_fol_pkey");

                entity.ToTable("don_liv_fol", "tx");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DflActivityLevel).HasColumnName("dfl_activity_level");

                entity.Property(e => e.DflAlbumin).HasColumnName("dfl_albumin");

                entity.Property(e => e.DflAlkphos).HasColumnName("dfl_alkphos");

                entity.Property(e => e.DflAntiHypertenDrug).HasColumnName("dfl_anti_hyperten_drug");

                entity.Property(e => e.DflBili).HasColumnName("dfl_bili");

                entity.Property(e => e.DflBpDiast).HasColumnName("dfl_bp_diast");

                entity.Property(e => e.DflBpSyst).HasColumnName("dfl_bp_syst");

                entity.Property(e => e.DflCatScan).HasColumnName("dfl_cat_scan");

                entity.Property(e => e.DflCod).HasColumnName("dfl_cod");

                entity.Property(e => e.DflCodOstxt)
                    .HasColumnName("dfl_cod_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.DflCompl)
                    .HasColumnName("dfl_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflDiab)
                    .HasColumnName("dfl_diab")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflDiabTreat).HasColumnName("dfl_diab_treat");

                entity.Property(e => e.DflDialDt).HasColumnName("dfl_dial_dt");

                entity.Property(e => e.DflFolCd).HasColumnName("dfl_fol_cd");

                entity.Property(e => e.DflFolCtrId).HasColumnName("dfl_fol_ctr_id");

                entity.Property(e => e.DflFunctnStat).HasColumnName("dfl_functn_stat");

                entity.Property(e => e.DflHyperten)
                    .HasColumnName("dfl_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflIncisionPain).HasColumnName("dfl_incision_pain");

                entity.Property(e => e.DflInitDischrgDt).HasColumnName("dfl_init_dischrg_dt");

                entity.Property(e => e.DflInr).HasColumnName("dfl_inr");

                entity.Property(e => e.DflKiCompl)
                    .HasColumnName("dfl_ki_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflKiComplStat).HasColumnName("dfl_ki_compl_stat");

                entity.Property(e => e.DflKiCreat).HasColumnName("dfl_ki_creat");

                entity.Property(e => e.DflLiCompl)
                    .HasColumnName("dfl_li_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflLiComplStat).HasColumnName("dfl_li_compl_stat");

                entity.Property(e => e.DflLiCreat).HasColumnName("dfl_li_creat");

                entity.Property(e => e.DflMaintDial)
                    .HasColumnName("dfl_maint_dial")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflMri).HasColumnName("dfl_mri");

                entity.Property(e => e.DflPhyscCapacity).HasColumnName("dfl_physc_capacity");

                entity.Property(e => e.DflPxStat)
                    .HasColumnName("dfl_px_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DflPxStatDt).HasColumnName("dfl_px_stat_dt");

                entity.Property(e => e.DflReadmit)
                    .HasColumnName("dfl_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflReadmitDt).HasColumnName("dfl_readmit_dt");

                entity.Property(e => e.DflSgot).HasColumnName("dfl_sgot");

                entity.Property(e => e.DflSgpt).HasColumnName("dfl_sgpt");

                entity.Property(e => e.DflUltrasound).HasColumnName("dfl_ultrasound");

                entity.Property(e => e.DflUrineProtein).HasColumnName("dfl_urine_protein");

                entity.Property(e => e.DflUrineRatio).HasColumnName("dfl_urine_ratio");

                entity.Property(e => e.DflWgtKg).HasColumnName("dfl_wgt_kg");

                entity.Property(e => e.DflWorkIncome)
                    .HasColumnName("dfl_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DflWorkNoStat).HasColumnName("dfl_work_no_stat");

                entity.Property(e => e.DflWorkYesStat).HasColumnName("dfl_work_yes_stat");

                entity.Property(e => e.PlateletCount).HasColumnName("platelet_count");

                entity.HasOne(d => d.DflFolCtr)
                    .WithMany(p => p.DonLivFol)
                    .HasForeignKey(d => d.DflFolCtrId)
                    .HasConstraintName("don_liv_fol_dfl_fol_ctr_id_fkey");

                entity.HasOne(d => d.Donor)
                    .WithOne(p => p.DonLivFol)
                    .HasForeignKey<DonLivFol>(d => d.DonorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("don_liv_fol_donor_id_fkey");
            });

            modelBuilder.Entity<Donor>(entity =>
            {
                entity.ToTable("donor", "tx");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<DonorDeceased>(entity =>
            {
                entity.HasKey(e => e.DonorId)
                    .HasName("donor_deceased_pkey");

                entity.ToTable("donor_deceased", "tx");

                entity.HasIndex(e => e.PersId)
                    .HasName("donor_deceased_pers_id_key")
                    .IsUnique();

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DonA1).HasColumnName("don_a1");

                entity.Property(e => e.DonA2).HasColumnName("don_a2");

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

                entity.Property(e => e.DonAllocEcdCva).HasColumnName("don_alloc_ecd_cva");

                entity.Property(e => e.DonAllocEcdHyperten).HasColumnName("don_alloc_ecd_hyperten");

                entity.Property(e => e.DonAllocEcdSerumCreat).HasColumnName("don_alloc_ecd_serum_creat");

                entity.Property(e => e.DonAllocEcdSerumCreatDt).HasColumnName("don_alloc_ecd_serum_creat_dt");

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

                entity.Property(e => e.DonB1).HasColumnName("don_b1");

                entity.Property(e => e.DonB2).HasColumnName("don_b2");

                entity.Property(e => e.DonBiopsyDgn).HasColumnName("don_biopsy_dgn");

                entity.Property(e => e.DonBrainDeathTm).HasColumnName("don_brain_death_tm");

                entity.Property(e => e.DonBun).HasColumnName("don_bun");

                entity.Property(e => e.DonBw4).HasColumnName("don_bw4");

                entity.Property(e => e.DonBw6).HasColumnName("don_bw6");

                entity.Property(e => e.DonC1).HasColumnName("don_c1");

                entity.Property(e => e.DonC2).HasColumnName("don_c2");

                entity.Property(e => e.DonCadDonCod).HasColumnName("don_cad_don_cod");

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

                entity.Property(e => e.DonChestXray).HasColumnName("don_chest_xray");

                entity.Property(e => e.DonCiFinal).HasColumnName("don_ci_final");

                entity.Property(e => e.DonCiInit).HasColumnName("don_ci_init");

                entity.Property(e => e.DonCitizenship).HasColumnName("don_citizenship");

                entity.Property(e => e.DonClampDt).HasColumnName("don_clamp_dt");

                entity.Property(e => e.DonClampTm).HasColumnName("don_clamp_tm");

                entity.Property(e => e.DonClampTmZone).HasColumnName("don_clamp_tm_zone");

                entity.Property(e => e.DonClinicalInfect)
                    .HasColumnName("don_clinical_infect")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCoFinal).HasColumnName("don_co_final");

                entity.Property(e => e.DonCoInit).HasColumnName("don_co_init");

                entity.Property(e => e.DonCodDonStroke).HasColumnName("don_cod_don_stroke");

                entity.Property(e => e.DonColdIschTmArrivKi).HasColumnName("don_cold_isch_tm_arriv_ki");

                entity.Property(e => e.DonConsentAttorney).HasColumnName("don_consent_attorney");

                entity.Property(e => e.DonConsentDonCard).HasColumnName("don_consent_don_card");

                entity.Property(e => e.DonConsentDonRegis).HasColumnName("don_consent_don_regis");

                entity.Property(e => e.DonConsentDriverLicense).HasColumnName("don_consent_driver_license");

                entity.Property(e => e.DonConsentPxWritDoc)
                    .HasColumnName("don_consent_px_writ_doc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonConsentTm).HasColumnName("don_consent_tm");

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

                entity.Property(e => e.DonCoronaryAngio).HasColumnName("don_coronary_angio");

                entity.Property(e => e.DonCreat).HasColumnName("don_creat");

                entity.Property(e => e.DonCregDonFlg).HasColumnName("don_creg_don_flg");

                entity.Property(e => e.DonCvpFinal).HasColumnName("don_cvp_final");

                entity.Property(e => e.DonCvpInit).HasColumnName("don_cvp_init");

                entity.Property(e => e.DonDcdAbdomAortaCannulDt).HasColumnName("don_dcd_abdom_aorta_cannul_dt");

                entity.Property(e => e.DonDcdAbdomAortaCannulTm).HasColumnName("don_dcd_abdom_aorta_cannul_tm");

                entity.Property(e => e.DonDcdAgonalBeginDt).HasColumnName("don_dcd_agonal_begin_dt");

                entity.Property(e => e.DonDcdAgonalBeginTm).HasColumnName("don_dcd_agonal_begin_tm");

                entity.Property(e => e.DonDcdPortalVeinCannulDt).HasColumnName("don_dcd_portal_vein_cannul_dt");

                entity.Property(e => e.DonDcdPortalVeinCannulTm).HasColumnName("don_dcd_portal_vein_cannul_tm");

                entity.Property(e => e.DonDcdProgressToBrainDeath)
                    .HasColumnName("don_dcd_progress_to_brain_death")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDcdPulmArtCannulDt).HasColumnName("don_dcd_pulm_art_cannul_dt");

                entity.Property(e => e.DonDcdPulmArtCannulTm).HasColumnName("don_dcd_pulm_art_cannul_tm");

                entity.Property(e => e.DonDcdSupportWithdrawDt).HasColumnName("don_dcd_support_withdraw_dt");

                entity.Property(e => e.DonDcdSupportWithdrawTm).HasColumnName("don_dcd_support_withdraw_tm");

                entity.Property(e => e.DonDcdThorAortaCannulDt).HasColumnName("don_dcd_thor_aorta_cannul_dt");

                entity.Property(e => e.DonDcdThorAortaCannulTm).HasColumnName("don_dcd_thor_aorta_cannul_tm");

                entity.Property(e => e.DonDcdTotUrineOutput).HasColumnName("don_dcd_tot_urine_output");

                entity.Property(e => e.DonDdavp)
                    .HasColumnName("don_ddavp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDeathCircum).HasColumnName("don_death_circum");

                entity.Property(e => e.DonDeathMech).HasColumnName("don_death_mech");

                entity.Property(e => e.DonDobutamine)
                    .HasColumnName("don_dobutamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDopamine)
                    .HasColumnName("don_dopamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDp1).HasColumnName("don_dp1");

                entity.Property(e => e.DonDp2).HasColumnName("don_dp2");

                entity.Property(e => e.DonDq1).HasColumnName("don_dq1");

                entity.Property(e => e.DonDq2).HasColumnName("don_dq2");

                entity.Property(e => e.DonDr1).HasColumnName("don_dr1");

                entity.Property(e => e.DonDr2).HasColumnName("don_dr2");

                entity.Property(e => e.DonDr51).HasColumnName("don_dr51");

                entity.Property(e => e.DonDr52).HasColumnName("don_dr52");

                entity.Property(e => e.DonDr53).HasColumnName("don_dr53");

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

                entity.Property(e => e.DonEjectFractMeth).HasColumnName("don_eject_fract_meth");

                entity.Property(e => e.DonEthnicitySrtr)
                    .HasColumnName("don_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonExpandDonFlgOptn).HasColumnName("don_expand_don_flg_optn");

                entity.Property(e => e.DonExpandDonKi).HasColumnName("don_expand_don_ki");

                entity.Property(e => e.DonExpressFamily)
                    .HasColumnName("don_express_family")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonExtracranialCancer)
                    .HasColumnName("don_extracranial_cancer")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonFeedbackDone).HasColumnName("don_feedback_done");

                entity.Property(e => e.DonFinalSerumCreat).HasColumnName("don_final_serum_creat");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHbcStat).HasColumnName("don_hbc_stat");

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

                entity.Property(e => e.DonHcvStat).HasColumnName("don_hcv_stat");

                entity.Property(e => e.DonHeavyAlcohol)
                    .HasColumnName("don_heavy_alcohol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHematocrit).HasColumnName("don_hematocrit");

                entity.Property(e => e.DonHeparin)
                    .HasColumnName("don_heparin")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHgtCm).HasColumnName("don_hgt_cm");

                entity.Property(e => e.DonHighCreat).HasColumnName("don_high_creat");

                entity.Property(e => e.DonHistAlcohol)
                    .HasColumnName("don_hist_alcohol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCancer).HasColumnName("don_hist_cancer");

                entity.Property(e => e.DonHistCigaretteGt20Pkyr)
                    .HasColumnName("don_hist_cigarette_gt20_pkyr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCocaine)
                    .HasColumnName("don_hist_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistDiab).HasColumnName("don_hist_diab");

                entity.Property(e => e.DonHistHyperten).HasColumnName("don_hist_hyperten");

                entity.Property(e => e.DonHistInsulinDepnd).HasColumnName("don_hist_insulin_depnd");

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

                entity.Property(e => e.DonHlaTypNotDone).HasColumnName("don_hla_typ_not_done");

                entity.Property(e => e.DonHomeState)
                    .HasColumnName("don_home_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHtlvNat)
                    .HasColumnName("don_htlv_nat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonHtn).HasColumnName("don_htn");

                entity.Property(e => e.DonHypertenDiet)
                    .HasColumnName("don_hyperten_diet")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenDiuretics)
                    .HasColumnName("don_hyperten_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHypertenOtherMeds)
                    .HasColumnName("don_hyperten_other_meds")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectBlood).HasColumnName("don_infect_blood");

                entity.Property(e => e.DonInfectBloodConfirm)
                    .HasColumnName("don_infect_blood_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectLu).HasColumnName("don_infect_lu");

                entity.Property(e => e.DonInfectLuConfirm)
                    .HasColumnName("don_infect_lu_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectOther).HasColumnName("don_infect_other");

                entity.Property(e => e.DonInfectOtherConfirm)
                    .HasColumnName("don_infect_other_confirm")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonInfectUrine).HasColumnName("don_infect_urine");

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

                entity.Property(e => e.DonLfKiGlomerSclerPct).HasColumnName("don_lf_ki_glomer_scler_pct");

                entity.Property(e => e.DonLfKiPump)
                    .HasColumnName("don_lf_ki_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLfKiResistPriorShip).HasColumnName("don_lf_ki_resist_prior_ship");

                entity.Property(e => e.DonLfKiTxferPump)
                    .HasColumnName("don_lf_ki_txfer_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLfLuBroncho).HasColumnName("don_lf_lu_broncho");

                entity.Property(e => e.DonLiBiopsy)
                    .HasColumnName("don_li_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiopsyMacroFat).HasColumnName("don_li_biopsy_macro_fat");

                entity.Property(e => e.DonLiBiopsyMicroFat).HasColumnName("don_li_biopsy_micro_fat");

                entity.Property(e => e.DonLiOthHistologyGranulomas).HasColumnName("don_li_oth_histology_granulomas");

                entity.Property(e => e.DonLiOthHistologyHemosidera).HasColumnName("don_li_oth_histology_hemosidera");

                entity.Property(e => e.DonLiOthHistologyOther).HasColumnName("don_li_oth_histology_other");

                entity.Property(e => e.DonLipase).HasColumnName("don_lipase");

                entity.Property(e => e.DonMapFinal).HasColumnName("don_map_final");

                entity.Property(e => e.DonMapInit).HasColumnName("don_map_init");

                entity.Property(e => e.DonMaxCreat).HasColumnName("don_max_creat");

                entity.Property(e => e.DonMedExaminer).HasColumnName("don_med_examiner");

                entity.Property(e => e.DonMeetCdcHighRisk)
                    .HasColumnName("don_meet_cdc_high_risk")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonMeetDoubleKiCrit).HasColumnName("don_meet_double_ki_crit");

                entity.Property(e => e.DonNonHrBeat)
                    .HasColumnName("don_non_hr_beat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeatCntl)
                    .HasColumnName("don_non_hr_beat_cntl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeatCoreCool)
                    .HasColumnName("don_non_hr_beat_core_cool")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoCtrId).HasColumnName("don_opo_ctr_id");

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

                entity.Property(e => e.DonRace).HasColumnName("don_race");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt).HasColumnName("don_recov_dt");

                entity.Property(e => e.DonRecovOutUs)
                    .HasColumnName("don_recov_out_us")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRefDt).HasColumnName("don_ref_dt");

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

                entity.Property(e => e.DonRtKiGlomerSclerPct).HasColumnName("don_rt_ki_glomer_scler_pct");

                entity.Property(e => e.DonRtKiPump)
                    .HasColumnName("don_rt_ki_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRtKiResistPriorShip).HasColumnName("don_rt_ki_resist_prior_ship");

                entity.Property(e => e.DonRtKiTxferPump)
                    .HasColumnName("don_rt_ki_txfer_pump")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRtLuBroncho).HasColumnName("don_rt_lu_broncho");

                entity.Property(e => e.DonSerumAmylase).HasColumnName("don_serum_amylase");

                entity.Property(e => e.DonSgot).HasColumnName("don_sgot");

                entity.Property(e => e.DonSgpt).HasColumnName("don_sgpt");

                entity.Property(e => e.DonSkinCancer)
                    .HasColumnName("don_skin_cancer")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonSodium).HasColumnName("don_sodium");

                entity.Property(e => e.DonSvrFinal).HasColumnName("don_svr_final");

                entity.Property(e => e.DonSvrInit).HasColumnName("don_svr_init");

                entity.Property(e => e.DonTargetSource1).HasColumnName("don_target_source1");

                entity.Property(e => e.DonTargetSource2).HasColumnName("don_target_source2");

                entity.Property(e => e.DonTattoos)
                    .HasColumnName("don_tattoos")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonTmForXmatch)
                    .HasColumnName("don_tm_for_xmatch")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonTotBili).HasColumnName("don_tot_bili");

                entity.Property(e => e.DonTx).HasColumnName("don_tx");

                entity.Property(e => e.DonTxfusTerminalHospNum).HasColumnName("don_txfus_terminal_hosp_num");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonTypMethclass1).HasColumnName("don_typ_methclass1");

                entity.Property(e => e.DonTypMethclass1Dt).HasColumnName("don_typ_methclass1_dt");

                entity.Property(e => e.DonTypMethclass2).HasColumnName("don_typ_methclass2");

                entity.Property(e => e.DonTypMethclass2Dt).HasColumnName("don_typ_methclass2_dt");

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

                entity.Property(e => e.PersId).HasColumnName("pers_id");

                entity.HasOne(d => d.DonOpoCtr)
                    .WithMany(p => p.DonorDeceased)
                    .HasForeignKey(d => d.DonOpoCtrId)
                    .HasConstraintName("donor_deceased_don_opo_ctr_id_fkey");

                entity.HasOne(d => d.Donor)
                    .WithOne(p => p.DonorDeceased)
                    .HasForeignKey<DonorDeceased>(d => d.DonorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("donor_deceased_donor_id_fkey");
            });

            modelBuilder.Entity<DonorDisposition>(entity =>
            {
                entity.HasKey(e => e.DonorId)
                    .HasName("donor_disposition_pkey");

                entity.ToTable("donor_disposition", "tx");

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DonDcdRecovDt).HasColumnName("don_dcd_recov_dt");

                entity.Property(e => e.DonDcdRecovTm).HasColumnName("don_dcd_recov_tm");

                entity.Property(e => e.DonDiscardCd).HasColumnName("don_discard_cd");

                entity.Property(e => e.DonDisposition).HasColumnName("don_disposition");

                entity.Property(e => e.DonFlushBackTable).HasColumnName("don_flush_back_table");

                entity.Property(e => e.DonFlushFinal).HasColumnName("don_flush_final");

                entity.Property(e => e.DonFlushInit).HasColumnName("don_flush_init");

                entity.Property(e => e.DonOrg)
                    .HasColumnName("don_org")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.DonOrgShared).HasColumnName("don_org_shared");

                entity.Property(e => e.DonReasonCd).HasColumnName("don_reason_cd");

                entity.Property(e => e.DonRecovDt).HasColumnName("don_recov_dt");

                entity.Property(e => e.DonShareTy).HasColumnName("don_share_ty");

                entity.Property(e => e.DonStorage).HasColumnName("don_storage");

                entity.Property(e => e.DonTxCtrId).HasColumnName("don_tx_ctr_id");

                entity.Property(e => e.DonVesselSent).HasColumnName("don_vessel_sent");

                entity.Property(e => e.MatchId).HasColumnName("match_id");

                entity.Property(e => e.PxId).HasColumnName("px_id");

                entity.HasOne(d => d.DonTxCtr)
                    .WithMany(p => p.DonorDisposition)
                    .HasForeignKey(d => d.DonTxCtrId)
                    .HasConstraintName("donor_disposition_don_tx_ctr_id_fkey");

                entity.HasOne(d => d.Donor)
                    .WithOne(p => p.DonorDisposition)
                    .HasForeignKey<DonorDisposition>(d => d.DonorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("donor_disposition_donor_id_fkey");
            });

            modelBuilder.Entity<DonorLive>(entity =>
            {
                entity.HasKey(e => e.DonorId)
                    .HasName("donor_live_pkey");

                entity.ToTable("donor_live", "tx");

                entity.HasIndex(e => e.PersId)
                    .HasName("donor_live_pers_id_key")
                    .IsUnique();

                entity.Property(e => e.DonorId)
                    .HasColumnName("donor_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DonA1).HasColumnName("don_a1");

                entity.Property(e => e.DonA2).HasColumnName("don_a2");

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

                entity.Property(e => e.DonArrhythm).HasColumnName("don_arrhythm");

                entity.Property(e => e.DonB1).HasColumnName("don_b1");

                entity.Property(e => e.DonB2).HasColumnName("don_b2");

                entity.Property(e => e.DonBiliPostop).HasColumnName("don_bili_postop");

                entity.Property(e => e.DonBiliPreop).HasColumnName("don_bili_preop");

                entity.Property(e => e.DonBpDischrgDiast).HasColumnName("don_bp_dischrg_diast");

                entity.Property(e => e.DonBpDischrgSyst).HasColumnName("don_bp_dischrg_syst");

                entity.Property(e => e.DonBpPostopDiast).HasColumnName("don_bp_postop_diast");

                entity.Property(e => e.DonBpPostopSyst).HasColumnName("don_bp_postop_syst");

                entity.Property(e => e.DonBpPreopDiast).HasColumnName("don_bp_preop_diast");

                entity.Property(e => e.DonBpPreopSyst).HasColumnName("don_bp_preop_syst");

                entity.Property(e => e.DonBw4).HasColumnName("don_bw4");

                entity.Property(e => e.DonBw6).HasColumnName("don_bw6");

                entity.Property(e => e.DonC1).HasColumnName("don_c1");

                entity.Property(e => e.DonC2).HasColumnName("don_c2");

                entity.Property(e => e.DonCancerFreeInterval).HasColumnName("don_cancer_free_interval");

                entity.Property(e => e.DonCitizenship).HasColumnName("don_citizenship");

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

                entity.Property(e => e.DonDiabTreat).HasColumnName("don_diab_treat");

                entity.Property(e => e.DonDonation)
                    .HasColumnName("don_donation")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDp1).HasColumnName("don_dp1");

                entity.Property(e => e.DonDp2).HasColumnName("don_dp2");

                entity.Property(e => e.DonDq1).HasColumnName("don_dq1");

                entity.Property(e => e.DonDq2).HasColumnName("don_dq2");

                entity.Property(e => e.DonDr1).HasColumnName("don_dr1");

                entity.Property(e => e.DonDr2).HasColumnName("don_dr2");

                entity.Property(e => e.DonDr51).HasColumnName("don_dr51");

                entity.Property(e => e.DonDr52).HasColumnName("don_dr52");

                entity.Property(e => e.DonDr53).HasColumnName("don_dr53");

                entity.Property(e => e.DonDurationAbstinence).HasColumnName("don_duration_abstinence");

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

                entity.Property(e => e.DonEducation).HasColumnName("don_education");

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

                entity.Property(e => e.DonFunctnStat).HasColumnName("don_functn_stat");

                entity.Property(e => e.DonFvcAfterPreop).HasColumnName("don_fvc_after_preop");

                entity.Property(e => e.DonFvcBeforePreop).HasColumnName("don_fvc_before_preop");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHaploTyMatch).HasColumnName("don_haplo_ty_match");

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

                entity.Property(e => e.DonHistCancer).HasColumnName("don_hist_cancer");

                entity.Property(e => e.DonHistCigarette)
                    .HasColumnName("don_hist_cigarette")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistHyperten).HasColumnName("don_hist_hyperten");

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

                entity.Property(e => e.DonHlaTypNotDone).HasColumnName("don_hla_typ_not_done");

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

                entity.Property(e => e.DonInitDischrgDt).HasColumnName("don_init_dischrg_dt");

                entity.Property(e => e.DonInrPostop).HasColumnName("don_inr_postop");

                entity.Property(e => e.DonInrPreop).HasColumnName("don_inr_preop");

                entity.Property(e => e.DonIntraopCompl)
                    .HasColumnName("don_intraop_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonIntraopComplReason).HasColumnName("don_intraop_compl_reason");

                entity.Property(e => e.DonKiBiopsy)
                    .HasColumnName("don_ki_biopsy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiCreatDischrg).HasColumnName("don_ki_creat_dischrg");

                entity.Property(e => e.DonKiCreatPostop).HasColumnName("don_ki_creat_postop");

                entity.Property(e => e.DonKiCreatPreop).HasColumnName("don_ki_creat_preop");

                entity.Property(e => e.DonKiOtherCompl)
                    .HasColumnName("don_ki_other_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiOtherComplIntervention).HasColumnName("don_ki_other_compl_intervention");

                entity.Property(e => e.DonKiOtherIntervention)
                    .HasColumnName("don_ki_other_intervention")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiOtherInterventionDt).HasColumnName("don_ki_other_intervention_dt");

                entity.Property(e => e.DonKiPctGs).HasColumnName("don_ki_pct_gs");

                entity.Property(e => e.DonKiProcedureConvert)
                    .HasColumnName("don_ki_procedure_convert")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiProcedureTy).HasColumnName("don_ki_procedure_ty");

                entity.Property(e => e.DonKiReadmit)
                    .HasColumnName("don_ki_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiReadmitDt).HasColumnName("don_ki_readmit_dt");

                entity.Property(e => e.DonKiReadmitReason).HasColumnName("don_ki_readmit_reason");

                entity.Property(e => e.DonKiReop)
                    .HasColumnName("don_ki_reop")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiReopBleen).HasColumnName("don_ki_reop_bleen");

                entity.Property(e => e.DonKiReopBleenDt).HasColumnName("don_ki_reop_bleen_dt");

                entity.Property(e => e.DonKiReopBowel).HasColumnName("don_ki_reop_bowel");

                entity.Property(e => e.DonKiReopBowelDt).HasColumnName("don_ki_reop_bowel_dt");

                entity.Property(e => e.DonKiReopHernia).HasColumnName("don_ki_reop_hernia");

                entity.Property(e => e.DonKiReopHerniaDt).HasColumnName("don_ki_reop_hernia_dt");

                entity.Property(e => e.DonKiReopOther).HasColumnName("don_ki_reop_other");

                entity.Property(e => e.DonKiReopOtherDt).HasColumnName("don_ki_reop_other_dt");

                entity.Property(e => e.DonKiReopVasc).HasColumnName("don_ki_reop_vasc");

                entity.Property(e => e.DonKiReopVascDt).HasColumnName("don_ki_reop_vasc_dt");

                entity.Property(e => e.DonKiVascCompl)
                    .HasColumnName("don_ki_vasc_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonKiVascComplIntervention).HasColumnName("don_ki_vasc_compl_intervention");

                entity.Property(e => e.DonLengthHospStay).HasColumnName("don_length_hosp_stay");

                entity.Property(e => e.DonLiBiliaryCompl)
                    .HasColumnName("don_li_biliary_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiBiliaryComplGrade).HasColumnName("don_li_biliary_compl_grade");

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

                entity.Property(e => e.DonLiOtherComplIntervention).HasColumnName("don_li_other_compl_intervention");

                entity.Property(e => e.DonLiOtherIntervention)
                    .HasColumnName("don_li_other_intervention")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiOtherInterventionDt).HasColumnName("don_li_other_intervention_dt");

                entity.Property(e => e.DonLiProcedureTy).HasColumnName("don_li_procedure_ty");

                entity.Property(e => e.DonLiReadmit)
                    .HasColumnName("don_li_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiReadmitDt).HasColumnName("don_li_readmit_dt");

                entity.Property(e => e.DonLiReadmitReason).HasColumnName("don_li_readmit_reason");

                entity.Property(e => e.DonLiReop)
                    .HasColumnName("don_li_reop")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiReopBiliary).HasColumnName("don_li_reop_biliary");

                entity.Property(e => e.DonLiReopBiliaryDt).HasColumnName("don_li_reop_biliary_dt");

                entity.Property(e => e.DonLiReopBleed).HasColumnName("don_li_reop_bleed");

                entity.Property(e => e.DonLiReopBleedDt).HasColumnName("don_li_reop_bleed_dt");

                entity.Property(e => e.DonLiReopBowel).HasColumnName("don_li_reop_bowel");

                entity.Property(e => e.DonLiReopBowelDt).HasColumnName("don_li_reop_bowel_dt");

                entity.Property(e => e.DonLiReopFail).HasColumnName("don_li_reop_fail");

                entity.Property(e => e.DonLiReopFailDt).HasColumnName("don_li_reop_fail_dt");

                entity.Property(e => e.DonLiReopHernia).HasColumnName("don_li_reop_hernia");

                entity.Property(e => e.DonLiReopHerniaDt).HasColumnName("don_li_reop_hernia_dt");

                entity.Property(e => e.DonLiReopOther).HasColumnName("don_li_reop_other");

                entity.Property(e => e.DonLiReopOtherDt).HasColumnName("don_li_reop_other_dt");

                entity.Property(e => e.DonLiReopVasc).HasColumnName("don_li_reop_vasc");

                entity.Property(e => e.DonLiReopVascDt).HasColumnName("don_li_reop_vasc_dt");

                entity.Property(e => e.DonLiVascCompl)
                    .HasColumnName("don_li_vasc_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLiVascComplIntervention).HasColumnName("don_li_vasc_compl_intervention");

                entity.Property(e => e.DonLivingDonCod).HasColumnName("don_living_don_cod");

                entity.Property(e => e.DonLuArrhythm).HasColumnName("don_lu_arrhythm");

                entity.Property(e => e.DonLuCapacityPreop).HasColumnName("don_lu_capacity_preop");

                entity.Property(e => e.DonLuCompl)
                    .HasColumnName("don_lu_compl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuComplReason).HasColumnName("don_lu_compl_reason");

                entity.Property(e => e.DonLuProcedureConvert)
                    .HasColumnName("don_lu_procedure_convert")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuProcedureTy).HasColumnName("don_lu_procedure_ty");

                entity.Property(e => e.DonLuReadmit)
                    .HasColumnName("don_lu_readmit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonLuReadmitDt).HasColumnName("don_lu_readmit_dt");

                entity.Property(e => e.DonLuReadmitReason).HasColumnName("don_lu_readmit_reason");

                entity.Property(e => e.DonLuThoracTubes).HasColumnName("don_lu_thorac_tubes");

                entity.Property(e => e.DonMaritalStat).HasColumnName("don_marital_stat");

                entity.Property(e => e.DonMedicaid)
                    .HasColumnName("don_medicaid")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonMedicare)
                    .HasColumnName("don_medicare")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonAutoBlood)
                    .HasColumnName("don_non_auto_blood")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoRunMatch).HasColumnName("don_opo_run_match");

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

                entity.Property(e => e.DonPackYears).HasColumnName("don_pack_years");

                entity.Property(e => e.DonPao2Preop).HasColumnName("don_pao2_preop");

                entity.Property(e => e.DonPhyscCapacity).HasColumnName("don_physc_capacity");

                entity.Property(e => e.DonPltUnits).HasColumnName("don_plt_units");

                entity.Property(e => e.DonPostopTestDt).HasColumnName("don_postop_test_dt");

                entity.Property(e => e.DonPrbcUnits).HasColumnName("don_prbc_units");

                entity.Property(e => e.DonPrimaryPay).HasColumnName("don_primary_pay");

                entity.Property(e => e.DonPrivInsur)
                    .HasColumnName("don_priv_insur")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRace).HasColumnName("don_race");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt).HasColumnName("don_recov_dt");

                entity.Property(e => e.DonRecovTxSameCtr)
                    .HasColumnName("don_recov_tx_same_ctr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRelationshipTy).HasColumnName("don_relationship_ty");

                entity.Property(e => e.DonSacrificeLobe).HasColumnName("don_sacrifice_lobe");

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

                entity.Property(e => e.DonStatDt).HasColumnName("don_stat_dt");

                entity.Property(e => e.DonTargetSource1).HasColumnName("don_target_source1");

                entity.Property(e => e.DonTargetSource2).HasColumnName("don_target_source2");

                entity.Property(e => e.DonTlcAfterPreop).HasColumnName("don_tlc_after_preop");

                entity.Property(e => e.DonTlcBeforePreop).HasColumnName("don_tlc_before_preop");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonTypMethclass1).HasColumnName("don_typ_methclass1");

                entity.Property(e => e.DonTypMethclass1Dt).HasColumnName("don_typ_methclass1_dt");

                entity.Property(e => e.DonTypMethclass2).HasColumnName("don_typ_methclass2");

                entity.Property(e => e.DonTypMethclass2Dt).HasColumnName("don_typ_methclass2_dt");

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

                entity.Property(e => e.DonWorkNoStat).HasColumnName("don_work_no_stat");

                entity.Property(e => e.DonWorkYesStat).HasColumnName("don_work_yes_stat");

                entity.Property(e => e.DonYearEntryUs).HasColumnName("don_year_entry_us");

                entity.Property(e => e.PersId).HasColumnName("pers_id");

                entity.Property(e => e.PersSsaDeathDt).HasColumnName("pers_ssa_death_dt");

                entity.HasOne(d => d.Donor)
                    .WithOne(p => p.DonorLive)
                    .HasForeignKey<DonorLive>(d => d.DonorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("donor_live_donor_id_fkey");
            });

            modelBuilder.Entity<FolImmuno>(entity =>
            {
                entity.HasKey(e => e.TrrFolId)
                    .HasName("fol_immuno_pkey");

                entity.ToTable("fol_immuno", "tx");

                entity.Property(e => e.TrrFolId)
                    .HasColumnName("trr_fol_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.TflFolCd).HasColumnName("tfl_fol_cd");

                entity.Property(e => e.TflImmunoDrugAntiRej).HasColumnName("tfl_immuno_drug_anti_rej");

                entity.Property(e => e.TflImmunoDrugCd).HasColumnName("tfl_immuno_drug_cd");

                entity.Property(e => e.TflImmunoDrugMaintCur).HasColumnName("tfl_immuno_drug_maint_cur");

                entity.Property(e => e.TflImmunoDrugMaintPrev).HasColumnName("tfl_immuno_drug_maint_prev");

                entity.Property(e => e.TrrId).HasColumnName("trr_id");

                entity.HasOne(d => d.TrrFol)
                    .WithOne(p => p.FolImmuno)
                    .HasForeignKey<FolImmuno>(d => d.TrrFolId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fol_immuno_trr_fol_id_fkey");

                entity.HasOne(d => d.Trr)
                    .WithMany(p => p.FolImmuno)
                    .HasPrincipalKey(p => p.TrrId)
                    .HasForeignKey(d => d.TrrId)
                    .HasConstraintName("fol_immuno_trr_id_fkey");
            });

            modelBuilder.Entity<Immuno>(entity =>
            {
                entity.HasKey(e => e.TrrId)
                    .HasName("immuno_pkey");

                entity.ToTable("immuno", "tx");

                entity.Property(e => e.TrrId)
                    .HasColumnName("trr_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.RecDrugAntiRej).HasColumnName("rec_drug_anti_rej");

                entity.Property(e => e.RecDrugCd).HasColumnName("rec_drug_cd");

                entity.Property(e => e.RecDrugDays).HasColumnName("rec_drug_days");

                entity.Property(e => e.RecDrugInduction).HasColumnName("rec_drug_induction");

                entity.Property(e => e.RecDrugMaint).HasColumnName("rec_drug_maint");

                entity.HasOne(d => d.Trr)
                    .WithOne(p => p.Immuno)
                    .HasPrincipalKey<TxLi>(p => p.TrrId)
                    .HasForeignKey<Immuno>(d => d.TrrId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("immuno_trr_id_fkey");
            });

            modelBuilder.Entity<Institution>(entity =>
            {
                entity.HasKey(e => e.CtrId)
                    .HasName("institution_pkey");

                entity.ToTable("institution", "tx");

                entity.Property(e => e.CtrId)
                    .HasColumnName("ctr_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CtrCd)
                    .HasColumnName("ctr_cd")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.CtrTy)
                    .HasColumnName("ctr_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.EntireName)
                    .HasColumnName("entire_name")
                    .HasColumnType("character varying(75)");

                entity.Property(e => e.EsrdRegion).HasColumnName("esrd_region");

                entity.Property(e => e.NamePart1)
                    .HasColumnName("name_part1")
                    .HasColumnType("character varying(37)");

                entity.Property(e => e.NamePart2)
                    .HasColumnName("name_part2")
                    .HasColumnType("character varying(37)");

                entity.Property(e => e.OptnMbr).HasColumnName("optn_mbr");

                entity.Property(e => e.PrimaryCity)
                    .HasColumnName("primary_city")
                    .HasColumnType("character varying(20)");

                entity.Property(e => e.PrimaryCtry)
                    .HasColumnName("primary_ctry")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.PrimaryProvince)
                    .HasColumnName("primary_province")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.PrimaryState)
                    .HasColumnName("primary_state")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.PrimaryZip)
                    .HasColumnName("primary_zip")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.ProviderNum)
                    .HasColumnName("provider_num")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.Region).HasColumnName("region");
            });

            modelBuilder.Entity<Malig>(entity =>
            {
                entity.ToTable("malig", "tx");

                entity.Property(e => e.MaligId)
                    .HasColumnName("malig_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.MalDonChemo).HasColumnName("mal_don_chemo");

                entity.Property(e => e.MalDonChemoTy).HasColumnName("mal_don_chemo_ty");

                entity.Property(e => e.MalDonDgnDt).HasColumnName("mal_don_dgn_dt");

                entity.Property(e => e.MalDonImmuno).HasColumnName("mal_don_immuno");

                entity.Property(e => e.MalDonImmunoStat).HasColumnName("mal_don_immuno_stat");

                entity.Property(e => e.MalDonImmunoTy).HasColumnName("mal_don_immuno_ty");

                entity.Property(e => e.MalDonOutcome).HasColumnName("mal_don_outcome");

                entity.Property(e => e.MalDonRadiat).HasColumnName("mal_don_radiat");

                entity.Property(e => e.MalDonSurg).HasColumnName("mal_don_surg");

                entity.Property(e => e.MalDonTumorTy)
                    .HasColumnName("mal_don_tumor_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalNatOrgKi).HasColumnName("mal_nat_org_ki");

                entity.Property(e => e.MalNatOrgLi).HasColumnName("mal_nat_org_li");

                entity.Property(e => e.MalNatOrgLu).HasColumnName("mal_nat_org_lu");

                entity.Property(e => e.MalPostxBasNum).HasColumnName("mal_postx_bas_num");

                entity.Property(e => e.MalPostxBasSiteExtrem).HasColumnName("mal_postx_bas_site_extrem");

                entity.Property(e => e.MalPostxBasSiteLipheadneck).HasColumnName("mal_postx_bas_site_lipheadneck");

                entity.Property(e => e.MalPostxBasSiteTrunk).HasColumnName("mal_postx_bas_site_trunk");

                entity.Property(e => e.MalPostxBasSkinSites)
                    .HasColumnName("mal_postx_bas_skin_sites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPostxBasSpreadNodes).HasColumnName("mal_postx_bas_spread_nodes");

                entity.Property(e => e.MalPostxBasSpreadNone).HasColumnName("mal_postx_bas_spread_none");

                entity.Property(e => e.MalPostxBasSpreadOther).HasColumnName("mal_postx_bas_spread_other");

                entity.Property(e => e.MalPostxBrainTumorTy).HasColumnName("mal_postx_brain_tumor_ty");

                entity.Property(e => e.MalPostxColorectalDukes).HasColumnName("mal_postx_colorectal_dukes");

                entity.Property(e => e.MalPostxKaposiCutaneous).HasColumnName("mal_postx_kaposi_cutaneous");

                entity.Property(e => e.MalPostxKaposiVisc).HasColumnName("mal_postx_kaposi_visc");

                entity.Property(e => e.MalPostxLeukTy).HasColumnName("mal_postx_leuk_ty");

                entity.Property(e => e.MalPostxLuCellTy)
                    .HasColumnName("mal_postx_lu_cell_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPostxMelNum).HasColumnName("mal_postx_mel_num");

                entity.Property(e => e.MalPostxMelSiteExtrem).HasColumnName("mal_postx_mel_site_extrem");

                entity.Property(e => e.MalPostxMelSiteLipheadneck).HasColumnName("mal_postx_mel_site_lipheadneck");

                entity.Property(e => e.MalPostxMelSiteTrunk).HasColumnName("mal_postx_mel_site_trunk");

                entity.Property(e => e.MalPostxMelSkinSites)
                    .HasColumnName("mal_postx_mel_skin_sites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPostxMelSpreadNodes).HasColumnName("mal_postx_mel_spread_nodes");

                entity.Property(e => e.MalPostxMelSpreadNone).HasColumnName("mal_postx_mel_spread_none");

                entity.Property(e => e.MalPostxMelSpreadOther).HasColumnName("mal_postx_mel_spread_other");

                entity.Property(e => e.MalPostxMetastLiTy).HasColumnName("mal_postx_metast_li_ty");

                entity.Property(e => e.MalPostxOtherCancerSites)
                    .HasColumnName("mal_postx_other_cancer_sites")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.MalPostxOutcome).HasColumnName("mal_postx_outcome");

                entity.Property(e => e.MalPostxPrimeHepatTy).HasColumnName("mal_postx_prime_hepat_ty");

                entity.Property(e => e.MalPostxRenalSites)
                    .HasColumnName("mal_postx_renal_sites")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.MalPostxSarcomaSites)
                    .HasColumnName("mal_postx_sarcoma_sites")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.MalPostxSarcomaTy).HasColumnName("mal_postx_sarcoma_ty");

                entity.Property(e => e.MalPostxSquNum).HasColumnName("mal_postx_squ_num");

                entity.Property(e => e.MalPostxSquSiteExtrem).HasColumnName("mal_postx_squ_site_extrem");

                entity.Property(e => e.MalPostxSquSiteLipheadneck).HasColumnName("mal_postx_squ_site_lipheadneck");

                entity.Property(e => e.MalPostxSquSiteTrunk).HasColumnName("mal_postx_squ_site_trunk");

                entity.Property(e => e.MalPostxSquSkinSites)
                    .HasColumnName("mal_postx_squ_skin_sites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPostxSquSpreadNodes).HasColumnName("mal_postx_squ_spread_nodes");

                entity.Property(e => e.MalPostxSquSpreadNone).HasColumnName("mal_postx_squ_spread_none");

                entity.Property(e => e.MalPostxSquSpreadOther).HasColumnName("mal_postx_squ_spread_other");

                entity.Property(e => e.MalPostxTumorBasSkin).HasColumnName("mal_postx_tumor_bas_skin");

                entity.Property(e => e.MalPostxTumorBladder).HasColumnName("mal_postx_tumor_bladder");

                entity.Property(e => e.MalPostxTumorBrain).HasColumnName("mal_postx_tumor_brain");

                entity.Property(e => e.MalPostxTumorBreast).HasColumnName("mal_postx_tumor_breast");

                entity.Property(e => e.MalPostxTumorColorectal).HasColumnName("mal_postx_tumor_colorectal");

                entity.Property(e => e.MalPostxTumorEsophagus).HasColumnName("mal_postx_tumor_esophagus");

                entity.Property(e => e.MalPostxTumorLarynx).HasColumnName("mal_postx_tumor_larynx");

                entity.Property(e => e.MalPostxTumorLeuk).HasColumnName("mal_postx_tumor_leuk");

                entity.Property(e => e.MalPostxTumorLu).HasColumnName("mal_postx_tumor_lu");

                entity.Property(e => e.MalPostxTumorMelSkin).HasColumnName("mal_postx_tumor_mel_skin");

                entity.Property(e => e.MalPostxTumorMetastLi).HasColumnName("mal_postx_tumor_metast_li");

                entity.Property(e => e.MalPostxTumorOtherCancer).HasColumnName("mal_postx_tumor_other_cancer");

                entity.Property(e => e.MalPostxTumorOvarian).HasColumnName("mal_postx_tumor_ovarian");

                entity.Property(e => e.MalPostxTumorPa).HasColumnName("mal_postx_tumor_pa");

                entity.Property(e => e.MalPostxTumorPrimeHepat).HasColumnName("mal_postx_tumor_prime_hepat");

                entity.Property(e => e.MalPostxTumorPrimeUnk).HasColumnName("mal_postx_tumor_prime_unk");

                entity.Property(e => e.MalPostxTumorProstate).HasColumnName("mal_postx_tumor_prostate");

                entity.Property(e => e.MalPostxTumorRenal).HasColumnName("mal_postx_tumor_renal");

                entity.Property(e => e.MalPostxTumorSarcoma).HasColumnName("mal_postx_tumor_sarcoma");

                entity.Property(e => e.MalPostxTumorSmIn).HasColumnName("mal_postx_tumor_sm_in");

                entity.Property(e => e.MalPostxTumorSquSkin).HasColumnName("mal_postx_tumor_squ_skin");

                entity.Property(e => e.MalPostxTumorStomach).HasColumnName("mal_postx_tumor_stomach");

                entity.Property(e => e.MalPostxTumorTesticular).HasColumnName("mal_postx_tumor_testicular");

                entity.Property(e => e.MalPostxTumorThyroid).HasColumnName("mal_postx_tumor_thyroid");

                entity.Property(e => e.MalPostxTumorTongueThroat).HasColumnName("mal_postx_tumor_tongue_throat");

                entity.Property(e => e.MalPostxTumorUterus).HasColumnName("mal_postx_tumor_uterus");

                entity.Property(e => e.MalPostxTumorVulvaPenis).HasColumnName("mal_postx_tumor_vulva_penis");

                entity.Property(e => e.MalPostxUterusTy).HasColumnName("mal_postx_uterus_ty");

                entity.Property(e => e.MalPretxChemo).HasColumnName("mal_pretx_chemo");

                entity.Property(e => e.MalPretxChemoTy).HasColumnName("mal_pretx_chemo_ty");

                entity.Property(e => e.MalPretxDt).HasColumnName("mal_pretx_dt");

                entity.Property(e => e.MalPretxDukes).HasColumnName("mal_pretx_dukes");

                entity.Property(e => e.MalPretxLeukTy).HasColumnName("mal_pretx_leuk_ty");

                entity.Property(e => e.MalPretxRadiat).HasColumnName("mal_pretx_radiat");

                entity.Property(e => e.MalPretxSkinNum).HasColumnName("mal_pretx_skin_num");

                entity.Property(e => e.MalPretxSurg).HasColumnName("mal_pretx_surg");

                entity.Property(e => e.MalPretxSurgTy).HasColumnName("mal_pretx_surg_ty");

                entity.Property(e => e.MalPretxTumorTy).HasColumnName("mal_pretx_tumor_ty");

                entity.Property(e => e.MalPtldAaStage)
                    .HasColumnName("mal_ptld_aa_stage")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldAnatomyNodes)
                    .HasColumnName("mal_ptld_anatomy_nodes")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldAnatomySite)
                    .HasColumnName("mal_ptld_anatomy_site")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldAntivrl)
                    .HasColumnName("mal_ptld_antivrl")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldAntivrl1Bestresp)
                    .HasColumnName("mal_ptld_antivrl1_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldAntivrl1Ty).HasColumnName("mal_ptld_antivrl1_ty");

                entity.Property(e => e.MalPtldAntivrl2Bestresp)
                    .HasColumnName("mal_ptld_antivrl2_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldAntivrl2Ty).HasColumnName("mal_ptld_antivrl2_ty");

                entity.Property(e => e.MalPtldChemo)
                    .HasColumnName("mal_ptld_chemo")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldChemo1Bestresp)
                    .HasColumnName("mal_ptld_chemo1_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldChemo1Ty).HasColumnName("mal_ptld_chemo1_ty");

                entity.Property(e => e.MalPtldChemo2Bestresp)
                    .HasColumnName("mal_ptld_chemo2_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldChemo2Ty).HasColumnName("mal_ptld_chemo2_ty");

                entity.Property(e => e.MalPtldClonalityTy).HasColumnName("mal_ptld_clonality_ty");

                entity.Property(e => e.MalPtldDgnDt).HasColumnName("mal_ptld_dgn_dt");

                entity.Property(e => e.MalPtldEbvStat)
                    .HasColumnName("mal_ptld_ebv_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldExnodalAllograft).HasColumnName("mal_ptld_exnodal_allograft");

                entity.Property(e => e.MalPtldExnodalBoneMarrow).HasColumnName("mal_ptld_exnodal_bone_marrow");

                entity.Property(e => e.MalPtldExnodalCns).HasColumnName("mal_ptld_exnodal_cns");

                entity.Property(e => e.MalPtldExnodalColon).HasColumnName("mal_ptld_exnodal_colon");

                entity.Property(e => e.MalPtldExnodalLi).HasColumnName("mal_ptld_exnodal_li");

                entity.Property(e => e.MalPtldExnodalLu).HasColumnName("mal_ptld_exnodal_lu");

                entity.Property(e => e.MalPtldExnodalSmIn).HasColumnName("mal_ptld_exnodal_sm_in");

                entity.Property(e => e.MalPtldExnodalStomach).HasColumnName("mal_ptld_exnodal_stomach");

                entity.Property(e => e.MalPtldImmuno)
                    .HasColumnName("mal_ptld_immuno")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldImmunoBestresp)
                    .HasColumnName("mal_ptld_immuno_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldImmunoTy).HasColumnName("mal_ptld_immuno_ty");

                entity.Property(e => e.MalPtldPathologyTy).HasColumnName("mal_ptld_pathology_ty");

                entity.Property(e => e.MalPtldPredomCellTy).HasColumnName("mal_ptld_predom_cell_ty");

                entity.Property(e => e.MalPtldRadiat)
                    .HasColumnName("mal_ptld_radiat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldRadiatBestresp)
                    .HasColumnName("mal_ptld_radiat_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldReducImmuno)
                    .HasColumnName("mal_ptld_reduc_immuno")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.MalPtldReducImmunoBestresp)
                    .HasColumnName("mal_ptld_reduc_immuno_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldSurgBestresp)
                    .HasColumnName("mal_ptld_surg_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPtldSurgTy).HasColumnName("mal_ptld_surg_ty");

                entity.Property(e => e.MalRecurChemo).HasColumnName("mal_recur_chemo");

                entity.Property(e => e.MalRecurChemoTy).HasColumnName("mal_recur_chemo_ty");

                entity.Property(e => e.MalRecurDt).HasColumnName("mal_recur_dt");

                entity.Property(e => e.MalRecurImmuno).HasColumnName("mal_recur_immuno");

                entity.Property(e => e.MalRecurImmunoStat).HasColumnName("mal_recur_immuno_stat");

                entity.Property(e => e.MalRecurImmunoTy).HasColumnName("mal_recur_immuno_ty");

                entity.Property(e => e.MalRecurOutcome).HasColumnName("mal_recur_outcome");

                entity.Property(e => e.MalRecurRadiat).HasColumnName("mal_recur_radiat");

                entity.Property(e => e.MalRecurSiteAdjOrg).HasColumnName("mal_recur_site_adj_org");

                entity.Property(e => e.MalRecurSiteLymph).HasColumnName("mal_recur_site_lymph");

                entity.Property(e => e.MalRecurSiteMetast).HasColumnName("mal_recur_site_metast");

                entity.Property(e => e.MalRecurSitePrimeOrg).HasColumnName("mal_recur_site_prime_org");

                entity.Property(e => e.MalRecurSurg).HasColumnName("mal_recur_surg");

                entity.Property(e => e.MalRecurSurgTy).HasColumnName("mal_recur_surg_ty");

                entity.Property(e => e.TflNatOrgKiTy)
                    .HasColumnName("tfl_nat_org_ki_ty")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflNatOrgLiTy)
                    .HasColumnName("tfl_nat_org_li_ty")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflNatOrgLuTy)
                    .HasColumnName("tfl_nat_org_lu_ty")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflPrevTumorLymphTy)
                    .HasColumnName("tfl_prev_tumor_lymph_ty")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflPtldAntivrlDrug1)
                    .HasColumnName("tfl_ptld_antivrl_drug1")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflPtldAntivrlDrug2)
                    .HasColumnName("tfl_ptld_antivrl_drug2")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TflTumOthCancerTy)
                    .HasColumnName("tfl_tum_oth_cancer_ty")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.TrrFolId).HasColumnName("trr_fol_id");

                entity.HasOne(d => d.TrrFol)
                    .WithMany(p => p.Malig)
                    .HasForeignKey(d => d.TrrFolId)
                    .HasConstraintName("malig_trr_fol_id_fkey");
            });

            modelBuilder.Entity<Mpexcept>(entity =>
            {
                entity.HasKey(e => e.CanhxMpxcptFormId)
                    .HasName("mpexcept_pkey");

                entity.ToTable("mpexcept", "tx");

                entity.Property(e => e.CanhxMpxcptFormId)
                    .HasColumnName("canhx_mpxcpt_form_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanhxMpxcptAfp).HasColumnName("canhx_mpxcpt_afp");

                entity.Property(e => e.CanhxMpxcptAfpDt).HasColumnName("canhx_mpxcpt_afp_dt");

                entity.Property(e => e.CanhxMpxcptApplTy).HasColumnName("canhx_mpxcpt_appl_ty");

                entity.Property(e => e.CanhxMpxcptBeginDt).HasColumnName("canhx_mpxcpt_begin_dt");

                entity.Property(e => e.CanhxMpxcptBiopsyDt).HasColumnName("canhx_mpxcpt_biopsy_dt");

                entity.Property(e => e.CanhxMpxcptCaseCurForm).HasColumnName("canhx_mpxcpt_case_cur_form");

                entity.Property(e => e.CanhxMpxcptCaseId).HasColumnName("canhx_mpxcpt_case_id");

                entity.Property(e => e.CanhxMpxcptDaysAfterTx).HasColumnName("canhx_mpxcpt_days_after_tx");

                entity.Property(e => e.CanhxMpxcptDgn).HasColumnName("canhx_mpxcpt_dgn");

                entity.Property(e => e.CanhxMpxcptEndDt).HasColumnName("canhx_mpxcpt_end_dt");

                entity.Property(e => e.CanhxMpxcptHccArteriogramDt).HasColumnName("canhx_mpxcpt_hcc_arteriogram_dt");

                entity.Property(e => e.CanhxMpxcptHccBiopsyDt).HasColumnName("canhx_mpxcpt_hcc_biopsy_dt");

                entity.Property(e => e.CanhxMpxcptHccBoneScanDt).HasColumnName("canhx_mpxcpt_hcc_bone_scan_dt");

                entity.Property(e => e.CanhxMpxcptHccChemAblatDt).HasColumnName("canhx_mpxcpt_hcc_chem_ablat_dt");

                entity.Property(e => e.CanhxMpxcptHccChembolizatDt).HasColumnName("canhx_mpxcpt_hcc_chembolizat_dt");

                entity.Property(e => e.CanhxMpxcptHccCryoAblatDt).HasColumnName("canhx_mpxcpt_hcc_cryo_ablat_dt");

                entity.Property(e => e.CanhxMpxcptHccCtChestDt).HasColumnName("canhx_mpxcpt_hcc_ct_chest_dt");

                entity.Property(e => e.CanhxMpxcptHccFreqAblatDt).HasColumnName("canhx_mpxcpt_hcc_freq_ablat_dt");

                entity.Property(e => e.CanhxMpxcptHccMriChestDt).HasColumnName("canhx_mpxcpt_hcc_mri_chest_dt");

                entity.Property(e => e.CanhxMpxcptHccNoMacrovasc)
                    .HasColumnName("canhx_mpxcpt_hcc_no_macrovasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptHccNoXtrahepSprd)
                    .HasColumnName("canhx_mpxcpt_hcc_no_xtrahep_sprd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptHccResectCand)
                    .HasColumnName("canhx_mpxcpt_hcc_resect_cand")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptHccResectInit)
                    .HasColumnName("canhx_mpxcpt_hcc_resect_init")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptHccSurgResectDt).HasColumnName("canhx_mpxcpt_hcc_surg_resect_dt");

                entity.Property(e => e.CanhxMpxcptMeldOrPeld)
                    .HasColumnName("canhx_mpxcpt_meld_or_peld")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.CanhxMpxcptMostRecentApprov).HasColumnName("canhx_mpxcpt_most_recent_approv");

                entity.Property(e => e.CanhxMpxcptNoOfOrigTumors).HasColumnName("canhx_mpxcpt_no_of_orig_tumors");

                entity.Property(e => e.CanhxMpxcptNoOfTumors).HasColumnName("canhx_mpxcpt_no_of_tumors");

                entity.Property(e => e.CanhxMpxcptOrganicAcidemia).HasColumnName("canhx_mpxcpt_organic_acidemia");

                entity.Property(e => e.CanhxMpxcptOrigApplDt).HasColumnName("canhx_mpxcpt_orig_appl_dt");

                entity.Property(e => e.CanhxMpxcptOrigTumorFlg)
                    .HasColumnName("canhx_mpxcpt_orig_tumor_flg")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptOrigTumorImageDt).HasColumnName("canhx_mpxcpt_orig_tumor_image_dt");

                entity.Property(e => e.CanhxMpxcptOtc).HasColumnName("canhx_mpxcpt_otc");

                entity.Property(e => e.CanhxMpxcptPolicyEffectiveDt).HasColumnName("canhx_mpxcpt_policy_effective_dt");

                entity.Property(e => e.CanhxMpxcptRegion).HasColumnName("canhx_mpxcpt_region");

                entity.Property(e => e.CanhxMpxcptRequestScore).HasColumnName("canhx_mpxcpt_request_score");

                entity.Property(e => e.CanhxMpxcptStat).HasColumnName("canhx_mpxcpt_stat");

                entity.Property(e => e.CanhxMpxcptStatDt).HasColumnName("canhx_mpxcpt_stat_dt");

                entity.Property(e => e.CanhxMpxcptTxDt).HasColumnName("canhx_mpxcpt_tx_dt");

                entity.Property(e => e.CanhxMpxcptUreaCycleDefect).HasColumnName("canhx_mpxcpt_urea_cycle_defect");

                entity.Property(e => e.PxId).HasColumnName("px_id");

                entity.HasOne(d => d.Px)
                    .WithMany(p => p.Mpexcept)
                    .HasForeignKey(d => d.PxId)
                    .HasConstraintName("mpexcept_px_id_fkey");
            });

            modelBuilder.Entity<MpexceptOrigTumors>(entity =>
            {
                entity.HasKey(e => e.CanhxMpxcptFormId)
                    .HasName("mpexcept_orig_tumors_pkey");

                entity.ToTable("mpexcept_orig_tumors", "tx");

                entity.Property(e => e.CanhxMpxcptFormId)
                    .HasColumnName("canhx_mpxcpt_form_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanhxMpxcptOrigHccTumorId).HasColumnName("canhx_mpxcpt_orig_hcc_tumor_id");

                entity.Property(e => e.CanhxMpxcptOrigHccTumorSize).HasColumnName("canhx_mpxcpt_orig_hcc_tumor_size");

                entity.HasOne(d => d.CanhxMpxcptForm)
                    .WithOne(p => p.MpexceptOrigTumors)
                    .HasForeignKey<MpexceptOrigTumors>(d => d.CanhxMpxcptFormId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("mpexcept_orig_tumors_canhx_mpxcpt_form_id_fkey");
            });

            modelBuilder.Entity<MpexceptTumors>(entity =>
            {
                entity.HasKey(e => e.CanhxMpxcptFormId)
                    .HasName("mpexcept_tumors_pkey");

                entity.ToTable("mpexcept_tumors", "tx");

                entity.Property(e => e.CanhxMpxcptFormId)
                    .HasColumnName("canhx_mpxcpt_form_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanhxMpxcptChronicLiAfp500).HasColumnName("canhx_mpxcpt_chronic_li_afp500");

                entity.Property(e => e.CanhxMpxcptHccCtAbdomenDt).HasColumnName("canhx_mpxcpt_hcc_ct_abdomen_dt");

                entity.Property(e => e.CanhxMpxcptHccMriAbdomenDt).HasColumnName("canhx_mpxcpt_hcc_mri_abdomen_dt");

                entity.Property(e => e.CanhxMpxcptHccTumorBlush)
                    .HasColumnName("canhx_mpxcpt_hcc_tumor_blush")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxMpxcptHccTumorId).HasColumnName("canhx_mpxcpt_hcc_tumor_id");

                entity.Property(e => e.CanhxMpxcptHccTumorSizeCm).HasColumnName("canhx_mpxcpt_hcc_tumor_size_cm");

                entity.Property(e => e.CanhxMpxcptHccUltrasoundDt).HasColumnName("canhx_mpxcpt_hcc_ultrasound_dt");

                entity.HasOne(d => d.CanhxMpxcptForm)
                    .WithOne(p => p.MpexceptTumors)
                    .HasForeignKey<MpexceptTumors>(d => d.CanhxMpxcptFormId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("mpexcept_tumors_canhx_mpxcpt_form_id_fkey");
            });

            modelBuilder.Entity<RecHisto>(entity =>
            {
                entity.HasKey(e => e.RecHistoTxId)
                    .HasName("rec_histo_pkey");

                entity.ToTable("rec_histo", "tx");

                entity.Property(e => e.RecHistoTxId)
                    .HasColumnName("rec_histo_tx_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BCellDone).HasColumnName("b_cell_done");

                entity.Property(e => e.BCellDoneXmatAhg).HasColumnName("b_cell_done_xmat_ahg");

                entity.Property(e => e.BCellDoneXmatFlowCytometry).HasColumnName("b_cell_done_xmat_flow_cytometry");

                entity.Property(e => e.BCellDoneXmatNoAhg).HasColumnName("b_cell_done_xmat_no_ahg");

                entity.Property(e => e.BCellDoneXmatSolidPhase).HasColumnName("b_cell_done_xmat_solid_phase");

                entity.Property(e => e.DonA1).HasColumnName("don_a1");

                entity.Property(e => e.DonA2).HasColumnName("don_a2");

                entity.Property(e => e.DonB1).HasColumnName("don_b1");

                entity.Property(e => e.DonB2).HasColumnName("don_b2");

                entity.Property(e => e.DonBw4).HasColumnName("don_bw4");

                entity.Property(e => e.DonBw6).HasColumnName("don_bw6");

                entity.Property(e => e.DonCw1).HasColumnName("don_cw1");

                entity.Property(e => e.DonCw2).HasColumnName("don_cw2");

                entity.Property(e => e.DonDpw1).HasColumnName("don_dpw1");

                entity.Property(e => e.DonDpw2).HasColumnName("don_dpw2");

                entity.Property(e => e.DonDqw1).HasColumnName("don_dqw1");

                entity.Property(e => e.DonDqw2).HasColumnName("don_dqw2");

                entity.Property(e => e.DonDr1).HasColumnName("don_dr1");

                entity.Property(e => e.DonDr2).HasColumnName("don_dr2");

                entity.Property(e => e.DonDrw51).HasColumnName("don_drw51");

                entity.Property(e => e.DonDrw52).HasColumnName("don_drw52");

                entity.Property(e => e.DonDrw53).HasColumnName("don_drw53");

                entity.Property(e => e.DonRetypCellSourceI).HasColumnName("don_retyp_cell_source_i");

                entity.Property(e => e.DonRetypCellSourceIi).HasColumnName("don_retyp_cell_source_ii");

                entity.Property(e => e.DonRetypDtI).HasColumnName("don_retyp_dt_i");

                entity.Property(e => e.DonRetypDtIi).HasColumnName("don_retyp_dt_ii");

                entity.Property(e => e.DonRetypI)
                    .HasColumnName("don_retyp_i")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRetypIi)
                    .HasColumnName("don_retyp_ii")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRetypMethI).HasColumnName("don_retyp_meth_i");

                entity.Property(e => e.DonRetypMethIi).HasColumnName("don_retyp_meth_ii");

                entity.Property(e => e.HCellDone).HasColumnName("h_cell_done");

                entity.Property(e => e.HCellDoneXmatAhg).HasColumnName("h_cell_done_xmat_ahg");

                entity.Property(e => e.HCellDoneXmatFlowCytometry).HasColumnName("h_cell_done_xmat_flow_cytometry");

                entity.Property(e => e.HCellDoneXmatNoAhg).HasColumnName("h_cell_done_xmat_no_ahg");

                entity.Property(e => e.HCellDoneXmatSolidPhase).HasColumnName("h_cell_done_xmat_solid_phase");

                entity.Property(e => e.RecA1).HasColumnName("rec_a1");

                entity.Property(e => e.RecA2).HasColumnName("rec_a2");

                entity.Property(e => e.RecB1).HasColumnName("rec_b1");

                entity.Property(e => e.RecB2).HasColumnName("rec_b2");

                entity.Property(e => e.RecBw4).HasColumnName("rec_bw4");

                entity.Property(e => e.RecBw6).HasColumnName("rec_bw6");

                entity.Property(e => e.RecCpra).HasColumnName("rec_cpra");

                entity.Property(e => e.RecCpraPeak).HasColumnName("rec_cpra_peak");

                entity.Property(e => e.RecCpraPeakStat)
                    .HasColumnName("rec_cpra_peak_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecCpraStat)
                    .HasColumnName("rec_cpra_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecCw1).HasColumnName("rec_cw1");

                entity.Property(e => e.RecCw2).HasColumnName("rec_cw2");

                entity.Property(e => e.RecDonRetyp)
                    .HasColumnName("rec_don_retyp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecDpw1).HasColumnName("rec_dpw1");

                entity.Property(e => e.RecDpw2).HasColumnName("rec_dpw2");

                entity.Property(e => e.RecDqw1).HasColumnName("rec_dqw1");

                entity.Property(e => e.RecDqw2).HasColumnName("rec_dqw2");

                entity.Property(e => e.RecDr1).HasColumnName("rec_dr1");

                entity.Property(e => e.RecDr2).HasColumnName("rec_dr2");

                entity.Property(e => e.RecDrw51).HasColumnName("rec_drw51");

                entity.Property(e => e.RecDrw52).HasColumnName("rec_drw52");

                entity.Property(e => e.RecDrw53).HasColumnName("rec_drw53");

                entity.Property(e => e.RecHlaDtI).HasColumnName("rec_hla_dt_i");

                entity.Property(e => e.RecHlaDtIi).HasColumnName("rec_hla_dt_ii");

                entity.Property(e => e.RecHlaInterpretI).HasColumnName("rec_hla_interpret_i");

                entity.Property(e => e.RecHlaInterpretIi).HasColumnName("rec_hla_interpret_ii");

                entity.Property(e => e.RecHlaInterpretPeakI).HasColumnName("rec_hla_interpret_peak_i");

                entity.Property(e => e.RecHlaInterpretPeakIi).HasColumnName("rec_hla_interpret_peak_ii");

                entity.Property(e => e.RecHlaTypDone)
                    .HasColumnName("rec_hla_typ_done")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecLabCtrCd)
                    .HasColumnName("rec_lab_ctr_cd")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.RecLabCtrCdOrig)
                    .HasColumnName("rec_lab_ctr_cd_orig")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.RecLabCtrTy)
                    .HasColumnName("rec_lab_ctr_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.RecLabCtrTyOrig)
                    .HasColumnName("rec_lab_ctr_ty_orig")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.RecOrigProv)
                    .HasColumnName("rec_orig_prov")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.RecPosAutoXmatch)
                    .HasColumnName("rec_pos_auto_xmatch")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPosAutoXmatchDt).HasColumnName("rec_pos_auto_xmatch_dt");

                entity.Property(e => e.RecPraDtMostRecentI).HasColumnName("rec_pra_dt_most_recent_i");

                entity.Property(e => e.RecPraDtMostRecentIi).HasColumnName("rec_pra_dt_most_recent_ii");

                entity.Property(e => e.RecPraDtPeakI).HasColumnName("rec_pra_dt_peak_i");

                entity.Property(e => e.RecPraDtPeakIi).HasColumnName("rec_pra_dt_peak_ii");

                entity.Property(e => e.RecPraMeasureMostRecentI).HasColumnName("rec_pra_measure_most_recent_i");

                entity.Property(e => e.RecPraMeasureMostRecentIi).HasColumnName("rec_pra_measure_most_recent_ii");

                entity.Property(e => e.RecPraMeasurePeakI).HasColumnName("rec_pra_measure_peak_i");

                entity.Property(e => e.RecPraMeasurePeakIi).HasColumnName("rec_pra_measure_peak_ii");

                entity.Property(e => e.RecPraMostRecent).HasColumnName("rec_pra_most_recent");

                entity.Property(e => e.RecPraMostRecentI).HasColumnName("rec_pra_most_recent_i");

                entity.Property(e => e.RecPraMostRecentIi).HasColumnName("rec_pra_most_recent_ii");

                entity.Property(e => e.RecPraPeak).HasColumnName("rec_pra_peak");

                entity.Property(e => e.RecPraPeakI).HasColumnName("rec_pra_peak_i");

                entity.Property(e => e.RecPraPeakIi).HasColumnName("rec_pra_peak_ii");

                entity.Property(e => e.RecPraTargetMostRecentI).HasColumnName("rec_pra_target_most_recent_i");

                entity.Property(e => e.RecPraTargetMostRecentIi).HasColumnName("rec_pra_target_most_recent_ii");

                entity.Property(e => e.RecPraTargetPeakI).HasColumnName("rec_pra_target_peak_i");

                entity.Property(e => e.RecPraTargetPeakIi).HasColumnName("rec_pra_target_peak_ii");

                entity.Property(e => e.RecPraTechMostRecentI).HasColumnName("rec_pra_tech_most_recent_i");

                entity.Property(e => e.RecPraTechMostRecentIi).HasColumnName("rec_pra_tech_most_recent_ii");

                entity.Property(e => e.RecPraTechPeakI).HasColumnName("rec_pra_tech_peak_i");

                entity.Property(e => e.RecPraTechPeakIi).HasColumnName("rec_pra_tech_peak_ii");

                entity.Property(e => e.RecPraTestDone)
                    .HasColumnName("rec_pra_test_done")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecSeraTestedI)
                    .HasColumnName("rec_sera_tested_i")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecSeraTestedIi)
                    .HasColumnName("rec_sera_tested_ii")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecSerumScreen)
                    .HasColumnName("rec_serum_screen")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecTxDt).HasColumnName("rec_tx_dt");

                entity.Property(e => e.RecTypMethI).HasColumnName("rec_typ_meth_i");

                entity.Property(e => e.RecTypMethIi).HasColumnName("rec_typ_meth_ii");

                entity.Property(e => e.RecXmatchDone)
                    .HasColumnName("rec_xmatch_done")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecXmatchDonePeriod)
                    .HasColumnName("rec_xmatch_done_period")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecXmatchOtherSera)
                    .HasColumnName("rec_xmatch_other_sera")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecXmatchSerumDtMostRecent).HasColumnName("rec_xmatch_serum_dt_most_recent");

                entity.Property(e => e.RecXmatchSerumDtOrig).HasColumnName("rec_xmatch_serum_dt_orig");

                entity.Property(e => e.TCellDone).HasColumnName("t_cell_done");

                entity.Property(e => e.TCellDoneXmatAhg).HasColumnName("t_cell_done_xmat_ahg");

                entity.Property(e => e.TCellDoneXmatFlowCytometry).HasColumnName("t_cell_done_xmat_flow_cytometry");

                entity.Property(e => e.TCellDoneXmatNoAhg).HasColumnName("t_cell_done_xmat_no_ahg");

                entity.Property(e => e.TCellDoneXmatSolidPhase).HasColumnName("t_cell_done_xmat_solid_phase");

                entity.HasOne(d => d.RecHistoTx)
                    .WithOne(p => p.RecHisto)
                    .HasPrincipalKey<TxLi>(p => p.TxId)
                    .HasForeignKey<RecHisto>(d => d.RecHistoTxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rec_histo_rec_histo_tx_id_fkey");
            });

            modelBuilder.Entity<RecHistoXmat>(entity =>
            {
                entity.HasKey(e => e.RecHistoTxId)
                    .HasName("rec_histo_xmat_pkey");

                entity.ToTable("rec_histo_xmat", "tx");

                entity.Property(e => e.RecHistoTxId)
                    .HasColumnName("rec_histo_tx_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.RecCellSourceXmatch).HasColumnName("rec_cell_source_xmatch");

                entity.Property(e => e.RecCellTyXmatch).HasColumnName("rec_cell_ty_xmatch");

                entity.Property(e => e.RecMeasureXmatch).HasColumnName("rec_measure_xmatch");

                entity.Property(e => e.RecResultAutoXmatch).HasColumnName("rec_result_auto_xmatch");

                entity.Property(e => e.RecResultXmatch).HasColumnName("rec_result_xmatch");

                entity.Property(e => e.RecRowNumXmatch).HasColumnName("rec_row_num_xmatch");

                entity.Property(e => e.RecTechXmatch).HasColumnName("rec_tech_xmatch");

                entity.HasOne(d => d.RecHistoTx)
                    .WithOne(p => p.RecHistoXmat)
                    .HasPrincipalKey<TxLi>(p => p.TxId)
                    .HasForeignKey<RecHistoXmat>(d => d.RecHistoTxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("rec_histo_xmat_rec_histo_tx_id_fkey");
            });

            modelBuilder.Entity<StathistLiin>(entity =>
            {
                entity.HasKey(e => e.PxId)
                    .HasName("stathist_liin_pkey");

                entity.ToTable("stathist_liin", "tx");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanGender)
                    .HasColumnName("can_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitActStatCd).HasColumnName("can_init_act_stat_cd");

                entity.Property(e => e.CanInitActStatDt).HasColumnName("can_init_act_stat_dt");

                entity.Property(e => e.CanInitInactStatDt).HasColumnName("can_init_inact_stat_dt");

                entity.Property(e => e.CanInitSrtrLabMeld).HasColumnName("can_init_srtr_lab_meld");

                entity.Property(e => e.CanInitSrtrLabMeldTy)
                    .HasColumnName("can_init_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitStat).HasColumnName("can_init_stat");

                entity.Property(e => e.CanLastActStatDt).HasColumnName("can_last_act_stat_dt");

                entity.Property(e => e.CanLastAlbumin).HasColumnName("can_last_albumin");

                entity.Property(e => e.CanLastAscites).HasColumnName("can_last_ascites");

                entity.Property(e => e.CanLastBili).HasColumnName("can_last_bili");

                entity.Property(e => e.CanLastDialPriorWeek)
                    .HasColumnName("can_last_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastEnceph).HasColumnName("can_last_enceph");

                entity.Property(e => e.CanLastInactStatDt).HasColumnName("can_last_inact_stat_dt");

                entity.Property(e => e.CanLastInr).HasColumnName("can_last_inr");

                entity.Property(e => e.CanLastSerumCreat).HasColumnName("can_last_serum_creat");

                entity.Property(e => e.CanLastSerumSodium).HasColumnName("can_last_serum_sodium");

                entity.Property(e => e.CanLastSrtrLabMeld).HasColumnName("can_last_srtr_lab_meld");

                entity.Property(e => e.CanLastSrtrLabMeldTy)
                    .HasColumnName("can_last_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastStat).HasColumnName("can_last_stat");

                entity.Property(e => e.CanListingDt).HasColumnName("can_listing_dt");

                entity.Property(e => e.CanRemCd).HasColumnName("can_rem_cd");

                entity.Property(e => e.CanRemDt).HasColumnName("can_rem_dt");

                entity.Property(e => e.CanSource)
                    .HasColumnName("can_source")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxAlbumin).HasColumnName("canhx_albumin");

                entity.Property(e => e.CanhxAlbuminBound).HasColumnName("canhx_albumin_bound");

                entity.Property(e => e.CanhxAscites).HasColumnName("canhx_ascites");

                entity.Property(e => e.CanhxBeginDt).HasColumnName("canhx_begin_dt");

                entity.Property(e => e.CanhxBeginDtTm).HasColumnName("canhx_begin_dt_tm");

                entity.Property(e => e.CanhxBili).HasColumnName("canhx_bili");

                entity.Property(e => e.CanhxBiliBound).HasColumnName("canhx_bili_bound");

                entity.Property(e => e.CanhxBiliPpc).HasColumnName("canhx_bili_ppc");

                entity.Property(e => e.CanhxCreatBound).HasColumnName("canhx_creat_bound");

                entity.Property(e => e.CanhxDialPriorWeek)
                    .HasColumnName("canhx_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxEnceph).HasColumnName("canhx_enceph");

                entity.Property(e => e.CanhxEndDt).HasColumnName("canhx_end_dt");

                entity.Property(e => e.CanhxEndDtTm).HasColumnName("canhx_end_dt_tm");

                entity.Property(e => e.CanhxExcDiagHcc1).HasColumnName("canhx_exc_diag_hcc1");

                entity.Property(e => e.CanhxExcDiagHcc2).HasColumnName("canhx_exc_diag_hcc2");

                entity.Property(e => e.CanhxExcDiagHccNopolicy).HasColumnName("canhx_exc_diag_hcc_nopolicy");

                entity.Property(e => e.CanhxExcDiagOther).HasColumnName("canhx_exc_diag_other");

                entity.Property(e => e.CanhxExcFlg).HasColumnName("canhx_exc_flg");

                entity.Property(e => e.CanhxExcScore).HasColumnName("canhx_exc_score");

                entity.Property(e => e.CanhxGrowthFail).HasColumnName("canhx_growth_fail");

                entity.Property(e => e.CanhxHgtCm).HasColumnName("canhx_hgt_cm");

                entity.Property(e => e.CanhxInr).HasColumnName("canhx_inr");

                entity.Property(e => e.CanhxInrBound).HasColumnName("canhx_inr_bound");

                entity.Property(e => e.CanhxKeepPedStatFlg).HasColumnName("canhx_keep_ped_stat_flg");

                entity.Property(e => e.CanhxMeldDiffReasonCd).HasColumnName("canhx_meld_diff_reason_cd");

                entity.Property(e => e.CanhxOptnLabMeld).HasColumnName("canhx_optn_lab_meld");

                entity.Property(e => e.CanhxOptnLabMeldTy)
                    .HasColumnName("canhx_optn_lab_meld_ty")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.CanhxPrevLowerMeldScore).HasColumnName("canhx_prev_lower_meld_score");

                entity.Property(e => e.CanhxReasonStatInact).HasColumnName("canhx_reason_stat_inact");

                entity.Property(e => e.CanhxScoreMissing).HasColumnName("canhx_score_missing");

                entity.Property(e => e.CanhxSerumCreat).HasColumnName("canhx_serum_creat");

                entity.Property(e => e.CanhxSerumSodium).HasColumnName("canhx_serum_sodium");

                entity.Property(e => e.CanhxSrtrLabMeld).HasColumnName("canhx_srtr_lab_meld");

                entity.Property(e => e.CanhxSrtrLabMeldTy)
                    .HasColumnName("canhx_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxStatCd).HasColumnName("canhx_stat_cd");

                entity.Property(e => e.CanhxWgtKg).HasColumnName("canhx_wgt_kg");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");

                entity.HasOne(d => d.Px)
                    .WithOne(p => p.StathistLiin)
                    .HasForeignKey<StathistLiin>(d => d.PxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("stathist_liin_px_id_fkey");
            });

            modelBuilder.Entity<StatjustLi1>(entity =>
            {
                entity.HasKey(e => e.PxId)
                    .HasName("statjust_li1_pkey");

                entity.ToTable("statjust_li1", "tx");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanListingCtrId).HasColumnName("can_listing_ctr_id");

                entity.Property(e => e.CanReg2LastTxDt).HasColumnName("can_reg2_last_tx_dt");

                entity.Property(e => e.CanhxAgeGroup)
                    .HasColumnName("canhx_age_group")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxAlbumin).HasColumnName("canhx_albumin");

                entity.Property(e => e.CanhxAlbuminDt).HasColumnName("canhx_albumin_dt");

                entity.Property(e => e.CanhxAscites).HasColumnName("canhx_ascites");

                entity.Property(e => e.CanhxAscitesDt).HasColumnName("canhx_ascites_dt");

                entity.Property(e => e.CanhxBili).HasColumnName("canhx_bili");

                entity.Property(e => e.CanhxBiliDt).HasColumnName("canhx_bili_dt");

                entity.Property(e => e.CanhxBiliPpc).HasColumnName("canhx_bili_ppc");

                entity.Property(e => e.CanhxBiliPpcDt).HasColumnName("canhx_bili_ppc_dt");

                entity.Property(e => e.CanhxBiliarySepsis).HasColumnName("canhx_biliary_sepsis");

                entity.Property(e => e.CanhxChgDt).HasColumnName("canhx_chg_dt");

                entity.Property(e => e.CanhxCritNotMet).HasColumnName("canhx_crit_not_met");

                entity.Property(e => e.CanhxDgn)
                    .HasColumnName("canhx_dgn")
                    .HasColumnType("character varying(100)");

                entity.Property(e => e.CanhxDialPriorWeek)
                    .HasColumnName("canhx_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxEnceph).HasColumnName("canhx_enceph");

                entity.Property(e => e.CanhxEncephDt).HasColumnName("canhx_enceph_dt");

                entity.Property(e => e.CanhxEncephOnset).HasColumnName("canhx_enceph_onset");

                entity.Property(e => e.CanhxFormStat).HasColumnName("canhx_form_stat");

                entity.Property(e => e.CanhxFulminantFail).HasColumnName("canhx_fulminant_fail");

                entity.Property(e => e.CanhxGiBleeding).HasColumnName("canhx_gi_bleeding");

                entity.Property(e => e.CanhxHepren).HasColumnName("canhx_hepren");

                entity.Property(e => e.CanhxHgtCm).HasColumnName("canhx_hgt_cm");

                entity.Property(e => e.CanhxHospName)
                    .HasColumnName("canhx_hosp_name")
                    .HasColumnType("character varying(35)");

                entity.Property(e => e.CanhxIcu).HasColumnName("canhx_icu");

                entity.Property(e => e.CanhxInitForm).HasColumnName("canhx_init_form");

                entity.Property(e => e.CanhxInr).HasColumnName("canhx_inr");

                entity.Property(e => e.CanhxInrDt).HasColumnName("canhx_inr_dt");

                entity.Property(e => e.CanhxNonMetastHepblast).HasColumnName("canhx_non_metast_hepblast");

                entity.Property(e => e.CanhxOtc).HasColumnName("canhx_otc");

                entity.Property(e => e.CanhxOtcNohosp).HasColumnName("canhx_otc_nohosp");

                entity.Property(e => e.CanhxPeldHgtDt).HasColumnName("canhx_peld_hgt_dt");

                entity.Property(e => e.CanhxPeldWgtDt).HasColumnName("canhx_peld_wgt_dt");

                entity.Property(e => e.CanhxPrimeNonfunctn).HasColumnName("canhx_prime_nonfunctn");

                entity.Property(e => e.CanhxProthrom).HasColumnName("canhx_prothrom");

                entity.Property(e => e.CanhxProthromDt).HasColumnName("canhx_prothrom_dt");

                entity.Property(e => e.CanhxPxTxCtr).HasColumnName("canhx_px_tx_ctr");

                entity.Property(e => e.CanhxRahh).HasColumnName("canhx_rahh");

                entity.Property(e => e.CanhxRahhParNutr).HasColumnName("canhx_rahh_par_nutr");

                entity.Property(e => e.CanhxRahhParacent).HasColumnName("canhx_rahh_paracent");

                entity.Property(e => e.CanhxRahhSuplO2).HasColumnName("canhx_rahh_supl_o2");

                entity.Property(e => e.CanhxRahhTubeFeed).HasColumnName("canhx_rahh_tube_feed");

                entity.Property(e => e.CanhxRahhUnresponDiuretics).HasColumnName("canhx_rahh_unrespon_diuretics");

                entity.Property(e => e.CanhxSerumCreat).HasColumnName("canhx_serum_creat");

                entity.Property(e => e.CanhxSerumCreatDt).HasColumnName("canhx_serum_creat_dt");

                entity.Property(e => e.CanhxStatCd).HasColumnName("canhx_stat_cd");

                entity.Property(e => e.CanhxStatTy).HasColumnName("canhx_stat_ty");

                entity.Property(e => e.CanhxUrineOsmol).HasColumnName("canhx_urine_osmol");

                entity.Property(e => e.CanhxUrineSodium).HasColumnName("canhx_urine_sodium");

                entity.Property(e => e.CanhxUrineVol).HasColumnName("canhx_urine_vol");

                entity.Property(e => e.CanhxVentilator).HasColumnName("canhx_ventilator");

                entity.Property(e => e.CanhxWgtKg).HasColumnName("canhx_wgt_kg");

                entity.Property(e => e.CanhxWilsons).HasColumnName("canhx_wilsons");

                entity.Property(e => e.RecTxDt).HasColumnName("rec_tx_dt");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");

                entity.HasOne(d => d.CanListingCtr)
                    .WithMany(p => p.StatjustLi1)
                    .HasForeignKey(d => d.CanListingCtrId)
                    .HasConstraintName("statjust_li1_can_listing_ctr_id_fkey");

                entity.HasOne(d => d.Px)
                    .WithOne(p => p.StatjustLi1)
                    .HasForeignKey<StatjustLi1>(d => d.PxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("statjust_li1_px_id_fkey");
            });

            modelBuilder.Entity<StatjustLi2a>(entity =>
            {
                entity.HasKey(e => e.PxId)
                    .HasName("statjust_li2a_pkey");

                entity.ToTable("statjust_li2a", "tx");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanListingCtrId).HasColumnName("can_listing_ctr_id");

                entity.Property(e => e.CanhxAgeGroup)
                    .HasColumnName("canhx_age_group")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxAlbumin).HasColumnName("canhx_albumin");

                entity.Property(e => e.CanhxAlbuminDt).HasColumnName("canhx_albumin_dt");

                entity.Property(e => e.CanhxAscites).HasColumnName("canhx_ascites");

                entity.Property(e => e.CanhxAscitesDt).HasColumnName("canhx_ascites_dt");

                entity.Property(e => e.CanhxBili).HasColumnName("canhx_bili");

                entity.Property(e => e.CanhxBiliDt).HasColumnName("canhx_bili_dt");

                entity.Property(e => e.CanhxChgDt).HasColumnName("canhx_chg_dt");

                entity.Property(e => e.CanhxCritNotMet).HasColumnName("canhx_crit_not_met");

                entity.Property(e => e.CanhxCtpScore).HasColumnName("canhx_ctp_score");

                entity.Property(e => e.CanhxDgn)
                    .HasColumnName("canhx_dgn")
                    .HasColumnType("character varying(55)");

                entity.Property(e => e.CanhxEnceph).HasColumnName("canhx_enceph");

                entity.Property(e => e.CanhxEncephDt).HasColumnName("canhx_enceph_dt");

                entity.Property(e => e.CanhxEncephUnrespon).HasColumnName("canhx_enceph_unrespon");

                entity.Property(e => e.CanhxFormStat).HasColumnName("canhx_form_stat");

                entity.Property(e => e.CanhxHepren).HasColumnName("canhx_hepren");

                entity.Property(e => e.CanhxHospLocUnit)
                    .HasColumnName("canhx_hosp_loc_unit")
                    .HasColumnType("character varying(40)");

                entity.Property(e => e.CanhxInitForm).HasColumnName("canhx_init_form");

                entity.Property(e => e.CanhxInr).HasColumnName("canhx_inr");

                entity.Property(e => e.CanhxInrDt).HasColumnName("canhx_inr_dt");

                entity.Property(e => e.CanhxLifeExpectLt7days).HasColumnName("canhx_life_expect_lt7days");

                entity.Property(e => e.CanhxOtherDisease).HasColumnName("canhx_other_disease");

                entity.Property(e => e.CanhxOtherDiseaseDt).HasColumnName("canhx_other_disease_dt");

                entity.Property(e => e.CanhxProthrom).HasColumnName("canhx_prothrom");

                entity.Property(e => e.CanhxProthromDt).HasColumnName("canhx_prothrom_dt");

                entity.Property(e => e.CanhxPxTxCtr).HasColumnName("canhx_px_tx_ctr");

                entity.Property(e => e.CanhxRahh).HasColumnName("canhx_rahh");

                entity.Property(e => e.CanhxStatCd).HasColumnName("canhx_stat_cd");

                entity.Property(e => e.CanhxStatTy).HasColumnName("canhx_stat_ty");

                entity.Property(e => e.CanhxUnrespon).HasColumnName("canhx_unrespon");

                entity.Property(e => e.CanhxUrineOsmol).HasColumnName("canhx_urine_osmol");

                entity.Property(e => e.CanhxUrineSodium).HasColumnName("canhx_urine_sodium");

                entity.Property(e => e.CanhxUrineVol).HasColumnName("canhx_urine_vol");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");

                entity.HasOne(d => d.CanListingCtr)
                    .WithMany(p => p.StatjustLi2a)
                    .HasForeignKey(d => d.CanListingCtrId)
                    .HasConstraintName("statjust_li2a_can_listing_ctr_id_fkey");

                entity.HasOne(d => d.Px)
                    .WithOne(p => p.StatjustLi2a)
                    .HasForeignKey<StatjustLi2a>(d => d.PxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("statjust_li2a_px_id_fkey");
            });

            modelBuilder.Entity<StatjustLi2b>(entity =>
            {
                entity.HasKey(e => e.PxId)
                    .HasName("statjust_li2b_pkey");

                entity.ToTable("statjust_li2b", "tx");

                entity.Property(e => e.PxId)
                    .HasColumnName("px_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanListingCtrId).HasColumnName("can_listing_ctr_id");

                entity.Property(e => e.Canhx3CritMet).HasColumnName("canhx_3_crit_met");

                entity.Property(e => e.CanhxAgeGroup)
                    .HasColumnName("canhx_age_group")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanhxAlbumin).HasColumnName("canhx_albumin");

                entity.Property(e => e.CanhxAlbuminDt).HasColumnName("canhx_albumin_dt");

                entity.Property(e => e.CanhxAlbuminLt3).HasColumnName("canhx_albumin_lt3");

                entity.Property(e => e.CanhxAscites).HasColumnName("canhx_ascites");

                entity.Property(e => e.CanhxAscitesDt).HasColumnName("canhx_ascites_dt");

                entity.Property(e => e.CanhxAscitesRequireDiuretics).HasColumnName("canhx_ascites_require_diuretics");

                entity.Property(e => e.CanhxBili).HasColumnName("canhx_bili");

                entity.Property(e => e.CanhxBiliDt).HasColumnName("canhx_bili_dt");

                entity.Property(e => e.CanhxBiliGt4).HasColumnName("canhx_bili_gt4");

                entity.Property(e => e.CanhxChgDt).HasColumnName("canhx_chg_dt");

                entity.Property(e => e.CanhxCritNotMet).HasColumnName("canhx_crit_not_met");

                entity.Property(e => e.CanhxCtpScore).HasColumnName("canhx_ctp_score");

                entity.Property(e => e.CanhxDgn)
                    .HasColumnName("canhx_dgn")
                    .HasColumnType("character varying(55)");

                entity.Property(e => e.CanhxEnceph).HasColumnName("canhx_enceph");

                entity.Property(e => e.CanhxEncephDt).HasColumnName("canhx_enceph_dt");

                entity.Property(e => e.CanhxFormStat).HasColumnName("canhx_form_stat");

                entity.Property(e => e.CanhxGrowthFail).HasColumnName("canhx_growth_fail");

                entity.Property(e => e.CanhxHccDgn)
                    .HasColumnName("canhx_hcc_dgn")
                    .HasColumnType("character varying(55)");

                entity.Property(e => e.CanhxHccMedCrit1).HasColumnName("canhx_hcc_med_crit1");

                entity.Property(e => e.CanhxHccMedCrit2).HasColumnName("canhx_hcc_med_crit2");

                entity.Property(e => e.CanhxHccMedCrit3).HasColumnName("canhx_hcc_med_crit3");

                entity.Property(e => e.CanhxHepren).HasColumnName("canhx_hepren");

                entity.Property(e => e.CanhxInitForm).HasColumnName("canhx_init_form");

                entity.Property(e => e.CanhxInr).HasColumnName("canhx_inr");

                entity.Property(e => e.CanhxInrDt).HasColumnName("canhx_inr_dt");

                entity.Property(e => e.CanhxInrGt1).HasColumnName("canhx_inr_gt1");

                entity.Property(e => e.CanhxMalnutr).HasColumnName("canhx_malnutr");

                entity.Property(e => e.CanhxOtc).HasColumnName("canhx_otc");

                entity.Property(e => e.CanhxOtherDisease).HasColumnName("canhx_other_disease");

                entity.Property(e => e.CanhxOtherDiseaseDt).HasColumnName("canhx_other_disease_dt");

                entity.Property(e => e.CanhxProthrom).HasColumnName("canhx_prothrom");

                entity.Property(e => e.CanhxProthromDt).HasColumnName("canhx_prothrom_dt");

                entity.Property(e => e.CanhxRahh).HasColumnName("canhx_rahh");

                entity.Property(e => e.CanhxRahhParNutr).HasColumnName("canhx_rahh_par_nutr");

                entity.Property(e => e.CanhxRahhParacent).HasColumnName("canhx_rahh_paracent");

                entity.Property(e => e.CanhxRahhUnresponDiuretics).HasColumnName("canhx_rahh_unrespon_diuretics");

                entity.Property(e => e.CanhxRecurCholangitis).HasColumnName("canhx_recur_cholangitis");

                entity.Property(e => e.CanhxSbp).HasColumnName("canhx_sbp");

                entity.Property(e => e.CanhxSbpPosBacteria).HasColumnName("canhx_sbp_pos_bacteria");

                entity.Property(e => e.CanhxSbpPosCult).HasColumnName("canhx_sbp_pos_cult");

                entity.Property(e => e.CanhxSbpWhiteBlood).HasColumnName("canhx_sbp_white_blood");

                entity.Property(e => e.CanhxStatCd).HasColumnName("canhx_stat_cd");

                entity.Property(e => e.CanhxStatTy).HasColumnName("canhx_stat_ty");

                entity.Property(e => e.CanhxUnrespon).HasColumnName("canhx_unrespon");

                entity.Property(e => e.CanhxUrineOsmol).HasColumnName("canhx_urine_osmol");

                entity.Property(e => e.CanhxUrineSodium).HasColumnName("canhx_urine_sodium");

                entity.Property(e => e.CanhxUrineVol).HasColumnName("canhx_urine_vol");

                entity.Property(e => e.WlOrg)
                    .HasColumnName("wl_org")
                    .HasColumnType("character varying(4)");

                entity.HasOne(d => d.CanListingCtr)
                    .WithMany(p => p.StatjustLi2b)
                    .HasForeignKey(d => d.CanListingCtrId)
                    .HasConstraintName("statjust_li2b_can_listing_ctr_id_fkey");

                entity.HasOne(d => d.Px)
                    .WithOne(p => p.StatjustLi2b)
                    .HasForeignKey<StatjustLi2b>(d => d.PxId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("statjust_li2b_px_id_fkey");
            });

            modelBuilder.Entity<Treatment>(entity =>
            {
                entity.HasKey(e => e.MaligId)
                    .HasName("treatment_pkey");

                entity.ToTable("treatment", "tx");

                entity.Property(e => e.MaligId)
                    .HasColumnName("malig_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.MalPostxBestresp)
                    .HasColumnName("mal_postx_bestresp")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.MalPostxChemo).HasColumnName("mal_postx_chemo");

                entity.Property(e => e.MalPostxChemoTy).HasColumnName("mal_postx_chemo_ty");

                entity.Property(e => e.MalPostxCryo).HasColumnName("mal_postx_cryo");

                entity.Property(e => e.MalPostxDgnDt).HasColumnName("mal_postx_dgn_dt");

                entity.Property(e => e.MalPostxImmuno).HasColumnName("mal_postx_immuno");

                entity.Property(e => e.MalPostxImmunoStat).HasColumnName("mal_postx_immuno_stat");

                entity.Property(e => e.MalPostxImmunoTy).HasColumnName("mal_postx_immuno_ty");

                entity.Property(e => e.MalPostxRadiat).HasColumnName("mal_postx_radiat");

                entity.Property(e => e.MalPostxSiteAdjOrg).HasColumnName("mal_postx_site_adj_org");

                entity.Property(e => e.MalPostxSiteDistMetast).HasColumnName("mal_postx_site_dist_metast");

                entity.Property(e => e.MalPostxSiteLymph).HasColumnName("mal_postx_site_lymph");

                entity.Property(e => e.MalPostxSitePrimeOrg).HasColumnName("mal_postx_site_prime_org");

                entity.Property(e => e.MalPostxSurg).HasColumnName("mal_postx_surg");

                entity.Property(e => e.MalPostxSurgTy).HasColumnName("mal_postx_surg_ty");

                entity.Property(e => e.MalPostxTumorTy).HasColumnName("mal_postx_tumor_ty");

                entity.Property(e => e.TrrFolId).HasColumnName("trr_fol_id");

                entity.HasOne(d => d.Malig)
                    .WithOne(p => p.Treatment)
                    .HasForeignKey<Treatment>(d => d.MaligId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("treatment_malig_id_fkey");

                entity.HasOne(d => d.TrrFol)
                    .WithMany(p => p.Treatment)
                    .HasForeignKey(d => d.TrrFolId)
                    .HasConstraintName("treatment_trr_fol_id_fkey");
            });

            modelBuilder.Entity<TxLi>(entity =>
            {
                entity.HasKey(e => new { e.TxId, e.TrrId })
                    .HasName("tx_li_pkey");

                entity.ToTable("tx_li", "tx");

                entity.HasIndex(e => e.TrrId)
                    .HasName("tx_li_trr_id_key")
                    .IsUnique();

                entity.HasIndex(e => e.TxId)
                    .HasName("tx_li_tx_id_key")
                    .IsUnique();

                entity.Property(e => e.TxId).HasColumnName("tx_id");

                entity.Property(e => e.TrrId).HasColumnName("trr_id");

                entity.Property(e => e.CanAbo)
                    .HasColumnName("can_abo")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.CanAgeAtListing).HasColumnName("can_age_at_listing");

                entity.Property(e => e.CanAgeInMonthsAtListing).HasColumnName("can_age_in_months_at_listing");

                entity.Property(e => e.CanAngina).HasColumnName("can_angina");

                entity.Property(e => e.CanAnginaCad).HasColumnName("can_angina_cad");

                entity.Property(e => e.CanBacteriaPerit)
                    .HasColumnName("can_bacteria_perit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanCerebVasc)
                    .HasColumnName("can_cereb_vasc")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanCitizenship).HasColumnName("can_citizenship");

                entity.Property(e => e.CanDgn).HasColumnName("can_dgn");

                entity.Property(e => e.CanDgn2).HasColumnName("can_dgn2");

                entity.Property(e => e.CanDiab).HasColumnName("can_diab");

                entity.Property(e => e.CanDiabTy).HasColumnName("can_diab_ty");

                entity.Property(e => e.CanDrugTreatCopd)
                    .HasColumnName("can_drug_treat_copd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanDrugTreatHyperten)
                    .HasColumnName("can_drug_treat_hyperten")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanEducation).HasColumnName("can_education");

                entity.Property(e => e.CanEthnicitySrtr)
                    .HasColumnName("can_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanGender)
                    .HasColumnName("can_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanHgtCm).HasColumnName("can_hgt_cm");

                entity.Property(e => e.CanInitActStatCd).HasColumnName("can_init_act_stat_cd");

                entity.Property(e => e.CanInitActStatDt).HasColumnName("can_init_act_stat_dt");

                entity.Property(e => e.CanInitInactStatDt).HasColumnName("can_init_inact_stat_dt");

                entity.Property(e => e.CanInitSrtrLabMeld).HasColumnName("can_init_srtr_lab_meld");

                entity.Property(e => e.CanInitSrtrLabMeldTy)
                    .HasColumnName("can_init_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanInitStat).HasColumnName("can_init_stat");

                entity.Property(e => e.CanLastActStatDt).HasColumnName("can_last_act_stat_dt");

                entity.Property(e => e.CanLastAlbumin).HasColumnName("can_last_albumin");

                entity.Property(e => e.CanLastAscites).HasColumnName("can_last_ascites");

                entity.Property(e => e.CanLastBili).HasColumnName("can_last_bili");

                entity.Property(e => e.CanLastDialPriorWeek)
                    .HasColumnName("can_last_dial_prior_week")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastEnceph).HasColumnName("can_last_enceph");

                entity.Property(e => e.CanLastInactStatDt).HasColumnName("can_last_inact_stat_dt");

                entity.Property(e => e.CanLastInr).HasColumnName("can_last_inr");

                entity.Property(e => e.CanLastSerumCreat).HasColumnName("can_last_serum_creat");

                entity.Property(e => e.CanLastSerumSodium).HasColumnName("can_last_serum_sodium");

                entity.Property(e => e.CanLastSrtrLabMeld).HasColumnName("can_last_srtr_lab_meld");

                entity.Property(e => e.CanLastSrtrLabMeldTy)
                    .HasColumnName("can_last_srtr_lab_meld_ty")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanLastStat).HasColumnName("can_last_stat");

                entity.Property(e => e.CanListingDt).HasColumnName("can_listing_dt");

                entity.Property(e => e.CanMalig)
                    .HasColumnName("can_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.CanPepticUlcer).HasColumnName("can_peptic_ulcer");

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

                entity.Property(e => e.CanRace).HasColumnName("can_race");

                entity.Property(e => e.CanRaceSrtr)
                    .HasColumnName("can_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.CanRemCd).HasColumnName("can_rem_cd");

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

                entity.Property(e => e.DonA1).HasColumnName("don_a1");

                entity.Property(e => e.DonA2).HasColumnName("don_a2");

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

                entity.Property(e => e.DonB1).HasColumnName("don_b1");

                entity.Property(e => e.DonB2).HasColumnName("don_b2");

                entity.Property(e => e.DonCadDonCod).HasColumnName("don_cad_don_cod");

                entity.Property(e => e.DonCardiacArrestAfterDeath)
                    .HasColumnName("don_cardiac_arrest_after_death")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonCitizenship).HasColumnName("don_citizenship");

                entity.Property(e => e.DonCmvIgg)
                    .HasColumnName("don_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.DonCodDonStroke).HasColumnName("don_cod_don_stroke");

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

                entity.Property(e => e.DonDeathCircum).HasColumnName("don_death_circum");

                entity.Property(e => e.DonDeathMech).HasColumnName("don_death_mech");

                entity.Property(e => e.DonDobutamine)
                    .HasColumnName("don_dobutamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDopamine)
                    .HasColumnName("don_dopamine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonDr1).HasColumnName("don_dr1");

                entity.Property(e => e.DonDr2).HasColumnName("don_dr2");

                entity.Property(e => e.DonEthnicitySrtr)
                    .HasColumnName("don_ethnicity_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonExpandDonKi).HasColumnName("don_expand_don_ki");

                entity.Property(e => e.DonGender)
                    .HasColumnName("don_gender")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHaploTyMatch).HasColumnName("don_haplo_ty_match");

                entity.Property(e => e.DonHgtCm).HasColumnName("don_hgt_cm");

                entity.Property(e => e.DonHighCreat).HasColumnName("don_high_creat");

                entity.Property(e => e.DonHistCancer).HasColumnName("don_hist_cancer");

                entity.Property(e => e.DonHistCigaretteGt20Pkyr)
                    .HasColumnName("don_hist_cigarette_gt20_pkyr")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistCocaine)
                    .HasColumnName("don_hist_cocaine")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistDiab).HasColumnName("don_hist_diab");

                entity.Property(e => e.DonHistHyperten).HasColumnName("don_hist_hyperten");

                entity.Property(e => e.DonHistIvDrug)
                    .HasColumnName("don_hist_iv_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHistOtherDrug)
                    .HasColumnName("don_hist_other_drug")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonHtn).HasColumnName("don_htn");

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

                entity.Property(e => e.DonLivingDonCod).HasColumnName("don_living_don_cod");

                entity.Property(e => e.DonMeetCdcHighRisk)
                    .HasColumnName("don_meet_cdc_high_risk")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonNonHrBeat)
                    .HasColumnName("don_non_hr_beat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonOpoCtrId).HasColumnName("don_opo_ctr_id");

                entity.Property(e => e.DonOrgShared).HasColumnName("don_org_shared");

                entity.Property(e => e.DonPh).HasColumnName("don_ph");

                entity.Property(e => e.DonPrerecovDiuretics)
                    .HasColumnName("don_prerecov_diuretics")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.DonRace).HasColumnName("don_race");

                entity.Property(e => e.DonRaceSrtr)
                    .HasColumnName("don_race_srtr")
                    .HasColumnType("character varying(10)");

                entity.Property(e => e.DonRecovDt).HasColumnName("don_recov_dt");

                entity.Property(e => e.DonRelationshipTy).HasColumnName("don_relationship_ty");

                entity.Property(e => e.DonSgot).HasColumnName("don_sgot");

                entity.Property(e => e.DonSgotPreop).HasColumnName("don_sgot_preop");

                entity.Property(e => e.DonSgptPreop).HasColumnName("don_sgpt_preop");

                entity.Property(e => e.DonTy)
                    .HasColumnName("don_ty")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.DonWarmIschTmMins).HasColumnName("don_warm_isch_tm_mins");

                entity.Property(e => e.DonWgtKg).HasColumnName("don_wgt_kg");

                entity.Property(e => e.DonorId).HasColumnName("donor_id");

                entity.Property(e => e.DonorIdVessel).HasColumnName("donor_id_vessel");

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.OrgTy)
                    .HasColumnName("org_ty")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.PersId).HasColumnName("pers_id");

                entity.Property(e => e.PersOptnCod).HasColumnName("pers_optn_cod");

                entity.Property(e => e.PersOptnDeathDt).HasColumnName("pers_optn_death_dt");

                entity.Property(e => e.PersRelist).HasColumnName("pers_relist");

                entity.Property(e => e.PersRestrictDeathDt).HasColumnName("pers_restrict_death_dt");

                entity.Property(e => e.PersRestrictDeathVrfy)
                    .HasColumnName("pers_restrict_death_vrfy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.PersRetx).HasColumnName("pers_retx");

                entity.Property(e => e.PersRetxTrrId).HasColumnName("pers_retx_trr_id");

                entity.Property(e => e.PersSsaDeathDt).HasColumnName("pers_ssa_death_dt");

                entity.Property(e => e.PxId).HasColumnName("px_id");

                entity.Property(e => e.RecA1).HasColumnName("rec_a1");

                entity.Property(e => e.RecA2).HasColumnName("rec_a2");

                entity.Property(e => e.RecAMmEquivCur).HasColumnName("rec_a_mm_equiv_cur");

                entity.Property(e => e.RecAMmEquivTx).HasColumnName("rec_a_mm_equiv_tx");

                entity.Property(e => e.RecAcademicLevel).HasColumnName("rec_academic_level");

                entity.Property(e => e.RecAcademicProgress).HasColumnName("rec_academic_progress");

                entity.Property(e => e.RecAcuteRejBiopsyConfirmed).HasColumnName("rec_acute_rej_biopsy_confirmed");

                entity.Property(e => e.RecAcuteRejEpisode).HasColumnName("rec_acute_rej_episode");

                entity.Property(e => e.RecAdmissionDt).HasColumnName("rec_admission_dt");

                entity.Property(e => e.RecAgeAtTx).HasColumnName("rec_age_at_tx");

                entity.Property(e => e.RecAgeInMonthsAtTx).HasColumnName("rec_age_in_months_at_tx");

                entity.Property(e => e.RecAntivrlTherapy)
                    .HasColumnName("rec_antivrl_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecAntivrlTherapyTy).HasColumnName("rec_antivrl_therapy_ty");

                entity.Property(e => e.RecAntivrlTherapyTyAcyclovir).HasColumnName("rec_antivrl_therapy_ty_acyclovir");

                entity.Property(e => e.RecAntivrlTherapyTyCytogam).HasColumnName("rec_antivrl_therapy_ty_cytogam");

                entity.Property(e => e.RecAntivrlTherapyTyCytovene).HasColumnName("rec_antivrl_therapy_ty_cytovene");

                entity.Property(e => e.RecAntivrlTherapyTyEpivir).HasColumnName("rec_antivrl_therapy_ty_epivir");

                entity.Property(e => e.RecAntivrlTherapyTyFluVac).HasColumnName("rec_antivrl_therapy_ty_flu_vac");

                entity.Property(e => e.RecAntivrlTherapyTyGamimune).HasColumnName("rec_antivrl_therapy_ty_gamimune");

                entity.Property(e => e.RecAntivrlTherapyTyGammagard).HasColumnName("rec_antivrl_therapy_ty_gammagard");

                entity.Property(e => e.RecAntivrlTherapyTyHbig).HasColumnName("rec_antivrl_therapy_ty_hbig");

                entity.Property(e => e.RecAntivrlTherapyTyOther).HasColumnName("rec_antivrl_therapy_ty_other");

                entity.Property(e => e.RecAntivrlTherapyTyValcyte).HasColumnName("rec_antivrl_therapy_ty_valcyte");

                entity.Property(e => e.RecAntivrlTherapyTyValtrex).HasColumnName("rec_antivrl_therapy_ty_valtrex");

                entity.Property(e => e.RecArtificialLi).HasColumnName("rec_artificial_li");

                entity.Property(e => e.RecAscites)
                    .HasColumnName("rec_ascites")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecB1).HasColumnName("rec_b1");

                entity.Property(e => e.RecB2).HasColumnName("rec_b2");

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

                entity.Property(e => e.RecCod).HasColumnName("rec_cod");

                entity.Property(e => e.RecCod2).HasColumnName("rec_cod2");

                entity.Property(e => e.RecCod3).HasColumnName("rec_cod3");

                entity.Property(e => e.RecCognitiveDevelop).HasColumnName("rec_cognitive_develop");

                entity.Property(e => e.RecColdIschTm).HasColumnName("rec_cold_isch_tm");

                entity.Property(e => e.RecCtrId).HasColumnName("rec_ctr_id");

                entity.Property(e => e.RecCurCtrId).HasColumnName("rec_cur_ctr_id");

                entity.Property(e => e.RecCurPxStat)
                    .HasColumnName("rec_cur_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecDgn).HasColumnName("rec_dgn");

                entity.Property(e => e.RecDgn2).HasColumnName("rec_dgn2");

                entity.Property(e => e.RecDgnOstxt)
                    .HasColumnName("rec_dgn_ostxt")
                    .HasColumnType("character varying(50)");

                entity.Property(e => e.RecDischrgAlbumin).HasColumnName("rec_dischrg_albumin");

                entity.Property(e => e.RecDischrgAlkphos).HasColumnName("rec_dischrg_alkphos");

                entity.Property(e => e.RecDischrgCreat).HasColumnName("rec_dischrg_creat");

                entity.Property(e => e.RecDischrgDt).HasColumnName("rec_dischrg_dt");

                entity.Property(e => e.RecDischrgInr).HasColumnName("rec_dischrg_inr");

                entity.Property(e => e.RecDischrgLabDt).HasColumnName("rec_dischrg_lab_dt");

                entity.Property(e => e.RecDischrgSgot).HasColumnName("rec_dischrg_sgot");

                entity.Property(e => e.RecDischrgSgpt).HasColumnName("rec_dischrg_sgpt");

                entity.Property(e => e.RecDr1).HasColumnName("rec_dr1");

                entity.Property(e => e.RecDr2).HasColumnName("rec_dr2");

                entity.Property(e => e.RecDrMmEquivCur).HasColumnName("rec_dr_mm_equiv_cur");

                entity.Property(e => e.RecDrMmEquivTx).HasColumnName("rec_dr_mm_equiv_tx");

                entity.Property(e => e.RecEbvStat)
                    .HasColumnName("rec_ebv_stat")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecEmplStatPre04).HasColumnName("rec_empl_stat_pre04");

                entity.Property(e => e.RecFailBiliary)
                    .HasColumnName("rec_fail_biliary")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecFailDt).HasColumnName("rec_fail_dt");

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

                entity.Property(e => e.RecFunctnStat).HasColumnName("rec_functn_stat");

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

                entity.Property(e => e.RecHgtWgtDt).HasColumnName("rec_hgt_wgt_dt");

                entity.Property(e => e.RecHistoTxId).HasColumnName("rec_histo_tx_id");

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

                entity.Property(e => e.RecLiTy).HasColumnName("rec_li_ty");

                entity.Property(e => e.RecLifeSupport)
                    .HasColumnName("rec_life_support")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecLifeSupportOther).HasColumnName("rec_life_support_other");

                entity.Property(e => e.RecMalig)
                    .HasColumnName("rec_malig")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecMaligTy).HasColumnName("rec_malig_ty");

                entity.Property(e => e.RecMaligTyBreast).HasColumnName("rec_malig_ty_breast");

                entity.Property(e => e.RecMaligTyCnsTumor).HasColumnName("rec_malig_ty_cns_tumor");

                entity.Property(e => e.RecMaligTyGenitourinary).HasColumnName("rec_malig_ty_genitourinary");

                entity.Property(e => e.RecMaligTyHepblast).HasColumnName("rec_malig_ty_hepblast");

                entity.Property(e => e.RecMaligTyHepcarcinoma).HasColumnName("rec_malig_ty_hepcarcinoma");

                entity.Property(e => e.RecMaligTyLeukLymph).HasColumnName("rec_malig_ty_leuk_lymph");

                entity.Property(e => e.RecMaligTyLiver).HasColumnName("rec_malig_ty_liver");

                entity.Property(e => e.RecMaligTyLu).HasColumnName("rec_malig_ty_lu");

                entity.Property(e => e.RecMaligTyOther).HasColumnName("rec_malig_ty_other");

                entity.Property(e => e.RecMaligTySkinMel).HasColumnName("rec_malig_ty_skin_mel");

                entity.Property(e => e.RecMaligTySkinNonMel).HasColumnName("rec_malig_ty_skin_non_mel");

                entity.Property(e => e.RecMaligTyThroat).HasColumnName("rec_malig_ty_throat");

                entity.Property(e => e.RecMaligTyThyroid).HasColumnName("rec_malig_ty_thyroid");

                entity.Property(e => e.RecMaligTyUnk).HasColumnName("rec_malig_ty_unk");

                entity.Property(e => e.RecMedCond).HasColumnName("rec_med_cond");

                entity.Property(e => e.RecMmEquivCur).HasColumnName("rec_mm_equiv_cur");

                entity.Property(e => e.RecMmEquivTx).HasColumnName("rec_mm_equiv_tx");

                entity.Property(e => e.RecMotorDevelop).HasColumnName("rec_motor_develop");

                entity.Property(e => e.RecOnVentilator)
                    .HasColumnName("rec_on_ventilator")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecOpoId).HasColumnName("rec_opo_id");

                entity.Property(e => e.RecOtherTherapy)
                    .HasColumnName("rec_other_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecOtherTherapyTy).HasColumnName("rec_other_therapy_ty");

                entity.Property(e => e.RecOtherTherapyTyPhotoph).HasColumnName("rec_other_therapy_ty_photoph");

                entity.Property(e => e.RecOtherTherapyTyPlasmaph).HasColumnName("rec_other_therapy_ty_plasmaph");

                entity.Property(e => e.RecOtherTherapyTyTli).HasColumnName("rec_other_therapy_ty_tli");

                entity.Property(e => e.RecPbCredit)
                    .HasColumnName("rec_pb_credit")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPbDebt)
                    .HasColumnName("rec_pb_debt")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPbShareTy).HasColumnName("rec_pb_share_ty");

                entity.Property(e => e.RecPermState)
                    .HasColumnName("rec_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.RecPhyscCapacity).HasColumnName("rec_physc_capacity");

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

                entity.Property(e => e.RecPretxLabDt).HasColumnName("rec_pretx_lab_dt");

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

                entity.Property(e => e.RecPrimaryPay).HasColumnName("rec_primary_pay");

                entity.Property(e => e.RecProcedureTyLi)
                    .HasColumnName("rec_procedure_ty_li")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxResearch)
                    .HasColumnName("rec_px_research")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxStat)
                    .HasColumnName("rec_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecPxStatDt).HasColumnName("rec_px_stat_dt");

                entity.Property(e => e.RecSecondaryPay).HasColumnName("rec_secondary_pay");

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

                entity.Property(e => e.RecTumorTy).HasColumnName("rec_tumor_ty");

                entity.Property(e => e.RecTxDt).HasColumnName("rec_tx_dt");

                entity.Property(e => e.RecTxExtraVessel)
                    .HasColumnName("rec_tx_extra_vessel")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecTxOrgTy)
                    .HasColumnName("rec_tx_org_ty")
                    .HasColumnType("character varying(15)");

                entity.Property(e => e.RecTxProcedureTy).HasColumnName("rec_tx_procedure_ty");

                entity.Property(e => e.RecTxTy).HasColumnName("rec_tx_ty");

                entity.Property(e => e.RecTxferCtrId).HasColumnName("rec_txfer_ctr_id");

                entity.Property(e => e.RecTxferDt).HasColumnName("rec_txfer_dt");

                entity.Property(e => e.RecValcyte)
                    .HasColumnName("rec_valcyte")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecVaricealBleeding)
                    .HasColumnName("rec_variceal_bleeding")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecVentilator).HasColumnName("rec_ventilator");

                entity.Property(e => e.RecWarmIschTm).HasColumnName("rec_warm_isch_tm");

                entity.Property(e => e.RecWgtKg).HasColumnName("rec_wgt_kg");

                entity.Property(e => e.RecWorkIncome)
                    .HasColumnName("rec_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.RecWorkNoStat).HasColumnName("rec_work_no_stat");

                entity.Property(e => e.RecWorkYesStat).HasColumnName("rec_work_yes_stat");

                entity.Property(e => e.TflCod).HasColumnName("tfl_cod");

                entity.Property(e => e.TflDeathDt).HasColumnName("tfl_death_dt");

                entity.Property(e => e.TflEndtxfu).HasColumnName("tfl_endtxfu");

                entity.Property(e => e.TflGraftDt).HasColumnName("tfl_graft_dt");

                entity.Property(e => e.TflLafudate).HasColumnName("tfl_lafudate");

                entity.Property(e => e.TflLastatus)
                    .HasColumnName("tfl_lastatus")
                    .HasColumnType("character varying(1)");

                entity.HasOne(d => d.DonOpoCtr)
                    .WithMany(p => p.TxLiDonOpoCtr)
                    .HasForeignKey(d => d.DonOpoCtrId)
                    .HasConstraintName("tx_li_don_opo_ctr_id_fkey");

                entity.HasOne(d => d.Donor)
                    .WithMany(p => p.TxLi)
                    .HasForeignKey(d => d.DonorId)
                    .HasConstraintName("tx_li_donor_id_fkey");

                entity.HasOne(d => d.Px)
                    .WithMany(p => p.TxLi)
                    .HasForeignKey(d => d.PxId)
                    .HasConstraintName("tx_li_px_id_fkey");

                entity.HasOne(d => d.RecCtr)
                    .WithMany(p => p.TxLiRecCtr)
                    .HasForeignKey(d => d.RecCtrId)
                    .HasConstraintName("tx_li_rec_ctr_id_fkey");

                entity.HasOne(d => d.RecCurCtr)
                    .WithMany(p => p.TxLiRecCurCtr)
                    .HasForeignKey(d => d.RecCurCtrId)
                    .HasConstraintName("tx_li_rec_cur_ctr_id_fkey");

                entity.HasOne(d => d.RecTxferCtr)
                    .WithMany(p => p.TxLiRecTxferCtr)
                    .HasForeignKey(d => d.RecTxferCtrId)
                    .HasConstraintName("tx_li_rec_txfer_ctr_id_fkey");
            });

            modelBuilder.Entity<TxfLi>(entity =>
            {
                entity.HasKey(e => e.TrrFolId)
                    .HasName("txf_li_pkey");

                entity.ToTable("txf_li", "tx");

                entity.Property(e => e.TrrFolId)
                    .HasColumnName("trr_fol_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.OrgAr)
                    .HasColumnName("org_ar")
                    .HasColumnType("character varying(3)");

                entity.Property(e => e.OrgTy)
                    .HasColumnName("org_ty")
                    .HasColumnType("character varying(4)");

                entity.Property(e => e.PersId).HasColumnName("pers_id");

                entity.Property(e => e.PxId).HasColumnName("px_id");

                entity.Property(e => e.RecCtrId).HasColumnName("rec_ctr_id");

                entity.Property(e => e.RecOpoId).HasColumnName("rec_opo_id");

                entity.Property(e => e.RecTxDt).HasColumnName("rec_tx_dt");

                entity.Property(e => e.RecTxOrgTy)
                    .HasColumnName("rec_tx_org_ty")
                    .HasColumnType("character varying(15)");

                entity.Property(e => e.RecTxTy).HasColumnName("rec_tx_ty");

                entity.Property(e => e.TflAcademicLevel).HasColumnName("tfl_academic_level");

                entity.Property(e => e.TflAcademicProgress).HasColumnName("tfl_academic_progress");

                entity.Property(e => e.TflAcuteRejBiopsyConfirmed).HasColumnName("tfl_acute_rej_biopsy_confirmed");

                entity.Property(e => e.TflAcuteRejEpisode).HasColumnName("tfl_acute_rej_episode");

                entity.Property(e => e.TflAlbumin).HasColumnName("tfl_albumin");

                entity.Property(e => e.TflAlkphos).HasColumnName("tfl_alkphos");

                entity.Property(e => e.TflAntivrlTherapy)
                    .HasColumnName("tfl_antivrl_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflAntivrlTherapyTy).HasColumnName("tfl_antivrl_therapy_ty");

                entity.Property(e => e.TflAntivrlTherapyTyAcyclovir).HasColumnName("tfl_antivrl_therapy_ty_acyclovir");

                entity.Property(e => e.TflAntivrlTherapyTyCytogam).HasColumnName("tfl_antivrl_therapy_ty_cytogam");

                entity.Property(e => e.TflAntivrlTherapyTyCytovene).HasColumnName("tfl_antivrl_therapy_ty_cytovene");

                entity.Property(e => e.TflAntivrlTherapyTyEpivir).HasColumnName("tfl_antivrl_therapy_ty_epivir");

                entity.Property(e => e.TflAntivrlTherapyTyFluVac).HasColumnName("tfl_antivrl_therapy_ty_flu_vac");

                entity.Property(e => e.TflAntivrlTherapyTyGamimune).HasColumnName("tfl_antivrl_therapy_ty_gamimune");

                entity.Property(e => e.TflAntivrlTherapyTyGammagard).HasColumnName("tfl_antivrl_therapy_ty_gammagard");

                entity.Property(e => e.TflAntivrlTherapyTyHbig).HasColumnName("tfl_antivrl_therapy_ty_hbig");

                entity.Property(e => e.TflAntivrlTherapyTyOther).HasColumnName("tfl_antivrl_therapy_ty_other");

                entity.Property(e => e.TflAntivrlTherapyTyValcyte).HasColumnName("tfl_antivrl_therapy_ty_valcyte");

                entity.Property(e => e.TflAntivrlTherapyTyValtrex).HasColumnName("tfl_antivrl_therapy_ty_valtrex");

                entity.Property(e => e.TflBmi).HasColumnName("tfl_bmi");

                entity.Property(e => e.TflCad)
                    .HasColumnName("tfl_cad")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflCareProvBy).HasColumnName("tfl_care_prov_by");

                entity.Property(e => e.TflCmvIgg)
                    .HasColumnName("tfl_cmv_igg")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflCmvIgm)
                    .HasColumnName("tfl_cmv_igm")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflCod).HasColumnName("tfl_cod");

                entity.Property(e => e.TflCod2).HasColumnName("tfl_cod2");

                entity.Property(e => e.TflCod3).HasColumnName("tfl_cod3");

                entity.Property(e => e.TflCognitiveDevelop).HasColumnName("tfl_cognitive_develop");

                entity.Property(e => e.TflCreat).HasColumnName("tfl_creat");

                entity.Property(e => e.TflDiabDuringFol)
                    .HasColumnName("tfl_diab_during_fol")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflEmplStatPre04).HasColumnName("tfl_empl_stat_pre04");

                entity.Property(e => e.TflFailBiliary)
                    .HasColumnName("tfl_fail_biliary")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflFailDt).HasColumnName("tfl_fail_dt");

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

                entity.Property(e => e.TflFolCd).HasColumnName("tfl_fol_cd");

                entity.Property(e => e.TflFunctnStat).HasColumnName("tfl_functn_stat");

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

                entity.Property(e => e.TflHgtWgtDt).HasColumnName("tfl_hgt_wgt_dt");

                entity.Property(e => e.TflHosp)
                    .HasColumnName("tfl_hosp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflHospNum).HasColumnName("tfl_hosp_num");

                entity.Property(e => e.TflImmunoDiscont)
                    .HasColumnName("tfl_immuno_discont")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflImmunoMaintMeds).HasColumnName("tfl_immuno_maint_meds");

                entity.Property(e => e.TflInr).HasColumnName("tfl_inr");

                entity.Property(e => e.TflInsulinDepnd)
                    .HasColumnName("tfl_insulin_depnd")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflLabDt).HasColumnName("tfl_lab_dt");

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

                entity.Property(e => e.TflMotorDevelop).HasColumnName("tfl_motor_develop");

                entity.Property(e => e.TflOtherTherapy)
                    .HasColumnName("tfl_other_therapy")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflOtherTherapyTy).HasColumnName("tfl_other_therapy_ty");

                entity.Property(e => e.TflOtherTherapyTyPhotoph).HasColumnName("tfl_other_therapy_ty_photoph");

                entity.Property(e => e.TflOtherTherapyTyPlasmaph).HasColumnName("tfl_other_therapy_ty_plasmaph");

                entity.Property(e => e.TflOtherTherapyTyTli).HasColumnName("tfl_other_therapy_ty_tli");

                entity.Property(e => e.TflPermState)
                    .HasColumnName("tfl_perm_state")
                    .HasColumnType("character varying(2)");

                entity.Property(e => e.TflPhyscCapacity).HasColumnName("tfl_physc_capacity");

                entity.Property(e => e.TflPortalVeinThromb)
                    .HasColumnName("tfl_portal_vein_thromb")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPrimaryPay).HasColumnName("tfl_primary_pay");

                entity.Property(e => e.TflPxNoncomp)
                    .HasColumnName("tfl_px_noncomp")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxResearch)
                    .HasColumnName("tfl_px_research")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxStat)
                    .HasColumnName("tfl_px_stat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflPxStatDt).HasColumnName("tfl_px_stat_dt");

                entity.Property(e => e.TflRejEventNum).HasColumnName("tfl_rej_event_num");

                entity.Property(e => e.TflRejTreat)
                    .HasColumnName("tfl_rej_treat")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflSgot).HasColumnName("tfl_sgot");

                entity.Property(e => e.TflSgpt).HasColumnName("tfl_sgpt");

                entity.Property(e => e.TflTotBili).HasColumnName("tfl_tot_bili");

                entity.Property(e => e.TflTxferDt).HasColumnName("tfl_txfer_dt");

                entity.Property(e => e.TflWgtKg).HasColumnName("tfl_wgt_kg");

                entity.Property(e => e.TflWorkIncome)
                    .HasColumnName("tfl_work_income")
                    .HasColumnType("character varying(1)");

                entity.Property(e => e.TflWorkNoStat).HasColumnName("tfl_work_no_stat");

                entity.Property(e => e.TflWorkYesStat).HasColumnName("tfl_work_yes_stat");

                entity.Property(e => e.TrrId).HasColumnName("trr_id");

                entity.Property(e => e.TxId).HasColumnName("tx_id");

                entity.HasOne(d => d.Trr)
                    .WithMany(p => p.TxfLiTrr)
                    .HasPrincipalKey(p => p.TrrId)
                    .HasForeignKey(d => d.TrrId)
                    .HasConstraintName("txf_li_trr_id_fkey");

                entity.HasOne(d => d.Tx)
                    .WithMany(p => p.TxfLiTx)
                    .HasPrincipalKey(p => p.TxId)
                    .HasForeignKey(d => d.TxId)
                    .HasConstraintName("txf_li_tx_id_fkey");
            });
        }
    }
}
