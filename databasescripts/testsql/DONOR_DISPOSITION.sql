CREATE TABLE DONOR_DISPOSITION (
	DONOR_ID                               NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_DCD_RECOV_DT                             DATE,	-- MMDDYY      -- If DCD, Date organ recovered/removed from donor
	DON_DCD_RECOV_TM                             TIME,	-- TIME        -- If DCD, Time organ recovered/removed from donor
	DON_DISCARD_CD                         NUMERIC(8),	-- DSCRDCD     -- Discard Code for Organ Disposition
	DON_DISPOSITION                        NUMERIC(8),	-- FDBDSP      -- Disposition of Organ
	DON_FLUSH_BACK_TABLE                   NUMERIC(8),	-- BKTBLFLS    -- Back Table Flush Solution - Right Lung://Back Table Flush Solution:
	DON_FLUSH_FINAL                        NUMERIC(8),	-- FLSHSLN     -- Final Flush Solution - Right Lung://Final Flush Solution:
	DON_FLUSH_INIT                         NUMERIC(8),	-- FLSHSLN     -- Initial Flush Solution - Right Lung://Initial Flush Solution:
	DON_ORG                                VARCHAR(4),	-- $DONORG     -- Donor Organ
	DON_ORG_SHARED                               REAL,	               -- Organ was used in a shared 1 (vs local 0) TX
	DON_REASON_CD                          NUMERIC(8),	-- REASON      -- Reason Code for Organ Disposition
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_SHARE_TY                           NUMERIC(8),	-- SHRTYCDR    -- Share Type
	DON_STORAGE                            NUMERIC(8),	-- STORSOLN    -- Storage Solution used for Organ Preservation
	DON_TX_CTR_ID                          NUMERIC(4),	               -- DON_TX_ Center ID
	DON_VESSEL_SENT                              REAL,	               -- OPO sent vessels with organ
	MATCH_ID                               NUMERIC(8),	               -- Identifier for Match Run
	PX_ID                                  NUMERIC(8),	               -- Patient Identifier (includes patients added to the waitlisting and those identified by Living Donor Transplant)
);
