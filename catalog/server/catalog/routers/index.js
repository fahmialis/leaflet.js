const express = require('express')
const catalogRouter = require('./catalogRouter')
const router = express.Router()

router.get('/', (req, res) =>{
  res.status(200).json({message : 'main page'})
})

router.use('/catalog',catalogRouter)

module.exports = router