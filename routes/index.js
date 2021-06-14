var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Staffomatic Widget' });
});

router.post('/', (req, res) => {
  console.log("?");
  let params = {
    url : `https://api.staffomaticapp.com/v3`,
    lookup_token : "MF7FXPqcrBQENtmQoUnE"
  }
  //let url = `https://api.staffomaticapp.com/v3`;
  //let lookup_token = "MF7FXPqcrBQENtmQoUnE";

  axios
  .post('https://api.staffomaticapp.com/v3', {
    email : "CameronSTaljaard@gmail.com",
    lookup_token : "MF7FXPqcrBQENtmQoUnE"
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`);
    //console.log(res);
    res.send(res.response.data);
  })
  .catch(error => {
    console.error(error.response.data);
    res.send(error.response.data);
  })
});

module.exports = router;
