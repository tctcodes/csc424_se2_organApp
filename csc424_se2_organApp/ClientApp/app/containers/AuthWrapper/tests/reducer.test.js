import { fromJS } from 'immutable';
import authWrapperReducer from '../reducer';

describe('authWrapperReducer', () => {
  it('returns the initial state', () => {
    expect(authWrapperReducer(undefined, {})).toEqual(fromJS({}));
  });
});
