function creategroups() {
    let eaters = []
    let restaurant = []
    let clone = eaters.splice()

    const isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false
        return num > 1
    }
    if (isPrime(eaters.length)) {
        while (!nGroups) {
            if ((eaters.length % maxSize) <= (Math.floor(eaters.length / maxSize))) {
                nGroups = Math.floor(eaters.length / maxSize)
                groupSize = maxSize
                remain = eaters.length - (nGroups * groupSize)
            } else { maxSize = maxSize - 1 }
        }
    } else {
        while (!nGroups) {
            if (eaters.length % maxSize === 0) {
                nGroups = eaters.length / maxSize
                groupSize = maxSize
            } else { maxSize = maxSize - 1 }
        }
    }


}

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

module.exports = { creategroups }