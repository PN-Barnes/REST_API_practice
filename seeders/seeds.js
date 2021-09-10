const db = require('../config/connection')
const { Dictionary } = require('../models')

const dictionaryData = require('./dictionarySeeds.json')

db.once('open', async () => {
    try{

        await Dictionary.deleteMany({})
        await Dictionary.insertMany(dictionaryData)
        console.log("\n ================== Database seeded! ============")
        process.exit(0)
    } catch (err) {
        throw err
    }

})