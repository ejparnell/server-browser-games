const express = require('express')
const router = express.Router()

const Binder = require('../models/binder')

router.get('/:userId', async (req, res) => {
    try {
        console.log('hit')
        const binders = await Binder.find({ user: req.params.userId }).populate('cards')
        res.send(binders)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.post('/:userId/add-booster-pack', async (req, res) => {
    console.log(req.body)
    try {
        const binder = await Binder.find({ user: req.params.userId })
        res.send(`${req.body.name} added to binder`)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
})

module.exports = router