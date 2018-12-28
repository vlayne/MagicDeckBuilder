var express = require('express');
var database = require('./database');
var app = express();
// var connection = dbconnect.connection;
var connexion = database.connect();

connexion.query('SELECT pseudonyme from travel_with_symbiosis.utilisateur', function(err,rows,fields){
    if(err) throw err;
    console.log('pseudo : ', rows[0]);
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.get('/connection', function(req,res){
    req.body()
});
app.listen(80);