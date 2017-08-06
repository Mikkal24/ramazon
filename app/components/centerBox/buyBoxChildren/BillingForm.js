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
			<form action="/your-server-side-code" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_5d9CqeRNmhQBq86Qj1slB5sj"
    data-amount="999"
    data-name="ramazongen.herokuapp"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto">
  </script>
</form>
			)
	}
});

module.exports = BillingForm;
