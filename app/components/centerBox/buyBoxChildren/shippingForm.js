import React, { Component } from "react";
class shippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  getFormInfo = event => {
    event.preventDefault();
    this.props.setShippingInfo(this.state);
    this.props.nextHandler();
  };

  validateFailed = () => {
    for (var prop in this.state) {
      if (prop !== "address2") {
        if (this.state[prop] === "") {
          // validate failed
          return true;
        }
      }
    }

    return false;
  };

  handleCustomerNameChange = e => {
    this.setState({ customerName: e.target.value });
  };
  handlePhoneNumberChange = e => {
    this.setState({ phoneNumber: e.target.value });
  };
  handleAddressOneChange = e => {
    this.setState({ address1: e.target.value });
  };
  handleAddressTwoChange = e => {
    this.setState({ address2: e.target.value });
  };
  handleCityChange = e => {
    this.setState({ city: e.target.value });
  };
  handleStateChange = e => {
    this.setState({ state: e.target.value });
  };
  handleZipChange = e => {
    this.setState({ zip: e.target.value });
  };

  render = () => {
    return (
      <div className="centerThis">
        <div className="amazonYellowBorder fifty-percent decentPadding">
          <h2 className="center">Enter your Shipping Information</h2>
          <form id="shippingForm" onSubmit={this.getFormInfo}>
            <div className="formLine">
              <div className="formLineElement">
                <label htmlFor="customerName">
                  <span>Customer Name:</span>
                  <input
                    onChange={this.handleCustomerNameChange}
                    type="text"
                    id="customerName"
                    name="customerName"
                    className="required"
                  />
                </label>
              </div>
              <div className="formLineElement">
                <label htmlFor="phoneNumber">
                  <span>Phone Number:</span>
                  <input
                    onChange={this.handlePhoneNumberChange}
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="required"
                  />
                </label>
              </div>
            </div>
            <div className="formLineElement">
              <label htmlFor="address1">
                <span>Address Line 1:</span>
                <input
                  onChange={this.handleAddressOneChange}
                  type="text"
                  id="address1"
                  name="address1"
                  className="required"
                />
              </label>
            </div>
            <div className="formLineElement">
              <label htmlFor="address2">
                <span>Address Line 2(optional):</span>
                <input
                  onChange={this.handleAddressTwoChange}
                  type="text"
                  id="address2"
                  name="address2"
                />
              </label>
            </div>
            <div className="formLine">
              <div className="formLineElement">
                <label htmlFor="city">
                  <span>City:</span>
                  <input
                    onChange={this.handleCityChange}
                    type="text"
                    id="city"
                    name="city"
                    className="required"
                  />
                </label>
              </div>
              <div className="formLineElement">
                <label htmlFor="city">
                  <span>State:</span>
                  <input
                    onChange={this.handleStateChange}
                    type="text"
                    id="state"
                    name="state"
                    className="required"
                  />
                </label>
              </div>
              <div className="formLineElement">
                <label htmlFor="city">
                  <span>Zip:</span>
                  <input
                    onChange={this.handleZipChange}
                    type="text"
                    id="zip"
                    name="zip"
                    className="required"
                  />
                </label>
              </div>
            </div>
          </form>
          <div className="center-align">
            <a
              disabled
              onClick={this.getFormInfo}
              id="nextButton"
              className="btn orange"
              disabled={this.validateFailed()}
            >
              Next &gt;
            </a>
          </div>
        </div>
      </div>
    );
  };
}

export default shippingForm;
