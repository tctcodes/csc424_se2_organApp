import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as select from './selectors';
import * as action from './actions';
import reducer from './reducer';
import saga from './saga';

export class CandFormTx extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN ANASTOMOSIS</label>
					<label className="text-secondary" >Was anastomosis initiated?:</label>
					<input className="form-control" type="text" value={this.props.canAnastomosis} onChange={this.props.onChangeCanAnastomosis} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN SOURCE</label>
					<label className="text-secondary" >Source of Candidate Data: A =Active Waitlist,R= Removed from Waitlist,L=Live Don Organ Recipient never on waitlist:</label>
					<input className="form-control" type="text" value={this.props.canSource} onChange={this.props.onChangeCanSource} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TRR EXISTS</label>
					<label className="text-secondary" >TRR found for this PX_ID-org_ty:</label>
					<input className="form-control" type="number" value={this.props.canTrrExists} onChange={this.props.onChangeCanTrrExists} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN TX COUNTRY</label>
					<label className="text-secondary" >Country of transplant, if outside the US:</label>
					<select className="form-control" value={this.props.canTxCountry} onChange={this.props.onChangeCanTxCountry}>
						<option value="" hidden disabled selected/>
						<option value="1">1: UNITED STATES</option>
						<option value="2">2: AFGHANISTAN</option>
						<option value="3">3: ALBANIA</option>
						<option value="4">4: ALGERIA</option>
						<option value="5">5: AMERICAN SAMOA</option>
						<option value="6">6: ANDORRA</option>
						<option value="7">7: ANGOLA</option>
						<option value="8">8: ANGUILLA</option>
						<option value="9">9: ANTIGUA and BARBUDA</option>
						<option value="10">10: ARGENTINA</option>
						<option value="11">11: ARMENIA</option>
						<option value="12">12: ARUBA</option>
						<option value="13">13: AUSTRALIA</option>
						<option value="14">14: AUSTRIA</option>
						<option value="15">15: AZERBAIJAN</option>
						<option value="16">16: AZORES</option>
						<option value="17">17: BAHAMAS</option>
						<option value="18">18: BAHRAIN</option>
						<option value="19">19: BANGLADESH</option>
						<option value="20">20: BARBADOS</option>
						<option value="21">21: BELARUS</option>
						<option value="22">22: BELGIUM</option>
						<option value="23">23: BELIZE</option>
						<option value="24">24: BENIN</option>
						<option value="25">25: BERMUDA</option>
						<option value="26">26: BHUTAN</option>
						<option value="27">27: BOLIVIA</option>
						<option value="28">28: BOSNIA-HERZEGOVINA</option>
						<option value="29">29: BOTSWANA</option>
						<option value="30">30: BRAZIL</option>
						<option value="31">31: BRITISH INDIAN OCEAN TERRITORY</option>
						<option value="32">32: BRITISH VIRGIN ISLANDS</option>
						<option value="33">33: BRUNEI DARUSSALAM</option>
						<option value="34">34: BULGARIA</option>
						<option value="35">35: BURKINA</option>
						<option value="36">36: BURMA (MYANMAR)</option>
						<option value="37">37: BURUNDI</option>
						<option value="38">38: CAMBODIA</option>
						<option value="39">39: CAMEROON</option>
						<option value="40">40: CANADA</option>
						<option value="41">41: CANARY ISLANDS</option>
						<option value="42">42: CANTON and ENDERBURY ISLANDS</option>
						<option value="43">43: CAPE VERDE</option>
						<option value="44">44: CAYMAN ISLAND</option>
						<option value="45">45: CENTRAL AFRICAN REPUBLIC</option>
						<option value="46">46: CHAD</option>
						<option value="47">47: CHILE</option>
						<option value="48">48: CHINA</option>
						<option value="49">49: CHRISTMAS ISLANDS</option>
						<option value="50">50: COCOS (KEELING) ISLAND</option>
						<option value="51">51: COLOMBIA</option>
						<option value="52">52: COMOROS</option>
						<option value="53">53: CONGO</option>
						<option value="54">54: CONGO, DEMOCRATIC REPUBLIC of</option>
						<option value="55">55: COOK ISLANDS</option>
						<option value="56">56: COSTA RICA</option>
						<option value="57">57: CROATIA</option>
						<option value="58">58: CUBA</option>
						<option value="59">59: CYPRUS</option>
						<option value="60">60: CZECH REPUBLIC:THE</option>
						<option value="61">61: DENMARK</option>
						<option value="62">62: DJIBOUTI</option>
						<option value="63">63: DOMINICA</option>
						<option value="64">64: DOMINICAN REPUBLIC</option>
						<option value="65">65: ECUADOR</option>
						<option value="66">66: EGYPT</option>
						<option value="67">67: EL SALVADOR</option>
						<option value="68">68: ENGLAND</option>
						<option value="69">69: EQUATORIAL GUINEA</option>
						<option value="70">70: ESTONIA</option>
						<option value="71">71: ETHIOPIA</option>
						<option value="72">72: FALKLAND ISLANDS (MALVINAS)</option>
						<option value="73">73: FAROE ISLANDS</option>
						<option value="74">74: FIJI</option>
						<option value="75">75: FINLAND</option>
						<option value="76">76: FRANCE</option>
						<option value="77">77: FRENCH GUIANA</option>
						<option value="78">78: FRENCH POLYNESIA</option>
						<option value="79">79: FRENCH SOUTHERN and ANTARCTIC</option>
						<option value="80">80: GABON</option>
						<option value="81">81: GAMBIA:THE</option>
						<option value="82">82: GAZA STRIP</option>
						<option value="83">83: GEORGIA</option>
						<option value="84">84: GERMANY:FEDERAL REPUBLIC of</option>
						<option value="85">85: GHANA</option>
						<option value="86">86: GIBRALTAR</option>
						<option value="87">87: GREECE</option>
						<option value="88">88: GREENLAND</option>
						<option value="89">89: GRENADA</option>
						<option value="90">90: GUADELOUPE</option>
						<option value="91">91: GUAM</option>
						<option value="92">92: GUATEMALA</option>
						<option value="93">93: GUINEA</option>
						<option value="94">94: GUINEA-BISSAU</option>
						<option value="95">95: GUYANA</option>
						<option value="96">96: HAITI</option>
						<option value="97">97: HEARD ISLAND and MCDONALD ISLANDS</option>
						<option value="98">98: HONDURAS</option>
						<option value="99">99: HONG KONG</option>
						<option value="100">100: HUNGARY</option>
						<option value="101">101: ICELAND</option>
						<option value="102">102: INDIA</option>
						<option value="103">103: INDONESIA</option>
						<option value="104">104: IRAN</option>
						<option value="105">105: IRAQ</option>
						<option value="106">106: IRELAND</option>
						<option value="107">107: ISRAEL</option>
						<option value="108">108: ITALY</option>
						<option value="109">109: IVORY COAST</option>
						<option value="110">110: JAMAICA</option>
						<option value="111">111: JAPAN</option>
						<option value="112">112: JOHNSTON ATOLL</option>
						<option value="113">113: JORDAN</option>
						<option value="114">114: KAMPUCHEA:DEMOCRATIC</option>
						<option value="115">115: KAZAKHSTAN</option>
						<option value="116">116: KENYA</option>
						<option value="117">117: KIRIBATI</option>
						<option value="118">118: KOREA</option>
						<option value="119">119: KUWAIT</option>
						<option value="120">120: KYRGYZSTAN</option>
						<option value="121">121: LAO PEOPLES' DEMOCRATIC REPUBLIC</option>
						<option value="122">122: LATIN AMERICA</option>
						<option value="123">123: LATVIA</option>
						<option value="124">124: LEBANON</option>
						<option value="125">125: LESOTHO</option>
						<option value="126">126: LIBERIA</option>
						<option value="127">127: LIBYA</option>
						<option value="128">128: LIECHTENSTEIN</option>
						<option value="129">129: LITHUANIA</option>
						<option value="130">130: LUXEMBOURG</option>
						<option value="131">131: MACAU</option>
						<option value="132">132: MACEDONIA (SKOPJE)</option>
						<option value="133">133: MADAGASCAR</option>
						<option value="134">134: MADEIRA ISLAND</option>
						<option value="135">135: MALAWI</option>
						<option value="136">136: MALAYSIA</option>
						<option value="137">137: MALDIVES</option>
						<option value="138">138: MALI</option>
						<option value="139">139: MALTA</option>
						<option value="140">140: MARSHALL ISLANDS</option>
						<option value="141">141: MARTINIQUE</option>
						<option value="142">142: MAURITANIA</option>
						<option value="143">143: MAURITIUS</option>
						<option value="144">144: MEXICO</option>
						<option value="145">145: MICRONESIA:FEDERATED STATES of</option>
						<option value="146">146: MIDWAY ISLANDS</option>
						<option value="147">147: MOLDOVA</option>
						<option value="148">148: MONACO</option>
						<option value="149">149: MONGOLIA</option>
						<option value="150">150: MONTSERRAT</option>
						<option value="151">151: MOROCCO</option>
						<option value="152">152: MOZAMBIQUE</option>
						<option value="153">153: NAMIBIA</option>
						<option value="154">154: NAURU</option>
						<option value="155">155: NEPAL</option>
						<option value="156">156: NETHERLANDS</option>
						<option value="157">157: NETHERLANDS ANTILLES</option>
						<option value="158">158: NEW CALEDONIA</option>
						<option value="159">159: NEW ZEALAND</option>
						<option value="160">160: NICARAGUA</option>
						<option value="161">161: NIGER</option>
						<option value="162">162: NIGERIA</option>
						<option value="163">163: NIUE</option>
						<option value="164">164: NORFOLK ISLAND</option>
						<option value="165">165: NORTH KOREA</option>
						<option value="166">166: NORTHERN MARIANA ISLANDS</option>
						<option value="167">167: NORWAY</option>
						<option value="168">168: OMAN</option>
						<option value="169">169: PAKISTAN</option>
						<option value="170">170: PALAU</option>
						<option value="171">171: PANAMA</option>
						<option value="172">172: PAPUA NEW GUINEA</option>
						<option value="173">173: PARAGUAY</option>
						<option value="174">174: PERU</option>
						<option value="175">175: PHILIPPINES</option>
						<option value="176">176: PITCAIRN ISLAND</option>
						<option value="177">177: POLAND</option>
						<option value="178">178: PORTUGAL</option>
						<option value="179">179: PUERTO RICO</option>
						<option value="180">180: QATAR</option>
						<option value="181">181: REUNION</option>
						<option value="182">182: ROMANIA</option>
						<option value="183">183: RUSSIA</option>
						<option value="184">184: RWANDA</option>
						<option value="185">185: SAINT LUCIA</option>
						<option value="186">186: SAINT VINCENT and THE GRENADINES</option>
						<option value="187">187: SAMOA</option>
						<option value="188">188: SAN MARINO</option>
						<option value="189">189: SAO TOME and PRINCIPE</option>
						<option value="190">190: SAUDI ARABIA</option>
						<option value="191">191: SENEGAL</option>
						<option value="192">192: SERBIA AND MONTENEGRO</option>
						<option value="193">193: SEYCHELLES</option>
						<option value="194">194: SIERRA LEONE</option>
						<option value="195">195: SINGAPORE</option>
						<option value="196">196: SLOVAKIA</option>
						<option value="197">197: SLOVENIA</option>
						<option value="198">198: SOLOMON ISLANDS</option>
						<option value="199">199: SOMALIA</option>
						<option value="200">200: SOUTH AFRICA</option>
						<option value="201">201: SOUTH KOREA</option>
						<option value="202">202: SPAIN</option>
						<option value="203">203: SPANISH AFRICA</option>
						<option value="204">204: SRI LANKA</option>
						<option value="205">205: ST. CHRISTOPHER</option>
						<option value="206">206: ST. HELENA</option>
						<option value="207">207: ST. KITTS and NEVIS</option>
						<option value="208">208: ST. PIERRE and MIQUELON</option>
						<option value="209">209: SUDAN</option>
						<option value="210">210: SURINAME</option>
						<option value="211">211: SVALBARD and JAN MAYEN ISLANDS</option>
						<option value="212">212: SWAZILAND</option>
						<option value="213">213: SWEDEN</option>
						<option value="214">214: SWITZERLAND</option>
						<option value="215">215: SYRIAN ARAB REPUBLIC</option>
						<option value="216">216: TAIWAN</option>
						<option value="217">217: TAJIKISTAN</option>
						<option value="218">218: TANZANIA:UNTIED REPUBLIC of</option>
						<option value="219">219: THAILAND</option>
						<option value="220">220: TOGO</option>
						<option value="221">221: TOKELAU</option>
						<option value="222">222: TONGA</option>
						<option value="223">223: TRINIDAD and TOBAGO</option>
						<option value="224">224: TUNISIA</option>
						<option value="225">225: TURKEY</option>
						<option value="226">226: TURKMENISTAN</option>
						<option value="227">227: TURKS and CAICOS ISLAND</option>
						<option value="228">228: TUVALU</option>
						<option value="229">229: UGANDA</option>
						<option value="230">230: UKRAINE</option>
						<option value="231">231: UNITED ARAB EMIRATES</option>
						<option value="232">232: UNITED KINGDOM</option>
						<option value="234">234: URUGUAY</option>
						<option value="235">235: USA MINOR OUTLYING ISLANDS</option>
						<option value="236">236: UZBEKISTAN</option>
						<option value="237">237: VANUATA</option>
						<option value="238">238: VATICAN CITY</option>
						<option value="239">239: VENEZUELA</option>
						<option value="240">240: VIETNAM</option>
						<option value="241">241: VIRGIN ISLANDS of the USA</option>
						<option value="242">242: YEMEN:REPUBLIC of</option>
						<option value="243">243: ZAMBIA</option>
						<option value="244">244: ZIMBABWE</option>
						<option value="998">998: UNKNOWN</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DONOR ID</label>
					<label className="text-secondary" >Encrypted Unique Donor ID (all donors) - foreign key:</label>
					<input className="form-control" type="number" readOnly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON TY</label>
					<label className="text-secondary" >Donor Type (C-deceased, L-living):</label>
					<input className="form-control" type="text" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >ORG AR</label>
					<label className="text-secondary" >Organ type with pancreas expanded to PTA and PAK:</label>
					<input className="form-control" type="text" value={this.props.orgAr} onChange={this.props.onChangeOrgAr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS NEXTTX</label>
					<label className="text-secondary" >Transplant Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.persNexttx} onChange={this.props.onChangePersNexttx} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS NEXTTX TRR ID</label>
					<label className="text-secondary" >Unique identifier for TRR - unique key:</label>
					<input className="form-control" type="number" readOnly value={this.props.persNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS OPTN DEATH DT</label>
					<label className="text-secondary" >OPTN Death date by unique person:</label>
					<input className="form-control" type="datetime-local" value={this.props.persOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS RESTRICT DEATH DT</label>
					<label className="text-secondary" >Restricted death date:</label>
					<input className="form-control" type="datetime-local" value={this.props.persRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS RESTRICT DEATH VRFY</label>
					<label className="text-secondary" >Restricted death verification level:</label>
					<select className="form-control" value={this.props.persRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy}>
						<option value="" hidden disabled selected/>
						<option value="D">D: Death verified, but not date</option>
						<option value="N">N: Not verified</option>
						<option value="V">V: Death date verified</option>
						<option value=""></option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >PERS SSA DEATH DT</label>
					<label className="text-secondary" >Death date determined from SSA database:</label>
					<input className="form-control" type="datetime-local" value={this.props.persSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TX DT</label>
					<label className="text-secondary" >Transplant Date:</label>
					<input className="form-control" type="datetime-local" value={this.props.recTxDt} onChange={this.props.onChangeRecTxDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC TX PROCEDURE TY</label>
					<label className="text-secondary" >Transplant Procedure Type:</label>
					<select className="form-control" value={this.props.recTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy}>
						<option value="" hidden disabled selected/>
						<option value="101">101: LEFT KIDNEY</option>
						<option value="102">102: RIGHT KIDNEY</option>
						<option value="103">103: EN-BLOC</option>
						<option value="104">104: Sequential Kidney</option>
						<option value="105">105: Hemi-Renal</option>
						<option value="201">201: Pancreas Segment</option>
						<option value="202">202: Whole Pancreas with Duodenum</option>
						<option value="203">203: Whole Pancreas with Duodenal Patch</option>
						<option value="204">204: Whole Pancreas</option>
						<option value="301">301: Pancreas segment / Kidney Right</option>
						<option value="302">302: Pancreas segment / Kidney Left</option>
						<option value="303">303: Pancreas segment / En-bloc Kidney</option>
						<option value="304">304: Pancreas Segment/Sequential Kidney</option>
						<option value="305">305: Pancreas segment / Hemi-Renal</option>
						<option value="306">306: Whole pancreas with duodenum / left kidney</option>
						<option value="307">307: Whole pancreas with duodenum / right kidney</option>
						<option value="308">308: Whole pancreas with duodenum / en-bloc kidneys</option>
						<option value="309">309: Pancreas with duodenum/sequential kidney</option>
						<option value="311">311: Whole pancreas with duodenal patch / left kidney</option>
						<option value="312">312: Whole pancreas with duodenal patch / right kidney</option>
						<option value="313">313: Whole pancreas with duodenal patch / en-bloc kidneys</option>
						<option value="314">314: Pancreas with duodenal patch/sequential kidney</option>
						<option value="316">316: Whole pancreas / left kidney</option>
						<option value="317">317: Whole pancreas / right kidney</option>
						<option value="318">318: Whole pancreas / en-bloc kidneys</option>
						<option value="319">319: Whole pancreas/sequential kidney</option>
						<option value="401">401: Whole Intestine</option>
						<option value="402">402: Intestine Segment</option>
						<option value="403">403: Whole Intestine with Pancreas (Technical Reasons)</option>
						<option value="404">404: Intestine Segment with Pancreas (Technical Reasons)</option>
						<option value="501">501: Heart</option>
						<option value="502">502: Heart Lung</option>
						<option value="601">601: SINGLE LEFT LUNG</option>
						<option value="602">602: SINGLE RIGHT LUNG</option>
						<option value="603">603: BILATERAL SEQUENTIAL LUNG</option>
						<option value="604">604: EN-BLOC DOUBLE LUNG</option>
						<option value="605">605: LOBE, RIGHT</option>
						<option value="606">606: LOBE, LEFT</option>
						<option value="701">701: Whole Liver</option>
						<option value="702">702: Partial Liver, remainder not Tx or Living Transplant</option>
						<option value="703">703: Split Liver</option>
						<option value="704">704: Whole Liver with Pancreas (Technical Reasons)</option>
						<option value="705">705: Partial Liver with Pancreas (Technical Reasons)</option>
						<option value="706">706: Split Liver with Pancreas (Technical Reasons)</option>
					</select>
				</div>
			</div>
		)
	}
}
const mapStateToProps = createStructuredSelector({
	canAnastomosis: select.makeSelectCanAnastomosis(),
	canSource: select.makeSelectCanSource(),
	canTrrExists: select.makeSelectCanTrrExists(),
	canTxCountry: select.makeSelectCanTxCountry(),
	donorId: select.makeSelectDonorId(),
	donTy: select.makeSelectDonTy(),
	orgAr: select.makeSelectOrgAr(),
	persNexttx: select.makeSelectPersNexttx(),
	persNexttxTrrId: select.makeSelectPersNexttxTrrId(),
	persOptnDeathDt: select.makeSelectPersOptnDeathDt(),
	persRestrictDeathDt: select.makeSelectPersRestrictDeathDt(),
	persRestrictDeathVrfy: select.makeSelectPersRestrictDeathVrfy(),
	persSsaDeathDt: select.makeSelectPersSsaDeathDt(),
	recTxDt: select.makeSelectRecTxDt(),
	recTxProcedureTy: select.makeSelectRecTxProcedureTy(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanAnastomosis: evt => dispatch(action.changeCanAnastomosis(evt.target.value)),
		onChangeCanSource: evt => dispatch(action.changeCanSource(evt.target.value)),
		onChangeCanTrrExists: evt => dispatch(action.changeCanTrrExists(evt.target.value)),
		onChangeCanTxCountry: evt => dispatch(action.changeCanTxCountry(evt.target.value)),
		onChangeDonorId: evt => dispatch(action.changeDonorId(evt.target.value)),
		onChangeDonTy: evt => dispatch(action.changeDonTy(evt.target.value)),
		onChangeOrgAr: evt => dispatch(action.changeOrgAr(evt.target.value)),
		onChangePersNexttx: evt => dispatch(action.changePersNexttx(evt.target.value)),
		onChangePersNexttxTrrId: evt => dispatch(action.changePersNexttxTrrId(evt.target.value)),
		onChangePersOptnDeathDt: evt => dispatch(action.changePersOptnDeathDt(evt.target.value)),
		onChangePersRestrictDeathDt: evt => dispatch(action.changePersRestrictDeathDt(evt.target.value)),
		onChangePersRestrictDeathVrfy: evt => dispatch(action.changePersRestrictDeathVrfy(evt.target.value)),
		onChangePersSsaDeathDt: evt => dispatch(action.changePersSsaDeathDt(evt.target.value)),
		onChangeRecTxDt: evt => dispatch(action.changeRecTxDt(evt.target.value)),
		onChangeRecTxProcedureTy: evt => dispatch(action.changeRecTxProcedureTy(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'CandFormTx', reducer });
const withSaga = injectSaga({ key: 'CandFormTx', saga });
export default compose( withReducer, withSaga, withConnect)(CandFormTx);
