import React, { Component } from "react";

import styles from "./styles.less";

class RightMainButton extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className={styles.rightHomeButton}>
        <div className={styles.container}>
          <h1>Get You A Box</h1>
          <div className={styles.box} />
        </div>
      </div>
    );
  };
}

export default RightMainButton;
