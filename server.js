const express = require("express");

console.log("well hello there");

const port = 1337;

const app = express();

app.use(express.static("/"));
// app.get("/", (req, res) => {
//   res.send("./server");
// });

app.listen(port, () => console.log(`Listening to ${port}`));
