/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_EMAIL, SET_PASSWORD } from './constants';

export const initialState = fromJS({
  email: '',
  password: '',
});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state.set('email', action.email);
    case SET_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
}

export default signUpPageReducer;
