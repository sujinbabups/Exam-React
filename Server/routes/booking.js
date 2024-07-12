const express = require("express");
const router = express.Router();
const booking=require('../models/Booking')
const veryfyTocken=require('../middleware/authmiddleware')


router.get("/booking", veryfyTocken,async (req, res) => {
  const details = await booking.find({});
  res.json(details);
});

router.post("/booking", async (req, res) => {
    try {
      const data = req.body;
      const result =await booking.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  router.get('/booking/:date',async (req, res) => {
    const id= req.params.id;
    const details= await booking.findOne({indate: id})
    // console.log(id);
    // console.log(details);
    res.json(details);
});

  

  module.exports=router
