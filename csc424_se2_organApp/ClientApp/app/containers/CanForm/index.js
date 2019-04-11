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


export class CanForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		  key: 'meld',
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
		{ this.state.key == 'meld' && <div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT SRTR LAB MELD</label>
				<label className="text-secondary" >First SRTR MELD/PELD given:</label>
				<select className="form-control" value={this.props.canInitSrtrLabMeld} onChange={this.props.onChangeCanInitSrtrLabMeld}>
					<option value="" hidden disabled selected/>
					<option value="1010">1010: Status 1A</option>
					<option value="1020">1020: Status 1B</option>
					<option value="1030">1030: Status 2</option>
					<option value="1090">1090: Old Status 1</option>
					<option value="1110">1110: Adult Status 1</option>
					<option value="1120">1120: Adult Status 2</option>
					<option value="1130">1130: Adult Status 3</option>
					<option value="1140">1140: Adult Status 4</option>
					<option value="1150">1150: Adult Status 5</option>
					<option value="1160">1160: Adult Status 6</option>
					<option value="1999">1999: Temporarily Inactive</option>
					<option value="2010">2010: Status 1A</option>
					<option value="2020">2020: Status 1B</option>
					<option value="2030">2030: Status 2</option>
					<option value="2090">2090: Old Status 1</option>
					<option value="2110">2110: Adult Status 1</option>
					<option value="2120">2120: Adult Status 2</option>
					<option value="2130">2130: Adult Status 3</option>
					<option value="2140">2140: Adult Status 4</option>
					<option value="2150">2150: Adult Status 5</option>
					<option value="2160">2160: Adult Status 6</option>
					<option value="2999">2999: Temporarily inactive</option>
					<option value="3010">3010: Status 1</option>
					<option value="3020">3020: Non-urgent</option>
					<option value="3999">3999: Temporarily Inactive</option>
					<option value="4010">4010: Active (1)</option>
					<option value="4050">4050: Active - Medically urgent (5)</option>
					<option value="4060">4060: Active - Critical Status (6)</option>
					<option value="4099">4099: Temporarily Inactive (7)</option>
					<option value="4998">4998: Region 1 adjustment (Reg1)</option>
					<option value="4999">4999: Temporarily Inactive (7)</option>
					<option value="5010">5010: Active</option>
					<option value="5099">5099: Temporarily Inactive</option>
					<option value="5999">5999: Temporarily Inactive</option>
					<option value="6002">6002: Old status 2</option>
					<option value="6004">6004: Old status 4</option>
					<option value="6010">6010: Status 1</option>
					<option value="6011">6011: Status 1A</option>
					<option value="6012">6012: Status 1B</option>
					<option value="6020">6020: Status 2A</option>
					<option value="6025">6025: Region 7 Calculated 25</option>
					<option value="6029">6029: Region 8 Lab Score 29</option>
					<option value="6030">6030: Status 2B</option>
					<option value="6040">6040: Status 3</option>
					<option value="6050">6050: MELD/PELD</option>
					<option value="6101">6101: MELD/PELD -99</option>
					<option value="6102">6102: MELD/PELD -98</option>
					<option value="6103">6103: MELD/PELD -97</option>
					<option value="6104">6104: MELD/PELD -96</option>
					<option value="6105">6105: MELD/PELD -95</option>
					<option value="6106">6106: MELD/PELD -94</option>
					<option value="6107">6107: MELD/PELD -93</option>
					<option value="6108">6108: MELD/PELD -92</option>
					<option value="6109">6109: MELD/PELD -91</option>
					<option value="6110">6110: MELD/PELD -90</option>
					<option value="6111">6111: MELD/PELD -89</option>
					<option value="6112">6112: MELD/PELD -88</option>
					<option value="6113">6113: MELD/PELD -87</option>
					<option value="6114">6114: MELD/PELD -86</option>
					<option value="6115">6115: MELD/PELD -85</option>
					<option value="6116">6116: MELD/PELD -84</option>
					<option value="6117">6117: MELD/PELD -83</option>
					<option value="6118">6118: MELD/PELD -82</option>
					<option value="6119">6119: MELD/PELD -81</option>
					<option value="6120">6120: MELD/PELD -80</option>
					<option value="6121">6121: MELD/PELD -79</option>
					<option value="6122">6122: MELD/PELD -78</option>
					<option value="6123">6123: MELD/PELD -77</option>
					<option value="6124">6124: MELD/PELD -76</option>
					<option value="6125">6125: MELD/PELD -75</option>
					<option value="6126">6126: MELD/PELD -74</option>
					<option value="6127">6127: MELD/PELD -73</option>
					<option value="6128">6128: MELD/PELD -72</option>
					<option value="6129">6129: MELD/PELD -71</option>
					<option value="6130">6130: MELD/PELD -70</option>
					<option value="6131">6131: MELD/PELD -69</option>
					<option value="6132">6132: MELD/PELD -68</option>
					<option value="6133">6133: MELD/PELD -67</option>
					<option value="6134">6134: MELD/PELD -66</option>
					<option value="6135">6135: MELD/PELD -65</option>
					<option value="6136">6136: MELD/PELD -64</option>
					<option value="6137">6137: MELD/PELD -63</option>
					<option value="6138">6138: MELD/PELD -62</option>
					<option value="6139">6139: MELD/PELD -61</option>
					<option value="6140">6140: MELD/PELD -60</option>
					<option value="6141">6141: MELD/PELD -59</option>
					<option value="6142">6142: MELD/PELD -58</option>
					<option value="6143">6143: MELD/PELD -57</option>
					<option value="6144">6144: MELD/PELD -56</option>
					<option value="6145">6145: MELD/PELD -55</option>
					<option value="6146">6146: MELD/PELD -54</option>
					<option value="6147">6147: MELD/PELD -53</option>
					<option value="6148">6148: MELD/PELD -52</option>
					<option value="6149">6149: MELD/PELD -51</option>
					<option value="6150">6150: MELD/PELD -50</option>
					<option value="6151">6151: MELD/PELD -49</option>
					<option value="6152">6152: MELD/PELD -48</option>
					<option value="6153">6153: MELD/PELD -47</option>
					<option value="6154">6154: MELD/PELD -46</option>
					<option value="6155">6155: MELD/PELD -45</option>
					<option value="6156">6156: MELD/PELD -44</option>
					<option value="6157">6157: MELD/PELD -43</option>
					<option value="6158">6158: MELD/PELD -42</option>
					<option value="6159">6159: MELD/PELD -41</option>
					<option value="6160">6160: MELD/PELD -40</option>
					<option value="6161">6161: MELD/PELD -39</option>
					<option value="6162">6162: MELD/PELD -38</option>
					<option value="6163">6163: MELD/PELD -37</option>
					<option value="6164">6164: MELD/PELD -36</option>
					<option value="6165">6165: MELD/PELD -35</option>
					<option value="6166">6166: MELD/PELD -34</option>
					<option value="6167">6167: MELD/PELD -33</option>
					<option value="6168">6168: MELD/PELD -32</option>
					<option value="6169">6169: MELD/PELD -31</option>
					<option value="6170">6170: MELD/PELD -30</option>
					<option value="6171">6171: MELD/PELD -29</option>
					<option value="6172">6172: MELD/PELD -28</option>
					<option value="6173">6173: MELD/PELD -27</option>
					<option value="6174">6174: MELD/PELD -26</option>
					<option value="6175">6175: MELD/PELD -25</option>
					<option value="6176">6176: MELD/PELD -24</option>
					<option value="6177">6177: MELD/PELD -23</option>
					<option value="6178">6178: MELD/PELD -22</option>
					<option value="6179">6179: MELD/PELD -21</option>
					<option value="6180">6180: MELD/PELD -20</option>
					<option value="6181">6181: MELD/PELD -19</option>
					<option value="6182">6182: MELD/PELD -18</option>
					<option value="6183">6183: MELD/PELD -17</option>
					<option value="6184">6184: MELD/PELD -16</option>
					<option value="6185">6185: MELD/PELD -15</option>
					<option value="6186">6186: MELD/PELD -14</option>
					<option value="6187">6187: MELD/PELD -13</option>
					<option value="6188">6188: MELD/PELD -12</option>
					<option value="6189">6189: MELD/PELD -11</option>
					<option value="6190">6190: MELD/PELD -10</option>
					<option value="6191">6191: MELD/PELD -9</option>
					<option value="6192">6192: MELD/PELD -8</option>
					<option value="6193">6193: MELD/PELD -7</option>
					<option value="6194">6194: MELD/PELD -6</option>
					<option value="6195">6195: MELD/PELD -5</option>
					<option value="6196">6196: MELD/PELD -4</option>
					<option value="6197">6197: MELD/PELD -3</option>
					<option value="6198">6198: MELD/PELD -2</option>
					<option value="6199">6199: MELD/PELD -1</option>
					<option value="6200">6200: MELD/PELD 0</option>
					<option value="6201">6201: MELD/PELD 1</option>
					<option value="6202">6202: MELD/PELD 2</option>
					<option value="6203">6203: MELD/PELD 3</option>
					<option value="6204">6204: MELD/PELD 4</option>
					<option value="6205">6205: MELD/PELD 5</option>
					<option value="6206">6206: MELD/PELD 6</option>
					<option value="6207">6207: MELD/PELD 7</option>
					<option value="6208">6208: MELD/PELD 8</option>
					<option value="6209">6209: MELD/PELD 9</option>
					<option value="6210">6210: MELD/PELD 10</option>
					<option value="6211">6211: MELD/PELD 11</option>
					<option value="6212">6212: MELD/PELD 12</option>
					<option value="6213">6213: MELD/PELD 13</option>
					<option value="6214">6214: MELD/PELD 14</option>
					<option value="6215">6215: MELD/PELD 15</option>
					<option value="6216">6216: MELD/PELD 16</option>
					<option value="6217">6217: MELD/PELD 17</option>
					<option value="6218">6218: MELD/PELD 18</option>
					<option value="6219">6219: MELD/PELD 19</option>
					<option value="6220">6220: MELD/PELD 20</option>
					<option value="6221">6221: MELD/PELD 21</option>
					<option value="6222">6222: MELD/PELD 22</option>
					<option value="6223">6223: MELD/PELD 23</option>
					<option value="6224">6224: MELD/PELD 24</option>
					<option value="6225">6225: MELD/PELD 25</option>
					<option value="6226">6226: MELD/PELD 26</option>
					<option value="6227">6227: MELD/PELD 27</option>
					<option value="6228">6228: MELD/PELD 28</option>
					<option value="6229">6229: MELD/PELD 29</option>
					<option value="6230">6230: MELD/PELD 30</option>
					<option value="6231">6231: MELD/PELD 31</option>
					<option value="6232">6232: MELD/PELD 32</option>
					<option value="6233">6233: MELD/PELD 33</option>
					<option value="6234">6234: MELD/PELD 34</option>
					<option value="6235">6235: MELD/PELD 35</option>
					<option value="6236">6236: MELD/PELD 36</option>
					<option value="6237">6237: MELD/PELD 37</option>
					<option value="6238">6238: MELD/PELD 38</option>
					<option value="6239">6239: MELD/PELD 39</option>
					<option value="6240">6240: MELD/PELD 40</option>
					<option value="6241">6241: MELD/PELD 41</option>
					<option value="6242">6242: MELD/PELD 42</option>
					<option value="6243">6243: MELD/PELD 43</option>
					<option value="6244">6244: MELD/PELD 44</option>
					<option value="6245">6245: MELD/PELD 45</option>
					<option value="6246">6246: MELD/PELD 46</option>
					<option value="6247">6247: MELD/PELD 47</option>
					<option value="6248">6248: MELD/PELD 48</option>
					<option value="6249">6249: MELD/PELD 49</option>
					<option value="6250">6250: MELD/PELD 50</option>
					<option value="6251">6251: MELD/PELD 51</option>
					<option value="6252">6252: MELD/PELD 52</option>
					<option value="6253">6253: MELD/PELD 53</option>
					<option value="6254">6254: MELD/PELD 54</option>
					<option value="6255">6255: MELD/PELD 55</option>
					<option value="6256">6256: MELD/PELD 56</option>
					<option value="6257">6257: MELD/PELD 57</option>
					<option value="6258">6258: MELD/PELD 58</option>
					<option value="6259">6259: MELD/PELD 59</option>
					<option value="6260">6260: MELD/PELD 60</option>
					<option value="6261">6261: MELD/PELD 61</option>
					<option value="6262">6262: MELD/PELD 62</option>
					<option value="6263">6263: MELD/PELD 63</option>
					<option value="6264">6264: MELD/PELD 64</option>
					<option value="6265">6265: MELD/PELD 65</option>
					<option value="6266">6266: MELD/PELD 66</option>
					<option value="6267">6267: MELD/PELD 67</option>
					<option value="6268">6268: MELD/PELD 68</option>
					<option value="6269">6269: MELD/PELD 69</option>
					<option value="6270">6270: MELD/PELD 70</option>
					<option value="6271">6271: MELD/PELD 71</option>
					<option value="6272">6272: MELD/PELD 72</option>
					<option value="6273">6273: MELD/PELD 73</option>
					<option value="6274">6274: MELD/PELD 74</option>
					<option value="6275">6275: MELD/PELD 75</option>
					<option value="6276">6276: MELD/PELD 76</option>
					<option value="6277">6277: MELD/PELD 77</option>
					<option value="6278">6278: MELD/PELD 78</option>
					<option value="6279">6279: MELD/PELD 79</option>
					<option value="6280">6280: MELD/PELD 80</option>
					<option value="6281">6281: MELD/PELD 81</option>
					<option value="6282">6282: MELD/PELD 82</option>
					<option value="6283">6283: MELD/PELD 83</option>
					<option value="6284">6284: MELD/PELD 84</option>
					<option value="6285">6285: MELD/PELD 85</option>
					<option value="6286">6286: MELD/PELD 86</option>
					<option value="6287">6287: MELD/PELD 87</option>
					<option value="6288">6288: MELD/PELD 88</option>
					<option value="6289">6289: MELD/PELD 89</option>
					<option value="6290">6290: MELD/PELD 90</option>
					<option value="6291">6291: MELD/PELD 91</option>
					<option value="6292">6292: MELD/PELD 92</option>
					<option value="6293">6293: MELD/PELD 93</option>
					<option value="6294">6294: MELD/PELD 94</option>
					<option value="6295">6295: MELD/PELD 95</option>
					<option value="6296">6296: MELD/PELD 96</option>
					<option value="6297">6297: MELD/PELD 97</option>
					<option value="6298">6298: MELD/PELD 98</option>
					<option value="6299">6299: MELD/PELD 99</option>
					<option value="6999">6999: Temporarily Inactive</option>
					<option value="7010">7010: Active</option>
					<option value="7999">7999: Temporarily Inactive</option>
					<option value="8010">8010: Active</option>
					<option value="8099">8099: Temporarily Inactive</option>
					<option value="8999">8999: Temporarily Inactive</option>
					<option value="9010">9010: Status 1</option>
					<option value="9020">9020: Status 2</option>
					<option value="9030">9030: Active</option>
					<option value="9099">9099: Temporarily Inactive</option>
					<option value="9999">9999: Temporarily Inactive</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT SRTR LAB MELD TY</label>
				<label className="text-secondary" >First SRTR MELD/PELD type given:</label>
				<input className="form-control"type="text" value={this.props.canInitSrtrLabMeldTy} onChange={this.props.onChangeCanInitSrtrLabMeldTy} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST ALBUMIN</label>
				<label className="text-secondary" >Candidate Last Albumin (used for MELD):</label>
				<input className="form-control"type="number" value={this.props.canLastAlbumin} onChange={this.props.onChangeCanLastAlbumin} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST ASCITES</label>
				<label className="text-secondary" >Candidate Last Ascites (used for MELD):</label>
				<select className="form-control" value={this.props.canLastAscites} onChange={this.props.onChangeCanLastAscites}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Absent</option>
					<option value="2">2: Slight</option>
					<option value="3">3: Moderate</option>
					<option value="4">4: N/A</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST BILI</label>
				<label className="text-secondary" >Candidate Last Bilirubin (used for MELD):</label>
				<input className="form-control"type="number" value={this.props.canLastBili} onChange={this.props.onChangeCanLastBili} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST ENCEPH</label>
				<label className="text-secondary" >Candidate Last Encephalopathy (used for MELD):</label>
				<select className="form-control" value={this.props.canLastEnceph} onChange={this.props.onChangeCanLastEnceph}>
					<option value="" hidden disabled selected/>
					<option value="1">1: None</option>
					<option value="2">2: 1-2</option>
					<option value="3">3: 3-4</option>
					<option value="4">4: N/A</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST INR</label>
				<label className="text-secondary" >Candidate Last INR (used for MELD):</label>
				<input className="form-control"type="number" value={this.props.canLastInr} onChange={this.props.onChangeCanLastInr} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST SERUM CREAT</label>
				<label className="text-secondary" >Candidate Last Serum Creatinine mg/dl (used for MELD):</label>
				<input className="form-control"type="number" value={this.props.canLastSerumCreat} onChange={this.props.onChangeCanLastSerumCreat} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST SERUM SODIUM</label>
				<label className="text-secondary" >Candidate Last Serum Sodium (used for MELD):</label>
				<input className="form-control"type="number" value={this.props.canLastSerumSodium} onChange={this.props.onChangeCanLastSerumSodium} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST SRTR LAB MELD</label>
				<label className="text-secondary" >Last SRTR MELD/PELD given:</label>
				<select className="form-control" value={this.props.canLastSrtrLabMeld} onChange={this.props.onChangeCanLastSrtrLabMeld}>
					<option value="" hidden disabled selected/>
					<option value="1010">1010: Status 1A</option>
					<option value="1020">1020: Status 1B</option>
					<option value="1030">1030: Status 2</option>
					<option value="1090">1090: Old Status 1</option>
					<option value="1110">1110: Adult Status 1</option>
					<option value="1120">1120: Adult Status 2</option>
					<option value="1130">1130: Adult Status 3</option>
					<option value="1140">1140: Adult Status 4</option>
					<option value="1150">1150: Adult Status 5</option>
					<option value="1160">1160: Adult Status 6</option>
					<option value="1999">1999: Temporarily Inactive</option>
					<option value="2010">2010: Status 1A</option>
					<option value="2020">2020: Status 1B</option>
					<option value="2030">2030: Status 2</option>
					<option value="2090">2090: Old Status 1</option>
					<option value="2110">2110: Adult Status 1</option>
					<option value="2120">2120: Adult Status 2</option>
					<option value="2130">2130: Adult Status 3</option>
					<option value="2140">2140: Adult Status 4</option>
					<option value="2150">2150: Adult Status 5</option>
					<option value="2160">2160: Adult Status 6</option>
					<option value="2999">2999: Temporarily inactive</option>
					<option value="3010">3010: Status 1</option>
					<option value="3020">3020: Non-urgent</option>
					<option value="3999">3999: Temporarily Inactive</option>
					<option value="4010">4010: Active (1)</option>
					<option value="4050">4050: Active - Medically urgent (5)</option>
					<option value="4060">4060: Active - Critical Status (6)</option>
					<option value="4099">4099: Temporarily Inactive (7)</option>
					<option value="4998">4998: Region 1 adjustment (Reg1)</option>
					<option value="4999">4999: Temporarily Inactive (7)</option>
					<option value="5010">5010: Active</option>
					<option value="5099">5099: Temporarily Inactive</option>
					<option value="5999">5999: Temporarily Inactive</option>
					<option value="6002">6002: Old status 2</option>
					<option value="6004">6004: Old status 4</option>
					<option value="6010">6010: Status 1</option>
					<option value="6011">6011: Status 1A</option>
					<option value="6012">6012: Status 1B</option>
					<option value="6020">6020: Status 2A</option>
					<option value="6025">6025: Region 7 Calculated 25</option>
					<option value="6029">6029: Region 8 Lab Score 29</option>
					<option value="6030">6030: Status 2B</option>
					<option value="6040">6040: Status 3</option>
					<option value="6050">6050: MELD/PELD</option>
					<option value="6101">6101: MELD/PELD -99</option>
					<option value="6102">6102: MELD/PELD -98</option>
					<option value="6103">6103: MELD/PELD -97</option>
					<option value="6104">6104: MELD/PELD -96</option>
					<option value="6105">6105: MELD/PELD -95</option>
					<option value="6106">6106: MELD/PELD -94</option>
					<option value="6107">6107: MELD/PELD -93</option>
					<option value="6108">6108: MELD/PELD -92</option>
					<option value="6109">6109: MELD/PELD -91</option>
					<option value="6110">6110: MELD/PELD -90</option>
					<option value="6111">6111: MELD/PELD -89</option>
					<option value="6112">6112: MELD/PELD -88</option>
					<option value="6113">6113: MELD/PELD -87</option>
					<option value="6114">6114: MELD/PELD -86</option>
					<option value="6115">6115: MELD/PELD -85</option>
					<option value="6116">6116: MELD/PELD -84</option>
					<option value="6117">6117: MELD/PELD -83</option>
					<option value="6118">6118: MELD/PELD -82</option>
					<option value="6119">6119: MELD/PELD -81</option>
					<option value="6120">6120: MELD/PELD -80</option>
					<option value="6121">6121: MELD/PELD -79</option>
					<option value="6122">6122: MELD/PELD -78</option>
					<option value="6123">6123: MELD/PELD -77</option>
					<option value="6124">6124: MELD/PELD -76</option>
					<option value="6125">6125: MELD/PELD -75</option>
					<option value="6126">6126: MELD/PELD -74</option>
					<option value="6127">6127: MELD/PELD -73</option>
					<option value="6128">6128: MELD/PELD -72</option>
					<option value="6129">6129: MELD/PELD -71</option>
					<option value="6130">6130: MELD/PELD -70</option>
					<option value="6131">6131: MELD/PELD -69</option>
					<option value="6132">6132: MELD/PELD -68</option>
					<option value="6133">6133: MELD/PELD -67</option>
					<option value="6134">6134: MELD/PELD -66</option>
					<option value="6135">6135: MELD/PELD -65</option>
					<option value="6136">6136: MELD/PELD -64</option>
					<option value="6137">6137: MELD/PELD -63</option>
					<option value="6138">6138: MELD/PELD -62</option>
					<option value="6139">6139: MELD/PELD -61</option>
					<option value="6140">6140: MELD/PELD -60</option>
					<option value="6141">6141: MELD/PELD -59</option>
					<option value="6142">6142: MELD/PELD -58</option>
					<option value="6143">6143: MELD/PELD -57</option>
					<option value="6144">6144: MELD/PELD -56</option>
					<option value="6145">6145: MELD/PELD -55</option>
					<option value="6146">6146: MELD/PELD -54</option>
					<option value="6147">6147: MELD/PELD -53</option>
					<option value="6148">6148: MELD/PELD -52</option>
					<option value="6149">6149: MELD/PELD -51</option>
					<option value="6150">6150: MELD/PELD -50</option>
					<option value="6151">6151: MELD/PELD -49</option>
					<option value="6152">6152: MELD/PELD -48</option>
					<option value="6153">6153: MELD/PELD -47</option>
					<option value="6154">6154: MELD/PELD -46</option>
					<option value="6155">6155: MELD/PELD -45</option>
					<option value="6156">6156: MELD/PELD -44</option>
					<option value="6157">6157: MELD/PELD -43</option>
					<option value="6158">6158: MELD/PELD -42</option>
					<option value="6159">6159: MELD/PELD -41</option>
					<option value="6160">6160: MELD/PELD -40</option>
					<option value="6161">6161: MELD/PELD -39</option>
					<option value="6162">6162: MELD/PELD -38</option>
					<option value="6163">6163: MELD/PELD -37</option>
					<option value="6164">6164: MELD/PELD -36</option>
					<option value="6165">6165: MELD/PELD -35</option>
					<option value="6166">6166: MELD/PELD -34</option>
					<option value="6167">6167: MELD/PELD -33</option>
					<option value="6168">6168: MELD/PELD -32</option>
					<option value="6169">6169: MELD/PELD -31</option>
					<option value="6170">6170: MELD/PELD -30</option>
					<option value="6171">6171: MELD/PELD -29</option>
					<option value="6172">6172: MELD/PELD -28</option>
					<option value="6173">6173: MELD/PELD -27</option>
					<option value="6174">6174: MELD/PELD -26</option>
					<option value="6175">6175: MELD/PELD -25</option>
					<option value="6176">6176: MELD/PELD -24</option>
					<option value="6177">6177: MELD/PELD -23</option>
					<option value="6178">6178: MELD/PELD -22</option>
					<option value="6179">6179: MELD/PELD -21</option>
					<option value="6180">6180: MELD/PELD -20</option>
					<option value="6181">6181: MELD/PELD -19</option>
					<option value="6182">6182: MELD/PELD -18</option>
					<option value="6183">6183: MELD/PELD -17</option>
					<option value="6184">6184: MELD/PELD -16</option>
					<option value="6185">6185: MELD/PELD -15</option>
					<option value="6186">6186: MELD/PELD -14</option>
					<option value="6187">6187: MELD/PELD -13</option>
					<option value="6188">6188: MELD/PELD -12</option>
					<option value="6189">6189: MELD/PELD -11</option>
					<option value="6190">6190: MELD/PELD -10</option>
					<option value="6191">6191: MELD/PELD -9</option>
					<option value="6192">6192: MELD/PELD -8</option>
					<option value="6193">6193: MELD/PELD -7</option>
					<option value="6194">6194: MELD/PELD -6</option>
					<option value="6195">6195: MELD/PELD -5</option>
					<option value="6196">6196: MELD/PELD -4</option>
					<option value="6197">6197: MELD/PELD -3</option>
					<option value="6198">6198: MELD/PELD -2</option>
					<option value="6199">6199: MELD/PELD -1</option>
					<option value="6200">6200: MELD/PELD 0</option>
					<option value="6201">6201: MELD/PELD 1</option>
					<option value="6202">6202: MELD/PELD 2</option>
					<option value="6203">6203: MELD/PELD 3</option>
					<option value="6204">6204: MELD/PELD 4</option>
					<option value="6205">6205: MELD/PELD 5</option>
					<option value="6206">6206: MELD/PELD 6</option>
					<option value="6207">6207: MELD/PELD 7</option>
					<option value="6208">6208: MELD/PELD 8</option>
					<option value="6209">6209: MELD/PELD 9</option>
					<option value="6210">6210: MELD/PELD 10</option>
					<option value="6211">6211: MELD/PELD 11</option>
					<option value="6212">6212: MELD/PELD 12</option>
					<option value="6213">6213: MELD/PELD 13</option>
					<option value="6214">6214: MELD/PELD 14</option>
					<option value="6215">6215: MELD/PELD 15</option>
					<option value="6216">6216: MELD/PELD 16</option>
					<option value="6217">6217: MELD/PELD 17</option>
					<option value="6218">6218: MELD/PELD 18</option>
					<option value="6219">6219: MELD/PELD 19</option>
					<option value="6220">6220: MELD/PELD 20</option>
					<option value="6221">6221: MELD/PELD 21</option>
					<option value="6222">6222: MELD/PELD 22</option>
					<option value="6223">6223: MELD/PELD 23</option>
					<option value="6224">6224: MELD/PELD 24</option>
					<option value="6225">6225: MELD/PELD 25</option>
					<option value="6226">6226: MELD/PELD 26</option>
					<option value="6227">6227: MELD/PELD 27</option>
					<option value="6228">6228: MELD/PELD 28</option>
					<option value="6229">6229: MELD/PELD 29</option>
					<option value="6230">6230: MELD/PELD 30</option>
					<option value="6231">6231: MELD/PELD 31</option>
					<option value="6232">6232: MELD/PELD 32</option>
					<option value="6233">6233: MELD/PELD 33</option>
					<option value="6234">6234: MELD/PELD 34</option>
					<option value="6235">6235: MELD/PELD 35</option>
					<option value="6236">6236: MELD/PELD 36</option>
					<option value="6237">6237: MELD/PELD 37</option>
					<option value="6238">6238: MELD/PELD 38</option>
					<option value="6239">6239: MELD/PELD 39</option>
					<option value="6240">6240: MELD/PELD 40</option>
					<option value="6241">6241: MELD/PELD 41</option>
					<option value="6242">6242: MELD/PELD 42</option>
					<option value="6243">6243: MELD/PELD 43</option>
					<option value="6244">6244: MELD/PELD 44</option>
					<option value="6245">6245: MELD/PELD 45</option>
					<option value="6246">6246: MELD/PELD 46</option>
					<option value="6247">6247: MELD/PELD 47</option>
					<option value="6248">6248: MELD/PELD 48</option>
					<option value="6249">6249: MELD/PELD 49</option>
					<option value="6250">6250: MELD/PELD 50</option>
					<option value="6251">6251: MELD/PELD 51</option>
					<option value="6252">6252: MELD/PELD 52</option>
					<option value="6253">6253: MELD/PELD 53</option>
					<option value="6254">6254: MELD/PELD 54</option>
					<option value="6255">6255: MELD/PELD 55</option>
					<option value="6256">6256: MELD/PELD 56</option>
					<option value="6257">6257: MELD/PELD 57</option>
					<option value="6258">6258: MELD/PELD 58</option>
					<option value="6259">6259: MELD/PELD 59</option>
					<option value="6260">6260: MELD/PELD 60</option>
					<option value="6261">6261: MELD/PELD 61</option>
					<option value="6262">6262: MELD/PELD 62</option>
					<option value="6263">6263: MELD/PELD 63</option>
					<option value="6264">6264: MELD/PELD 64</option>
					<option value="6265">6265: MELD/PELD 65</option>
					<option value="6266">6266: MELD/PELD 66</option>
					<option value="6267">6267: MELD/PELD 67</option>
					<option value="6268">6268: MELD/PELD 68</option>
					<option value="6269">6269: MELD/PELD 69</option>
					<option value="6270">6270: MELD/PELD 70</option>
					<option value="6271">6271: MELD/PELD 71</option>
					<option value="6272">6272: MELD/PELD 72</option>
					<option value="6273">6273: MELD/PELD 73</option>
					<option value="6274">6274: MELD/PELD 74</option>
					<option value="6275">6275: MELD/PELD 75</option>
					<option value="6276">6276: MELD/PELD 76</option>
					<option value="6277">6277: MELD/PELD 77</option>
					<option value="6278">6278: MELD/PELD 78</option>
					<option value="6279">6279: MELD/PELD 79</option>
					<option value="6280">6280: MELD/PELD 80</option>
					<option value="6281">6281: MELD/PELD 81</option>
					<option value="6282">6282: MELD/PELD 82</option>
					<option value="6283">6283: MELD/PELD 83</option>
					<option value="6284">6284: MELD/PELD 84</option>
					<option value="6285">6285: MELD/PELD 85</option>
					<option value="6286">6286: MELD/PELD 86</option>
					<option value="6287">6287: MELD/PELD 87</option>
					<option value="6288">6288: MELD/PELD 88</option>
					<option value="6289">6289: MELD/PELD 89</option>
					<option value="6290">6290: MELD/PELD 90</option>
					<option value="6291">6291: MELD/PELD 91</option>
					<option value="6292">6292: MELD/PELD 92</option>
					<option value="6293">6293: MELD/PELD 93</option>
					<option value="6294">6294: MELD/PELD 94</option>
					<option value="6295">6295: MELD/PELD 95</option>
					<option value="6296">6296: MELD/PELD 96</option>
					<option value="6297">6297: MELD/PELD 97</option>
					<option value="6298">6298: MELD/PELD 98</option>
					<option value="6299">6299: MELD/PELD 99</option>
					<option value="6999">6999: Temporarily Inactive</option>
					<option value="7010">7010: Active</option>
					<option value="7999">7999: Temporarily Inactive</option>
					<option value="8010">8010: Active</option>
					<option value="8099">8099: Temporarily Inactive</option>
					<option value="8999">8999: Temporarily Inactive</option>
					<option value="9010">9010: Status 1</option>
					<option value="9020">9020: Status 2</option>
					<option value="9030">9030: Active</option>
					<option value="9099">9099: Temporarily Inactive</option>
					<option value="9999">9999: Temporarily Inactive</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST SRTR LAB MELD TY</label>
				<label className="text-secondary" >Last SRTR MELD/PELD type given:</label>
				<input className="form-control"type="text" value={this.props.canLastSrtrLabMeldTy} onChange={this.props.onChangeCanLastSrtrLabMeldTy} />
			</div>
		</div>}

	</Tab>
	<Tab eventKey="malig" title="malig">
	{ this.state.key == 'malig' &&
		<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG</label>
				<label className="text-secondary" >Any previous Malignancy:</label>
				<input className="form-control"type="text" value={this.props.canMalig} onChange={this.props.onChangeCanMalig} />
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
				<input className="form-control"type="number" value={this.props.canMaligTyBreast} onChange={this.props.onChangeCanMaligTyBreast} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY CNS TUMOR</label>
				<label className="text-secondary" >Previous Malignancy - CNS Tumor (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyCnsTumor} onChange={this.props.onChangeCanMaligTyCnsTumor} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY GENITOURINARY</label>
				<label className="text-secondary" >Previous Malignancy - Genitourinary (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyGenitourinary} onChange={this.props.onChangeCanMaligTyGenitourinary} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY HEPBLAST</label>
				<label className="text-secondary" >Previous Malignancy - Hepatoblastoma (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyHepblast} onChange={this.props.onChangeCanMaligTyHepblast} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY HEPCARCINOMA</label>
				<label className="text-secondary" >Previous Malignancy - Hepatocellular Carcinoma (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyHepcarcinoma} onChange={this.props.onChangeCanMaligTyHepcarcinoma} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY LEUK LYMPH</label>
				<label className="text-secondary" >Previous Malignancy - Leukemia/Lymphoma (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyLeukLymph} onChange={this.props.onChangeCanMaligTyLeukLymph} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY LIVER</label>
				<label className="text-secondary" >Previous Malignancy - Liver (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyLiver} onChange={this.props.onChangeCanMaligTyLiver} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY LU</label>
				<label className="text-secondary" >Previous Malignancy - Lung (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyLu} onChange={this.props.onChangeCanMaligTyLu} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY OTHER</label>
				<label className="text-secondary" >Previous Malignancy - Other, specify (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyOther} onChange={this.props.onChangeCanMaligTyOther} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY SKIN MEL</label>
				<label className="text-secondary" >Previous Malignancy - Skin Melanoma (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTySkinMel} onChange={this.props.onChangeCanMaligTySkinMel} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY SKIN NON MEL</label>
				<label className="text-secondary" >Previous Malignancy - Skin Non-Melanoma (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTySkinNonMel} onChange={this.props.onChangeCanMaligTySkinNonMel} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY THROAT</label>
				<label className="text-secondary" >Previous Malignancy - Tongue/Throat/Larynx (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyThroat} onChange={this.props.onChangeCanMaligTyThroat} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY THYROID</label>
				<label className="text-secondary" >Previous Malignancy - Thyroid (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyThyroid} onChange={this.props.onChangeCanMaligTyThyroid} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MALIG TY UNK</label>
				<label className="text-secondary" >Previous Malignancy - Type Unknown (14):</label>
				<input className="form-control"type="number" value={this.props.canMaligTyUnk} onChange={this.props.onChangeCanMaligTyUnk} />
			</div>
		</div>}

	</Tab>
	<Tab eventKey="match" title="match">
	{ this.state.key == 'match' && <div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT A2 DON</label>
				<label className="text-secondary" >Accept A2 donor?:</label>
				<input className="form-control"type="text" value={this.props.canAcptA2Don} onChange={this.props.onChangeCanAcptA2Don} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT ABO INCOMP</label>
				<label className="text-secondary" >Accept an incompatible blood type?:</label>
				<input className="form-control"type="text" value={this.props.canAcptAboIncomp} onChange={this.props.onChangeCanAcptAboIncomp} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT EXTRACORP LI</label>
				<label className="text-secondary" >Accept an Extra-corporeal Liver?:</label>
				<input className="form-control"type="text" value={this.props.canAcptExtracorpLi} onChange={this.props.onChangeCanAcptExtracorpLi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT HBC POS</label>
				<label className="text-secondary" >Accept an Hepatitis B Core Antibody Positive Donor?:</label>
				<input className="form-control"type="text" value={this.props.canAcptHbcPos} onChange={this.props.onChangeCanAcptHbcPos} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT HCV POS</label>
				<label className="text-secondary" >Accept an HCV Antibody Positive Donor?:</label>
				<input className="form-control"type="text" value={this.props.canAcptHcvPos} onChange={this.props.onChangeCanAcptHcvPos} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT LI SEG</label>
				<label className="text-secondary" >Accept LI segment:</label>
				<input className="form-control"type="text" value={this.props.canAcptLiSeg} onChange={this.props.onChangeCanAcptLiSeg} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT ORG OTHER TEAM</label>
				<label className="text-secondary" >Accept Intestine if Intestine removed by another procurement team?:</label>
				<input className="form-control"type="text" value={this.props.canAcptOrgOtherTeam} onChange={this.props.onChangeCanAcptOrgOtherTeam} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT PROCUR KI</label>
				<label className="text-secondary" >Accept Intestine if Kidney procured?:</label>
				<input className="form-control"type="text" value={this.props.canAcptProcurKi} onChange={this.props.onChangeCanAcptProcurKi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT PROCUR LI</label>
				<label className="text-secondary" >Accept Intestine if Liver procured?:</label>
				<input className="form-control"type="text" value={this.props.canAcptProcurLi} onChange={this.props.onChangeCanAcptProcurLi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACPT PROCUR PA</label>
				<label className="text-secondary" >Accept Intestine if Pancreas procured?:</label>
				<input className="form-control"type="text" value={this.props.canAcptProcurPa} onChange={this.props.onChangeCanAcptProcurPa} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN CTP SCORE</label>
				<label className="text-secondary" >Candidate/s CTP score (used for MAOB Liver Variance:</label>
				<input className="form-control"type="number" value={this.props.canCtpScore} onChange={this.props.onChangeCanCtpScore} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MAX AGE</label>
				<label className="text-secondary" >Maximum acceptable Donor age:</label>
				<input className="form-control"type="number" value={this.props.canMaxAge} onChange={this.props.onChangeCanMaxAge} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MAX MILE</label>
				<label className="text-secondary" >Maximum miles the implant team will travel:</label>
				<input className="form-control"type="number" value={this.props.canMaxMile} onChange={this.props.onChangeCanMaxMile} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MAX WGT</label>
				<label className="text-secondary" >Maximum acceptable Donor Weight:</label>
				<input className="form-control"type="number" value={this.props.canMaxWgt} onChange={this.props.onChangeCanMaxWgt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MED COND</label>
				<label className="text-secondary" >Medical Condition:</label>
				<select className="form-control" value={this.props.canMedCond} onChange={this.props.onChangeCanMedCond}>
					<option value="" hidden disabled selected/>
					<option value="1">1: IN INTENSIVE CARE UNIT</option>
					<option value="2">2: HOSPITALIZED NOT IN ICU</option>
					<option value="3">3: NOT HOSPITALIZED</option>
					<option value=""></option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MIN AGE</label>
				<label className="text-secondary" >Minimum acceptable Donor Age:</label>
				<input className="form-control"type="number" value={this.props.canMinAge} onChange={this.props.onChangeCanMinAge} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MIN WGT</label>
				<label className="text-secondary" >Minimum acceptable Donor Weight:</label>
				<input className="form-control"type="number" value={this.props.canMinWgt} onChange={this.props.onChangeCanMinWgt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PRELIM XMATCH REQUEST</label>
				<label className="text-secondary" >Preliminary Crossmatch Required:</label>
				<input className="form-control"type="text" value={this.props.canPrelimXmatchRequest} onChange={this.props.onChangeCanPrelimXmatchRequest} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TIEBREAKER DT</label>
				<label className="text-secondary" >Tiebreaker Date - used as the ultimate tiebreaker:</label>
				<input className="form-control"type="datetime-local" value={this.props.canTiebreakerDt} onChange={this.props.onChangeCanTiebreakerDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >WL ORG</label>
				<label className="text-secondary" >Organ of this waitlisted record:</label>
				<select className="form-control" value={this.props.wlOrg} onChange={this.props.onChangeWlOrg}>
					<option value="" hidden disabled selected/>
					<option value="HL">HL: Heart/Lung</option>
					<option value="HR">HR: Heart</option>
					<option value="IN">IN: Intestine</option>
					<option value="KI">KI: Kidney</option>
					<option value="KP">KP: Kidney-Pancreas</option>
					<option value="LI">LI: Liver</option>
					<option value="LU">LU: Lung</option>
					<option value="PA">PA: Pancreas</option>
					<option value="PI">PI: Pancreas Islets</option>
				</select>
			</div>
		</div>}

	</Tab>
	<Tab eventKey="stat" title="stat">
	{ this.state.key == 'stat' &&<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACTIVATE DT</label>
				<label className="text-secondary" >Activation Date - date/time waiting time clock started:</label>
				<input className="form-control"type="datetime-local" value={this.props.canActivateDt} onChange={this.props.onChangeCanActivateDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ANESTH PRIOR DEATH</label>
				<label className="text-secondary" >Did the patient go to the operating room and receive anesthesia for transplant prior to death?:</label>
				<input className="form-control"type="text" value={this.props.canAnesthPriorDeath} onChange={this.props.onChangeCanAnesthPriorDeath} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DEATH DT</label>
				<label className="text-secondary" >If removed due to Death, date of death:</label>
				<input className="form-control"type="datetime-local" value={this.props.canDeathDt} onChange={this.props.onChangeCanDeathDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ENDWLFU</label>
				<label className="text-secondary" >Candidate cohort censoring date:</label>
				<input className="form-control"type="datetime-local" value={this.props.canEndwlfu} onChange={this.props.onChangeCanEndwlfu} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN FOLLOWS OPO ALLOC</label>
				<label className="text-secondary" >Does candidate follow the OPO/s current allocation:</label>
				<input className="form-control"type="text" value={this.props.canFollowsOpoAlloc} onChange={this.props.onChangeCanFollowsOpoAlloc} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT ACT STAT CD</label>
				<label className="text-secondary" >First Active Status:</label>
				<select className="form-control" value={this.props.canInitActStatCd} onChange={this.props.onChangeCanInitActStatCd}>
					<option value="" hidden disabled selected/>
					<option value="1010">1010: Status 1A</option>
					<option value="1020">1020: Status 1B</option>
					<option value="1030">1030: Status 2</option>
					<option value="1090">1090: Old Status 1</option>
					<option value="1110">1110: Adult Status 1</option>
					<option value="1120">1120: Adult Status 2</option>
					<option value="1130">1130: Adult Status 3</option>
					<option value="1140">1140: Adult Status 4</option>
					<option value="1150">1150: Adult Status 5</option>
					<option value="1160">1160: Adult Status 6</option>
					<option value="1999">1999: Temporarily Inactive</option>
					<option value="2010">2010: Status 1A</option>
					<option value="2020">2020: Status 1B</option>
					<option value="2030">2030: Status 2</option>
					<option value="2090">2090: Old Status 1</option>
					<option value="2110">2110: Adult Status 1</option>
					<option value="2120">2120: Adult Status 2</option>
					<option value="2130">2130: Adult Status 3</option>
					<option value="2140">2140: Adult Status 4</option>
					<option value="2150">2150: Adult Status 5</option>
					<option value="2160">2160: Adult Status 6</option>
					<option value="2999">2999: Temporarily inactive</option>
					<option value="3010">3010: Status 1</option>
					<option value="3020">3020: Non-urgent</option>
					<option value="3999">3999: Temporarily Inactive</option>
					<option value="4010">4010: Active (1)</option>
					<option value="4050">4050: Active - Medically urgent (5)</option>
					<option value="4060">4060: Active - Critical Status (6)</option>
					<option value="4099">4099: Temporarily Inactive (7)</option>
					<option value="4998">4998: Region 1 adjustment (Reg1)</option>
					<option value="4999">4999: Temporarily Inactive (7)</option>
					<option value="5010">5010: Active</option>
					<option value="5099">5099: Temporarily Inactive</option>
					<option value="5999">5999: Temporarily Inactive</option>
					<option value="6002">6002: Old status 2</option>
					<option value="6004">6004: Old status 4</option>
					<option value="6010">6010: Status 1</option>
					<option value="6011">6011: Status 1A</option>
					<option value="6012">6012: Status 1B</option>
					<option value="6020">6020: Status 2A</option>
					<option value="6025">6025: Region 7 Calculated 25</option>
					<option value="6029">6029: Region 8 Lab Score 29</option>
					<option value="6030">6030: Status 2B</option>
					<option value="6040">6040: Status 3</option>
					<option value="6050">6050: MELD/PELD</option>
					<option value="6101">6101: MELD/PELD -99</option>
					<option value="6102">6102: MELD/PELD -98</option>
					<option value="6103">6103: MELD/PELD -97</option>
					<option value="6104">6104: MELD/PELD -96</option>
					<option value="6105">6105: MELD/PELD -95</option>
					<option value="6106">6106: MELD/PELD -94</option>
					<option value="6107">6107: MELD/PELD -93</option>
					<option value="6108">6108: MELD/PELD -92</option>
					<option value="6109">6109: MELD/PELD -91</option>
					<option value="6110">6110: MELD/PELD -90</option>
					<option value="6111">6111: MELD/PELD -89</option>
					<option value="6112">6112: MELD/PELD -88</option>
					<option value="6113">6113: MELD/PELD -87</option>
					<option value="6114">6114: MELD/PELD -86</option>
					<option value="6115">6115: MELD/PELD -85</option>
					<option value="6116">6116: MELD/PELD -84</option>
					<option value="6117">6117: MELD/PELD -83</option>
					<option value="6118">6118: MELD/PELD -82</option>
					<option value="6119">6119: MELD/PELD -81</option>
					<option value="6120">6120: MELD/PELD -80</option>
					<option value="6121">6121: MELD/PELD -79</option>
					<option value="6122">6122: MELD/PELD -78</option>
					<option value="6123">6123: MELD/PELD -77</option>
					<option value="6124">6124: MELD/PELD -76</option>
					<option value="6125">6125: MELD/PELD -75</option>
					<option value="6126">6126: MELD/PELD -74</option>
					<option value="6127">6127: MELD/PELD -73</option>
					<option value="6128">6128: MELD/PELD -72</option>
					<option value="6129">6129: MELD/PELD -71</option>
					<option value="6130">6130: MELD/PELD -70</option>
					<option value="6131">6131: MELD/PELD -69</option>
					<option value="6132">6132: MELD/PELD -68</option>
					<option value="6133">6133: MELD/PELD -67</option>
					<option value="6134">6134: MELD/PELD -66</option>
					<option value="6135">6135: MELD/PELD -65</option>
					<option value="6136">6136: MELD/PELD -64</option>
					<option value="6137">6137: MELD/PELD -63</option>
					<option value="6138">6138: MELD/PELD -62</option>
					<option value="6139">6139: MELD/PELD -61</option>
					<option value="6140">6140: MELD/PELD -60</option>
					<option value="6141">6141: MELD/PELD -59</option>
					<option value="6142">6142: MELD/PELD -58</option>
					<option value="6143">6143: MELD/PELD -57</option>
					<option value="6144">6144: MELD/PELD -56</option>
					<option value="6145">6145: MELD/PELD -55</option>
					<option value="6146">6146: MELD/PELD -54</option>
					<option value="6147">6147: MELD/PELD -53</option>
					<option value="6148">6148: MELD/PELD -52</option>
					<option value="6149">6149: MELD/PELD -51</option>
					<option value="6150">6150: MELD/PELD -50</option>
					<option value="6151">6151: MELD/PELD -49</option>
					<option value="6152">6152: MELD/PELD -48</option>
					<option value="6153">6153: MELD/PELD -47</option>
					<option value="6154">6154: MELD/PELD -46</option>
					<option value="6155">6155: MELD/PELD -45</option>
					<option value="6156">6156: MELD/PELD -44</option>
					<option value="6157">6157: MELD/PELD -43</option>
					<option value="6158">6158: MELD/PELD -42</option>
					<option value="6159">6159: MELD/PELD -41</option>
					<option value="6160">6160: MELD/PELD -40</option>
					<option value="6161">6161: MELD/PELD -39</option>
					<option value="6162">6162: MELD/PELD -38</option>
					<option value="6163">6163: MELD/PELD -37</option>
					<option value="6164">6164: MELD/PELD -36</option>
					<option value="6165">6165: MELD/PELD -35</option>
					<option value="6166">6166: MELD/PELD -34</option>
					<option value="6167">6167: MELD/PELD -33</option>
					<option value="6168">6168: MELD/PELD -32</option>
					<option value="6169">6169: MELD/PELD -31</option>
					<option value="6170">6170: MELD/PELD -30</option>
					<option value="6171">6171: MELD/PELD -29</option>
					<option value="6172">6172: MELD/PELD -28</option>
					<option value="6173">6173: MELD/PELD -27</option>
					<option value="6174">6174: MELD/PELD -26</option>
					<option value="6175">6175: MELD/PELD -25</option>
					<option value="6176">6176: MELD/PELD -24</option>
					<option value="6177">6177: MELD/PELD -23</option>
					<option value="6178">6178: MELD/PELD -22</option>
					<option value="6179">6179: MELD/PELD -21</option>
					<option value="6180">6180: MELD/PELD -20</option>
					<option value="6181">6181: MELD/PELD -19</option>
					<option value="6182">6182: MELD/PELD -18</option>
					<option value="6183">6183: MELD/PELD -17</option>
					<option value="6184">6184: MELD/PELD -16</option>
					<option value="6185">6185: MELD/PELD -15</option>
					<option value="6186">6186: MELD/PELD -14</option>
					<option value="6187">6187: MELD/PELD -13</option>
					<option value="6188">6188: MELD/PELD -12</option>
					<option value="6189">6189: MELD/PELD -11</option>
					<option value="6190">6190: MELD/PELD -10</option>
					<option value="6191">6191: MELD/PELD -9</option>
					<option value="6192">6192: MELD/PELD -8</option>
					<option value="6193">6193: MELD/PELD -7</option>
					<option value="6194">6194: MELD/PELD -6</option>
					<option value="6195">6195: MELD/PELD -5</option>
					<option value="6196">6196: MELD/PELD -4</option>
					<option value="6197">6197: MELD/PELD -3</option>
					<option value="6198">6198: MELD/PELD -2</option>
					<option value="6199">6199: MELD/PELD -1</option>
					<option value="6200">6200: MELD/PELD 0</option>
					<option value="6201">6201: MELD/PELD 1</option>
					<option value="6202">6202: MELD/PELD 2</option>
					<option value="6203">6203: MELD/PELD 3</option>
					<option value="6204">6204: MELD/PELD 4</option>
					<option value="6205">6205: MELD/PELD 5</option>
					<option value="6206">6206: MELD/PELD 6</option>
					<option value="6207">6207: MELD/PELD 7</option>
					<option value="6208">6208: MELD/PELD 8</option>
					<option value="6209">6209: MELD/PELD 9</option>
					<option value="6210">6210: MELD/PELD 10</option>
					<option value="6211">6211: MELD/PELD 11</option>
					<option value="6212">6212: MELD/PELD 12</option>
					<option value="6213">6213: MELD/PELD 13</option>
					<option value="6214">6214: MELD/PELD 14</option>
					<option value="6215">6215: MELD/PELD 15</option>
					<option value="6216">6216: MELD/PELD 16</option>
					<option value="6217">6217: MELD/PELD 17</option>
					<option value="6218">6218: MELD/PELD 18</option>
					<option value="6219">6219: MELD/PELD 19</option>
					<option value="6220">6220: MELD/PELD 20</option>
					<option value="6221">6221: MELD/PELD 21</option>
					<option value="6222">6222: MELD/PELD 22</option>
					<option value="6223">6223: MELD/PELD 23</option>
					<option value="6224">6224: MELD/PELD 24</option>
					<option value="6225">6225: MELD/PELD 25</option>
					<option value="6226">6226: MELD/PELD 26</option>
					<option value="6227">6227: MELD/PELD 27</option>
					<option value="6228">6228: MELD/PELD 28</option>
					<option value="6229">6229: MELD/PELD 29</option>
					<option value="6230">6230: MELD/PELD 30</option>
					<option value="6231">6231: MELD/PELD 31</option>
					<option value="6232">6232: MELD/PELD 32</option>
					<option value="6233">6233: MELD/PELD 33</option>
					<option value="6234">6234: MELD/PELD 34</option>
					<option value="6235">6235: MELD/PELD 35</option>
					<option value="6236">6236: MELD/PELD 36</option>
					<option value="6237">6237: MELD/PELD 37</option>
					<option value="6238">6238: MELD/PELD 38</option>
					<option value="6239">6239: MELD/PELD 39</option>
					<option value="6240">6240: MELD/PELD 40</option>
					<option value="6241">6241: MELD/PELD 41</option>
					<option value="6242">6242: MELD/PELD 42</option>
					<option value="6243">6243: MELD/PELD 43</option>
					<option value="6244">6244: MELD/PELD 44</option>
					<option value="6245">6245: MELD/PELD 45</option>
					<option value="6246">6246: MELD/PELD 46</option>
					<option value="6247">6247: MELD/PELD 47</option>
					<option value="6248">6248: MELD/PELD 48</option>
					<option value="6249">6249: MELD/PELD 49</option>
					<option value="6250">6250: MELD/PELD 50</option>
					<option value="6251">6251: MELD/PELD 51</option>
					<option value="6252">6252: MELD/PELD 52</option>
					<option value="6253">6253: MELD/PELD 53</option>
					<option value="6254">6254: MELD/PELD 54</option>
					<option value="6255">6255: MELD/PELD 55</option>
					<option value="6256">6256: MELD/PELD 56</option>
					<option value="6257">6257: MELD/PELD 57</option>
					<option value="6258">6258: MELD/PELD 58</option>
					<option value="6259">6259: MELD/PELD 59</option>
					<option value="6260">6260: MELD/PELD 60</option>
					<option value="6261">6261: MELD/PELD 61</option>
					<option value="6262">6262: MELD/PELD 62</option>
					<option value="6263">6263: MELD/PELD 63</option>
					<option value="6264">6264: MELD/PELD 64</option>
					<option value="6265">6265: MELD/PELD 65</option>
					<option value="6266">6266: MELD/PELD 66</option>
					<option value="6267">6267: MELD/PELD 67</option>
					<option value="6268">6268: MELD/PELD 68</option>
					<option value="6269">6269: MELD/PELD 69</option>
					<option value="6270">6270: MELD/PELD 70</option>
					<option value="6271">6271: MELD/PELD 71</option>
					<option value="6272">6272: MELD/PELD 72</option>
					<option value="6273">6273: MELD/PELD 73</option>
					<option value="6274">6274: MELD/PELD 74</option>
					<option value="6275">6275: MELD/PELD 75</option>
					<option value="6276">6276: MELD/PELD 76</option>
					<option value="6277">6277: MELD/PELD 77</option>
					<option value="6278">6278: MELD/PELD 78</option>
					<option value="6279">6279: MELD/PELD 79</option>
					<option value="6280">6280: MELD/PELD 80</option>
					<option value="6281">6281: MELD/PELD 81</option>
					<option value="6282">6282: MELD/PELD 82</option>
					<option value="6283">6283: MELD/PELD 83</option>
					<option value="6284">6284: MELD/PELD 84</option>
					<option value="6285">6285: MELD/PELD 85</option>
					<option value="6286">6286: MELD/PELD 86</option>
					<option value="6287">6287: MELD/PELD 87</option>
					<option value="6288">6288: MELD/PELD 88</option>
					<option value="6289">6289: MELD/PELD 89</option>
					<option value="6290">6290: MELD/PELD 90</option>
					<option value="6291">6291: MELD/PELD 91</option>
					<option value="6292">6292: MELD/PELD 92</option>
					<option value="6293">6293: MELD/PELD 93</option>
					<option value="6294">6294: MELD/PELD 94</option>
					<option value="6295">6295: MELD/PELD 95</option>
					<option value="6296">6296: MELD/PELD 96</option>
					<option value="6297">6297: MELD/PELD 97</option>
					<option value="6298">6298: MELD/PELD 98</option>
					<option value="6299">6299: MELD/PELD 99</option>
					<option value="6999">6999: Temporarily Inactive</option>
					<option value="7010">7010: Active</option>
					<option value="7999">7999: Temporarily Inactive</option>
					<option value="8010">8010: Active</option>
					<option value="8099">8099: Temporarily Inactive</option>
					<option value="8999">8999: Temporarily Inactive</option>
					<option value="9010">9010: Status 1</option>
					<option value="9020">9020: Status 2</option>
					<option value="9030">9030: Active</option>
					<option value="9099">9099: Temporarily Inactive</option>
					<option value="9999">9999: Temporarily Inactive</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT ACT STAT DT</label>
				<label className="text-secondary" >Date of First Active Status:</label>
				<input className="form-control"type="datetime-local" value={this.props.canInitActStatDt} onChange={this.props.onChangeCanInitActStatDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT INACT STAT DT</label>
				<label className="text-secondary" >Date of First Inactive Status:</label>
				<input className="form-control"type="datetime-local" value={this.props.canInitInactStatDt} onChange={this.props.onChangeCanInitInactStatDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN INIT STAT</label>
				<label className="text-secondary" >Initial Status of Patient:</label>
				<select className="form-control" value={this.props.canInitStat} onChange={this.props.onChangeCanInitStat}>
					<option value="" hidden disabled selected/>
					<option value="1010">1010: Status 1A</option>
					<option value="1020">1020: Status 1B</option>
					<option value="1030">1030: Status 2</option>
					<option value="1090">1090: Old Status 1</option>
					<option value="1110">1110: Adult Status 1</option>
					<option value="1120">1120: Adult Status 2</option>
					<option value="1130">1130: Adult Status 3</option>
					<option value="1140">1140: Adult Status 4</option>
					<option value="1150">1150: Adult Status 5</option>
					<option value="1160">1160: Adult Status 6</option>
					<option value="1999">1999: Temporarily Inactive</option>
					<option value="2010">2010: Status 1A</option>
					<option value="2020">2020: Status 1B</option>
					<option value="2030">2030: Status 2</option>
					<option value="2090">2090: Old Status 1</option>
					<option value="2110">2110: Adult Status 1</option>
					<option value="2120">2120: Adult Status 2</option>
					<option value="2130">2130: Adult Status 3</option>
					<option value="2140">2140: Adult Status 4</option>
					<option value="2150">2150: Adult Status 5</option>
					<option value="2160">2160: Adult Status 6</option>
					<option value="2999">2999: Temporarily inactive</option>
					<option value="3010">3010: Status 1</option>
					<option value="3020">3020: Non-urgent</option>
					<option value="3999">3999: Temporarily Inactive</option>
					<option value="4010">4010: Active (1)</option>
					<option value="4050">4050: Active - Medically urgent (5)</option>
					<option value="4060">4060: Active - Critical Status (6)</option>
					<option value="4099">4099: Temporarily Inactive (7)</option>
					<option value="4998">4998: Region 1 adjustment (Reg1)</option>
					<option value="4999">4999: Temporarily Inactive (7)</option>
					<option value="5010">5010: Active</option>
					<option value="5099">5099: Temporarily Inactive</option>
					<option value="5999">5999: Temporarily Inactive</option>
					<option value="6002">6002: Old status 2</option>
					<option value="6004">6004: Old status 4</option>
					<option value="6010">6010: Status 1</option>
					<option value="6011">6011: Status 1A</option>
					<option value="6012">6012: Status 1B</option>
					<option value="6020">6020: Status 2A</option>
					<option value="6025">6025: Region 7 Calculated 25</option>
					<option value="6029">6029: Region 8 Lab Score 29</option>
					<option value="6030">6030: Status 2B</option>
					<option value="6040">6040: Status 3</option>
					<option value="6050">6050: MELD/PELD</option>
					<option value="6101">6101: MELD/PELD -99</option>
					<option value="6102">6102: MELD/PELD -98</option>
					<option value="6103">6103: MELD/PELD -97</option>
					<option value="6104">6104: MELD/PELD -96</option>
					<option value="6105">6105: MELD/PELD -95</option>
					<option value="6106">6106: MELD/PELD -94</option>
					<option value="6107">6107: MELD/PELD -93</option>
					<option value="6108">6108: MELD/PELD -92</option>
					<option value="6109">6109: MELD/PELD -91</option>
					<option value="6110">6110: MELD/PELD -90</option>
					<option value="6111">6111: MELD/PELD -89</option>
					<option value="6112">6112: MELD/PELD -88</option>
					<option value="6113">6113: MELD/PELD -87</option>
					<option value="6114">6114: MELD/PELD -86</option>
					<option value="6115">6115: MELD/PELD -85</option>
					<option value="6116">6116: MELD/PELD -84</option>
					<option value="6117">6117: MELD/PELD -83</option>
					<option value="6118">6118: MELD/PELD -82</option>
					<option value="6119">6119: MELD/PELD -81</option>
					<option value="6120">6120: MELD/PELD -80</option>
					<option value="6121">6121: MELD/PELD -79</option>
					<option value="6122">6122: MELD/PELD -78</option>
					<option value="6123">6123: MELD/PELD -77</option>
					<option value="6124">6124: MELD/PELD -76</option>
					<option value="6125">6125: MELD/PELD -75</option>
					<option value="6126">6126: MELD/PELD -74</option>
					<option value="6127">6127: MELD/PELD -73</option>
					<option value="6128">6128: MELD/PELD -72</option>
					<option value="6129">6129: MELD/PELD -71</option>
					<option value="6130">6130: MELD/PELD -70</option>
					<option value="6131">6131: MELD/PELD -69</option>
					<option value="6132">6132: MELD/PELD -68</option>
					<option value="6133">6133: MELD/PELD -67</option>
					<option value="6134">6134: MELD/PELD -66</option>
					<option value="6135">6135: MELD/PELD -65</option>
					<option value="6136">6136: MELD/PELD -64</option>
					<option value="6137">6137: MELD/PELD -63</option>
					<option value="6138">6138: MELD/PELD -62</option>
					<option value="6139">6139: MELD/PELD -61</option>
					<option value="6140">6140: MELD/PELD -60</option>
					<option value="6141">6141: MELD/PELD -59</option>
					<option value="6142">6142: MELD/PELD -58</option>
					<option value="6143">6143: MELD/PELD -57</option>
					<option value="6144">6144: MELD/PELD -56</option>
					<option value="6145">6145: MELD/PELD -55</option>
					<option value="6146">6146: MELD/PELD -54</option>
					<option value="6147">6147: MELD/PELD -53</option>
					<option value="6148">6148: MELD/PELD -52</option>
					<option value="6149">6149: MELD/PELD -51</option>
					<option value="6150">6150: MELD/PELD -50</option>
					<option value="6151">6151: MELD/PELD -49</option>
					<option value="6152">6152: MELD/PELD -48</option>
					<option value="6153">6153: MELD/PELD -47</option>
					<option value="6154">6154: MELD/PELD -46</option>
					<option value="6155">6155: MELD/PELD -45</option>
					<option value="6156">6156: MELD/PELD -44</option>
					<option value="6157">6157: MELD/PELD -43</option>
					<option value="6158">6158: MELD/PELD -42</option>
					<option value="6159">6159: MELD/PELD -41</option>
					<option value="6160">6160: MELD/PELD -40</option>
					<option value="6161">6161: MELD/PELD -39</option>
					<option value="6162">6162: MELD/PELD -38</option>
					<option value="6163">6163: MELD/PELD -37</option>
					<option value="6164">6164: MELD/PELD -36</option>
					<option value="6165">6165: MELD/PELD -35</option>
					<option value="6166">6166: MELD/PELD -34</option>
					<option value="6167">6167: MELD/PELD -33</option>
					<option value="6168">6168: MELD/PELD -32</option>
					<option value="6169">6169: MELD/PELD -31</option>
					<option value="6170">6170: MELD/PELD -30</option>
					<option value="6171">6171: MELD/PELD -29</option>
					<option value="6172">6172: MELD/PELD -28</option>
					<option value="6173">6173: MELD/PELD -27</option>
					<option value="6174">6174: MELD/PELD -26</option>
					<option value="6175">6175: MELD/PELD -25</option>
					<option value="6176">6176: MELD/PELD -24</option>
					<option value="6177">6177: MELD/PELD -23</option>
					<option value="6178">6178: MELD/PELD -22</option>
					<option value="6179">6179: MELD/PELD -21</option>
					<option value="6180">6180: MELD/PELD -20</option>
					<option value="6181">6181: MELD/PELD -19</option>
					<option value="6182">6182: MELD/PELD -18</option>
					<option value="6183">6183: MELD/PELD -17</option>
					<option value="6184">6184: MELD/PELD -16</option>
					<option value="6185">6185: MELD/PELD -15</option>
					<option value="6186">6186: MELD/PELD -14</option>
					<option value="6187">6187: MELD/PELD -13</option>
					<option value="6188">6188: MELD/PELD -12</option>
					<option value="6189">6189: MELD/PELD -11</option>
					<option value="6190">6190: MELD/PELD -10</option>
					<option value="6191">6191: MELD/PELD -9</option>
					<option value="6192">6192: MELD/PELD -8</option>
					<option value="6193">6193: MELD/PELD -7</option>
					<option value="6194">6194: MELD/PELD -6</option>
					<option value="6195">6195: MELD/PELD -5</option>
					<option value="6196">6196: MELD/PELD -4</option>
					<option value="6197">6197: MELD/PELD -3</option>
					<option value="6198">6198: MELD/PELD -2</option>
					<option value="6199">6199: MELD/PELD -1</option>
					<option value="6200">6200: MELD/PELD 0</option>
					<option value="6201">6201: MELD/PELD 1</option>
					<option value="6202">6202: MELD/PELD 2</option>
					<option value="6203">6203: MELD/PELD 3</option>
					<option value="6204">6204: MELD/PELD 4</option>
					<option value="6205">6205: MELD/PELD 5</option>
					<option value="6206">6206: MELD/PELD 6</option>
					<option value="6207">6207: MELD/PELD 7</option>
					<option value="6208">6208: MELD/PELD 8</option>
					<option value="6209">6209: MELD/PELD 9</option>
					<option value="6210">6210: MELD/PELD 10</option>
					<option value="6211">6211: MELD/PELD 11</option>
					<option value="6212">6212: MELD/PELD 12</option>
					<option value="6213">6213: MELD/PELD 13</option>
					<option value="6214">6214: MELD/PELD 14</option>
					<option value="6215">6215: MELD/PELD 15</option>
					<option value="6216">6216: MELD/PELD 16</option>
					<option value="6217">6217: MELD/PELD 17</option>
					<option value="6218">6218: MELD/PELD 18</option>
					<option value="6219">6219: MELD/PELD 19</option>
					<option value="6220">6220: MELD/PELD 20</option>
					<option value="6221">6221: MELD/PELD 21</option>
					<option value="6222">6222: MELD/PELD 22</option>
					<option value="6223">6223: MELD/PELD 23</option>
					<option value="6224">6224: MELD/PELD 24</option>
					<option value="6225">6225: MELD/PELD 25</option>
					<option value="6226">6226: MELD/PELD 26</option>
					<option value="6227">6227: MELD/PELD 27</option>
					<option value="6228">6228: MELD/PELD 28</option>
					<option value="6229">6229: MELD/PELD 29</option>
					<option value="6230">6230: MELD/PELD 30</option>
					<option value="6231">6231: MELD/PELD 31</option>
					<option value="6232">6232: MELD/PELD 32</option>
					<option value="6233">6233: MELD/PELD 33</option>
					<option value="6234">6234: MELD/PELD 34</option>
					<option value="6235">6235: MELD/PELD 35</option>
					<option value="6236">6236: MELD/PELD 36</option>
					<option value="6237">6237: MELD/PELD 37</option>
					<option value="6238">6238: MELD/PELD 38</option>
					<option value="6239">6239: MELD/PELD 39</option>
					<option value="6240">6240: MELD/PELD 40</option>
					<option value="6241">6241: MELD/PELD 41</option>
					<option value="6242">6242: MELD/PELD 42</option>
					<option value="6243">6243: MELD/PELD 43</option>
					<option value="6244">6244: MELD/PELD 44</option>
					<option value="6245">6245: MELD/PELD 45</option>
					<option value="6246">6246: MELD/PELD 46</option>
					<option value="6247">6247: MELD/PELD 47</option>
					<option value="6248">6248: MELD/PELD 48</option>
					<option value="6249">6249: MELD/PELD 49</option>
					<option value="6250">6250: MELD/PELD 50</option>
					<option value="6251">6251: MELD/PELD 51</option>
					<option value="6252">6252: MELD/PELD 52</option>
					<option value="6253">6253: MELD/PELD 53</option>
					<option value="6254">6254: MELD/PELD 54</option>
					<option value="6255">6255: MELD/PELD 55</option>
					<option value="6256">6256: MELD/PELD 56</option>
					<option value="6257">6257: MELD/PELD 57</option>
					<option value="6258">6258: MELD/PELD 58</option>
					<option value="6259">6259: MELD/PELD 59</option>
					<option value="6260">6260: MELD/PELD 60</option>
					<option value="6261">6261: MELD/PELD 61</option>
					<option value="6262">6262: MELD/PELD 62</option>
					<option value="6263">6263: MELD/PELD 63</option>
					<option value="6264">6264: MELD/PELD 64</option>
					<option value="6265">6265: MELD/PELD 65</option>
					<option value="6266">6266: MELD/PELD 66</option>
					<option value="6267">6267: MELD/PELD 67</option>
					<option value="6268">6268: MELD/PELD 68</option>
					<option value="6269">6269: MELD/PELD 69</option>
					<option value="6270">6270: MELD/PELD 70</option>
					<option value="6271">6271: MELD/PELD 71</option>
					<option value="6272">6272: MELD/PELD 72</option>
					<option value="6273">6273: MELD/PELD 73</option>
					<option value="6274">6274: MELD/PELD 74</option>
					<option value="6275">6275: MELD/PELD 75</option>
					<option value="6276">6276: MELD/PELD 76</option>
					<option value="6277">6277: MELD/PELD 77</option>
					<option value="6278">6278: MELD/PELD 78</option>
					<option value="6279">6279: MELD/PELD 79</option>
					<option value="6280">6280: MELD/PELD 80</option>
					<option value="6281">6281: MELD/PELD 81</option>
					<option value="6282">6282: MELD/PELD 82</option>
					<option value="6283">6283: MELD/PELD 83</option>
					<option value="6284">6284: MELD/PELD 84</option>
					<option value="6285">6285: MELD/PELD 85</option>
					<option value="6286">6286: MELD/PELD 86</option>
					<option value="6287">6287: MELD/PELD 87</option>
					<option value="6288">6288: MELD/PELD 88</option>
					<option value="6289">6289: MELD/PELD 89</option>
					<option value="6290">6290: MELD/PELD 90</option>
					<option value="6291">6291: MELD/PELD 91</option>
					<option value="6292">6292: MELD/PELD 92</option>
					<option value="6293">6293: MELD/PELD 93</option>
					<option value="6294">6294: MELD/PELD 94</option>
					<option value="6295">6295: MELD/PELD 95</option>
					<option value="6296">6296: MELD/PELD 96</option>
					<option value="6297">6297: MELD/PELD 97</option>
					<option value="6298">6298: MELD/PELD 98</option>
					<option value="6299">6299: MELD/PELD 99</option>
					<option value="6999">6999: Temporarily Inactive</option>
					<option value="7010">7010: Active</option>
					<option value="7999">7999: Temporarily Inactive</option>
					<option value="8010">8010: Active</option>
					<option value="8099">8099: Temporarily Inactive</option>
					<option value="8999">8999: Temporarily Inactive</option>
					<option value="9010">9010: Status 1</option>
					<option value="9020">9020: Status 2</option>
					<option value="9030">9030: Active</option>
					<option value="9099">9099: Temporarily Inactive</option>
					<option value="9999">9999: Temporarily Inactive</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST ACT STAT DT</label>
				<label className="text-secondary" >Last Date of Active Status:</label>
				<input className="form-control"type="datetime-local" value={this.props.canLastActStatDt} onChange={this.props.onChangeCanLastActStatDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST INACT STAT DT</label>
				<label className="text-secondary" >Last Date of Inactive Status:</label>
				<input className="form-control"type="datetime-local" value={this.props.canLastInactStatDt} onChange={this.props.onChangeCanLastInactStatDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST STAT</label>
				<label className="text-secondary" >Last Status of Patient (with 2 day rule):</label>
				<select className="form-control" value={this.props.canLastStat} onChange={this.props.onChangeCanLastStat}>
					<option value="" hidden disabled selected/>
					<option value="1010">1010: Status 1A</option>
					<option value="1020">1020: Status 1B</option>
					<option value="1030">1030: Status 2</option>
					<option value="1090">1090: Old Status 1</option>
					<option value="1110">1110: Adult Status 1</option>
					<option value="1120">1120: Adult Status 2</option>
					<option value="1130">1130: Adult Status 3</option>
					<option value="1140">1140: Adult Status 4</option>
					<option value="1150">1150: Adult Status 5</option>
					<option value="1160">1160: Adult Status 6</option>
					<option value="1999">1999: Temporarily Inactive</option>
					<option value="2010">2010: Status 1A</option>
					<option value="2020">2020: Status 1B</option>
					<option value="2030">2030: Status 2</option>
					<option value="2090">2090: Old Status 1</option>
					<option value="2110">2110: Adult Status 1</option>
					<option value="2120">2120: Adult Status 2</option>
					<option value="2130">2130: Adult Status 3</option>
					<option value="2140">2140: Adult Status 4</option>
					<option value="2150">2150: Adult Status 5</option>
					<option value="2160">2160: Adult Status 6</option>
					<option value="2999">2999: Temporarily inactive</option>
					<option value="3010">3010: Status 1</option>
					<option value="3020">3020: Non-urgent</option>
					<option value="3999">3999: Temporarily Inactive</option>
					<option value="4010">4010: Active (1)</option>
					<option value="4050">4050: Active - Medically urgent (5)</option>
					<option value="4060">4060: Active - Critical Status (6)</option>
					<option value="4099">4099: Temporarily Inactive (7)</option>
					<option value="4998">4998: Region 1 adjustment (Reg1)</option>
					<option value="4999">4999: Temporarily Inactive (7)</option>
					<option value="5010">5010: Active</option>
					<option value="5099">5099: Temporarily Inactive</option>
					<option value="5999">5999: Temporarily Inactive</option>
					<option value="6002">6002: Old status 2</option>
					<option value="6004">6004: Old status 4</option>
					<option value="6010">6010: Status 1</option>
					<option value="6011">6011: Status 1A</option>
					<option value="6012">6012: Status 1B</option>
					<option value="6020">6020: Status 2A</option>
					<option value="6025">6025: Region 7 Calculated 25</option>
					<option value="6029">6029: Region 8 Lab Score 29</option>
					<option value="6030">6030: Status 2B</option>
					<option value="6040">6040: Status 3</option>
					<option value="6050">6050: MELD/PELD</option>
					<option value="6101">6101: MELD/PELD -99</option>
					<option value="6102">6102: MELD/PELD -98</option>
					<option value="6103">6103: MELD/PELD -97</option>
					<option value="6104">6104: MELD/PELD -96</option>
					<option value="6105">6105: MELD/PELD -95</option>
					<option value="6106">6106: MELD/PELD -94</option>
					<option value="6107">6107: MELD/PELD -93</option>
					<option value="6108">6108: MELD/PELD -92</option>
					<option value="6109">6109: MELD/PELD -91</option>
					<option value="6110">6110: MELD/PELD -90</option>
					<option value="6111">6111: MELD/PELD -89</option>
					<option value="6112">6112: MELD/PELD -88</option>
					<option value="6113">6113: MELD/PELD -87</option>
					<option value="6114">6114: MELD/PELD -86</option>
					<option value="6115">6115: MELD/PELD -85</option>
					<option value="6116">6116: MELD/PELD -84</option>
					<option value="6117">6117: MELD/PELD -83</option>
					<option value="6118">6118: MELD/PELD -82</option>
					<option value="6119">6119: MELD/PELD -81</option>
					<option value="6120">6120: MELD/PELD -80</option>
					<option value="6121">6121: MELD/PELD -79</option>
					<option value="6122">6122: MELD/PELD -78</option>
					<option value="6123">6123: MELD/PELD -77</option>
					<option value="6124">6124: MELD/PELD -76</option>
					<option value="6125">6125: MELD/PELD -75</option>
					<option value="6126">6126: MELD/PELD -74</option>
					<option value="6127">6127: MELD/PELD -73</option>
					<option value="6128">6128: MELD/PELD -72</option>
					<option value="6129">6129: MELD/PELD -71</option>
					<option value="6130">6130: MELD/PELD -70</option>
					<option value="6131">6131: MELD/PELD -69</option>
					<option value="6132">6132: MELD/PELD -68</option>
					<option value="6133">6133: MELD/PELD -67</option>
					<option value="6134">6134: MELD/PELD -66</option>
					<option value="6135">6135: MELD/PELD -65</option>
					<option value="6136">6136: MELD/PELD -64</option>
					<option value="6137">6137: MELD/PELD -63</option>
					<option value="6138">6138: MELD/PELD -62</option>
					<option value="6139">6139: MELD/PELD -61</option>
					<option value="6140">6140: MELD/PELD -60</option>
					<option value="6141">6141: MELD/PELD -59</option>
					<option value="6142">6142: MELD/PELD -58</option>
					<option value="6143">6143: MELD/PELD -57</option>
					<option value="6144">6144: MELD/PELD -56</option>
					<option value="6145">6145: MELD/PELD -55</option>
					<option value="6146">6146: MELD/PELD -54</option>
					<option value="6147">6147: MELD/PELD -53</option>
					<option value="6148">6148: MELD/PELD -52</option>
					<option value="6149">6149: MELD/PELD -51</option>
					<option value="6150">6150: MELD/PELD -50</option>
					<option value="6151">6151: MELD/PELD -49</option>
					<option value="6152">6152: MELD/PELD -48</option>
					<option value="6153">6153: MELD/PELD -47</option>
					<option value="6154">6154: MELD/PELD -46</option>
					<option value="6155">6155: MELD/PELD -45</option>
					<option value="6156">6156: MELD/PELD -44</option>
					<option value="6157">6157: MELD/PELD -43</option>
					<option value="6158">6158: MELD/PELD -42</option>
					<option value="6159">6159: MELD/PELD -41</option>
					<option value="6160">6160: MELD/PELD -40</option>
					<option value="6161">6161: MELD/PELD -39</option>
					<option value="6162">6162: MELD/PELD -38</option>
					<option value="6163">6163: MELD/PELD -37</option>
					<option value="6164">6164: MELD/PELD -36</option>
					<option value="6165">6165: MELD/PELD -35</option>
					<option value="6166">6166: MELD/PELD -34</option>
					<option value="6167">6167: MELD/PELD -33</option>
					<option value="6168">6168: MELD/PELD -32</option>
					<option value="6169">6169: MELD/PELD -31</option>
					<option value="6170">6170: MELD/PELD -30</option>
					<option value="6171">6171: MELD/PELD -29</option>
					<option value="6172">6172: MELD/PELD -28</option>
					<option value="6173">6173: MELD/PELD -27</option>
					<option value="6174">6174: MELD/PELD -26</option>
					<option value="6175">6175: MELD/PELD -25</option>
					<option value="6176">6176: MELD/PELD -24</option>
					<option value="6177">6177: MELD/PELD -23</option>
					<option value="6178">6178: MELD/PELD -22</option>
					<option value="6179">6179: MELD/PELD -21</option>
					<option value="6180">6180: MELD/PELD -20</option>
					<option value="6181">6181: MELD/PELD -19</option>
					<option value="6182">6182: MELD/PELD -18</option>
					<option value="6183">6183: MELD/PELD -17</option>
					<option value="6184">6184: MELD/PELD -16</option>
					<option value="6185">6185: MELD/PELD -15</option>
					<option value="6186">6186: MELD/PELD -14</option>
					<option value="6187">6187: MELD/PELD -13</option>
					<option value="6188">6188: MELD/PELD -12</option>
					<option value="6189">6189: MELD/PELD -11</option>
					<option value="6190">6190: MELD/PELD -10</option>
					<option value="6191">6191: MELD/PELD -9</option>
					<option value="6192">6192: MELD/PELD -8</option>
					<option value="6193">6193: MELD/PELD -7</option>
					<option value="6194">6194: MELD/PELD -6</option>
					<option value="6195">6195: MELD/PELD -5</option>
					<option value="6196">6196: MELD/PELD -4</option>
					<option value="6197">6197: MELD/PELD -3</option>
					<option value="6198">6198: MELD/PELD -2</option>
					<option value="6199">6199: MELD/PELD -1</option>
					<option value="6200">6200: MELD/PELD 0</option>
					<option value="6201">6201: MELD/PELD 1</option>
					<option value="6202">6202: MELD/PELD 2</option>
					<option value="6203">6203: MELD/PELD 3</option>
					<option value="6204">6204: MELD/PELD 4</option>
					<option value="6205">6205: MELD/PELD 5</option>
					<option value="6206">6206: MELD/PELD 6</option>
					<option value="6207">6207: MELD/PELD 7</option>
					<option value="6208">6208: MELD/PELD 8</option>
					<option value="6209">6209: MELD/PELD 9</option>
					<option value="6210">6210: MELD/PELD 10</option>
					<option value="6211">6211: MELD/PELD 11</option>
					<option value="6212">6212: MELD/PELD 12</option>
					<option value="6213">6213: MELD/PELD 13</option>
					<option value="6214">6214: MELD/PELD 14</option>
					<option value="6215">6215: MELD/PELD 15</option>
					<option value="6216">6216: MELD/PELD 16</option>
					<option value="6217">6217: MELD/PELD 17</option>
					<option value="6218">6218: MELD/PELD 18</option>
					<option value="6219">6219: MELD/PELD 19</option>
					<option value="6220">6220: MELD/PELD 20</option>
					<option value="6221">6221: MELD/PELD 21</option>
					<option value="6222">6222: MELD/PELD 22</option>
					<option value="6223">6223: MELD/PELD 23</option>
					<option value="6224">6224: MELD/PELD 24</option>
					<option value="6225">6225: MELD/PELD 25</option>
					<option value="6226">6226: MELD/PELD 26</option>
					<option value="6227">6227: MELD/PELD 27</option>
					<option value="6228">6228: MELD/PELD 28</option>
					<option value="6229">6229: MELD/PELD 29</option>
					<option value="6230">6230: MELD/PELD 30</option>
					<option value="6231">6231: MELD/PELD 31</option>
					<option value="6232">6232: MELD/PELD 32</option>
					<option value="6233">6233: MELD/PELD 33</option>
					<option value="6234">6234: MELD/PELD 34</option>
					<option value="6235">6235: MELD/PELD 35</option>
					<option value="6236">6236: MELD/PELD 36</option>
					<option value="6237">6237: MELD/PELD 37</option>
					<option value="6238">6238: MELD/PELD 38</option>
					<option value="6239">6239: MELD/PELD 39</option>
					<option value="6240">6240: MELD/PELD 40</option>
					<option value="6241">6241: MELD/PELD 41</option>
					<option value="6242">6242: MELD/PELD 42</option>
					<option value="6243">6243: MELD/PELD 43</option>
					<option value="6244">6244: MELD/PELD 44</option>
					<option value="6245">6245: MELD/PELD 45</option>
					<option value="6246">6246: MELD/PELD 46</option>
					<option value="6247">6247: MELD/PELD 47</option>
					<option value="6248">6248: MELD/PELD 48</option>
					<option value="6249">6249: MELD/PELD 49</option>
					<option value="6250">6250: MELD/PELD 50</option>
					<option value="6251">6251: MELD/PELD 51</option>
					<option value="6252">6252: MELD/PELD 52</option>
					<option value="6253">6253: MELD/PELD 53</option>
					<option value="6254">6254: MELD/PELD 54</option>
					<option value="6255">6255: MELD/PELD 55</option>
					<option value="6256">6256: MELD/PELD 56</option>
					<option value="6257">6257: MELD/PELD 57</option>
					<option value="6258">6258: MELD/PELD 58</option>
					<option value="6259">6259: MELD/PELD 59</option>
					<option value="6260">6260: MELD/PELD 60</option>
					<option value="6261">6261: MELD/PELD 61</option>
					<option value="6262">6262: MELD/PELD 62</option>
					<option value="6263">6263: MELD/PELD 63</option>
					<option value="6264">6264: MELD/PELD 64</option>
					<option value="6265">6265: MELD/PELD 65</option>
					<option value="6266">6266: MELD/PELD 66</option>
					<option value="6267">6267: MELD/PELD 67</option>
					<option value="6268">6268: MELD/PELD 68</option>
					<option value="6269">6269: MELD/PELD 69</option>
					<option value="6270">6270: MELD/PELD 70</option>
					<option value="6271">6271: MELD/PELD 71</option>
					<option value="6272">6272: MELD/PELD 72</option>
					<option value="6273">6273: MELD/PELD 73</option>
					<option value="6274">6274: MELD/PELD 74</option>
					<option value="6275">6275: MELD/PELD 75</option>
					<option value="6276">6276: MELD/PELD 76</option>
					<option value="6277">6277: MELD/PELD 77</option>
					<option value="6278">6278: MELD/PELD 78</option>
					<option value="6279">6279: MELD/PELD 79</option>
					<option value="6280">6280: MELD/PELD 80</option>
					<option value="6281">6281: MELD/PELD 81</option>
					<option value="6282">6282: MELD/PELD 82</option>
					<option value="6283">6283: MELD/PELD 83</option>
					<option value="6284">6284: MELD/PELD 84</option>
					<option value="6285">6285: MELD/PELD 85</option>
					<option value="6286">6286: MELD/PELD 86</option>
					<option value="6287">6287: MELD/PELD 87</option>
					<option value="6288">6288: MELD/PELD 88</option>
					<option value="6289">6289: MELD/PELD 89</option>
					<option value="6290">6290: MELD/PELD 90</option>
					<option value="6291">6291: MELD/PELD 91</option>
					<option value="6292">6292: MELD/PELD 92</option>
					<option value="6293">6293: MELD/PELD 93</option>
					<option value="6294">6294: MELD/PELD 94</option>
					<option value="6295">6295: MELD/PELD 95</option>
					<option value="6296">6296: MELD/PELD 96</option>
					<option value="6297">6297: MELD/PELD 97</option>
					<option value="6298">6298: MELD/PELD 98</option>
					<option value="6299">6299: MELD/PELD 99</option>
					<option value="6999">6999: Temporarily Inactive</option>
					<option value="7010">7010: Active</option>
					<option value="7999">7999: Temporarily Inactive</option>
					<option value="8010">8010: Active</option>
					<option value="8099">8099: Temporarily Inactive</option>
					<option value="8999">8999: Temporarily Inactive</option>
					<option value="9010">9010: Status 1</option>
					<option value="9020">9020: Status 2</option>
					<option value="9030">9030: Active</option>
					<option value="9099">9099: Temporarily Inactive</option>
					<option value="9999">9999: Temporarily Inactive</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LISTING CTR ID</label>
				<label className="text-secondary" >CAN_LISTING_ Center ID:</label>
				<input className="form-control"type="number" readOnly value={this.props.canListingCtrId} onChange={this.props.onChangeCanListingCtrId} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LISTING DT</label>
				<label className="text-secondary" >Listing Date - date/time candidate was physically added to the waiting list - this date/time does not change for transfers:</label>
				<input className="form-control"type="datetime-local" value={this.props.canListingDt} onChange={this.props.onChangeCanListingDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LISTING OPO ID</label>
				<label className="text-secondary" >OPO Serving Listing Center:</label>
				<input className="form-control"type="number" readOnly value={this.props.canListingOpoId} onChange={this.props.onChangeCanListingOpoId} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN REM CD</label>
				<label className="text-secondary" >Reason why candidate was removed (removal code):</label>
				<select className="form-control" value={this.props.canRemCd} onChange={this.props.onChangeCanRemCd}>
					<option value="" hidden disabled selected/>
					<option value="4">4: Deceased Donor tx, removed by transplanting center</option>
					<option value="5">5: Medically Unsuitable</option>
					<option value="6">6: Refused transplant</option>
					<option value="7">7: Transferred to another center</option>
					<option value="8">8: Died</option>
					<option value="9">9: Other</option>
					<option value="10">10: Candidate listed in error</option>
					<option value="11">11: Candidate listed for unacceptable antigens only</option>
					<option value="12">12: Candidate condition improved, tx not needed</option>
					<option value="13">13: Candidate condition deteriorated , too sick for tx</option>
					<option value="14">14: Transplant at another center (multi-listed)</option>
					<option value="15">15: Living Donor tx, removed by transplanting center</option>
					<option value="16">16: Candidate Removed in Error</option>
					<option value="17">17: Changed to KP ( by system )</option>
					<option value="18">18: Deceased Donor Emergency Tx</option>
					<option value="19">19: Deceased Donor Multi-Organ Tx</option>
					<option value="20">20: Program inactive for 2+ years</option>
					<option value="21">21: Patient died during TX procedure</option>
					<option value="22">22: Transplanted in another country</option>
					<option value="23">23: Patient died during Living Donor TX procedure</option>
					<option value="24">24: Unable to contact candidate</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN REM COD</label>
				<label className="text-secondary" >Cause of Death:</label>
				<select className="form-control" value={this.props.canRemCod} onChange={this.props.onChangeCanRemCod}>
					<option value="" hidden disabled selected/>
					<option value="998">998: UNKNOWN</option>
					<option value="999">999: OTHER SPECIFY</option>
					<option value="2000">2000: TH:GRAFT FAILURE: PRIMARY FAILURE</option>
					<option value="2001">2001: TH:GRAFT FAILURE: REJECTION- HYPERACUTE</option>
					<option value="2002">2002: TH:GRAFT FAILURE: REJECTION- ACUTE</option>
					<option value="2003">2003: TH:GRAFT FAILURE: REJECTION- CHRONIC</option>
					<option value="2004">2004: TH:GRAFT FAILURE: TECHNICAL</option>
					<option value="2005">2005: TH:GRAFT FAILURE: GRAFT INFECTION</option>
					<option value="2006">2006: TH:GRAFT FAILURE: RECURRENT DISEASE</option>
					<option value="2099">2099: TH:GRAFT FAILURE: NON-SPECIFIC</option>
					<option value="2100">2100: TH:INFECTION: BACTERIAL SEPTICEMIA</option>
					<option value="2101">2101: TH:INFECTION: BACTERIAL PNEUMONIA</option>
					<option value="2109">2109: TH:INFECTION: BACTERIAL- OTHER SPECIFY</option>
					<option value="2110">2110: TH:INFECTION: VIRAL- CYTOMEGALOVIRUS (CMV)</option>
					<option value="2111">2111: TH:INFECTION: VIRAL- HEPATITIS</option>
					<option value="2112">2112: TH:INFECTION: VIRAL-SEPTICEMIA</option>
					<option value="2119">2119: TH:INFECTION: VIRAL- OTHER SPECIFY</option>
					<option value="2120">2120: TH:INFECTION: FUNGAL- ASPERGILLUS</option>
					<option value="2129">2129: TH:INFECTION: FUNGAL- OTHER SPECIFY</option>
					<option value="2130">2130: TH:INFECTION: PROTOZOAL</option>
					<option value="2198">2198: TH:INFECTION: MIXED OTHER SPECIFY</option>
					<option value="2199">2199: TH:INFECTION: OTHER SPECIFY</option>
					<option value="2200">2200: TH:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
					<option value="2201">2201: TH:CARDIOVASCULAR: CARDIAC ARREST</option>
					<option value="2202">2202: TH:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
					<option value="2203">2203: TH:CARDIOVASCULAR: VENTRICULAR FAILURE</option>
					<option value="2204">2204: TH:CARDIOVASCULAR: CORONARY ARTERY DISEASE</option>
					<option value="2205">2205: TH:CARDIOVASCULAR: ATHEROSCLEROSIS</option>
					<option value="2206">2206: TH:CARDIOVASCULAR: RHYTHM DISORDER</option>
					<option value="2207">2207: TH:CARDIOVASCULAR: CARDITIS</option>
					<option value="2208">2208: TH:CARDIOVASCULAR: AORTIC ANEURYSM</option>
					<option value="2209">2209: TH:CARDIOVASCULAR: CARDIOGENIC SHOCK</option>
					<option value="2299">2299: TH:CARDIOVASCULAR: OTHER SPECIFY</option>
					<option value="2300">2300: TH:PULM: DEHISCENCE</option>
					<option value="2301">2301: TH:PULM: BRONCHIOLITIS</option>
					<option value="2302">2302: TH:PULM: PRIMARY PULMONARY HYPERTENSION</option>
					<option value="2303">2303: TH:PULM: PULMONARY EMBOLISM</option>
					<option value="2304">2304: TH:PULM: RESPIRATORY FAILURE</option>
					<option value="2305">2305: TH:PULM: ACUTE RESPIRATORY DISTRESS DISEASE</option>
					<option value="2399">2399: TH:PULM: OTHER SPECIFY</option>
					<option value="2400">2400: TH:CEREBROVASCULAR: STROKE</option>
					<option value="2401">2401: TH:CEREBROVASCULAR: HEMORRHAGE (NON-STROKE)</option>
					<option value="2402">2402: TH:CEREBROVASCULAR: BRAIN ANOXIA</option>
					<option value="2403">2403: TH:CEREBROVASCULAR: DEGENERATIVE BRAIN DISEASE</option>
					<option value="2499">2499: TH:CEREBROVASCULAR: OTHER SPECIFY</option>
					<option value="2500">2500: TH:HEMORRHAGE: GASTROINTESTINAL</option>
					<option value="2501">2501: TH:HEMORRHAGE: INTRAOPERATIVE</option>
					<option value="2502">2502: TH:HEMORRHAGE: DISSEMINATED INTRAVAS COAGULATION</option>
					<option value="2503">2503: TH:HEMORRHAGE: POST-OPERATIVE</option>
					<option value="2504">2504: TH:HEMORRHAGE: RESPIRATORY</option>
					<option value="2599">2599: TH:HEMORRHAGE: OTHER SPECIFY</option>
					<option value="2600">2600: TH:MALIG: METASTATIC OTHER SPECIFY</option>
					<option value="2601">2601: TH:MALIG: PRIMARY OTHER SPECIFY</option>
					<option value="2602">2602: TH:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
					<option value="2603">2603: TH:MALIG: LYMPHOMA</option>
					<option value="2604">2604: TH:MALIG: SKIN</option>
					<option value="2699">2699: TH:MALIG: OTHER SPECIFY</option>
					<option value="2700">2700: TH:DIABETES MELLITUS</option>
					<option value="2701">2701: TH:INTRAOP: NOT HEMORRHAGE - OTHER SPECIFY</option>
					<option value="2702">2702: TH:PANCREATITIS</option>
					<option value="2703">2703: TH:RENAL FAILURE</option>
					<option value="2704">2704: TH:LIVER FAILURE</option>
					<option value="2705">2705: TH:MULTIPLE ORGAN FAILURE</option>
					<option value="2706">2706: TH:FLUID/ELECTROLYTE DISORDER</option>
					<option value="2707">2707: TH:ACID/BASE DISORDER</option>
					<option value="2708">2708: TH:AMYLOIDOSIS</option>
					<option value="2709">2709: TH:HEMATOLOGIC OTHER SPECIFY</option>
					<option value="2710">2710: TH:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
					<option value="2711">2711: TH:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="2712">2712: TH:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="2713">2713: TH:NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					<option value="2800">2800: TH:MOTOR VEHICLE ACCIDENT</option>
					<option value="2801">2801: TH:SUICIDE</option>
					<option value="2802">2802: TH:NON-COMPLIANCE</option>
					<option value="2803">2803: TH:TRAUMA OTHER SPECIFY</option>
					<option value="3200">3200: KI:GRAFT FAILURE: PRIMARY FAILURE</option>
					<option value="3201">3201: KI:GRAFT FAILURE: REJECTION</option>
					<option value="3202">3202: KI:GRAFT FAILURE: TECHNICAL</option>
					<option value="3203">3203: KI:GRAFT FAILURE: GRAFT INFECTION</option>
					<option value="3204">3204: KI:GRAFT FAILURE: RECURRENT DISEASE</option>
					<option value="3299">3299: KI:GRAFT FAILURE: OTHER SPECIFY</option>
					<option value="3300">3300: KI:INFECTION: BACTERIAL PERITONITIS</option>
					<option value="3301">3301: KI:INFECTION: BACTERIAL PNEUMONIA</option>
					<option value="3302">3302: KI:INFECTION: BACTERIAL SEPTICEMIA</option>
					<option value="3303">3303: KI:INFECTION: FUNGAL</option>
					<option value="3304">3304: KI:INFECTION: MIXED OTHER SPECIFY</option>
					<option value="3305">3305: KI:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
					<option value="3306">3306: KI:INFECTION: URINARY TRACT</option>
					<option value="3307">3307: KI:INFECTION: VIRAL</option>
					<option value="3308">3308: KI:INFECTION: AIDS</option>
					<option value="3399">3399: KI:INFECTION: OTHER SPECIFY</option>
					<option value="3400">3400: KI:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
					<option value="3401">3401: KI:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
					<option value="3402">3402: KI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
					<option value="3499">3499: KI:CARDIOVASCULAR: OTHER SPECIFY</option>
					<option value="3500">3500: KI:CEREBROVASCULAR: STROKE</option>
					<option value="3599">3599: KI:CEREBROVASCULAR: OTHER SPECIFY</option>
					<option value="3600">3600: KI:HEMORRHAGE: GASTROINTESTINAL</option>
					<option value="3601">3601: KI:HEMORRHAGE: INTRAOPERATIVE</option>
					<option value="3699">3699: KI:HEMORRHAGE: OTHER SPECIFY</option>
					<option value="3700">3700: KI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
					<option value="3701">3701: KI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
					<option value="3702">3702: KI:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
					<option value="3799">3799: KI:MALIGNANCY: OTHER SPECIFY</option>
					<option value="3800">3800: KI:TRAUMA: MOTOR VEHICLE</option>
					<option value="3899">3899: KI:TRAUMA: OTHER SPECIFY</option>
					<option value="3900">3900: KI:MISCELLANEOUS: DIABETES MELLITUS</option>
					<option value="3901">3901: KI:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
					<option value="3902">3902: KI:MISCELLANEOUS: PANCREATITIS</option>
					<option value="3903">3903: KI:MISCELLANEOUS: RENAL FAILURE</option>
					<option value="3904">3904: KI:MISCELLANEOUS: RESPIRATORY FAILURE</option>
					<option value="3905">3905: KI:MISCELLANEOUS: SUICIDE</option>
					<option value="3906">3906: KI:NON-COMPLIANCE</option>
					<option value="3907">3907: KI:MISC - LIVER FAILURE</option>
					<option value="3908">3908: KI:MISC - MULTIPLE SYSTEM ORGAN FAILURE (MSOF)</option>
					<option value="3909">3909: KI:MISC - FLUID/ELECTROLYTE DISORDER</option>
					<option value="3910">3910: KI:MISC - ACID/BASE DISORDER</option>
					<option value="3911">3911: KI:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="3912">3912: KI:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="3913">3913: KI:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="3914">3914: KI:MISC - NON-IMMUNO, NON-HEMATOLOGIC, SPECIFY DRUG</option>
					<option value="3915">3915: KI:PRIMARY NON-FUNCTION (GRAFT NEVER FUNCTIONED POST-TRANSPLANT)</option>
					<option value="4246">4246: LI:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
					<option value="4247">4247: LI:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
					<option value="4600">4600: LI:GRAFT FAILURE:PRIMARY</option>
					<option value="4601">4601: LI:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
					<option value="4602">4602: LI:GRAFT FAILURE:BILIARY TRACT COMPLICATION</option>
					<option value="4603">4603: LI:GRAFT FAILURE:HEPATITIS</option>
					<option value="4604">4604: LI:GRAFT FAILURE:RECURRENT DISEASE (NON-HEPATITIS)</option>
					<option value="4605">4605: LI:GRAFT FAILURE:REJECTION</option>
					<option value="4606">4606: LI:GRAFT FAILURE:INFECTION (NON-HEPATITIS)</option>
					<option value="4610">4610: LI:GRAFT FAILURE:OTHER SPECIFY</option>
					<option value="4615">4615: LI:GRAFT VS. HOST DISEASE</option>
					<option value="4620">4620: LI:CARDIO: ARRYTHMIA</option>
					<option value="4621">4621: LI:CARDIO: ARTERIAL OR PULMONARY EMBOLISM</option>
					<option value="4622">4622: LI:CARDIO: HYPERKALEMIC ARREST</option>
					<option value="4623">4623: LI:CARDIO: CONGESTIVE FAILURE (CHF)</option>
					<option value="4624">4624: LI:CARDIO: MYOCARDIAL INFARCTION</option>
					<option value="4625">4625: LI:CARDIO: OTHER SPECIFY</option>
					<option value="4626">4626: LI:CARDIAC ARREST</option>
					<option value="4630">4630: LI:CEREBROVASCULAR: EMBOLIC STROKE</option>
					<option value="4631">4631: LI:CEREBROVASCULAR: HEMORRHAGIC STROKE</option>
					<option value="4635">4635: LI:CEREBROVASCULAR: OTHER SPECIFY</option>
					<option value="4640">4640: LI:PULM INSUFF OR EDEMA (EXC PNEUMONIA) (ARDS)</option>
					<option value="4645">4645: LI:RESPIRATORY FAILURE: OTHER SPECIFY CAUSE</option>
					<option value="4650">4650: LI:RENAL FAILURE</option>
					<option value="4660">4660: LI:MULTIPLE ORGAN SYSTEM FAILURE</option>
					<option value="4700">4700: LI:HEMORRHAGE: LOWER GASTROINTESTINAL</option>
					<option value="4701">4701: LI:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
					<option value="4702">4702: LI:HEMORRHAGE: VARICEAL</option>
					<option value="4703">4703: LI:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
					<option value="4705">4705: LI:HEMORRHAGE: OTHER SPECIFY</option>
					<option value="4706">4706: LI:HEMORRHAGE</option>
					<option value="4800">4800: LI:INF: BACTERIAL PERITONITIS</option>
					<option value="4801">4801: LI:INF: PNEUMONIA LEGIONELLA PNEUMOCYSTOSIS</option>
					<option value="4802">4802: LI:INF: GENERALIZED SEPSIS</option>
					<option value="4803">4803: LI:INF: FUNGAL ASPERGILLUS CRYPTOCOCCAL</option>
					<option value="4804">4804: LI:INF: MIXED OTHER SPECIFY</option>
					<option value="4805">4805: LI:INF: OPPORTUNISTIC</option>
					<option value="4806">4806: LI:INF: VIRAL</option>
					<option value="4810">4810: LI:INF: OTHER SPECIFY</option>
					<option value="4811">4811: LI:INFECTION</option>
					<option value="4850">4850: LI:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
					<option value="4851">4851: LI:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
					<option value="4855">4855: LI:MALIGNANCY: OTHER SPECIFY</option>
					<option value="4856">4856: LI:MALIGNANCY</option>
					<option value="4860">4860: LI:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
					<option value="4900">4900: LI:OPERATIVE: OTHER SPECIFY</option>
					<option value="4910">4910: LI:BRAIN DEAD:NEVER RECOVERED FROM SURGERY</option>
					<option value="4920">4920: LI:SUICIDE:ATTEMPTED SUICIDE - DIED LATER</option>
					<option value="4930">4930: LI:TRAUMA: MOTOR VEHICLE</option>
					<option value="4935">4935: LI:TRAUMA: OTHER SPECIFY</option>
					<option value="4940">4940: LI:DIABETES MELLITUS</option>
					<option value="4941">4941: LI:FLUID/ELECTROLYTE DISORDER</option>
					<option value="4942">4942: LI:ACID/BASE DISORDER</option>
					<option value="4945">4945: LI:ACUTE PANCREATITIS</option>
					<option value="4950">4950: LI:AIDS</option>
					<option value="4951">4951: LI:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
					<option value="4952">4952: LI:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="4953">4953: LI:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="4954">4954: LI:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					<option value="4955">4955: LI:GRAFT FAILURE: PRIMARY NON-FUNCTION</option>
					<option value="4956">4956: LI:GRAFT FAILURE: HEPATIC ARTERY THROMBOSIS</option>
					<option value="4957">4957: LI:GRAFT FAILURE: OTHER VASCULAR THROMBOSIS</option>
					<option value="4958">4958: LI:GRAFT FAILURE: DIFFUSE CHOLANGIOPATHY</option>
					<option value="5200">5200: PA:INFECTION: BACTERIAL PERITONITIS</option>
					<option value="5201">5201: PA:INFECTION: BACTERIAL PNEUMONIA</option>
					<option value="5202">5202: PA:INFECTION: BACTERIAL SEPTICEMIA</option>
					<option value="5203">5203: PA:INFECTION: FUNGAL PERITONITIS</option>
					<option value="5204">5204: PA:INFECTION: FUNGAL PNEUMONIA</option>
					<option value="5205">5205: PA:INFECTION: FUNGAL SEPTICEMIA</option>
					<option value="5206">5206: PA:INFECTION: MIXED OTHER SPECIFY</option>
					<option value="5207">5207: PA:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
					<option value="5208">5208: PA:INFECTION: URINARY TRACT</option>
					<option value="5209">5209: PA:INFECTION: VIRAL CMV</option>
					<option value="5210">5210: PA:INFECTION: VIRAL NON-CMV</option>
					<option value="5211">5211: PA:INFECTION: AIDS</option>
					<option value="5299">5299: PA:INFECTION: OTHER SPECIFY</option>
					<option value="5300">5300: PA:CV: MF/CHF</option>
					<option value="5301">5301: PA:CV: VASCULAR EMBOLISM</option>
					<option value="5302">5302: PA:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
					<option value="5399">5399: PA:CV: OTHER SPECIFY</option>
					<option value="5400">5400: PA:CEREBROVASCULAR: STROKE</option>
					<option value="5499">5499: PA:CEREBROVASCULAR: OTHER SPECIFY</option>
					<option value="5500">5500: PA:HEMORRHAGE: GASTROINTESTINAL</option>
					<option value="5501">5501: PA:HEMORRHAGE: INTRAOPERATIVE</option>
					<option value="5599">5599: PA:HEMORRHAGE: OTHER SPECIFY</option>
					<option value="5600">5600: PA:MALIG: METASTATIC OTHER SPECIFY</option>
					<option value="5601">5601: PA:MALIG: PRIMARY OTHER SPECIFY</option>
					<option value="5602">5602: PA:MALIG: POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
					<option value="5699">5699: PA:MALIG: OTHER SPECIFY</option>
					<option value="5700">5700: PA:TRAUMA: MOTOR VEHICLE</option>
					<option value="5799">5799: PA:TRAUMA: OTHER SPECIFY</option>
					<option value="5800">5800: PA:MISC: DIABETES MELLITUS COMPLICATIONS</option>
					<option value="5801">5801: PA:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
					<option value="5802">5802: PA:MISC: PANCREATITIS (GRAFT)</option>
					<option value="5803">5803: PA:MISC: PANCREATITIS (NATIVE)</option>
					<option value="5804">5804: PA:MISC: LIVER FAILURE</option>
					<option value="5805">5805: PA:MISC: RENAL FAILURE</option>
					<option value="5806">5806: PA:MISC: RESP FAILURE (NON-PNEUMONIA)</option>
					<option value="5807">5807: PA:MISC: ARDS</option>
					<option value="5808">5808: PA:MISC: SUICIDE</option>
					<option value="5809">5809: PA:MISC: MULTI-SYSTEM FAILURE</option>
					<option value="5810">5810: PA:MISC - FLUID/ELECTROLYTE DISORDER</option>
					<option value="5811">5811: PA:MISC - ACID/BASE DISORDER</option>
					<option value="5812">5812: PA:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="5813">5813: PA:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="5814">5814: PA:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="5815">5815: PA:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					<option value="6500">6500: IN:GRAFT FAILURE:VASCULAR THROMBOSIS</option>
					<option value="6501">6501: IN:GRAFT FAILURE:RECURRENT DISEASE OTHER SPECIFY</option>
					<option value="6502">6502: IN:GRAFT FAILURE:REJECTION</option>
					<option value="6503">6503: IN:GRAFT FAILURE:INFECTION OTHER SPECIFY</option>
					<option value="6504">6504: IN:GRAFT FAILURE:PRIMARY</option>
					<option value="6548">6548: IN:GRAFT FAILURE:OTHER SPECIFY</option>
					<option value="6550">6550: IN:CARDIOVASCULAR:ARRHYTHMIA</option>
					<option value="6551">6551: IN:CARDIOVASCULAR:ARTERIAL OR PULMONARY EMBOLISM</option>
					<option value="6552">6552: IN:CARDIOVASCULAR:HYPERKALEMIC ARREST</option>
					<option value="6553">6553: IN:CARDIOVASCULAR:CONGESTIVE FAILURE(CHF)</option>
					<option value="6554">6554: IN:CARDIOVASCULAR:MYOCARDIAL INFARCTION</option>
					<option value="6555">6555: IN:CARDIOVASCULAR - ARTERIAL EMBOLISM</option>
					<option value="6556">6556: IN:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
					<option value="6598">6598: IN:CARDIOVASCULAR:OTHER SPECIFY</option>
					<option value="6600">6600: IN:CEREBROVASCULAR:EMBOLIC STROKE</option>
					<option value="6601">6601: IN:CEREBROVASCULAR:HEMORRHAGIC STROKE</option>
					<option value="6648">6648: IN:CEREBROVASCULAR:OTHER SPECIFY</option>
					<option value="6650">6650: IN:PULM INSUFF OR EDEMA (EXC PNEUMONIA) Adult</option>
					<option value="6651">6651: IN:RESPIRATORY FAILURE:OTHER SPECIFY CAUSE</option>
					<option value="6700">6700: IN:HEMORRHAGE:LOWER GASTROINTESTINAL</option>
					<option value="6701">6701: IN:HEMORRHAGE: NEUROLOGICAL (BRAIN)</option>
					<option value="6702">6702: IN:HEMORRHAGE:VARICEAL</option>
					<option value="6703">6703: IN:HEMORRHAGE: DISSEMINATED INTRAVASCULAR COAGULATION (DIC)</option>
					<option value="6748">6748: IN:HEMORRHAGE:OTHER, SPECIFY</option>
					<option value="6750">6750: IN:INFECTION:BACTERIAL PERITONITIS</option>
					<option value="6751">6751: IN:INFECTION:BACTERIAL PNEUMONIA</option>
					<option value="6752">6752: IN:INFECTION:BACTERIAL SEPTICEMIA</option>
					<option value="6753">6753: IN:INFECTION:FUNGAL PERITONITIS</option>
					<option value="6754">6754: IN:INFECTION:FUNGAL PNEUMONIA</option>
					<option value="6755">6755: IN:INFECTION:FUNGAL SEPTICEMIA</option>
					<option value="6756">6756: IN:INFECTION:MIXED OTHER SPECIFY</option>
					<option value="6757">6757: IN:INFECTION:OPPORTUNISTIC OTHER SPECIFY</option>
					<option value="6758">6758: IN:INFECTION:URINARY TRACT</option>
					<option value="6759">6759: IN:INFECTION:VIRAL CMV</option>
					<option value="6760">6760: IN:INFECTION:VIRAL NON-CMV</option>
					<option value="6761">6761: IN:INFECTION:AIDS</option>
					<option value="6798">6798: IN:INFECTION:OTHER SPECIFY</option>
					<option value="6800">6800: IN:MALIGNANCY:PRIMARY OTHER SPECIFY</option>
					<option value="6801">6801: IN:MALIGNANCY:METASTATIC OTHER SPECIFY</option>
					<option value="6848">6848: IN:MALIGNANCY:OTHER SPECIFY: (IE., LEUKEMIA)</option>
					<option value="6850">6850: IN:POST-TX LYMPHOPROLIFERATIVE DISORDER</option>
					<option value="6851">6851: IN:OPERATIVE: OTHER SPECIFY</option>
					<option value="6852">6852: IN:BRAIN DEAD: NEVER RECOVERED FROM SURGERY</option>
					<option value="6853">6853: IN:SUICIDE:ATTEMPTED SUICIDE-DIED LATER</option>
					<option value="6854">6854: IN:TRAUMA: MOTOR VEHICLE</option>
					<option value="6855">6855: IN:TRAUMA: OTHER SPECIFY</option>
					<option value="6856">6856: IN:PANCREATITIS (GRAFT)</option>
					<option value="6857">6857: IN:PANCREATITIS (NATIVE)</option>
					<option value="6858">6858: IN:RENAL FAILURE</option>
					<option value="6859">6859: IN:MULTIPLE ORGAN SYSTEM FAILURE</option>
					<option value="6860">6860: IN:GRAFT VS HOST DISEASE</option>
					<option value="6861">6861: IN:FLUID/ELECTROLYTE DISORDER</option>
					<option value="6862">6862: IN:ACID/BASE DISORDER</option>
					<option value="6863">6863: IN:IMMUNOSUPPRESSIVE DRUG RELATED - HEMATOLOGIC</option>
					<option value="6864">6864: IN:IMMUNOSUPPRESSIVE DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="6865">6865: IN:NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="6866">6866: IN:NON-IMMUNO DRUG RELATED - NON-HEMATOLOGIC, SPECIFY DRUG</option>
					<option value="7200">7200: KP:INFECTION: BACTERIAL PERITONITIS</option>
					<option value="7201">7201: KP:INFECTION: BACTERIAL PNEUMONIA</option>
					<option value="7202">7202: KP:INFECTION: BACTERIAL SEPTICEMIA</option>
					<option value="7203">7203: KP:INFECTION: FUNGAL PERITONITIS</option>
					<option value="7204">7204: KP:INFECTION: FUNGAL PNEUMONIA</option>
					<option value="7205">7205: KP:INFECTION: FUNGAL SEPTICEMIA</option>
					<option value="7206">7206: KP:INFECTION: MIXED OTHER SPECIFY</option>
					<option value="7207">7207: KP:INFECTION: OPPORTUNISTIC OTHER SPECIFY</option>
					<option value="7208">7208: KP:INFECTION: URINARY TRACT</option>
					<option value="7209">7209: KP:INFECTION: VIRAL CMV</option>
					<option value="7210">7210: KP:INFECTION: VIRAL NON-CMV</option>
					<option value="7211">7211: KP:INFECTION: AIDS</option>
					<option value="7212">7212: KP:INFECTION: OTHER SPECIFY</option>
					<option value="7213">7213: KP:CARDIOVASCULAR: MYOCARDIAL INFARCTION</option>
					<option value="7214">7214: KP:CARDIOVASCULAR: ARTERIAL EMBOLISM</option>
					<option value="7215">7215: KP:CARDIOVASCULAR: VASCULAR EMBOLISM</option>
					<option value="7216">7216: KP:CARDIOVASCULAR: OTHER SPECIFY</option>
					<option value="7217">7217: KP:CEREBROVASCULAR: STROKE</option>
					<option value="7218">7218: KP:CEREBROVASCULAR: OTHER SPECIFY</option>
					<option value="7219">7219: KP:HEMORRHAGE: GASTROINTESTINAL</option>
					<option value="7220">7220: KP:HEMORRHAGE: INTRAOPERATIVE</option>
					<option value="7221">7221: KP:HEMORRHAGE: OTHER SPECIFY</option>
					<option value="7222">7222: KP:MALIGNANCY: METASTATIC OTHER SPECIFY</option>
					<option value="7223">7223: KP:MALIGNANCY: PRIMARY OTHER SPECIFY</option>
					<option value="7224">7224: KP:MALIGNANCY: POST-TX LYMPHOPROLIFERATIVE</option>
					<option value="7225">7225: KP:MALIGNANCY: OTHER SPECIFY</option>
					<option value="7226">7226: KP:TRAUMA: MOTOR VEHICLE</option>
					<option value="7227">7227: KP:TRAUMA: OTHER SPECIFY</option>
					<option value="7228">7228: KP:MISCELLANEOUS: DIABETES MELLITUS</option>
					<option value="7229">7229: KP:MISC: INTRAOPER (NON-HEMORRHAGE OTHER SPECIFY)</option>
					<option value="7230">7230: KP:MISC: PANCREATITIS (GRAFT)</option>
					<option value="7231">7231: KP:MISC: PANCREATITIS (NATIVE)</option>
					<option value="7232">7232: KP:MISC: LIVER FAILURE</option>
					<option value="7233">7233: KP:MISC: ARDS</option>
					<option value="7234">7234: KP:MISCELLANEOUS: INTRAOPERATIVE OTHER SPECIFY</option>
					<option value="7235">7235: KP:MISCELLANEOUS: RENAL FAILURE</option>
					<option value="7236">7236: KP:MISCELLANEOUS: RESPIRATORY FAILURE</option>
					<option value="7237">7237: KP:MISCELLANEOUS: SUICIDE</option>
					<option value="7238">7238: KP:MISC: MULTI-SYSTEM FAILURE</option>
					<option value="7239">7239: KP:NON-COMPLIANCE</option>
					<option value="7240">7240: KP:CARDIOVASCULAR - PULMONARY EMBOLISM</option>
					<option value="7241">7241: KP:MISC - FLUID/ELECTROLYTE DISORDER</option>
					<option value="7242">7242: KP:MISC - ACID/BASE DISORDER</option>
					<option value="7243">7243: KP:MISC - IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="7244">7244: KP:MISC - IMMUNO DRUG RELATED - NON-HEMATOLOGIC</option>
					<option value="7245">7245: KP:MISC - NON-IMMUNO DRUG RELATED - HEMATOLOGIC</option>
					<option value="7246">7246: KP:MISC - NON-IMMUNO - NON-HEMATOLOGIC, SPECIFY DRUG</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN REM DT</label>
				<label className="text-secondary" >rem_dt /remreg, censored by CAN_DEATH_DT, tx_dt:</label>
				<input className="form-control"type="datetime-local" value={this.props.canRemDt} onChange={this.props.onChangeCanRemDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN STAT EXTEND FLG</label>
				<label className="text-secondary" >Status Extension granted for Liver candidate:</label>
				<input className="form-control"type="text" value={this.props.canStatExtendFlg} onChange={this.props.onChangeCanStatExtendFlg} />
			</div>
		</div>}

	</Tab>
	<Tab eventKey="tx" title="tx">
	{ this.state.key == 'tx' &&
		<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ANASTOMOSIS</label>
				<label className="text-secondary" >Was anastomosis initiated?:</label>
				<input className="form-control"type="text" value={this.props.canAnastomosis} onChange={this.props.onChangeCanAnastomosis} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN SOURCE</label>
				<label className="text-secondary" >Source of Candidate Data: A =Active Waitlist,R= Removed from Waitlist,L=Live Don Organ Recipient never on waitlist:</label>
				<input className="form-control"type="text" value={this.props.canSource} onChange={this.props.onChangeCanSource} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TRR EXISTS</label>
				<label className="text-secondary" >TRR found for this PX_ID-org_ty:</label>
				<input className="form-control"type="number" value={this.props.canTrrExists} onChange={this.props.onChangeCanTrrExists} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TX COUNTRY</label>
				<label className="text-secondary" >Country of transplant, if outside the US:</label>
				<select className="form-control" value={this.props.canTxCountry} onChange={this.props.onChangeCanTxCountry}>
					<option value="" hidden disabled selected/>
					<option value="1">1: UNITED STATES</option>
					<option value="2">2: AFGHANISTAN</option>
					<option value="3">3: ALBANIA</option>
					<option value="4">4: ALGERIA</option>
					<option value="5">5: AMERICAN SAMOA</option>
					<option value="6">6: ANDORRA</option>
					<option value="7">7: ANGOLA</option>
					<option value="8">8: ANGUILLA</option>
					<option value="9">9: ANTIGUA and BARBUDA</option>
					<option value="10">10: ARGENTINA</option>
					<option value="11">11: ARMENIA</option>
					<option value="12">12: ARUBA</option>
					<option value="13">13: AUSTRALIA</option>
					<option value="14">14: AUSTRIA</option>
					<option value="15">15: AZERBAIJAN</option>
					<option value="16">16: AZORES</option>
					<option value="17">17: BAHAMAS</option>
					<option value="18">18: BAHRAIN</option>
					<option value="19">19: BANGLADESH</option>
					<option value="20">20: BARBADOS</option>
					<option value="21">21: BELARUS</option>
					<option value="22">22: BELGIUM</option>
					<option value="23">23: BELIZE</option>
					<option value="24">24: BENIN</option>
					<option value="25">25: BERMUDA</option>
					<option value="26">26: BHUTAN</option>
					<option value="27">27: BOLIVIA</option>
					<option value="28">28: BOSNIA-HERZEGOVINA</option>
					<option value="29">29: BOTSWANA</option>
					<option value="30">30: BRAZIL</option>
					<option value="31">31: BRITISH INDIAN OCEAN TERRITORY</option>
					<option value="32">32: BRITISH VIRGIN ISLANDS</option>
					<option value="33">33: BRUNEI DARUSSALAM</option>
					<option value="34">34: BULGARIA</option>
					<option value="35">35: BURKINA</option>
					<option value="36">36: BURMA (MYANMAR)</option>
					<option value="37">37: BURUNDI</option>
					<option value="38">38: CAMBODIA</option>
					<option value="39">39: CAMEROON</option>
					<option value="40">40: CANADA</option>
					<option value="41">41: CANARY ISLANDS</option>
					<option value="42">42: CANTON and ENDERBURY ISLANDS</option>
					<option value="43">43: CAPE VERDE</option>
					<option value="44">44: CAYMAN ISLAND</option>
					<option value="45">45: CENTRAL AFRICAN REPUBLIC</option>
					<option value="46">46: CHAD</option>
					<option value="47">47: CHILE</option>
					<option value="48">48: CHINA</option>
					<option value="49">49: CHRISTMAS ISLANDS</option>
					<option value="50">50: COCOS (KEELING) ISLAND</option>
					<option value="51">51: COLOMBIA</option>
					<option value="52">52: COMOROS</option>
					<option value="53">53: CONGO</option>
					<option value="54">54: CONGO, DEMOCRATIC REPUBLIC of</option>
					<option value="55">55: COOK ISLANDS</option>
					<option value="56">56: COSTA RICA</option>
					<option value="57">57: CROATIA</option>
					<option value="58">58: CUBA</option>
					<option value="59">59: CYPRUS</option>
					<option value="60">60: CZECH REPUBLIC:THE</option>
					<option value="61">61: DENMARK</option>
					<option value="62">62: DJIBOUTI</option>
					<option value="63">63: DOMINICA</option>
					<option value="64">64: DOMINICAN REPUBLIC</option>
					<option value="65">65: ECUADOR</option>
					<option value="66">66: EGYPT</option>
					<option value="67">67: EL SALVADOR</option>
					<option value="68">68: ENGLAND</option>
					<option value="69">69: EQUATORIAL GUINEA</option>
					<option value="70">70: ESTONIA</option>
					<option value="71">71: ETHIOPIA</option>
					<option value="72">72: FALKLAND ISLANDS (MALVINAS)</option>
					<option value="73">73: FAROE ISLANDS</option>
					<option value="74">74: FIJI</option>
					<option value="75">75: FINLAND</option>
					<option value="76">76: FRANCE</option>
					<option value="77">77: FRENCH GUIANA</option>
					<option value="78">78: FRENCH POLYNESIA</option>
					<option value="79">79: FRENCH SOUTHERN and ANTARCTIC</option>
					<option value="80">80: GABON</option>
					<option value="81">81: GAMBIA:THE</option>
					<option value="82">82: GAZA STRIP</option>
					<option value="83">83: GEORGIA</option>
					<option value="84">84: GERMANY:FEDERAL REPUBLIC of</option>
					<option value="85">85: GHANA</option>
					<option value="86">86: GIBRALTAR</option>
					<option value="87">87: GREECE</option>
					<option value="88">88: GREENLAND</option>
					<option value="89">89: GRENADA</option>
					<option value="90">90: GUADELOUPE</option>
					<option value="91">91: GUAM</option>
					<option value="92">92: GUATEMALA</option>
					<option value="93">93: GUINEA</option>
					<option value="94">94: GUINEA-BISSAU</option>
					<option value="95">95: GUYANA</option>
					<option value="96">96: HAITI</option>
					<option value="97">97: HEARD ISLAND and MCDONALD ISLANDS</option>
					<option value="98">98: HONDURAS</option>
					<option value="99">99: HONG KONG</option>
					<option value="100">100: HUNGARY</option>
					<option value="101">101: ICELAND</option>
					<option value="102">102: INDIA</option>
					<option value="103">103: INDONESIA</option>
					<option value="104">104: IRAN</option>
					<option value="105">105: IRAQ</option>
					<option value="106">106: IRELAND</option>
					<option value="107">107: ISRAEL</option>
					<option value="108">108: ITALY</option>
					<option value="109">109: IVORY COAST</option>
					<option value="110">110: JAMAICA</option>
					<option value="111">111: JAPAN</option>
					<option value="112">112: JOHNSTON ATOLL</option>
					<option value="113">113: JORDAN</option>
					<option value="114">114: KAMPUCHEA:DEMOCRATIC</option>
					<option value="115">115: KAZAKHSTAN</option>
					<option value="116">116: KENYA</option>
					<option value="117">117: KIRIBATI</option>
					<option value="118">118: KOREA</option>
					<option value="119">119: KUWAIT</option>
					<option value="120">120: KYRGYZSTAN</option>
					<option value="121">121: LAO PEOPLES' DEMOCRATIC REPUBLIC</option>
					<option value="122">122: LATIN AMERICA</option>
					<option value="123">123: LATVIA</option>
					<option value="124">124: LEBANON</option>
					<option value="125">125: LESOTHO</option>
					<option value="126">126: LIBERIA</option>
					<option value="127">127: LIBYA</option>
					<option value="128">128: LIECHTENSTEIN</option>
					<option value="129">129: LITHUANIA</option>
					<option value="130">130: LUXEMBOURG</option>
					<option value="131">131: MACAU</option>
					<option value="132">132: MACEDONIA (SKOPJE)</option>
					<option value="133">133: MADAGASCAR</option>
					<option value="134">134: MADEIRA ISLAND</option>
					<option value="135">135: MALAWI</option>
					<option value="136">136: MALAYSIA</option>
					<option value="137">137: MALDIVES</option>
					<option value="138">138: MALI</option>
					<option value="139">139: MALTA</option>
					<option value="140">140: MARSHALL ISLANDS</option>
					<option value="141">141: MARTINIQUE</option>
					<option value="142">142: MAURITANIA</option>
					<option value="143">143: MAURITIUS</option>
					<option value="144">144: MEXICO</option>
					<option value="145">145: MICRONESIA:FEDERATED STATES of</option>
					<option value="146">146: MIDWAY ISLANDS</option>
					<option value="147">147: MOLDOVA</option>
					<option value="148">148: MONACO</option>
					<option value="149">149: MONGOLIA</option>
					<option value="150">150: MONTSERRAT</option>
					<option value="151">151: MOROCCO</option>
					<option value="152">152: MOZAMBIQUE</option>
					<option value="153">153: NAMIBIA</option>
					<option value="154">154: NAURU</option>
					<option value="155">155: NEPAL</option>
					<option value="156">156: NETHERLANDS</option>
					<option value="157">157: NETHERLANDS ANTILLES</option>
					<option value="158">158: NEW CALEDONIA</option>
					<option value="159">159: NEW ZEALAND</option>
					<option value="160">160: NICARAGUA</option>
					<option value="161">161: NIGER</option>
					<option value="162">162: NIGERIA</option>
					<option value="163">163: NIUE</option>
					<option value="164">164: NORFOLK ISLAND</option>
					<option value="165">165: NORTH KOREA</option>
					<option value="166">166: NORTHERN MARIANA ISLANDS</option>
					<option value="167">167: NORWAY</option>
					<option value="168">168: OMAN</option>
					<option value="169">169: PAKISTAN</option>
					<option value="170">170: PALAU</option>
					<option value="171">171: PANAMA</option>
					<option value="172">172: PAPUA NEW GUINEA</option>
					<option value="173">173: PARAGUAY</option>
					<option value="174">174: PERU</option>
					<option value="175">175: PHILIPPINES</option>
					<option value="176">176: PITCAIRN ISLAND</option>
					<option value="177">177: POLAND</option>
					<option value="178">178: PORTUGAL</option>
					<option value="179">179: PUERTO RICO</option>
					<option value="180">180: QATAR</option>
					<option value="181">181: REUNION</option>
					<option value="182">182: ROMANIA</option>
					<option value="183">183: RUSSIA</option>
					<option value="184">184: RWANDA</option>
					<option value="185">185: SAINT LUCIA</option>
					<option value="186">186: SAINT VINCENT and THE GRENADINES</option>
					<option value="187">187: SAMOA</option>
					<option value="188">188: SAN MARINO</option>
					<option value="189">189: SAO TOME and PRINCIPE</option>
					<option value="190">190: SAUDI ARABIA</option>
					<option value="191">191: SENEGAL</option>
					<option value="192">192: SERBIA AND MONTENEGRO</option>
					<option value="193">193: SEYCHELLES</option>
					<option value="194">194: SIERRA LEONE</option>
					<option value="195">195: SINGAPORE</option>
					<option value="196">196: SLOVAKIA</option>
					<option value="197">197: SLOVENIA</option>
					<option value="198">198: SOLOMON ISLANDS</option>
					<option value="199">199: SOMALIA</option>
					<option value="200">200: SOUTH AFRICA</option>
					<option value="201">201: SOUTH KOREA</option>
					<option value="202">202: SPAIN</option>
					<option value="203">203: SPANISH AFRICA</option>
					<option value="204">204: SRI LANKA</option>
					<option value="205">205: ST. CHRISTOPHER</option>
					<option value="206">206: ST. HELENA</option>
					<option value="207">207: ST. KITTS and NEVIS</option>
					<option value="208">208: ST. PIERRE and MIQUELON</option>
					<option value="209">209: SUDAN</option>
					<option value="210">210: SURINAME</option>
					<option value="211">211: SVALBARD and JAN MAYEN ISLANDS</option>
					<option value="212">212: SWAZILAND</option>
					<option value="213">213: SWEDEN</option>
					<option value="214">214: SWITZERLAND</option>
					<option value="215">215: SYRIAN ARAB REPUBLIC</option>
					<option value="216">216: TAIWAN</option>
					<option value="217">217: TAJIKISTAN</option>
					<option value="218">218: TANZANIA:UNTIED REPUBLIC of</option>
					<option value="219">219: THAILAND</option>
					<option value="220">220: TOGO</option>
					<option value="221">221: TOKELAU</option>
					<option value="222">222: TONGA</option>
					<option value="223">223: TRINIDAD and TOBAGO</option>
					<option value="224">224: TUNISIA</option>
					<option value="225">225: TURKEY</option>
					<option value="226">226: TURKMENISTAN</option>
					<option value="227">227: TURKS and CAICOS ISLAND</option>
					<option value="228">228: TUVALU</option>
					<option value="229">229: UGANDA</option>
					<option value="230">230: UKRAINE</option>
					<option value="231">231: UNITED ARAB EMIRATES</option>
					<option value="232">232: UNITED KINGDOM</option>
					<option value="234">234: URUGUAY</option>
					<option value="235">235: USA MINOR OUTLYING ISLANDS</option>
					<option value="236">236: UZBEKISTAN</option>
					<option value="237">237: VANUATA</option>
					<option value="238">238: VATICAN CITY</option>
					<option value="239">239: VENEZUELA</option>
					<option value="240">240: VIETNAM</option>
					<option value="241">241: VIRGIN ISLANDS of the USA</option>
					<option value="242">242: YEMEN:REPUBLIC of</option>
					<option value="243">243: ZAMBIA</option>
					<option value="244">244: ZIMBABWE</option>
					<option value="998">998: UNKNOWN</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >DONOR ID</label>
				<label className="text-secondary" >Encrypted Unique Donor ID (all donors) - foreign key:</label>
				<input className="form-control"type="number" readOnly value={this.props.donorId} onChange={this.props.onChangeDonorId} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >DON TY</label>
				<label className="text-secondary" >Donor Type (C-deceased, L-living):</label>
				<input className="form-control"type="text" value={this.props.donTy} onChange={this.props.onChangeDonTy} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >ORG AR</label>
				<label className="text-secondary" >Organ type with pancreas expanded to PTA and PAK:</label>
				<input className="form-control"type="text" value={this.props.orgAr} onChange={this.props.onChangeOrgAr} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS NEXTTX</label>
				<label className="text-secondary" >Transplant Date:</label>
				<input className="form-control"type="datetime-local" value={this.props.persNexttx} onChange={this.props.onChangePersNexttx} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS NEXTTX TRR ID</label>
				<label className="text-secondary" >Unique identifier for TRR - unique key:</label>
				<input className="form-control"type="number" readOnly value={this.props.persNexttxTrrId} onChange={this.props.onChangePersNexttxTrrId} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS OPTN DEATH DT</label>
				<label className="text-secondary" >OPTN Death date by unique person:</label>
				<input className="form-control"type="datetime-local" value={this.props.persOptnDeathDt} onChange={this.props.onChangePersOptnDeathDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS RESTRICT DEATH DT</label>
				<label className="text-secondary" >Restricted death date:</label>
				<input className="form-control"type="datetime-local" value={this.props.persRestrictDeathDt} onChange={this.props.onChangePersRestrictDeathDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS RESTRICT DEATH VRFY</label>
				<label className="text-secondary" >Restricted death verification level:</label>
				<select className="form-control" value={this.props.persRestrictDeathVrfy} onChange={this.props.onChangePersRestrictDeathVrfy}>
					<option value="" hidden disabled selected/>
					<option value="D">D: Death verified, but not date</option>
					<option value="N">N: Not verified</option>
					<option value="V">V: Death date verified</option>
					<option value=""></option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS SSA DEATH DT</label>
				<label className="text-secondary" >Death date determined from SSA database:</label>
				<input className="form-control"type="datetime-local" value={this.props.persSsaDeathDt} onChange={this.props.onChangePersSsaDeathDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >REC TX DT</label>
				<label className="text-secondary" >Transplant Date:</label>
				<input className="form-control"type="datetime-local" value={this.props.recTxDt} onChange={this.props.onChangeRecTxDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >REC TX PROCEDURE TY</label>
				<label className="text-secondary" >Transplant Procedure Type:</label>
				<select className="form-control" value={this.props.recTxProcedureTy} onChange={this.props.onChangeRecTxProcedureTy}>
					<option value="" hidden disabled selected/>
					<option value="101">101: LEFT KIDNEY</option>
					<option value="102">102: RIGHT KIDNEY</option>
					<option value="103">103: EN-BLOC</option>
					<option value="104">104: Sequential Kidney</option>
					<option value="105">105: Hemi-Renal</option>
					<option value="201">201: Pancreas Segment</option>
					<option value="202">202: Whole Pancreas with Duodenum</option>
					<option value="203">203: Whole Pancreas with Duodenal Patch</option>
					<option value="204">204: Whole Pancreas</option>
					<option value="301">301: Pancreas segment / Kidney Right</option>
					<option value="302">302: Pancreas segment / Kidney Left</option>
					<option value="303">303: Pancreas segment / En-bloc Kidney</option>
					<option value="304">304: Pancreas Segment/Sequential Kidney</option>
					<option value="305">305: Pancreas segment / Hemi-Renal</option>
					<option value="306">306: Whole pancreas with duodenum / left kidney</option>
					<option value="307">307: Whole pancreas with duodenum / right kidney</option>
					<option value="308">308: Whole pancreas with duodenum / en-bloc kidneys</option>
					<option value="309">309: Pancreas with duodenum/sequential kidney</option>
					<option value="311">311: Whole pancreas with duodenal patch / left kidney</option>
					<option value="312">312: Whole pancreas with duodenal patch / right kidney</option>
					<option value="313">313: Whole pancreas with duodenal patch / en-bloc kidneys</option>
					<option value="314">314: Pancreas with duodenal patch/sequential kidney</option>
					<option value="316">316: Whole pancreas / left kidney</option>
					<option value="317">317: Whole pancreas / right kidney</option>
					<option value="318">318: Whole pancreas / en-bloc kidneys</option>
					<option value="319">319: Whole pancreas/sequential kidney</option>
					<option value="401">401: Whole Intestine</option>
					<option value="402">402: Intestine Segment</option>
					<option value="403">403: Whole Intestine with Pancreas (Technical Reasons)</option>
					<option value="404">404: Intestine Segment with Pancreas (Technical Reasons)</option>
					<option value="501">501: Heart</option>
					<option value="502">502: Heart Lung</option>
					<option value="601">601: SINGLE LEFT LUNG</option>
					<option value="602">602: SINGLE RIGHT LUNG</option>
					<option value="603">603: BILATERAL SEQUENTIAL LUNG</option>
					<option value="604">604: EN-BLOC DOUBLE LUNG</option>
					<option value="605">605: LOBE, RIGHT</option>
					<option value="606">606: LOBE, LEFT</option>
					<option value="701">701: Whole Liver</option>
					<option value="702">702: Partial Liver, remainder not Tx or Living Transplant</option>
					<option value="703">703: Split Liver</option>
					<option value="704">704: Whole Liver with Pancreas (Technical Reasons)</option>
					<option value="705">705: Partial Liver with Pancreas (Technical Reasons)</option>
					<option value="706">706: Split Liver with Pancreas (Technical Reasons)</option>
				</select>
			</div>
		</div>}

	</Tab>
	<Tab eventKey="phys" title="phys">
	{ this.state.key == 'phys' &&
		<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ABO</label>
				<label className="text-secondary" >Patient/s Blood Type:</label>
				<select className="form-control" value={this.props.canAbo} onChange={this.props.onChangeCanAbo}>
					<option value="" hidden disabled selected/>
					<option value="A">A: A</option>
					<option value="A1">A1: A1</option>
					<option value="A1B">A1B: A1B</option>
					<option value="A2">A2: A2</option>
					<option value="A2B">A2B: A2B</option>
					<option value="AB">AB: AB</option>
					<option value="B">B: B</option>
					<option value="O">O: O</option>
					<option value="Z">Z: Z (In Utero Only)</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN AGE AT LISTING</label>
				<label className="text-secondary" >Calculated Candidate Age at Listing:</label>
				<select className="form-control" value={this.props.canAgeAtListing} onChange={this.props.onChangeCanAgeAtListing}>
					<option value="" hidden disabled selected/>
					<option value="0">{"<"}1</option>
					<option value="1">5-Jan</option>
					<option value="6">11-Jun</option>
					<option value="12">17-Dec</option>
					<option value="18">18-34</option>
					<option value="35">35-49</option>
					<option value="50">50-64</option>
					<option value="65">65+</option>
					<option value="99">Unkown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN AGE IN MONTHS AT LISTING</label>
				<label className="text-secondary" >Calculated Candidate Age in Months at Listing:</label>
				<input className="form-control"type="number" value={this.props.canAgeInMonthsAtListing} onChange={this.props.onChangeCanAgeInMonthsAtListing} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ARTIFICIAL LI</label>
				<label className="text-secondary" >Life Support://Artifical Liver:</label>
				<input className="form-control"type="text" value={this.props.canArtificialLi} onChange={this.props.onChangeCanArtificialLi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN BMI</label>
				<label className="text-secondary" >BMI::</label>
				<input className="form-control"type="number" value={this.props.canBmi} onChange={this.props.onChangeCanBmi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DGN</label>
				<label className="text-secondary" >Primary Diagnosis:</label>
				<select className="form-control" value={this.props.canDgn} onChange={this.props.onChangeCanDgn}>
					<option value="" hidden disabled selected/>
					<option value="100">100: LU:ALLERGIC BRONCHOPULMONARY ASPERGILLOSIS</option>
					<option value="103">103: LU:BRONCHOPULMONARY DYSPLASIA</option>
					<option value="105">105: LU:CILIARY DYSKINESIS SYNDROME</option>
					<option value="106">106: LU:CONSTRICTIVE BRONCHIOLITIS</option>
					<option value="107">107: LU:DYSMOTILE CILIA SYNDROME</option>
					<option value="109">109: LU:GRANULOMATOUS LUNG DISEASE</option>
					<option value="111">111: LU:KARTAGENER'S SYNDROME</option>
					<option value="113">113: LU:OBSTRUCTIVE LUNG DISEASE</option>
					<option value="114">114: LU:PRIMARY CILIARY DYSKINESIA</option>
					<option value="116">116: LU:TUBEROUS SCLEROSIS</option>
					<option value="200">200: LU:CONGENITAL MALFORMATION</option>
					<option value="202">202: LU:PERIPHERAL PULM ARTERY STENOSIS {"&"} 2? PULM HTN</option>
					<option value="203">203: LU:PORTOPULMONARY HYPERTENSION</option>
					<option value="205">205: LU:PULMONARY AV MALFORMATION CONGENITAL HEART DISEASE</option>
					<option value="206">206: LU:PULMONARY THROMBOEMBOLIC DISEASE</option>
					<option value="208">208: LU:PULMONARY VENO-OCCLUSIVE DISEASE</option>
					<option value="209">209: LU:PULMONIC STENOSIS</option>
					<option value="210">210: LU:RIGHT HYPOPLASTIC LUNG</option>
					<option value="212">212: LU:THROMBOEMBOLIC PULMONARY HYPERTENSION</option>
					<option value="213">213: LU:WEGENER'S GRANULOMA - RESTRICTIVE</option>
					<option value="214">214: LU:WEGENER'S GRANULOMA - BRONCHIECTASIS</option>
					<option value="215">215: LU:CREST - RESTRICTIVE</option>
					<option value="216">216: LU:CREST - PULMONARY HYPERTENSION</option>
					<option value="217">217: LU:PULMONARY TELANGIECTASIA - RESTRICTIVE</option>
					<option value="218">218: LU:PULMONARY TELANGIECTASIA - PULMONARY HYPERTENSION</option>
					<option value="219">219: LU:SCLERODERMA - RESTRICTIVE</option>
					<option value="220">220: LU:SCLERODERMA - PULMONARY HYPERTENSION</option>
					<option value="300">300: LU:COMMON VARIABLE IMMUNE DEFICIENCY</option>
					<option value="302">302: LU:FIBROCAVITARY LUNG DISEASE</option>
					<option value="303">303: LU:HYPOGAMMAGLOBULINEMIA</option>
					<option value="305">305: LU:SHWACHMAN-DIAMOND SYNDROME</option>
					<option value="400">400: LU:ALVEOLAR PROTEINOSIS</option>
					<option value="401">401: LU:AMYLOIDOSIS</option>
					<option value="402">402: LU:ARDS/PNEUMONIA</option>
					<option value="403">403: LU:IIP: BOOP/COP</option>
					<option value="404">404: LU:BRONCHIOLOALVEOLAR CARCINOMA (BAC)</option>
					<option value="405">405: LU:CARCINOID TUMORLETS</option>
					<option value="406">406: LU:CHRONIC PNEUMONITIS OF INFANCY</option>
					<option value="407">407: LU:COLLAGEN VASCULAR DISEASES</option>
					<option value="408">408: LU:CONNECTIVE TISSUE DISEASE</option>
					<option value="409">409: LU:CREST</option>
					<option value="410">410: LU:CUTIS LAXA</option>
					<option value="411">411: LU:DESQUAMATIVE INTERSTITIAL PNEUMONITIS (DIP)</option>
					<option value="412">412: LU:EHLERS-DANLOS SYNDROME</option>
					<option value="413">413: LU:EOSINOPHILIC GRANULOMA</option>
					<option value="414">414: LU:EOSINOPHILIC GRANULOMATOSIS</option>
					<option value="415">415: LU:EOSINOPHILIC PNEUMONIAL CHRONIC GRANULOMATOSIS</option>
					<option value="416">416: LU:FIBROSING MEDIASTINITIS</option>
					<option value="417">417: LU:GRAFT-VS-HOST DISEASE (GVHD)</option>
					<option value="418">418: LU:HERMANSKY PUDLAK SYNDROME</option>
					<option value="419">419: LU:HISTIOCYTOSIS X</option>
					<option value="420">420: LU:HYPERSENSITIVITY PNEUMONITIS</option>
					<option value="422">422: LU:IDIOPATHIC PULMONARY HEMOSIDEROSIS</option>
					<option value="423">423: LU:INTERSTITIAL PNEUMONITIS</option>
					<option value="424">424: LU:IIP: LYMPHOCYTIC INTERSTITIAL PNEUMONIA (LIP)</option>
					<option value="432">432: LU:LUPUS</option>
					<option value="433">433: LU:MACLEOD SYNDROME</option>
					<option value="434">434: LU:MIXED CONNECTIVE TISSUE DISEASE</option>
					<option value="437">437: LU:PARANEOPLASTIC PEMPHIGUS ASSOCIATED CASTLEMAN'S DISEASE</option>
					<option value="438">438: LU:POLYMYOSITIS</option>
					<option value="440">440: LU:PULMONARY HYALINIZING GRANULOMA</option>
					<option value="441">441: LU:PULMONARY LANGERHANS CELL GRANULOMATOSIS</option>
					<option value="442">442: LU:PULMONARY TELENGECTASIA</option>
					<option value="444">444: LU:RESTRICTIVE LUNG DISEASE</option>
					<option value="446">446: LU:SCLERODERMA</option>
					<option value="447">447: LU:SJOGREN'S SYNDROME</option>
					<option value="448">448: LU:SILICOSIS</option>
					<option value="449">449: LU:SURFACTANT PROTEIN B DEFICIENCY</option>
					<option value="450">450: LU:SWYER JAMES SYNDROME</option>
					<option value="451">451: LU:TERATOMA</option>
					<option value="452">452: LU:TRACHEOPATHIA OSTEOPLASTICA</option>
					<option value="453">453: LU:USUAL INTERSTITIAL PNEUMONITIS</option>
					<option value="454">454: LU:WEGENER'S GRANULOMA</option>
					<option value="999">999: OTHER SPECIFY</option>
					<option value="1000">1000: HR:DILATED MYOPATHY: IDIOPATHIC</option>
					<option value="1001">1001: HR:DILATED MYOPATHY: ADRIAMYCIN</option>
					<option value="1002">1002: HR:DILATED MYOPATHY: POST PARTUM</option>
					<option value="1003">1003: HR:DILATED MYOPATHY: FAMILIAL</option>
					<option value="1004">1004: HR:DILATED MYOPATHY: MYOCARDITIS</option>
					<option value="1005">1005: HR:DILATED MYOPATHY: ALCOHOLIC</option>
					<option value="1006">1006: HR:DILATED MYOPATHY: VIRAL</option>
					<option value="1007">1007: HR:DILATED MYOPATHY: ISCHEMIC</option>
					<option value="1049">1049: HR:DILATED MYOPATHY: OTHER SPECIFY</option>
					<option value="1050">1050: HR:RESTRICTIVE MYOPATHY: IDIOPATHIC</option>
					<option value="1051">1051: HR:RESTRICTIVE MYOPATHY: AMYLOIDOSIS</option>
					<option value="1052">1052: HR:RESTRICTIVE MYOPATHY: ENDOCARDIAL FIBROS</option>
					<option value="1053">1053: HR:RESTRICTIVE MYOPATHY: SARCOIDOSIS</option>
					<option value="1054">1054: HR:RESTRICTIVE MYOPATHY: SEC TO RADIAT/CHEM</option>
					<option value="1099">1099: HR:RESTRICTIVE MYOPATHY: OTHER SPECIFY</option>
					<option value="1100">1100: HR:HEART RE-TX/GF: HYPERACUTE REJECTION</option>
					<option value="1101">1101: HR:HEART RE-TX/GF: ACUTE REJECTION</option>
					<option value="1102">1102: HR:HEART RE-TX/GF: CORONARY ARTERY DISEASE</option>
					<option value="1103">1103: HR:HEART RE-TX/GF: NON-SPECIFIC</option>
					<option value="1104">1104: HR:HEART RE-TX/GF: RESTRICTIVE/CONSTRICTIVE</option>
					<option value="1105">1105: HR:HEART RE-TX/GF: CHRONIC REJECTION</option>
					<option value="1106">1106: HR:HEART RE-TX/GF: PRIMARY FAILURE</option>
					<option value="1199">1199: HR:HEART RE-TX/GF: OTHER SPECIFY</option>
					<option value="1200">1200: HR:CORONARY ARTERY DISEASE</option>
					<option value="1201">1201: HR:HYPERTROPHIC CARDIOMYOPATHY</option>
					<option value="1202">1202: HR:VALVULAR HEART DISEASE</option>
					<option value="1203">1203: HR:CONGENITAL HEART DEFECT - PRIOR SURGERY UNKNOWN</option>
					<option value="1204">1204: HR:CANCER</option>
					<option value="1205">1205: HR:CONGENITAL HEART DEFECT - HYPOPLASTIC LEFT HEART SYNDROME - UNOPERATED</option>
					<option value="1206">1206: HR:CONGENITAL HEART DEFECT - WITHOUT SURGERY</option>
					<option value="1207">1207: HR:CONGENITAL HEART DEFECT - WITH SURGERY</option>
					<option value="1208">1208: HR:ARRHYTHMOGENIC RIGHT VENTRICULAR DYSPLASIA/CARDIOMYOPATHY</option>
					<option value="1209">1209: HR:MUSCULAR DYSTROPHY: OTHER SPECIFY</option>
					<option value="1497">1497: HR:CARDIAC DISEASE: OTHER SPECIFY</option>
					<option value="1498">1498: HR:HEART: OTHER SPECIFY</option>
					<option value="1500">1500: LU:EISENMENGER'S SYN: ATRIAL SEPTAL DEFECT</option>
					<option value="1501">1501: LU:EISENMENGER'S SYN: VSD</option>
					<option value="1502">1502: LU:EISENMENGER'S SYN: PDA</option>
					<option value="1517">1517: LU:PULMONARY CAPILLARY HEMANGIOMATOSIS</option>
					<option value="1518">1518: LU:ABCA3 TRANSPORTER MUTATION</option>
					<option value="1519">1519: LU:SECONDARY PULMONARY FIBROSIS (SPECIFY CAUSE)</option>
					<option value="1520">1520: LU:SURFACTANT PROTEIN C DEFICIENCY</option>
					<option value="1521">1521: LU:IIP: NONSPECIFIC INTERSTITIAL PNEUMONIA</option>
					<option value="1522">1522: LU:IIP: RESPIRATORY BRONCHIOLITIS</option>
					<option value="1523">1523: LU:IIP: DESQUAMATIVE INTERSTITIAL PNEUMONIA</option>
					<option value="1524">1524: LU:IIP: ACUTE INTERSTITIAL PNEUMONIA</option>
					<option value="1525">1525: LU:PULMONARY LYMPHANGIECTASIA (PL)</option>
					<option value="1548">1548: LU:EISENMENGER'S SYN: MULTI CONGENITAL ANOMALIES</option>
					<option value="1549">1549: LU:EISENMENGER'S SYN: OTHER SPECIFY</option>
					<option value="1550">1550: LU:LUNG RE-TX/GF: NON-SPECIFIC</option>
					<option value="1551">1551: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITI</option>
					<option value="1552">1552: LU:LUNG RE-TX/GF: RESTRICTIVE</option>
					<option value="1553">1553: LU:LUNG RE-TX/GF: ACUTE REJECTION</option>
					<option value="1554">1554: LU:LUNG RE-TX/GF: OBSTRUCTIVE</option>
					<option value="1555">1555: LU:LUNG RE-TX/GF: PRIMARY GRAFT FAILURE</option>
					<option value="1556">1556: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-RESTRICTIVE</option>
					<option value="1557">1557: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-OBSTRUCTIVE</option>
					<option value="1599">1599: LU:LUNG RE-TX/GF: OTHER SPECIFY</option>
					<option value="1600">1600: LU:CONGENITAL: OTHER SPECIFY</option>
					<option value="1601">1601: LU:PULMONARY HYPERTENSION/PULMONARY ARTERIAL HYPERTENSION</option>
					<option value="1602">1602: LU:CYSTIC FIBROSIS</option>
					<option value="1603">1603: LU:INHALATION BURNS/TRAUMA</option>
					<option value="1604">1604: LU:IIP: IDIOPATHIC PULMONARY FIBROSIS (IPF)</option>
					<option value="1605">1605: LU:SARCOIDOSIS</option>
					<option value="1606">1606: LU:ALPHA - 1 - ANTITRYPSIN DEFICIENCY</option>
					<option value="1607">1607: LU:COPD/EMPHYSEMA</option>
					<option value="1608">1608: LU:BRONCHIECTASIS</option>
					<option value="1609">1609: LU:RHEUMATOID DISEASE</option>
					<option value="1610">1610: LU:OCCUPATIONAL LUNG DISEASE OTHER SPECIFY</option>
					<option value="1611">1611: LU:LYMPHANGIOLEIOMYOMATOSIS</option>
					<option value="1612">1612: LU:OBLITERATIVE BRONCHIOLITIS (NON-RETRANSPLANT)</option>
					<option value="1613">1613: LU:PULMONARY FIBROSIS OTHER SPECIFY CAUSE</option>
					<option value="1614">1614: LU:PULMONARY VASCULAR DISEASE</option>
					<option value="1615">1615: LU:SECONDARY PULMONARY HYPERTENSION</option>
					<option value="1700">1700: HR:HEART/LUNG RE-TX/GF: PRIMARY FAILURE</option>
					<option value="1997">1997: LU:LUNG DISEASE: OTHER SPECIFY</option>
					<option value="1999">1999: LU:UNKNOWN / CONVERTED RECORDS ONLY</option>
					<option value="3000">3000: KI:IDIO/POST-INF CRESCENTIC GLOMERULONEPHRI</option>
					<option value="3001">3001: KI:MEMBRANOUS GLOMERULONEPHRITIS</option>
					<option value="3002">3002: KI:MESANGIO-CAPILLARY 1 GLOMERULONEPHRITIS</option>
					<option value="3003">3003: KI:MESANGIO-CAPILLARY 2 GLOMERULONEPHRITIS</option>
					<option value="3004">3004: KI:IGA NEPHROPATHY</option>
					<option value="3005">3005: KI:ANTI-GBM</option>
					<option value="3006">3006: KI:FOCAL GLOMERULAR SCLEROSIS (FOCAL SEGMENTAL - FSG)</option>
					<option value="3007">3007: KI:CHRONIC PYELONEPHRITIS/REFLUX NEPHROPATH</option>
					<option value="3008">3008: KI:POLYCYSTIC KIDNEYS</option>
					<option value="3009">3009: KI:NEPHRITIS</option>
					<option value="3010">3010: KI:NEPHRONOPHTHISIS</option>
					<option value="3011">3011: KI:DIABETES - TYPE I INSULIN DEP/JUV ONSET</option>
					<option value="3012">3012: KI:DIABETES - TYPE II NON-INSULIN DEP/ADULT</option>
					<option value="3013">3013: KI:OXALATE NEPHROPATHY (INCLUDES HEREDITARY OXALOSIS)</option>
					<option value="3014">3014: KI:CYSTINOSIS</option>
					<option value="3015">3015: KI:FABRY'S DISEASE</option>
					<option value="3016">3016: KI:AMYLOIDOSIS</option>
					<option value="3017">3017: KI:GOUT</option>
					<option value="3018">3018: KI:SYSTEMIC LUPUS ERYTHEMATOSUS</option>
					<option value="3019">3019: KI:PROGRESSIVE SYSTEMIC SCLEROSIS</option>
					<option value="3020">3020: KI:WILMS' TUMOR</option>
					<option value="3021">3021: KI:RENAL CELL CARCINOMA</option>
					<option value="3022">3022: KI:INCIDENTAL CARCINOMA</option>
					<option value="3023">3023: KI:MYELOMA</option>
					<option value="3024">3024: KI:HEMOLYTIC UREMIC SYNDROME</option>
					<option value="3025">3025: KI:HYPOPLASIA/DYSPLASIA/DYSGENSIS/AGENESIS</option>
					<option value="3026">3026: KI:CORTICAL NECROSIS</option>
					<option value="3027">3027: KI:ACUTE TUBULAR NECROSIS</option>
					<option value="3028">3028: KI:MEDULLARY CYSTIC DISEASE</option>
					<option value="3029">3029: KI:SICKLE CELL ANEMIA</option>
					<option value="3030">3030: KI:ACQUIRED OBSTRUCTIVE NEPHROPATHY</option>
					<option value="3031">3031: KI:ALPORT'S SYNDROME</option>
					<option value="3032">3032: KI:FAMILIAL NEPHROPATHY</option>
					<option value="3033">3033: KI:GOODPASTURE'S SYNDROME</option>
					<option value="3034">3034: KI:MALIGNANT HYPERTENSION</option>
					<option value="3035">3035: KI:HENOCH-SCHOENLEIN PURPURA</option>
					<option value="3036">3036: KI:PRUNE BELLY SYNDROME</option>
					<option value="3037">3037: KI:RETRANSPLANT/GRAFT FAILURE</option>
					<option value="3038">3038: KI:DIABETES - TYPE I NON-INSULIN DEP/JUV ON</option>
					<option value="3039">3039: KI:DIABETES - TYPE II INSULIN DEP/ADULT ONS</option>
					<option value="3040">3040: KI:HYPERTENSIVE NEPHROSCLEROSIS</option>
					<option value="3041">3041: KI:CHRONIC GLOMERULONEPHRITIS UNSPECIFIED</option>
					<option value="3042">3042: KI:MEMBRANOUS NEPHROPATHY</option>
					<option value="3043">3043: KI:CHRONIC GLOMERULOSCLEROSIS UNSPECIFIED</option>
					<option value="3044">3044: KI:ANALGESIC NEPHROPATHY</option>
					<option value="3045">3045: KI:RADIATION NEPHRITIS</option>
					<option value="3046">3046: KI:ANTIBIOTIC-INDUCED NEPHRITIS</option>
					<option value="3047">3047: KI:CANCER CHEMOTHERAPY INDUCED NEPHRITIS</option>
					<option value="3048">3048: KI:CALCINEURIN INHIBITOR NEPHROTOXICITY</option>
					<option value="3049">3049: KI:HEROIN NEPHROTOXICITY</option>
					<option value="3050">3050: KI:RENAL ARTERY THROMBOSIS</option>
					<option value="3051">3051: KI:CHRONIC NEPHROSCLEROSIS-UNSPECIFIED</option>
					<option value="3052">3052: KI:CONGENITAL OBSTRUCTIVE UROPATHY</option>
					<option value="3053">3053: KI:SCLERODERMA</option>
					<option value="3054">3054: KI:WEGENERS GRANULOMATOSIS</option>
					<option value="3055">3055: KI:POLYARTERITIS</option>
					<option value="3056">3056: KI:RHEUMATOID ARTHRITIS</option>
					<option value="3057">3057: KI:SARCOIDOSIS</option>
					<option value="3058">3058: KI:LYMPHOMA</option>
					<option value="3059">3059: KI:NEPHROLITHIASIS</option>
					<option value="3060">3060: KI:UROLITHIASIS</option>
					<option value="3061">3061: KI:DYSPLASIA</option>
					<option value="3062">3062: KI:PRE-BMTRANSPLANTATION TOTAL BODY IRRADIATION</option>
					<option value="3063">3063: KI:DRUG RELATED INTERSTITIAL NEPHRITIS</option>
					<option value="3064">3064: KI:THIN BASEMENT MEMBRANE DISEASE</option>
					<option value="3065">3065: KI:HEREDITARY OXALOSIS (PEDIATRIC PATIENTS)</option>
					<option value="3066">3066: KI:CHOLESTEROL EMBOLIZATION</option>
					<option value="3067">3067: KI:FSG - FOCAL SEGMENTAL GLOMERULOSCLEROSIS</option>
					<option value="3068">3068: KI:RAPID PROGRESSIVE GLOMERULONEPHRITIS (RPGN)</option>
					<option value="3069">3069: KI:DIABETES MELLITUS - TYPE I</option>
					<option value="3070">3070: KI:DIABETES MELLITUS - TYPE II</option>
					<option value="3071">3071: KI:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
					<option value="3072">3072: KI:HEPATORENAL SYNDROME</option>
					<option value="3073">3073: KI:LITHIUM TOXICITY</option>
					<option value="3074">3074: KI:HIV NEPHROPATHY</option>
					<option value="4100">4100: LI:AHN: DRUG OTHER SPECIFY</option>
					<option value="4101">4101: LI:AHN: TYPE A</option>
					<option value="4102">4102: LI:AHN: TYPE B- HBSAG+</option>
					<option value="4103">4103: LI:AHN: NON A- NON B</option>
					<option value="4104">4104: LI:AHN: TYPE C</option>
					<option value="4105">4105: LI:AHN: TYPE D</option>
					<option value="4106">4106: LI:AHN: TYPE B AND C</option>
					<option value="4107">4107: LI:AHN: TYPE B AND D</option>
					<option value="4108">4108: LI:AHN: ETIOLOGY UNKNOWN</option>
					<option value="4110">4110: LI:AHN: OTHER, SPECIFY (E.G., ACUTE VIRAL INFECTION, AUTOIMMUNE HEPATITIS - FULMINANT)</option>
					<option value="4200">4200: LI:CIRRHOSIS: DRUG/INDUST EXPOSURE OTHER SPECIFY</option>
					<option value="4201">4201: LI:CIRRHOSIS: TYPE A</option>
					<option value="4202">4202: LI:CIRRHOSIS: TYPE B- HBSAG+</option>
					<option value="4203">4203: LI:CIRRHOSIS: TYPE NON A, NON B</option>
					<option value="4204">4204: LI:CIRRHOSIS: TYPE C</option>
					<option value="4205">4205: LI:CIRRHOSIS: TYPE D</option>
					<option value="4206">4206: LI:CIRRHOSIS: TYPE B AND C</option>
					<option value="4207">4207: LI:CIRRHOSIS: TYPE B AND D</option>
					<option value="4208">4208: LI:CIRRHOSIS: CRYPTOGENIC- IDIOPATHIC</option>
					<option value="4209">4209: LI:CIRRHOSIS: CHRONIC ACTIVE HEPATITIS: ETIOLOGY UNKNOWN</option>
					<option value="4210">4210: LI:CIRRHOSIS: OTHER, SPECIFY (E.G., HISTIOCYTOSIS, SARCOIDOSIS, GRANULOMATOUS)</option>
					<option value="4212">4212: LI:CIRRHOSIS: AUTOIMMUNE</option>
					<option value="4213">4213: LI:CIRRHOSIS: CRYPTOGENIC (IDIOPATHIC)</option>
					<option value="4214">4214: LI:CIRRHOSIS: FATTY LIVER (NASH)</option>
					<option value="4215">4215: LI:ALCOHOLIC CIRRHOSIS</option>
					<option value="4216">4216: LI:ALCOHOLIC CIRRHOSIS WITH HEPATITIS C</option>
					<option value="4217">4217: LI:ACUTE ALCOHOLIC HEPATITIS</option>
					<option value="4220">4220: LI:PRIMARY BILIARY CIRRHOSIS (PBC)</option>
					<option value="4230">4230: LI:SEC BILIARY CIRRHOSIS: CAROLI'S DISEASE</option>
					<option value="4231">4231: LI:SEC BILIARY CIRRHOSIS: CHOLEDOCHOL CYST</option>
					<option value="4235">4235: LI:SEC BILIARY CIRRHOSIS: OTHER SPECIFY</option>
					<option value="4240">4240: LI:PSC: CROHN'S DISEASE</option>
					<option value="4241">4241: LI:PSC: ULCERATIVE COLITIS</option>
					<option value="4242">4242: LI:PSC: NO BOWEL DISEASE</option>
					<option value="4245">4245: LI:PSC: OTHER SPECIFY</option>
					<option value="4250">4250: LI:FAMILIAL CHOLESTASIS: BYLER'S DISEASE</option>
					<option value="4255">4255: LI:FAMILIAL CHOLESTASIS: OTHER SPECIFY</option>
					<option value="4260">4260: LI:CHOLES LIVER DISEASE: OTHER SPECIFY</option>
					<option value="4264">4264: LI:NEONATAL CHOLESTATIC LIVER DISEASE</option>
					<option value="4265">4265: LI:NEONATAL HEPATITIS OTHER SPECIFY</option>
					<option value="4270">4270: LI:BILIARY ATRESIA: EXTRAHEPATIC</option>
					<option value="4271">4271: LI:BILIARY HYPOPLASIA: NONSYNDROMIC PAUCITY OF INTRAHEPATIC BILE DUCT</option>
					<option value="4272">4272: LI:BILIARY HYPOPLASIA: ALAGILLE?S SYNDROME (PAUCITY OF INTRAHEPATIC BILE DUCT)</option>
					<option value="4275">4275: LI:BILIARY ATRESIA OR HYPOPLASIA: OTHER, SPECIFY</option>
					<option value="4280">4280: LI:CONGENITAL HEPATIC FIBROSIS</option>
					<option value="4285">4285: LI:CYSTIC FIBROSIS</option>
					<option value="4290">4290: LI:BUDD-CHIARI SYNDROME</option>
					<option value="4300">4300: LI:METDIS: ALPHA-1-ANTITRYPSIN DEFIC A-1-A</option>
					<option value="4301">4301: LI:METDIS: WILSON'S DISEASE, OTHER COPPER METABOLISM DISORDER</option>
					<option value="4302">4302: LI:METDIS: HEMOCHROMATOSIS - HEMOSIDEROSIS</option>
					<option value="4303">4303: LI:METDIS: GLYC STOR DIS TYPE I (GSD-I)</option>
					<option value="4304">4304: LI:METDIS: GLYC STOR DIS TYPE IV (GSD-IV)</option>
					<option value="4305">4305: LI:METDIS: HYPERLIPIDEMIA-II, HOMOZYGOUS HYPERCHOLESTEROLEMIA</option>
					<option value="4306">4306: LI:METDIS: TYROSINEMIA</option>
					<option value="4307">4307: LI:METDIS: PRIMARY OXALOSIS/OXALURIA, HYPEROXALURIA</option>
					<option value="4308">4308: LI:METDIS: MAPLE SYRUP URINE DISEASE</option>
					<option value="4315">4315: LI:METDIS: OTHER SPECIFY</option>
					<option value="4400">4400: LI:PLM: HEPATOMA - HEPATOCELLULAR CARCINOMA</option>
					<option value="4401">4401: LI:PLM: HEPATOMA (HCC) AND CIRRHOSIS</option>
					<option value="4402">4402: LI:PLM: FIBROLAMELLAR (FL-HC)</option>
					<option value="4403">4403: LI:PLM: CHOLANGIOCARCINOMA (CH-CA)</option>
					<option value="4404">4404: LI:PLM: HEPATOBLASTOMA (HBL)</option>
					<option value="4405">4405: LI:PLM: HEMANGIOENDOTHELIOMA, HEMANGIOSARCOMA, ANGIOSARCOMA</option>
					<option value="4410">4410: LI:PLM: OTHER SPECIFY (I.E., KLATZKIN TUMOR, LEIOMYSARCOMA)</option>
					<option value="4420">4420: LI:BILE DUCT CANCER: (CHOLANGIOMA, BILIARY TRACT CARCINOMA)</option>
					<option value="4430">4430: LI:SECONDARY HEPATIC MALIGNANCY OTHER SPECIFY</option>
					<option value="4450">4450: LI:BENIGN TUMOR: HEPATIC ADENOMA</option>
					<option value="4451">4451: LI:BENIGN TUMOR: POLYCYSTIC LIVER DISEASE</option>
					<option value="4455">4455: LI:BENIGN TUMOR: OTHER SPECIFY</option>
					<option value="4500">4500: LI:TPN/HYPERALIMENTATION IND LIVER DISEASE</option>
					<option value="4510">4510: LI:GRAFT VS. HOST DIS SEC TO NON-LI TX</option>
					<option value="4520">4520: LI:TRAUMA OTHER SPECIFY</option>
					<option value="4592">4592: LI:Hepatitis B: Chronic or Acute</option>
					<option value="4593">4593: LI:Hepatitis C: Chronic or Acute</option>
					<option value="4597">4597: LI:NA: Non-HD Followups Only</option>
					<option value="4598">4598: LI:GRAFT FAILURE</option>
					<option value="5000">5000: PA:RETRANSPLANT/GRAFT FAILURE</option>
					<option value="5001">5001: PA:DIABETES MELLITUS - TYPE I</option>
					<option value="5002">5002: PA:DIABETES MELLITUS - TYPE II</option>
					<option value="5003">5003: PA:DIABETES SECONDARY TO CHRONIC PANCREATITIS WITHOUT PANCREATECTOMY</option>
					<option value="5004">5004: PA:DIABETES SECONDARY TO CYSTIC FIBROSIS WITHOUT PANCREATECTOMY</option>
					<option value="5005">5005: PA:PANCREATIC CANCER</option>
					<option value="5006">5006: PA:BILE DUCT CANCER</option>
					<option value="5007">5007: PA:OTHER CANCERS</option>
					<option value="5008">5008: PA:PANCREATECTOMY PRIOR TO PANCREAS TX</option>
					<option value="5009">5009: PA:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
					<option value="6000">6000: SGS: INTESTINAL ATRESIA</option>
					<option value="6001">6001: SGS: NECROTIZING ENTEROCOLITIS</option>
					<option value="6002">6002: SGS: INTESTINAL VOLVULUS SECONDARY TO MALROTATION</option>
					<option value="6003">6003: SGS: INTESTINAL VOLVULUS SECONDARY TO ADHESIONS</option>
					<option value="6004">6004: SGS: INTESTINAL VOLVULUS SECONDARY TO PERSISTENT OMPHALOMESENTRERIC DUCT</option>
					<option value="6005">6005: SGS: GASTROSCHISIS</option>
					<option value="6006">6006: SGS: MASS RESECT SEC TO INF BOWEL-CROHNS</option>
					<option value="6007">6007: SGS: MASS RESECT SEC TO TUMOR</option>
					<option value="6008">6008: SGS: MASSIVE RESECTION SECONDARY TO MESENTERIC ARTERIAL THROMBOSIS OR EMBOLUS</option>
					<option value="6009">6009: SGS: MASS RESECT SEC TO MES VENOUS THROM</option>
					<option value="6048">6048: SGS: OTHER SPECIFY</option>
					<option value="6049">6049: SGS: UNSPECIFIED</option>
					<option value="6050">6050: IN:FBP: HIRSCHSPRUNG'S DISEASE</option>
					<option value="6051">6051: IN:FBP: NEURONAL INTESTINAL DYSPLASIA</option>
					<option value="6052">6052: IN:FBP: PSEUDO-OBSTRUCTION-NEUROPATHIC</option>
					<option value="6053">6053: IN:FBP: PSEUDO-OBSTRUCTION-MYOPATHIC</option>
					<option value="6054">6054: IN:FBP: PROTEIN-LOSING ENTEROPATHY</option>
					<option value="6055">6055: IN:FBP: MICROVILLOUS INCLUSION DISEASE</option>
					<option value="6098">6098: IN:FBP: OTHER SPECIFY</option>
					<option value="6099">6099: IN:FBP: UNSPECIFIED</option>
					<option value="6100">6100: IN:GRAFT FAILURE</option>
					<option value="6150">6150: IN:RETRANSPLANT</option>
					<option value="6497">6497: IN:INTESTINAL DISEASE OTHER SPECIFY</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DGN2</label>
				<label className="text-secondary" >Secondary Diagnosis:</label>
				<select className="form-control" value={this.props.canDgn2} onChange={this.props.onChangeCanDgn2}>
					<option value="" hidden disabled selected/>
					<option value="100">100: LU:ALLERGIC BRONCHOPULMONARY ASPERGILLOSIS</option>
					<option value="103">103: LU:BRONCHOPULMONARY DYSPLASIA</option>
					<option value="105">105: LU:CILIARY DYSKINESIS SYNDROME</option>
					<option value="106">106: LU:CONSTRICTIVE BRONCHIOLITIS</option>
					<option value="107">107: LU:DYSMOTILE CILIA SYNDROME</option>
					<option value="109">109: LU:GRANULOMATOUS LUNG DISEASE</option>
					<option value="111">111: LU:KARTAGENER'S SYNDROME</option>
					<option value="113">113: LU:OBSTRUCTIVE LUNG DISEASE</option>
					<option value="114">114: LU:PRIMARY CILIARY DYSKINESIA</option>
					<option value="116">116: LU:TUBEROUS SCLEROSIS</option>
					<option value="200">200: LU:CONGENITAL MALFORMATION</option>
					<option value="202">202: LU:PERIPHERAL PULM ARTERY STENOSIS {"&"} 2? PULM HTN</option>
					<option value="203">203: LU:PORTOPULMONARY HYPERTENSION</option>
					<option value="205">205: LU:PULMONARY AV MALFORMATION CONGENITAL HEART DISEASE</option>
					<option value="206">206: LU:PULMONARY THROMBOEMBOLIC DISEASE</option>
					<option value="208">208: LU:PULMONARY VENO-OCCLUSIVE DISEASE</option>
					<option value="209">209: LU:PULMONIC STENOSIS</option>
					<option value="210">210: LU:RIGHT HYPOPLASTIC LUNG</option>
					<option value="212">212: LU:THROMBOEMBOLIC PULMONARY HYPERTENSION</option>
					<option value="213">213: LU:WEGENER'S GRANULOMA - RESTRICTIVE</option>
					<option value="214">214: LU:WEGENER'S GRANULOMA - BRONCHIECTASIS</option>
					<option value="215">215: LU:CREST - RESTRICTIVE</option>
					<option value="216">216: LU:CREST - PULMONARY HYPERTENSION</option>
					<option value="217">217: LU:PULMONARY TELANGIECTASIA - RESTRICTIVE</option>
					<option value="218">218: LU:PULMONARY TELANGIECTASIA - PULMONARY HYPERTENSION</option>
					<option value="219">219: LU:SCLERODERMA - RESTRICTIVE</option>
					<option value="220">220: LU:SCLERODERMA - PULMONARY HYPERTENSION</option>
					<option value="300">300: LU:COMMON VARIABLE IMMUNE DEFICIENCY</option>
					<option value="302">302: LU:FIBROCAVITARY LUNG DISEASE</option>
					<option value="303">303: LU:HYPOGAMMAGLOBULINEMIA</option>
					<option value="305">305: LU:SHWACHMAN-DIAMOND SYNDROME</option>
					<option value="400">400: LU:ALVEOLAR PROTEINOSIS</option>
					<option value="401">401: LU:AMYLOIDOSIS</option>
					<option value="402">402: LU:ARDS/PNEUMONIA</option>
					<option value="403">403: LU:IIP: BOOP/COP</option>
					<option value="404">404: LU:BRONCHIOLOALVEOLAR CARCINOMA (BAC)</option>
					<option value="405">405: LU:CARCINOID TUMORLETS</option>
					<option value="406">406: LU:CHRONIC PNEUMONITIS OF INFANCY</option>
					<option value="407">407: LU:COLLAGEN VASCULAR DISEASES</option>
					<option value="408">408: LU:CONNECTIVE TISSUE DISEASE</option>
					<option value="409">409: LU:CREST</option>
					<option value="410">410: LU:CUTIS LAXA</option>
					<option value="411">411: LU:DESQUAMATIVE INTERSTITIAL PNEUMONITIS (DIP)</option>
					<option value="412">412: LU:EHLERS-DANLOS SYNDROME</option>
					<option value="413">413: LU:EOSINOPHILIC GRANULOMA</option>
					<option value="414">414: LU:EOSINOPHILIC GRANULOMATOSIS</option>
					<option value="415">415: LU:EOSINOPHILIC PNEUMONIAL CHRONIC GRANULOMATOSIS</option>
					<option value="416">416: LU:FIBROSING MEDIASTINITIS</option>
					<option value="417">417: LU:GRAFT-VS-HOST DISEASE (GVHD)</option>
					<option value="418">418: LU:HERMANSKY PUDLAK SYNDROME</option>
					<option value="419">419: LU:HISTIOCYTOSIS X</option>
					<option value="420">420: LU:HYPERSENSITIVITY PNEUMONITIS</option>
					<option value="422">422: LU:IDIOPATHIC PULMONARY HEMOSIDEROSIS</option>
					<option value="423">423: LU:INTERSTITIAL PNEUMONITIS</option>
					<option value="424">424: LU:IIP: LYMPHOCYTIC INTERSTITIAL PNEUMONIA (LIP)</option>
					<option value="432">432: LU:LUPUS</option>
					<option value="433">433: LU:MACLEOD SYNDROME</option>
					<option value="434">434: LU:MIXED CONNECTIVE TISSUE DISEASE</option>
					<option value="437">437: LU:PARANEOPLASTIC PEMPHIGUS ASSOCIATED CASTLEMAN'S DISEASE</option>
					<option value="438">438: LU:POLYMYOSITIS</option>
					<option value="440">440: LU:PULMONARY HYALINIZING GRANULOMA</option>
					<option value="441">441: LU:PULMONARY LANGERHANS CELL GRANULOMATOSIS</option>
					<option value="442">442: LU:PULMONARY TELENGECTASIA</option>
					<option value="444">444: LU:RESTRICTIVE LUNG DISEASE</option>
					<option value="446">446: LU:SCLERODERMA</option>
					<option value="447">447: LU:SJOGREN'S SYNDROME</option>
					<option value="448">448: LU:SILICOSIS</option>
					<option value="449">449: LU:SURFACTANT PROTEIN B DEFICIENCY</option>
					<option value="450">450: LU:SWYER JAMES SYNDROME</option>
					<option value="451">451: LU:TERATOMA</option>
					<option value="452">452: LU:TRACHEOPATHIA OSTEOPLASTICA</option>
					<option value="453">453: LU:USUAL INTERSTITIAL PNEUMONITIS</option>
					<option value="454">454: LU:WEGENER'S GRANULOMA</option>
					<option value="999">999: OTHER SPECIFY</option>
					<option value="1000">1000: HR:DILATED MYOPATHY: IDIOPATHIC</option>
					<option value="1001">1001: HR:DILATED MYOPATHY: ADRIAMYCIN</option>
					<option value="1002">1002: HR:DILATED MYOPATHY: POST PARTUM</option>
					<option value="1003">1003: HR:DILATED MYOPATHY: FAMILIAL</option>
					<option value="1004">1004: HR:DILATED MYOPATHY: MYOCARDITIS</option>
					<option value="1005">1005: HR:DILATED MYOPATHY: ALCOHOLIC</option>
					<option value="1006">1006: HR:DILATED MYOPATHY: VIRAL</option>
					<option value="1007">1007: HR:DILATED MYOPATHY: ISCHEMIC</option>
					<option value="1049">1049: HR:DILATED MYOPATHY: OTHER SPECIFY</option>
					<option value="1050">1050: HR:RESTRICTIVE MYOPATHY: IDIOPATHIC</option>
					<option value="1051">1051: HR:RESTRICTIVE MYOPATHY: AMYLOIDOSIS</option>
					<option value="1052">1052: HR:RESTRICTIVE MYOPATHY: ENDOCARDIAL FIBROS</option>
					<option value="1053">1053: HR:RESTRICTIVE MYOPATHY: SARCOIDOSIS</option>
					<option value="1054">1054: HR:RESTRICTIVE MYOPATHY: SEC TO RADIAT/CHEM</option>
					<option value="1099">1099: HR:RESTRICTIVE MYOPATHY: OTHER SPECIFY</option>
					<option value="1100">1100: HR:HEART RE-TX/GF: HYPERACUTE REJECTION</option>
					<option value="1101">1101: HR:HEART RE-TX/GF: ACUTE REJECTION</option>
					<option value="1102">1102: HR:HEART RE-TX/GF: CORONARY ARTERY DISEASE</option>
					<option value="1103">1103: HR:HEART RE-TX/GF: NON-SPECIFIC</option>
					<option value="1104">1104: HR:HEART RE-TX/GF: RESTRICTIVE/CONSTRICTIVE</option>
					<option value="1105">1105: HR:HEART RE-TX/GF: CHRONIC REJECTION</option>
					<option value="1106">1106: HR:HEART RE-TX/GF: PRIMARY FAILURE</option>
					<option value="1199">1199: HR:HEART RE-TX/GF: OTHER SPECIFY</option>
					<option value="1200">1200: HR:CORONARY ARTERY DISEASE</option>
					<option value="1201">1201: HR:HYPERTROPHIC CARDIOMYOPATHY</option>
					<option value="1202">1202: HR:VALVULAR HEART DISEASE</option>
					<option value="1203">1203: HR:CONGENITAL HEART DEFECT - PRIOR SURGERY UNKNOWN</option>
					<option value="1204">1204: HR:CANCER</option>
					<option value="1205">1205: HR:CONGENITAL HEART DEFECT - HYPOPLASTIC LEFT HEART SYNDROME - UNOPERATED</option>
					<option value="1206">1206: HR:CONGENITAL HEART DEFECT - WITHOUT SURGERY</option>
					<option value="1207">1207: HR:CONGENITAL HEART DEFECT - WITH SURGERY</option>
					<option value="1208">1208: HR:ARRHYTHMOGENIC RIGHT VENTRICULAR DYSPLASIA/CARDIOMYOPATHY</option>
					<option value="1209">1209: HR:MUSCULAR DYSTROPHY: OTHER SPECIFY</option>
					<option value="1497">1497: HR:CARDIAC DISEASE: OTHER SPECIFY</option>
					<option value="1498">1498: HR:HEART: OTHER SPECIFY</option>
					<option value="1500">1500: LU:EISENMENGER'S SYN: ATRIAL SEPTAL DEFECT</option>
					<option value="1501">1501: LU:EISENMENGER'S SYN: VSD</option>
					<option value="1502">1502: LU:EISENMENGER'S SYN: PDA</option>
					<option value="1517">1517: LU:PULMONARY CAPILLARY HEMANGIOMATOSIS</option>
					<option value="1518">1518: LU:ABCA3 TRANSPORTER MUTATION</option>
					<option value="1519">1519: LU:SECONDARY PULMONARY FIBROSIS (SPECIFY CAUSE)</option>
					<option value="1520">1520: LU:SURFACTANT PROTEIN C DEFICIENCY</option>
					<option value="1521">1521: LU:IIP: NONSPECIFIC INTERSTITIAL PNEUMONIA</option>
					<option value="1522">1522: LU:IIP: RESPIRATORY BRONCHIOLITIS</option>
					<option value="1523">1523: LU:IIP: DESQUAMATIVE INTERSTITIAL PNEUMONIA</option>
					<option value="1524">1524: LU:IIP: ACUTE INTERSTITIAL PNEUMONIA</option>
					<option value="1525">1525: LU:PULMONARY LYMPHANGIECTASIA (PL)</option>
					<option value="1548">1548: LU:EISENMENGER'S SYN: MULTI CONGENITAL ANOMALIES</option>
					<option value="1549">1549: LU:EISENMENGER'S SYN: OTHER SPECIFY</option>
					<option value="1550">1550: LU:LUNG RE-TX/GF: NON-SPECIFIC</option>
					<option value="1551">1551: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITI</option>
					<option value="1552">1552: LU:LUNG RE-TX/GF: RESTRICTIVE</option>
					<option value="1553">1553: LU:LUNG RE-TX/GF: ACUTE REJECTION</option>
					<option value="1554">1554: LU:LUNG RE-TX/GF: OBSTRUCTIVE</option>
					<option value="1555">1555: LU:LUNG RE-TX/GF: PRIMARY GRAFT FAILURE</option>
					<option value="1556">1556: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-RESTRICTIVE</option>
					<option value="1557">1557: LU:LUNG RE-TX/GF: OBLITERATIVE BRONCHIOLITIS-OBSTRUCTIVE</option>
					<option value="1599">1599: LU:LUNG RE-TX/GF: OTHER SPECIFY</option>
					<option value="1600">1600: LU:CONGENITAL: OTHER SPECIFY</option>
					<option value="1601">1601: LU:PULMONARY HYPERTENSION/PULMONARY ARTERIAL HYPERTENSION</option>
					<option value="1602">1602: LU:CYSTIC FIBROSIS</option>
					<option value="1603">1603: LU:INHALATION BURNS/TRAUMA</option>
					<option value="1604">1604: LU:IIP: IDIOPATHIC PULMONARY FIBROSIS (IPF)</option>
					<option value="1605">1605: LU:SARCOIDOSIS</option>
					<option value="1606">1606: LU:ALPHA - 1 - ANTITRYPSIN DEFICIENCY</option>
					<option value="1607">1607: LU:COPD/EMPHYSEMA</option>
					<option value="1608">1608: LU:BRONCHIECTASIS</option>
					<option value="1609">1609: LU:RHEUMATOID DISEASE</option>
					<option value="1610">1610: LU:OCCUPATIONAL LUNG DISEASE OTHER SPECIFY</option>
					<option value="1611">1611: LU:LYMPHANGIOLEIOMYOMATOSIS</option>
					<option value="1612">1612: LU:OBLITERATIVE BRONCHIOLITIS (NON-RETRANSPLANT)</option>
					<option value="1613">1613: LU:PULMONARY FIBROSIS OTHER SPECIFY CAUSE</option>
					<option value="1614">1614: LU:PULMONARY VASCULAR DISEASE</option>
					<option value="1615">1615: LU:SECONDARY PULMONARY HYPERTENSION</option>
					<option value="1700">1700: HR:HEART/LUNG RE-TX/GF: PRIMARY FAILURE</option>
					<option value="1997">1997: LU:LUNG DISEASE: OTHER SPECIFY</option>
					<option value="1999">1999: LU:UNKNOWN / CONVERTED RECORDS ONLY</option>
					<option value="3000">3000: KI:IDIO/POST-INF CRESCENTIC GLOMERULONEPHRI</option>
					<option value="3001">3001: KI:MEMBRANOUS GLOMERULONEPHRITIS</option>
					<option value="3002">3002: KI:MESANGIO-CAPILLARY 1 GLOMERULONEPHRITIS</option>
					<option value="3003">3003: KI:MESANGIO-CAPILLARY 2 GLOMERULONEPHRITIS</option>
					<option value="3004">3004: KI:IGA NEPHROPATHY</option>
					<option value="3005">3005: KI:ANTI-GBM</option>
					<option value="3006">3006: KI:FOCAL GLOMERULAR SCLEROSIS (FOCAL SEGMENTAL - FSG)</option>
					<option value="3007">3007: KI:CHRONIC PYELONEPHRITIS/REFLUX NEPHROPATH</option>
					<option value="3008">3008: KI:POLYCYSTIC KIDNEYS</option>
					<option value="3009">3009: KI:NEPHRITIS</option>
					<option value="3010">3010: KI:NEPHRONOPHTHISIS</option>
					<option value="3011">3011: KI:DIABETES - TYPE I INSULIN DEP/JUV ONSET</option>
					<option value="3012">3012: KI:DIABETES - TYPE II NON-INSULIN DEP/ADULT</option>
					<option value="3013">3013: KI:OXALATE NEPHROPATHY (INCLUDES HEREDITARY OXALOSIS)</option>
					<option value="3014">3014: KI:CYSTINOSIS</option>
					<option value="3015">3015: KI:FABRY'S DISEASE</option>
					<option value="3016">3016: KI:AMYLOIDOSIS</option>
					<option value="3017">3017: KI:GOUT</option>
					<option value="3018">3018: KI:SYSTEMIC LUPUS ERYTHEMATOSUS</option>
					<option value="3019">3019: KI:PROGRESSIVE SYSTEMIC SCLEROSIS</option>
					<option value="3020">3020: KI:WILMS' TUMOR</option>
					<option value="3021">3021: KI:RENAL CELL CARCINOMA</option>
					<option value="3022">3022: KI:INCIDENTAL CARCINOMA</option>
					<option value="3023">3023: KI:MYELOMA</option>
					<option value="3024">3024: KI:HEMOLYTIC UREMIC SYNDROME</option>
					<option value="3025">3025: KI:HYPOPLASIA/DYSPLASIA/DYSGENSIS/AGENESIS</option>
					<option value="3026">3026: KI:CORTICAL NECROSIS</option>
					<option value="3027">3027: KI:ACUTE TUBULAR NECROSIS</option>
					<option value="3028">3028: KI:MEDULLARY CYSTIC DISEASE</option>
					<option value="3029">3029: KI:SICKLE CELL ANEMIA</option>
					<option value="3030">3030: KI:ACQUIRED OBSTRUCTIVE NEPHROPATHY</option>
					<option value="3031">3031: KI:ALPORT'S SYNDROME</option>
					<option value="3032">3032: KI:FAMILIAL NEPHROPATHY</option>
					<option value="3033">3033: KI:GOODPASTURE'S SYNDROME</option>
					<option value="3034">3034: KI:MALIGNANT HYPERTENSION</option>
					<option value="3035">3035: KI:HENOCH-SCHOENLEIN PURPURA</option>
					<option value="3036">3036: KI:PRUNE BELLY SYNDROME</option>
					<option value="3037">3037: KI:RETRANSPLANT/GRAFT FAILURE</option>
					<option value="3038">3038: KI:DIABETES - TYPE I NON-INSULIN DEP/JUV ON</option>
					<option value="3039">3039: KI:DIABETES - TYPE II INSULIN DEP/ADULT ONS</option>
					<option value="3040">3040: KI:HYPERTENSIVE NEPHROSCLEROSIS</option>
					<option value="3041">3041: KI:CHRONIC GLOMERULONEPHRITIS UNSPECIFIED</option>
					<option value="3042">3042: KI:MEMBRANOUS NEPHROPATHY</option>
					<option value="3043">3043: KI:CHRONIC GLOMERULOSCLEROSIS UNSPECIFIED</option>
					<option value="3044">3044: KI:ANALGESIC NEPHROPATHY</option>
					<option value="3045">3045: KI:RADIATION NEPHRITIS</option>
					<option value="3046">3046: KI:ANTIBIOTIC-INDUCED NEPHRITIS</option>
					<option value="3047">3047: KI:CANCER CHEMOTHERAPY INDUCED NEPHRITIS</option>
					<option value="3048">3048: KI:CALCINEURIN INHIBITOR NEPHROTOXICITY</option>
					<option value="3049">3049: KI:HEROIN NEPHROTOXICITY</option>
					<option value="3050">3050: KI:RENAL ARTERY THROMBOSIS</option>
					<option value="3051">3051: KI:CHRONIC NEPHROSCLEROSIS-UNSPECIFIED</option>
					<option value="3052">3052: KI:CONGENITAL OBSTRUCTIVE UROPATHY</option>
					<option value="3053">3053: KI:SCLERODERMA</option>
					<option value="3054">3054: KI:WEGENERS GRANULOMATOSIS</option>
					<option value="3055">3055: KI:POLYARTERITIS</option>
					<option value="3056">3056: KI:RHEUMATOID ARTHRITIS</option>
					<option value="3057">3057: KI:SARCOIDOSIS</option>
					<option value="3058">3058: KI:LYMPHOMA</option>
					<option value="3059">3059: KI:NEPHROLITHIASIS</option>
					<option value="3060">3060: KI:UROLITHIASIS</option>
					<option value="3061">3061: KI:DYSPLASIA</option>
					<option value="3062">3062: KI:PRE-BMTRANSPLANTATION TOTAL BODY IRRADIATION</option>
					<option value="3063">3063: KI:DRUG RELATED INTERSTITIAL NEPHRITIS</option>
					<option value="3064">3064: KI:THIN BASEMENT MEMBRANE DISEASE</option>
					<option value="3065">3065: KI:HEREDITARY OXALOSIS (PEDIATRIC PATIENTS)</option>
					<option value="3066">3066: KI:CHOLESTEROL EMBOLIZATION</option>
					<option value="3067">3067: KI:FSG - FOCAL SEGMENTAL GLOMERULOSCLEROSIS</option>
					<option value="3068">3068: KI:RAPID PROGRESSIVE GLOMERULONEPHRITIS (RPGN)</option>
					<option value="3069">3069: KI:DIABETES MELLITUS - TYPE I</option>
					<option value="3070">3070: KI:DIABETES MELLITUS - TYPE II</option>
					<option value="3071">3071: KI:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
					<option value="3072">3072: KI:HEPATORENAL SYNDROME</option>
					<option value="3073">3073: KI:LITHIUM TOXICITY</option>
					<option value="3074">3074: KI:HIV NEPHROPATHY</option>
					<option value="4100">4100: LI:AHN: DRUG OTHER SPECIFY</option>
					<option value="4101">4101: LI:AHN: TYPE A</option>
					<option value="4102">4102: LI:AHN: TYPE B- HBSAG+</option>
					<option value="4103">4103: LI:AHN: NON A- NON B</option>
					<option value="4104">4104: LI:AHN: TYPE C</option>
					<option value="4105">4105: LI:AHN: TYPE D</option>
					<option value="4106">4106: LI:AHN: TYPE B AND C</option>
					<option value="4107">4107: LI:AHN: TYPE B AND D</option>
					<option value="4108">4108: LI:AHN: ETIOLOGY UNKNOWN</option>
					<option value="4110">4110: LI:AHN: OTHER, SPECIFY (E.G., ACUTE VIRAL INFECTION, AUTOIMMUNE HEPATITIS - FULMINANT)</option>
					<option value="4200">4200: LI:CIRRHOSIS: DRUG/INDUST EXPOSURE OTHER SPECIFY</option>
					<option value="4201">4201: LI:CIRRHOSIS: TYPE A</option>
					<option value="4202">4202: LI:CIRRHOSIS: TYPE B- HBSAG+</option>
					<option value="4203">4203: LI:CIRRHOSIS: TYPE NON A, NON B</option>
					<option value="4204">4204: LI:CIRRHOSIS: TYPE C</option>
					<option value="4205">4205: LI:CIRRHOSIS: TYPE D</option>
					<option value="4206">4206: LI:CIRRHOSIS: TYPE B AND C</option>
					<option value="4207">4207: LI:CIRRHOSIS: TYPE B AND D</option>
					<option value="4208">4208: LI:CIRRHOSIS: CRYPTOGENIC- IDIOPATHIC</option>
					<option value="4209">4209: LI:CIRRHOSIS: CHRONIC ACTIVE HEPATITIS: ETIOLOGY UNKNOWN</option>
					<option value="4210">4210: LI:CIRRHOSIS: OTHER, SPECIFY (E.G., HISTIOCYTOSIS, SARCOIDOSIS, GRANULOMATOUS)</option>
					<option value="4212">4212: LI:CIRRHOSIS: AUTOIMMUNE</option>
					<option value="4213">4213: LI:CIRRHOSIS: CRYPTOGENIC (IDIOPATHIC)</option>
					<option value="4214">4214: LI:CIRRHOSIS: FATTY LIVER (NASH)</option>
					<option value="4215">4215: LI:ALCOHOLIC CIRRHOSIS</option>
					<option value="4216">4216: LI:ALCOHOLIC CIRRHOSIS WITH HEPATITIS C</option>
					<option value="4217">4217: LI:ACUTE ALCOHOLIC HEPATITIS</option>
					<option value="4220">4220: LI:PRIMARY BILIARY CIRRHOSIS (PBC)</option>
					<option value="4230">4230: LI:SEC BILIARY CIRRHOSIS: CAROLI'S DISEASE</option>
					<option value="4231">4231: LI:SEC BILIARY CIRRHOSIS: CHOLEDOCHOL CYST</option>
					<option value="4235">4235: LI:SEC BILIARY CIRRHOSIS: OTHER SPECIFY</option>
					<option value="4240">4240: LI:PSC: CROHN'S DISEASE</option>
					<option value="4241">4241: LI:PSC: ULCERATIVE COLITIS</option>
					<option value="4242">4242: LI:PSC: NO BOWEL DISEASE</option>
					<option value="4245">4245: LI:PSC: OTHER SPECIFY</option>
					<option value="4250">4250: LI:FAMILIAL CHOLESTASIS: BYLER'S DISEASE</option>
					<option value="4255">4255: LI:FAMILIAL CHOLESTASIS: OTHER SPECIFY</option>
					<option value="4260">4260: LI:CHOLES LIVER DISEASE: OTHER SPECIFY</option>
					<option value="4264">4264: LI:NEONATAL CHOLESTATIC LIVER DISEASE</option>
					<option value="4265">4265: LI:NEONATAL HEPATITIS OTHER SPECIFY</option>
					<option value="4270">4270: LI:BILIARY ATRESIA: EXTRAHEPATIC</option>
					<option value="4271">4271: LI:BILIARY HYPOPLASIA: NONSYNDROMIC PAUCITY OF INTRAHEPATIC BILE DUCT</option>
					<option value="4272">4272: LI:BILIARY HYPOPLASIA: ALAGILLE?S SYNDROME (PAUCITY OF INTRAHEPATIC BILE DUCT)</option>
					<option value="4275">4275: LI:BILIARY ATRESIA OR HYPOPLASIA: OTHER, SPECIFY</option>
					<option value="4280">4280: LI:CONGENITAL HEPATIC FIBROSIS</option>
					<option value="4285">4285: LI:CYSTIC FIBROSIS</option>
					<option value="4290">4290: LI:BUDD-CHIARI SYNDROME</option>
					<option value="4300">4300: LI:METDIS: ALPHA-1-ANTITRYPSIN DEFIC A-1-A</option>
					<option value="4301">4301: LI:METDIS: WILSON'S DISEASE, OTHER COPPER METABOLISM DISORDER</option>
					<option value="4302">4302: LI:METDIS: HEMOCHROMATOSIS - HEMOSIDEROSIS</option>
					<option value="4303">4303: LI:METDIS: GLYC STOR DIS TYPE I (GSD-I)</option>
					<option value="4304">4304: LI:METDIS: GLYC STOR DIS TYPE IV (GSD-IV)</option>
					<option value="4305">4305: LI:METDIS: HYPERLIPIDEMIA-II, HOMOZYGOUS HYPERCHOLESTEROLEMIA</option>
					<option value="4306">4306: LI:METDIS: TYROSINEMIA</option>
					<option value="4307">4307: LI:METDIS: PRIMARY OXALOSIS/OXALURIA, HYPEROXALURIA</option>
					<option value="4308">4308: LI:METDIS: MAPLE SYRUP URINE DISEASE</option>
					<option value="4315">4315: LI:METDIS: OTHER SPECIFY</option>
					<option value="4400">4400: LI:PLM: HEPATOMA - HEPATOCELLULAR CARCINOMA</option>
					<option value="4401">4401: LI:PLM: HEPATOMA (HCC) AND CIRRHOSIS</option>
					<option value="4402">4402: LI:PLM: FIBROLAMELLAR (FL-HC)</option>
					<option value="4403">4403: LI:PLM: CHOLANGIOCARCINOMA (CH-CA)</option>
					<option value="4404">4404: LI:PLM: HEPATOBLASTOMA (HBL)</option>
					<option value="4405">4405: LI:PLM: HEMANGIOENDOTHELIOMA, HEMANGIOSARCOMA, ANGIOSARCOMA</option>
					<option value="4410">4410: LI:PLM: OTHER SPECIFY (I.E., KLATZKIN TUMOR, LEIOMYSARCOMA)</option>
					<option value="4420">4420: LI:BILE DUCT CANCER: (CHOLANGIOMA, BILIARY TRACT CARCINOMA)</option>
					<option value="4430">4430: LI:SECONDARY HEPATIC MALIGNANCY OTHER SPECIFY</option>
					<option value="4450">4450: LI:BENIGN TUMOR: HEPATIC ADENOMA</option>
					<option value="4451">4451: LI:BENIGN TUMOR: POLYCYSTIC LIVER DISEASE</option>
					<option value="4455">4455: LI:BENIGN TUMOR: OTHER SPECIFY</option>
					<option value="4500">4500: LI:TPN/HYPERALIMENTATION IND LIVER DISEASE</option>
					<option value="4510">4510: LI:GRAFT VS. HOST DIS SEC TO NON-LI TX</option>
					<option value="4520">4520: LI:TRAUMA OTHER SPECIFY</option>
					<option value="4592">4592: LI:Hepatitis B: Chronic or Acute</option>
					<option value="4593">4593: LI:Hepatitis C: Chronic or Acute</option>
					<option value="4597">4597: LI:NA: Non-HD Followups Only</option>
					<option value="4598">4598: LI:GRAFT FAILURE</option>
					<option value="5000">5000: PA:RETRANSPLANT/GRAFT FAILURE</option>
					<option value="5001">5001: PA:DIABETES MELLITUS - TYPE I</option>
					<option value="5002">5002: PA:DIABETES MELLITUS - TYPE II</option>
					<option value="5003">5003: PA:DIABETES SECONDARY TO CHRONIC PANCREATITIS WITHOUT PANCREATECTOMY</option>
					<option value="5004">5004: PA:DIABETES SECONDARY TO CYSTIC FIBROSIS WITHOUT PANCREATECTOMY</option>
					<option value="5005">5005: PA:PANCREATIC CANCER</option>
					<option value="5006">5006: PA:BILE DUCT CANCER</option>
					<option value="5007">5007: PA:OTHER CANCERS</option>
					<option value="5008">5008: PA:PANCREATECTOMY PRIOR TO PANCREAS TX</option>
					<option value="5009">5009: PA:DIABETES MELLITUS - TYPE OTHER / UNKNOWN</option>
					<option value="6000">6000: SGS: INTESTINAL ATRESIA</option>
					<option value="6001">6001: SGS: NECROTIZING ENTEROCOLITIS</option>
					<option value="6002">6002: SGS: INTESTINAL VOLVULUS SECONDARY TO MALROTATION</option>
					<option value="6003">6003: SGS: INTESTINAL VOLVULUS SECONDARY TO ADHESIONS</option>
					<option value="6004">6004: SGS: INTESTINAL VOLVULUS SECONDARY TO PERSISTENT OMPHALOMESENTRERIC DUCT</option>
					<option value="6005">6005: SGS: GASTROSCHISIS</option>
					<option value="6006">6006: SGS: MASS RESECT SEC TO INF BOWEL-CROHNS</option>
					<option value="6007">6007: SGS: MASS RESECT SEC TO TUMOR</option>
					<option value="6008">6008: SGS: MASSIVE RESECTION SECONDARY TO MESENTERIC ARTERIAL THROMBOSIS OR EMBOLUS</option>
					<option value="6009">6009: SGS: MASS RESECT SEC TO MES VENOUS THROM</option>
					<option value="6048">6048: SGS: OTHER SPECIFY</option>
					<option value="6049">6049: SGS: UNSPECIFIED</option>
					<option value="6050">6050: IN:FBP: HIRSCHSPRUNG'S DISEASE</option>
					<option value="6051">6051: IN:FBP: NEURONAL INTESTINAL DYSPLASIA</option>
					<option value="6052">6052: IN:FBP: PSEUDO-OBSTRUCTION-NEUROPATHIC</option>
					<option value="6053">6053: IN:FBP: PSEUDO-OBSTRUCTION-MYOPATHIC</option>
					<option value="6054">6054: IN:FBP: PROTEIN-LOSING ENTEROPATHY</option>
					<option value="6055">6055: IN:FBP: MICROVILLOUS INCLUSION DISEASE</option>
					<option value="6098">6098: IN:FBP: OTHER SPECIFY</option>
					<option value="6099">6099: IN:FBP: UNSPECIFIED</option>
					<option value="6100">6100: IN:GRAFT FAILURE</option>
					<option value="6150">6150: IN:RETRANSPLANT</option>
					<option value="6497">6497: IN:INTESTINAL DISEASE OTHER SPECIFY</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DGN OSTXT</label>
				<label className="text-secondary" >Primary Diagnosis/Specify:</label>
				<input className="form-control"as="textarea" rows="3" value={this.props.canDgnOstxt} onChange={this.props.onChangeCanDgnOstxt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ECMO</label>
				<label className="text-secondary" >Life Support: ECMO:</label>
				<input className="form-control"type="text" value={this.props.canEcmo} onChange={this.props.onChangeCanEcmo} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ELECTROLYTE</label>
				<label className="text-secondary" >Unmanageable fluid-electrolyte losses (IN Pediatric Only):</label>
				<input className="form-control"type="text" value={this.props.canElectrolyte} onChange={this.props.onChangeCanElectrolyte} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN EXHAUST VASC ACCESS</label>
				<label className="text-secondary" >Exhausted Vascular Access:</label>
				<input className="form-control"type="text" value={this.props.canExhaustVascAccess} onChange={this.props.onChangeCanExhaustVascAccess} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN FUNCTN STAT</label>
				<label className="text-secondary" >Patient/s Functional Status:</label>
				<select className="form-control" value={this.props.canFunctnStat} onChange={this.props.onChangeCanFunctnStat}>
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
				<label className="font-weight-bold" >CAN HGT CM</label>
				<label className="text-secondary" >Candidate/s Height (stored in cm):</label>
				<input className="form-control"type="number" value={this.props.canHgtCm} onChange={this.props.onChangeCanHgtCm} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN HGT WGT DT</label>
				<label className="text-secondary" >Date of Height & Weight Measurement (Ped Only):</label>
				<input className="form-control"type="datetime-local" value={this.props.canHgtWgtDt} onChange={this.props.onChangeCanHgtWgtDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN IABP</label>
				<label className="text-secondary" >Life Support: IABP:</label>
				<input className="form-control"type="text" value={this.props.canIabp} onChange={this.props.onChangeCanIabp} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN IV INOTROP</label>
				<label className="text-secondary" >Life Support: IV Inotropes:</label>
				<input className="form-control"type="text" value={this.props.canIvInotrop} onChange={this.props.onChangeCanIvInotrop} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LAST DIAL PRIOR WEEK</label>
				<label className="text-secondary" >Last non-blank val. of dialysis within prior week:</label>
				<input className="form-control"type="text" value={this.props.canLastDialPriorWeek} onChange={this.props.onChangeCanLastDialPriorWeek} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LIFE SUPPORT</label>
				<label className="text-secondary" >Patient on Life Support:</label>
				<input className="form-control"type="text" value={this.props.canLifeSupport} onChange={this.props.onChangeCanLifeSupport} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LIFE SUPPORT OTHER</label>
				<label className="text-secondary" >Life Support: Other Mechanism:</label>
				<input className="form-control"type="text" value={this.props.canLifeSupportOther} onChange={this.props.onChangeCanLifeSupportOther} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MOST RECENT CREAT</label>
				<label className="text-secondary" >Most Recent Absolute Creatinine:</label>
				<input className="form-control"type="number" value={this.props.canMostRecentCreat} onChange={this.props.onChangeCanMostRecentCreat} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MOST RECENT HGT CM</label>
				<label className="text-secondary" >Candidate/s most recent Waitlist Height in centimeter:</label>
				<input className="form-control"type="number" value={this.props.canMostRecentHgtCm} onChange={this.props.onChangeCanMostRecentHgtCm} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MOST RECENT WGT KG</label>
				<label className="text-secondary" >Candidate/s most recent Waitlist Weight in kilograms:</label>
				<input className="form-control"type="number" value={this.props.canMostRecentWgtKg} onChange={this.props.onChangeCanMostRecentWgtKg} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MOTOR DEVELOP</label>
				<label className="text-secondary" >Motor Development (Ped Only):</label>
				<select className="form-control" value={this.props.canMotorDevelop} onChange={this.props.onChangeCanMotorDevelop}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Definite Motor delay/impairment</option>
					<option value="2">2: Probable Motor delay/impairment</option>
					<option value="3">3: Questionable Motor delay/impairment</option>
					<option value="4">4: No Motor delay/impairment</option>
					<option value="998">998: Not Assessed</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN MUSCLE WASTING</label>
				<label className="text-secondary" >Marked Muscle Wasting:</label>
				<input className="form-control"type="text" value={this.props.canMuscleWasting} onChange={this.props.onChangeCanMuscleWasting} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN NEOPLASM</label>
				<label className="text-secondary" >Neoplasm:</label>
				<input className="form-control"type="text" value={this.props.canNeoplasm} onChange={this.props.onChangeCanNeoplasm} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PGE</label>
				<label className="text-secondary" >Life Support: PGE:</label>
				<input className="form-control"type="text" value={this.props.canPge} onChange={this.props.onChangeCanPge} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PHYSC CAPACITY</label>
				<label className="text-secondary" >Physical Capacity::</label>
				<select className="form-control" value={this.props.canPhyscCapacity} onChange={this.props.onChangeCanPhyscCapacity}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No Limitations</option>
					<option value="2">2: Limited Mobility</option>
					<option value="3">3: Wheelchair bound or more limited</option>
					<option value="996">996: Not Applicable ({"<"} 1 year old or hospitalized)</option>
					<option value="998">998: Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TOT ALBUMIN</label>
				<label className="text-secondary" >Total Serum Albumin:</label>
				<input className="form-control"type="number" value={this.props.canTotAlbumin} onChange={this.props.onChangeCanTotAlbumin} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TOT BILI</label>
				<label className="text-secondary" >Total Bilirubin (IN Pediatric Only):</label>
				<input className="form-control"type="number" value={this.props.canTotBili} onChange={this.props.onChangeCanTotBili} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN VAD TAH</label>
				<label className="text-secondary" >Life Support: VAD/TAH:</label>
				<select className="form-control" value={this.props.canVadTah} onChange={this.props.onChangeCanVadTah}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Disability</option>
					<option value="2">2: Demands of Treatment</option>
					<option value="3">3: Insurance Conflict</option>
					<option value="4">4: Inability to Find Work</option>
					<option value="5">5: Patient Choice - Homemaker</option>
					<option value="6">6: Patient Choice - Student Full Time/Part Time</option>
					<option value="7">7: Patient Choice - Retired</option>
					<option value="8">8: Patient Choice - Other</option>
					<option value="996">996: Not Applicable - Hospitalized</option>
					<option value="998">998: Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN VARICEAL BLEEDING</label>
				<label className="text-secondary" >Variceal Bleeding within Last Two Weeks:</label>
				<input className="form-control"type="text" value={this.props.canVaricealBleeding} onChange={this.props.onChangeCanVaricealBleeding} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN VENTILATOR</label>
				<label className="text-secondary" >Life Support: Ventilator:</label>
				<input className="form-control"type="text" value={this.props.canVentilator} onChange={this.props.onChangeCanVentilator} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN WGT KG</label>
				<label className="text-secondary" >Candidate/s Weight in kilograms:</label>
				<input className="form-control"type="number" value={this.props.canWgtKg} onChange={this.props.onChangeCanWgtKg} />
			</div>
		</div>}

	</Tab>
	<Tab eventKey="hist" title="hist">
	{ this.state.key == 'hist' &&
		<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ANGINA</label>
				<label className="text-secondary" >Angina/Coronary Artery Disease:</label>
				<select className="form-control" value={this.props.canAngina} onChange={this.props.onChangeCanAngina}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No angina</option>
					<option value="2">2: Stable angina - strenuous activity results in angina</option>
					<option value="3">3: Stable angina - ordinary physical activity results in angina</option>
					<option value="4">4: Stable angina - no rest angina; does have angina with less than ordinary activity</option>
					<option value="5">5: Stable angina - angina with any physical activity or at rest</option>
					<option value="6">6: Unstable angina</option>
					<option value="7">7: Angina, stability unknown</option>
					<option value="30">30: Stable angina - activity level resulting in angina is unspecified - old code 3</option>
					<option value="998">998: Unknown if angina present</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ANGINA CAD</label>
				<label className="text-secondary" >Angina::</label>
				<select className="form-control" value={this.props.canAnginaCad} onChange={this.props.onChangeCanAnginaCad}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No</option>
					<option value="2">2: Yes, and documented Coronary Artery Disease</option>
					<option value="3">3: Yes, with no documented Coronary Artery Disease</option>
					<option value="4">4: Yes, but Coronary Artery Disease unknown</option>
					<option value="998">998: Status Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ASCITES</label>
				<label className="text-secondary" >Ascites (from liver disease ):</label>
				<input className="form-control"type="text" value={this.props.canAscites} onChange={this.props.onChangeCanAscites} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN BACTERIA PERIT</label>
				<label className="text-secondary" >Spontaneous Bacterial Peritonitis (ascitis infection):</label>
				<input className="form-control"type="text" value={this.props.canBacteriaPerit} onChange={this.props.onChangeCanBacteriaPerit} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN CEREB VASC</label>
				<label className="text-secondary" >Symptomatic Cerebrovascular Disease:</label>
				<input className="form-control"type="text" value={this.props.canCerebVasc} onChange={this.props.onChangeCanCerebVasc} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN COGNITIVE DEVELOP</label>
				<label className="text-secondary" >Cognitive Development (Ped Only):</label>
				<select className="form-control" value={this.props.canCognitiveDevelop} onChange={this.props.onChangeCanCognitiveDevelop}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Definite Cognitive delay/impairment</option>
					<option value="2">2: Probable Cognitive delay/impairment</option>
					<option value="3">3: Questionable Cognitive delay/impairment</option>
					<option value="4">4: No Cognitive delay/impairment</option>
					<option value="998">998: Not Assessed</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DIAB</label>
				<label className="text-secondary" >Diabetes:</label>
				<select className="form-control" value={this.props.canDiab} onChange={this.props.onChangeCanDiab}>
					<option value="" hidden disabled selected/>
					<option value="1">1: NO</option>
					<option value="2">2: INSULIN DEPENDENT DIABETES</option>
					<option value="3">3: NON-INSULIN DEPENDENT DIABETES</option>
					<option value="4">4: DIABETES, DEPENDENCY UNKNOWN</option>
					<option value="998">998: UNKNOWN</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DIAB TY</label>
				<label className="text-secondary" >Diabetes:</label>
				<select className="form-control" value={this.props.canDiabTy} onChange={this.props.onChangeCanDiabTy}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No</option>
					<option value="2">2: Type I</option>
					<option value="3">3: Type II</option>
					<option value="4">4: Type Other</option>
					<option value="5">5: Type Unknown</option>
					<option value="998">998: Diabetes Status Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DIAL</label>
				<label className="text-secondary" >Dialysis:</label>
				<select className="form-control" value={this.props.canDial} onChange={this.props.onChangeCanDial}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No dialysis</option>
					<option value="2">2: Hemodialysis</option>
					<option value="3">3: Peritoneal Dialysis</option>
					<option value="4">4: CAVH: Continuous Arteriovenous Hemofiltration</option>
					<option value="5">5: CV VH: Continuous Venous/Venous Hemofiltration</option>
					<option value="998">998: Dialysis Status Unknown</option>
					<option value="999">999: Dialysis-Unknown Type was performed</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DRUG TREAT COPD</label>
				<label className="text-secondary" >Drug Treated COPD:</label>
				<input className="form-control"type="text" value={this.props.canDrugTreatCopd} onChange={this.props.onChangeCanDrugTreatCopd} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN DRUG TREAT HYPERTEN</label>
				<label className="text-secondary" >Drug Treated Systemic Hypertension:</label>
				<input className="form-control"type="text" value={this.props.canDrugTreatHyperten} onChange={this.props.onChangeCanDrugTreatHyperten} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ENCEPH</label>
				<label className="text-secondary" >Encephalopathy:</label>
				<input className="form-control"type="text" value={this.props.canEnceph} onChange={this.props.onChangeCanEnceph} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN FUNGAL SEPSIS</label>
				<label className="text-secondary" >Fungal sepsis (IN Pediatric Only):</label>
				<input className="form-control"type="text" value={this.props.canFungalSepsis} onChange={this.props.onChangeCanFungalSepsis} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LIVING DON TX</label>
				<label className="text-secondary" >Has Candidate received a Living Donor transplant? (used for Liver Candidates):</label>
				<input className="form-control"type="text" value={this.props.canLivingDonTx} onChange={this.props.onChangeCanLivingDonTx} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LI DYSFUNCTN</label>
				<label className="text-secondary" >Liver Dysfunction:</label>
				<input className="form-control"type="text" value={this.props.canLiDysfunctn} onChange={this.props.onChangeCanLiDysfunctn} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN LOSS VASC ACCESS</label>
				<label className="text-secondary" >Loss of two or more vascular access sites (IN Pediatric Only):</label>
				<input className="form-control"type="text" value={this.props.canLossVascAccess} onChange={this.props.onChangeCanLossVascAccess} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN NEW PREV PI TX</label>
				<label className="text-secondary" >Previous Pancreas Islet Transplantation::</label>
				<input className="form-control"type="text" value={this.props.canNewPrevPiTx} onChange={this.props.onChangeCanNewPrevPiTx} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN NON RECON GI</label>
				<label className="text-secondary" >Non-Reconstructible GI tract (IN Pediatric Only):</label>
				<input className="form-control"type="text" value={this.props.canNonReconGi} onChange={this.props.onChangeCanNonReconGi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PEPTIC ULCER</label>
				<label className="text-secondary" >Peptic Ulcer Disease:</label>
				<select className="form-control" value={this.props.canPepticUlcer} onChange={this.props.onChangeCanPepticUlcer}>
					<option value="" hidden disabled selected/>
					<option value="1">1: No</option>
					<option value="2">2: Yes, active within the last year</option>
					<option value="3">3: Yes, not active within the last year</option>
					<option value="4">4: Yes, activity unknown</option>
					<option value="998">998: Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PERIPH VASC</label>
				<label className="text-secondary" >Symptomatic Peripheral Vascular Disease:</label>
				<input className="form-control"type="text" value={this.props.canPeriphVasc} onChange={this.props.onChangeCanPeriphVasc} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PORTAL VEIN</label>
				<label className="text-secondary" >History of Portal Vein Thrombosis:</label>
				<input className="form-control"type="text" value={this.props.canPortalVein} onChange={this.props.onChangeCanPortalVein} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV ABDOM SURG</label>
				<label className="text-secondary" >Previous Upper Abdominal Surgery:</label>
				<input className="form-control"type="text" value={this.props.canPrevAbdomSurg} onChange={this.props.onChangeCanPrevAbdomSurg} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV BONE MARROW DT</label>
				<label className="text-secondary" >Date of Latest Bone Marrow Transplant:</label>
				<input className="form-control"type="datetime-local" value={this.props.canPrevBoneMarrowDt} onChange={this.props.onChangeCanPrevBoneMarrowDt} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV BONE MARROW TX</label>
				<label className="text-secondary" >Number Bone Marrow Transplants:</label>
				<input className="form-control"type="number" value={this.props.canPrevBoneMarrowTx} onChange={this.props.onChangeCanPrevBoneMarrowTx} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV HL</label>
				<label className="text-secondary" >Prev Heart-Lung Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevHl} onChange={this.props.onChangeCanPrevHl} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV HR</label>
				<label className="text-secondary" >Prev Heart Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevHr} onChange={this.props.onChangeCanPrevHr} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV IN</label>
				<label className="text-secondary" >Prev Intestine Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevIn} onChange={this.props.onChangeCanPrevIn} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV KI</label>
				<label className="text-secondary" >Prev Kidney Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevKi} onChange={this.props.onChangeCanPrevKi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV KP</label>
				<label className="text-secondary" >Prev Kidney-Pancreas Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevKp} onChange={this.props.onChangeCanPrevKp} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV LI</label>
				<label className="text-secondary" >Prev Liver Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevLi} onChange={this.props.onChangeCanPrevLi} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV LU</label>
				<label className="text-secondary" >Prev Lung Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevLu} onChange={this.props.onChangeCanPrevLu} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV PA</label>
				<label className="text-secondary" >Prev Pancreas Tx:</label>
				<input className="form-control"type="number" value={this.props.canPrevPa} onChange={this.props.onChangeCanPrevPa} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV TX</label>
				<label className="text-secondary" >Previous Transplants:</label>
				<input className="form-control"type="number" value={this.props.canPrevTx} onChange={this.props.onChangeCanPrevTx} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PREV TXFUS</label>
				<label className="text-secondary" >Any Previous Transfusions:</label>
				<input className="form-control"type="text" value={this.props.canPrevTxfus} onChange={this.props.onChangeCanPrevTxfus} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PULM EMBOL</label>
				<label className="text-secondary" >Pulmonary Embolism:</label>
				<input className="form-control"type="text" value={this.props.canPulmEmbol} onChange={this.props.onChangeCanPulmEmbol} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN RECUR SEPSIS</label>
				<label className="text-secondary" >Recurrent sepsis (IN Pediatric Only):</label>
				<input className="form-control"type="text" value={this.props.canRecurSepsis} onChange={this.props.onChangeCanRecurSepsis} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN TIPSS</label>
				<label className="text-secondary" >History of TIPSS:</label>
				<input className="form-control"type="text" value={this.props.canTipss} onChange={this.props.onChangeCanTipss} />
			</div>
		</div>}

	</Tab>
	<Tab eventKey="personal" title="personal">
	{ this.state.key == 'personal' &&
		<div className="d-flex flex-wrap bg-light">
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACADEMIC LEVEL</label>
				<label className="text-secondary" >Academic Activity Level::</label>
				<select className="form-control" value={this.props.canAcademicLevel} onChange={this.props.onChangeCanAcademicLevel}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Full academic load</option>
					<option value="2">2: Reduced academic load</option>
					<option value="3">3: Unable to participate in academics due to disease or condition</option>
					<option value="4">4: Unable to participate regularly in academics due to dialysis</option>
					<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
					<option value="998">998: Status Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ACADEMIC PROGRESS</label>
				<label className="text-secondary" >Academic Progress::</label>
				<select className="form-control" value={this.props.canAcademicProgress} onChange={this.props.onChangeCanAcademicProgress}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Within One Grade Level of Peers</option>
					<option value="2">2: Delayed Grade Level</option>
					<option value="3">3: Special Education</option>
					<option value="996">996: Not Applicable {"<"} 5 years old/ High School graduate or GED</option>
					<option value="998">998: Status Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN CITIZENSHIP</label>
				<label className="text-secondary" >Patient/s Citizenship:</label>
				<select className="form-control" value={this.props.canCitizenship} onChange={this.props.onChangeCanCitizenship}>
					<option value="" hidden disabled selected/>
					<option value="1">1: US Citizen</option>
					<option value="2">2: RESIDENT ALIEN</option>
					<option value="3">3: NON-RESIDENT ALIEN, Year Entered US</option>
					<option value="4">4: Non-US Citizen/US Resident</option>
					<option value="5">5: Non-US Citizen/Non-US Resident, Traveled to US for Reason Other Than Transplant</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN EDUCATION</label>
				<label className="text-secondary" >Patient/s Educational Status:</label>
				<select className="form-control" value={this.props.canEducation} onChange={this.props.onChangeCanEducation}>
					<option value="" hidden disabled selected/>
					<option value="1">1: NONE</option>
					<option value="2">2: GRADE SCHOOL (0-8)</option>
					<option value="3">3: HIGH SCHOOL (9-12) or GED</option>
					<option value="4">4: ATTENDED COLLEGE/TECHNICAL SCHOOL</option>
					<option value="5">5: ASSOCIATE/BACHELOR DEGREE</option>
					<option value="6">6: POST-COLLEGE GRADUATE DEGREE</option>
					<option value="996">996: N/A ({"<"} 5 YRS OLD)</option>
					<option value="998">998: UNKNOWN</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN EMPL STAT</label>
				<label className="text-secondary" >Patient/s Employment Status - Pre-6/30/2004:</label>
				<select className="form-control" value={this.props.canEmplStat} onChange={this.props.onChangeCanEmplStat}>
					<option value="" hidden disabled selected/>
					<option value="1">1: WORKING FULL TIME</option>
					<option value="2">2: WORKING PART TIME BY CHOICE</option>
					<option value="3">3: WORKING PART TIME DUE TO DISEASE</option>
					<option value="4">4: WORKING PART TIME REASON UNKNOWN</option>
					<option value="5">5: NOT WORKING BY CHOICE</option>
					<option value="6">6: NOT WORKING DUE TO DISEASE</option>
					<option value="7">7: NOT WORKING UNABLE TO FIND EMPLOYMENT</option>
					<option value="8">8: NOT WORKING REASON UNKNOWN</option>
					<option value="9">9: RETIRED</option>
					<option value="996">996: PATIENT {"<"} 5 YEARS OLD</option>
					<option value="998">998: UNKNOWN</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN ETHNICITY SRTR</label>
				<label className="text-secondary" >SRTR Patient Ethnicity:</label>
				<select className="form-control" value={this.props.canEthnicitySrtr} onChange={this.props.onChangeCanEthnicitySrtr}>
					<option value="" hidden disabled selected/>
					<option value="LATINO">LATINO: Latino</option>
					<option value="NLATIN">NLATIN: Non-Latino or unknown</option>
					<option value=""></option>
					<option value=""></option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN GENDER</label>
				<label className="text-secondary" >Patient/s Gender:</label>
				<input className="form-control"type="text" value={this.props.canGender} onChange={this.props.onChangeCanGender} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PERM STATE</label>
				<label className="text-secondary" >Patient/s Permanent State:</label>
				<select className="form-control" value={this.props.canPermState} onChange={this.props.onChangeCanPermState}>
					<option value="" hidden disabled selected/>
					<option value="AK">AK: ALASKA</option>
					<option value="AL">AL: ALABAMA</option>
					<option value="AR">AR: ARKANSAS</option>
					<option value="AS">AS: PAGO PAGO</option>
					<option value="AZ">AZ: ARIZONA</option>
					<option value="CA">CA: CALIFORNIA</option>
					<option value="CO">CO: COLORADO</option>
					<option value="CT">CT: CONNECTICUT</option>
					<option value="DC">DC: DISTRICT OF COLUMBIA</option>
					<option value="DE">DE: DELAWARE</option>
					<option value="FL">FL: FLORIDA</option>
					<option value="GA">GA: GEORGIA</option>
					<option value="GU">GU: GUAM</option>
					<option value="HI">HI: HAWAII</option>
					<option value="IA">IA: IOWA</option>
					<option value="ID">ID: IDAHO</option>
					<option value="IL">IL: ILLINOIS</option>
					<option value="IN">IN: INDIANA</option>
					<option value="KS">KS: KANSAS</option>
					<option value="KY">KY: KENTUCKY</option>
					<option value="LA">LA: LOUISIANA</option>
					<option value="MA">MA: MASSACHUSETTS</option>
					<option value="MD">MD: MARYLAND</option>
					<option value="ME">ME: MAINE</option>
					<option value="MI">MI: MICHIGAN</option>
					<option value="MN">MN: MINNESOTA</option>
					<option value="MO">MO: MISSOURI</option>
					<option value="MP">MP: SAIPAN MARIANA ISLANDS</option>
					<option value="MS">MS: MISSISSIPPI</option>
					<option value="MT">MT: MONTANA</option>
					<option value="NA">NA: FOREIGN COUNTRY</option>
					<option value="NC">NC: NORTH CAROLINA</option>
					<option value="ND">ND: NORTH DAKOTA</option>
					<option value="NE">NE: NEBRASKA</option>
					<option value="NH">NH: NEW HAMPSHIRE</option>
					<option value="NJ">NJ: NEW JERSEY</option>
					<option value="NM">NM: NEW MEXICO</option>
					<option value="NV">NV: NEVADA</option>
					<option value="NY">NY: NEW YORK</option>
					<option value="OH">OH: OHIO</option>
					<option value="OK">OK: OKLAHOMA</option>
					<option value="OR">OR: OREGON</option>
					<option value="PA">PA: PENNSYLVANIA</option>
					<option value="PR">PR: PUERTO RICO</option>
					<option value="RI">RI: RHODE ISLAND</option>
					<option value="SC">SC: SOUTH CAROLINA</option>
					<option value="SD">SD: SOUTH DAKOTA</option>
					<option value="TN">TN: TENNESSEE</option>
					<option value="TX">TX: TEXAS</option>
					<option value="UT">UT: UTAH</option>
					<option value="VA">VA: VIRGINIA</option>
					<option value="VI">VI: VIRGIN ISLANDS</option>
					<option value="VT">VT: VERMONT</option>
					<option value="WA">WA: WASHINGTON</option>
					<option value="WI">WI: WISCONSIN</option>
					<option value="WV">WV: WEST VIRGINIA</option>
					<option value="WY">WY: WYOMING</option>
					<option value="ZZ">ZZ: UNKNOWN</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN PRIMARY PAY</label>
				<label className="text-secondary" >Source of Payment//Primary::</label>
				<select className="form-control" value={this.props.canPrimaryPay} onChange={this.props.onChangeCanPrimaryPay}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Private insurance</option>
					<option value="2">2: Public insurance - Medicaid</option>
					<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
					<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
					<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
					<option value="6">6: Public insurance - Department of VA</option>
					<option value="7">7: Public insurance - Other government</option>
					<option value="8">8: Self</option>
					<option value="9">9: Donation</option>
					<option value="10">10: Free Care</option>
					<option value="11">11: Pending</option>
					<option value="12">12: Foreign Government Specify</option>
					<option value="13">13: Public insurance - Medicare Unspecified</option>
					<option value="14">14: US/State Govt Agency</option>
					<option value="15">15: Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN RACE</label>
				<label className="text-secondary" >Patient/s Race:</label>
				<select className="form-control" value={this.props.canRace} onChange={this.props.onChangeCanRace}>
					<option value="" hidden disabled selected/>
					<option value=".">Missing</option>
					<option value="8">8: White</option>
					<option value="16">16: Black or African American</option>
					<option value="32">32: American Indian or Alaska Native</option>
					<option value="64">64: Asian</option>
					<option value="128">128: Native Hawaiian or Other Pacific Islander</option>
					<option value="256">256: Arab or Middle Eastern</option>
					<option value="512">512: Indian Sub-continent</option>
					<option value="1024">1024: Unknown (for Donor Referral only)</option>
					<option value="2000">2000: Hispanic/Latino</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN RACE SRTR</label>
				<label className="text-secondary" >SRTR Patient Race:</label>
				<select className="form-control" value={this.props.canRaceSrtr} onChange={this.props.onChangeCanRaceSrtr}>
					<option value="" hidden disabled selected/>
					<option value="ASIAN">ASIAN: Asian</option>
					<option value="BLACK">BLACK: Black</option>
					<option value="MULTI">MULTI: Multiracial</option>
					<option value="NATIVE">NATIVE: Native American</option>
					<option value="PACIFIC">PACIFIC: Pacific Islander</option>
					<option value="WHITE">WHITE: White</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN SECONDARY PAY</label>
				<label className="text-secondary" >Source of Payment//Secondary::</label>
				<select className="form-control" value={this.props.canSecondaryPay} onChange={this.props.onChangeCanSecondaryPay}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Private insurance</option>
					<option value="2">2: Public insurance - Medicaid</option>
					<option value="3">3: Public insurance - Medicare FFS (Fee for Service)</option>
					<option value="4">4: Public insurance - Medicare {"&"} Choice</option>
					<option value="5">5: Public insurance - CHIP (Children's Health Insurance Program)</option>
					<option value="6">6: Public insurance - Other government</option>
					<option value="7">7: Self</option>
					<option value="8">8: Donation</option>
					<option value="9">9: Free Care</option>
					<option value="10">10: None</option>
					<option value="11">11: Public insurance - Medicare Unspecified</option>
					<option value="12">12: US/State Govt Agency</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN WORK INCOME</label>
				<label className="text-secondary" >Working for income::</label>
				<input className="form-control"type="text" value={this.props.canWorkIncome} onChange={this.props.onChangeCanWorkIncome} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN WORK NO STAT</label>
				<label className="text-secondary" >Working for income//If No, Not Working Due To::</label>
				<select className="form-control" value={this.props.canWorkNoStat} onChange={this.props.onChangeCanWorkNoStat}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Disability</option>
					<option value="2">2: Demands of Treatment</option>
					<option value="3">3: Insurance Conflict</option>
					<option value="4">4: Inability to Find Work</option>
					<option value="5">5: Patient Choice - Homemaker</option>
					<option value="6">6: Patient Choice - Student Full Time/Part Time</option>
					<option value="7">7: Patient Choice - Retired</option>
					<option value="8">8: Patient Choice - Other</option>
					<option value="996">996: Not Applicable - Hospitalized</option>
					<option value="998">998: Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN WORK YES STAT</label>
				<label className="text-secondary" >Working for income//If Yes::</label>
				<select className="form-control" value={this.props.canWorkYesStat} onChange={this.props.onChangeCanWorkYesStat}>
					<option value="" hidden disabled selected/>
					<option value="1">1: Working Full Time</option>
					<option value="2">2: Working Part Time due to Demands of Treatment</option>
					<option value="3">3: Working Part Time due to Disability</option>
					<option value="4">4: Working Part Time due to Insurance Conflict</option>
					<option value="5">5: Working Part Time due to Inability to Find Full Time Work</option>
					<option value="6">6: Working Part Time due to Patient Choice</option>
					<option value="7">7: Working Part Time Reason Unknown</option>
					<option value="998">998: Working, Part Time vs. Full Time Unknown</option>
				</select>
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >CAN YEAR ENTRY US</label>
				<label className="text-secondary" >Year of Entry to the U.S.:</label>
				<input className="form-control"type="number" value={this.props.canYearEntryUs} onChange={this.props.onChangeCanYearEntryUs} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PERS ID</label>
				<label className="text-secondary" >Unique Person ID for Recipient:</label>
				<input className="form-control"type="number" readOnly value={this.props.persId} onChange={this.props.onChangePersId} />
			</div>
			<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
				<label className="font-weight-bold" >PX ID</label>
				<label className="text-secondary" >Patient Identifier:</label>
				<input className="form-control"type="number" readOnly value={this.props.pxId} onChange={this.props.onChangePxId} />
			</div>
		</div>}

	</Tab>
</Tabs>

        </div>)
    }
}

const mapStateToProps = createStructuredSelector({
	canAbo: selects.makeSelectCanAbo(),
	canAcademicLevel: selects.makeSelectCanAcademicLevel(),
	canAcademicProgress: selects.makeSelectCanAcademicProgress(),
	canAcptA2Don: selects.makeSelectCanAcptA2Don(),
	canAcptAboIncomp: selects.makeSelectCanAcptAboIncomp(),
	canAcptExtracorpLi: selects.makeSelectCanAcptExtracorpLi(),
	canAcptHbcPos: selects.makeSelectCanAcptHbcPos(),
	canAcptHcvPos: selects.makeSelectCanAcptHcvPos(),
	canAcptLiSeg: selects.makeSelectCanAcptLiSeg(),
	canAcptOrgOtherTeam: selects.makeSelectCanAcptOrgOtherTeam(),
	canAcptProcurKi: selects.makeSelectCanAcptProcurKi(),
	canAcptProcurLi: selects.makeSelectCanAcptProcurLi(),
	canAcptProcurPa: selects.makeSelectCanAcptProcurPa(),
	canActivateDt: selects.makeSelectCanActivateDt(),
	canAgeAtListing: selects.makeSelectCanAgeAtListing(),
	canAgeInMonthsAtListing: selects.makeSelectCanAgeInMonthsAtListing(),
	canAnastomosis: selects.makeSelectCanAnastomosis(),
	canAnesthPriorDeath: selects.makeSelectCanAnesthPriorDeath(),
	canAngina: selects.makeSelectCanAngina(),
	canAnginaCad: selects.makeSelectCanAnginaCad(),
	canArtificialLi: selects.makeSelectCanArtificialLi(),
	canAscites: selects.makeSelectCanAscites(),
	canBacteriaPerit: selects.makeSelectCanBacteriaPerit(),
	canBmi: selects.makeSelectCanBmi(),
	canCerebVasc: selects.makeSelectCanCerebVasc(),
	canCitizenship: selects.makeSelectCanCitizenship(),
	canCognitiveDevelop: selects.makeSelectCanCognitiveDevelop(),
	canCtpScore: selects.makeSelectCanCtpScore(),
	canDeathDt: selects.makeSelectCanDeathDt(),
	canDgn: selects.makeSelectCanDgn(),
	canDgn2: selects.makeSelectCanDgn2(),
	canDgnOstxt: selects.makeSelectCanDgnOstxt(),
	canDiab: selects.makeSelectCanDiab(),
	canDiabTy: selects.makeSelectCanDiabTy(),
	canDial: selects.makeSelectCanDial(),
	canDrugTreatCopd: selects.makeSelectCanDrugTreatCopd(),
	canDrugTreatHyperten: selects.makeSelectCanDrugTreatHyperten(),
	canEcmo: selects.makeSelectCanEcmo(),
	canEducation: selects.makeSelectCanEducation(),
	canElectrolyte: selects.makeSelectCanElectrolyte(),
	canEmplStat: selects.makeSelectCanEmplStat(),
	canEnceph: selects.makeSelectCanEnceph(),
	canEndwlfu: selects.makeSelectCanEndwlfu(),
	canEthnicitySrtr: selects.makeSelectCanEthnicitySrtr(),
	canExhaustVascAccess: selects.makeSelectCanExhaustVascAccess(),
	canFollowsOpoAlloc: selects.makeSelectCanFollowsOpoAlloc(),
	canFunctnStat: selects.makeSelectCanFunctnStat(),
	canFungalSepsis: selects.makeSelectCanFungalSepsis(),
	canGender: selects.makeSelectCanGender(),
	canHgtCm: selects.makeSelectCanHgtCm(),
	canHgtWgtDt: selects.makeSelectCanHgtWgtDt(),
	canIabp: selects.makeSelectCanIabp(),
	canInitActStatCd: selects.makeSelectCanInitActStatCd(),
	canInitActStatDt: selects.makeSelectCanInitActStatDt(),
	canInitInactStatDt: selects.makeSelectCanInitInactStatDt(),
	canInitSrtrLabMeld: selects.makeSelectCanInitSrtrLabMeld(),
	canInitSrtrLabMeldTy: selects.makeSelectCanInitSrtrLabMeldTy(),
	canInitStat: selects.makeSelectCanInitStat(),
	canIvInotrop: selects.makeSelectCanIvInotrop(),
	canLastActStatDt: selects.makeSelectCanLastActStatDt(),
	canLastAlbumin: selects.makeSelectCanLastAlbumin(),
	canLastAscites: selects.makeSelectCanLastAscites(),
	canLastBili: selects.makeSelectCanLastBili(),
	canLastDialPriorWeek: selects.makeSelectCanLastDialPriorWeek(),
	canLastEnceph: selects.makeSelectCanLastEnceph(),
	canLastInactStatDt: selects.makeSelectCanLastInactStatDt(),
	canLastInr: selects.makeSelectCanLastInr(),
	canLastSerumCreat: selects.makeSelectCanLastSerumCreat(),
	canLastSerumSodium: selects.makeSelectCanLastSerumSodium(),
	canLastSrtrLabMeld: selects.makeSelectCanLastSrtrLabMeld(),
	canLastSrtrLabMeldTy: selects.makeSelectCanLastSrtrLabMeldTy(),
	canLastStat: selects.makeSelectCanLastStat(),
	canLifeSupport: selects.makeSelectCanLifeSupport(),
	canLifeSupportOther: selects.makeSelectCanLifeSupportOther(),
	canListingCtrId: selects.makeSelectCanListingCtrId(),
	canListingDt: selects.makeSelectCanListingDt(),
	canListingOpoId: selects.makeSelectCanListingOpoId(),
	canLivingDonTx: selects.makeSelectCanLivingDonTx(),
	canLiDysfunctn: selects.makeSelectCanLiDysfunctn(),
	canLossVascAccess: selects.makeSelectCanLossVascAccess(),
	canMalig: selects.makeSelectCanMalig(),
	canMaligTy: selects.makeSelectCanMaligTy(),
	canMaligTyBreast: selects.makeSelectCanMaligTyBreast(),
	canMaligTyCnsTumor: selects.makeSelectCanMaligTyCnsTumor(),
	canMaligTyGenitourinary: selects.makeSelectCanMaligTyGenitourinary(),
	canMaligTyHepblast: selects.makeSelectCanMaligTyHepblast(),
	canMaligTyHepcarcinoma: selects.makeSelectCanMaligTyHepcarcinoma(),
	canMaligTyLeukLymph: selects.makeSelectCanMaligTyLeukLymph(),
	canMaligTyLiver: selects.makeSelectCanMaligTyLiver(),
	canMaligTyLu: selects.makeSelectCanMaligTyLu(),
	canMaligTyOther: selects.makeSelectCanMaligTyOther(),
	canMaligTySkinMel: selects.makeSelectCanMaligTySkinMel(),
	canMaligTySkinNonMel: selects.makeSelectCanMaligTySkinNonMel(),
	canMaligTyThroat: selects.makeSelectCanMaligTyThroat(),
	canMaligTyThyroid: selects.makeSelectCanMaligTyThyroid(),
	canMaligTyUnk: selects.makeSelectCanMaligTyUnk(),
	canMaxAge: selects.makeSelectCanMaxAge(),
	canMaxMile: selects.makeSelectCanMaxMile(),
	canMaxWgt: selects.makeSelectCanMaxWgt(),
	canMedCond: selects.makeSelectCanMedCond(),
	canMinAge: selects.makeSelectCanMinAge(),
	canMinWgt: selects.makeSelectCanMinWgt(),
	canMostRecentCreat: selects.makeSelectCanMostRecentCreat(),
	canMostRecentHgtCm: selects.makeSelectCanMostRecentHgtCm(),
	canMostRecentWgtKg: selects.makeSelectCanMostRecentWgtKg(),
	canMotorDevelop: selects.makeSelectCanMotorDevelop(),
	canMuscleWasting: selects.makeSelectCanMuscleWasting(),
	canNeoplasm: selects.makeSelectCanNeoplasm(),
	canNewPrevPiTx: selects.makeSelectCanNewPrevPiTx(),
	canNonReconGi: selects.makeSelectCanNonReconGi(),
	canPepticUlcer: selects.makeSelectCanPepticUlcer(),
	canPeriphVasc: selects.makeSelectCanPeriphVasc(),
	canPermState: selects.makeSelectCanPermState(),
	canPge: selects.makeSelectCanPge(),
	canPhyscCapacity: selects.makeSelectCanPhyscCapacity(),
	canPortalVein: selects.makeSelectCanPortalVein(),
	canPrelimXmatchRequest: selects.makeSelectCanPrelimXmatchRequest(),
	canPrevAbdomSurg: selects.makeSelectCanPrevAbdomSurg(),
	canPrevBoneMarrowDt: selects.makeSelectCanPrevBoneMarrowDt(),
	canPrevBoneMarrowTx: selects.makeSelectCanPrevBoneMarrowTx(),
	canPrevHl: selects.makeSelectCanPrevHl(),
	canPrevHr: selects.makeSelectCanPrevHr(),
	canPrevIn: selects.makeSelectCanPrevIn(),
	canPrevKi: selects.makeSelectCanPrevKi(),
	canPrevKp: selects.makeSelectCanPrevKp(),
	canPrevLi: selects.makeSelectCanPrevLi(),
	canPrevLu: selects.makeSelectCanPrevLu(),
	canPrevPa: selects.makeSelectCanPrevPa(),
	canPrevTx: selects.makeSelectCanPrevTx(),
	canPrevTxfus: selects.makeSelectCanPrevTxfus(),
	canPrimaryPay: selects.makeSelectCanPrimaryPay(),
	canPulmEmbol: selects.makeSelectCanPulmEmbol(),
	canRace: selects.makeSelectCanRace(),
	canRaceSrtr: selects.makeSelectCanRaceSrtr(),
	canRecurSepsis: selects.makeSelectCanRecurSepsis(),
	canRemCd: selects.makeSelectCanRemCd(),
	canRemCod: selects.makeSelectCanRemCod(),
	canRemDt: selects.makeSelectCanRemDt(),
	canSecondaryPay: selects.makeSelectCanSecondaryPay(),
	canSource: selects.makeSelectCanSource(),
	canStatExtendFlg: selects.makeSelectCanStatExtendFlg(),
	canTiebreakerDt: selects.makeSelectCanTiebreakerDt(),
	canTipss: selects.makeSelectCanTipss(),
	canTotAlbumin: selects.makeSelectCanTotAlbumin(),
	canTotBili: selects.makeSelectCanTotBili(),
	canTrrExists: selects.makeSelectCanTrrExists(),
	canTxCountry: selects.makeSelectCanTxCountry(),
	canVadTah: selects.makeSelectCanVadTah(),
	canVaricealBleeding: selects.makeSelectCanVaricealBleeding(),
	canVentilator: selects.makeSelectCanVentilator(),
	canWgtKg: selects.makeSelectCanWgtKg(),
	canWorkIncome: selects.makeSelectCanWorkIncome(),
	canWorkNoStat: selects.makeSelectCanWorkNoStat(),
	canWorkYesStat: selects.makeSelectCanWorkYesStat(),
	canYearEntryUs: selects.makeSelectCanYearEntryUs(),
	donorId: selects.makeSelectDonorId(),
	donTy: selects.makeSelectDonTy(),
	orgAr: selects.makeSelectOrgAr(),
	persId: selects.makeSelectPersId(),
	persNexttx: selects.makeSelectPersNexttx(),
	persNexttxTrrId: selects.makeSelectPersNexttxTrrId(),
	persOptnDeathDt: selects.makeSelectPersOptnDeathDt(),
	persRestrictDeathDt: selects.makeSelectPersRestrictDeathDt(),
	persRestrictDeathVrfy: selects.makeSelectPersRestrictDeathVrfy(),
	persSsaDeathDt: selects.makeSelectPersSsaDeathDt(),
	pxId: selects.makeSelectPxId(),
	recTxDt: selects.makeSelectRecTxDt(),
	recTxProcedureTy: selects.makeSelectRecTxProcedureTy(),
	wlOrg: selects.makeSelectWlOrg(),
});
  
function mapDispatchToProps(dispatch) {
    return {
        onGetRecordPersId: evt => dispatch(actions.getRecordPersId()),
        onChangeCanAbo: evt => dispatch(actions.changeCanAbo(evt.target.value)),
        onChangeCanAcademicLevel: evt => dispatch(actions.changeCanAcademicLevel(evt.target.value)),
        onChangeCanAcademicProgress: evt => dispatch(actions.changeCanAcademicProgress(evt.target.value)),
        onChangeCanAcptA2Don: evt => dispatch(actions.changeCanAcptA2Don(evt.target.value)),
        onChangeCanAcptAboIncomp: evt => dispatch(actions.changeCanAcptAboIncomp(evt.target.value)),
        onChangeCanAcptExtracorpLi: evt => dispatch(actions.changeCanAcptExtracorpLi(evt.target.value)),
        onChangeCanAcptHbcPos: evt => dispatch(actions.changeCanAcptHbcPos(evt.target.value)),
        onChangeCanAcptHcvPos: evt => dispatch(actions.changeCanAcptHcvPos(evt.target.value)),
        onChangeCanAcptLiSeg: evt => dispatch(actions.changeCanAcptLiSeg(evt.target.value)),
        onChangeCanAcptOrgOtherTeam: evt => dispatch(actions.changeCanAcptOrgOtherTeam(evt.target.value)),
        onChangeCanAcptProcurKi: evt => dispatch(actions.changeCanAcptProcurKi(evt.target.value)),
        onChangeCanAcptProcurLi: evt => dispatch(actions.changeCanAcptProcurLi(evt.target.value)),
        onChangeCanAcptProcurPa: evt => dispatch(actions.changeCanAcptProcurPa(evt.target.value)),
        onChangeCanActivateDt: evt => dispatch(actions.changeCanActivateDt(evt.target.value)),
        onChangeCanAgeAtListing: evt => dispatch(actions.changeCanAgeAtListing(evt.target.value)),
        onChangeCanAgeInMonthsAtListing: evt => dispatch(actions.changeCanAgeInMonthsAtListing(evt.target.value)),
        onChangeCanAnastomosis: evt => dispatch(actions.changeCanAnastomosis(evt.target.value)),
        onChangeCanAnesthPriorDeath: evt => dispatch(actions.changeCanAnesthPriorDeath(evt.target.value)),
        onChangeCanAngina: evt => dispatch(actions.changeCanAngina(evt.target.value)),
        onChangeCanAnginaCad: evt => dispatch(actions.changeCanAnginaCad(evt.target.value)),
        onChangeCanArtificialLi: evt => dispatch(actions.changeCanArtificialLi(evt.target.value)),
        onChangeCanAscites: evt => dispatch(actions.changeCanAscites(evt.target.value)),
        onChangeCanBacteriaPerit: evt => dispatch(actions.changeCanBacteriaPerit(evt.target.value)),
        onChangeCanBmi: evt => dispatch(actions.changeCanBmi(evt.target.value)),
        onChangeCanCerebVasc: evt => dispatch(actions.changeCanCerebVasc(evt.target.value)),
        onChangeCanCitizenship: evt => dispatch(actions.changeCanCitizenship(evt.target.value)),
        onChangeCanCognitiveDevelop: evt => dispatch(actions.changeCanCognitiveDevelop(evt.target.value)),
        onChangeCanCtpScore: evt => dispatch(actions.changeCanCtpScore(evt.target.value)),
        onChangeCanDeathDt: evt => dispatch(actions.changeCanDeathDt(evt.target.value)),
        onChangeCanDgn: evt => dispatch(actions.changeCanDgn(evt.target.value)),
        onChangeCanDgn2: evt => dispatch(actions.changeCanDgn2(evt.target.value)),
        onChangeCanDgnOstxt: evt => dispatch(actions.changeCanDgnOstxt(evt.target.value)),
        onChangeCanDiab: evt => dispatch(actions.changeCanDiab(evt.target.value)),
        onChangeCanDiabTy: evt => dispatch(actions.changeCanDiabTy(evt.target.value)),
        onChangeCanDial: evt => dispatch(actions.changeCanDial(evt.target.value)),
        onChangeCanDrugTreatCopd: evt => dispatch(actions.changeCanDrugTreatCopd(evt.target.value)),
        onChangeCanDrugTreatHyperten: evt => dispatch(actions.changeCanDrugTreatHyperten(evt.target.value)),
        onChangeCanEcmo: evt => dispatch(actions.changeCanEcmo(evt.target.value)),
        onChangeCanEducation: evt => dispatch(actions.changeCanEducation(evt.target.value)),
        onChangeCanElectrolyte: evt => dispatch(actions.changeCanElectrolyte(evt.target.value)),
        onChangeCanEmplStat: evt => dispatch(actions.changeCanEmplStat(evt.target.value)),
        onChangeCanEnceph: evt => dispatch(actions.changeCanEnceph(evt.target.value)),
        onChangeCanEndwlfu: evt => dispatch(actions.changeCanEndwlfu(evt.target.value)),
        onChangeCanEthnicitySrtr: evt => dispatch(actions.changeCanEthnicitySrtr(evt.target.value)),
        onChangeCanExhaustVascAccess: evt => dispatch(actions.changeCanExhaustVascAccess(evt.target.value)),
        onChangeCanFollowsOpoAlloc: evt => dispatch(actions.changeCanFollowsOpoAlloc(evt.target.value)),
        onChangeCanFunctnStat: evt => dispatch(actions.changeCanFunctnStat(evt.target.value)),
        onChangeCanFungalSepsis: evt => dispatch(actions.changeCanFungalSepsis(evt.target.value)),
        onChangeCanGender: evt => dispatch(actions.changeCanGender(evt.target.value)),
        onChangeCanHgtCm: evt => dispatch(actions.changeCanHgtCm(evt.target.value)),
        onChangeCanHgtWgtDt: evt => dispatch(actions.changeCanHgtWgtDt(evt.target.value)),
        onChangeCanIabp: evt => dispatch(actions.changeCanIabp(evt.target.value)),
        onChangeCanInitActStatCd: evt => dispatch(actions.changeCanInitActStatCd(evt.target.value)),
        onChangeCanInitActStatDt: evt => dispatch(actions.changeCanInitActStatDt(evt.target.value)),
        onChangeCanInitInactStatDt: evt => dispatch(actions.changeCanInitInactStatDt(evt.target.value)),
        onChangeCanInitSrtrLabMeld: evt => dispatch(actions.changeCanInitSrtrLabMeld(evt.target.value)),
        onChangeCanInitSrtrLabMeldTy: evt => dispatch(actions.changeCanInitSrtrLabMeldTy(evt.target.value)),
        onChangeCanInitStat: evt => dispatch(actions.changeCanInitStat(evt.target.value)),
        onChangeCanIvInotrop: evt => dispatch(actions.changeCanIvInotrop(evt.target.value)),
        onChangeCanLastActStatDt: evt => dispatch(actions.changeCanLastActStatDt(evt.target.value)),
        onChangeCanLastAlbumin: evt => dispatch(actions.changeCanLastAlbumin(evt.target.value)),
        onChangeCanLastAscites: evt => dispatch(actions.changeCanLastAscites(evt.target.value)),
        onChangeCanLastBili: evt => dispatch(actions.changeCanLastBili(evt.target.value)),
        onChangeCanLastDialPriorWeek: evt => dispatch(actions.changeCanLastDialPriorWeek(evt.target.value)),
        onChangeCanLastEnceph: evt => dispatch(actions.changeCanLastEnceph(evt.target.value)),
        onChangeCanLastInactStatDt: evt => dispatch(actions.changeCanLastInactStatDt(evt.target.value)),
        onChangeCanLastInr: evt => dispatch(actions.changeCanLastInr(evt.target.value)),
        onChangeCanLastSerumCreat: evt => dispatch(actions.changeCanLastSerumCreat(evt.target.value)),
        onChangeCanLastSerumSodium: evt => dispatch(actions.changeCanLastSerumSodium(evt.target.value)),
        onChangeCanLastSrtrLabMeld: evt => dispatch(actions.changeCanLastSrtrLabMeld(evt.target.value)),
        onChangeCanLastSrtrLabMeldTy: evt => dispatch(actions.changeCanLastSrtrLabMeldTy(evt.target.value)),
        onChangeCanLastStat: evt => dispatch(actions.changeCanLastStat(evt.target.value)),
        onChangeCanLifeSupport: evt => dispatch(actions.changeCanLifeSupport(evt.target.value)),
        onChangeCanLifeSupportOther: evt => dispatch(actions.changeCanLifeSupportOther(evt.target.value)),
        onChangeCanListingCtrId: evt => dispatch(actions.changeCanListingCtrId(evt.target.value)),
        onChangeCanListingDt: evt => dispatch(actions.changeCanListingDt(evt.target.value)),
        onChangeCanListingOpoId: evt => dispatch(actions.changeCanListingOpoId(evt.target.value)),
        onChangeCanLivingDonTx: evt => dispatch(actions.changeCanLivingDonTx(evt.target.value)),
        onChangeCanLiDysfunctn: evt => dispatch(actions.changeCanLiDysfunctn(evt.target.value)),
        onChangeCanLossVascAccess: evt => dispatch(actions.changeCanLossVascAccess(evt.target.value)),
        onChangeCanMalig: evt => dispatch(actions.changeCanMalig(evt.target.value)),
        onChangeCanMaligTy: evt => dispatch(actions.changeCanMaligTy(evt.target.value)),
        onChangeCanMaligTyBreast: evt => dispatch(actions.changeCanMaligTyBreast(evt.target.value)),
        onChangeCanMaligTyCnsTumor: evt => dispatch(actions.changeCanMaligTyCnsTumor(evt.target.value)),
        onChangeCanMaligTyGenitourinary: evt => dispatch(actions.changeCanMaligTyGenitourinary(evt.target.value)),
        onChangeCanMaligTyHepblast: evt => dispatch(actions.changeCanMaligTyHepblast(evt.target.value)),
        onChangeCanMaligTyHepcarcinoma: evt => dispatch(actions.changeCanMaligTyHepcarcinoma(evt.target.value)),
        onChangeCanMaligTyLeukLymph: evt => dispatch(actions.changeCanMaligTyLeukLymph(evt.target.value)),
        onChangeCanMaligTyLiver: evt => dispatch(actions.changeCanMaligTyLiver(evt.target.value)),
        onChangeCanMaligTyLu: evt => dispatch(actions.changeCanMaligTyLu(evt.target.value)),
        onChangeCanMaligTyOther: evt => dispatch(actions.changeCanMaligTyOther(evt.target.value)),
        onChangeCanMaligTySkinMel: evt => dispatch(actions.changeCanMaligTySkinMel(evt.target.value)),
        onChangeCanMaligTySkinNonMel: evt => dispatch(actions.changeCanMaligTySkinNonMel(evt.target.value)),
        onChangeCanMaligTyThroat: evt => dispatch(actions.changeCanMaligTyThroat(evt.target.value)),
        onChangeCanMaligTyThyroid: evt => dispatch(actions.changeCanMaligTyThyroid(evt.target.value)),
        onChangeCanMaligTyUnk: evt => dispatch(actions.changeCanMaligTyUnk(evt.target.value)),
        onChangeCanMaxAge: evt => dispatch(actions.changeCanMaxAge(evt.target.value)),
        onChangeCanMaxMile: evt => dispatch(actions.changeCanMaxMile(evt.target.value)),
        onChangeCanMaxWgt: evt => dispatch(actions.changeCanMaxWgt(evt.target.value)),
        onChangeCanMedCond: evt => dispatch(actions.changeCanMedCond(evt.target.value)),
        onChangeCanMinAge: evt => dispatch(actions.changeCanMinAge(evt.target.value)),
        onChangeCanMinWgt: evt => dispatch(actions.changeCanMinWgt(evt.target.value)),
        onChangeCanMostRecentCreat: evt => dispatch(actions.changeCanMostRecentCreat(evt.target.value)),
        onChangeCanMostRecentHgtCm: evt => dispatch(actions.changeCanMostRecentHgtCm(evt.target.value)),
        onChangeCanMostRecentWgtKg: evt => dispatch(actions.changeCanMostRecentWgtKg(evt.target.value)),
        onChangeCanMotorDevelop: evt => dispatch(actions.changeCanMotorDevelop(evt.target.value)),
        onChangeCanMuscleWasting: evt => dispatch(actions.changeCanMuscleWasting(evt.target.value)),
        onChangeCanNeoplasm: evt => dispatch(actions.changeCanNeoplasm(evt.target.value)),
        onChangeCanNewPrevPiTx: evt => dispatch(actions.changeCanNewPrevPiTx(evt.target.value)),
        onChangeCanNonReconGi: evt => dispatch(actions.changeCanNonReconGi(evt.target.value)),
        onChangeCanPepticUlcer: evt => dispatch(actions.changeCanPepticUlcer(evt.target.value)),
        onChangeCanPeriphVasc: evt => dispatch(actions.changeCanPeriphVasc(evt.target.value)),
        onChangeCanPermState: evt => dispatch(actions.changeCanPermState(evt.target.value)),
        onChangeCanPge: evt => dispatch(actions.changeCanPge(evt.target.value)),
        onChangeCanPhyscCapacity: evt => dispatch(actions.changeCanPhyscCapacity(evt.target.value)),
        onChangeCanPortalVein: evt => dispatch(actions.changeCanPortalVein(evt.target.value)),
        onChangeCanPrelimXmatchRequest: evt => dispatch(actions.changeCanPrelimXmatchRequest(evt.target.value)),
        onChangeCanPrevAbdomSurg: evt => dispatch(actions.changeCanPrevAbdomSurg(evt.target.value)),
        onChangeCanPrevBoneMarrowDt: evt => dispatch(actions.changeCanPrevBoneMarrowDt(evt.target.value)),
        onChangeCanPrevBoneMarrowTx: evt => dispatch(actions.changeCanPrevBoneMarrowTx(evt.target.value)),
        onChangeCanPrevHl: evt => dispatch(actions.changeCanPrevHl(evt.target.value)),
        onChangeCanPrevHr: evt => dispatch(actions.changeCanPrevHr(evt.target.value)),
        onChangeCanPrevIn: evt => dispatch(actions.changeCanPrevIn(evt.target.value)),
        onChangeCanPrevKi: evt => dispatch(actions.changeCanPrevKi(evt.target.value)),
        onChangeCanPrevKp: evt => dispatch(actions.changeCanPrevKp(evt.target.value)),
        onChangeCanPrevLi: evt => dispatch(actions.changeCanPrevLi(evt.target.value)),
        onChangeCanPrevLu: evt => dispatch(actions.changeCanPrevLu(evt.target.value)),
        onChangeCanPrevPa: evt => dispatch(actions.changeCanPrevPa(evt.target.value)),
        onChangeCanPrevTx: evt => dispatch(actions.changeCanPrevTx(evt.target.value)),
        onChangeCanPrevTxfus: evt => dispatch(actions.changeCanPrevTxfus(evt.target.value)),
        onChangeCanPrimaryPay: evt => dispatch(actions.changeCanPrimaryPay(evt.target.value)),
        onChangeCanPulmEmbol: evt => dispatch(actions.changeCanPulmEmbol(evt.target.value)),
        onChangeCanRace: evt => dispatch(actions.changeCanRace(evt.target.value)),
        onChangeCanRaceSrtr: evt => dispatch(actions.changeCanRaceSrtr(evt.target.value)),
        onChangeCanRecurSepsis: evt => dispatch(actions.changeCanRecurSepsis(evt.target.value)),
        onChangeCanRemCd: evt => dispatch(actions.changeCanRemCd(evt.target.value)),
        onChangeCanRemCod: evt => dispatch(actions.changeCanRemCod(evt.target.value)),
        onChangeCanRemDt: evt => dispatch(actions.changeCanRemDt(evt.target.value)),
        onChangeCanSecondaryPay: evt => dispatch(actions.changeCanSecondaryPay(evt.target.value)),
        onChangeCanSource: evt => dispatch(actions.changeCanSource(evt.target.value)),
        onChangeCanStatExtendFlg: evt => dispatch(actions.changeCanStatExtendFlg(evt.target.value)),
        onChangeCanTiebreakerDt: evt => dispatch(actions.changeCanTiebreakerDt(evt.target.value)),
        onChangeCanTipss: evt => dispatch(actions.changeCanTipss(evt.target.value)),
        onChangeCanTotAlbumin: evt => dispatch(actions.changeCanTotAlbumin(evt.target.value)),
        onChangeCanTotBili: evt => dispatch(actions.changeCanTotBili(evt.target.value)),
        onChangeCanTrrExists: evt => dispatch(actions.changeCanTrrExists(evt.target.value)),
        onChangeCanTxCountry: evt => dispatch(actions.changeCanTxCountry(evt.target.value)),
        onChangeCanVadTah: evt => dispatch(actions.changeCanVadTah(evt.target.value)),
        onChangeCanVaricealBleeding: evt => dispatch(actions.changeCanVaricealBleeding(evt.target.value)),
        onChangeCanVentilator: evt => dispatch(actions.changeCanVentilator(evt.target.value)),
        onChangeCanWgtKg: evt => dispatch(actions.changeCanWgtKg(evt.target.value)),
        onChangeCanWorkIncome: evt => dispatch(actions.changeCanWorkIncome(evt.target.value)),
        onChangeCanWorkNoStat: evt => dispatch(actions.changeCanWorkNoStat(evt.target.value)),
        onChangeCanWorkYesStat: evt => dispatch(actions.changeCanWorkYesStat(evt.target.value)),
        onChangeCanYearEntryUs: evt => dispatch(actions.changeCanYearEntryUs(evt.target.value)),
        onChangeDonorId: evt => dispatch(actions.changeDonorId(evt.target.value)),
        onChangeDonTy: evt => dispatch(actions.changeDonTy(evt.target.value)),
        onChangeOrgAr: evt => dispatch(actions.changeOrgAr(evt.target.value)),
        onChangePersId: evt => dispatch(actions.changePersId(evt.target.value)),
        onChangePersNexttx: evt => dispatch(actions.changePersNexttx(evt.target.value)),
        onChangePersNexttxTrrId: evt => dispatch(actions.changePersNexttxTrrId(evt.target.value)),
        onChangePersOptnDeathDt: evt => dispatch(actions.changePersOptnDeathDt(evt.target.value)),
        onChangePersRestrictDeathDt: evt => dispatch(actions.changePersRestrictDeathDt(evt.target.value)),
        onChangePersRestrictDeathVrfy: evt => dispatch(actions.changePersRestrictDeathVrfy(evt.target.value)),
        onChangePersSsaDeathDt: evt => dispatch(actions.changePersSsaDeathDt(evt.target.value)),
        onChangePxId: evt => dispatch(actions.changePxId(evt.target.value)),
        onChangeRecTxDt: evt => dispatch(actions.changeRecTxDt(evt.target.value)),
        onChangeRecTxProcedureTy: evt => dispatch(actions.changeRecTxProcedureTy(evt.target.value)),
        onChangeWlOrg: evt => dispatch(actions.changeWlOrg(evt.target.value)),
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