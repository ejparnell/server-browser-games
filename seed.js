const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const PokemonCard = require('./models/card')
const Deck = require('./models/deck')

const cards = [
    '673ba2be512658ebe992ac1e',
    '673ba2be512658ebe992ac1e',
    '673ba2be512658ebe992ac1e',
    '673ba2be512658ebe992ac1e',
    '673ba2be512658ebe992abcf',
    '673ba2be512658ebe992abcf',
    '673ba2be512658ebe992abcf',
    '673ba2be512658ebe992ab3e',
    '673ba2be512658ebe992ab3e',
    '673ba2be512658ebe992ab3e',
    '673ba2be512658ebe992ac06',
    '673ba2be512658ebe992ac06',
    '673ba2be512658ebe992ac06',
    '673ba2be512658ebe992ac06',
    '673ba2be512658ebe992abc0',
    '673ba2be512658ebe992abc0',
    '673ba2be512658ebe992ab62',
    '673ba2be512658ebe992ab62',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac4f',
    '673ba2be512658ebe992ac44',
    '673ba2be512658ebe992ac44',
    '673ba2be512658ebe992ac44',
    '673ba2be512658ebe992ac44',
    '673ba2be512658ebe992ac41',
    '673ba2be512658ebe992ac41',
    '673ba2be512658ebe992ac41',
    '673ba2be512658ebe992ac41',
    '673ba2be512658ebe992ac39',
    '673ba2be512658ebe992ac39',
    '673ba2be512658ebe992ac39',
    '673ba2be512658ebe992ac39',
    '673ba2be512658ebe992ac48',
    '673ba2be512658ebe992ac48',
    '673ba2be512658ebe992ac48',
    '673ba2be512658ebe992ac48',
    '673ba2be512658ebe992ac43',
    '673ba2be512658ebe992ac43',
    '673ba2be512658ebe992ac43',
    '673ba2be512658ebe992ac43'
]

router.get('/', async (req, res) => {
    // const filePath = path.join(__dirname, 'pokemonData', 'cleanData.json')
    // const file = await fs.readFileSync(filePath)
    // const data = JSON.parse(file)
    // // console.log(data)

    // const insertData = await PokemonCard.insertMany(data)
    // res.send(insertData)

    const deck = await Deck.create({ name: 'Water Deck', cards: cards })
    res.send(deck)
})

module.exports = router