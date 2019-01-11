import React from 'react';

import styles from './ScorePanel.scss';
import {calcScore} from './calcScore'

export const ScorePanel = (clickHistory) => {
  const score = calcScore(clickHistory);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Click Efficiency</div>
        <table><tbody>
          <tr>
            <td className={styles.colTitle}>Excellent</td>
            <td>{`${score.level1.map(c => c.name).join(', ')}`}</td>
          </tr>
          <tr>
            <td className={styles.colTitle}>Good</td>
            <td>{`${score.level2.map(c => c.name).join(', ')}`}</td>
          </tr>
          <tr>
            <td className={styles.colTitle}>Poor</td>
            <td>{`${score.level3.map(c => c.name).join(', ')}`}</td>
          </tr>
          { score.level4.length > 0 &&
            <tr>
              <td className={styles.colTitle}>Very Poor</td>
              <td>{`${score.level4.map(c => c.name).join(', ')}`}</td>
            </tr> 
          }
          { score.luck.length > 0 &&
            <tr>
              <td className={styles.colTitle}>Lucky</td>
              <td>{`${score.luck.map(c => c.name).join(', ')}`}</td>
            </tr> 
          }
        </tbody></table>
      </div>
    )
};

