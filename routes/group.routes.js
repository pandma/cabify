const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");
const Eaters = require("./../models/Eaters.model");
const Group = require("./../models/Groups.model");

router.post("/create_groups", (req, res) => {

  let eaters = [];
  let restaurant = [];

  Eaters
    .find()
    .then((response) => {
      response.map((elm) => eaters.push(elm.name));
    })
    .then(() => {
      Restaurant
        .find()
        .then((response) => {
          response.map((elm) => restaurant.push(elm.name));
        })
        .then(() => {
          let ngroups
          let sizegroup
          const maxSize = 7
          if (eaters.length <= maxSize) {
            ngroups = 1;
            sizegroup = maxSize;
          } else if (eaters.length % maxSize === 0) {
            ngroups = eaters.length / maxSize;
            sizegroup = maxSize;
          } else if (eaters.length % maxSize-1 === 0) {
            sizegroup = maxSize-1;
            ngroups = eaters.length / maxSize-1;
          } else if (eaters.length % maxSize === 0) {
            ngroups = eaters.length / maxSize-2;
            sizegroup = maxSize-2;
          } else if (eaters.length % maxSize === 0) {
            ngroups = eaters.length / maxSize-3;
            sizegroup = maxSize-3;
          } else {
            ngroups = eaters.length / Math.floor(Math.random()*6)
          }
          for (let i = 0; i < ngroups; i++) {
            Group
             .create({eaters: eaters.slice(0 + i * sizegroup,sizegroup + i * sizegroup),
              leader: eaters.slice(0 + i * sizegroup, sizegroup + i * sizegroup)
              [Math.floor(Math.random() * sizegroup)],
              restaurant: restaurant[0],
            }).then((response) => console.log(response));
          }
        });
    });
});

router.get("/groups", (req, res) => {
  Group.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
