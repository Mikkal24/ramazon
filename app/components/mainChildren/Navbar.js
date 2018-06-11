import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" className={styles.active}>
          Ramazon
        </Link>

        <Link to="/signin">Sign In</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
        <a
          to="javascript:void(0);"
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
