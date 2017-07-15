var express = require('express');
var bodyParser = require('body-parser');
var routes = require("./routes/routes");

var PORT = process.env.PORT || 8080;

var app = express();

app.use("/", routes);

app.listen(PORT, function(){
	console.log("We're running on port "+ PORT +" mang"); 
})