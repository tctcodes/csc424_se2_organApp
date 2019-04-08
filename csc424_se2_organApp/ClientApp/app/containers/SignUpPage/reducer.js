/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_EMAIL, SET_PASSWORD, SET_ROLE } from './constants';

export const initialState = fromJS({
  email: '',
  password: '',
  role: '',
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state.set('email', action.email);
    case SET_PASSWORD:
      return state.set('password', action.password);
    case SET_ROLE:
      return state.set('role', action.role);
    default:
      return state;
  }
}

export default signUpPageReducer;
