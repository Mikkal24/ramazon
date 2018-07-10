import axios from "axios";

const AmazonQuery = {
  getOneRandom: function() {
    console.log("query:", "getting one random");
    return axios.get("/API/search");
  },
  getRandomCart: function(data) {
    return axios.post("/API/search", data);
  },
  stripeTokenHandler: function(data) {
    return axios.post("/API/buy", data);
  },
  sendPurchaseData: function() {
    return axios.post("/API/purchaseData", data);
  }
};

export default AmazonQuery;
