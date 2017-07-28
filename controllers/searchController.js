var express = require('express');
var router = new express.Router();
const {OperationHelper} = require('apac');


//Static stuff
const opHelper = new OperationHelper({
	awsId: 'AKIAIR3WJ4VCLLYEGLLQ',
    awsSecret: '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',
    assocId:   'atchotes-20',
    maxRequestsPerSecond: 1
});

var indexArray = [
	'Appliances',
	'ArtsAndCrafts',
	'Automotive',
	'Baby',
	'Beauty',
	'Books',
	'Collectibles',
	'Electronics',
	'Fashion',
	'GiftCards',
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

var amazonSearch = function(cb){
	opHelper.execute('ItemSearch', {
		'SearchIndex': this.searchIndex,
		'Keywords': ' ',
		'ItemPage': this.randomPage,
		'Availability': 'Available',
		'MaximumPrice': this.maximumPrice,
		'MinimumPrice': this.minimumPrice,
		'ResponseGroup': 'ItemAttributes,Offers,Images'
	}).then((response) => {
		var pickOne = Math.floor(Math.random()*response.result.ItemSearchResponse.Items.Item.length);
		var item = response.result.ItemSearchResponse.Items.Item[pickOne];
		var itemPrice
		//console.log(item);
		
		if(typeof item.OfferSummary.LowestNewPrice !== 'undefined'){
			itemPrice = item.OfferSummary.LowestNewPrice.Amount;
			this.itemArray.push(item);
			this.maximumPrice = this.maximumPrice - itemPrice;
		}
		console.log("How much money do we got left? A: "+this.maximumPrice);
		if(this.maximumPrice>100){
			var newSearch = amazonSearch.bind(this);
			newSearch(cb);
		} else {
			console.log(this.itemArray);
			cb(this.itemArray);
		}
		// console.log(item);
	}).catch((err) => {
		console.log("Something went wrong! ",err);
	})
}


router.get("/", function(req,res){
	var randomPage = Math.floor((Math.random()*9)+1);
	var searchIndex = indexArray[Math.floor(Math.random()*indexArray.length)];
	opHelper.execute('ItemSearch', {
	  'SearchIndex': searchIndex,
	  'Keywords': ' ',
	  'ItemPage': randomPage,
	  //'MinPercentageOff': 90,
	  'Availability': 'Available',
	  //'MaximumPrice': 500,
	  'MinimumPrice': 99,
	  'ResponseGroup': 'ItemAttributes,Offers,Images'
	}).then((response) => {
		//Here we're console logging the arguments we entered just to make sure everything is interpreted correctly
		var argArray = response.result.ItemSearchResponse.OperationRequest.Arguments.Argument;
		for (var i = 0; i<argArray.length; i++){
			console.log(i+": "+"Name: "+argArray[i].$.Name+" | Value: "+argArray[i].$.Value);
		}
		console.log("-------------------------------------");
		console.log(response.result);
	    console.log("-------------------------------------");
	    //Then we have to pick one of the ten results to display
	    var pickOne = Math.floor(Math.random()*response.result.ItemSearchResponse.Items.Item.length);
	    //send result to the console1
	    //console.log(response.result.ItemSearchResponse.Items.Item[pickOne]);
	    //send result back to the client to be interpreted
	     //console.log("-------------------------------------");
	    var item = response.result.ItemSearchResponse.Items.Item[pickOne];
	    //console.log(item.Offers.Offer)
	    res.json(item);
	}).catch((err) => {
		//if there are any errors
		res.send(err);
	    console.error("Something went wrong! ", err);
	});
})

router.post("/", function(req,res){
	console.log(req.body);
	var randomPage = Math.floor((Math.random()*9)+1);
	var searchIndex;
	console.log("=>"+req.body.SearchIndex+"<=");
	if (typeof req.body.SearchIndex !== 'string'){
		searchIndex = req.body.SearchIndex[Math.floor(Math.random()*req.body.SearchIndex.length)];
	} else {
		searchIndex = req.body.SearchIndex;
	}
	
	var queryObj = {
		itemArray: [],
		searchIndex: searchIndex,
		randomPage: randomPage,
		maximumPrice: req.body.range*100,
		minimumPrice: 100
	}

	var mySearch = amazonSearch.bind(queryObj);

	mySearch(function(itemArray){
		res.json(itemArray);
	});
	// opHelper.execute('ItemSearch', {
	//   'SearchIndex': searchIndex,
	//   'Keywords': ' ',
	//   'ItemPage': randomPage,
	//   'Availability': 'Available',
	//   'MaximumPrice': req.body.range*100,
	//   'MinimumPrice': (req.body.range*100)-100,
	//   'ResponseGroup': 'ItemAttributes,Offers,Images'
	// }).then((response) => {
	// 	//Here we're console logging the arguments we entered just to make sure everything is interpreted correctly
	// 	var argArray = response.result.ItemSearchResponse.OperationRequest.Arguments.Argument;
	// 	for (var i = 0; i<argArray.length; i++){
	// 		console.log(i+": "+"Name: "+argArray[i].$.Name+" | Value: "+argArray[i].$.Value);
	// 	}
	// 	console.log("-------------------------------------");
	// 	console.log(response.result);
	//     console.log("-------------------------------------");
	//     //Then we have to pick one of the ten results to display
	//     var pickOne = Math.floor(Math.random()*response.result.ItemSearchResponse.Items.Item.length);
	    
	//     var item = response.result.ItemSearchResponse.Items.Item[pickOne];
	    
	//     res.json(item);
	// }).catch((err) => {
	// 	//if there are any errors
	// 	res.send(err);
	//     console.error("Something went wrong! ", err);
	// });

})


module.exports = router;


