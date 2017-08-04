var React = require("react");
var SelectCategories = React.createClass({
	getInitialState: function(){
		var options = [
			'Appliances',
			'ArtsAndCrafts',
			'Automotive',
			'Baby',
			'Beauty',
			'Books',
			'Collectibles',
			'Electronics',
			'Fashion',
			'Handmade',
			'HealthPersonalCare',
			'HomeGarden',
			'Industrial',
			'LawnAndGarden',
			'Luggage',
			'Magazines',
			'MobileApps',
			'Movies',
			'Music',
			'MusicalInstruments',
			'OfficeProducts',
			'Pantry',
			'PCHardware',
			'PetSupplies',
			'Software',
			'SportingGoods',
			'Tools',
			'Toys',
			'UnboxVideo',
			'VideoGames',
			'Wine',
			'Wireless']
		return({
			indexArray: options
		})
	},

	componentDidMount: function(){
		for(var i = 0;i<this.state.indexArray.length;i++){
			console.log(this.state.indexArray[i]);
			$("#target").append($("<a>").attr("class","btn").html(this.state.indexArray[i]));
		}
	},

	render: function(){
		return(
			<div className="centerThis">
				<div className="fifty-percent amazonYellowBorder">
					<h1>Select Interests</h1>
					<div className="row">
					<a className="col s3 offset-s4 align btn red">All</a>
					</div>
					<div id="target">
					</div>
				</div>
			</div>
			)
	}
});

module.exports = SelectCategories;