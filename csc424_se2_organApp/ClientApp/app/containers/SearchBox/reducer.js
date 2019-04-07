/*
 *
 * SearchBox reducer
 *
 */

import { fromJS } from "immutable";
import { SET_TOKEN } from "./constants";

export const initialState = fromJS({
  token: '',
});

function searchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      console.log(action.token);
      return state.set('token', action.token);
    default:
      return state;
  }
}

export default searchBoxReducer;
