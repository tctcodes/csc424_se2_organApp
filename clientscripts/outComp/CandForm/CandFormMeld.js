import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as select from './selectors';
import * as action from './actions';
import reducer from './reducer';
import saga from './saga';

export class CandFormMeld extends React.Component {
	render(){ 
		return(
			<div className="d-flex flex-wrap bg-light">
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
					<input className="form-control" type="text" value={this.props.canInitSrtrLabMeldTy} onChange={this.props.onChangeCanInitSrtrLabMeldTy} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LAST ALBUMIN</label>
					<label className="text-secondary" >Candidate Last Albumin (used for MELD):</label>
					<input className="form-control" type="number" value={this.props.canLastAlbumin} onChange={this.props.onChangeCanLastAlbumin} />
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
					<input className="form-control" type="number" value={this.props.canLastBili} onChange={this.props.onChangeCanLastBili} />
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
					<input className="form-control" type="number" value={this.props.canLastInr} onChange={this.props.onChangeCanLastInr} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LAST SERUM CREAT</label>
					<label className="text-secondary" >Candidate Last Serum Creatinine mg/dl (used for MELD):</label>
					<input className="form-control" type="number" value={this.props.canLastSerumCreat} onChange={this.props.onChangeCanLastSerumCreat} />
				</div>
				<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">
					<label className="font-weight-bold" >CAN LAST SERUM SODIUM</label>
					<label className="text-secondary" >Candidate Last Serum Sodium (used for MELD):</label>
					<input className="form-control" type="number" value={this.props.canLastSerumSodium} onChange={this.props.onChangeCanLastSerumSodium} />
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
					<input className="form-control" type="text" value={this.props.canLastSrtrLabMeldTy} onChange={this.props.onChangeCanLastSrtrLabMeldTy} />
				</div>
			</div>
		)
	}
}
const mapStateToProps = createStructuredSelector({
	canInitSrtrLabMeld: select.makeSelectCanInitSrtrLabMeld(),
	canInitSrtrLabMeldTy: select.makeSelectCanInitSrtrLabMeldTy(),
	canLastAlbumin: select.makeSelectCanLastAlbumin(),
	canLastAscites: select.makeSelectCanLastAscites(),
	canLastBili: select.makeSelectCanLastBili(),
	canLastEnceph: select.makeSelectCanLastEnceph(),
	canLastInr: select.makeSelectCanLastInr(),
	canLastSerumCreat: select.makeSelectCanLastSerumCreat(),
	canLastSerumSodium: select.makeSelectCanLastSerumSodium(),
	canLastSrtrLabMeld: select.makeSelectCanLastSrtrLabMeld(),
	canLastSrtrLabMeldTy: select.makeSelectCanLastSrtrLabMeldTy(),
});

function mapDispatchToProps(dispatch) {
	return {
		onChangeCanInitSrtrLabMeld: evt => dispatch(action.changeCanInitSrtrLabMeld(evt.target.value)),
		onChangeCanInitSrtrLabMeldTy: evt => dispatch(action.changeCanInitSrtrLabMeldTy(evt.target.value)),
		onChangeCanLastAlbumin: evt => dispatch(action.changeCanLastAlbumin(evt.target.value)),
		onChangeCanLastAscites: evt => dispatch(action.changeCanLastAscites(evt.target.value)),
		onChangeCanLastBili: evt => dispatch(action.changeCanLastBili(evt.target.value)),
		onChangeCanLastEnceph: evt => dispatch(action.changeCanLastEnceph(evt.target.value)),
		onChangeCanLastInr: evt => dispatch(action.changeCanLastInr(evt.target.value)),
		onChangeCanLastSerumCreat: evt => dispatch(action.changeCanLastSerumCreat(evt.target.value)),
		onChangeCanLastSerumSodium: evt => dispatch(action.changeCanLastSerumSodium(evt.target.value)),
		onChangeCanLastSrtrLabMeld: evt => dispatch(action.changeCanLastSrtrLabMeld(evt.target.value)),
		onChangeCanLastSrtrLabMeldTy: evt => dispatch(action.changeCanLastSrtrLabMeldTy(evt.target.value)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'CandFormMeld', reducer });
const withSaga = injectSaga({ key: 'CandFormMeld', saga });
export default compose( withReducer, withSaga, withConnect)(CandFormMeld);
