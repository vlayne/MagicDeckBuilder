
var mysql = require('mysql');
const request = require('request');
let cardModel = require('./models/card.model');
const express = require('express')
const app = express()

var cards = require('./cards-magic.json')


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "magicdeckbuilder"
});

let values = [];

for (i=0; i<1000;i++){  
    cards[i]['name'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    if(cards[i]['image_uris.normal']){
    cards[i]['image_uris.normal'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(cards[i]['mana_cost']){
    cards[i]['mana_cost'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(cards[i]['colors'] && cards[i]['colors'][0]){
    cards[i]['colors'][0].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    cards[i]['type_line'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    cards[i]['rarity'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    cards[i]['set'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    
    values.push([cards[i]['name'],cards[i]['image_uris.normal'],
    cards[i]['mana_cost'],cards[i]['colors'] ? cards[i]['colors'][0] : null,cards[i]['type_line'],
    cards[i]['rarity'],cards[i]['set']]);
}

con.query("INSERT INTO card (nom,imageUrl,manaCost,color,type,rareté,extension) VALUES ?",[values], function(err,result,fields) {
  if(err) throw err;
});



app.get('/', function (req, res) {
  res.send(values);
});

app.listen(3000, function () {
})
// On ajout ensuite toutes les cartes récupérées à notre BDD

