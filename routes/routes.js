var express = require('express');
var path = require('path');
var searchRoutes = require("../controllers/searchController");

var router = new express.Router();

router.use("/search", searchRoutes);

router.get("*", function(req,res){
	res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = router;