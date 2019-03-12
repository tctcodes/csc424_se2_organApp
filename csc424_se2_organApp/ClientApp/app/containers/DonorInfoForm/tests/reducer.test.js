import { fromJS } from 'immutable';
import donorInfoFormReducer from '../reducer';

describe('donorInfoFormReducer', () => {
  it('returns the initial state', () => {
    expect(donorInfoFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
