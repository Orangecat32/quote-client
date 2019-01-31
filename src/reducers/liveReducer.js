
import {createSelector} from 'reselect';
import {isNullOrWhitespace} from '../shared/utils';
import * as ACT from "../actions/liveViewActions";
import * as CONST from "../components/LiveView/constants";


export function liveReducer(state, action) {
  switch(action.type) {
    case ACT.LIVE_VIEW_VIEW_MODE:
      return Object.assign(state, {viewMode: action.payload });   
    case ACT.LIVE_VIEW_SETTINGS:
    default:
      return state;
  }
}

