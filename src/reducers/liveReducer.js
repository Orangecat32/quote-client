
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import {LIVE_VIEW_SETTINGS, LIVE_VIEW_REFRESH} from "../actions/liveView";

export function liveReducer(state, action) {
  switch(action.type) {
    case LIVE_VIEW_REFRESH:
    case LIVE_VIEW_SETTINGS:
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

export const filteredArtists = createSelector([allTickers, getFilters], (enrichedData, filters) => {
  return filteredArtistsEx(enrichedData, filters);
});





// return Object.assign({}, state, {showRules: !state.showRules});
//       return  Object.assign({}, state, {frames: updateFrames(state.frames, action.payload) });
 
