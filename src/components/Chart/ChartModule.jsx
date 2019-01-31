import React, { Component } from 'react';
import { Spinner} from "@blueprintjs/core";
import PropTypes from 'prop-types'; 

import styles from './ChartModule.scss';

import {isNullOrWhitespace} from '../../shared/utils';
import {VIEW_CARDS, VIEW_TABLE} from './constants';

export class ChartModule extends Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <div className={styles.container}>
        Charts go here
      </div>
    );
  }
}

ChartModule.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  viewMode: PropTypes.any,
  appActions: PropTypes.any
};


export default ChartModule;
