var express = require('express');
var router = new express.Router();

<<<<<<< HEAD
// var stripe = require("stripe")("sk_live_FCDBKekbEPofIHIpg2asLTdE")
=======
var stripe = require("stripe")("")
>>>>>>> 9565807d2866542c4fc3e2c50c6759337393a44c

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
