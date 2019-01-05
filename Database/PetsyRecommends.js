require("dotenv").config({ path: __dirname + "/../../.env" });

const mongoose = require("mongoose");

//get sensitive information from .env file
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const uri = process.env.DB_URI;
const DB = process.env.DB;
const url = `mongodb+srv://${username}:${password}@${uri}/${DB}?`;

mongoose.Promise = global.Promise;

mongoose
  .connect(
    url,
    { useNewUrlParser: true, authSource: "admin" }
  )
  .then(() => console.log("connected to databse boss!!"))
  .catch(err => console.log("error connecting to database: ", err));

const Schema = mongoose.Schema;

const petSchema = new Schema({
  pet_id: { type: Number, required: true },
  class: String,
  family: String,
  species: String,
  img_url: String
});

const Pet = mongoose.model("Pet", petSchema);

const getPetFamily = (pet_id, callback) => {
  Pet.findOne({ pet_id }, "family", (err, result) => {
    if (err) {
      console.log("error in getPetFamily at database", err);
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const getRecommendedPets = (pet_id, callback) => {
  getPetFamily(pet_id, (err, response) => {
    if (err) {
      console.log("error after getPetFamily ", err);
      callback(err);
    } else if (response === null) {
      callback("The pet_id is invalid");
    } else {
      family = response.family;
      Pet.find({ family }, (err, result) => {
        if (err) {
          console.log("error after Pet.find at database ", err);
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  });
};

module.exports = { Pet, getPetFamily, getRecommendedPets };
