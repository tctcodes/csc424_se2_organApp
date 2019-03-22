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
	TFL_ALBUMIN                                  REAL,	               -- Serum Albumin
	TFL_ALKPHOS                                  REAL,	               -- Alkaline Phosphate
	TFL_ANTIVRL_THERAPY                    VARCHAR(1),	               -- Biological or Anti-viral therapy:
	TFL_ANTIVRL_THERAPY_TY                 NUMERIC(8),	-- ANTLVIRL    -- If Anti-viral therapies, check all that apply
	TFL_ANTIVRL_THERAPY_TY_ACYCLOVIR             REAL,	               -- Anti-viral Therapy - Acyclovir (Zovirax) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOGAM               REAL,	               -- Anti-viral Therapy - Cytogam (CMV) (11)
	TFL_ANTIVRL_THERAPY_TY_CYTOVENE              REAL,	               -- Anti-viral Therapy - Ganciclovir (Cytovene) (11)
	TFL_ANTIVRL_THERAPY_TY_EPIVIR                REAL,	               -- Anti-viral Therapy - Lamivudine (Epivir) (for treatment of Hepatitis B) (11)
	TFL_ANTIVRL_THERAPY_TY_FLU_VAC               REAL,	               -- Anti-viral Therapy - Flu Vaccine (Influenza Virus) (11)
	TFL_ANTIVRL_THERAPY_TY_GAMIMUNE              REAL,	               -- Anti-viral Therapy - Gamimune (11)
	TFL_ANTIVRL_THERAPY_TY_GAMMAGARD             REAL,	               -- Anti-viral Therapy - Gammagard (11)
	TFL_ANTIVRL_THERAPY_TY_HBIG                  REAL,	               -- Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11)
	TFL_ANTIVRL_THERAPY_TY_OTHER                 REAL,	               -- Anti-viral Therapy - Other, Specify (11)
	TFL_ANTIVRL_THERAPY_TY_VALCYTE               REAL,	               -- Anti-viral Therapy - Valgancyclovir (Valcyte) (11)
	TFL_ANTIVRL_THERAPY_TY_VALTREX               REAL,	               -- Anti-viral Therapy - Valacyclovir (Valtrex) (11)
	TFL_BMI                                      REAL,	               -- BMI:
	TFL_CAD                                VARCHAR(1),	               -- Coronary Artery Disease Since Last Follow Up (Ped. Only > 5yr Followup)
	TFL_CARE_PROV_BY                       NUMERIC(8),	-- FLCRPRV     -- Follow-up Care Provided By
	TFL_CMV_IGG                            VARCHAR(2),	-- $SRLSTT     -- CMV IgG
	TFL_CMV_IGM                            VARCHAR(2),	-- $SRLSTT     -- CMV IgM
	TFL_COD                                NUMERIC(8),	-- LICOD       -- Recipient/s Cause of Death
	TFL_COD2                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COD3                               NUMERIC(8),	-- COD         -- Contributory Cause of Death:
	TFL_COGNITIVE_DEVELOP                  NUMERIC(8),	-- COGDEV      -- Cognitive Development (Ped Only)
	TFL_CREAT                                    REAL,	               -- Most Recent Serum Creatinine
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
	TFL_HGT_CM                                   REAL,	               -- Recipient/s Height in Centimeters
	TFL_HGT_WGT_DT                               DATE,	-- MMDDYY      -- Date of Height & Weight Measurement (Ped Only)
	TFL_HOSP                               VARCHAR(1),	               -- Hospitalizations during Follow-Up Period
	TFL_HOSP_NUM                                 REAL,	               -- Number of Hospitalizations:
	TFL_IMMUNO_DISCONT                     VARCHAR(1),	               -- If No Maint Meds, Did Phys. Disc. All Immuno Meds
	TFL_IMMUNO_MAINT_MEDS                  NUMERIC(8),	-- IMMNTRSP    -- Any Meds Given during follow-up for Maintenance or Anti-Rejection?
	TFL_INR                                      REAL,	               -- INR:
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
	TFL_OTHER_THERAPY_TY_PHOTOPH                 REAL,	               -- Other Therapy - Photopheresis (3)
	TFL_OTHER_THERAPY_TY_PLASMAPH                REAL,	               -- Other Therapy - Plasmapheresis (3)
	TFL_OTHER_THERAPY_TY_TLI                     REAL,	               -- Other Therapy - Total Lymphoid Irradiation (3)
	TFL_PERM_STATE                         VARCHAR(2),	-- $STATE      -- State of Permanent Residence
	TFL_PHYSC_CAPACITY                     NUMERIC(8),	-- PHYSCP      -- Physical Capacity:
	TFL_PORTAL_VEIN_THROMB                 VARCHAR(1),	               -- If Vascular Thrombosis, Portal vein thrombosis (Ped. Only)
	TFL_PRIMARY_PAY                        NUMERIC(8),	-- PRMSRCPY    -- Primary Insurance at Follow-up:
	TFL_PX_NONCOMP                         VARCHAR(1),	               -- Patient Noncompliant During this Follow-Up Period
	TFL_PX_RESEARCH                        VARCHAR(1),	               -- Did Px Participate in Research for Immuno Meds
	TFL_PX_STAT                            VARCHAR(1),	-- $PXSTATB    -- Patient Status
	TFL_PX_STAT_DT                               DATE,	-- MMDDYY      -- Patient Status/Date
	TFL_REJ_EVENT_NUM                            REAL,	               -- Number of Episodes
	TFL_REJ_TREAT                          VARCHAR(1),	               -- Patient Treated For Rejection
	TFL_SGOT                                     REAL,	               -- SGOT/AST
	TFL_SGPT                                     REAL,	               -- SGPT/ALT
	TFL_TOT_BILI                                 REAL,	               -- Total Bilirubin
	TFL_TXFER_DT                                 DATE,	-- MMDDYY      -- Transfer Date
	TFL_WGT_KG                                   REAL,	               -- Recipient/s Weight in kilograms
	TFL_WORK_INCOME                        VARCHAR(1),	               -- Working for income:
	TFL_WORK_NO_STAT                       NUMERIC(8),	-- NOTWRK      -- If No, Working Due To
	TFL_WORK_YES_STAT                      NUMERIC(8),	-- WRKNCM      -- If Yes:
	TRR_FOL_ID                             NUMERIC(8),	               -- Unique identifier for TRR Follow-up - unique key
	TRR_ID                                 NUMERIC(8),	               -- Unique identifier for TRR - foreign key to TRR
	TX_ID                                  NUMERIC(8),	               -- Unique identifier for Transplant - foreign key to rec_transplant
);
