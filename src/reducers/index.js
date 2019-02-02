import {initialState} from '../store';
import { tableReducer } from "./tableReducer";
import { chartReducer } from "./chartReducer";
import { filterReducer } from "./filterReducer";
import { dataReducer } from "./dataReducer";
import {SELECT_PAGE} from "../actions/index";

  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      filters: filterReducer(state.filters, action),
      chart: chartReducer(state.chart, action),
      tableView: tableReducer(state.tableView, action),
      data: dataReducer(state.data, action),
      selectedPage: action.type === SELECT_PAGE ? action.payload : state.selectedPage
    }
  }
  
  export default rootReducer;
