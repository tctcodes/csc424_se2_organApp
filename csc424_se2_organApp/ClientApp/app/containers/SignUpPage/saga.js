const axios = require('axios');
import { takeLatest, call, put, select, } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
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
    axios.post("http://localhost:5000/api/User/NewUser",body,headers)
    .then(res => console.log(res))
    .then(yield put(push('/login')))
    .catch(err=>alert(err.response.data.error));
  } catch (err) {
    alert(err);
  }
}
// Individual exports for testing
export default function* signUpPageSaga() {
  yield takeLatest(ADD_USER_TO_DB, addUser);
}
