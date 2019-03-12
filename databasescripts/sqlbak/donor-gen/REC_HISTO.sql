CREATE TABLE REC_HISTO (
	B_CELL_DONE                  	          INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	B_CELL_DONE_XMAT_SOLID_PHASE              INTEGER,	               -- Physical Crossmatch Done//Which B-cell crossmatch
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s re-typed HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s re-typed HLA - A (2) antigen
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s re-typed HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s re-typed HLA - B (2) antigen
	DON_BW4                                   INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - Bw4 locus
	DON_BW6                                   INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - Bw6 locus
	DON_CW1                                   INTEGER,	-- CWHLA       -- Donor/s re-typed HLA - Cw (1) locus
	DON_CW2                                   INTEGER,	-- CWHLA       -- Donor/s re-typed HLA - Cw (2) locus
	DON_DPW1                                  INTEGER,	-- DPHLA       -- Donor/s re-typed HLA - DPw (1) locus
	DON_DPW2                                  INTEGER,	-- DPHLA       -- Donor/s re-typed HLA - DPw (2) locus
	DON_DQW1                                  INTEGER,	-- DQHLA       -- Donor/s re-typed HLA - DQ (1) locus
	DON_DQW2                                  INTEGER,	-- DQHLA       -- Donor/s re-typed HLA - DQ (2) locus
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s re-typed HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s re-typed HLA - DR (2) antigen
	DON_DRW51                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR51 locus
	DON_DRW52                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR52 locus
	DON_DRW53                                 INTEGER,	-- WKGRPHLA    -- Donor/s re-typed HLA - DR53 locus
	DON_RETYP_CELL_SOURCE_I                   INTEGER,	-- TGTCLSRM    -- Target Cell Source Class I:
	DON_RETYP_CELL_SOURCE_II                  INTEGER,	-- TGTCLSRM    -- Target Cell Source Class II:
	DON_RETYP_DT_I                            INTEGER,	-- MMDDYY      -- Date Typing Completed Class I:
	DON_RETYP_DT_II                           INTEGER,	-- MMDDYY      -- Date Typing Completed Class II:
	DON_RETYP_I                            VARCHAR(1),	               -- Donor Retyped Class I:
	DON_RETYP_II                           VARCHAR(1),	               -- Donor Retyped Class II:
	DON_RETYP_METH_I                          INTEGER,	-- HLATYMTM    -- Typing Method Class I:
	DON_RETYP_METH_II                         INTEGER,	-- HLATYMTM    -- Serology, DNA, Other
	H_CELL_DONE                               INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	H_CELL_DONE_XMAT_SOLID_PHASE              INTEGER,	               -- Physical Crossmatch Done//Which historical crossma
	REC_A1                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (1) antigen
	REC_A2                                    INTEGER,	-- ALOCUS      -- Recipient/s HLA - A (2) antigen
	REC_B1                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (1) antigen
	REC_B2                                    INTEGER,	-- BLOCUS      -- Recipient/s HLA - B (2) antigen
	REC_BW4                                   INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - Bw4 locus
	REC_BW6                                   INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - Bw6 locus
	REC_CPRA                                  INTEGER,	               -- HLA Antibody Screening Done/CPRA (%) - Most Recent
	REC_CPRA_PEAK                             INTEGER,	               -- HLA Antibody Screening Done/CPRA (%) - Peak
	REC_CPRA_PEAK_STAT                     VARCHAR(1),	-- $FLDSTCD    -- HLA Antibody Screening Done/CPRA (%) - Peak/Status
	REC_CPRA_STAT                          VARCHAR(1),	-- $FLDSTCD    -- HLA Antibody Screening Done/CPRA (%) - Most Recent/Status
	REC_CW1                                   INTEGER,	-- CWHLA       -- Recipient/s HLA - Cw (1) locus
	REC_CW2                                   INTEGER,	-- CWHLA       -- Recipient/s HLA - Cw (2) locus
	REC_DON_RETYP                          VARCHAR(1),	               -- Donor Retyped at Your Center
	REC_DPW1                                  INTEGER,	-- DPHLA       -- Recipient/s HLA - DPw (1) locus
	REC_DPW2                                  INTEGER,	-- DPHLA       -- Recipient/s HLA - DPw (2) locus
	REC_DQW1                                  INTEGER,	-- DQHLA       -- Recipient/s HLA - DQ (1) locus
	REC_DQW2                                  INTEGER,	-- DQHLA       -- Recipient/s HLA - DQ (2) locus
	REC_DR1                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (1) antigen
	REC_DR2                                   INTEGER,	-- DRLOCUS     -- Recipient/s HLA - DR (2) antigen
	REC_DRW51                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR51 locus
	REC_DRW52                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR52 locus
	REC_DRW53                                 INTEGER,	-- WKGRPHLA    -- Recipient/s HLA - DR53 locus
	REC_HISTO_TX_ID   INTEGER REFERENCES TX_LI(TX_ID) ,	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_HLA_DT_I                              INTEGER,	-- MMDDYY      -- Date Typing Completed Class I:
	REC_HLA_DT_II                             INTEGER,	-- MMDDYY      -- Date Typing Completed Class II:
	REC_HLA_INTERPRET_I                       INTEGER,	-- HLANTRPA    -- Anti-HLA Interpretation - Most Recent Class I:
	REC_HLA_INTERPRET_II                      INTEGER,	-- HLANTRPB    -- Anti-HLA Interpretation - Most Recent Class II:
	REC_HLA_INTERPRET_PEAK_I                  INTEGER,	-- HLANTRPA    -- Anti-HLA Interpretation - Peak Serum Class I:
	REC_HLA_INTERPRET_PEAK_II                 INTEGER,	-- HLANTRPB    -- Anti-HLA Interpretation - Peak Serum Class II:
	REC_HLA_TYP_DONE                       VARCHAR(1),	               -- HLA typing Done
	REC_LAB_CTR_CD                         VARCHAR(4),	               -- Lab Center Code
	REC_LAB_CTR_CD_ORIG                    VARCHAR(4),	               -- Original Lab Center
	REC_LAB_CTR_TY                         VARCHAR(3),	               -- Lab Center Type
	REC_LAB_CTR_TY_ORIG                    VARCHAR(3),	               -- Original Lab Center
	REC_ORIG_PROV                         VARCHAR(10),	               -- Original Provider Number
	REC_POS_AUTO_XMATCH                    VARCHAR(1),	-- $YNUNKNT    -- Has autocrossmatch ever been positive:
	REC_POS_AUTO_XMATCH_DT                    INTEGER,	-- MMDDYY      -- AutoXM Date - Positive AutoXM:
	REC_PRA_DT_MOST_RECENT_I                  INTEGER,	-- MMDDYY      -- Serum Date - Most Recent Class I:
	REC_PRA_DT_MOST_RECENT_II                 INTEGER,	-- MMDDYY      -- Serum Date - Most Recent Class II:
	REC_PRA_DT_PEAK_I                         INTEGER,	-- MMDDYY      -- Serum Date - Peak Serum Class I:
	REC_PRA_DT_PEAK_II                        INTEGER,	-- MMDDYY      -- Serum Date - Peak Serum Class II:
	REC_PRA_MEASURE_MOST_RECENT_I             INTEGER,	-- PRAMESUR    -- Technique Measures - Most Recent Class I:
	REC_PRA_MEASURE_MOST_RECENT_II            INTEGER,	-- PRAMESUR    -- Technique Measures - Most Recent Class II:
	REC_PRA_MEASURE_PEAK_I                    INTEGER,	-- PRAMESUR    -- Measures - Peak Serum Class I:
	REC_PRA_MEASURE_PEAK_II                   INTEGER,	-- PRAMESUR    -- Measures - Peak Serum Class II:
	REC_PRA_MOST_RECENT                       INTEGER,	               -- Most Recent Serum PRA (%)
	REC_PRA_MOST_RECENT_I                     INTEGER,	               -- PRA (%) - Most Recent Class I:
	REC_PRA_MOST_RECENT_II                    INTEGER,	               -- PRA (%) - Most Recent Class II:
	REC_PRA_PEAK                              INTEGER,	               -- Peak Serum PRA (%)
	REC_PRA_PEAK_I                            INTEGER,	               -- PRA (%) - Peak Serum Class I:
	REC_PRA_PEAK_II                           INTEGER,	               -- PRA (%) - Peak Serum Class II:
	REC_PRA_TARGET_MOST_RECENT_I              INTEGER,	-- PRATGT      -- Target- Most Recent Class I:
	REC_PRA_TARGET_MOST_RECENT_II             INTEGER,	-- PRATGT      -- Target - Most Recent Class II:
	REC_PRA_TARGET_PEAK_I                     INTEGER,	-- PRATGT      -- Target - Peak Serum Class I:
	REC_PRA_TARGET_PEAK_II                    INTEGER,	-- PRATGT      -- Target - Peak Serum Class II:
	REC_PRA_TECH_MOST_RECENT_I                INTEGER,	-- PRATECH     -- Technique - Most Recent Class I:
	REC_PRA_TECH_MOST_RECENT_II               INTEGER,	-- PRATECH     -- Technique - Most Recent Class II:
	REC_PRA_TECH_PEAK_I                       INTEGER,	-- PRATECH     -- Technique - Peak Serum Class I:
	REC_PRA_TECH_PEAK_II                      INTEGER,	-- PRATECH     -- Technique - Peak Serum Class II:
	REC_PRA_TEST_DONE                      VARCHAR(1),	               -- PRA testing Done
	REC_SERA_TESTED_I                      VARCHAR(1),	               -- Were any sera tested pre-transplant that contain anti-HLA Class I antibody:
	REC_SERA_TESTED_II                     VARCHAR(1),	               -- Were any sera tested pre-transplant that contain anti-HLA Class II antibody:
	REC_SERUM_SCREEN                       VARCHAR(1),	               -- Was serum screened for anti-HLA Class II antibody:
	REC_TX_DT                                 INTEGER,	-- MMDDYY      -- Transplant Date
	REC_TYP_METH_I                            INTEGER,	-- HLATYMTM    -- Typing Method Class I
	REC_TYP_METH_II                           INTEGER,	-- HLATYMTM    -- Typing Method Class II
	REC_XMATCH_DONE                        VARCHAR(1),	               -- Crossmatch Done
	REC_XMATCH_DONE_PERIOD                 VARCHAR(1),	               -- If yes, was the crossmatch prospective to transplant:
	REC_XMATCH_OTHER_SERA                  VARCHAR(1),	               -- Pos. Xmatch w/any other Sera by any other Method
	REC_XMATCH_SERUM_DT_MOST_RECENT           INTEGER,	-- MMDDYY      -- Date of crossmatch serum:
	REC_XMATCH_SERUM_DT_ORIG                  INTEGER,	-- MMDDYY      -- B. Date of crossmatch serum - Least Recent (for reference purposes):
	T_CELL_DONE                               INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_AHG                      INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_FLOW_CYTOMETRY           INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_NO_AHG                   INTEGER,	               -- Physical Crossmatch Done//Which T-cell crossmatch
	T_CELL_DONE_XMAT_SOLID_PHASE              INTEGER	               -- Physical Crossmatch Done//Which T-cell crossmatch
);
