import { takeLatest, call, put, select } from 'redux-saga/effects';
import makeSelectAuth from '../../authSelector';
import { push } from 'connected-react-router';
import {CHECK_INFO} from './constants';
import { dumpFormToState } from '../RegForm/actions';
const axios = require('axios');


export function* checkInfo(){
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

  }
  catch(err){
    alert("Client Must fill out Information");
    yield put(push('/client/information'));
  }
}
// Individual exports for testing
export default function* clientHomeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CHECK_INFO,checkInfo)
}
