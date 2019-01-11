export const NEW_BOWLING_GAME = 'NEW_BOWLING_GAME';
export const ROLL_BOWLING_BALL = 'ROLL_BOWLING_BALL';
export const BOWLING_TOGGLE_RULES = 'BOWLING_TOGGLE_RULES';

export const newBowlingGame = () => ({type: NEW_BOWLING_GAME});
export const bowlingToggleRules = () => ({type: BOWLING_TOGGLE_RULES});
export const rollBowlingBall = (availablePins) => ({type: ROLL_BOWLING_BALL, payload: availablePins});

