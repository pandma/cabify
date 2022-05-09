const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");
const Eaters = require("./../models/Eaters.model");
const Group = require("./../models/Groups.model");

router.post("/create_groups", (req, res) => {
  let eaters = []
  let restaurant = []

  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
  }
  // eaters.move(0,Math.floor(Math.random()*(eaters.length)))

  Eaters
    .find()
    .then((response) => response.map((elm) => eaters.push(elm.name)))
    .then(() => {

      Restaurant
        .find()
        .then((response) => response.map((elm) => restaurant.push(elm.name)))
        .then(() => {

          let nGroups
          let groupSize
          let maxSize = 7

          // if (eaters.length <= maxSize) {
          //   nGroups = 1
          //   groupSize = maxSize;
          // } else if (eaters.length % maxSize === 0) {
          //   nGroups = eaters.length / maxSize
          //   groupSize = maxSize
          // } else if (eaters.length % (maxSize-1) === 0) {
          //   groupSize = maxSize-1
          //   nGroups = eaters.length / (maxSize-1)
          // } else if (eaters.length % (maxSize-2) === 0) {
          //   nGroups = eaters.length / (maxSize-2)
          //   groupSize = maxSize-2
          // } else if (eaters.length % (maxSize-3) === 0) {
          //   nGroups = eaters.length / (maxSize-3)
          //   groupSize = maxSize-3
          // } else {
          //   nGroups = eaters.length / Math.floor(Math.random()*6)
          // }

          //   maxSize = 6
          //  while (!nGroups){
          //    if ((eaters.length % maxSize) <= (Math.floor(eaters.length /maxSize)) ) {
          //     nGroups = Math.floor(eaters.length / maxSize)
          //      groupSize =maxSize
          //   }if(eaters.length>=7){
          //       maxSize=7
          //       groupSize = maxSize
          //   }else{ 
          //     maxSize = maxSize -1
          //     groupSize = maxSize
          //    } 
          //  }

          while (!nGroups) {

            if (eaters.length % maxSize === 0) {
              nGroups = eaters.length / maxSize
              groupSize = maxSize
            } else { maxSize = maxSize - 1 }
          }
          for (let i = 0; i < nGroups; i++) {
            for (let j = 1; j < eaters.length; j++) {
              eaters.move(0, j)
            }

            Group
              .create({
                eaters: eaters.slice(0 + i * groupSize, groupSize + i * groupSize),
                leader: eaters.slice(0 + i * groupSize, groupSize + i * groupSize)
                [Math.floor(Math.random() * groupSize)],
                restaurant: restaurant[Math.floor(Math.random() * restaurant.length)],
              })
              .then((response) => console.log(response))
          }
        })
    })
})

router.get("/groups", (req, res) => {

  Group
    .find()
    .then((group) => {
      if (group.length === 0) {
        res.status(401).json({ message: "group not created yet" })
      } else {
        res.json(group)
      }
    })
    .catch((err) => res.status(500).json(err))
})

router.get("/leaders/:leader_Id", (req, res) => {
  const { leader_Id } = req.params

  Group
    .findById(leader_Id)
    .then((group) => res.json(group))
    .catch((err) => res.status(500).json(err))
})

module.exports = router;
