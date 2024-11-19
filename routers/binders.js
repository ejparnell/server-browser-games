const express = require('express')
const router = express.Router()
const getUser = require('../middleware/getUser')

const Binder = require('../models/binder')

router.get('/', getUser, async (req, res) => {
    try {
        const binders = await Binder.find({ user: req.user._id }).populate('cards')
        res.send(binders)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.post('/', getUser, async (req, res) => {
    const { card } = req.body
    try {
        const binder = await Binder.updateOne({ user: req.user._id }, { $push: { cards: { $each: card } } })
        res.send(binder)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = router