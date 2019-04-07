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


const makeSelectToken = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('token'));

export { selectSearchBoxDomain, makeSelectToken };
