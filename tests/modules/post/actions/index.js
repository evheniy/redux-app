import { expect } from 'chai';
import { spy } from 'sinon';
import rl from '../../../../src/modules/post/rl';

const { types, actions } = rl;

describe('Testing post module actions', () => {
  it('should test titleAction', () => {
    const title = 'title';

    const action = actions.titleAction(title);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_TITLE);
    expect(action.title).to.be.equal(title);
  });

  it('should test titleAction for event', () => {
    const title = 'title';

    const action = actions.titleAction({ target: { value: title } });

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

  it('should test bodyAction for event', () => {
    const body = 'body';

    const action = actions.bodyAction({ target: { value: body } });

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_BODY);
    expect(action.body).to.be.equal(body);
  });

  it('should test submitAction', () => {
    const action = actions.submitAction();

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_SUBMIT);
  });

  it('should test submitAction for event', () => {
    const preventDefault = spy();

    const action = actions.submitAction({ preventDefault });

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(types.POST_SUBMIT);

    expect(preventDefault.calledOnce).to.be.equal(true);
  });
});
