const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectPXID, makeSelectBloodGroup, makeSelectDonorOrCandidate, makeSelectPXState } from './selectors';
import { setSearchResults } from './actions';
import { SUBMIT_SEARCH } from './constants';

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
    console.log(response);
    if (response.status == 201) {
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
      yield put(setSearchResults(response.data));
    }
  } catch(err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* searchBoxSagaList() {
  // yield takeLatest(SUBMIT_SEARCH, getPXIDRecord);
  yield takeLatest(SUBMIT_SEARCH, refinedSearch);
  // See example in containers/HomePage/saga.js
}
