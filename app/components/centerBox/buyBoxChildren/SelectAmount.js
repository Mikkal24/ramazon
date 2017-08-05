var React = require("react");
var SelectAmount = React.createClass({
	select5: function(){
		this.props.setAmount(5);
		this.props.nextHandler();
	},

	select20: function(){
		this.props.setAmount(20);
		this.props.nextHandler();
	},

	select100: function(){
		this.props.setAmount(100);
		this.props.nextHandler();
	},

	render: function(){
		return(
				<div className="amazonYellowBorder row decentPadding">
					<div className="col s4">
						<h1 className="center-align">$</h1>
						<h5 className="center-align">Some Stuff ($5)</h5>
						<div className="row"><a onClick={this.select5} className="col s6 offset-s3 btn orange">Select</a></div>
					</div>
					<div className="col s4">
						<h1 className="center-align">$$</h1>
						<h5 className="center-align">More Stuff($20)</h5>
						<div className="row"><a onClick={this.select20} className="col s6 offset-s3 btn orange">Select</a></div>
					</div>
					<div className="col s4">
						<h1 className="center-align">$$$</h1>
						<h5 className="center-align">Everything ($100)</h5>
						<div className="row"><a onClick={this.select100} className="col s6 offset-s3 btn orange">Select</a></div>
					</div>
				</div>
			)
	}
});

module.exports = SelectAmount; 