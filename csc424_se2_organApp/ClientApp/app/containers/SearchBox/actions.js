/*
 *
 * SearchBox actions
 *
 */

import {
  SET_TOKEN,
  SET_PXID,
  SET_US_STATE,
  SET_BLOOD_GROUP,
  SET_DONOR_OR_CANDIDATE,
  SET_SEARCH_RESULTS,
  SUBMIT_SEARCH,
} from "./constants";

/**
 * This action gives the token to the SearchBox state.
 *
 * @param   {String}  token  The authentication token for hitting the api.
 *
 * @return  {[type]}         Gives the token to the setToken reducer.
 */
export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function setPXID(pxid) {
  return {
    type: SET_PXID,
    pxid,
  };
}

export function setUSState(usState) {
  return {
    type: SET_US_STATE,
    usState,
  };
}

export function setBloodGroup(bloodGroup) {
  return {
    type: SET_BLOOD_GROUP,
    bloodGroup,
  };
}

export function setDonorOrCandidate(donorOrCandidate) {
  return {
    type: SET_DONOR_OR_CANDIDATE,
    donorOrCandidate,
  };
}

export function setSearchResults(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults,
  };
}

export function submitSearch() {
  console.log('SUBMITTING SEARCH!');
  return {
    type: SUBMIT_SEARCH,
  };
}