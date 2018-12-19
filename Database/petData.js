const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommends",
  { useNewUrlParser: true }
);

const Schema = mongoose.Schema;

const petSchema = new Schema({
  pet_id: Number,
  class: String,
  family: String,
  species: String,
  img_url: String
});

const Pet = mongoose.model("Pet", petSchema);

Pet.insertMany(
  [
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 1,
      class: "mammal",
      family: "Bear",
      species: "Brown",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 2,
      class: "mammal",
      family: "Bear",
      species: "Grizzles",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 3,
      class: "mammal",
      family: "Bear",
      species: "Yogi",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 4,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 5,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 6,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 7,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 8,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 9,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    },
    {
      pet_id: 10,
      class: "mammal",
      family: "Bear",
      species: "Flapjack",
      img_url: "https://www.fakeurl.com/notarealthing/donotclick/byebye"
    }
  ],
  err => console.error(err)
);
