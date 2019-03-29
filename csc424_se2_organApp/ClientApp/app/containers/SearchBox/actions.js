/*
 *
 * SearchBox actions
 *
 */

import { DEFAULT_ACTION, SET_TOKEN } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}
