

import * as ACT from "../actions/iexHistActions";
import {isNullOrWhitespace} from '../shared/utils';
isNullOrWhitespace
export const iexHistory = (state) => state.iexHist; 


export function iexHistReducer(state, action) {
  if((action && action.type === 'DATA_UPDATE') && action){
    return state;
  }
  
  switch(action.type) {
    case ACT.IEX_HIST_REQUEST:
      return Object.assign(state, {symbol: action.payload, chart:[], quote: {}, isLoading: true, error: null});
    case ACT.IEX_HIST_SUCCESS:
    {
      console.log('iexHistReducer',action);
      const p = action.payload;
      const symbol = Object.keys(p)[0];
      console.log('iexHistReducer.symbol',symbol);
      return Object.assign({}, state, {isLoading: false, symbol: symbol, chart: p[symbol].chart, quote: p[symbol].quote});
    }
    case ACT.IEX_HIST_FAIL:
    return Object.assign(state, {
      isLoading: false, 
      error: isNullOrWhitespace(action.payload)
        ? 'Error loading history'
        : action.payload  });
    default:
      return state;
  }
}


