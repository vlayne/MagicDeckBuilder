const express = require('express');
const database = require('./database');
const bcrypt = require('bcrypt-nodejs')
const bodyParser = require ('body-parser');
const app = express();
const cors = require('cors');
const users = require ('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });

app.use('/user', users);
console.log('prod env', process.env);
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.listen(3000);