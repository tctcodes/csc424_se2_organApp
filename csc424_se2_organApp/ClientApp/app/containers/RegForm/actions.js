/*
 *
 * RegForm actions
 *
 */

import { DUMP_FORM_TO_STATE, UPLOAD_FORM, RETRIEVE_DATA } from "./constants";

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

export function retrieveData(){
  return{
    type: RETRIEVE_DATA
  } 
}
