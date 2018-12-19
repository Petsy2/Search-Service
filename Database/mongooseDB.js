const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/PetsyRecommends",
  { useNewUrlParser: true }
);

mongoose.disconnect();
