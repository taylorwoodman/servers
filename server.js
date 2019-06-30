const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let db = []

app.use(bodyParser.json());

app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/pokemon", (req, res) => {
  res.send(db)
});

app.post("/pokemon", (req, res) => {
  db.push(req.body)
  res.sendStatus(200)
})

app.put("/pokemon:id", (req, res) => {
  const id = req.params.id;

  const foundId = db.find((item) => item.id === id)

  const index = db.find((item) => item.id === id)

  const copy = {...foundId}

  db.splice(index, 1, copy)

  res.send(copy)
})

app.delete("/pokemon/:id", (req, res) => {
  const index = db.findIndex((item) => item.id === req.params.id)
  db.splice(index, 1)
  res.send("Pokemon Deleted")
})



app.listen(8080, () => console.log("listen!"));
