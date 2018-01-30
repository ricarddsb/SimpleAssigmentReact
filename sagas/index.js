import {
  put,
  fork,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { apiActions, errorActions } from 'actions';

async function login(username, password) {
  return fetch(
    'http://localhost:8001/api/v1/news',
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    },
  ).then((response) => {
    if (response.status === 401) {
      return response.statusText;
    }
    return response.json();
  }).catch(error => error);
}

async function getNewsById(itemIndex, username, password) {
  return fetch(
    `http://localhost:8001/api/v1/news/${itemIndex}`,
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    },
  ).then(response => response.json()).catch(error => error);
}

function* fetchNewsById(action) {
  try {
    const fetchResponse = yield call(
      getNewsById,
      action.itemIndex,
      action.username,
      action.password,
    );
    const { newsItem } = fetchResponse;
    yield put({ type: apiActions.FETCH_NEWS_BY_ID_SUCCESS, newsItem });
  } catch (e) {
    yield put({ type: errorActions.GENERAL_ERROR, e });
  }
}

function* fetchLogin(action) {
  try {
    const fetchResponse = yield call(login, action.username, action.password);
    if (typeof fetchResponse === 'string') {
      yield put({ type: errorActions.UNAUTHORIZED, fetchResponse });
    } else {
      const { news } = fetchResponse;
      yield put({ type: apiActions.FETCH_LOGIN_SUCCESS, news });
    }
  } catch (e) {
    yield put({ type: errorActions.GENERAL_ERROR, e });
  }
}

function* fetchRequest() {
  try {
    yield takeLatest(apiActions.FETCH_LOGIN_REQUEST, fetchLogin);
    yield takeLatest(apiActions.FETCH_NEWS_BY_ID_REQUEST, fetchNewsById);
  } catch (e) {
    yield put({ type: errorActions.GENERAL_ERROR, e });
  }
}

/* export default function* rootSaga() {
  yield fork(searchRequest);
  yield fork(fetchRequest);
} */

export default function* rootSaga() {
  yield all([
    fork(fetchRequest),
  ]);
}
