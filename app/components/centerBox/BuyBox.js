var React = require("react");
var SelectCategories = require("./buyBoxChildren/SelectCategories");
var ShippingForm = require("./buyBoxChildren/ShippingForm");
var BillingForm = require("./buyBoxChildren/BillingForm");

var WhichComponent = React.createClass({
	render: function(){
		var step=this.props.step;
		switch(step){
			case 1:
				return <SelectCategories />
			case 2:
				return <ShippingForm />
			case 3:
				return <BillingForm />
		}
	}
});

var BuyBox = React.createClass({
	getInitialState: function(){
		return({
			step: 1
		})
	},

	nextHandler: function(){
		this.setState({step:this.state.step+1});
	},

	render: function(){
		return(
			<div>
			<WhichComponent step={this.state.step}/>

			<a onClick={this.nextHandler} className="btn Orange">Next</a>
			</div>
		)
	}
});

module.exports = BuyBox;