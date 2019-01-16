const mongoose = require("mongoose");

//get sensitive information from .env file
const username = process.env.DB_USERNAME || "root";
const password = process.env.DB_PASSWORD || "password";
const uri = process.env.DB_URI || "localhost:27017";
const DB = process.env.DB || "ten_mil";
const url = `mongodb://${username}:${password}@${uri}/${DB}`;

mongoose.Promise = global.Promise;

mongoose
  .connect(
    url,
    { useNewUrlParser: true, authSource: "admin" }
  )
  .then(() => console.log("connected to database boss!!"))
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

const getRecommendedPets = pet_id => {
  return Pet.findOne({ pet_id }, "family").then(result => {
    if (!result) {
      return [];
    }
    let family = result.family;
    return Pet.find({ family }).limit(20);
  });
};

module.exports = { getRecommendedPets };
