import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUpPage state domain
 */

const selectSignUpPage = state => state.get('signUpPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectEmail = () =>
  createSelector(selectSignUpPage, pageState => pageState.get('email'));
const makeSelectPassword = () =>
  createSelector(selectSignUpPage, pageState => pageState.get('password'));

/**
 * Default selector used by SignUpPage
 */

export { selectSignUpPage, makeSelectEmail, makeSelectPassword };
