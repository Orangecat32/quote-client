import React, { Component } from 'react';
import styles from './tableView.scss';

export class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  render() {
    const t = this.props;
    const pcSign = t.pc >= 0 ? '+' : '';
    const pc = t.pc ? t.pc * 100 : 0;

    return (
      <div 
        className={styles.rowItem} 
        // click sets state on the row to control details visibility
        onClick={() => {this.setState({showDetails: !this.state.showDetails})}} >
        <div className={styles.rowData}>
          <div className={styles.colSym}>{t.symbol}</div>
          <div className={styles.colData}>{t.last ? t.last.toFixed(2) : ''}</div>
          <div className={styles.colData}>{`${pcSign}${pc.toFixed(2)}%`}</div>
          <div className={styles.colData}>{t.bid ? t.bid.toFixed(2) : ''}</div>
          <div className={styles.colData}>{t.ask ? t.ask.toFixed(2) : ''}</div>
        </div>
        { this.state.showDetails &&
          <>
          <div className={styles.details}>{`${t.company} / ${t.subIndustry}`}</div> 
          <div className={styles.details}>{`HQ: ${t.Location}`}</div> 
          </>
        }
      </div>
    )}
}


export default TableRow;

