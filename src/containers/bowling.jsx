
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/bowlingGame.js";
import {BowlingGame} from "../components/BowlingGame/BowlingGame";

function mapStateToProps(state) {
    return {...state.bowlingGame};
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const BowlingGameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(BowlingGame)
  
  export default BowlingGameContainer;
  
  
  