import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import styles from './gridView.scss';
import {columnDef} from './columns';

import { AgGridReact } from 'ag-grid-react';


export class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: undefined,
      columnDefs: columnDef
    };
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('GridView: componentWillReceiveProps'); 
    if(this.gridApi) {
      //  to keep grid from updating during an update
      setTimeout(() => this.gridApi.setRowData(nextProps.tickers),0);
    }
  }

  render() {
    console.log('Render GridView', this.props.tickers.length);
    return (
      <div className={`${styles.dataArea} ag-theme-balham-dark `} >
        <AgGridReact
          onGridReady={ params => this.gridApi = params.api }
          columnDefs={this.state.columnDefs}
          rowData={this.props.tickers}>
        </AgGridReact>
      </div>
    ) ;
  }
}



GridView.propTypes = {
  tickers: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  appActions: PropTypes.object,
  filteresTickers: PropTypes.array
};



export default GridView;

