export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_NEWS_BY_ID_REQUEST = 'FETCH_NEWS_BY_ID_REQUEST';
export const FETCH_NEWS_BY_ID_SUCCESS = 'FETCH_NEWS_BY_ID_SUCCESS';
export const USER_DATA_INPUT = 'USER_DATA_INPUT';
export const NEWS_CLICK_NAVBAR = 'NEWS_CLICK_NAVBAR';
export const LOGOUT_CLICK = 'LOGOUT_CLICK';

export function loginFetch(username, password) {
  return {
    type: FETCH_LOGIN_REQUEST,
    username,
    password,
  };
}

export function fetchNewsById(itemIndex, username, password) {
  return {
    type: FETCH_NEWS_BY_ID_REQUEST,
    itemIndex,
    username,
    password,
  };
}

export function logOutClick() {
  return {
    type: LOGOUT_CLICK,
  };
}

export function newsClick() {
  return {
    type: NEWS_CLICK_NAVBAR,
  };
}

export function userDataInput(username, password) {
  return {
    type: USER_DATA_INPUT,
    username,
    password,
  };
}
