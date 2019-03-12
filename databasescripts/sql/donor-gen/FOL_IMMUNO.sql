CREATE TABLE FOL_IMMUNO (
	TFL_FOL_CD                       	      INTEGER,	-- FOLCD       -- Follow Up code
	TFL_IMMUNO_DRUG_ANTI_REJ                  INTEGER,	               -- Anti-Rejection
	TFL_IMMUNO_DRUG_CD                        INTEGER,	-- DRUG        -- Drug Code
	TFL_IMMUNO_DRUG_MAINT_CUR                 INTEGER,	               -- Current
	TFL_IMMUNO_DRUG_MAINT_PREV                INTEGER,	               -- Previous
	TRR_FOL_ID  INTEGER REFERENCES TXF_LI(TRR_FOL_ID),	               -- Unique identifier for TRR Follow-up - foreign key to TRR Follow-up
	TRR_ID            INTEGER REFERENCES TX_LI(TRR_ID)	               -- Unique identifier for TRR - foreign key to TRR
);
