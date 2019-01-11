import {randomCardArray, hasUnmatched, isGameComplete} from '../components/MemoryGame/utils';
import {suggestNextCard} from '../components/MemoryGame/autoplay';

export const START_MEMORY_GAME = 'START_MEMORY_GAME';
export const SHOW_ALL = 'SHOW_ALL';
export const CLICK_CARD = 'CLICK_CARD';
export const UNFLIP_ALL = 'UNFLIP_ALL';
export const MEMORY_TOGGLE_RULES = 'MEMORY_TOGGLE_RULES';
export const MEMORY_AUTOPLAY_MODE = 'MEMORY_AUTOPLAY_MODE';

export const startGame = () => ({type: START_MEMORY_GAME, payload: randomCardArray()});
export const unflipAll = () => ({type: UNFLIP_ALL});
export const showAll = (show) => ({type: SHOW_ALL, show});
export const memoryToggleRules = () => ({type: MEMORY_TOGGLE_RULES});

export const clickCard = card => (dispatch, getState) => {
  const s = getState().memoryGame;
  if(s.pause || card.isMatched || card.isFlipped || s.autoplayMode === true) {
    //  ignore clicks when paused or card is already turned over
    return;
  }

  dispatch({type: CLICK_CARD, payload:card});
  if (getState().memoryGame.pause) {
    //  flip cards back over if unmatched but give user a little time to see they did not match
    setTimeout(() => {
      dispatch(unflipAll());
    }, 700);    
  }
}

export const autoplayMode = () => (dispatch, getState) => {
  dispatch({type: MEMORY_AUTOPLAY_MODE, payload: !getState().memoryGame.autoplayMode});

  let timer = null;
  clearInterval(timer);
  timer = setInterval(() => 
    {
      const s = getState().memoryGame; 
      if(isGameComplete(s.cards)) {
        clearInterval(timer);
        dispatch({type: MEMORY_AUTOPLAY_MODE, payload: false});
      }
      else if(!s.autoplayMode) {
        clearInterval(timer);
      } 
      else if(hasUnmatched(s.cards)) {
        dispatch(unflipAll());
      } 
      else {
        dispatch({type: CLICK_CARD, payload: suggestNextCard(s.cards)});
      }
    }, 200);
}
