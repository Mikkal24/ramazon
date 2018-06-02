import React, { Component } from "react";
// var stripe = require("stripe")('pk_test_5d9CqeRNmhQBq86Qj1slB5sj');
import query from "../../../utils/query";
import stripejs from "../../../utils/stripe";

class BillingForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    let queryObj = {
      SearchIndex: this.props.queryInfo.categories,
      range: this.props.queryInfo.amount,
      shippingAddress: this.props.queryInfo.shippingInfo
    };

    query.getRandomCart(queryObj).then(function(response) {
      var cartLink = $("<a>")
        .addClass("btn orange")
        .attr({ href: response.data, target: "_blank" })
        .text("But you can see what you would have got!");
      $("#target").append(cartLink);
    });
  };

  sendData = () => {
    console.log(this.props.queryInfo);
  };
  render = () => {
    return (
      <div>
        <h1>Stripe Billing Form Coming soon</h1>
        <br />
        <div className="row">
          <div className="card col s6 offset-s3">
            <div className="card-content">
              <form action="/charge" method="post" id="payment-form">
                <div className="form-row">
                  {/* <label htmlFor="card-element">
							      		Credit or debit card
							    	</label> */}
                  <div id="card-element" />
                  <div id="card-errors" role="alert" />
                </div>
                <button>Submit Payment</button>
              </form>
              <button id="buy" onClick={this.sendData}>
                {" "}
                Add information to database{" "}
              </button>
            </div>
          </div>
        </div>
        <p id="target" className="center-align" />
      </div>
    );
  };
}

export default BillingForm;
