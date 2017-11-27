var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  const a = 'jkssssl'
  res.render('index', { title: a })
})

module.exports = router
