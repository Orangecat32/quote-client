import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import styles from './ChartModule.scss';
import * as CONST from './constants';
import SectorChart from './sectors/SectorChart';
import AllSectorsChart from './allSectors/AllSectorsChart';
import {isNullOrWhitespace} from '../../shared/utils';

export class ChartModule extends Component {
  render() {
  const view = this.props.viewMode === CONST.VIEW_SECTOR 
    ? (
      <div className={styles.chartItems}>
        <div className={styles.itemAll} >
          <AllSectorsChart {...this.props}/>
        </div>
        { !isNullOrWhitespace(this.props.selectedSector) &&
          <div className={styles.itemSector}>
            <SectorChart {...this.props}/>
          </div>
        }
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
  selectedSector: PropTypes.string,
  appActions: PropTypes.object
};


export default ChartModule;
