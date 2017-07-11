const {OperationHelper} = require('apac');
//var parseString = require('xml2js').parseString;

const opHelper = new OperationHelper({
	awsId: '',
	//awsId:     '',
    awsSecret: '',
    assocId:   ''
});

var randomPage = Math.floor((Math.random()*10)+1);
console.log(randomPage);

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
	'Grocery',
	'Handmade',
	'HealthPersonalCare',
	'HomeGarden',
	'Industrial',
	'KindleStore',
	'LawnAndGarden',
	'Luggage',
	'Magazines',
	'Marketplace',
	'Merchants',
	'MobileApps',
	'Movies',
	'MP3Downloads',
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
	'Vehicles',
	'VideoGames',
	'Wine',
	'Wireless']

var searchIndex = indexArray[Math.floor(Math.random()*indexArray.length)];
console.log(searchIndex);

opHelper.execute('ItemSearch', {
  'SearchIndex': searchIndex,
  'Keywords': ' ',
  'ItemPage': randomPage,
  'MinPercentageOff': 90,
  'Availability': 'Available',
  'MaximumPrice': 500,
  'MinimumPrice': 400,
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
	var argArray = response.result.ItemSearchResponse.OperationRequest.Arguments.Argument;
	for (var i = 0; i<argArray.length; i++){
		console.log(i+": "+"Name: "+argArray[i].$.Name+" | Value: "+argArray[i].$.Value);
	}
    //console.log("Results object: ", response.result.ItemSearchResponse.OperationRequest.Arguments.Argument);
    console.log("-------------------------------------");
    console.log("Results Items: ", response.result.ItemSearchResponse.Items);
    //console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});
