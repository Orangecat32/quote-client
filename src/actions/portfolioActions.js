import {portfolioRequest} from '../api/portfolioApi';

export const PORTFOLIO_BEGIN = 'PORTFOLIO_BEGIN';
export const PORTFOLIO_FAILED = 'PORTFOLIO_FAILED';
export const PORTFOLIO_SUCCESS = 'PORTFOLIO_SUCCESS';
export const PORTFOLIO_SORT_MODE = 'PORTFOLIO_SORT_MODE';
export const PORTFOLIO_SECTOR = 'PORTFOLIO_SECTOR';
export const PORTFOLIO_TOGGLE_ACTIVE = 'PORTFOLIO_TOGGLE_ACTIVE';
export const PORTFOLIO_SEARCH = 'PORTFOLIO_SEARCH';
export const PORTFOLIO_VIEW_MODE = 'PORTFOLIO_VIEW_MODE';

export const portfolioToggleActive = () => ({type: PORTFOLIO_TOGGLE_ACTIVE});
export const portfolioSortMode = (m) => ({type: PORTFOLIO_SORT_MODE, payload: m});
export const portfolioSearch = (s) => ({type: PORTFOLIO_SEARCH, payload: s});
export const portfolioViewMode = (v) => ({type: PORTFOLIO_VIEW_MODE, payload: v});

export const requestPortfolio = () => (dispatch, getState) => {
  const s = getState().portfolio;
  if(s.isLoading === true) {
    return;
  }
  
  dispatch({type: PORTFOLIO_BEGIN});

  portfolioRequest(s.sector)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch({type: PORTFOLIO_SUCCESS, payload: json});  
    })
    .catch(error => 
      dispatch({type: PORTFOLIO_FAILED, payload:error}));
}
    
// Handle HTTP errors because fetch does not
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

   