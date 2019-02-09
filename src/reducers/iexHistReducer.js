

import * as ACT from "../actions/iexHistActions";


export function iexHistReducer(state, action) {
  if(action.type === 'DATA_UPDATE'){
    return state;
  }

  switch(action.type) {
    case ACT.IEX_HIST_REQUEST:
      return state;
    case ACT.IEX_HIST_SUCCESS:
    {
      //console.log('iexHistReducer',action);
      const p = action.payload;
      const symbol = Object.keys(p)[0];
      console.log('iexHistReducer.symbol',symbol);
      return Object.assign({}, state, {symbol: symbol, chart: p[symbol].chart, quote: p[symbol].quote});
    }
    case ACT.IEX_HIST_FAIL:
      return state;
    default:
      return state;
  }
}


