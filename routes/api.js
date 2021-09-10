const router = require('express').Router()
const {Dictionary} = require('../models')

router.get('/words', async(req,res) => {
    try {
        const dbWordData = await Dictionary.find({})
        res.json(dbWordData)
    } catch (error) {
        throw error
    }
})

module.exports = router;