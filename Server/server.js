const express = require("express");
const db = require("../Database/PetsyRecommends");
const bodyParser = require("body-parser");
const port = 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API end point for recommended pets

app.get("/api/recommends", (req, res) => {
  const request = req.headers.pet_id;
  db.getRecommendedPets(request, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
});

app.listen(port, () => console.log(`Listening to ${port}`));
