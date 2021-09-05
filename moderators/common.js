const { response } = require("express");
const express = require("express");
const router = express.Router();
const commonController = require("../src/controller/commonController/commonController");


router.post('/', (req,res) => {
  commonController.openController(req.body, (response,err) => {
    if(response) 
    res.status(200).send(response);
    else
    res.status(500).send(err);
  })
});


module.exports = router;
