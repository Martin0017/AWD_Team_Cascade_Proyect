const express = require("express");
const { restart } = require("nodemon");
const user = require("../models/homeData1");
const router = express.Router();
const homeData1 = require("../models/homeData1");

// Get all
router.get("/HomeData", async (req, res) => {
  try {
    const homeData = await homeData1.find();
    res.json(homeData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Put
router.put('/HomeData/update/:ID', getHomeData, async (req, res) => {
  if (req.body.title != null) {
    res.homedata1.title = req.body.title
  }
  if (req.body.info_1 != null) {
    res.homedata1.info_1 = req.body.info_1
  }
  if (req.body.info_2 != null) {
    res.homedata1.info_2 = req.body.info_2
  }
  if (req.body.ID != null) {
    res.homeData1.ID = req.body.ID
  }

  try {
    const updatedHome = await res.homeData1.save()
    res.json(updatedHome)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getHomeData(req, res, next) {
  let homeD
  try {
    homeD = await homeData1.findOne({ID: req.params.ID})
    if (homeData1 == null) {
      return res.status(404).json({ message: 'Error! Cannot find Info' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.homeData1 = homeD
  next()
}

module.exports = router;
