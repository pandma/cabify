const router = require("express").Router()
const Eater = require("./../models/Eaters.model")
const Restaurant = require('./../models/Restaurants.model')

router.post("/create", (req, res) => {
  const { name, email } = req.body

  Eater
    .create({ name, email })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
})

router.get('/getAll', (req, res) => {

  Eater
    .find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))

})

router.post('/edit/:eater_Id', (req, res) => {
  const { name, email } = req.body
  const { eater_Id } = req.params

  Eater
    .findByIdAndUpdate(eater_Id, { name, email })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))

})

router.post('/:eater_Id/delete', (req, res) => {
  const { eater_Id } = req.params

  Eater
    .findByIdAndRemove(eater_Id)
    .then(() => res.json({ message: "Eater deleted" }))
    .catch((err) => res.status(500).json(err))

})

router.post('/delete', (req, res) => {

  Eater
    .remove()
    .then(() => Restaurant.remove())
    .then(() => res.json({ message: "eaters and restaurants removed" }))
    .catch((err) => res.status(500).json(err))

})


module.exports = router