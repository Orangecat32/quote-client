import React from 'react';
import {MenuItem} from '@material-ui/core/';

export const buildSectorMenu = (p) => {
  let menu = [];
  menu.push(<MenuItem value="" key="none"><em>All</em></MenuItem>);
  p.sectors.forEach(s => menu.push(<MenuItem value={s} key={s}>{s}</MenuItem>));
  return menu;
};
  