const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const PokemonCard = require('./models/card')

router.get('/', async (req, res) => {
    const filePath = path.join(__dirname, 'pokemonData', 'cleanData.json')
    const file = await fs.readFileSync(filePath)
    const data = JSON.parse(file)
    // console.log(data)

    const insertData = PokemonCard.insertMany(data)
    res.send(insertData)
})

module.exports = router