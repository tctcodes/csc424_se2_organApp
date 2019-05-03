import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class DonDecForm7 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INOTROP AGENT GE3</label>
					<label className="text-secondary" >Three or More Inotropic Agents at Time of Incision:</label>
					<select className="form-control" value={this.props.donInotropAgentGe3} onChange={this.props.onChangeDonInotropAgentGe3}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INOTROP SUPPORT</label>
					<label className="text-secondary" >Inotropic Support:</label>
					<select className="form-control" value={this.props.donInotropSupport} onChange={this.props.onChangeDonInotropSupport}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INR</label>
					<label className="text-secondary" >INR::</label>
					<input className="form-control" type="number" value={this.props.donInr} onChange={this.props.onChangeDonInr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INSULIN</label>
					<label className="text-secondary" >Insulin::</label>
					<select className="form-control" value={this.props.donInsulin} onChange={this.props.onChangeDonInsulin}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON INTRACRANIAL CANCER</label>
					<label className="text-secondary" >Intracranial:</label>
					<select className="form-control" value={this.props.donIntracranialCancer} onChange={this.props.onChangeDonIntracranialCancer}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI GLOMER OBSERVED</label>
					<label className="text-secondary" >Glomeruli Observed on Kidney biopsy:</label>
					<input className="form-control" type="number" value={this.props.donKiGlomerObserved} onChange={this.props.onChangeDonKiGlomerObserved} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON KI GLOMER SCLER PCT</label>
					<label className="text-secondary" >Percent Glomerular Sclerosis on Kidney biopsy:</label>
					<input className="form-control" type="number" value={this.props.donKiGlomerSclerPct} onChange={this.props.onChangeDonKiGlomerSclerPct} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF KI BIOPSY</label>
					<label className="text-secondary" >Kidney Biopsy (left):</label>
					<select className="form-control" value={this.props.donLfKiBiopsy} onChange={this.props.onChangeDonLfKiBiopsy}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF KI GLOMER SCLER PCT</label>
					<label className="text-secondary" >% Glomerulosclerosis (Left Kidney):</label>
					<select className="form-control" value={this.props.donLfKiGlomerSclerPct} onChange={this.props.onChangeDonLfKiGlomerSclerPct}>
						<option value="" hidden disabled selected/>
						<option value="1">1: 0-5 </option>
						<option value="2">2: 6-10 </option>
						<option value="3">3: 11-15 </option>
						<option value="4">4: 16-20 </option>
						<option value="5">5: 20+ </option>
						<option value="6">6: Indeterminate </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF KI PUMP</label>
					<label className="text-secondary" >Pump (Left Kidney):</label>
					<select className="form-control" value={this.props.donLfKiPump} onChange={this.props.onChangeDonLfKiPump}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF KI RESIST PRIOR SHIP</label>
					<label className="text-secondary" >Final Resistance Prior to Shipping (left) //Final Resistance Prior to Shipping::</label>
					<input className="form-control" type="number" value={this.props.donLfKiResistPriorShip} onChange={this.props.onChangeDonLfKiResistPriorShip} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF KI TXFER PUMP</label>
					<label className="text-secondary" >Transferred on pump (left)://Transferred on pump::</label>
					<select className="form-control" value={this.props.donLfKiTxferPump} onChange={this.props.onChangeDonLfKiTxferPump}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LF LU BRONCHO</label>
					<label className="text-secondary" >Left Lung Bronchoscopy::</label>
					<select className="form-control" value={this.props.donLfLuBroncho} onChange={this.props.onChangeDonLfLuBroncho}>
						<option value="" hidden disabled selected/>
						<option value="1">1: No Bronchoscopy </option>
						<option value="2">2: Bronchoscopy Results normal </option>
						<option value="3">3: Bronchoscopy Results, Abnormal-purulent secretions </option>
						<option value="4">4: Bronchoscopy Results, Abnormal-aspiration of foreign body </option>
						<option value="5">5: Bronchoscopy Results, Abnormal-blood </option>
						<option value="6">6: Bronchoscopy Results, Abnormal-anatomy/other lesion </option>
						<option value="7">7: Bronchoscopy Results, Unknown </option>
						<option value="998">998: Unknown if bronchoscopy performed </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LIPASE</label>
					<label className="text-secondary" >Serum Lipase:</label>
					<input className="form-control" type="number" value={this.props.donLipase} onChange={this.props.onChangeDonLipase} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY</label>
					<label className="text-secondary" >Liver Biopsy:</label>
					<select className="form-control" value={this.props.donLiBiopsy} onChange={this.props.onChangeDonLiBiopsy}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY MACRO FAT</label>
					<label className="text-secondary" >% Macro vesicular fat::</label>
					<input className="form-control" type="number" value={this.props.donLiBiopsyMacroFat} onChange={this.props.onChangeDonLiBiopsyMacroFat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI BIOPSY MICRO FAT</label>
					<label className="text-secondary" >% Micro/intermediate vesicular fat::</label>
					<input className="form-control" type="number" value={this.props.donLiBiopsyMicroFat} onChange={this.props.onChangeDonLiBiopsyMicroFat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTH HISTOLOGY GRANULOMAS</label>
					<label className="text-secondary" >Granulomas Histology performed:</label>
					<select className="form-control" value={this.props.donLiOthHistologyGranulomas} onChange={this.props.onChangeDonLiOthHistologyGranulomas}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTH HISTOLOGY HEMOSIDERA</label>
					<label className="text-secondary" >Hemosidera Histology performed:</label>
					<select className="form-control" value={this.props.donLiOthHistologyHemosidera} onChange={this.props.onChangeDonLiOthHistologyHemosidera}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON LI OTH HISTOLOGY OTHER</label>
					<label className="text-secondary" >Other Histology performed:</label>
					<select className="form-control" value={this.props.donLiOthHistologyOther} onChange={this.props.onChangeDonLiOthHistologyOther}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MAP FINAL</label>
					<label className="text-secondary" >MAP (final) //Map::</label>
					<input className="form-control" type="number" value={this.props.donMapFinal} onChange={this.props.onChangeDonMapFinal} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MAP INIT</label>
					<label className="text-secondary" >MAP (initial) //Map: (mm/Hg):</label>
					<input className="form-control" type="number" value={this.props.donMapInit} onChange={this.props.onChangeDonMapInit} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MAX CREAT</label>
					<label className="text-secondary" >Maximum Donor Creatinine:</label>
					<input className="form-control" type="number" value={this.props.donMaxCreat} onChange={this.props.onChangeDonMaxCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >DON MED EXAMINER</label>
					<label className="text-secondary" >Medical Examiner/Coroner:</label>
					<select className="form-control" value={this.props.donMedExaminer} onChange={this.props.onChangeDonMedExaminer}>
						<option value="" hidden disabled selected/>
						<option value="1">1: NO </option>
						<option value="2">2: YES, MEDICAL EXAMINER CONSENTED </option>
						<option value="3">3: YES, MEDICAL EXAMINER REFUSED CONSENT </option>
						<option value="998">998: UNKNOWN </option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	donInotropAgentGe3: select.makeSelectDonInotropAgentGe3(),
	donInotropSupport: select.makeSelectDonInotropSupport(),
	donInr: select.makeSelectDonInr(),
	donInsulin: select.makeSelectDonInsulin(),
	donIntracranialCancer: select.makeSelectDonIntracranialCancer(),
	donKiGlomerObserved: select.makeSelectDonKiGlomerObserved(),
	donKiGlomerSclerPct: select.makeSelectDonKiGlomerSclerPct(),
	donLfKiBiopsy: select.makeSelectDonLfKiBiopsy(),
	donLfKiGlomerSclerPct: select.makeSelectDonLfKiGlomerSclerPct(),
	donLfKiPump: select.makeSelectDonLfKiPump(),
	donLfKiResistPriorShip: select.makeSelectDonLfKiResistPriorShip(),
	donLfKiTxferPump: select.makeSelectDonLfKiTxferPump(),
	donLfLuBroncho: select.makeSelectDonLfLuBroncho(),
	donLipase: select.makeSelectDonLipase(),
	donLiBiopsy: select.makeSelectDonLiBiopsy(),
	donLiBiopsyMacroFat: select.makeSelectDonLiBiopsyMacroFat(),
	donLiBiopsyMicroFat: select.makeSelectDonLiBiopsyMicroFat(),
	donLiOthHistologyGranulomas: select.makeSelectDonLiOthHistologyGranulomas(),
	donLiOthHistologyHemosidera: select.makeSelectDonLiOthHistologyHemosidera(),
	donLiOthHistologyOther: select.makeSelectDonLiOthHistologyOther(),
	donMapFinal: select.makeSelectDonMapFinal(),
	donMapInit: select.makeSelectDonMapInit(),
	donMaxCreat: select.makeSelectDonMaxCreat(),
	donMedExaminer: select.makeSelectDonMedExaminer(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeDonInotropAgentGe3: evt => dispatch(action.changeDonInotropAgentGe3(evt.target.value)),
		onChangeDonInotropSupport: evt => dispatch(action.changeDonInotropSupport(evt.target.value)),
		onChangeDonInr: evt => dispatch(action.changeDonInr(evt.target.value)),
		onChangeDonInsulin: evt => dispatch(action.changeDonInsulin(evt.target.value)),
		onChangeDonIntracranialCancer: evt => dispatch(action.changeDonIntracranialCancer(evt.target.value)),
		onChangeDonKiGlomerObserved: evt => dispatch(action.changeDonKiGlomerObserved(evt.target.value)),
		onChangeDonKiGlomerSclerPct: evt => dispatch(action.changeDonKiGlomerSclerPct(evt.target.value)),
		onChangeDonLfKiBiopsy: evt => dispatch(action.changeDonLfKiBiopsy(evt.target.value)),
		onChangeDonLfKiGlomerSclerPct: evt => dispatch(action.changeDonLfKiGlomerSclerPct(evt.target.value)),
		onChangeDonLfKiPump: evt => dispatch(action.changeDonLfKiPump(evt.target.value)),
		onChangeDonLfKiResistPriorShip: evt => dispatch(action.changeDonLfKiResistPriorShip(evt.target.value)),
		onChangeDonLfKiTxferPump: evt => dispatch(action.changeDonLfKiTxferPump(evt.target.value)),
		onChangeDonLfLuBroncho: evt => dispatch(action.changeDonLfLuBroncho(evt.target.value)),
		onChangeDonLipase: evt => dispatch(action.changeDonLipase(evt.target.value)),
		onChangeDonLiBiopsy: evt => dispatch(action.changeDonLiBiopsy(evt.target.value)),
		onChangeDonLiBiopsyMacroFat: evt => dispatch(action.changeDonLiBiopsyMacroFat(evt.target.value)),
		onChangeDonLiBiopsyMicroFat: evt => dispatch(action.changeDonLiBiopsyMicroFat(evt.target.value)),
		onChangeDonLiOthHistologyGranulomas: evt => dispatch(action.changeDonLiOthHistologyGranulomas(evt.target.value)),
		onChangeDonLiOthHistologyHemosidera: evt => dispatch(action.changeDonLiOthHistologyHemosidera(evt.target.value)),
		onChangeDonLiOthHistologyOther: evt => dispatch(action.changeDonLiOthHistologyOther(evt.target.value)),
		onChangeDonMapFinal: evt => dispatch(action.changeDonMapFinal(evt.target.value)),
		onChangeDonMapInit: evt => dispatch(action.changeDonMapInit(evt.target.value)),
		onChangeDonMaxCreat: evt => dispatch(action.changeDonMaxCreat(evt.target.value)),
		onChangeDonMedExaminer: evt => dispatch(action.changeDonMedExaminer(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( DonDecForm7 );
