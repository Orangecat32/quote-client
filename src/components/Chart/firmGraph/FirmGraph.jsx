import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import ReactEcharts from 'echarts-for-react';

import styles from './firmGraph.scss';
//import {option} from './utils';

export class FirmGraph extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('mount FirmGraph:',this.props.selectedFirm);
    this.props.appActions.requestHistory(this.props.selectedFirm)
  }

  render() {
    console.log('firmGraph',this.props.iexHist);
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
  selectedSubIndustry: PropTypes.string,
  iexHist: PropTypes.any,
  appActions: PropTypes.any
};


export default FirmGraph;

