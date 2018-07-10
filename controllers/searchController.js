var sortOptions = require("./sortOptions");
var Cart = require("./addToCart");
var express = require("express");
var { OperationHelper } = require("apac");
var router = new express.Router();
require("dotenv").config();

//Static stuff
const opHelper = new OperationHelper({
  awsId: process.env.AMAZON_ID,
  awsSecret: process.env.AMAZON_SECRET,
  assocId: process.env.AMAZON_ASSOCIATEID,
  maxRequestsPerSecond: 1
});

var indexArray = [
  "Appliances",
  "ArtsAndCrafts",
  "Automotive",
  "Baby",
  "Beauty",
  "Books",
  "Collectibles",
  "Electronics",
  "Fashion",
  //'Handmade',
  "HealthPersonalCare",
  "HomeGarden",
  "Industrial",
  "LawnAndGarden",
  "Luggage",
  "Magazines",
  "Movies",
  "Music",
  "MusicalInstruments",
  "OfficeProducts",
  "Pantry",
  "PCHardware",
  "PetSupplies",
  "Software",
  "SportingGoods",
  "Tools",
  "Toys",
  //'UnboxVideo',
  "VideoGames",
  "Wine",
  "Wireless"
];

var amazonSearch = function(cb) {
  var searchIndex;
  var sortArr;
  var sort;
  var self = this;

  //decide which interest(s) to search
  if (typeof this.searchOptions !== "string") {
    searchIndex = this.searchOptions[
      Math.floor(Math.random() * this.searchOptions.length)
    ];
  } else {
    searchIndex = this.searchOptions;
  }

  sortArr = sortOptions.whichIndex(searchIndex); //decide what search paramater to use
  sort = sortArr[Math.floor(Math.random() * sortArr.length)];

  console.log("searching");
  opHelper
    .execute("ItemSearch", {
      SearchIndex: searchIndex,
      Keywords: " ",
      ItemPage: this.randomPage,
      Availability: "Available",
      MaximumPrice: this.maximumPrice,
      MinimumPrice: this.minimumPrice,
      Sort: sort,
      MerchantId: this.merchantId,
      ResponseGroup: "ItemAttributes,Offers,Images"
    })
    .then(response => {
      console.log(response);
      var handler = handleSearchResults.bind(this);
      handler(response, cb);
    })
    .catch(err => {
      if (err) return console.log(err);
      self.randomPage = 1;
      var newSearch = amazonSearch.bind(this);
      newSearch(cb);
    });
};

function handleSearchResults(response, cb) {
  var pickOne = Math.floor(
    Math.random() * response.result.ItemSearchResponse.Items.Item.length
  );
  var item = response.result.ItemSearchResponse.Items.Item[pickOne];
  var itemPrice;

  /********************************************
   *        If there is a limit                *
   ********************************************/
  if (this.maximumPrice !== null) {
    // Only add the item if it meets our requirements
    console.log(
      "Is eligible for prime? A: " +
        item.Offers.Offer.OfferListing.IsEligibleForPrime
    );
    if (
      typeof item.OfferSummary.LowestNewPrice !== "undefined" &&
      item.Offers.Offer.OfferListing.IsEligibleForPrime === "1" &&
      item.Offers.Offer.OfferListing.AvailabilityAttributes.AvailabilityType ===
        "now"
    ) {
      itemPrice = item.Offers.Offer.OfferListing.Price.Amount;

      if (itemPrice < this.maximumPrice) {
        this.itemArray.push(item);
        this.maximumPrice = this.maximumPrice - itemPrice;
      }
    }

    console.log("How much money do we got left? A: $" + this.maximumPrice);
    if (this.maximumPrice > 100) {
      var newSearch = amazonSearch.bind(this);
      newSearch(cb);
    } else {
      cb(this.itemArray);
    }
  } else {
    cb([item]);
  }
}

// function handleCart(itemArray,cb){
//// 	console.log("------------------OfferListing ID------------------")
//// 	console.log(itemArray[0].Offers.Offer.OfferListing.OfferListingId);
// 	//Cart.createCart(itemArray[0].Offers.Offer.OfferListing.OfferListingId, itemArray, cb);
//// 	// console.log(cb);
// }

router.get("/", function(req, res) {
  console.log("searching for one random item");
  /************************************************
   *            GET ONE RANDOM ITEM                *
   ************************************************/
  var randomPage = Math.floor(Math.random() * 9 + 1);

  var queryObj = {
    itemArray: [],
    searchOptions: indexArray,
    randomPage: randomPage,
    maximumPrice: null,
    minimumPrice: null,
    merchantId: "All"
  };

  var mySearch = amazonSearch.bind(queryObj);
  mySearch(function(itemArray) {
    console.log(itemArray);
    res.json(itemArray);
  });
});

router.post("/", function(req, res) {
  /************************************************
   *        GET MULTIPLE RANDOM ITEMS              *
   ************************************************/
  var randomPage = Math.floor(Math.random() * 9 + 1);
  var searchOptions = req.body.SearchIndex;
  var shippingInfo = req.body.shippingAddress;

  var queryObj = {
    itemArray: [],
    randomPage: randomPage,
    searchOptions: searchOptions,
    maximumPrice: req.body.range * 90,
    minimumPrice: 99,
    merchantId: "All"
  };

  var mySearch = amazonSearch.bind(queryObj);
  mySearch(function(itemArray) {
    // go ahead and create a cart once we have our items
    Cart.createCart(
      itemArray[0].Offers.Offer.OfferListing.OfferListingId,
      itemArray,
      shippingInfo,
      function(purchaseURL) {
        res.send(purchaseURL);
      }
    );
  });
});

module.exports = router;
