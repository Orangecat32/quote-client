import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as myActions from '../actions/tableViewActions';
import { TableView } from '../components/TableView/TableView';
import { filteredTickers } from '../reducers/dataReducer';
import { selectedSector } from '../reducers/filterReducer';

export function mapStateToProps(state) {
  return {
    ...state.tableView,
    filteredTickers: filteredTickers(state),
    selectedSector: selectedSector(state)
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(myActions, dispatch)
  };
}

const TableViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableView);

export default TableViewContainer;
