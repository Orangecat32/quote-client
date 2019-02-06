
import {createSelector} from 'reselect';
import * as RA from "../actions/filterActions";

export const selectedPage = (state) => (state.selectedPage);

export function filterReducer(state, action) {
  console.log('filterReducer:', action.type);
  switch(action.type) {
    case RA.FILTER_SEARCH:
      return Object.assign({}, state, {searchFilter: action.payload});
    case RA.FILTER_SECTOR:
      return Object.assign({}, state, {selectedSector: action.payload, selectedFirm: ''});
    case RA.FILTER_FIRM:
      return Object.assign({}, state, {selectedFirm: action.payload});
    case RA.FILTER_VIEW_MODE:
      return Object.assign({}, state, {viewMode: action.payload});
    case RA.FILTER_CLEAR_PATH:
      return Object.assign({}, state, {selectedFirm: '', selectedSector: ''}); 
    default:
      return state;
  }
}

 export const selectedSector = (state) => state.filters.selectedSector; 
 export const selectedFirm = (state) => state.filters.selectedFirm; 
