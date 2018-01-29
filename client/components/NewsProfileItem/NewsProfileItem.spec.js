import React from 'react';
import { shallow  } from 'enzyme';
import {jestConfiguration, sinonSpy } from '../../../test/setupTests';
import NewsProfileItem from './NewsProfileItem';

describe('NewsProfileItem  test', () => {
  const props = {
    loading: false,
    newsItem: {
      Title: 'Title1',
      PublishDate: 'Data not found',
      About: 'Testing NewsProfileItem',
      Content: 'bla bla bla',
    }
  };

  it('InputForm renders divs', () => {
    const wrapper = shallow(<NewsProfileItem {...props}/>);
    expect(wrapper.find('div').length).toBe(7);
  });

});
