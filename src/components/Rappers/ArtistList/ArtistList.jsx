import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './ArtistList.scss';
import {Card} from './Cards';


export class ArtistList extends React.Component {
  render() {
    const { filteredArtists } = this.props;
    return (
      <div className={styles.container} >
        {(filteredArtists || []).map(a => (<Card {...a}  key={a.id}/>))}
      </div>
    );
  }
}

ArtistList.propTypes = {
  filteredArtists: PropTypes.array,
};

export default ArtistList;
