import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import styles from './ChartModule.scss';
import * as CONST from './constants';
import SectorChart from './sectors/SectorChart';
import AllSectorsChart from './allSectors/AllSectorsChart';


export class ChartModule extends Component {
  render() {
  const view = this.props.viewMode === CONST.VIEW_SECTOR 
    ? (
      <div className={styles.container}>
        <div className={styles.item}>
          <AllSectorsChart {...this.props}/>
        </div>
        <div className={styles.item}>
          <SectorChart {...this.props}/>
        </div>
      </div>
      ) 
    : ('Under Construction');

    return (
      <div className={styles.container}>
       {view}
      </div>
    );
  }
}

ChartModule.propTypes = {
  viewMode: PropTypes.any,
  appActions: PropTypes.object
};


export default ChartModule;

/*

  <div>
          <SectorChart {...this.props}/>
          <AllSectorsChart {...this.props}/>
        </div>

        */
