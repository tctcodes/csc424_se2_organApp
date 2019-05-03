import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class CandFormPhys extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ABO</label>
					<label className="text-secondary" >Patient/s Blood Type:</label>
					<select className="form-control" value={this.props.canAbo} onChange={this.props.onChangeCanAbo}>
						<option value="" hidden disabled selected/>
						<option value="A">A: A</option>
						<option value="A1">A1: A1</option>
						<option value="A1B">A1B: A1B</option>
						<option value="A2">A2: A2</option>
						<option value="A2B">A2B: A2B</option>
						<option value="AB">AB: AB</option>
						<option value="B">B: B</option>
						<option value="O">O: O</option>
						<option value="Z">Z: Z (In Utero Only)</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN AGE AT LISTING</label>
					<label className="text-secondary" >Calculated Candidate Age at Listing:</label>
					<select className="form-control" value={this.props.canAgeAtListing} onChange={this.props.onChangeCanAgeAtListing}>
						<option value="" hidden disabled selected/>
						<option value="0">{"<"}1</option>
						<option value="1">5-Jan</option>
						<option value="6">11-Jun</option>
						<option value="12">17-Dec</option>
						<option value="18">18-34</option>
						<option value="35">35-49</option>
						<option value="50">50-64</option>
						<option value="65">65+</option>
						<option value="99">Unkown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN AGE IN MONTHS AT LISTING</label>
					<label className="text-secondary" >Calculated Candidate Age in Months at Listing:</label>
					<input className="form-control" type="number" value={this.props.canAgeInMonthsAtListing} onChange={this.props.onChangeCanAgeInMonthsAtListing} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ARTIFICIAL LI</label>
					<label className="text-secondary" >Life Support://Artifical Liver:</label>
					<select className="form-control" value={this.props.canArtificialLi} onChange={this.props.onChangeCanArtificialLi}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN BMI</label>
					<label className="text-secondary" >BMI::</label>
					<input className="form-control" type="number" value={this.props.canBmi} onChange={this.props.onChangeCanBmi} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DGN</label>
					<label className="text-secondary" >Primary Diagnosis:</label>
					<select className="form-control" value={this.props.canDgn} onChange={this.props.onChangeCanDgn}>
						<option value="" hidden disabled selected/>
						<option value="100">100: LU:ALLERGIC BRONCHOPULMONARY ASPERGILLOSIS</option>
						<option value="103">103: LU:BRONCHOPULMONARY DYSPLASIA</option>
						<option value="105">105: LU:CILIARY DYSKINESIS SYNDROME</option>
						<option value="106">106: LU:CONSTRICTIVE BRONCHIOLITIS</option>
						<option value="107">107: LU:DYSMOTILE CILIA SYNDROME</option>
						<option value="109">109: LU:GRANULOMATOUS LUNG DISEASE</option>
						<option value="111">111: LU:KARTAGENER'S SYNDROME</option>
						<option value="113">113: LU:OBSTRUCTIVE LUNG DISEASE</option>
						<option value="114">114: LU:PRIMARY CILIARY DYSKINESIA</option>
						<option value="116">116: LU:TUBEROUS SCLEROSIS</option>
						<option value="200">200: LU:CONGENITAL MALFORMATION</option>
						<option value="202">202: LU:PERIPHERAL PULM ARTERY STENOSIS {"&"} 2? PULM HTN</option>
						<option value="203">203: LU:PORTOPULMONARY HYPERTENSION</option>
						<option value="205">205: LU:PULMONARY AV MALFORMATION CONGENITAL HEART DISEASE</option>
						<option value="206">206: LU:PULMONARY THROMBOEMBOLIC DISEASE</option>
						<option value="208">208: LU:PULMONARY VENO-OCCLUSIVE DISEASE</option>
						<option value="209">209: LU:PULMONIC STENOSIS</option>
						<option value="210">210: LU:RIGHT HYPOPLASTIC LUNG</option>
						<option value="212">212: LU:THROMBOEMBOLIC PULMONARY HYPERTENSION</option>
						<option value="213">213: LU:WEGENER'S GRANULOMA - RESTRICTIVE</option>
						<option value="214">214: LU:WEGENER'S GRANULOMA - BRONCHIECTASIS</option>
						<option value="215">215: LU:CREST - RESTRICTIVE</option>
						<option value="216">216: LU:CREST - PULMONARY HYPERTENSION</option>
						<option value="217">217: LU:PULMONARY TELANGIECTASIA - RESTRICTIVE</option>
						<option value="218">218: LU:PULMONARY TELANGIECTASIA - PULMONARY HYPERTENSION</option>
						<option value="219">219: LU:SCLERODERMA - RESTRICTIVE</option>
						<option value="220">220: LU:SCLERODERMA - PULMONARY HYPERTENSION</option>
						<option value="300">300: LU:COMMON VARIABLE IMMUNE DEFICIENCY</option>
						<option value="302">302: LU:FIBROCAVITARY LUNG DISEASE</option>
						<option value="303">303: LU:HYPOGAMMAGLOBULINEMIA</option>
						<option value="305">305: LU:SHWACHMAN-DIAMOND SYNDROME</option>
						<option value="400">400: LU:ALVEOLAR PROTEINOSIS</option>
						<option value="401">401: LU:AMYLOIDOSIS</option>
						<option value="402">402: LU:ARDS/PNEUMONIA</option>
						<option value="403">403: LU:IIP: BOOP/COP</option>
						<option value="404">404: LU:BRONCHIOLOALVEOLAR CARCINOMA (BAC)</option>
						<option value="405">405: LU:CARCINOID TUMORLETS</option>
						<option value="406">406: LU:CHRONIC PNEUMONITIS OF INFANCY</option>
						<option value="407">407: LU:COLLAGEN VASCULAR DISEASES</option>
						<option value="408">408: LU:CONNECTIVE TISSUE DISEASE</option>
						<option value="409">409: LU:CREST</option>
						<option value="410">410: LU:CUTIS LAXA</option>
						<option value="411">411: LU:DESQUAMATIVE INTERSTITIAL PNEUMONITIS (DIP)</option>
						<option value="412">412: LU:EHLERS-DANLOS SYNDROME</option>
						<option value="413">413: LU:EOSINOPHILIC GRANULOMA</option>
						<option value="414">414: LU:EOSINOPHILIC GRANULOMATOSIS</option>
						<option value="415">415: LU:EOSINOPHILIC PNEUMONIAL CHRONIC GRANULOMATOSIS</option>
						<option value="416">416: LU:FIBROSING MEDIASTINITIS</option>
						<option value="417">417: LU:GRAFT-VS-HOST DISEASE (GVHD)</option>
						<option value="418">418: LU:HERMANSKY PUDLAK SYNDROME</option>
						<option value="419">419: LU:HISTIOCYTOSIS X</option>
						<option value="420">420: LU:HYPERSENSITIVITY PNEUMONITIS</option>
						<option value="422">422: LU:IDIOPATHIC PULMONARY HEMOSIDEROSIS</option>
						<option value="423">423: LU:INTERSTITIAL PNEUMONITIS</option>
						<option value="424">424: LU:IIP: LYMPHOCYTIC INTERSTITIAL PNEUMONIA (LIP)</option>
						<option value="432">432: LU:LUPUS</option>
						<option value="433">433: LU:MACLEOD SYNDROME</option>
						<option value="434">434: LU:MIXED CONNECTIVE TISSUE DISEASE</option>
						<option value="437">437: LU:PARANEOPLASTIC PEMPHIGUS ASSOCIATED CASTLEMAN'S DISEASE</option>
						<option value="438">438: LU:POLYMYOSITIS</option>
						<option value="440">440: LU:PULMONARY HYALINIZING GRANULOMA</option>
						<option value="441">441: LU:PULMONARY LANGERHANS CELL GRANULOMATOSIS</option>
						<option value="442">442: LU:PULMONARY TELENGECTASIA</option>
						<option value="444">444: LU:RESTRICTIVE LUNG DISEASE</option>
						<option value="446">446: LU:SCLERODERMA</option>
						<option value="447">447: LU:SJOGREN'S SYNDROME</option>
						<option value="448">448: LU:SILICOSIS</option>
						<option value="449">449: LU:SURFACTANT PROTEIN B DEFICIENCY</option>
						<option value="450">450: LU:SWYER JAMES SYNDROME</option>
						<option value="451">451: LU:TERATOMA</option>
						<option value="452">452: LU:TRACHEOPATHIA OSTEOPLASTICA</option>
						<option value="453">453: LU:USUAL INTERSTITIAL PNEUMONITIS</option>
						<option value="454">454: LU:WEGENER'S GRANULOMA</option>
						<option value="999">999: OTHER SPECIFY</option>
						<option value="1000">1000: HR:DILATED MYOPATHY: IDIOPATHIC</option>
						<option value="1001">1001: HR:DILATED MYOPATHY: ADRIAMYCIN</option>
						<option value="1002">1002: HR:DILATED MYOPATHY: POST PARTUM</option>
						<option value="1003">1003: HR:DILATED MYOPATHY: FAMILIAL</option>
						<option value="1004">1004: HR:DILATED MYOPATHY: MYOCARDITIS</option>
						<option value="1005">1005: HR:DILATED MYOPATHY: ALCOHOLIC</option>
						<option value="1006">1006: HR:DILATED MYOPATHY: VIRAL</option>
						<option value="1007">1007: HR:DILATED MYOPATHY: ISCHEMIC</option>
						<option value="1049">1049: HR:DILATED MYOPATHY: OTHER SPECIFY</option>
						<option value="1050">1050: HR:RESTRICTIVE MYOPATHY: IDIOPATHIC</option>
						<option value="1051">1051: HR:RESTRICTIVE MYOPATHY: AMYLOIDOSIS</option>
						<option value="1052">1052: HR:RESTRICTIVE MYOPATHY: ENDOCARDIAL FIBROS</option>
						<option value="1053">1053: HR:RESTRICTIVE MYOPATHY: SARCOIDOSIS</option>
						<option value="1054">1054: HR:RESTRICTIVE MYOPATHY: SEC TO RADIAT/CHEM</option>
						<option value="1099">1099: HR:RESTRICTIVE MYOPATHY: OTHER SPECIFY</option>
						<option value="1100">1100: HR:HEART RE-TX/GF: HYPERACUTE REJECTION</option>
						<option value="1101">1101: HR:HEART RE-TX/GF: ACUTE REJECTION</option>
						<option value="1102">1102: HR:HEART RE-TX/GF: CORONARY ARTERY DISEASE</option>
						<option value="1103">1103: HR:HEART RE-TX/GF: NON-SPECIFIC</option>
						<option value="1104">1104: HR:HEART RE-TX/GF: RESTRICTIVE/CONSTRICTIVE</option>
						<option value="1105">1105: HR:HEART RE-TX/GF: CHRONIC REJECTION</option>
						<option value="1106">1106: HR:HEART RE-TX/GF: PRIMARY FAILURE</option>
						<option value="1199">1199: HR:HEART RE-TX/GF: OTHER SPECIFY</option>
						<option value="1200">1200: HR:CORONARY ARTERY DISEASE</option>
						<option value="1201">1201: HR:HYPERTROPHIC CARDIOMYOPATHY</option>
						<option value="1202">1202: HR:VALVULAR HEART DISEASE</option>
						<option value="1203">1203: HR:CONGENITAL HEART DEFECT - PRIOR SURGERY UNKNOWN</option>
						<option value="1204">1204: HR:CANCER</option>
						<option value="1205">1205: HR:CONGENITAL HEART DEFECT - HYPOPLASTIC LEFT HEART SYNDROME - UNOPERATED</option>
						<option value="1206">1206: HR:CONGENITAL HEART DEFECT - WITHOUT SURGERY</option>
						<option value="1207">1207: HR:CONGENITAL HEART DEFECT - WITH SURGERY</option>
						<option value="1208">1208: HR:ARRHYTHMOGENIC RIGHT VENTRICULAR DYSPLASIA/CARDIOMYOPATHY</option>
						<option value="1209">1209: HR:MUSCULAR DYSTROPHY: OTHER SPECIFY</option>
						<option value="1497">1497: HR:CARDIAC DISEASE: OTHER SPECIFY</option>
						<option value="1498">1498: HR:HEART: OTHER SPECIFY</option>
						<option value="1500">1500: LU:EISENMENGER'S SYN: ATRIAL SEPTAL DEFECT</option>
						<option value="1501">1501: LU:EISENMENGER'S SYN: VSD</option>
						<option value="1502">1502: LU:EISENMENGER'S SYN: PDA</option>
						<option value="1517">1517: LU:PULMONARY CAPILLARY HEMANGIOMATOSIS</option>
						<option value="1518">1518: LU:ABCA3 TRANSPORTER MUTATION</option>
						<option value="1519">1519: LU:SECONDARY PULMONARY FIBROSIS (SPECIFY CAUSE)</option>
						<option value="1520">1520: LU:SURFACTANT PROTEIN C DEFICIENCY</option>
						<option value="1521">1521: LU:IIP: NONSPECIFIC INTERSTITIAL PNEUMONIA</option>
						<option value="1522">1522: LU:IIP: RESPIRATORY BRONCHIOLITIS</option>
						<option value="1523">1523: LU:IIP: DESQUAMATIVE INTERSTITIAL PNEUMONIA</option>
						<option value="1524">1524: LU:IIP: ACUTE INTERSTITIAL PNEUMONIA</option>
						<option value="1525">1525: LU:PULMONARY LYMPHANGIECTASIA (PL)</option>
						<option value="1548">1548: LU:EISENMENGER'S SYN: MULTI CONGENITAL ANOMALIES</option>
						<option value="1549">1549: LU:EISENMENGER'S SYN: OTHER SPECIFY</option>
						<option value="1550">1550: LU:LUNG RE-TX/GF: NON-SPECIFIC</option>
						<option value="1551">1551: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITI</option>
						<option value="1552">1552: LU:LUNG RE-TX/GF: RESTRICTIVE</option>
						<option value="1553">1553: LU:LUNG RE-TX/GF: ACUTE REJECTION</option>
						<option value="1554">1554: LU:LUNG RE-TX/GF: OBSTRUCTIVE</option>
						<option value="1555">1555: LU:LUNG RE-TX/GF: PRIMARY GRAFT FAILURE</option>
						<option value="1556">1556: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-RESTRICTIVE</option>
						<option value="1557">1557: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-OBSTRUCTIVE</option>
						<option value="1599">1599: LU:LUNG RE-TX/GF: OTHER SPECIFY</option>
						<option value="1600">1600: LU:CONGENITAL: OTHER SPECIFY</option>
						<option value="1601">1601: LU:PULMONARY HYPERTENSION/PULMONARY ARTERIAL HYPERTENSION</option>
						<option value="1602">1602: LU:CYSTIC FIBROSIS</option>
						<option value="1603">1603: LU:INHALATION BURNS/TRAUMA</option>
						<option value="1604">1604: LU:IIP: IDIOPATHIC PULMONARY FIBROSIS (IPF)</option>
						<option value="1605">1605: LU:SARCOIDOSIS</option>
						<option value="1606">1606: LU:ALPHA - 1 - ANTITRYPSIN DEFICIENCY</option>
						<option value="1607">1607: LU:COPD/EMPHYSEMA</option>
						<option value="1608">1608: LU:BRONCHIECTASIS</option>
						<option value="1609">1609: LU:RHEUMATOID DISEASE</option>
						<option value="1610">1610: LU:OCCUPATIONAL LUNG DISEASE OTHER SPECIFY</option>
						<option value="1611">1611: LU:LYMPHANGIOLEIOMYOMATOSIS</option>
						<option value="1612">1612: LU:OBLITERATIVE BRONCHIOLITIS (NON-RETRANSPLANT)</option>
						<option value="1613">1613: LU:PULMONARY FIBROSIS OTHER SPECIFY CAUSE</option>
						<option value="1614">1614: LU:PULMONARY VASCULAR DISEASE</option>
						<option value="1615">1615: LU:SECONDARY PULMONARY HYPERTENSION</option>
						<option value="1700">1700: HR:HEART/LUNG RE-TX/GF: PRIMARY FAILURE</option>
						<option value="1997">1997: LU:LUNG DISEASE: OTHER SPECIFY</option>
						<option value="1999">1999: LU:UNKNOWN / CONVERTED RECORDS ONLY</option>
						<option value="3000">3000: KI:IDIO/POST-INF CRESCENTIC GLOMERULONEPHRI</option>
						<option value="3001">3001: KI:MEMBRANOUS GLOMERULONEPHRITIS</option>
						<option value="3002">3002: KI:MESANGIO-CAPILLARY 1 GLOMERULONEPHRITIS</option>
						<option value="3003">3003: KI:MESANGIO-CAPILLARY 2 GLOMERULONEPHRITIS</option>
						<option value="3004">3004: KI:IGA NEPHROPATHY</option>
						<option value="3005">3005: KI:ANTI-GBM</option>
						<option value="3006">3006: KI:FOCAL GLOMERULAR SCLEROSIS (FOCAL SEGMENTAL - FSG)</option>
						<option value="3007">3007: KI:CHRONIC PYELONEPHRITIS/REFLUX NEPHROPATH</option>
						<option value="3008">3008: KI:POLYCYSTIC KIDNEYS</option>
						<option value="3009">3009: KI:NEPHRITIS</option>
						<option value="3010">3010: KI:NEPHRONOPHTHISIS</option>
						<option value="3011">3011: KI:DIABETES - TYPE I INSULIN DEP/JUV ONSET</option>
						<option value="3012">3012: KI:DIABETES - TYPE II NON-INSULIN DEP/ADULT</option>
						<option value="3013">3013: KI:OXALATE NEPHROPATHY (INCLUDES HEREDITARY OXALOSIS)</option>
						<option value="3014">3014: KI:CYSTINOSIS</option>
						<option value="3015">3015: KI:FABRY'S DISEASE</option>
						<option value="3016">3016: KI:AMYLOIDOSIS</option>
						<option value="3017">3017: KI:GOUT</option>
						<option value="3018">3018: KI:SYSTEMIC LUPUS ERYTHEMATOSUS</option>
						<option value="3019">3019: KI:PROGRESSIVE SYSTEMIC SCLEROSIS</option>
						<option value="3020">3020: KI:WILMS' TUMOR</option>
						<option value="3021">3021: KI:RENAL CELL CARCINOMA</option>
						<option value="3022">3022: KI:INCIDENTAL CARCINOMA</option>
						<option value="3023">3023: KI:MYELOMA</option>
						<option value="3024">3024: KI:HEMOLYTIC UREMIC SYNDROME</option>
						<option value="3025">3025: KI:HYPOPLASIA/DYSPLASIA/DYSGENSIS/AGENESIS</option>
						<option value="3026">3026: KI:CORTICAL NECROSIS</option>
						<option value="3027">3027: KI:ACUTE TUBULAR NECROSIS</option>
						<option value="3028">3028: KI:MEDULLARY CYSTIC DISEASE</option>
						<option value="3029">3029: KI:SICKLE CELL ANEMIA</option>
						<option value="3030">3030: KI:ACQUIRED OBSTRUCTIVE NEPHROPATHY</option>
						<option value="3031">3031: KI:ALPORT'S SYNDROME</option>
						<option value="3032">3032: KI:FAMILIAL NEPHROPATHY</option>
						<option value="3033">3033: KI:GOODPASTURE'S SYNDROME</option>
						<option value="3034">3034: KI:MALIGNANT HYPERTENSION</option>
						<option value="3035">3035: KI:HENOCH-SCHOENLEIN PURPURA</option>
						<option value="3036">3036: KI:PRUNE BELLY SYNDROME</option>
						<option value="3037">3037: KI:RETRANSPLANT/GRAFT FAILURE</option>
						<option value="3038">3038: KI:DIABETES - TYPE I NON-INSULIN DEP/JUV ON</option>
						<option value="3039">3039: KI:DIABETES - TYPE II INSULIN DEP/ADULT ONS</option>
						<option value="3040">3040: KI:HYPERTENSIVE NEPHROSCLEROSIS</option>
						<option value="3041">3041: KI:CHRONIC GLOMERULONEPHRITIS UNSPECIFIED</option>
						<option value="3042">3042: KI:MEMBRANOUS NEPHROPATHY</option>
						<option value="3043">3043: KI:CHRONIC GLOMERULOSCLEROSIS UNSPECIFIED</option>
						<option value="3044">3044: KI:ANALGESIC NEPHROPATHY</option>
						<option value="3045">3045: KI:RADIATION NEPHRITIS</option>
						<option value="3046">3046: KI:ANTIBIOTIC-INDUCED NEPHRITIS</option>
						<option value="3047">3047: KI:CANCER CHEMOTHERAPY INDUCED NEPHRITIS</option>
						<option value="3048">3048: KI:CALCINEURIN INHIBITOR NEPHROTOXICITY</option>
						<option value="3049">3049: KI:HEROIN NEPHROTOXICITY</option>
						<option value="3050">3050: KI:RENAL ARTERY THROMBOSIS</option>
						<option value="3051">3051: KI:CHRONIC NEPHROSCLEROSIS-UNSPECIFIED</option>
						<option value="3052">3052: KI:CONGENITAL OBSTRUCTIVE UROPATHY</option>
						<option value="3053">3053: KI:SCLERODERMA</option>
						<option value="3054">3054: KI:WEGENERS GRANULOMATOSIS</option>
						<option value="3055">3055: KI:POLYARTERITIS</option>
						<option value="3056">3056: KI:RHEUMATOID ARTHRITIS</option>
						<option value="3057">3057: KI:SARCOIDOSIS</option>
						<option value="3058">3058: KI:LYMPHOMA</option>
						<option value="3059">3059: KI:NEPHROLITHIASIS</option>
						<option value="3060">3060: KI:UROLITHIASIS</option>
						<option value="3061">3061: KI:DYSPLASIA</option>
						<option value="3062">3062: KI:PRE-BMTRANSPLANTATION TOTAL BODY IRRADIATION</option>
						<option value="3063">3063: KI:DRUG RELATED INTERSTITIAL NEPHRITIS</option>
						<option value="3064">3064: KI:THIN BASEMENT MEMBRANE DISEASE</option>
						<option value="3065">3065: KI:HEREDITARY OXALOSIS (PEDIATRIC PATIENTS)</option>
						<option value="3066">3066: KI:CHOLESTEROL EMBOLIZATION</option>
						<option value="3067">3067: KI:FSG - FOCAL SEGMENTAL GLOMERULOSCLEROSIS</option>
						<option value="3068">3068: KI:RAPID PROGRESSIVE GLOMERULONEPHRITIS (RPGN)</option>
						<option value="3069">3069: KI:DIABETES MELLITUS - TYPE I</option>
						<option value="3070">3070: KI:DIABETES MELLITUS - TYPE II</option>
						<option value="3071">3071: KI:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
						<option value="3072">3072: KI:HEPATORENAL SYNDROME</option>
						<option value="3073">3073: KI:LITHIUM TOXICITY</option>
						<option value="3074">3074: KI:HIV NEPHROPATHY</option>
						<option value="4100">4100: LI:AHN: DRUG OTHER SPECIFY</option>
						<option value="4101">4101: LI:AHN: TYPE A</option>
						<option value="4102">4102: LI:AHN: TYPE B- HBSAG+</option>
						<option value="4103">4103: LI:AHN: NON A- NON B</option>
						<option value="4104">4104: LI:AHN: TYPE C</option>
						<option value="4105">4105: LI:AHN: TYPE D</option>
						<option value="4106">4106: LI:AHN: TYPE B AND C</option>
						<option value="4107">4107: LI:AHN: TYPE B AND D</option>
						<option value="4108">4108: LI:AHN: ETIOLOGY UNKNOWN</option>
						<option value="4110">4110: LI:AHN: OTHER, SPECIFY (E.G., ACUTE VIRAL INFECTION, AUTOIMMUNE HEPATITIS - FULMINANT)</option>
						<option value="4200">4200: LI:CIRRHOSIS: DRUG/INDUST EXPOSURE OTHER SPECIFY</option>
						<option value="4201">4201: LI:CIRRHOSIS: TYPE A</option>
						<option value="4202">4202: LI:CIRRHOSIS: TYPE B- HBSAG+</option>
						<option value="4203">4203: LI:CIRRHOSIS: TYPE NON A, NON B</option>
						<option value="4204">4204: LI:CIRRHOSIS: TYPE C</option>
						<option value="4205">4205: LI:CIRRHOSIS: TYPE D</option>
						<option value="4206">4206: LI:CIRRHOSIS: TYPE B AND C</option>
						<option value="4207">4207: LI:CIRRHOSIS: TYPE B AND D</option>
						<option value="4208">4208: LI:CIRRHOSIS: CRYPTOGENIC- IDIOPATHIC</option>
						<option value="4209">4209: LI:CIRRHOSIS: CHRONIC ACTIVE HEPATITIS: ETIOLOGY UNKNOWN</option>
						<option value="4210">4210: LI:CIRRHOSIS: OTHER, SPECIFY (E.G., HISTIOCYTOSIS, SARCOIDOSIS, GRANULOMATOUS)</option>
						<option value="4212">4212: LI:CIRRHOSIS: AUTOIMMUNE</option>
						<option value="4213">4213: LI:CIRRHOSIS: CRYPTOGENIC (IDIOPATHIC)</option>
						<option value="4214">4214: LI:CIRRHOSIS: FATTY LIVER (NASH)</option>
						<option value="4215">4215: LI:ALCOHOLIC CIRRHOSIS</option>
						<option value="4216">4216: LI:ALCOHOLIC CIRRHOSIS WITH HEPATITIS C</option>
						<option value="4217">4217: LI:ACUTE ALCOHOLIC HEPATITIS</option>
						<option value="4220">4220: LI:PRIMARY BILIARY CIRRHOSIS (PBC)</option>
						<option value="4230">4230: LI:SEC BILIARY CIRRHOSIS: CAROLI'S DISEASE</option>
						<option value="4231">4231: LI:SEC BILIARY CIRRHOSIS: CHOLEDOCHOL CYST</option>
						<option value="4235">4235: LI:SEC BILIARY CIRRHOSIS: OTHER SPECIFY</option>
						<option value="4240">4240: LI:PSC: CROHN'S DISEASE</option>
						<option value="4241">4241: LI:PSC: ULCERATIVE COLITIS</option>
						<option value="4242">4242: LI:PSC: NO BOWEL DISEASE</option>
						<option value="4245">4245: LI:PSC: OTHER SPECIFY</option>
						<option value="4250">4250: LI:FAMILIAL CHOLESTASIS: BYLER'S DISEASE</option>
						<option value="4255">4255: LI:FAMILIAL CHOLESTASIS: OTHER SPECIFY</option>
						<option value="4260">4260: LI:CHOLES LIVER DISEASE: OTHER SPECIFY</option>
						<option value="4264">4264: LI:NEONATAL CHOLESTATIC LIVER DISEASE</option>
						<option value="4265">4265: LI:NEONATAL HEPATITIS OTHER SPECIFY</option>
						<option value="4270">4270: LI:BILIARY ATRESIA: EXTRAHEPATIC</option>
						<option value="4271">4271: LI:BILIARY HYPOPLASIA: NONSYNDROMIC PAUCITY OF INTRAHEPATIC BILE DUCT</option>
						<option value="4272">4272: LI:BILIARY HYPOPLASIA: ALAGILLE?S SYNDROME (PAUCITY OF INTRAHEPATIC BILE DUCT)</option>
						<option value="4275">4275: LI:BILIARY ATRESIA OR HYPOPLASIA: OTHER, SPECIFY</option>
						<option value="4280">4280: LI:CONGENITAL HEPATIC FIBROSIS</option>
						<option value="4285">4285: LI:CYSTIC FIBROSIS</option>
						<option value="4290">4290: LI:BUDD-CHIARI SYNDROME</option>
						<option value="4300">4300: LI:METDIS: ALPHA-1-ANTITRYPSIN DEFIC A-1-A</option>
						<option value="4301">4301: LI:METDIS: WILSON'S DISEASE, OTHER COPPER METABOLISM DISORDER</option>
						<option value="4302">4302: LI:METDIS: HEMOCHROMATOSIS - HEMOSIDEROSIS</option>
						<option value="4303">4303: LI:METDIS: GLYC STOR DIS TYPE I (GSD-I)</option>
						<option value="4304">4304: LI:METDIS: GLYC STOR DIS TYPE IV (GSD-IV)</option>
						<option value="4305">4305: LI:METDIS: HYPERLIPIDEMIA-II, HOMOZYGOUS HYPERCHOLESTEROLEMIA</option>
						<option value="4306">4306: LI:METDIS: TYROSINEMIA</option>
						<option value="4307">4307: LI:METDIS: PRIMARY OXALOSIS/OXALURIA, HYPEROXALURIA</option>
						<option value="4308">4308: LI:METDIS: MAPLE SYRUP URINE DISEASE</option>
						<option value="4315">4315: LI:METDIS: OTHER SPECIFY</option>
						<option value="4400">4400: LI:PLM: HEPATOMA - HEPATOCELLULAR CARCINOMA</option>
						<option value="4401">4401: LI:PLM: HEPATOMA (HCC) AND CIRRHOSIS</option>
						<option value="4402">4402: LI:PLM: FIBROLAMELLAR (FL-HC)</option>
						<option value="4403">4403: LI:PLM: CHOLANGIOCARCINOMA (CH-CA)</option>
						<option value="4404">4404: LI:PLM: HEPATOBLASTOMA (HBL)</option>
						<option value="4405">4405: LI:PLM: HEMANGIOENDOTHELIOMA, HEMANGIOSARCOMA, ANGIOSARCOMA</option>
						<option value="4410">4410: LI:PLM: OTHER SPECIFY (I.E., KLATZKIN TUMOR, LEIOMYSARCOMA)</option>
						<option value="4420">4420: LI:BILE DUCT CANCER: (CHOLANGIOMA, BILIARY TRACT CARCINOMA)</option>
						<option value="4430">4430: LI:SECONDARY HEPATIC MALIGNANCY OTHER SPECIFY</option>
						<option value="4450">4450: LI:BENIGN TUMOR: HEPATIC ADENOMA</option>
						<option value="4451">4451: LI:BENIGN TUMOR: POLYCYSTIC LIVER DISEASE</option>
						<option value="4455">4455: LI:BENIGN TUMOR: OTHER SPECIFY</option>
						<option value="4500">4500: LI:TPN/HYPERALIMENTATION IND LIVER DISEASE</option>
						<option value="4510">4510: LI:GRAFT VS. HOST DIS SEC TO NON-LI TX</option>
						<option value="4520">4520: LI:TRAUMA OTHER SPECIFY</option>
						<option value="4592">4592: LI:Hepatitis B: Chronic or Acute</option>
						<option value="4593">4593: LI:Hepatitis C: Chronic or Acute</option>
						<option value="4597">4597: LI:NA: Non-HD Followups Only</option>
						<option value="4598">4598: LI:GRAFT FAILURE</option>
						<option value="5000">5000: PA:RETRANSPLANT/GRAFT FAILURE</option>
						<option value="5001">5001: PA:DIABETES MELLITUS - TYPE I</option>
						<option value="5002">5002: PA:DIABETES MELLITUS - TYPE II</option>
						<option value="5003">5003: PA:DIABETES SECONDARY TO CHRONIC PANCREATITIS WITHOUT PANCREATECTOMY</option>
						<option value="5004">5004: PA:DIABETES SECONDARY TO CYSTIC FIBROSIS WITHOUT PANCREATECTOMY</option>
						<option value="5005">5005: PA:PANCREATIC CANCER</option>
						<option value="5006">5006: PA:BILE DUCT CANCER</option>
						<option value="5007">5007: PA:OTHER CANCERS</option>
						<option value="5008">5008: PA:PANCREATECTOMY PRIOR TO PANCREAS TX</option>
						<option value="5009">5009: PA:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
						<option value="6000">6000: SGS: INTESTINAL ATRESIA</option>
						<option value="6001">6001: SGS: NECROTIZING ENTEROCOLITIS</option>
						<option value="6002">6002: SGS: INTESTINAL VOLVULUS SECONDARY TO MALROTATION</option>
						<option value="6003">6003: SGS: INTESTINAL VOLVULUS SECONDARY TO ADHESIONS</option>
						<option value="6004">6004: SGS: INTESTINAL VOLVULUS SECONDARY TO PERSISTENT OMPHALOMESENTRERIC DUCT</option>
						<option value="6005">6005: SGS: GASTROSCHISIS</option>
						<option value="6006">6006: SGS: MASS RESECT SEC TO INF BOWEL-CROHNS</option>
						<option value="6007">6007: SGS: MASS RESECT SEC TO TUMOR</option>
						<option value="6008">6008: SGS: MASSIVE RESECTION SECONDARY TO MESENTERIC ARTERIAL THROMBOSIS OR EMBOLUS</option>
						<option value="6009">6009: SGS: MASS RESECT SEC TO MES VENOUS THROM</option>
						<option value="6048">6048: SGS: OTHER SPECIFY</option>
						<option value="6049">6049: SGS: UNSPECIFIED</option>
						<option value="6050">6050: IN:FBP: HIRSCHSPRUNG'S DISEASE</option>
						<option value="6051">6051: IN:FBP: NEURONAL INTESTINAL DYSPLASIA</option>
						<option value="6052">6052: IN:FBP: PSEUDO-OBSTRUCTION-NEUROPATHIC</option>
						<option value="6053">6053: IN:FBP: PSEUDO-OBSTRUCTION-MYOPATHIC</option>
						<option value="6054">6054: IN:FBP: PROTEIN-LOSING ENTEROPATHY</option>
						<option value="6055">6055: IN:FBP: MICROVILLOUS INCLUSION DISEASE</option>
						<option value="6098">6098: IN:FBP: OTHER SPECIFY</option>
						<option value="6099">6099: IN:FBP: UNSPECIFIED</option>
						<option value="6100">6100: IN:GRAFT FAILURE</option>
						<option value="6150">6150: IN:RETRANSPLANT</option>
						<option value="6497">6497: IN:INTESTINAL DISEASE OTHER SPECIFY</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DGN2</label>
					<label className="text-secondary" >Secondary Diagnosis:</label>
					<select className="form-control" value={this.props.canDgn2} onChange={this.props.onChangeCanDgn2}>
						<option value="" hidden disabled selected/>
						<option value="100">100: LU:ALLERGIC BRONCHOPULMONARY ASPERGILLOSIS</option>
						<option value="103">103: LU:BRONCHOPULMONARY DYSPLASIA</option>
						<option value="105">105: LU:CILIARY DYSKINESIS SYNDROME</option>
						<option value="106">106: LU:CONSTRICTIVE BRONCHIOLITIS</option>
						<option value="107">107: LU:DYSMOTILE CILIA SYNDROME</option>
						<option value="109">109: LU:GRANULOMATOUS LUNG DISEASE</option>
						<option value="111">111: LU:KARTAGENER'S SYNDROME</option>
						<option value="113">113: LU:OBSTRUCTIVE LUNG DISEASE</option>
						<option value="114">114: LU:PRIMARY CILIARY DYSKINESIA</option>
						<option value="116">116: LU:TUBEROUS SCLEROSIS</option>
						<option value="200">200: LU:CONGENITAL MALFORMATION</option>
						<option value="202">202: LU:PERIPHERAL PULM ARTERY STENOSIS {"&"} 2? PULM HTN</option>
						<option value="203">203: LU:PORTOPULMONARY HYPERTENSION</option>
						<option value="205">205: LU:PULMONARY AV MALFORMATION CONGENITAL HEART DISEASE</option>
						<option value="206">206: LU:PULMONARY THROMBOEMBOLIC DISEASE</option>
						<option value="208">208: LU:PULMONARY VENO-OCCLUSIVE DISEASE</option>
						<option value="209">209: LU:PULMONIC STENOSIS</option>
						<option value="210">210: LU:RIGHT HYPOPLASTIC LUNG</option>
						<option value="212">212: LU:THROMBOEMBOLIC PULMONARY HYPERTENSION</option>
						<option value="213">213: LU:WEGENER'S GRANULOMA - RESTRICTIVE</option>
						<option value="214">214: LU:WEGENER'S GRANULOMA - BRONCHIECTASIS</option>
						<option value="215">215: LU:CREST - RESTRICTIVE</option>
						<option value="216">216: LU:CREST - PULMONARY HYPERTENSION</option>
						<option value="217">217: LU:PULMONARY TELANGIECTASIA - RESTRICTIVE</option>
						<option value="218">218: LU:PULMONARY TELANGIECTASIA - PULMONARY HYPERTENSION</option>
						<option value="219">219: LU:SCLERODERMA - RESTRICTIVE</option>
						<option value="220">220: LU:SCLERODERMA - PULMONARY HYPERTENSION</option>
						<option value="300">300: LU:COMMON VARIABLE IMMUNE DEFICIENCY</option>
						<option value="302">302: LU:FIBROCAVITARY LUNG DISEASE</option>
						<option value="303">303: LU:HYPOGAMMAGLOBULINEMIA</option>
						<option value="305">305: LU:SHWACHMAN-DIAMOND SYNDROME</option>
						<option value="400">400: LU:ALVEOLAR PROTEINOSIS</option>
						<option value="401">401: LU:AMYLOIDOSIS</option>
						<option value="402">402: LU:ARDS/PNEUMONIA</option>
						<option value="403">403: LU:IIP: BOOP/COP</option>
						<option value="404">404: LU:BRONCHIOLOALVEOLAR CARCINOMA (BAC)</option>
						<option value="405">405: LU:CARCINOID TUMORLETS</option>
						<option value="406">406: LU:CHRONIC PNEUMONITIS OF INFANCY</option>
						<option value="407">407: LU:COLLAGEN VASCULAR DISEASES</option>
						<option value="408">408: LU:CONNECTIVE TISSUE DISEASE</option>
						<option value="409">409: LU:CREST</option>
						<option value="410">410: LU:CUTIS LAXA</option>
						<option value="411">411: LU:DESQUAMATIVE INTERSTITIAL PNEUMONITIS (DIP)</option>
						<option value="412">412: LU:EHLERS-DANLOS SYNDROME</option>
						<option value="413">413: LU:EOSINOPHILIC GRANULOMA</option>
						<option value="414">414: LU:EOSINOPHILIC GRANULOMATOSIS</option>
						<option value="415">415: LU:EOSINOPHILIC PNEUMONIAL CHRONIC GRANULOMATOSIS</option>
						<option value="416">416: LU:FIBROSING MEDIASTINITIS</option>
						<option value="417">417: LU:GRAFT-VS-HOST DISEASE (GVHD)</option>
						<option value="418">418: LU:HERMANSKY PUDLAK SYNDROME</option>
						<option value="419">419: LU:HISTIOCYTOSIS X</option>
						<option value="420">420: LU:HYPERSENSITIVITY PNEUMONITIS</option>
						<option value="422">422: LU:IDIOPATHIC PULMONARY HEMOSIDEROSIS</option>
						<option value="423">423: LU:INTERSTITIAL PNEUMONITIS</option>
						<option value="424">424: LU:IIP: LYMPHOCYTIC INTERSTITIAL PNEUMONIA (LIP)</option>
						<option value="432">432: LU:LUPUS</option>
						<option value="433">433: LU:MACLEOD SYNDROME</option>
						<option value="434">434: LU:MIXED CONNECTIVE TISSUE DISEASE</option>
						<option value="437">437: LU:PARANEOPLASTIC PEMPHIGUS ASSOCIATED CASTLEMAN'S DISEASE</option>
						<option value="438">438: LU:POLYMYOSITIS</option>
						<option value="440">440: LU:PULMONARY HYALINIZING GRANULOMA</option>
						<option value="441">441: LU:PULMONARY LANGERHANS CELL GRANULOMATOSIS</option>
						<option value="442">442: LU:PULMONARY TELENGECTASIA</option>
						<option value="444">444: LU:RESTRICTIVE LUNG DISEASE</option>
						<option value="446">446: LU:SCLERODERMA</option>
						<option value="447">447: LU:SJOGREN'S SYNDROME</option>
						<option value="448">448: LU:SILICOSIS</option>
						<option value="449">449: LU:SURFACTANT PROTEIN B DEFICIENCY</option>
						<option value="450">450: LU:SWYER JAMES SYNDROME</option>
						<option value="451">451: LU:TERATOMA</option>
						<option value="452">452: LU:TRACHEOPATHIA OSTEOPLASTICA</option>
						<option value="453">453: LU:USUAL INTERSTITIAL PNEUMONITIS</option>
						<option value="454">454: LU:WEGENER'S GRANULOMA</option>
						<option value="999">999: OTHER SPECIFY</option>
						<option value="1000">1000: HR:DILATED MYOPATHY: IDIOPATHIC</option>
						<option value="1001">1001: HR:DILATED MYOPATHY: ADRIAMYCIN</option>
						<option value="1002">1002: HR:DILATED MYOPATHY: POST PARTUM</option>
						<option value="1003">1003: HR:DILATED MYOPATHY: FAMILIAL</option>
						<option value="1004">1004: HR:DILATED MYOPATHY: MYOCARDITIS</option>
						<option value="1005">1005: HR:DILATED MYOPATHY: ALCOHOLIC</option>
						<option value="1006">1006: HR:DILATED MYOPATHY: VIRAL</option>
						<option value="1007">1007: HR:DILATED MYOPATHY: ISCHEMIC</option>
						<option value="1049">1049: HR:DILATED MYOPATHY: OTHER SPECIFY</option>
						<option value="1050">1050: HR:RESTRICTIVE MYOPATHY: IDIOPATHIC</option>
						<option value="1051">1051: HR:RESTRICTIVE MYOPATHY: AMYLOIDOSIS</option>
						<option value="1052">1052: HR:RESTRICTIVE MYOPATHY: ENDOCARDIAL FIBROS</option>
						<option value="1053">1053: HR:RESTRICTIVE MYOPATHY: SARCOIDOSIS</option>
						<option value="1054">1054: HR:RESTRICTIVE MYOPATHY: SEC TO RADIAT/CHEM</option>
						<option value="1099">1099: HR:RESTRICTIVE MYOPATHY: OTHER SPECIFY</option>
						<option value="1100">1100: HR:HEART RE-TX/GF: HYPERACUTE REJECTION</option>
						<option value="1101">1101: HR:HEART RE-TX/GF: ACUTE REJECTION</option>
						<option value="1102">1102: HR:HEART RE-TX/GF: CORONARY ARTERY DISEASE</option>
						<option value="1103">1103: HR:HEART RE-TX/GF: NON-SPECIFIC</option>
						<option value="1104">1104: HR:HEART RE-TX/GF: RESTRICTIVE/CONSTRICTIVE</option>
						<option value="1105">1105: HR:HEART RE-TX/GF: CHRONIC REJECTION</option>
						<option value="1106">1106: HR:HEART RE-TX/GF: PRIMARY FAILURE</option>
						<option value="1199">1199: HR:HEART RE-TX/GF: OTHER SPECIFY</option>
						<option value="1200">1200: HR:CORONARY ARTERY DISEASE</option>
						<option value="1201">1201: HR:HYPERTROPHIC CARDIOMYOPATHY</option>
						<option value="1202">1202: HR:VALVULAR HEART DISEASE</option>
						<option value="1203">1203: HR:CONGENITAL HEART DEFECT - PRIOR SURGERY UNKNOWN</option>
						<option value="1204">1204: HR:CANCER</option>
						<option value="1205">1205: HR:CONGENITAL HEART DEFECT - HYPOPLASTIC LEFT HEART SYNDROME - UNOPERATED</option>
						<option value="1206">1206: HR:CONGENITAL HEART DEFECT - WITHOUT SURGERY</option>
						<option value="1207">1207: HR:CONGENITAL HEART DEFECT - WITH SURGERY</option>
						<option value="1208">1208: HR:ARRHYTHMOGENIC RIGHT VENTRICULAR DYSPLASIA/CARDIOMYOPATHY</option>
						<option value="1209">1209: HR:MUSCULAR DYSTROPHY: OTHER SPECIFY</option>
						<option value="1497">1497: HR:CARDIAC DISEASE: OTHER SPECIFY</option>
						<option value="1498">1498: HR:HEART: OTHER SPECIFY</option>
						<option value="1500">1500: LU:EISENMENGER'S SYN: ATRIAL SEPTAL DEFECT</option>
						<option value="1501">1501: LU:EISENMENGER'S SYN: VSD</option>
						<option value="1502">1502: LU:EISENMENGER'S SYN: PDA</option>
						<option value="1517">1517: LU:PULMONARY CAPILLARY HEMANGIOMATOSIS</option>
						<option value="1518">1518: LU:ABCA3 TRANSPORTER MUTATION</option>
						<option value="1519">1519: LU:SECONDARY PULMONARY FIBROSIS (SPECIFY CAUSE)</option>
						<option value="1520">1520: LU:SURFACTANT PROTEIN C DEFICIENCY</option>
						<option value="1521">1521: LU:IIP: NONSPECIFIC INTERSTITIAL PNEUMONIA</option>
						<option value="1522">1522: LU:IIP: RESPIRATORY BRONCHIOLITIS</option>
						<option value="1523">1523: LU:IIP: DESQUAMATIVE INTERSTITIAL PNEUMONIA</option>
						<option value="1524">1524: LU:IIP: ACUTE INTERSTITIAL PNEUMONIA</option>
						<option value="1525">1525: LU:PULMONARY LYMPHANGIECTASIA (PL)</option>
						<option value="1548">1548: LU:EISENMENGER'S SYN: MULTI CONGENITAL ANOMALIES</option>
						<option value="1549">1549: LU:EISENMENGER'S SYN: OTHER SPECIFY</option>
						<option value="1550">1550: LU:LUNG RE-TX/GF: NON-SPECIFIC</option>
						<option value="1551">1551: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITI</option>
						<option value="1552">1552: LU:LUNG RE-TX/GF: RESTRICTIVE</option>
						<option value="1553">1553: LU:LUNG RE-TX/GF: ACUTE REJECTION</option>
						<option value="1554">1554: LU:LUNG RE-TX/GF: OBSTRUCTIVE</option>
						<option value="1555">1555: LU:LUNG RE-TX/GF: PRIMARY GRAFT FAILURE</option>
						<option value="1556">1556: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-RESTRICTIVE</option>
						<option value="1557">1557: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-OBSTRUCTIVE</option>
						<option value="1599">1599: LU:LUNG RE-TX/GF: OTHER SPECIFY</option>
						<option value="1600">1600: LU:CONGENITAL: OTHER SPECIFY</option>
						<option value="1601">1601: LU:PULMONARY HYPERTENSION/PULMONARY ARTERIAL HYPERTENSION</option>
						<option value="1602">1602: LU:CYSTIC FIBROSIS</option>
						<option value="1603">1603: LU:INHALATION BURNS/TRAUMA</option>
						<option value="1604">1604: LU:IIP: IDIOPATHIC PULMONARY FIBROSIS (IPF)</option>
						<option value="1605">1605: LU:SARCOIDOSIS</option>
						<option value="1606">1606: LU:ALPHA - 1 - ANTITRYPSIN DEFICIENCY</option>
						<option value="1607">1607: LU:COPD/EMPHYSEMA</option>
						<option value="1608">1608: LU:BRONCHIECTASIS</option>
						<option value="1609">1609: LU:RHEUMATOID DISEASE</option>
						<option value="1610">1610: LU:OCCUPATIONAL LUNG DISEASE OTHER SPECIFY</option>
						<option value="1611">1611: LU:LYMPHANGIOLEIOMYOMATOSIS</option>
						<option value="1612">1612: LU:OBLITERATIVE BRONCHIOLITIS (NON-RETRANSPLANT)</option>
						<option value="1613">1613: LU:PULMONARY FIBROSIS OTHER SPECIFY CAUSE</option>
						<option value="1614">1614: LU:PULMONARY VASCULAR DISEASE</option>
						<option value="1615">1615: LU:SECONDARY PULMONARY HYPERTENSION</option>
						<option value="1700">1700: HR:HEART/LUNG RE-TX/GF: PRIMARY FAILURE</option>
						<option value="1997">1997: LU:LUNG DISEASE: OTHER SPECIFY</option>
						<option value="1999">1999: LU:UNKNOWN / CONVERTED RECORDS ONLY</option>
						<option value="3000">3000: KI:IDIO/POST-INF CRESCENTIC GLOMERULONEPHRI</option>
						<option value="3001">3001: KI:MEMBRANOUS GLOMERULONEPHRITIS</option>
						<option value="3002">3002: KI:MESANGIO-CAPILLARY 1 GLOMERULONEPHRITIS</option>
						<option value="3003">3003: KI:MESANGIO-CAPILLARY 2 GLOMERULONEPHRITIS</option>
						<option value="3004">3004: KI:IGA NEPHROPATHY</option>
						<option value="3005">3005: KI:ANTI-GBM</option>
						<option value="3006">3006: KI:FOCAL GLOMERULAR SCLEROSIS (FOCAL SEGMENTAL - FSG)</option>
						<option value="3007">3007: KI:CHRONIC PYELONEPHRITIS/REFLUX NEPHROPATH</option>
						<option value="3008">3008: KI:POLYCYSTIC KIDNEYS</option>
						<option value="3009">3009: KI:NEPHRITIS</option>
						<option value="3010">3010: KI:NEPHRONOPHTHISIS</option>
						<option value="3011">3011: KI:DIABETES - TYPE I INSULIN DEP/JUV ONSET</option>
						<option value="3012">3012: KI:DIABETES - TYPE II NON-INSULIN DEP/ADULT</option>
						<option value="3013">3013: KI:OXALATE NEPHROPATHY (INCLUDES HEREDITARY OXALOSIS)</option>
						<option value="3014">3014: KI:CYSTINOSIS</option>
						<option value="3015">3015: KI:FABRY'S DISEASE</option>
						<option value="3016">3016: KI:AMYLOIDOSIS</option>
						<option value="3017">3017: KI:GOUT</option>
						<option value="3018">3018: KI:SYSTEMIC LUPUS ERYTHEMATOSUS</option>
						<option value="3019">3019: KI:PROGRESSIVE SYSTEMIC SCLEROSIS</option>
						<option value="3020">3020: KI:WILMS' TUMOR</option>
						<option value="3021">3021: KI:RENAL CELL CARCINOMA</option>
						<option value="3022">3022: KI:INCIDENTAL CARCINOMA</option>
						<option value="3023">3023: KI:MYELOMA</option>
						<option value="3024">3024: KI:HEMOLYTIC UREMIC SYNDROME</option>
						<option value="3025">3025: KI:HYPOPLASIA/DYSPLASIA/DYSGENSIS/AGENESIS</option>
						<option value="3026">3026: KI:CORTICAL NECROSIS</option>
						<option value="3027">3027: KI:ACUTE TUBULAR NECROSIS</option>
						<option value="3028">3028: KI:MEDULLARY CYSTIC DISEASE</option>
						<option value="3029">3029: KI:SICKLE CELL ANEMIA</option>
						<option value="3030">3030: KI:ACQUIRED OBSTRUCTIVE NEPHROPATHY</option>
						<option value="3031">3031: KI:ALPORT'S SYNDROME</option>
						<option value="3032">3032: KI:FAMILIAL NEPHROPATHY</option>
						<option value="3033">3033: KI:GOODPASTURE'S SYNDROME</option>
						<option value="3034">3034: KI:MALIGNANT HYPERTENSION</option>
						<option value="3035">3035: KI:HENOCH-SCHOENLEIN PURPURA</option>
						<option value="3036">3036: KI:PRUNE BELLY SYNDROME</option>
						<option value="3037">3037: KI:RETRANSPLANT/GRAFT FAILURE</option>
						<option value="3038">3038: KI:DIABETES - TYPE I NON-INSULIN DEP/JUV ON</option>
						<option value="3039">3039: KI:DIABETES - TYPE II INSULIN DEP/ADULT ONS</option>
						<option value="3040">3040: KI:HYPERTENSIVE NEPHROSCLEROSIS</option>
						<option value="3041">3041: KI:CHRONIC GLOMERULONEPHRITIS UNSPECIFIED</option>
						<option value="3042">3042: KI:MEMBRANOUS NEPHROPATHY</option>
						<option value="3043">3043: KI:CHRONIC GLOMERULOSCLEROSIS UNSPECIFIED</option>
						<option value="3044">3044: KI:ANALGESIC NEPHROPATHY</option>
						<option value="3045">3045: KI:RADIATION NEPHRITIS</option>
						<option value="3046">3046: KI:ANTIBIOTIC-INDUCED NEPHRITIS</option>
						<option value="3047">3047: KI:CANCER CHEMOTHERAPY INDUCED NEPHRITIS</option>
						<option value="3048">3048: KI:CALCINEURIN INHIBITOR NEPHROTOXICITY</option>
						<option value="3049">3049: KI:HEROIN NEPHROTOXICITY</option>
						<option value="3050">3050: KI:RENAL ARTERY THROMBOSIS</option>
						<option value="3051">3051: KI:CHRONIC NEPHROSCLEROSIS-UNSPECIFIED</option>
						<option value="3052">3052: KI:CONGENITAL OBSTRUCTIVE UROPATHY</option>
						<option value="3053">3053: KI:SCLERODERMA</option>
						<option value="3054">3054: KI:WEGENERS GRANULOMATOSIS</option>
						<option value="3055">3055: KI:POLYARTERITIS</option>
						<option value="3056">3056: KI:RHEUMATOID ARTHRITIS</option>
						<option value="3057">3057: KI:SARCOIDOSIS</option>
						<option value="3058">3058: KI:LYMPHOMA</option>
						<option value="3059">3059: KI:NEPHROLITHIASIS</option>
						<option value="3060">3060: KI:UROLITHIASIS</option>
						<option value="3061">3061: KI:DYSPLASIA</option>
						<option value="3062">3062: KI:PRE-BMTRANSPLANTATION TOTAL BODY IRRADIATION</option>
						<option value="3063">3063: KI:DRUG RELATED INTERSTITIAL NEPHRITIS</option>
						<option value="3064">3064: KI:THIN BASEMENT MEMBRANE DISEASE</option>
						<option value="3065">3065: KI:HEREDITARY OXALOSIS (PEDIATRIC PATIENTS)</option>
						<option value="3066">3066: KI:CHOLESTEROL EMBOLIZATION</option>
						<option value="3067">3067: KI:FSG - FOCAL SEGMENTAL GLOMERULOSCLEROSIS</option>
						<option value="3068">3068: KI:RAPID PROGRESSIVE GLOMERULONEPHRITIS (RPGN)</option>
						<option value="3069">3069: KI:DIABETES MELLITUS - TYPE I</option>
						<option value="3070">3070: KI:DIABETES MELLITUS - TYPE II</option>
						<option value="3071">3071: KI:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
						<option value="3072">3072: KI:HEPATORENAL SYNDROME</option>
						<option value="3073">3073: KI:LITHIUM TOXICITY</option>
						<option value="3074">3074: KI:HIV NEPHROPATHY</option>
						<option value="4100">4100: LI:AHN: DRUG OTHER SPECIFY</option>
						<option value="4101">4101: LI:AHN: TYPE A</option>
						<option value="4102">4102: LI:AHN: TYPE B- HBSAG+</option>
						<option value="4103">4103: LI:AHN: NON A- NON B</option>
						<option value="4104">4104: LI:AHN: TYPE C</option>
						<option value="4105">4105: LI:AHN: TYPE D</option>
						<option value="4106">4106: LI:AHN: TYPE B AND C</option>
						<option value="4107">4107: LI:AHN: TYPE B AND D</option>
						<option value="4108">4108: LI:AHN: ETIOLOGY UNKNOWN</option>
						<option value="4110">4110: LI:AHN: OTHER, SPECIFY (E.G., ACUTE VIRAL INFECTION, AUTOIMMUNE HEPATITIS - FULMINANT)</option>
						<option value="4200">4200: LI:CIRRHOSIS: DRUG/INDUST EXPOSURE OTHER SPECIFY</option>
						<option value="4201">4201: LI:CIRRHOSIS: TYPE A</option>
						<option value="4202">4202: LI:CIRRHOSIS: TYPE B- HBSAG+</option>
						<option value="4203">4203: LI:CIRRHOSIS: TYPE NON A, NON B</option>
						<option value="4204">4204: LI:CIRRHOSIS: TYPE C</option>
						<option value="4205">4205: LI:CIRRHOSIS: TYPE D</option>
						<option value="4206">4206: LI:CIRRHOSIS: TYPE B AND C</option>
						<option value="4207">4207: LI:CIRRHOSIS: TYPE B AND D</option>
						<option value="4208">4208: LI:CIRRHOSIS: CRYPTOGENIC- IDIOPATHIC</option>
						<option value="4209">4209: LI:CIRRHOSIS: CHRONIC ACTIVE HEPATITIS: ETIOLOGY UNKNOWN</option>
						<option value="4210">4210: LI:CIRRHOSIS: OTHER, SPECIFY (E.G., HISTIOCYTOSIS, SARCOIDOSIS, GRANULOMATOUS)</option>
						<option value="4212">4212: LI:CIRRHOSIS: AUTOIMMUNE</option>
						<option value="4213">4213: LI:CIRRHOSIS: CRYPTOGENIC (IDIOPATHIC)</option>
						<option value="4214">4214: LI:CIRRHOSIS: FATTY LIVER (NASH)</option>
						<option value="4215">4215: LI:ALCOHOLIC CIRRHOSIS</option>
						<option value="4216">4216: LI:ALCOHOLIC CIRRHOSIS WITH HEPATITIS C</option>
						<option value="4217">4217: LI:ACUTE ALCOHOLIC HEPATITIS</option>
						<option value="4220">4220: LI:PRIMARY BILIARY CIRRHOSIS (PBC)</option>
						<option value="4230">4230: LI:SEC BILIARY CIRRHOSIS: CAROLI'S DISEASE</option>
						<option value="4231">4231: LI:SEC BILIARY CIRRHOSIS: CHOLEDOCHOL CYST</option>
						<option value="4235">4235: LI:SEC BILIARY CIRRHOSIS: OTHER SPECIFY</option>
						<option value="4240">4240: LI:PSC: CROHN'S DISEASE</option>
						<option value="4241">4241: LI:PSC: ULCERATIVE COLITIS</option>
						<option value="4242">4242: LI:PSC: NO BOWEL DISEASE</option>
						<option value="4245">4245: LI:PSC: OTHER SPECIFY</option>
						<option value="4250">4250: LI:FAMILIAL CHOLESTASIS: BYLER'S DISEASE</option>
						<option value="4255">4255: LI:FAMILIAL CHOLESTASIS: OTHER SPECIFY</option>
						<option value="4260">4260: LI:CHOLES LIVER DISEASE: OTHER SPECIFY</option>
						<option value="4264">4264: LI:NEONATAL CHOLESTATIC LIVER DISEASE</option>
						<option value="4265">4265: LI:NEONATAL HEPATITIS OTHER SPECIFY</option>
						<option value="4270">4270: LI:BILIARY ATRESIA: EXTRAHEPATIC</option>
						<option value="4271">4271: LI:BILIARY HYPOPLASIA: NONSYNDROMIC PAUCITY OF INTRAHEPATIC BILE DUCT</option>
						<option value="4272">4272: LI:BILIARY HYPOPLASIA: ALAGILLE?S SYNDROME (PAUCITY OF INTRAHEPATIC BILE DUCT)</option>
						<option value="4275">4275: LI:BILIARY ATRESIA OR HYPOPLASIA: OTHER, SPECIFY</option>
						<option value="4280">4280: LI:CONGENITAL HEPATIC FIBROSIS</option>
						<option value="4285">4285: LI:CYSTIC FIBROSIS</option>
						<option value="4290">4290: LI:BUDD-CHIARI SYNDROME</option>
						<option value="4300">4300: LI:METDIS: ALPHA-1-ANTITRYPSIN DEFIC A-1-A</option>
						<option value="4301">4301: LI:METDIS: WILSON'S DISEASE, OTHER COPPER METABOLISM DISORDER</option>
						<option value="4302">4302: LI:METDIS: HEMOCHROMATOSIS - HEMOSIDEROSIS</option>
						<option value="4303">4303: LI:METDIS: GLYC STOR DIS TYPE I (GSD-I)</option>
						<option value="4304">4304: LI:METDIS: GLYC STOR DIS TYPE IV (GSD-IV)</option>
						<option value="4305">4305: LI:METDIS: HYPERLIPIDEMIA-II, HOMOZYGOUS HYPERCHOLESTEROLEMIA</option>
						<option value="4306">4306: LI:METDIS: TYROSINEMIA</option>
						<option value="4307">4307: LI:METDIS: PRIMARY OXALOSIS/OXALURIA, HYPEROXALURIA</option>
						<option value="4308">4308: LI:METDIS: MAPLE SYRUP URINE DISEASE</option>
						<option value="4315">4315: LI:METDIS: OTHER SPECIFY</option>
						<option value="4400">4400: LI:PLM: HEPATOMA - HEPATOCELLULAR CARCINOMA</option>
						<option value="4401">4401: LI:PLM: HEPATOMA (HCC) AND CIRRHOSIS</option>
						<option value="4402">4402: LI:PLM: FIBROLAMELLAR (FL-HC)</option>
						<option value="4403">4403: LI:PLM: CHOLANGIOCARCINOMA (CH-CA)</option>
						<option value="4404">4404: LI:PLM: HEPATOBLASTOMA (HBL)</option>
						<option value="4405">4405: LI:PLM: HEMANGIOENDOTHELIOMA, HEMANGIOSARCOMA, ANGIOSARCOMA</option>
						<option value="4410">4410: LI:PLM: OTHER SPECIFY (I.E., KLATZKIN TUMOR, LEIOMYSARCOMA)</option>
						<option value="4420">4420: LI:BILE DUCT CANCER: (CHOLANGIOMA, BILIARY TRACT CARCINOMA)</option>
						<option value="4430">4430: LI:SECONDARY HEPATIC MALIGNANCY OTHER SPECIFY</option>
						<option value="4450">4450: LI:BENIGN TUMOR: HEPATIC ADENOMA</option>
						<option value="4451">4451: LI:BENIGN TUMOR: POLYCYSTIC LIVER DISEASE</option>
						<option value="4455">4455: LI:BENIGN TUMOR: OTHER SPECIFY</option>
						<option value="4500">4500: LI:TPN/HYPERALIMENTATION IND LIVER DISEASE</option>
						<option value="4510">4510: LI:GRAFT VS. HOST DIS SEC TO NON-LI TX</option>
						<option value="4520">4520: LI:TRAUMA OTHER SPECIFY</option>
						<option value="4592">4592: LI:Hepatitis B: Chronic or Acute</option>
						<option value="4593">4593: LI:Hepatitis C: Chronic or Acute</option>
						<option value="4597">4597: LI:NA: Non-HD Followups Only</option>
						<option value="4598">4598: LI:GRAFT FAILURE</option>
						<option value="5000">5000: PA:RETRANSPLANT/GRAFT FAILURE</option>
						<option value="5001">5001: PA:DIABETES MELLITUS - TYPE I</option>
						<option value="5002">5002: PA:DIABETES MELLITUS - TYPE II</option>
						<option value="5003">5003: PA:DIABETES SECONDARY TO CHRONIC PANCREATITIS WITHOUT PANCREATECTOMY</option>
						<option value="5004">5004: PA:DIABETES SECONDARY TO CYSTIC FIBROSIS WITHOUT PANCREATECTOMY</option>
						<option value="5005">5005: PA:PANCREATIC CANCER</option>
						<option value="5006">5006: PA:BILE DUCT CANCER</option>
						<option value="5007">5007: PA:OTHER CANCERS</option>
						<option value="5008">5008: PA:PANCREATECTOMY PRIOR TO PANCREAS TX</option>
						<option value="5009">5009: PA:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
						<option value="6000">6000: SGS: INTESTINAL ATRESIA</option>
						<option value="6001">6001: SGS: NECROTIZING ENTEROCOLITIS</option>
						<option value="6002">6002: SGS: INTESTINAL VOLVULUS SECONDARY TO MALROTATION</option>
						<option value="6003">6003: SGS: INTESTINAL VOLVULUS SECONDARY TO ADHESIONS</option>
						<option value="6004">6004: SGS: INTESTINAL VOLVULUS SECONDARY TO PERSISTENT OMPHALOMESENTRERIC DUCT</option>
						<option value="6005">6005: SGS: GASTROSCHISIS</option>
						<option value="6006">6006: SGS: MASS RESECT SEC TO INF BOWEL-CROHNS</option>
						<option value="6007">6007: SGS: MASS RESECT SEC TO TUMOR</option>
						<option value="6008">6008: SGS: MASSIVE RESECTION SECONDARY TO MESENTERIC ARTERIAL THROMBOSIS OR EMBOLUS</option>
						<option value="6009">6009: SGS: MASS RESECT SEC TO MES VENOUS THROM</option>
						<option value="6048">6048: SGS: OTHER SPECIFY</option>
						<option value="6049">6049: SGS: UNSPECIFIED</option>
						<option value="6050">6050: IN:FBP: HIRSCHSPRUNG'S DISEASE</option>
						<option value="6051">6051: IN:FBP: NEURONAL INTESTINAL DYSPLASIA</option>
						<option value="6052">6052: IN:FBP: PSEUDO-OBSTRUCTION-NEUROPATHIC</option>
						<option value="6053">6053: IN:FBP: PSEUDO-OBSTRUCTION-MYOPATHIC</option>
						<option value="6054">6054: IN:FBP: PROTEIN-LOSING ENTEROPATHY</option>
						<option value="6055">6055: IN:FBP: MICROVILLOUS INCLUSION DISEASE</option>
						<option value="6098">6098: IN:FBP: OTHER SPECIFY</option>
						<option value="6099">6099: IN:FBP: UNSPECIFIED</option>
						<option value="6100">6100: IN:GRAFT FAILURE</option>
						<option value="6150">6150: IN:RETRANSPLANT</option>
						<option value="6497">6497: IN:INTESTINAL DISEASE OTHER SPECIFY</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN DGN OSTXT</label>
					<label className="text-secondary" >Primary Diagnosis/Specify:</label>
					<input className="form-control" as="textarea" rows="3" maxLength="50" value={this.props.canDgnOstxt} onChange={this.props.onChangeCanDgnOstxt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ECMO</label>
					<label className="text-secondary" >Life Support: ECMO:</label>
					<select className="form-control" value={this.props.canEcmo} onChange={this.props.onChangeCanEcmo}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ELECTROLYTE</label>
					<label className="text-secondary" >Unmanageable fluid-electrolyte losses (IN Pediatric Only):</label>
					<select className="form-control" value={this.props.canElectrolyte} onChange={this.props.onChangeCanElectrolyte}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN EXHAUST VASC ACCESS</label>
					<label className="text-secondary" >Exhausted Vascular Access:</label>
					<select className="form-control" value={this.props.canExhaustVascAccess} onChange={this.props.onChangeCanExhaustVascAccess}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN FUNCTN STAT</label>
					<label className="text-secondary" >Patient/s Functional Status:</label>
					<select className="form-control" value={this.props.canFunctnStat} onChange={this.props.onChangeCanFunctnStat}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Performs activities of daily living with NO assistance.</option>
						<option value="2">2: Performs activities of daily living with SOME assistance.</option>
						<option value="3">3: Performs activities of daily living with TOTAL assistance.</option>
						<option value="996">996: Not Applicable (patient {"<"} 1 year old)</option>
						<option value="998">998: Unknown</option>
						<option value="2010">2010: 10% - Moribund, fatal processes progressing rapidly</option>
						<option value="2020">2020: 20% - Very sick, hospitalization necessary: active treatment necessary</option>
						<option value="2030">2030: 30% - Severely disabled: hospitalization is indicated, death not imminent</option>
						<option value="2040">2040: 40% - Disabled: requires special care and assistance</option>
						<option value="2050">2050: 50% - Requires considerable assistance and frequent medical care</option>
						<option value="2060">2060: 60% - Requires occasional assistance but is able to care for needs</option>
						<option value="2070">2070: 70% - Cares for self: unable to carry on normal activity or active work</option>
						<option value="2080">2080: 80% - Normal activity with effort: some symptoms of disease</option>
						<option value="2090">2090: 90% - Able to carry on normal activity: minor symptoms of disease</option>
						<option value="2100">2100: 100% - Normal, no complaints, no evidence of disease</option>
						<option value="4010">4010: 10% - No play; does not get out of bed</option>
						<option value="4020">4020: 20% - Often sleeping; play entirely limited to very passive activities</option>
						<option value="4030">4030: 30% - In bed; needs assistance even for quiet play</option>
						<option value="4040">4040: 40% - Mostly in bed; participates in quiet activities</option>
						<option value="4050">4050: 50% - Can dress but lies around much of day; no active play; can take part in quiet play/activities</option>
						<option value="4060">4060: 60% - Up and around, but minimal active play; keeps busy with quieter activities</option>
						<option value="4070">4070: 70% - Both greater restriction of and less time spent in play activity</option>
						<option value="4080">4080: 80% - Active, but tires more quickly</option>
						<option value="4090">4090: 90% - Minor restrictions in physically strenuous activity</option>
						<option value="4100">4100: 100% - Fully active, normal</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN HGT CM</label>
					<label className="text-secondary" >Candidate/s Height (stored in cm):</label>
					<input className="form-control" type="number" value={this.props.canHgtCm} onChange={this.props.onChangeCanHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN HGT WGT DT</label>
					<label className="text-secondary" >Date of Height & Weight Measurement (Ped Only):</label>
					<input className="form-control" type="datetime-local" value={this.props.canHgtWgtDt} onChange={this.props.onChangeCanHgtWgtDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN IABP</label>
					<label className="text-secondary" >Life Support: IABP:</label>
					<select className="form-control" value={this.props.canIabp} onChange={this.props.onChangeCanIabp}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN IV INOTROP</label>
					<label className="text-secondary" >Life Support: IV Inotropes:</label>
					<select className="form-control" value={this.props.canIvInotrop} onChange={this.props.onChangeCanIvInotrop}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LAST DIAL PRIOR WEEK</label>
					<label className="text-secondary" >Last non-blank val. of dialysis within prior week:</label>
					<select className="form-control" value={this.props.canLastDialPriorWeek} onChange={this.props.onChangeCanLastDialPriorWeek}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LIFE SUPPORT</label>
					<label className="text-secondary" >Patient on Life Support:</label>
					<select className="form-control" value={this.props.canLifeSupport} onChange={this.props.onChangeCanLifeSupport}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LIFE SUPPORT OTHER</label>
					<label className="text-secondary" >Life Support: Other Mechanism:</label>
					<select className="form-control" value={this.props.canLifeSupportOther} onChange={this.props.onChangeCanLifeSupportOther}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MOST RECENT CREAT</label>
					<label className="text-secondary" >Most Recent Absolute Creatinine:</label>
					<input className="form-control" type="number" value={this.props.canMostRecentCreat} onChange={this.props.onChangeCanMostRecentCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MOST RECENT HGT CM</label>
					<label className="text-secondary" >Candidate/s most recent Waitlist Height in centimeter:</label>
					<input className="form-control" type="number" value={this.props.canMostRecentHgtCm} onChange={this.props.onChangeCanMostRecentHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MOST RECENT WGT KG</label>
					<label className="text-secondary" >Candidate/s most recent Waitlist Weight in kilograms:</label>
					<input className="form-control" type="number" value={this.props.canMostRecentWgtKg} onChange={this.props.onChangeCanMostRecentWgtKg} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MOTOR DEVELOP</label>
					<label className="text-secondary" >Motor Development (Ped Only):</label>
					<select className="form-control" value={this.props.canMotorDevelop} onChange={this.props.onChangeCanMotorDevelop}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Definite Motor delay/impairment</option>
						<option value="2">2: Probable Motor delay/impairment</option>
						<option value="3">3: Questionable Motor delay/impairment</option>
						<option value="4">4: No Motor delay/impairment</option>
						<option value="998">998: Not Assessed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MUSCLE WASTING</label>
					<label className="text-secondary" >Marked Muscle Wasting:</label>
					<select className="form-control" value={this.props.canMuscleWasting} onChange={this.props.onChangeCanMuscleWasting}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN NEOPLASM</label>
					<label className="text-secondary" >Neoplasm:</label>
					<select className="form-control" value={this.props.canNeoplasm} onChange={this.props.onChangeCanNeoplasm}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PGE</label>
					<label className="text-secondary" >Life Support: PGE:</label>
					<select className="form-control" value={this.props.canPge} onChange={this.props.onChangeCanPge}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN PHYSC CAPACITY</label>
					<label className="text-secondary" >Physical Capacity::</label>
					<select className="form-control" value={this.props.canPhyscCapacity} onChange={this.props.onChangeCanPhyscCapacity}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No Limitations</option>
						<option value="2">2: Limited Mobility</option>
						<option value="3">3: Wheelchair bound or more limited</option>
						<option value="996">996: Not Applicable ({"<"} 1 year old or hospitalized)</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TOT ALBUMIN</label>
					<label className="text-secondary" >Total Serum Albumin:</label>
					<input className="form-control" type="number" value={this.props.canTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TOT BILI</label>
					<label className="text-secondary" >Total Bilirubin (IN Pediatric Only):</label>
					<input className="form-control" type="number" value={this.props.canTotBili} onChange={this.props.onChangeCanTotBili} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN VAD TAH</label>
					<label className="text-secondary" >Life Support: VAD/TAH:</label>
					<select className="form-control" value={this.props.canVadTah} onChange={this.props.onChangeCanVadTah}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Disability</option>
						<option value="2">2: Demands of Treatment</option>
						<option value="3">3: Insurance Conflict</option>
						<option value="4">4: Inability to Find Work</option>
						<option value="5">5: Patient Choice - Homemaker</option>
						<option value="6">6: Patient Choice - Student Full Time/Part Time</option>
						<option value="7">7: Patient Choice - Retired</option>
						<option value="8">8: Patient Choice - Other</option>
						<option value="996">996: Not Applicable - Hospitalized</option>
						<option value="998">998: Unknown</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN VARICEAL BLEEDING</label>
					<label className="text-secondary" >Variceal Bleeding within Last Two Weeks:</label>
					<select className="form-control" value={this.props.canVaricealBleeding} onChange={this.props.onChangeCanVaricealBleeding}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN VENTILATOR</label>
					<label className="text-secondary" >Life Support: Ventilator:</label>
					<select className="form-control" value={this.props.canVentilator} onChange={this.props.onChangeCanVentilator}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN WGT KG</label>
					<label className="text-secondary" >Candidate/s Weight in kilograms:</label>
					<input className="form-control" type="number" value={this.props.canWgtKg} onChange={this.props.onChangeCanWgtKg} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	canAbo: select.makeSelectCanAbo(),
	canAgeAtListing: select.makeSelectCanAgeAtListing(),
	canAgeInMonthsAtListing: select.makeSelectCanAgeInMonthsAtListing(),
	canArtificialLi: select.makeSelectCanArtificialLi(),
	canBmi: select.makeSelectCanBmi(),
	canDgn: select.makeSelectCanDgn(),
	canDgn2: select.makeSelectCanDgn2(),
	canDgnOstxt: select.makeSelectCanDgnOstxt(),
	canEcmo: select.makeSelectCanEcmo(),
	canElectrolyte: select.makeSelectCanElectrolyte(),
	canExhaustVascAccess: select.makeSelectCanExhaustVascAccess(),
	canFunctnStat: select.makeSelectCanFunctnStat(),
	canHgtCm: select.makeSelectCanHgtCm(),
	canHgtWgtDt: select.makeSelectCanHgtWgtDt(),
	canIabp: select.makeSelectCanIabp(),
	canIvInotrop: select.makeSelectCanIvInotrop(),
	canLastDialPriorWeek: select.makeSelectCanLastDialPriorWeek(),
	canLifeSupport: select.makeSelectCanLifeSupport(),
	canLifeSupportOther: select.makeSelectCanLifeSupportOther(),
	canMostRecentCreat: select.makeSelectCanMostRecentCreat(),
	canMostRecentHgtCm: select.makeSelectCanMostRecentHgtCm(),
	canMostRecentWgtKg: select.makeSelectCanMostRecentWgtKg(),
	canMotorDevelop: select.makeSelectCanMotorDevelop(),
	canMuscleWasting: select.makeSelectCanMuscleWasting(),
	canNeoplasm: select.makeSelectCanNeoplasm(),
	canPge: select.makeSelectCanPge(),
	canPhyscCapacity: select.makeSelectCanPhyscCapacity(),
	canTotAlbumin: select.makeSelectCanTotAlbumin(),
	canTotBili: select.makeSelectCanTotBili(),
	canVadTah: select.makeSelectCanVadTah(),
	canVaricealBleeding: select.makeSelectCanVaricealBleeding(),
	canVentilator: select.makeSelectCanVentilator(),
	canWgtKg: select.makeSelectCanWgtKg(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanAbo: evt => dispatch(action.changeCanAbo(evt.target.value)),
		onChangeCanAgeAtListing: evt => dispatch(action.changeCanAgeAtListing(evt.target.value)),
		onChangeCanAgeInMonthsAtListing: evt => dispatch(action.changeCanAgeInMonthsAtListing(evt.target.value)),
		onChangeCanArtificialLi: evt => dispatch(action.changeCanArtificialLi(evt.target.value)),
		onChangeCanBmi: evt => dispatch(action.changeCanBmi(evt.target.value)),
		onChangeCanDgn: evt => dispatch(action.changeCanDgn(evt.target.value)),
		onChangeCanDgn2: evt => dispatch(action.changeCanDgn2(evt.target.value)),
		onChangeCanDgnOstxt: evt => dispatch(action.changeCanDgnOstxt(evt.target.value)),
		onChangeCanEcmo: evt => dispatch(action.changeCanEcmo(evt.target.value)),
		onChangeCanElectrolyte: evt => dispatch(action.changeCanElectrolyte(evt.target.value)),
		onChangeCanExhaustVascAccess: evt => dispatch(action.changeCanExhaustVascAccess(evt.target.value)),
		onChangeCanFunctnStat: evt => dispatch(action.changeCanFunctnStat(evt.target.value)),
		onChangeCanHgtCm: evt => dispatch(action.changeCanHgtCm(evt.target.value)),
		onChangeCanHgtWgtDt: evt => dispatch(action.changeCanHgtWgtDt(evt.target.value)),
		onChangeCanIabp: evt => dispatch(action.changeCanIabp(evt.target.value)),
		onChangeCanIvInotrop: evt => dispatch(action.changeCanIvInotrop(evt.target.value)),
		onChangeCanLastDialPriorWeek: evt => dispatch(action.changeCanLastDialPriorWeek(evt.target.value)),
		onChangeCanLifeSupport: evt => dispatch(action.changeCanLifeSupport(evt.target.value)),
		onChangeCanLifeSupportOther: evt => dispatch(action.changeCanLifeSupportOther(evt.target.value)),
		onChangeCanMostRecentCreat: evt => dispatch(action.changeCanMostRecentCreat(evt.target.value)),
		onChangeCanMostRecentHgtCm: evt => dispatch(action.changeCanMostRecentHgtCm(evt.target.value)),
		onChangeCanMostRecentWgtKg: evt => dispatch(action.changeCanMostRecentWgtKg(evt.target.value)),
		onChangeCanMotorDevelop: evt => dispatch(action.changeCanMotorDevelop(evt.target.value)),
		onChangeCanMuscleWasting: evt => dispatch(action.changeCanMuscleWasting(evt.target.value)),
		onChangeCanNeoplasm: evt => dispatch(action.changeCanNeoplasm(evt.target.value)),
		onChangeCanPge: evt => dispatch(action.changeCanPge(evt.target.value)),
		onChangeCanPhyscCapacity: evt => dispatch(action.changeCanPhyscCapacity(evt.target.value)),
		onChangeCanTotAlbumin: evt => dispatch(action.changeCanTotAlbumin(evt.target.value)),
		onChangeCanTotBili: evt => dispatch(action.changeCanTotBili(evt.target.value)),
		onChangeCanVadTah: evt => dispatch(action.changeCanVadTah(evt.target.value)),
		onChangeCanVaricealBleeding: evt => dispatch(action.changeCanVaricealBleeding(evt.target.value)),
		onChangeCanVentilator: evt => dispatch(action.changeCanVentilator(evt.target.value)),
		onChangeCanWgtKg: evt => dispatch(action.changeCanWgtKg(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( CandFormPhys );
