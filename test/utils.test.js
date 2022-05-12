
const chai = require('chai');
const assert = chai.assert;

const { getRandom } = require('../routes/index.routes');
const { isPrime, shuffle } = require("../utils/isPrime");


describe('Unit Test', () => {
    it('Should generate a random whole number between 0 and 100', () => {
        var random = getRandom();

        assert.isNotNull(random);
        assert.isNumber(random);
        assert.isAtLeast(random, 0);
        assert.isAtMost(random, 100);
    });
});

describe('shuffle test', () => {
    it('should move the elements in the array', () => {
        let shuffle = shuffle()

        assert.isArray(shuffle);
        // assert.isArray(shuffle);
        // assert.isArray(shuffle);
        // assert.isArray(shuffle);



    })

})

