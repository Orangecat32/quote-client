import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './ViewTable.scss';

export class ViewTable extends React.Component {

  render() {
    const p = this.props;
    console.log('ViewTable:', p.filteredTickers );
    return (
      <div className={styles.container}>
        <table className={styles.artistTable}>
          <thead>
            <tr>
              <th>Firm</th>
              <th>Volume50d</th>
              <th>MktCap</th>
              <th>Volotity 50d</th>           
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
                  <td className={styles.active}>{`${a.avgVol50d}`}</td>
                  <td className={styles.active}>{`${a.mktCap}`}</td>
                  <td className={styles.active}>{`${a.volPct50d}`}</td>
                  <td className={styles.active}>{`${a.sector}`}</td>
                  <td className={styles.active}>{`${a.subIndustry}`}</td>
                  <td className={styles.active}>{`${a.PEttm}`}</td>
                  <td className={styles.active}>{`${a.Location}`}</td>
                  <td className={styles.active}>{`${a.company}`}</td>

                 
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
  filteredFirms: PropTypes.array,
};

export default ViewTable;
