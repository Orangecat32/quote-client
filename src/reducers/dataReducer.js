
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import * as ACT from "../actions/dataActions";


export function dataReducer(state, action) {

  switch(action.type) {
    case ACT.DATA_PORTFOLIO_SUCCESS:
      return Object.assign(state, 
        {
          portfolio: action.payload, // origional  portfolio
          tickers: action.payload,  // portfolio that is being updated with price changes
          timer: 0, 
          isloading: false, 
          error: '' 
        }); 
    case ACT.DATA_ERROR:
      console.log('data error:', action.payload)
      return Object.assign(state, {error: action.payload }); 
    case ACT.DATA_UPDATE:
    {
      return Object.assign(state, 
        { 
          isLoading: false, 
          timer: action.payload.timer,
          error: null, 
          tickers: mergeUpdate(state.tickers, action.payload.tickers)
      });
    }
    default:
      return state;
  }
}



// selector helpers

export const getTickers = (state) => (state.data.tickers);
export const getFilters = (state) => (state.filters);
export const getData = (state) => (state.data);
export const getPortfolio = (state) => (state.data.portfolio);

const enrichData = (t) => ({...t, 
  search: `${t.symbol} ${t.company} ${t.Location} ${t.subIndustry} ${t.sector}`.toLowerCase()
  }
);

const filterTicker = (ticker, f) => {
  const search = f.searchFilter.toLowerCase();
  return (isNullOrWhitespace(search) ? true : ticker.search.includes(search)) &&
    (isNullOrWhitespace(f.sector) ? true : ticker.sector === f.sector);
};

export const filteredFirmsEx = (enrichedData, filters) => {
  return (enrichedData || []).filter(i => filterTicker(i,filters));
}

//  helper function
function mergeUpdate(portfolio, updates) {
  // build map of updates. Note that not every ticker will have an update
  const keyedUpdates = updates.reduce((acc, u) => Object.assign(acc, {[u.symbol]: u}), {});

  return  portfolio.map((item) => {
    const u = keyedUpdates[item.symbol];
    return u ? Object.assign(item, {bid: u.bid, ask: u.ask, last: u.last, pc: u.pc}) : item;
  });
}
 
export const sectorSubindustries = (portfolio, sector) => {
  const obj = (portfolio || []).reduce((acc, ticker) => {
    return acc[ticker.subIndustry] || ticker.sector !== sector ? acc : {...acc, [ticker.subIndustry] : true}
  },{});

  return Object.keys(obj).sort();
};

// selectors

export const allTickers = createSelector([getTickers], items => {
  return (items || []).map(i => enrichData(i));
});


export const allSectors = createSelector([getPortfolio], portfolio => {
  const obj = (portfolio || []).reduce((acc, ticker) => {
    return acc[ticker.sector] ? acc : {...acc, [ticker.sector] : true}
  },{});

  return Object.keys(obj).sort();
});




export const filteredTickers = createSelector([allTickers, getFilters], (enrichedData, filters) => {
  return filteredFirmsEx(enrichedData, filters);
});
