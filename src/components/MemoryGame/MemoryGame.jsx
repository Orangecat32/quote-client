import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon, Popover } from "@blueprintjs/core";

import {gameDescription} from './constants';
import {GameControl} from './GameControl/GameControl';
import {Gameboard} from './Gameboard/Gameboard';
import styles from './MemoryGame.scss';
import {Rules} from '../../shared/components/GameRules/Rules';
import {isGameComplete} from './utils';
import {ScorePanel} from './ScorePanel/ScorePanel'

export class MemoryGame extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <div className={styles.rulesContainer}>
          <Rules content={gameDescription()} show={this.props.showRules} onClick={() => this.props.appActions.memoryToggleRules()}/>   
        </div>
        {  isGameComplete(this.props.cards)  &&
        <div className={styles.gameOver} >
          <div>GAME OVER!</div>
          <Popover content={ScorePanel(this.props.history)} minimal >
            <Icon icon="info-sign"  iconSize={'calc(.65em)'} className={styles.infoIcon} />
          </Popover>
        </div>
        }
        <GameControl {...this.props} />
        <Gameboard {...this.props} />
      </div>
  );
}
}

MemoryGame.propTypes = {
  showAll: PropTypes.bool,
  cards: PropTypes.array,
  onClick: PropTypes.func,
  appActions: PropTypes.any,
  unflipAll: PropTypes.func,
  autoplayMode: PropTypes.bool,
  showRules: PropTypes.bool,
  history: PropTypes.array,
  memoryToggleRules: PropTypes.func
};

export default MemoryGame;
