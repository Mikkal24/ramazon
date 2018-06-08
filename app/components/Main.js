import React, { Component } from "react";
import Navbar from "./mainChildren/Navbar";
import Footer from "./mainChildren/Footer";

import styles from "./styles.css";

class Main extends Component {
  componentDidMount() {
    console.log(styles);
  }
  render = () => {
    return (
      <div>
        <Navbar />
        <div className={styles.test}>{this.props.children}</div>
        <Footer />
      </div>
    );
  };
}

export default Main;
