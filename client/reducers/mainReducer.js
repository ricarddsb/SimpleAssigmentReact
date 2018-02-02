import { apiActions, mainActions } from 'actions';

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

export default function mainManager(state = defaultState, action) {
  switch (action.type) {
    case mainActions.LOGOUT_CLICK:
      return {
        ...state,
        showLogin: false,
      };
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
    case mainActions.USER_DATA_INPUT:
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
