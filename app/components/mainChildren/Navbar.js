import React, { Component } from "react";

import styles from "./navbarStyles.less";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
  }

  handleDropDown = () => {
    this.setState({ dropDown: !this.state.dropDown });
  };

  render = () => {
    let responsiveClass = this.state.dropDown
      ? `${styles.topnav} ${styles.responsive}`
      : styles.topnav;
    return (
      <nav className={responsiveClass}>
        <a href="#home" className={styles.active}>
          Ramazon
        </a>

        <a href="/signin">Sign In</a>

        <a href="/about">About</a>

        <a href="/contact">Contact</a>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={this.handleDropDown}
        >
          ☰
        </a>
      </nav>
    );
  };
}

export default Navbar;
