import React from 'react';
import PropTypes from 'prop-types'; 

import {ageDisplay} from '../util';
import styles from './Cards.scss';


export const Card = (props) => {
  const status = props.active === true ? 'Active' 
    : props.active === false ? 'Inactive' : 'Unknown';

  return (
    <div className={styles.container}>
      <div className={styles.topLine}>
        <div className={styles.name}>
          {`${props.name} ` }
        </div>
        <div className={styles.other}>
          <div>
            {`${status}`}
          </div>
          <div>
            {`Age:${ageDisplay(props.birthDate)}`}
          </div>
         
        </div>
      </div>
      <ul className={styles.songList}>
        {props.songs.map(s => (<li key={s}>{s}</li>))}
      </ul>
    </div>
  )
};

Card.propTypes = {
  name: PropTypes.string,
  birthDate: PropTypes.object,
  active: PropTypes.bool,
  songs: PropTypes.array
}

