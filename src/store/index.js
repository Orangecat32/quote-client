import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import * as memoryGame from './memory';
import * as portfolio from './portfolio';
import * as liveView from './liveView';
import * as appConstants from '../components/App/constants';
import * as rappers from './rappers';

import reducer from "../reducers";

export const initialState = {
    selectedModule: appConstants.PORTFOLIO,
    memoryGame: memoryGame.init(),
    liveView: liveView.init(),
    portfolio: portfolio.init(),
    rappers: rappers.init()
  };

export const buildStore = () => {
  let middleware = [thunk];

  // turn off the noise here
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

  return createStore(reducer,  applyMiddleware(...middleware));
}