const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const cors = require('cors');
const indexRoute = require ('./routes/cards');
const indexRoute2 = require ('./routes/users');


// Config for request to api
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var originsWhitelist = [
    'http://localhost:4200',
    'http://www.magic_deck_builder_youness_nady.com'
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
}
app.use(cors(corsOptions));
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });

app.use('/user', indexRoute2);
app.use('/cards', indexRoute);
// console.log('prod env', process.env);

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.listen(3000);