
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as appActions from "../actions/";
import {Filters} from "../components/Filters/Filters";
import {filteredTickers, allSectors} from "../reducers/dataReducer";
import {selectedPage, selectedSector} from '../reducers/filterReducer'

export function mapStateToProps(state) {
    return { ...state, 
      filteredTickers: filteredTickers(state),
      selectedPage: selectedPage(state),
      sectors: allSectors(state),
      selectedSector: selectedSector(state),
      chartViewMode: state.chart.viewMode,
      tableViewMode: state.tableView.viewMode
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
  
  
  