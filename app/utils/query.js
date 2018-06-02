import axios from "axios";

const AmazonQuery = {
  getOneRandom: function() {
    return axios.get("/search");
  },
  getRandomCart: function(data) {
    return axios.post("/search", data);
  },
  stripeTokenHandler: function(data) {
    return axios.post("/buy", data);
  },
  sendPurchaseData: function() {
    return axios.post("/purchaseData", data);
  }
};

export default AmazonQuery;
