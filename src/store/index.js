import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'

import * as portfolio from './portfolio';
import * as liveView from './liveView';
import * as appConstants from '../components/App/constants';
import * as chart from './chart';
import {initSagas } from './initSagas';

import reducer from "../reducers";

export const initialState = {
    selectedModule: appConstants.PORTFOLIO,
    liveView: liveView.init(),
    portfolio: portfolio.init(),
    chart: chart.init()
  };


export const buildStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [sagaMiddleware];

  // turn off the noise here
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const s = createStore(reducer,  applyMiddleware(...middlewares));
  initSagas(sagaMiddleware);
  return s;
}