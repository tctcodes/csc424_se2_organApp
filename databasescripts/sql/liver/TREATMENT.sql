CREATE TABLE TREATMENT (
	MALIG_ID       INTEGER REFERENCES MALIG(MALIG_ID),	               -- Unique identifier for malig - unique key
	MAL_POSTX_BESTRESP                     VARCHAR(2),	-- $BSTRESP    -- Best Treatment Response
	MAL_POSTX_CHEMO                           INTEGER,	               -- Other Treatment:Chemotherapy
	MAL_POSTX_CHEMO_TY                        INTEGER,	-- CHEMOTY     -- Other Treatment:Chemotherapy Type
	MAL_POSTX_CRYO                            INTEGER,	               -- Other Treatment:Cryotherapy(skin cancer)
	MAL_POSTX_DGN_DT                          INTEGER,	-- MMDDYY      -- Date of Diagnosis
	MAL_POSTX_IMMUNO                          INTEGER,	               -- Other Treatment:Immunotherapy
	MAL_POSTX_IMMUNO_STAT                     INTEGER,	-- IMMNSTTS    -- Immunosuppression
	MAL_POSTX_IMMUNO_TY                       INTEGER,	-- IMMUNOTY    -- Other Treatment:Immunotherapy Type
	MAL_POSTX_RADIAT                          INTEGER,	               -- Other Treatment:Radiation
	MAL_POSTX_SITE_ADJ_ORG                    INTEGER,	               -- Site(s)affected:Adjacent organs
	MAL_POSTX_SITE_DIST_METAST                INTEGER,	               -- Site(s)affected:Distant metastases
	MAL_POSTX_SITE_LYMPH                      INTEGER,	               -- Site(s)affected:Regional lymph nodes
	MAL_POSTX_SITE_PRIME_ORG                  INTEGER,	               -- Site(s)affected:Primary organ
	MAL_POSTX_SURG                            INTEGER,	               -- Other Treatment:Surgery
	MAL_POSTX_SURG_TY                         INTEGER,	-- SURGTY      -- Other Treatment:Surgery Type
	MAL_POSTX_TUMOR_TY                        INTEGER,	-- MALTMRTY    -- FOREIGN KEY
	TRR_FOL_ID   INTEGER REFERENCES TXF_LI(TRR_FOL_ID)	               -- Unique identifier for TRR Follow-up - foreign key to TRR Follow-up
);
