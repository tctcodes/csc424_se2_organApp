import { fromJS } from 'immutable';
import clientHomeReducer from '../reducer';

describe('clientHomeReducer', () => {
  it('returns the initial state', () => {
    expect(clientHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
