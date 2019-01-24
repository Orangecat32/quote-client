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
       
        { this.props.isLoading && 
          <div className={styles.spinner}> 
            <Spinner intent="primary" size={Spinner.SIZE_LARGE}/>
          </div>
        }
       
        { !isNullOrWhitespace(this.props.error) && !this.props.isLoading &&
          <div className={styles.error}>
            {`Error loading data: ${this.props.error}`}
          </div>
        }
      </div>
    );
  }
}


ChartModule.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  viewMode: PropTypes.any,
  appActions: PropTypes.any,
  filteredFirms: PropTypes.array
};


export default ChartModule;
