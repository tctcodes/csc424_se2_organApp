const axios = require('axios');
import {makeSelectEmail,makeSelectPassword} from './selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';

/**
 * Github repos request/response handler
 */
export function* login() {
  const user = yield select(makeSelectEmail());
  const pass = yield select(makeSelectPassword());
  const body = {
    user,
    pass
  }
  let headers = {
    'Content-Type': 'application/json',
  }
  axios.post("http://localhost:5000/api/User/AuthUser",body,headers)
  .then(res => console.log(res))
  
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
