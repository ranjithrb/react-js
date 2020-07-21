import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import AppReducers from './index.reducers';

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');

  middleWares.push(logger);
}

export default createStore(AppReducers, applyMiddleware(...middleWares));
