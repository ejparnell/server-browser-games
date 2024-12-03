const express = require('express')
const router = express.Router()
const getUser = require('../middleware/getUser')
const deckData = require('../deckData')

const Deck = require('../models/deck')
const PokemonCard = require('../models/card')

router.get('/:setName', async (req, res) => {
    try {
        const { setName } = req.params
        const deckQuantity = deckData.find(deck => deck.name === setName)
        const allCards = [...deckQuantity.deck.pokemon, ...deckQuantity.deck.trainer, ...deckQuantity.deck.energy]
        const arrayOfNames = allCards.map(card => card.name)

        const allDeckData = await PokemonCard.find({ name: { $in: arrayOfNames } })
        const allBaseCards = allDeckData.filter(card => card.set === 'Base')
        const allBase2Cards = allDeckData.filter(card => card.set === 'Base Set 2')

        const pokemonBaseCards = deckQuantity.deck.pokemon.map(card => {
            let pokemon = allBaseCards.find(baseCard => baseCard.name === card.name)
            if (!pokemon) pokemon = allDeckData.find(baseCard => baseCard.name === card.name)
            return { card: pokemon, quantity: card.quantity }
        })
        const trainerBaseCards = deckQuantity.deck.trainer.map(card => {
            let trainer = allBaseCards.find(baseCard => baseCard.name === card.name)
            if (!trainer) trainer = allDeckData.find(baseCard => baseCard.name === card.name)
            if (!trainer) console.log(card)
            return { card: trainer, quantity: card.quantity }
        })
        const energyBaseCards = deckQuantity.deck.energy.map(card => {
            let energy = allBaseCards.find(baseCard => baseCard.name === card.name)
            if (!energy) energy = allDeckData.find(baseCard => baseCard.name === card.name)
            return { card: energy, quantity: card.quantity }
        })

        const pokemonBase2Cards = deckQuantity.deck.pokemon.map(card => {
            let pokemon = allBase2Cards.find(baseCard => baseCard.name === card.name)
            if (!pokemon) pokemon = allDeckData.find(baseCard => baseCard.name === card.name)
            return { card: pokemon, quantity: card.quantity }
        })
        const trainerBase2Cards = deckQuantity.deck.trainer.map(card => {
            let trainer = allBase2Cards.find(baseCard => baseCard.name === card.name)
            if (!trainer) trainer = allDeckData.find(baseCard => baseCard.name === card.name)
            return { card: trainer, quantity: card.quantity }
        })
        const energyBase2Cards = deckQuantity.deck.energy.map(card => {
            let energy = allBase2Cards.find(baseCard => baseCard.name === card.name)
            if (!energy) energy = allDeckData.find(baseCard => baseCard.name === card.name)
            return { card: energy, quantity: card.quantity }
        })

        const baseDeck = {
            pokemon: pokemonBaseCards,
            trainer: trainerBaseCards,
            energy: energyBaseCards
        }

        const base2Deck = {
            pokemon: pokemonBase2Cards,
            trainer: trainerBase2Cards,
            energy: energyBase2Cards
        }

        res.send({ baseDeck, base2Deck })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
})

router.post('/buy', getUser, async (req, res) => {
    try {
        const { cards, deckName } = req.body
        const allCards = [...cards.pokemon, ...cards.trainer, ...cards.energy]
        
        const boughtDeck = await Deck.create({ name: deckName, cards: allCards, user: req.user._id })
        res.send(boughtDeck)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// router.get('/', getUser, async (req, res) => {
//     try {
//         const decks = await Deck.find({ user: req.user._id })
//         res.send(decks)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const deck = await Deck.findById(req.params.id)
//         res.send(deck)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

// router.post('/', getUser, async (req, res) => {
//     try {
//         const deck = await Deck.create({ ...req.body, user: req.user._id })
//         res.send(deck)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

// router.update('/:id', async (req, res) => {
//     try {
//         const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.send(deck)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const deck = await Deck.findByIdAndDelete(req.params.id)
//         res.send(deck)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

module.exports = router