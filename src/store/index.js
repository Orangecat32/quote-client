import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'

import * as portfolio from './portfolio';
import * as liveView from './liveView';
import * as appConstants from '../components/App/constants';
import * as rappers from './rappers';
import {initSagas } from './initSagas';

import reducer from "../reducers";

export const initialState = {
    selectedModule: appConstants.PORTFOLIO,
    liveView: liveView.init(),
    portfolio: portfolio.init(),
    rappers: rappers.init()
  };


export const buildStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [thunk, sagaMiddleware];

  // turn off the noise here
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const s = createStore(reducer,  applyMiddleware(...middlewares));
  initSagas(sagaMiddleware);
  return s;
}