var express = require('express');
var router = new express.Router();

var stripe = require("stripe")("sk_live_FCDBKekbEPofIHIpg2asLTdE")

router.post("/", function(req,res){
	console.log(req.body);
	var token = req.body.id;

	var charge=stripe.charges.create({
		amount:500,
		currency: "usd",
		description: "TESTING",
		source: token,
	}, function(err,charge){
		console.log(err);
	})
})

module.exports = router;