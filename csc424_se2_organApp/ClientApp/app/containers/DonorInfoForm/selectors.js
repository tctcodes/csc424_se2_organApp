import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the donorInfoForm state domain
 */

const selectDonorInfoFormDomain = state =>
  state.get("donorInfoForm", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DonorInfoForm
 */

const makeSelectDonorInfoForm = () =>
  createSelector(selectDonorInfoFormDomain, substate => substate.toJS());

export default makeSelectDonorInfoForm;
export { selectDonorInfoFormDomain };
