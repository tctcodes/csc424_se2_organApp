const axios = require('axios');
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_RECORD_PERS_ID } from './constants';
import { makeSelectPersId } from './selectors';
import {setState} from './actions';
/**
 * Github repos request/response handler
 */
export function* getRecordPersId() {
  //const PersID = yield select(makeSelectPersId());
  const PxId = yield "1230200"
  const body = {
    PxId
  }
  let headers = {'Content-Type': 'application/json'}
  try{
    const response = yield axios.post("http://localhost:5000/api/Cand/GetRecordPersId",body,headers);
    
    yield put(setState(response.data))
    console.log(response.data);
  }
  catch(err){
    console.log(err)
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* loginPageSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
 yield takeLatest(GET_RECORD_PERS_ID,getRecordPersId)
}
