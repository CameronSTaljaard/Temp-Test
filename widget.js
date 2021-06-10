const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

// App engine
app.use(express.static(__dirname + '/public'));

app.listen(PORT,() => console.log(`Server is running on ${ PORT }`));
