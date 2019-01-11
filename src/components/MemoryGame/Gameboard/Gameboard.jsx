import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon } from "@blueprintjs/core";
import styles from './Gameboard.scss';

export class Gameboard extends React.Component {
  render() {
    return (
      <div className={styles.gameBoardContainer}>
        <div className={styles.gameBoard}>
          {(this.props.cards || []).map(card => (
            <MemoryCard 
              key={card.index}
              showAll={this.props.showAll}
              onClick={ ()=> this.props.appActions.clickCard(card)} 
              {...card} /> 
          ))}
      </div>
    </div>
    );
  }
}


const MemoryCard = (p) => {
  const showIcon = p.isMatched || p.isFlipped || p.showAll;
  const iconClass = `${styles.cardIcon} ${p.isFlipped ? styles.flipped : p.isMatched ? styles.matched : ''}`;

  return (
    <div className={styles.memoryCard} onClick={p.onClick}>
      {showIcon &&
        <div className={iconClass} >
          <Icon icon={p.name}  iconSize={'calc(8vmin)'}  />
        </div>
      }
    </div>
    )
};

Gameboard.propTypes = {
  cards: PropTypes.array,
  appActions: PropTypes.object,
  showAll: PropTypes.bool
};

export default Gameboard;
