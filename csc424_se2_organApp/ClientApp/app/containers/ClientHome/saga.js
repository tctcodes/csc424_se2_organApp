import { takeLatest, call, put, select } from 'redux-saga/effects';
import decode from 'jwt-decode';
import {makeSelectEmail} from '../LoginPage/selectors';
import { push } from 'connected-react-router';
import {CHECK_INFO} from './constants';


export function* checkInfo(){
  let email = yield select(makeSelectEmail());
  console.log("EMAIL",email)
  let body ={email};
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
    let response = axios.post("http://localhost:5000/api/Info/HasInfo",body,headers);

  }
  catch(err){
    yield put(push('/client/information'));
    alert("Client Must fill out Information");
  }
}
// Individual exports for testing
export default function* clientHomeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CHECK_INFO,checkInfo)
}
