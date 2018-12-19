const express = require("express");
const app = express();
const port = 1337;

app.use(express.static("/"));

app.listen(port, `related items server is listening on port: ${port}`);
