/*
 *
 * SearchBox reducer
 *
 */

import { fromJS } from "immutable";
import {
  SET_TOKEN,
  SET_PXID,
  SET_US_STATE,
  SET_BLOOD_GROUP,
  SET_DONOR_OR_CANDIDATE,
  SET_SEARCH_RESULTS,
} from "./constants";

export const initialState = fromJS({
  token: '',
  pxid: '',
  bloodGroup: '',
  usState: '',
  donorOrCandidate: '',
  searchResults: {},
});

function searchBoxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return state.set('token', action.token);
    case SET_PXID:
      return state.set('pxid', action.pxid);
    case SET_US_STATE:
      return state.set('usState', action.usState);
    case SET_BLOOD_GROUP:
      return state.set('bloodGroup', action.bloodGroup);
    case SET_DONOR_OR_CANDIDATE:
      return state.set('donorOrCandidate', action.donorOrCandidate);
    case SET_SEARCH_RESULTS:
      return state.set('searchResults', action.searchResults);
    default:
      return state;
  }
}

export default searchBoxReducer;
