
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/chartActions.js";
import {ChartModule} from "../components/Chart/ChartModule";
import {filteredTickers} from "../reducers/dataReducer";

export function mapStateToProps(state) {
    return { ...state.chart, filteredTickers: filteredTickers(state)};
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
  
  
  