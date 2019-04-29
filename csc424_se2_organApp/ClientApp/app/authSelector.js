import { createSelector } from "reselect";
import { initialAuthState } from "./authReducer";

/**
 * Direct selector to the regForm state domain
 */

const selectAuth = state => state.get("auth", initialAuthState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegForm
 */

const makeSelectAuth = () =>
  createSelector(selectAuth, substate => substate.toJS());

export default makeSelectAuth;