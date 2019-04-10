import { fromJS } from 'immutable';
import regFormReducer from '../reducer';

describe('regFormReducer', () => {
  it('returns the initial state', () => {
    expect(regFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
