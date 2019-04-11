/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from "immutable";
import { CHANGE_EMAIL } from "./constants";
import { CHANGE_PASSWORD } from "./constants";
import { CHANGE_ROLE } from "./constants";
import { SET_TOKEN } from "./constants";

export const initialState = fromJS({
  email: '',
  password: '',
  token: '',
  role: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case CHANGE_ROLE:
      return state.set('role', action.role);
    case SET_TOKEN:
      return state.set('token', action.token);
    default:
      return state;
  }
}

export default loginPageReducer;
