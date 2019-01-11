import React from 'react';

import styles from './ScorePanel.scss';
import {calcScore} from './calcScore'

export const ScorePanel = (clickHistory) => {
  const score = calcScore(clickHistory);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Click Efficiency</div>
        <div className={styles.items}>
          <div className={styles.row}>
            <div className={styles.title}>Excellent</div>
            <div className={styles.data}>{`${score.level1.map(c => c.name).join(', ')}`}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Good</div>
            <div className={styles.data}>{`${score.level2.map(c => c.name).join(', ')}`}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Poor</div>
            <div className={styles.data}>{`${score.level3.map(c => c.name).join(', ')}`}</div>
          </div>
          { score.level4.length > 0 &&
            <div className={styles.row}>
              <div className={styles.title}>Very Poor</div>
              <div className={styles.data}>{`${score.level4.map(c => c.name).join(', ')}`}</div>
            </div>
          }
          <div className={styles.row}>
            <div className={styles.title}>Lucky</div>
            <div className={styles.data}>{`${score.luck.map(c => c.name).join(', ')}`}</div> 
          </div>
      </div>
    </div>
    )
};