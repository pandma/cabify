const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/eaters", require("./eaters.routes"));

router.use("/restaurant", require("./resturant.routes"));

// router.use('/groups',require('./group.routes'))

module.exports = router;
