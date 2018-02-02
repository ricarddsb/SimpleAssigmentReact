import React from 'react';
import { shallow } from 'enzyme';
import { jestConfiguration, sinonSpy } from '../../../test/setupTests';
import GeneralButton from './GeneralButton';

describe('GeneralButton', () => {

  const props = {
    onClick: function(){},
  };

  it('ButtonLogin renders divs', () => {
    const wrapper = shallow(<GeneralButton {...props} />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('ButtonLogin onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<GeneralButton onClick={onClick} />);
    wrapper.find('button.ButtonLogin').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });
})
