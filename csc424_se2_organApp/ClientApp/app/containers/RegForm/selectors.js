import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the regForm state domain
 */

const selectRegFormDomain = state => state.get("regForm", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegForm
 */

const makeSelectRegForm = () =>
  createSelector(selectRegFormDomain, substate => substate.toJS());

export default makeSelectRegForm;
export { selectRegFormDomain };
