const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Dictionary = require('./models/Dictionary')

const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dictionary_db", { 
    useNewUrlParser: true
})

// ------------------ ROUTES --------------------- //

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})