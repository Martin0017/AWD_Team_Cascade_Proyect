const express = require('express')
const router = express.Router()
const Fauna = require('../models/fauna')

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

module.exports = router