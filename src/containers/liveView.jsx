
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/liveView.js";
import {LiveView} from "../components/LiveView/LiveView";
import {filteredTickers} from "../reducers/liveReducer";

export function mapStateToProps(state) {
    return { ...state.liveView, filteredTickers: filteredTickers(state)};
  }
  
 export function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }
 
const LiveViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LiveView)
  
  export default LiveViewContainer;
  
  
  