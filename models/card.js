const mongoose = require('mongoose');

const pokemonCardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    supertype: { type: String, required: true },
    subtypes: [{ type: String }],
    level: { type: String },
    hp: { type: String },
    types: [{ type: String }],
    evolvesFrom: { type: String },
    abilities: [{
        name: { type: String },
        text: { type: String },
        type: { type: String }
    }],
    attacks: [{
        name: { type: String },
        cost: [{ type: String }],
        convertedEnergyCost: { type: Number },
        damage: { type: String },
        text: { type: String }
    }],
    weaknesses: [{
        type: { type: String },
        value: { type: String }
    }],
    retreatCost: [{ type: String }],
    convertedRetreatCost: { type: Number },
    set: {
        type: String,
        required: true
    },
    number: { type: String },
    rarity: { type: String },
    flavorText: { type: String },
    nationalPokedexNumbers: [{ type: Number }],
    images: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PokemonCard', pokemonCardSchema)
