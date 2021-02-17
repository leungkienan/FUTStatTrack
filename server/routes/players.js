const express = require('express')

const db = require('../db/players')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPlayers()
    .then((results) => {
      // map through the list of players, display in rating order
      //   res.json({ fruits: results.map(fruit => fruit.name) })
      res.json({
          
      })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
