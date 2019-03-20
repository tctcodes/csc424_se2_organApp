CREATE TABLE DONOR_LIVE (
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                NUMERIC(8),	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                      NUMERIC(8),	               -- Donor/s Age in Months
	DON_ALBUMIN_POSTOP                     NUMERIC(8),	               -- Serum Albumin:
	DON_ALBUMIN_PREOP                      NUMERIC(8),	               -- Serum Albumin:
	DON_ALKPHOS_POSTOP                     NUMERIC(8),	               -- Alkaline Phosphatase:
	DON_ALKPHOS_PREOP                      NUMERIC(8),	               -- Alkaline Phosphatase:
	DON_ANASTH_COMPL                      VARCHAR(50),	               -- Anesthetic Complication Specify:
	DON_ARRHYTHM                           NUMERIC(8),	-- ARYTHM      -- Arrhythmia requiring therapy:
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BILI_POSTOP                        NUMERIC(8),	               -- Total Bilirubin:
	DON_BILI_PREOP                         NUMERIC(8),	               -- Total Bilirubin:
	DON_BP_DISCHRG_DIAST                   NUMERIC(8),	               -- At Discharge Diastolic
	DON_BP_DISCHRG_SYST                    NUMERIC(8),	               -- At Discharge Systolic
	DON_BP_POSTOP_DIAST                    NUMERIC(8),	               -- Post-Op Blood Pressure Diastolic:
	DON_BP_POSTOP_SYST                     NUMERIC(8),	               -- Post-Op Blood Pressure Systolic:
	DON_BP_PREOP_DIAST                     NUMERIC(8),	               -- Preoperative Diastolic
	DON_BP_PREOP_SYST                      NUMERIC(8),	               -- Preoperative Systolic
	DON_BW4                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CANCER_FREE_INTERVAL               NUMERIC(3),	               -- Cancer Free Interval:
	DON_CITIZENSHIP                        NUMERIC(8),	-- CTZNLDTC    -- Donor/s Citizenship
	DON_CMV                                VARCHAR(2),	               -- {CMV pre-UNet data}//CMV:
	DON_CMV_CLINICAL                       VARCHAR(2),	               -- CMV//Was there clinical disease:
	DON_CMV_CULT                           VARCHAR(2),	               -- CMV//Culture:
	DON_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	DON_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	DON_CMV_NUCLEIC                        VARCHAR(2),	               -- CMV//Nucleic Acid Testing:
	DON_CMV_TESTED                         VARCHAR(1),	               -- ( pre Unet CMV value )
	DON_DIAB                               VARCHAR(1),	               -- Diabetes:
	DON_DIAB_TREAT                         NUMERIC(8),	-- DIABTRET    -- Diabetes Treatment//Treatment:
	DON_DONATION                           VARCHAR(1),	               -- Secondary source of payment: Donation
	DON_DP1                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_DURATION_ABSTINENCE                NUMERIC(8),	-- CGDURABS    -- Duration of Abstinence:
	DON_EBV_CLINICAL                       VARCHAR(2),	               -- EBV//Was there clinical disease:
	DON_EBV_DNA                            VARCHAR(2),	               -- EBV//EBV DNA:
	DON_EBV_IGG                            VARCHAR(2),	               -- EBV//IgG:
	DON_EBV_IGM                            VARCHAR(2),	               -- EBV//IgM:
	DON_EBV_TESTED                         VARCHAR(1),	               -- EBV
	DON_EDUCATION                          NUMERIC(8),	-- EDLEVEL     -- Highest Education Level
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_FEF_AFTER_PREOP                    NUMERIC(8),	               -- FEF (25-75%) % predicted after//FEF (25-75%) % predicted:
	DON_FEF_BEFORE_PREOP                   NUMERIC(8),	               -- FEF (25-75%) % predicted before//FEF (25-75%) % predicted:
	DON_FEV1_AFTER_PREOP                   NUMERIC(8),	               -- FEV1 % predicted after//FEV1 % predicted:
	DON_FEV1_BEFORE_PREOP                  NUMERIC(8),	               -- FEV1 % predicted before//FEV1 % predicted:
	DON_FFP_UNITS                          NUMERIC(8),	               -- FF Units//If Yes, Number of Units:
	DON_FREE                               VARCHAR(1),	               -- Secondary source of payment: Free
	DON_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Functional Status:
	DON_FVC_AFTER_PREOP                    NUMERIC(8),	               -- FVC % predicted after//FVC % predicted:
	DON_FVC_BEFORE_PREOP                   NUMERIC(8),	               -- FVC % predicted before//FVC % predicted:
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HAPLO_TY_MATCH                     NUMERIC(8),	-- HAPLOTY     -- Haplotype Match Between Live Donor & Recipient
	DON_HBV_ANTIBODY                       VARCHAR(2),	               -- HBV//Core Antibody:
	DON_HBV_CLINICAL                       VARCHAR(2),	               -- HBV//Was there clinical disease:
	DON_HBV_DNA                            VARCHAR(2),	               -- HBV//HBV DNA:
	DON_HBV_HDV                            VARCHAR(2),	               -- HBV//HDV (Delta Virus):
	DON_HBV_LI_HISTOLOGY                   VARCHAR(2),	               -- HBV//Liver Histology:
	DON_HBV_SURF_ANTIGEN                   VARCHAR(2),	               -- HBV//Surface Antigen:
	DON_HBV_TESTED                         VARCHAR(1),	               -- HBV
	DON_HCV_ANTIBODY                       VARCHAR(2),	               -- HCV//Antibody:
	DON_HCV_CLINICAL                       VARCHAR(2),	               -- HCV//Was there clinical disease:
	DON_HCV_LI_HISTOLOGY                   VARCHAR(2),	               -- HCV//Liver Histology:
	DON_HCV_RIBA                           VARCHAR(2),	               -- HCV//RIBA:
	DON_HCV_RNA                            VARCHAR(2),	               -- HCV//HCV RNA:
	DON_HCV_TESTED                         VARCHAR(1),	               -- HCV
	DON_HEALTH_INSUR                       VARCHAR(1),	               -- Did the donor have health insurance:
	DON_HGT_CM                             NUMERIC(8),	               -- Height:
	DON_HIST_CANCER                        NUMERIC(8),	-- HSTSTST     -- History of Cancer:
	DON_HIST_CIGARETTE                     VARCHAR(1),	               -- History of Cigarette Use:
	DON_HIST_HYPERTEN                      NUMERIC(8),	-- HSTHYPDR    -- History of Hypertension:
	DON_HIV_ANTIBODY                       VARCHAR(2),	               -- HIV//Antibody:
	DON_HIV_CLINICAL                       VARCHAR(2),	               -- HIV//Was there clinical disease (ARC, AIDS):
	DON_HIV_CONFIRM                        VARCHAR(2),	               -- HIV: Confirmation//Confirmation:
	DON_HIV_RNA                            VARCHAR(2),	               -- HIV//RNA:
	DON_HIV_SCREEN                         VARCHAR(2),	               -- HIV: Screening//Screening:
	DON_HIV_TESTED                         VARCHAR(1),	               -- HIV
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                   NUMERIC(3),	               -- HLA Typing not done for donor
	DON_HMO_PPO                            VARCHAR(1),	               -- Secondary source of payment: HMO/PPO
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- History of Hypertension Diet//Diet:
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- History of Hypertension Diuretics//Diuretics:
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- History of Hypertension Other Hypertensive Medication//Other Hypertensive Medication:
	DON_HYPERTEN_POSTOP                    VARCHAR(1),	               -- Donor Developed Hypertension Requiring Medication:
	DON_INIT_DISCHRG_DT                    NUMERIC(8),	-- MMDDYY      -- Date of Initial Discharge:
	DON_INR_POSTOP                         NUMERIC(8),	               -- INR:
	DON_INR_PREOP                          NUMERIC(8),	               -- INR:
	DON_INTRAOP_COMPL                      VARCHAR(1),	               -- Intra-operative Complications:
	DON_INTRAOP_COMPL_REASON               NUMERIC(8),	-- COMPITRP    -- Intra-operative Complications Specify//If Yes, Specify:
	DON_KI_BIOPSY                          VARCHAR(1),	               -- Kidney Biopsy:
	DON_KI_CREAT_DISCHRG                   NUMERIC(8),	               -- Kidney Creatinine At Discharge
	DON_KI_CREAT_POSTOP                    NUMERIC(8),	               -- Kidney Serum Creatinine//Serum Creatinine:
	DON_KI_CREAT_PREOP                     NUMERIC(8),	               -- Kidney Preoperative Creatinine
	DON_KI_OTHER_COMPL                     VARCHAR(1),	               -- Kidney Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_KI_OTHER_COMPL_INTERVENTION        NUMERIC(8),	-- COMPOTHR    -- Kidney Other Complications//If Yes, Specify:
	DON_KI_OTHER_INTERVENTION              VARCHAR(1),	               -- Kidney Other Interventional Procedures//Other Interventional Procedures:
	DON_KI_OTHER_INTERVENTION_DT           NUMERIC(8),	-- MMDDYY      -- Kidney Other Interventional Procedures Date//Date of Procedure:
	DON_KI_PCT_GS                          NUMERIC(8),	-- KGLMR       -- Glomerulosclerosis:
	DON_KI_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Laparoscopic to Open:
	DON_KI_PROCEDURE_TY                    NUMERIC(8),	-- KIPROCTY    -- Kidney Procedure Type
	DON_KI_READMIT                         VARCHAR(1),	               -- Kidney Readmission//Any Readmission After Initial Discharge:
	DON_KI_READMIT_DT                      NUMERIC(8),	-- MMDDYY      -- Kidney Readmission Date//If Yes, Date of First Readmission:
	DON_KI_READMIT_REASON                  NUMERIC(8),	-- READMT      -- Kidney Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_KI_REOP                            VARCHAR(1),	               -- Kidney Reoperation//Reoperation:
	DON_KI_REOP_BLEEN                      NUMERIC(3),	               -- Kidney Reoperation Bleeding//Bleeding
	DON_KI_REOP_BLEEN_DT                   NUMERIC(8),	-- MMDDYY      -- Kidney Reoperation Bleeding Date//Date:
	DON_KI_REOP_BOWEL                      NUMERIC(3),	               -- Kidney Reoperation Bowel Obstruction//Bowel Obstruction
	DON_KI_REOP_BOWEL_DT                   NUMERIC(8),	-- MMDDYY      -- Kidney Reoperation Bowel Obstruction Date//Date:
	DON_KI_REOP_HERNIA                     NUMERIC(3),	               -- Kidney Reoperation Hernia Repair//Hernia Repair
	DON_KI_REOP_HERNIA_DT                  NUMERIC(8),	-- MMDDYY      -- Kidney Reoperation Hernia Repair Date//Date:
	DON_KI_REOP_OTHER                      NUMERIC(3),	               -- Kidney Reoperation Other//Other Specify
	DON_KI_REOP_OTHER_DT                   NUMERIC(8),	-- MMDDYY      -- Kidney Reoperation Other Date//Date:
	DON_KI_REOP_VASC                       NUMERIC(3),	               -- Kidney Reoperation Vascular//Vascular
	DON_KI_REOP_VASC_DT                    NUMERIC(8),	-- MMDDYY      -- Kidney Reoperation Vascular Date//Date:
	DON_KI_VASC_COMPL                      VARCHAR(1),	               -- Kidney Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_KI_VASC_COMPL_INTERVENTION         NUMERIC(8),	-- VSCOMPKI    -- Kidney Vascular Complications//If Yes, Specify:
	DON_LENGTH_HOSP_STAY                   NUMERIC(8),	               -- Length of Hospital Stay
	DON_LIVING_DON_COD                     NUMERIC(8),	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BILIARY_COMPL                   VARCHAR(1),	               -- Biliary Complications:
	DON_LI_BILIARY_COMPL_GRADE             NUMERIC(8),	-- BILICOMP    -- Biliary Complications//If Yes, Specify:
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy:
	DON_LI_BIOPSY_MACRO_FAT                NUMERIC(8),	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT                NUMERIC(8),	               -- % Micro vesicular fat:
	DON_LI_CREAT_POSTOP                    NUMERIC(8),	               -- Serum Creatinine:
	DON_LI_CREAT_PREOP                     NUMERIC(8),	               -- Serum Creatinine:
	DON_LI_OTHER_COMPL                     VARCHAR(1),	               -- Liver Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_LI_OTHER_COMPL_INTERVENTION        NUMERIC(8),	-- COMPOTHR    -- Liver Other Complications//If Yes, Specify:
	DON_LI_OTHER_INTERVENTION              VARCHAR(1),	               -- Liver Other Interventional Procedures//Other Interventional Procedures:
	DON_LI_OTHER_INTERVENTION_DT           NUMERIC(8),	-- MMDDYY      -- Liver Other Interventional Procedures Date//Date of Procedure:
	DON_LI_PROCEDURE_TY                    NUMERIC(8),	-- LIPROCLD    -- Type of Transplant Graft:
	DON_LI_READMIT                         VARCHAR(1),	               -- Liver Readmission//Any Readmission After Initial Discharge:
	DON_LI_READMIT_DT                      NUMERIC(8),	-- MMDDYY      -- Liver Readmission Date//If Yes, Date of First Readmission:
	DON_LI_READMIT_REASON                  NUMERIC(8),	-- READMTLI    -- Liver Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_LI_REOP                            VARCHAR(1),	               -- Liver Reoperation//Reoperation:
	DON_LI_REOP_BILIARY                    NUMERIC(3),	               -- Liver Reoperation Biliary//Biliary
	DON_LI_REOP_BILIARY_DT                 NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Biliary Date//Date:
	DON_LI_REOP_BLEED                      NUMERIC(3),	               -- Liver Reoperation Bleeding Complications//Bleeding Complications
	DON_LI_REOP_BLEED_DT                   NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Bleeding Date//Date:
	DON_LI_REOP_BOWEL                      NUMERIC(3),	               -- Liver Reoperation Bowel Obstruction//Bowel Obstruction
	DON_LI_REOP_BOWEL_DT                   NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Bowel Obstruction Date//Date:
	DON_LI_REOP_FAIL                       NUMERIC(3),	               -- Liver Reoperation Liver Failure///Liver Failure Requiring Transplant
	DON_LI_REOP_FAIL_DT                    NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Liver Failure Date//Date:
	DON_LI_REOP_HERNIA                     NUMERIC(3),	               -- Liver Reoperation Hernia Repair//Hernia Repair
	DON_LI_REOP_HERNIA_DT                  NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Hernia Repair Date//Date:
	DON_LI_REOP_OTHER                      NUMERIC(3),	               -- Liver Reoperation Other//Other Specify
	DON_LI_REOP_OTHER_DT                   NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Other Date//Date:
	DON_LI_REOP_VASC                       NUMERIC(3),	               -- Liver Reoperation Vascular Complications//Vascular Complications
	DON_LI_REOP_VASC_DT                    NUMERIC(8),	-- MMDDYY      -- Liver Reoperation Vascular Date//Date:
	DON_LI_VASC_COMPL                      VARCHAR(1),	               -- Liver Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_LI_VASC_COMPL_INTERVENTION         NUMERIC(8),	-- VSCOMPLI    -- Liver Vascular Complications//If Yes, Specify:
	DON_LU_ARRHYTHM                        NUMERIC(8),	-- ARYTHMPO    -- Arrhythmia requiring therapy:
	DON_LU_CAPACITY_PREOP                  NUMERIC(8),	               -- Diffusing lung capacity corrected for alveolar volume % predicted:
	DON_LU_COMPL                           VARCHAR(1),	               -- Post-operative complications during the initial hospitalization:
	DON_LU_COMPL_REASON                    NUMERIC(8),	-- COMPLU      -- Post-operative Complications//If Yes, Specify:
	DON_LU_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Thoracoscopic to Open:
	DON_LU_PROCEDURE_TY                    NUMERIC(8),	-- LUPROCLD    -- Lung//Procedure Type:
	DON_LU_READMIT                         VARCHAR(1),	               -- Lung Readmission//Any Readmission After Initial Discharge:
	DON_LU_READMIT_DT                      NUMERIC(8),	-- MMDDYY      -- Lung Readmission Date//If Yes, Date of First Readmission:
	DON_LU_READMIT_REASON                  NUMERIC(8),	-- READMT      -- Lung Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_LU_THORAC_TUBES                    NUMERIC(8),	-- THORTUBE    -- Placement of Additional Thoracostomy Tube(s), Indication:
	DON_MARITAL_STAT                       NUMERIC(8),	-- MRTLSTAT    -- Marital Status at Time of Donation:
	DON_MEDICAID                           VARCHAR(1),	               -- Secondary source of payment: Medicaid
	DON_MEDICARE                           VARCHAR(1),	               -- Secondary source of payment: Medicare
	DON_NON_AUTO_BLOOD                     VARCHAR(1),	               -- Non-Autologous Blood Administration:
	DON_OPO_RUN_MATCH                      NUMERIC(3),	               -- For Living Donors, can OPO run a match on this donor?
	DON_ORG1                               VARCHAR(4),	-- $DNORGLV    -- Organ Recovered(1)
	DON_ORG2                               VARCHAR(4),	-- $DNORGLV    -- Organ Recovered(2)
	DON_OTHER_GOVT                         VARCHAR(1),	               -- Secondary source of payment: US/State Government Agency
	DON_OTHER_TOBACCO_USE                  VARCHAR(1),	               -- Other Tobacco Used:
	DON_PACK_YEARS                         NUMERIC(8),	-- CGPKYRS     -- History of Cigarette Use Pack Years//If Yes, Check # pack years:
	DON_PAO2_PREOP                         NUMERIC(8),	               -- PaO2 on room air:
	DON_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCPLD    -- Physical Capacity: (check one)
	DON_PLT_UNITS                          NUMERIC(8),	               -- Platelets Units//If Yes, Number of Units:
	DON_POSTOP_TEST_DT                     NUMERIC(8),	-- MMDDYY      -- Most Recent Date of Tests:
	DON_PRBC_UNITS                         NUMERIC(8),	               -- PRBC Units//If Yes, Number of Units:
	DON_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Source of Payment
	DON_PRIV_INSUR                         VARCHAR(1),	               -- Secondary source of payment: Private Insurance
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                           NUMERIC(8),	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_TX_SAME_CTR                  VARCHAR(1),	               -- Did organ recovery and transplant occur at the same center
	DON_RELATIONSHIP_TY                    NUMERIC(8),	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SACRIFICE_LOBE                     NUMERIC(8),	-- SACRFLOB    -- Sacrifice of Second Lobe, Specify:
	DON_SELF                               VARCHAR(1),	               -- Secondary source of payment: Self
	DON_SGOT_POSTOP                        NUMERIC(8),	               -- SGOT/AST:
	DON_SGOT_PREOP                         NUMERIC(8),	               -- SGOT/AST:
	DON_SGPT_POSTOP                        NUMERIC(8),	               -- SGPT/ALT:
	DON_SGPT_PREOP                         NUMERIC(8),	               -- SGPT/ALT:
	DON_STAT                               VARCHAR(1),	-- $PXSTTDN    -- Donor Status
	DON_STAT_DT                            NUMERIC(8),	-- MMDDYY      -- Donor Status Date
	DON_TARGET_SOURCE1                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class II:
	DON_TLC_AFTER_PREOP                    NUMERIC(8),	               -- TLC % predicted after//TLC % predicted:
	DON_TLC_BEFORE_PREOP                   NUMERIC(8),	               -- TLC % predicted before//TLC % predicted:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                  NUMERIC(8),	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                  NUMERIC(8),	-- MMDDYY      -- Date Typing Complete Class II:
	DON_URINE_POSTOP_PROTEIN               NUMERIC(8),	               -- Post-Operative Urinalysis//Urine Protein:
	DON_URINE_POSTOP_RATIO                 NUMERIC(8),	               -- Post-Operative Urinalysis//Protein-Creatinine Ratio:
	DON_URINE_PREOP_PROTEIN                NUMERIC(8),	               -- Preoperative Urinalysis//Urine Protein:
	DON_URINE_PREOP_RATIO                  NUMERIC(8),	               -- Preoperative Urinalysis//Protein-Creatinine Ratio:
	DON_VIRUSES_TESTED                     VARCHAR(1),	               -- Viral Detection://Have any of the following viruses ever been tested for: HIV, CMV, HBV, HCV, EBV
	DON_WGT_KG                             NUMERIC(8),	               -- Weight:
	DON_WORK_INCOME                        VARCHAR(1),	               -- Working for Income:
	DON_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRKLD    -- Working for Income//If No, Not Working Due To: (check one)
	DON_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCMLD    -- Working for Income//If Yes:
	DON_YEAR_ENTRY_US                      NUMERIC(8),	-- MMDDYY      -- Year of Entry into U.S.:
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PERS_SSA_DEATH_DT                      NUMERIC(8),	-- MMDDYY      -- Death date determined from SSA database
);
