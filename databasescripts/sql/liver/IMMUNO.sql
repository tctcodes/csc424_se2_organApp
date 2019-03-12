CREATE TABLE IMMUNO (
	REC_DRUG_ANTI_REJ                      	  INTEGER,	               -- Anti-Rejection
	REC_DRUG_CD                               INTEGER,	-- DRUG        -- Drug Code
	REC_DRUG_DAYS                             INTEGER,	               -- Number of Days
	REC_DRUG_INDUCTION                        INTEGER,	               -- Induction
	REC_DRUG_MAINT                            INTEGER,	               -- Maintenance
	TRR_ID            INTEGER REFERENCES TX_LI(TRR_ID)	               -- Unique identifier for TRR - foreign key to TRR
);
