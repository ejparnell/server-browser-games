const express = require('express')
const router = express.Router()

const PokemonCard = require('../models/card')
const Binder = require('../models/binder')
const createBoosterPack = require('../middleware/createAPack')

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

router.post('/deck-pokemon', async (req, res) => {
    try {
        const { names } = req.body

        if (!Array.isArray(names) || names.length === 0) {
            return res.status(400).send({ message: 'Please provide an array of Pokémon names.' })
        }

        const pokemonData = await PokemonCard.find({ name: { $in: names } })
        res.status(200).json(pokemonData);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' })
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