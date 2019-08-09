/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import isProd from '../config';
import rootReducer from './reducer';
import rootSaga from './sagas';
import api from '../services/api';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = () => {
  const middlewares = [sagaMiddleware];
  if (!isProd) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      level: 'info',
      duration: true,
      collapsed: true,
    });

    middlewares.push(logger);
    return applyMiddleware(...middlewares);
  }
  return applyMiddleware(...middlewares);
};

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer(),
    initialState,
    bindMiddleware(),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga, { api: api.create() });

  return store;
};

const store = configureStore();

export default store;
