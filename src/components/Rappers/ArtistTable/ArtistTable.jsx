import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './ArtistTable.scss';

import {ageDisplay} from '../util';


export class ArtistTable extends React.Component {
  render() {
    const { filteredArtists } = this.props;
    return (
      <div className={styles.container}>
        <table className={styles.artistTable}>
        <thead>
            <tr>
                <th>Artist</th>
                <th>Active</th>
                <th>Age</th>
                <th>Top Songs</th>
            </tr>
        </thead>
        <tbody>
          {
            filteredArtists.map(a => (
              <tr key={a.id}>
                <td className={styles.name}>{a.name}</td>
                <td className={styles.active}>{`${a.active ? 'active' : 'inactive'}`}</td>
                <td className={styles.age}>{ageDisplay(a.birthDate)}</td>
                <td className={styles.songs}>
                  {
                    (a.songs || []).map(s => (
                      <div className={styles.song} key={s}>{s}</div>))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    );
  }
}

ArtistTable.propTypes = {
  filteredArtists: PropTypes.array,
};

export default ArtistTable;
