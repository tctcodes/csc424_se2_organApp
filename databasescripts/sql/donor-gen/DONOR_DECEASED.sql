CREATE TABLE DONOR_DECEASED (
	DONOR_ID       INTEGER REFERENCES DONOR(DONOR_ID),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                    INTEGER,	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABNORM_CONGEN                      VARCHAR(1),	               -- Structural Abnormalities //Congenital:
	DON_ABNORM_LVH                         VARCHAR(1),	               -- Structural Abnormalities //LVH:
	DON_ABNORM_VALVES                      VARCHAR(1),	               -- Structural Abnormalities //Valves:
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                                   INTEGER,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                         INTEGER,	               -- Donor/s Age in Months
	DON_ALLOC_ECD_CVA                         INTEGER,	               -- CVA cause of death
	DON_ALLOC_ECD_HYPERTEN                    INTEGER,	               -- history of hypertension
	DON_ALLOC_ECD_SERUM_CREAT                 INTEGER,	               -- most recent serum_creat
	DON_ALLOC_ECD_SERUM_CREAT_DT              INTEGER,	-- MMDDYY      -- most recent serum_creat date
	DON_ALLOC_REMAIN_LI_SEG                VARCHAR(1),	               -- Allocate Remaining Liver Segment?
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_CONVULS                       VARCHAR(1),	               -- Meds given Donor: Anticonvulsants
	DON_ANTI_HBC                           VARCHAR(2),	-- $SRLSTT     -- Anti-HBC
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_ANTI_HIV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HIV I/II:
	DON_ANTI_HTLV                          VARCHAR(2),	-- $SRLSTT     -- Anti-HTLV I/II:
	DON_ANTI_HYPERTEN                      VARCHAR(1),	               -- Meds given Donor: Antihypertensives
	DON_ARGININE                           VARCHAR(1),	               -- Arginine Vasopressin:
	DON_B1                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                    INTEGER,	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BIOPSY_DGN                            INTEGER,	-- BPMYCR      -- Biopsy
	DON_BRAIN_DEATH_TM                        INTEGER,	-- TIME        -- Time of pronouncement of death: (Complete for brain dead and DCD donors)
	DON_BUN                                   INTEGER,	               -- BUN
	DON_BW4                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                   INTEGER,	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                    INTEGER,	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CAD_DON_COD                           INTEGER,	-- DONCOD      -- Donor/s Cause of Death
	DON_CANCER_FREE_INTERVAL                  INTEGER,	               -- Cancer Free Interval
	DON_CANCER_OTHER_OSTXT                VARCHAR(50),	               -- History of Cancer/Specify
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CHAGAS_NAT                         VARCHAR(2),	               -- Donor RNA Nat serology value for Chagas test
	DON_CHEST_XRAY                            INTEGER,	-- LUCHSTXR    -- Chest X-ray:
	DON_CITIZENSHIP                           INTEGER,	-- CITIZEN     -- Donor/s Citizenship
	DON_CI_FINAL                              INTEGER,	               -- Cardiac Index (final) //Cardiac Index:
	DON_CI_INIT                               INTEGER,	               -- Cardiac Index (initial) //Cardiac Index: (L/min/sq.m)
	DON_CLAMP_DT                              INTEGER,	-- MMDDYY      -- Clamp Date
	DON_CLAMP_TM                              INTEGER,	-- TIME        -- Clamp Time
	DON_CLAMP_TM_ZONE                         INTEGER,	-- TIMEZONE    -- Clamp Time Zone
	DON_CLINICAL_INFECT                    VARCHAR(1),	               -- Clinical Infection
	DON_COD_DON_STROKE                        INTEGER,	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_COLD_ISCH_TM_ARRIV_KI                 INTEGER,	               -- Cold Ischemic Time upon arrival for Kidney in hours
	DON_CONSENT_ATTORNEY                      INTEGER,	               -- Consent Mechanism - Attorney in Fact
	DON_CONSENT_DON_CARD                      INTEGER,	               -- Consent Mechanism - Donor Card
	DON_CONSENT_DON_REGIS                     INTEGER,	               -- Consent Mechanism - Donor Registry
	DON_CONSENT_DRIVER_LICENSE                INTEGER,	               -- Consent Mechanism - Driver/s License
	DON_CONSENT_PX_WRIT_DOC                VARCHAR(1),	               -- Patient Consented in Writing
	DON_CONSENT_TM                            INTEGER,	-- TIME        -- Time consent obtained for first organ:
	DON_CONSENT_WRIT_DOC_INTENT            VARCHAR(1),	               -- Did the patient have written documentation of their intent to be a donor:
	DON_CONT_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency Last 6 Months
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CORONARY_ANGIO                        INTEGER,	-- CRNRYANG    -- Coronary Angiogram
	DON_CO_FINAL                              INTEGER,	               -- CO (final) (L/min) //CO:
	DON_CO_INIT                               INTEGER,	               -- CO (initial) (L/min) //CO: (L/min)
	DON_CREAT                                 INTEGER,	               -- Serum Creatinine
	DON_CREG_DON_FLG                          INTEGER,	               -- Is this a CREG Donor?
	DON_CVP_FINAL                             INTEGER,	               -- CVP (final) //CVP:
	DON_CVP_INIT                              INTEGER,	               -- CVP (initial) //CVP: (mm/Hg)
	DON_DCD_ABDOM_AORTA_CANNUL_DT             INTEGER,	-- MMDDYY      -- If DCD, Date of abdominal aorta cannulation:
	DON_DCD_ABDOM_AORTA_CANNUL_TM             INTEGER,	-- TIME        -- If DCD, Time of abdominal aorta cannulation:
	DON_DCD_AGONAL_BEGIN_DT                   INTEGER,	-- MMDDYY      -- If DCD, Date agonal phase begins
	DON_DCD_AGONAL_BEGIN_TM                   INTEGER,	-- TIME        -- If DCD, Time agonal phase begins
	DON_DCD_PORTAL_VEIN_CANNUL_DT             INTEGER,	-- MMDDYY      -- If DCD, Date of portal vein cannulation:
	DON_DCD_PORTAL_VEIN_CANNUL_TM             INTEGER,	-- TIME        -- If DCD, Time of portal vein cannulation:
	DON_DCD_PROGRESS_TO_BRAIN_DEATH        VARCHAR(1),	               -- If not DCD, Was this a consented DCD donor that progressed to brain death?
	DON_DCD_PULM_ART_CANNUL_DT                INTEGER,	-- MMDDYY      -- If DCD, Date of pulmonary artery cannulation:
	DON_DCD_PULM_ART_CANNUL_TM                INTEGER,	-- TIME        -- If DCD, Time of pulmonary artery cannulation:
	DON_DCD_SUPPORT_WITHDRAW_DT               INTEGER,	-- MMDDYY      -- If DCD, Date of withdrawal of support
	DON_DCD_SUPPORT_WITHDRAW_TM               INTEGER,	-- TIME        -- If DCD, Time of withdrawal of support
	DON_DCD_THOR_AORTA_CANNUL_DT              INTEGER,	-- MMDDYY      -- If DCD, Date of thoracic aorta cannulation:
	DON_DCD_THOR_AORTA_CANNUL_TM              INTEGER,	-- TIME        -- If DCD, Time of thoracic aorta cannulation:
	DON_DCD_TOT_URINE_OUTPUT                  INTEGER,	               -- If DCD, Total urine output during OR recovery phase
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                          INTEGER,	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                            INTEGER,	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DP1                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                   INTEGER,	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                   INTEGER,	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                   INTEGER,	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                                  INTEGER,	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_EBNA                               VARCHAR(2),	-- $SRLSTT     -- EBNA (Epstein-Barr nuclear antigen)
	DON_EBV_IGG                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgG):
	DON_EBV_IGM                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgM):
	DON_EJECT_FRACT                           INTEGER,	               -- LV Ejection Fraction %
	DON_EJECT_FRACT_METH                      INTEGER,	-- LVEJCMTH    -- Method
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_FLG_OPTN                   INTEGER,	               -- Does donor meet criteria to be an Expanded Donor?
	DON_EXPAND_DON_KI                         INTEGER,	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_EXPRESS_FAMILY                     VARCHAR(1),	               -- Did the patient express to family or others the intent to be a donor
	DON_EXTRACRANIAL_CANCER                VARCHAR(1),	               -- Extracranial
	DON_FEEDBACK_DONE                         INTEGER,	               -- Feedback Completed for Donor?
	DON_FINAL_SERUM_CREAT                     INTEGER,	               -- Final Serum Creatinine
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HBC_STAT                              INTEGER,	-- SRLGYSTT    -- Hepatitis B Core Antibody Status
	DON_HBV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hbv test
	DON_HBV_SURF_ANTIBODY                  VARCHAR(2),	-- $SRLSTT     -- HBsAb (Hepatitis B Surface Antibody)
	DON_HBV_SURF_ANTIGEN                   VARCHAR(2),	-- $SRLSTT     -- HBsAg
	DON_HCV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hcv test
	DON_HCV_STAT                              INTEGER,	-- SRLGYSTT    -- HCV Antibody Status
	DON_HEAVY_ALCOHOL                      VARCHAR(1),	               -- Heavy Alcohol Use (heavy= 2+ drinks/day):
	DON_HEMATOCRIT                            INTEGER,	               -- Hematocrit:
	DON_HEPARIN                            VARCHAR(1),	               -- Heparin
	DON_HGT_CM                                INTEGER,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                            INTEGER,	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency
	DON_HIST_CANCER                           INTEGER,	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                             INTEGER,	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                         INTEGER,	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_INSULIN_DEPND                    INTEGER,	-- INSDPDR     -- Insulin Dependent
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HIST_PREV_MI                       VARCHAR(1),	               -- History of Previous MI
	DON_HIV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hiv test
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                      INTEGER,	               -- HLA Typing not done for donor
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HTLV_NAT                           VARCHAR(2),	               -- Donor RNA Nat serology value for htlv test
	DON_HTN                                   INTEGER,	               -- Donor history of hypertension (1= yes, 0= no)
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- Diet
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- Diuretics
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- Other Medication
	DON_INFECT_BLOOD                          INTEGER,	               -- Infection Source: Blood
	DON_INFECT_BLOOD_CONFIRM               VARCHAR(1),	               -- Infection Source: Blood/Confirmed by Culture
	DON_INFECT_LU                             INTEGER,	               -- Infection Source: Lung
	DON_INFECT_LU_CONFIRM                  VARCHAR(1),	               -- Infection Source: Lung/Confirmed by Culture
	DON_INFECT_OTHER                          INTEGER,	               -- Infection Source: Other
	DON_INFECT_OTHER_CONFIRM               VARCHAR(1),	               -- Infection Source: Other/Confimed by Culture
	DON_INFECT_URINE                          INTEGER,	               -- Infection Source: Urine
	DON_INFECT_URINE_CONFIRM               VARCHAR(1),	               -- Infection Source: Urine/Confirmed by Culture
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INR                                   INTEGER,	               -- INR:
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_INTRACRANIAL_CANCER                VARCHAR(1),	               -- Intracranial
	DON_KI_GLOMER_OBSERVED                    INTEGER,	               -- Glomeruli Observed on Kidney biopsy
	DON_KI_GLOMER_SCLER_PCT                   INTEGER,	               -- Percent Glomerular Sclerosis on Kidney biopsy
	DON_LF_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (left)
	DON_LF_KI_GLOMER_SCLER_PCT                INTEGER,	-- KGLMR       -- % Glomerulosclerosis (Left Kidney)
	DON_LF_KI_PUMP                         VARCHAR(1),	               -- Pump (Left Kidney)
	DON_LF_KI_RESIST_PRIOR_SHIP               INTEGER,	               -- Final Resistance Prior to Shipping (left) //Final Resistance Prior to Shipping:
	DON_LF_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (left)://Transferred on pump:
	DON_LF_LU_BRONCHO                         INTEGER,	-- ABNLBRNC    -- Left Lung Bronchoscopy:
	DON_LIPASE                                INTEGER,	               -- Serum Lipase
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_LI_BIOPSY_MACRO_FAT                   INTEGER,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT                   INTEGER,	               -- % Micro/intermediate vesicular fat:
	DON_LI_OTH_HISTOLOGY_GRANULOMAS           INTEGER,	               -- Granulomas Histology performed
	DON_LI_OTH_HISTOLOGY_HEMOSIDERA           INTEGER,	               -- Hemosidera Histology performed
	DON_LI_OTH_HISTOLOGY_OTHER                INTEGER,	               -- Other Histology performed
	DON_MAP_FINAL                             INTEGER,	               -- MAP (final) //Map:
	DON_MAP_INIT                              INTEGER,	               -- MAP (initial) //Map: (mm/Hg)
	DON_MAX_CREAT                             INTEGER,	               -- Maximum Donor Creatinine
	DON_MED_EXAMINER                          INTEGER,	-- MDXMRPRT    -- Medical Examiner/Coroner
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_MEET_DOUBLE_KI_CRIT                   INTEGER,	               -- Donor meets double KI allocation criteria
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_NON_HR_BEAT_CNTL                   VARCHAR(1),	               -- Controlled
	DON_NON_HR_BEAT_CORE_COOL              VARCHAR(1),	               -- Core Cooling Used
	DON_OPO_CTR_ID    INTEGER REFERENCES INSTITUTION(CTR_ID),	               -- DON_OPO_ Center ID
	DON_PA_DIAST_FINAL                        INTEGER,	               -- PA Diastolic (final) //PA Diastolic:
	DON_PA_DIAST_INIT                         INTEGER,	               -- PA Diastolic (initial) //PA Diastolic: (mm/Hg)
	DON_PA_SYST_FINAL                         INTEGER,	               -- PA Systolic (final) //PA Systolic:
	DON_PA_SYST_INIT                          INTEGER,	               -- PA Systolic (initial) //PA Systolic: (mm/Hg)
	DON_PCO2                                  INTEGER,	               -- pCO2:
	DON_PCWP_FINAL                            INTEGER,	               -- PCWP (final) //PCWP:
	DON_PCWP_INIT                             INTEGER,	               -- PCWP (initial) //PCWP: (mm/Hg)
	DON_PEAK_SERUM_CREAT                      INTEGER,	               -- Peak Serum Creatinine
	DON_PH                                    INTEGER,	               -- Blood PH:
	DON_PO2                                   INTEGER,	               -- Lung pO2 on 100%
	DON_PO2_DONE                           VARCHAR(1),	               -- Lung - Was pO2 done:
	DON_PO2_FIO2                              INTEGER,	               -- Lung pO2 on Fio2 //If Yes, Lung pO2 on FiO2 of:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_PRERECOV_MEDS                      VARCHAR(1),	               -- Prerecovery Medication
	DON_PRERECOV_STEROIDS                  VARCHAR(1),	               -- Pre-Recov Meds given Donor: Steroids
	DON_PRERECOV_T3                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T3
	DON_PRERECOV_T4                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T4
	DON_PREV_GASTRO_DISEASE                VARCHAR(1),	               -- Previous Gastrointestinal Disease
	DON_PROTEIN_URINE                      VARCHAR(1),	               -- Protein in Urine
	DON_PULM_CATH                          VARCHAR(1),	               -- Was a pulmonary artery catheter placed:
	DON_RACE                                  INTEGER,	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                              INTEGER,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_OUT_US                       VARCHAR(1),	               -- Recovered Outside the U.S.
	DON_REF_DT                                INTEGER,	-- MMDDYY      -- Referral Date
	DON_REF_FLG                            VARCHAR(1),	               -- Referral Flag
	DON_RESUSCIT_DURATION                     INTEGER,	               -- Duration of Resuscitation
	DON_RPR_VDRL                           VARCHAR(2),	-- $SRLSTT     -- RPR-VDRL
	DON_RT_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (right)
	DON_RT_KI_GLOMER_SCLER_PCT                INTEGER,	-- KGLMR       -- % Glomerulosclerosis (Right Kidney)
	DON_RT_KI_PUMP                         VARCHAR(1),	               -- Pump (Right Kidney)
	DON_RT_KI_RESIST_PRIOR_SHIP               INTEGER,	               -- Final Resistance Prior to Shipping (right) //Final Resistance Prior to Shipping:
	DON_RT_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (right)://Transferred on pump:
	DON_RT_LU_BRONCHO                         INTEGER,	-- ABNLBRNC    -- Right Lung Bronchoscopy:
	DON_SERUM_AMYLASE                         INTEGER,	               -- Serum Amylase
	DON_SGOT                                  INTEGER,	               -- SGOT/AST
	DON_SGPT                                  INTEGER,	               -- SGPT/ALT
	DON_SKIN_CANCER                        VARCHAR(1),	               -- Skin
	DON_SODIUM                                INTEGER,	               -- Serum Sodium //Last Serum Sodium Prior to Procurement:
	DON_SVR_FINAL                             INTEGER,	               -- SVR (final) //SVR:
	DON_SVR_INIT                              INTEGER,	               -- SVR (initial) //SVR: (dynes/sec/cm)^5)
	DON_TARGET_SOURCE1                        INTEGER,	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                        INTEGER,	-- TGTCLSRM    -- Target Source for Class II:
	DON_TATTOOS                            VARCHAR(1),	               -- Lifestyle Factors: Tattoos
	DON_TM_FOR_XMATCH                      VARCHAR(1),	               -- Is there time for crossmatch?
	DON_TOT_BILI                              INTEGER,	               -- Total Bilirubin
	DON_TX                                    INTEGER,	               -- Max disposition for Donor, 5(recovered only) or 6(transplanted)
	DON_TXFUS_TERMINAL_HOSP_NUM               INTEGER,	-- TRANSFUS    -- Number of transfusions during this (terminal) hospitalization:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                        INTEGER,	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                     INTEGER,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_USE_DOUBLE_KI                      VARCHAR(1),	               -- Use Double KI allocation, not Expanded Donor
	DON_VASODIL                            VARCHAR(1),	               -- Vasodilators
	DON_VESSELS_GT50_STENOSIS                 INTEGER,	               -- If Abnormal, # of Vessels with > 50% Stenosis
	DON_WALL_ABNORM_GLOB                   VARCHAR(1),	               -- Wall Abnormalities //Global:
	DON_WALL_ABNORM_SEG                    VARCHAR(1),	               -- Wall Abnormalities //Segmental:
	DON_WARM_ISCH_TM_MINS                     INTEGER,	               -- Estimated Warm Ischemic Time in minutes
	DON_WEST_NILE_NAT                      VARCHAR(2),	               -- Donor RNA Nat serology value for West Nile test
	DON_WGT_KG                                INTEGER,	               -- Donor/s Weight in kilograms
	PERS_ID                    INTEGER NOT NULL UNIQUE	               -- Unique Person ID for patient. Based on matches in similarity of SSN, DOB, Names and Nicknames, Gender, etc.
);
