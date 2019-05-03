/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from "immutable";
import { CHANGE_PASSWORD,CHANGE_EMAIL,CLEAR_CREDENTIALS,SET_LOADING } from "./constants";

export const initialState = fromJS({
  email: '',
  password: '',
  loading:false
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case CLEAR_CREDENTIALS:
      return state.merge(initialState.toJS());
      case SET_LOADING:
      return state.set('loading',action.bool);
    default:
      return state;
  }
}

export default loginPageReducer;
