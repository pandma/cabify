const router = require("express").Router();
const Eater = require("./../models/Eaters.model");

router.post("/create", (req, res) => {
  const { name, email } = req.body

  Eater
    .create( {name, email})
    .then(() => res.status(201))
    .catch((err) => res.status(500).json(err));
});

router.get('/getAll',(req,res)=>{

  Eater
  .find()
  .then((response)=>res.json(response))
  .catch((err) => res.status(500).json(err));

})


module.exports = router