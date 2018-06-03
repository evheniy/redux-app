import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import PostContainer from '../../../../src/modules/post/containers';

describe('Testing post module containers', () => {
  it('should test container', () => {
    const Component = spy(() => null);
    const Container = PostContainer(Component);

    const title = 'title';
    const body = 'body';

    const mockStore = configureMockStore([]);
    const store = mockStore({
      post: {
        title,
        body,
      },
    });

    const wrapper = mount(<Provider store={store}><Container /></Provider>);

    expect(wrapper.find(Component)).to.have.length(1);

    const props = wrapper.find(Component).props();

    expect(props.title).to.be.equal(title);
    expect(props.body).to.be.equal(body);
    expect(props.titleAction).to.be.a('function');
    expect(props.bodyAction).to.be.a('function');
    expect(props.submitAction).to.be.a('function');
  });
});
