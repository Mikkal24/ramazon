var React = require("react");
var SelectCategories = require("./buyBoxChildren/SelectCategories");
var ShippingForm = require("./buyBoxChildren/ShippingForm");
var BillingForm = require("./buyBoxChildren/BillingForm");
var SelectAmount = require("./buyBoxChildren/SelectAmount");



var BuyBox = React.createClass({
	getInitialState: function(){
		return({
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
		})
	},

	componentDidUpdate: function(){
		console.log(this.state);
	},

	nextHandler: function(){
		this.setState({step:this.state.step+1});
	},

	setShippingInfo(data){
		this.setState({shippingInfo: data});
	},
	setAmount(data){
		this.setState({amount: data});
	},

	setCategories(data){
		this.setState({categories: data});
	},

	render: function(){

		switch(this.state.step){
			case 1:
				return(
						<SelectAmount setAmount={this.setAmount} nextHandler={this.nextHandler} />
					)
			case 2:
				return( 
					<div>
						<SelectCategories setCategories={this.setCategories} nextHandler={this.nextHandler} />
					</div>
					)
			case 3:
				return(
					<div>
						<ShippingForm setShippingInfo={this.setShippingInfo} nextHandler={this.nextHandler}/>
						
					</div>
					)
			case 4:
				return(
				<div>
					<BillingForm queryInfo={this.state} />
				</div>
				 )
		}
	}
});

module.exports = BuyBox;