import React from 'react';
import PropTypes from 'prop-types'; 

import {gameDescription} from './constants';
import {GameControl} from './GameControls/GameControl';
import {Scorecard} from './Scorecard/Scorecard';
import {Rules} from '../../shared/components/GameRules/Rules';
import * as styles from './BowlingGame.scss';

export class BowlingGame extends React.Component {
  render(){
    return(
      <div  className={styles.container}>
        <Rules 
          content={gameDescription()} 
          show={this.props.showRules} 
          onClick={() => this.props.appActions.bowlingToggleRules()}
        />
        <GameControl {...this.props} />
        <Scorecard {...this.props} /> 
      </div>
    )
  }
}

BowlingGame.propTypes = {
  frames: PropTypes.array,
  showRules: PropTypes.bool,
  rollBowlingBall: PropTypes.func,
  newBowlingGame: PropTypes.func,
  appActions: PropTypes.any,
  bowlingToggleRules: PropTypes.func
}

export default BowlingGame;
