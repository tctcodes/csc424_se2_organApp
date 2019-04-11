/*
 *
 * LoginPage actions
 *
 */

import { CHANGE_EMAIL, LOGIN } from "./constants";
import { CHANGE_PASSWORD } from "./constants";
import { CHANGE_ROLE } from "./constants";

import { SET_TOKEN } from "./constants";

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function changeRole(role) {
  return {
    type: CHANGE_ROLE,
    role,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
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
