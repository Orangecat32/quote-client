import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import * as tableView from './tableView';
import * as filters from './filters';
import * as data from './data';
import * as iexHist from './iexHist';
import * as appConstants from '../components/App/constants';
import * as chart from './chart';
import { initSagas } from './initSagas';

import reducer from '../reducers';

export const initialState = {
  data: data.init(),
  selectedPage: appConstants.TABLE_VIEW,
  tableView: tableView.init(),
  filters: filters.init(),
  iexHist: iexHist.init(),
  chart: chart.init()
};

export const buildStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  //  add filter on logging so we don't see all the updates coming from the server
  const middlewares = process.env.NODE_ENV !== 'production'
    ? [sagaMiddleware]
    : [
      sagaMiddleware,
      createLogger({
        diff: false, //  shows diff between states.  Can be very long
        predicate: (state, action) => !action.type.startsWith('DATA_UPDATE')
      })];

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const s = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
  initSagas(sagaMiddleware);
  return s;
};
