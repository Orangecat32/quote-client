
import * as ACT from '../actions/tableViewActions';

export function tableReducer(state, action) {
  switch (action.type) {
    case ACT.TABLE_VIEW_VIEW_MODE:
      return Object.assign(state, {viewMode: action.payload });   
    case ACT.TABLE_VIEW_SETTINGS:
    default:
      return state;
  }
}

