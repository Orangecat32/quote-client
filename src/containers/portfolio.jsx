
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/portfolioActions.js";
import {PortfolioModule} from "../components/Portfolio/PortfolioModule";
import {filteredTickers} from "../reducers/portfolioReducer";

export function mapStateToProps(state) {
    return { ...state.portfolio, filteredTickers: filteredTickers(state)};
  }
  
 export function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const PortfolioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PortfolioModule)
  
  export default PortfolioContainer;
  
  
  