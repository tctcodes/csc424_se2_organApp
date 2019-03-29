/*
 *
 * SearchBox reducer
 *
 */

import { fromJS } from "immutable";
import { DEFAULT_ACTION, SET_TOKEN } from "./constants";

export const initialState = fromJS({
  token: '',
});

function searchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TOKEN:
      return state.set('token', action.token);
    default:
      return state;
  }
}

export default searchBoxReducer;
