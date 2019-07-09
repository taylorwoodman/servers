let db = []

function Delete(req, res) {
  const index = db.findIndex(item => item.id === req.params.id);
  db.splice(index, 1);
  res.send("Pokemon Deleted");
}

function Get(req, res) {
  res.send(db)
}

function Post(req, res) {
  db.push(req.body)
  res.sendStatus(200)
}

function Put (req, res) {
  const id = req.params.id;

  const foundId = db.find((item) => item.id === id)

  const index = db.find((item) => item.id === id)

  const copy = {...foundId}

  db.splice(index, 1, copy)

  res.send(copy)
}

module.exports = {
  Delete,
  Get,
  Post,
  Put
};
