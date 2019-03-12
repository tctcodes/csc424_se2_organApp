CREATE TABLE DONOR_DECEASED (
	DONOR_ID                                  INTEGER,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                   INTEGER,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                         INTEGER,	               -- Donor/s Age in Months
	DON_ALBUMIN_POSTOP                        INTEGER,	               -- Serum Albumin:
	DON_ALBUMIN_PREOP                         INTEGER,	               -- Serum Albumin:
	DON_ALKPHOS_POSTOP                        INTEGER,	               -- Alkaline Phosphatase:
	DON_ALKPHOS_PREOP                         INTEGER,	               -- Alkaline Phosphatase:
	DON_ANASTH_COMPL                      VARCHAR(50),	               -- Anesthetic Complication Specify:
	DON_ARRHYTHM                              INTEGER,	-- ARYTHM      -- Arrhythmia requiring therapy:
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BILI_POSTOP                           INTEGER,	               -- Total Bilirubin:
	DON_BILI_PREOP                            INTEGER,	               -- Total Bilirubin:
	DON_BP_DISCHRG_DIAST                      INTEGER,	               -- At Discharge Diastolic
	DON_BP_DISCHRG_SYST                       INTEGER,	               -- At Discharge Systolic
	DON_BP_POSTOP_DIAST                       INTEGER,	               -- Post-Op Blood Pressure Diastolic:
	DON_BP_POSTOP_SYST                        INTEGER,	               -- Post-Op Blood Pressure Systolic:
	DON_BP_PREOP_DIAST                        INTEGER,	               -- Preoperative Diastolic
	DON_BP_PREOP_SYST                         INTEGER,	               -- Preoperative Systolic
	DON_BW4                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CANCER_FREE_INTERVAL                  INTEGER,	               -- Cancer Free Interval:
	DON_CITIZENSHIP                           INTEGER,	-- CTZNLDTC    -- Donor/s Citizenship
	DON_CMV                                VARCHAR(2),	               -- {CMV pre-UNet data}//CMV:
	DON_CMV_CLINICAL                       VARCHAR(2),	               -- CMV//Was there clinical disease:
	DON_CMV_CULT                           VARCHAR(2),	               -- CMV//Culture:
	DON_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	DON_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	DON_CMV_NUCLEIC                        VARCHAR(2),	               -- CMV//Nucleic Acid Testing:
	DON_CMV_TESTED                         VARCHAR(1),	               -- ( pre Unet CMV value )
	DON_DIAB                               VARCHAR(1),	               -- Diabetes:
	DON_DIAB_TREAT                            INTEGER,	-- DIABTRET    -- Diabetes Treatment//Treatment:
	DON_DONATION                           VARCHAR(1),	               -- Secondary source of payment: Donation
	DON_DP1                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_DURATION_ABSTINENCE                   INTEGER,	-- CGDURABS    -- Duration of Abstinence:
	DON_EBV_CLINICAL                       VARCHAR(2),	               -- EBV//Was there clinical disease:
	DON_EBV_DNA                            VARCHAR(2),	               -- EBV//EBV DNA:
	DON_EBV_IGG                            VARCHAR(2),	               -- EBV//IgG:
	DON_EBV_IGM                            VARCHAR(2),	               -- EBV//IgM:
	DON_EBV_TESTED                         VARCHAR(1),	               -- EBV
	DON_EDUCATION                             INTEGER,	-- EDLEVEL     -- Highest Education Level
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_FEF_AFTER_PREOP                       INTEGER,	               -- FEF (25-75%) % predicted after//FEF (25-75%) % predicted:
	DON_FEF_BEFORE_PREOP                      INTEGER,	               -- FEF (25-75%) % predicted before//FEF (25-75%) % predicted:
	DON_FEV1_AFTER_PREOP                      INTEGER,	               -- FEV1 % predicted after//FEV1 % predicted:
	DON_FEV1_BEFORE_PREOP                     INTEGER,	               -- FEV1 % predicted before//FEV1 % predicted:
	DON_FFP_UNITS                             INTEGER,	               -- FF Units//If Yes, Number of Units:
	DON_FREE                               VARCHAR(1),	               -- Secondary source of payment: Free
	DON_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Functional Status:
	DON_FVC_AFTER_PREOP                       INTEGER,	               -- FVC % predicted after//FVC % predicted:
	DON_FVC_BEFORE_PREOP                      INTEGER,	               -- FVC % predicted before//FVC % predicted:
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HAPLO_TY_MATCH                        INTEGER,	-- HAPLOTY     -- Haplotype Match Between Live Donor & Recipient
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
	DON_HGT_CM                                INTEGER,	               -- Height:
	DON_HIST_CANCER                           INTEGER,	-- HSTSTST     -- History of Cancer:
	DON_HIST_CIGARETTE                     VARCHAR(1),	               -- History of Cigarette Use:
	DON_HIST_HYPERTEN                         INTEGER,	-- HSTHYPDR    -- History of Hypertension:
	DON_HIV_ANTIBODY                       VARCHAR(2),	               -- HIV//Antibody:
	DON_HIV_CLINICAL                       VARCHAR(2),	               -- HIV//Was there clinical disease (ARC, AIDS):
	DON_HIV_CONFIRM                        VARCHAR(2),	               -- HIV: Confirmation//Confirmation:
	DON_HIV_RNA                            VARCHAR(2),	               -- HIV//RNA:
	DON_HIV_SCREEN                         VARCHAR(2),	               -- HIV: Screening//Screening:
	DON_HIV_TESTED                         VARCHAR(1),	               -- HIV
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                      INTEGER,	               -- HLA Typing not done for donor
	DON_HMO_PPO                            VARCHAR(1),	               -- Secondary source of payment: HMO/PPO
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- History of Hypertension Diet//Diet:
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- History of Hypertension Diuretics//Diuretics:
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- History of Hypertension Other Hypertensive Medication//Other Hypertensive Medication:
	DON_HYPERTEN_POSTOP                    VARCHAR(1),	               -- Donor Developed Hypertension Requiring Medication:
	DON_INIT_DISCHRG_DT                       INTEGER,	-- MMDDYY      -- Date of Initial Discharge:
	DON_INR_POSTOP                            INTEGER,	               -- INR:
	DON_INR_PREOP                             INTEGER,	               -- INR:
	DON_INTRAOP_COMPL                      VARCHAR(1),	               -- Intra-operative Complications:
	DON_INTRAOP_COMPL_REASON                  INTEGER,	-- COMPITRP    -- Intra-operative Complications Specify//If Yes, Specify:
	DON_KI_BIOPSY                          VARCHAR(1),	               -- Kidney Biopsy:
	DON_KI_CREAT_DISCHRG                      INTEGER,	               -- Kidney Creatinine At Discharge
	DON_KI_CREAT_POSTOP                       INTEGER,	               -- Kidney Serum Creatinine//Serum Creatinine:
	DON_KI_CREAT_PREOP                        INTEGER,	               -- Kidney Preoperative Creatinine
	DON_KI_OTHER_COMPL                     VARCHAR(1),	               -- Kidney Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_KI_OTHER_COMPL_INTERVENTION           INTEGER,	-- COMPOTHR    -- Kidney Other Complications//If Yes, Specify:
	DON_KI_OTHER_INTERVENTION              VARCHAR(1),	               -- Kidney Other Interventional Procedures//Other Interventional Procedures:
	DON_KI_OTHER_INTERVENTION_DT              INTEGER,	-- MMDDYY      -- Kidney Other Interventional Procedures Date//Date of Procedure:
	DON_KI_PCT_GS                             INTEGER,	-- KGLMR       -- Glomerulosclerosis:
	DON_KI_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Laparoscopic to Open:
	DON_KI_PROCEDURE_TY                       INTEGER,	-- KIPROCTY    -- Kidney Procedure Type
	DON_KI_READMIT                         VARCHAR(1),	               -- Kidney Readmission//Any Readmission After Initial Discharge:
	DON_KI_READMIT_DT                         INTEGER,	-- MMDDYY      -- Kidney Readmission Date//If Yes, Date of First Readmission:
	DON_KI_READMIT_REASON                     INTEGER,	-- READMT      -- Kidney Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_KI_REOP                            VARCHAR(1),	               -- Kidney Reoperation//Reoperation:
	DON_KI_REOP_BLEEN                         INTEGER,	               -- Kidney Reoperation Bleeding//Bleeding
	DON_KI_REOP_BLEEN_DT                      INTEGER,	-- MMDDYY      -- Kidney Reoperation Bleeding Date//Date:
	DON_KI_REOP_BOWEL                         INTEGER,	               -- Kidney Reoperation Bowel Obstruction//Bowel Obstruction
	DON_KI_REOP_BOWEL_DT                      INTEGER,	-- MMDDYY      -- Kidney Reoperation Bowel Obstruction Date//Date:
	DON_KI_REOP_HERNIA                        INTEGER,	               -- Kidney Reoperation Hernia Repair//Hernia Repair
	DON_KI_REOP_HERNIA_DT                     INTEGER,	-- MMDDYY      -- Kidney Reoperation Hernia Repair Date//Date:
	DON_KI_REOP_OTHER                         INTEGER,	               -- Kidney Reoperation Other//Other Specify
	DON_KI_REOP_OTHER_DT                      INTEGER,	-- MMDDYY      -- Kidney Reoperation Other Date//Date:
	DON_KI_REOP_VASC                          INTEGER,	               -- Kidney Reoperation Vascular//Vascular
	DON_KI_REOP_VASC_DT                       INTEGER,	-- MMDDYY      -- Kidney Reoperation Vascular Date//Date:
	DON_KI_VASC_COMPL                      VARCHAR(1),	               -- Kidney Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_KI_VASC_COMPL_INTERVENTION            INTEGER,	-- VSCOMPKI    -- Kidney Vascular Complications//If Yes, Specify:
	DON_LENGTH_HOSP_STAY                      INTEGER,	               -- Length of Hospital Stay
	DON_LIVING_DON_COD                        INTEGER,	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BILIARY_COMPL                   VARCHAR(1),	               -- Biliary Complications:
	DON_LI_BILIARY_COMPL_GRADE                INTEGER,	-- BILICOMP    -- Biliary Complications//If Yes, Specify:
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy:
	DON_LI_BIOPSY_MACRO_FAT                   INTEGER,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT                   INTEGER,	               -- % Micro vesicular fat:
	DON_LI_CREAT_POSTOP                       INTEGER,	               -- Serum Creatinine:
	DON_LI_CREAT_PREOP                        INTEGER,	               -- Serum Creatinine:
	DON_LI_OTHER_COMPL                     VARCHAR(1),	               -- Liver Other Complications Requiring Intervention//Other Complications Requiring Intervention:
	DON_LI_OTHER_COMPL_INTERVENTION           INTEGER,	-- COMPOTHR    -- Liver Other Complications//If Yes, Specify:
	DON_LI_OTHER_INTERVENTION              VARCHAR(1),	               -- Liver Other Interventional Procedures//Other Interventional Procedures:
	DON_LI_OTHER_INTERVENTION_DT              INTEGER,	-- MMDDYY      -- Liver Other Interventional Procedures Date//Date of Procedure:
	DON_LI_PROCEDURE_TY                       INTEGER,	-- LIPROCLD    -- Type of Transplant Graft:
	DON_LI_READMIT                         VARCHAR(1),	               -- Liver Readmission//Any Readmission After Initial Discharge:
	DON_LI_READMIT_DT                         INTEGER,	-- MMDDYY      -- Liver Readmission Date//If Yes, Date of First Readmission:
	DON_LI_READMIT_REASON                     INTEGER,	-- READMTLI    -- Liver Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_LI_REOP                            VARCHAR(1),	               -- Liver Reoperation//Reoperation:
	DON_LI_REOP_BILIARY                       INTEGER,	               -- Liver Reoperation Biliary//Biliary
	DON_LI_REOP_BILIARY_DT                    INTEGER,	-- MMDDYY      -- Liver Reoperation Biliary Date//Date:
	DON_LI_REOP_BLEED                         INTEGER,	               -- Liver Reoperation Bleeding Complications//Bleeding Complications
	DON_LI_REOP_BLEED_DT                      INTEGER,	-- MMDDYY      -- Liver Reoperation Bleeding Date//Date:
	DON_LI_REOP_BOWEL                         INTEGER,	               -- Liver Reoperation Bowel Obstruction//Bowel Obstruction
	DON_LI_REOP_BOWEL_DT                      INTEGER,	-- MMDDYY      -- Liver Reoperation Bowel Obstruction Date//Date:
	DON_LI_REOP_FAIL                          INTEGER,	               -- Liver Reoperation Liver Failure///Liver Failure Requiring Transplant
	DON_LI_REOP_FAIL_DT                       INTEGER,	-- MMDDYY      -- Liver Reoperation Liver Failure Date//Date:
	DON_LI_REOP_HERNIA                        INTEGER,	               -- Liver Reoperation Hernia Repair//Hernia Repair
	DON_LI_REOP_HERNIA_DT                     INTEGER,	-- MMDDYY      -- Liver Reoperation Hernia Repair Date//Date:
	DON_LI_REOP_OTHER                         INTEGER,	               -- Liver Reoperation Other//Other Specify
	DON_LI_REOP_OTHER_DT                      INTEGER,	-- MMDDYY      -- Liver Reoperation Other Date//Date:
	DON_LI_REOP_VASC                          INTEGER,	               -- Liver Reoperation Vascular Complications//Vascular Complications
	DON_LI_REOP_VASC_DT                       INTEGER,	-- MMDDYY      -- Liver Reoperation Vascular Date//Date:
	DON_LI_VASC_COMPL                      VARCHAR(1),	               -- Liver Vascular Complications Requiring Intervention//Vascular Complications Requiring Intervention:
	DON_LI_VASC_COMPL_INTERVENTION            INTEGER,	-- VSCOMPLI    -- Liver Vascular Complications//If Yes, Specify:
	DON_LU_ARRHYTHM                           INTEGER,	-- ARYTHMPO    -- Arrhythmia requiring therapy:
	DON_LU_CAPACITY_PREOP                     INTEGER,	               -- Diffusing lung capacity corrected for alveolar volume % predicted:
	DON_LU_COMPL                           VARCHAR(1),	               -- Post-operative complications during the initial hospitalization:
	DON_LU_COMPL_REASON                       INTEGER,	-- COMPLU      -- Post-operative Complications//If Yes, Specify:
	DON_LU_PROCEDURE_CONVERT               VARCHAR(1),	               -- Conversion from Thoracoscopic to Open:
	DON_LU_PROCEDURE_TY                       INTEGER,	-- LUPROCLD    -- Lung//Procedure Type:
	DON_LU_READMIT                         VARCHAR(1),	               -- Lung Readmission//Any Readmission After Initial Discharge:
	DON_LU_READMIT_DT                         INTEGER,	-- MMDDYY      -- Lung Readmission Date//If Yes, Date of First Readmission:
	DON_LU_READMIT_REASON                     INTEGER,	-- READMT      -- Lung Readmission Reason//If yes, specify reason for readmission (during first six weeks):
	DON_LU_THORAC_TUBES                       INTEGER,	-- THORTUBE    -- Placement of Additional Thoracostomy Tube(s), Indication:
	DON_MARITAL_STAT                          INTEGER,	-- MRTLSTAT    -- Marital Status at Time of Donation:
	DON_MEDICAID                           VARCHAR(1),	               -- Secondary source of payment: Medicaid
	DON_MEDICARE                           VARCHAR(1),	               -- Secondary source of payment: Medicare
	DON_NON_AUTO_BLOOD                     VARCHAR(1),	               -- Non-Autologous Blood Administration:
	DON_OPO_RUN_MATCH                         INTEGER,	               -- For Living Donors, can OPO run a match on this donor?
	DON_ORG1                               VARCHAR(4),	-- $DNORGLV    -- Organ Recovered(1)
	DON_ORG2                               VARCHAR(4),	-- $DNORGLV    -- Organ Recovered(2)
	DON_OTHER_GOVT                         VARCHAR(1),	               -- Secondary source of payment: US/State Government Agency
	DON_OTHER_TOBACCO_USE                  VARCHAR(1),	               -- Other Tobacco Used:
	DON_PACK_YEARS                            INTEGER,	-- CGPKYRS     -- History of Cigarette Use Pack Years//If Yes, Check # pack years:
	DON_PAO2_PREOP                            INTEGER,	               -- PaO2 on room air:
	DON_PHYSC_CAPACITY                        INTEGER,	-- PHYSCPLD    -- Physical Capacity: (check one)
	DON_PLT_UNITS                             INTEGER,	               -- Platelets Units//If Yes, Number of Units:
	DON_POSTOP_TEST_DT                        INTEGER,	-- MMDDYY      -- Most Recent Date of Tests:
	DON_PRBC_UNITS                            INTEGER,	               -- PRBC Units//If Yes, Number of Units:
	DON_PRIMARY_PAY                           INTEGER,	-- PRMSRCPY    -- Primary Source of Payment
	DON_PRIV_INSUR                         VARCHAR(1),	               -- Secondary source of payment: Private Insurance
	DON_RACE                                  INTEGER,	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_TX_SAME_CTR                  VARCHAR(1),	               -- Did organ recovery and transplant occur at the same center
	DON_RELATIONSHIP_TY                       INTEGER,	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SACRIFICE_LOBE                        INTEGER,	-- SACRFLOB    -- Sacrifice of Second Lobe, Specify:
	DON_SELF                               VARCHAR(1),	               -- Secondary source of payment: Self
	DON_SGOT_POSTOP                           INTEGER,	               -- SGOT/AST:
	DON_SGOT_PREOP                            INTEGER,	               -- SGOT/AST:
	DON_SGPT_POSTOP                           INTEGER,	               -- SGPT/ALT:
	DON_SGPT_PREOP                            INTEGER,	               -- SGPT/ALT:
	DON_STAT                               VARCHAR(1),	-- $PXSTTDN    -- Donor Status
	DON_STAT_DT                               INTEGER,	-- MMDDYY      -- Donor Status Date
	DON_TARGET_SOURCE1                        INTEGER,	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                        INTEGER,	-- TGTCLSRM    -- Target Source for Class II:
	DON_TLC_AFTER_PREOP                       INTEGER,	               -- TLC % predicted after//TLC % predicted:
	DON_TLC_BEFORE_PREOP                      INTEGER,	               -- TLC % predicted before//TLC % predicted:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_URINE_POSTOP_PROTEIN                  INTEGER,	               -- Post-Operative Urinalysis//Urine Protein:
	DON_URINE_POSTOP_RATIO                    INTEGER,	               -- Post-Operative Urinalysis//Protein-Creatinine Ratio:
	DON_URINE_PREOP_PROTEIN                   INTEGER,	               -- Preoperative Urinalysis//Urine Protein:
	DON_URINE_PREOP_RATIO                     INTEGER,	               -- Preoperative Urinalysis//Protein-Creatinine Ratio:
	DON_VIRUSES_TESTED                     VARCHAR(1),	               -- Viral Detection://Have any of the following viruses ever been tested for: HIV, CMV, HBV, HCV, EBV
	DON_WGT_KG                                INTEGER,	               -- Weight:
	DON_WORK_INCOME                        VARCHAR(1),	               -- Working for Income:
	DON_WORK_NO_STAT                          INTEGER,	-- NOTWRKLD    -- Working for Income//If No, Not Working Due To: (check one)
	DON_WORK_YES_STAT                         INTEGER,	-- WRKNCMLD    -- Working for Income//If Yes:
	DON_YEAR_ENTRY_US                         INTEGER,	-- MMDDYY      -- Year of Entry into U.S.:
	PERS_ID                                   INTEGER,	               -- Unique person ID to replace SSN
	PERS_SSA_DEATH_DT                         INTEGER,	-- MMDDYY      -- Death date determined from SSA database
);
