import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 

import { Button, Popover} from '@blueprintjs/core';


// import styles from './settingsMenu.scss';
import {buildMenu} from './utils';

export class SettingsMenu extends PureComponent {
  render() {
    const p = this.props;
    return (
      <Popover content={buildMenu(p, p.appActions)}>
        <Button icon="cog" />
      </Popover>
    );
  }
}

SettingsMenu.propTypes = {
  appActions: PropTypes.object,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string,
};


export default SettingsMenu;

