/*
 *
 * SignUpPage actions
 *
 */

import { SET_EMAIL, SET_PASSWORD, SET_ROLE, ADD_USER_TO_DB } from './constants';

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}
export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}

export function setRole(role) {
  return {
    type: SET_ROLE,
    role,
  };
}

export function addUserToDB(){
  return {
    type: ADD_USER_TO_DB,
  };
}
