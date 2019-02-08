import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import styles from './gridView.scss';
import {columnDef} from './columns';

import { AgGridReact } from 'ag-grid-react';
import './grid.css';


export class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: columnDef
    };
  }
  
  componentWillReceiveProps(nextProps) {
   // console.log('GridView: componentWillReceiveProps'); 
    if(this.gridApi && nextProps.timer > this.props.timer) {
      this.gridApi.refreshCells({ columns: ['bid', 'ask','pc','last']});
      //  to keep grid from updating during an update ???
     // setTimeout(() => this.gridApi.refreshCells({ columns: ['bid', 'ask','pc','last']}),0);
    }
  }

  render() {
    return (
      <div className={`${styles.dataArea} ag-theme-balham-dark `} >
        <AgGridReact
          suppressScrollOnNewData
          onGridReady={ params => this.gridApi = params.api }
          columnDefs={this.state.columnDefs}
          rowData={this.props.filteredTickers}>

        </AgGridReact>
      </div>
    ) ;
  }
}



GridView.propTypes = {
  //tickers: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  appActions: PropTypes.object,
  timer: PropTypes.number,
  filteredTickers: PropTypes.array
};



export default GridView;

