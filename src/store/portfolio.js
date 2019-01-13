import {SORT_NAME_DEC, VIEW_CARDS} from '../components/Portfolio/constants';

export const init = () => (
  { 
    error: null,
    isLoading: false,
    showActive: false,
    searchFilter: '',
    viewMode: VIEW_CARDS,
    sortMode: SORT_NAME_DEC,
    sector: '', 
    tickers: []
  });