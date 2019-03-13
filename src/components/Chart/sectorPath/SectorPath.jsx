import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '@blueprintjs/core';

import { Container } from './styles';

export const buildPath = (props) => {
  const path = [{ text: 'All SPX', onClick: () => props.appActions.filterClearPath() }];
  if (props.selectedSector) {
    path.push({
      text: props.selectedSector,
      onClick: () => props.appActions.filterSector(props.selectedSector)
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
      <Container>
        <Breadcrumbs items={buildPath(this.props)} />
      </Container>
    );
  }
}

SectorPath.propTypes = {
  selectedSector: PropTypes.string,
  selectedFirm: PropTypes.string,
  appActions: PropTypes.object
};

export default SectorPath;
