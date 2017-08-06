var React = require("react");
var SelectCategories = React.createClass({
	getInitialState: function(){
		var options = [
			{name:'Appliances', selected: false},
			{name:'ArtsAndCrafts', selected: false},
			{name:'Automotive', selected: false},
			{name:'Baby', selected: false},
			{name:'Beauty', selected: false},
			{name:'Books', selected: false},
			{name:'Collectibles', selected: false},
			{name:'Electronics', selected: false},
			{name:'Fashion', selected: false},
			{name:'Handmade', selected: false},
			{name:'HealthPersonalCare', selected: false},
			{name:'HomeGarden', selected: false},
			{name:'Industrial', selected: false},
			{name:'LawnAndGarden', selected: false},
			{name:'Luggage', selected: false},
			{name:'Magazines', selected: false},
			{name:'MobileApps', selected: false},
			{name:'Movies', selected: false},
			{name:'Music', selected: false},
			{name:'MusicalInstruments', selected: false},
			{name:'OfficeProducts', selected: false},
			{name:'Pantry', selected: false},
			{name:'PCHardware', selected: false},
			{name:'PetSupplies', selected: false},
			{name:'Software', selected: false},
			{name:'SportingGoods', selected: false},
			{name:'Tools', selected: false},
			{name:'Toys', selected: false},
			{name:'UnboxVideo', selected: false},
			{name:'VideoGames', selected: false},
			{name:'Wine', selected: false},
			{name:'Wireless', selected: false}]
		return({
			indexArray: options
		})
	},

	flagSelected: function(id){
		let newIndexArray = this.state.indexArray;
		for(var i=0;i<newIndexArray.length;i++){
			if(newIndexArray[i].name===id){
				newIndexArray[i].selected = true;
			}
		}

		this.setState({indexArray:newIndexArray});
	},

	flagAll: function(){
		let newIndexArray = this.state.indexArray;
		for (var i=0;i<newIndexArray.length;i++){
			newIndexArray[i].selected = true;
		}

		this.setState({indexArray: newIndexArray});
	},

	// componentDidUpdate: function(){
	// 	console.log(this.state);
	// },

	componentDidMount: function(){
		var self = this;
		for(var i = 0;i<this.state.indexArray.length;i++){
			$("#target").append($("<a>")
						.attr({
							"class": "btn interest",
							"id":this.state.indexArray[i].name					
							})
						.text(this.state.indexArray[i].name));
		}

		$(".interest").click(function(event){
			event.preventDefault();
			$("#"+this.id).addClass("red");
			self.flagSelected(this.id);
		})

		$("#all").click(function(event){
			event.preventDefault();
			$(".interest").addClass("red");
			self.flagAll();
		})
	},

	getInfo: function(){
		let selectedCategories = [];

		for(var i=0; i<this.state.indexArray.length;i++){
			if(this.state.indexArray[i].selected===true){
				selectedCategories.push(this.state.indexArray[i].name);
			}
		}

		this.props.setCategories(selectedCategories);
		this.props.nextHandler();
	},

	render: function(){
		return(
			<div className="centerThis">
				<div className="fifty-percent amazonYellowBorder">
					<h1>Select Interests</h1>
					<div className="row">
					<a id="all" className="col s4 offset-s4 align btn red">All</a>
					</div>
					<div id="target"></div>
					<br></br>
					<div>
						<p className="center-align"><a onClick={this.getInfo} className="btn orange">Next &gt;</a></p>
					</div>
				</div>


			</div>
			)
	}
});

module.exports = SelectCategories; 