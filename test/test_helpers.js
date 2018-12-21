const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommendsTESTS",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", function() {
    console.log("Connected!");
  })
  .on("error", function(error) {
    console.warn("Error : ", error);
  });

beforeEach(function(done) {
  mongoose.connection.collections.pets.drop(function() {
    //this function runs after the drop is completed
    done();
  });
});
