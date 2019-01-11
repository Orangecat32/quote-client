
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/memoryGame.js";
import {MemoryGame} from "../components/MemoryGame/MemoryGame";

function mapStateToProps(state) {
    return {...state.memoryGame};
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const MemoryGameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MemoryGame)
  
  export default MemoryGameContainer;
  
  
  