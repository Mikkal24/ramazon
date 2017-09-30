var express = require('express');
var router = new express.Router();

router.post("/buy", function(req,res){
	var address = req.body.address;
	var purchaseURL = req.body.purchaseURL;
})