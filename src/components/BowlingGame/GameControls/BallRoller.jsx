import React from 'react';
import PropTypes from 'prop-types'; 
import { Button } from "@blueprintjs/core";

import * as styles from './BallRoller.scss';
import {availablePins} from '../utils.js';

export const BallRoller = (props) => {
  const frame = props.frame;
  const pins = Array.from({length: availablePins(frame) + 1}, (v, k) => k++)
              .map(p => <Button 
                    className={styles.pinButton} 
                    style={{minWidth: '27px', minHeight: '27px', padding: '3px 7px'}}
                    text={p} 
                    key={p} 
                    onClick={() => props.appActions.rollBowlingBall(p)} 
                  /> );

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.pinSelector}>
        {'Click the number of pins to knock down'}
      </div> 
      <div className={styles.pinBox} >
        {pins}
      </div>
    </div>
    )
  };

  BallRoller.propTypes = {
    frame: PropTypes.object,
    appActions: PropTypes.any,
    rollBowlingBall: PropTypes.func
  }

export default BallRoller;
