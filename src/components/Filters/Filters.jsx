import React from 'react';
import PropTypes from 'prop-types'; 

import { InputGroup, Button, Popover} from "@blueprintjs/core";
import { handleStringChange } from "@blueprintjs/docs-theme";
import PickSector from './pickSector/PickSector';

import {buildMenu} from './menu';

import styles from './Filters.scss';



export class Filters  extends React.Component {
  render() {
    const props = this.props;
    const handleFilterChange = handleStringChange(filterValue => props.appActions.filterSearch(filterValue));

    return(
      <div className={styles.container}>
        <InputGroup
          onChange={handleFilterChange}
          leftIcon="search"
          placeholder="Search..."
          type="search"
          value={props.searchFilter}
        />
        <PickSector {...this.props} />
        <Popover content={buildMenu(props, props.appActions)}>
          <Button icon="cog" />
        </Popover>
      </div>
    )}
}

Filters.propTypes = {
  searchFilter:  PropTypes.string,
  sectors: PropTypes.array,
  showActive: PropTypes.bool,
  tableViewMode: PropTypes.string,
  appActions: PropTypes.object,
  selectedPage: PropTypes.string,
  selectedSector: PropTypes.string,
  sortMode: PropTypes.string
}

export default Filters;
