const axios = require('axios');
import { takeLatest, call, put, select } from 'redux-saga/effects';
import makeSelectRegForm from './selectors';
import makeSelectAuth from '../../authSelector';
import { UPLOAD_FORM,RETRIEVE_DATA } from './constants';
import { dumpFormToState, setLoading } from '../RegForm/actions';

// Individual exports for testing
export function* upload(){
  let data = yield select(makeSelectRegForm());
  if (isNaN(data.canYearEntryUs)){
    yield data.canYearEntryUs = 0;
  }
  data.address=`${JSON.stringify(data.address)}`;
  data.racesSelected=`${JSON.stringify(data.racesSelected)}`;
  console.log(data);
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
   let res = yield axios.post("/api/Info/UploadInfo",data,headers)
    console.log(res);
  }
  catch(err){
    console.log(err)
  }
}

export function* retrieveData(){
  yield put(setLoading(true));
  let auth = yield select(makeSelectAuth());
  let email = auth.user.name
  let body ={email};
  let data;
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
    let response = yield axios.post("/api/Info/HasInfo",body,headers);
    data = response.data;
    delete data.persId;
    delete data.canWorkNoStat;
    delete data.canWorkYesStat;
    delete data.emailNavigation;
    if(data.canYearEntryUs == 0);
      data.canYearEntryUs = 'N/A';
    data ={
      ...data,
      racesSelected:JSON.parse(data.racesSelected),
      address: JSON.parse(data.address)
    }
    yield put(dumpFormToState(data));

  }catch(err){

  }finally{
    yield put(setLoading(false));
  }
}


export default function* regFormSaga() {
  

  yield takeLatest(UPLOAD_FORM,upload);
  yield takeLatest(RETRIEVE_DATA,retrieveData);
}
