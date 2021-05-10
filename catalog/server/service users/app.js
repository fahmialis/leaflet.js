if (process.env.NODE_ENV === 'development'){
  require("dotenv").config()
}

const express = require('express')
const app = express()
const router = require('./routers')
const port = 3001
const cors = require('cors')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})