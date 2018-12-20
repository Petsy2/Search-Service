const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommendsTESTS",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", error => {
    console.warn("Error : ", error);
  });

beforeEach(done => {
  mongoose.connection.collections.pets.drop(() => {
    //this function runs after the drop is completed
    done();
  });
});
