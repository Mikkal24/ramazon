var React = require("react");
let query = require("../../../utils/query")
var BillingForm = React.createClass({
	componentDidMount: function(){
		let queryObj = {
			SearchIndex: this.props.queryInfo.categories,
			range: this.props.queryInfo.amount
		}

		query.getRandomCart(queryObj).then(function(response){
			var cartLink = $("<a>").addClass("btn orange").attr({"href": response.data,"target":"_blank"}).text("But you can see what you would have got!");
			$("#target").append(cartLink);
		})
	},
	render: function(){
		return(
			<div >
				<h1>Stripe Billing Form Coming soon</h1>
				<br></br>
				<p id="target" className="center-align"></p>
			</div>
			)
	}
});

module.exports = BillingForm;