const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/dictionary_db", 
    { 
    useNewUrlParser: true
    }
)

module.exports = mongoose.connection