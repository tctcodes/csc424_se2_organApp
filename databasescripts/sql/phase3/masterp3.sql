CREATE TABLE CAND_LIIN (
	CAN_ABO                                VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
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
	DONOR_ID                               NUMERIC(8) NOT NULL UNIQUE,	               -- Encrypted Unique Donor ID (all donors) - foreign key
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
    PRIMARY KEY (PERS_ID, PX_ID)
);


CREATE TABLE TX_LI (
	CANHX_MPXCPT_HCC_APPLY_IND             NUMERIC(8),	               -- Ever Applied for an HCC exception
	CANHX_MPXCPT_HCC_APPROVE_IND           NUMERIC(8),	               -- Ever Approved for an HCC exception
	CAN_ABO                                VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_AGE_AT_LISTING                     NUMERIC(8),	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING           NUMERIC(8),	               -- Calculated Candidate Age in Months at Listing
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
	CAN_HGT_CM                             NUMERIC(8),	               -- Candidate/s Height (stored in cm)
	CAN_INIT_ACT_STAT_CD                   NUMERIC(8),	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                   NUMERIC(8),	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                 NUMERIC(8),	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                          NUMERIC(8),	-- CANDSTAT    -- Initial Status of Patient
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
	CAN_LISTING_DT                         NUMERIC(8),	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_PEPTIC_ULCER                       NUMERIC(8),	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
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
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                               NUMERIC(8),	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_REM_CD                             NUMERIC(8),	-- REMCD       -- Reason why candidate was removed
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                        NUMERIC(8),	               -- Total Serum Albumin
	CAN_WGT_KG                             NUMERIC(8),	               -- Candidate/s Weight in kilograms
	DONOR_ID                               NUMERIC(8) NOT NULL UNIQUE,	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DONOR_ID_VESSEL                        NUMERIC(8),	               -- Encrypted Vessel Donor ID
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                NUMERIC(8),	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                      NUMERIC(8),	               -- Donor/s Age in Months
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
	DON_CREAT                              NUMERIC(8),	               -- Serum Creatinine
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
	DON_HGT_CM                             NUMERIC(8),	               -- Donor/s Height in centimeters
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
	DON_ORG_SHARED                         NUMERIC(8),	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_PH                                 NUMERIC(8),	               -- Blood PH:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                           NUMERIC(8),	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RELATIONSHIP_TY                    NUMERIC(8),	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SGOT                               NUMERIC(8),	               -- SGOT/AST
	DON_SGOT_PREOP                         NUMERIC(8),	               -- SGOT/AST:
	DON_SGPT_PREOP                         NUMERIC(8),	               -- SGPT/ALT:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_WARM_ISCH_TM_MINS                  NUMERIC(8),	               -- Estimated Warm Ischemic Time in minutes
	DON_WGT_KG                             NUMERIC(8),	               -- Donor/s Weight in kilograms
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PERS_OPTN_COD                          NUMERIC(8),	-- COD         -- Person Cause of Death
	PERS_OPTN_DEATH_DT                     NUMERIC(8),	-- MMDDYY      -- OPTN Death date by unique person
	PERS_RELIST                            NUMERIC(8),	-- MMDDYY      -- Re-list date after current tx
	PERS_RESTRICT_DEATH_DT                 NUMERIC(8),	-- MMDDYY      -- Restricted death date
	PERS_RESTRICT_DEATH_VRFY               VARCHAR(1),	-- $DTHVRFY    -- Restricted death verification level
	PERS_RETX                              NUMERIC(8),	-- MMDDYY      -- ReTx date after current tx
	PERS_RETX_TRR_ID                       NUMERIC(8),	               -- TRR_ID of ReTx after current tx
	PERS_SSA_DEATH_DT                      NUMERIC(8),	-- MMDDYY      -- Death date determined from SSA database
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier
	REC_A1                                 NUMERIC(8),	-- ALOCUS      -- Recipient/s HLA - A (1) antigen
	REC_A2                                 NUMERIC(8),	-- ALOCUS      -- Recipient/s HLA - A (2) antigen
	REC_ACADEMIC_LEVEL                     NUMERIC(8),	-- ACDMACTV    -- Academic Activity Level:
	REC_ACADEMIC_PROGRESS                  NUMERIC(8),	-- ACDMPRG     -- Academic Progress:
	REC_ACUTE_REJ_BIOPSY_CONFIRMED         NUMERIC(8),	-- BPSCNFM     -- Was biopsy done to confirm acute rejection:
	REC_ACUTE_REJ_EPISODE                  NUMERIC(8),	-- ACREJEP     -- Did patient have any acute rejection episodes between transplant and discharge:
	REC_ADMISSION_DT                       NUMERIC(8),	-- MMDDYY      -- Date of Admission to Tx Center
	REC_AGE_AT_TX                          NUMERIC(8),	-- AGE9A       -- Age at TX
	REC_AGE_IN_MONTHS_AT_TX                NUMERIC(8),	               -- Calculated Recipient Age in Months at TX
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
	REC_A_MM_EQUIV_CUR                     NUMERIC(8),	               -- Num of A mismatches - current equivalent match
	REC_A_MM_EQUIV_TX                      NUMERIC(8),	               -- Num of A mismatches - equivalent match @ tx
	REC_B1                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BACTERIA_PERIT                     VARCHAR(1),	               -- Risk Factors: Spontaneous Bacterial Peritonitis
	REC_BMI                                NUMERIC(8),	               -- BMI:
	REC_B_MM_EQUIV_CUR                     NUMERIC(8),	               -- Num of B mismatches - current equivalent match
	REC_B_MM_EQUIV_TX                      NUMERIC(8),	               -- Num of B mismatches - current match @ tx
	REC_CMV_IGG                            VARCHAR(2),	               -- CMV IgG
	REC_CMV_IGM                            VARCHAR(2),	               -- CMV IgM
	REC_CMV_STAT                           VARCHAR(2),	               -- Pre-Tx Serology Test Results: Cytomegalovirus
	REC_COD                                NUMERIC(8),	-- THCOD       -- Recipient/s Cause of Death
	REC_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	REC_COLD_ISCH_TM                       NUMERIC(8),	               -- Preserv: Total Cold Ischemic Time
	REC_CTR_ID                             NUMERIC(4),	               -- REC_ Center ID
	REC_CUR_CTR_ID                         NUMERIC(4),	               -- REC_CUR_ Center ID
	REC_CUR_PX_STAT                        VARCHAR(1),	-- $CRPXSTT    -- System field based on latest Follow-Up px_stat used to determine creation of next Follow-Up Form
	REC_DGN                                NUMERIC(8),	-- DGN         -- Primary Diagnosis
	REC_DGN2                               NUMERIC(8),	-- DGN         -- Secondary Diagnosis/path. confirmed LI dgn at discharge
	REC_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	REC_DISCHRG_ALBUMIN                    NUMERIC(8),	               -- Serum Albumin at Discharge
	REC_DISCHRG_ALKPHOS                    NUMERIC(8),	               -- Alkaline Phosphate at Discharge
	REC_DISCHRG_CREAT                      NUMERIC(8),	               -- Serum Creatinine at Discharge
	REC_DISCHRG_DT                         NUMERIC(8),	-- MMDDYY      -- Transplant Discharge Date
	REC_DISCHRG_INR                        NUMERIC(8),	               -- INR:
	REC_DISCHRG_LAB_DT                     NUMERIC(8),	-- MMDDYY      -- Discharge Lab Date
	REC_DISCHRG_SGOT                       NUMERIC(8),	               -- SGOT/AST at Discharge
	REC_DISCHRG_SGPT                       NUMERIC(8),	               -- SGPT/ALT at Discharge
	REC_DR1                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DR_MM_EQUIV_CUR                    NUMERIC(8),	               -- Num of DR mismatches - current equivalent match
	REC_DR_MM_EQUIV_TX                     NUMERIC(8),	               -- Num of DR mismatches - current match @ tx
	REC_EBV_STAT                           VARCHAR(2),	               -- EBV serology status
	REC_EMPL_STAT_PRE04                    NUMERIC(8),	-- EMPLSTAT    -- Recipient/s Employment Status - Pre-6/30/2004
	REC_FAIL_BILIARY                       VARCHAR(1),	               -- Cause of Graft Failure: Biliary Tract Complication
	REC_FAIL_DT                            NUMERIC(8),	-- MMDDYY      -- Date of Graft Failure
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
	REC_HGT_CM                             NUMERIC(8),	               -- Recipient/s Height in Centimeters
	REC_HGT_WGT_DT                         NUMERIC(8),	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
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
	REC_MM_EQUIV_CUR                       NUMERIC(8),	               -- Num of hla mismatches - current equivalent match
	REC_MM_EQUIV_TX                        NUMERIC(8),	               -- Num of hla mismatches - current match @ tx
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
	REC_POSTX_LOS                          NUMERIC(8),	               -- Time after first Tx, same stay
	REC_PRETX_ALBUMIN                      NUMERIC(8),	               -- PreTx : Serum Albumin
	REC_PRETX_CREAT                        NUMERIC(8),	               -- PreTx : Serum Creatinine
	REC_PRETX_INR                          NUMERIC(8),	               -- PreTx : Prothrombin INR
	REC_PRETX_LAB_DT                       NUMERIC(8),	-- MMDDYY      -- Pretransplant Lab Date
	REC_PRETX_TOT_BILI                     NUMERIC(8),	               -- PreTx : Total Bilirubin
	REC_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Risk Factors: Previous Abdominal Surgery
	REC_PREV_HL                            NUMERIC(8),	               -- Prev Heart-Lung Tx
	REC_PREV_HR                            NUMERIC(8),	               -- Prev Heart Tx
	REC_PREV_IN                            NUMERIC(8),	               -- Prev Intestine Tx
	REC_PREV_KI                            NUMERIC(8),	               -- Prev Kidney Tx
	REC_PREV_KP                            NUMERIC(8),	               -- Prev Kidney-Pancreas Tx
	REC_PREV_LI                            NUMERIC(8),	               -- Prev Liver Tx
	REC_PREV_LU                            NUMERIC(8),	               -- Prev Lung Tx
	REC_PREV_NONFUNCTN_TX                  VARCHAR(1),	               -- Risk Factors: Previous Primary Non-function Post-Tx
	REC_PREV_PA                            NUMERIC(8),	               -- Prev Pancreas Tx
	REC_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Source of Payment//Primary:
	REC_PROCEDURE_TY_LI                    VARCHAR(1),	-- $LIPROC     -- Surgical Procedure Type
	REC_PX_RESEARCH                        VARCHAR(1),	               -- Px Part. in Research Protocol for Immuno. Meds
	REC_PX_STAT                            VARCHAR(1),	-- $PXSTATA    -- Patient Status
	REC_PX_STAT_DT                         NUMERIC(8),	-- MMDDYY      -- Patient Status/Date
	REC_SECONDARY_PAY                      NUMERIC(8),	-- SNDSRCPY    -- Secondary Source of Payment//Secondary:
	REC_SGPT                               NUMERIC(8),	               -- PreTx : SGPT/ALT
	REC_TIPSS                              VARCHAR(1),	               -- Risk Factors: Transjugular Intrahepatic Portacaval Stent Shunt (TIPSS)
	REC_TOLERANCE_INDUCTION_TECH           VARCHAR(1),	               -- Any tolerance induction technique used:
	REC_TUMOR                              VARCHAR(1),	               -- Incidental Tumor found at time of Transplant
	REC_TUMOR_TY                           NUMERIC(8),	-- TUMORTH     -- If yes, specify tumor type
	REC_TXFER_CTR_ID                       NUMERIC(4),	               -- REC_TXFER_ Center ID
	REC_TXFER_DT                           NUMERIC(8),	-- MMDDYY      -- Transfer Date
	REC_TX_DT                              NUMERIC(8),	-- MMDDYY      -- Transplant Date
	REC_TX_EXTRA_VESSEL                    VARCHAR(1),	               -- Were extra vessels used in the transplant procedure
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_PROCEDURE_TY                    NUMERIC(8),	-- TXPROC      -- Transplant Procedure Type
	REC_TX_TY                              NUMERIC(8),	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	REC_VALCYTE                            VARCHAR(1),	               -- Valcyte (valganciclovir)
	REC_VARICEAL_BLEEDING                  VARCHAR(1),	               -- Risk Factors: Uncontrollable Variceal Bleeding
	REC_VENTILATOR                         NUMERIC(3),	               -- Life Support: Ventilator
	REC_WARM_ISCH_TM                       NUMERIC(8),	               -- Preserv: Warm Ishcemic Time
	REC_WGT_KG                             NUMERIC(8),	               -- Recipient/s Weight in kilograms
	REC_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	REC_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- Working for Income//If No, Not Working Due To:
	REC_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- Working for Income//If Yes:
	TFL_COD                                NUMERIC(8),	-- COD         -- Recipient/s Follow-up Cause of Death
	TFL_DEATH_DT                           NUMERIC(8),	-- MMDDYY      -- Date Patient died
	TFL_ENDTXFU                            NUMERIC(8),	-- MMDDYY      -- Cohort date
	TFL_GRAFT_DT                           NUMERIC(8),	-- MMDDYY      -- Graft Failure date
	TFL_LAFUDATE                           NUMERIC(8),	-- MMDDYY      -- Last Graft Follow up Date
	TFL_LASTATUS                           VARCHAR(1),	-- $PXSTATB    -- Last Status
	TRR_ID                                 NUMERIC(8),	               -- Unique identifier for TRR - unique key
	TX_ID                                  NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_transplant
    PRIMARY KEY (PERS_ID, PX_ID)
);

CREATE TABLE TXF_LI (
	ORG_AR                                 VARCHAR(3),	               -- Organ type with pancreas expanded to PTA and PAK
	ORG_TY                                 VARCHAR(4),	-- $WLORG      -- Organ Type
	PERS_ID                                NUMERIC(8),	               -- Unique person ID to replace SSN
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier (includes WL patients and living don TX)
	REC_CTR_ID                             NUMERIC(4),	               -- REC_ Center ID
	REC_OPO_ID                             NUMERIC(4),	               -- OPO Serving Transplant Center
	REC_TX_DT                              NUMERIC(8),	-- MMDDYY      -- Transplant Date
	REC_TX_ORG_TY                         VARCHAR(15),	-- $TXORGTY    -- Transplant Organ Type(s), text contains list of organ types involved in TX
	REC_TX_TY                              NUMERIC(8),	-- TXTYPE      -- Transplant Type, number of donors & organ types involved in TX
	TFL_ACADEMIC_LEVEL                     NUMERIC(8),	-- ACDMACTV    -- Academic Activity Level:
	TFL_ACADEMIC_PROGRESS                  NUMERIC(8),	-- ACDMPRG     -- Academic Progress:
	TFL_ACUTE_REJ_BIOPSY_CONFIRMED         NUMERIC(8),	-- BPSCNFMF    -- Was biopsy done to confirm acute rejection:
	TFL_ACUTE_REJ_EPISODE                  NUMERIC(8),	-- ACREJEPF    -- Did patient have any acute rejection episodes during the follow-up period:
	TFL_ALBUMIN                            NUMERIC(8),	               -- Serum Albumin
	TFL_ALKPHOS                            NUMERIC(8),	               -- Alkaline Phosphate
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
	TFL_BMI                                NUMERIC(8),	               -- BMI:
	TFL_CAD                                VARCHAR(1),	               -- Coronary Artery Disease Since Last Follow Up (Ped. Only > 5yr Followup)
	TFL_CARE_PROV_BY                       NUMERIC(8),	-- FLCRPRV     -- Follow-up Care Provided By
	TFL_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	TFL_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	TFL_COD                                NUMERIC(8),	-- LICOD       -- Recipient/s Cause of Death
	TFL_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	TFL_CREAT                              NUMERIC(8),	               -- Most Recent Serum Creatinine
	TFL_DIAB_DURING_FOL                    VARCHAR(1),	               -- Diabetes during the follow-up period:
	TFL_EMPL_STAT_PRE04                    NUMERIC(8),	-- EMPLSTAT    -- Patient/s Employment Status - Pre-6/30/2004
	TFL_FAIL_BILIARY                       VARCHAR(1),	               -- Biliary Tract Complication
	TFL_FAIL_DT                            NUMERIC(8),	-- MMDDYY      -- Date of Graft Failure
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
	TFL_HGT_CM                             NUMERIC(8),	               -- Recipient/s Height in Centimeters
	TFL_HGT_WGT_DT                         NUMERIC(8),	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	TFL_HOSP                               VARCHAR(1),	               -- Hospitalizations during Follow-Up Period
	TFL_HOSP_NUM                           NUMERIC(8),	               -- Number of Hospitalizations:
	TFL_IMMUNO_DISCONT                     VARCHAR(1),	               -- If No Maint Meds, Did Phys. Disc. All Immuno Meds
	TFL_IMMUNO_MAINT_MEDS                  NUMERIC(8),	-- IMMNTRSP    -- Any Meds Given during follow-up for Maintenance or Anti-Rejection?
	TFL_INR                                NUMERIC(8),	               -- INR:
	TFL_INSULIN_DEPND                      VARCHAR(1),	               -- Insulin dependent:
	TFL_LAB_DT                             NUMERIC(8),	-- MMDDYY      -- Most Recent Lab date
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
	TFL_PX_STAT_DT                         NUMERIC(8),	-- MMDDYY      -- Patient Status/Date
	TFL_REJ_EVENT_NUM                      NUMERIC(8),	               -- Number of Episodes
	TFL_REJ_TREAT                          VARCHAR(1),	               -- Patient Treated For Rejection
	TFL_SGOT                               NUMERIC(8),	               -- SGOT/AST
	TFL_SGPT                               NUMERIC(8),	               -- SGPT/ALT
	TFL_TOT_BILI                           NUMERIC(8),	               -- Total Bilirubin
	TFL_TXFER_DT                           NUMERIC(8),	-- MMDDYY      -- Transfer Date
	TFL_WGT_KG                             NUMERIC(8),	               -- Recipient/s Weight in kilograms
	TFL_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	TFL_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- If No, Working Due To
	TFL_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- If Yes:
	TRR_FOL_ID                             NUMERIC(8),	               -- Unique identifier for TRR Follow-up - unique key
	TRR_ID                                 NUMERIC(8),	               -- Unique identifier for TRR - foreign key to TRR
	TX_ID                                  NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_transplant
    PRIMARY KEY (PERS_ID, PX_ID)
);
