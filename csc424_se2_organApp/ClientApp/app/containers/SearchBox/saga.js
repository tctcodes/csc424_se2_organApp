const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectPID } from './selectors';
import { setSearchResults } from './actions';
import { SUBMIT_SEARCH } from './constants';

export function* searchPID() {
  console.log('inside searchPID saga');
  const url = 'http://localhost:5000/api/Cand/SearchRecordPxIdFirstX'
  const PxId = yield select(makeSelectPID());

  const body = {
    PxId,
    number: 10,
  };

  let headers = {
    'Content-Type': 'application/json',
  };

  try {
    console.log('inside try');
    const response = yield axios.post(url, body, headers);
    // console.log(response);
    if (response.status === 201) {
      // yield put(setSearchResults(response.data));
      console.log('request success');
      console.log(response.data);
    }
  } catch(err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* searchBoxSaga() {
  yield takeLatest(SUBMIT_SEARCH, searchPID);
  // See example in containers/HomePage/saga.js
}
