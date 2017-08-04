var sortOptions = require('./sortOptions');
var Cart = require('./addToCart');
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
	'Handmade',
	'HealthPersonalCare',
	'HomeGarden',
	'Industrial',
	'LawnAndGarden',
	'Luggage',
	'Magazines',
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
	var searchIndex;
	var sortArr;
	var sort;
	
	if (typeof this.searchOptions !== 'string'){
		searchIndex = this.searchOptions[Math.floor(Math.random()*this.searchOptions.length)];
	} else {
		searchIndex = this.searchOptions;
	}

	sortArr = sortOptions.whichIndex(searchIndex)
	sort = sortArr[Math.floor(Math.random()*sortArr.length)];

	opHelper.execute('ItemSearch', {
		'SearchIndex': searchIndex,
		'Keywords': ' ',
		'ItemPage': this.randomPage,
		'Availability': 'Available',
		'MaximumPrice': this.maximumPrice,
		'MinimumPrice': this.minimumPrice,
		'Sort': sort,
		'ResponseGroup': 'ItemAttributes,Offers,Images'
	}).then((response) => {
		if(this.maximumPrice !== null){
			var handler = handleSearchResults.bind(this);
			handler(response,cb);
		} else {
			var pickOne = Math.floor(Math.random()*response.result.ItemSearchResponse.Items.Item.length);
			var item = [response.result.ItemSearchResponse.Items.Item[pickOne]];

			cb(item);
		}
	}).catch((err) => {
		console.log("Something went wrong! ",err);
	})
}

function handleSearchResults(response, cb){
	var pickOne = Math.floor(Math.random()*response.result.ItemSearchResponse.Items.Item.length);
	var item = response.result.ItemSearchResponse.Items.Item[pickOne];
	var itemPrice;

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
		//Okay we've found all our items let's add them to a cart
		console.log(this.itemArray);
		handleCart(this.itemArray,cb);
		//cb(this.itemArray);
	}
}

function handleCart(itemArray,cb){
	Cart.createCart(itemArray[0].ASIN, itemArray, cb);
	console.log(cb);
}


router.get("/", function(req,res){
	/************************************************
	*            GET ONE RANDOM ITEM                *
	************************************************/
	var randomPage = Math.floor((Math.random()*9)+1);

	var queryObj = {
		itemArray: [],
		searchOptions: indexArray,
		randomPage: randomPage,
		maximumPrice: null,
		minimumPrice: 100
	};

	var mySearch = amazonSearch.bind(queryObj);
	mySearch(function(itemArray){
		res.json(itemArray);
	});
})

router.post("/", function(req,res){
	/************************************************
	*        GET MULTIPLE RANDOM ITEMS              *
	************************************************/
	var randomPage = Math.floor((Math.random()*9)+1);
	var searchOptions = req.body.SearchIndex

	var queryObj = {
		itemArray: [],
		searchOptions: searchOptions,
		randomPage: randomPage,
		maximumPrice: req.body.range*100,
		minimumPrice: 100
	}

	var mySearch = amazonSearch.bind(queryObj);
	mySearch(function(purchaseURL){
		console.log(purchaseURL);
		res.redirect(purchaseURL);
	});
})




module.exports = router;


