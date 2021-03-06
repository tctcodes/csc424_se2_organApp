/*
 *
 * SearchBox actions
 *
 */

import {
  SET_TOKEN,
  SET_PXID,
  SET_PX_STATE,
  SET_BLOOD_GROUP,
  SET_DONOR_OR_CANDIDATE,
  SET_SEARCH_RESULTS,
  SUBMIT_SEARCH,
  DOWNLOAD_RESULTS,
} from "./constants";

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

export function setPXState(pxState) {
  return {
    type: SET_PX_STATE,
    pxState,
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
  return {
    type: SUBMIT_SEARCH,
  };
}

export function downloadResult(filetype){
  return{
    type: DOWNLOAD_RESULTS,
    filetype

  }
}