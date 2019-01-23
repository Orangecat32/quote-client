
export const MAZE_GAME = 'Maze';
export const RAPPERS_DB = 'Rappers';
export const PORTFOLIO = 'Portfolio';
export const MATRIX = 'Matrix';
export const HISTORY = 'History';
export const PNL = 'pnl';
export const TICKER = 'ticker';
export const LIVE_PAGE = 'LivePage';
export const LIVE_VIEW = 'LiveView';


export const AvailablePages = process.env.NODE_ENV !== 'production' 
    ? [PORTFOLIO, LIVE_PAGE, LIVE_VIEW, RAPPERS_DB]
    : [LIVE_VIEW];
    