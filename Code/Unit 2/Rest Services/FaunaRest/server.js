require('dotenv').config()
const express = require('express')
const port = 3000;
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const faunaRouter = require('./routes/faunaRoutes')
app.use('/ChocoAndino', faunaRouter)

app.listen(port, () => console.log('Server Started on port ' + port))