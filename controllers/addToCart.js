//gonna buy this B06XDH6SZP autonimously 
//HMAC === kPCJHM883byycivvgjul78Yi/E4=

const {OperationHelper} = require('apac');

const opHelper = new OperationHelper({
	awsId: 'AKIAIR3WJ4VCLLYEGLLQ',
    awsSecret: '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',
    assocId:   'atchotes-20',
    maxRequestsPerSecond: 1
});

var addToCart = function(ASIN){
	opHelper.execute('CartAdd', {
	'AssociateTag': 'atchotes-20',
	'CartId':'136-3315516-4042836',
	'HMAC': 'kPCJHM883byycivvgjul78Yi/E4=',
	'Item.1.ASIN': ASIN,
	'Item.1.Quantity': 1
	}).then((response) => {
		console.log(JSON.stringify(response,null,' '));
	});
}

module.exports = addToCart;