const express = require('express')
const userRouter = require('./userRouter')
const router = express.Router()

router.get('/', (req, res) =>{
  res.status(200).json({message : 'main page'})
})

router.use('/user',userRouter)

module.exports = router