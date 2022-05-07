const router = require("express").Router();
const Restaurant = require("./../models/Restaurants.model");
const Eaters = require("./../models/Eaters.model");
const Group = require("./../models/Groups.model");

router.post("/create_groups", (req, res) => {
    let eaters = []
    let restaurant=[]
    let leader=[]

    Eaters.find()
    .then((response)=>{
        response.map(elm=>eaters.push(elm.name))
    })
    .then(()=>{
        Restaurant
        .find()
        .then((response)=>{
            response.map(elm=>restaurant.push(elm.name))
        })
        .then(()=>{
            Group
            .create({eaters:eaters,leader:eaters[0],restaurant:restaurant[0]})
            .then((response)=>console.log(response))
        })
    })
});

router.get("/groups", (req, res) => {

    Group
    .find()
    .then((response)=>res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
