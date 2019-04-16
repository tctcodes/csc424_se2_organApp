/*
 *
 * RegForm reducer
 *
 */

import { fromJS } from "immutable";
import { DUMP_FORM_TO_STATE } from "./constants";

export const initialState = fromJS({});

function regFormReducer(state = initialState, action) {
  switch (action.type) {
    case DUMP_FORM_TO_STATE:
      return state.merge(action.state);
    default:
      return state;
  }
}

export default regFormReducer;
