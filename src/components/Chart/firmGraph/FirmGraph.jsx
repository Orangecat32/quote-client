import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './firmGraph.scss';
//import {option} from './utils';

export class FirmGraph extends PureComponent {
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
        {`Under construction - firmview: ${this.props.selectedFirm}`}
      </div>
    );
  }
}

FirmGraph.propTypes = {
  selectedFirm: PropTypes.string,
  selectedSector: PropTypes.string,
  appActions: PropTypes.any
};


export default FirmGraph;

