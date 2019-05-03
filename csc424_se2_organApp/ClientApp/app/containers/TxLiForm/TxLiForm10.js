import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class TxLiForm10 extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HISTO TX ID</label>
					<label className="text-secondary" >Unique identifier for Transplant - foreign key to rec_histo:</label>
					<input className="form-control" type="text" readOnly value={this.props.recHistoTxId} onChange={this.props.onChangeRecHistoTxId} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HIV STAT</label>
					<label className="text-secondary" >HIV serology status:</label>
					<input className="form-control" type="text" maxLength="2" value={this.props.recHivStat} onChange={this.props.onChangeRecHivStat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC HOSP 90 DAYS</label>
					<label className="text-secondary" >Was patient hospitalizied during the last 90 days prior to the transplant admission::</label>
					<select className="form-control" value={this.props.recHosp90Days} onChange={this.props.onChangeRecHosp90Days}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC IMMUNO MAINT MEDS</label>
					<label className="text-secondary" >Are Any Meds Given Currently for Maint. Or Anti-Rej?:</label>
					<select className="form-control" value={this.props.recImmunoMaintMeds} onChange={this.props.onChangeRecImmunoMaintMeds}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC INOTROP BP SUPPORT</label>
					<label className="text-secondary" >Risk Factors: Inotropes for Blood Pressure Support:</label>
					<select className="form-control" value={this.props.recInotropBpSupport} onChange={this.props.onChangeRecInotropBpSupport}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC LIFE SUPPORT</label>
					<label className="text-secondary" >Patient on Life Support::</label>
					<select className="form-control" value={this.props.recLifeSupport} onChange={this.props.onChangeRecLifeSupport}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC LIFE SUPPORT OTHER</label>
					<label className="text-secondary" >Life Support: Other Mechanism:</label>
					<select className="form-control" value={this.props.recLifeSupportOther} onChange={this.props.onChangeRecLifeSupportOther}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC LI TY</label>
					<label className="text-secondary" >Split Type::</label>
					<select className="form-control" value={this.props.recLiTy} onChange={this.props.onChangeRecLiTy}>
						<option value="" hidden disabled selected/>
						<option value="1">1: PARTIAL LI RIGHT </option>
						<option value="2">2: PARTIAL LI RIGHT TRISEG </option>
						<option value="3">3: PARTIAL LI LEFT </option>
						<option value="4">4: PARTIAL LI LATERAL SEGMENT </option>
						<option value="5">5: PARTIAL LI RIGHT NOT INDICATED </option>
						<option value="6">6: SPLIT LI LEFT IN SITU </option>
						<option value="7">7: SPLIT LI LEFT ON THE BENCH </option>
						<option value="8">8: SPLIT LI RIGHT IN SITU </option>
						<option value="9">9: SPLIT LI RIGHT ON THE BENCH </option>
						<option value="10">10: SPLIT LI RIGHT TRISEG IN SITU </option>
						<option value="11">11: SPLIT LI RIGHT TRISEG ON THE BENCH </option>
						<option value="12">12: SPLIT LI LATERAL SEGMENT IN SITU </option>
						<option value="13">13: SPLIT LI LATERAL SEGMENT ON THE BENCH </option>
						<option value="14">14: SPLIT LI RIGHT NOT INDICATED IN SITU </option>
						<option value="15">15: SPLIT LI RIGHT NOT INDICATED ON THE BENCH </option>
						<option value="16">16: REDUCED NOT INDICATED </option>
						<option value="17">17: SPLIT NOT INDICATED </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG</label>
					<label className="text-secondary" >Pretransplant Malignancy:</label>
					<select className="form-control" value={this.props.recMalig} onChange={this.props.onChangeRecMalig}>
						<option value="" hidden disabled selected/>
						<option value="Y">Yes</option>
						<option value="N">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY</label>
					<label className="text-secondary" >Malignancies//If yes, specify type::</label>
					<select className="form-control" value={this.props.recMaligTy} onChange={this.props.onChangeRecMaligTy}>
						<option value="" hidden disabled selected/>
						<option value="">Missing</option>
						<option value="1">1: Skin Melanoma</option>
						<option value="2">2: Skin Non-Melanoma</option>
						<option value="4">4: CNS Tumor</option>
						<option value="8">8: Genitourinary</option>
						<option value="16">16: Breast</option>
						<option value="32">32: Thyroid</option>
						<option value="64">64: Tongue/Throat/Larynx</option>
						<option value="128">128: Lung</option>
						<option value="256">256: Leukemia/Lymphoma</option>
						<option value="512">512: Type Unknown</option>
						<option value="1024">1024: Other, specify</option>
						<option value="2048">2048: Liver</option>
						<option value="4096">4096: Hepatocellular Carcinoma</option>
						<option value="8192">8192: Hepatoblastoma</option>
						<option value="**OTHER**">Multiple Choices </option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY BREAST</label>
					<label className="text-secondary" >Previous Malignancy - Breast (14):</label>
					<select className="form-control" value={this.props.recMaligTyBreast} onChange={this.props.onChangeRecMaligTyBreast}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY CNS TUMOR</label>
					<label className="text-secondary" >Previous Malignancy - CNS Tumor (14):</label>
					<select className="form-control" value={this.props.recMaligTyCnsTumor} onChange={this.props.onChangeRecMaligTyCnsTumor}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY GENITOURINARY</label>
					<label className="text-secondary" >Previous Malignancy - Genitourinary (14):</label>
					<select className="form-control" value={this.props.recMaligTyGenitourinary} onChange={this.props.onChangeRecMaligTyGenitourinary}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY HEPBLAST</label>
					<label className="text-secondary" >Previous Malignancy - Hepatoblastoma (14):</label>
					<select className="form-control" value={this.props.recMaligTyHepblast} onChange={this.props.onChangeRecMaligTyHepblast}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY HEPCARCINOMA</label>
					<label className="text-secondary" >Previous Malignancy - Hepatocellular Carcinoma (14):</label>
					<select className="form-control" value={this.props.recMaligTyHepcarcinoma} onChange={this.props.onChangeRecMaligTyHepcarcinoma}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY LEUK LYMPH</label>
					<label className="text-secondary" >Previous Malignancy - Leukemia/Lymphoma (14):</label>
					<select className="form-control" value={this.props.recMaligTyLeukLymph} onChange={this.props.onChangeRecMaligTyLeukLymph}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY LIVER</label>
					<label className="text-secondary" >Previous Malignancy - Liver (14):</label>
					<select className="form-control" value={this.props.recMaligTyLiver} onChange={this.props.onChangeRecMaligTyLiver}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY LU</label>
					<label className="text-secondary" >Previous Malignancy - Lung (14):</label>
					<select className="form-control" value={this.props.recMaligTyLu} onChange={this.props.onChangeRecMaligTyLu}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY OTHER</label>
					<label className="text-secondary" >Previous Malignancy - Other, specify (14):</label>
					<select className="form-control" value={this.props.recMaligTyOther} onChange={this.props.onChangeRecMaligTyOther}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY SKIN MEL</label>
					<label className="text-secondary" >Previous Malignancy - Skin Melanoma (14):</label>
					<select className="form-control" value={this.props.recMaligTySkinMel} onChange={this.props.onChangeRecMaligTySkinMel}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY SKIN NON MEL</label>
					<label className="text-secondary" >Previous Malignancy - Skin Non-Melanoma (14):</label>
					<select className="form-control" value={this.props.recMaligTySkinNonMel} onChange={this.props.onChangeRecMaligTySkinNonMel}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY THROAT</label>
					<label className="text-secondary" >Previous Malignancy - Tongue/Throat/Larynx (14):</label>
					<select className="form-control" value={this.props.recMaligTyThroat} onChange={this.props.onChangeRecMaligTyThroat}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY THYROID</label>
					<label className="text-secondary" >Previous Malignancy - Thyroid (14):</label>
					<select className="form-control" value={this.props.recMaligTyThyroid} onChange={this.props.onChangeRecMaligTyThyroid}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >REC MALIG TY UNK</label>
					<label className="text-secondary" >Previous Malignancy - Type Unknown (14):</label>
					<select className="form-control" value={this.props.recMaligTyUnk} onChange={this.props.onChangeRecMaligTyUnk}>
						<option value="" hidden disabled selected/>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	recHistoTxId: select.makeSelectRecHistoTxId(),
	recHivStat: select.makeSelectRecHivStat(),
	recHosp90Days: select.makeSelectRecHosp90Days(),
	recImmunoMaintMeds: select.makeSelectRecImmunoMaintMeds(),
	recInotropBpSupport: select.makeSelectRecInotropBpSupport(),
	recLifeSupport: select.makeSelectRecLifeSupport(),
	recLifeSupportOther: select.makeSelectRecLifeSupportOther(),
	recLiTy: select.makeSelectRecLiTy(),
	recMalig: select.makeSelectRecMalig(),
	recMaligTy: select.makeSelectRecMaligTy(),
	recMaligTyBreast: select.makeSelectRecMaligTyBreast(),
	recMaligTyCnsTumor: select.makeSelectRecMaligTyCnsTumor(),
	recMaligTyGenitourinary: select.makeSelectRecMaligTyGenitourinary(),
	recMaligTyHepblast: select.makeSelectRecMaligTyHepblast(),
	recMaligTyHepcarcinoma: select.makeSelectRecMaligTyHepcarcinoma(),
	recMaligTyLeukLymph: select.makeSelectRecMaligTyLeukLymph(),
	recMaligTyLiver: select.makeSelectRecMaligTyLiver(),
	recMaligTyLu: select.makeSelectRecMaligTyLu(),
	recMaligTyOther: select.makeSelectRecMaligTyOther(),
	recMaligTySkinMel: select.makeSelectRecMaligTySkinMel(),
	recMaligTySkinNonMel: select.makeSelectRecMaligTySkinNonMel(),
	recMaligTyThroat: select.makeSelectRecMaligTyThroat(),
	recMaligTyThyroid: select.makeSelectRecMaligTyThyroid(),
	recMaligTyUnk: select.makeSelectRecMaligTyUnk(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeRecHistoTxId: evt => dispatch(action.changeRecHistoTxId(evt.target.value)),
		onChangeRecHivStat: evt => dispatch(action.changeRecHivStat(evt.target.value)),
		onChangeRecHosp90Days: evt => dispatch(action.changeRecHosp90Days(evt.target.value)),
		onChangeRecImmunoMaintMeds: evt => dispatch(action.changeRecImmunoMaintMeds(evt.target.value)),
		onChangeRecInotropBpSupport: evt => dispatch(action.changeRecInotropBpSupport(evt.target.value)),
		onChangeRecLifeSupport: evt => dispatch(action.changeRecLifeSupport(evt.target.value)),
		onChangeRecLifeSupportOther: evt => dispatch(action.changeRecLifeSupportOther(evt.target.value)),
		onChangeRecLiTy: evt => dispatch(action.changeRecLiTy(evt.target.value)),
		onChangeRecMalig: evt => dispatch(action.changeRecMalig(evt.target.value)),
		onChangeRecMaligTy: evt => dispatch(action.changeRecMaligTy(evt.target.value)),
		onChangeRecMaligTyBreast: evt => dispatch(action.changeRecMaligTyBreast(evt.target.value)),
		onChangeRecMaligTyCnsTumor: evt => dispatch(action.changeRecMaligTyCnsTumor(evt.target.value)),
		onChangeRecMaligTyGenitourinary: evt => dispatch(action.changeRecMaligTyGenitourinary(evt.target.value)),
		onChangeRecMaligTyHepblast: evt => dispatch(action.changeRecMaligTyHepblast(evt.target.value)),
		onChangeRecMaligTyHepcarcinoma: evt => dispatch(action.changeRecMaligTyHepcarcinoma(evt.target.value)),
		onChangeRecMaligTyLeukLymph: evt => dispatch(action.changeRecMaligTyLeukLymph(evt.target.value)),
		onChangeRecMaligTyLiver: evt => dispatch(action.changeRecMaligTyLiver(evt.target.value)),
		onChangeRecMaligTyLu: evt => dispatch(action.changeRecMaligTyLu(evt.target.value)),
		onChangeRecMaligTyOther: evt => dispatch(action.changeRecMaligTyOther(evt.target.value)),
		onChangeRecMaligTySkinMel: evt => dispatch(action.changeRecMaligTySkinMel(evt.target.value)),
		onChangeRecMaligTySkinNonMel: evt => dispatch(action.changeRecMaligTySkinNonMel(evt.target.value)),
		onChangeRecMaligTyThroat: evt => dispatch(action.changeRecMaligTyThroat(evt.target.value)),
		onChangeRecMaligTyThyroid: evt => dispatch(action.changeRecMaligTyThyroid(evt.target.value)),
		onChangeRecMaligTyUnk: evt => dispatch(action.changeRecMaligTyUnk(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( TxLiForm10 );
