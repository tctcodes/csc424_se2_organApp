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

const makeSelectPXID = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('pxid'));

const makeSelectUSState = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('usState'));

const makeSelectDonorOrCandidate = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('donorOrCandidate'));

const makeSelectSearchResults = () =>
  createSelector(selectSearchBoxDomain, substate => substate.get('searchResults'));


export {
  selectSearchBoxDomain,
  makeSelectToken,
  makeSelectPXID,
  makeSelectUSState,
  makeSelectDonorOrCandidate,
  makeSelectSearchResults,
};
