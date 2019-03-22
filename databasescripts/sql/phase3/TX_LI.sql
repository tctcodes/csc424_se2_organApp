CREATE TABLE TX_LI (
	CANHX_MPXCPT_HCC_APPLY_IND                REAL,	               -- Ever Applied for an HCC exception
	CANHX_MPXCPT_HCC_APPROVE_IND                 REAL,	               -- Ever Approved for an HCC exception
	CAN_ABO                                VARCHAR(3),	-- $ABO        -- Patient/s Blood Type
	CAN_AGE_AT_LISTING                     NUMERIC(8),	-- AGE9A       -- Calculated Candidate Age at Listing
	CAN_AGE_IN_MONTHS_AT_LISTING                 REAL,	               -- Calculated Candidate Age in Months at Listing
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
	CAN_HGT_CM                                   REAL,	               -- Candidate/s Height (stored in cm)
	CAN_INIT_ACT_STAT_CD                   NUMERIC(8),	-- CANDSTAT    -- First Active Status
	CAN_INIT_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Date of First Active Status
	CAN_INIT_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Date of First Inactive Status
	CAN_INIT_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- First SRTR MELD/PELD given
	CAN_INIT_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- First SRTR MELD/PELD type given
	CAN_INIT_STAT                          NUMERIC(8),	-- CANDSTAT    -- Initial Status of Patient
	CAN_LAST_ACT_STAT_DT                         DATE,	-- MMDDYY      -- Last Date of Active Status
	CAN_LAST_ALBUMIN                             REAL,	               -- Candidate Last Albumin (used for MELD)
	CAN_LAST_ASCITES                       NUMERIC(8),	-- ASCITES     -- Candidate Last Ascites (used for MELD)
	CAN_LAST_BILI                                REAL,	               -- Candidate Last Bilirubin (used for MELD)
	CAN_LAST_DIAL_PRIOR_WEEK               VARCHAR(1),	               -- Last non-blank val. of dialysis within prior week
	CAN_LAST_ENCEPH                        NUMERIC(8),	-- ENCEPH      -- Candidate Last Encephalopathy (used for MELD)
	CAN_LAST_INACT_STAT_DT                       DATE,	-- MMDDYY      -- Last Date of Inactive Status
	CAN_LAST_INR                                 REAL,	               -- Candidate Last INR (used for MELD)
	CAN_LAST_SERUM_CREAT                         REAL,	               -- Candidate Last Serum Creatinine mg/dl (used for MELD)
	CAN_LAST_SERUM_SODIUM                        REAL,	               -- Candidate Last Serum Sodium (used for MELD)
	CAN_LAST_SRTR_LAB_MELD                 NUMERIC(8),	-- CANDSTAT    -- Last SRTR MELD/PELD given
	CAN_LAST_SRTR_LAB_MELD_TY              VARCHAR(1),	               -- Last SRTR MELD/PELD type given
	CAN_LAST_STAT                          NUMERIC(8),	-- CANDSTAT    -- Last Status of Patient (with 2 day rule)
	CAN_LISTING_DT                               DATE,	-- MMDDYY      -- Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers
	CAN_MALIG                              VARCHAR(1),	               -- Any previous Malignancy
	CAN_PEPTIC_ULCER                       NUMERIC(8),	-- PEPULCER    -- Peptic Ulcer Disease
	CAN_PERIPH_VASC                        VARCHAR(1),	               -- Symptomatic Peripheral Vascular Disease
	CAN_PORTAL_VEIN                        VARCHAR(1),	               -- History of Portal Vein Thrombosis
	CAN_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Previous Upper Abdominal Surgery
	CAN_PREV_HL                                  REAL,	               -- Prev Heart-Lung Tx
	CAN_PREV_HR                                  REAL,	               -- Prev Heart Tx
	CAN_PREV_IN                                  REAL,	               -- Prev Intestine Tx
	CAN_PREV_KI                                  REAL,	               -- Prev Kidney Tx
	CAN_PREV_KP                                  REAL,	               -- Prev Kidney-Pancreas Tx
	CAN_PREV_LI                                  REAL,	               -- Prev Liver Tx
	CAN_PREV_LU                                  REAL,	               -- Prev Lung Tx
	CAN_PREV_PA                                  REAL,	               -- Prev Pancreas Tx
	CAN_PREV_TX                                  REAL,	               -- Previous Transplants
	CAN_PREV_TXFUS                         VARCHAR(1),	               -- Any Previous Transfusions
	CAN_PULM_EMBOL                         VARCHAR(1),	               -- Pulmonary Embolism
	CAN_RACE                               NUMERIC(8),	-- RACE        -- Patient/s Race
	CAN_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Patient Race
	CAN_REM_CD                             NUMERIC(8),	-- REMCD       -- Reason why candidate was removed
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	CAN_TIPSS                              VARCHAR(1),	               -- History of TIPSS
	CAN_TOT_ALBUMIN                              REAL,	               -- Total Serum Albumin
	CAN_WGT_KG                                   REAL,	               -- Candidate/s Weight in kilograms
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DONOR_ID_VESSEL                              REAL,	               -- Encrypted Vessel Donor ID
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                      REAL,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                            REAL,	               -- Donor/s Age in Months
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_CAD_DON_COD                        NUMERIC(8),	-- DONCOD      -- Donor/s Cause of Death
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CITIZENSHIP                        NUMERIC(8),	-- CITIZEN     -- Donor/s Citizenship
	DON_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	DON_COD_DON_STROKE                           REAL,	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CREAT                                    REAL,	               -- Serum Creatinine
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                       NUMERIC(8),	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                         NUMERIC(8),	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DR1                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_KI                            REAL,	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HAPLO_TY_MATCH                     NUMERIC(8),	-- HAPLOTY     -- Haplotype Match Between Live Donor & Recipient
	DON_HGT_CM                                   REAL,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                               REAL,	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_CANCER                        NUMERIC(8),	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                          NUMERIC(8),	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                      NUMERIC(8),	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HTN                                      REAL,	               -- Donor history of hypertension (1= yes, 0= no)
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_LIVING_DON_COD                     NUMERIC(8),	-- LVDNCD      -- Donor/s Cause of Death
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_OPO_CTR_ID                         NUMERIC(4),	               -- DON_OPO_ Center ID
	DON_ORG_SHARED                               REAL,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_PH                                       REAL,	               -- Blood PH:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RELATIONSHIP_TY                    NUMERIC(8),	-- LVDNRL      -- Living Donor/s Relationship to Recipient
	DON_SGOT                                     REAL,	               -- SGOT/AST
	DON_SGOT_PREOP                               REAL,	               -- SGOT/AST:
	DON_SGPT_PREOP                               REAL,	               -- SGPT/ALT:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_WARM_ISCH_TM_MINS                        REAL,	               -- Estimated Warm Ischemic Time in minutes
	DON_WGT_KG                                   REAL,	               -- Donor/s Weight in kilograms
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
	REC_AGE_IN_MONTHS_AT_TX                      REAL,	               -- Calculated Recipient Age in Months at TX
	REC_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral Therapy:
	REC_ANTIVRL_THERAPY_TY                 NUMERIC(8),	-- ANTLVIRL    -- If Anti-viral Therapies, check all that apply
	REC_ANTIVRL_THERAPY_TY_ACYCLOVIR             REAL,	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOGAM               REAL,	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	REC_ANTIVRL_THERAPY_TY_CYTOVENE              REAL,	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	REC_ANTIVRL_THERAPY_TY_EPIVIR                REAL,	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	REC_ANTIVRL_THERAPY_TY_FLU_VAC               REAL,	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	REC_ANTIVRL_THERAPY_TY_GAMIMUNE              REAL,	               -- Anti-viral Therapy - Gamimune (11)
	REC_ANTIVRL_THERAPY_TY_GAMMAGARD             REAL,	               -- Anti-viral Therapy - Gammagard (11)
	REC_ANTIVRL_THERAPY_TY_HBIG                  REAL,	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	REC_ANTIVRL_THERAPY_TY_OTHER                 REAL,	               -- Anti-viral Therapy - Other, Specify (11)
	REC_ANTIVRL_THERAPY_TY_VALCYTE               REAL,	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	REC_ANTIVRL_THERAPY_TY_VALTREX               REAL,	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	REC_ARTIFICIAL_LI                            REAL,	               -- Artificial Liver
	REC_ASCITES                            VARCHAR(1),	               -- Risk Factors: Ascites
	REC_A_MM_EQUIV_CUR                           REAL,	               -- Num of A mismatches - current equivalent match
	REC_A_MM_EQUIV_TX                            REAL,	               -- Num of A mismatches - equivalent match @ tx
	REC_B1                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                 NUMERIC(8),	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BACTERIA_PERIT                     VARCHAR(1),	               -- Risk Factors: Spontaneous Bacterial Peritonitis
	REC_BMI                                      REAL,	               -- BMI:
	REC_B_MM_EQUIV_CUR                           REAL,	               -- Num of B mismatches - current equivalent match
	REC_B_MM_EQUIV_TX                            REAL,	               -- Num of B mismatches - current match @ tx
	REC_CMV_IGG                            VARCHAR(2),	               -- CMV IgG
	REC_CMV_IGM                            VARCHAR(2),	               -- CMV IgM
	REC_CMV_STAT                           VARCHAR(2),	               -- Pre-Tx Serology Test Results: Cytomegalovirus
	REC_COD                                NUMERIC(8),	-- THCOD       -- Recipient/s Cause of Death
	REC_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	REC_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	REC_COLD_ISCH_TM                             REAL,	               -- Preserv: Total Cold Ischemic Time
	REC_CTR_ID                             NUMERIC(4),	               -- REC_ Center ID
	REC_CUR_CTR_ID                         NUMERIC(4),	               -- REC_CUR_ Center ID
	REC_CUR_PX_STAT                        VARCHAR(1),	-- $CRPXSTT    -- System field based on latest Follow-Up px_stat used to determine creation of next Follow-Up Form
	REC_DGN                                NUMERIC(8),	-- DGN         -- Primary Diagnosis
	REC_DGN2                               NUMERIC(8),	-- DGN         -- Secondary Diagnosis/path. confirmed LI dgn at discharge
	REC_DGN_OSTXT                         VARCHAR(50),	               -- Primary Diagnosis/Specify
	REC_DISCHRG_ALBUMIN                          REAL,	               -- Serum Albumin at Discharge
	REC_DISCHRG_ALKPHOS                          REAL,	               -- Alkaline Phosphate at Discharge
	REC_DISCHRG_CREAT                            REAL,	               -- Serum Creatinine at Discharge
	REC_DISCHRG_DT                               DATE,	-- MMDDYY      -- Transplant Discharge Date
	REC_DISCHRG_INR                              REAL,	               -- INR:
	REC_DISCHRG_LAB_DT                           DATE,	-- MMDDYY      -- Discharge Lab Date
	REC_DISCHRG_SGOT                             REAL,	               -- SGOT/AST at Discharge
	REC_DISCHRG_SGPT                             REAL,	               -- SGPT/ALT at Discharge
	REC_DR1                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                NUMERIC(8),	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DR_MM_EQUIV_CUR                          REAL,	               -- Num of DR mismatches - current equivalent match
	REC_DR_MM_EQUIV_TX                           REAL,	               -- Num of DR mismatches - current match @ tx
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
	REC_HGT_CM                                   REAL,	               -- Recipient/s Height in Centimeters
	REC_HGT_WGT_DT                               DATE,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	REC_HISTO_TX_ID                        NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_HIV_STAT                           VARCHAR(2),	               -- HIV serology status
	REC_HOSP_90_DAYS                       VARCHAR(1),	               -- Was patient hospitalizied during the last 90 days prior to the transplant admission:
	REC_IMMUNO_MAINT_MEDS                  VARCHAR(1),	               -- Are Any Meds Given Currently for Maint. Or Anti-Rej?
	REC_INOTROP_BP_SUPPORT                 VARCHAR(1),	               -- Risk Factors: Inotropes for Blood Pressure Support
	REC_LIFE_SUPPORT                       VARCHAR(1),	               -- Patient on Life Support:
	REC_LIFE_SUPPORT_OTHER                       REAL,	               -- Life Support: Other Mechanism
	REC_LI_TY                              NUMERIC(8),	-- SPLITTY     -- Split Type:
	REC_MALIG                              VARCHAR(1),	               -- Pretransplant Malignancy
	REC_MALIG_TY                           NUMERIC(8),	-- MALIG       -- Malignancies//If yes, specify type:
	REC_MALIG_TY_BREAST                          REAL,	               -- Previous Malignancy - Breast (14)
	REC_MALIG_TY_CNS_TUMOR                       REAL,	               -- Previous Malignancy - CNS Tumor (14)
	REC_MALIG_TY_GENITOURINARY                   REAL,	               -- Previous Malignancy - Genitourinary (14)
	REC_MALIG_TY_HEPBLAST                        REAL,	               -- Previous Malignancy - Hepatoblastoma (14)
	REC_MALIG_TY_HEPCARCINOMA                    REAL,	               -- Previous Malignancy - Hepatocellular Carcinoma (14)
	REC_MALIG_TY_LEUK_LYMPH                      REAL,	               -- Previous Malignancy - Leukemia/Lymphoma (14)
	REC_MALIG_TY_LIVER                           REAL,	               -- Previous Malignancy - Liver (14)
	REC_MALIG_TY_LU                              REAL,	               -- Previous Malignancy - Lung (14)
	REC_MALIG_TY_OTHER                           REAL,	               -- Previous Malignancy - Other, specify (14)
	REC_MALIG_TY_SKIN_MEL                        REAL,	               -- Previous Malignancy - Skin Melanoma (14)
	REC_MALIG_TY_SKIN_NON_MEL                    REAL,	               -- Previous Malignancy - Skin Non-Melanoma (14)
	REC_MALIG_TY_THROAT                          REAL,	               -- Previous Malignancy - Tongue/Throat/Larynx (14)
	REC_MALIG_TY_THYROID                         REAL,	               -- Previous Malignancy - Thyroid (14)
	REC_MALIG_TY_UNK                             REAL,	               -- Previous Malignancy - Type Unknown (14)
	REC_MED_COND                           NUMERIC(8),	-- MEDCOND     -- Medical Condition
	REC_MM_EQUIV_CUR                             REAL,	               -- Num of hla mismatches - current equivalent match
	REC_MM_EQUIV_TX                              REAL,	               -- Num of hla mismatches - current match @ tx
	REC_MOTOR_DEVELOP                      NUMERIC(8),	-- MOTDEV      -- Motor Development (Ped Only)
	REC_ON_VENTILATOR                      VARCHAR(1),	               -- Risk Factors: On Ventilator
	REC_OPO_ID                             NUMERIC(4),	               -- OPO Serving Transplant Center
	REC_OTHER_THERAPY                      VARCHAR(1),	               -- Other Therapies:
	REC_OTHER_THERAPY_TY                   NUMERIC(8),	-- THRPYOTH    -- If Other Therapies, check all that apply
	REC_OTHER_THERAPY_TY_PHOTOPH                 REAL,	               -- Other Therapy - Photopheresis (3)
	REC_OTHER_THERAPY_TY_PLASMAPH                REAL,	               -- Other Therapy - Plasmapheresis (3)
	REC_OTHER_THERAPY_TY_TLI                     REAL,	               -- Other Therapy - Total Lymphoid Irradiation (3)
	REC_PB_CREDIT                          VARCHAR(1),	               -- Payback credit issued to sending OPO
	REC_PB_DEBT                            VARCHAR(1),	               -- Payback debt issued to recipient OPO
	REC_PB_SHARE_TY                        NUMERIC(8),	-- PBSHRTYA    -- Payback share type
	REC_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence:
	REC_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCP      -- Physical Capacity:
	REC_PORTAL_HYPERTEN_BLEED              VARCHAR(1),	               -- Did Patient receive 5 or more units of packed red blood cells within 48 hours prior to transplantation due to spontaneous portal hypertensive bleeding:
	REC_PORTAL_VEIN                        VARCHAR(1),	               -- Risk Factors: Portal Vein Thrombosis
	REC_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	REC_POSTX_LOS                                REAL,	               -- Time after first Tx, same stay
	REC_PRETX_ALBUMIN                            REAL,	               -- PreTx : Serum Albumin
	REC_PRETX_CREAT                              REAL,	               -- PreTx : Serum Creatinine
	REC_PRETX_INR                                REAL,	               -- PreTx : Prothrombin INR
	REC_PRETX_LAB_DT                             DATE,	-- MMDDYY      -- Pretransplant Lab Date
	REC_PRETX_TOT_BILI                           REAL,	               -- PreTx : Total Bilirubin
	REC_PREV_ABDOM_SURG                    VARCHAR(1),	               -- Risk Factors: Previous Abdominal Surgery
	REC_PREV_HL                                  REAL,	               -- Prev Heart-Lung Tx
	REC_PREV_HR                                  REAL,	               -- Prev Heart Tx
	REC_PREV_IN                                  REAL,	               -- Prev Intestine Tx
	REC_PREV_KI                                  REAL,	               -- Prev Kidney Tx
	REC_PREV_KP                                  REAL,	               -- Prev Kidney-Pancreas Tx
	REC_PREV_LI                                  REAL,	               -- Prev Liver Tx
	REC_PREV_LU                                  REAL,	               -- Prev Lung Tx
	REC_PREV_NONFUNCTN_TX                  VARCHAR(1),	               -- Risk Factors: Previous Primary Non-function Post-Tx
	REC_PREV_PA                                  REAL,	               -- Prev Pancreas Tx
	REC_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Source of Payment//Primary:
	REC_PROCEDURE_TY_LI                    VARCHAR(1),	-- $LIPROC     -- Surgical Procedure Type
	REC_PX_RESEARCH                        VARCHAR(1),	               -- Px Part. in Research Protocol for Immuno. Meds
	REC_PX_STAT                            VARCHAR(1),	-- $PXSTATA    -- Patient Status
	REC_PX_STAT_DT                               DATE,	-- MMDDYY      -- Patient Status/Date
	REC_SECONDARY_PAY                      NUMERIC(8),	-- SNDSRCPY    -- Secondary Source of Payment//Secondary:
	REC_SGPT                                     REAL,	               -- PreTx : SGPT/ALT
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
	REC_VENTILATOR                               REAL,	               -- Life Support: Ventilator
	REC_WARM_ISCH_TM                             REAL,	               -- Preserv: Warm Ishcemic Time
	REC_WGT_KG                                   REAL,	               -- Recipient/s Weight in kilograms
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
);
