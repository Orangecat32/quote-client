import {initialState} from '../store';
import { bowlingReducer } from "./bowlingReducer";
import { memoryReducer } from "./memoryReducer";
import { rappersReducer } from "./rappersReducer";
import {SELECT_GAME} from "../actions/index";
import portfolioReducer from './portfolioReducer';

  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      rappers: rappersReducer(state.rappers, action),
      portfolio: portfolioReducer(state.portfolio, action),
      memoryGame: memoryReducer(state.memoryGame, action),
      bowlingGame: bowlingReducer(state.bowlingGame, action),
      selectedModule: action.type === SELECT_GAME ? action.payload : state.selectedModule
    }
  }
  
  export default rootReducer;
