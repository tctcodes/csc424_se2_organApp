/*
 *
 * RegForm actions
 *
 */

import { DUMP_FORM_TO_STATE, UPLOAD_FORM } from "./constants";

export function dumpFormToState(state) {
  return {
    type: DUMP_FORM_TO_STATE,
    state
  };
}
export function uploadForm(){
  return{
    type: UPLOAD_FORM
  } 
}
