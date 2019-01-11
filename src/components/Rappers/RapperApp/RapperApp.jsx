import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import { Alignment, Spinner, Navbar, NavbarDivider, NavbarGroup,  NavbarHeading} from "@blueprintjs/core";

import * as myActions from "../../../actions/rappersActions";
import {filteredArtists} from "../../../reducers/rappersReducer";
import styles from './RapperApp.scss';
import ArtistList from '../ArtistList/ArtistList';
import ArtistTable from '../ArtistTable/ArtistTable';
import {isNullOrWhitespace} from '../../../shared/utils';
import Filters from '../Filters/Filters';
import {VIEW_CARDS, VIEW_TABLE} from '../constants';

class RapperApp extends Component {
  componentDidMount() {
    this.props.appActions.requestRappers();
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <Navbar style={{color: 'whitesmoke', backgroundColor: 'darkGray'}}>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Grand Hustle Records</NavbarHeading>
              <NavbarDivider />
              {'Artist Database'}
            </NavbarGroup>
          </Navbar>
        </div> 

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

export function mapStateToProps(state) {
  return {
    ...state.rappers, 
    filteredArtists: filteredArtists(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(myActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(RapperApp);

