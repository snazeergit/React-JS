var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//query params, path params, req headers and req body are the 4 ways to pass the data to the server
//users.js is added to app.js with path users hence we use users as part of our url

//http:localhost:2020/users/queryparams?name=sachin&loc=Mumbai
router.get("/queryparams", function (req, res, next) {
  var name = req.query.name;
  var loc = req.query.loc;
  res.send(`<h1>Hello, my name is ${name} and I'm from ${loc}.</h1>`)
})

//http:localhost:2020/users/pathparams/Sachin/Mumbai
router.get("/pathparams/:name/:loc", function (req, res, next) {
  var name = req.params.name;
  var loc = req.params.loc;
  res.send(`<h1>Hello, my name is ${name} and I'm from ${loc}.</h1>`)
})

/*http:localhost:2020/users/reqheaders include headers like name=Sachin loc=Mumbai 
in any rest clients like Postman, Advanced REST Client or SoapUI. 
POST methods also works here */
//router.post("/reqheaders", function (req, res, next) {
router.get("/reqheaders", function (req, res, next) {
  var name = req.headers.name;
  var loc = req.headers.loc;
  res.send(`<h1>Hello, my name is ${name} and I'm from ${loc}.</h1>`)
})

//http:localhost:2020/users/reqbody
router.post("/reqbody", function (req, res, next) {
  var name = req.body.name;
  var loc = req.body.loc;
  res.send(`<h1>Hello, my name is ${name} and I'm from ${loc}.</h1>`)
})

module.exports = router;
