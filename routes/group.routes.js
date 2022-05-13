const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");
const Eaters = require("./../models/Eaters.model");
const Group = require("./../models/Groups.model");
const { shuffle } = require("./../utils/isPrime");


router.post("/create_groups", (req, res) => {

  let eaters = []
  let restaurant = []

  Eaters
    .find()
    .then((response) => {
      response.map((elm) => eaters.push(elm.name))
      return Restaurant.find()
    })
    .then((response) => {
      response.map((elm) => restaurant.push(elm.name))

      let nGroups
      let groupSize = 7
      let remain

      while (!nGroups) {

        if ((eaters.length % groupSize) <= (Math.floor(eaters.length / groupSize))) {
          nGroups = Math.floor(eaters.length / groupSize)
          remain = eaters.length - (nGroups * groupSize)

          if (remain !== 0 && groupSize == 7) {
            groupSize--
            nGroups = false
          }
        } else { groupSize = groupSize - 1 }
      }

      let group = []
      let groupsArr = []
      shuffle(eaters)

      for (let i = 0; i < nGroups; i++) {
        let group = eaters.slice(0 + (i * groupSize), groupSize + (i * groupSize))

        if (remain !== 0) {
          group.push(eaters[eaters.length - remain])
          remain--
        }
        let oneLeader = eaters.slice(0 + i * groupSize, groupSize + i * groupSize)

        const newGroup = {
          eaters: group, leader: oneLeader[Math.floor(Math.random() * groupSize)],
          restaurant: restaurant[Math.floor(Math.random() * restaurant.length)]
        }
        groupsArr.push(newGroup)
      }
      Group.create(groupsArr)
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err))

    })
})


router.get("/getAll", (req, res) => {

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
