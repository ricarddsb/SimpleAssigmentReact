import React from 'react';
import { shallow  } from 'enzyme';
import { jestConfiguration, sinonSpy } from '../.././../../test/setupTests';
import InputForm from './InputForm';

describe('InputForm tests', () => {
  const props = {
    name: 'nameTest',
    label: 'label',
    type: 'text',
    id: '0',
    forhtml: 'forHtml',
    onChange: function(){},
  };

  it('InputForm renders divs', () => {
    const wrapper = shallow(<InputForm {...props}/>);
    expect(wrapper.find('div').length).toBe(2);
  });

  it('InputForm check label text', () => {
    const wrapper = shallow(<InputForm {...props} />);
    const item = wrapper.find('div');
    expect(wrapper.find('label').text()).toBe('label');
    expect(wrapper.find('label').props().forHtml).toBe('forHtml');
  });

  it('InputForm check input props', () => {
    const wrapper = shallow(<InputForm {...props} />);
    const item = wrapper.find('div');
    console.log(item);
    expect(item.find('input').props().name).toBe('nameTest');
    expect(item.find('input').props().id).toBe('0');
    expect(item.find('input').props().type).toBe('text');
  });

  it('InputForm onChange event', () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: 'value' }
    };

    const wrapper = shallow(<InputForm onChange={onChangeMock} />);
    wrapper.find('input').simulate('change', event)
    wrapper.simulate('change');
    expect(onChangeMock).toBeCalledWith('', 'value');
  });

});
