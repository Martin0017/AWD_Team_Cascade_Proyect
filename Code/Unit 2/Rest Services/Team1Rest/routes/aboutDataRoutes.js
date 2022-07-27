const express = require('express')
const router = express.Router()
const AboutData = require('../models/aboutData')

router.get('/AboutData', async (req, res) => {
    try {
        const aboutDataRouter = await AboutData.find()
        res.json(aboutDataRouter)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/AboutData/:id', getAboutData, (req, res) => {
    res.json(res.aboutData)
})

router.put('/AboutData/update/:id', getAboutData, async (req, res) => {
    if (req.body.id != null) {
        res.aboutData.id = req.body.id
    }
    if (req.body.title_1 != null) {
        res.aboutData.title_1 = req.body.title_1
    }
    if (req.body.title_2 != null) {
        res.aboutData.title_2 = req.body.title_2
    }
    if (req.body.how_register != null) {
        res.aboutData.how_register = req.body.how_register
    }
    if (req.body.how_do_web != null) {
        res.aboutData.how_do_web = req.body.how_do_web
    }

    try {
        const updatedAboutData = await res.aboutData.save()
        res.json(updatedAboutData)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

async function getAboutData(req, res, next) {
    let aboutData
    try {
        aboutData = await AboutData.findOne({ id: req.params.id })
        if (aboutData == null) {
            return res.status(404).json({ message: 'Error! Cannot find aboutData information' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.aboutData = aboutData
    next()
}

module.exports = router