import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.get("loginPage", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectEmail = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('email'));

const makeSelectRole = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('role'));

const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('password'));

const makeSelectToken = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('token'));

export { selectLoginPageDomain, makeSelectEmail, makeSelectPassword, makeSelectToken, makeSelectRole};
