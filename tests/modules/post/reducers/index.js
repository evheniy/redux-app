import { expect } from 'chai';
import rl from '../../../../src/modules/post/rl';

const { types, reducer } = rl;

describe('Testing post module reducer', () => {
  const defaultState = {
    title: '',
    body: '',
    error: null,
  };

  it('should test default state', () => {
    const state = reducer(undefined, { type: 'test' });

    expect(state).to.be.eql(defaultState);
  });

  it('should test POST_TITLE action', () => {
    const title = 'title';

    const state = reducer(undefined, { type: types.POST_TITLE, payload: { title } });

    expect(state.title).to.be.equal(title);
  });

  it('should test POST_BODY action', () => {
    const body = 'body';

    const state = reducer(undefined, { type: types.POST_BODY, payload: { body } });

    expect(state.body).to.be.equal(body);
  });

  it('should test default state with value', () => {
    const state = reducer({ test: true }, { type: 'test' });

    expect(state.test).to.be.equal(true);
  });
});
