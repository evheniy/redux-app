import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import PostModule from '../../../src/modules/post';
import PostComponent from '../../../src/modules/post/components';

import rl from '../../../src/modules/post/rl';

const { nameSpace } = rl;

describe('Testing post module', () => {
  it('should test post module', () => {
    const title = 'title';
    const body = 'body';

    const mockStore = configureMockStore([]);
    const store = mockStore({
      [nameSpace]: {
        title,
        body,
      },
    });

    const wrapper = mount(<Provider store={store}><PostModule /></Provider>);

    expect(wrapper.find(PostComponent)).to.have.length(1);

    const props = wrapper.find(PostComponent).props();

    expect(props.title).to.be.equal(title);
    expect(props.body).to.be.equal(body);
    expect(props.titleAction).to.be.a('function');
    expect(props.bodyAction).to.be.a('function');
    expect(props.submitAction).to.be.a('function');
  });
});
