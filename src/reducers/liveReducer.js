
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import * as LV from "../actions/liveViewActions";

export function liveReducer(state, action) {
  switch(action.type) {
    case LV.LIVE_VIEW_PORTFOLIO_SUCCESS:
      return Object.assign(state, {portfolio: action.payload }); 
    case LV.LIVE_VIEW_ERROR:
      console.log('live reducer:', action.payload)
      return Object.assign(state, {error: action.payload }); 
    case LV.LIVE_VIEW_UPDATE:
    {
    //console.log('live reducer', action.payload)
    //overlay price update onto portfolio
      const x = action.payload.tickers;
      console.log('reducer.1',x);
      const t = Object.assign(state.portfolio, x);
      console.log('reducer.2', t);
      return Object.assign(state, 
        { isLoading: false, 
          error: null, 
          tickers: t
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

export const filteredArtistsEx = (enrichedData, filters) => {
  return (enrichedData || []).filter(i => filterTicker(i,filters));
}

// selectors

export const allTickers = createSelector([getTickers], items => {
  return (items || []).map(i => enrichData(i));
});

export const filteredTickers = createSelector([allTickers, getFilters], (enrichedData, filters) => {
  return filteredArtistsEx(enrichedData, filters);
});





// return Object.assign({}, state, {showRules: !state.showRules});
//       return  Object.assign({}, state, {frames: updateFrames(state.frames, action.payload) });
 
