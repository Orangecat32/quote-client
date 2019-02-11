import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './sectorPie.scss';
import {graphOptions} from './utils';
import * as CONST from './constants';

export class SectorPie extends PureComponent {
  constructor(props) {
    super(props);

    this.onChartClick = this.onChartClick.bind(this);
  }

  onChartClick(param, echarts) {
    console.log(param, echarts);

    switch (param.seriesName) {
      case CONST.SERIES_SECTOR:
        this.props.appActions.filterSector(param.name);
        break;
      case CONST.SERIES_SUBINDUSTRY:
        this.props.appActions.filterSubIndustry(param.name);
        break;
      case CONST.SERIES_FIRM:
        this.props.appActions.filterFirm(param.name);
        break;
      case CONST.SERIES_INDEX:
      default:
        this.props.appActions.filterSector('');
        break;
    }
  }

  onChartLegendselectchanged(param, echart) {
    console.log(param, echart);
  }

  onChartReady(echarts) {
    console.log('echart is ready', echarts);
  }

  render() {
    const onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged,
    };

    console.log('SectorPie render: ', this.props.selectedSector, this.props.selectedSubIndustry);

    return (
      <div className={styles.container}>
        <ReactEcharts
          option={graphOptions(this.props)}
          notMerge={true}
          onChartReady={this.onChartReady}
          onEvents={onEvents} 
        />
      </div>
    );
  }
}

SectorPie.propTypes = {
  filteredTickers: PropTypes.array,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string,
  selectedSubIndustry: PropTypes.string,
  appActions: PropTypes.object,
};


export default SectorPie;


