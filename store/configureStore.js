// import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { DevTools } from 'containers';
import { persistState } from 'redux-devtools';
import rootReducer from '../client/reducers';
import rootSaga from '../sagas';

const reducers = require('../client/reducers/index');

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const enhancer = compose(
  composeEnhancers(applyMiddleware(sagaMiddleware)),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../client/reducers/index', () =>
      store.replaceReducer(reducers.default),
    );
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
