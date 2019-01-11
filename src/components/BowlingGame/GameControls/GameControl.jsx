import React from 'react';
import PropTypes from 'prop-types'; 

import {BallRoller} from './BallRoller';
import { Button } from "@blueprintjs/core";
import * as styles from './GameControl.scss';
import {isGameComplete, currentFrame } from '../utils.js';

export const GameControl = (props) => {
  const gameOver = isGameComplete(props.frames);
  const cf = currentFrame(props.frames);

  return (
    <div className={styles.gameControls}>
      { gameOver &&
        <div className={styles.gameOver}>
          GAME OVER!
        </div>
      }
      { !gameOver &&
        <BallRoller frame={cf} {...props} />
      }
      { !gameOver && 
        <div className={styles.frameCount}>
          {`Frame ${cf.frame + 1}, Ball ${cf.rolls.length + 1}  `}   
        </div>
      }
      <Button text="Restart" onClick={() => props.appActions.newBowlingGame()} />
    </div>
  )
}

GameControl.propTypes = {
  frames: PropTypes.array,
  appActions: PropTypes.any,
  rollBowlingBall: PropTypes.func,
  newBowlingGame: PropTypes.func
}
