const express = require('express');
const database = require('./database');
const bcrypt = require('bcrypt-nodejs')
const app = express();
const connexion = database.connect();

connexion.query('SELECT pseudonyme from travel_with_symbiosis.utilisateur', function(err,rows,fields){
    if(err) throw err;
    console.log('pseudo : ', rows[0]);
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.listen(80);