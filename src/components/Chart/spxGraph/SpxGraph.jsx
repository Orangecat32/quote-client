import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './spxGraph.scss';
//import {option} from './utils';

export class SpxGraph extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
    this.onChartReady = this.onChartReady.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);
  }

  onChartLegendselectchanged(param, echart) {
    console.log('legend click:', param, echart);
  }

  onChartReady(echarts) {
    console.log('echart is ready', echarts);
    this.echarts = echarts;
  }

  render() {
    return (
      <div className={styles.container} >
       {`Under construction - SPX graph`}
      </div>
    );
  }
}

SpxGraph.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string,
  portfolio: PropTypes.array,
  appActions: PropTypes.any
};


export default SpxGraph;

//   
