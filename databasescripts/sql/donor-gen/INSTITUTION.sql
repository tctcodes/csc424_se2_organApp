CREATE TABLE INSTITUTION (
	CTR_CD                           	   VARCHAR(4),	               -- center code
	CTR_ID                        INTEGER PRIMARY KEY,	               -- Unique identifier for ctr_cd/ctr_ty combination
	CTR_TY                                 VARCHAR(3),	-- $CTRTY      -- center type
	ENTIRE_NAME                           VARCHAR(75),	               -- center/s entire name
	ESRD_REGION                               INTEGER,	               -- ESRD REGION NUMBER
	NAME_PART1                            VARCHAR(37),	               -- first 38 characters of institution/s Name
	NAME_PART2                            VARCHAR(37),	               -- second 38 character/s of center/s Name
	OPTN_MBR                                  INTEGER,	               -- OPTN member flag
	PRIMARY_CITY                          VARCHAR(20),	               -- address city
	PRIMARY_CTRY                           VARCHAR(3),	               -- address foriegn country
	PRIMARY_PROVINCE                       VARCHAR(3),	               -- address foreign province
	PRIMARY_STATE                          VARCHAR(3),	               -- l address state
	PRIMARY_ZIP                           VARCHAR(10),	               -- address zip
	PROVIDER_NUM                          VARCHAR(10),	               -- Donor Hospital Provider Number
	REGION                                    INTEGER	               -- OPTN Region number
);
