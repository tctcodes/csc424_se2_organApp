import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the staffHome state domain
 */

const selectStaffHomeDomain = state => state.get("staffHome", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StaffHome
 */

const makeSelectStaffHome = () =>
  createSelector(selectStaffHomeDomain, substate => substate.toJS());

export default makeSelectStaffHome;
export { selectStaffHomeDomain };
