
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import {activeFilter, sortArtists} from '../components/Chart/util';

import * as RA from "../actions/chartActions";

export function chartReducer(state, action) {
  switch(action.type) {
    case RA.CHART_BEGIN:
      return Object.assign(state, {isLoading: action.payload, error: null }); 
    case RA.CHART_FAILED:
    {
      const message = action.payload && action.payload.message ? action.payload.message : 'error fetching data';
      return Object.assign(state, {error: message , artists: [], isLoading: false }); 
    }
    case RA.CHART_SUCCESS:
      return Object.assign(state, {data: action.payload, error: null, isLoading: false }); 
    case RA.CHART_TOGGLE_ACTIVE:
      return Object.assign({}, state, {showActive: !state.showActive});
    case RA.CHART_SEARCH:
      return Object.assign({}, state, {searchFilter: action.payload});
    case RA.CHART_SORT_MODE:
      return Object.assign({}, state, {sortMode: action.payload});
      case RA.CHART_VIEW_MODE:
      return Object.assign({}, state, {viewMode: action.payload});
    default: 
      return state;
  }
}

export default chartReducer;

// selector helpers

export const getData = (state) => (state.chart.data);
export const getSortMode = (state) => (state.chart.sortMode);

export const getFilters = (state) => ({
  search: state.chart.searchFilter, 
  active: state.chart.showActive
});


const enrichData = (d) => ({...d, 
  birthDate: new Date(d.birthday),
  search: `${d.name} ${ d.songs.join(' ')}`.toLowerCase()});

const filterFirm = (a, f) => {
  return (isNullOrWhitespace(f.search) ? true : a.search.includes(f.search)) &&
    (isNullOrWhitespace(f.sign) ? true : a.sign === f.sign) &&
    activeFilter(f.active, a.active);
};

export const filteredFirmsEx = (enrichedArtists, filters, sortMode) => {
  const filteredArtists = (enrichedArtists || []).filter(i => filterFirm(i,filters));
  return filteredArtists.sort((a, b) => sortArtists(a, b, sortMode));
}

// selectors

export const allFirms = createSelector([getData], items => {
  return (items || []).map(i => enrichData(i));
});

export const filteredFirms = createSelector([allFirms, getFilters, getSortMode], (firms, filters, sortMode) => {
  return filteredFirmsEx(firms, filters, sortMode);
});


