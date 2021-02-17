const { ClientBase } = require('pg')
const connection = require('./connection')

function getPlayers(db = connection){
    return db('player').select()
    // selects all players from database to display
}



module.exports = {
    getPlayers
}

