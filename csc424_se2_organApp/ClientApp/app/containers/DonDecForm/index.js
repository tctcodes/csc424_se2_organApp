/**
 *
 * DonDecForm
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
//import saga from './saga';
import DonDecForm1 from './DonDecForm1';
import DonDecForm2 from './DonDecForm2';
import DonDecForm3 from './DonDecForm3';
import DonDecForm4 from './DonDecForm4';
import DonDecForm5 from './DonDecForm5';
import DonDecForm6 from './DonDecForm6';
import DonDecForm7 from './DonDecForm7';
import DonDecForm8 from './DonDecForm8';
import DonDecForm9 from './DonDecForm9';
import DonDecForm10 from './DonDecForm10';





export class DonDecForm extends React.Component {
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
                <title>DonDecForm</title>
                <meta name="description" content="Description of DonDecForm" />
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
					{ this.state.key == "1" && <DonDecForm1/>}
				</Tab>
				<Tab eventKey="2" title="2">
					{ this.state.key == "2" &&<DonDecForm2/> } 
				</Tab>
				<Tab eventKey="3" title="3">
					{ this.state.key == "3" &&<DonDecForm3/> }
				</Tab>
				<Tab eventKey="4" title="4">
					{ this.state.key == "4" &&<DonDecForm4/> }
				</Tab>
				<Tab eventKey="5" title="5">
					{ this.state.key == "5" && <DonDecForm5/> }
				</Tab>
				<Tab eventKey="6" title="6">
					{ this.state.key == "6" &&<DonDecForm6/> }
				</Tab>
				<Tab eventKey="7" title="7">
				    { this.state.key == "7" &&<DonDecForm7/>}
				</Tab>
				<Tab eventKey="8" title="8">
				    { this.state.key == "8" &&<DonDecForm8/>}
				</Tab>
                <Tab eventKey="9" title="9">
				    { this.state.key == "9" &&<DonDecForm9/>}
				</Tab>
                <Tab eventKey="10" title="10">
				    { this.state.key == "10" &&<DonDecForm10/>}
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
  
  const withReducer = injectReducer({ key: 'DonDecForm', reducer });
  //const withSaga = injectSaga({ key: 'DonDecForm', saga });
  
  export default compose(
    withReducer,
    //withSaga,
    withConnect,
  )(DonDecForm);