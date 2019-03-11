import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alignment,
  Classes,
  Spinner,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button
} from '@blueprintjs/core';

import * as myActions from '../../actions/index';
import { Container, FilterContainer, PanelContainer } from './styles.js';
import * as constants from './constants.js';

import ChartPanel from '../../containers/chart';
import TableViewPanel from '../../containers/tableView';
import Filters from '../../containers/filters';

import * as util from '../../shared/utils';

class App extends Component {
  gameSelectionButtons() {
    return (
      <div>
        {constants.AvailablePages.map((page) => (
          <Button
            key={page}
            className={Classes.MINIMAL}
            active={this.props.selectedPage === page}
            text={page}
            onClick={() => this.props.appActions.selectPage(page)}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <Container>
        <Navbar style={{ color: 'whitesmoke', backgroundColor: 'darkGray' }}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>{`Market Viewer`}</NavbarHeading>
            <NavbarDivider />
            {this.gameSelectionButtons()}
          </NavbarGroup>
        </Navbar>
        {this.props.isLoading && (
          <div>
            <Spinner intent="primary" size={Spinner.SIZE_LARGE} />
          </div>
        )}
        {!this.props.isLoading && (
          <div>
            <FilterContainer>
              <Filters {...this.props} />
            </FilterContainer>
            <PanelContainer>
              {this.props.selectedPage === constants.CHART_VIEW && <ChartPanel />}
              {this.props.selectedPage === constants.TABLE_VIEW && <TableViewPanel />}
            </PanelContainer>
          </div>
        )}
        {!util.isNullOrWhitespace(this.props.error) && !this.props.isLoading && (
          <div>{`Error loading data: ${this.props.error}`}</div>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  appActions: PropTypes.any,
  text: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedPage: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedPage: state.selectedPage
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
