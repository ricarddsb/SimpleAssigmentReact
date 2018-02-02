import React from 'react';
import { shallow } from 'enzyme';
import { jestConfiguration, sinonSpy } from '../../../test/setupTests';
import GeneralButton from './GeneralButton';

describe('GeneralButton', () => {

  const props = {
    onClick: function(){},
    text: 'buttonText',
    route: '/',
  };

  it('GeneralButton renders 0 divs', () => {
    const wrapper = shallow(<GeneralButton {...props} />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('GeneralButton onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<GeneralButton onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });

  it('GeneralButton check text', () => {
    const wrapper = shallow(<GeneralButton {...props} />);
    const item = wrapper.find('button');
    expect(wrapper.find('button').text()).toBe('buttonText');
  });
})
