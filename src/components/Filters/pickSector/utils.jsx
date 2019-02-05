import React, { PureComponent } from 'react';
import {Select, MenuItem, Input,FormControl, InputLabel, FormHelperText} from '@material-ui/core/';
import PropTypes from 'prop-types'; 


export const buildSectorMenu = (p) => {
    let menu = [];
    menu.push(<MenuItem value="" key="none"><em>All</em></MenuItem>);
    p.sectors.forEach(s => menu.push(<MenuItem value={s} key={s}>{s}</MenuItem>))
    return menu;
  }
  