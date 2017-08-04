var React = require("react");
let query

var BrowseBox = React.createClass({
	getInitialState: function(){
		query = require("../../utils/query");
		return({
			image: ""
		})
	},

	search: function(){
		var self = this;
		//console.log(query);
		query.getOneRandom().then(function(response){
			console.log(response);
			var image = response.data[0].LargeImage.URL;
			console.log(image);
			self.setState({image: image});
		})
	},

	render: function(){
		return(
			<div className="centerThis">
				<a><img src="./assets/arrow.png"></img></a>
				<img src={this.state.image}></img>
				<a onClick={this.search}> <img src="./assets/leftArrow.png"></img></a>
			</div>
			)
	}
});

module.exports = BrowseBox;