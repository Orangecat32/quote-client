import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import styles from './liveView.scss';
import TableView from './TableView/TableView';
import GridView from './GridView/GridView';

export class LiveView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('LiveView: Mount');
  }

  componentWillUnmount() {
    console.log('LiveView: unmount'); 
  }


  render() {
    console.log('Render LiveView', this.props.tickers.length);
    return (
        <div className={styles.container}>
          <GridView {...this.props} />
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

