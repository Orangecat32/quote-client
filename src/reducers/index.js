import {initialState} from '../store';
import { liveReducer } from "./liveReducer";
import { chartReducer } from "./chartReducer";
import { filterReducer } from "./filterReducer";
import { dataReducer } from "./dataReducer";
import {SELECT_PAGE} from "../actions/index";

  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      filters: filterReducer(state.filters, action),
      chart: chartReducer(state.chart, action),
      liveView: liveReducer(state.liveView, action),
      data: dataReducer(state.data, action),
      selectedPage: action.type === SELECT_PAGE ? action.payload : state.selectedPage
    }
  }
  
  export default rootReducer;
