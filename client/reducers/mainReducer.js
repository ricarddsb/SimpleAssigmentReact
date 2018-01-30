import { apiActions } from 'actions';

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

export default function mainManager(state = defaultState, action) {
  switch (action.type) {
    case apiActions.FETCH_LOGIN_REQUEST:
      return {
        ...state,
        news: action.news,
        loading: true,
      };
    case apiActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        news: action.news,
        showLogin: true,
        loading: false,
      };
    case apiActions.FETCH_NEWS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case apiActions.FETCH_NEWS_BY_ID_SUCCESS:
      return {
        ...state,
        newsItem: action.newsItem,
        loading: false,
      };
    case apiActions.LOGOUT_CLICK:
      return {
        ...state,
        showLogin: false,
      };
    case apiActions.NEWS_CLICK_NAVBAR:
      return {
        ...state,
      };
    case apiActions.USER_DATA_INPUT:
      return {
        ...state,
        userData: {
          username: action.username,
          password: action.password,
        },
      };
    default:
      return state;
  }
}
