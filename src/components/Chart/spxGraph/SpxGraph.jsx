import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import styles from './spxGraph.scss';
import { option } from './utils';
import { isNullOrWhitespace } from '../../../shared/utils';

export class SpxGraph extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
    this.onChartReady = this.onChartReady.bind(this);
  }

  onChartClick(param, echarts) {
    console.log('spx graph click', param, echarts);

    const ticker = param && param.data ? param.data[5] : null;

    if (isNullOrWhitespace(this.props.selectedSector)) {
      this.props.appActions.filterSector(ticker.sector);
    } else if (isNullOrWhitespace(this.props.selectedSubIndustry)) {
      this.props.appActions.filterSubIndustry(ticker.subIndustry);
    } else if (ticker) {
      this.props.appActions.filterTicker(ticker);
    }
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

    console.log(
      'render spx:',
      this.props.selectedSector,
      this.props.selectedSubIndustry
    );

    return (
      <div className={styles.container}>
        <ReactEcharts
          style={{ height: '100%', marginTop: '-30px' }}
          option={option(this.props)}
          notMerge={true}
          onChartReady={this.onChartReady}
          onEvents={onEvents}
        />
      </div>
    );
  }
}

SpxGraph.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string,
  selectedSubIndustry: PropTypes.string,
  portfolio: PropTypes.array,
  appActions: PropTypes.any
};

export default SpxGraph;
