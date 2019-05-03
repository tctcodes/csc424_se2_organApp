import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxfLiForm2 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY HBIG</label>
					<label className="text-secondary" >Anti-viral Therapy - HBIG (Hepatitis B Immune Globulin) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyHbig} onChange={this.props.onChangeTflAntivrlTherapyTyHbig}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY OTHER</label>
					<label className="text-secondary" >Anti-viral Therapy - Other, Specify (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyOther} onChange={this.props.onChangeTflAntivrlTherapyTyOther}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY VALCYTE</label>
					<label className="text-secondary" >Anti-viral Therapy - Valgancyclovir (Valcyte) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyValcyte} onChange={this.props.onChangeTflAntivrlTherapyTyValcyte}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL ANTIVRL THERAPY TY VALTREX</label>
					<label className="text-secondary" >Anti-viral Therapy - Valacyclovir (Valtrex) (11):</label>
					<select className="form-control" value={this.props.tflAntivrlTherapyTyValtrex} onChange={this.props.onChangeTflAntivrlTherapyTyValtrex}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL BMI</label>
					<label className="text-secondary" >BMI::</label>
					<input className="form-control" type="number" value={this.props.tflBmi} onChange={this.props.onChangeTflBmi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL CAD</label>
					<label className="text-secondary" >Coronary Artery Disease Since Last Follow Up (Ped. Only > 5yr Followup):</label>
					<select className="form-control" value={this.props.tflCad} onChange={this.props.onChangeTflCad}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL CARE PROV BY</label>
					<label className="text-secondary" >Follow-up Care Provided By:</label>
					<select className="form-control" value={this.props.tflCareProvBy} onChange={this.props.onChangeTflCareProvBy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Transplant Center </option>
						<option value="2">2: Non Transplant Center Specialty Physician </option>
						<option value="3">3: Primary Care Physician </option>
						<option value="4">4: Other Specify </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL CMV IGG</label>
					<label className="text-secondary" >CMV IgG:</label>
					<select className="form-control" value={this.props.tflCmvIgg} onChange={this.props.onChangeTflCmvIgg}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL CMV IGM</label>
					<label className="text-secondary" >CMV IgM:</label>
					<select className="form-control" value={this.props.tflCmvIgm} onChange={this.props.onChangeTflCmvIgm}>
						<option value="" hidden disabled selected/>
						<option value="C">C: Cannot Disclose </option>
						<option value="I">I: Indeterminate </option>
						<option value="N">N: Negative </option>
						<option value="ND">ND: Not Done </option>
						<option value="P">P: Positive </option>
						<option value="PD">PD: Pending </option>
						<option value="U">U: Unknown </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL COD</label>
					<label className="text-secondary" >Recipient/s Cause of Death:</label>
					<select className="form-control" value={this.props.tflCod} onChange={this.props.onChangeTflCod}>
						<option value="" hidden disabled selected/>
						<option value="998">998: UNKNOWN </option>
						<option value="999">999: OTHER SPECIFY </option>
						<option value="4246">4246: CARDIOVASCULAR - ARTERIAL EMBOLISM </option>
						<option value="4247">4247: CARDIOVASCULAR - PULMONARY EMBOLISM </option>
						<option value="4600">4600: GRAFT FAILURE:PRIMARY </option>
						<option value="4601">4601: GRAFT FAILURE:VASCULAR THROMBOSIS </option>
						<option value="4602">4602: GRAFT FAILURE:BILIARY TRACT COMPLICATION </option>
						<option value="4603">4603: GRAFT FAILURE:HEPATITIS </option>
						<option value="4604">4604: GRAFT FAILURE:RECURRENT DISEASE (NON-HEPATITIS) </option>
						<option value="4605">4605: GRAFT FAILURE:REJECTION </option>
						<option value="4606">4606: GRAFT FAILURE:INFECTION (NON-HEPATITIS) </option>
						<option value="4610">4610: GRAFT FAILURE:OTHER SPECIFY </option>
						<option value="4615">4615: GRAFT VS. HOST DISEASE </option>
						<option value="4620">4620: CARDIO: ARRYTHMIA </option>
						<option value="4621">4621: CARDIO: ARTERIAL OR PULMONARY EMBOLISM </option>
						<option value="4622">4622: CARDIO: HYPERKALEMIC ARREST </option>
						<option value="4623">4623: CARDIO: CONGESTIVE FAILURE (CHF) </option>
						<option value="4624">4624: CARDIO: MYOCARDIAL INFARCTION </option>
						<option value="4625">4625: CARDIO: OTHER SPECIFY </option>
						<option value="4626">4626: CARDIAC ARREST </option>
						<option value="4630">4630: CEREBROVASCULAR: EMBOLIC STROKE </option>
						<option value="4631">4631: CEREBROVASCULAR: HEMORRHAGIC STROKE </option>
						<option value="4635">4635: CEREBROVASCULAR: OTHER SPECIFY </option>
						<option value="4640">4640: PULM INSUFF OR EDEMA (EXC PNEUMONIA) (ARDS) </option>
						<option value="4645">4645: RESPIRATORY FAILURE: OTHER SPECIFY CAUSE </option>
						<option value="4650">4650: RENAL FAILURE </option>
						<option value="4660">4660: MULTIPLE ORGAN SYSTEM FAILURE </option>
						<option value="4700">4700: HEMORRHAGE: LOWER GASTROINTESTINAL </option>
						<option value="4701">4701: HEMORRHAGE: NEUROLOGICAL (BRAIN) </option>
						<option value="4702">4702: HEMORRHAGE: VARICEAL </option>
						<option value="4703">4703: HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC) </option>
						<option value="4705">4705: HEMORRHAGE: OTHER SPECIFY </option>
						<option value="4706">4706: HEMORRHAGE </option>
						<option value="4800">4800: INF: BACTERIAL PERITONITIS </option>
						<option value="4801">4801: INF: PNEUMONIA LEGIONELLA PNEUMOCYSTOSIS </option>
						<option value="4802">4802: INF: GENERALIZED SEPSIS </option>
						<option value="4803">4803: INF: FUNGAL ASPERGILLUS CRYPTOCOCCAL </option>
						<option value="4804">4804: INF: MIXED OTHER SPECIFY </option>
						<option value="4805">4805: INF: OPPORTUNISTIC </option>
						<option value="4806">4806: INF: VIRAL </option>
						<option value="4810">4810: INF: OTHER SPECIFY </option>
						<option value="4811">4811: INFECTION </option>
						<option value="4850">4850: MALIGNANCY: PRIMARY OTHER SPECIFY </option>
						<option value="4851">4851: MALIGNANCY: METASTATIC OTHER SPECIFY </option>
						<option value="4855">4855: MALIGNANCY: OTHER SPECIFY </option>
						<option value="4856">4856: MALIGNANCY </option>
						<option value="4860">4860: POST-TX LYMPHOPROLIFERATIVE DISORDER </option>
						<option value="4900">4900: OPERATIVE: OTHER SPECIFY </option>
						<option value="4910">4910: BRAIN DEAD:NEVER RECOVERED FROM SURGERY </option>
						<option value="4920">4920: SUICIDE:ATTEMPTED SUICIDE - DIED LATER </option>
						<option value="4930">4930: TRAUMA: MOTOR VEHICLE </option>
						<option value="4935">4935: TRAUMA: OTHER SPECIFY </option>
						<option value="4940">4940: DIABETES MELLITUS </option>
						<option value="4941">4941: FLUID/ELECTROLYTE DISORDER </option>
						<option value="4942">4942: ACID/BASE DISORDER </option>
						<option value="4945">4945: ACUTE PANCREATITIS </option>
						<option value="4950">4950: AIDS </option>
						<option value="4951">4951: IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC </option>
						<option value="4952">4952: IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC </option>
						<option value="4953">4953: NON-IMMUNO DRUG RELATED - HEMATOLOGIC </option>
						<option value="4954">4954: NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG </option>
						<option value="4955">4955: GRAFT FAILURE: PRIMARY NON-FUNCTION </option>
						<option value="4956">4956: GRAFT FAILURE: HEPATIC ARTERY THROMBOSIS </option>
						<option value="4957">4957: GRAFT FAILURE: OTHER VASCULAR THROMBOSIS </option>
						<option value="4958">4958: GRAFT FAILURE: DIFFUSE CHOLANGIOPATHY</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL COD2</label>
					<label className="text-secondary" >Contributory Cause of Death::</label>
					<select className="form-control" value={this.props.tflCod2} onChange={this.props.onChangeTflCod2}>
						<option value="" hidden disabled selected/>
						<option value="998">998: UNKNOWN</option>
						<option value="999">999: OTHER SPECIFY</option>
						<option value="2000">2000: TH:GRAFT FAILURE: PRIMARY FAILURE</option>
						<option value="2001">2001: TH:GRAFT FAILURE: REJECTION- HYPERACUTE</option>
						<option value="2002">2002: TH:GRAFT FAILURE: REJECTION- ACUTE</option>
						<option value="2003">2003: TH:GRAFT FAILURE: REJECTION- CHRONIC</option>
						<option value="2004">2004: TH:GRAFT FAILURE: TECHNICAL</option>
						<option value="2005">2005: TH:GRAFT FAILURE: GRAFT INFECTION</option>
						<option value="2006">2006: TH:GRAFT FAILURE: RECURRENT DISEASE</option>
						<option value="2099">2099: TH:GRAFT FAILURE: NON-SPECIFIC</option>
						<option value="2100">2100: TH:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="2101">2101: TH:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="2109">2109: TH:INFECTION: BACTERIAL- OTHER SPECIFY</option>
						<option value="2110">2110: TH:INFECTION: VIRAL- CYTOMEGALOVIRUS (CMV)</option>
						<option value="2111">2111: TH:INFECTION: VIRAL- HEPATITIS</option>
						<option value="2112">2112: TH:INFECTION: VIRAL-SEPTICEMIA</option>
						<option value="2119">2119: TH:INFECTION: VIRAL- OTHER SPECIFY</option>
						<option value="2120">2120: TH:INFECTION: FUNGAL- ASPERGILLUS</option>
						<option value="2129">2129: TH:INFECTION: FUNGAL- OTHER SPECIFY</option>
						<option value="2130">2130: TH:INFECTION: PROTOZOAL</option>
						<option value="2198">2198: TH:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="2199">2199: TH:INFECTION: OTHER SPECIFY</option>
						<option value="2200">2200: TH:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="2201">2201: TH:CARDIOVASCULAR: CARDIAC ARREST</option>
						<option value="2202">2202: TH:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="2203">2203: TH:CARDIOVASCULAR: VENTRICULAR FAILURE</option>
						<option value="2204">2204: TH:CARDIOVASCULAR: CORONARY ARTERY DISEASE</option>
						<option value="2205">2205: TH:CARDIOVASCULAR: ATHEROSCLEROSIS</option>
						<option value="2206">2206: TH:CARDIOVASCULAR: RHYTHM DISORDER</option>
						<option value="2207">2207: TH:CARDIOVASCULAR: CARDITIS</option>
						<option value="2208">2208: TH:CARDIOVASCULAR: AORTIC ANEURYSM</option>
						<option value="2209">2209: TH:CARDIOVASCULAR: CARDIOGENIC SHOCK</option>
						<option value="2299">2299: TH:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="2300">2300: TH:PULM: DEHISCENCE</option>
						<option value="2301">2301: TH:PULM: BRONCHIOLITIS</option>
						<option value="2302">2302: TH:PULM: PRIMARY PULMONARY HYPERTENSION</option>
						<option value="2303">2303: TH:PULM: PULMONARY EMBOLISM</option>
						<option value="2304">2304: TH:PULM: RESPIRATORY FAILURE</option>
						<option value="2305">2305: TH:PULM: ACUTE RESPIRATORY DISTRESS DISEASE</option>
						<option value="2399">2399: TH:PULM: OTHER SPECIFY</option>
						<option value="2400">2400: TH:CEREBROVASCULAR: STROKE</option>
						<option value="2401">2401: TH:CEREBROVASCULAR: HEMORRHAGE (NON-STROKE)</option>
						<option value="2402">2402: TH:CEREBROVASCULAR: BRAIN ANOXIA</option>
						<option value="2403">2403: TH:CEREBROVASCULAR: DEGENERATIVE BRAIN DISEASE</option>
						<option value="2499">2499: TH:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="2500">2500: TH:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="2501">2501: TH:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="2502">2502: TH:HEMORRHAGE: DISSEMINATED INTRAVAS COAGULATION</option>
						<option value="2503">2503: TH:HEMORRHAGE: POST-OPERATIVE</option>
						<option value="2504">2504: TH:HEMORRHAGE: RESPIRATORY</option>
						<option value="2599">2599: TH:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="2600">2600: TH:MALIG: METASTATIC OTHER SPECIFY</option>
						<option value="2601">2601: TH:MALIG: PRIMARY OTHER SPECIFY</option>
						<option value="2602">2602: TH:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="2603">2603: TH:MALIG: LYMPHOMA</option>
						<option value="2604">2604: TH:MALIG: SKIN</option>
						<option value="2699">2699: TH:MALIG: OTHER SPECIFY</option>
						<option value="2700">2700: TH:DIABETES MELLITUS</option>
						<option value="2701">2701: TH:INTRAOP: NOT HEMORRHAGE - OTHER SPECIFY</option>
						<option value="2702">2702: TH:PANCREATITIS</option>
						<option value="2703">2703: TH:RENAL FAILURE</option>
						<option value="2704">2704: TH:LIVER FAILURE</option>
						<option value="2705">2705: TH:MULTIPLE ORGAN FAILURE</option>
						<option value="2706">2706: TH:FLUID/ELECTROLYTE DISORDER</option>
						<option value="2707">2707: TH:ACID/BASE DISORDER</option>
						<option value="2708">2708: TH:AMYLOIDOSIS</option>
						<option value="2709">2709: TH:HEMATOLOGIC OTHER SPECIFY</option>
						<option value="2710">2710: TH:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="2711">2711: TH:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="2712">2712: TH:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="2713">2713: TH:NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="2800">2800: TH:MOTOR VEHICLE ACCIDENT</option>
						<option value="2801">2801: TH:SUICIDE</option>
						<option value="2802">2802: TH:NON-COMPLIANCE</option>
						<option value="2803">2803: TH:TRAUMA OTHER SPECIFY</option>
						<option value="3200">3200: KI:GRAFT FAILURE: PRIMARY FAILURE</option>
						<option value="3201">3201: KI:GRAFT FAILURE: REJECTION</option>
						<option value="3202">3202: KI:GRAFT FAILURE: TECHNICAL</option>
						<option value="3203">3203: KI:GRAFT FAILURE: GRAFT INFECTION</option>
						<option value="3204">3204: KI:GRAFT FAILURE: RECURRENT DISEASE</option>
						<option value="3299">3299: KI:GRAFT FAILURE: OTHER SPECIFY</option>
						<option value="3300">3300: KI:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="3301">3301: KI:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="3302">3302: KI:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="3303">3303: KI:INFECTION: FUNGAL</option>
						<option value="3304">3304: KI:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="3305">3305: KI:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="3306">3306: KI:INFECTION: URINARY TRACT</option>
						<option value="3307">3307: KI:INFECTION: VIRAL</option>
						<option value="3308">3308: KI:INFECTION: AIDS</option>
						<option value="3399">3399: KI:INFECTION: OTHER SPECIFY</option>
						<option value="3400">3400: KI:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="3401">3401: KI:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="3402">3402: KI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="3499">3499: KI:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="3500">3500: KI:CEREBROVASCULAR: STROKE</option>
						<option value="3599">3599: KI:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="3600">3600: KI:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="3601">3601: KI:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="3699">3699: KI:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="3700">3700: KI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="3701">3701: KI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="3702">3702: KI:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
						<option value="3799">3799: KI:MALIGNANCY: OTHER SPECIFY</option>
						<option value="3800">3800: KI:TRAUMA: MOTOR VEHICLE</option>
						<option value="3899">3899: KI:TRAUMA: OTHER SPECIFY</option>
						<option value="3900">3900: KI:MISCELLANEOUS: DIABETES MELLITUS</option>
						<option value="3901">3901: KI:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="3902">3902: KI:MISCELLANEOUS: PANCREATITIS</option>
						<option value="3903">3903: KI:MISCELLANEOUS: RENAL FAILURE</option>
						<option value="3904">3904: KI:MISCELLANEOUS: RESPIRATORY FAILURE</option>
						<option value="3905">3905: KI:MISCELLANEOUS: SUICIDE</option>
						<option value="3906">3906: KI:NON-COMPLIANCE</option>
						<option value="3907">3907: KI:MISC - LIVER FAILURE</option>
						<option value="3908">3908: KI:MISC - MULTIPLE SYSTEM ORGAN FAILURE (MSOF)</option>
						<option value="3909">3909: KI:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="3910">3910: KI:MISC - ACID/BASE DISORDER</option>
						<option value="3911">3911: KI:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="3912">3912: KI:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="3913">3913: KI:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="3914">3914: KI:MISC - NON-IMMUNO, NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="3915">3915: KI:PRIMARY NON-FUNCTION (GRAFT NEVER FUNCTIONED POST-TRANSPLANT)</option>
						<option value="4246">4246: LI:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
						<option value="4247">4247: LI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="4600">4600: LI:GRAFT FAILURE:PRIMARY</option>
						<option value="4601">4601: LI:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
						<option value="4602">4602: LI:GRAFT FAILURE:BILIARY TRACT COMPLICATION</option>
						<option value="4603">4603: LI:GRAFT FAILURE:HEPATITIS</option>
						<option value="4604">4604: LI:GRAFT FAILURE:RECURRENT DISEASE (NON-HEPATITIS)</option>
						<option value="4605">4605: LI:GRAFT FAILURE:REJECTION</option>
						<option value="4606">4606: LI:GRAFT FAILURE:INFECTION (NON-HEPATITIS)</option>
						<option value="4610">4610: LI:GRAFT FAILURE:OTHER SPECIFY</option>
						<option value="4615">4615: LI:GRAFT VS. HOST DISEASE</option>
						<option value="4620">4620: LI:CARDIO: ARRYTHMIA</option>
						<option value="4621">4621: LI:CARDIO: ARTERIAL OR PULMONARY EMBOLISM</option>
						<option value="4622">4622: LI:CARDIO: HYPERKALEMIC ARREST</option>
						<option value="4623">4623: LI:CARDIO: CONGESTIVE FAILURE (CHF)</option>
						<option value="4624">4624: LI:CARDIO: MYOCARDIAL INFARCTION</option>
						<option value="4625">4625: LI:CARDIO: OTHER SPECIFY</option>
						<option value="4626">4626: LI:CARDIAC ARREST</option>
						<option value="4630">4630: LI:CEREBROVASCULAR: EMBOLIC STROKE</option>
						<option value="4631">4631: LI:CEREBROVASCULAR: HEMORRHAGIC STROKE</option>
						<option value="4635">4635: LI:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="4640">4640: LI:PULM INSUFF OR EDEMA (EXC PNEUMONIA) (ARDS)</option>
						<option value="4645">4645: LI:RESPIRATORY FAILURE: OTHER SPECIFY CAUSE</option>
						<option value="4650">4650: LI:RENAL FAILURE</option>
						<option value="4660">4660: LI:MULTIPLE ORGAN SYSTEM FAILURE</option>
						<option value="4700">4700: LI:HEMORRHAGE: LOWER GASTROINTESTINAL</option>
						<option value="4701">4701: LI:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
						<option value="4702">4702: LI:HEMORRHAGE: VARICEAL</option>
						<option value="4703">4703: LI:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
						<option value="4705">4705: LI:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="4706">4706: LI:HEMORRHAGE</option>
						<option value="4800">4800: LI:INF: BACTERIAL PERITONITIS</option>
						<option value="4801">4801: LI:INF: PNEUMONIA LEGIONELLA PNEUMOCYSTOSIS</option>
						<option value="4802">4802: LI:INF: GENERALIZED SEPSIS</option>
						<option value="4803">4803: LI:INF: FUNGAL ASPERGILLUS CRYPTOCOCCAL</option>
						<option value="4804">4804: LI:INF: MIXED OTHER SPECIFY</option>
						<option value="4805">4805: LI:INF: OPPORTUNISTIC</option>
						<option value="4806">4806: LI:INF: VIRAL</option>
						<option value="4810">4810: LI:INF: OTHER SPECIFY</option>
						<option value="4811">4811: LI:INFECTION</option>
						<option value="4850">4850: LI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="4851">4851: LI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="4855">4855: LI:MALIGNANCY: OTHER SPECIFY</option>
						<option value="4856">4856: LI:MALIGNANCY</option>
						<option value="4860">4860: LI:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="4900">4900: LI:OPERATIVE: OTHER SPECIFY</option>
						<option value="4910">4910: LI:BRAIN DEAD:NEVER RECOVERED FROM SURGERY</option>
						<option value="4920">4920: LI:SUICIDE:ATTEMPTED SUICIDE - DIED LATER</option>
						<option value="4930">4930: LI:TRAUMA: MOTOR VEHICLE</option>
						<option value="4935">4935: LI:TRAUMA: OTHER SPECIFY</option>
						<option value="4940">4940: LI:DIABETES MELLITUS</option>
						<option value="4941">4941: LI:FLUID/ELECTROLYTE DISORDER</option>
						<option value="4942">4942: LI:ACID/BASE DISORDER</option>
						<option value="4945">4945: LI:ACUTE PANCREATITIS</option>
						<option value="4950">4950: LI:AIDS</option>
						<option value="4951">4951: LI:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="4952">4952: LI:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="4953">4953: LI:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="4954">4954: LI:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="4955">4955: LI:GRAFT FAILURE: PRIMARY NON-FUNCTION</option>
						<option value="4956">4956: LI:GRAFT FAILURE: HEPATIC ARTERY THROMBOSIS</option>
						<option value="4957">4957: LI:GRAFT FAILURE: OTHER VASCULAR THROMBOSIS</option>
						<option value="4958">4958: LI:GRAFT FAILURE: DIFFUSE CHOLANGIOPATHY</option>
						<option value="5200">5200: PA:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="5201">5201: PA:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="5202">5202: PA:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="5203">5203: PA:INFECTION: FUNGAL PERITONITIS</option>
						<option value="5204">5204: PA:INFECTION: FUNGAL PNEUMONIA</option>
						<option value="5205">5205: PA:INFECTION: FUNGAL SEPTICEMIA</option>
						<option value="5206">5206: PA:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="5207">5207: PA:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="5208">5208: PA:INFECTION: URINARY TRACT</option>
						<option value="5209">5209: PA:INFECTION: VIRAL CMV</option>
						<option value="5210">5210: PA:INFECTION: VIRAL NON-CMV</option>
						<option value="5211">5211: PA:INFECTION: AIDS</option>
						<option value="5299">5299: PA:INFECTION: OTHER SPECIFY</option>
						<option value="5300">5300: PA:CV: MF/CHF</option>
						<option value="5301">5301: PA:CV: VASCULAR EMBOLISM</option>
						<option value="5302">5302: PA:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="5399">5399: PA:CV: OTHER SPECIFY</option>
						<option value="5400">5400: PA:CEREBROVASCULAR: STROKE</option>
						<option value="5499">5499: PA:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="5500">5500: PA:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="5501">5501: PA:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="5599">5599: PA:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="5600">5600: PA:MALIG: METASTATIC OTHER SPECIFY</option>
						<option value="5601">5601: PA:MALIG: PRIMARY OTHER SPECIFY</option>
						<option value="5602">5602: PA:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="5699">5699: PA:MALIG: OTHER SPECIFY</option>
						<option value="5700">5700: PA:TRAUMA: MOTOR VEHICLE</option>
						<option value="5799">5799: PA:TRAUMA: OTHER SPECIFY</option>
						<option value="5800">5800: PA:MISC: DIABETES MELLITUS COMPLICATIONS</option>
						<option value="5801">5801: PA:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="5802">5802: PA:MISC: PANCREATITIS (GRAFT)</option>
						<option value="5803">5803: PA:MISC: PANCREATITIS (NATIVE)</option>
						<option value="5804">5804: PA:MISC: LIVER FAILURE</option>
						<option value="5805">5805: PA:MISC: RENAL FAILURE</option>
						<option value="5806">5806: PA:MISC: RESP FAILURE (NON-PNEUMONIA)</option>
						<option value="5807">5807: PA:MISC: ARDS</option>
						<option value="5808">5808: PA:MISC: SUICIDE</option>
						<option value="5809">5809: PA:MISC: MULTI-SYSTEM FAILURE</option>
						<option value="5810">5810: PA:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="5811">5811: PA:MISC - ACID/BASE DISORDER</option>
						<option value="5812">5812: PA:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="5813">5813: PA:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="5814">5814: PA:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="5815">5815: PA:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="6500">6500: IN:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
						<option value="6501">6501: IN:GRAFT FAILURE:RECURRENT DISEASE OTHER SPECIFY</option>
						<option value="6502">6502: IN:GRAFT FAILURE:REJECTION</option>
						<option value="6503">6503: IN:GRAFT FAILURE:INFECTION OTHER SPECIFY</option>
						<option value="6504">6504: IN:GRAFT FAILURE:PRIMARY</option>
						<option value="6548">6548: IN:GRAFT FAILURE:OTHER SPECIFY</option>
						<option value="6550">6550: IN:CARDIOVASCULAR:ARRHYTHMIA</option>
						<option value="6551">6551: IN:CARDIOVASCULAR:ARTERIAL OR PULMONARY EMBOLISM</option>
						<option value="6552">6552: IN:CARDIOVASCULAR:HYPERKALEMIC ARREST</option>
						<option value="6553">6553: IN:CARDIOVASCULAR:CONGESTIVE FAILURE(CHF)</option>
						<option value="6554">6554: IN:CARDIOVASCULAR:MYOCARDIAL INFARCTION</option>
						<option value="6555">6555: IN:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
						<option value="6556">6556: IN:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="6598">6598: IN:CARDIOVASCULAR:OTHER SPECIFY</option>
						<option value="6600">6600: IN:CEREBROVASCULAR:EMBOLIC STROKE</option>
						<option value="6601">6601: IN:CEREBROVASCULAR:HEMORRHAGIC STROKE</option>
						<option value="6648">6648: IN:CEREBROVASCULAR:OTHER SPECIFY</option>
						<option value="6650">6650: IN:PULM INSUFF OR EDEMA (EXC PNEUMONIA) Adult</option>
						<option value="6651">6651: IN:RESPIRATORY FAILURE:OTHER SPECIFY CAUSE</option>
						<option value="6700">6700: IN:HEMORRHAGE:LOWER GASTROINTESTINAL</option>
						<option value="6701">6701: IN:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
						<option value="6702">6702: IN:HEMORRHAGE:VARICEAL</option>
						<option value="6703">6703: IN:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
						<option value="6748">6748: IN:HEMORRHAGE:OTHER, SPECIFY</option>
						<option value="6750">6750: IN:INFECTION:BACTERIAL PERITONITIS</option>
						<option value="6751">6751: IN:INFECTION:BACTERIAL PNEUMONIA</option>
						<option value="6752">6752: IN:INFECTION:BACTERIAL SEPTICEMIA</option>
						<option value="6753">6753: IN:INFECTION:FUNGAL PERITONITIS</option>
						<option value="6754">6754: IN:INFECTION:FUNGAL PNEUMONIA</option>
						<option value="6755">6755: IN:INFECTION:FUNGAL SEPTICEMIA</option>
						<option value="6756">6756: IN:INFECTION:MIXED OTHER SPECIFY</option>
						<option value="6757">6757: IN:INFECTION:OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="6758">6758: IN:INFECTION:URINARY TRACT</option>
						<option value="6759">6759: IN:INFECTION:VIRAL CMV</option>
						<option value="6760">6760: IN:INFECTION:VIRAL NON-CMV</option>
						<option value="6761">6761: IN:INFECTION:AIDS</option>
						<option value="6798">6798: IN:INFECTION:OTHER SPECIFY</option>
						<option value="6800">6800: IN:MALIGNANCY:PRIMARY OTHER SPECIFY</option>
						<option value="6801">6801: IN:MALIGNANCY:METASTATIC OTHER SPECIFY</option>
						<option value="6848">6848: IN:MALIGNANCY:OTHER SPECIFY: (IE., LEUKEMIA)</option>
						<option value="6850">6850: IN:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="6851">6851: IN:OPERATIVE: OTHER SPECIFY</option>
						<option value="6852">6852: IN:BRAIN DEAD: NEVER RECOVERED FROM SURGERY</option>
						<option value="6853">6853: IN:SUICIDE:ATTEMPTED SUICIDE-DIED LATER</option>
						<option value="6854">6854: IN:TRAUMA: MOTOR VEHICLE</option>
						<option value="6855">6855: IN:TRAUMA: OTHER SPECIFY</option>
						<option value="6856">6856: IN:PANCREATITIS (GRAFT)</option>
						<option value="6857">6857: IN:PANCREATITIS (NATIVE)</option>
						<option value="6858">6858: IN:RENAL FAILURE</option>
						<option value="6859">6859: IN:MULTIPLE ORGAN SYSTEM FAILURE</option>
						<option value="6860">6860: IN:GRAFT VS HOST DISEASE</option>
						<option value="6861">6861: IN:FLUID/ELECTROLYTE DISORDER</option>
						<option value="6862">6862: IN:ACID/BASE DISORDER</option>
						<option value="6863">6863: IN:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="6864">6864: IN:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="6865">6865: IN:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="6866">6866: IN:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="7200">7200: KP:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="7201">7201: KP:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="7202">7202: KP:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="7203">7203: KP:INFECTION: FUNGAL PERITONITIS</option>
						<option value="7204">7204: KP:INFECTION: FUNGAL PNEUMONIA</option>
						<option value="7205">7205: KP:INFECTION: FUNGAL SEPTICEMIA</option>
						<option value="7206">7206: KP:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="7207">7207: KP:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="7208">7208: KP:INFECTION: URINARY TRACT</option>
						<option value="7209">7209: KP:INFECTION: VIRAL CMV</option>
						<option value="7210">7210: KP:INFECTION: VIRAL NON-CMV</option>
						<option value="7211">7211: KP:INFECTION: AIDS</option>
						<option value="7212">7212: KP:INFECTION: OTHER SPECIFY</option>
						<option value="7213">7213: KP:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="7214">7214: KP:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="7215">7215: KP:CARDIOVASCULAR: VASCULAR EMBOLISM</option>
						<option value="7216">7216: KP:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="7217">7217: KP:CEREBROVASCULAR: STROKE</option>
						<option value="7218">7218: KP:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="7219">7219: KP:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="7220">7220: KP:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="7221">7221: KP:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="7222">7222: KP:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="7223">7223: KP:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="7224">7224: KP:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
						<option value="7225">7225: KP:MALIGNANCY: OTHER SPECIFY</option>
						<option value="7226">7226: KP:TRAUMA: MOTOR VEHICLE</option>
						<option value="7227">7227: KP:TRAUMA: OTHER SPECIFY</option>
						<option value="7228">7228: KP:MISCELLANEOUS: DIABETES MELLITUS</option>
						<option value="7229">7229: KP:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="7230">7230: KP:MISC: PANCREATITIS (GRAFT)</option>
						<option value="7231">7231: KP:MISC: PANCREATITIS (NATIVE)</option>
						<option value="7232">7232: KP:MISC: LIVER FAILURE</option>
						<option value="7233">7233: KP:MISC: ARDS</option>
						<option value="7234">7234: KP:MISCELLANEOUS: INTRAOPERATIVE OTHER SPECIFY</option>
						<option value="7235">7235: KP:MISCELLANEOUS: RENAL FAILURE</option>
						<option value="7236">7236: KP:MISCELLANEOUS: RESPIRATORY FAILURE</option>
						<option value="7237">7237: KP:MISCELLANEOUS: SUICIDE</option>
						<option value="7238">7238: KP:MISC: MULTI-SYSTEM FAILURE</option>
						<option value="7239">7239: KP:NON-COMPLIANCE</option>
						<option value="7240">7240: KP:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="7241">7241: KP:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="7242">7242: KP:MISC - ACID/BASE DISORDER</option>
						<option value="7243">7243: KP:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="7244">7244: KP:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="7245">7245: KP:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="7246">7246: KP:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL COD3</label>
					<label className="text-secondary" >Contributory Cause of Death::</label>
					<select className="form-control" value={this.props.tflCod3} onChange={this.props.onChangeTflCod3}>
						<option value="" hidden disabled selected/>
						<option value="998">998: UNKNOWN</option>
						<option value="999">999: OTHER SPECIFY</option>
						<option value="2000">2000: TH:GRAFT FAILURE: PRIMARY FAILURE</option>
						<option value="2001">2001: TH:GRAFT FAILURE: REJECTION- HYPERACUTE</option>
						<option value="2002">2002: TH:GRAFT FAILURE: REJECTION- ACUTE</option>
						<option value="2003">2003: TH:GRAFT FAILURE: REJECTION- CHRONIC</option>
						<option value="2004">2004: TH:GRAFT FAILURE: TECHNICAL</option>
						<option value="2005">2005: TH:GRAFT FAILURE: GRAFT INFECTION</option>
						<option value="2006">2006: TH:GRAFT FAILURE: RECURRENT DISEASE</option>
						<option value="2099">2099: TH:GRAFT FAILURE: NON-SPECIFIC</option>
						<option value="2100">2100: TH:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="2101">2101: TH:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="2109">2109: TH:INFECTION: BACTERIAL- OTHER SPECIFY</option>
						<option value="2110">2110: TH:INFECTION: VIRAL- CYTOMEGALOVIRUS (CMV)</option>
						<option value="2111">2111: TH:INFECTION: VIRAL- HEPATITIS</option>
						<option value="2112">2112: TH:INFECTION: VIRAL-SEPTICEMIA</option>
						<option value="2119">2119: TH:INFECTION: VIRAL- OTHER SPECIFY</option>
						<option value="2120">2120: TH:INFECTION: FUNGAL- ASPERGILLUS</option>
						<option value="2129">2129: TH:INFECTION: FUNGAL- OTHER SPECIFY</option>
						<option value="2130">2130: TH:INFECTION: PROTOZOAL</option>
						<option value="2198">2198: TH:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="2199">2199: TH:INFECTION: OTHER SPECIFY</option>
						<option value="2200">2200: TH:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="2201">2201: TH:CARDIOVASCULAR: CARDIAC ARREST</option>
						<option value="2202">2202: TH:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="2203">2203: TH:CARDIOVASCULAR: VENTRICULAR FAILURE</option>
						<option value="2204">2204: TH:CARDIOVASCULAR: CORONARY ARTERY DISEASE</option>
						<option value="2205">2205: TH:CARDIOVASCULAR: ATHEROSCLEROSIS</option>
						<option value="2206">2206: TH:CARDIOVASCULAR: RHYTHM DISORDER</option>
						<option value="2207">2207: TH:CARDIOVASCULAR: CARDITIS</option>
						<option value="2208">2208: TH:CARDIOVASCULAR: AORTIC ANEURYSM</option>
						<option value="2209">2209: TH:CARDIOVASCULAR: CARDIOGENIC SHOCK</option>
						<option value="2299">2299: TH:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="2300">2300: TH:PULM: DEHISCENCE</option>
						<option value="2301">2301: TH:PULM: BRONCHIOLITIS</option>
						<option value="2302">2302: TH:PULM: PRIMARY PULMONARY HYPERTENSION</option>
						<option value="2303">2303: TH:PULM: PULMONARY EMBOLISM</option>
						<option value="2304">2304: TH:PULM: RESPIRATORY FAILURE</option>
						<option value="2305">2305: TH:PULM: ACUTE RESPIRATORY DISTRESS DISEASE</option>
						<option value="2399">2399: TH:PULM: OTHER SPECIFY</option>
						<option value="2400">2400: TH:CEREBROVASCULAR: STROKE</option>
						<option value="2401">2401: TH:CEREBROVASCULAR: HEMORRHAGE (NON-STROKE)</option>
						<option value="2402">2402: TH:CEREBROVASCULAR: BRAIN ANOXIA</option>
						<option value="2403">2403: TH:CEREBROVASCULAR: DEGENERATIVE BRAIN DISEASE</option>
						<option value="2499">2499: TH:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="2500">2500: TH:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="2501">2501: TH:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="2502">2502: TH:HEMORRHAGE: DISSEMINATED INTRAVAS COAGULATION</option>
						<option value="2503">2503: TH:HEMORRHAGE: POST-OPERATIVE</option>
						<option value="2504">2504: TH:HEMORRHAGE: RESPIRATORY</option>
						<option value="2599">2599: TH:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="2600">2600: TH:MALIG: METASTATIC OTHER SPECIFY</option>
						<option value="2601">2601: TH:MALIG: PRIMARY OTHER SPECIFY</option>
						<option value="2602">2602: TH:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="2603">2603: TH:MALIG: LYMPHOMA</option>
						<option value="2604">2604: TH:MALIG: SKIN</option>
						<option value="2699">2699: TH:MALIG: OTHER SPECIFY</option>
						<option value="2700">2700: TH:DIABETES MELLITUS</option>
						<option value="2701">2701: TH:INTRAOP: NOT HEMORRHAGE - OTHER SPECIFY</option>
						<option value="2702">2702: TH:PANCREATITIS</option>
						<option value="2703">2703: TH:RENAL FAILURE</option>
						<option value="2704">2704: TH:LIVER FAILURE</option>
						<option value="2705">2705: TH:MULTIPLE ORGAN FAILURE</option>
						<option value="2706">2706: TH:FLUID/ELECTROLYTE DISORDER</option>
						<option value="2707">2707: TH:ACID/BASE DISORDER</option>
						<option value="2708">2708: TH:AMYLOIDOSIS</option>
						<option value="2709">2709: TH:HEMATOLOGIC OTHER SPECIFY</option>
						<option value="2710">2710: TH:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="2711">2711: TH:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="2712">2712: TH:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="2713">2713: TH:NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="2800">2800: TH:MOTOR VEHICLE ACCIDENT</option>
						<option value="2801">2801: TH:SUICIDE</option>
						<option value="2802">2802: TH:NON-COMPLIANCE</option>
						<option value="2803">2803: TH:TRAUMA OTHER SPECIFY</option>
						<option value="3200">3200: KI:GRAFT FAILURE: PRIMARY FAILURE</option>
						<option value="3201">3201: KI:GRAFT FAILURE: REJECTION</option>
						<option value="3202">3202: KI:GRAFT FAILURE: TECHNICAL</option>
						<option value="3203">3203: KI:GRAFT FAILURE: GRAFT INFECTION</option>
						<option value="3204">3204: KI:GRAFT FAILURE: RECURRENT DISEASE</option>
						<option value="3299">3299: KI:GRAFT FAILURE: OTHER SPECIFY</option>
						<option value="3300">3300: KI:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="3301">3301: KI:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="3302">3302: KI:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="3303">3303: KI:INFECTION: FUNGAL</option>
						<option value="3304">3304: KI:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="3305">3305: KI:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="3306">3306: KI:INFECTION: URINARY TRACT</option>
						<option value="3307">3307: KI:INFECTION: VIRAL</option>
						<option value="3308">3308: KI:INFECTION: AIDS</option>
						<option value="3399">3399: KI:INFECTION: OTHER SPECIFY</option>
						<option value="3400">3400: KI:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="3401">3401: KI:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="3402">3402: KI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="3499">3499: KI:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="3500">3500: KI:CEREBROVASCULAR: STROKE</option>
						<option value="3599">3599: KI:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="3600">3600: KI:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="3601">3601: KI:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="3699">3699: KI:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="3700">3700: KI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="3701">3701: KI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="3702">3702: KI:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
						<option value="3799">3799: KI:MALIGNANCY: OTHER SPECIFY</option>
						<option value="3800">3800: KI:TRAUMA: MOTOR VEHICLE</option>
						<option value="3899">3899: KI:TRAUMA: OTHER SPECIFY</option>
						<option value="3900">3900: KI:MISCELLANEOUS: DIABETES MELLITUS</option>
						<option value="3901">3901: KI:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="3902">3902: KI:MISCELLANEOUS: PANCREATITIS</option>
						<option value="3903">3903: KI:MISCELLANEOUS: RENAL FAILURE</option>
						<option value="3904">3904: KI:MISCELLANEOUS: RESPIRATORY FAILURE</option>
						<option value="3905">3905: KI:MISCELLANEOUS: SUICIDE</option>
						<option value="3906">3906: KI:NON-COMPLIANCE</option>
						<option value="3907">3907: KI:MISC - LIVER FAILURE</option>
						<option value="3908">3908: KI:MISC - MULTIPLE SYSTEM ORGAN FAILURE (MSOF)</option>
						<option value="3909">3909: KI:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="3910">3910: KI:MISC - ACID/BASE DISORDER</option>
						<option value="3911">3911: KI:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="3912">3912: KI:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="3913">3913: KI:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="3914">3914: KI:MISC - NON-IMMUNO, NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="3915">3915: KI:PRIMARY NON-FUNCTION (GRAFT NEVER FUNCTIONED POST-TRANSPLANT)</option>
						<option value="4246">4246: LI:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
						<option value="4247">4247: LI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="4600">4600: LI:GRAFT FAILURE:PRIMARY</option>
						<option value="4601">4601: LI:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
						<option value="4602">4602: LI:GRAFT FAILURE:BILIARY TRACT COMPLICATION</option>
						<option value="4603">4603: LI:GRAFT FAILURE:HEPATITIS</option>
						<option value="4604">4604: LI:GRAFT FAILURE:RECURRENT DISEASE (NON-HEPATITIS)</option>
						<option value="4605">4605: LI:GRAFT FAILURE:REJECTION</option>
						<option value="4606">4606: LI:GRAFT FAILURE:INFECTION (NON-HEPATITIS)</option>
						<option value="4610">4610: LI:GRAFT FAILURE:OTHER SPECIFY</option>
						<option value="4615">4615: LI:GRAFT VS. HOST DISEASE</option>
						<option value="4620">4620: LI:CARDIO: ARRYTHMIA</option>
						<option value="4621">4621: LI:CARDIO: ARTERIAL OR PULMONARY EMBOLISM</option>
						<option value="4622">4622: LI:CARDIO: HYPERKALEMIC ARREST</option>
						<option value="4623">4623: LI:CARDIO: CONGESTIVE FAILURE (CHF)</option>
						<option value="4624">4624: LI:CARDIO: MYOCARDIAL INFARCTION</option>
						<option value="4625">4625: LI:CARDIO: OTHER SPECIFY</option>
						<option value="4626">4626: LI:CARDIAC ARREST</option>
						<option value="4630">4630: LI:CEREBROVASCULAR: EMBOLIC STROKE</option>
						<option value="4631">4631: LI:CEREBROVASCULAR: HEMORRHAGIC STROKE</option>
						<option value="4635">4635: LI:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="4640">4640: LI:PULM INSUFF OR EDEMA (EXC PNEUMONIA) (ARDS)</option>
						<option value="4645">4645: LI:RESPIRATORY FAILURE: OTHER SPECIFY CAUSE</option>
						<option value="4650">4650: LI:RENAL FAILURE</option>
						<option value="4660">4660: LI:MULTIPLE ORGAN SYSTEM FAILURE</option>
						<option value="4700">4700: LI:HEMORRHAGE: LOWER GASTROINTESTINAL</option>
						<option value="4701">4701: LI:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
						<option value="4702">4702: LI:HEMORRHAGE: VARICEAL</option>
						<option value="4703">4703: LI:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
						<option value="4705">4705: LI:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="4706">4706: LI:HEMORRHAGE</option>
						<option value="4800">4800: LI:INF: BACTERIAL PERITONITIS</option>
						<option value="4801">4801: LI:INF: PNEUMONIA LEGIONELLA PNEUMOCYSTOSIS</option>
						<option value="4802">4802: LI:INF: GENERALIZED SEPSIS</option>
						<option value="4803">4803: LI:INF: FUNGAL ASPERGILLUS CRYPTOCOCCAL</option>
						<option value="4804">4804: LI:INF: MIXED OTHER SPECIFY</option>
						<option value="4805">4805: LI:INF: OPPORTUNISTIC</option>
						<option value="4806">4806: LI:INF: VIRAL</option>
						<option value="4810">4810: LI:INF: OTHER SPECIFY</option>
						<option value="4811">4811: LI:INFECTION</option>
						<option value="4850">4850: LI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="4851">4851: LI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="4855">4855: LI:MALIGNANCY: OTHER SPECIFY</option>
						<option value="4856">4856: LI:MALIGNANCY</option>
						<option value="4860">4860: LI:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="4900">4900: LI:OPERATIVE: OTHER SPECIFY</option>
						<option value="4910">4910: LI:BRAIN DEAD:NEVER RECOVERED FROM SURGERY</option>
						<option value="4920">4920: LI:SUICIDE:ATTEMPTED SUICIDE - DIED LATER</option>
						<option value="4930">4930: LI:TRAUMA: MOTOR VEHICLE</option>
						<option value="4935">4935: LI:TRAUMA: OTHER SPECIFY</option>
						<option value="4940">4940: LI:DIABETES MELLITUS</option>
						<option value="4941">4941: LI:FLUID/ELECTROLYTE DISORDER</option>
						<option value="4942">4942: LI:ACID/BASE DISORDER</option>
						<option value="4945">4945: LI:ACUTE PANCREATITIS</option>
						<option value="4950">4950: LI:AIDS</option>
						<option value="4951">4951: LI:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="4952">4952: LI:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="4953">4953: LI:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="4954">4954: LI:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="4955">4955: LI:GRAFT FAILURE: PRIMARY NON-FUNCTION</option>
						<option value="4956">4956: LI:GRAFT FAILURE: HEPATIC ARTERY THROMBOSIS</option>
						<option value="4957">4957: LI:GRAFT FAILURE: OTHER VASCULAR THROMBOSIS</option>
						<option value="4958">4958: LI:GRAFT FAILURE: DIFFUSE CHOLANGIOPATHY</option>
						<option value="5200">5200: PA:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="5201">5201: PA:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="5202">5202: PA:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="5203">5203: PA:INFECTION: FUNGAL PERITONITIS</option>
						<option value="5204">5204: PA:INFECTION: FUNGAL PNEUMONIA</option>
						<option value="5205">5205: PA:INFECTION: FUNGAL SEPTICEMIA</option>
						<option value="5206">5206: PA:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="5207">5207: PA:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="5208">5208: PA:INFECTION: URINARY TRACT</option>
						<option value="5209">5209: PA:INFECTION: VIRAL CMV</option>
						<option value="5210">5210: PA:INFECTION: VIRAL NON-CMV</option>
						<option value="5211">5211: PA:INFECTION: AIDS</option>
						<option value="5299">5299: PA:INFECTION: OTHER SPECIFY</option>
						<option value="5300">5300: PA:CV: MF/CHF</option>
						<option value="5301">5301: PA:CV: VASCULAR EMBOLISM</option>
						<option value="5302">5302: PA:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="5399">5399: PA:CV: OTHER SPECIFY</option>
						<option value="5400">5400: PA:CEREBROVASCULAR: STROKE</option>
						<option value="5499">5499: PA:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="5500">5500: PA:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="5501">5501: PA:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="5599">5599: PA:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="5600">5600: PA:MALIG: METASTATIC OTHER SPECIFY</option>
						<option value="5601">5601: PA:MALIG: PRIMARY OTHER SPECIFY</option>
						<option value="5602">5602: PA:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="5699">5699: PA:MALIG: OTHER SPECIFY</option>
						<option value="5700">5700: PA:TRAUMA: MOTOR VEHICLE</option>
						<option value="5799">5799: PA:TRAUMA: OTHER SPECIFY</option>
						<option value="5800">5800: PA:MISC: DIABETES MELLITUS COMPLICATIONS</option>
						<option value="5801">5801: PA:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="5802">5802: PA:MISC: PANCREATITIS (GRAFT)</option>
						<option value="5803">5803: PA:MISC: PANCREATITIS (NATIVE)</option>
						<option value="5804">5804: PA:MISC: LIVER FAILURE</option>
						<option value="5805">5805: PA:MISC: RENAL FAILURE</option>
						<option value="5806">5806: PA:MISC: RESP FAILURE (NON-PNEUMONIA)</option>
						<option value="5807">5807: PA:MISC: ARDS</option>
						<option value="5808">5808: PA:MISC: SUICIDE</option>
						<option value="5809">5809: PA:MISC: MULTI-SYSTEM FAILURE</option>
						<option value="5810">5810: PA:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="5811">5811: PA:MISC - ACID/BASE DISORDER</option>
						<option value="5812">5812: PA:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="5813">5813: PA:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="5814">5814: PA:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="5815">5815: PA:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="6500">6500: IN:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
						<option value="6501">6501: IN:GRAFT FAILURE:RECURRENT DISEASE OTHER SPECIFY</option>
						<option value="6502">6502: IN:GRAFT FAILURE:REJECTION</option>
						<option value="6503">6503: IN:GRAFT FAILURE:INFECTION OTHER SPECIFY</option>
						<option value="6504">6504: IN:GRAFT FAILURE:PRIMARY</option>
						<option value="6548">6548: IN:GRAFT FAILURE:OTHER SPECIFY</option>
						<option value="6550">6550: IN:CARDIOVASCULAR:ARRHYTHMIA</option>
						<option value="6551">6551: IN:CARDIOVASCULAR:ARTERIAL OR PULMONARY EMBOLISM</option>
						<option value="6552">6552: IN:CARDIOVASCULAR:HYPERKALEMIC ARREST</option>
						<option value="6553">6553: IN:CARDIOVASCULAR:CONGESTIVE FAILURE(CHF)</option>
						<option value="6554">6554: IN:CARDIOVASCULAR:MYOCARDIAL INFARCTION</option>
						<option value="6555">6555: IN:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
						<option value="6556">6556: IN:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="6598">6598: IN:CARDIOVASCULAR:OTHER SPECIFY</option>
						<option value="6600">6600: IN:CEREBROVASCULAR:EMBOLIC STROKE</option>
						<option value="6601">6601: IN:CEREBROVASCULAR:HEMORRHAGIC STROKE</option>
						<option value="6648">6648: IN:CEREBROVASCULAR:OTHER SPECIFY</option>
						<option value="6650">6650: IN:PULM INSUFF OR EDEMA (EXC PNEUMONIA) Adult</option>
						<option value="6651">6651: IN:RESPIRATORY FAILURE:OTHER SPECIFY CAUSE</option>
						<option value="6700">6700: IN:HEMORRHAGE:LOWER GASTROINTESTINAL</option>
						<option value="6701">6701: IN:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
						<option value="6702">6702: IN:HEMORRHAGE:VARICEAL</option>
						<option value="6703">6703: IN:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
						<option value="6748">6748: IN:HEMORRHAGE:OTHER, SPECIFY</option>
						<option value="6750">6750: IN:INFECTION:BACTERIAL PERITONITIS</option>
						<option value="6751">6751: IN:INFECTION:BACTERIAL PNEUMONIA</option>
						<option value="6752">6752: IN:INFECTION:BACTERIAL SEPTICEMIA</option>
						<option value="6753">6753: IN:INFECTION:FUNGAL PERITONITIS</option>
						<option value="6754">6754: IN:INFECTION:FUNGAL PNEUMONIA</option>
						<option value="6755">6755: IN:INFECTION:FUNGAL SEPTICEMIA</option>
						<option value="6756">6756: IN:INFECTION:MIXED OTHER SPECIFY</option>
						<option value="6757">6757: IN:INFECTION:OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="6758">6758: IN:INFECTION:URINARY TRACT</option>
						<option value="6759">6759: IN:INFECTION:VIRAL CMV</option>
						<option value="6760">6760: IN:INFECTION:VIRAL NON-CMV</option>
						<option value="6761">6761: IN:INFECTION:AIDS</option>
						<option value="6798">6798: IN:INFECTION:OTHER SPECIFY</option>
						<option value="6800">6800: IN:MALIGNANCY:PRIMARY OTHER SPECIFY</option>
						<option value="6801">6801: IN:MALIGNANCY:METASTATIC OTHER SPECIFY</option>
						<option value="6848">6848: IN:MALIGNANCY:OTHER SPECIFY: (IE., LEUKEMIA)</option>
						<option value="6850">6850: IN:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
						<option value="6851">6851: IN:OPERATIVE: OTHER SPECIFY</option>
						<option value="6852">6852: IN:BRAIN DEAD: NEVER RECOVERED FROM SURGERY</option>
						<option value="6853">6853: IN:SUICIDE:ATTEMPTED SUICIDE-DIED LATER</option>
						<option value="6854">6854: IN:TRAUMA: MOTOR VEHICLE</option>
						<option value="6855">6855: IN:TRAUMA: OTHER SPECIFY</option>
						<option value="6856">6856: IN:PANCREATITIS (GRAFT)</option>
						<option value="6857">6857: IN:PANCREATITIS (NATIVE)</option>
						<option value="6858">6858: IN:RENAL FAILURE</option>
						<option value="6859">6859: IN:MULTIPLE ORGAN SYSTEM FAILURE</option>
						<option value="6860">6860: IN:GRAFT VS HOST DISEASE</option>
						<option value="6861">6861: IN:FLUID/ELECTROLYTE DISORDER</option>
						<option value="6862">6862: IN:ACID/BASE DISORDER</option>
						<option value="6863">6863: IN:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
						<option value="6864">6864: IN:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="6865">6865: IN:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="6866">6866: IN:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
						<option value="7200">7200: KP:INFECTION: BACTERIAL PERITONITIS</option>
						<option value="7201">7201: KP:INFECTION: BACTERIAL PNEUMONIA</option>
						<option value="7202">7202: KP:INFECTION: BACTERIAL SEPTICEMIA</option>
						<option value="7203">7203: KP:INFECTION: FUNGAL PERITONITIS</option>
						<option value="7204">7204: KP:INFECTION: FUNGAL PNEUMONIA</option>
						<option value="7205">7205: KP:INFECTION: FUNGAL SEPTICEMIA</option>
						<option value="7206">7206: KP:INFECTION: MIXED OTHER SPECIFY</option>
						<option value="7207">7207: KP:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
						<option value="7208">7208: KP:INFECTION: URINARY TRACT</option>
						<option value="7209">7209: KP:INFECTION: VIRAL CMV</option>
						<option value="7210">7210: KP:INFECTION: VIRAL NON-CMV</option>
						<option value="7211">7211: KP:INFECTION: AIDS</option>
						<option value="7212">7212: KP:INFECTION: OTHER SPECIFY</option>
						<option value="7213">7213: KP:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
						<option value="7214">7214: KP:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
						<option value="7215">7215: KP:CARDIOVASCULAR: VASCULAR EMBOLISM</option>
						<option value="7216">7216: KP:CARDIOVASCULAR: OTHER SPECIFY</option>
						<option value="7217">7217: KP:CEREBROVASCULAR: STROKE</option>
						<option value="7218">7218: KP:CEREBROVASCULAR: OTHER SPECIFY</option>
						<option value="7219">7219: KP:HEMORRHAGE: GASTROINTESTINAL</option>
						<option value="7220">7220: KP:HEMORRHAGE: INTRAOPERATIVE</option>
						<option value="7221">7221: KP:HEMORRHAGE: OTHER SPECIFY</option>
						<option value="7222">7222: KP:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
						<option value="7223">7223: KP:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
						<option value="7224">7224: KP:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
						<option value="7225">7225: KP:MALIGNANCY: OTHER SPECIFY</option>
						<option value="7226">7226: KP:TRAUMA: MOTOR VEHICLE</option>
						<option value="7227">7227: KP:TRAUMA: OTHER SPECIFY</option>
						<option value="7228">7228: KP:MISCELLANEOUS: DIABETES MELLITUS</option>
						<option value="7229">7229: KP:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
						<option value="7230">7230: KP:MISC: PANCREATITIS (GRAFT)</option>
						<option value="7231">7231: KP:MISC: PANCREATITIS (NATIVE)</option>
						<option value="7232">7232: KP:MISC: LIVER FAILURE</option>
						<option value="7233">7233: KP:MISC: ARDS</option>
						<option value="7234">7234: KP:MISCELLANEOUS: INTRAOPERATIVE OTHER SPECIFY</option>
						<option value="7235">7235: KP:MISCELLANEOUS: RENAL FAILURE</option>
						<option value="7236">7236: KP:MISCELLANEOUS: RESPIRATORY FAILURE</option>
						<option value="7237">7237: KP:MISCELLANEOUS: SUICIDE</option>
						<option value="7238">7238: KP:MISC: MULTI-SYSTEM FAILURE</option>
						<option value="7239">7239: KP:NON-COMPLIANCE</option>
						<option value="7240">7240: KP:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
						<option value="7241">7241: KP:MISC - FLUID/ELECTROLYTE DISORDER</option>
						<option value="7242">7242: KP:MISC - ACID/BASE DISORDER</option>
						<option value="7243">7243: KP:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="7244">7244: KP:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
						<option value="7245">7245: KP:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
						<option value="7246">7246: KP:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL COGNITIVE DEVELOP</label>
					<label className="text-secondary" >Cognitive Development (Ped Only):</label>
					<select className="form-control" value={this.props.tflCognitiveDevelop} onChange={this.props.onChangeTflCognitiveDevelop}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Definite Cognitive delay/impairment</option>
						<option value="2">2: Probable Cognitive delay/impairment</option>
						<option value="3">3: Questionable Cognitive delay/impairment</option>
						<option value="4">4: No Cognitive delay/impairment</option>
						<option value="998">998: Not Assessed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL CREAT</label>
					<label className="text-secondary" >Most Recent Serum Creatinine:</label>
					<input className="form-control" type="number" value={this.props.tflCreat} onChange={this.props.onChangeTflCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL DIAB DURING FOL</label>
					<label className="text-secondary" >Diabetes during the follow-up period::</label>
					<select className="form-control" value={this.props.tflDiabDuringFol} onChange={this.props.onChangeTflDiabDuringFol}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL EMPL STAT PRE04</label>
					<label className="text-secondary" >Patient/s Employment Status - Pre-6/30/2004:</label>
					<select className="form-control" value={this.props.tflEmplStatPre04} onChange={this.props.onChangeTflEmplStatPre04}>
						<option value="" hidden disabled selected/>
						<option value="1">1: WORKING FULL TIME</option>
						<option value="2">2: WORKING PART TIME BY CHOICE</option>
						<option value="3">3: WORKING PART TIME DUE TO DISEASE</option>
						<option value="4">4: WORKING PART TIME REASON UNKNOWN</option>
						<option value="5">5: NOT WORKING BY CHOICE</option>
						<option value="6">6: NOT WORKING DUE TO DISEASE</option>
						<option value="7">7: NOT WORKING UNABLE TO FIND EMPLOYMENT</option>
						<option value="8">8: NOT WORKING REASON UNKNOWN</option>
						<option value="9">9: RETIRED</option>
						<option value="996">996: PATIENT {"<"} 5 YEARS OLD</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL BILIARY</label>
					<label className="text-secondary" >Biliary Tract Complication:</label>
					<select className="form-control" value={this.props.tflFailBiliary} onChange={this.props.onChangeTflFailBiliary}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL DT</label>
					<label className="text-secondary" >Date of Graft Failure:</label>
					<input className="form-control" type="datetime-local" value={this.props.tflFailDt} onChange={this.props.onChangeTflFailDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL HEP DENOVO</label>
					<label className="text-secondary" >Hepatitis: DeNovo:</label>
					<select className="form-control" value={this.props.tflFailHepDenovo} onChange={this.props.onChangeTflFailHepDenovo}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL HEP RECUR</label>
					<label className="text-secondary" >Hepatitis: Recurrent:</label>
					<select className="form-control" value={this.props.tflFailHepRecur} onChange={this.props.onChangeTflFailHepRecur}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL INFECT</label>
					<label className="text-secondary" >Infection:</label>
					<select className="form-control" value={this.props.tflFailInfect} onChange={this.props.onChangeTflFailInfect}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL PRIME GRAFT FAIL</label>
					<label className="text-secondary" >Primary Graft Failure:</label>
					<select className="form-control" value={this.props.tflFailPrimeGraftFail} onChange={this.props.onChangeTflFailPrimeGraftFail}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL PX NONCOMP</label>
					<label className="text-secondary" >Patient Noncompliance::</label>
					<select className="form-control" value={this.props.tflFailPxNoncomp} onChange={this.props.onChangeTflFailPxNoncomp}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL RECUR DISEASE</label>
					<label className="text-secondary" >Recurrent Disease: non-Hepatitis:</label>
					<select className="form-control" value={this.props.tflFailRecurDisease} onChange={this.props.onChangeTflFailRecurDisease}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	tflAntivrlTherapyTyHbig: select.makeSelectTflAntivrlTherapyTyHbig(),
	tflAntivrlTherapyTyOther: select.makeSelectTflAntivrlTherapyTyOther(),
	tflAntivrlTherapyTyValcyte: select.makeSelectTflAntivrlTherapyTyValcyte(),
	tflAntivrlTherapyTyValtrex: select.makeSelectTflAntivrlTherapyTyValtrex(),
	tflBmi: select.makeSelectTflBmi(),
	tflCad: select.makeSelectTflCad(),
	tflCareProvBy: select.makeSelectTflCareProvBy(),
	tflCmvIgg: select.makeSelectTflCmvIgg(),
	tflCmvIgm: select.makeSelectTflCmvIgm(),
	tflCod: select.makeSelectTflCod(),
	tflCod2: select.makeSelectTflCod2(),
	tflCod3: select.makeSelectTflCod3(),
	tflCognitiveDevelop: select.makeSelectTflCognitiveDevelop(),
	tflCreat: select.makeSelectTflCreat(),
	tflDiabDuringFol: select.makeSelectTflDiabDuringFol(),
	tflEmplStatPre04: select.makeSelectTflEmplStatPre04(),
	tflFailBiliary: select.makeSelectTflFailBiliary(),
	tflFailDt: select.makeSelectTflFailDt(),
	tflFailHepDenovo: select.makeSelectTflFailHepDenovo(),
	tflFailHepRecur: select.makeSelectTflFailHepRecur(),
	tflFailInfect: select.makeSelectTflFailInfect(),
	tflFailPrimeGraftFail: select.makeSelectTflFailPrimeGraftFail(),
	tflFailPxNoncomp: select.makeSelectTflFailPxNoncomp(),
	tflFailRecurDisease: select.makeSelectTflFailRecurDisease(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeTflAntivrlTherapyTyHbig: evt => dispatch(action.changeTflAntivrlTherapyTyHbig(evt.target.value)),
		onChangeTflAntivrlTherapyTyOther: evt => dispatch(action.changeTflAntivrlTherapyTyOther(evt.target.value)),
		onChangeTflAntivrlTherapyTyValcyte: evt => dispatch(action.changeTflAntivrlTherapyTyValcyte(evt.target.value)),
		onChangeTflAntivrlTherapyTyValtrex: evt => dispatch(action.changeTflAntivrlTherapyTyValtrex(evt.target.value)),
		onChangeTflBmi: evt => dispatch(action.changeTflBmi(evt.target.value)),
		onChangeTflCad: evt => dispatch(action.changeTflCad(evt.target.value)),
		onChangeTflCareProvBy: evt => dispatch(action.changeTflCareProvBy(evt.target.value)),
		onChangeTflCmvIgg: evt => dispatch(action.changeTflCmvIgg(evt.target.value)),
		onChangeTflCmvIgm: evt => dispatch(action.changeTflCmvIgm(evt.target.value)),
		onChangeTflCod: evt => dispatch(action.changeTflCod(evt.target.value)),
		onChangeTflCod2: evt => dispatch(action.changeTflCod2(evt.target.value)),
		onChangeTflCod3: evt => dispatch(action.changeTflCod3(evt.target.value)),
		onChangeTflCognitiveDevelop: evt => dispatch(action.changeTflCognitiveDevelop(evt.target.value)),
		onChangeTflCreat: evt => dispatch(action.changeTflCreat(evt.target.value)),
		onChangeTflDiabDuringFol: evt => dispatch(action.changeTflDiabDuringFol(evt.target.value)),
		onChangeTflEmplStatPre04: evt => dispatch(action.changeTflEmplStatPre04(evt.target.value)),
		onChangeTflFailBiliary: evt => dispatch(action.changeTflFailBiliary(evt.target.value)),
		onChangeTflFailDt: evt => dispatch(action.changeTflFailDt(evt.target.value)),
		onChangeTflFailHepDenovo: evt => dispatch(action.changeTflFailHepDenovo(evt.target.value)),
		onChangeTflFailHepRecur: evt => dispatch(action.changeTflFailHepRecur(evt.target.value)),
		onChangeTflFailInfect: evt => dispatch(action.changeTflFailInfect(evt.target.value)),
		onChangeTflFailPrimeGraftFail: evt => dispatch(action.changeTflFailPrimeGraftFail(evt.target.value)),
		onChangeTflFailPxNoncomp: evt => dispatch(action.changeTflFailPxNoncomp(evt.target.value)),
		onChangeTflFailRecurDisease: evt => dispatch(action.changeTflFailRecurDisease(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxfLiForm2 );
