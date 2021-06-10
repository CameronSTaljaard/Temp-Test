const express = require('express')
const app = express()
var router = express.Router();
const PORT = process.env.PORT || 5000
const manifestFile = require("./public/manifest.json");

// App engine
app.set('view engine', 'pug');
app.use(express.static('./src/styles'));
app.use(express.static('./src/images'));
app.use(express.static('./src/scripts'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App routes
const landingPage = require('./api/routes/index');

// Route handlers
//router.get('/', function (req, res) {
//  res.render('index');
//});

router.get('/', (req, res, next) => {
	res.render('index', {
		title:'Landing Page',
	});
});

router.get('/manifest.json', (req, res, next) => {
	res.json(manifestFile);
});

app.use('/', router);

app.listen(PORT,() => console.log(`Server is running on ${ PORT }`));
