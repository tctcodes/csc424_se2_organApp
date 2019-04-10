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
import { Tabs, Tab, Form } from 'react-bootstrap';
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
		  key: 'phys',
		};
	  }
	
	componentDidMount(){
        this.props.onGetRecordPersId();
	}
	
	
    render(){
        return (<div>
             <Helmet>
                <title>CanForm</title>
                <meta name="description" content="Description of CanForm" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
            </Helmet>
			<Tabs defaultActiveKey="phys"  activeKey={this.state.key}
        		onSelect={key => this.setState({ key })} >
				<Tab eventKey="meld" title="meld">
					{ this.state.key == "meld" && <CandFormMeld/>}
				</Tab>
				<Tab eventKey="malig" title="malig">
					{ this.state.key == "malig" &&<CandFormMalig/> } 
				
				</Tab>
				<Tab eventKey="match" title="match">
					{ this.state.key == "match" &&<CandFormMatch/> }
				</Tab>
				<Tab eventKey="stat" title="stat">
					{ this.state.key == "stat" &&<CandFormStat/> }
				</Tab>
				<Tab eventKey="tx" title="tx">
					{ this.state.key == "tx" && <CandFormTx/> }
				</Tab>
				<Tab eventKey="phys" title="phys">
					{ this.state.key == "phys" &&<CandFormPhys/> }
				</Tab>
				<Tab eventKey="hist" title="hist">
				{ this.state.key == "hist" &&<CandFormHist/>}
				</Tab>
				<Tab eventKey="personal" title="personal">
				{ this.state.key == "personal" &&<CandFormPersonal/>}
				</Tab>
			</Tabs>

        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	
});
  
function mapDispatchToProps(dispatch) {
    return {
        onGetRecordPersId: evt => dispatch(actions.getRecordPersId()),
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