CREATE TABLE INSTITUTION (
	CTR_CD                           	   VARCHAR(4),	               -- center code
	CTR_ID                        INTEGER PRIMARY KEY,	               -- Unique identifier for ctr_cd/ctr_ty combination
	CTR_TY                                 VARCHAR(3),	-- $CTRTY      -- center type
	ENTIRE_NAME                           VARCHAR(75),	               -- center/s entire name
	ESRD_REGION                               INTEGER,	               -- ESRD REGION NUMBER
	NAME_PART1                            VARCHAR(37),	               -- first 38 characters of institution/s Name
	NAME_PART2                            VARCHAR(37),	               -- second 38 character/s of center/s Name
	OPTN_MBR                                  INTEGER,	               -- OPTN member flag
	PRIMARY_CITY                          VARCHAR(20),	               -- address city
	PRIMARY_CTRY                           VARCHAR(3),	               -- address foriegn country
	PRIMARY_PROVINCE                       VARCHAR(3),	               -- address foreign province
	PRIMARY_STATE                          VARCHAR(3),	               -- l address state
	PRIMARY_ZIP                           VARCHAR(10),	               -- address zip
	PROVIDER_NUM                          VARCHAR(10),	               -- Donor Hospital Provider Number
	REGION                                    INTEGER	               -- OPTN Region number
);

CREATE TABLE DONOR (
    DONOR_ID    INTEGER PRIMARY KEY
);

CREATE TABLE DONOR_LIVE (
	DONOR_ID 	 INTEGER   REFERENCES DONOR(DONOR_ID) PRIMARY KEY,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                   INTEGER,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                         INTEGER,	              -- Donor/s Age in Months
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
	PERS_ID                   INTEGER NOT NULL UNIQUE,	               -- Unique person ID to replace SSN
	PERS_SSA_DEATH_DT                         INTEGER	-- MMDDYY      -- Death date determined from SSA database
);
CREATE TABLE DONOR_DECEASED (
	DONOR_ID       INTEGER REFERENCES DONOR(DONOR_ID) PRIMARY KEY,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABNORM_CONGEN                      VARCHAR(1),	               -- Structural Abnormalities //Congenital:
	DON_ABNORM_LVH                         VARCHAR(1),	               -- Structural Abnormalities //LVH:
	DON_ABNORM_VALVES                      VARCHAR(1),	               -- Structural Abnormalities //Valves:
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                   INTEGER,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                         INTEGER,	               -- Donor/s Age in Months
	DON_ALLOC_ECD_CVA                         INTEGER,	               -- CVA cause of death
	DON_ALLOC_ECD_HYPERTEN                    INTEGER,	               -- history of hypertension
	DON_ALLOC_ECD_SERUM_CREAT                 INTEGER,	               -- most recent serum_creat
	DON_ALLOC_ECD_SERUM_CREAT_DT              INTEGER,	-- MMDDYY      -- most recent serum_creat date
	DON_ALLOC_REMAIN_LI_SEG                VARCHAR(1),	               -- Allocate Remaining Liver Segment?
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_CONVULS                       VARCHAR(1),	               -- Meds given Donor: Anticonvulsants
	DON_ANTI_HBC                           VARCHAR(2),	-- $SRLSTT     -- Anti-HBC
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_ANTI_HIV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HIV I/II:
	DON_ANTI_HTLV                          VARCHAR(2),	-- $SRLSTT     -- Anti-HTLV I/II:
	DON_ANTI_HYPERTEN                      VARCHAR(1),	               -- Meds given Donor: Antihypertensives
	DON_ARGININE                           VARCHAR(1),	               -- Arginine Vasopressin:
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BIOPSY_DGN                            INTEGER,	-- BPMYCR      -- Biopsy
	DON_BRAIN_DEATH_TM                        INTEGER,	-- TIME        -- Time of pronouncement of death: (Complete for brain dead and DCD donors)
	DON_BUN                                   INTEGER,	               -- BUN
	DON_BW4                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CAD_DON_COD                           INTEGER,	-- DONCOD      -- Donor/s Cause of Death
	DON_CANCER_FREE_INTERVAL                  INTEGER,	               -- Cancer Free Interval
	DON_CANCER_OTHER_OSTXT                VARCHAR(50),	               -- History of Cancer/Specify
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CHAGAS_NAT                         VARCHAR(2),	               -- Donor RNA Nat serology value for Chagas test
	DON_CHEST_XRAY                            INTEGER,	-- LUCHSTXR    -- Chest X-ray:
	DON_CITIZENSHIP                           INTEGER,	-- CITIZEN     -- Donor/s Citizenship
	DON_CI_FINAL                              INTEGER,	               -- Cardiac Index (final) //Cardiac Index:
	DON_CI_INIT                               INTEGER,	               -- Cardiac Index (initial) //Cardiac Index: (L/min/sq.m)
	DON_CLAMP_DT                              INTEGER,	-- MMDDYY      -- Clamp Date
	DON_CLAMP_TM                              INTEGER,	-- TIME        -- Clamp Time
	DON_CLAMP_TM_ZONE                         INTEGER,	-- TIMEZONE    -- Clamp Time Zone
	DON_CLINICAL_INFECT                    VARCHAR(1),	               -- Clinical Infection
	DON_COD_DON_STROKE                        INTEGER,	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_COLD_ISCH_TM_ARRIV_KI                 INTEGER,	               -- Cold Ischemic Time upon arrival for Kidney in hours
	DON_CONSENT_ATTORNEY                      INTEGER,	               -- Consent Mechanism - Attorney in Fact
	DON_CONSENT_DON_CARD                      INTEGER,	               -- Consent Mechanism - Donor Card
	DON_CONSENT_DON_REGIS                     INTEGER,	               -- Consent Mechanism - Donor Registry
	DON_CONSENT_DRIVER_LICENSE                INTEGER,	               -- Consent Mechanism - Driver/s License
	DON_CONSENT_PX_WRIT_DOC                VARCHAR(1),	               -- Patient Consented in Writing
	DON_CONSENT_TM                            INTEGER,	-- TIME        -- Time consent obtained for first organ:
	DON_CONSENT_WRIT_DOC_INTENT            VARCHAR(1),	               -- Did the patient have written documentation of their intent to be a donor:
	DON_CONT_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency Last 6 Months
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CORONARY_ANGIO                        INTEGER,	-- CRNRYANG    -- Coronary Angiogram
	DON_CO_FINAL                              INTEGER,	               -- CO (final) (L/min) //CO:
	DON_CO_INIT                               INTEGER,	               -- CO (initial) (L/min) //CO: (L/min)
	DON_CREAT                                 INTEGER,	               -- Serum Creatinine
	DON_CREG_DON_FLG                          INTEGER,	               -- Is this a CREG Donor?
	DON_CVP_FINAL                             INTEGER,	               -- CVP (final) //CVP:
	DON_CVP_INIT                              INTEGER,	               -- CVP (initial) //CVP: (mm/Hg)
	DON_DCD_ABDOM_AORTA_CANNUL_DT             INTEGER,	-- MMDDYY      -- If DCD, Date of abdominal aorta cannulation:
	DON_DCD_ABDOM_AORTA_CANNUL_TM             INTEGER,	-- TIME        -- If DCD, Time of abdominal aorta cannulation:
	DON_DCD_AGONAL_BEGIN_DT                   INTEGER,	-- MMDDYY      -- If DCD, Date agonal phase begins
	DON_DCD_AGONAL_BEGIN_TM                   INTEGER,	-- TIME        -- If DCD, Time agonal phase begins
	DON_DCD_PORTAL_VEIN_CANNUL_DT             INTEGER,	-- MMDDYY      -- If DCD, Date of portal vein cannulation:
	DON_DCD_PORTAL_VEIN_CANNUL_TM             INTEGER,	-- TIME        -- If DCD, Time of portal vein cannulation:
	DON_DCD_PROGRESS_TO_BRAIN_DEATH        VARCHAR(1),	               -- If not DCD, Was this a consented DCD donor that progressed to brain death?
	DON_DCD_PULM_ART_CANNUL_DT                INTEGER,	-- MMDDYY      -- If DCD, Date of pulmonary artery cannulation:
	DON_DCD_PULM_ART_CANNUL_TM                INTEGER,	-- TIME        -- If DCD, Time of pulmonary artery cannulation:
	DON_DCD_SUPPORT_WITHDRAW_DT               INTEGER,	-- MMDDYY      -- If DCD, Date of withdrawal of support
	DON_DCD_SUPPORT_WITHDRAW_TM               INTEGER,	-- TIME        -- If DCD, Time of withdrawal of support
	DON_DCD_THOR_AORTA_CANNUL_DT              INTEGER,	-- MMDDYY      -- If DCD, Date of thoracic aorta cannulation:
	DON_DCD_THOR_AORTA_CANNUL_TM              INTEGER,	-- TIME        -- If DCD, Time of thoracic aorta cannulation:
	DON_DCD_TOT_URINE_OUTPUT                  INTEGER,	               -- If DCD, Total urine output during OR recovery phase
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                          INTEGER,	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                            INTEGER,	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DP1                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_EBNA                               VARCHAR(2),	-- $SRLSTT     -- EBNA (Epstein-Barr nuclear antigen)
	DON_EBV_IGG                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgG):
	DON_EBV_IGM                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgM):
	DON_EJECT_FRACT                           INTEGER,	               -- LV Ejection Fraction %
	DON_EJECT_FRACT_METH                      INTEGER,	-- LVEJCMTH    -- Method
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_FLG_OPTN                   INTEGER,	               -- Does donor meet criteria to be an Expanded Donor?
	DON_EXPAND_DON_KI                         INTEGER,	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_EXPRESS_FAMILY                     VARCHAR(1),	               -- Did the patient express to family or others the intent to be a donor
	DON_EXTRACRANIAL_CANCER                VARCHAR(1),	               -- Extracranial
	DON_FEEDBACK_DONE                         INTEGER,	               -- Feedback Completed for Donor?
	DON_FINAL_SERUM_CREAT                     INTEGER,	               -- Final Serum Creatinine
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HBC_STAT                              INTEGER,	-- SRLGYSTT    -- Hepatitis B Core Antibody Status
	DON_HBV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hbv test
	DON_HBV_SURF_ANTIBODY                  VARCHAR(2),	-- $SRLSTT     -- HBsAb (Hepatitis B Surface Antibody)
	DON_HBV_SURF_ANTIGEN                   VARCHAR(2),	-- $SRLSTT     -- HBsAg
	DON_HCV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hcv test
	DON_HCV_STAT                              INTEGER,	-- SRLGYSTT    -- HCV Antibody Status
	DON_HEAVY_ALCOHOL                      VARCHAR(1),	               -- Heavy Alcohol Use (heavy= 2+ drinks/day):
	DON_HEMATOCRIT                            INTEGER,	               -- Hematocrit:
	DON_HEPARIN                            VARCHAR(1),	               -- Heparin
	DON_HGT_CM                                INTEGER,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                            INTEGER,	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency
	DON_HIST_CANCER                           INTEGER,	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                             INTEGER,	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                         INTEGER,	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_INSULIN_DEPND                    INTEGER,	-- INSDPDR     -- Insulin Dependent
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HIST_PREV_MI                       VARCHAR(1),	               -- History of Previous MI
	DON_HIV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hiv test
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                      INTEGER,	               -- HLA Typing not done for donor
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HTLV_NAT                           VARCHAR(2),	               -- Donor RNA Nat serology value for htlv test
	DON_HTN                                   INTEGER,	               -- Donor history of hypertension (1= yes, 0= no)
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- Diet
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- Diuretics
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- Other Medication
	DON_INFECT_BLOOD                          INTEGER,	               -- Infection Source: Blood
	DON_INFECT_BLOOD_CONFIRM               VARCHAR(1),	               -- Infection Source: Blood/Confirmed by Culture
	DON_INFECT_LU                             INTEGER,	               -- Infection Source: Lung
	DON_INFECT_LU_CONFIRM                  VARCHAR(1),	               -- Infection Source: Lung/Confirmed by Culture
	DON_INFECT_OTHER                          INTEGER,	               -- Infection Source: Other
	DON_INFECT_OTHER_CONFIRM               VARCHAR(1),	               -- Infection Source: Other/Confimed by Culture
	DON_INFECT_URINE                          INTEGER,	               -- Infection Source: Urine
	DON_INFECT_URINE_CONFIRM               VARCHAR(1),	               -- Infection Source: Urine/Confirmed by Culture
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INR                                   INTEGER,	               -- INR:
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_INTRACRANIAL_CANCER                VARCHAR(1),	               -- Intracranial
	DON_KI_GLOMER_OBSERVED                    INTEGER,	               -- Glomeruli Observed on Kidney biopsy
	DON_KI_GLOMER_SCLER_PCT                   INTEGER,	               -- Percent Glomerular Sclerosis on Kidney biopsy
	DON_LF_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (left)
	DON_LF_KI_GLOMER_SCLER_PCT                INTEGER,	-- KGLMR       -- % Glomerulosclerosis (Left Kidney)
	DON_LF_KI_PUMP                         VARCHAR(1),	               -- Pump (Left Kidney)
	DON_LF_KI_RESIST_PRIOR_SHIP               INTEGER,	               -- Final Resistance Prior to Shipping (left) //Final Resistance Prior to Shipping:
	DON_LF_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (left)://Transferred on pump:
	DON_LF_LU_BRONCHO                         INTEGER,	-- ABNLBRNC    -- Left Lung Bronchoscopy:
	DON_LIPASE                                INTEGER,	               -- Serum Lipase
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_LI_BIOPSY_MACRO_FAT                   INTEGER,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT                   INTEGER,	               -- % Micro/intermediate vesicular fat:
	DON_LI_OTH_HISTOLOGY_GRANULOMAS           INTEGER,	               -- Granulomas Histology performed
	DON_LI_OTH_HISTOLOGY_HEMOSIDERA           INTEGER,	               -- Hemosidera Histology performed
	DON_LI_OTH_HISTOLOGY_OTHER                INTEGER,	               -- Other Histology performed
	DON_MAP_FINAL                             INTEGER,	               -- MAP (final) //Map:
	DON_MAP_INIT                              INTEGER,	               -- MAP (initial) //Map: (mm/Hg)
	DON_MAX_CREAT                             INTEGER,	               -- Maximum Donor Creatinine
	DON_MED_EXAMINER                          INTEGER,	-- MDXMRPRT    -- Medical Examiner/Coroner
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_MEET_DOUBLE_KI_CRIT                   INTEGER,	               -- Donor meets double KI allocation criteria
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_NON_HR_BEAT_CNTL                   VARCHAR(1),	               -- Controlled
	DON_NON_HR_BEAT_CORE_COOL              VARCHAR(1),	               -- Core Cooling Used
	DON_OPO_CTR_ID    INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DON_OPO_ Center ID
	DON_PA_DIAST_FINAL                        INTEGER,	               -- PA Diastolic (final) //PA Diastolic:
	DON_PA_DIAST_INIT                         INTEGER,	               -- PA Diastolic (initial) //PA Diastolic: (mm/Hg)
	DON_PA_SYST_FINAL                         INTEGER,	               -- PA Systolic (final) //PA Systolic:
	DON_PA_SYST_INIT                          INTEGER,	               -- PA Systolic (initial) //PA Systolic: (mm/Hg)
	DON_PCO2                                  INTEGER,	               -- pCO2:
	DON_PCWP_FINAL                            INTEGER,	               -- PCWP (final) //PCWP:
	DON_PCWP_INIT                             INTEGER,	               -- PCWP (initial) //PCWP: (mm/Hg)
	DON_PEAK_SERUM_CREAT                      INTEGER,	               -- Peak Serum Creatinine
	DON_PH                                    INTEGER,	               -- Blood PH:
	DON_PO2                                   INTEGER,	               -- Lung pO2 on 100%
	DON_PO2_DONE                           VARCHAR(1),	               -- Lung - Was pO2 done:
	DON_PO2_FIO2                              INTEGER,	               -- Lung pO2 on Fio2 //If Yes, Lung pO2 on FiO2 of:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_PRERECOV_MEDS                      VARCHAR(1),	               -- Prerecovery Medication
	DON_PRERECOV_STEROIDS                  VARCHAR(1),	               -- Pre-Recov Meds given Donor: Steroids
	DON_PRERECOV_T3                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T3
	DON_PRERECOV_T4                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T4
	DON_PREV_GASTRO_DISEASE                VARCHAR(1),	               -- Previous Gastrointestinal Disease
	DON_PROTEIN_URINE                      VARCHAR(1),	               -- Protein in Urine
	DON_PULM_CATH                          VARCHAR(1),	               -- Was a pulmonary artery catheter placed:
	DON_RACE                                  INTEGER,	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_OUT_US                       VARCHAR(1),	               -- Recovered Outside the U.S.
	DON_REF_DT                                INTEGER,	-- MMDDYY      -- Referral Date
	DON_REF_FLG                            VARCHAR(1),	               -- Referral Flag
	DON_RESUSCIT_DURATION                     INTEGER,	               -- Duration of Resuscitation
	DON_RPR_VDRL                           VARCHAR(2),	-- $SRLSTT     -- RPR-VDRL
	DON_RT_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (right)
	DON_RT_KI_GLOMER_SCLER_PCT                INTEGER,	-- KGLMR       -- % Glomerulosclerosis (Right Kidney)
	DON_RT_KI_PUMP                         VARCHAR(1),	               -- Pump (Right Kidney)
	DON_RT_KI_RESIST_PRIOR_SHIP               INTEGER,	               -- Final Resistance Prior to Shipping (right) //Final Resistance Prior to Shipping:
	DON_RT_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (right)://Transferred on pump:
	DON_RT_LU_BRONCHO                         INTEGER,	-- ABNLBRNC    -- Right Lung Bronchoscopy:
	DON_SERUM_AMYLASE                         INTEGER,	               -- Serum Amylase
	DON_SGOT                                  INTEGER,	               -- SGOT/AST
	DON_SGPT                                  INTEGER,	               -- SGPT/ALT
	DON_SKIN_CANCER                        VARCHAR(1),	               -- Skin
	DON_SODIUM                                INTEGER,	               -- Serum Sodium //Last Serum Sodium Prior to Procurement:
	DON_SVR_FINAL                             INTEGER,	               -- SVR (final) //SVR:
	DON_SVR_INIT                              INTEGER,	               -- SVR (initial) //SVR: (dynes/sec/cm)^5)
	DON_TARGET_SOURCE1                        INTEGER,	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                        INTEGER,	-- TGTCLSRM    -- Target Source for Class II:
	DON_TATTOOS                            VARCHAR(1),	               -- Lifestyle Factors: Tattoos
	DON_TM_FOR_XMATCH                      VARCHAR(1),	               -- Is there time for crossmatch?
	DON_TOT_BILI                              INTEGER,	               -- Total Bilirubin
	DON_TX                                    INTEGER,	               -- Max disposition for Donor, 5(recovered only) or 6(transplanted)
	DON_TXFUS_TERMINAL_HOSP_NUM               INTEGER,	-- TRANSFUS    -- Number of transfusions during this (terminal) hospitalization:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_USE_DOUBLE_KI                      VARCHAR(1),	               -- Use Double KI allocation, not Expanded Donor
	DON_VASODIL                            VARCHAR(1),	               -- Vasodilators
	DON_VESSELS_GT50_STENOSIS                 INTEGER,	               -- If Abnormal, # of Vessels with > 50% Stenosis
	DON_WALL_ABNORM_GLOB                   VARCHAR(1),	               -- Wall Abnormalities //Global:
	DON_WALL_ABNORM_SEG                    VARCHAR(1),	               -- Wall Abnormalities //Segmental:
	DON_WARM_ISCH_TM_MINS                     INTEGER,	               -- Estimated Warm Ischemic Time in minutes
	DON_WEST_NILE_NAT                      VARCHAR(2),	               -- Donor RNA Nat serology value for West Nile test
	DON_WGT_KG                                INTEGER,	               -- Donor/s Weight in kilograms
	PERS_ID                    INTEGER NOT NULL UNIQUE	               -- Unique Person ID for patient. Based on matches in similarity of SSN, DOB, Names and Nicknames, Gender, etc.
);

CREATE TABLE DON_LIV_FOL (
	DFL_ACTIVITY_LEVEL               	      INTEGER,	-- ACTVLVL     -- Activity Level:
	DFL_ALBUMIN                               INTEGER,	               -- Serum Albumin:
	DFL_ALKPHOS                               INTEGER,	               -- Alkaline Phosphate
	DFL_ANTI_HYPERTEN_DRUG                    INTEGER,	               -- Anti Hypertensive Drugs
	DFL_BILI                                  INTEGER,	               -- Bilirubin
	DFL_BP_DIAST                              INTEGER,	               -- Diastolic
	DFL_BP_SYST                               INTEGER,	               -- Systolic
	DFL_CAT_SCAN                              INTEGER,	-- LDPROC      -- CAT Scan:
	DFL_COD                                   INTEGER,	-- LDFCOD      -- Donor/s Cause of Death
	DFL_COD_OSTXT                         VARCHAR(50),	               -- Cause of Death//Specify:
	DFL_COMPL                              VARCHAR(1),	               -- Complications since last report:
	DFL_DIAB                               VARCHAR(1),	               -- Diabetes:
	DFL_DIAB_TREAT                            INTEGER,	-- DIABTRET    -- Diabetes//Treatment:
	DFL_DIAL_DT                               INTEGER,	-- MMDDYY      -- Maintenance Dialysis//If Yes, Date First Dialyzed:
	DFL_FOL_CD                                INTEGER,	-- FOLCD       -- Follow Up Code
	DFL_FOL_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DFL_FOL_ Center ID
	DFL_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Functional Status:
	DFL_HYPERTEN                           VARCHAR(1),	               -- Donor Developed Hypertension Requiring Medication:
	DFL_INCISION_PAIN                         INTEGER,	-- INSNPAIN    -- Chronic Incisional Pain:
	DFL_INIT_DISCHRG_DT                       INTEGER,	-- MMDDYY      -- Date of Initial Discharge:
	DFL_INR                                   INTEGER,	               -- INR:
	DFL_KI_COMPL                           VARCHAR(1),	               -- Kidney Complications since last report:
	DFL_KI_COMPL_STAT                         INTEGER,	-- COMPKI      -- Kidney Complications Status//If Yes:
	DFL_KI_CREAT                              INTEGER,	               -- Serum Creatinine
	DFL_LI_COMPL                           VARCHAR(1),	               -- Liver Complications since last report:
	DFL_LI_COMPL_STAT                         INTEGER,	-- COMPLI      -- Liver Complicatons Status//If Yes:
	DFL_LI_CREAT                              INTEGER,	               -- Serum Creatinine:
	DFL_MAINT_DIAL                         VARCHAR(1),	               -- Non-Maintenance Dialysis
	DFL_MRI                                   INTEGER,	-- LDPROC      -- MRI:
	DFL_PHYSC_CAPACITY                        INTEGER,	-- PHYSCPLD    -- Physical Capacity:
	DFL_PX_STAT                            VARCHAR(2),	-- $PXSTTDF    -- Patient Status
	DFL_PX_STAT_DT                            INTEGER,	-- MMDDYY      -- Patient Status Date
	DFL_READMIT                            VARCHAR(1),	               -- Has the donor been readmitted since last report:
	DFL_READMIT_DT                            INTEGER,	-- MMDDYY      -- If Yes, Date of First Readmission Since Last Report:
	DFL_SGOT                                  INTEGER,	               -- AST
	DFL_SGPT                                  INTEGER,	               -- SGPT/ALT:
	DFL_ULTRASOUND                            INTEGER,	-- LDPROC      -- Ultrasound:
	DFL_URINE_PROTEIN                         INTEGER,	-- URNPRTN     -- Urine Protein:
	DFL_URINE_RATIO                           INTEGER,	               -- Protein-Creatinine Ratio:
	DFL_WGT_KG                                INTEGER,	               -- Donor/s Weight in kilograms
	DFL_WORK_INCOME                        VARCHAR(1),	               -- Working for Income:
	DFL_WORK_NO_STAT                          INTEGER,	-- NOTWRKLD    -- Working for Income//If No, Not Working Due To:
	DFL_WORK_YES_STAT                         INTEGER,	-- WRKNCMLD    -- Working for Income//If Yes:
	DONOR_ID       INTEGER REFERENCES DONOR(DONOR_ID) PRIMARY KEY,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	PLATELET_COUNT                            INTEGER	               -- Donor followup platelet count value
);

CREATE TABLE DONOR_DISPOSITION (
	DONOR_ID 	   INTEGER REFERENCES DONOR(DONOR_ID) PRIMARY KEY,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_DCD_RECOV_DT                          INTEGER,	-- MMDDYY      -- If DCD, Date organ recovered/removed from donor
	DON_DCD_RECOV_TM                          INTEGER,	-- TIME        -- If DCD, Time organ recovered/removed from donor
	DON_DISCARD_CD                            INTEGER,	-- DSCRDCD     -- Discard Code for Organ Disposition
	DON_DISPOSITION                           INTEGER,	-- FDBDSP      -- Disposition of Organ
	DON_FLUSH_BACK_TABLE                      INTEGER,	-- BKTBLFLS    -- Back Table Flush Solution - Right Lung://Back Table Flush Solution:
	DON_FLUSH_FINAL                           INTEGER,	-- FLSHSLN     -- Final Flush Solution - Right Lung://Final Flush Solution:
	DON_FLUSH_INIT                            INTEGER,	-- FLSHSLN     -- Initial Flush Solution - Right Lung://Initial Flush Solution:
	DON_ORG                                VARCHAR(4),	-- $DONORG     -- Donor Organ
	DON_ORG_SHARED                            INTEGER,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_REASON_CD                             INTEGER,	-- REASON      -- Reason Code for Organ Disposition
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_SHARE_TY                              INTEGER,	-- SHRTYCDR    -- Share Type
	DON_STORAGE                               INTEGER,	-- STORSOLN    -- Storage Solution used for Organ Preservation
	DON_TX_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DON_TX_ Center ID
	DON_VESSEL_SENT                           INTEGER,	               -- OPO sent vessels with organ
	MATCH_ID                                  INTEGER,	               -- Identifier for Match Run
	PX_ID          							  INTEGER 	               -- Patient Identifier (includes patients added to the waitlisting and those identified by Living Donor Transplant)
);

CREATE TABLE CAND_LIIN (
	CAN_ABO                             VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_ACADEMIC_LEVEL                        INTEGER,	-- ACDMACTV    -- Academic Activity Level:
	CAN_ACADEMIC_PROGRESS                     INTEGER,	-- ACDMPRG     -- Academic Progress:
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
	CAN_ACTIVATE_DT                           INTEGER,	-- MMDDYY      -- Activation Date - date/time waiting time clock started
	CAN_AGE_AT_LISTING                        INTEGER,	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING              INTEGER,	               -- Calculated Candidate Age in Months at Listing
	CAN_ANASTOMOSIS                           INTEGER,	               -- Was anastomosis initiated?
	CAN_ANESTH_PRIOR_DEATH                    INTEGER,	               -- Did the patient go to the operating room and receive anesthesia for transplant prior to death?
	CAN_ANGINA                                INTEGER,	-- ANGINA      -- Angina/Coronary Artery Disease
	CAN_ANGINA_CAD                            INTEGER,	-- ANGNACAD    -- Angina:
	CAN_ARTIFICIAL_LI                         INTEGER,	               -- Life Support://Artifical Liver
	CAN_ASCITES                            VARCHAR(1),	               -- Ascites
	CAN_BACTERIA_PERIT                     VARCHAR(1),	               -- Spontaneous Bacterial Peritonitis
	CAN_BMI                                   INTEGER,	               -- BMI:
	CAN_CEREB_VASC                         VARCHAR(1),	               -- Symptomatic Cerebrovascular Disease
	CAN_CITIZENSHIP                           INTEGER,	-- CTZNLDTC    -- Patient/s Citizenship
	CAN_COGNITIVE_DEVELOP                     INTEGER,	-- COGDEV      -- Cognitive Development (Ped Only)
	CAN_CTP_SCORE                             INTEGER,	               -- Candidate/s CTP score (used for MAOB Liver Variance
	CAN_DEATH_DT                              INTEGER,	-- MMDDYY      -- If removed due to Death, date of death
	CAN_DGN                                   INTEGER,	-- DGN         -- Primary Diagnosis
	CAN_DGN2                                  INTEGER,	-- DGN         -- Secondary Diagnosis
	CAN_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	CAN_DIAB                                  INTEGER,	-- DBINSLDP    -- Diabetes
	CAN_DIAB_TY                               INTEGER,	-- DIABTY      -- Diabetes
	CAN_DIAL                                  INTEGER,	-- DIALTYLI    -- Dialysis
	CAN_DRUG_TREAT_COPD                    VARCHAR(1),	               -- Drug Treated COPD
	CAN_DRUG_TREAT_HYPERTEN                VARCHAR(1),	               -- Drug Treated Systemic Hypertension
	CAN_ECMO                                  INTEGER,	               -- Life Support: ECMO
	CAN_EDUCATION                             INTEGER,	-- EDLEVEL     -- Patient/s Educational Status
	CAN_ELECTROLYTE                        VARCHAR(1),	               -- Unmanageable fluid-electrolyte losses (IN Pediatric Only)
	CAN_EMPL_STAT                             INTEGER,	-- EMPLSTAT    -- Patient/s Employment Status - Pre-6/30/2004
	CAN_ENCEPH                             VARCHAR(1),	               -- Encephalopathy
	CAN_ENDWLFU                               INTEGER,	-- MMDDYY      -- Candidate cohort censoring date
	CAN_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Patient Ethnicity
	CAN_EXHAUST_VASC_ACCESS                VARCHAR(1),	               -- Exhausted Vascular Access
	CAN_FOLLOWS_OPO_ALLOC                     INTEGER,	               -- Does candidate follow the OPO/s current allocation
	CAN_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Patient/s Functional Status
	CAN_FUNGAL_SEPSIS                      VARCHAR(1),	               -- Fungal sepsis (IN Pediatric Only)
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_HGT_CM                                INTEGER,	               -- Candidate/s Height (stored in cm)
	CAN_HGT_WGT_DT                            INTEGER,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	CAN_IABP                                  INTEGER,	               -- Life Support: IABP
	CAN_INIT_ACT_STAT_CD                      INTEGER,	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                             INTEGER,	-- CANDSTAT    -- Initial Status of Patient
	CAN_IV_INOTROP                            INTEGER,	               -- Life Support: IV Inotropes
	CAN_LAST_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                          INTEGER,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                          INTEGER,	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                             INTEGER,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                           INTEGER,	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                              INTEGER,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT                      INTEGER,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM                     INTEGER,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                             INTEGER,	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support
	CAN_LIFE_SUPPORT_OTHER                    INTEGER,	               -- Life Support: Other Mechanism
	CAN_LISTING_CTR_ID                        INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- CAN_LISTING_ Center ID
	CAN_LISTING_DT                            INTEGER,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_LISTING_OPO_ID                        INTEGER,	               -- OPO Serving Listing Center
	CAN_LIVING_DON_TX                         INTEGER,	               -- Has Candidate received a Living Donor transplant? (used for Liver Candidates)
	CAN_LI_DYSFUNCTN                       VARCHAR(1),	               -- Liver Dysfunction
	CAN_LOSS_VASC_ACCESS                   VARCHAR(1),	               -- Loss of two or more vascular access sites (IN Pediatric Only)
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_MALIG_TY                              INTEGER,	-- MALIG       -- Previous Malignancy Type(s)
	CAN_MALIG_TY_BREAST                       INTEGER,	               -- Previous Malignancy - Breast (14)
	CAN_MALIG_TY_CNS_TUMOR                    INTEGER,	               -- Previous Malignancy - CNS Tumor (14)
	CAN_MALIG_TY_GENITOURINARY                INTEGER,	               -- Previous Malignancy - Genitourinary (14)
	CAN_MALIG_TY_HEPBLAST                     INTEGER,	               -- Previous Malignancy - Hepatoblastoma (14)
	CAN_MALIG_TY_HEPCARCINOMA                 INTEGER,	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	CAN_MALIG_TY_LEUK_LYMPH                   INTEGER,	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	CAN_MALIG_TY_LIVER                        INTEGER,	               -- Previous Malignancy - Liver (14)
	CAN_MALIG_TY_LU                           INTEGER,	               -- Previous Malignancy - Lung (14)
	CAN_MALIG_TY_OTHER                        INTEGER,	               -- Previous Malignancy - Other, specify (14)
	CAN_MALIG_TY_SKIN_MEL                     INTEGER,	               -- Previous Malignancy - Skin Melanoma (14)
	CAN_MALIG_TY_SKIN_NON_MEL                 INTEGER,	               -- Previous Malignancy - Skin Non-Melanoma (14)
	CAN_MALIG_TY_THROAT                       INTEGER,	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	CAN_MALIG_TY_THYROID                      INTEGER,	               -- Previous Malignancy - Thyroid (14)
	CAN_MALIG_TY_UNK                          INTEGER,	               -- Previous Malignancy - Type Unknown (14)
	CAN_MAX_AGE                               INTEGER,	               -- Maximum acceptable Donor age
	CAN_MAX_MILE                              INTEGER,	               -- Maximum miles the implant team will travel
	CAN_MAX_WGT                               INTEGER,	               -- Maximum acceptable Donor Weight
	CAN_MED_COND                              INTEGER,	-- MEDCOND     -- Medical Condition
	CAN_MIN_AGE                               INTEGER,	               -- Minimum acceptable Donor Age
	CAN_MIN_WGT                               INTEGER,	               -- Minimum acceptable Donor Weight
	CAN_MOST_RECENT_CREAT                     INTEGER,	               -- Most Recent Absolute Creatinine
	CAN_MOST_RECENT_HGT_CM                    INTEGER,	               -- Candidate/s most recent Waitlist Height in centimeter
	CAN_MOST_RECENT_WGT_KG                    INTEGER,	               -- Candidate/s most recent Waitlist Weight in kilograms
	CAN_MOTOR_DEVELOP                         INTEGER,	-- MOTDEV      -- Motor Development (Ped Only)
	CAN_MUSCLE_WASTING                     VARCHAR(1),	               -- Marked Muscle Wasting
	CAN_NEOPLASM                           VARCHAR(1),	               -- Neoplasm
	CAN_NEW_PREV_PI_TX                     VARCHAR(1),	               -- Previous Pancreas Islet Transplantation:
	CAN_NON_RECON_GI                       VARCHAR(1),	               -- Non-Reconstructible GI tract (IN Pediatric Only)
	CAN_PEPTIC_ULCER                          INTEGER,	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PERM_STATE                         VARCHAR(2),	-- $STATE      -- Patient/s Permanent State
	CAN_PGE                                   INTEGER,	               -- Life Support: PGE
	CAN_PHYSC_CAPACITY                        INTEGER,	-- PHYSCP      -- Physical Capacity:
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PRELIM_XMATCH_REQUEST              VARCHAR(1),	               -- Preliminary Crossmatch Required
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
	CAN_PREV_BONE_MARROW_DT                   INTEGER,	-- MMDDYY      -- Date of Latest Bone Marrow Transplant
	CAN_PREV_BONE_MARROW_TX                   INTEGER,	               -- Number Bone Marrow Transplants
	CAN_PREV_HL                               INTEGER,	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                               INTEGER,	               -- Prev Heart Tx
	CAN_PREV_IN                               INTEGER,	               -- Prev Intestine Tx
	CAN_PREV_KI                               INTEGER,	               -- Prev Kidney Tx
	CAN_PREV_KP                               INTEGER,	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                               INTEGER,	               -- Prev Liver Tx
	CAN_PREV_LU                               INTEGER,	               -- Prev Lung Tx
	CAN_PREV_PA                               INTEGER,	               -- Prev Pancreas Tx
	CAN_PREV_TX                               INTEGER,	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PRIMARY_PAY                           INTEGER,	-- PRMSRCPY    -- Source of Payment//Primary:
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                                  INTEGER,	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_RECUR_SEPSIS                       VARCHAR(1),	               -- Recurrent sepsis (IN Pediatric Only)
	CAN_REM_CD                                INTEGER,	-- REMCD       -- Reason why candidate was removed (removal code)
	CAN_REM_COD                               INTEGER,	-- COD         -- Cause of Death
	CAN_REM_DT                                INTEGER,	-- MMDDYY      -- rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt
	CAN_SECONDARY_PAY                         INTEGER,	-- SNDSRCPY    -- Source of Payment//Secondary:
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data: A =Active Waitlist,R= Removed from Waitlist,L=Live Don Organ Recipient never on waitlist
	CAN_STAT_EXTEND_FLG                       INTEGER,	               -- Status Extension granted for Liver candidate
	CAN_TIEBREAKER_DT                         INTEGER,	-- MMDDYY      -- Tiebreaker Date - used as the ultimate tiebreaker
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                           INTEGER,	               -- Total Serum Albumin
	CAN_TOT_BILI                              INTEGER,	               -- Total Bilirubin (IN Pediatric Only)
	CAN_TRR_EXISTS                            INTEGER,	               -- TRR found for this PX_ID-org_ty
	CAN_TX_COUNTRY                            INTEGER,	-- CTRYID      -- Country of transplant, if outside the US
	CAN_VAD_TAH                               INTEGER,	-- VADTAH      -- Life Support: VAD/TAH
	CAN_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Variceal Bleeding within Last Two Weeks
	CAN_VENTILATOR                            INTEGER,	               -- Life Support: Ventilator
	CAN_WGT_KG                                INTEGER,	               -- Candidate/s Weight in kilograms
	CAN_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	CAN_WORK_NO_STAT                          INTEGER,	-- NOTWRK      -- Working for income//If No, Not Working Due To:
	CAN_WORK_YES_STAT                         INTEGER,	-- WRKNCM      -- Working for income//If Yes:
	CAN_YEAR_ENTRY_US                         INTEGER,	               -- Year of Entry to the U.S.
	DONOR_ID        INTEGER	REFERENCES DONOR(DONOR_ID),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	PERS_ID                                   INTEGER UNIQUE,	               -- Unique Person ID for Recipient
	PERS_NEXTTX                               INTEGER,	-- MMDDYY      -- Transplant Date
	PERS_NEXTTX_TRR_ID                        INTEGER,	               -- Unique identifier for TRR - unique key
	PERS_OPTN_DEATH_DT                        INTEGER,	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RESTRICT_DEATH_DT                    INTEGER,	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_SSA_DEATH_DT                         INTEGER,	-- MMDDYY      -- Death date determined from SSA database
	PX_ID                    INTEGER   		  PRIMARY KEY,             -- Patient Identifier
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	REC_TX_PROCEDURE_TY                       INTEGER,	-- TXPROC      -- Transplant Procedure Type
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);

CREATE TABLE STATHIST_LIIN (
	CANHX_ALBUMIN                             INTEGER,	               -- albumin (used for MELD)
	CANHX_ALBUMIN_BOUND                       INTEGER,	               -- albumin lower bound 1 (used for MELD) (wlreg_audit_liin)
	CANHX_ASCITES                             INTEGER,	-- ASCITES     -- ascites (used for MELD)
	CANHX_BEGIN_DT                            INTEGER,	-- DATE        -- Date WLR record was last changed
	CANHX_BEGIN_DT_TM                         INTEGER,	-- DATETIME    -- WL Status Period Begin Date/Time
	CANHX_BILI                                INTEGER,	               -- bilirubin (used for MELD)
	CANHX_BILI_BOUND                          INTEGER,	               -- bilirubin lower bound 1 (used for MELD) (wlreg_audit_liin)
	CANHX_BILI_PPC                            INTEGER,	               -- Bilirubin(PBC/PSC/Other Cholestatic) (used for MELD)
	CANHX_CREAT_BOUND                         INTEGER,	               -- serum creatinine lower bound 1 upper 4 (used for MELD) (wlreg_audit_liin)
	CANHX_DIAL_PRIOR_WEEK                  VARCHAR(1),	               -- Did the patient have dialysis within the week prior to the serum creatinine test (used for MELD)
	CANHX_ENCEPH                              INTEGER,	-- ENCEPH      -- encephalopathy (used for MELD)
	CANHX_END_DT                              INTEGER,	-- DATE        -- WL Status Period End Date
	CANHX_END_DT_TM                           INTEGER,	-- DATETIME    -- WL Status Period End Date/Time
	CANHX_EXC_DIAG_HCC1                       INTEGER,	               -- Exception MELD/PELD Score for HCC1
	CANHX_EXC_DIAG_HCC2                       INTEGER,	               -- Exception MELD/PELD Score for HCC2
	CANHX_EXC_DIAG_HCC_NOPOLICY               INTEGER,	               -- Exception MELD/PELD score for HCC not by policy
	CANHX_EXC_DIAG_OTHER                      INTEGER,	               -- Other diagnosis MELD/PELD score exception
	CANHX_EXC_FLG                             INTEGER,	               -- Exception MELD/PELD
	CANHX_EXC_SCORE                           INTEGER,	-- CANDSTAT    -- Exception Score
	CANHX_GROWTH_FAIL                         INTEGER,	               -- Patient is experiencing growth failure
	CANHX_HGT_CM                              INTEGER,	               -- Candidate/s Height (stored in cm)
	CANHX_INR                                 INTEGER,	               -- International Normalized Ratio (how fast the patients blood clots relative to the control)(used for MELD)
	CANHX_INR_BOUND                           INTEGER,	               -- International Normalized Ratio lower bound 1
	CANHX_KEEP_PED_STAT_FLG                   INTEGER,	               -- Maintain Pediatric Status for Candidate after the candidate turns 18
	CANHX_MELD_DIFF_REASON_CD                 INTEGER,	-- MELDDIFF    -- Reason Match and Laboratory MELD/PELD score are different
	CANHX_OPTN_LAB_MELD                       INTEGER,	-- CANDSTAT    -- OPTN MELD/PELD given
	CANHX_OPTN_LAB_MELD_TY                 VARCHAR(4),	               -- OPTN score MELD or PELD
	CANHX_PREV_LOWER_MELD_SCORE               INTEGER,	-- CANDSTAT    -- Previous lower MELD score
	CANHX_REASON_STAT_INACT                   INTEGER,	-- INACTRSN    -- Reason Candidate Status made inactive
	CANHX_SCORE_MISSING                       INTEGER,	               -- Missing MELD/PELD flag
	CANHX_SERUM_CREAT                         INTEGER,	               -- serum creatinine (used for MELD)
	CANHX_SERUM_SODIUM                        INTEGER,	               -- serum sodium (used for MELD)
	CANHX_SRTR_LAB_MELD                       INTEGER,	-- CANDSTAT    -- SRTR MELD/PELD given
	CANHX_SRTR_LAB_MELD_TY                 VARCHAR(1),	               -- SRTR score MELD or PELD
	CANHX_STAT_CD                             INTEGER,	-- CANDSTAT    -- WL Status During Given Period
	CANHX_WGT_KG                              INTEGER,	               -- Candidate/s Weight in kilograms
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_INIT_ACT_STAT_CD                      INTEGER,	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                             INTEGER,	-- CANDSTAT    -- Initial Status of Patient
	CAN_LAST_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                          INTEGER,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                          INTEGER,	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                             INTEGER,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                           INTEGER,	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                              INTEGER,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT                      INTEGER,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM                     INTEGER,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                             INTEGER,	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LISTING_DT                            INTEGER,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_REM_CD                                INTEGER,	-- REMCD       -- Reason why candidate was removed
	CAN_REM_DT                                INTEGER,	-- MMDDYY      -- rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	PX_ID          INTEGER REFERENCES CAND_LIIN(PX_ID) PRIMARY KEY,	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);

CREATE TABLE STATJUST_LI1 (
	CANHX_AGE_GROUP                     	  VARCHAR(1),	               -- Age Group (A - adult P - pediatric)
	CANHX_ALBUMIN                             INTEGER,	               -- albumin (used for MELD)
	CANHX_ALBUMIN_DT                          INTEGER,	-- MMDDYY      -- Albumin Test Date
	CANHX_ASCITES                             INTEGER,	               -- ascites (used for MELD)
	CANHX_ASCITES_DT                          INTEGER,	-- MMDDYY      -- ascites lab date
	CANHX_BILI                                INTEGER,	               -- bilirubin (used for MELD)
	CANHX_BILIARY_SEPSIS                      INTEGER,	               -- Biliary sepsis requiring pressor support of 5 mcg/kg/min of dopamine or greater?
	CANHX_BILI_DT                             INTEGER,	-- MMDDYY      -- Bilirubin Test Date
	CANHX_BILI_PPC                            INTEGER,	               -- Bilirubin(PBC/PSC/Other Cholestatic) (used for MELD)
	CANHX_BILI_PPC_DT                         INTEGER,	-- MMDDYY      -- test date of Bilirubin(PBC/PSC/Other Cholestatic) (used for MELD)
	CANHX_CHG_DT                              INTEGER,	-- MMDDYY      -- Date Status Justification record as created
	CANHX_CRIT_NOT_MET                        INTEGER,	               -- Criteria Not Met?
	CANHX_DGN                            VARCHAR(100),	               -- Diagnosis
	CANHX_DIAL_PRIOR_WEEK                  VARCHAR(1),	               -- Did the patient have dialysis within the week prior to the serum creatinine test (used for MELD)
	CANHX_ENCEPH                              INTEGER,	               -- encephalopathy (used for MELD)
	CANHX_ENCEPH_DT                           INTEGER,	-- MMDDYY      -- encephalopathy lab date
	CANHX_ENCEPH_ONSET                        INTEGER,	               -- Stage III or IV Encephalopathy?
	CANHX_FORM_STAT                           INTEGER,	-- STJSFRST    -- Status JustificationForm Status
	CANHX_FULMINANT_FAIL                      INTEGER,	               -- Fulminant Hepatic Failure?
	CANHX_GI_BLEEDING                         INTEGER,	               -- Upper Gastro-intestinal Bleeding?
	CANHX_HEPREN                              INTEGER,	               -- Hepatorenal syndrome?
	CANHX_HGT_CM                              INTEGER,	               -- Candidate/s Height (stored in cm)
	CANHX_HOSP_NAME                       VARCHAR(35),	               -- Hospital Location
	CANHX_ICU                                 INTEGER,	               -- In ICU?
	CANHX_INIT_FORM                           INTEGER,	               -- Is this the initial form?
	CANHX_INR                                 INTEGER,	               -- International Normalized Ratio (how fast the patients blood clots relative to the control)(used for MELD)
	CANHX_INR_DT                              INTEGER,	-- MMDDYY      -- INR Test Date
	CANHX_NON_METAST_HEPBLAST                 INTEGER,	               -- This is a pediatric patient wth non-metastatic hepatoblastoma who is otherwise a suitable candidate for liver transplantation.
	CANHX_OTC                                 INTEGER,	               -- Hospitalized with OTC or Crigler-Najjar Disease Type I?
	CANHX_OTC_NOHOSP                          INTEGER,	               -- Non-hospitalized Transplant Candidate with Ornithine Transcarbarmylase Deficiency (OTC) or Crigler-Najjar Disease Type I
	CANHX_PELD_HGT_DT                         INTEGER,	-- MMDDYY      -- peld hgt dt lab date
	CANHX_PELD_WGT_DT                         INTEGER,	-- MMDDYY      -- peld wgt dt lab date
	CANHX_PRIME_NONFUNCTN                     INTEGER,	               -- Primary non-function or hepatic artery thrombosis of a transplanted liver within 7 days of implantation?
	CANHX_PROTHROM                            INTEGER,	               -- Prothrombin Time (seconds prolonged)
	CANHX_PROTHROM_DT                         INTEGER,	-- MMDDYY      -- Prothrombin Test Date
	CANHX_PX_TX_CTR                           INTEGER,	               -- Patient in TX Center
	CANHX_RAHH                                INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax?
	CANHX_RAHH_PARACENT                       INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - Require Paracentesis
	CANHX_RAHH_PAR_NUTR                       INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - requiring parenteral nutrition
	CANHX_RAHH_SUPL_O2                        INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - Require Supplement Oxygen?
	CANHX_RAHH_TUBE_FEED                      INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - Require Supplement Tube Feeding?
	CANHX_RAHH_UNRESPON_DIURETICS             INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - Unresponsive to diuretic and salt restriction therapy to respiratory distress?
	CANHX_SERUM_CREAT                         INTEGER,	               -- serum creatinine (used for MELD)
	CANHX_SERUM_CREAT_DT                      INTEGER,	-- MMDDYY      -- Serum Creatinine lab date
	CANHX_STAT_CD                             INTEGER,	-- CANDSTAT    -- Candidate Status Code for Justification form
	CANHX_STAT_TY                             INTEGER,	-- STTJSTTY    -- Type of Status Justification Form
	CANHX_URINE_OSMOL                         INTEGER,	               -- Hepatorenal syndrome - Urine osmolality > Plasma osmolality (U/P ratio > 1.0)?
	CANHX_URINE_SODIUM                        INTEGER,	               -- Hepatorenal syndrome - Urine sodium <10 mEq/ml?
	CANHX_URINE_VOL                           INTEGER,	               -- Hepatorenal syndrome - Urine volume <10 ml/kg/d in patients less than 18 years of age?
	CANHX_VENTILATOR                          INTEGER,	               -- On Mechanical Ventilator?
	CANHX_WGT_KG                              INTEGER,	               -- Candidate/s Weight in kilograms
	CANHX_WILSONS                             INTEGER,	               -- Acute Decompensated Wilson/s Disease
	CAN_LISTING_CTR_ID  INTEGER REFERENCES INSTITUTION(CTR_ID),	       -- Listing Center ID for WL Patients/TCR Center ID for Liv-don Recipient
	CAN_REG2_LAST_TX_DT                       INTEGER,	-- MMDDYY      -- Contains the last tx dt for this candidate at this center.
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID) PRIMARY KEY,	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);

CREATE TABLE STATJUST_LI2A (
	CANHX_AGE_GROUP                           VARCHAR(1),	               -- Age Group (A - adult P - pediatric)
	CANHX_ALBUMIN                             INTEGER,	               -- albumin (used for MELD)
	CANHX_ALBUMIN_DT                          INTEGER,	-- MMDDYY      -- Albumin (used for MELD) - Date
	CANHX_ASCITES                             INTEGER,	               -- ascites (used for MELD)
	CANHX_ASCITES_DT                          INTEGER,	-- MMDDYY      -- Ascites (used for MELD) - Date
	CANHX_BILI                                INTEGER,	               -- bilirubin (used for MELD)
	CANHX_BILI_DT                             INTEGER,	-- MMDDYY      -- Bilirubin (used for MELD) - Date
	CANHX_CHG_DT                              INTEGER,	-- MMDDYY      -- Status Change Date
	CANHX_CRIT_NOT_MET                        INTEGER,	               -- Criteria Not Met?
	CANHX_CTP_SCORE                           INTEGER,	               -- CTP Score
	CANHX_DGN                             VARCHAR(55),	               -- Diagnosis
	CANHX_ENCEPH                              INTEGER,	               -- encephalopathy (used for MELD)
	CANHX_ENCEPH_DT                           INTEGER,	-- MMDDYY      -- Encephalopathy (used for MELD) - Date
	CANHX_ENCEPH_UNRESPON                     INTEGER,	               -- Stage III or IV encephalopathy unresponsive to medical therapy?
	CANHX_FORM_STAT                           INTEGER,	-- STJSFRST    -- Status JustificationForm Status
	CANHX_HEPREN                              INTEGER,	               -- Hepatorenal syndrome?
	CANHX_HOSP_LOC_UNIT                   VARCHAR(40),	               -- If not it TXC critical care unit, hospital location and care unit
	CANHX_INIT_FORM                           INTEGER,	               -- Is this the initial form?
	CANHX_INR                                 INTEGER,	               -- International Normalized Ratio (how fast the patients blood clots relative to the control)(used for MELD)
	CANHX_INR_DT                              INTEGER,	-- MMDDYY      -- test date of INR (used for MELD)
	CANHX_LIFE_EXPECT_LT7DAYS                 INTEGER,	               -- Does the patient have a life expectancy without a liver transplant of <7 days
	CANHX_OTHER_DISEASE                       INTEGER,	               -- Bilirubin (mg/dl) - For primary biliary cirrhosis, primary Sclerosing cholangitis, or other Cholestatic liver diseases - Value
	CANHX_OTHER_DISEASE_DT                    INTEGER,	-- MMDDYY      -- Bilirubin (mg/dl) - For primary biliary cirrhosis, primary Sclerosing cholangitis, or other Cholestatic liver diseases - Date
	CANHX_PROTHROM                            INTEGER,	               -- Prothrombin time (secs. Prolonged) over control - Value
	CANHX_PROTHROM_DT                         INTEGER,	-- MMDDYY      -- Prothrombin time (secs. Prolonged) over control - Date
	CANHX_PX_TX_CTR                           INTEGER,	               -- Is the patient currently located in the transplant center critical care unit?
	CANHX_RAHH                                INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax?
	CANHX_STAT_CD                             INTEGER,	-- CANDSTAT    -- Candidate/s current Medical Urgency Status
	CANHX_STAT_TY                             INTEGER,	-- STTJSTTY    -- Type of Status Justification Form
	CANHX_UNRESPON                            INTEGER,	               -- Documented unresponsive active variceal hemorrhage or gastro-intestinal bleeding requiring transfusion of at least 10 cc/kg of red blood cells?
	CANHX_URINE_OSMOL                         INTEGER,	               -- Hepatorenal syndrome - Urine osmolality > Plasma osmolality (U/P ratio > 1.0)?
	CANHX_URINE_SODIUM                        INTEGER,	               -- Hepatorenal syndrome - urine sodium <10 mEq/ml?
	CANHX_URINE_VOL                           INTEGER,	               -- Hepatorenal syndrome - urine volume < 500 ml/d?
	CAN_LISTING_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- CAN_LISTING_ Center ID
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID) PRIMARY KEY,	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);

CREATE TABLE STATJUST_LI2B (
	CANHX_3_CRIT_MET                       INTEGER,	               -- Meets at least 3 of the 5 following criteria?
	CANHX_AGE_GROUP                        VARCHAR(1),	               -- Age Group (A - adult P - pediatric)
	CANHX_ALBUMIN                             INTEGER,	               -- albumin (used for MELD)
	CANHX_ALBUMIN_DT                          INTEGER,	-- MMDDYY      -- Albumin (g/dl) - Date
	CANHX_ALBUMIN_LT3                         INTEGER,	               -- Albumin < 3 g/dl?
	CANHX_ASCITES                             INTEGER,	               -- ascites (used for MELD)
	CANHX_ASCITES_DT                          INTEGER,	-- MMDDYY      -- Ascites - Date
	CANHX_ASCITES_REQUIRE_DIURETICS           INTEGER,	               -- Ascites requiring diuretic therapy ?
	CANHX_BILI                                INTEGER,	               -- bilirubin (used for MELD)
	CANHX_BILI_DT                             INTEGER,	-- MMDDYY      -- Bilirubin (mg/dl) - Date
	CANHX_BILI_GT4                            INTEGER,	               -- Bilirubin > 4 mg/dl?
	CANHX_CHG_DT                              INTEGER,	-- MMDDYY      -- Date Status Justification record as created
	CANHX_CRIT_NOT_MET                        INTEGER,	               -- Criteria Not Met?
	CANHX_CTP_SCORE                           INTEGER,	               -- CTP Score
	CANHX_DGN                             VARCHAR(55),	               -- Diagnosis
	CANHX_ENCEPH                              INTEGER,	               -- encephalopathy (used for MELD)
	CANHX_ENCEPH_DT                           INTEGER,	-- MMDDYY      -- Encephalopathy - Date
	CANHX_FORM_STAT                           INTEGER,	-- STJSFRST    -- Status JustificationForm Status
	CANHX_GROWTH_FAIL                         INTEGER,	               -- Patient is experiencing growth failure
	CANHX_HCC_DGN                         VARCHAR(55),	               -- Hepatocellular Carcinoma (HCC) - Diagnosis
	CANHX_HCC_MED_CRIT1                       INTEGER,	               -- Hepatocellular Carcinoma (HCC) - Medical Criteria 1 met?
	CANHX_HCC_MED_CRIT2                       INTEGER,	               -- Hepatocellular Carcinoma (HCC) - Medical Criteria 2 met?
	CANHX_HCC_MED_CRIT3                       INTEGER,	               -- Hepatocellular Carcinoma (HCC) - Medical Criteria 3 met?
	CANHX_HEPREN                              INTEGER,	               -- Hepatorenal syndrome?
	CANHX_INIT_FORM                           INTEGER,	               -- Is this the initial form?
	CANHX_INR                                 INTEGER,	               -- International Normalized Ratio (how fast the patients blood clots relative to the control)(used for MELD)
	CANHX_INR_DT                              INTEGER,	-- MMDDYY      -- INR - Date
	CANHX_INR_GT1                             INTEGER,	               -- INR > 1.7?
	CANHX_MALNUTR                             INTEGER,	               -- Malnutrition defined as loss of 1 standard deviation of expected growth ?
	CANHX_OTC                                 INTEGER,	               -- Ornithine Transcarbamylase Deficiency (OTC) or Crigler-Najjar Disease Type I?
	CANHX_OTHER_DISEASE                       INTEGER,	               -- For primary biliary cirrhosis, primary Sclerosing cholangitis, or other Cholestatic liver diseases: Bilirubin (mg/dl)* - Value
	CANHX_OTHER_DISEASE_DT                    INTEGER,	-- MMDDYY      -- For primary biliary cirrhosis, primary Sclerosing cholangitis, or other Cholestatic liver diseases: Bilirubin (mg/dl)* - Date
	CANHX_PROTHROM                            INTEGER,	               -- Prothrombin time (secs. Prolonged) over control - Value
	CANHX_PROTHROM_DT                         INTEGER,	-- MMDDYY      -- Prothrombin time (secs. Prolonged) over control - Date
	CANHX_RAHH                                INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax?
	CANHX_RAHH_PARACENT                       INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - Require Paracentesis
	CANHX_RAHH_PAR_NUTR                       INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - requiring parenteral nutrition
	CANHX_RAHH_UNRESPON_DIURETICS             INTEGER,	               -- Refractory Ascites/Hepato-Hydrothorax - unresponsive to diuretic and salt restriction therapy leading to respiratory distress or requiring supplemental tube feeding
	CANHX_RECUR_CHOLANGITIS                   INTEGER,	               -- Recurrent cholangitis defined as 2 or more episodes in 6 months requiring hospitalization and intravenous antibiotics?
	CANHX_SBP                                 INTEGER,	               -- Spontaneous bacterial peritonitis?
	CANHX_SBP_POS_BACTERIA                    INTEGER,	               -- Spontaneous bacterial peritonitis - a gram stain of ascitic fluid positive for the presence of bacteria
	CANHX_SBP_POS_CULT                        INTEGER,	               -- Spontaneous bacterial peritonitis - a positive culture of ascitic fluid for bacteria
	CANHX_SBP_WHITE_BLOOD                     INTEGER,	               -- Spontaneous bacterial peritonitis - an ascitic fluid white blood cell count with greater than 300 polymorphonuclear cells per milliliter, or a total of 500 white blood cells per milliliter
	CANHX_STAT_CD                             INTEGER,	-- CANDSTAT    -- Candidate Status Code for Justification form
	CANHX_STAT_TY                             INTEGER,	-- STTJSTTY    -- Type of Status Justification Form
	CANHX_UNRESPON                            INTEGER,	               -- Documented unresponsive active variceal hemorrhage or gastro-intestinal bleeding requiring transfusion of at least 10 cc/kg of red blood cells?
	CANHX_URINE_OSMOL                         INTEGER,	               -- Hepatorenal syndrome - urine osmolality >plasma
	CANHX_URINE_SODIUM                        INTEGER,	               -- Hepatorenal syndrome - urine sodium <10 mEq/ml
	CANHX_URINE_VOL                           INTEGER,	               -- Hepatorenal syndrome - urine volume < 500 ml/d
	CAN_LISTING_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- CAN_LISTING_ Center ID
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID) PRIMARY KEY,	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);

CREATE TABLE MPEXCEPT (
	CANHX_MPXCPT_AFP                          INTEGER,	               -- Alpha-fetoprotein value (NG/ml)
	CANHX_MPXCPT_AFP_DT                       INTEGER,	-- MMDDYY      -- Alpha-fetoprotein Date
	CANHX_MPXCPT_APPL_TY                      INTEGER,	-- MPAPPLTY    -- Type of M/P Exception form
	CANHX_MPXCPT_BEGIN_DT                     INTEGER,	-- MMDDYY      -- the date the MELD/PELD exception goes into affect.
	CANHX_MPXCPT_BIOPSY_DT                    INTEGER,	-- MMDDYY      -- Biopsy date for diagnosis non-metastatic hepatoblastoma
	CANHX_MPXCPT_CASE_CUR_FORM                INTEGER,	               -- Indicate form is the current form
	CANHX_MPXCPT_CASE_ID                      INTEGER,	               -- Unique identified of a M/P Exception case
	CANHX_MPXCPT_DAYS_AFTER_TX                INTEGER,	               -- within how many days of transplantation (for HAT diagnosis)
	CANHX_MPXCPT_DGN                          INTEGER,	-- MPDGN       -- Diagnosis for the M/P Exception
	CANHX_MPXCPT_END_DT                       INTEGER,	-- MMDDYY      -- the date the MELD/PELD exception expires.
	CANHX_MPXCPT_FORM_ID                      INTEGER PRIMARY KEY,	               -- Unique identified of a M/P Exception form
	CANHX_MPXCPT_HCC_ARTERIOGRAM_DT           INTEGER,	-- MMDDYY      -- Date of Arteriogram confirming a tumor
	CANHX_MPXCPT_HCC_BIOPSY_DT                INTEGER,	-- MMDDYY      -- Date Biopsy confirming HCCA
	CANHX_MPXCPT_HCC_BONE_SCAN_DT             INTEGER,	-- MMDDYY      -- Date of Bone Scan to assess extraheptic spread
	CANHX_MPXCPT_HCC_CHEMBOLIZAT_DT           INTEGER,	-- MMDDYY      -- Date of Chemoembolization of Lesion
	CANHX_MPXCPT_HCC_CHEM_ABLAT_DT            INTEGER,	-- MMDDYY      -- Date of Chemical Ablation of Lesion
	CANHX_MPXCPT_HCC_CRYO_ABLAT_DT            INTEGER,	-- MMDDYY      -- Date of Cryo Ablation of Lesion
	CANHX_MPXCPT_HCC_CT_CHEST_DT              INTEGER,	-- MMDDYY      -- Date of CT of Chest to assess extraheptic spread
	CANHX_MPXCPT_HCC_FREQ_ABLAT_DT            INTEGER,	-- MMDDYY      -- Date of Radio Frequency Ablation of Lesion
	CANHX_MPXCPT_HCC_MRI_CHEST_DT             INTEGER,	-- MMDDYY      -- Date MRI of Chest to assess extraheptic spread
	CANHX_MPXCPT_HCC_NO_MACROVASC          VARCHAR(1),	               -- Does the assessment rule out macrovascular involvement
	CANHX_MPXCPT_HCC_NO_XTRAHEP_SPRD       VARCHAR(1),	               -- Does assessment rule out an extraheptic spread
	CANHX_MPXCPT_HCC_RESECT_CAND           VARCHAR(1),	               -- Is the patient a resection candidate?
	CANHX_MPXCPT_HCC_RESECT_INIT           VARCHAR(1),	               -- Has the patient been resected since the initial HCC application?
	CANHX_MPXCPT_HCC_SURG_RESECT_DT           INTEGER,	-- MMDDYY      -- Date of surgical resection
	CANHX_MPXCPT_MELD_OR_PELD              VARCHAR(4),	               -- Indicates if the score is MELD or PELD
	CANHX_MPXCPT_MOST_RECENT_APPROV           INTEGER,	               -- 1/ Indicate form is the most recently approved
	CANHX_MPXCPT_NO_OF_ORIG_TUMORS            INTEGER,	               -- Number of Tumors Originally Reported - details in liin.mpexcept_orig_tumors
	CANHX_MPXCPT_NO_OF_TUMORS                 INTEGER,	               -- Number of Tumors Reported - details in liin.mpexcept_tumors
	CANHX_MPXCPT_ORGANIC_ACIDEMIA             INTEGER,	               -- Are there organic acidemias? (for Metabolic Disease)
	CANHX_MPXCPT_ORIG_APPL_DT                 INTEGER,	-- MMDDYY      -- Original application date of the MELD/PELD exception form
	CANHX_MPXCPT_ORIG_TUMOR_FLG            VARCHAR(1),	               -- Is the Original/Presenting Tumor number, size, and imaging information available?
	CANHX_MPXCPT_ORIG_TUMOR_IMAGE_DT          INTEGER,	-- MMDDYY      -- Original/Presenting Imaging Date
	CANHX_MPXCPT_OTC                          INTEGER,	               -- OTC (urea cycle defect type)
	CANHX_MPXCPT_POLICY_EFFECTIVE_DT          INTEGER,	-- MMDDYY      -- Indicates the policy date that the form was entered under
	CANHX_MPXCPT_REGION                       INTEGER,	-- REGION      -- Region associated with the case
	CANHX_MPXCPT_REQUEST_SCORE                INTEGER,	               -- Requested M/P Exception score
	CANHX_MPXCPT_STAT                         INTEGER,	-- MPSTAT      -- Status of M/P Exception form
	CANHX_MPXCPT_STAT_DT                      INTEGER,	-- MMDDYY      -- Date M/P Exception form status last changed
	CANHX_MPXCPT_TX_DT                        INTEGER,	-- MMDDYY      -- transplant date (for HAT diagnosis)
	CANHX_MPXCPT_UREA_CYCLE_DEFECT            INTEGER,	               -- Are there urea cycle defects? (for Metabolic Disease)
	PX_ID            INTEGER REFERENCES CAND_LIIN(PX_ID)               -- Patient Identifier
);

CREATE TABLE MPEXCEPT_TUMORS (
	CANHX_MPXCPT_CHRONIC_LI_AFP500            INTEGER,	               -- Does the patient have chronic liver disease and an alpha-fetoprotein >= 500 nanograms
	CANHX_MPXCPT_FORM_ID  INTEGER REFERENCES MPEXCEPT(CANHX_MPXCPT_FORM_ID) PRIMARY KEY, -- Unique identified of a M/P Exception form
	CANHX_MPXCPT_HCC_CT_ABDOMEN_DT            INTEGER,	-- MMDDYY      -- Date CT completed
	CANHX_MPXCPT_HCC_MRI_ABDOMEN_DT           INTEGER,	-- MMDDYY      -- Date MRI completed
	CANHX_MPXCPT_HCC_TUMOR_BLUSH           VARCHAR(1),	               -- Was a blush seen on tumor imaging study corresponding to area of suspicion
	CANHX_MPXCPT_HCC_TUMOR_ID                 INTEGER,	               -- Order in which the tumor size was entered on the M/P Exception form
	CANHX_MPXCPT_HCC_TUMOR_SIZE_CM            INTEGER,	               -- Size of tumor in centimeters
	CANHX_MPXCPT_HCC_ULTRASOUND_DT            INTEGER	-- MMDDYY      -- Date Ultrasound of liver completed
);

CREATE TABLE MPEXCEPT_ORIG_TUMORS (
	CANHX_MPXCPT_FORM_ID   INTEGER REFERENCES MPEXCEPT(CANHX_MPXCPT_FORM_ID) PRIMARY KEY,	               -- Uniquely identifies a MELD/PELD exception form
	CANHX_MPXCPT_ORIG_HCC_TUMOR_ID            INTEGER,	               -- Order in which the tumor size was entered on the M/P exception form
	CANHX_MPXCPT_ORIG_HCC_TUMOR_SIZE          INTEGER	               -- Size of tumor in centimeters
);

CREATE TABLE TX_LI (
	CANHX_MPXCPT_HCC_APPLY_IND                INTEGER,	               -- Ever Applied for an HCC exception
	CANHX_MPXCPT_HCC_APPROVE_IND              INTEGER,	               -- Ever Approved for an HCC exception
	CAN_ABO                                VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_AGE_AT_LISTING                        INTEGER,	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING              INTEGER,	               -- Calculated Candidate Age in Months at Listing
	CAN_ANGINA                                INTEGER,	-- ANGINA      -- Angina/Coronary Artery Disease
	CAN_ANGINA_CAD                            INTEGER,	-- ANGNACAD    -- Angina:
	CAN_BACTERIA_PERIT                     VARCHAR(1),	               -- Spontaneous Bacterial Peritonitis
	CAN_CEREB_VASC                         VARCHAR(1),	               -- Symptomatic Cerebrovascular Disease
	CAN_CITIZENSHIP                           INTEGER,	-- CTZNLDTC    -- Patient/s Citizenship
	CAN_DGN                                   INTEGER,	-- DGN         -- Primary Diagnosis
	CAN_DGN2                                  INTEGER,	-- DGN         -- Secondary Diagnosis
	CAN_DIAB                                  INTEGER,	-- DBINSLDP    -- Diabetes
	CAN_DIAB_TY                               INTEGER,	-- DIABTY      -- Diabetes
	CAN_DRUG_TREAT_COPD                    VARCHAR(1),	               -- Drug Treated COPD
	CAN_DRUG_TREAT_HYPERTEN                VARCHAR(1),	               -- Drug Treated Systemic Hypertension
	CAN_EDUCATION                             INTEGER,	-- EDLEVEL     -- Patient/s Educational Status
	CAN_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Patient Ethnicity
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_HGT_CM                                INTEGER,	               -- Candidate/s Height (stored in cm)
	CAN_INIT_ACT_STAT_CD                      INTEGER,	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                             INTEGER,	-- CANDSTAT    -- Initial Status of Patient
	CAN_LAST_ACT_STAT_DT                      INTEGER,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                          INTEGER,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                          INTEGER,	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                             INTEGER,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                           INTEGER,	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                    INTEGER,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                              INTEGER,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT                      INTEGER,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM                     INTEGER,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                    INTEGER,	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                             INTEGER,	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LISTING_DT                            INTEGER,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_PEPTIC_ULCER                          INTEGER,	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
	CAN_PREV_HL                               INTEGER,	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                               INTEGER,	               -- Prev Heart Tx
	CAN_PREV_IN                               INTEGER,	               -- Prev Intestine Tx
	CAN_PREV_KI                               INTEGER,	               -- Prev Kidney Tx
	CAN_PREV_KP                               INTEGER,	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                               INTEGER,	               -- Prev Liver Tx
	CAN_PREV_LU                               INTEGER,	               -- Prev Lung Tx
	CAN_PREV_PA                               INTEGER,	               -- Prev Pancreas Tx
	CAN_PREV_TX                               INTEGER,	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                                  INTEGER,	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_REM_CD                                INTEGER,	-- REMCD       -- Reason why candidate was removed
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                           INTEGER,	               -- Total Serum Albumin
	CAN_WGT_KG                                INTEGER,	               -- Candidate/s Weight in kilograms
	DONOR_ID       INTEGER REFERENCES DONOR(DONOR_ID),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DONOR_ID_VESSEL                           INTEGER,	               -- Encrypted Vessel Donor ID
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                   INTEGER,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                         INTEGER,	               -- Donor/s Age in Months
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_CAD_DON_COD                           INTEGER,	-- DONCOD      -- Donor/s Cause of Death
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CITIZENSHIP                           INTEGER,	-- CITIZEN     -- Donor/s Citizenship
	DON_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	DON_COD_DON_STROKE                        INTEGER,	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CREAT                                 INTEGER,	               -- Serum Creatinine
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                          INTEGER,	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                            INTEGER,	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_KI                         INTEGER,	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HAPLO_TY_MATCH                        INTEGER,	-- HAPLOTY     -- Haplotype Match Between Live Donor & Recipient
	DON_HGT_CM                                INTEGER,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                            INTEGER,	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_CANCER                           INTEGER,	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                             INTEGER,	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                         INTEGER,	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HTN                                   INTEGER,	               -- Donor history of hypertension (1= yes, 0= no)
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_LIVING_DON_COD                        INTEGER,	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_OPO_CTR_ID  INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DON_OPO_ Center ID
	DON_ORG_SHARED                            INTEGER,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_PH                                    INTEGER,	               -- Blood PH:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_RACE                                  INTEGER,	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RELATIONSHIP_TY                       INTEGER,	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SGOT                                  INTEGER,	               -- SGOT/AST
	DON_SGOT_PREOP                            INTEGER,	               -- SGOT/AST:
	DON_SGPT_PREOP                            INTEGER,	               -- SGPT/ALT:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_WARM_ISCH_TM_MINS                     INTEGER,	               -- Estimated Warm Ischemic Time in minutes
	DON_WGT_KG                                INTEGER,	               -- Donor/s Weight in kilograms
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                   INTEGER,	               -- Unique person ID to replace SSN
	PERS_OPTN_COD                             INTEGER,	-- COD         -- Person Cause of Death
	PERS_OPTN_DEATH_DT                        INTEGER,	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RELIST                               INTEGER,	-- MMDDYY      -- Re-list date after current tx
	PERS_RESTRICT_DEATH_DT                    INTEGER,	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_RETX                                 INTEGER,	-- MMDDYY      -- ReTx date after current tx
	PERS_RETX_TRR_ID                          INTEGER,	               -- TRR_ID of ReTx after current tx
	PERS_SSA_DEATH_DT                         INTEGER,	-- MMDDYY      -- Death date determined from SSA database
	PX_ID          INTEGER REFERENCES CAND_LIIN(PX_ID),	               -- Patient Identifier
	REC_A1                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (1) antigen
	REC_A2                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (2) antigen
	REC_ACADEMIC_LEVEL                        INTEGER,	-- ACDMACTV    -- Academic Activity Level:
	REC_ACADEMIC_PROGRESS                     INTEGER,	-- ACDMPRG     -- Academic Progress:
	REC_ACUTE_REJ_BIOPSY_CONFIRMED            INTEGER,	-- BPSCNFM     -- Was biopsy done to confirm acute rejection:
	REC_ACUTE_REJ_EPISODE                     INTEGER,	-- ACREJEP     -- Did patient have any acute rejection episodes between transplant and discharge:
	REC_ADMISSION_DT                          INTEGER,	-- MMDDYY      -- Date of Admission to Tx Center
	REC_AGE_AT_TX                             INTEGER,	-- AGE9A       -- Age at TX
	REC_AGE_IN_MONTHS_AT_TX                   INTEGER,	               -- Calculated Recipient Age in Months at TX
	REC_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral Therapy:
	REC_ANTIVRL_THERAPY_TY                    INTEGER,	-- ANTLVIRL    -- If Anti-viral Therapies, check all that apply
	REC_ANTIVRL_THERAPY_TY_ACYCLOVIR          INTEGER,	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOGAM            INTEGER,	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOVENE           INTEGER,	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	REC_ANTIVRL_THERAPY_TY_EPIVIR             INTEGER,	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	REC_ANTIVRL_THERAPY_TY_FLU_VAC            INTEGER,	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	REC_ANTIVRL_THERAPY_TY_GAMIMUNE           INTEGER,	               -- Anti-viral Therapy - Gamimune (11)
	REC_ANTIVRL_THERAPY_TY_GAMMAGARD          INTEGER,	               -- Anti-viral Therapy - Gammagard (11)
	REC_ANTIVRL_THERAPY_TY_HBIG               INTEGER,	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	REC_ANTIVRL_THERAPY_TY_OTHER              INTEGER,	               -- Anti-viral Therapy - Other, Specify (11)
	REC_ANTIVRL_THERAPY_TY_VALCYTE            INTEGER,	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	REC_ANTIVRL_THERAPY_TY_VALTREX            INTEGER,	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	REC_ARTIFICIAL_LI                         INTEGER,	               -- Artificial Liver
	REC_ASCITES                            VARCHAR(1),	               -- Risk Factors: Ascites
	REC_A_MM_EQUIV_CUR                        INTEGER,	               -- Num of A mismatches - current equivalent match
	REC_A_MM_EQUIV_TX                         INTEGER,	               -- Num of A mismatches - equivalent match @ tx
	REC_B1                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BACTERIA_PERIT                     VARCHAR(1),	               -- Risk Factors: Spontaneous Bacterial Peritonitis
	REC_BMI                                   INTEGER,	               -- BMI:
	REC_B_MM_EQUIV_CUR                        INTEGER,	               -- Num of B mismatches - current equivalent match
	REC_B_MM_EQUIV_TX                         INTEGER,	               -- Num of B mismatches - current match @ tx
	REC_CMV_IGG                            VARCHAR(2),	               -- CMV IgG
	REC_CMV_IGM                            VARCHAR(2),	               -- CMV IgM
	REC_CMV_STAT                           VARCHAR(2),	               -- Pre-Tx Serology Test Results: Cytomegalovirus
	REC_COD                                   INTEGER,	-- THCOD       -- Recipient/s Cause of Death
	REC_COD2                                  INTEGER,	-- COD         -- Contributory Cause of Death:
	REC_COD3                                  INTEGER,	-- COD         -- Contributory Cause of Death:
	REC_COGNITIVE_DEVELOP                     INTEGER,	-- COGDEV      -- Cognitive Development (Ped Only)
	REC_COLD_ISCH_TM                          INTEGER,	               -- Preserv: Total Cold Ischemic Time
	REC_CTR_ID  INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- REC_ Center ID
	REC_CUR_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- REC_CUR_ Center ID
	REC_CUR_PX_STAT                        VARCHAR(1),	-- $CRPXSTT    -- System field based on latest Follow-Up px_stat used to determine creation of next Follow-Up Form
	REC_DGN                                   INTEGER,	-- DGN         -- Primary Diagnosis
	REC_DGN2                                  INTEGER,	-- DGN         -- Secondary Diagnosis/path. confirmed LI dgn at discharge
	REC_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	REC_DISCHRG_ALBUMIN                       INTEGER,	               -- Serum Albumin at Discharge
	REC_DISCHRG_ALKPHOS                       INTEGER,	               -- Alkaline Phosphate at Discharge
	REC_DISCHRG_CREAT                         INTEGER,	               -- Serum Creatinine at Discharge
	REC_DISCHRG_DT                            INTEGER,	-- MMDDYY      -- Transplant Discharge Date
	REC_DISCHRG_INR                           INTEGER,	               -- INR:
	REC_DISCHRG_LAB_DT                        INTEGER,	-- MMDDYY      -- Discharge Lab Date
	REC_DISCHRG_SGOT                          INTEGER,	               -- SGOT/AST at Discharge
	REC_DISCHRG_SGPT                          INTEGER,	               -- SGPT/ALT at Discharge
	REC_DR1                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DR_MM_EQUIV_CUR                       INTEGER,	               -- Num of DR mismatches - current equivalent match
	REC_DR_MM_EQUIV_TX                        INTEGER,	               -- Num of DR mismatches - current match @ tx
	REC_EBV_STAT                           VARCHAR(2),	               -- EBV serology status
	REC_EMPL_STAT_PRE04                       INTEGER,	-- EMPLSTAT    -- Recipient/s Employment Status - Pre-6/30/2004
	REC_FAIL_BILIARY                       VARCHAR(1),	               -- Cause of Graft Failure: Biliary Tract Complication
	REC_FAIL_DT                               INTEGER,	-- MMDDYY      -- Date of Graft Failure
	REC_FAIL_HEP_DENOVO                    VARCHAR(1),	               -- Cause of Graft Failure: Hepatitis: DeNovo
	REC_FAIL_HEP_RECUR                     VARCHAR(1),	               -- Cause of Graft Failure: Hepatitis: Recurrent
	REC_FAIL_INFECT                        VARCHAR(1),	               -- Cause of Graft Failure: Infection
	REC_FAIL_PRIME_GRAFT_FAIL              VARCHAR(1),	               -- Cause of Graft Failure: Primary Graft Failure
	REC_FAIL_RECUR_DISEASE                 VARCHAR(1),	               -- Cause of Graft Failure: Recurrent Disease
	REC_FAIL_REJ_ACUTE                     VARCHAR(1),	               -- Cause of Graft Failure: Acute Rejection
	REC_FAIL_VASC_THROMB                   VARCHAR(1),	               -- Cause of Graft Failure: Vascular Thrombosis
	REC_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Functional Status
	REC_GRAFT_STAT                         VARCHAR(1),	               -- Graft Status
	REC_HBV_ANTIBODY                       VARCHAR(2),	               -- HBV: Core Antibody//Core Antibody:
	REC_HBV_SURF_ANTIGEN                   VARCHAR(2),	               -- HBV: Surface Antigen//Surface Antigen:
	REC_HCV_STAT                           VARCHAR(2),	               -- HCV serology status
	REC_HEPATIC_ARTER_THROMB               VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only)
	REC_HEPATIC_OUTFLOW_OBSTRUCT           VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only)
	REC_HGT_CM                                INTEGER,	               -- Recipient/s Height in Centimeters
	REC_HGT_WGT_DT                            INTEGER,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	REC_HISTO_TX_ID                           INTEGER,	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_HIV_STAT                           VARCHAR(2),	               -- HIV serology status
	REC_HOSP_90_DAYS                       VARCHAR(1),	               -- Was patient hospitalizied during the last 90 days prior to the transplant admission:
	REC_IMMUNO_MAINT_MEDS                  VARCHAR(1),	               -- Are Any Meds Given Currently for Maint. Or Anti-Rej?
	REC_INOTROP_BP_SUPPORT                 VARCHAR(1),	               -- Risk Factors: Inotropes for Blood Pressure Support
	REC_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support:
	REC_LIFE_SUPPORT_OTHER                    INTEGER,	               -- Life Support: Other Mechanism
	REC_LI_TY                                 INTEGER,	-- SPLITTY     -- Split Type:
	REC_MALIG                              VARCHAR(1),	               -- Pretransplant Malignancy
	REC_MALIG_TY                              INTEGER,	-- MALIG       -- Malignancies//If yes, specify type:
	REC_MALIG_TY_BREAST                       INTEGER,	               -- Previous Malignancy - Breast (14)
	REC_MALIG_TY_CNS_TUMOR                    INTEGER,	               -- Previous Malignancy - CNS Tumor (14)
	REC_MALIG_TY_GENITOURINARY                INTEGER,	               -- Previous Malignancy - Genitourinary (14)
	REC_MALIG_TY_HEPBLAST                     INTEGER,	               -- Previous Malignancy - Hepatoblastoma (14)
	REC_MALIG_TY_HEPCARCINOMA                 INTEGER,	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	REC_MALIG_TY_LEUK_LYMPH                   INTEGER,	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	REC_MALIG_TY_LIVER                        INTEGER,	               -- Previous Malignancy - Liver (14)
	REC_MALIG_TY_LU                           INTEGER,	               -- Previous Malignancy - Lung (14)
	REC_MALIG_TY_OTHER                        INTEGER,	               -- Previous Malignancy - Other, specify (14)
	REC_MALIG_TY_SKIN_MEL                     INTEGER,	               -- Previous Malignancy - Skin Melanoma (14)
	REC_MALIG_TY_SKIN_NON_MEL                 INTEGER,	               -- Previous Malignancy - Skin Non-Melanoma (14)
	REC_MALIG_TY_THROAT                       INTEGER,	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	REC_MALIG_TY_THYROID                      INTEGER,	               -- Previous Malignancy - Thyroid (14)
	REC_MALIG_TY_UNK                          INTEGER,	               -- Previous Malignancy - Type Unknown (14)
	REC_MED_COND                              INTEGER,	-- MEDCOND     -- Medical Condition
	REC_MM_EQUIV_CUR                          INTEGER,	               -- Num of hla mismatches - current equivalent match
	REC_MM_EQUIV_TX                           INTEGER,	               -- Num of hla mismatches - current match @ tx
	REC_MOTOR_DEVELOP                         INTEGER,	-- MOTDEV      -- Motor Development (Ped Only)
	REC_ON_VENTILATOR                      VARCHAR(1),	               -- Risk Factors: On Ventilator
	REC_OPO_ID                                INTEGER,	               -- OPO Serving Transplant Center
	REC_OTHER_THERAPY                      VARCHAR(1),	               -- Other Therapies:
	REC_OTHER_THERAPY_TY                      INTEGER,	-- THRPYOTH    -- If Other Therapies, check all that apply
	REC_OTHER_THERAPY_TY_PHOTOPH              INTEGER,	               -- Other Therapy - Photopheresis (3)
	REC_OTHER_THERAPY_TY_PLASMAPH             INTEGER,	               -- Other Therapy - Plasmapheresis (3)
	REC_OTHER_THERAPY_TY_TLI                  INTEGER,	               -- Other Therapy - Total Lymphoid Irradiation (3)
	REC_PB_CREDIT                          VARCHAR(1),	               -- Payback credit issued to sending OPO
	REC_PB_DEBT                            VARCHAR(1),	               -- Payback debt issued to recipient OPO
	REC_PB_SHARE_TY                           INTEGER,	-- PBSHRTYA    -- Payback share type
	REC_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence:
	REC_PHYSC_CAPACITY                        INTEGER,	-- PHYSCP      -- Physical Capacity:
	REC_PORTAL_HYPERTEN_BLEED              VARCHAR(1),	               -- Did Patient receive 5 or more units of packed red blood cells within 48 hours prior to transplantation due to spontaneous portal hypertensive bleeding:
	REC_PORTAL_VEIN                        VARCHAR(1),	               -- Risk Factors: Portal Vein Thrombosis
	REC_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	REC_POSTX_LOS                             INTEGER,	               -- Time after first Tx, same stay
	REC_PRETX_ALBUMIN                         INTEGER,	               -- PreTx : Serum Albumin
	REC_PRETX_CREAT                           INTEGER,	               -- PreTx : Serum Creatinine
	REC_PRETX_INR                             INTEGER,	               -- PreTx : Prothrombin INR
	REC_PRETX_LAB_DT                          INTEGER,	-- MMDDYY      -- Pretransplant Lab Date
	REC_PRETX_TOT_BILI                        INTEGER,	               -- PreTx : Total Bilirubin
	REC_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Risk Factors: Previous Abdominal Surgery
	REC_PREV_HL                               INTEGER,	               -- Prev Heart-Lung Tx
	REC_PREV_HR                               INTEGER,	               -- Prev Heart Tx
	REC_PREV_IN                               INTEGER,	               -- Prev Intestine Tx
	REC_PREV_KI                               INTEGER,	               -- Prev Kidney Tx
	REC_PREV_KP                               INTEGER,	               -- Prev Kidney-Pancreas Tx
	REC_PREV_LI                               INTEGER,	               -- Prev Liver Tx
	REC_PREV_LU                               INTEGER,	               -- Prev Lung Tx
	REC_PREV_NONFUNCTN_TX                  VARCHAR(1),	               -- Risk Factors: Previous Primary Non-function Post-Tx
	REC_PREV_PA                               INTEGER,	               -- Prev Pancreas Tx
	REC_PRIMARY_PAY                           INTEGER,	-- PRMSRCPY    -- Primary Source of Payment//Primary:
	REC_PROCEDURE_TY_LI                    VARCHAR(1),	-- $LIPROC     -- Surgical Procedure Type
	REC_PX_RESEARCH                        VARCHAR(1),	               -- Px Part. in Research Protocol for Immuno. Meds
	REC_PX_STAT                            VARCHAR(1),	-- $PXSTATA    -- Patient Status
	REC_PX_STAT_DT                            INTEGER,	-- MMDDYY      -- Patient Status/Date
	REC_SECONDARY_PAY                         INTEGER,	-- SNDSRCPY    -- Secondary Source of Payment//Secondary:
	REC_SGPT                                  INTEGER,	               -- PreTx : SGPT/ALT
	REC_TIPSS                              VARCHAR(1),	               -- Risk Factors: Transjugular Intrahepatic Portacaval Stent Shunt (TIPSS)
	REC_TOLERANCE_INDUCTION_TECH           VARCHAR(1),	               -- Any tolerance induction technique used:
	REC_TUMOR                              VARCHAR(1),	               -- Incidental Tumor found at time of Transplant
	REC_TUMOR_TY                              INTEGER,	-- TUMORTH     -- If yes, specify tumor type
	REC_TXFER_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- REC_TXFER_ Center ID
	REC_TXFER_DT                              INTEGER,	-- MMDDYY      -- Transfer Date
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	REC_TX_EXTRA_VESSEL                    VARCHAR(1),	               -- Were extra vessels used in the transplant procedure
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_PROCEDURE_TY                       INTEGER,	-- TXPROC      -- Transplant Procedure Type
	REC_TX_TY                                 INTEGER,	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	REC_VALCYTE                            VARCHAR(1),	               -- Valcyte (valganciclovir)
	REC_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Risk Factors: Uncontrollable Variceal Bleeding
	REC_VENTILATOR                            INTEGER,	               -- Life Support: Ventilator
	REC_WARM_ISCH_TM                          INTEGER,	               -- Preserv: Warm Ishcemic Time
	REC_WGT_KG                                INTEGER,	               -- Recipient/s Weight in kilograms
	REC_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	REC_WORK_NO_STAT                          INTEGER,	-- NOTWRK      -- Working for Income//If No, Not Working Due To:
	REC_WORK_YES_STAT                         INTEGER,	-- WRKNCM      -- Working for Income//If Yes:
	TFL_COD                                   INTEGER,	-- COD         -- Recipient/s Follow-up Cause of Death
	TFL_DEATH_DT                              INTEGER,	-- MMDDYY      -- Date Patient died
	TFL_ENDTXFU                               INTEGER,	-- MMDDYY      -- Cohort date
	TFL_GRAFT_DT                              INTEGER,	-- MMDDYY      -- Graft Failure date
	TFL_LAFUDATE                              INTEGER,	-- MMDDYY      -- Last Graft Follow up Date
	TFL_LASTATUS                           VARCHAR(1),	-- $PXSTATB    -- Last Status
	TRR_ID                                    INTEGER UNIQUE,	               -- Unique identifier for TRR - unique key
	TX_ID                                     INTEGER UNIQUE,	               -- Unique identifier for Transplant - foreign key to rec_transplant
	PRIMARY KEY(TX_ID, TRR_ID)
);

CREATE TABLE IMMUNO (
	REC_DRUG_ANTI_REJ                      	  INTEGER,	               -- Anti-Rejection
	REC_DRUG_CD                               INTEGER,	-- DRUG        -- Drug Code
	REC_DRUG_DAYS                             INTEGER,	               -- Number of Days
	REC_DRUG_INDUCTION                        INTEGER,	               -- Induction
	REC_DRUG_MAINT                            INTEGER,	               -- Maintenance
	TRR_ID            INTEGER REFERENCES TX_LI(TRR_ID) PRIMARY KEY	               -- Unique identifier for TRR - foreign key to TRR
);

CREATE TABLE REC_HISTO (
	B_CELL_DONE                  	          INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_SOLID_PHASE              INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s re-typed HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s re-typed HLA - A (2) antigen
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s re-typed HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s re-typed HLA - B (2) antigen
	DON_BW4                                   INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - Bw4 locus
	DON_BW6                                   INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - Bw6 locus
	DON_CW1                                   INTEGER,	-- CWHLA       -- Donor/s re-typed HLA - Cw (1) locus
	DON_CW2                                   INTEGER,	-- CWHLA       -- Donor/s re-typed HLA - Cw (2) locus
	DON_DPW1                                  INTEGER,	-- DPHLA       -- Donor/s re-typed HLA - DPw (1) locus
	DON_DPW2                                  INTEGER,	-- DPHLA       -- Donor/s re-typed HLA - DPw (2) locus
	DON_DQW1                                  INTEGER,	-- DQHLA       -- Donor/s re-typed HLA - DQ (1) locus
	DON_DQW2                                  INTEGER,	-- DQHLA       -- Donor/s re-typed HLA - DQ (2) locus
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s re-typed HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s re-typed HLA - DR (2) antigen
	DON_DRW51                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR51 locus
	DON_DRW52                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR52 locus
	DON_DRW53                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR53 locus
	DON_RETYP_CELL_SOURCE_I                   INTEGER,	-- TGTCLSRM    -- Target Cell Source Class I:
	DON_RETYP_CELL_SOURCE_II                  INTEGER,	-- TGTCLSRM    -- Target Cell Source Class II:
	DON_RETYP_DT_I                            INTEGER,	-- MMDDYY      -- Date Typing Completed Class I:
	DON_RETYP_DT_II                           INTEGER,	-- MMDDYY      -- Date Typing Completed Class II:
	DON_RETYP_I                            VARCHAR(1),	               -- Donor Retyped Class I:
	DON_RETYP_II                           VARCHAR(1),	               -- Donor Retyped Class II:
	DON_RETYP_METH_I                          INTEGER,	-- HLATYMTM    -- Typing Method Class I:
	DON_RETYP_METH_II                         INTEGER,	-- HLATYMTM    -- Serology, DNA, Other
	H_CELL_DONE                               INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_SOLID_PHASE              INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	REC_A1                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (1) antigen
	REC_A2                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (2) antigen
	REC_B1                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BW4                                   INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - Bw4 locus
	REC_BW6                                   INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - Bw6 locus
	REC_CPRA                                  INTEGER,	               -- HLA Antibody Screening Done/CPRA (%) - Most Recent
	REC_CPRA_PEAK                             INTEGER,	               -- HLA Antibody Screening Done/CPRA (%) - Peak
	REC_CPRA_PEAK_STAT                     VARCHAR(1),	-- $FLDSTCD    -- HLA Antibody Screening Done/CPRA (%) - Peak/Status
	REC_CPRA_STAT                          VARCHAR(1),	-- $FLDSTCD    -- HLA Antibody Screening Done/CPRA (%) - Most Recent/Status
	REC_CW1                                   INTEGER,	-- CWHLA       -- Recipient/s HLA - Cw (1) locus
	REC_CW2                                   INTEGER,	-- CWHLA       -- Recipient/s HLA - Cw (2) locus
	REC_DON_RETYP                          VARCHAR(1),	               -- Donor Retyped at Your Center
	REC_DPW1                                  INTEGER,	-- DPHLA       -- Recipient/s HLA - DPw (1) locus
	REC_DPW2                                  INTEGER,	-- DPHLA       -- Recipient/s HLA - DPw (2) locus
	REC_DQW1                                  INTEGER,	-- DQHLA       -- Recipient/s HLA - DQ (1) locus
	REC_DQW2                                  INTEGER,	-- DQHLA       -- Recipient/s HLA - DQ (2) locus
	REC_DR1                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DRW51                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR51 locus
	REC_DRW52                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR52 locus
	REC_DRW53                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR53 locus
	REC_HISTO_TX_ID   INTEGER REFERENCES TX_LI(TX_ID) PRIMARY KEY,	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_HLA_DT_I                              INTEGER,	-- MMDDYY      -- Date Typing Completed Class I:
	REC_HLA_DT_II                             INTEGER,	-- MMDDYY      -- Date Typing Completed Class II:
	REC_HLA_INTERPRET_I                       INTEGER,	-- HLANTRPA    -- Anti-HLA Interpretation - Most Recent Class I:
	REC_HLA_INTERPRET_II                      INTEGER,	-- HLANTRPB    -- Anti-HLA Interpretation - Most Recent Class II:
	REC_HLA_INTERPRET_PEAK_I                  INTEGER,	-- HLANTRPA    -- Anti-HLA Interpretation - Peak Serum Class I:
	REC_HLA_INTERPRET_PEAK_II                 INTEGER,	-- HLANTRPB    -- Anti-HLA Interpretation - Peak Serum Class II:
	REC_HLA_TYP_DONE                       VARCHAR(1),	               -- HLA typing Done
	REC_LAB_CTR_CD                         VARCHAR(4),	               -- Lab Center Code
	REC_LAB_CTR_CD_ORIG                    VARCHAR(4),	               -- Original Lab Center
	REC_LAB_CTR_TY                         VARCHAR(3),	               -- Lab Center Type
	REC_LAB_CTR_TY_ORIG                    VARCHAR(3),	               -- Original Lab Center
	REC_ORIG_PROV                         VARCHAR(10),	               -- Original Provider Number
	REC_POS_AUTO_XMATCH                    VARCHAR(1),	-- $YNUNKNT    -- Has autocrossmatch ever been positive:
	REC_POS_AUTO_XMATCH_DT                    INTEGER,	-- MMDDYY      -- AutoXM Date - Positive AutoXM:
	REC_PRA_DT_MOST_RECENT_I                  INTEGER,	-- MMDDYY      -- Serum Date - Most Recent Class I:
	REC_PRA_DT_MOST_RECENT_II                 INTEGER,	-- MMDDYY      -- Serum Date - Most Recent Class II:
	REC_PRA_DT_PEAK_I                         INTEGER,	-- MMDDYY      -- Serum Date - Peak Serum Class I:
	REC_PRA_DT_PEAK_II                        INTEGER,	-- MMDDYY      -- Serum Date - Peak Serum Class II:
	REC_PRA_MEASURE_MOST_RECENT_I             INTEGER,	-- PRAMESUR    -- Technique Measures - Most Recent Class I:
	REC_PRA_MEASURE_MOST_RECENT_II            INTEGER,	-- PRAMESUR    -- Technique Measures - Most Recent Class II:
	REC_PRA_MEASURE_PEAK_I                    INTEGER,	-- PRAMESUR    -- Measures - Peak Serum Class I:
	REC_PRA_MEASURE_PEAK_II                   INTEGER,	-- PRAMESUR    -- Measures - Peak Serum Class II:
	REC_PRA_MOST_RECENT                       INTEGER,	               -- Most Recent Serum PRA (%)
	REC_PRA_MOST_RECENT_I                     INTEGER,	               -- PRA (%) - Most Recent Class I:
	REC_PRA_MOST_RECENT_II                    INTEGER,	               -- PRA (%) - Most Recent Class II:
	REC_PRA_PEAK                              INTEGER,	               -- Peak Serum PRA (%)
	REC_PRA_PEAK_I                            INTEGER,	               -- PRA (%) - Peak Serum Class I:
	REC_PRA_PEAK_II                           INTEGER,	               -- PRA (%) - Peak Serum Class II:
	REC_PRA_TARGET_MOST_RECENT_I              INTEGER,	-- PRATGT      -- Target- Most Recent Class I:
	REC_PRA_TARGET_MOST_RECENT_II             INTEGER,	-- PRATGT      -- Target - Most Recent Class II:
	REC_PRA_TARGET_PEAK_I                     INTEGER,	-- PRATGT      -- Target - Peak Serum Class I:
	REC_PRA_TARGET_PEAK_II                    INTEGER,	-- PRATGT      -- Target - Peak Serum Class II:
	REC_PRA_TECH_MOST_RECENT_I                INTEGER,	-- PRATECH     -- Technique - Most Recent Class I:
	REC_PRA_TECH_MOST_RECENT_II               INTEGER,	-- PRATECH     -- Technique - Most Recent Class II:
	REC_PRA_TECH_PEAK_I                       INTEGER,	-- PRATECH     -- Technique - Peak Serum Class I:
	REC_PRA_TECH_PEAK_II                      INTEGER,	-- PRATECH     -- Technique - Peak Serum Class II:
	REC_PRA_TEST_DONE                      VARCHAR(1),	               -- PRA testing Done
	REC_SERA_TESTED_I                      VARCHAR(1),	               -- Were any sera tested pre-transplant that contain anti-HLA Class I antibody:
	REC_SERA_TESTED_II                     VARCHAR(1),	               -- Were any sera tested pre-transplant that contain anti-HLA Class II antibody:
	REC_SERUM_SCREEN                       VARCHAR(1),	               -- Was serum screened for anti-HLA Class II antibody:
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	REC_TYP_METH_I                            INTEGER,	-- HLATYMTM    -- Typing Method Class I
	REC_TYP_METH_II                           INTEGER,	-- HLATYMTM    -- Typing Method Class II
	REC_XMATCH_DONE                        VARCHAR(1),	               -- Crossmatch Done
	REC_XMATCH_DONE_PERIOD                 VARCHAR(1),	               -- If yes, was the crossmatch prospective to transplant:
	REC_XMATCH_OTHER_SERA                  VARCHAR(1),	               -- Pos. Xmatch w/any other Sera by any other Method
	REC_XMATCH_SERUM_DT_MOST_RECENT           INTEGER,	-- MMDDYY      -- Date of crossmatch serum:
	REC_XMATCH_SERUM_DT_ORIG                  INTEGER,	-- MMDDYY      -- B. Date of crossmatch serum - Least Recent (for reference purposes):
	T_CELL_DONE                               INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_SOLID_PHASE              INTEGER	               -- Physical Crossmatch Done//Which T-cell crossmatch
);

CREATE TABLE REC_HISTO_XMAT (
	REC_CELL_SOURCE_XMATCH               	  INTEGER,	-- TGTCLSRM    -- Target Source
	REC_CELL_TY_XMATCH                        INTEGER,	-- CELLTY      -- Cell Type
	REC_HISTO_TX_ID INTEGER REFERENCES TX_LI(TX_ID) PRIMARY KEY,	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_MEASURE_XMATCH                        INTEGER,	-- PRAMESUR    -- Most Recent row 4//Measures:
	REC_RESULT_AUTO_XMATCH                    INTEGER,	-- AUXMRSLT    -- Most Recent row 4//AutoXM Result Using This Target
	REC_RESULT_XMATCH                         INTEGER,	-- CRSSMTCH    -- Most Recent row 4/Result:
	REC_ROW_NUM_XMATCH                        INTEGER,	               -- Indicator for Most Recent(1) or Positive Xmatch(2)
	REC_TECH_XMATCH                           INTEGER	-- HSTTECXM    -- Most Recent row 4//Technique:
);

CREATE TABLE TXF_LI (
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                   INTEGER,	               -- Unique person ID to replace SSN
	PX_ID                                     INTEGER,	               -- Patient Identifier (includes WL patients and living don TX)
	REC_CTR_ID                                INTEGER,	               -- REC_ Center ID
	REC_OPO_ID                                INTEGER,	               -- OPO Serving Transplant Center
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_TY                                 INTEGER,	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	TFL_ACADEMIC_LEVEL                        INTEGER,	-- ACDMACTV    -- Academic Activity Level:
	TFL_ACADEMIC_PROGRESS                     INTEGER,	-- ACDMPRG     -- Academic Progress:
	TFL_ACUTE_REJ_BIOPSY_CONFIRMED            INTEGER,	-- BPSCNFMF    -- Was biopsy done to confirm acute rejection:
	TFL_ACUTE_REJ_EPISODE                     INTEGER,	-- ACREJEPF    -- Did patient have any acute rejection episodes during the follow-up period:
	TFL_ALBUMIN                               INTEGER,	               -- Serum Albumin
	TFL_ALKPHOS                               INTEGER,	               -- Alkaline Phosphate
	TFL_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral therapy:
	TFL_ANTIVRL_THERAPY_TY                    INTEGER,	-- ANTLVIRL    -- If Anti-viral therapies, check all that apply
	TFL_ANTIVRL_THERAPY_TY_ACYCLOVIR          INTEGER,	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOGAM            INTEGER,	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOVENE           INTEGER,	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	TFL_ANTIVRL_THERAPY_TY_EPIVIR             INTEGER,	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	TFL_ANTIVRL_THERAPY_TY_FLU_VAC            INTEGER,	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	TFL_ANTIVRL_THERAPY_TY_GAMIMUNE           INTEGER,	               -- Anti-viral Therapy - Gamimune (11)
	TFL_ANTIVRL_THERAPY_TY_GAMMAGARD          INTEGER,	               -- Anti-viral Therapy - Gammagard (11)
	TFL_ANTIVRL_THERAPY_TY_HBIG               INTEGER,	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	TFL_ANTIVRL_THERAPY_TY_OTHER              INTEGER,	               -- Anti-viral Therapy - Other, Specify (11)
	TFL_ANTIVRL_THERAPY_TY_VALCYTE            INTEGER,	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	TFL_ANTIVRL_THERAPY_TY_VALTREX            INTEGER,	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	TFL_BMI                                   INTEGER,	               -- BMI:
	TFL_CAD                                VARCHAR(1),	               -- Coronary Artery Disease Since Last Follow Up (Ped. Only > 5yr Followup)
	TFL_CARE_PROV_BY                          INTEGER,	-- FLCRPRV     -- Follow-up Care Provided By
	TFL_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	TFL_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	TFL_COD                                   INTEGER,	-- LICOD       -- Recipient/s Cause of Death
	TFL_COD2                                  INTEGER,	-- COD         -- Contributory Cause of Death:
	TFL_COD3                                  INTEGER,	-- COD         -- Contributory Cause of Death:
	TFL_COGNITIVE_DEVELOP                     INTEGER,	-- COGDEV      -- Cognitive Development (Ped Only)
	TFL_CREAT                                 INTEGER,	               -- Most Recent Serum Creatinine
	TFL_DIAB_DURING_FOL                    VARCHAR(1),	               -- Diabetes during the follow-up period:
	TFL_EMPL_STAT_PRE04                       INTEGER,	-- EMPLSTAT    -- Patient/s Employment Status - Pre-6/30/2004
	TFL_FAIL_BILIARY                       VARCHAR(1),	               -- Biliary Tract Complication
	TFL_FAIL_DT                               INTEGER,	-- MMDDYY      -- Date of Graft Failure
	TFL_FAIL_HEP_DENOVO                    VARCHAR(1),	               -- Hepatitis: DeNovo
	TFL_FAIL_HEP_RECUR                     VARCHAR(1),	               -- Hepatitis: Recurrent
	TFL_FAIL_INFECT                        VARCHAR(1),	               -- Infection
	TFL_FAIL_PRIME_GRAFT_FAIL              VARCHAR(1),	               -- Primary Graft Failure
	TFL_FAIL_PX_NONCOMP                    VARCHAR(1),	               -- Patient Noncompliance:
	TFL_FAIL_RECUR_DISEASE                 VARCHAR(1),	               -- Recurrent Disease: non-Hepatitis
	TFL_FAIL_REJ_ACUTE                     VARCHAR(1),	               -- Acute Rejection
	TFL_FAIL_REJ_CHRONIC                   VARCHAR(1),	               -- Chronic Rejection
	TFL_FAIL_VASC_THROMB                   VARCHAR(1),	               -- Vascular Thrombosis
	TFL_FOL_CD                                INTEGER,	-- FOLCD       -- Follow Up code
	TFL_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Functional Status
	TFL_GRAFT_STAT                         VARCHAR(1),	               -- Graft Status
	TFL_HEPATIC_ARTER_THROMB               VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only)
	TFL_HEPATIC_OUTFLOW_OBSTRUCT           VARCHAR(1),	               -- If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only)
	TFL_HGT_CM                                INTEGER,	               -- Recipient/s Height in Centimeters
	TFL_HGT_WGT_DT                            INTEGER,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	TFL_HOSP                               VARCHAR(1),	               -- Hospitalizations during Follow-Up Period
	TFL_HOSP_NUM                              INTEGER,	               -- Number of Hospitalizations:
	TFL_IMMUNO_DISCONT                     VARCHAR(1),	               -- If No Maint Meds, Did Phys. Disc. All Immuno Meds
	TFL_IMMUNO_MAINT_MEDS                     INTEGER,	-- IMMNTRSP    -- Any Meds Given during follow-up for Maintenance or Anti-Rejection?
	TFL_INR                                   INTEGER,	               -- INR:
	TFL_INSULIN_DEPND                      VARCHAR(1),	               -- Insulin dependent:
	TFL_LAB_DT                                INTEGER,	-- MMDDYY      -- Most Recent Lab date
	TFL_MALIG                              VARCHAR(1),	               -- Post transplant Malignancy
	TFL_MALIG_DON_RELATED                  VARCHAR(1),	               -- Donor Related
	TFL_MALIG_LYMPH                        VARCHAR(1),	               -- De Novo Lymphoproliferative
	TFL_MALIG_RECUR_TUMOR                  VARCHAR(1),	               -- Recurrence of Pre-Tx Tumor
	TFL_MALIG_TUMOR                        VARCHAR(1),	               -- De Novo Solid Tumor
	TFL_MOTOR_DEVELOP                         INTEGER,	-- MOTDEV      -- Motor Development (Ped Only)
	TFL_OTHER_THERAPY                      VARCHAR(1),	               -- Other Therapies:
	TFL_OTHER_THERAPY_TY                      INTEGER,	-- THRPYOTH    -- If Other therapies, check all that apply:
	TFL_OTHER_THERAPY_TY_PHOTOPH              INTEGER,	               -- Other Therapy - Photopheresis (3)
	TFL_OTHER_THERAPY_TY_PLASMAPH             INTEGER,	               -- Other Therapy - Plasmapheresis (3)
	TFL_OTHER_THERAPY_TY_TLI                  INTEGER,	               -- Other Therapy - Total Lymphoid Irradiation (3)
	TFL_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence
	TFL_PHYSC_CAPACITY                        INTEGER,	-- PHYSCP      -- Physical Capacity:
	TFL_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	TFL_PRIMARY_PAY                           INTEGER,	-- PRMSRCPY    -- Primary Insurance at Follow-up:
	TFL_PX_NONCOMP                         VARCHAR(1),	               -- Patient Noncompliant During this Follow-Up Period
	TFL_PX_RESEARCH                        VARCHAR(1),	               -- Did Px Participate in Research for Immuno Meds
	TFL_PX_STAT                            VARCHAR(1),	-- $PXSTATB    -- Patient Status
	TFL_PX_STAT_DT                            INTEGER,	-- MMDDYY      -- Patient Status/Date
	TFL_REJ_EVENT_NUM                         INTEGER,	               -- Number of Episodes
	TFL_REJ_TREAT                          VARCHAR(1),	               -- Patient Treated For Rejection
	TFL_SGOT                                  INTEGER,	               -- SGOT/AST
	TFL_SGPT                                  INTEGER,	               -- SGPT/ALT
	TFL_TOT_BILI                              INTEGER,	               -- Total Bilirubin
	TFL_TXFER_DT                              INTEGER,	-- MMDDYY      -- Transfer Date
	TFL_WGT_KG                                INTEGER,	               -- Recipient/s Weight in kilograms
	TFL_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	TFL_WORK_NO_STAT                          INTEGER,	-- NOTWRK      -- If No, Working Due To
	TFL_WORK_YES_STAT                         INTEGER,	-- WRKNCM      -- If Yes:
	TRR_FOL_ID                     INTEGER PRIMARY KEY,	               -- Unique identifier for TRR Follow-up - unique key
	TRR_ID           INTEGER REFERENCES TX_LI(TRR_ID),	               -- Unique identifier for TRR - foreign key to TRR
	TX_ID               INTEGER REFERENCES TX_LI(TX_ID)	               -- Unique identifier for Transplant - foreign key to rec_transplant
);

CREATE TABLE FOL_IMMUNO (
	TFL_FOL_CD                       	      INTEGER,	-- FOLCD       -- Follow Up code
	TFL_IMMUNO_DRUG_ANTI_REJ                  INTEGER,	               -- Anti-Rejection
	TFL_IMMUNO_DRUG_CD                        INTEGER,	-- DRUG        -- Drug Code
	TFL_IMMUNO_DRUG_MAINT_CUR                 INTEGER,	               -- Current
	TFL_IMMUNO_DRUG_MAINT_PREV                INTEGER,	               -- Previous
	TRR_FOL_ID  INTEGER REFERENCES TXF_LI(TRR_FOL_ID) PRIMARY KEY,	               -- Unique identifier for TRR Follow-up - foreign key to TRR Follow-up
	TRR_ID            INTEGER REFERENCES TX_LI(TRR_ID)	               -- Unique identifier for TRR - foreign key to TRR
);

CREATE TABLE MALIG (
	MALIG_ID                      INTEGER PRIMARY KEY,	               -- Unique identifier for malig - unique key
	MAL_DON_CHEMO                             INTEGER,	               -- Specify treatment: Chemotherapy
	MAL_DON_CHEMO_TY                          INTEGER,	-- CHEMOTY     -- Specify treatment: Chemotherapy type
	MAL_DON_DGN_DT                            INTEGER,	-- MMDDYY      -- Date of Diagnosis
	MAL_DON_IMMUNO                            INTEGER,	               -- Specify treatment: Immunotherapy
	MAL_DON_IMMUNO_STAT                       INTEGER,	-- IMMNSTTS    -- Immunosuppression
	MAL_DON_IMMUNO_TY                         INTEGER,	-- IMMUNOTY    -- Immunotherapy type
	MAL_DON_OUTCOME                           INTEGER,	-- OUTCOME     -- Specify treatment: Outcome
	MAL_DON_RADIAT                            INTEGER,	               -- Specify treatment: Radiation
	MAL_DON_SURG                              INTEGER,	               -- Specify treatment: Surgical Resection Tumor
	MAL_DON_TUMOR_TY                       VARCHAR(1),	               -- Type of Tumor
	MAL_NAT_ORG_KI                            INTEGER,	               -- Kidney
	MAL_NAT_ORG_LI                            INTEGER,	               -- Liver
	MAL_NAT_ORG_LU                            INTEGER,	               -- Lung
	MAL_POSTX_BAS_NUM                         INTEGER,	               -- Basal Cell:Number of Occurrences
	MAL_POSTX_BAS_SITE_EXTREM                 INTEGER,	               -- Basal Cell: Site: //Extremities
	MAL_POSTX_BAS_SITE_LIPHEADNECK            INTEGER,	               -- Basal Cell: Site: //Lips/Head/Neck
	MAL_POSTX_BAS_SITE_TRUNK                  INTEGER,	               -- Basal Cell: Site: //Trunk
	MAL_POSTX_BAS_SKIN_SITES               VARCHAR(1),	               -- Basal Cell: Sites: Single/Multiple
	MAL_POSTX_BAS_SPREAD_NODES                INTEGER,	               -- Basal Cell Spread:Nodes
	MAL_POSTX_BAS_SPREAD_NONE                 INTEGER,	               -- Basal Cell Spread:None
	MAL_POSTX_BAS_SPREAD_OTHER                INTEGER,	               -- Basal Cell Spread:Other
	MAL_POSTX_BRAIN_TUMOR_TY                  INTEGER,	-- BRNTMR      -- Type of Brain Tumor
	MAL_POSTX_COLORECTAL_DUKES                INTEGER,	-- DKSCLS      -- Colo-rectal:Duke/s classification
	MAL_POSTX_KAPOSI_CUTANEOUS                INTEGER,	               -- Tumor Types: Kaposis/s Sarcoma: Cutaneous
	MAL_POSTX_KAPOSI_VISC                     INTEGER,	               -- Tumor Types: Kaposis/s Sarcoma: Visceral
	MAL_POSTX_LEUK_TY                         INTEGER,	-- LEUKTY      -- Leukemia:Type
	MAL_POSTX_LU_CELL_TY                   VARCHAR(1),	               -- Lung: Small Cell/Non-small Cell
	MAL_POSTX_MEL_NUM                         INTEGER,	               -- Melanoma Spread:Number of Occurrences
	MAL_POSTX_MEL_SITE_EXTREM                 INTEGER,	               -- Melanoma: Sites: //Extremities
	MAL_POSTX_MEL_SITE_LIPHEADNECK            INTEGER,	               -- Melanoma: Sites: //Lips/Head/Neck
	MAL_POSTX_MEL_SITE_TRUNK                  INTEGER,	               -- Melanoma: Sites: //Trunk
	MAL_POSTX_MEL_SKIN_SITES               VARCHAR(1),	               -- Melanoma: Sites: Single/Multiple
	MAL_POSTX_MEL_SPREAD_NODES                INTEGER,	               -- Melanoma Spread:Nodes
	MAL_POSTX_MEL_SPREAD_NONE                 INTEGER,	               -- Melanoma Spread:None
	MAL_POSTX_MEL_SPREAD_OTHER                INTEGER,	               -- Melanoma Spread:Other
	MAL_POSTX_METAST_LI_TY                    INTEGER,	-- METLIVER    -- Metastatic Liver Tumor:Specify Type
	MAL_POSTX_OTHER_CANCER_SITES          VARCHAR(50),	               -- Other Cancers:Site(s)
	MAL_POSTX_OUTCOME                         INTEGER,	-- OUTCOME     -- Tumor Types: Outcome
	MAL_POSTX_PRIME_HEPAT_TY                  INTEGER,	-- PRMHPTC     -- Primary Hepatic Tumor:Specify Type
	MAL_POSTX_RENAL_SITES                 VARCHAR(50),	               -- Renal carcinoma:Site(s)
	MAL_POSTX_SARCOMA_SITES               VARCHAR(50),	               -- Sarcomas:Sites
	MAL_POSTX_SARCOMA_TY                      INTEGER,	-- SARCOMAS    -- Sarcomas:Specify type
	MAL_POSTX_SQU_NUM                         INTEGER,	               -- Squamous Cell:Number of Occurrences
	MAL_POSTX_SQU_SITE_EXTREM                 INTEGER,	               -- Squamous Cell Site: //Extremities
	MAL_POSTX_SQU_SITE_LIPHEADNECK            INTEGER,	               -- Squamous Cell Site: //Lips/Head/Neck
	MAL_POSTX_SQU_SITE_TRUNK                  INTEGER,	               -- Squamous Cell Site: //Trunk
	MAL_POSTX_SQU_SKIN_SITES               VARCHAR(1),	               -- Squamous Cell: Sites: Single/Multiple
	MAL_POSTX_SQU_SPREAD_NODES                INTEGER,	               -- Squamous Cell Spread:Nodes
	MAL_POSTX_SQU_SPREAD_NONE                 INTEGER,	               -- Squamous Cell Spread:None
	MAL_POSTX_SQU_SPREAD_OTHER                INTEGER,	               -- Squamous Cell Spread:Other
	MAL_POSTX_TUMOR_BAS_SKIN                  INTEGER,	               -- Tumor Type:Skin:Basal Cell
	MAL_POSTX_TUMOR_BLADDER                   INTEGER,	               -- Tumor Type: Bladder
	MAL_POSTX_TUMOR_BRAIN                     INTEGER,	-- BRNTMR      -- Tumor Type: Brain
	MAL_POSTX_TUMOR_BREAST                    INTEGER,	               -- Tumor Type: Breast
	MAL_POSTX_TUMOR_COLORECTAL                INTEGER,	               -- Tumor Type: Colo-rectal
	MAL_POSTX_TUMOR_ESOPHAGUS                 INTEGER,	               -- Tumor Type: Esophagus
	MAL_POSTX_TUMOR_LARYNX                    INTEGER,	               -- Tumor Type: Larynx
	MAL_POSTX_TUMOR_LEUK                      INTEGER,	               -- Tumor Types: Leukemia
	MAL_POSTX_TUMOR_LU                        INTEGER,	               -- Tumor Type: Lung
	MAL_POSTX_TUMOR_MEL_SKIN                  INTEGER,	               -- Tumor Type:Skin: Melanoma
	MAL_POSTX_TUMOR_METAST_LI                 INTEGER,	               -- Metastatic Liver Tumor-Orig Site
	MAL_POSTX_TUMOR_OTHER_CANCER              INTEGER,	               -- Tumor Types: Other Cancers
	MAL_POSTX_TUMOR_OVARIAN                   INTEGER,	               -- Tumor Type: Ovarian
	MAL_POSTX_TUMOR_PA                        INTEGER,	               -- Tumor Type: Pancreas
	MAL_POSTX_TUMOR_PRIME_HEPAT               INTEGER,	               -- Primary Hepatic Tumor
	MAL_POSTX_TUMOR_PRIME_UNK                 INTEGER,	               -- Tumor Types: Primary Unknown
	MAL_POSTX_TUMOR_PROSTATE                  INTEGER,	               -- Tumor Type: Prostate
	MAL_POSTX_TUMOR_RENAL                     INTEGER,	               -- Tumor Type: Renal Carcinoma
	MAL_POSTX_TUMOR_SARCOMA                   INTEGER,	               -- Tumor Types: Sarcomas (excluding Kaposi/s)
	MAL_POSTX_TUMOR_SM_IN                     INTEGER,	               -- Tumor Type: Small Intestine
	MAL_POSTX_TUMOR_SQU_SKIN                  INTEGER,	               -- Tumor Type:Skin:Squamous Cell
	MAL_POSTX_TUMOR_STOMACH                   INTEGER,	               -- Tumor Type: Stomach
	MAL_POSTX_TUMOR_TESTICULAR                INTEGER,	               -- Tumor Type: Testicular
	MAL_POSTX_TUMOR_THYROID                   INTEGER,	               -- Tumor Type: Thyroid
	MAL_POSTX_TUMOR_TONGUE_THROAT             INTEGER,	               -- Tumor Type: Tongue, Throat
	MAL_POSTX_TUMOR_UTERUS                    INTEGER,	               -- Tumor Types: Carcinoma of the Uterus
	MAL_POSTX_TUMOR_VULVA_PENIS               INTEGER,	               -- Tumor Types: Carcinoma of Vulva, Perineum or Penis, Scrotum
	MAL_POSTX_UTERUS_TY                       INTEGER,	-- CRUTRS      -- Carcinoma of the Uterus:Select
	MAL_PRETX_CHEMO                           INTEGER,	               -- Treatments of pre-existing tumor: Chemotherapy
	MAL_PRETX_CHEMO_TY                        INTEGER,	-- CHEMOTY     -- Treatments of pre-existing tumor: Chemotherapy Type
	MAL_PRETX_DT                              INTEGER,	-- MMDDYY      -- Treatments of pre-existing tumor: Date of Treatment
	MAL_PRETX_DUKES                           INTEGER,	-- DKSCLS      -- If Color-rectal, Duke/s Classificiation
	MAL_PRETX_LEUK_TY                         INTEGER,	-- LEUKTY      -- If Leukemia
	MAL_PRETX_RADIAT                          INTEGER,	               -- Treatments of pre-existing tumor: Radiation
	MAL_PRETX_SKIN_NUM                        INTEGER,	               -- If skin # of occurrences in follow-up period
	MAL_PRETX_SURG                            INTEGER,	               -- Treatments of pre-existing tumor: Surgery
	MAL_PRETX_SURG_TY                         INTEGER,	-- SURGTY      -- Treatments of pre-existing tumor: Surgery Type
	MAL_PRETX_TUMOR_TY                        INTEGER,	-- TUMORTY     -- Type of Pre-Existing Tumor
	MAL_PTLD_AA_STAGE                      VARCHAR(1),	               -- PTLD: Ann Arbor Stage
	MAL_PTLD_ANATOMY_NODES                 VARCHAR(1),	               -- PTLD: Anatomy: Nodes
	MAL_PTLD_ANATOMY_SITE                  VARCHAR(1),	               -- PTLD: Anatomy: Single Site/Multiple Sites
	MAL_PTLD_ANTIVRL                       VARCHAR(1),	               -- PTLD Treatment: Anti-Viral Therapy (if yes, list drugs)
	MAL_PTLD_ANTIVRL1_BESTRESP             VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Anti-Viral Therapy: Drug 1: Best Response
	MAL_PTLD_ANTIVRL1_TY                      INTEGER,	-- ANTVRL      -- PTLD Treatment: Anti-Viral Therapy: Drug 1
	MAL_PTLD_ANTIVRL2_BESTRESP             VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Anti-Viral Therapy: Drug 2: Best Response
	MAL_PTLD_ANTIVRL2_TY                      INTEGER,	-- ANTVRL      -- PTLD Treatment: Anti-Viral Therapy: Drug 2
	MAL_PTLD_CHEMO                         VARCHAR(1),	               -- PTLD Treatment: Chemotherapy
	MAL_PTLD_CHEMO1_BESTRESP               VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Chemotherapy: Drug/Regimen 1: Best Response
	MAL_PTLD_CHEMO1_TY                        INTEGER,	-- CHEMOTY     -- PTLD Treatment: Chemotherapy: Drug/Regimen 1
	MAL_PTLD_CHEMO2_BESTRESP               VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Chemotherapy: Drug/Regimen 2: Best Response
	MAL_PTLD_CHEMO2_TY                        INTEGER,	-- CHEMOTY     -- PTLD Treatment: Chemotherapy: Drug/Regimen 2
	MAL_PTLD_CLONALITY_TY                     INTEGER,	-- CLNLTY      -- PTLD: Clonality
	MAL_PTLD_DGN_DT                           INTEGER,	-- MMDDYY      -- PTLD: Date of Diagnosis
	MAL_PTLD_EBV_STAT                      VARCHAR(1),	               -- PTLD: Epstein-Barr Virus (EBV) Status of Tumor
	MAL_PTLD_EXNODAL_ALLOGRAFT                INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Allograft
	MAL_PTLD_EXNODAL_BONE_MARROW              INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Bone Marrow
	MAL_PTLD_EXNODAL_CNS                      INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: CNS
	MAL_PTLD_EXNODAL_COLON                    INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Colon
	MAL_PTLD_EXNODAL_LI                       INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Liver
	MAL_PTLD_EXNODAL_LU                       INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Lung
	MAL_PTLD_EXNODAL_SM_IN                    INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Small Intestine
	MAL_PTLD_EXNODAL_STOMACH                  INTEGER,	               -- PTLD: Anatomy: Extranodal Sites if applicable: Stomach
	MAL_PTLD_IMMUNO                        VARCHAR(1),	               -- PTLD Treatment: Immunotherapy
	MAL_PTLD_IMMUNO_BESTRESP               VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Immunotherapy: Best Response
	MAL_PTLD_IMMUNO_TY                        INTEGER,	-- IMMUNOTY    -- PTLD Treatment:Immunotherapy Type
	MAL_PTLD_PATHOLOGY_TY                     INTEGER,	-- PTHLGY      -- PTLD: Pathology
	MAL_PTLD_PREDOM_CELL_TY                   INTEGER,	-- PTLCLLTY    -- PTLD: Predominant Cell Type
	MAL_PTLD_RADIAT                        VARCHAR(1),	               -- PTLD Treatment: Radiation Therapy
	MAL_PTLD_RADIAT_BESTRESP               VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Radiation Therapy: Best Response
	MAL_PTLD_REDUC_IMMUNO                  VARCHAR(1),	               -- PTLD Treatment: Reduction/Cessation of Immunosuppression
	MAL_PTLD_REDUC_IMMUNO_BESTRESP         VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Reduction/Cessation of Immunosuppression Best Response
	MAL_PTLD_SURG_BESTRESP                 VARCHAR(2),	-- $BSTRESP    -- PTLD Treatment: Surgery: Best Response
	MAL_PTLD_SURG_TY                          INTEGER,	-- SURGPTLD    -- PTLD Treatment: Surgery Type
	MAL_RECUR_CHEMO                           INTEGER,	               -- Treatments of recurrent tumor: Chemotherapy
	MAL_RECUR_CHEMO_TY                        INTEGER,	-- CHEMOTY     -- Treatments of recurrent tumor: Chemotherapy Type
	MAL_RECUR_DT                              INTEGER,	-- MMDDYY      -- Date of recurrence (post tx)
	MAL_RECUR_IMMUNO                          INTEGER,	               -- Treatments of recurrent tumor: Immunotherapy
	MAL_RECUR_IMMUNO_STAT                     INTEGER,	-- IMMNSTTS    -- Immunosuppression
	MAL_RECUR_IMMUNO_TY                       INTEGER,	-- IMMUNOTY    -- Treatments of recurrent tumor: Immunotherapy Type
	MAL_RECUR_OUTCOME                         INTEGER,	-- OUTCOME     -- Treatments of recurrent tumor: Outcome
	MAL_RECUR_RADIAT                          INTEGER,	               -- Treatments of recurrent tumor: Radiation
	MAL_RECUR_SITE_ADJ_ORG                    INTEGER,	               -- Site(s) affected: Adjacent organs
	MAL_RECUR_SITE_LYMPH                      INTEGER,	               -- Site(s) affected: Regional lymph nodes
	MAL_RECUR_SITE_METAST                     INTEGER,	               -- Site(s) affected: Distant metastases
	MAL_RECUR_SITE_PRIME_ORG                  INTEGER,	               -- Site(s) affected: Primary organ
	MAL_RECUR_SURG                            INTEGER,	               -- Treatments of recurrent tumor: Surgery
	MAL_RECUR_SURG_TY                         INTEGER,	-- SURGTY      -- Treatments of recurrent tumor: Surgery Type
	TFL_NAT_ORG_KI_TY                     VARCHAR(50),	               -- Kidney, type specify
	TFL_NAT_ORG_LI_TY                     VARCHAR(50),	               -- Liver, type specify
	TFL_NAT_ORG_LU_TY                     VARCHAR(50),	               -- Lung, type specify
	TFL_PREV_TUMOR_LYMPH_TY               VARCHAR(50),	               -- If Lymphoma specify type
	TFL_PTLD_ANTIVRL_DRUG1                VARCHAR(50),	               -- PTLD Treatment: Anti-Viral Therapy: Drug 1: Other Specify
	TFL_PTLD_ANTIVRL_DRUG2                VARCHAR(50),	               -- PTLD Treatment: Anti-Viral Therapy: Drug 2: Other Specify
	TFL_TUM_OTH_CANCER_TY                 VARCHAR(50),	               -- Other Cancers:Specify type
	TRR_FOL_ID   INTEGER REFERENCES TXF_LI(TRR_FOL_ID)	               -- Unique identifier for TRR Follow-up - foreign key to TRR Follow-up
);

CREATE TABLE TREATMENT (
	MALIG_ID       INTEGER REFERENCES MALIG(MALIG_ID) PRIMARY KEY,	               -- Unique identifier for malig - unique key
	MAL_POSTX_BESTRESP                     VARCHAR(2),	-- $BSTRESP    -- Best Treatment Response
	MAL_POSTX_CHEMO                           INTEGER,	               -- Other Treatment:Chemotherapy
	MAL_POSTX_CHEMO_TY                        INTEGER,	-- CHEMOTY     -- Other Treatment:Chemotherapy Type
	MAL_POSTX_CRYO                            INTEGER,	               -- Other Treatment:Cryotherapy(skin cancer)
	MAL_POSTX_DGN_DT                          INTEGER,	-- MMDDYY      -- Date of Diagnosis
	MAL_POSTX_IMMUNO                          INTEGER,	               -- Other Treatment:Immunotherapy
	MAL_POSTX_IMMUNO_STAT                     INTEGER,	-- IMMNSTTS    -- Immunosuppression
	MAL_POSTX_IMMUNO_TY                       INTEGER,	-- IMMUNOTY    -- Other Treatment:Immunotherapy Type
	MAL_POSTX_RADIAT                          INTEGER,	               -- Other Treatment:Radiation
	MAL_POSTX_SITE_ADJ_ORG                    INTEGER,	               -- Site(s)affected:Adjacent organs
	MAL_POSTX_SITE_DIST_METAST                INTEGER,	               -- Site(s)affected:Distant metastases
	MAL_POSTX_SITE_LYMPH                      INTEGER,	               -- Site(s)affected:Regional lymph nodes
	MAL_POSTX_SITE_PRIME_ORG                  INTEGER,	               -- Site(s)affected:Primary organ
	MAL_POSTX_SURG                            INTEGER,	               -- Other Treatment:Surgery
	MAL_POSTX_SURG_TY                         INTEGER,	-- SURGTY      -- Other Treatment:Surgery Type
	MAL_POSTX_TUMOR_TY                        INTEGER,	-- MALTMRTY    -- FOREIGN KEY
	TRR_FOL_ID   INTEGER REFERENCES TXF_LI(TRR_FOL_ID)	               -- Unique identifier for TRR Follow-up - foreign key to TRR Follow-up
);
