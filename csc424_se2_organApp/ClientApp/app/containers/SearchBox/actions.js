/*
 *
 * SearchBox actions
 *
 */

import {
  SET_TOKEN,
  SET_PID,
  SET_US_STATE,
  SET_BLOOD_GROUP,
  SET_DONOR_OR_CANDIDATE,
} from "./constants";

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function setPID(pid) {
  return {
    type: SET_PID,
    pid,
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