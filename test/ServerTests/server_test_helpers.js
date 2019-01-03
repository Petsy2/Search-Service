const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config({ path: __dirname + "/../../../.env" });

//get sensitive information from .env file
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const uri = process.env.DB_URI;
const DB = process.env.DB;
const url = `mongodb+srv://${username}:${password}@${uri}/${DB}?retryWrites=true`;

mongoose.Promise = global.Promise;

mongoose
  .connect(
    url,
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
