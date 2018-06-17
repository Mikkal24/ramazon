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

  render = () => {
    return (
      <Switch>
        <Route
          exact
          path={`${this.props.match.path}/selectprice`}
          component={SelectPrice}
        />
        <Route
          path={`${this.props.match.path}/selectcategories`}
          component={SelectCategories}
        />
        <Route
          path={`${this.props.match.path}/shipping`}
          component={ShippingForm}
        />
        <Route
          path={`${this.props.match.path}/checkout`}
          component={CheckOut}
        />
      </Switch>
    );
  };
}

export default Purchase;
