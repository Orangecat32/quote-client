import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import * as CONST from './constants';
import styles from './tableView.scss';
import LiveTable from './LiveTable/LiveTable';
import GridView from './GridView/GridView';
import ViewTable from './ViewTable/ViewTable';

//import {isNullOrWhitespace} from '../../shared/utils';

export class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const view = this.props.viewMode === CONST.VIEW_TABLE 
      ? (<LiveTable {...this.props}/>) 
      : this.props.viewMode === CONST.VIEW_STATIC 
        ? (<ViewTable {...this.props}/>) 
        : (<GridView {...this.props}/>);

    return (
      <div className={styles.dataArea}>
        {view}
      </div>
    );
  }
}

TableView.propTypes = {
  tickers: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  timer: PropTypes.number,
  viewMode: PropTypes.string,
  appActions: PropTypes.object,
  filteredTickers: PropTypes.array,
};



export default TableView;

