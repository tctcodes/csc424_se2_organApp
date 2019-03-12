CREATE TABLE REC_HISTO_XMAT (
	REC_CELL_SOURCE_XMATCH               	  INTEGER,	-- TGTCLSRM    -- Target Source
	REC_CELL_TY_XMATCH                        INTEGER,	-- CELLTY      -- Cell Type
	REC_HISTO_TX_ID INTEGER REFERENCES REC_HISTO(REC_HISTO_TX_ID),	               -- Unique identifier for Transplant - foreign key to rec_histo
	REC_MEASURE_XMATCH                        INTEGER,	-- PRAMESUR    -- Most Recent row 4//Measures:
	REC_RESULT_AUTO_XMATCH                    INTEGER,	-- AUXMRSLT    -- Most Recent row 4//AutoXM Result Using This Target
	REC_RESULT_XMATCH                         INTEGER,	-- CRSSMTCH    -- Most Recent row 4/Result:
	REC_ROW_NUM_XMATCH                        INTEGER,	               -- Indicator for Most Recent(1) or Positive Xmatch(2)
	REC_TECH_XMATCH                           INTEGER	-- HSTTECXM    -- Most Recent row 4//Technique:
);
