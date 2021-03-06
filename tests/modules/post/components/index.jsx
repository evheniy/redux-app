import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import PostComponent from '../../../../src/modules/post/components';

describe('Testing post module PostComponent', () => {
  const title = 'title';
  const body = 'body';
  const titleLength = title.length;
  const bodyLength = body.length;
  const titleAction = () => 1;
  const bodyAction = () => 1;
  const submitAction = () => 1;

  const props = {
    title,
    body,
    titleLength,
    bodyLength,
    titleAction,
    bodyAction,
    submitAction,
  };

  it('should test PostComponent', () => {
    const wrapper = shallow(<PostComponent {...props} />);

    expect(wrapper.find('form')).to.have.length(1);

    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').props().children).to.be.equal('Our form example');

    expect(wrapper.find('div')).to.have.length(3);

    expect(wrapper.find('input')).to.have.length(2);

    const titleProps = wrapper.find('input').first().props();
    expect(titleProps.type).to.be.equal('text');
    expect(titleProps.value).to.be.equal(title);
    expect(titleProps.onChange).to.be.a('function');

    expect(wrapper.find('textarea')).to.have.length(1);

    const bodyProps = wrapper.find('textarea').props();
    expect(bodyProps.value).to.be.equal(body);
    expect(bodyProps.onChange).to.be.a('function');

    const submitProps = wrapper.find('input').last().props();
    expect(submitProps.type).to.be.equal('submit');
    expect(submitProps.value).to.be.equal('Submit');
  });

  it('should test PostComponent with error', () => {
    const message = 'error';
    const error = { message };

    const wrapper = shallow(<PostComponent {...props} error={error} />);

    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('div').at(3).props().children).to.be.equal(message);
  });

  it('should test PostComponent titleAction', () => {
    const onChange = spy();

    const wrapper = shallow(<PostComponent {...props} titleAction={onChange} />);

    expect(wrapper.find('input')).to.have.length(2);

    const titleProps = wrapper.find('input').first().props();
    expect(titleProps.type).to.be.equal('text');
    expect(titleProps.value).to.be.equal(title);
    expect(titleProps.onChange).to.be.a('function');

    wrapper.find('input').first().simulate('change', 'test');
    expect(onChange.withArgs('test').calledOnce).to.be.equal(true);
  });

  it('should test PostComponent bodyAction', () => {
    const onChange = spy();

    const wrapper = shallow(<PostComponent {...props} bodyAction={onChange} />);

    expect(wrapper.find('textarea')).to.have.length(1);

    const bodyProps = wrapper.find('textarea').props();
    expect(bodyProps.value).to.be.equal(body);
    expect(bodyProps.onChange).to.be.a('function');

    wrapper.find('textarea').simulate('change', 'test');
    expect(onChange.withArgs('test').calledOnce).to.be.equal(true);
  });

  it('should test PostComponent submitAction', () => {
    const onChange = spy();

    const wrapper = shallow(<PostComponent {...props} submitAction={onChange} />);

    expect(wrapper.find('form')).to.have.length(1);

    wrapper.find('form').simulate('submit');
    expect(onChange.calledOnce).to.be.equal(true);
  });
});
