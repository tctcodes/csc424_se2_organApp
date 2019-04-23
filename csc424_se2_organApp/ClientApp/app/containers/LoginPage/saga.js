const axios = require('axios');
import {makeSelectEmail,makeSelectPassword, makeSelectRole} from './selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';
import {setToken} from './actions';

/**
 * Github repos request/response handler
 */
export function* login() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  
  const body = {
    email,
    password,
  }
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
    const response = yield axios.post("/api/User/AuthUser",body,headers);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      yield put(setToken(response.data.token));
    }
    console.log(localStorage.getItem('token'));
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
 yield takeLatest(LOGIN,login)
}
