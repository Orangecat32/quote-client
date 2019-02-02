import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './ViewTable.scss';

const ONE_MILLION = 1000000;

export class ViewTable extends React.Component {

  render() {
    const p = this.props;
  
    return (
      <div className={styles.container}>
        <table className={styles.fixed_header}>
          <thead>
            <tr>
              <th>Firm</th>
              <th>Avg Volume</th>
              <th>MktCap</th>
              <th>Volatility</th>           
              <th>Sector</th>
              <th>Sub Industry</th>
              <th>PE</th>
              <th>HQ</th>
              <th>Company Name</th>
          </tr>
          </thead>
          <tbody>
            {
              p.filteredTickers.map(a => (
                <tr key={a.symbol}>
                  <td className={styles.name}>{a.symbol}</td>
                  <td className={styles.numeric}>{`${a.avgVol50d.toLocaleString()}`}</td>
                  <td className={styles.numeric}>
                    {
                      `${(a.mktCap/ONE_MILLION).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
                    }</td>
                  <td className={styles.numeric}>{`${a.volPct50d}`}</td>
                  <td className={styles.name}>{`${a.sector}`}</td>
                  <td className={styles.name}>{`${a.subIndustry}`}</td>
                  <td className={styles.numeric}>{`${a.PEttm}`}</td>
                  <td className={styles.name}>{`${a.Location}`}</td>
                  <td className={styles.name}>{`${a.company}`}</td> 
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ViewTable.propTypes = {
  filteredTickers: PropTypes.array,
};

export default ViewTable;
