
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as appActions from "../actions/";
import {Filters} from "../components/Filters/Filters";
import {filteredTickers, allSectors} from "../reducers/dataReducer";
import {selectedPage} from '../reducers/filterReducer'

export function mapStateToProps(state) {
    return { ...state, 
      filteredTickers: filteredTickers(state),
      selectedPage: selectedPage(state),
      sectors: allSectors(state),
      chartViewMode: state.chart.viewMode,
      liveViewMode: state.liveView.viewMode
    };
  }
  
 export function mapDispatchToProps(dispatch) {
    return {appActions: bindActionCreators(appActions, dispatch)}
  }

 
const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filters)
  
  export default FilterContainer;
  
  
  