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
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID),	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);
