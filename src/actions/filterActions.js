
export const FILTER_SECTOR = 'FILTER_SECTOR';
export const FILTER_SEARCH = 'FILTER_SEARCH';
export const FILTER_REFRESH = 'FILTER_REFRESH';
export const FILTER_SETTINGS = 'FILTER_SETTINGS';
export const FILTER_VIEW_MODE = 'FILTER_VIEW_MODE';
export const FILTER_FIRM = 'FILTER_FIRM';
export const FILTER_CLEAR_PATH = 'FILTER_CLEAR_PATH';

export const filterSearch = (s) => ({type: FILTER_SEARCH, payload: s});
export const filterSector = (s) => ({type: FILTER_SECTOR, payload: s});
export const changeSettings = () => ({type: FILTER_SETTINGS});
export const filterFirm = (s) => ({type: FILTER_FIRM, payload: s});
export const filterClearPath = () => ({type: FILTER_CLEAR_PATH});
