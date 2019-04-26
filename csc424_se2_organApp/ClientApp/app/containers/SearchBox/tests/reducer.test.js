import { fromJS } from 'immutable';
import searchBoxReducer from '../reducer';

describe('searchBoxReducer', () => {
  it('returns the initial state', () => {
    expect(searchBoxReducer(undefined, {})).toEqual(fromJS({}));
  });
});
