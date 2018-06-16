import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import PostModule from '../../../src/modules/post';
import PostComponent from '../../../src/modules/post/components';

import { nameSpace } from '../../../src/modules/post/rl';

describe('Testing post module', () => {
  it('should test post module', () => {
    const title = 'title';
    const body = 'body';
    const titleLength = title.length;
    const bodyLength = body.length;
    const error = null;

    const mockStore = configureMockStore([]);
    const store = mockStore({
      [nameSpace]: {
        title,
        body,
        titleLength,
        bodyLength,
        error,
      },
    });

    const wrapper = mount(<Provider store={store}><PostModule /></Provider>);

    expect(wrapper.find(PostComponent)).to.have.length(1);

    const props = wrapper.find(PostComponent).props();

    expect(props.title).to.be.equal(title);
    expect(props.body).to.be.equal(body);
    expect(props.error).to.be.equal(error);
    expect(props.titleAction).to.be.a('function');
    expect(props.bodyAction).to.be.a('function');
    expect(props.submitAction).to.be.a('function');
    expect(props.loadAction).to.be.a('function');
    expect(props.loadedAction).to.be.a('function');
    expect(props.errorAction).to.be.a('function');
  });
});
