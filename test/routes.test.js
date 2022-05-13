const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require("../app")
const random = Math.floor(Math.random() * 1000)


describe('/eaters - POST', () => {
    it('Post an eater', (done) => {
        chai
            .request(app)
            .post('/api/eaters')
            .type('form')
            .send({
                '_method': 'post',
                'name': `${random}`,
                'email': `${random}@gmail.com`
            })
            .end((err, res) => {
                assert.equal(res.statusCode, 201)
                done()
            });
    });
});

describe('/eaters - GET', () => {
    it('Get the list of eaters', (done) => {
        chai
            .request(app)
            .get('/api/eaters')
            .end((err, res) => {
                assert.equal(res.statusCode, 201)
                done()
            });
    });
});

describe('/restaurants/create - POST', () => {
    it('Post a restaurant', (done) => {
        chai
            .request(app)
            .post('/api/restaurants/create')
            .type('form')
            .send({
                '_method': 'post',
                'name': `${random}`,
                'address': `${random}`
            })
            .end((err, res) => {
                assert.equal(res.body.message, "created")
                done()
            })
    })
})

describe('/restaurants/getAll - GET', () => {
    it('Get the list of restaurants', (done) => {
        chai
            .request(app)
            .get('/api/restaurants/getAll')
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.isAtLeast(res.body.length, 1)
                done()
            })
    })
})

describe('/groups/create_groups - POST', () => {
    it('Create eaters groups', (done) => {
        chai
            .request(app)
            .post('/api/groups/create_groups')
            .end((err, res) => {
                assert.isAtLeast(res.body.length, 1)
                assert.equal(res.body[0].eaters.includes(res.body[0].leader), true)
                done()
            })
    })
})

describe('/groups - GET', () => {
    it('Get the list of groups', (done) => {
        chai
            .request(app)
            .get('Api/groups/getAll')
            .end((err, res) => {
                if (res.statusCode == 401) {
                    assert.equal(res.body.message, "group not created yet")
                } else {
                    assert.isAtLeast(res.body.length, 1)
                }
                done()
            })
    })
})