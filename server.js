var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(8000, function () {
  console.log("REST API listening on ", JSON.stringify(server.address()))
});

app.get('/', function (req, res) {
  console.log('Server received GET')
  res.sendStatus(200);
})

app.use('/public', express.static('static'));

app.use( bodyParser.json() );                        // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: true}) );  // to support URL-encoded bodies
app.post('/formHandler', function(req, res) {
  console.log( 'Form Submit Value = ' + req.body.fieldA );
  res.sendStatus(200);
})

var myObj = {
  name: 'John Doe',
  age: 21,
  interest: ['Chess', 'Music', 'Tennis']
}
app.get('/data', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send( JSON.stringify(myObj) );
})
