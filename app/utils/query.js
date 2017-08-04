import axios from "axios";

const AmazonQuery = {
	getOneRandom: function(){
		return axios.get("/search");
	},
	getRandomCart: function(data){
		return axios.post("/search", data);
	}
}

module.exports = AmazonQuery;