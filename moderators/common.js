const { response } = require("express");
const express = require("express");
const router = express.Router();
const commonController = require("../src/controller/commonController/commonController");
const data = require("../models/data")
const collection = require("../models/collection")



router.get('/', (req, res) => {
  //commonController.openController(req.body, (response,err) => {

  data.aggregate([{
    $lookup: {
      from: "collections",
      localField: "category",
      foreignField: "category",
      as: "data"
    }
  }])
    .then(result => {
      res.send({ "val": result })
    }).catch(err => {
      res.send(err)
    })
  //if (response)
  //res.status(200).send(response);
  //else
  //res.status(500).send(err);
  //})
});


module.exports = router;
