const express = require('express')
const router = express.Router()
const getUser = require('../middleware/getUser')

const Deck = require('../models/deck')

router.get('/', getUser, async (req, res) => {
    try {
        const decks = await Deck.find({ user: req.user._id })
        res.send(decks)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const deck = await Deck.findById(req.params.id)
        res.send(deck)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.post('/', getUser, async (req, res) => {
    try {
        const deck = await Deck.create({ ...req.body, user: req.user._id })
        res.send(deck)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.update('/:id', async (req, res) => {
    try {
        const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(deck)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deck = await Deck.findByIdAndDelete(req.params.id)
        res.send(deck)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router