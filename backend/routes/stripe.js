const express = require('express')
const router = express.Router()

// Test route
router.get('/', (req, res) => {
  res.json({ message: 'Stripe route working' })
})

module.exports = router
