CREATE TABLE CAND_LIIN (
	﻿CAN_ABO                             VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
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
	CAN_ACTIVATE_DT                        NUMERIC(8),	-- MMDDYY      -- Activation Date - date/time waiting time clock started
	CAN_AGE_AT_LISTING                     NUMERIC(8),	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING           NUMERIC(8),	               -- Calculated Candidate Age in Months at Listing
	CAN_ANASTOMOSIS                        NUMERIC(3),	               -- Was anastomosis initiated?
	CAN_ANESTH_PRIOR_DEATH                 NUMERIC(3),	               -- Did the patient go to the operating room and receive anesthesia for transplant prior to death?
	CAN_ANGINA                             NUMERIC(8),	-- ANGINA      -- Angina/Coronary Artery Disease
	CAN_ANGINA_CAD                         NUMERIC(8),	-- ANGNACAD    -- Angina:
	CAN_ARTIFICIAL_LI                      NUMERIC(3),	               -- Life Support://Artifical Liver
	CAN_ASCITES                            VARCHAR(1),	               -- Ascites
	CAN_BACTERIA_PERIT                     VARCHAR(1),	               -- Spontaneous Bacterial Peritonitis
	CAN_BMI                                NUMERIC(8),	               -- BMI:
	CAN_CEREB_VASC                         VARCHAR(1),	               -- Symptomatic Cerebrovascular Disease
	CAN_CITIZENSHIP                        NUMERIC(8),	-- CTZNLDTC    -- Patient/s Citizenship
	CAN_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	CAN_CTP_SCORE                          NUMERIC(8),	               -- Candidate/s CTP score (used for MAOB Liver Variance
	CAN_DEATH_DT                           NUMERIC(8),	-- MMDDYY      -- If removed due to Death, date of death
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
	CAN_ENDWLFU                            NUMERIC(8),	-- MMDDYY      -- Candidate cohort censoring date
	CAN_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Patient Ethnicity
	CAN_EXHAUST_VASC_ACCESS                VARCHAR(1),	               -- Exhausted Vascular Access
	CAN_FOLLOWS_OPO_ALLOC                  NUMERIC(3),	               -- Does candidate follow the OPO/s current allocation
	CAN_FUNCTN_STAT                        NUMERIC(8),	-- FUNCSTAT    -- Patient/s Functional Status
	CAN_FUNGAL_SEPSIS                      VARCHAR(1),	               -- Fungal sepsis (IN Pediatric Only)
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
	CAN_HGT_CM                             NUMERIC(8),	               -- Candidate/s Height (stored in cm)
	CAN_HGT_WGT_DT                         NUMERIC(8),	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	CAN_IABP                               NUMERIC(3),	               -- Life Support: IABP
	CAN_INIT_ACT_STAT_CD                   NUMERIC(8),	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                   NUMERIC(8),	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                 NUMERIC(8),	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                          NUMERIC(8),	-- CANDSTAT    -- Initial Status of Patient
	CAN_IV_INOTROP                         NUMERIC(3),	               -- Life Support: IV Inotropes
	CAN_LAST_ACT_STAT_DT                   NUMERIC(8),	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                       NUMERIC(8),	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                       NUMERIC(8),	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                          NUMERIC(8),	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                        NUMERIC(8),	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                 NUMERIC(8),	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                           NUMERIC(8),	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT                   NUMERIC(8),	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM                  NUMERIC(8),	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                          NUMERIC(8),	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support
	CAN_LIFE_SUPPORT_OTHER                 NUMERIC(3),	               -- Life Support: Other Mechanism
	CAN_LISTING_CTR_ID                     NUMERIC(4),	               -- CAN_LISTING_ Center ID
	CAN_LISTING_DT                         NUMERIC(8),	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_LISTING_OPO_ID                     NUMERIC(4),	               -- OPO Serving Listing Center
	CAN_LIVING_DON_TX                      NUMERIC(3),	               -- Has Candidate received a Living Donor transplant? (used for Liver Candidates)
	CAN_LI_DYSFUNCTN                       VARCHAR(1),	               -- Liver Dysfunction
	CAN_LOSS_VASC_ACCESS                   VARCHAR(1),	               -- Loss of two or more vascular access sites (IN Pediatric Only)
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_MALIG_TY                           NUMERIC(8),	-- MALIG       -- Previous Malignancy Type(s)
	CAN_MALIG_TY_BREAST                    NUMERIC(8),	               -- Previous Malignancy - Breast (14)
	CAN_MALIG_TY_CNS_TUMOR                 NUMERIC(8),	               -- Previous Malignancy - CNS Tumor (14)
	CAN_MALIG_TY_GENITOURINARY             NUMERIC(8),	               -- Previous Malignancy - Genitourinary (14)
	CAN_MALIG_TY_HEPBLAST                  NUMERIC(8),	               -- Previous Malignancy - Hepatoblastoma (14)
	CAN_MALIG_TY_HEPCARCINOMA              NUMERIC(8),	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	CAN_MALIG_TY_LEUK_LYMPH                NUMERIC(8),	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	CAN_MALIG_TY_LIVER                     NUMERIC(8),	               -- Previous Malignancy - Liver (14)
	CAN_MALIG_TY_LU                        NUMERIC(8),	               -- Previous Malignancy - Lung (14)
	CAN_MALIG_TY_OTHER                     NUMERIC(8),	               -- Previous Malignancy - Other, specify (14)
	CAN_MALIG_TY_SKIN_MEL                  NUMERIC(8),	               -- Previous Malignancy - Skin Melanoma (14)
	CAN_MALIG_TY_SKIN_NON_MEL              NUMERIC(8),	               -- Previous Malignancy - Skin Non-Melanoma (14)
	CAN_MALIG_TY_THROAT                    NUMERIC(8),	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	CAN_MALIG_TY_THYROID                   NUMERIC(8),	               -- Previous Malignancy - Thyroid (14)
	CAN_MALIG_TY_UNK                       NUMERIC(8),	               -- Previous Malignancy - Type Unknown (14)
	CAN_MAX_AGE                            NUMERIC(8),	               -- Maximum acceptable Donor age
	CAN_MAX_MILE                           NUMERIC(8),	               -- Maximum miles the implant team will travel
	CAN_MAX_WGT                            NUMERIC(8),	               -- Maximum acceptable Donor Weight
	CAN_MED_COND                           NUMERIC(8),	-- MEDCOND     -- Medical Condition
	CAN_MIN_AGE                            NUMERIC(8),	               -- Minimum acceptable Donor Age
	CAN_MIN_WGT                            NUMERIC(8),	               -- Minimum acceptable Donor Weight
	CAN_MOST_RECENT_CREAT                  NUMERIC(8),	               -- Most Recent Absolute Creatinine
	CAN_MOST_RECENT_HGT_CM                 NUMERIC(8),	               -- Candidate/s most recent Waitlist Height in centimeter
	CAN_MOST_RECENT_WGT_KG                 NUMERIC(8),	               -- Candidate/s most recent Waitlist Weight in kilograms
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
	CAN_PREV_BONE_MARROW_DT                NUMERIC(8),	-- MMDDYY      -- Date of Latest Bone Marrow Transplant
	CAN_PREV_BONE_MARROW_TX                NUMERIC(8),	               -- Number Bone Marrow Transplants
	CAN_PREV_HL                            NUMERIC(8),	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                            NUMERIC(8),	               -- Prev Heart Tx
	CAN_PREV_IN                            NUMERIC(8),	               -- Prev Intestine Tx
	CAN_PREV_KI                            NUMERIC(8),	               -- Prev Kidney Tx
	CAN_PREV_KP                            NUMERIC(8),	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                            NUMERIC(8),	               -- Prev Liver Tx
	CAN_PREV_LU                            NUMERIC(8),	               -- Prev Lung Tx
	CAN_PREV_PA                            NUMERIC(8),	               -- Prev Pancreas Tx
	CAN_PREV_TX                            NUMERIC(8),	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Source of Payment//Primary:
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                               NUMERIC(8),	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_RECUR_SEPSIS                       VARCHAR(1),	               -- Recurrent sepsis (IN Pediatric Only)
	CAN_REM_CD                             NUMERIC(8),	-- REMCD       -- Reason why candidate was removed (removal code)
	CAN_REM_COD                            NUMERIC(8),	-- COD         -- Cause of Death
	CAN_REM_DT                             NUMERIC(8),	-- MMDDYY      -- rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt
	CAN_SECONDARY_PAY                      NUMERIC(8),	-- SNDSRCPY    -- Source of Payment//Secondary:
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data: A =Active Waitlist,R= Removed from Waitlist,L=Live Don Organ Recipient never on waitlist
	CAN_STAT_EXTEND_FLG                    NUMERIC(3),	               -- Status Extension granted for Liver candidate
	CAN_TIEBREAKER_DT                      NUMERIC(8),	-- MMDDYY      -- Tiebreaker Date - used as the ultimate tiebreaker
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                        NUMERIC(8),	               -- Total Serum Albumin
	CAN_TOT_BILI                           NUMERIC(8),	               -- Total Bilirubin (IN Pediatric Only)
	CAN_TRR_EXISTS                         NUMERIC(8),	               -- TRR found for this PX_ID-org_ty
	CAN_TX_COUNTRY                         NUMERIC(8),	-- CTRYID      -- Country of transplant, if outside the US
	CAN_VAD_TAH                            NUMERIC(8),	-- VADTAH      -- Life Support: VAD/TAH
	CAN_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Variceal Bleeding within Last Two Weeks
	CAN_VENTILATOR                         NUMERIC(3),	               -- Life Support: Ventilator
	CAN_WGT_KG                             NUMERIC(8),	               -- Candidate/s Weight in kilograms
	CAN_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	CAN_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- Working for income//If No, Not Working Due To:
	CAN_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- Working for income//If Yes:
	CAN_YEAR_ENTRY_US                      NUMERIC(8),	               -- Year of Entry to the U.S.
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	PERS_ID                                NUMERIC(8),	               -- Unique Person ID for Recipient
	PERS_NEXTTX                            NUMERIC(8),	-- MMDDYY      -- Transplant Date
	PERS_NEXTTX_TRR_ID                     NUMERIC(8),	               -- Unique identifier for TRR - unique key
	PERS_OPTN_DEATH_DT                     NUMERIC(8),	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RESTRICT_DEATH_DT                 NUMERIC(8),	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_SSA_DEATH_DT                      NUMERIC(8),	-- MMDDYY      -- Death date determined from SSA database
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier
	REC_TX_DT                              NUMERIC(8),	-- MMDDYY      -- Transplant Date
	REC_TX_PROCEDURE_TY                    NUMERIC(8),	-- TXPROC      -- Transplant Procedure Type
	WL_ORG                                 VARCHAR(4),	-- $WLORG      -- Organ of this waitlisted record
);
