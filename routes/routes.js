var express = require("express");
var path = require("path");
var searchRoutes = require("../controllers/searchController");
var stripeRoutes = require("../controllers/stripeController");

var router = new express.Router();

router.use("/API/search", searchRoutes);
router.use("/API/buy", stripeRoutes);
// router.get("/random", function(req,res){
// 	res.sendFile(path.join(__dirname,"../public/display.html"));
// });
// router.get("/test", function(req,res){
// 	res.sendFile(path.join(__dirname,"../public/test.html"));
// })

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
