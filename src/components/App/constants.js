
export const MEMORY_GAME = 'Memory';
export const BOWLING_GAME = 'Bowling';
export const MAZE_GAME = 'Maze';
export const RAPPERS_DB = 'Rappers';

export const AvailableGames = process.env.NODE_ENV !== 'production' 
    ? [MEMORY_GAME, BOWLING_GAME, RAPPERS_DB, MAZE_GAME]
    : [MEMORY_GAME, BOWLING_GAME];
    