import { expect } from 'chai';
import {
  POST_BODY,
  POST_ERROR,
  POST_LOAD,
  POST_LOADED,
  POST_SUBMIT,
  POST_TITLE,
} from '../../../../src/modules/post/rl';

describe('Testing post module types', () => {
  it('should test POST_TITLE', () => {
    expect(POST_TITLE).to.be.equal('@@post/TITLE');
  });

  it('should test POST_BODY', () => {
    expect(POST_BODY).to.be.equal('@@post/BODY');
  });

  it('should test POST_SUBMIT', () => {
    expect(POST_SUBMIT).to.be.equal('@@post/SUBMIT');
  });

  it('should test POST_LOAD', () => {
    expect(POST_LOAD).to.be.equal('@@post/LOAD');
  });

  it('should test POST_LOADED', () => {
    expect(POST_LOADED).to.be.equal('@@post/LOADED');
  });

  it('should test POST_ERROR', () => {
    expect(POST_ERROR).to.be.equal('@@post/ERROR');
  });
});
