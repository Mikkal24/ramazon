import React, { Component } from "react";
import { Navbar, Footer } from "./mainChildren/index";
// import Navbar from "./mainChildren/Navbar";
// import Footer from "./mainChildren/Footer";

import styles from "./styles.less";

class Main extends Component {
  componentDidMount() {
    console.log(styles);
  }
  render = () => {
    return (
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.mainSection}>{this.props.children}</div>
        <Footer />
      </div>
    );
  };
}

export default Main;
