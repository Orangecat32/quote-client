import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import styles from './firmGraph.scss';
import { option } from './utils';

export class FirmGraph extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);
  }

  render() {
    if (this.props.iexHist.isLoading) {
      return <>{`Loading chart...`}</>;
    }

    if (this.props.iexHist.error && !this.props.iexHist.isLoading) {
      return <>{`Problem with chart: ${this.props.iexHist.error}`}</>;
    }

    const onEvents = {
      click: this.onChartClick
    };

    return (
      <div className={styles.container}>
        <ReactEcharts
          style={{ height: '100%' }}
          option={option(this.props)}
          onChartReady={this.onChartReady}
          onEvents={onEvents}
        />
      </div>
    );
  }
}

FirmGraph.propTypes = {
  iexHist: PropTypes.any,
  appActions: PropTypes.any
};

export default FirmGraph;
