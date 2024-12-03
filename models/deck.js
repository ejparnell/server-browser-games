const mongoose = require('mongoose')

const cardQuantitySchema = new mongoose.Schema({
    card: { type: mongoose.Schema.Types.ObjectId, ref: 'PokemonCard' },
    quantity: { type: Number, required: true }
})

const deckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cards: [cardQuantitySchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Deck', deckSchema)