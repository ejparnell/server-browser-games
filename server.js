const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const usersRouter = require('./routers/users')

const PORT = process.env.PORT ? process.env.PORT : 3000

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})