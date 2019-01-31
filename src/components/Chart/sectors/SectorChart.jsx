import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './sectorChart.scss';
import {getOption} from './utils';

import {isNullOrWhitespace} from '../../../shared/utils';


export class SectorChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
    };

    this.onChartClick = this.onChartClick.bind(this);
  }

  componentDidMount() {
   
  }

  
  onChartClick(param, echarts) {
    console.log(param, echarts);
    alert('chart click');
    this.setState({
      cnt: this.state.cnt + 1,
    })
  }

  onChartLegendselectchanged(param, echart) {
    console.log(param, echart);
    alert('chart legendselectchanged');
  }

  onChartReady(echarts) {
    console.log('echart is ready', echarts);
  }

  render() {
    const props = this.props;
    const onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    };

    return (
      <div className={styles.container}>
        <ReactEcharts
            option={getOption(this.props)}
            onChartReady={this.onChartReady}
            onEvents={onEvents} />
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

//   style={{height: 300}}
