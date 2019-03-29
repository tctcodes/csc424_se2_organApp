/*
 *
 * AuthWrapper reducer
 *
 */

import { fromJS } from "immutable";
import { SET_TOKEN } from "./constants";

export const initialState = fromJS({
  token: '',
  isAuth: false,
});

function authWrapperReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return state.set('token',action.token);
    default:
      return state;
  }
}

export default authWrapperReducer;
