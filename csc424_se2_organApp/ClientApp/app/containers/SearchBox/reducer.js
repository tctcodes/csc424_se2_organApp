/*
 *
 * SearchBox reducer
 *
 */

import { fromJS } from "immutable";
import {
  SET_TOKEN,
  SET_PID,
  SET_US_STATE,
  SET_BLOOD_GROUP,
  SET_DONOR_OR_CANDIDATE,
} from "./constants";

export const initialState = fromJS({
  token: '',
  pid: '',
  bloodGroup: '',
  usState: '',
  donorOrCandidate: '',
});

function searchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return state.set('token', action.token);
    case SET_PID:
      return state.set('pid', action.pid);
    case SET_US_STATE:
      return state.set('usState');
    case SET_BLOOD_GROUP:
      return state.set('bloodGroup');
    case SET_DONOR_OR_CANDIDATE:
      return state.set('donorOrCandidate', () => {
        console.log(state);
      });
    default:
      return state;
  }
}

export default searchBoxReducer;
