import React from 'react';
import PropTypes from 'prop-types'; 

import { InputGroup} from '@blueprintjs/core';
import { handleStringChange } from '@blueprintjs/docs-theme';
import PickSector from './pickSector/PickSector';
import SettingsMenu from './settingsMenu/SettingsMenu';
import * as APP_CONST from '../App/constants.js';


import styles from './Filters.scss';

export class Filters  extends React.Component {
  render() {
    let p;
       var x = 9;
    const {appActions, selectedPage, searchFilter} = this.props;
    const handleFilterChange = handleStringChange(filterValue => appActions.filterSearch(filterValue));
    const isChartPage = selectedPage === APP_CONST.CHART_VIEW;
    const barStyle = `${styles.container} ${isChartPage ? `${styles.settings}` : ''}`;

    return (
        <div className={barStyle}>
          { !isChartPage &&
            <div className={styles.controls}>
              <InputGroup
                onChange={handleFilterChange}
              leftIcon="search"
              placeholder="Search..."
              type="search"
              value={searchFilter}
            />
            <PickSector {...this.props} /> 
          </div>
        }
        <SettingsMenu {...this.props} />
      </div>
    );
  }
}

Filters.propTypes = {
  searchFilter:  PropTypes.string,
  sectors: PropTypes.array,
  showActive: PropTypes.bool,
  tableViewMode: PropTypes.string,
  appActions: PropTypes.object,
  selectedPage: PropTypes.string,
  selectedSector: PropTypes.string,
  sortMode: PropTypes.string,
};

export default Filters;
