import React from 'react';
import PropTypes from 'prop-types'; 
import { Button, Collapse } from "@blueprintjs/core";
import * as styles from './Rules.scss';

export class Rules extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Button onClick={this.props.onClick}>
            {this.props.show ? "Hide" : "Show"} Rules
          </Button>
        </div>
        <Collapse isOpen={this.props.show}>
          <div className={styles.content}>{this.props.content}</div>
        </Collapse>
      </div>
    );
  }
}

Rules.propTypes ={
  show: PropTypes.bool,
  content: PropTypes.any,
  onClick: PropTypes.func
}

