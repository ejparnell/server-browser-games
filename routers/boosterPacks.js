const express = require('express')
const router = express.Router()
const getUser = require('../middleware/getUser')

const PokemonCard = require('../models/card')
const Binder = require('../models/binder')
const createBoosterPack = require('../middleware/createAPack')

const POKEMON_BOOSTER_PACKS = ['Base', 'Jungle', 'Wizards Black Star Promos', 'Fossil', 'Base Set 2', 'Team Rocket', 'Gym Heroes', 'Gym Challenge', 'Southern Islands']

router.get('/', async (req, res) => {
    // TODO: remove this try/catch block if there is no database call
    try {
        res.send({ boosterPacks: POKEMON_BOOSTER_PACKS })
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.get('/:set/buy-pack', getUser, async (req, res) => {
    try {
        const set = await PokemonCard.find({ set: req.params.set })
        const energy = await PokemonCard.find({ supertype: 'Energy' })
        const boughtPack = createBoosterPack(set, energy)
        const cardIds = boughtPack.map(card => card._id)
        await Binder.updateOne({ user: req.user._id }, { $push: { cards: { $each: cardIds } } })
        res.send({ boughtPack })
    } catch (error) {
        res.send({ message: error.message })
    }
})

module.exports = router