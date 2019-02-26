import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '@blueprintjs/core';

import styles from './sectorPath.scss';

export const buildPath = (p) => {
  let path = [
    { text: 'All SPX', onClick: () => p.appActions.filterClearPath() }
  ];
  if (p.selectedSector) {
    path.push({
      text: p.selectedSector,
      onClick: () => p.appActions.filterSector(p.selectedSector)
    });
  }

  if (p.selectedSubIndustry) {
    path.push({
      text: p.selectedSubIndustry,
      onClick: () => p.appActions.filterSubIndustry(p.selectedSubIndustry)
    });
  }

  if (p.selectedFirm) {
    path.push({ text: p.selectedFirm });
  }

  return path;
};

export class SectorPath extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Breadcrumbs items={buildPath(this.props)} />
      </div>
    );
  }
}

SectorPath.propTypes = {
  selectedSector: PropTypes.string,
  selectedSubIndustry: PropTypes.string,
  selectedFirm: PropTypes.string,
  appActions: PropTypes.any
};

export default SectorPath;
