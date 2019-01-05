const express = require("express");
const db = require("../Database/PetsyRecommends");
const bodyParser = require("body-parser");
const app = express();
// const cors = require("cors");
const port = process.env.PORT || 3000;

require("dotenv").config({ path: __dirname + "/../../.env" });

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API end point for recommended pets

app.get("/api/recommends/:pet_id", (req, res) => {
  if (req.params.pet_id === undefined) {
    res.setStatus(400);
    res.send("ERROR: pet_id must be contained within params of request");
  } else {
    const pet_id = req.params.pet_id;
    db.getRecommendedPets(pet_id, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send(response);
      }
    });
  }
});

app.listen(port, () => console.log(`Listening to ${port}`));
