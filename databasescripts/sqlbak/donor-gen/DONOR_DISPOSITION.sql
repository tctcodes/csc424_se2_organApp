CREATE TABLE DONOR_DISPOSITION (
	DONOR_ID 	   INTEGER REFERENCES DONOR(DONOR_ID),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_DCD_RECOV_DT                          INTEGER,	-- MMDDYY      -- If DCD, Date organ recovered/removed from donor
	DON_DCD_RECOV_TM                          INTEGER,	-- TIME        -- If DCD, Time organ recovered/removed from donor
	DON_DISCARD_CD                            INTEGER,	-- DSCRDCD     -- Discard Code for Organ Disposition
	DON_DISPOSITION                           INTEGER,	-- FDBDSP      -- Disposition of Organ
	DON_FLUSH_BACK_TABLE                      INTEGER,	-- BKTBLFLS    -- Back Table Flush Solution - Right Lung://Back Table Flush Solution:
	DON_FLUSH_FINAL                           INTEGER,	-- FLSHSLN     -- Final Flush Solution - Right Lung://Final Flush Solution:
	DON_FLUSH_INIT                            INTEGER,	-- FLSHSLN     -- Initial Flush Solution - Right Lung://Initial Flush Solution:
	DON_ORG                                VARCHAR(4),	-- $DONORG     -- Donor Organ
	DON_ORG_SHARED                            INTEGER,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_REASON_CD                             INTEGER,	-- REASON      -- Reason Code for Organ Disposition
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_SHARE_TY                              INTEGER,	-- SHRTYCDR    -- Share Type
	DON_STORAGE                               INTEGER,	-- STORSOLN    -- Storage Solution used for Organ Preservation
	DON_TX_CTR_ID INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DON_TX_ Center ID
	DON_VESSEL_SENT                           INTEGER,	               -- OPO sent vessels with organ
	MATCH_ID                                  INTEGER,	               -- Identifier for Match Run
	PX_ID          							  INTEGER 	               -- Patient Identifier (includes patients added to the waitlisting and those identified by Living Donor Transplant)
);
