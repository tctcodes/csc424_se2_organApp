CREATE TABLE DON_LIV_FOL (
	DFL_ACTIVITY_LEVEL               	      INTEGER,	-- ACTVLVL     -- Activity Level:
	DFL_ALBUMIN                               INTEGER,	               -- Serum Albumin:
	DFL_ALKPHOS                               INTEGER,	               -- Alkaline Phosphate
	DFL_ANTI_HYPERTEN_DRUG                    INTEGER,	               -- Anti Hypertensive Drugs
	DFL_BILI                                  INTEGER,	               -- Bilirubin
	DFL_BP_DIAST                              INTEGER,	               -- Diastolic
	DFL_BP_SYST                               INTEGER,	               -- Systolic
	DFL_CAT_SCAN                              INTEGER,	-- LDPROC      -- CAT Scan:
	DFL_COD                                   INTEGER,	-- LDFCOD      -- Donor/s Cause of Death
	DFL_COD_OSTXT                         VARCHAR(50),	               -- Cause of Death//Specify:
	DFL_COMPL                              VARCHAR(1),	               -- Complications since last report:
	DFL_DIAB                               VARCHAR(1),	               -- Diabetes:
	DFL_DIAB_TREAT                            INTEGER,	-- DIABTRET    -- Diabetes//Treatment:
	DFL_DIAL_DT                               INTEGER,	-- MMDDYY      -- Maintenance Dialysis//If Yes, Date First Dialyzed:
	DFL_FOL_CD                                INTEGER,	-- FOLCD       -- Follow Up Code
	DFL_FOL_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DFL_FOL_ Center ID
	DFL_FUNCTN_STAT                           INTEGER,	-- FUNCSTAT    -- Functional Status:
	DFL_HYPERTEN                           VARCHAR(1),	               -- Donor Developed Hypertension Requiring Medication:
	DFL_INCISION_PAIN                         INTEGER,	-- INSNPAIN    -- Chronic Incisional Pain:
	DFL_INIT_DISCHRG_DT                       INTEGER,	-- MMDDYY      -- Date of Initial Discharge:
	DFL_INR                                   INTEGER,	               -- INR:
	DFL_KI_COMPL                           VARCHAR(1),	               -- Kidney Complications since last report:
	DFL_KI_COMPL_STAT                         INTEGER,	-- COMPKI      -- Kidney Complications Status//If Yes:
	DFL_KI_CREAT                              INTEGER,	               -- Serum Creatinine
	DFL_LI_COMPL                           VARCHAR(1),	               -- Liver Complications since last report:
	DFL_LI_COMPL_STAT                         INTEGER,	-- COMPLI      -- Liver Complicatons Status//If Yes:
	DFL_LI_CREAT                              INTEGER,	               -- Serum Creatinine:
	DFL_MAINT_DIAL                         VARCHAR(1),	               -- Non-Maintenance Dialysis
	DFL_MRI                                   INTEGER,	-- LDPROC      -- MRI:
	DFL_PHYSC_CAPACITY                        INTEGER,	-- PHYSCPLD    -- Physical Capacity:
	DFL_PX_STAT                            VARCHAR(2),	-- $PXSTTDF    -- Patient Status
	DFL_PX_STAT_DT                            INTEGER,	-- MMDDYY      -- Patient Status Date
	DFL_READMIT                            VARCHAR(1),	               -- Has the donor been readmitted since last report:
	DFL_READMIT_DT                            INTEGER,	-- MMDDYY      -- If Yes, Date of First Readmission Since Last Report:
	DFL_SGOT                                  INTEGER,	               -- AST
	DFL_SGPT                                  INTEGER,	               -- SGPT/ALT:
	DFL_ULTRASOUND                            INTEGER,	-- LDPROC      -- Ultrasound:
	DFL_URINE_PROTEIN                         INTEGER,	-- URNPRTN     -- Urine Protein:
	DFL_URINE_RATIO                           INTEGER,	               -- Protein-Creatinine Ratio:
	DFL_WGT_KG                                INTEGER,	               -- Donor/s Weight in kilograms
	DFL_WORK_INCOME                        VARCHAR(1),	               -- Working for Income:
	DFL_WORK_NO_STAT                          INTEGER,	-- NOTWRKLD    -- Working for Income//If No, Not Working Due To:
	DFL_WORK_YES_STAT                         INTEGER,	-- WRKNCMLD    -- Working for Income//If Yes:
	DONOR_ID       INTEGER REFERENCES DONOR(DONOR_ID),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	PLATELET_COUNT                            INTEGER	               -- Donor followup platelet count value
);
