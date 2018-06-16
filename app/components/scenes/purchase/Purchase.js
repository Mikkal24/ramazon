import React, { Component } from "react";
import {
  SelectPrice,
  SelectCategories,
  ShippingForm,
  CheckOut
} from "./purchaseChildren";
import { Switch, Route } from "react-router-dom";

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      categories: [],
      shippingInfo: {
        customerName: "",
        phoneNumber: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
      }
    };
  }

  setPrice = price => {
    this.setState({ price: price });
  };

  setCategories = categories => {
    this.setState({ categories: categories });
  };

  setShippingInfo = shippingInfo => {
    this.setState({ shippingInfo: shippingInfo });
  };

  getPage = () => {
    switch (this.props.match.params.location) {
      case "selectprice":
        return <SelectPrice setPrice={this.setPrice} />;
      case "selectcategories":
        return <SelectCategories setCategories={this.setCategories} />;
      case "shipping":
        return <ShippingForm setShippingInfo={this.setShippingInfo} />;
      case "checkout":
        return <CheckOut orderInfo={this.state} />;
      default:
        return <div>404</div>;
    }
  };

  render = () => {
    let page = this.getPage();
    return <div>{page}</div>;
  };
}

export default Purchase;
