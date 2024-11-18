const mongoose = require('mongoose')

const binderSchema = new mongoose.Schema({
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PokemonCard' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Binder', binderSchema)