/*
 *
 * LoginPage actions
 *
 */

import { CHANGE_EMAIL, LOGIN,CHANGE_PASSWORD } from "./constants";


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
