//gonna buy this B06XDH6SZP autonimously 
//HMAC === kPCJHM883byycivvgjul78Yi/E4=

var db = require("../models");
// var buyCart = require('./headlessChrome');

const {OperationHelper} = require('apac');

const opHelper = new OperationHelper({
	awsId: 'AKIAIR3WJ4VCLLYEGLLQ',
    awsSecret: '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',
    assocId:   'atchotes-20',
    maxRequestsPerSecond: 1
});


var addToCart = function(offerListingId,cartId,HMAC){
	opHelper.execute('CartAdd', {
	'AssociateTag': 'atchotes-20',
	'CartId':cartId,
	'HMAC': HMAC,
	'Item.1.OfferListingId': offerListingId,
	'Item.1.Quantity': 1
	}).then((response) => {
		//console.log(JSON.stringify(response,null,' '));
	}).catch((error) => {
		console.log("CardId: "+cartId);
		console.log("HMAC: "+offerListingId);
		console.log("Item.1.OfferListingId: "+offerListingId);
		console.log(error);

	});
}

var createCart = function(offerListingId,itemArray,shippingObj,cb){
	console.log("------------------OfferListing ID------------------")
	console.log(itemArray[0].Offers.Offer.OfferListing.OfferListingId);
	opHelper.execute('CartCreate', {
	'AssociateTag': 'atchotes-20',
	'Item.1.OfferListingId': offerListingId,
	'Item.1.Quantity': 1
	}).then((response) => {
		var cart = response.result.CartCreateResponse.Cart;
		console.log(JSON.stringify(cart,null,' '));
		for(var i = 1;i<itemArray.length;i++){
			console.log("adding THIS to my cart"+itemArray[i].Offers.Offer.OfferListing.OfferListingId);
			addToCart(itemArray[i].Offers.Offer.OfferListing.OfferListingId, cart.CartId, cart.HMAC)
		}
		
		console.log(shippingObj);
		cb(cart.PurchaseURL)
		db.Orders.create({
			OrderID: Date.now(),
			purchaseURL: cart.PurchaseURL,
			customerName: shippingObj.customerName,
			address: shippingObj.address1,
			city: shippingObj.city,
			state: shippingObj.state,
			zipCode: shippingObj.zip,
			phoneNumber: shippingObj.phoneNumber,
			status: "pending"
		})
		// buyCart(cart.PurchaseURL,'test');
	});
}

var cartMethods = {
	addToCart: addToCart,
	createCart: createCart
}

module.exports = cartMethods;