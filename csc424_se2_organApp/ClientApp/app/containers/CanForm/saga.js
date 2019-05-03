const axios = require('axios');
import { put, takeLatest } from 'redux-saga/effects';
import { GET_RECORD_PX_ID, SAVE_RECORD } from './constants';
import { setRecord } from './actions';
import { makeSelectState } from './selectors'
/**
 * Github repos request/response handler
 */
export function* getRecordPxId(action) {
  //const PersID = yield select(makeSelectPersId());

  //const PxId = yield "1232752"
  
  const body = {
    PxId:action.id
  }
  let headers = {'Content-Type': 'application/json'}
  try{
    const response = yield axios.post("/api/Cand/GetRecordPxId",body,headers);
    
    yield put(setRecord(response.data))
   
  }
  catch(err){
    console.log(err)
  }
}

export function* updateRecord(action){
  let headers = {'Content-Type': 'application/json'};
  const body = action.state;
  console.log("update Record saga")
  try{
    const response = yield axios.post("/api/Cand/UpdateRecord",body,headers);
    
    console.log(response);
   
  }
  catch(err){
    console.log(err)
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* CanFormSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
 yield takeLatest(GET_RECORD_PX_ID,getRecordPxId);
 yield takeLatest(SAVE_RECORD,updateRecord);
}
