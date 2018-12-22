const express = require("express");
const db = require("../Database/PetsyRecommends");

const port = 1337;
const app = express();

app.use(express.static("/"));

app.get("/api/recommends", (req, res) => {
  res.sendStatus(500);
});

app.listen(port, () => console.log(`Listening to ${port}`));
