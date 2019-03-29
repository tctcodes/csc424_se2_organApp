const axios = require('axios');
import {makeSelectEmail,makeSelectPassword} from './selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';
import {setToken} from '../SearchBox/actions'
import { push } from 'connected-react-router';

/**
 * Github repos request/response handler
 */
export function* login() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const body = {
    email,
    password
  }
  let headers = {
    'Content-Type': 'application/json',
  }
  try{
    const response = yield axios.post("http://localhost:5000/api/User/AuthUser",body,headers);
    yield put(setToken(response.data.token));
    yield put(push('/searchbox'));
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
