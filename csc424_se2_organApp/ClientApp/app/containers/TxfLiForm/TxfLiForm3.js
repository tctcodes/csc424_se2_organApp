import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxfLiForm3 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL REJ ACUTE</label>
					<label className="text-secondary" >Acute Rejection:</label>
					<select className="form-control" value={this.props.tflFailRejAcute} onChange={this.props.onChangeTflFailRejAcute}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL REJ CHRONIC</label>
					<label className="text-secondary" >Chronic Rejection:</label>
					<select className="form-control" value={this.props.tflFailRejChronic} onChange={this.props.onChangeTflFailRejChronic}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FAIL VASC THROMB</label>
					<label className="text-secondary" >Vascular Thrombosis:</label>
					<select className="form-control" value={this.props.tflFailVascThromb} onChange={this.props.onChangeTflFailVascThromb}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FOL CD</label>
					<label className="text-secondary" >Follow Up code:</label>
					<select className="form-control" value={this.props.tflFolCd} onChange={this.props.onChangeTflFolCd}>
						<option value="" hidden disabled selected/>
						<option value="1">1: HOSPITAL DISCHARGE </option>
						<option value="3">3: 3 MONTH </option>
						<option value="6">6: 6 MONTH </option>
						<option value="10">10: 1 YEAR </option>
						<option value="20">20: 2 YEAR </option>
						<option value="30">30: 3 YEAR </option>
						<option value="40">40: 4 YEAR </option>
						<option value="50">50: 5 YEAR </option>
						<option value="60">60: 6 YEAR </option>
						<option value="70">70: 7 YEAR </option>
						<option value="80">80: 8 YEAR </option>
						<option value="90">90: 9 YEAR </option>
						<option value="100">100: 10 YEAR </option>
						<option value="110">110: 11 YEAR </option>
						<option value="120">120: 12 YEAR </option>
						<option value="130">130: 13 YEAR </option>
						<option value="140">140: 14 YEAR </option>
						<option value="150">150: 15 YEAR </option>
						<option value="160">160: 16 YEAR </option>
						<option value="170">170: 17 YEAR </option>
						<option value="180">180: 18 YEAR </option>
						<option value="190">190: 19 YEAR </option>
						<option value="200">200: 20 YEAR </option>
						<option value="210">210: 21 YEAR </option>
						<option value="220">220: 22 YEAR </option>
						<option value="230">230: 23 YEAR </option>
						<option value="240">240: 24 YEAR </option>
						<option value="250">250: 25 YEAR </option>
						<option value="260">260: 26 YEAR </option>
						<option value="270">270: 27 YEAR </option>
						<option value="280">280: 28 YEAR </option>
						<option value="290">290: 29 YEAR </option>
						<option value="300">300: 30 YEAR </option>
						<option value="310">310: 31 YEAR </option>
						<option value="320">320: 32 YEAR </option>
						<option value="330">330: 33 YEAR </option>
						<option value="340">340: 34 YEAR </option>
						<option value="350">350: 35 YEAR </option>
						<option value="360">360: 36 YEAR </option>
						<option value="370">370: 37 YEAR </option>
						<option value="380">380: 38 YEAR </option>
						<option value="390">390: 39 YEAR </option>
						<option value="400">400: 40 YEAR </option>
						<option value="410">410: 41 YEAR </option>
						<option value="420">420: 42 YEAR </option>
						<option value="430">430: 43 YEAR </option>
						<option value="440">440: 44 YEAR </option>
						<option value="450">450: 45 YEAR </option>
						<option value="460">460: 46 YEAR </option>
						<option value="470">470: 47 YEAR </option>
						<option value="480">480: 48 YEAR </option>
						<option value="490">490: 49 YEAR </option>
						<option value="500">500: 50 YEAR </option>
						<option value="510">510: 51 YEAR </option>
						<option value="520">520: 52 YEAR </option>
						<option value="530">530: 53 YEAR </option>
						<option value="540">540: 54 YEAR </option>
						<option value="550">550: 55 YEAR </option>
						<option value="560">560: 56 YEAR </option>
						<option value="570">570: 57 YEAR </option>
						<option value="580">580: 58 YEAR </option>
						<option value="590">590: 59 YEAR </option>
						<option value="600">600: 60 YEAR </option>
						<option value="610">610: 61 YEAR </option>
						<option value="620">620: 62 YEAR </option>
						<option value="630">630: 63 YEAR </option>
						<option value="640">640: 64 YEAR </option>
						<option value="650">650: 65 YEAR </option>
						<option value="660">660: 66 YEAR </option>
						<option value="670">670: 67 YEAR </option>
						<option value="680">680: 68 YEAR </option>
						<option value="690">690: 69 YEAR </option>
						<option value="700">700: 70 YEAR </option>
						<option value="710">710: 71 YEAR </option>
						<option value="720">720: 72 YEAR </option>
						<option value="730">730: 73 YEAR </option>
						<option value="740">740: 74 YEAR </option>
						<option value="750">750: 75 YEAR </option>
						<option value="760">760: 76 YEAR </option>
						<option value="770">770: 77 YEAR </option>
						<option value="780">780: 78 YEAR </option>
						<option value="790">790: 79 YEAR </option>
						<option value="800">800: GRAFT FAILURE </option>
						<option value="801">801: 1 YEAR AFTER GRAFT FAILURE </option>
						<option value="802">802: 2 YEAR AFTER GRAFT FAILURE </option>
						<option value="803">803: 3 YEAR AFTER GRAFT FAILURE </option>
						<option value="804">804: 4 YEAR AFTER GRAFT FAILURE </option>
						<option value="805">805: 5 YEAR AFTER GRAFT FAILURE </option>
						<option value="806">806: 6 YEAR AFTER GRAFT FAILURE </option>
						<option value="807">807: 7 YEAR AFTER GRAFT FAILURE </option>
						<option value="808">808: 8 YEAR AFTER GRAFT FAILURE </option>
						<option value="809">809: 9 YEAR AFTER GRAFT FAILURE </option>
						<option value="810">810: 10 YEAR AFTER GRAFT FAILURE </option>
						<option value="811">811: 11 YEAR AFTER GRAFT FAILURE </option>
						<option value="812">812: 12 YEAR AFTER GRAFT FAILURE </option>
						<option value="813">813: 13 YEAR AFTER GRAFT FAILURE </option>
						<option value="814">814: 14 YEAR AFTER GRAFT FAILURE </option>
						<option value="815">815: 15 YEAR AFTER GRAFT FAILURE </option>
						<option value="816">816: 16 YEAR AFTER GRAFT FAILURE </option>
						<option value="817">817: 17 YEAR AFTER GRAFT FAILURE </option>
						<option value="818">818: 18 YEAR AFTER GRAFT FAILURE </option>
						<option value="819">819: 19 YEAR AFTER GRAFT FAILURE </option>
						<option value="820">820: 20 YEAR AFTER GRAFT FAILURE </option>
						<option value="821">821: 21 YEAR AFTER GRAFT FAILURE </option>
						<option value="822">822: 22 YEAR AFTER GRAFT FAILURE </option>
						<option value="823">823: 23 YEAR AFTER GRAFT FAILURE </option>
						<option value="824">824: 24 YEAR AFTER GRAFT FAILURE </option>
						<option value="825">825: 25 YEAR AFTER GRAFT FAILURE </option>
						<option value="826">826: 26 YEAR AFTER GRAFT FAILURE </option>
						<option value="827">827: 27 YEAR AFTER GRAFT FAILURE </option>
						<option value="828">828: 28 YEAR AFTER GRAFT FAILURE </option>
						<option value="829">829: 29 YEAR AFTER GRAFT FAILURE </option>
						<option value="830">830: 30 YEAR AFTER GRAFT FAILURE </option>
						<option value="831">831: 31 YEAR AFTER GRAFT FAILURE </option>
						<option value="832">832: 32 YEAR AFTER GRAFT FAILURE </option>
						<option value="833">833: 33 YEAR AFTER GRAFT FAILURE </option>
						<option value="834">834: 34 YEAR AFTER GRAFT FAILURE </option>
						<option value="835">835: 35 YEAR AFTER GRAFT FAILURE </option>
						<option value="836">836: 36 YEAR AFTER GRAFT FAILURE </option>
						<option value="837">837: 37 YEAR AFTER GRAFT FAILURE </option>
						<option value="838">838: 38 YEAR AFTER GRAFT FAILURE </option>
						<option value="839">839: 39 YEAR AFTER GRAFT FAILURE </option>
						<option value="840">840: 40 YEAR AFTER GRAFT FAILURE </option>
						<option value="841">841: 41 YEAR AFTER GRAFT FAILURE </option>
						<option value="842">842: 42 YEAR AFTER GRAFT FAILURE </option>
						<option value="843">843: 43 YEAR AFTER GRAFT FAILURE </option>
						<option value="844">844: 44 YEAR AFTER GRAFT FAILURE </option>
						<option value="845">845: 45 YEAR AFTER GRAFT FAILURE </option>
						<option value="846">846: 46 YEAR AFTER GRAFT FAILURE </option>
						<option value="847">847: 47 YEAR AFTER GRAFT FAILURE </option>
						<option value="848">848: 48 YEAR AFTER GRAFT FAILURE </option>
						<option value="849">849: 49 YEAR AFTER GRAFT FAILURE </option>
						<option value="850">850: 50 YEAR AFTER GRAFT FAILURE </option>
						<option value="900">900: LOST TO FOLLOW UP:REPORTED ALIVE </option>
						<option value="998">998: LOST TO FOLLOW UP </option>
						<option value="999">999: RECIPIENT DEATH </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL FUNCTN STAT</label>
					<label className="text-secondary" >Functional Status:</label>
					<select className="form-control" value={this.props.tflFunctnStat} onChange={this.props.onChangeTflFunctnStat}>
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
					<label className="font-weight-bold" >TFL GRAFT STAT</label>
					<label className="text-secondary" >Graft Status:</label>
					<select className="form-control" value={this.props.tflGraftStat} onChange={this.props.onChangeTflGraftStat}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HEPATIC ARTER THROMB</label>
					<label className="text-secondary" >If Vascular Thrombosis, Hepatic arterial thrombosis (Ped. Only):</label>
					<select className="form-control" value={this.props.tflHepaticArterThromb} onChange={this.props.onChangeTflHepaticArterThromb}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HEPATIC OUTFLOW OBSTRUCT</label>
					<label className="text-secondary" >If Vascular Thrombosis, Hepatic outflow obstruction (Ped. Only):</label>
					<select className="form-control" value={this.props.tflHepaticOutflowObstruct} onChange={this.props.onChangeTflHepaticOutflowObstruct}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HGT CM</label>
					<label className="text-secondary" >Recipient/s Height in Centimeters:</label>
					<input className="form-control" type="number" value={this.props.tflHgtCm} onChange={this.props.onChangeTflHgtCm} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HGT WGT DT</label>
					<label className="text-secondary" >Date of Height & Weight Measurement (Ped Only):</label>
					<input className="form-control" type="datetime-local" value={this.props.tflHgtWgtDt} onChange={this.props.onChangeTflHgtWgtDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HOSP</label>
					<label className="text-secondary" >Hospitalizations during Follow-Up Period:</label>
					<select className="form-control" value={this.props.tflHosp} onChange={this.props.onChangeTflHosp}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL HOSP NUM</label>
					<label className="text-secondary" >Number of Hospitalizations::</label>
					<input className="form-control" type="number" value={this.props.tflHospNum} onChange={this.props.onChangeTflHospNum} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL IMMUNO DISCONT</label>
					<label className="text-secondary" >If No Maint Meds, Did Phys. Disc. All Immuno Meds:</label>
					<select className="form-control" value={this.props.tflImmunoDiscont} onChange={this.props.onChangeTflImmunoDiscont}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL IMMUNO MAINT MEDS</label>
					<label className="text-secondary" >Any Meds Given during follow-up for Maintenance or Anti-Rejection?:</label>
					<select className="form-control" value={this.props.tflImmunoMaintMeds} onChange={this.props.onChangeTflImmunoMaintMeds}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Yes, same as previous validated report </option>
						<option value="2">2: Yes, but different than previous validated report </option>
						<option value="3">3: None given </option>
						<option value="4">4: Yes, same as validated TRR form </option>
						<option value="5">5: Yes, but different than validated TRR form </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL INR</label>
					<label className="text-secondary" >INR::</label>
					<input className="form-control" type="number" value={this.props.tflInr} onChange={this.props.onChangeTflInr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL INSULIN DEPND</label>
					<label className="text-secondary" >Insulin dependent::</label>
					<select className="form-control" value={this.props.tflInsulinDepnd} onChange={this.props.onChangeTflInsulinDepnd}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL LAB DT</label>
					<label className="text-secondary" >Most Recent Lab date:</label>
					<input className="form-control" type="datetime-local" value={this.props.tflLabDt} onChange={this.props.onChangeTflLabDt} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MALIG</label>
					<label className="text-secondary" >Post transplant Malignancy:</label>
					<select className="form-control" value={this.props.tflMalig} onChange={this.props.onChangeTflMalig}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MALIG DON RELATED</label>
					<label className="text-secondary" >Donor Related:</label>
					<select className="form-control" value={this.props.tflMaligDonRelated} onChange={this.props.onChangeTflMaligDonRelated}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MALIG LYMPH</label>
					<label className="text-secondary" >De Novo Lymphoproliferative:</label>
					<select className="form-control" value={this.props.tflMaligLymph} onChange={this.props.onChangeTflMaligLymph}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MALIG RECUR TUMOR</label>
					<label className="text-secondary" >Recurrence of Pre-Tx Tumor:</label>
					<select className="form-control" value={this.props.tflMaligRecurTumor} onChange={this.props.onChangeTflMaligRecurTumor}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MALIG TUMOR</label>
					<label className="text-secondary" >De Novo Solid Tumor:</label>
					<select className="form-control" value={this.props.tflMaligTumor} onChange={this.props.onChangeTflMaligTumor}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL MOTOR DEVELOP</label>
					<label className="text-secondary" >Motor Development (Ped Only):</label>
					<select className="form-control" value={this.props.tflMotorDevelop} onChange={this.props.onChangeTflMotorDevelop}>
						<option value="" hidden disabled selected/>
						<option value="1">1: Definite Motor delay/impairment</option>
						<option value="2">2: Probable Motor delay/impairment</option>
						<option value="3">3: Questionable Motor delay/impairment</option>
						<option value="4">4: No Motor delay/impairment</option>
						<option value="998">998: Not Assessed</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >TFL OTHER THERAPY</label>
					<label className="text-secondary" >Other Therapies::</label>
					<select className="form-control" value={this.props.tflOtherTherapy} onChange={this.props.onChangeTflOtherTherapy}>
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
	tflFailRejAcute: select.makeSelectTflFailRejAcute(),
	tflFailRejChronic: select.makeSelectTflFailRejChronic(),
	tflFailVascThromb: select.makeSelectTflFailVascThromb(),
	tflFolCd: select.makeSelectTflFolCd(),
	tflFunctnStat: select.makeSelectTflFunctnStat(),
	tflGraftStat: select.makeSelectTflGraftStat(),
	tflHepaticArterThromb: select.makeSelectTflHepaticArterThromb(),
	tflHepaticOutflowObstruct: select.makeSelectTflHepaticOutflowObstruct(),
	tflHgtCm: select.makeSelectTflHgtCm(),
	tflHgtWgtDt: select.makeSelectTflHgtWgtDt(),
	tflHosp: select.makeSelectTflHosp(),
	tflHospNum: select.makeSelectTflHospNum(),
	tflImmunoDiscont: select.makeSelectTflImmunoDiscont(),
	tflImmunoMaintMeds: select.makeSelectTflImmunoMaintMeds(),
	tflInr: select.makeSelectTflInr(),
	tflInsulinDepnd: select.makeSelectTflInsulinDepnd(),
	tflLabDt: select.makeSelectTflLabDt(),
	tflMalig: select.makeSelectTflMalig(),
	tflMaligDonRelated: select.makeSelectTflMaligDonRelated(),
	tflMaligLymph: select.makeSelectTflMaligLymph(),
	tflMaligRecurTumor: select.makeSelectTflMaligRecurTumor(),
	tflMaligTumor: select.makeSelectTflMaligTumor(),
	tflMotorDevelop: select.makeSelectTflMotorDevelop(),
	tflOtherTherapy: select.makeSelectTflOtherTherapy(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeTflFailRejAcute: evt => dispatch(action.changeTflFailRejAcute(evt.target.value)),
		onChangeTflFailRejChronic: evt => dispatch(action.changeTflFailRejChronic(evt.target.value)),
		onChangeTflFailVascThromb: evt => dispatch(action.changeTflFailVascThromb(evt.target.value)),
		onChangeTflFolCd: evt => dispatch(action.changeTflFolCd(evt.target.value)),
		onChangeTflFunctnStat: evt => dispatch(action.changeTflFunctnStat(evt.target.value)),
		onChangeTflGraftStat: evt => dispatch(action.changeTflGraftStat(evt.target.value)),
		onChangeTflHepaticArterThromb: evt => dispatch(action.changeTflHepaticArterThromb(evt.target.value)),
		onChangeTflHepaticOutflowObstruct: evt => dispatch(action.changeTflHepaticOutflowObstruct(evt.target.value)),
		onChangeTflHgtCm: evt => dispatch(action.changeTflHgtCm(evt.target.value)),
		onChangeTflHgtWgtDt: evt => dispatch(action.changeTflHgtWgtDt(evt.target.value)),
		onChangeTflHosp: evt => dispatch(action.changeTflHosp(evt.target.value)),
		onChangeTflHospNum: evt => dispatch(action.changeTflHospNum(evt.target.value)),
		onChangeTflImmunoDiscont: evt => dispatch(action.changeTflImmunoDiscont(evt.target.value)),
		onChangeTflImmunoMaintMeds: evt => dispatch(action.changeTflImmunoMaintMeds(evt.target.value)),
		onChangeTflInr: evt => dispatch(action.changeTflInr(evt.target.value)),
		onChangeTflInsulinDepnd: evt => dispatch(action.changeTflInsulinDepnd(evt.target.value)),
		onChangeTflLabDt: evt => dispatch(action.changeTflLabDt(evt.target.value)),
		onChangeTflMalig: evt => dispatch(action.changeTflMalig(evt.target.value)),
		onChangeTflMaligDonRelated: evt => dispatch(action.changeTflMaligDonRelated(evt.target.value)),
		onChangeTflMaligLymph: evt => dispatch(action.changeTflMaligLymph(evt.target.value)),
		onChangeTflMaligRecurTumor: evt => dispatch(action.changeTflMaligRecurTumor(evt.target.value)),
		onChangeTflMaligTumor: evt => dispatch(action.changeTflMaligTumor(evt.target.value)),
		onChangeTflMotorDevelop: evt => dispatch(action.changeTflMotorDevelop(evt.target.value)),
		onChangeTflOtherTherapy: evt => dispatch(action.changeTflOtherTherapy(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxfLiForm3 );
