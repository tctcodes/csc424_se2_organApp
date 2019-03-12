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
	PX_ID         INTEGER REFERENCES CAND_LIIN(PX_ID),	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);
