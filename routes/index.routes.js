const router = require("express").Router();

router.use("/eaters", require("./eaters.routes"));

router.use("/restaurant", require("./resturant.routes"));

router.use('/groups', require('./group.routes'))

router.use('/orders', require('./order.routes'))
/////
const getRandom = () => {
    return Math.floor(Math.random() * 101);
};

router.get('/random', function (req, res) {
    const number = getRandom();
    res.send({ number });
});
/////
module.exports = router;
