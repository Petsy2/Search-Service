const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
if (process.env.DB === "mongo") {
  console.log("mongo");
  var db = require("../db/mongoDB");
} else {
  console.log("postgres");
  var db = require("../db/postgresDB");
}
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API end point for recommended pets

app.get("/api/recommends/:pet_id", (req, res) => {
  if (isNaN(req.params.pet_id)) {
    res.sendStatus(400);
  } else {
    db.getRecommendedPets(req.params.pet_id)
      .then(result => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch(err => {
        console.log("Err with db query: ", err);
        res.sendStatus(404);
      });
  }
});

module.exports = app;
