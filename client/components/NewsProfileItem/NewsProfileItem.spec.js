import React from 'react';
import { shallow  } from 'enzyme';
import {jestConfiguration, sinonSpy } from '../../../test/setupTests';
import NewsProfileItem from './NewsProfileItem';

describe('NewsProfileItem  test', () => {
  const props = {
    loading: false,
    newsItem: {
      id: '0',
      title: 'Title1',
      publishDate: 'Data not found',
      about: 'Testing NewsProfileItem',
      content: 'bla bla bla',
    }
  };

  const nextProps = {
    loading: false,
    newsItem: {
      id: '1',
    }
  };

  it('NewsProfileItem renders divs', () => {
    const wrapper = shallow(<NewsProfileItem {...props}/>);
    expect(wrapper.find('div').length).toBe(7);
  });

  it('NewsProfileItem componentShouldUpdate', () => {
    const wrapper = shallow(<NewsProfileItem {...props}/>);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(nextProps)
    expect(shouldUpdate).toBe(true);
  });

  it('NewsProfileItem check input props', () => {
    const wrapper = shallow(<NewsProfileItem {...props} />);
    const item = wrapper.find('div');
    console.log(item);
    expect(item.at(2).text()).toBe('Title1');
    expect(item.at(3).text()).toBe('Data not found');
    expect(item.at(4).text()).toBe('Testing NewsProfileItem');
    expect(item.at(6).text()).toBe('bla bla bla');
  });

});
