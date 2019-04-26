const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import makeSelectRegForm from './selectors';
import { UPLOAD_FORM } from './constants';

// Individual exports for testing
export function* upload(){
  let data = yield select(makeSelectRegForm());
  if (isNaN(data.CanYearEntryUs)){
    data.CanYearEntryUs = 0;
  }
  console.log(data);
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
   let res = yield axios.post("http://localhost:5000/api/Info/UploadInfo",data,headers)
    console.log(res);
  }
  catch(err){
    console.log(err)
  }
}


export default function* regFormSaga() {
  

  yield takeLatest(UPLOAD_FORM,upload);
}
