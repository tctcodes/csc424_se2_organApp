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


const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('password'));

const makeSelectLoading = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('loading'));

export { selectLoginPageDomain, makeSelectEmail, makeSelectPassword, makeSelectLoading,};
