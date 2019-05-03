const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {push} from 'connected-react-router'
import { makeSelectPXID } from './selectors';
import { setSearchResults } from './actions';
import { SUBMIT_SEARCH } from './constants';

export function* searchPXIDList() {
  console.log('inside searchPXIDList saga');
  const url = 'http://localhost:5000/api/Cand/SearchRecordPxIdFirstX';
  const PxId = yield select(makeSelectPXID());

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
      yield put(push(`/staff/canform/:${PxId}`));
      //yield put(setSearchResults(response.data));
    }
  } catch(err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* searchBoxSagaList() {
  // yield takeLatest(SUBMIT_SEARCH, searchPXID);
  yield takeLatest(SUBMIT_SEARCH, getPXIDRecord);
  // See example in containers/HomePage/saga.js
}
