import {
  put,
  fork,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { apiActions } from 'actions';

async function login(username, password) {
  const response = await fetch(
    'http://localhost:8001/api/v1/news',
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    },
  ).catch(error => error);

  return response.json();
}

async function getNewsById(itemIndex, username, password) {
  const response = await fetch(
    `http://localhost:8001/api/v1/news/${itemIndex}`,
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    },
  ).catch(error => error);
  return response.json();
}

function* fetchNewsById(action) {
  try {
    const fetchResponse = yield call(
      getNewsById,
      action.itemIndex,
      action.username,
      action.password,
    );
    yield put({ type: apiActions.FETCH_NEWS_BY_ID_SUCCESS, fetchResponse });
  } catch (e) {
    yield put({ type: apiActions.FETCH_DISCO_DATA_SUCCESS, e });
  }
}

function* fetchLogin(action) {
  try {
    const fetchResonse = yield call(login, action.username, action.password);
    const { news } = fetchResonse;
    yield put({ type: apiActions.FETCH_LOGIN_SUCCESS, news });
  } catch (e) {
    yield put({ type: apiActions.FETCH_DISCO_DATA_SUCCESS, e });
  }
}

function* fetchRequest() {
  try {
    yield takeLatest(apiActions.FETCH_LOGIN_REQUEST, fetchLogin);
    yield takeLatest(apiActions.FETCH_NEWS_BY_ID_REQUEST, fetchNewsById);
  } catch (e) {
    yield put({ type: apiActions.FETCH_DISCO_DATA_SUCCESS });
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
