const express = require("express");
const cors = require("cors");
//const morgan = require("morgan");
// if (process.env.DB === "mongo") {
//   console.log("mongo");
//   var db = require("../db/mongoDB");
// } else {
//   console.log("postgres");
//   var db = require("../db/postgresDB");
// }

var db = require("../db/postgresDB");
const expressStatsd = require("./statsD");
const app = express();

app.use(expressStatsd());

//app.use(morgan("dev"));
app.use(cors());

function statsd(path) {
  return function(req, res, next) {
    var method = req.method || "unknown_method";
    req.statsdKey = ["http", method.toLowerCase(), path].join(".");
    next();
  };
}

app.get("/api/recommends/:pet_id", statsd("recommends"), async (req, res) => {
  if (isNaN(req.params.pet_id)) {
    res.sendStatus(400);
  } else {
    try {
      let dbStartTime = new Date().getTime();
      let result = await db.getRecommendedPets(req.params.pet_id);
      req.dbQueryTime = new Date().getTime() - dbStartTime;
      if (result.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    } catch {
      console.log("Err with db query: ", err);
      res.sendStatus(404);
    }
  }
});

module.exports = app;
