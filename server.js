const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Dictionary = require('./models/Dictionary')
const routes = require('./routes')
const db = require('./config/connection')
const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use(routes)
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})