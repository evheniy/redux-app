import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import rl, { nameSpace } from '../../../../src/modules/post/rl';

const { Container: PostContainer } = rl;

describe('Testing post module containers', () => {
  it('should test container', () => {
    const Component = spy(() => null);
    const Container = PostContainer(Component);

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
        error,
        titleLength,
        bodyLength,
      },
    });

    const wrapper = mount(<Provider store={store}><Container /></Provider>);

    expect(wrapper.find(Component)).to.have.length(1);

    const props = wrapper.find(Component).props();

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
