import React from 'react';
import { shallow  } from 'enzyme';
import { jestConfiguration, sinonSpy } from '../.././../../test/setupTests';
import InputForm from './InputForm';

describe('InputForm tests', () => {
  const props = {
    name: 'nameTest',
    label: '',
    type: '',
    id: '',
    forHtml: '',
    onChange: function(){},
  };

  const propsOnChange = {
    name: 'nameTest',
    label: 'hahaha',
    type: '',
    id: '',
    forHtml: '',
    onChange: function(){},
  };

  it('renders divs', () => {
    const wrapper = shallow(<InputForm {...props}/>);
    expect(wrapper.find('div').length).toBe(2);
  });

  /* it('InputForm onChange event', () => {
    const wrapper = shallow(<InputForm {...props} />);
    wrapper.simulate('change');
    expect(wrapper.props('name')).toBe({});
  }); */

});
