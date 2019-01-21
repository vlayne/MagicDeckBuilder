
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

for (i=0; i<cards.length;i++){  

  let set = cards[i]['set']; let name = cards[i]['name'];

  if(set === "grn" || set === "dom" || set === "xln" || set === "rix" || set === "m19") {

    let image = cards[i]['image_uris'];
    let color = cards[i]['colors']; let mana = cards[i]['mana_cost'];
    let type = cards[i]['type_line']; let rarity = cards[i]['rarity'];

    name.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    if(image){
    image['normal'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(mana){
    mana.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(color && color[0]){
    color[0].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    type.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    rarity.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    set.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    
    values.push([null,name,cards[i]['oracle_text'],mana,color ? color[0] : 'N',type,rarity,set,image ? image['normal'] : null]);
  }
}

con.query("INSERT INTO card VALUES ?",[values], function(err,result,fields) {
  if(err) throw err;
});

app.get('/', function (req, res) {
  res.send(cards[0]);
});

app.listen(3000, function () {
})

