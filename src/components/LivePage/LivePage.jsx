import React, { Component } from 'react';
import {requestUpdates} from '../../api/liveApi';
import PropTypes from 'prop-types'; 
import styles from './livePage.scss';
import TickerRow from './TickerRow';

export class LivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCallback = this.updateCallback.bind(this);
  }

  componentDidMount() {
    requestUpdates(this.updateCallback);
  }

  updateCallback(data) {
    if(!data) {
      console.log('no data LivePage');
      return;
    }

    if(data['tickers']) {
      console.log('updateCallback', data['tickers']);
      this.setState({tickers: data['tickers']});    
    }
  }

  render() {
    return (
        <div className={styles.container}>
          <div className={styles.content}>
            <header className={styles.header}>
              <div className={styles.colSym}>Symbol</div>
              <div className={styles.colHdr}>Last</div>
              <div className={styles.colHdr}>Change</div>
              <div className={styles.colHdr}>Bid</div>
              <div className={styles.colHdr}>Ask</div>
            </header>
            <div className={styles.dataArea}>  
              { (this.state.tickers || []).map(t => (<div className={styles.tickerRow} key={t.symbol}><TickerRow {...t}/></div>)) }
            </div>
          </div>
        </div>
  
    ) ;
  }
}

export default LivePage;


//  <div className={styles.container}>
