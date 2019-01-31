import React from 'react';
import { InputGroup,  Button,  Menu, MenuItem ,  Popover, MenuDivider} from "@blueprintjs/core";
import { handleStringChange } from "@blueprintjs/docs-theme";

import * as GC from "../LiveView/constants";

export const buildMenu = (p, actions) => {
  return (
    <Menu>
      <MenuItem text=""  disabled={true} />
      <MenuItem icon="list-columns" text="View">
        <MenuItem text="Grid" onClick={() => actions.liveViewMode(GC.VIEW_GRID)} active={p.liveViewMode === GC.VIEW_GRID } />
        <MenuItem text="Table" onClick={() => actions.liveViewMode(GC.VIEW_TABLE)} active={p.liveViewMode === GC.VIEW_TABLE }/>
        <MenuItem text="Static" onClick={() => actions.liveViewMode(GC.VIEW_STATIC)} active={p.liveViewMode === GC.VIEW_STATIC }/>
      </MenuItem>
      {/* <MenuItem icon="filter" text="Corp. Filter">
        <MenuItem 
            text="Active" 
            active={p.showActive}
            disabled={false}
            onClick={() => {actions.portfolioToggleActive();}
            } 
          />
        <MenuItem text="Birth Sign"  disabled={true} />
      </MenuItem> */}
      {/* <MenuItem icon="list-columns" text="View">
        <MenuItem text="Cards" onClick={() => actions.portfolioViewMode(FF.VIEW_CARDS)} active={p.viewMode === FF.VIEW_CARDS } />
        <MenuItem text="Table" onClick={() => actions.portfolioViewMode(FF.VIEW_TABLE)} active={p.viewMode === FF.VIEW_TABLE }/>
      </MenuItem>
      <MenuItem icon="sort" text="Sort">
        <MenuItem text="Age Decending" onClick={() => actions.portfolioSortMode(FF.SORT_AGE_DEC)} active={p.sortMode === FF.SORT_AGE_DEC } />
        <MenuItem text="Age Acending" onClick={() => actions.portfolioSortMode(FF.SORT_AGE_ASC)} active={p.sortMode === FF.SORT_AGE_ASC }/>
        <MenuItem text="Name Decending" onClick={() => actions.portfolioSortMode(FF.SORT_NAME_DEC)} active={p.sortMode === FF.SORT_NAME_DEC }/>
        <MenuItem text="Name Acending" onClick={() => actions.portfolioSortMode(FF.SORT_NAME_ASC)} active={p.sortMode === FF.SORT_NAME_ASC }/>
      </MenuItem>
     */}
      <MenuDivider />
      <MenuItem icon="refresh" text="Refresh" onClick={() => actions.refreshPortfolio()}/>
  </Menu>
  );
  
}
