import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as select from './selectors';
import * as action from './actions';

export class CandFormMalig extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG</label>
					<label className="text-secondary" >Any previous Malignancy:</label>
					<input className="form-control" type="text" value={this.props.canMalig} onChange={this.props.onChangeCanMalig} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY</label>
					<label className="text-secondary" >Previous Malignancy Type(s):</label>
					<select className="form-control" value={this.props.canMaligTy} onChange={this.props.onChangeCanMaligTy}>
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
					</select>
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY BREAST</label>
					<label className="text-secondary" >Previous Malignancy - Breast (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyBreast} onChange={this.props.onChangeCanMaligTyBreast} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY CNS TUMOR</label>
					<label className="text-secondary" >Previous Malignancy - CNS Tumor (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyCnsTumor} onChange={this.props.onChangeCanMaligTyCnsTumor} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY GENITOURINARY</label>
					<label className="text-secondary" >Previous Malignancy - Genitourinary (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyGenitourinary} onChange={this.props.onChangeCanMaligTyGenitourinary} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY HEPBLAST</label>
					<label className="text-secondary" >Previous Malignancy - Hepatoblastoma (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyHepblast} onChange={this.props.onChangeCanMaligTyHepblast} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY HEPCARCINOMA</label>
					<label className="text-secondary" >Previous Malignancy - Hepatocellular Carcinoma (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyHepcarcinoma} onChange={this.props.onChangeCanMaligTyHepcarcinoma} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY LEUK LYMPH</label>
					<label className="text-secondary" >Previous Malignancy - Leukemia/Lymphoma (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyLeukLymph} onChange={this.props.onChangeCanMaligTyLeukLymph} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY LIVER</label>
					<label className="text-secondary" >Previous Malignancy - Liver (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyLiver} onChange={this.props.onChangeCanMaligTyLiver} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY LU</label>
					<label className="text-secondary" >Previous Malignancy - Lung (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyLu} onChange={this.props.onChangeCanMaligTyLu} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY OTHER</label>
					<label className="text-secondary" >Previous Malignancy - Other, specify (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyOther} onChange={this.props.onChangeCanMaligTyOther} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY SKIN MEL</label>
					<label className="text-secondary" >Previous Malignancy - Skin Melanoma (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTySkinMel} onChange={this.props.onChangeCanMaligTySkinMel} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY SKIN NON MEL</label>
					<label className="text-secondary" >Previous Malignancy - Skin Non-Melanoma (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTySkinNonMel} onChange={this.props.onChangeCanMaligTySkinNonMel} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY THROAT</label>
					<label className="text-secondary" >Previous Malignancy - Tongue/Throat/Larynx (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyThroat} onChange={this.props.onChangeCanMaligTyThroat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY THYROID</label>
					<label className="text-secondary" >Previous Malignancy - Thyroid (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyThyroid} onChange={this.props.onChangeCanMaligTyThyroid} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN MALIG TY UNK</label>
					<label className="text-secondary" >Previous Malignancy - Type Unknown (14):</label>
					<input className="form-control" type="number" value={this.props.canMaligTyUnk} onChange={this.props.onChangeCanMaligTyUnk} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	canMalig: select.makeSelectCanMalig(),
	canMaligTy: select.makeSelectCanMaligTy(),
	canMaligTyBreast: select.makeSelectCanMaligTyBreast(),
	canMaligTyCnsTumor: select.makeSelectCanMaligTyCnsTumor(),
	canMaligTyGenitourinary: select.makeSelectCanMaligTyGenitourinary(),
	canMaligTyHepblast: select.makeSelectCanMaligTyHepblast(),
	canMaligTyHepcarcinoma: select.makeSelectCanMaligTyHepcarcinoma(),
	canMaligTyLeukLymph: select.makeSelectCanMaligTyLeukLymph(),
	canMaligTyLiver: select.makeSelectCanMaligTyLiver(),
	canMaligTyLu: select.makeSelectCanMaligTyLu(),
	canMaligTyOther: select.makeSelectCanMaligTyOther(),
	canMaligTySkinMel: select.makeSelectCanMaligTySkinMel(),
	canMaligTySkinNonMel: select.makeSelectCanMaligTySkinNonMel(),
	canMaligTyThroat: select.makeSelectCanMaligTyThroat(),
	canMaligTyThyroid: select.makeSelectCanMaligTyThyroid(),
	canMaligTyUnk: select.makeSelectCanMaligTyUnk(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanMalig: evt => dispatch(action.changeCanMalig(evt.target.value)),
		onChangeCanMaligTy: evt => dispatch(action.changeCanMaligTy(evt.target.value)),
		onChangeCanMaligTyBreast: evt => dispatch(action.changeCanMaligTyBreast(evt.target.value)),
		onChangeCanMaligTyCnsTumor: evt => dispatch(action.changeCanMaligTyCnsTumor(evt.target.value)),
		onChangeCanMaligTyGenitourinary: evt => dispatch(action.changeCanMaligTyGenitourinary(evt.target.value)),
		onChangeCanMaligTyHepblast: evt => dispatch(action.changeCanMaligTyHepblast(evt.target.value)),
		onChangeCanMaligTyHepcarcinoma: evt => dispatch(action.changeCanMaligTyHepcarcinoma(evt.target.value)),
		onChangeCanMaligTyLeukLymph: evt => dispatch(action.changeCanMaligTyLeukLymph(evt.target.value)),
		onChangeCanMaligTyLiver: evt => dispatch(action.changeCanMaligTyLiver(evt.target.value)),
		onChangeCanMaligTyLu: evt => dispatch(action.changeCanMaligTyLu(evt.target.value)),
		onChangeCanMaligTyOther: evt => dispatch(action.changeCanMaligTyOther(evt.target.value)),
		onChangeCanMaligTySkinMel: evt => dispatch(action.changeCanMaligTySkinMel(evt.target.value)),
		onChangeCanMaligTySkinNonMel: evt => dispatch(action.changeCanMaligTySkinNonMel(evt.target.value)),
		onChangeCanMaligTyThroat: evt => dispatch(action.changeCanMaligTyThroat(evt.target.value)),
		onChangeCanMaligTyThyroid: evt => dispatch(action.changeCanMaligTyThyroid(evt.target.value)),
		onChangeCanMaligTyUnk: evt => dispatch(action.changeCanMaligTyUnk(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose( withConnect )( CandFormMalig );
