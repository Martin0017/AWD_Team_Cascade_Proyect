const express = require("express");
const { restart } = require("nodemon");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

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
router.put('/update/:user', getUser, async (req, res) => {
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
router.delete('/delete/:user', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted User' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUser(req, res, next) {
  let user
  try {
    user = await User.findOne({user: req.params.user})
    if (user == null) {
      return res.status(404).json({ message: 'Error! Cannot find User' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router;
