/**
 *
 * TxfLiForm
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
import TxfLiForm1 from './TxfLiForm1';
import TxfLiForm2 from './TxfLiForm2';
import TxfLiForm3 from './TxfLiForm3';
import TxfLiForm4 from './TxfLiForm4';


export class TxfLiForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		  key: '1',
		};
	  }
	
	componentDidMount(){		
  	//this.props.onGetRecordPxId(this.props.selectedPxId);
	}
	
	
    render(){
        return (<div>
             <Helmet>
                <title>TxfLiForm</title>
                <meta name="description" content="Description of TxfLiForm" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
            </Helmet>
						<div className="sticky-top float-right bg-light border-bottom">
						<Button variant="primary" type="button" className="mr-1" onClick={e=>null} value={"\tRevert\t"}>
              Revert
            </Button>
						<Button variant="primary" type="button" >
              Save
            </Button>
					</div>
					
			<Tabs  className="sticky-top bg-light" activeKey={this.state.key}
        		onSelect={key => this.setState({ key })} >
						
				<Tab eventKey="1" title="1">
					{ this.state.key == "1" && <TxfLiForm1/>}
				</Tab>
				<Tab eventKey="2" title="2">
					{ this.state.key == "2" &&<TxfLiForm2/> } 
				</Tab>
				<Tab eventKey="3" title="3">
					{ this.state.key == "3" &&<TxfLiForm3/> }
				</Tab>
				<Tab eventKey="4" title="4">
					{ this.state.key == "4" &&<TxfLiForm4/> }
				</Tab>
			</Tabs>
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	
});
  
function mapDispatchToProps(dispatch) {
    return {
        //onGetRecordPxId: evt => dispatch(actions.getRecordPxId(evt)),
    };    
}
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'TxfLiForm', reducer });
  const withSaga = injectSaga({ key: 'TxfLiForm', saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(TxfLiForm);