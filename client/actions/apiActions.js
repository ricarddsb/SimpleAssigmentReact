export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_NEWS_BY_ID_REQUEST = 'FETCH_NEWS_BY_ID_REQUEST';
export const FETCH_NEWS_BY_ID_SUCCESS = 'FETCH_NEWS_BY_ID_SUCCESS';

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
