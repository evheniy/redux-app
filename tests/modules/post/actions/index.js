import { expect } from 'chai';
import { spy } from 'sinon';
import {
  bodyAction,
  errorAction,
  loadAction,
  loadedAction,
  submitAction,
  titleAction,
  POST_BODY,
  POST_ERROR,
  POST_LOAD,
  POST_LOADED,
  POST_SUBMIT,
  POST_TITLE,
} from '../../../../src/modules/post/rl';

describe('Testing post module actions', () => {
  it('should test titleAction', () => {
    const title = 'title';

    const action = titleAction(title);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_TITLE);
    expect(action.title).to.be.equal(title);
  });

  it('should test titleAction for event', () => {
    const title = 'title';

    const action = titleAction({ target: { value: title } });

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_TITLE);
    expect(action.title).to.be.equal(title);
  });

  it('should test bodyAction', () => {
    const body = 'body';

    const action = bodyAction(body);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_BODY);
    expect(action.body).to.be.equal(body);
  });

  it('should test bodyAction for event', () => {
    const body = 'body';

    const action = bodyAction({ target: { value: body } });

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_BODY);
    expect(action.body).to.be.equal(body);
  });

  it('should test submitAction', () => {
    const action = submitAction();

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_SUBMIT);
  });

  it('should test submitAction for event', () => {
    const preventDefault = spy();

    const action = submitAction({ preventDefault });

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_SUBMIT);

    expect(preventDefault.calledOnce).to.be.equal(true);
  });

  it('should test loadAction', () => {
    const action = loadAction();

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_LOAD);
  });

  it('should test loadedAction', () => {
    const action = loadedAction();

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_LOADED);
  });

  it('should test errorAction', () => {
    const error = {};

    const action = errorAction(error);

    expect(action).to.be.a('object');

    expect(action.type).to.be.equal(POST_ERROR);
    expect(action.error).to.be.equal(error);
  });
});
