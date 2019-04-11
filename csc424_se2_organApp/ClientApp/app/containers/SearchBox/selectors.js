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

const makeSelectPID = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('PID'));

const makeSelectUSState = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('usState'));

const makeSelectDonorOrCandidate = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('donorOrCandidate'));


export {
  selectSearchBoxDomain,
  makeSelectToken,
  makeSelectPID,
  makeSelectUSState,
  makeSelectDonorOrCandidate,
};
