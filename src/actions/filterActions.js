
export const FILTER_SECTOR = 'FILTER_SECTOR';
export const FILTER_SEARCH = 'FILTER_SEARCH';
export const FILTER_REFRESH = 'FILTER_REFRESH';
export const FILTER_SETTINGS = 'FILTER_SETTINGS';
export const FILTER_SORT_MODE = 'FILTER_SORT_MODE';
export const FILTER_VIEW_MODE = 'FILTER_VIEW_MODE';

export const filterSearch = (s) => ({type: FILTER_SEARCH, payload: s});
export const changeSettings = () => ({type: FILTER_SETTINGS});
