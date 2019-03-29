CREATE TABLE DONOR_DECEASED (
	﻿DONOR_ID                              NUMERIC(8),	               -- Encrypted Unique Donor ID (all donors) - foreign key
	DON_A1                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (1) antigen
	DON_A2                                 NUMERIC(8),	-- ALOCUS      -- Donor/s HLA - A (2) antigen
	DON_ABNORM_CONGEN                      VARCHAR(1),	               -- Structural Abnormalities //Congenital:
	DON_ABNORM_LVH                         VARCHAR(1),	               -- Structural Abnormalities //LVH:
	DON_ABNORM_VALVES                      VARCHAR(1),	               -- Structural Abnormalities //Valves:
	DON_ABO                                VARCHAR(3),	-- $ABO        -- Donor/s Blood Type
	DON_AGE                            DOUBLE PRECISION,	               -- Calculated Donor Age in Years at Organ Recovery or Referral Date
	DON_AGE_IN_MONTHS                  DOUBLE PRECISION,	               -- Donor/s Age in Months
	DON_ALLOC_ECD_CVA                      NUMERIC(3),	               -- CVA cause of death
	DON_ALLOC_ECD_HYPERTEN                 NUMERIC(3),	               -- history of hypertension
	DON_ALLOC_ECD_SERUM_CREAT          DOUBLE PRECISION,	               -- most recent serum_creat
	DON_ALLOC_ECD_SERUM_CREAT_DT                 DATE,	-- MMDDYY      -- most recent serum_creat date
	DON_ALLOC_REMAIN_LI_SEG                VARCHAR(1),	               -- Allocate Remaining Liver Segment?
	DON_ANTI_CMV                           VARCHAR(2),	-- $SRLSTT     -- Anti-CMV
	DON_ANTI_CONVULS                       VARCHAR(1),	               -- Meds given Donor: Anticonvulsants
	DON_ANTI_HBC                           VARCHAR(2),	-- $SRLSTT     -- Anti-HBC
	DON_ANTI_HCV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HCV
	DON_ANTI_HIV                           VARCHAR(2),	-- $SRLSTT     -- Anti-HIV I/II:
	DON_ANTI_HTLV                          VARCHAR(2),	-- $SRLSTT     -- Anti-HTLV I/II:
	DON_ANTI_HYPERTEN                      VARCHAR(1),	               -- Meds given Donor: Antihypertensives
	DON_ARGININE                           VARCHAR(1),	               -- Arginine Vasopressin:
	DON_B1                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (1) antigen
	DON_B2                                 NUMERIC(8),	-- BLOCUS      -- Donor/s HLA - B (2) antigen
	DON_BIOPSY_DGN                         NUMERIC(8),	-- BPMYCR      -- Biopsy
	DON_BRAIN_DEATH_TM                           TIME,	-- TIME        -- Time of pronouncement of death: (Complete for brain dead and DCD donors)
	DON_BUN                            DOUBLE PRECISION,	               -- BUN
	DON_BW4                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw4 locus
	DON_BW6                                NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - Bw6 locus
	DON_C1                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (1) locus
	DON_C2                                 NUMERIC(8),	-- CWHLA       -- Donor/s HLA - Cw (2) locus
	DON_CAD_DON_COD                        NUMERIC(8),	-- DONCOD      -- Donor/s Cause of Death
	DON_CANCER_FREE_INTERVAL           DOUBLE PRECISION,	               -- Cancer Free Interval
	DON_CANCER_OTHER_OSTXT                VARCHAR(50),	               -- History of Cancer/Specify
	DON_CARDIAC_ARREST_AFTER_DEATH         VARCHAR(1),	               -- Cardiac Arr. Since Event that led to Decl of Death
	DON_CHAGAS_NAT                         VARCHAR(2),	               -- Donor RNA Nat serology value for Chagas test
	DON_CHEST_XRAY                         NUMERIC(8),	-- LUCHSTXR    -- Chest X-ray:
	DON_CITIZENSHIP                        NUMERIC(8),	-- CITIZEN     -- Donor/s Citizenship
	DON_CI_FINAL                       DOUBLE PRECISION,	               -- Cardiac Index (final) //Cardiac Index:
	DON_CI_INIT                        DOUBLE PRECISION,	               -- Cardiac Index (initial) //Cardiac Index: (L/min/sq.m)
	DON_CLAMP_DT                                 DATE,	-- MMDDYY      -- Clamp Date
	DON_CLAMP_TM                                 TIME,	-- TIME        -- Clamp Time
	DON_CLAMP_TM_ZONE                      NUMERIC(8),	-- TIMEZONE    -- Clamp Time Zone
	DON_CLINICAL_INFECT                    VARCHAR(1),	               -- Clinical Infection
	DON_COD_DON_STROKE                     NUMERIC(3),	               -- Donor cause of death is stroke (1= yes, 0= no)
	DON_COLD_ISCH_TM_ARRIV_KI          DOUBLE PRECISION,	               -- Cold Ischemic Time upon arrival for Kidney in hours
	DON_CONSENT_ATTORNEY                   NUMERIC(3),	               -- Consent Mechanism - Attorney in Fact
	DON_CONSENT_DON_CARD                   NUMERIC(3),	               -- Consent Mechanism - Donor Card
	DON_CONSENT_DON_REGIS                  NUMERIC(3),	               -- Consent Mechanism - Donor Registry
	DON_CONSENT_DRIVER_LICENSE             NUMERIC(3),	               -- Consent Mechanism - Driver/s License
	DON_CONSENT_PX_WRIT_DOC                VARCHAR(1),	               -- Patient Consented in Writing
	DON_CONSENT_TM                               TIME,	-- TIME        -- Time consent obtained for first organ:
	DON_CONSENT_WRIT_DOC_INTENT            VARCHAR(1),	               -- Did the patient have written documentation of their intent to be a donor:
	DON_CONT_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency Last 6 Months
	DON_CONT_CIGARETTE                     VARCHAR(1),	               -- Donor/s Continued Use in Last 6 Months
	DON_CONT_COCAINE                       VARCHAR(1),	               -- Cocaine Use Last 6 Months
	DON_CONT_IV_DRUG                       VARCHAR(1),	               -- IV Drug Last 6 Months
	DON_CONT_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse Last 6 Months
	DON_CORONARY_ANGIO                     NUMERIC(8),	-- CRNRYANG    -- Coronary Angiogram
	DON_CO_FINAL                       DOUBLE PRECISION,	               -- CO (final) (L/min) //CO:
	DON_CO_INIT                        DOUBLE PRECISION,	               -- CO (initial) (L/min) //CO: (L/min)
	DON_CREAT                          DOUBLE PRECISION,	               -- Serum Creatinine
	DON_CREG_DON_FLG                       NUMERIC(3),	               -- Is this a CREG Donor?
	DON_CVP_FINAL                      DOUBLE PRECISION,	               -- CVP (final) //CVP:
	DON_CVP_INIT                       DOUBLE PRECISION,	               -- CVP (initial) //CVP: (mm/Hg)
	DON_DCD_ABDOM_AORTA_CANNUL_DT                DATE,	-- MMDDYY      -- If DCD, Date of abdominal aorta cannulation:
	DON_DCD_ABDOM_AORTA_CANNUL_TM                TIME,	-- TIME        -- If DCD, Time of abdominal aorta cannulation:
	DON_DCD_AGONAL_BEGIN_DT                      DATE,	-- MMDDYY      -- If DCD, Date agonal phase begins
	DON_DCD_AGONAL_BEGIN_TM                      TIME,	-- TIME        -- If DCD, Time agonal phase begins
	DON_DCD_PORTAL_VEIN_CANNUL_DT                DATE,	-- MMDDYY      -- If DCD, Date of portal vein cannulation:
	DON_DCD_PORTAL_VEIN_CANNUL_TM                TIME,	-- TIME        -- If DCD, Time of portal vein cannulation:
	DON_DCD_PROGRESS_TO_BRAIN_DEATH        VARCHAR(1),	               -- If not DCD, Was this a consented DCD donor that progressed to brain death?
	DON_DCD_PULM_ART_CANNUL_DT                   DATE,	-- MMDDYY      -- If DCD, Date of pulmonary artery cannulation:
	DON_DCD_PULM_ART_CANNUL_TM                   TIME,	-- TIME        -- If DCD, Time of pulmonary artery cannulation:
	DON_DCD_SUPPORT_WITHDRAW_DT                  DATE,	-- MMDDYY      -- If DCD, Date of withdrawal of support
	DON_DCD_SUPPORT_WITHDRAW_TM                  TIME,	-- TIME        -- If DCD, Time of withdrawal of support
	DON_DCD_THOR_AORTA_CANNUL_DT                 DATE,	-- MMDDYY      -- If DCD, Date of thoracic aorta cannulation:
	DON_DCD_THOR_AORTA_CANNUL_TM                 TIME,	-- TIME        -- If DCD, Time of thoracic aorta cannulation:
	DON_DCD_TOT_URINE_OUTPUT           DOUBLE PRECISION,	               -- If DCD, Total urine output during OR recovery phase
	DON_DDAVP                              VARCHAR(1),	               -- Meds given Donor: DDAVP
	DON_DEATH_CIRCUM                       NUMERIC(8),	-- DTHCRCM     -- Cirumstances of Death
	DON_DEATH_MECH                         NUMERIC(8),	-- DTHMCH      -- Mechanism of Death
	DON_DOBUTAMINE                         VARCHAR(1),	               -- Meds given Donor: Dobutamine
	DON_DOPAMINE                           VARCHAR(1),	               -- Meds given Donor: Dopamine
	DON_DP1                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (1) locus
	DON_DP2                                NUMERIC(8),	-- DPHLA       -- Donor/s HLA - DPw (2) locus
	DON_DQ1                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (1) locus
	DON_DQ2                                NUMERIC(8),	-- DQHLA       -- Donor/s HLA - DQ (2) locus
	DON_DR1                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (1) antigen
	DON_DR2                                NUMERIC(8),	-- DRLOCUS     -- Donor/s HLA - DR (2) antigen
	DON_DR51                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR51 locus
	DON_DR52                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR52 locus
	DON_DR53                               NUMERIC(8),	-- WKGRPHLA    -- Donor/s HLA - DR53 locus
	DON_EBNA                               VARCHAR(2),	-- $SRLSTT     -- EBNA (Epstein-Barr nuclear antigen)
	DON_EBV_IGG                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgG):
	DON_EBV_IGM                            VARCHAR(2),	-- $SRLSTT     -- EBV (VCA) (lgM):
	DON_EJECT_FRACT                    DOUBLE PRECISION,	               -- LV Ejection Fraction %
	DON_EJECT_FRACT_METH                   NUMERIC(8),	-- LVEJCMTH    -- Method
	DON_ETHNICITY_SRTR                    VARCHAR(10),	-- $ETHSR      -- SRTR Donor Ethnicity
	DON_EXPAND_DON_FLG_OPTN                NUMERIC(3),	               -- Does donor meet criteria to be an Expanded Donor?
	DON_EXPAND_DON_KI                      NUMERIC(3),	               -- Meets expanded donor criteria for kidney (1= yes , 0= no)
	DON_EXPRESS_FAMILY                     VARCHAR(1),	               -- Did the patient express to family or others the intent to be a donor
	DON_EXTRACRANIAL_CANCER                VARCHAR(1),	               -- Extracranial
	DON_FEEDBACK_DONE                      NUMERIC(3),	               -- Feedback Completed for Donor?
	DON_FINAL_SERUM_CREAT              DOUBLE PRECISION,	               -- Final Serum Creatinine
	DON_GENDER                             VARCHAR(1),	               -- Donor/s Gender
	DON_HBC_STAT                           NUMERIC(8),	-- SRLGYSTT    -- Hepatitis B Core Antibody Status
	DON_HBV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hbv test
	DON_HBV_SURF_ANTIBODY                  VARCHAR(2),	-- $SRLSTT     -- HBsAb (Hepatitis B Surface Antibody)
	DON_HBV_SURF_ANTIGEN                   VARCHAR(2),	-- $SRLSTT     -- HBsAg
	DON_HCV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hcv test
	DON_HCV_STAT                           NUMERIC(8),	-- SRLGYSTT    -- HCV Antibody Status
	DON_HEAVY_ALCOHOL                      VARCHAR(1),	               -- Heavy Alcohol Use (heavy= 2+ drinks/day):
	DON_HEMATOCRIT                     DOUBLE PRECISION,	               -- Hematocrit:
	DON_HEPARIN                            VARCHAR(1),	               -- Heparin
	DON_HGT_CM                         DOUBLE PRECISION,	               -- Donor/s Height in centimeters
	DON_HIGH_CREAT                         NUMERIC(3),	               -- Donor serum creatinine > 1.5 (1= yes, 0= no)
	DON_HIST_ALCOHOL                       VARCHAR(1),	               -- Alcohol Dependency
	DON_HIST_CANCER                        NUMERIC(8),	-- HSTSTST     -- History of Cancer
	DON_HIST_CIGARETTE_GT20_PKYR           VARCHAR(1),	               -- Cigarette Use > 20 Pack Years - Ever
	DON_HIST_COCAINE                       VARCHAR(1),	               -- Cocaine Use
	DON_HIST_DIAB                          NUMERIC(8),	-- HSTDBDR     -- History of Diabetes
	DON_HIST_HYPERTEN                      NUMERIC(8),	-- HSTHYPDR    -- History of Hypertension
	DON_HIST_INSULIN_DEPND                 NUMERIC(8),	-- INSDPDR     -- Insulin Dependent
	DON_HIST_IV_DRUG                       VARCHAR(1),	               -- IV Drug Use - Pre-6/30/2004
	DON_HIST_OTHER_DRUG                    VARCHAR(1),	               -- Other Drug Abuse
	DON_HIST_PREV_MI                       VARCHAR(1),	               -- History of Previous MI
	DON_HIV_NAT                            VARCHAR(2),	               -- Donor RNA Nat serology value for hiv test
	DON_HLA_TYP                            VARCHAR(1),	               -- Was Donor HLA Typed
	DON_HLA_TYP_NOT_DONE                   NUMERIC(3),	               -- HLA Typing not done for donor
	DON_HOME_STATE                         VARCHAR(2),	-- $STATE      -- Donor/s Home State
	DON_HTLV_NAT                           VARCHAR(2),	               -- Donor RNA Nat serology value for htlv test
	DON_HTN                                NUMERIC(3),	               -- Donor history of hypertension (1= yes, 0= no)
	DON_HYPERTEN_DIET                      VARCHAR(1),	               -- Diet
	DON_HYPERTEN_DIURETICS                 VARCHAR(1),	               -- Diuretics
	DON_HYPERTEN_OTHER_MEDS                VARCHAR(1),	               -- Other Medication
	DON_INFECT_BLOOD                       NUMERIC(3),	               -- Infection Source: Blood
	DON_INFECT_BLOOD_CONFIRM               VARCHAR(1),	               -- Infection Source: Blood/Confirmed by Culture
	DON_INFECT_LU                          NUMERIC(3),	               -- Infection Source: Lung
	DON_INFECT_LU_CONFIRM                  VARCHAR(1),	               -- Infection Source: Lung/Confirmed by Culture
	DON_INFECT_OTHER                       NUMERIC(3),	               -- Infection Source: Other
	DON_INFECT_OTHER_CONFIRM               VARCHAR(1),	               -- Infection Source: Other/Confimed by Culture
	DON_INFECT_URINE                       NUMERIC(3),	               -- Infection Source: Urine
	DON_INFECT_URINE_CONFIRM               VARCHAR(1),	               -- Infection Source: Urine/Confirmed by Culture
	DON_INOTROP_AGENT_GE3                  VARCHAR(1),	               -- Three or More Inotropic Agents at Time of Incision
	DON_INOTROP_SUPPORT                    VARCHAR(1),	               -- Inotropic Support
	DON_INR                            DOUBLE PRECISION,	               -- INR:
	DON_INSULIN                            VARCHAR(1),	               -- Insulin:
	DON_INTRACRANIAL_CANCER                VARCHAR(1),	               -- Intracranial
	DON_KI_GLOMER_OBSERVED             DOUBLE PRECISION,	               -- Glomeruli Observed on Kidney biopsy
	DON_KI_GLOMER_SCLER_PCT            DOUBLE PRECISION,	               -- Percent Glomerular Sclerosis on Kidney biopsy
	DON_LF_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (left)
	DON_LF_KI_GLOMER_SCLER_PCT             NUMERIC(8),	-- KGLMR       -- % Glomerulosclerosis (Left Kidney)
	DON_LF_KI_PUMP                         VARCHAR(1),	               -- Pump (Left Kidney)
	DON_LF_KI_RESIST_PRIOR_SHIP        DOUBLE PRECISION,	               -- Final Resistance Prior to Shipping (left) //Final Resistance Prior to Shipping:
	DON_LF_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (left)://Transferred on pump:
	DON_LF_LU_BRONCHO                      NUMERIC(8),	-- ABNLBRNC    -- Left Lung Bronchoscopy:
	DON_LIPASE                         DOUBLE PRECISION,	               -- Serum Lipase
	DON_LI_BIOPSY                          VARCHAR(1),	               -- Liver Biopsy
	DON_LI_BIOPSY_MACRO_FAT            DOUBLE PRECISION,	               -- % Macro vesicular fat:
	DON_LI_BIOPSY_MICRO_FAT            DOUBLE PRECISION,	               -- % Micro/intermediate vesicular fat:
	DON_LI_OTH_HISTOLOGY_GRANULOMAS        NUMERIC(3),	               -- Granulomas Histology performed
	DON_LI_OTH_HISTOLOGY_HEMOSIDERA        NUMERIC(3),	               -- Hemosidera Histology performed
	DON_LI_OTH_HISTOLOGY_OTHER             NUMERIC(3),	               -- Other Histology performed
	DON_MAP_FINAL                      DOUBLE PRECISION,	               -- MAP (final) //Map:
	DON_MAP_INIT                       DOUBLE PRECISION,	               -- MAP (initial) //Map: (mm/Hg)
	DON_MAX_CREAT                      DOUBLE PRECISION,	               -- Maximum Donor Creatinine
	DON_MED_EXAMINER                       NUMERIC(8),	-- MDXMRPRT    -- Medical Examiner/Coroner
	DON_MEET_CDC_HIGH_RISK                 VARCHAR(1),	               -- Does the Donor meet CDC guidelines for High Risk for an organ donor:
	DON_MEET_DOUBLE_KI_CRIT                NUMERIC(3),	               -- Donor meets double KI allocation criteria
	DON_NON_HR_BEAT                        VARCHAR(1),	               -- Non-Heart Beating Donor
	DON_NON_HR_BEAT_CNTL                   VARCHAR(1),	               -- Controlled
	DON_NON_HR_BEAT_CORE_COOL              VARCHAR(1),	               -- Core Cooling Used
	DON_OPO_CTR_ID                         NUMERIC(4),	               -- DON_OPO_ Center ID
	DON_PA_DIAST_FINAL                 DOUBLE PRECISION,	               -- PA Diastolic (final) //PA Diastolic:
	DON_PA_DIAST_INIT                  DOUBLE PRECISION,	               -- PA Diastolic (initial) //PA Diastolic: (mm/Hg)
	DON_PA_SYST_FINAL                  DOUBLE PRECISION,	               -- PA Systolic (final) //PA Systolic:
	DON_PA_SYST_INIT                   DOUBLE PRECISION,	               -- PA Systolic (initial) //PA Systolic: (mm/Hg)
	DON_PCO2                           DOUBLE PRECISION,	               -- pCO2:
	DON_PCWP_FINAL                     DOUBLE PRECISION,	               -- PCWP (final) //PCWP:
	DON_PCWP_INIT                      DOUBLE PRECISION,	               -- PCWP (initial) //PCWP: (mm/Hg)
	DON_PEAK_SERUM_CREAT               DOUBLE PRECISION,	               -- Peak Serum Creatinine
	DON_PH                             DOUBLE PRECISION,	               -- Blood PH:
	DON_PO2                            DOUBLE PRECISION,	               -- Lung pO2 on 100%
	DON_PO2_DONE                           VARCHAR(1),	               -- Lung - Was pO2 done:
	DON_PO2_FIO2                       DOUBLE PRECISION,	               -- Lung pO2 on Fio2 //If Yes, Lung pO2 on FiO2 of:
	DON_PRERECOV_DIURETICS                 VARCHAR(1),	               -- Pre-Recov Meds given Donor: Diuretics
	DON_PRERECOV_MEDS                      VARCHAR(1),	               -- Prerecovery Medication
	DON_PRERECOV_STEROIDS                  VARCHAR(1),	               -- Pre-Recov Meds given Donor: Steroids
	DON_PRERECOV_T3                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T3
	DON_PRERECOV_T4                        VARCHAR(1),	               -- Pre-Recov Meds given Donor: T4
	DON_PREV_GASTRO_DISEASE                VARCHAR(1),	               -- Previous Gastrointestinal Disease
	DON_PROTEIN_URINE                      VARCHAR(1),	               -- Protein in Urine
	DON_PULM_CATH                          VARCHAR(1),	               -- Was a pulmonary artery catheter placed:
	DON_RACE                               NUMERIC(8),	-- RACE        -- Donor/s race
	DON_RACE_SRTR                         VARCHAR(10),	-- $RACEBSR    -- SRTR Donor Race
	DON_RECOV_DT                                 DATE,	-- MMDDYY      -- Recovery Date (donor to OR)
	DON_RECOV_OUT_US                       VARCHAR(1),	               -- Recovered Outside the U.S.
	DON_REF_DT                                   DATE,	-- MMDDYY      -- Referral Date
	DON_REF_FLG                            VARCHAR(1),	               -- Referral Flag
	DON_RESUSCIT_DURATION              DOUBLE PRECISION,	               -- Duration of Resuscitation
	DON_RPR_VDRL                           VARCHAR(2),	-- $SRLSTT     -- RPR-VDRL
	DON_RT_KI_BIOPSY                       VARCHAR(1),	               -- Kidney Biopsy (right)
	DON_RT_KI_GLOMER_SCLER_PCT             NUMERIC(8),	-- KGLMR       -- % Glomerulosclerosis (Right Kidney)
	DON_RT_KI_PUMP                         VARCHAR(1),	               -- Pump (Right Kidney)
	DON_RT_KI_RESIST_PRIOR_SHIP        DOUBLE PRECISION,	               -- Final Resistance Prior to Shipping (right) //Final Resistance Prior to Shipping:
	DON_RT_KI_TXFER_PUMP                   VARCHAR(1),	               -- Transferred on pump (right)://Transferred on pump:
	DON_RT_LU_BRONCHO                      NUMERIC(8),	-- ABNLBRNC    -- Right Lung Bronchoscopy:
	DON_SERUM_AMYLASE                  DOUBLE PRECISION,	               -- Serum Amylase
	DON_SGOT                           DOUBLE PRECISION,	               -- SGOT/AST
	DON_SGPT                           DOUBLE PRECISION,	               -- SGPT/ALT
	DON_SKIN_CANCER                        VARCHAR(1),	               -- Skin
	DON_SODIUM                         DOUBLE PRECISION,	               -- Serum Sodium //Last Serum Sodium Prior to Procurement:
	DON_SVR_FINAL                      DOUBLE PRECISION,	               -- SVR (final) //SVR:
	DON_SVR_INIT                       DOUBLE PRECISION,	               -- SVR (initial) //SVR: (dynes/sec/cm)^5)
	DON_TARGET_SOURCE1                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class I:
	DON_TARGET_SOURCE2                     NUMERIC(8),	-- TGTCLSRM    -- Target Source for Class II:
	DON_TATTOOS                            VARCHAR(1),	               -- Lifestyle Factors: Tattoos
	DON_TM_FOR_XMATCH                      VARCHAR(1),	               -- Is there time for crossmatch?
	DON_TOT_BILI                       DOUBLE PRECISION,	               -- Total Bilirubin
	DON_TX                             DOUBLE PRECISION,	               -- Max disposition for Donor, 5(recovered only) or 6(transplanted)
	DON_TXFUS_TERMINAL_HOSP_NUM            NUMERIC(8),	-- TRANSFUS    -- Number of transfusions during this (terminal) hospitalization:
	DON_TY                                 VARCHAR(3),	               -- Donor Type (C-deceased, L-living)
	DON_TYP_METHCLASS1                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class I
	DON_TYP_METHCLASS1_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class I:
	DON_TYP_METHCLASS2                     NUMERIC(8),	-- HLATYMTM    -- Donor/s HLA - Typing Method Class II
	DON_TYP_METHCLASS2_DT                        DATE,	-- MMDDYY      -- Date Typing Complete Class II:
	DON_USE_DOUBLE_KI                      VARCHAR(1),	               -- Use Double KI allocation, not Expanded Donor
	DON_VASODIL                            VARCHAR(1),	               -- Vasodilators
	DON_VESSELS_GT50_STENOSIS          DOUBLE PRECISION,	               -- If Abnormal, # of Vessels with > 50% Stenosis
	DON_WALL_ABNORM_GLOB                   VARCHAR(1),	               -- Wall Abnormalities //Global:
	DON_WALL_ABNORM_SEG                    VARCHAR(1),	               -- Wall Abnormalities //Segmental:
	DON_WARM_ISCH_TM_MINS              DOUBLE PRECISION,	               -- Estimated Warm Ischemic Time in minutes
	DON_WEST_NILE_NAT                      VARCHAR(2),	               -- Donor RNA Nat serology value for West Nile test
	DON_WGT_KG                         DOUBLE PRECISION,	               -- Donor/s Weight in kilograms
	PERS_ID                                NUMERIC(8),	               -- Unique Person ID for patient. Based on matches in similarity of SSN, DOB, Names and Nicknames, Gender, etc.
);
