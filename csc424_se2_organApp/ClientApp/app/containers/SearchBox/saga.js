const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectPXID, makeSelectBloodGroup, makeSelectDonorOrCandidate, makeSelectPXState } from './selectors';
import {push} from 'connected-react-router'
import { setSearchResults } from './actions';
import { SUBMIT_SEARCH, DOWNLOAD_RESULTS } from './constants';
import downloadJson from '../../utils/downloadJson';

export function* refinedSearch() {
  console.log('inside refined search saga');
  const url = '/api/Cand/RefinedSearch';
  const PxId = yield select(makeSelectPXID());
  const BloodGroup = yield select(makeSelectBloodGroup());
  const PxState = yield select(makeSelectPXState());
  const DonorOrCandidate = yield select(makeSelectDonorOrCandidate());

  const body = {
    PxId,
    BloodGroup,
    PxState,
    DonorOrCandidate,
    num: 20,
  };

  console.log(body);

  let headers = {
    'Content-Type': 'applications/json',
  };

  console.log(headers);

  try {
    console.log('inside refined search try');
    const response = yield axios.post(url, body, headers);
    if (response.status === 201) {
      yield put(setSearchResults(response.data));
      console.log('request success');
      console.log(response);
    }
  } catch(err) {
    console.log('request error')
    console.log(err)
  }
}

export function* getPXIDRecord() {
  console.log('inside searchPXIDInfo saga');
  const url = '/api/Cand/GetRecordPxId';
  const PxId = yield select(makeSelectPXID());
  const body = {
    PxId,
  };

  let headers = {
    'Content-Type': 'applications/json'
  };

  try {
    const response = yield axios.post(url, body, headers);
    if (response.status === 201) {
      console.log(response.data);
      //yield put(push(`/staff/canform/:${PxId}`));
      yield put(setSearchResults(response.data));
    }
  } catch(err) {
    console.log(err);
  }
}

export function* download(){

  const PxId=yield select(makeSelectPXID());
  let arr = []
  arr.push(PxId);
  let body = {
    PxId: [...arr]
  }
  try {
    const response = yield axios.post('/api/Cand/DownloadRecord',body)
    downloadJson(response,`${PxId}`);
  }
  catch(err){
    console.log(err);
  }
}
// Individual exports for testing
export default function* searchBoxSagaList() {
  // yield takeLatest(SUBMIT_SEARCH, getPXIDRecord);
  yield takeLatest(SUBMIT_SEARCH, refinedSearch);
  // yield takeLatest(SUBMIT_SEARCH, searchPXID);
  // yield takeLatest(SUBMIT_SEARCH, getPXIDRecord);
  yield takeLatest(DOWNLOAD_RESULTS, download);
  // See example in containers/HomePage/saga.js
}
