const express = require('express');
const app = express();
var router = express.Router();

app.set('view engine', 'pug');
app.use(express.static('../../src/styles'));
app.use(express.static('/../../src/scripts'));
app.use(express.static('/../../src/images'));

router.get('/', (req, res, next) => {
	res.render('index', {
		title:'Landing Page',
	});
});