import React from 'react';
import PropTypes from 'prop-types'; 

import * as styles from './FrameBox.scss';
import {TENTH_FRAME} from '../constants.js';
import {scoreBox1, scoreBox2, scoreBox3} from '../utils.js';

export const FrameBox = (props) => {
  const frameClass = `${styles.frameBox} ${props.frame === TENTH_FRAME ? styles.tenth : ''}  ${props.isCurrent ? styles.shadow : ''}`;
    return ( 
      <div className={frameClass} >
        <div className={`${styles.frameNumber} ${!props.isCurrent ? styles.unSelectedBk : ''}`}>
          {props.frame + 1}
        </div>    
        <div className={styles.markArea}>
          <div className={`${styles.scoreBox} ${props.frame === TENTH_FRAME ? styles.markTenth : ''}`} >
            {scoreBox1(props)} 
          </div>
          <div className={`${styles.scoreBox} ${styles.mark}`}>
            {scoreBox2(props)} 
          </div>
          <div className={`${styles.scoreBox} ${styles.mark}`}>
            {scoreBox3(props)} 
          </div>
        </div>
      <div className={styles.totalScore}>
        {!props.complete || isNaN(props.totalScore) ? '' : props.totalScore}
      </div>
    </div>
  )};

  FrameBox.propTypes = {
    isCurrent: PropTypes.bool,
    complete: PropTypes.bool,
    totalScore: PropTypes.number,
    frame: PropTypes.number
  }

export default FrameBox;
  

  