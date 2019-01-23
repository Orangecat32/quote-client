
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/chartActions.js";
import {ChartModule} from "../components/Chart/ChartModule";
import {filteredFirms} from "../reducers/chartReducer";

export function mapStateToProps(state) {
    return { ...state.chart, filteredFirms: filteredFirms(state)};
  }
  
 export function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const ChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChartModule)
  
  export default ChartContainer;
  
  
  