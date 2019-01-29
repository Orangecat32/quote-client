import React, { PureComponent } from 'react';
import { Spinner} from "@blueprintjs/core";
import PropTypes from 'prop-types'; 

import styles from './PortfolioModule.scss';
import ViewTable from './ViewTable/ViewTable';

import {isNullOrWhitespace} from '../../shared/utils';
import Filters from './Filters/Filters';
// import {VIEW_CARDS, VIEW_TABLE} from './constants';

export class PortfolioModule extends PureComponent {
  render() {
    console.log('load:', this.props.tickers);
    return (
      <div className={styles.container}>
       
        { this.props.isLoading && 
          <div className={styles.spinner}> 
            <Spinner intent="primary" size={Spinner.SIZE_LARGE}/>
          </div>
        }
        { !this.props.isLoading && isNullOrWhitespace(this.props.error) &&
          <div className={styles.content}>
            <div className={styles.filters}>
              <Filters {...this.props}/>
            </div>
            <div className={styles.dataArea}>
              <ViewTable {...this.props}/>
            </div>
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


PortfolioModule.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  viewMode: PropTypes.any,
  appActions: PropTypes.any,
  filteredTickers: PropTypes.array,
  tickers: PropTypes.array
};


export default PortfolioModule;

