const express = require('express')
const path = require('path')

const request = require('superagent')


const fruitRoutes = require('./routes/fruits')
const playerRoutes = require('./routes/players')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

// Get players
server.get('/api/v1/players', (req, res) => {
    request
    .get('https://futdb.app/api/players')
    .then((response)=>{
        let data = response.items
        console.log(data)
        res.send(data)
    })
})

module.exports = server
