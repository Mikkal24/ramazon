//database connection
var db = require("./models");

//purchase script
var moneyBags = require("./controllers/headlessChrome");


startTimerLoop();

function startTimerLoop(){
  db.Orders.findAll({
    where: {
      status: 'pending'
    }
  }).then(function(results){
    console.log("Trying to print results");
    var data = results[0].dataValues;
    console.log(data);
    moneyBags(data.purchaseURL,data);
  })
  //setTimeout(startTimerLoop, 60000);  
}