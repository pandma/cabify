const router = require("express").Router();

router.use("/", require("./eaters.routes"));

router.use("/restaurant", require("./resturant.routes"));

router.use('/groups', require('./group.routes'))

router.use('/orders', require('./order.routes'))


module.exports = router;
