import React, { Component } from "react";

import styles from "./styles.less";

class LeftMainButton extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return <div className={styles.leftHomeButton} />;
  };
}

export default LeftMainButton;
