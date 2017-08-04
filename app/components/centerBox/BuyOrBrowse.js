var React = require("react");
var BuyOrBrowse = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="buyOrBrowseBox button-row">
					<div><a href="/buy" rel="nofollow" rel="noreferrer"title="Buy"></a></div>
					<br></br>
    				<div><a href="/browse" rel="nofollow" rel="noreferrer"title="Browse"></a></div>
				</div>
			</div>
			)
	}
});

module.exports = BuyOrBrowse;