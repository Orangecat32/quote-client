
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions";
import {ChartModule} from "../components/Chart/ChartModule";
import {filteredTickers, allSectors, getPortfolio, sectorNames} from "../reducers/dataReducer";
import {selectedSector, selectedFirm, selectedSubIndustry} from "../reducers/filterReducer";

export function mapStateToProps(state) {
    return { ...state.chart, 
    //  filteredTickers: filteredTickers(state),
      portfolio: getPortfolio(state),
      sectors: sectorNames(state),
      allSectors: allSectors(state),
      selectedFirm: selectedFirm(state),
      selectedSubIndustry: selectedSubIndustry(state),
      selectedSector: selectedSector(state)
    };
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
  
  
  