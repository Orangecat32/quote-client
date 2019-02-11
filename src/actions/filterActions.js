
export const FILTER_SECTOR = 'FILTER_SECTOR';
export const FILTER_SEARCH = 'FILTER_SEARCH';
export const FILTER_REFRESH = 'FILTER_REFRESH';
export const FILTER_SETTINGS = 'FILTER_SETTINGS';
export const FILTER_VIEW_MODE = 'FILTER_VIEW_MODE';
export const FILTER_FIRM = 'FILTER_FIRM';
export const FILTER_SUBINDUSTRY = 'FILTER_SUBINDUSTRY';
export const FILTER_CLEAR_PATH = 'FILTER_CLEAR_PATH';
export const FILTER_EXACT_FIRM = 'FILTER_EXACT_FIRM';
export const FILTER_TICKER = 'FILTER_TICKER';

export const filterSearch = (s) => ({type: FILTER_SEARCH, payload: s});
export const filterSector = (s) => ({type: FILTER_SECTOR, payload: s});
export const filterSubIndustry = (s) => ({type: FILTER_SUBINDUSTRY, payload: s});
export const filterFirm = (s) => ({type: FILTER_FIRM, payload: s} );
export const filterClearPath = () => ({type: FILTER_CLEAR_PATH});

export const filterTicker = (ticker) => filterExactFirm(ticker.sector, ticker.subIndustry, ticker.symbol);


export const filterExactFirm = (sector, subIndustry, symbol) =>
  ({type: FILTER_EXACT_FIRM, payload: {sector, subIndustry, symbol}});



