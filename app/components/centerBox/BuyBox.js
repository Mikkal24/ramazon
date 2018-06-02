import React, { Component } from "react";
import SelectCategories from "./buyBoxChildren/SelectCategories";
import ShippingForm from "./buyBoxChildren/ShippingForm";
import BillingForm from "./buyBoxChildren/BillingForm";
import SelectAmount from "./buyBoxChildren/SelectAmount";

class BuyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      categories: [],
      amount: 0,
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

  componentDidUpdate = () => {
    console.log(this.state);
  };

  nextHandler = () => {
    this.setState({ step: this.state.step + 1 });
  };

  setShippingInfo = data => {
    this.setState({ shippingInfo: data });
  };

  setAmount = data => {
    this.setState({ amount: data });
  };

  setCategories = data => {
    this.setState({ categories: data });
  };

  render = () => {
    switch (this.state.step) {
      case 1:
        return (
          <SelectAmount
            setAmount={this.setAmount}
            nextHandler={this.nextHandler}
          />
        );
      case 2:
        return (
          <div>
            <SelectCategories
              setCategories={this.setCategories}
              nextHandler={this.nextHandler}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <ShippingForm
              setShippingInfo={this.setShippingInfo}
              nextHandler={this.nextHandler}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <BillingForm queryInfo={this.state} />
          </div>
        );
    }
  };
}

export default BuyBox;
