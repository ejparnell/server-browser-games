const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 100
    },
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

userSchema.post('save', async function (doc, next) {
    const Binder = require('./binder')
    const binder = new Binder({ user: doc._id })
    await binder.save()
    next()
})

module.exports = mongoose.model('User', userSchema)