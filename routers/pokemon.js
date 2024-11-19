const express = require('express')
const router = express.Router()

const PokemonCard = require('../models/card')
const Binder = require('../models/binder')
const createBoosterPack = require('../middleware/createAPack')

// TODO: need to handle promo packs differently
router.get('/:userId/:boosterPack', async (req, res) => {
    try {
        const boosterPack = await PokemonCard.find({ set: req.params.boosterPack })
        const energy = await PokemonCard.find({ supertype: 'Energy' })
        const boughtPack = createBoosterPack(boosterPack, energy)
        const cardIds = boughtPack.map(card => card._id)
        await Binder.updateOne({ user: req.params.userId }, { $push: { cards: { $each: cardIds } } })
        res.send({ boughtPack })
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const cards = await PokemonCard.find({})
        res.send(cards)
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.get('/search', async (req, res) => {
    const { name, type, number } = req.query
    try {
        let cards
        if (name) cards = await PokemonCard.find({ name: name })
        if (type) cards = await PokemonCard.find({ types: type })
        if (number) cards = await PokemonCard.find({ nationalPokedexNumbers: number })
        // const cards = await PokemonCard.find({ name: name })
        res.send(cards)
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const card = await PokemonCard.findById(req.params.id)
        res.send(card)
    } catch (error) {
        res.send({ message: error.message })
    }
})

module.exports = router