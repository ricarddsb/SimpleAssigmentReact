import mainReducer from '../mainReducer';

describe('mainReducer tests', () => {
  const defaultState = {
    news: [''],
    showLogin: false,
    userData: {
      username: '',
      password: '',
    },
    newsItem: {},
    loading: true,
  };

  const userDataInput = {
    type: 'USER_DATA_INPUT',
    username: 'abc',
    password: '123',
  };

  const fetchLoginSuccess = {
    type: 'FETCH_LOGIN_SUCCESS',
    news: 'there are some news',
  };

  const fetchNewsById = {
    type: 'FETCH_NEWS_BY_ID_SUCCESS',
    newsItem: 'its a news item',
  };

  const logOut = {
    type: 'LOGOUT_CLICK',
  };

  it('should create initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(defaultState);
  });

  it('USER_DATA_INPUT', () => {
    expect(mainReducer(defaultState, userDataInput).userData.username).toEqual('abc');
  });

  it('FETCH_LOGIN_SUCCESS', () => {
    expect(mainReducer(defaultState, fetchLoginSuccess).news).toEqual('there are some news');
  });

  it('FETCH_NEWS_BY_ID_SUCCESS', () => {
    expect(mainReducer(defaultState, fetchNewsById).newsItem).toEqual('its a news item');
  });

  it('LOGOUT_CLICK', () => {
    expect(mainReducer(defaultState, logOut).showLogin).toEqual(false);
  });

})
