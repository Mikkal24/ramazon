import React, { Component } from "react";
import Navbar from "./mainChildren/Navbar";
import Footer from "./mainChildren/Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render = () => {
    return (
      <div className="page-flexbox-wrapper">
        <header>
          <Navbar />
        </header>
        <div id="main1" className="centerThis">
          {this.props.children}
        </div>

        <footer className="amazonBlue page-footer">
          <Footer />
        </footer>
      </div>
    );
  };
}

export default Main;
