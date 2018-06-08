import React, { Component } from "react";
import Navbar from "./mainChildren/Navbar";
import Footer from "./mainChildren/Footer";

import styles from "./styles.less";

class Main extends Component {
  componentDidMount() {
    console.log(styles);
  }
  render = () => {
    return (
      <div className={styles.mainContainer}>
        <Navbar />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  };
}

export default Main;
