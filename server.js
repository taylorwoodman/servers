const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const {Delete, Get, Post, Put} = require("./controller/controller");


app.use(bodyParser.json());

app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/pokemon", Get);

app.post("/pokemon", Post)

app.put("/pokemon:id", Put)

app.delete("/pokemon/:id", Delete)




app.listen(8080, () => console.log("listen!"));
