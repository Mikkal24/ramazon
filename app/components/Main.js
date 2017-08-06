var React = require("react");
var Navbar = require("./mainChildren/Navbar.js");
var Footer = require("./mainChildren/Footer.js");

var Main = React.createClass({
	render: function(){
		return(
			<div className="page-flexbox-wrapper">
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
			</div>
			)
	}
});

module.exports = Main;
