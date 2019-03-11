import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import styles from './sectorSunburst.scss';
import { option } from './utils';

export class SectorSunburst extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);
    this.props.appActions.filterSector(param.name);
  }

  onChartLegendselectchanged(param, echart) {
    console.log(param, echart);
    alert('chart legendselectchanged');
  }

  onChartReady(echarts) {
    console.log('echart is ready', echarts);
  }

  render() {
    const onEvents = {
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged
    };

    return (
      <div className={styles.container}>
        <ReactEcharts
          option={option(this.props)}
          onChartReady={this.onChartReady}
          // onEvents={onEvents}
        />
      </div>
    );
  }
}

SectorSunburst.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  appActions: PropTypes.any
};

export default SectorSunburst;
