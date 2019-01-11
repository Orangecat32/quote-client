import React from 'react';
import PropTypes from 'prop-types'; 
import { InputGroup,  Button,  Menu, MenuItem ,  Popover, MenuDivider} from "@blueprintjs/core";
import { handleStringChange } from "@blueprintjs/docs-theme";
import * as FF from "../constants";

import styles from './Filters.scss';


const buildMenu = (p, actions) => {
  return (
    <Menu>
      <MenuItem text=""  disabled={true} />
      <MenuItem icon="filter" text="Artist Filter">
        <MenuItem 
            text="Active" 
            active={p.showActive}
            disabled={false}
            onClick={() => {actions.rappersToggleActive();}
            } 
          />
        <MenuItem text="Birth Sign"  disabled={true} />
      </MenuItem>
      <MenuItem icon="list-columns" text="View">
        <MenuItem text="Cards" onClick={() => actions.rappersViewMode(FF.VIEW_CARDS)} active={p.viewMode === FF.VIEW_CARDS } />
        <MenuItem text="Table" onClick={() => actions.rappersViewMode(FF.VIEW_TABLE)} active={p.viewMode === FF.VIEW_TABLE }/>
      </MenuItem>
      <MenuItem icon="sort" text="Sort">
        <MenuItem text="Age Decending" onClick={() => actions.rappersSortMode(FF.SORT_AGE_DEC)} active={p.sortMode === FF.SORT_AGE_DEC } />
        <MenuItem text="Age Acending" onClick={() => actions.rappersSortMode(FF.SORT_AGE_ASC)} active={p.sortMode === FF.SORT_AGE_ASC }/>
        <MenuItem text="Name Decending" onClick={() => actions.rappersSortMode(FF.SORT_NAME_DEC)} active={p.sortMode === FF.SORT_NAME_DEC }/>
        <MenuItem text="Name Acending" onClick={() => actions.rappersSortMode(FF.SORT_NAME_ASC)} active={p.sortMode === FF.SORT_NAME_ASC }/>
      </MenuItem>
    
      <MenuDivider />
      <MenuItem icon="refresh" text="Refresh" onClick={() => actions.requestRappers()}/>
  </Menu>
  );
  
}

export class Filters  extends React.Component {
  render(){
    const props = this.props;
    const handleFilterChange = handleStringChange(filterValue => props.appActions.searchRappers(filterValue));

    return(
      <div className={styles.container}>
        <InputGroup
          onChange={handleFilterChange}
          leftIcon="search"
          placeholder="Search..."
          type="search"
          value={props.searchFilter}
        />
        <Popover content={buildMenu(props, props.appActions)}>
          <Button icon="cog" />
        </Popover>
      </div>
    )}
}

Filters.propTypes = {
  searchFilter:  PropTypes.string,
  showActive: PropTypes.bool,
  viewMode: PropTypes.string,
  appActions: PropTypes.object,
  sortMode: PropTypes.string
}

export default Filters;
