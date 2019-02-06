import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 

import styles from './ChartModule.scss';
import * as CONST from './constants';
import SectorBar from './sectorBar/SectorBar';
import SectorPie from './sectorPie/SectorPie';
import SectorPath from './sectorPath/SectorPath';
import SpxGraph from './spxGraph/SpxGraph';
import FirmGraph from './firmGraph/FirmGraph';
import {isNullOrWhitespace} from '../../shared/utils';

export class ChartModule extends PureComponent {
  render() {
  const view = this.props.viewMode === CONST.VIEW_SECTOR 
    ? (
      <div className={styles.chartItems}>
        <div className={styles.itemAll} >
          <SectorPie {...this.props}/>
        </div>
        <div className={styles.chartPath}>
          <SectorPath {...this.props}/>
        </div>
        { !isNullOrWhitespace(this.props.selectedSector) && isNullOrWhitespace(this.props.selectedFirm) &&
          <div className={styles.itemSector}>
            <SectorBar {...this.props}/>
          </div>
        }
        { isNullOrWhitespace(this.props.selectedSector) && 
          <div className={styles.itemSector}>
            <SpxGraph {...this.props}/>
          </div>
        }
        { !isNullOrWhitespace(this.props.selectedFirm) &&
          <div className={styles.itemSector}>
            <FirmGraph {...this.props}/>
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
  selectedFirm: PropTypes.string,
  appActions: PropTypes.object
};


export default ChartModule;
