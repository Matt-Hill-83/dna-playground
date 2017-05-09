var express      = require('express');
var router       = express.Router();
var cookieParser = require('cookie-parser');
const path       = require('path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'views', 'dna_playground.html'));
});

module.exports = router;
