import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewTable.scss';
import { fmtMktCap, fmtVolume } from '../../../shared/utils';
import { Container, Table, Thead, Tbody, Tr, Tdn, Td } from './styles';

export class ViewTable extends React.Component {
  render() {
    const p = this.props;

    return (
      <Container>
        <Table>
          <Thead>
            <Tr>
              <th>Firm</th>
              <th>Avg Volume</th>
              <th>MktCap</th>
              <th>Volatility</th>
              <th>Sector</th>
              <th>Sub Industry</th>
              <th>PE</th>
              <th>HQ</th>
              <th>Company Name</th>
            </Tr>
          </Thead>
          <Tbody>
            {p.filteredTickers.map((a) => (
              <Tr key={a.symbol}>
                <Td>{a.symbol}</Td>
                <Tdn>{fmtVolume(a.avgVol50d)}</Tdn>
                <Tdn>{fmtMktCap(a.mktCap)}</Tdn>
                <Tdn>{a.volPct50d}</Tdn>
                <Td className={styles.name}>{`${a.sector}`}</Td>
                <Td className={styles.name}>{`${a.subIndustry}`}</Td>
                <Tdn className={styles.numeric}>{`${a.PEttm}`}</Tdn>
                <Td className={styles.name}>{`${a.Location}`}</Td>
                <Td className={styles.name}>{`${a.company}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    );
  }
}

ViewTable.propTypes = {
  filteredTickers: PropTypes.array
};

export default ViewTable;
