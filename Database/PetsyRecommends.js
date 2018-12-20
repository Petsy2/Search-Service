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

module.exports = Pet;
