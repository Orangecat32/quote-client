import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select, Input } from '@material-ui/core/';

import styles from './pickSector.scss';
import { buildSectorMenu } from './utils';

export class PickSector extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Sector:</div>
        <Select
          style={{ width: '220px' }}
          value={this.props.selectedSector}
          onChange={(event) => this.props.appActions.filterSector(event.target.value)}
          input={<Input name="age" id="age-auto-width" />}
          autoWidth
        >
          {buildSectorMenu(this.props)}
        </Select>
      </div>
    );
  }
}

PickSector.propTypes = {
  appActions: PropTypes.object,
  sectors: PropTypes.array,
  selectedSector: PropTypes.string
};

export default PickSector;
