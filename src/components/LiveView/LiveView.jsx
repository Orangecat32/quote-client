import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import styles from './liveView.scss';
import LiveRow from './LiveRow';

export class LiveView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('LiveView: Mount');
    this.props.appActions.connect();
  }

  componentWillUnmount() {
    console.log('LiveView: unmount'); 
  }

  render() {
    console.log('Render LiveView', this.props.tickers.length);
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
              { (this.props.tickers || []).map(t => (<div className={styles.tickerRow} key={t.symbol}><LiveRow {...t}/></div>)) }
            </div>
          </div>
        </div>
  
    ) ;
  }
}



LiveView.propTypes = {
  tickers: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  viewMode: PropTypes.any,
  appActions: PropTypes.object,
  filteresTickers: PropTypes.array
};



export default LiveView;

