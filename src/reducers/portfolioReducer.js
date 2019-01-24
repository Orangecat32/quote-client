
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import {sortArtists} from '../components/Portfolio/util';

import * as RA from "../actions/portfolioActions";

export function portfolioReducer(state, action) {
  console.log('reducted action', action.type );
  switch(action.type) {
    // case RA.PORTFOLIO_SUCCESS:
    //   return Object.assign(state, {data: action.payload, error: null, isLoading: false }); 
    case RA.PORTFOLIO_RESULT:
      return Object.assign(state, {data: action.payload, error: null, isLoading: false }); 
    case RA.PORTFOLIO_BEGIN:
      return Object.assign(state, {isLoading: true, error: null }); 
    case RA.PORTFOLIO_FAILED:
    {
      const message = action.payload && action.payload.message ? action.payload.message : 'error fetching data';
      return Object.assign(state, {error: message , artists: [], isLoading: false }); 
    }
    case RA.PORTFOLIO_SECTOR:
      return Object.assign({}, state, {sector: !state.sector});
    case RA.PORTFOLIO_SEARCH:
      return Object.assign({}, state, {searchFilter: action.payload});
    case RA.PORTFOLIO_SORT_MODE:
      return Object.assign({}, state, {sortMode: action.payload});
      case RA.PORTFOLIO_VIEW_MODE:
      return Object.assign({}, state, {viewMode: action.payload});
    default: 
      return state;
  }
}

export default portfolioReducer;

// selector helpers

export const getData = (state) => (state.portfolio.data);
export const getSortMode = (state) => (state.portfolio.sortMode);

export const getFilters = (state) => ({
  search: state.portfolio.searchFilter, 
  sector: state.portfolio.sector, 
});


const enrichData = (d) => ({...d, 
  search: `${d.symbol.toLowerCase()} ${ d.sector.toLowerCase()} ${ d.company.toLowerCase()}`});

const filterTicker = (a, f) => {
  return (isNullOrWhitespace(f.search) ? true : a.search.includes(f.search.toLowerCase())) &&
    (isNullOrWhitespace(f.sign) ? true : a.sign === f.sign);
};

export const filteredTickersEx = (enrichedArtists, filters, sortMode) => {
  const filteredArtists = (enrichedArtists || []).filter(i => filterTicker(i,filters));
  return filteredArtists.sort((a, b) => sortArtists(a, b, sortMode));
}

// selectors

export const allTickers = createSelector([getData], items => {
  return (items || []).map(i => enrichData(i));
});

export const filteredTickers = createSelector([allTickers, getFilters, getSortMode], (enrichedData, filters, sortMode) => {
  return filteredTickersEx(enrichedData, filters, sortMode);
});

 
