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
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID),	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);
