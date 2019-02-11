import {initialState} from '../store';
import { tableReducer } from './tableReducer';
import { chartReducer } from './chartReducer';
import { filterReducer } from './filterReducer';
import { dataReducer } from './dataReducer';
import { iexHistReducer } from './iexHistReducer';
import {SELECT_PAGE} from '../actions/index';

export function rootReducer(state = initialState, action) {
  return {
    ...state,
    selectedPage: action.type === SELECT_PAGE ? action.payload : state.selectedPage,
    filters: filterReducer(state.filters, action),
    chart: chartReducer(state.chart, action),
    tableView: tableReducer(state.tableView, action),
    data: dataReducer(state.data, action),
    iexHist: iexHistReducer(state.iexHist, action),
  };
}
  
export default rootReducer;
