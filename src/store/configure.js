import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { isProd } from '../config';
import rootReducer from './main/reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = () => {
  let middlewares = [sagaMiddleware];
  if (!isProd) {
    const { createLogger } = require('redux-logger')
    const logger = createLogger({
      level: 'info',
      duration: true,
      collapsed: true,
    });
    
    middlewares.push(logger);
    return applyMiddleware(...middlewares)
  }
  return applyMiddleware(...middlewares)
}

const configureStore = (initialState = {}) => {

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  
  return store
}

export default configureStore