const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require("../app")
const ranNum = Math.floor(Math.random() * 1000)


describe('/eaters/create - POST', () => {
    it('Post an eater', (done) => {
        chai
            .request(app)
            .post('/eaters')
            .type('form')
            .send({
                '_method': 'post',
                'name': `testingName${ranNum}`,
                'email': `testing@gmail.com${ranNum}`
            })
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                done();
            });
    });
});

describe('/eaters/getAll - GET', () => {
    it('Get the list of eaters', (done) => {
        chai
            .request(app)
            .get('/eaters')
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.isAtLeast(res.body.length, 1)
                assert.isAtLeast(res.body[0].name.length, 0)
                done()
            });
    });
});

describe('/restaurants/create - POST', () => {
    it('Post a restaurant', (done) => {
        chai
            .request(app)
            .post('/restaurants')
            .type('form')
            .send({
                '_method': 'post',
                'name': `testRestaurant${ranNum}`,
                'address': `calleFalsa${ranNum}`
            })
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.equal(res.body.message, "created")
                done()
            });
    });
});

describe('/restaurants/getAll - GET', () => {
    it('Get the list of restaurants', (done) => {
        chai
            .request(app)
            .get('/restaurants')
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.isAtLeast(res.body.length, 1)
                assert.isAtLeast(res.body[0].name.length, 0)
                done()
            });
    });
});

describe('/groups/create_groups - POST', () => {
    it('Create eaters groups', (done) => {
        chai
            .request(app)
            .post('/create_groups')
            .end((err, res) => {
                assert.equal((res.statusCode == 200 || res.statusCode == 409), true)
                if (res.statusCode == 200) {
                    assert.isAtLeast(res.body.length, 1)
                    assert.equal(res.body[0].eaters.includes(res.body[0].leader), true)
                }
                else if (res.statusCode == 409) {
                    assert.equal(res.body.message, "groups already created")
                }
                done()
            });
    });
});

describe('/groups - GET', () => {
    it('Get the list of groups', (done) => {
        chai
            .request(app)
            .get('/groups')
            .end((err, res) => {
                assert.equal((res.statusCode == 200 || res.statusCode == 204), true)
                if (res.statusCode == 200) {
                    assert.isAtLeast(res.body.length, 1)
                }
                else if (res.statusCode == 204) {
                    assert.equal(res.body.message, "group not created yet")
                }
                done()
            });
    });
});