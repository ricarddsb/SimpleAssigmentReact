import React from 'react';
import { shallow } from 'enzyme';
import {jestConfiguration, sinonSpy } from '../../../../test/setupTests';
import ButtonLogin from './ButtonLogin';

describe('ButtonLogin', () => {

  const props = {
    onClick: function(){},
  };

  it('ButtonLogin renders divs', () => {
    const wrapper = shallow(<ButtonLogin {...props} />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('ButtonLogin onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<ButtonLogin onClick={onClick} />);
    wrapper.find('button.ButtonLogin').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });

})
