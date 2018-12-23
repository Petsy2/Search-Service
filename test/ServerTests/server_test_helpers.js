const mongoose = require("mongoose");
const axios = require("axios");
const url = "http://localhost:1337/api/recommends";

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://localhost:27017/PetsyRecommends",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to databse boss!!"))
  .catch(err => console.log("error connecting to database: ", err));

mongoose.connection.on("connected", function() {
  console.log("PetsyRecommends connection is open. RUNNING API TESTS!!!....");
});
mongoose.connection.on("error", function(err) {
  console.log("WE HAVE AN ERROR CAP'N " + err);
});

const mockGET = (params, callback) => {
  axios
    .get(url, params)
    .then(response => callback(response))
    .catch(err => {});
};

module.exports = mockGET;
