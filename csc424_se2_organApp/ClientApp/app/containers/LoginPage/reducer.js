/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from "immutable";
import { CHANGE_EMAIL } from "./constants";
import { CHANGE_PASSWORD } from "./constants";

export const initialState = fromJS({
  email: '',
  password: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
}

export default loginPageReducer;
