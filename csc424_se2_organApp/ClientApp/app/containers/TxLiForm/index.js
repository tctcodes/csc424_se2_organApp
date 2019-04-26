/**
 *
 * TxLiForm
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
import TxLiForm1 from './TxLiForm1';
import TxLiForm2 from './TxLiForm2';
import TxLiForm3 from './TxLiForm3';
import TxLiForm4 from './TxLiForm4';
import TxLiForm5 from './TxLiForm5';
import TxLiForm6 from './TxLiForm6';
import TxLiForm7 from './TxLiForm7';
import TxLiForm8 from './TxLiForm8';
import TxLiForm9 from './TxLiForm9';
import TxLiForm10 from './TxLiForm10';
import TxLiForm11 from './TxLiForm11';
import TxLiForm12 from './TxLiForm12';
import TxLiForm13 from './TxLiForm13';





export class TxLiForm extends React.Component {
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
                <title>TxLiForm</title>
                <meta name="description" content="Description of TxLiForm" />
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
					{ this.state.key == "1" && <TxLiForm1/>}
				</Tab>
				<Tab eventKey="2" title="2">
					{ this.state.key == "2" &&<TxLiForm2/> } 
				</Tab>
				<Tab eventKey="3" title="3">
					{ this.state.key == "3" &&<TxLiForm3/> }
				</Tab>
				<Tab eventKey="4" title="4">
					{ this.state.key == "4" &&<TxLiForm4/> }
				</Tab>
				<Tab eventKey="5" title="5">
					{ this.state.key == "5" && <TxLiForm5/> }
				</Tab>
				<Tab eventKey="6" title="6">
					{ this.state.key == "6" &&<TxLiForm6/> }
				</Tab>
				<Tab eventKey="7" title="7">
				    { this.state.key == "7" &&<TxLiForm7/>}
				</Tab>
				<Tab eventKey="8" title="8">
				    { this.state.key == "8" &&<TxLiForm8/>}
				</Tab>
                <Tab eventKey="9" title="9">
				    { this.state.key == "9" &&<TxLiForm9/>}
				</Tab>
                <Tab eventKey="10" title="10">
				    { this.state.key == "10" &&<TxLiForm10/>}
				</Tab>
                <Tab eventKey="11" title="11">
				    { this.state.key == "11" &&<TxLiForm11/>}
				</Tab>
                <Tab eventKey="12" title="12">
				    { this.state.key == "12" &&<TxLiForm12/>}
				</Tab>
                <Tab eventKey="13" title="13">
				    { this.state.key == "13" &&<TxLiForm13/>}
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
  
  const withReducer = injectReducer({ key: 'TxLiForm', reducer });
  const withSaga = injectSaga({ key: 'TxLiForm', saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(TxLiForm);