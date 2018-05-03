import React, { Component } from 'react';
import query from '../../utils/query';

class BrowseBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			image: "",
			title: "",
			description: "",
			price: "",
			url: "",
			currentCount: 0,
			maxCount: 0,
			pastSearches: [],
			showLeftArrow: false
		}
	}

	componentDidMount = () =>{
		this.search();
	}

	componentDidUpdate = () =>{
		console.log("component Will Update");
		this.renderBrowseContainer();
	}

	search = () => {
		var self = this;
		console.log(self.state);
		if(self.state.maxCount===self.state.currentCount){
			this.renderSpinner();
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
				console.log(currentCount);
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
	}

	goBack = () =>{
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
		})

	}

	goForward = () =>{
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
		
	}

	renderSpinner = () =>{
		console.log("attempting to empty the displayContainer");
		$(".displayContainer").empty();
		var spinnerDiv = $("<div>").addClass("sk-folding-cube");
		spinnerDiv.append($("<div>").addClass("sk-cube1 sk-cube"));
		spinnerDiv.append($("<div>").addClass("sk-cube2 sk-cube"));
		spinnerDiv.append($("<div>").addClass("sk-cube4 sk-cube"));
		spinnerDiv.append($("<div>").addClass("sk-cube3 sk-cube"));
		$(".displayContainer").append(spinnerDiv);
	}

	renderBrowseContainer = () =>{
		console.log(this.state);
		$(".displayContainer").empty();
		var link = $("<a>").attr({
			href: this.state.url,
			target: "_blank"
		})
		var image=$("<img>").attr({
			class:"browseImg",
			src:this.state.image
		})
		var title=$("<h5>").text(this.state.title);
		var price=$("<h5>").text(this.state.price);

		link.append(image);
		$(".displayContainer").append(link);
		$(".displayContainer").append(title);
		$(".displayContainer").append(price);
	}

	resizeImage = () =>{
		var img = $("#browseImg")
			if(img.height > img.width){
				img.height='100%';
				img.width='auto';
			}
	}

	render = () =>{
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
					<a href={this.state.url} target="_blank"><img onload={this.resizeImage} id="browseImg" className="browseImg" src={this.state.image}></img></a>
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
};

export default BrowseBox;