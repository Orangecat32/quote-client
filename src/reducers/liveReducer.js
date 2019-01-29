
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import * as LV from "../actions/liveViewActions";




export function liveReducer(state, action) {
  switch(action.type) {
    case LV.LIVE_VIEW_PORTFOLIO_SUCCESS:
      return Object.assign(state, {portfolio: action.payload, tickers: action.payload, timer: 0 }); 
    case LV.LIVE_VIEW_ERROR:
      console.log('live reducer error:', action.payload)
      return Object.assign(state, {error: action.payload }); 
    case LV.LIVE_VIEW_UPDATE:
    {
      return Object.assign(state, 
        { 
          isLoading: false, 
          timer: action.payload.timer,
          error: null, 
          tickers: mergeUpdate(state.tickers, action.payload.tickers)
        });
    }
    case LV.LIVE_VIEW_SETTINGS:
    default:
      return state;
  }
}



// selector helpers

export const getTickers = (state) => (state.liveView.tickers);

export const getFilters = (state) => ({
  search: state.liveView.searchFilter, 
});

const enrichData = (d) => ({...d, 
  search: `${d.symbol} ${ d.company} ${d.Location} ${d.subIndustry}`
  }
);

const filterTicker = (a, f) => {
  return (isNullOrWhitespace(f.search) ? true : a.search.includes(f.search)) ;
};

export const filteredFirmsEx = (enrichedData, filters) => {
  return (enrichedData || []).filter(i => filterTicker(i,filters));
}

// selectors

export const allTickers = createSelector([getTickers], items => {
  return (items || []).map(i => enrichData(i));
});

export const filteredTickers = createSelector([allTickers, getFilters], (enrichedData, filters) => {
  return filteredFirmsEx(enrichedData, filters);
});

//  helper function
function mergeUpdate(portfolio, updates) {
  // build map of updates. Note that not every ticker will have an update
  const keyedUpdates = updates.reduce((acc, u) => Object.assign(acc, {[u.symbol]: u}), {});

  return  portfolio.map((item) => {
    const u = keyedUpdates[item.symbol];
    return u ? Object.assign(item, {bid: u.bid, ask: u.ask, last: u.last, pc: u.pc}) : item;
  });
}
 
