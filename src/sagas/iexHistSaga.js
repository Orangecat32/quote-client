
import { take, call, put, takeEvery } from 'redux-saga/effects';
import {iexHistRequest} from '../api/iexApi';

import {IEX_HIST_REQUEST,IEX_HIST_SUCCESS, IEX_HIST_FAIL, FILTER_FIRM, FILTER_EXACT_FIRM} from '../actions';


export function* iexHistSagas() {
  yield getIexHistory();
}

function* getIexHistory() {
  yield takeEvery(FILTER_FIRM, getFirmHistory);
  yield takeEvery(FILTER_EXACT_FIRM, getExactFirmHistory);

}

function* getExactFirmHistory(action) {
  yield getFirmHistory({type: FILTER_FIRM, payload: action.payload.symbol});
}

function* getFirmHistory(action) {
  yield put({type: IEX_HIST_REQUEST, payload: action.payload});
  const response = yield call(iexHistRequest, action.payload);
  console.log('saga.iexHist.fetch.response:', response);
  const json= yield response.json();
  yield put({type: IEX_HIST_SUCCESS, payload: json});
}











/*

// https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl&types=quote,chart&range=3m

"chart": [
  {
    "date": "2018-10-29",
    "open": 218.4279,
    "high": 218.9261,
    "low": 205.3734,
    "close": 211.502,
    "volume": 45935520,
    "unadjustedVolume": 45935520,
    "change": -4.0459,
    "changePercent": -1.877,
    "vwap": 213.8345,
    "label": "Oct 29, 18",
    "changeOverTime": 0
  },

  "quote": {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "primaryExchange": "Nasdaq Global Select",
      "sector": "Technology",
      "calculationPrice": "close",
      "open": 168.99,
      "openTime": 1549636200583,
      "close": 170.41,
      "closeTime": 1549659600543,
      "high": 170.66,
      "low": 168.42,
      "latestPrice": 170.41,
      "latestSource": "Close",
      "latestTime": "February 8, 2019",
      "latestUpdate": 1549659600543,
      "latestVolume": 23640257,
      "iexRealtimePrice": 170.51,
      "iexRealtimeSize": 100,
      "iexLastUpdated": 1549659599894,
      "delayedPrice": 170.41,
      "delayedPriceTime": 1549659600543,
      "extendedPrice": 170.2,
      "extendedChange": -0.21,
      "extendedChangePercent": -0.00123,
      "extendedPriceTime": 1549663191418,
      "previousClose": 170.94,
      "change": -0.53,
      "changePercent": -0.0031,
      "iexMarketPercent": 0.02022,
      "iexVolume": 478006,
      "avgTotalVolume": 39229147,
      "iexBidPrice": 0,
      "iexBidSize": 0,
      "iexAskPrice": 0,
      "iexAskSize": 0,
      "marketCap": 803530864800,
      "peRatio": 14.36,
      "week52High": 233.47,
      "week52Low": 142,
      "ytdChange": 0.07934680851063837
    },

  */

