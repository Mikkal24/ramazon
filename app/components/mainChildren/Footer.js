var React = require("react");
var Footer = React.createClass({
	render: function(){
		return(
			<div>
				<div className="footer-copyright">
			        <div className="container">
			            © 2017 Copyright Text
			            <a className ="grey-text text-lighten-4 right" href="#!">More Links</a>
			        </div>
		        </div>
			</div>
			)
	}
});

module.exports = Footer;