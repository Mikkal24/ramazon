var React = require("react");
var Navbar = require("./mainChildren/Navbar.js");
var Footer = require("./mainChildren/Footer.js");

var Main = React.createClass({
	render: function(){
		return(
			<div className="page-flexbox-wrapper">
				<header>
					<Navbar />
				</header>
				<main className="centerThis">
					{this.props.children}
				</main>
				<footer className="amazonBlue page-footer">
					<Footer />
				</footer>
			</div>
			)
	}
});

module.exports = Main;