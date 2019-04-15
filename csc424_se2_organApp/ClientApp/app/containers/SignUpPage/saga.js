const axios = require('axios');
import { takeLatest, call, put, select, } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { makeSelectPassword, makeSelectEmail, makeSelectRole } from './selectors';
import { ADD_USER_TO_DB } from './constants';

export function* addUser() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const role = yield select(makeSelectRole());
  console.log(email, password, role);
  try {
    let body = {
      email,password,role
    }
    let headers = {
      'Content-Type': 'application/json',
    }
    let res = yield axios.post("http://localhost:5000/api/User/NewUser",body,headers);
    console.log(res);
    yield put(push('/login'));
  } catch (err) {
    alert(err.response.data.error);
  }
}
// Individual exports for testing
export default function* signUpPageSaga() {
  yield takeLatest(ADD_USER_TO_DB, addUser);
}
