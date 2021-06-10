const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// App engine
app.use(express.static(__dirname + '/public'));
app.use(express.static('./src/styles'));
app.use(express.static('./src/images'));
app.use(express.static('./src/scripts'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handlers
//router.get('/', function (req, res) {
//  res.render('index');
//});

app.listen(PORT,() => console.log(`Server is running on ${ PORT }`));
