const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommends",
  { useNewUrlParser: true }
);

const Schema = mongoose.Schema;

const petSchema = new Schema({
  pet_id: { type: Number, required: true },
  class: String,
  family: String,
  species: String,
  img_url: String
});

const Pet = mongoose.model("Pet", petSchema);

const getPetFamily = (req, callback) => {
  Pet.findOne({ pet_id: req }, "family", (err, result) => {
    if (err) {
      throw new Error("broken inside getPetFamily");
    } else {
      callback(null, result);
    }
  });
};

const getRecommendedPets = (req, res) => {
  getPetFamily(req, (err, response) => {
    if (err) {
      throw new Error("broken inside getRecommenedPets");
    }
  });
};

module.exports = Pet;
module.exports = getPetFamily;
module.exports = getRecommendedPets;
