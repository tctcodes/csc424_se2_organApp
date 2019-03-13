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
	TRR_ID                                    INTEGER,	               -- Unique identifier for TRR - unique key
	TX_ID                                     INTEGER,	               -- Unique identifier for Transplant - foreign key to rec_transplant
	PRIMARY KEY(TX_ID, TRR_ID)
);
