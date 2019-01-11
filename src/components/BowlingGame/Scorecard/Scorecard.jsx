import React from 'react';
import PropTypes from 'prop-types'; 

import {FrameBox} from './FrameBox';
import {currentFrame } from '../utils.js';
import * as styles from './Scorecard.scss';

export const Scorecard = (props) => {
  const cf = currentFrame(props.frames);
  return (
    <div className={styles.gameBoardContainer}>
    {
      (props.frames || []).map(f => (
        <FrameBox key={f.frame} isCurrent={cf && cf.frame === f.frame} {...f} /> 
      ))
    }
  </div>
  )
};

Scorecard.propTypes = {
  frames: PropTypes.array,
}
