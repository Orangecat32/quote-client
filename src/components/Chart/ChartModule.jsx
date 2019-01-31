import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import styles from './ChartModule.scss';

import {isNullOrWhitespace} from '../../shared/utils';
import * as CONST from './constants';
import SectorChart from './sectors/SectorChart';

export class ChartModule extends Component {
  render() {
  const view = this.props.viewMode === CONST.VIEW_SECTOR 
    ? (<SectorChart {...this.props}/>) 
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
  appActions: PropTypes.any
};


export default ChartModule;
