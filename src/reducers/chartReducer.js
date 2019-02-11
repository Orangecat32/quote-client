
// import {createSelector} from 'reselect';
import * as ACT from '../actions/chartActions';


export function chartReducer(state, action) {
  switch (action.type) {
    case ACT.CHART_VIEW_MODE:
      return Object.assign(state, {viewMode: action.payload });   
    default:
      return state;
  }
}


export default chartReducer;


