var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var db = require("./models");
var compression = require("compression");

var PORT = process.env.PORT || 8000;

var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

app.listen(PORT, function() {
  console.log("We're running on port " + PORT + " mang");
});

db.sequelize.sync({}).then(function() {
  console.log("DB connected");
});
