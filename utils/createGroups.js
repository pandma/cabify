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

module.exports = { creategroups }