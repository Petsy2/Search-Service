const express = require("express");
const db = require("../Database/PetsyRecommends");
const bodyParser = require("body-parser");
const port = 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/recommends", (req, res) => {
  const request = req.headers.pet_id;
  db.getRecommendedPets(request, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  });
});

app.listen(port, () => console.log(`Listening to ${port}`));
