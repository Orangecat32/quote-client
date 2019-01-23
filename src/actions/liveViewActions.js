//import {requestUpdates} from '../api/liveApi';

export const LIVE_VIEW_REFRESH = 'LIVE_VIEW_REFRESH';
export const LIVE_VIEW_SETTINGS = 'LIVE_VIEW_SETTINGS';

export const LIVE_VIEW_CONNECT = 'LIVE_VIEW_CONNECT';
export const LIVE_VIEW_END = 'LIVE_VIEW_END';
export const LIVE_VIEW_SUBSCRIBE_FAILED = 'LIVE_VIEW_SUBSCRIBE_FAILED';
export const LIVE_VIEW_SUBSCRIBE_SUCCESS = 'LIVE_VIEW_SUBSCRIBE_SUCCESS';
export const LIVE_VIEW_SUBSCRIBE_UPDATE = 'LIVE_VIEW_SUBSCRIBE_UPDATE';
export const LIVE_VIEW_SORT_MODE = 'LIVE_VIEW_SORT_MODE';
export const LIVE_VIEW_TOGGLE_ACTIVE = 'LIVE_VIEW_TOGGLE_ACTIVE';
export const LIVE_VIEW_SEARCH = 'LIVE_VIEW_SEARCH';
export const LIVE_VIEW_VIEW_MODE = 'LIVE_VIEW_VIEW_MODE';
export const LIVE_VIEW_GET_INDEX = 'LIVE_VIEW_GET_INDEX';
export const LIVE_VIEW_LOGIN = 'LIVE_VIEW_LOGIN';
export const LIVE_VIEW_ERROR = 'LIVE_VIEW_ERROR';
export const LIVE_VIEW_UPDATE = 'LIVE_VIEW_UPDATE';

export const refresh = () => ({type: LIVE_VIEW_REFRESH});
export const changeSettings = () => ({type: LIVE_VIEW_SETTINGS});
export const connect = () => ({type: LIVE_VIEW_CONNECT});
export const disconnect = () => ({type: LIVE_VIEW_END});
export const getIndex = () => ({type: LIVE_VIEW_GET_INDEX});
export const update = (data) => ({type: LIVE_VIEW_UPDATE, payload: data});

export const login = () => ({type: LIVE_VIEW_LOGIN});

export const errorOccured = (message) => ({type: LIVE_VIEW_ERROR, payload: message});




// export const beginUpdates = () => (dispatch, getState) => {
//   const s = getState().liveView;
//   if(s.isLoading === true) {
//     return;
//   }
  
//   dispatch({type: LIVE_VIEW_BEGIN, payload: !s.isLoading});
  // requestUpdates()
  //   .then(handleErrors)
  //   .then(res => res.json())
  //   .then(json => {
  //     dispatch({type: RAPPERS_ARTISTS_SUCCESS, payload: json});  
  //   })
  //   .catch(error => 
  //     dispatch({type: RAPPERS_ARTISTS_FAILED, payload:error}));
//}
 



/*

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

   
*/


