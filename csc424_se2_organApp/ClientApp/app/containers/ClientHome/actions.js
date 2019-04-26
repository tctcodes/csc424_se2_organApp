/*
 *
 * ClientHome actions
 *
 */

import { DEFAULT_ACTION, CHECK_INFO } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}


export function checkInfo() {
  return {
    type: CHECK_INFO,
  };
}