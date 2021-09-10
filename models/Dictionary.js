const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dictionarySchema = new Schema({
    word: {
        type: String,
        trim: true  
    }, 
    meaning: {
        type: String,
        trim: true
    }
})

const Dictionary = mongoose.model('Dictionary', dictionarySchema)

module.exports = Dictionary;