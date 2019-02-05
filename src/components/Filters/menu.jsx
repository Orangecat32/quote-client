import React from 'react';
import { InputGroup,  Button,  Menu, MenuItem ,  Popover, MenuDivider} from "@blueprintjs/core";
import { handleStringChange } from "@blueprintjs/docs-theme";

import * as GC from "../TableView/constants";
import * as CC from "../Chart/constants";
import * as APP from '../App/constants';


export const buildMenu = (p, actions) => p.selectedPage === APP.TABLE_VIEW ? gridMenu(p, actions) : chartMenu(p, actions);

  
const gridMenu = (p, actions) => {
  return (
    <Menu>
      <MenuItem text=""  disabled={true} />
      <MenuItem icon="list-columns" text="View">
        <MenuItem text="Grid" onClick={() => actions.tableViewMode(GC.VIEW_GRID)} active={p.tableViewMode === GC.VIEW_GRID } />
        <MenuItem text="Table" onClick={() => actions.tableViewMode(GC.VIEW_TABLE)} active={p.tableViewMode === GC.VIEW_TABLE }/>
        <MenuItem text="Static" onClick={() => actions.tableViewMode(GC.VIEW_STATIC)} active={p.tableViewMode === GC.VIEW_STATIC }/>
      </MenuItem>
      <MenuDivider />
      <MenuItem icon="refresh" text="Refresh" onClick={() => actions.refreshPortfolio()}/>
  </Menu>
  );  
};



const chartMenu = (p, actions) => {
  return (
    <Menu>
      <MenuItem text=""  disabled={true} />
      <MenuItem icon="list-columns" text="View">
        <MenuItem text="Sector" onClick={() => actions.chartViewMode(CC.VIEW_SECTOR)} active={p.chartViewMode === CC.VIEW_SECTOR } />
        <MenuItem text="PE" onClick={() => actions.chartViewMode(CC.VIEW_PE)} active={p.chartViewMode === CC.VIEW_PE }/>
       </MenuItem> 
      <MenuDivider />
      <MenuItem icon="refresh" text="Refresh" onClick={() => actions.refreshPortfolio()}/>
    </Menu>
  );
};

