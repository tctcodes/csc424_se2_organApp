/*
 *
 * RegForm reducer
 *
 */

import { fromJS } from "immutable";
import { DUMP_FORM_TO_STATE, SET_LOADING } from "./constants";

export const initialState = fromJS({
  loading: false,
  record:{}
});

function regFormReducer(state = initialState, action) {
  switch (action.type) {
    case DUMP_FORM_TO_STATE:
      return state.set('record',action.state);
    case SET_LOADING:
      return state.set('loading',action.bool);
    default:
      return state;
  }
}

export default regFormReducer;
