import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { LeftMainButton, RightMainButton } from "../children/index";
import styles from "./styles.less";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className={styles.homeContainer}>
        <LeftMainButton animationStyle={this.props.animationStyle} />

        <RightMainButton />
      </div>
    );
  };
}

export default Home;
