import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the authWrapper state domain
 */

const selectAuthWrapperDomain = state => state.get("authWrapper", initialState);
const makeSelectToken = () =>
  createSelector(selectAuthWrapperDomain,substate => substate.get('token'));

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthWrapper
 */

const makeSelectAuthWrapper = () =>
  createSelector(selectAuthWrapperDomain, substate => substate.toJS());

export default makeSelectAuthWrapper;
export { selectAuthWrapperDomain,makeSelectToken };
