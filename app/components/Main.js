import React, { Component } from "react";
import Navbar from "./mainChildren/Navbar";
import Footer from "./mainChildren/Footer";

class Main extends Component {
  render = () => {
    return (
      <div>
        <Navbar />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  };
}

export default Main;
