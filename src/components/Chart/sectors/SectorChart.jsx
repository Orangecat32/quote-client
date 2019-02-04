import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './sectorChart.scss';
import {option} from './utils';

import {isNullOrWhitespace} from '../../../shared/utils';


export class SectorChart extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
    this.onChartReady = this.onChartReady.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);
    this.props.appActions.filterSector(param.name);
  }

  onChartLegendselectchanged(param, echart) {
    console.log('legend click:', param, echart);
  }

  onChartReady(echarts) {
    console.log('echart is ready', echarts);
    this.echarts = echarts;
  }

  render() {
    const onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    };

    return (
      <div className={styles.container}>
        <div >
          <ReactEcharts
          style={{height: '1600px'}}
            option={option(this.props)}
            onChartReady={this.onChartReady}
            onEvents={onEvents} />
        </div>
      </div>
    );
  }
}

SectorChart.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  appActions: PropTypes.any
};


export default SectorChart;

//   
