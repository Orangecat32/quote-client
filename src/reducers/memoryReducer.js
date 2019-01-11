import {SHOW_ALL, CLICK_CARD, UNFLIP_ALL, START_MEMORY_GAME, MEMORY_TOGGLE_RULES, MEMORY_AUTOPLAY_MODE} from "../actions/index";
import {createCards, clickCard, hasUnmatched} from '../components/MemoryGame/utils';


  export function memoryReducer(state, action) {
    switch(action.type) {
      case START_MEMORY_GAME:
        return Object.assign({}, state, {cards: createCards(action.payload), clickCount: 0, pause: false, history: [] }); 
      case UNFLIP_ALL:
      {
        const ufc = state.cards.map(c => c.isFlipped ? Object.assign({}, c , {isFlipped: false}) : c);
        return  Object.assign({}, state, {cards: ufc, pause: false });
      }
      case CLICK_CARD:
      {
        const clickedCard = action.payload;
        const clickCount = state.clickCount + 1;
        const result = clickCard(state.cards, clickedCard, clickCount);
        if(result === null) {
          return state;
        }

        const hasChanged = (result.cards || []).length !== 0;
        const unmatched = hasUnmatched(result.cards);
        return !hasChanged ? state : Object.assign({}, state, 
          {
            cards: result.cards, 
            clickCount,
            pause: unmatched,
            history: state.history.concat(result.clickedCard)
          });
        }
      case SHOW_ALL:
        return Object.assign({}, state, {showAll: !state.showAll});
      case MEMORY_AUTOPLAY_MODE:
        return Object.assign({}, state, {autoplayMode: action.payload, pause: false});
      case MEMORY_TOGGLE_RULES:
        return Object.assign({}, state, {showRules: !state.showRules});
      default: 
        return state;
    }
  }
  
  export default memoryReducer;
