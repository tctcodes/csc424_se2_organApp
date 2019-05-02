/*
 *
 * LoginPage actions
 *
 */

import { CHANGE_EMAIL, LOGIN,CHANGE_PASSWORD, CLEAR_CREDENTIALS,SET_LOADING } from "./constants";


export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}


export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
export function login() {
  return {
    type: LOGIN,
  };
}

export function clearCredentials(){
  return{
    type: CLEAR_CREDENTIALS
  }
}
export function setLoading(bool){
  return{
    type: SET_LOADING,
    bool
  }
}