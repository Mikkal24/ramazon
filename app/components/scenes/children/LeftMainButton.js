import React, { Component } from "react";
import Dice from "./dice";
import styles from "./styles.less";

class LeftMainButton extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className={styles.leftHomeButton}>
        <div className={styles.container}>
          <h1>Browse Random</h1>
          <Dice />
        </div>
      </div>
    );
  };
}

export default LeftMainButton;
