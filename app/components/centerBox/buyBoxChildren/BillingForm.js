var React = require("react");
// var stripe = require("stripe")('pk_test_5d9CqeRNmhQBq86Qj1slB5sj');

let query = require("../../../utils/query")
var BillingForm = React.createClass({
	componentDidMount: function(){
		var stripejs = require("../../../utils/stripe");


		let queryObj = {
			SearchIndex: this.props.queryInfo.categories,
			range: this.props.queryInfo.amount,
			shippingAddress: this.props.queryInfo.shippingInfo
		}

		query.getRandomCart(queryObj).then(function(response){
			var cartLink = $("<a>")
				.addClass("btn orange")
				.attr({"href": response.data,"target":"_blank"})
				.text("But you can see what you would have got!");
			$("#target").append(cartLink);
		})
	},
	render: function(){
		return(
			<div>
				<h1>Stripe Billing Form Coming soon</h1>
				<br></br>
				<div className="row">
					<div className="card col s6 offset-s3">
						<div className="card-content">
							<form action="/charge" method="post" id="payment-form">
							  	<div className="form-row">
							    	<label htmlFor="card-element">
							      		Credit or debit card
							    	</label>
							    	<div id="card-element">
							      
							   		</div>
							    	<div id="card-errors" role="alert"></div>
							 	</div>
							  	<button>Submit Payment</button>
							</form>
						</div>
					</div>
				</div>
				<p id="target" className="center-align"></p>
			
			</div>
			)
	}
});

module.exports = BillingForm;


// My Form

// <form>
// 	<div className="row">
// 		<div className="input-field col s12">
// 			<input placeholder="John Doe" id="name" type="text" className="validate"></input>
// 			<label htmlFor="name" className="active">Name</label>
// 		</div>
// 	</div>
// 	<div className="row">
// 		<div className="input-field col s8">
// 			<input placeholder="xxxx xxxx xxxx xxxx" id="card" type="text" className="validate"></input>
// 			<label htmlFor="card" className="active">Card</label>
// 		</div>
// 		<div className="input-field col s4">
// 			<input placeholder="MM/YY" id="expirationDate" type="text" className="validate"></input>
// 			<label htmlFor="expirationDate" className="active">Expiration Date</label>
// 		</div>
// 	</div>
// 	<div className="row">
// 		<div className="input-field col s6">
// 			<input placeholder="CVV" id="CVV" type="text" className="validate"></input>
// 			<label htmlFor="CVV" className="active">CVV</label>
// 		</div>
// 		<div className="input-field col s6">
// 			<input placeholder="00000" id="zipCode" type="text" className="validate"></input>
// 			<label htmlFor="zipCode" className="active">ZIP</label>
// 		</div> 
// 	</div>
// </form>