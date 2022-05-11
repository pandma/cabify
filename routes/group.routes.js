const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");
const Eaters = require("./../models/Eaters.model");
const Group = require("./../models/Groups.model");
const { isPrime, shuffle } = require("./../utils/isPrime");


// router.post("/create_groups", (req, res) => {
//   let eaters = []
//   let restaurant = []

//   Array.prototype.move = function (from, to) {
//     this.splice(to, 0, this.splice(from, 1)[0])

//   }

//   Eaters
//     .find()
//     .then((response) => {
//       response.map((elm) => eaters.push(elm.name))
//       return Restaurant.find()
//     })
//     .then((response) => {
//       response.map((elm) => restaurant.push(elm.name))
//     })
//     .then(() => {

//       let nGroups
//       let groupSize
//       let remain
//       let maxSize = 7

//       if (isPrime(eaters.length)) {
//         while (!nGroups) {
//           if ((eaters.length % maxSize) <= (Math.floor(eaters.length / maxSize))) {
//             nGroups = Math.floor(eaters.length / maxSize)
//             groupSize = maxSize
//             remain = eaters.length - (nGroups * groupSize)
//           } else { maxSize = maxSize - 1 }
//         }
//       } else {
//         while (!nGroups) {
//           if (eaters.length % maxSize === 0) {
//             nGroups = eaters.length / maxSize
//             groupSize = maxSize
//           } else { maxSize = maxSize - 1 }
//         }
//       }

//       for (let i = 0; i < nGroups; i++) {

//         for (let j = 1; j < eaters.length; j++) {
//           eaters.move(0, j)
//         }

//         Group
//           .create({
//             eaters: eaters.slice(0 + i * groupSize, remain ? (groupSize + i * groupSize) + 1 : (groupSize + i * groupSize)),
//             leader: eaters.slice(0 + i * groupSize, groupSize + i * groupSize)
//             [Math.floor(Math.random() * groupSize)],
//             restaurant: restaurant[Math.floor(Math.random() * restaurant.length)],
//           })
//           .then((response) => console.log(response))
//       }
//     })
// })

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
    })
    .then(() => {
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

      let grup = []
      shuffle(eaters)

      for (let i = 0; i < nGroups; i++) {
        let grup = eaters.slice(0 + (i * groupSize), groupSize + (i * groupSize))

        if (remain !== 0) {
          grup.push(eaters[eaters.length - remain])
          remain--

        }
        let oneLeader = eaters.slice(0 + i * groupSize, groupSize + i * groupSize)

        Group
          .create({
            eaters: grup, leader: oneLeader[Math.floor(Math.random() * groupSize)],
            restaurant: restaurant[Math.floor(Math.random() * restaurant.length)]
          })
          .then((response) => console.log(response))
          .catch((err) => res.status(500).json(err))
      }
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
