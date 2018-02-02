import mainReducer from '../mainReducer';

describe('mainReducer tests', () => {
  const defaultState = {
    loading: true,
    news: [''],
    newsItem: {},
    showLogin: false,
    userData: {
      username: '',
      password: '',
    },
  };

  const userDataInput = {
    type: 'USER_DATA_INPUT',
    username: 'abc',
    password: '123',
  };

  const fetchLoginRequest = {
    type: 'FETCH_LOGIN_REQUEST',
    news: 'there are some news',
  };

  const fetchLoginSuccess = {
    type: 'FETCH_LOGIN_SUCCESS',
    news: 'there are some news',
  };

  const fetchNewsByIdRequest= {
    type: 'FETCH_NEWS_BY_ID_REQUEST',
    newsItem: 'its a news item',
  };

  const fetchNewsByIdSuccess = {
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

  it('FETCH_LOGIN_REQUEST', () => {
    expect(mainReducer(defaultState, fetchLoginRequest).news).toEqual('there are some news');
  });

  it('FETCH_LOGIN_SUCCESS', () => {
    expect(mainReducer(defaultState, fetchLoginSuccess).news).toEqual('there are some news');
  });

  it('FETCH_NEWS_BY_ID_REQUEST', () => {
    expect(mainReducer(defaultState, fetchNewsByIdRequest).loading).toEqual(true);
  });

  it('FETCH_NEWS_BY_ID_SUCCESS', () => {
    expect(mainReducer(defaultState, fetchNewsByIdSuccess).newsItem).toEqual('its a news item');
  });

  it('LOGOUT_CLICK', () => {
    expect(mainReducer(defaultState, logOut).showLogin).toEqual(false);
  });

})
