CREATE TABLE DONOR_LIVE (
	DONOR_ID                            NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                            DOUBLE PRECISION,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                  DOUBLE PRECISION,	               -- Donor/s Age in Months
	DON_ALBUMIN_POSTOP                 DOUBLE PRECISION,	               -- Serum Albumin:
	DON_ALBUMIN_PREOP                  DOUBLE PRECISION,	               -- Serum Albumin:
	DON_ALKPHOS_POSTOP                 DOUBLE PRECISION,	               -- Alkaline Phosphatase:
	DON_ALKPHOS_PREOP                  DOUBLE PRECISION,	               -- Alkaline Phosphatase:
	DON_ANASTH_COMPL                      VARCHAR(50),	               -- Anesthetic Complication Specify:
	DON_ARRHYTHM                           NUMERIC(8),	-- ARYTHM      -- Arrhythmia requiring therapy:
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BILI_POSTOP                    DOUBLE PRECISION,	               -- Total Bilirubin:
	DON_BILI_PREOP                     DOUBLE PRECISION,	               -- Total Bilirubin:
	DON_BP_DISCHRG_DIAST               DOUBLE PRECISION,	               -- At Discharge Diastolic
	DON_BP_DISCHRG_SYST                DOUBLE PRECISION,	               -- At Discharge Systolic
	DON_BP_POSTOP_DIAST                DOUBLE PRECISION,	               -- Post-Op Blood Pressure Diastolic:
	DON_BP_POSTOP_SYST                 DOUBLE PRECISION,	               -- Post-Op Blood Pressure Systolic:
	DON_BP_PREOP_DIAST                 DOUBLE PRECISION,	               -- Preoperative Diastolic
	DON_BP_PREOP_SYST                  DOUBLE PRECISION,	               -- Preoperative Systolic
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
	DON_FEF_AFTER_PREOP                DOUBLE PRECISION,	               -- FEF (25-75%) % predicted after//FEF (25-75%) % predicted:
	DON_FEF_BEFORE_PREOP               DOUBLE PRECISION,	               -- FEF (25-75%) % predicted before//FEF (25-75%) % predicted:
	DON_FEV1_AFTER_PREOP               DOUBLE PRECISION,	               -- FEV1 % predicted after//FEV1 % predicted:
	DON_FEV1_BEFORE_PREOP              DOUBLE PRECISION,	               -- FEV1 % predicted before//FEV1 % predicted:
	DON_FFP_UNITS                      DOUBLE PRECISION,	               -- FF Units//If Yes, Number of Units:
	DON_FREE                               VARCHAR(1),	               -- Secondary source of payment: Free
	DON_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Functional Status:
	DON_FVC_AFTER_PREOP                DOUBLE PRECISION,	               -- FVC % predicted after//FVC % predicted:
	DON_FVC_BEFORE_PREOP               DOUBLE PRECISION,	               -- FVC % predicted before//FVC % predicted:
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
	DON_HGT_CM                         DOUBLE PRECISION,	               -- Height:
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
	DON_INIT_DISCHRG_DT                          DATE,	-- MMDDYY      -- Date of Initial Discharge:
	DON_INR_POSTOP                     DOUBLE PRECISION,	               -- INR:
	DON_INR_PREOP                      DOUBLE PRECISION,	               -- INR:
	DON_INTRAOP_COMPL                      VARCHAR(1),	               -- Intra-operative Complications:
	DON_INTRAOP_COMPL_REASON               NUMERIC(8),	-- COMPITRP    -- Intra-operative Complications Specify//If Yes, Specify:
	DON_KI_BIOPSY                          VARCHAR(1),	               -- Kidney Biopsy:
	DON_KI_CREAT_DISCHRG               DOUBLE PRECISION,	               -- Kidney Creatinine At Discharge
	DON_KI_CREAT_POSTOP                DOUBLE PRECISION,	               -- Kidney Serum Creatinine//Serum Creatinine:
	DON_KI_CREAT_PREOP                 DOUBLE PRECISION,	               -- Kidney Preoperative Creatinine
	DON_KI_OTHER_COMPL                     VARCHAR(1),	               -- Kidney Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_KI_OTHER_COMPL_INTERVENTION        NUMERIC(8),	-- COMPOTHR    -- Kidney Other Complications//If Yes, Specify:
	DON_KI_OTHER_INTERVENTION              VARCHAR(1),	               -- Kidney Other Interventional Procedures//Other Interventional Procedures:
	DON_KI_OTHER_INTERVENTION_DT                 DATE,	-- MMDDYY      -- Kidney Other Interventional Procedures Date//Date of Procedure:
	DON_KI_PCT_GS                          NUMERIC(8),	-- KGLMR       -- Glomerulosclerosis:
	DON_KI_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Laparoscopic to Open:
	DON_KI_PROCEDURE_TY                    NUMERIC(8),	-- KIPROCTY    -- Kidney Procedure Type
	DON_KI_READMIT                         VARCHAR(1),	               -- Kidney Readmission//Any Readmission After Initial Discharge:
	DON_KI_READMIT_DT                            DATE,	-- MMDDYY      -- Kidney Readmission Date//If Yes, Date of First Readmission:
	DON_KI_READMIT_REASON                  NUMERIC(8),	-- READMT      -- Kidney Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_KI_REOP                            VARCHAR(1),	               -- Kidney Reoperation//Reoperation:
	DON_KI_REOP_BLEEN                      NUMERIC(3),	               -- Kidney Reoperation Bleeding//Bleeding
	DON_KI_REOP_BLEEN_DT                         DATE,	-- MMDDYY      -- Kidney Reoperation Bleeding Date//Date:
	DON_KI_REOP_BOWEL                      NUMERIC(3),	               -- Kidney Reoperation Bowel Obstruction//Bowel Obstruction
	DON_KI_REOP_BOWEL_DT                         DATE,	-- MMDDYY      -- Kidney Reoperation Bowel Obstruction Date//Date:
	DON_KI_REOP_HERNIA                     NUMERIC(3),	               -- Kidney Reoperation Hernia Repair//Hernia Repair
	DON_KI_REOP_HERNIA_DT                        DATE,	-- MMDDYY      -- Kidney Reoperation Hernia Repair Date//Date:
	DON_KI_REOP_OTHER                      NUMERIC(3),	               -- Kidney Reoperation Other//Other Specify
	DON_KI_REOP_OTHER_DT                         DATE,	-- MMDDYY      -- Kidney Reoperation Other Date//Date:
	DON_KI_REOP_VASC                       NUMERIC(3),	               -- Kidney Reoperation Vascular//Vascular
	DON_KI_REOP_VASC_DT                          DATE,	-- MMDDYY      -- Kidney Reoperation Vascular Date//Date:
	DON_KI_VASC_COMPL                      VARCHAR(1),	               -- Kidney Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_KI_VASC_COMPL_INTERVENTION         NUMERIC(8),	-- VSCOMPKI    -- Kidney Vascular Complications//If Yes, Specify:
	DON_LENGTH_HOSP_STAY               DOUBLE PRECISION,	               -- Length of Hospital Stay
	DON_LIVING_DON_COD                     NUMERIC(8),	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BILIARY_COMPL                   VARCHAR(1),	               -- Biliary Complications:
	DON_LI_BILIARY_COMPL_GRADE             NUMERIC(8),	-- BILICOMP    -- Biliary Complications//If Yes, Specify:
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy:
	DON_LI_BIOPSY_MACRO_FAT            DOUBLE PRECISION,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT            DOUBLE PRECISION,	               -- % Micro vesicular fat:
	DON_LI_CREAT_POSTOP                DOUBLE PRECISION,	               -- Serum Creatinine:
	DON_LI_CREAT_PREOP                 DOUBLE PRECISION,	               -- Serum Creatinine:
	DON_LI_OTHER_COMPL                     VARCHAR(1),	               -- Liver Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_LI_OTHER_COMPL_INTERVENTION        NUMERIC(8),	-- COMPOTHR    -- Liver Other Complications//If Yes, Specify:
	DON_LI_OTHER_INTERVENTION              VARCHAR(1),	               -- Liver Other Interventional Procedures//Other Interventional Procedures:
	DON_LI_OTHER_INTERVENTION_DT                 DATE,	-- MMDDYY      -- Liver Other Interventional Procedures Date//Date of Procedure:
	DON_LI_PROCEDURE_TY                    NUMERIC(8),	-- LIPROCLD    -- Type of Transplant Graft:
	DON_LI_READMIT                         VARCHAR(1),	               -- Liver Readmission//Any Readmission After Initial Discharge:
	DON_LI_READMIT_DT                            DATE,	-- MMDDYY      -- Liver Readmission Date//If Yes, Date of First Readmission:
	DON_LI_READMIT_REASON                  NUMERIC(8),	-- READMTLI    -- Liver Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_LI_REOP                            VARCHAR(1),	               -- Liver Reoperation//Reoperation:
	DON_LI_REOP_BILIARY                    NUMERIC(3),	               -- Liver Reoperation Biliary//Biliary
	DON_LI_REOP_BILIARY_DT                       DATE,	-- MMDDYY      -- Liver Reoperation Biliary Date//Date:
	DON_LI_REOP_BLEED                      NUMERIC(3),	               -- Liver Reoperation Bleeding Complications//Bleeding Complications
	DON_LI_REOP_BLEED_DT                         DATE,	-- MMDDYY      -- Liver Reoperation Bleeding Date//Date:
	DON_LI_REOP_BOWEL                      NUMERIC(3),	               -- Liver Reoperation Bowel Obstruction//Bowel Obstruction
	DON_LI_REOP_BOWEL_DT                         DATE,	-- MMDDYY      -- Liver Reoperation Bowel Obstruction Date//Date:
	DON_LI_REOP_FAIL                       NUMERIC(3),	               -- Liver Reoperation Liver Failure///Liver Failure Requiring Transplant
	DON_LI_REOP_FAIL_DT                          DATE,	-- MMDDYY      -- Liver Reoperation Liver Failure Date//Date:
	DON_LI_REOP_HERNIA                     NUMERIC(3),	               -- Liver Reoperation Hernia Repair//Hernia Repair
	DON_LI_REOP_HERNIA_DT                        DATE,	-- MMDDYY      -- Liver Reoperation Hernia Repair Date//Date:
	DON_LI_REOP_OTHER                      NUMERIC(3),	               -- Liver Reoperation Other//Other Specify
	DON_LI_REOP_OTHER_DT                         DATE,	-- MMDDYY      -- Liver Reoperation Other Date//Date:
	DON_LI_REOP_VASC                       NUMERIC(3),	               -- Liver Reoperation Vascular Complications//Vascular Complications
	DON_LI_REOP_VASC_DT                          DATE,	-- MMDDYY      -- Liver Reoperation Vascular Date//Date:
	DON_LI_VASC_COMPL                      VARCHAR(1),	               -- Liver Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_LI_VASC_COMPL_INTERVENTION         NUMERIC(8),	-- VSCOMPLI    -- Liver Vascular Complications//If Yes, Specify:
	DON_LU_ARRHYTHM                        NUMERIC(8),	-- ARYTHMPO    -- Arrhythmia requiring therapy:
	DON_LU_CAPACITY_PREOP              DOUBLE PRECISION,	               -- Diffusing lung capacity corrected for alveolar volume % predicted:
	DON_LU_COMPL                           VARCHAR(1),	               -- Post-operative complications during the initial hospitalization:
	DON_LU_COMPL_REASON                    NUMERIC(8),	-- COMPLU      -- Post-operative Complications//If Yes, Specify:
	DON_LU_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Thoracoscopic to Open:
	DON_LU_PROCEDURE_TY                    NUMERIC(8),	-- LUPROCLD    -- Lung//Procedure Type:
	DON_LU_READMIT                         VARCHAR(1),	               -- Lung Readmission//Any Readmission After Initial Discharge:
	DON_LU_READMIT_DT                            DATE,	-- MMDDYY      -- Lung Readmission Date//If Yes, Date of First Readmission:
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
	DON_PAO2_PREOP                     DOUBLE PRECISION,	               -- PaO2 on room air:
	DON_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCPLD    -- Physical Capacity: (check one)
	DON_PLT_UNITS                      DOUBLE PRECISION,	               -- Platelets Units//If Yes, Number of Units:
	DON_POSTOP_TEST_DT                           DATE,	-- MMDDYY      -- Most Recent Date of Tests:
	DON_PRBC_UNITS                     DOUBLE PRECISION,	               -- PRBC Units//If Yes, Number of Units:
	DON_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Source of Payment
	DON_PRIV_INSUR                         VARCHAR(1),	               -- Secondary source of payment: Private Insurance
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_TX_SAME_CTR                  VARCHAR(1),	               -- Did organ recovery and transplant occur at the same center
	DON_RELATIONSHIP_TY                    NUMERIC(8),	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SACRIFICE_LOBE                     NUMERIC(8),	-- SACRFLOB    -- Sacrifice of Second Lobe, Specify:
	DON_SELF                               VARCHAR(1),	               -- Secondary source of payment: Self
	DON_SGOT_POSTOP                    DOUBLE PRECISION,	               -- SGOT/AST:
	DON_SGOT_PREOP                     DOUBLE PRECISION,	               -- SGOT/AST:
	DON_SGPT_POSTOP                    DOUBLE PRECISION,	               -- SGPT/ALT:
	DON_SGPT_PREOP                     DOUBLE PRECISION,	               -- SGPT/ALT:
	DON_STAT                               VARCHAR(1),	-- $PXSTTDN    -- Donor Status
	DON_STAT_DT                                  DATE,	-- MMDDYY      -- Donor Status Date
	DON_TARGET_SOURCE1                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class II:
	DON_TLC_AFTER_PREOP                DOUBLE PRECISION,	               -- TLC % predicted after//TLC % predicted:
	DON_TLC_BEFORE_PREOP               DOUBLE PRECISION,	               -- TLC % predicted before//TLC % predicted:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_URINE_POSTOP_PROTEIN           DOUBLE PRECISION,	               -- Post-Operative Urinalysis//Urine Protein:
	DON_URINE_POSTOP_RATIO             DOUBLE PRECISION,	               -- Post-Operative Urinalysis//Protein-Creatinine Ratio:
	DON_URINE_PREOP_PROTEIN            DOUBLE PRECISION,	               -- Preoperative Urinalysis//Urine Protein:
	DON_URINE_PREOP_RATIO              DOUBLE PRECISION,	               -- Preoperative Urinalysis//Protein-Creatinine Ratio:
	DON_VIRUSES_TESTED                     VARCHAR(1),	               -- Viral Detection://Have any of the following viruses ever been tested for: HIV, CMV, HBV, HCV, EBV
	DON_WGT_KG                         DOUBLE PRECISION,	               -- Weight:
	DON_WORK_INCOME                        VARCHAR(1),	               -- Working for Income:
	DON_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRKLD    -- Working for Income//If No, Not Working Due To: (check one)
	DON_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCMLD    -- Working for Income//If Yes:
	DON_YEAR_ENTRY_US                            DATE,	-- MMDDYY      -- Year of Entry into U.S.:
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PERS_SSA_DEATH_DT                            DATE,	-- MMDDYY      -- Death date determined from SSA database
	PRIMARY KEY (DONOR_ID, PERS_ID)
);


CREATE TABLE DONOR_DECEASED (
	DONOR_ID                            NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABNORM_CONGEN                      VARCHAR(1),	               -- Structural Abnormalities //Congenital:
	DON_ABNORM_LVH                         VARCHAR(1),	               -- Structural Abnormalities //LVH:
	DON_ABNORM_VALVES                      VARCHAR(1),	               -- Structural Abnormalities //Valves:
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                            DOUBLE PRECISION,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                  DOUBLE PRECISION,	               -- Donor/s Age in Months
	DON_ALLOC_ECD_CVA                      NUMERIC(3),	               -- CVA cause of death
	DON_ALLOC_ECD_HYPERTEN                 NUMERIC(3),	               -- history of hypertension
	DON_ALLOC_ECD_SERUM_CREAT          DOUBLE PRECISION,	               -- most recent serum_creat
	DON_ALLOC_ECD_SERUM_CREAT_DT                 DATE,	-- MMDDYY      -- most recent serum_creat date
	DON_ALLOC_REMAIN_LI_SEG                VARCHAR(1),	               -- Allocate Remaining Liver Segment?
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_CONVULS                       VARCHAR(1),	               -- Meds given Donor: Anticonvulsants
	DON_ANTI_HBC                           VARCHAR(2),	-- $SRLSTT     -- Anti-HBC
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_ANTI_HIV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HIV I/II:
	DON_ANTI_HTLV                          VARCHAR(2),	-- $SRLSTT     -- Anti-HTLV I/II:
	DON_ANTI_HYPERTEN                      VARCHAR(1),	               -- Meds given Donor: Antihypertensives
	DON_ARGININE                           VARCHAR(1),	               -- Arginine Vasopressin:
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BIOPSY_DGN                         NUMERIC(8),	-- BPMYCR      -- Biopsy
	DON_BRAIN_DEATH_TM                           TIME,	-- TIME        -- Time of pronouncement of death: (Complete for brain dead and DCD donors)
	DON_BUN                            DOUBLE PRECISION,	               -- BUN
	DON_BW4                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CAD_DON_COD                        NUMERIC(8),	-- DONCOD      -- Donor/s Cause of Death
	DON_CANCER_FREE_INTERVAL           DOUBLE PRECISION,	               -- Cancer Free Interval
	DON_CANCER_OTHER_OSTXT                VARCHAR(50),	               -- History of Cancer/Specify
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CHAGAS_NAT                         VARCHAR(2),	               -- Donor RNA Nat serology value for Chagas test
	DON_CHEST_XRAY                         NUMERIC(8),	-- LUCHSTXR    -- Chest X-ray:
	DON_CITIZENSHIP                        NUMERIC(8),	-- CITIZEN     -- Donor/s Citizenship
	DON_CI_FINAL                       DOUBLE PRECISION,	               -- Cardiac Index (final) //Cardiac Index:
	DON_CI_INIT                        DOUBLE PRECISION,	               -- Cardiac Index (initial) //Cardiac Index: (L/min/sq.m)
	DON_CLAMP_DT                                 DATE,	-- MMDDYY      -- Clamp Date
	DON_CLAMP_TM                                 TIME,	-- TIME        -- Clamp Time
	DON_CLAMP_TM_ZONE                      NUMERIC(8),	-- TIMEZONE    -- Clamp Time Zone
	DON_CLINICAL_INFECT                    VARCHAR(1),	               -- Clinical Infection
	DON_COD_DON_STROKE                     NUMERIC(3),	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_COLD_ISCH_TM_ARRIV_KI          DOUBLE PRECISION,	               -- Cold Ischemic Time upon arrival for Kidney in hours
	DON_CONSENT_ATTORNEY                   NUMERIC(3),	               -- Consent Mechanism - Attorney in Fact
	DON_CONSENT_DON_CARD                   NUMERIC(3),	               -- Consent Mechanism - Donor Card
	DON_CONSENT_DON_REGIS                  NUMERIC(3),	               -- Consent Mechanism - Donor Registry
	DON_CONSENT_DRIVER_LICENSE             NUMERIC(3),	               -- Consent Mechanism - Driver/s License
	DON_CONSENT_PX_WRIT_DOC                VARCHAR(1),	               -- Patient Consented in Writing
	DON_CONSENT_TM                               TIME,	-- TIME        -- Time consent obtained for first organ:
	DON_CONSENT_WRIT_DOC_INTENT            VARCHAR(1),	               -- Did the patient have written documentation of their intent to be a donor:
	DON_CONT_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency Last 6 Months
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CORONARY_ANGIO                     NUMERIC(8),	-- CRNRYANG    -- Coronary Angiogram
	DON_CO_FINAL                       DOUBLE PRECISION,	               -- CO (final) (L/min) //CO:
	DON_CO_INIT                        DOUBLE PRECISION,	               -- CO (initial) (L/min) //CO: (L/min)
	DON_CREAT                          DOUBLE PRECISION,	               -- Serum Creatinine
	DON_CREG_DON_FLG                       NUMERIC(3),	               -- Is this a CREG Donor?
	DON_CVP_FINAL                      DOUBLE PRECISION,	               -- CVP (final) //CVP:
	DON_CVP_INIT                       DOUBLE PRECISION,	               -- CVP (initial) //CVP: (mm/Hg)
	DON_DCD_ABDOM_AORTA_CANNUL_DT                DATE,	-- MMDDYY      -- If DCD, Date of abdominal aorta cannulation:
	DON_DCD_ABDOM_AORTA_CANNUL_TM                TIME,	-- TIME        -- If DCD, Time of abdominal aorta cannulation:
	DON_DCD_AGONAL_BEGIN_DT                      DATE,	-- MMDDYY      -- If DCD, Date agonal phase begins
	DON_DCD_AGONAL_BEGIN_TM                      TIME,	-- TIME        -- If DCD, Time agonal phase begins
	DON_DCD_PORTAL_VEIN_CANNUL_DT                DATE,	-- MMDDYY      -- If DCD, Date of portal vein cannulation:
	DON_DCD_PORTAL_VEIN_CANNUL_TM                TIME,	-- TIME        -- If DCD, Time of portal vein cannulation:
	DON_DCD_PROGRESS_TO_BRAIN_DEATH        VARCHAR(1),	               -- If not DCD, Was this a consented DCD donor that progressed to brain death?
	DON_DCD_PULM_ART_CANNUL_DT                   DATE,	-- MMDDYY      -- If DCD, Date of pulmonary artery cannulation:
	DON_DCD_PULM_ART_CANNUL_TM                   TIME,	-- TIME        -- If DCD, Time of pulmonary artery cannulation:
	DON_DCD_SUPPORT_WITHDRAW_DT                  DATE,	-- MMDDYY      -- If DCD, Date of withdrawal of support
	DON_DCD_SUPPORT_WITHDRAW_TM                  TIME,	-- TIME        -- If DCD, Time of withdrawal of support
	DON_DCD_THOR_AORTA_CANNUL_DT                 DATE,	-- MMDDYY      -- If DCD, Date of thoracic aorta cannulation:
	DON_DCD_THOR_AORTA_CANNUL_TM                 TIME,	-- TIME        -- If DCD, Time of thoracic aorta cannulation:
	DON_DCD_TOT_URINE_OUTPUT           DOUBLE PRECISION,	               -- If DCD, Total urine output during OR recovery phase
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                       NUMERIC(8),	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                         NUMERIC(8),	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DP1                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_EBNA                               VARCHAR(2),	-- $SRLSTT     -- EBNA (Epstein-Barr nuclear antigen)
	DON_EBV_IGG                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgG):
	DON_EBV_IGM                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgM):
	DON_EJECT_FRACT                    DOUBLE PRECISION,	               -- LV Ejection Fraction %
	DON_EJECT_FRACT_METH                   NUMERIC(8),	-- LVEJCMTH    -- Method
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_FLG_OPTN                NUMERIC(3),	               -- Does donor meet criteria to be an Expanded Donor?
	DON_EXPAND_DON_KI                      NUMERIC(3),	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_EXPRESS_FAMILY                     VARCHAR(1),	               -- Did the patient express to family or others the intent to be a donor
	DON_EXTRACRANIAL_CANCER                VARCHAR(1),	               -- Extracranial
	DON_FEEDBACK_DONE                      NUMERIC(3),	               -- Feedback Completed for Donor?
	DON_FINAL_SERUM_CREAT              DOUBLE PRECISION,	               -- Final Serum Creatinine
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HBC_STAT                           NUMERIC(8),	-- SRLGYSTT    -- Hepatitis B Core Antibody Status
	DON_HBV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hbv test
	DON_HBV_SURF_ANTIBODY                  VARCHAR(2),	-- $SRLSTT     -- HBsAb (Hepatitis B Surface Antibody)
	DON_HBV_SURF_ANTIGEN                   VARCHAR(2),	-- $SRLSTT     -- HBsAg
	DON_HCV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hcv test
	DON_HCV_STAT                           NUMERIC(8),	-- SRLGYSTT    -- HCV Antibody Status
	DON_HEAVY_ALCOHOL                      VARCHAR(1),	               -- Heavy Alcohol Use (heavy= 2+ drinks/day):
	DON_HEMATOCRIT                     DOUBLE PRECISION,	               -- Hematocrit:
	DON_HEPARIN                            VARCHAR(1),	               -- Heparin
	DON_HGT_CM                         DOUBLE PRECISION,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                         NUMERIC(3),	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency
	DON_HIST_CANCER                        NUMERIC(8),	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                          NUMERIC(8),	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                      NUMERIC(8),	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_INSULIN_DEPND                 NUMERIC(8),	-- INSDPDR     -- Insulin Dependent
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HIST_PREV_MI                       VARCHAR(1),	               -- History of Previous MI
	DON_HIV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hiv test
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                   NUMERIC(3),	               -- HLA Typing not done for donor
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HTLV_NAT                           VARCHAR(2),	               -- Donor RNA Nat serology value for htlv test
	DON_HTN                                NUMERIC(3),	               -- Donor history of hypertension (1= yes, 0= no)
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- Diet
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- Diuretics
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- Other Medication
	DON_INFECT_BLOOD                       NUMERIC(3),	               -- Infection Source: Blood
	DON_INFECT_BLOOD_CONFIRM               VARCHAR(1),	               -- Infection Source: Blood/Confirmed by Culture
	DON_INFECT_LU                          NUMERIC(3),	               -- Infection Source: Lung
	DON_INFECT_LU_CONFIRM                  VARCHAR(1),	               -- Infection Source: Lung/Confirmed by Culture
	DON_INFECT_OTHER                       NUMERIC(3),	               -- Infection Source: Other
	DON_INFECT_OTHER_CONFIRM               VARCHAR(1),	               -- Infection Source: Other/Confimed by Culture
	DON_INFECT_URINE                       NUMERIC(3),	               -- Infection Source: Urine
	DON_INFECT_URINE_CONFIRM               VARCHAR(1),	               -- Infection Source: Urine/Confirmed by Culture
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INR                            DOUBLE PRECISION,	               -- INR:
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_INTRACRANIAL_CANCER                VARCHAR(1),	               -- Intracranial
	DON_KI_GLOMER_OBSERVED             DOUBLE PRECISION,	               -- Glomeruli Observed on Kidney biopsy
	DON_KI_GLOMER_SCLER_PCT            DOUBLE PRECISION,	               -- Percent Glomerular Sclerosis on Kidney biopsy
	DON_LF_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (left)
	DON_LF_KI_GLOMER_SCLER_PCT             NUMERIC(8),	-- KGLMR       -- % Glomerulosclerosis (Left Kidney)
	DON_LF_KI_PUMP                         VARCHAR(1),	               -- Pump (Left Kidney)
	DON_LF_KI_RESIST_PRIOR_SHIP        DOUBLE PRECISION,	               -- Final Resistance Prior to Shipping (left) //Final Resistance Prior to Shipping:
	DON_LF_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (left)://Transferred on pump:
	DON_LF_LU_BRONCHO                      NUMERIC(8),	-- ABNLBRNC    -- Left Lung Bronchoscopy:
	DON_LIPASE                         DOUBLE PRECISION,	               -- Serum Lipase
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_LI_BIOPSY_MACRO_FAT            DOUBLE PRECISION,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT            DOUBLE PRECISION,	               -- % Micro/intermediate vesicular fat:
	DON_LI_OTH_HISTOLOGY_GRANULOMAS        NUMERIC(3),	               -- Granulomas Histology performed
	DON_LI_OTH_HISTOLOGY_HEMOSIDERA        NUMERIC(3),	               -- Hemosidera Histology performed
	DON_LI_OTH_HISTOLOGY_OTHER             NUMERIC(3),	               -- Other Histology performed
	DON_MAP_FINAL                      DOUBLE PRECISION,	               -- MAP (final) //Map:
	DON_MAP_INIT                       DOUBLE PRECISION,	               -- MAP (initial) //Map: (mm/Hg)
	DON_MAX_CREAT                      DOUBLE PRECISION,	               -- Maximum Donor Creatinine
	DON_MED_EXAMINER                       NUMERIC(8),	-- MDXMRPRT    -- Medical Examiner/Coroner
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_MEET_DOUBLE_KI_CRIT                NUMERIC(3),	               -- Donor meets double KI allocation criteria
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_NON_HR_BEAT_CNTL                   VARCHAR(1),	               -- Controlled
	DON_NON_HR_BEAT_CORE_COOL              VARCHAR(1),	               -- Core Cooling Used
	DON_OPO_CTR_ID                         NUMERIC(4),	               -- DON_OPO_ Center ID
	DON_PA_DIAST_FINAL                 DOUBLE PRECISION,	               -- PA Diastolic (final) //PA Diastolic:
	DON_PA_DIAST_INIT                  DOUBLE PRECISION,	               -- PA Diastolic (initial) //PA Diastolic: (mm/Hg)
	DON_PA_SYST_FINAL                  DOUBLE PRECISION,	               -- PA Systolic (final) //PA Systolic:
	DON_PA_SYST_INIT                   DOUBLE PRECISION,	               -- PA Systolic (initial) //PA Systolic: (mm/Hg)
	DON_PCO2                           DOUBLE PRECISION,	               -- pCO2:
	DON_PCWP_FINAL                     DOUBLE PRECISION,	               -- PCWP (final) //PCWP:
	DON_PCWP_INIT                      DOUBLE PRECISION,	               -- PCWP (initial) //PCWP: (mm/Hg)
	DON_PEAK_SERUM_CREAT               DOUBLE PRECISION,	               -- Peak Serum Creatinine
	DON_PH                             DOUBLE PRECISION,	               -- Blood PH:
	DON_PO2                            DOUBLE PRECISION,	               -- Lung pO2 on 100%
	DON_PO2_DONE                           VARCHAR(1),	               -- Lung - Was pO2 done:
	DON_PO2_FIO2                       DOUBLE PRECISION,	               -- Lung pO2 on Fio2 //If Yes, Lung pO2 on FiO2 of:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_PRERECOV_MEDS                      VARCHAR(1),	               -- Prerecovery Medication
	DON_PRERECOV_STEROIDS                  VARCHAR(1),	               -- Pre-Recov Meds given Donor: Steroids
	DON_PRERECOV_T3                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T3
	DON_PRERECOV_T4                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T4
	DON_PREV_GASTRO_DISEASE                VARCHAR(1),	               -- Previous Gastrointestinal Disease
	DON_PROTEIN_URINE                      VARCHAR(1),	               -- Protein in Urine
	DON_PULM_CATH                          VARCHAR(1),	               -- Was a pulmonary artery catheter placed:
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_OUT_US                       VARCHAR(1),	               -- Recovered Outside the U.S.
	DON_REF_DT                                   DATE,	-- MMDDYY      -- Referral Date
	DON_REF_FLG                            VARCHAR(1),	               -- Referral Flag
	DON_RESUSCIT_DURATION              DOUBLE PRECISION,	               -- Duration of Resuscitation
	DON_RPR_VDRL                           VARCHAR(2),	-- $SRLSTT     -- RPR-VDRL
	DON_RT_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (right)
	DON_RT_KI_GLOMER_SCLER_PCT             NUMERIC(8),	-- KGLMR       -- % Glomerulosclerosis (Right Kidney)
	DON_RT_KI_PUMP                         VARCHAR(1),	               -- Pump (Right Kidney)
	DON_RT_KI_RESIST_PRIOR_SHIP        DOUBLE PRECISION,	               -- Final Resistance Prior to Shipping (right) //Final Resistance Prior to Shipping:
	DON_RT_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (right)://Transferred on pump:
	DON_RT_LU_BRONCHO                      NUMERIC(8),	-- ABNLBRNC    -- Right Lung Bronchoscopy:
	DON_SERUM_AMYLASE                  DOUBLE PRECISION,	               -- Serum Amylase
	DON_SGOT                           DOUBLE PRECISION,	               -- SGOT/AST
	DON_SGPT                           DOUBLE PRECISION,	               -- SGPT/ALT
	DON_SKIN_CANCER                        VARCHAR(1),	               -- Skin
	DON_SODIUM                         DOUBLE PRECISION,	               -- Serum Sodium //Last Serum Sodium Prior to Procurement:
	DON_SVR_FINAL                      DOUBLE PRECISION,	               -- SVR (final) //SVR:
	DON_SVR_INIT                       DOUBLE PRECISION,	               -- SVR (initial) //SVR: (dynes/sec/cm)^5)
	DON_TARGET_SOURCE1                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class II:
	DON_TATTOOS                            VARCHAR(1),	               -- Lifestyle Factors: Tattoos
	DON_TM_FOR_XMATCH                      VARCHAR(1),	               -- Is there time for crossmatch?
	DON_TOT_BILI                       DOUBLE PRECISION,	               -- Total Bilirubin
	DON_TX                             DOUBLE PRECISION,	               -- Max disposition for Donor, 5(recovered only) or 6(transplanted)
	DON_TXFUS_TERMINAL_HOSP_NUM            NUMERIC(8),	-- TRANSFUS    -- Number of transfusions during this (terminal) hospitalization:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_USE_DOUBLE_KI                      VARCHAR(1),	               -- Use Double KI allocation, not Expanded Donor
	DON_VASODIL                            VARCHAR(1),	               -- Vasodilators
	DON_VESSELS_GT50_STENOSIS          DOUBLE PRECISION,	               -- If Abnormal, # of Vessels with > 50% Stenosis
	DON_WALL_ABNORM_GLOB                   VARCHAR(1),	               -- Wall Abnormalities //Global:
	DON_WALL_ABNORM_SEG                    VARCHAR(1),	               -- Wall Abnormalities //Segmental:
	DON_WARM_ISCH_TM_MINS              DOUBLE PRECISION,	               -- Estimated Warm Ischemic Time in minutes
	DON_WEST_NILE_NAT                      VARCHAR(2),	               -- Donor RNA Nat serology value for West Nile test
	DON_WGT_KG                         DOUBLE PRECISION,	               -- Donor/s Weight in kilograms
	PERS_ID                                NUMERIC(8),	               -- Unique Person ID for patient. Based on matches in similarity of SSN, DOB, Names and Nicknames, Gender, etc.
	PRIMARY KEY (DONOR_ID, PERS_ID)
);


CREATE TABLE CAND_LIIN (
	CAN_ABO                             VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_ACADEMIC_LEVEL                     NUMERIC(8),	-- ACDMACTV    -- Academic Activity Level:
	CAN_ACADEMIC_PROGRESS                  NUMERIC(8),	-- ACDMPRG     -- Academic Progress:
	CAN_ACPT_A2_DON                        VARCHAR(1),	               -- Accept A2 donor?
	CAN_ACPT_ABO_INCOMP                    VARCHAR(1),	               -- Accept an incompatible blood type?
	CAN_ACPT_EXTRACORP_LI                  VARCHAR(1),	               -- Accept an Extra-corporeal Liver?
	CAN_ACPT_HBC_POS                       VARCHAR(1),	               -- Accept an Hepatitis B Core Antibody Positive Donor?
	CAN_ACPT_HCV_POS                       VARCHAR(1),	               -- Accept an HCV Antibody Positive Donor?
	CAN_ACPT_LI_SEG                        VARCHAR(1),	               -- Accept LI segment
	CAN_ACPT_ORG_OTHER_TEAM                VARCHAR(1),	               -- Accept Intestine if Intestine removed by another procurement team?
	CAN_ACPT_PROCUR_KI                     VARCHAR(1),	               -- Accept Intestine if Kidney procured?
	CAN_ACPT_PROCUR_LI                     VARCHAR(1),	               -- Accept Intestine if Liver procured?
	CAN_ACPT_PROCUR_PA                     VARCHAR(1),	               -- Accept Intestine if Pancreas procured?
	CAN_ACTIVATE_DT                              DATE,	-- MMDDYY      -- Activation Date - date/time waiting time clock started
	CAN_AGE_AT_LISTING                     NUMERIC(8),	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING       DOUBLE PRECISION,	               -- Calculated Candidate Age in Months at Listing
	CAN_ANASTOMOSIS                        NUMERIC(3),	               -- Was anastomosis initiated?
	CAN_ANESTH_PRIOR_DEATH                 NUMERIC(3),	               -- Did the patient go to the operating room and receive anesthesia for transplant prior to death?
	CAN_ANGINA                             NUMERIC(8),	-- ANGINA      -- Angina/Coronary Artery Disease
	CAN_ANGINA_CAD                         NUMERIC(8),	-- ANGNACAD    -- Angina:
	CAN_ARTIFICIAL_LI                      NUMERIC(3),	               -- Life Support://Artifical Liver
	CAN_ASCITES                            VARCHAR(1),	               -- Ascites
	CAN_BACTERIA_PERIT                     VARCHAR(1),	               -- Spontaneous Bacterial Peritonitis
	CAN_BMI                            DOUBLE PRECISION,	               -- BMI:
	CAN_CEREB_VASC                         VARCHAR(1),	               -- Symptomatic Cerebrovascular Disease
	CAN_CITIZENSHIP                        NUMERIC(8),	-- CTZNLDTC    -- Patient/s Citizenship
	CAN_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	CAN_CTP_SCORE                      DOUBLE PRECISION,	               -- Candidate/s CTP score (used for MAOB Liver Variance
	CAN_DEATH_DT                                 DATE,	-- MMDDYY      -- If removed due to Death, date of death
	CAN_DGN                                NUMERIC(8),	-- DGN         -- Primary Diagnosis
	CAN_DGN2                               NUMERIC(8),	-- DGN         -- Secondary Diagnosis
	CAN_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	CAN_DIAB                               NUMERIC(8),	-- DBINSLDP    -- Diabetes
	CAN_DIAB_TY                            NUMERIC(8),	-- DIABTY      -- Diabetes
	CAN_DIAL                               NUMERIC(8),	-- DIALTYLI    -- Dialysis
	CAN_DRUG_TREAT_COPD                    VARCHAR(1),	               -- Drug Treated COPD
	CAN_DRUG_TREAT_HYPERTEN                VARCHAR(1),	               -- Drug Treated Systemic Hypertension
	CAN_ECMO                               NUMERIC(3),	               -- Life Support: ECMO
	CAN_EDUCATION                          NUMERIC(8),	-- EDLEVEL     -- Patient/s Educational Status
	CAN_ELECTROLYTE                        VARCHAR(1),	               -- Unmanageable fluid-electrolyte losses (IN Pediatric Only)
	CAN_EMPL_STAT                          NUMERIC(8),	-- EMPLSTAT    -- Patient/s Employment Status - Pre-6/30/2004
	CAN_ENCEPH                             VARCHAR(1),	               -- Encephalopathy
	CAN_ENDWLFU                                  DATE,	-- MMDDYY      -- Candidate cohort censoring date
	CAN_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Patient Ethnicity
	CAN_EXHAUST_VASC_ACCESS                VARCHAR(1),	               -- Exhausted Vascular Access
	CAN_FOLLOWS_OPO_ALLOC                  NUMERIC(3),	               -- Does candidate follow the OPO/s current allocation
	CAN_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Patient/s Functional Status
	CAN_FUNGAL_SEPSIS                      VARCHAR(1),	               -- Fungal sepsis (IN Pediatric Only)
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_HGT_CM                         DOUBLE PRECISION,	               -- Candidate/s Height (stored in cm)
	CAN_HGT_WGT_DT                               DATE,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	CAN_IABP                               NUMERIC(3),	               -- Life Support: IABP
	CAN_INIT_ACT_STAT_CD                   NUMERIC(8),	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                          NUMERIC(8),	-- CANDSTAT    -- Initial Status of Patient
	CAN_IV_INOTROP                         NUMERIC(3),	               -- Life Support: IV Inotropes
	CAN_LAST_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                   DOUBLE PRECISION,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                       NUMERIC(8),	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                      DOUBLE PRECISION,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                        NUMERIC(8),	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                       DOUBLE PRECISION,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT               DOUBLE PRECISION,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM              DOUBLE PRECISION,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                          NUMERIC(8),	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support
	CAN_LIFE_SUPPORT_OTHER                 NUMERIC(3),	               -- Life Support: Other Mechanism
	CAN_LISTING_CTR_ID                     NUMERIC(4),	               -- CAN_LISTING_ Center ID
	CAN_LISTING_DT                               DATE,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_LISTING_OPO_ID                     NUMERIC(4),	               -- OPO Serving Listing Center
	CAN_LIVING_DON_TX                      NUMERIC(3),	               -- Has Candidate received a Living Donor transplant? (used for Liver Candidates)
	CAN_LI_DYSFUNCTN                       VARCHAR(1),	               -- Liver Dysfunction
	CAN_LOSS_VASC_ACCESS                   VARCHAR(1),	               -- Loss of two or more vascular access sites (IN Pediatric Only)
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_MALIG_TY                           NUMERIC(8),	-- MALIG       -- Previous Malignancy Type(s)
	CAN_MALIG_TY_BREAST                DOUBLE PRECISION,	               -- Previous Malignancy - Breast (14)
	CAN_MALIG_TY_CNS_TUMOR             DOUBLE PRECISION,	               -- Previous Malignancy - CNS Tumor (14)
	CAN_MALIG_TY_GENITOURINARY         DOUBLE PRECISION,	               -- Previous Malignancy - Genitourinary (14)
	CAN_MALIG_TY_HEPBLAST              DOUBLE PRECISION,	               -- Previous Malignancy - Hepatoblastoma (14)
	CAN_MALIG_TY_HEPCARCINOMA          DOUBLE PRECISION,	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	CAN_MALIG_TY_LEUK_LYMPH            DOUBLE PRECISION,	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	CAN_MALIG_TY_LIVER                 DOUBLE PRECISION,	               -- Previous Malignancy - Liver (14)
	CAN_MALIG_TY_LU                    DOUBLE PRECISION,	               -- Previous Malignancy - Lung (14)
	CAN_MALIG_TY_OTHER                 DOUBLE PRECISION,	               -- Previous Malignancy - Other, specify (14)
	CAN_MALIG_TY_SKIN_MEL              DOUBLE PRECISION,	               -- Previous Malignancy - Skin Melanoma (14)
	CAN_MALIG_TY_SKIN_NON_MEL          DOUBLE PRECISION,	               -- Previous Malignancy - Skin Non-Melanoma (14)
	CAN_MALIG_TY_THROAT                DOUBLE PRECISION,	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	CAN_MALIG_TY_THYROID               DOUBLE PRECISION,	               -- Previous Malignancy - Thyroid (14)
	CAN_MALIG_TY_UNK                   DOUBLE PRECISION,	               -- Previous Malignancy - Type Unknown (14)
	CAN_MAX_AGE                        DOUBLE PRECISION,	               -- Maximum acceptable Donor age
	CAN_MAX_MILE                       DOUBLE PRECISION,	               -- Maximum miles the implant team will travel
	CAN_MAX_WGT                        DOUBLE PRECISION,	               -- Maximum acceptable Donor Weight
	CAN_MED_COND                           NUMERIC(8),	-- MEDCOND     -- Medical Condition
	CAN_MIN_AGE                        DOUBLE PRECISION,	               -- Minimum acceptable Donor Age
	CAN_MIN_WGT                        DOUBLE PRECISION,	               -- Minimum acceptable Donor Weight
	CAN_MOST_RECENT_CREAT              DOUBLE PRECISION,	               -- Most Recent Absolute Creatinine
	CAN_MOST_RECENT_HGT_CM             DOUBLE PRECISION,	               -- Candidate/s most recent Waitlist Height in centimeter
	CAN_MOST_RECENT_WGT_KG             DOUBLE PRECISION,	               -- Candidate/s most recent Waitlist Weight in kilograms
	CAN_MOTOR_DEVELOP                      NUMERIC(8),	-- MOTDEV      -- Motor Development (Ped Only)
	CAN_MUSCLE_WASTING                     VARCHAR(1),	               -- Marked Muscle Wasting
	CAN_NEOPLASM                           VARCHAR(1),	               -- Neoplasm
	CAN_NEW_PREV_PI_TX                     VARCHAR(1),	               -- Previous Pancreas Islet Transplantation:
	CAN_NON_RECON_GI                       VARCHAR(1),	               -- Non-Reconstructible GI tract (IN Pediatric Only)
	CAN_PEPTIC_ULCER                       NUMERIC(8),	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PERM_STATE                         VARCHAR(2),	-- $STATE      -- Patient/s Permanent State
	CAN_PGE                                NUMERIC(3),	               -- Life Support: PGE
	CAN_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCP      -- Physical Capacity:
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PRELIM_XMATCH_REQUEST              VARCHAR(1),	               -- Preliminary Crossmatch Required
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
	CAN_PREV_BONE_MARROW_DT                      DATE,	-- MMDDYY      -- Date of Latest Bone Marrow Transplant
	CAN_PREV_BONE_MARROW_TX            DOUBLE PRECISION,	               -- Number Bone Marrow Transplants
	CAN_PREV_HL                        DOUBLE PRECISION,	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                        DOUBLE PRECISION,	               -- Prev Heart Tx
	CAN_PREV_IN                        DOUBLE PRECISION,	               -- Prev Intestine Tx
	CAN_PREV_KI                        DOUBLE PRECISION,	               -- Prev Kidney Tx
	CAN_PREV_KP                        DOUBLE PRECISION,	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                        DOUBLE PRECISION,	               -- Prev Liver Tx
	CAN_PREV_LU                        DOUBLE PRECISION,	               -- Prev Lung Tx
	CAN_PREV_PA                        DOUBLE PRECISION,	               -- Prev Pancreas Tx
	CAN_PREV_TX                        DOUBLE PRECISION,	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Source of Payment//Primary:
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                               NUMERIC(8),	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_RECUR_SEPSIS                       VARCHAR(1),	               -- Recurrent sepsis (IN Pediatric Only)
	CAN_REM_CD                             NUMERIC(8),	-- REMCD       -- Reason why candidate was removed (removal code)
	CAN_REM_COD                            NUMERIC(8),	-- COD         -- Cause of Death
	CAN_REM_DT                                   DATE,	-- MMDDYY      -- rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt
	CAN_SECONDARY_PAY                      NUMERIC(8),	-- SNDSRCPY    -- Source of Payment//Secondary:
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data: A =Active Waitlist,R= Removed from Waitlist,L=Live Don Organ Recipient never on waitlist
	CAN_STAT_EXTEND_FLG                    NUMERIC(3),	               -- Status Extension granted for Liver candidate
	CAN_TIEBREAKER_DT                            DATE,	-- MMDDYY      -- Tiebreaker Date - used as the ultimate tiebreaker
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                    DOUBLE PRECISION,	               -- Total Serum Albumin
	CAN_TOT_BILI                       DOUBLE PRECISION,	               -- Total Bilirubin (IN Pediatric Only)
	CAN_TRR_EXISTS                     DOUBLE PRECISION,	               -- TRR found for this PX_ID-org_ty
	CAN_TX_COUNTRY                         NUMERIC(8),	-- CTRYID      -- Country of transplant, if outside the US
	CAN_VAD_TAH                            NUMERIC(8),	-- VADTAH      -- Life Support: VAD/TAH
	CAN_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Variceal Bleeding within Last Two Weeks
	CAN_VENTILATOR                         NUMERIC(3),	               -- Life Support: Ventilator
	CAN_WGT_KG                         DOUBLE PRECISION,	               -- Candidate/s Weight in kilograms
	CAN_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	CAN_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- Working for income//If No, Not Working Due To:
	CAN_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- Working for income//If Yes:
	CAN_YEAR_ENTRY_US                  DOUBLE PRECISION,	               -- Year of Entry to the U.S.
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	PERS_ID                                NUMERIC(8),	               -- Unique Person ID for Recipient
	PERS_NEXTTX                                  DATE,	-- MMDDYY      -- Transplant Date
	PERS_NEXTTX_TRR_ID                     NUMERIC(8),	               -- Unique identifier for TRR - unique key
	PERS_OPTN_DEATH_DT                           DATE,	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RESTRICT_DEATH_DT                       DATE,	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_SSA_DEATH_DT                            DATE,	-- MMDDYY      -- Death date determined from SSA database
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier
	REC_TX_DT                                    DATE,	-- MMDDYY      -- Transplant Date
	REC_TX_PROCEDURE_TY                    NUMERIC(8),	-- TXPROC      -- Transplant Procedure Type
	WL_ORG                                 VARCHAR(4),	-- $WLORG      -- Organ of this waitlisted record
	PRIMARY KEY (PX_ID, PERS_ID)
);


CREATE TABLE TX_LI (
	CANHX_MPXCPT_HCC_APPLY_IND      DOUBLE PRECISION,	               -- Ever Applied for an HCC exception
	CANHX_MPXCPT_HCC_APPROVE_IND       DOUBLE PRECISION,	               -- Ever Approved for an HCC exception
	CAN_ABO                                VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_AGE_AT_LISTING                     NUMERIC(8),	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING       DOUBLE PRECISION,	               -- Calculated Candidate Age in Months at Listing
	CAN_ANGINA                             NUMERIC(8),	-- ANGINA      -- Angina/Coronary Artery Disease
	CAN_ANGINA_CAD                         NUMERIC(8),	-- ANGNACAD    -- Angina:
	CAN_BACTERIA_PERIT                     VARCHAR(1),	               -- Spontaneous Bacterial Peritonitis
	CAN_CEREB_VASC                         VARCHAR(1),	               -- Symptomatic Cerebrovascular Disease
	CAN_CITIZENSHIP                        NUMERIC(8),	-- CTZNLDTC    -- Patient/s Citizenship
	CAN_DGN                                NUMERIC(8),	-- DGN         -- Primary Diagnosis
	CAN_DGN2                               NUMERIC(8),	-- DGN         -- Secondary Diagnosis
	CAN_DIAB                               NUMERIC(8),	-- DBINSLDP    -- Diabetes
	CAN_DIAB_TY                            NUMERIC(8),	-- DIABTY      -- Diabetes
	CAN_DRUG_TREAT_COPD                    VARCHAR(1),	               -- Drug Treated COPD
	CAN_DRUG_TREAT_HYPERTEN                VARCHAR(1),	               -- Drug Treated Systemic Hypertension
	CAN_EDUCATION                          NUMERIC(8),	-- EDLEVEL     -- Patient/s Educational Status
	CAN_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Patient Ethnicity
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_HGT_CM                         DOUBLE PRECISION,	               -- Candidate/s Height (stored in cm)
	CAN_INIT_ACT_STAT_CD                   NUMERIC(8),	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                          NUMERIC(8),	-- CANDSTAT    -- Initial Status of Patient
	CAN_LAST_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                   DOUBLE PRECISION,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                       NUMERIC(8),	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                      DOUBLE PRECISION,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                        NUMERIC(8),	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                       DOUBLE PRECISION,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT               DOUBLE PRECISION,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM              DOUBLE PRECISION,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                          NUMERIC(8),	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LISTING_DT                               DATE,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_PEPTIC_ULCER                       NUMERIC(8),	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
	CAN_PREV_HL                        DOUBLE PRECISION,	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                        DOUBLE PRECISION,	               -- Prev Heart Tx
	CAN_PREV_IN                        DOUBLE PRECISION,	               -- Prev Intestine Tx
	CAN_PREV_KI                        DOUBLE PRECISION,	               -- Prev Kidney Tx
	CAN_PREV_KP                        DOUBLE PRECISION,	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                        DOUBLE PRECISION,	               -- Prev Liver Tx
	CAN_PREV_LU                        DOUBLE PRECISION,	               -- Prev Lung Tx
	CAN_PREV_PA                        DOUBLE PRECISION,	               -- Prev Pancreas Tx
	CAN_PREV_TX                        DOUBLE PRECISION,	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                               NUMERIC(8),	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_REM_CD                             NUMERIC(8),	-- REMCD       -- Reason why candidate was removed
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                    DOUBLE PRECISION,	               -- Total Serum Albumin
	CAN_WGT_KG                         DOUBLE PRECISION,	               -- Candidate/s Weight in kilograms
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DONOR_ID_VESSEL                    DOUBLE PRECISION,	               -- Encrypted Vessel Donor ID
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                            DOUBLE PRECISION,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                  DOUBLE PRECISION,	               -- Donor/s Age in Months
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_CAD_DON_COD                        NUMERIC(8),	-- DONCOD      -- Donor/s Cause of Death
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CITIZENSHIP                        NUMERIC(8),	-- CITIZEN     -- Donor/s Citizenship
	DON_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	DON_COD_DON_STROKE                     NUMERIC(3),	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CREAT                          DOUBLE PRECISION,	               -- Serum Creatinine
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                       NUMERIC(8),	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                         NUMERIC(8),	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DR1                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_KI                      NUMERIC(3),	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HAPLO_TY_MATCH                     NUMERIC(8),	-- HAPLOTY     -- Haplotype Match Between Live Donor & Recipient
	DON_HGT_CM                         DOUBLE PRECISION,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                         NUMERIC(3),	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_CANCER                        NUMERIC(8),	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                          NUMERIC(8),	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                      NUMERIC(8),	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HTN                                NUMERIC(3),	               -- Donor history of hypertension (1= yes, 0= no)
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_LIVING_DON_COD                     NUMERIC(8),	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_OPO_CTR_ID                         NUMERIC(4),	               -- DON_OPO_ Center ID
	DON_ORG_SHARED                     DOUBLE PRECISION,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_PH                             DOUBLE PRECISION,	               -- Blood PH:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RELATIONSHIP_TY                    NUMERIC(8),	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SGOT                           DOUBLE PRECISION,	               -- SGOT/AST
	DON_SGOT_PREOP                     DOUBLE PRECISION,	               -- SGOT/AST:
	DON_SGPT_PREOP                     DOUBLE PRECISION,	               -- SGPT/ALT:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_WARM_ISCH_TM_MINS              DOUBLE PRECISION,	               -- Estimated Warm Ischemic Time in minutes
	DON_WGT_KG                         DOUBLE PRECISION,	               -- Donor/s Weight in kilograms
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PERS_OPTN_COD                          NUMERIC(8),	-- COD         -- Person Cause of Death
	PERS_OPTN_DEATH_DT                           DATE,	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RELIST                                  DATE,	-- MMDDYY      -- Re-list date after current tx
	PERS_RESTRICT_DEATH_DT                       DATE,	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_RETX                                    DATE,	-- MMDDYY      -- ReTx date after current tx
	PERS_RETX_TRR_ID                       NUMERIC(8),	               -- TRR_ID of ReTx after current tx
	PERS_SSA_DEATH_DT                            DATE,	-- MMDDYY      -- Death date determined from SSA database
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier
	REC_A1                                 NUMERIC(8),	-- ALOCUS      -- Recipient/s HLA - A (1) antigen
	REC_A2                                 NUMERIC(8),	-- ALOCUS      -- Recipient/s HLA - A (2) antigen
	REC_ACADEMIC_LEVEL                     NUMERIC(8),	-- ACDMACTV    -- Academic Activity Level:
	REC_ACADEMIC_PROGRESS                  NUMERIC(8),	-- ACDMPRG     -- Academic Progress:
	REC_ACUTE_REJ_BIOPSY_CONFIRMED         NUMERIC(8),	-- BPSCNFM     -- Was biopsy done to confirm acute rejection:
	REC_ACUTE_REJ_EPISODE                  NUMERIC(8),	-- ACREJEP     -- Did patient have any acute rejection episodes between transplant and discharge:
	REC_ADMISSION_DT                             DATE,	-- MMDDYY      -- Date of Admission to Tx Center
	REC_AGE_AT_TX                          NUMERIC(8),	-- AGE9A       -- Age at TX
	REC_AGE_IN_MONTHS_AT_TX            DOUBLE PRECISION,	               -- Calculated Recipient Age in Months at TX
	REC_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral Therapy:
	REC_ANTIVRL_THERAPY_TY                 NUMERIC(8),	-- ANTLVIRL    -- If Anti-viral Therapies, check all that apply
	REC_ANTIVRL_THERAPY_TY_ACYCLOVIR       NUMERIC(3),	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOGAM         NUMERIC(3),	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOVENE        NUMERIC(3),	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	REC_ANTIVRL_THERAPY_TY_EPIVIR          NUMERIC(3),	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	REC_ANTIVRL_THERAPY_TY_FLU_VAC         NUMERIC(3),	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	REC_ANTIVRL_THERAPY_TY_GAMIMUNE        NUMERIC(3),	               -- Anti-viral Therapy - Gamimune (11)
	REC_ANTIVRL_THERAPY_TY_GAMMAGARD       NUMERIC(3),	               -- Anti-viral Therapy - Gammagard (11)
	REC_ANTIVRL_THERAPY_TY_HBIG            NUMERIC(3),	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	REC_ANTIVRL_THERAPY_TY_OTHER           NUMERIC(3),	               -- Anti-viral Therapy - Other, Specify (11)
	REC_ANTIVRL_THERAPY_TY_VALCYTE         NUMERIC(3),	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	REC_ANTIVRL_THERAPY_TY_VALTREX         NUMERIC(3),	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	REC_ARTIFICIAL_LI                      NUMERIC(3),	               -- Artificial Liver
	REC_ASCITES                            VARCHAR(1),	               -- Risk Factors: Ascites
	REC_A_MM_EQUIV_CUR                 DOUBLE PRECISION,	               -- Num of A mismatches - current equivalent match
	REC_A_MM_EQUIV_TX                  DOUBLE PRECISION,	               -- Num of A mismatches - equivalent match @ tx
	REC_B1                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BACTERIA_PERIT                     VARCHAR(1),	               -- Risk Factors: Spontaneous Bacterial Peritonitis
	REC_BMI                            DOUBLE PRECISION,	               -- BMI:
	REC_B_MM_EQUIV_CUR                 DOUBLE PRECISION,	               -- Num of B mismatches - current equivalent match
	REC_B_MM_EQUIV_TX                  DOUBLE PRECISION,	               -- Num of B mismatches - current match @ tx
	REC_CMV_IGG                            VARCHAR(2),	               -- CMV IgG
	REC_CMV_IGM                            VARCHAR(2),	               -- CMV IgM
	REC_CMV_STAT                           VARCHAR(2),	               -- Pre-Tx Serology Test Results: Cytomegalovirus
	REC_COD                                NUMERIC(8),	-- THCOD       -- Recipient/s Cause of Death
	REC_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	REC_COLD_ISCH_TM                   DOUBLE PRECISION,	               -- Preserv: Total Cold Ischemic Time
	REC_CTR_ID                             NUMERIC(4),	               -- REC_ Center ID
	REC_CUR_CTR_ID                         NUMERIC(4),	               -- REC_CUR_ Center ID
	REC_CUR_PX_STAT                        VARCHAR(1),	-- $CRPXSTT    -- System field based on latest Follow-Up px_stat used to determine creation of next Follow-Up Form
	REC_DGN                                NUMERIC(8),	-- DGN         -- Primary Diagnosis
	REC_DGN2                               NUMERIC(8),	-- DGN         -- Secondary Diagnosis/path. confirmed LI dgn at discharge
	REC_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	REC_DISCHRG_ALBUMIN                DOUBLE PRECISION,	               -- Serum Albumin at Discharge
	REC_DISCHRG_ALKPHOS                DOUBLE PRECISION,	               -- Alkaline Phosphate at Discharge
	REC_DISCHRG_CREAT                  DOUBLE PRECISION,	               -- Serum Creatinine at Discharge
	REC_DISCHRG_DT                               DATE,	-- MMDDYY      -- Transplant Discharge Date
	REC_DISCHRG_INR                    DOUBLE PRECISION,	               -- INR:
	REC_DISCHRG_LAB_DT                           DATE,	-- MMDDYY      -- Discharge Lab Date
	REC_DISCHRG_SGOT                   DOUBLE PRECISION,	               -- SGOT/AST at Discharge
	REC_DISCHRG_SGPT                   DOUBLE PRECISION,	               -- SGPT/ALT at Discharge
	REC_DR1                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DR_MM_EQUIV_CUR                DOUBLE PRECISION,	               -- Num of DR mismatches - current equivalent match
	REC_DR_MM_EQUIV_TX                 DOUBLE PRECISION,	               -- Num of DR mismatches - current match @ tx
	REC_EBV_STAT                           VARCHAR(2),	               -- EBV serology status
	REC_EMPL_STAT_PRE04                    NUMERIC(8),	-- EMPLSTAT    -- Recipient/s Employment Status - Pre-6/30/2004
	REC_FAIL_BILIARY                       VARCHAR(1),	               -- Cause of Graft Failure: Biliary Tract Complication
	REC_FAIL_DT                                  DATE,	-- MMDDYY      -- Date of Graft Failure
	REC_FAIL_HEP_DENOVO                    VARCHAR(1),	               -- Cause of Graft Failure: Hepatitis: DeNovo
	REC_FAIL_HEP_RECUR                     VARCHAR(1),	               -- Cause of Graft Failure: Hepatitis: Recurrent
	REC_FAIL_INFECT                        VARCHAR(1),	               -- Cause of Graft Failure: Infection
	REC_FAIL_PRIME_GRAFT_FAIL              VARCHAR(1),	               -- Cause of Graft Failure: Primary Graft Failure
	REC_FAIL_RECUR_DISEASE                 VARCHAR(1),	               -- Cause of Graft Failure: Recurrent Disease
	REC_FAIL_REJ_ACUTE                     VARCHAR(1),	               -- Cause of Graft Failure: Acute Rejection
	REC_FAIL_VASC_THROMB                   VARCHAR(1),	               -- Cause of Graft Failure: Vascular Thrombosis
	REC_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Functional Status
	REC_GRAFT_STAT                         VARCHAR(1),	               -- Graft Status
	REC_HBV_ANTIBODY                       VARCHAR(2),	               -- HBV: Core Antibody//Core Antibody:
	REC_HBV_SURF_ANTIGEN                   VARCHAR(2),	               -- HBV: Surface Antigen//Surface Antigen:
	REC_HCV_STAT                           VARCHAR(2),	               -- HCV serology status
	REC_HEPATIC_ARTER_THROMB               VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only)
	REC_HEPATIC_OUTFLOW_OBSTRUCT           VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only)
	REC_HGT_CM                         DOUBLE PRECISION,	               -- Recipient/s Height in Centimeters
	REC_HGT_WGT_DT                               DATE,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	REC_HISTO_TX_ID                        NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_HIV_STAT                           VARCHAR(2),	               -- HIV serology status
	REC_HOSP_90_DAYS                       VARCHAR(1),	               -- Was patient hospitalizied during the last 90 days prior to the transplant admission:
	REC_IMMUNO_MAINT_MEDS                  VARCHAR(1),	               -- Are Any Meds Given Currently for Maint. Or Anti-Rej?
	REC_INOTROP_BP_SUPPORT                 VARCHAR(1),	               -- Risk Factors: Inotropes for Blood Pressure Support
	REC_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support:
	REC_LIFE_SUPPORT_OTHER                 NUMERIC(3),	               -- Life Support: Other Mechanism
	REC_LI_TY                              NUMERIC(8),	-- SPLITTY     -- Split Type:
	REC_MALIG                              VARCHAR(1),	               -- Pretransplant Malignancy
	REC_MALIG_TY                           NUMERIC(8),	-- MALIG       -- Malignancies//If yes, specify type:
	REC_MALIG_TY_BREAST                    NUMERIC(3),	               -- Previous Malignancy - Breast (14)
	REC_MALIG_TY_CNS_TUMOR                 NUMERIC(3),	               -- Previous Malignancy - CNS Tumor (14)
	REC_MALIG_TY_GENITOURINARY             NUMERIC(3),	               -- Previous Malignancy - Genitourinary (14)
	REC_MALIG_TY_HEPBLAST                  NUMERIC(3),	               -- Previous Malignancy - Hepatoblastoma (14)
	REC_MALIG_TY_HEPCARCINOMA              NUMERIC(3),	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	REC_MALIG_TY_LEUK_LYMPH                NUMERIC(3),	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	REC_MALIG_TY_LIVER                     NUMERIC(3),	               -- Previous Malignancy - Liver (14)
	REC_MALIG_TY_LU                        NUMERIC(3),	               -- Previous Malignancy - Lung (14)
	REC_MALIG_TY_OTHER                     NUMERIC(3),	               -- Previous Malignancy - Other, specify (14)
	REC_MALIG_TY_SKIN_MEL                  NUMERIC(3),	               -- Previous Malignancy - Skin Melanoma (14)
	REC_MALIG_TY_SKIN_NON_MEL              NUMERIC(3),	               -- Previous Malignancy - Skin Non-Melanoma (14)
	REC_MALIG_TY_THROAT                    NUMERIC(3),	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	REC_MALIG_TY_THYROID                   NUMERIC(3),	               -- Previous Malignancy - Thyroid (14)
	REC_MALIG_TY_UNK                       NUMERIC(3),	               -- Previous Malignancy - Type Unknown (14)
	REC_MED_COND                           NUMERIC(8),	-- MEDCOND     -- Medical Condition
	REC_MM_EQUIV_CUR                   DOUBLE PRECISION,	               -- Num of hla mismatches - current equivalent match
	REC_MM_EQUIV_TX                    DOUBLE PRECISION,	               -- Num of hla mismatches - current match @ tx
	REC_MOTOR_DEVELOP                      NUMERIC(8),	-- MOTDEV      -- Motor Development (Ped Only)
	REC_ON_VENTILATOR                      VARCHAR(1),	               -- Risk Factors: On Ventilator
	REC_OPO_ID                             NUMERIC(4),	               -- OPO Serving Transplant Center
	REC_OTHER_THERAPY                      VARCHAR(1),	               -- Other Therapies:
	REC_OTHER_THERAPY_TY                   NUMERIC(8),	-- THRPYOTH    -- If Other Therapies, check all that apply
	REC_OTHER_THERAPY_TY_PHOTOPH           NUMERIC(3),	               -- Other Therapy - Photopheresis (3)
	REC_OTHER_THERAPY_TY_PLASMAPH          NUMERIC(3),	               -- Other Therapy - Plasmapheresis (3)
	REC_OTHER_THERAPY_TY_TLI               NUMERIC(3),	               -- Other Therapy - Total Lymphoid Irradiation (3)
	REC_PB_CREDIT                          VARCHAR(1),	               -- Payback credit issued to sending OPO
	REC_PB_DEBT                            VARCHAR(1),	               -- Payback debt issued to recipient OPO
	REC_PB_SHARE_TY                        NUMERIC(8),	-- PBSHRTYA    -- Payback share type
	REC_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence:
	REC_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCP      -- Physical Capacity:
	REC_PORTAL_HYPERTEN_BLEED              VARCHAR(1),	               -- Did Patient receive 5 or more units of packed red blood cells within 48 hours prior to transplantation due to spontaneous portal hypertensive bleeding:
	REC_PORTAL_VEIN                        VARCHAR(1),	               -- Risk Factors: Portal Vein Thrombosis
	REC_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	REC_POSTX_LOS                      DOUBLE PRECISION,	               -- Time after first Tx, same stay
	REC_PRETX_ALBUMIN                  DOUBLE PRECISION,	               -- PreTx : Serum Albumin
	REC_PRETX_CREAT                    DOUBLE PRECISION,	               -- PreTx : Serum Creatinine
	REC_PRETX_INR                      DOUBLE PRECISION,	               -- PreTx : Prothrombin INR
	REC_PRETX_LAB_DT                             DATE,	-- MMDDYY      -- Pretransplant Lab Date
	REC_PRETX_TOT_BILI                 DOUBLE PRECISION,	               -- PreTx : Total Bilirubin
	REC_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Risk Factors: Previous Abdominal Surgery
	REC_PREV_HL                        DOUBLE PRECISION,	               -- Prev Heart-Lung Tx
	REC_PREV_HR                        DOUBLE PRECISION,	               -- Prev Heart Tx
	REC_PREV_IN                        DOUBLE PRECISION,	               -- Prev Intestine Tx
	REC_PREV_KI                        DOUBLE PRECISION,	               -- Prev Kidney Tx
	REC_PREV_KP                        DOUBLE PRECISION,	               -- Prev Kidney-Pancreas Tx
	REC_PREV_LI                        DOUBLE PRECISION,	               -- Prev Liver Tx
	REC_PREV_LU                        DOUBLE PRECISION,	               -- Prev Lung Tx
	REC_PREV_NONFUNCTN_TX                  VARCHAR(1),	               -- Risk Factors: Previous Primary Non-function Post-Tx
	REC_PREV_PA                        DOUBLE PRECISION,	               -- Prev Pancreas Tx
	REC_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Source of Payment//Primary:
	REC_PROCEDURE_TY_LI                    VARCHAR(1),	-- $LIPROC     -- Surgical Procedure Type
	REC_PX_RESEARCH                        VARCHAR(1),	               -- Px Part. in Research Protocol for Immuno. Meds
	REC_PX_STAT                            VARCHAR(1),	-- $PXSTATA    -- Patient Status
	REC_PX_STAT_DT                               DATE,	-- MMDDYY      -- Patient Status/Date
	REC_SECONDARY_PAY                      NUMERIC(8),	-- SNDSRCPY    -- Secondary Source of Payment//Secondary:
	REC_SGPT                           DOUBLE PRECISION,	               -- PreTx : SGPT/ALT
	REC_TIPSS                              VARCHAR(1),	               -- Risk Factors: Transjugular Intrahepatic Portacaval Stent Shunt (TIPSS)
	REC_TOLERANCE_INDUCTION_TECH           VARCHAR(1),	               -- Any tolerance induction technique used:
	REC_TUMOR                              VARCHAR(1),	               -- Incidental Tumor found at time of Transplant
	REC_TUMOR_TY                           NUMERIC(8),	-- TUMORTH     -- If yes, specify tumor type
	REC_TXFER_CTR_ID                       NUMERIC(4),	               -- REC_TXFER_ Center ID
	REC_TXFER_DT                                 DATE,	-- MMDDYY      -- Transfer Date
	REC_TX_DT                                    DATE,	-- MMDDYY      -- Transplant Date
	REC_TX_EXTRA_VESSEL                    VARCHAR(1),	               -- Were extra vessels used in the transplant procedure
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_PROCEDURE_TY                    NUMERIC(8),	-- TXPROC      -- Transplant Procedure Type
	REC_TX_TY                              NUMERIC(8),	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	REC_VALCYTE                            VARCHAR(1),	               -- Valcyte (valganciclovir)
	REC_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Risk Factors: Uncontrollable Variceal Bleeding
	REC_VENTILATOR                         NUMERIC(3),	               -- Life Support: Ventilator
	REC_WARM_ISCH_TM                   DOUBLE PRECISION,	               -- Preserv: Warm Ishcemic Time
	REC_WGT_KG                         DOUBLE PRECISION,	               -- Recipient/s Weight in kilograms
	REC_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	REC_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- Working for Income//If No, Not Working Due To:
	REC_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- Working for Income//If Yes:
	TFL_COD                                NUMERIC(8),	-- COD         -- Recipient/s Follow-up Cause of Death
	TFL_DEATH_DT                                 DATE,	-- MMDDYY      -- Date Patient died
	TFL_ENDTXFU                                  DATE,	-- MMDDYY      -- Cohort date
	TFL_GRAFT_DT                                 DATE,	-- MMDDYY      -- Graft Failure date
	TFL_LAFUDATE                                 DATE,	-- MMDDYY      -- Last Graft Follow up Date
	TFL_LASTATUS                           VARCHAR(1),	-- $PXSTATB    -- Last Status
	TRR_ID                                 NUMERIC(8),	               -- Unique identifier for TRR - unique key
	TX_ID                                  NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_transplant
	PRIMARY KEY (TX_ID, TRR_ID)
);


CREATE TABLE TXF_LI (
	ORG_AR                              VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier (includes WL patients and living don TX)
	REC_CTR_ID                             NUMERIC(4),	               -- REC_ Center ID
	REC_OPO_ID                             NUMERIC(4),	               -- OPO Serving Transplant Center
	REC_TX_DT                                    DATE,	-- MMDDYY      -- Transplant Date
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_TY                              NUMERIC(8),	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	TFL_ACADEMIC_LEVEL                     NUMERIC(8),	-- ACDMACTV    -- Academic Activity Level:
	TFL_ACADEMIC_PROGRESS                  NUMERIC(8),	-- ACDMPRG     -- Academic Progress:
	TFL_ACUTE_REJ_BIOPSY_CONFIRMED         NUMERIC(8),	-- BPSCNFMF    -- Was biopsy done to confirm acute rejection:
	TFL_ACUTE_REJ_EPISODE                  NUMERIC(8),	-- ACREJEPF    -- Did patient have any acute rejection episodes during the follow-up period:
	TFL_ALBUMIN                        DOUBLE PRECISION,	               -- Serum Albumin
	TFL_ALKPHOS                        DOUBLE PRECISION,	               -- Alkaline Phosphate
	TFL_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral therapy:
	TFL_ANTIVRL_THERAPY_TY                 NUMERIC(8),	-- ANTLVIRL    -- If Anti-viral therapies, check all that apply
	TFL_ANTIVRL_THERAPY_TY_ACYCLOVIR       NUMERIC(3),	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOGAM         NUMERIC(3),	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOVENE        NUMERIC(3),	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	TFL_ANTIVRL_THERAPY_TY_EPIVIR          NUMERIC(3),	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	TFL_ANTIVRL_THERAPY_TY_FLU_VAC         NUMERIC(3),	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	TFL_ANTIVRL_THERAPY_TY_GAMIMUNE        NUMERIC(3),	               -- Anti-viral Therapy - Gamimune (11)
	TFL_ANTIVRL_THERAPY_TY_GAMMAGARD       NUMERIC(3),	               -- Anti-viral Therapy - Gammagard (11)
	TFL_ANTIVRL_THERAPY_TY_HBIG            NUMERIC(3),	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	TFL_ANTIVRL_THERAPY_TY_OTHER           NUMERIC(3),	               -- Anti-viral Therapy - Other, Specify (11)
	TFL_ANTIVRL_THERAPY_TY_VALCYTE         NUMERIC(3),	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	TFL_ANTIVRL_THERAPY_TY_VALTREX         NUMERIC(3),	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	TFL_BMI                            DOUBLE PRECISION,	               -- BMI:
	TFL_CAD                                VARCHAR(1),	               -- Coronary Artery Disease Since Last Follow Up (Ped. Only > 5yr Followup)
	TFL_CARE_PROV_BY                       NUMERIC(8),	-- FLCRPRV     -- Follow-up Care Provided By
	TFL_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	TFL_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	TFL_COD                                NUMERIC(8),	-- LICOD       -- Recipient/s Cause of Death
	TFL_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	TFL_CREAT                          DOUBLE PRECISION,	               -- Most Recent Serum Creatinine
	TFL_DIAB_DURING_FOL                    VARCHAR(1),	               -- Diabetes during the follow-up period:
	TFL_EMPL_STAT_PRE04                    NUMERIC(8),	-- EMPLSTAT    -- Patient/s Employment Status - Pre-6/30/2004
	TFL_FAIL_BILIARY                       VARCHAR(1),	               -- Biliary Tract Complication
	TFL_FAIL_DT                                  DATE,	-- MMDDYY      -- Date of Graft Failure
	TFL_FAIL_HEP_DENOVO                    VARCHAR(1),	               -- Hepatitis: DeNovo
	TFL_FAIL_HEP_RECUR                     VARCHAR(1),	               -- Hepatitis: Recurrent
	TFL_FAIL_INFECT                        VARCHAR(1),	               -- Infection
	TFL_FAIL_PRIME_GRAFT_FAIL              VARCHAR(1),	               -- Primary Graft Failure
	TFL_FAIL_PX_NONCOMP                    VARCHAR(1),	               -- Patient Noncompliance:
	TFL_FAIL_RECUR_DISEASE                 VARCHAR(1),	               -- Recurrent Disease: non-Hepatitis
	TFL_FAIL_REJ_ACUTE                     VARCHAR(1),	               -- Acute Rejection
	TFL_FAIL_REJ_CHRONIC                   VARCHAR(1),	               -- Chronic Rejection
	TFL_FAIL_VASC_THROMB                   VARCHAR(1),	               -- Vascular Thrombosis
	TFL_FOL_CD                             NUMERIC(8),	-- FOLCD       -- Follow Up code
	TFL_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Functional Status
	TFL_GRAFT_STAT                         VARCHAR(1),	               -- Graft Status
	TFL_HEPATIC_ARTER_THROMB               VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only)
	TFL_HEPATIC_OUTFLOW_OBSTRUCT           VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only)
	TFL_HGT_CM                         DOUBLE PRECISION,	               -- Recipient/s Height in Centimeters
	TFL_HGT_WGT_DT                               DATE,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	TFL_HOSP                               VARCHAR(1),	               -- Hospitalizations during Follow-Up Period
	TFL_HOSP_NUM                       DOUBLE PRECISION,	               -- Number of Hospitalizations:
	TFL_IMMUNO_DISCONT                     VARCHAR(1),	               -- If No Maint Meds, Did Phys. Disc. All Immuno Meds
	TFL_IMMUNO_MAINT_MEDS                  NUMERIC(8),	-- IMMNTRSP    -- Any Meds Given during follow-up for Maintenance or Anti-Rejection?
	TFL_INR                            DOUBLE PRECISION,	               -- INR:
	TFL_INSULIN_DEPND                      VARCHAR(1),	               -- Insulin dependent:
	TFL_LAB_DT                                   DATE,	-- MMDDYY      -- Most Recent Lab date
	TFL_MALIG                              VARCHAR(1),	               -- Post transplant Malignancy
	TFL_MALIG_DON_RELATED                  VARCHAR(1),	               -- Donor Related
	TFL_MALIG_LYMPH                        VARCHAR(1),	               -- De Novo Lymphoproliferative
	TFL_MALIG_RECUR_TUMOR                  VARCHAR(1),	               -- Recurrence of Pre-Tx Tumor
	TFL_MALIG_TUMOR                        VARCHAR(1),	               -- De Novo Solid Tumor
	TFL_MOTOR_DEVELOP                      NUMERIC(8),	-- MOTDEV      -- Motor Development (Ped Only)
	TFL_OTHER_THERAPY                      VARCHAR(1),	               -- Other Therapies:
	TFL_OTHER_THERAPY_TY                   NUMERIC(8),	-- THRPYOTH    -- If Other therapies, check all that apply:
	TFL_OTHER_THERAPY_TY_PHOTOPH           NUMERIC(3),	               -- Other Therapy - Photopheresis (3)
	TFL_OTHER_THERAPY_TY_PLASMAPH          NUMERIC(3),	               -- Other Therapy - Plasmapheresis (3)
	TFL_OTHER_THERAPY_TY_TLI               NUMERIC(3),	               -- Other Therapy - Total Lymphoid Irradiation (3)
	TFL_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence
	TFL_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCP      -- Physical Capacity:
	TFL_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	TFL_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Insurance at Follow-up:
	TFL_PX_NONCOMP                         VARCHAR(1),	               -- Patient Noncompliant During this Follow-Up Period
	TFL_PX_RESEARCH                        VARCHAR(1),	               -- Did Px Participate in Research for Immuno Meds
	TFL_PX_STAT                            VARCHAR(1),	-- $PXSTATB    -- Patient Status
	TFL_PX_STAT_DT                               DATE,	-- MMDDYY      -- Patient Status/Date
	TFL_REJ_EVENT_NUM                  DOUBLE PRECISION,	               -- Number of Episodes
	TFL_REJ_TREAT                          VARCHAR(1),	               -- Patient Treated For Rejection
	TFL_SGOT                           DOUBLE PRECISION,	               -- SGOT/AST
	TFL_SGPT                           DOUBLE PRECISION,	               -- SGPT/ALT
	TFL_TOT_BILI                       DOUBLE PRECISION,	               -- Total Bilirubin
	TFL_TXFER_DT                                 DATE,	-- MMDDYY      -- Transfer Date
	TFL_WGT_KG                         DOUBLE PRECISION,	               -- Recipient/s Weight in kilograms
	TFL_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	TFL_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- If No, Working Due To
	TFL_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- If Yes:
	TRR_FOL_ID                             NUMERIC(8),	               -- Unique identifier for TRR Follow-up - unique key
	TRR_ID                                 NUMERIC(8),	               -- Unique identifier for TRR - foreign key to TRR
	TX_ID                                  NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_transplant
	PRIMARY KEY (TRR_FOL_ID)
);
