import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the clientHome state domain
 */

const selectClientHomeDomain = state => state.get("clientHome", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ClientHome
 */

const makeSelectClientHome = () =>
  createSelector(selectClientHomeDomain, substate => substate.toJS());

export default makeSelectClientHome;
export { selectClientHomeDomain };
