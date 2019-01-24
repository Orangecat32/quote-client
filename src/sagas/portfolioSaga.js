import { takeLatest, call, put } from 'redux-saga/effects'

import * as TYPES from '../actions/portfolioActions';
import { portfolioRequestAll } from '../api/portfolioApi';

export function* portfolioFetch(action) {
  try {
     const response = yield call(portfolioRequestAll);

     const json= yield response.json();
     yield put({type: TYPES.PORTFOLIO_RESULT, payload: json});
  } catch (e) {
      console.log(e)
  }
}


export function* portfolioSaga() {
  console.log('portfolio saga');
  yield takeLatest(TYPES.PORTFOLIO_FETCH, portfolioFetch);
}

export default portfolioSaga;
