const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const usersRouter = require('./routers/users')
const pokemonRouter = require('./routers/pokemon')
const binderRouter = require('./routers/binders')
const seedRouter = require('./seed')

const PORT = process.env.PORT ? process.env.PORT : 3000

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/pokemon', pokemonRouter)
app.use('/binders', binderRouter)
app.use('/seed', seedRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})