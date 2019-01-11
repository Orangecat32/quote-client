import React, { Component } from 'react';
import { Spinner} from "@blueprintjs/core";
import PropTypes from 'prop-types'; 

import styles from './RapperModule.scss';
import ArtistList from './ArtistList/ArtistList';
import ArtistTable from './ArtistTable/ArtistTable';
import {isNullOrWhitespace} from '../../shared/utils';
import Filters from './Filters/Filters';
import {VIEW_CARDS, VIEW_TABLE} from './constants';

export class RapperModule extends Component {
  componentDidMount() {
    this.props.appActions.requestRappers();
  }

  render() {
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
              {this.props.viewMode === VIEW_CARDS &&
              <ArtistList {...this.props} />   
              }
               {this.props.viewMode === VIEW_TABLE &&
              <ArtistTable {...this.props} />   
              }

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


RapperModule.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  viewMode: PropTypes.any,
  appActions: PropTypes.any,
  filteresArtists: PropTypes.array
};


export default RapperModule;
