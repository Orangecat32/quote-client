
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import {activeFilter, sortArtists} from '../components/Rappers/util';

import * as RA from "../actions/rappersActions";

export function rappersReducer(state, action) {
  switch(action.type) {
    case RA.RAPPERS_ARTISTS_BEGIN:
      return Object.assign(state, {isLoading: action.payload, error: null }); 
    case RA.RAPPERS_ARTISTS_FAILED:
    {
      const message = action.payload && action.payload.message ? action.payload.message : 'error fetching data';
      return Object.assign(state, {error: message , artists: [], isLoading: false }); 
    }
    case RA.RAPPERS_ARTISTS_SUCCESS:
      return Object.assign(state, {data: action.payload, error: null, isLoading: false }); 
    case RA.RAPPERS_TOGGLE_ACTIVE:
      return Object.assign({}, state, {showActive: !state.showActive});
    case RA.RAPPERS_SEARCH:
      return Object.assign({}, state, {searchFilter: action.payload});
    case RA.RAPPERS_SORT_MODE:
      return Object.assign({}, state, {sortMode: action.payload});
      case RA.RAPPERS_VIEW_MODE:
      return Object.assign({}, state, {viewMode: action.payload});
    default: 
      return state;
  }
}

export default rappersReducer;

// selector helpers

  export const getData = (state) => (state.rappers.data);
  export const getSortMode = (state) => (state.rappers.sortMode);
  
  export const getFilters = (state) => ({
    search: state.rappers.searchFilter, 
    ageHigh: state.rappers.ageHigh, 
    ageLow: state.rappers.ageLow, 
    zodiac: state.rappers.zodiac,
    active: state.rappers.showActive
  });


  const enrichData = (d) => ({...d, 
    birthDate: new Date(d.birthday),
    search: `${d.name} ${ d.songs.join(' ')}`.toLowerCase()});

  const filterArtist = (a, f) => {
    return (isNullOrWhitespace(f.search) ? true : a.search.includes(f.search)) &&
      (isNullOrWhitespace(f.sign) ? true : a.sign === f.sign) &&
      activeFilter(f.active, a.active);
  };

  export const filteredArtistsEx = (enrichedArtists, filters, sortMode) => {
    const filteredArtists = (enrichedArtists || []).filter(i => filterArtist(i,filters));
    return filteredArtists.sort((a, b) => sortArtists(a, b, sortMode));
  }

// selectors
  
  export const allArtists = createSelector([getData], items => {
    return (items || []).map(i => enrichData(i));
  });

  export const filteredArtists = createSelector([allArtists, getFilters, getSortMode], (enrichedArtists, filters, sortMode) => {
    return filteredArtistsEx(enrichedArtists, filters, sortMode);
  });

 
