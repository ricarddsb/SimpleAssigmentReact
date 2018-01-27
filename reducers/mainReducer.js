import { apiActions } from 'actions';

const defaultState = {
  news: [''],
  isHiddenLogin: false,
  isHiddenNews: true,
  isHiddenProfile: true,
  userData: {
    username: '',
    password: '',
  },
  newsItem: {},
};

export default function mainManager(state = defaultState, action) {
  switch (action.type) {
    case apiActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        news: action.news,
        isHiddenLogin: !state.isHiddenLogin,
        isHiddenNews: !state.isHiddenNews,
      };
    case apiActions.FETCH_NEWS_BY_ID_SUCCESS:
      return {
        ...state,
        newsItem: action.fetchResponse,
        isHiddenNews: !state.isHiddenNews,
        isHiddenProfile: !state.isHiddenProfile,
      };
    case apiActions.LOGOUT_CLICK:
      return {
        ...state,
        isHiddenNews: true,
        isHiddenProfile: true,
        isHiddenLogin: false,
      };
    case apiActions.NEWS_CLICK_NAVBAR:
      return {
        ...state,
        isHiddenNews: false,
        isHiddenProfile: true,
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
