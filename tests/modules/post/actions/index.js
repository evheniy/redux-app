import { expect } from 'chai';
import * as actions from '../../../../src/modules/post/actions';
import * as types from '../../../../src/modules/post/types';

describe('Testing post module actions', () => {
  it('should test titleAction', () => {
    const title = 'title';

    const action = actions.titleAction(title);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_TITLE);
    expect(action.title).to.be.equal(title);
  });

  it('should test bodyAction', () => {
    const body = 'body';

    const action = actions.bodyAction(body);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_BODY);
    expect(action.body).to.be.equal(body);
  });

  it('should test submitAction', () => {
    const action = actions.submitAction();

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_SUBMIT);
  });
});
