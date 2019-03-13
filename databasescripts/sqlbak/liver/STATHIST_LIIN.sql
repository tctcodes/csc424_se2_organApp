CREATE TABLE STATHIST_LIIN (
	CANHX_ALBUMIN                             INTEGER,	               -- albumin (used for MELD)
	CANHX_ALBUMIN_BOUND                       INTEGER,	               -- albumin lower bound 1 (used for MELD) (wlreg_audit_liin)
	CANHX_ASCITES                             INTEGER,	-- ASCITES     -- ascites (used for MELD)
	CANHX_BEGIN_DT                            INTEGER,	-- DATE        -- Date WLR record was last changed
	CANHX_BEGIN_DT_TM                         INTEGER,	-- DATETIME    -- WL Status Period Begin Date/Time
	CANHX_BILI                                INTEGER,	               -- bilirubin (used for MELD)
	CANHX_BILI_BOUND                          INTEGER,	               -- bilirubin lower bound 1 (used for MELD) (wlreg_audit_liin)
	CANHX_BILI_PPC                            INTEGER,	               -- Bilirubin(PBC/PSC/Other Cholestatic) (used for MELD)
	CANHX_CREAT_BOUND                         INTEGER,	               -- serum creatinine lower bound 1 upper 4 (used for MELD) (wlreg_audit_liin)
	CANHX_DIAL_PRIOR_WEEK                  VARCHAR(1),	               -- Did the patient have dialysis within the week prior to the serum creatinine test (used for MELD)
	CANHX_ENCEPH                              INTEGER,	-- ENCEPH      -- encephalopathy (used for MELD)
	CANHX_END_DT                              INTEGER,	-- DATE        -- WL Status Period End Date
	CANHX_END_DT_TM                           INTEGER,	-- DATETIME    -- WL Status Period End Date/Time
	CANHX_EXC_DIAG_HCC1                       INTEGER,	               -- Exception MELD/PELD Score for HCC1
	CANHX_EXC_DIAG_HCC2                       INTEGER,	               -- Exception MELD/PELD Score for HCC2
	CANHX_EXC_DIAG_HCC_NOPOLICY               INTEGER,	               -- Exception MELD/PELD score for HCC not by policy
	CANHX_EXC_DIAG_OTHER                      INTEGER,	               -- Other diagnosis MELD/PELD score exception
	CANHX_EXC_FLG                             INTEGER,	               -- Exception MELD/PELD
	CANHX_EXC_SCORE                           INTEGER,	-- CANDSTAT    -- Exception Score
	CANHX_GROWTH_FAIL                         INTEGER,	               -- Patient is experiencing growth failure
	CANHX_HGT_CM                              INTEGER,	               -- Candidate/s Height (stored in cm)
	CANHX_INR                                 INTEGER,	               -- International Normalized Ratio (how fast the patients blood clots relative to the control)(used for MELD)
	CANHX_INR_BOUND                           INTEGER,	               -- International Normalized Ratio lower bound 1
	CANHX_KEEP_PED_STAT_FLG                   INTEGER,	               -- Maintain Pediatric Status for Candidate after the candidate turns 18
	CANHX_MELD_DIFF_REASON_CD                 INTEGER,	-- MELDDIFF    -- Reason Match and Laboratory MELD/PELD score are different
	CANHX_OPTN_LAB_MELD                       INTEGER,	-- CANDSTAT    -- OPTN MELD/PELD given
	CANHX_OPTN_LAB_MELD_TY                 VARCHAR(4),	               -- OPTN score MELD or PELD
	CANHX_PREV_LOWER_MELD_SCORE               INTEGER,	-- CANDSTAT    -- Previous lower MELD score
	CANHX_REASON_STAT_INACT                   INTEGER,	-- INACTRSN    -- Reason Candidate Status made inactive
	CANHX_SCORE_MISSING                       INTEGER,	               -- Missing MELD/PELD flag
	CANHX_SERUM_CREAT                         INTEGER,	               -- serum creatinine (used for MELD)
	CANHX_SERUM_SODIUM                        INTEGER,	               -- serum sodium (used for MELD)
	CANHX_SRTR_LAB_MELD                       INTEGER,	-- CANDSTAT    -- SRTR MELD/PELD given
	CANHX_SRTR_LAB_MELD_TY                 VARCHAR(1),	               -- SRTR score MELD or PELD
	CANHX_STAT_CD                             INTEGER,	-- CANDSTAT    -- WL Status During Given Period
	CANHX_WGT_KG                              INTEGER,	               -- Candidate/s Weight in kilograms
	CAN_GENDER                             VARCHAR(1),	               -- Patient/s Gender
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
	CAN_REM_CD                                INTEGER,	-- REMCD       -- Reason why candidate was removed
	CAN_REM_DT                                INTEGER,	-- MMDDYY      -- rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt
	CAN_SOURCE                             VARCHAR(1),	               -- Source of Candidate Data A =Active WL,R= Removed,L=Living Don
	PX_ID          INTEGER REFERENCES CAND_LIIN(PX_ID),	               -- Patient Identifier - from WL for A & R Cands,TCR for L Cands
	WL_ORG                                 VARCHAR(4)	-- $WLORG      -- Organ of this waitlisted record
);
