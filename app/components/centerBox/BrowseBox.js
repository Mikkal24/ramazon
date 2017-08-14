var React = require("react");
let query

var BrowseBox = React.createClass({
	getInitialState: function(){
		query = require("../../utils/query");

		return({
			image: "",
			title: "",
			description: "",
			price: "",
			url: "",
			currentCount: 0,
			maxCount: 0,
			pastSearches: [],
			showLeftArrow: false
		})
	},

	componentWillMount: function(){
		this.search();
	},


	search: function(){
		var self = this;
		console.log(self.state);
		if(self.state.maxCount===self.state.currentCount){
		query.getOneRandom().then(function(response){
			console.log(response);
			var image = response.data[0].LargeImage ? response.data[0].LargeImage.URL : "./assets/defaultImage.png";
			var url = response.data[0].DetailPageURL;
			var lowestOffer = response.data[0].OfferSummary.LowestNewPrice ? 
			"("+response.data[0].OfferSummary.LowestNewPrice.FormattedPrice+")" : "(no new offers)";
			var title = response.data[0].ItemAttributes.Title;
			var pastSearches = self.state.pastSearches;
			var currentCount = self.state.currentCount+1
			var maxCount = self.state.maxCount+1;
			var leftArrowStatus = currentCount>1 ? true : false;
			
			pastSearches.push(response);
			self.setState({
				pastSearches: pastSearches,
				image: image, 
				url: url,
				price:lowestOffer,
				title:title, 
				currentCount: currentCount,
				maxCount: maxCount,
				showLeftArrow: leftArrowStatus
			});
		})} else {
			this.goForward();
		}
	},

	goBack: function(){
		console.log(this.state);
		console.log(this.state.pastSearches[this.state.currentCount-1]);
		var currentCount = this.state.currentCount-1;
		var response = this.state.pastSearches[currentCount-1];
		var image = response.data[0].LargeImage ? response.data[0].LargeImage.URL : "./assets/defaultImage.png";
		var url = response.data[0].DetailPageURL;
		var lowestOffer = response.data[0].OfferSummary.LowestNewPrice ? "("+response.data[0].OfferSummary.LowestNewPrice.FormattedPrice+")" : "(no new offers)";
		var title = response.data[0].ItemAttributes.Title;
		var leftArrowStatus = currentCount>1 ? true : false;

		this.setState({
			image: image, 
			url: url,
			price:lowestOffer,
			title:title,
			currentCount: currentCount,
			showLeftArrow: leftArrowStatus
		});

	},

	goForward: function(){
		console.log(this.state);
		console.log(this.state.pastSearches[this.state.currentCount+1]);
		var currentCount = this.state.currentCount+1;
		var response = this.state.pastSearches[currentCount-1];
		var image = response.data[0].LargeImage ? response.data[0].LargeImage.URL : "./assets/defaultImage.png";
		var url = response.data[0].DetailPageURL;
		var lowestOffer = response.data[0].OfferSummary.LowestNewPrice ? 
			"("+response.data[0].OfferSummary.LowestNewPrice.FormattedPrice+")" : "(no new offers)";
		var title = response.data[0].ItemAttributes.Title;
		var leftArrowStatus = currentCount>1 ? true : false;

		this.setState({
			image: image, 
			url: url,
			price:lowestOffer,
			title:title,
			currentCount: currentCount,
			showLeftArrow: leftArrowStatus
		});
	},

	render: function(){
		return(
			<div className="centerThis arrowContainer">
			{this.state.showLeftArrow ? 
				<div id="hideThis" className="arrowDiv">
					<a className="arrowAnchor" href="#">
						<span className="leftArrow" onClick={this.goBack}></span>
					</a>
				</div>
				: null}
				<div className="displayContainer">
					<a href={this.state.url} target="_blank"><img className="browseImg" src={this.state.image}></img></a>
					<h5>{this.state.title}</h5>
					<h5>{this.state.price}</h5>
				</div>
				<div className="arrowDiv">
					<a className="arrowAnchor" href="#">
						<span className="rightArrow" onClick={this.search}></span>
					</a>
				</div>
			</div>
			)
	}
});

module.exports = BrowseBox;