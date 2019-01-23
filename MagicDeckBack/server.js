const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const cors = require('cors');
const cards = require ('./routes/cards');
const users = require ('./routes/users');
const errorHandler = require('./service/error-handler');
const jwt = require('./service/jwt');

// Config pour requêtes vers l'API
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var originsWhitelist = [
    'http://localhost:4200',
    'http://www.magic_deck_builder.com'
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

app.use(jwt());

app.use('/user', users);
app.use('/cards', cards);
// gère les erreurs de tokens
app.use(errorHandler);
// console.log('prod env', process.env);

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
});