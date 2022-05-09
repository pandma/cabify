const router = require("express").Router();
const Restaurant = require("./../models/Order.model")

router.post('/create_order', (req, res) => {
    const { restaurant, numberOfEaters, restaurantNumber } = req.body

    Restaurant
        .create({ restaurant, numberOfEaters, restaurantNumber })
        .then(() => res.json({ message: "order created" }))
        .catch((err) => res.status(500).json(err))
})

router.get('/getAll', (req, res) => {

    Restaurant
        .find()
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err))
})

router.get('/order_id/edit', (req, res) => {
    const { order_id } = req.params
    const { restaurant, numberOfEaters, restaurantNumber } = req.body

    Restaurant
        .findByIdAndUpdate(order_id, { restaurant, numberOfEaters, restaurantNumber })
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err))
})

router.get('/order_id/delete', (req, res) => {
    const { order_id } = req.params

    Restaurant
        .findByIdAndRemove(order_id)
        .then(() => res.json({ message: "Order deleted" }))
        .catch((err) => res.status(500).json(err))
})


module.exports = router