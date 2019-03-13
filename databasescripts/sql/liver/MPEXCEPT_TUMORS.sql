CREATE TABLE MPEXCEPT_TUMORS (
	CANHX_MPXCPT_CHRONIC_LI_AFP500            INTEGER,	               -- Does the patient have chronic liver disease and an alpha-fetoprotein >= 500 nanograms
	CANHX_MPXCPT_FORM_ID  INTEGER REFERENCES MPEXCEPT(CANHX_MPXCPT_FORM_ID), -- Unique identified of a M/P Exception form
	CANHX_MPXCPT_HCC_CT_ABDOMEN_DT            INTEGER,	-- MMDDYY      -- Date CT completed
	CANHX_MPXCPT_HCC_MRI_ABDOMEN_DT           INTEGER,	-- MMDDYY      -- Date MRI completed
	CANHX_MPXCPT_HCC_TUMOR_BLUSH           VARCHAR(1),	               -- Was a blush seen on tumor imaging study corresponding to area of suspicion
	CANHX_MPXCPT_HCC_TUMOR_ID                 INTEGER,	               -- Order in which the tumor size was entered on the M/P Exception form
	CANHX_MPXCPT_HCC_TUMOR_SIZE_CM            INTEGER,	               -- Size of tumor in centimeters
	CANHX_MPXCPT_HCC_ULTRASOUND_DT            INTEGER	-- MMDDYY      -- Date Ultrasound of liver completed
);
