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

  it('InputForm renders divs', () => {
    const wrapper = shallow(<NewsItem {...props}/>);
    expect(wrapper.find('td').length).toBe(3);
  });

});
