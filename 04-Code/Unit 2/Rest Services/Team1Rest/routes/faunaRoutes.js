const express = require('express');
const router = express.Router();
const Fauna = require('../models/fauna');
const homeData1 = require("../models/homeData1");
const user = require("../models/user");

//Fauna
router.get('/fauna', async (req, res) => {
    try {
        const faunaRouter = await Fauna.find()
        res.json(faunaRouter)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/fauna/:id', getFauna, (req, res) => {
    res.json(res.fauna)
})

router.post('/fauna/add', async (req, res) => {
    const fauna = new Fauna({
        id: req.body.id,
        scientific_name: req.body.scientific_name,
        url_image: req.body.url_image,
        vulgar_name: req.body.vulgar_name,
        description: req.body.description,
        date: req.body.date,
        type: req.body.type
    })
    try {
        const newFauna = await fauna.save()
        res.status(201).json(newFauna)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.put('/fauna/update/:id', getFauna, async (req, res) => {
    if (req.body.id != null) {
        res.fauna.id = req.body.id
    }
    if (req.body.scientific_name != null) {
        res.fauna.scientific_name = req.body.scientific_name
    }
    if (req.body.url_image != null) {
        res.fauna.url_image = req.body.url_image
    }
    if (req.body.vulgar_name != null) {
        res.fauna.vulgar_name = req.body.vulgar_name
    }
    if (req.body.description != null) {
        res.fauna.description = req.body.description
    }
    if (req.body.date != null) {
        res.fauna.date = req.body.date
    }
    if (req.body.type != null) {
        res.fauna.type = req.body.type
    }

    try {
        const updatedFauna = await res.fauna.save()
        res.json(updatedFauna)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/fauna/delete/:id', getFauna, async (req, res) => {
    try {
        await res.fauna.remove()
        res.json({ message: 'Deleted Fauna Animal' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getFauna(req, res, next) {
    let fauna
    try {
        fauna = await Fauna.findOne({ id: req.params.id })
        if (fauna == null) {
            return res.status(404).json({ message: 'Error! Cannot find fauna animal' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.fauna = fauna
    next()
}

//HOMEDATA
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
  
//USERS
// Get all
router.get("/users", async (req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get by user
  router.get('/users/:user', getUser, (req, res) => {
    res.json(res.user)
  })
  
  
  //Post
  router.post("/users/add", async (req, res) => {
    const user = new User({
      user: req.body.user,
      mail: req.body.mail,
      password: req.body.password,
      dni: req.body.dni,
      type: req.body.type,
      active: req.body.active,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Put
  router.put('/users/update/:user', getUser, async (req, res) => {
    if (req.body.user != null) {
      res.user.user = req.body.user
    }
    if (req.body.mail != null) {
      res.user.mail = req.body.mail
    }
    if (req.body.password != null) {
      res.user.password = req.body.password
    }
    if (req.body.dni != null) {
      res.user.dni = req.body.dni
    }
    if (req.body.type != null) {
      res.user.type = req.body.type
    }
    if (req.body.active != null) {
      res.user.active = req.body.active
    }
  
    try {
      const updatedUser = await res.user.save()
      res.json(updatedUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Delete User
  router.delete('/users/delete/:user', getUser, async (req, res) => {
    try {
      await res.user.remove()
      res.json({ message: 'Deleted User' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  async function getUser(req, res, next) {
    let users
    try {
      users = await user.findOne({user: req.params.user})
      if (users == null) {
        return res.status(404).json({ message: 'Error! Cannot find User' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.user = users
    next()
  }

module.exports = router