var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Staffomatic Widget' });
});

router.post('/', (req, res, next) => {
	console.log(req.params);
});

module.exports = router;