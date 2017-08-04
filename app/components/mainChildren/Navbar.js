var React = require("react");
var Navbar = React.createClass({
	render: function(){
		return(
			<div>
				<nav className="amazonBlue">
					<div className="nav-wrapper">
						<a href="/" className="brand-logo  ">Ramazon</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a>Sign In</a></li>
							<li><a>About</a></li>
							<li><a>Contact</a></li>
						</ul>
					</div>
				</nav>
			</div>
			)
	}
});

module.exports = Navbar;