const dontev = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { router } = require('./routes/')
const { DBConnection } = require('./database')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(router)

DBConnection.connect()

app.listen(PORT, ()=>{
    console.log('app listen on port '+PORT)
})


