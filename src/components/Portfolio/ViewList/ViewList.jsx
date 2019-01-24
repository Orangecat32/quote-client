import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './ViewList.scss';
import {Card} from './Cards';


export class FirmList extends React.Component {
  render() {
    const { filteredFirms } = this.props;
    return (
      <div className={styles.container} >
        {(filteredFirms || []).map(a => (<Card {...a}  key={a.id}/>))}
      </div>
    );
  }
}

FirmList.propTypes = {
  filteredFirms: PropTypes.array,
};

export default FirmList;
