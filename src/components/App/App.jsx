import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import PropTypes from 'prop-types'; 
import { Alignment, Classes, Spinner, Navbar, NavbarDivider, NavbarGroup,  NavbarHeading, Button} from "@blueprintjs/core";

import * as myActions from "../../actions/index";
import styles from './App.scss';
import * as constants from './constants.js';

import RappersContainer from '../../containers/rappers';
import PortfolioContainer from '../../containers/portfolio';
import LiveViewContainer from '../../containers/liveView';
import LivePage from '../LivePage/LivePage';
import * as util from '../../shared/utils';

class App extends Component {
  gameSelectionButtons() {
    return (
      <div> 
      {
        constants.AvailablePages.map(g => (
          <Button 
            key={g}
            className={Classes.MINIMAL} 
            active={this.props.selectedModule === g}
            text={g} 
            onClick={()=> this.props.appActions.selectPage(g)} />
        ))
      }
      </div>
    );
  }

  render() {
    return (
      <div className={styles.app}>
        <Navbar style={{color: 'whitesmoke', backgroundColor: 'darkGray'}}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>{`Market Viewer`}</NavbarHeading>
            <NavbarDivider />
            {this.gameSelectionButtons()}
          </NavbarGroup>
        </Navbar>
        { this.props.isLoading && 
          <div className={styles.spinner}> 
            <Spinner intent="primary" size={Spinner.SIZE_LARGE}/>
          </div>
        }
        <div className={styles.gameContainer}>
        {this.props.selectedModule === constants.PORTFOLIO &&
            <PortfolioContainer />
          }
          {this.props.selectedModule === constants.LIVE_PAGE &&
            <LivePage />
          }
          {this.props.selectedModule === constants.RAPPERS_DB &&
            <RappersContainer />
          }
          {this.props.selectedModule === constants.LIVE_VIEW &&
            <LiveViewContainer />
          } 
        </div>   
        { !util.isNullOrWhitespace(this.props.error) && !this.props.isLoading &&
          <div className={styles.error}>
            {`Error loading data: ${this.props.error}`}
          </div>
        }
      </div>
    );
  }
}

const UnderConstruction = (p) => (
  <div className={styles.constructionContainer}>
   {p.text}
  </div>
);

App.propTypes = {
  appActions: PropTypes.any,
  text: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedModule: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedModule: state.selectedModule
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
  )(App);

