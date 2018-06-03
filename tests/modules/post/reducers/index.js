import { expect } from 'chai';
import * as types from '../../../../src/modules/post/types';
import reducer from '../../../../src/modules/post/reducer';

describe('Testing post module reducer', () => {
  const defaultState = {
    title: '',
    body: '',
  };

  it('should test default state', () => {
    const state = reducer(undefined, { type: 'test' });

    expect(state).to.be.eql(defaultState);
  });

  it('should test POST_TITLE action', () => {
    const title = 'title';

    const state = reducer(undefined, { type: types.POST_TITLE, title });

    expect(state.title).to.be.equal(title);
  });

  it('should test POST_BODY action', () => {
    const body = 'body';

    const state = reducer(undefined, { type: types.POST_BODY, body });

    expect(state.body).to.be.equal(body);
  });

  it('should test default state with value', () => {
    const state = reducer({ test: true }, { type: 'test' });

    expect(state.test).to.be.equal(true);
  });
});
