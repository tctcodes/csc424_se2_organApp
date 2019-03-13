CREATE TABLE MPEXCEPT_ORIG_TUMORS (
	CANHX_MPXCPT_FORM_ID   INTEGER REFERENCES MPEXCEPT(CANHX_MPXCPT_FORM_ID),	               -- Uniquely identifies a MELD/PELD exception form
	CANHX_MPXCPT_ORIG_HCC_TUMOR_ID            INTEGER,	               -- Order in which the tumor size was entered on the M/P exception form
	CANHX_MPXCPT_ORIG_HCC_TUMOR_SIZE          INTEGER	               -- Size of tumor in centimeters
);
