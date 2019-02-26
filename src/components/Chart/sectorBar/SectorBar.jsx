import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import styles from './sectorBar.scss';
import { option } from './utils';

export class SectorBar extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
    this.onChartReady = this.onChartReady.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);
    this.props.appActions.filterFirm(param.name);
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
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged
    };

    const count = this.props.portfolio.filter(
      (f) => f.sector === this.props.selectedSector
    ).length;

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          {`${count} ${this.props.selectedSector} Firms by Mkt Cap`}
        </div>
        <div className={styles.graph}>
          <ReactEcharts
            style={{ height: `${count * 25}px`, marginTop: '-40px' }}
            option={option(this.props)}
            onChartReady={this.onChartReady}
            onEvents={onEvents}
          />
        </div>
      </div>
    );
  }
}

SectorBar.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string,
  portfolio: PropTypes.array,
  appActions: PropTypes.any
};

export default SectorBar;

//
