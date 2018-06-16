import React, { Component } from "react";
import { Link } from "react-router-dom";

class SelectPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <div>
        <h1>Set your price</h1>
        <button>$5</button>
        <button>$25</button>
        <button>$100</button>
        <h5>Custom</h5>
        <input type="text" />
        <Link to="/purchase/selectcategories">
          <a href="#">Next</a>
        </Link>
      </div>
    );
  };
}

export default SelectPrice;
