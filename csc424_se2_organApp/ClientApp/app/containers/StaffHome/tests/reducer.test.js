import { fromJS } from 'immutable';
import staffHomeReducer from '../reducer';

describe('staffHomeReducer', () => {
  it('returns the initial state', () => {
    expect(staffHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
