
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false
    return num > 1
}

const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[random]
        array[random] = temp

    }
    return array
}

module.exports = { isPrime, shuffle }