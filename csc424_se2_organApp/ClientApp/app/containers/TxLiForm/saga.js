const axios = require('axios');
import { put, takeLatest } from 'redux-saga/effects';
import { GET_RECORD_TRR_ID, SAVE_RECORD_TXLI } from './constants';
import { setRecordTxLi } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRecordTrrId(action) {  
  const body = {
    TrrId:action.id
  }
  let headers = {'Content-Type': 'application/json'}
  try{
    const response = yield axios.post("/api/TxLi/GetRecordTrrId",body,headers);
    
    yield put(setRecordTxLi(response.data))
   
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
    const response = yield axios.post("/api/TxLi/UpdateRecord",body,headers);
    
    console.log(response);
   
  }
  catch(err){
    console.log(err)
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* TxLiFormSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
 yield takeLatest(GET_RECORD_TRR_ID,getRecordTrrId);
 yield takeLatest(SAVE_RECORD_TXLI,updateRecord);
}
