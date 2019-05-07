const axios = require('axios');
import { put, takeLatest } from 'redux-saga/effects';
import { GET_RECORD_DONOR_DEC_ID, SAVE_RECORD_DON_DEC } from './constants';
import { setRecordDonDec } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRecordDonorId(action) {  
  const body = {
    DonorId:action.id
  }
  let headers = {'Content-Type': 'application/json'}
  try{
    const response = yield axios.post("/api/DonDec/GetRecordDonorId",body,headers);
    
    yield put(setRecordDonDec(response.data))
   
  }
  catch(err){
    console.log(err)
  }
}

export function* updateRecord(action){
  let headers = {'Content-Type': 'application/json'};
  const body = action.record;
  console.log("update Record saga")
  try{
    const response = yield axios.post("/api/DonDec/UpdateRecord",body,headers);
    
    console.log(response);
   
  }
  catch(err){
    console.log(err)
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* DonDecFormSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
 yield takeLatest(GET_RECORD_DONOR_DEC_ID,getRecordDonorId);
 yield takeLatest(SAVE_RECORD_DON_DEC,updateRecord);
}
