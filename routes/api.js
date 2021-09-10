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

router.get('/words/:word', async(req,res) => {
    try {
        const word = req.params.word
        const wordData = await Dictionary.findOne({ word: word})
        res.json(wordData.meaning)
    } catch (error) {
        throw error
    }
})

module.exports = router;