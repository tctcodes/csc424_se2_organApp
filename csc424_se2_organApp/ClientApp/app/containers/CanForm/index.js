/**
 *
 * CanForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as selects from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import CandFormHist from './CandFormHist';
import CandFormMalig from './CandFormMalig';
import CandFormMatch from './CandFormMatch';
import CandFormMeld from './CandFormMeld';
import CandFormPersonal from './CandFormPersonal';
import CandFormPhys from './CandFormPhys';
import CandFormStat from './CandFormStat';
import CandFormTx from './CandFormTx';


export class CanForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		  key: 'meld',
		};
	  }
	
	componentDidMount(){
		//console.log(this.props.selectedPxId);		
		//this.props.selectedPxId = "1232752"
		console.log("prop",this.props.match.params.pxid.slice(1))
  	this.props.onGetRecordPxId((this.props.match.params.pxid).slice(1)/* "1232752" */);
	}
	
	

  render(){
		return (<div>
			<Helmet>
				<title>CanForm</title>
				<meta name="description" content="Description of CanForm" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
			</Helmet>
			<div className="sticky-top float-right bg-light border-bottom">
				<Button variant="primary" type="button" className="mr-1" onClick={e => this.props.onGetRecordPxId(this.props.pxId)} >
					Revert
        </Button>
				<Button variant="primary" type="button" onClick={e => this.props.onSaveRecord(this.props.record)}>
					Save
        </Button>
			</div>

			<Tabs 
				className="sticky-top bg-light" 
				activeKey={this.state.key}
				onSelect={key => this.setState({ key })} 
			>
				<Tab eventKey="meld" title="MELD">
					{this.state.key == "meld" && <CandFormMeld />}
				</Tab>
				<Tab eventKey="malig" title="Malig">
					{this.state.key == "malig" && <CandFormMalig />}
				</Tab>
				<Tab eventKey="match" title="Match">
					{this.state.key == "match" && <CandFormMatch />}
				</Tab>
				<Tab eventKey="stat" title="Status">
					{this.state.key == "stat" && <CandFormStat />}
				</Tab>
				<Tab eventKey="tx" title="Transplant">
					{this.state.key == "tx" && <CandFormTx />}
				</Tab>
				<Tab eventKey="phys" title="Physiology">
					{this.state.key == "phys" && <CandFormPhys />}
				</Tab>
				<Tab eventKey="hist" title="History">
					{this.state.key == "hist" && <CandFormHist />}
				</Tab>
				<Tab eventKey="personal" title="Personal">
					{this.state.key == "personal" && <CandFormPersonal />}
				</Tab>
			</Tabs>
		</div>)
	}
}

const mapStateToProps = createStructuredSelector({
	record: selects.makeSelectState(),
	pxId: selects.makeSelectPxId(),
});
  
function mapDispatchToProps(dispatch) {
    return {
				onGetRecordPxId: evt => dispatch(actions.getRecordPxId(evt)),
				onSaveRecord: evt => dispatch(actions.saveRecord(evt)),
    };    
}
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'CanForm', reducer });
  const withSaga = injectSaga({ key: 'CanForm', saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(CanForm);