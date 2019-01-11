
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/rappersActions.js";
import {RapperModule} from "../components/Rappers/RapperModule";
import {filteredArtists} from "../reducers/rappersReducer";

export function mapStateToProps(state) {
    return { ...state.rappers, filteredArtists: filteredArtists(state)};
  }
  
 export function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const RappersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RapperModule)
  
  export default RappersContainer;
  
  
  