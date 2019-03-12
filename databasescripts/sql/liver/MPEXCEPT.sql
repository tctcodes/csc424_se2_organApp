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
	CANHX_MPXCPT_FORM_ID                      INTEGER,	               -- Unique identified of a M/P Exception form
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
