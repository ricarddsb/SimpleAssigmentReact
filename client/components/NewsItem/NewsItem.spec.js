import React from 'react';
import { shallow  } from 'enzyme';
import {jestConfiguration, sinonSpy } from '../../../test/setupTests';
import NewsItem from './NewsItem';

describe('NewItem ', () => {
  const props = {
    id: 1,
    Title: 'Title1',
    PublishDate: 'date to be defined',
    onClick: function(){},
  };

  const nextProps = {
    loading: true,
  };

  it('NewsItem renders divs', () => {
    const wrapper = shallow(<NewsItem {...props}/>);
    expect(wrapper.find('td').length).toBe(3);
  });

  it('NewsItem componentShouldUpdate', () => {
    const wrapper = shallow(<NewsItem {...props}/>);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(nextProps)
    expect(shouldUpdate).toBe(false);
  });

  it('NewsItem check input props', () => {
    const wrapper = shallow(<NewsItem {...props} />);
    const item = wrapper.find('td');
    expect(item.at(0).text()).toBe('<NavLink />');
    expect(item.at(1).text()).toBe('date to be defined');
    expect(item.at(2).text()).toBe('Title1');
  });

  it('NewsItem onclick event', () => {
    const onClick = sinonSpy.spy();
    const wrapper = shallow(<NewsItem onClick={onClick} />);
    wrapper.find('tr').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });

});
