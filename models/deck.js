const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PokemonCard' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Deck', deckSchema)