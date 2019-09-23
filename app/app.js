const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')

const masterRoutes = require('../routes/master')

//define cors
const app = express()
app.use(cors())

//define body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//default / root
app.get('/', (req,res) => res.status(200).send({
    message:'Welcome to my API Inready',
}))

app.use('/master',masterRoutes)

module.exports = app;