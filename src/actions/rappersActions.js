import {makeRequest} from '../api/rappersApi';

export const RAPPERS_ARTISTS_BEGIN = 'RAPPERS_ARTISTS_BEGIN';
export const RAPPERS_ARTISTS_FAILED = 'RAPPERS_ARTISTS_FAILED';
export const RAPPERS_ARTISTS_SUCCESS = 'RAPPERS_ARTISTS_SUCCESS';
export const RAPPERS_SORT_MODE = 'RAPPERS_SORT_MODE';
export const RAPPERS_TOGGLE_ACTIVE = 'RAPPERS_TOGGLE_ACTIVE';
export const RAPPERS_SEARCH = 'RAPPERS_SEARCH';
export const RAPPERS_VIEW_MODE = 'RAPPERS_VIEW_MODE';

export const rappersToggleActive = () => ({type: RAPPERS_TOGGLE_ACTIVE});
export const rappersSortMode = (m) => ({type: RAPPERS_SORT_MODE, payload: m});
export const searchRappers = (s) => ({type: RAPPERS_SEARCH, payload: s});
export const rappersViewMode = (v) => ({type: RAPPERS_VIEW_MODE, payload: v});

export const requestRappers = () => (dispatch, getState) => {
  const s = getState().rappers;
  if(s.isLoading === true) {
    return;
  }
  
  dispatch({type: RAPPERS_ARTISTS_BEGIN, payload: !s.isLoading});
  makeRequest()
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch({type: RAPPERS_ARTISTS_SUCCESS, payload: json});  
    })
    .catch(error => 
      dispatch({type: RAPPERS_ARTISTS_FAILED, payload:error}));
}
    
// Handle HTTP errors because fetch does not
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

   