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
