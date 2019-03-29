import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the searchBox state domain
 */

const selectSearchBoxDomain = state => state.get("searchBox", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchBox
 */

const makeSelectSearchBox = () =>
  createSelector(selectSearchBoxDomain, substate => substate.toJS());

export default makeSelectSearchBox;
export { selectSearchBoxDomain };
