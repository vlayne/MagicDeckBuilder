
/*
 l'api permet de récupérer seulement 100 cartes, le but de ce script est de remplir ma BDD de toutes les cartes de l'api
*/
var mysql = require('mysql');
const request = require('request');
const mtgSdk = require('mtgsdk');
let cards = [];
let cardsLeft = true;

let pageNumber = 1; 
let countCards = 0;

while(cardsLeft) {

  request('https://api.magicthegathering.io/v1/cards?page='+ pageNumber,{ json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      if(body){
      countCards+= body.length;
      cards.push(body);
      } else {
          cardsLeft = false;
      }
  });
  // mtgSdk.card.where({ page: pageNumber}).then(apiCards => {

  //   console.log('countCards', countCards);
  // });
  pageNumber++;
  // if(pageNumber>1){
  //   cardsLeft = false;
  // }
} 

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(countCards);
});

app.listen(3000, function () {
})
// On ajout ensuite toutes les cartes récupérées à notre BDD

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "27rebirth07",
//   database: "magicdeckbuilder"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO cards (name, address) VALUES ?";
//     var values = [
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });
// });

