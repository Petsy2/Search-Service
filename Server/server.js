const express = require("express");
const db = require("../Database/PetsyRecommends");

console.log("well hello there");

const port = 1337;

const app = express();

app.use(express.static("/"));

app.get("/api/recommends", (req, res) => {});

app.listen(port, () => console.log(`Listening to ${port}`));
