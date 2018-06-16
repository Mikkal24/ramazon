import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LeftMainButton, RightMainButton } from "../children/index";
import styles from "./styles.less";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className={styles.homeContainer}>
        <Link to="/browse">
          <LeftMainButton animationStyle={this.props.animationStyle} />
        </Link>
        <Link to="/purchase">
          <RightMainButton />
        </Link>
      </div>
    );
  };
}

export default Home;
