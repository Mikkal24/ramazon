//gonna buy this B06XDH6SZP autonimously 
//HMAC === kPCJHM883byycivvgjul78Yi/E4=

var db = require("../models");

const {OperationHelper} = require('apac');

const opHelper = new OperationHelper({
	awsId: 'AKIAIR3WJ4VCLLYEGLLQ',
    awsSecret: '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',
    assocId:   'atchotes-20',
    maxRequestsPerSecond: 1
});


var addToCart = function(ASIN,cartId,HMAC){
	opHelper.execute('CartAdd', {
	'AssociateTag': 'atchotes-20',
	'CartId':cartId,
	'HMAC': HMAC,
	'Item.1.ASIN': ASIN,
	'Item.1.Quantity': 1
	}).then((response) => {
		//console.log(JSON.stringify(response,null,' '));
	});
}

var createCart = function(ASIN,itemArray,cb){
	opHelper.execute('CartCreate', {
	'AssociateTag': 'atchotes-20',
	'Item.1.ASIN': ASIN,
	'Item.1.Quantity': 1
	}).then((response) => {
		var cart = response.result.CartCreateResponse.Cart;
		console.log(JSON.stringify(cart,null,' '));
		for(var i = 1;i<itemArray.length;i++){
			addToCart(itemArray[i].ASIN, cart.CartId, cart.HMAC)
		}
		console.log("trying to redirect");
		console.log(cb);
		cb(cart.PurchaseURL)
		db.Cart.create({
			purchaseURL: cart.PurchaseURL,
			customerName: "Michael Sorensen",
			address: "8703 dummy dr.",
			city: "New York",
			state: "NY",
			zipCode: "98456",
			phoneNumber: "8888888888"
		})
	});
}

var cartMethods = {
	addToCart: addToCart,
	createCart: createCart
}

module.exports = cartMethods;