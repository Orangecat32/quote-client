import React from 'react';
import PropTypes from 'prop-types'; 

import { Button, Switch } from "@blueprintjs/core";
import styles from './GameControl.scss';
import {calcScore} from '../ScorePanel/calcScore.js';

export class GameControl extends React.Component {
  render() {
    calcScore(this.props.history);
    return (
      <div className={styles.memoryGameControls}>
        <Button text="Restart" onClick={() => this.props.appActions.startGame()} />
        {`Clicks: ${this.props.clickCount}`}
        <Switch 
          checked={this.props.showAll} 
          label="Show All" 
          style={{marginTop:'6px'}}
          onChange={() => this.props.appActions.showAll()}
        />
         <Switch 
          checked={this.props.autoplayMode} 
          label="Autoplay" 
          style={{marginTop:'6px'}}
          onChange={() => this.props.appActions.autoplayMode()}
        />
      </div>
    );
  }
}

GameControl.propTypes = {
  showAll: PropTypes.bool,
  history: PropTypes.array,
  clickCount: PropTypes.number,
  autoplayMode: PropTypes.bool,
  appActions: PropTypes.object,
  startGame: PropTypes.func
};

export default GameControl;
