import { expect } from 'chai';
import * as types from '../../../../src/modules/post/types';

describe('Testing post module types', () => {
  it('should test POST_TITLE', () => {
    expect(types.POST_TITLE).to.be.equal('@@post/TITLE');
  });

  it('should test POST_BODY', () => {
    expect(types.POST_BODY).to.be.equal('@@post/BODY');
  });

  it('should test POST_SUBMIT', () => {
    expect(types.POST_SUBMIT).to.be.equal('@@post/SUBMIT');
  });
});
