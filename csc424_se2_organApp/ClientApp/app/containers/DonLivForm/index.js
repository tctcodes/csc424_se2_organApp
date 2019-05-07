/**
 *
 * DonLivForm
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
import DonLivForm1 from './DonLivForm1';
import DonLivForm2 from './DonLivForm2';
import DonLivForm3 from './DonLivForm3';
import DonLivForm4 from './DonLivForm4';
import DonLivForm5 from './DonLivForm5';
import DonLivForm6 from './DonLivForm6';
import DonLivForm7 from './DonLivForm7';
import DonLivForm8 from './DonLivForm8';
import DonLivForm9 from './DonLivForm9';
import DonLivForm10 from './DonLivForm10';



export class DonLivForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		  key: '1',
		};
	  }
	
	componentDidMount(){		
		this.props.onGetRecordDonorLivId((this.props.match.params.donorlivid).slice(1));
	}
	
	
    render(){
        return (<div>
             <Helmet>
                <title>DonLivForm</title>
                <meta name="description" content="Description of DonLivForm" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
            </Helmet>
						<div className="sticky-top float-right bg-light border-bottom">
						<Button variant="primary" type="button" className="mr-1" onClick={e => this.props.onGetRecordDonorLivId(this.props.donorId)}>
              Revert
            </Button>
						<Button variant="primary" type="button" onClick={e => this.props.onSaveRecordDonLiv(this.props.record)}>
              Save
            </Button>
					</div>
					
			<Tabs  className="sticky-top bg-light" activeKey={this.state.key}
        		onSelect={key => this.setState({ key })} >
						
				<Tab eventKey="1" title="1">
					{ this.state.key == "1" && <DonLivForm1/>}
				</Tab>
				<Tab eventKey="2" title="2">
					{ this.state.key == "2" &&<DonLivForm2/> } 
				</Tab>
				<Tab eventKey="3" title="3">
					{ this.state.key == "3" &&<DonLivForm3/> }
				</Tab>
				<Tab eventKey="4" title="4">
					{ this.state.key == "4" &&<DonLivForm4/> }
				</Tab>
				<Tab eventKey="5" title="5">
					{ this.state.key == "5" && <DonLivForm5/> }
				</Tab>
				<Tab eventKey="6" title="6">
					{ this.state.key == "6" &&<DonLivForm6/> }
				</Tab>
				<Tab eventKey="7" title="7">
				    { this.state.key == "7" &&<DonLivForm7/>}
				</Tab>
				<Tab eventKey="8" title="8">
				    { this.state.key == "8" &&<DonLivForm8/>}
				</Tab>
                <Tab eventKey="9" title="9">
				    { this.state.key == "9" &&<DonLivForm9/>}
				</Tab>
                <Tab eventKey="10" title="10">
				    { this.state.key == "10" &&<DonLivForm10/>}
				</Tab>
			</Tabs>
        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	donorId: selects.makeSelectDonorId(),
	record: selects.makeSelectRecord(),
});
  
function mapDispatchToProps(dispatch) {
    return {
			onGetRecordDonorLivId: evt => dispatch(actions.getRecordDonorLivId(evt)),
			onSaveRecordDonLiv: evt => dispatch(actions.saveRecordDonLiv(evt)),
    };    
}
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'DonLivForm', reducer });
  const withSaga = injectSaga({ key: 'DonLivForm', saga });
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(DonLivForm);