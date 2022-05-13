const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");

router.post("/create", (req, res) => {
  const { name, adress } = req.body;

  Restaurant
    .create({ name, adress })
    .then(() => res.json({ message: "created" }))
    .catch((err) => res.status(500).json(err));
});

router.get("/getAll", (req, res) => {
  Restaurant
    .find()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
