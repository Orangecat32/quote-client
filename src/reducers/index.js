import {initialState} from '../store';
import { liveReducer } from "./liveReducer";
import { chartReducer } from "./chartReducer";
import {SELECT_GAME} from "../actions/index";
import portfolioReducer from './portfolioReducer';

  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      chart: chartReducer(state.chart, action),
      portfolio: portfolioReducer(state.portfolio, action),
      liveView: liveReducer(state.liveView, action),
      selectedModule: action.type === SELECT_GAME ? action.payload : state.selectedModule
    }
  }
  
  export default rootReducer;
