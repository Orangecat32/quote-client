
export const MEMORY_GAME = 'Memory';
export const MAZE_GAME = 'Maze';
export const RAPPERS_DB = 'Rappers';
export const PORTFOLIO = 'Portfolio';
export const MATRIX = 'Matrix';
export const HISTORY = 'History';
export const PNL = 'pnl';
export const TICKER = 'ticker';
export const LIVE_PAGE = 'LivePage';
export const LIVE_VIEW = 'LiveView';


export const AvailableGames = process.env.NODE_ENV !== 'production' 
    ? [PORTFOLIO, LIVE_PAGE, LIVE_VIEW, MEMORY_GAME, RAPPERS_DB]
    : [MEMORY_GAME];
    